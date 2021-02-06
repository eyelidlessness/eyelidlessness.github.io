/*
 * ---------------------------------------------------------------------------
 * Some of the built-in global types are far more restrictive than need be.
 * ---------------------------------------------------------------------------
 */

type ArrayType<T extends ReadonlyArray<any>> =
  T extends Array<infer U>
    ? U
  : T extends ReadonlyArray<infer U>
    ? U
  : never;

type Entries<T> = ReadonlyArray<{
  [K in keyof T]-?: readonly [ key: K, value: T[K] ];
}[keyof T]>;

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

type SetType<T extends ReadonlySet<any> | Set<any>> =
  T extends Set<infer U>
    ? U
  : T extends ReadonlySet<infer U>
    ? U
  : never;

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
