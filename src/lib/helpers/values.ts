export const identity = <T>(value: T): T => value;

export type UnknownObject = Readonly<Record<string, unknown>>;

export const isUnknownObject = (value: unknown): value is UnknownObject => {
	return typeof value === 'object' && value != null;
};
