import {
  ComponentChildren,
  ElementType,
} from 'preact';
import { StylesProvider }     from '@/lib/styles';
import { FullBleedContainer } from './FullBleedContainer';

type MainProps = JSX.IntrinsicElements['div'] & {
  readonly as?:       ElementType;
  readonly children?: ComponentChildren;
}

export const Main = ({
  as = 'main',
  children,
}: MainProps) => (
  <StylesProvider>
    <FullBleedContainer as={ as }>
      { children }
    </FullBleedContainer>
  </StylesProvider>
);
