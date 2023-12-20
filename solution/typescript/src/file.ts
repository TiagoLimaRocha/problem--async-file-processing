import { readFile, appendFile } from 'fs';
import path from 'path';
import { ValidFileExtensionEnum } from './types';
import { InvalidFilePathError } from './exception';

/**
 * Builds an array of file paths based on the given filenames and file extension.
 * @param filenames - An array of filenames.
 * @param ext - The file extension.
 * @returns A promise that resolves to an array of file paths.
 */
export async function buildFilePaths(
  filenames: string[],
): Promise<string[]> {
  const relativePath = '../../files';

  const promises = filenames.map((filename) =>
    Promise.resolve(path.join(process.cwd(), `${relativePath}/${filename}`))
  );

  return Promise.all(promises);
}

/**
 * Reads the contents of a file asynchronously.
 * @param filePath The path of the file to read.
 * @returns A promise that resolves with the contents of the file as a string.
 * @throws {InvalidFilePathError} If the file path is empty or invalid.
 * @throws {Error} If there is an error reading the file.
 */
export async function readFileContents(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Check if file path is valid
    let error: Error;
    if (!filePath) {
      error = new InvalidFilePathError('File path is required');
      traceError(error);
      reject(error);
    }

    // Check if file extension is valid
    const fileExtension = path.extname(filePath).replace('.', '');
    const validFileExtensions = Object.values(ValidFileExtensionEnum);

    if (!validFileExtensions.includes(fileExtension as ValidFileExtensionEnum)) {
      error = new InvalidFilePathError('File extension is invalid');
      traceError(error);
      reject(error);
    }

    // Read file contents
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        traceError(err);
        reject(err);
      }
      resolve(data);
    });
  })
}

/**
 * Writes the error message to the 'error.log' file.
 * @param error - The error object.
 * @returns A promise that resolves when the error message is written successfully, or rejects with an error if there was a problem.
 */
export async function traceError(error: Error): Promise<void> {
  const filePath = (await buildFilePaths(['error.log']))[0];
  return new Promise((resolve, reject) => {
    appendFile(filePath, `${error.message}\n`, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
