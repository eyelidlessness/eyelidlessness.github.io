import { ComponentProps }     from 'preact';
import {
  styled,
  StylesProvider,
} from '@/lib/styles';
import { FullBleedContainer } from './FullBleed';
import { SiteHeader }         from './Site';

const BaseMain = styled(FullBleedContainer, {
  paddingTop:    0,
  paddingBottom: '4em',
});

export const Main = (props: ComponentProps<typeof FullBleedContainer>) => (
  <StylesProvider>
    <SiteHeader />
    <BaseMain as="main" { ...props } />
  </StylesProvider>
);
