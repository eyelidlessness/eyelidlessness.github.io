/*
 * ---------------------------------------------------------------------------
 * Some of the built-in global types are far more restrictive than need be, or
 * apparently not provided.
 * ---------------------------------------------------------------------------
 */

interface ObjectConstructor {
	entries<T>(o: T): Entries<T>;

	fromEntries<K extends PropertyKey, T>(entries: Iterable<readonly [K, T]>): Record<K, T>;
}

// TODO: This should probably be readonly first, if it even needs to account for
// that? I don't think it actually does though.
// prettier-ignore
type RecordType<T extends Readonly<Record<unknown, unknown>>> =
	T extends Record<unknown, infer V>
		? V
  : T extends Readonly<Record<unknown, infer V>>
    ? V
    : never;

interface Set<T> {
	has<V>(this: Set<T>, value: V): value is Extract<V & T, T>;
}

type TemplateTag<T> = (
	strings: TemplateStringsArray,
	...expressions: readonly unknown[]
) => T;

/*
 * ---------------------------------------------------------------------------
 * Some useful utility types
 * ---------------------------------------------------------------------------
 */

type ArrayType<T extends readonly unknown[]> =
	T extends Array<infer U> ? U : T extends ReadonlyArray<infer U> ? U : never;

type AtomicObject =
	// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
	| Function
	| Map<unknown, unknown>
	| WeakMap<unknown, unknown>
	| Set<unknown>
	| WeakSet<unknown>
	| Promise<unknown>
	| Date
	| RegExp
	| Boolean // eslint-disable-line @typescript-eslint/no-wrapper-object-types
	| Number // eslint-disable-line @typescript-eslint/no-wrapper-object-types
	| String; // eslint-disable-line @typescript-eslint/no-wrapper-object-types

type Entries<T> = ReadonlyArray<
	{
		[K in keyof T]-?: readonly [key: K, value: T[K]];
	}[keyof T]
>;

type Equals<T, S> = [T] extends [S] ? ([S] extends [T] ? true : false) : false;

type Identity<T> = T;

type ImmutableArray<T extends readonly unknown[]> = {
	[P in Extract<keyof T, number>]: ReadonlyArray<Immutable<T[number]>>;
}[Extract<keyof T, number>];

type ImmutableTuple<T extends readonly unknown[]> = {
	readonly [P in keyof T]: Immutable<T[P]>;
};

type Immutable<T> = T extends object
	? T extends AtomicObject
		? T
		: T extends readonly unknown[]
			? Array<T[number]> extends T
				? ImmutableArray<T>
				: ImmutableTuple<T>
			: { readonly [P in keyof T]: Immutable<T[P]> }
	: T;

type KnownKeys<T> = {
	[K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends { [_ in keyof T]: infer U }
	? U
	: never;

type Merge<T> = Identity<{
	[K in keyof T]: T[K];
}>;

type PromiseType<T> = T extends Promise<infer U> ? U : T;

// prettier-ignore
type SetType<T extends ReadonlySet<unknown> | Set<unknown>> =
	T extends Set<infer U>
    ? U
  : T extends ReadonlySet<infer U>
    ? U
    : never;

// prettier-ignore
type Primitive =
  | bigint
  | boolean
  | number
  | string
  | symbol
  | null
  | undefined;

/*
 * ---------------------------------------------------------------------------
 * Microsite auto-imports the requisite Preact stuff. Declare these "global"
 * for the benefit of TypeScript.
 * ---------------------------------------------------------------------------
 */

const h: H;
const Fragment: typeof import('preact').Fragment;

namespace JSX {
	import { JSX as PreactJSX } from 'preact';

	export = PreactJSX;
}

/*
 * ---------------------------------------------------------------------------
 * This is a Snowpack-ism.
 * ---------------------------------------------------------------------------
 */

interface ImportMeta {
	readonly env?: Readonly<Record<PropertyKey, unknown>>;
}
