import {
  ComponentProps,
  ComponentType,
  VNode,
} from 'preact';
import { styled }             from '@/lib/styles';
import { FullBleedContainer } from './FullBleedContainer';

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

type FullBleedSymbolBlockComponent =
  | ContainerElement
  | ComponentType;

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
  children?:            VNode;
  ContentContainer?:    C;
  InnerContainer?:      I;
  OuterContainer?:      O;
  outerContainerProps?: Omit<PropsOf<O>, 'children'>;
  symbol:               string;
  SymbolContainer?:     S;
}

const BaseOuterContainer = styled(FullBleedContainer, {
  margin:   '1rem 0 2rem',
  maxWidth: '100%',
  padding:  0,
  width:    'auto',
});

const BaseInnerContainer = styled('div', {
  alignContent: 'flex-start',
  alignItems:   'flex-start',
  display:      'flex',
  gridColumn:   '2 / 5',
});

const Symbol = styled('div', {
  flexGrow:   0,
  fontSize:   '9em',
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

const FullBleedSymbolBlock = <
  O extends FullBleedSymbolBlockComponent,
  I extends FullBleedSymbolBlockComponent,
  C extends FullBleedSymbolBlockComponent,
  S extends FullBleedSymbolBlockComponent
>(props: FullBleedSymbolBlockProps<O, I, C, S>) => {
  const {
    children,
    ContentContainer    = 'div',
    InnerContainer      = BaseInnerContainer,
    OuterContainer      = 'div',
    outerContainerProps = {},
    symbol,
    SymbolContainer    = 'div',
  } = props;

  return (
    <BaseOuterContainer
      as={ OuterContainer }
      { ...outerContainerProps }
    >
      <BaseInnerContainer as={ InnerContainer }>
        <Symbol as={ SymbolContainer } role="presentation">
          { symbol }
        </Symbol>
        <Content as={ ContentContainer }>{ children }</Content>
      </BaseInnerContainer>
    </BaseOuterContainer>
  );
};

export default FullBleedSymbolBlock;
