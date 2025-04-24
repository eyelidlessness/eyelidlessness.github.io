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
import { identity }       from '@/lib/helpers';
import hashed             from './hashed';

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

// let currentStyles: () => string = () => '';

// if (
//   !devMode &&
//   import.meta.url.endsWith('/.microsite/staging/src/lib/styles/styles.js')
// ) {
//   renderer.subscribe(async () => {
//     currentStyles = () => renderToString(renderer);
//   });
// }

export const writeCurrentStyles = async () => {
  // if (!devMode && currentStyles != null) {
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
  className?: string;
}

interface BaseStyledProps extends StyleableProps {
  as?: ElementType<StyleableProps>;
}

type StyledProps<P> =
  & BaseStyledProps
  & (
    P extends { as: infer T }
      ? T extends keyof JSX.IntrinsicElements
        ? (
          & { as: T }
          & JSX.IntrinsicElements[T]
        )
      : T extends ComponentType<infer P2>
        ? P2 extends StyleableProps
          ? (
            & { as: ComponentType<P2> }
            & Omit<P2, 'as'>
          )
          : never
        : Omit<P, 'as'>
      : Omit<P, 'as'>
    );

type StyledComponent<P> = ComponentType<
  StyledProps<P>
>;

interface Styled {
  <T extends keyof JSX.IntrinsicElements>(
    Component: T,
    style:     Style<JSX.IntrinsicElements[T]>
  ): StyledComponent<
    & JSX.IntrinsicElements[T]
  >;

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

  return createComponent(rule, Component as ComponentType<P>, Object.keys);
};

export { combineRules };
export type {
  IRenderer,
  IStyle,
};
