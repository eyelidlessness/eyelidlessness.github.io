declare module 'buble-jsx-only' {
  interface TransformOptions {
    readonly objectAssign?: 'Object.assign';
  }

  interface Transformed {
    readonly code: string;
  }

  type Transform = (jsx: string, options: TransformOptions) => Transformed;

  export const transform: Transform;
}
