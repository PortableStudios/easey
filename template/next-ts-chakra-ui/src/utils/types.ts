export type Dictionary<T> = { [key: string]: T | undefined };

export const assertNever = (x: never): never => {
  throw new Error(`Unexpected object: ${x}`);
};
