/*
 * ---------------------------------------------------------------------------
 * Some of the built-in global types are far more restrictive than need be.
 * ---------------------------------------------------------------------------
 */

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
