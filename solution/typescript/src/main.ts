import { readFileContents, buildFilePaths } from "./file";
import { summarise } from "./summarise";

async function main() {
  // Build file paths
  const filenames = ['customer_feedback.txt', 'employee_list.txt', 'sales_report_2022.txt', 'not_found.txt', 'invalid.bin'];
  // const filenames = ['customer_feedback.txt'];
  const filePaths = await buildFilePaths(filenames);

  // Get promise results and summarise file content
  const promises = filePaths.map((filePath) => readFileContents(filePath));
  const results = await Promise.allSettled(promises);
  const summary = await summarise(results);

  console.log({ summary });
}

main();
