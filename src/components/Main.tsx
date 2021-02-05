import {
  ComponentChildren,
  ElementType,
} from 'preact';
import {
  styled,
  StylesProvider,
} from '@/lib/styles';
import { FullBleedContainer } from './FullBleedContainer';
import { SiteHeader }         from './Site';

type MainProps = JSX.IntrinsicElements['div'] & {
  readonly as?:       ElementType;
  readonly children?: ComponentChildren;
}

const BaseMain = styled(FullBleedContainer, {
  paddingBottom: '4em',
});

export const Main = ({
  as = 'main',
  children,
}: MainProps) => (
  <StylesProvider>
    <SiteHeader />
    <BaseMain as={ as }>
      { children }
    </BaseMain>
  </StylesProvider>
);
