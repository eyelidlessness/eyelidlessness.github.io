import {
  combineRules,
  createRenderer,
  IStyle,
  TRule,
  TRuleProps,
} from 'fela';
import { renderToString } from 'fela-tools';
import module             from 'module';
import {
  ComponentChildren,
  ComponentProps,
  ElementType,
  h,
} from 'preact';
import {
  createComponent,
  RendererProvider,
  Style,
} from 'preact-fela';
import hashed             from './hashed';

const _require = module.createRequire(import.meta.url);

const { default: createIdentifier } = _require('fela-identifier');
const { default: pluginEmbedded }   = _require('fela-plugin-embedded');
const { default: pluginSelectors }  = _require('fela-plugin-multiple-selectors');

/** @type {import('fela-plugin-typescript')} */
const { default: pluginTypescript } = _require('fela-plugin-typescript');

const devMode = import.meta.env?.MODE === 'development';

export const identifier = createIdentifier();

export const renderer = createRenderer({
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

let currentStyles: string | null = null;

if (
  !devMode &&
  (
    // import.meta.url.endsWith('/src/lib/styles/styles.js') ||
    import.meta.url.endsWith('/.microsite/staging/src/lib/styles/styles.js')
  )
) {
  renderer.subscribe(async () => {
    currentStyles = renderToString(renderer);
  });
}

export const writeCurrentStyles = async () => {
  if (!devMode && currentStyles != null) {
    const fs = await import(`${'fs'}`);
    const path = await import(`${'path'}`);

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

export const StylesProvider = ({ children }: StylesProviderProps) => (
  h(RendererProvider, { renderer }, ...toArray(children))
);

const identity = <T>(value: T) => value;

const baseCSS = <T>(value: T) => (
  renderer.renderRule(identity, value)
);

export const css = Object.assign(baseCSS, {
  global: renderer.renderStatic.bind(renderer) as typeof renderer.renderStatic,
});

// const styledComponentRule = Symbol('rule');
const styles = Symbol('styles');

export type StyledComponent<P> =
  & ElementType<P>
  & { readonly [styles]: readonly Style<P>[] };

const isStyledComponent = <P>(
  Component: ElementType<P>
): Component is StyledComponent<P> => (
  typeof Component === 'function' &&
  Array.isArray((Component as StyledComponent<P>)[styles])
);

interface StyleableProps {
  className?: string;
}

interface StyledProps {
  as?:       ElementType;
  children?: any;
}

export const styled = <T extends ElementType<StyleableProps>>(
  Component: T,
  style:     Style<ComponentProps<T>>
) => {
  const currentStyles: ReadonlyArray<Style<ComponentProps<T>>> = (
    isStyledComponent(Component)
      ? Component[styles]
      : []
  );
  const currentRules = currentStyles.map((style) => (
    typeof style === 'function'
      ? style
      : () => style
  ));

  const rules = [ ...currentRules, () => style ];
  const rule = combineRules(...rules as Array<TRule<TRuleProps>>);

  const allStyles = [ ...currentStyles, style ];

  const InnerComponent: keyof JSX.IntrinsicElements = (
    typeof Component === 'string'
      ? Component as keyof JSX.IntrinsicElements
      : 'div'
  );

  const BaseComponent = createComponent(rule, InnerComponent, Object.keys);

  const toArray = (value: unknown) => (
    Array.isArray(value)
      ? value
      : [ value ]
  );

  const StyledComponent = ({
    as = Component,
    children,
    ...rest
  }: Omit<ComponentProps<T>, keyof StyledProps> & StyledProps) => (
    // @ts-ignore
    h(BaseComponent, {
      ...rest,
      as,
    }, ...toArray(children))
  );

  return Object.assign(StyledComponent, {
    [styles]: allStyles,
  });
};

export { combineRules };
export type { IStyle };
