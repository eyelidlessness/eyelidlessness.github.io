import {
  combineRules,
  createRenderer as baseCreateRenderer,
  IRenderer,
  IStyle,
} from 'fela';
import { renderToString } from 'fela-tools';
import module             from 'module';
import {
  ComponentChildren,
  ComponentType,
  ElementType,
  h,
} from 'preact';
import {
  createComponent,
  RendererProvider,
  Style,
} from 'preact-fela';
import { identity }       from '../helpers/values.js';
import hashed             from './hashed.js';

export type StyleableIntrinsicElements = JSX.IntrinsicElements;
export type StyleableIntrinsicElement = keyof JSX.IntrinsicElements;
export type AnyStyleableIntrinsicElement = StyleableIntrinsicElements[
  StyleableIntrinsicElement
];
export type StyleableClassName = AnyStyleableIntrinsicElement['className'];

const _require = module.createRequire(import.meta.url);

const { default: createIdentifier } = _require('fela-identifier');
const { default: pluginEmbedded }   = _require('fela-plugin-embedded');
const { default: pluginSelectors }  = _require('fela-plugin-multiple-selectors');

/** @type {import('fela-plugin-typescript')} */
const { default: pluginTypescript } = _require('fela-plugin-typescript');

const devMode = import.meta.env?.MODE === 'development';

export const createRenderer = () => {
  const identifier = createIdentifier();

  const renderer = baseCreateRenderer({
    devMode,
    enhancers: [
      hashed(),
      identifier,
    ],
    plugins: [
      pluginEmbedded(),
      pluginSelectors(),
      pluginTypescript(),
    ],
  });

  return {
    identifier,
    renderer,
  };
};

export const {
  identifier,
  renderer,
} = createRenderer();

export const writeCurrentStyles = async () => {
  if (
    !devMode &&
    import.meta.url.endsWith('/.microsite/staging/src/lib/styles/styles.js')
  ) {
    const currentStyles = renderToString(renderer);
    const fs            = await import(`${'fs'}`);
    const path          = await import(`${'path'}`);

    const cssPath = path.resolve(
      path.dirname(import.meta.url.replace(/^file:/, '')),
      '../../global/index.css'
    );

    fs.writeFileSync(cssPath, currentStyles, {
      flag: 'w',
    });
  }
};

const toArray = (value: unknown) => (
  Array.isArray(value)
    ? value
  : [ value ]
);

interface StylesProviderProps {
  readonly children?: ComponentChildren;
}

export const createStylesProvider = (renderer: IRenderer) => (
  ({ children }: StylesProviderProps) => (
    h(RendererProvider, { renderer }, ...toArray(children))
  )
);

export const StylesProvider = createStylesProvider(renderer);

const baseCSS = <T extends IStyle>(value: T) => (
  renderer.renderRule(identity, value)
);

export const css = Object.assign(baseCSS, {
  global: renderer.renderStatic.bind(renderer) as typeof renderer.renderStatic,
});

export interface StyleableProps {
  readonly className?: StyleableClassName;
}

interface BaseStyledProps extends StyleableProps {
  as?: ElementType<StyleableProps>;
}

type IntrinsicElementCastProps<As extends keyof JSX.IntrinsicElements> =
  & { readonly as: As }
  & BaseStyledProps
  & JSX.IntrinsicElements[As];

// prettier-ignore
type StyledComponentProps<P> =
  & BaseStyledProps
  & Omit<P, 'as'>;

interface StyledComponent<P> {
  <As extends keyof JSX.IntrinsicElements>(
    props: IntrinsicElementCastProps<As>
  ): JSX.Element;
  <P extends StyleableProps>(
    props: { readonly as: ComponentType<P> } & Omit<P, 'as'>
  ): JSX.Element;
  (props: StyledComponentProps<P>): JSX.Element;
}

interface Styled {
  <T extends keyof JSX.IntrinsicElements>(
    Component: T,
    style:     Style<JSX.IntrinsicElements[T]>
  ): StyledComponent<JSX.IntrinsicElements[T]>;

  <P extends StyleableProps>(
    Component: ComponentType<P>,
    style:     Style<P>
  ): StyledComponent<P>;
}

export const styled: Styled = <P extends StyleableProps>(
  Component: ElementType<P>,
  style:     Style<P>
) => {
  const rule = typeof style === 'function'
    ? style
    : () => style;

  return createComponent(rule, Component as ComponentType<P>, Object.keys) as never;
};

export { combineRules };
export type {
  IRenderer,
  IStyle,
};
