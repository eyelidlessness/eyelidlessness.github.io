import { ComponentProps }     from 'preact';
import {
  styled,
  StylesProvider,
} from '@/lib/styles';
import { FullBleedContainer } from './FullBleed';
import { SiteHeader }         from './Site';

type MainProps =
  & ComponentProps<typeof FullBleedContainer>
  & { readonly isListing?: boolean; };

const BaseMain = styled<MainProps>(FullBleedContainer, ({
  isListing,
}) => ({
  marginTop:     isListing ? 0 : '1rem',
  paddingBottom: '4em',
}));

export const Main = (props: MainProps) => (
  <StylesProvider>
    <SiteHeader />
    <BaseMain as="main" { ...props } />
  </StylesProvider>
);
