import type {
	SchemaOptions,
	TLiteral,
	TObject,
	TOptional,
	TProperties,
	TReadonly,
	TUnknown,
} from '@sinclair/typebox';
import {
	Literal,
	Object,
	Optional,
	Readonly,
	Union,
	Unknown,
} from '@sinclair/typebox';

export const object = <T extends TProperties>(
	properties: T,
	options?: SchemaOptions
): TReadonly<TObject<T>> => Readonly(Object(properties, options));

type Literals<T extends readonly [string, ...string[]]> = [
	...{
		[K in keyof T]: TLiteral<T[K]>;
	},
];

const enumLiterals = <T extends readonly [string, ...string[]]>(
	enumerations: T
): Literals<T> => {
	return enumerations.map((literal) => {
		return Literal<T[number]>(literal);
	}) as Literals<T>;
};

type Enumeration<T extends readonly [string, ...string[]]> = Union<Literals<T>>;

export const enumeration = <T extends readonly [string, ...string[]]>(
	enumerations: T
): Enumeration<T> => {
	const literals: Literals<T> = enumLiterals(enumerations);

	return Union<Literals<T>>(literals);
};

export const todo = (): TOptional<TUnknown> => Optional(Unknown());

export {
	Array as array,
	Boolean as boolean,
	Integer as integer,
	Literal as literal,
	Number as number,
	Optional as optional,
	Partial as partial,
	String as string,
	Union as union,
	Unknown as unknown,
} from '@sinclair/typebox';
