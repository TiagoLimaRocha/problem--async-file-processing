export enum ValidFileExtensionEnum {
  JSON = 'json',
  TXT = 'txt',
  CSV = 'csv',
}


export enum PromiseResultStatusEnum {
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export type Promises<T> = (() => Promise<T>)[];