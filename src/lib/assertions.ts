export type Assert = (
	expression: unknown,
	message?: string
) => asserts expression;

export const assert: Assert = (expression, message = 'Assertion failed') => {
	if (!expression) {
		throw new Error(message);
	}
};

export type AssertNonNullish = <T>(
	value?: T | null,
	message?: string
) => asserts value is NonNullable<T>;

export const assertNonNullish: AssertNonNullish = (
	value,
	message = 'Assertion failed: expected non-nullish value'
) => {
	if (value == null) {
		throw new Error(message);
	}
};

type Asserted = <T>(value?: T | null, message?: string) => NonNullable<T>;

export const asserted: Asserted = (value, message) => {
	assertNonNullish(value, message);

	return value;
};
