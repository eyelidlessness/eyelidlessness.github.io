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

type MainProps =
  & ComponentProps<typeof FullBleedContainer>
  & { readonly redirect?: string };

export const Main = ({
  redirect,
  ...props
}: MainProps) => (
  <StylesProvider>
    { redirect == null
      ? (<>
        <SiteHeader />
        <BaseMain as="main" { ...props } />
      </>)
      : <></> }
  </StylesProvider>
);
