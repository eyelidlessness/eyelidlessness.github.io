import { ComponentChildren } from 'preact';
import {
  css,
  StylesProvider,
} from '@/lib/styles';

css.global(`
  html, body {
    background: #ccc;
  }
`);

type MainProps = JSX.IntrinsicElements['div'] & {
  readonly children?: ComponentChildren;
}

export const Main = ({ children }: MainProps) => (
  <StylesProvider>{ children }</StylesProvider>
);
