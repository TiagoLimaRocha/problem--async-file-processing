/**
 * Custom error class for file not found exceptions.
 */
export class FileNotFoundError extends Error {
  /**
   * Creates a new instance of FileNotFoundError.
   * @param message - The error message.
   */
  constructor(message: string) {
    const formattedMessage = `Error: File not found\nMessage:${message}`;

    super(formattedMessage);
    this.name = 'FileNotFoundError';
  }
}

/**
 * Custom error class for invalid file extension exceptions.
 */
export class FileExtensionError extends Error {
  /**
   * Creates a new instance of FileExtensionError.
   * @param message - The error message.
   */
  constructor(message: string) {
    const formattedMessage = `Error: File extension error\nMessage:${message}`;

    super(formattedMessage);
    this.name = 'FileExtensionError';
  }
}

/**
 * Custom error class for invalid file extension exceptions.
 */
export class InvalidFilePathError extends Error {
  /**
   * Creates a new instance of InvalidFilePathError.
   * @param message - The error message.
   */
  constructor(message: string) {
    const formattedMessage = `Error: Invalid file path error\nMessage:${message}`;

    super(formattedMessage);
    this.name = 'InvalidFilePathError';
  }
}

/**
 * Custom error class for invalid file extension exceptions.
 */
export class InvalidFileExtensionError extends Error {
  /**
   * Creates a new instance of InvalidFileExtensionError.
   * @param message - The error message.
   */
  constructor(message: string) {
    const formattedMessage = `Error: Invalid file extension error\nMessage:${message}`;

    super(formattedMessage);
    this.name = 'InvalidFileExtensionError';
  }
}

/**
 * Represents an error that occurs during file reading.
 */
export class FileReadError extends Error {
  /**
   * Creates a new instance of FileReadError.
   * @param message The error message.
   */
  constructor(message: string) {
    const formattedMessage = `Error: File read error\nMessage:${message}`;

    super(formattedMessage);
    this.name = 'FileReadError';
  }
}