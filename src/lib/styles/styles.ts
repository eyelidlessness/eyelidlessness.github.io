import { createRenderer } from 'fela';
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
  createComponent,
  RendererProvider,
  Style,
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

export const styled = <T extends ElementType>(
  element: T,
  style:   Style<ComponentProps<T>>
) => (
  css(style),
  createComponent(style, element as any, Object.keys)
);

export { combineRules } from 'fela';
