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

export const indexes = (value: readonly any[]) => (
  value.map((_, index) => index)
);

type SortResult = -1 | 0 | 1;

export const sortBy = <T, >(
  values:   readonly T[],
  callback: (a: T, b: T) => SortResult
) => (
  indexes(values)
    .sort((a, b) => {
      const unstableResult = callback(values[a], values[b]);

      if (unstableResult === 0) {
        return (
          a === b
            ? 0
          : a > b
            ? 1
            : -1
        );
      }

      return unstableResult;
    })
    .map((index) => (
      values[index]
    ))
);
