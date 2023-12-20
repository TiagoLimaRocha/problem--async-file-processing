import { Promises } from './types';

/**
 * Executes an array of promises with a specified concurrency limit and returns a promise that resolves to an array of results.
 * 
 * @template T The type of the promise result.
 * @param {Promises<T>} promises An array of promises to be executed.
 * @param {number} limit The maximum number of promises to be executed concurrently.
 * @returns {Promise<T[]>} A promise that resolves to an array of results.
 */
export function promiseAllLimited<T>(
  promises: Promises<T>,
  limit: number
): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    let activePromises: number = 0,
      finishedPromises: number = 0;

    const results: T[] = [];
    const totalPromises: number = promises.length;

    function startNextPromise() {
      // Check if there are any more promises to be resolved
      if (!promises.length) {
        if (finishedPromises === totalPromises) {
          resolve(results);
        }
        return;
      }

      // Start next promise
      activePromises++;
      const promise = promises.shift()!;

      promise()
        .then((result) => {
          results.push(result);
        })
        .catch((err) => reject(err))
        .finally(() => {
          activePromises--;
          finishedPromises++;
          startNextPromise()
        });

    }

    // Start next promise batch
    for (let i = 0; i < limit && promises.length > 0; i++) {
      startNextPromise()
    }
  });
}
