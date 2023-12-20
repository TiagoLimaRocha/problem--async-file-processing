import { PromiseResultStatusEnum } from "./types";

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
