import 'preact';

declare module 'preact' {
  type CompatibleIntrinsicElement<P> = {
    [K in keyof JSX.IntrinsicElements]:
      P extends JSX.IntrinsicElements[K]
        ? K
      : never
  }[keyof JSX.IntrinsicElements];

  export type ElementType<P = {}> =
    | CompatibleIntrinsicElement<P>
    | ComponentType<P>;

  namespace JSX {
    interface HTMLAttributes<RefType extends EventTarget = EventTarget> {
      datetime?:  string;
      itemprop?:  string;
      itemscope?: boolean;
      itemtype?:  string;
      tabindex?:  number;
    }
  }
}
