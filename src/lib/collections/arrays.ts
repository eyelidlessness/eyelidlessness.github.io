type EmptyArray<T extends readonly any[]> =
  & T
  & (
    T extends any[]
      ? []
      : readonly []
  );

export const isEmpty = <T extends readonly any[]>(
  array: T
): array is EmptyArray<T> => (
  array.length === 0
);

type SortResult = -1 | 1;

export const sortBy = <T, >(
  values:   readonly T[],
  callback: (a: T, b: T) => SortResult
) => {
  let results = values.slice();

  return results.sort(callback);
};
