/*
 * ---------------------------------------------------------------------------
 * Some of the built-in global types are far more restrictive than need be.
 * ---------------------------------------------------------------------------
 */

interface ObjectConstructor {
  entries<T>(o: T): Entries<T>;

  fromEntries<K extends PropertyKey, T>(
    entries: Iterable<readonly [ K, T ]>
  ): Record<K, T>;
}

type RecordType<T extends Readonly<Record<any, any>>> =
  T extends Record<any, infer V>
    ? V
  : T extends Readonly<Record<any, infer V>>
    ? V
  : never;

interface Set<T> {
  has<V>(this: Set<T>, value: V): value is Extract<V & T, T>;
}

/*
 * ---------------------------------------------------------------------------
 * Some useful utility types
 * ---------------------------------------------------------------------------
 */

type ArrayType<T extends ReadonlyArray<any>> =
  T extends Array<infer U>
    ? U
  : T extends ReadonlyArray<infer U>
    ? U
  : never;

type AtomicObject =
  | Function
  | Map<any, any>
  | WeakMap<any, any>
  | Set<any>
  | WeakSet<any>
  | Promise<any>
  | Date
  | RegExp
  | Boolean
  | Number
  | String;

type Entries<T> = ReadonlyArray<{
  [K in keyof T]-?: readonly [ key: K, value: T[K] ];
}[keyof T]>;

type Equals<T, S> =
  [T] extends [S]
    ? [S] extends [T]
      ? true
      : false
    : false;

type Identity<T> = T;

type ImmutableArray<T extends ReadonlyArray<any>> = {
  [P in Extract<keyof T, number>]: ReadonlyArray<Immutable<T[number]>>
}[Extract<keyof T, number>];

type ImmutableTuple<T extends ReadonlyArray<any>> = {
  readonly [P in keyof T]: Immutable<T[P]>
};

type Immutable<T> =
  T extends object
    ? T extends AtomicObject
      ? T
    : T extends ReadonlyArray<any>
      ? Array<T[number]> extends T
        ? ImmutableArray<T>
        : ImmutableTuple<T>
      : { readonly [P in keyof T]: Immutable<T[P]> }
    : T;

type KnownKeys<T> =
  {
    [K in keyof T]:
      string extends K
        ? never
      : number extends K
        ? never
        : K;
  } extends { [_ in keyof T]: infer U }
    ? U
    : never;

type Merge<T> = Identity<{
  [K in keyof T]: T[K];
}>;

type PromiseType<T> =
  T extends Promise<infer U>
    ? U
  : T;

type SetType<T extends ReadonlySet<any> | Set<any>> =
  T extends Set<infer U>
    ? U
  : T extends ReadonlySet<infer U>
    ? U
  : never;

type Primitive =
  | BigInt
  | boolean
  | null
  | number
  | string
  | symbol
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
  import { JSX } from 'preact';

  export = JSX;
}

/*
 * ---------------------------------------------------------------------------
 * This is a Snowpack-ism.
 * ---------------------------------------------------------------------------
 */

interface ImportMeta {
  readonly env?: Readonly<Record<PropertyKey, unknown>>;
}
