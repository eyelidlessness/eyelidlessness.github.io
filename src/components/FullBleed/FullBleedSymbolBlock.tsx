import {
  ComponentChildren,
  ComponentProps,
  ComponentType,
} from 'preact';
import { styled }             from '@/lib/styles';
import { FullBleedContainer } from './FullBleedContainer';

const BaseOuterContainer = styled(FullBleedContainer, {
  margin:   '1rem 0 2rem',
  maxWidth: '100%',
  padding:  0,
  width:    'auto',
});

const BaseInnerContainer = styled('div', {
  paddingLeft: '1rem',
});

const Symbol = styled('div', {
  flexGrow:   0,
  fontSize:   '9em',
  gridColumn: '2',
  height:     0,
  lineHeight: '3.5rem',
  overflow:   'visible',
  textAlign:  'center',
  transform:  'rotate(-6.5deg)',
  userSelect: 'none',
  width:      '3.75rem',
});

const Content = styled('div', {
  flexGrow: 1,
  padding:  '1rem 0.75rem',
});

type ContainerElement =
  | 'address'
  | 'article'
  | 'aside'
  | 'blockquote'
  | 'details'
  | 'dialog'
  | 'div'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'header'
  | 'hgroup'
  | 'hgroup'
  | 'main'
  | 'menu'
  | 'nav'
  | 'p'
  | 'pre'
  | 'section';

interface FullBleedSymbolBlockComponentProps {
  readonly children?: ComponentChildren;
}

type FullBleedSymbolBlockComponent =
  | ContainerElement
  | ComponentType<FullBleedSymbolBlockComponentProps>;

type PropsOf<T extends FullBleedSymbolBlockComponent> =
  T extends ContainerElement ?
    JSX.IntrinsicElements[T] :
  JSX.LibraryManagedAttributes<T, ComponentProps<T>>;

interface FullBleedSymbolBlockProps<
  O extends FullBleedSymbolBlockComponent,
  I extends FullBleedSymbolBlockComponent,
  C extends FullBleedSymbolBlockComponent,
  S extends FullBleedSymbolBlockComponent
> {
  children?:            ComponentChildren;
  ContentContainer?:    C;
  InnerContainer?:      I;
  OuterContainer?:      O;
  outerContainerProps?: Omit<PropsOf<O>, 'children'>;
  symbol:               string;
  SymbolContainer?:     S;
}

const FullBleedSymbolBlockDiv: FullBleedSymbolBlockComponent = 'div';

const defaultProps = {
  ContentContainer: FullBleedSymbolBlockDiv,
  InnerContainer:   BaseInnerContainer,
  OuterContainer:   FullBleedSymbolBlockDiv,
  SymbolContainer:  FullBleedSymbolBlockDiv,
} as const;

type PropsWithDefaults =
  & Omit<
    FullBleedSymbolBlockProps<any, any, any, any>,
    (
      | 'ContentContainer'
      | 'InnerContainer'
      | 'OuterContainer'
      | 'SymbolContainer'
    )
  >
  & Required<
    Pick<
      FullBleedSymbolBlockProps<any, any, any, any>,
      (
        | 'ContentContainer'
        | 'InnerContainer'
        | 'OuterContainer'
        | 'SymbolContainer'
      )
    >
  >;

export const FullBleedSymbolBlock = <
  O extends FullBleedSymbolBlockComponent,
  I extends FullBleedSymbolBlockComponent,
  C extends FullBleedSymbolBlockComponent,
  S extends FullBleedSymbolBlockComponent
>(props: FullBleedSymbolBlockProps<O, I, C, S>) => {
  const {
    children,
    ContentContainer,
    InnerContainer,
    OuterContainer,
    outerContainerProps,
    symbol,
    SymbolContainer,
  } = {
    ...defaultProps,
    ...props,
  } as PropsWithDefaults;

  return (
    <BaseOuterContainer as={ OuterContainer } { ...outerContainerProps }>
      <Symbol as={ SymbolContainer } role="presentation">
        { symbol }
      </Symbol>
      <BaseInnerContainer as={ InnerContainer }>
        <Content as={ ContentContainer }>{ children }</Content>
      </BaseInnerContainer>
    </BaseOuterContainer>
  );
};
