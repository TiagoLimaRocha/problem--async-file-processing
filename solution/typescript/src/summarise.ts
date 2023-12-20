import { PromiseResultStatusEnum } from "./types";

/**
 * Summarizes the fulfilled values from an array of PromiseSettledResult objects.
 * 
 * @param promiseSettledResults - An array of PromiseSettledResult objects.
 * @returns A string containing the joined fulfilled values, separated by newlines.
 */
export async function summarise(
  promiseSettledResults: PromiseSettledResult<string>[]
) {
  const values = promiseSettledResults.map((result) => {
    if (result.status === PromiseResultStatusEnum.FULFILLED) {
      return result.value;
    }
    return null;
  }).filter((value) => !!value);

  return values.join('\n');
}
