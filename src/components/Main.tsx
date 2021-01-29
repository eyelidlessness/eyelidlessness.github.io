import { ComponentChildren }  from 'preact';
import { StylesProvider }     from '@/lib/styles';
import { FullBleedContainer } from './FullBleedContainer';

type MainProps = JSX.IntrinsicElements['div'] & {
  readonly children?: ComponentChildren;
}

export const Main = ({ children }: MainProps) => (
  <StylesProvider>
    <FullBleedContainer>
      { children }
    </FullBleedContainer>
  </StylesProvider>
);
