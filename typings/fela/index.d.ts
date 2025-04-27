import 'fela';

type ContainerType =
  | 'normal'
  | 'size'
  | 'inline-size'
  | 'scroll-state'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset';

type StringHint<T extends string> = T | (string & {});

declare module 'fela' {
  export interface IStyle {
    readonly containerType?: StringHint<ContainerType>;
  }
}
