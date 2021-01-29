import {
  combineRules,
  createRenderer,

  IRenderer,
  TRule,
  TRuleProps,
} from 'fela';
import createIdentifier   from 'fela-identifier';
import pluginEmbedded     from 'fela-plugin-embedded';
// @ts-ignore
import pluginSelectors    from 'fela-plugin-multiple-selectors';
import pluginTypescript   from 'fela-plugin-typescript';
import { renderToString } from 'fela-tools';
import {
  ComponentChildren,
  ComponentProps,
  ElementType,
  h,
} from 'preact';
import {
  connect,
  createComponent,
  FelaComponent,
  RendererProvider,
  Style,
  useFela,
} from 'preact-fela';
import hashed             from './hashed';

export const identifier = createIdentifier();

const devMode = import.meta.env?.MODE === 'development';

export const renderer = createRenderer({
  devMode,
  enhancers: [
    identifier,
    hashed(),
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

type StyledComponent<P> =
  & ElementType<P>
  & { readonly [styles]: readonly Style<P>[] }
  // & { readonly [styledComponentRule]: TRule<ComponentProps<T>> };

const isStyledComponent = <P>(
  Component: ElementType<P>
): Component is StyledComponent<P> => (
  typeof Component === 'function' &&
  Array.isArray((Component as StyledComponent<P>)[styles])
);

interface StyleableProps {
  className?: string;
}

export const styled = <T extends ElementType<StyleableProps>>(
  Component: T,
  style:     Style<ComponentProps<T>>
)/* : StyledComponent<T> */ => {
  // css(style);

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

  // const newRule: TRule<ComponentProps<T>> = (
  //   props:    ComponentProps<T>,
  //   renderer: IRenderer
  // ) => (
  //   typeof style === 'function'
  //     ? style(props, renderer)
  //     : style
  // );

  // const rule = typeof currentRule === 'function'
  //   ? combineRules(currentRule, newRule)
  //   : newRule;
  const allStyles = [ ...currentStyles, style ];

  // console.trace('rule', rule({}, renderer));
  // css(rule);

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

  const StyledComponent = ({ children, ...rest }: ComponentProps<T> & { children?: any }) => (
    // @ts-ignore
    h(BaseComponent, {
      ...rest,
      as: Component,
    }, ...toArray(children))
  );

  return Object.assign(StyledComponent, {
    [styles]: allStyles,
  });

  // if (typeof Component === 'string') {
  //   return Object.assign(createComponent(
  //     rule,
  //     Component,
  //     Object.keys,
  //   ), {
  //     [styles]: allStyles,
  //   });
  // }


  // return Object.assign((props: ComponentProps<T>) => (
  //   // <FelaComponent style={ rule } { ...props } />
  //   h(FelaComponent, {
  //     as:    Component,
  //     style: rule,
  //     ...props,
  //   })
  // ), { [styles]: allStyles });


  // const className = allStyles.map(css).join(' ');

  // const className = css(rule);

  // return Object.assign((props: ComponentProps<T>) => {
  //   // const { css } = useFela(style);

  //   const { children, ...rest } = props as any;
  //   // const className = renderer.renderRule(rule, props);
  //   // const className = css(rule(props, renderer));

  //   return h<ComponentProps<T>>(Component as any, {
  //     ...rest,
  //     className,
  //   }, children);
  // }, {
  //   [styles]: allStyles,
  // });

  // return createComponent(rule, Component as any, Object.keys);
};

export { combineRules };
