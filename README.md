# Problem: Asynchronous File Processing System

## Background

You are tasked with creating a system that processes a set of text files asynchronously. Each file contains several lines of data, and your job is to read these files, process their contents, and generate a summary report.

## Task

**File Reader Function**: Create an asynchronous function named readFileContents. This function should take a file path as input and return the contents of the file as a string. Handle any potential errors, such as the file not existing.

**Data Processing Function**: Write a function named processFileData that takes the contents of a file as input. This function should process the data (e.g., count the number of lines, find specific keywords, etc.) and return a processed data object.

**Report Generation**: Implement an asynchronous function generateReport that takes an array of file paths, uses readFileContents and processFileData to process each file, and then combines the results into a single summary report.

**Concurrency Control**: Ensure that the system can process multiple files concurrently, but limit the number of files being processed at the same time to avoid excessive resource usage (e.g., use a concurrency limit).

**Error Handling**: In generateReport, handle any errors that occur during file reading or processing. If an error occurs with one file, it should not stop the processing of other files.

**Types/Interfaces**: Define appropriate types or interfaces for the inputs and outputs of your functions.

## Requirements

- Use an explicitly typed language for the implementation.
- Simulate file reading with asynchronous functions (you can use the Node.js fs module or similar).
- Ensure your code is well-organized and follows best practices for readability and maintainability.

### Bonus

- Implement a feature to filter or prioritize certain files based on their names or contents.
- Write unit tests for your functions, ensuring they handle various scenarios correctly.

This exercise tests your ability to work with asynchronous operations, handle file I/O, manage concurrency, and process data effectively. It also gives you an opportunity to demonstrate your understanding of type systems, error handling, and unit testing.
