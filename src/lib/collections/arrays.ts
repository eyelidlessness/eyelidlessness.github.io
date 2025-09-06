import { asserted } from '../assertions.js';

type EmptyArray<T extends readonly unknown[]> = T &
	(T extends unknown[] ? [] : readonly []);

export const isEmpty = <T extends readonly unknown[]>(
	array: T
): array is EmptyArray<T> => array.length === 0;

export const indexes = (value: readonly unknown[]): readonly number[] =>
	value.map((_, index) => index);

type SortResult = -1 | 0 | 1;

export const sortBy = <T>(
	values: readonly T[],
	callback: (a: T, b: T) => SortResult
): readonly T[] => {
	return indexes(values)
		.toSorted((a, b) => {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const unstableResult = callback(values[a]!, values[b]!);

			if (unstableResult === 0) {
				if (a === b) {
					return 0;
				}

				return a > b ? 1 : -1;
			}

			return unstableResult;
		})
		.map((index) => asserted(values[index]));
};
