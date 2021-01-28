/**
 * This is an exact copy of the current state of the `fela-hashed`
 * module at <https://github.com/10xjs/fela-hashed/blob/f53517360009e6a0600d1b80bb30874e1bf35f96/src/index.ts>
 *
 * This is because its `"module"` entry in `package.json` doesn't
 * match its actual ESM build path. TODO: open a PR to fix upstream.
 */

declare module 'fela' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface IRenderer {
    _renderStyleToClassNames(
      style: Record<string, any>,
      pseudo: string,
      media: string,
      support: string,
    ): string;
    cache: any;
    _emitChange(
      msg:
        | ISubscribeRuleOrStaticObjectMessage
        | ISubscribeKeyframesMessage
        | ISubscribeFontFaceMessage
        | ISubscribeStaticStringMessage
        | ISubscribeClearMessage,
    ): void;
    selectorPrefix?: string;
    devMode?: boolean;
    keyframePrefixes?: string[];
  }
}

declare module 'fela-utils' {
  export function generateDeclarationReference(
    property: string,
    value: any,
    pseudo?: string,
    media?: string,
    support?: string,
  ): string;

  export function generateCombinedMediaQuery(
    currentMediaQuery: string,
    nestedMediaQuery: string,
  ): string;

  export function generateCSSSelector(
    className: string,
    pseudo: string,
  ): string;

  export function isMediaQuery(property: string): boolean;

  export function isNestedSelector(property: string): boolean;

  export function isUndefinedValue(value: any): boolean;

  export function isSupport(property: string): boolean;

  export function normalizeNestedProperty(nestedProperty: string): string;

  export function processStyleWithPlugins(
    renderer: unknown,
    style: Record<string, any>,
    type: unknown,
    props: Record<string, any>,
  ): Record<string, any>;
}

import {IRenderer} from 'fela';
import isPlainObject from 'isobject';
import {
  generateDeclarationReference,
  generateCombinedMediaQuery,
  generateCSSSelector,
  isMediaQuery,
  isNestedSelector,
  isUndefinedValue,
  isSupport,
  normalizeNestedProperty,
  processStyleWithPlugins,
  RULE_TYPE,
  KEYFRAME_TYPE,
} from 'fela-utils';
import {cssifyDeclaration, cssifyObject} from 'css-in-js-utils';
import md5 from 'md5';

function sanitize(val: string) {
  return val.replace(/[^_a-zA-Z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
}

function devClassName(
  property: string,
  value: string,
  pseudo: string,
  media: string,
  support: string,
  hash: string,
) {
  const parts = [];

  if (support) {
    parts.push(sanitize(support).slice(0, 16));
  }

  if (media) {
    parts.push(sanitize(media).slice(0, 16));
  }

  if (pseudo) {
    parts.push(sanitize(pseudo).slice(0, 16));
  }

  parts.push(sanitize(property).slice(0, 16));
  parts.push(sanitize(value).slice(0, 16));
  parts.push(hash.slice(0, 8));

  return parts.join('_');
}

function cssifyKeyframe(
  frames: Record<string, any>,
  animationName: string,
  prefixes: string[] = [''],
): string {
  let css = '';

  for (const key in frames) {
    const frame = frames[key];
    css = `${css}${key}{${cssifyObject(frame)}}`;
  }

  let cssKeyframe = '';

  for (let i = 0; i < prefixes.length; i++) {
    const prefix = prefixes[i];
    cssKeyframe = `${cssKeyframe}@${prefix}keyframes ${animationName}{${css}}`;
  }

  return cssKeyframe;
}

export default function hashed() {
  return (renderer: IRenderer) => {
    renderer.renderKeyframe = (keyframe, props) => {
      const resolvedKeyframe = keyframe(props, renderer);
      const processedKeyframe = processStyleWithPlugins(
        renderer,
        resolvedKeyframe,
        KEYFRAME_TYPE,
        props,
      );

      const keyframeReference = JSON.stringify(processedKeyframe);

      // eslint-disable-next-line no-prototype-builtins
      if (!renderer.cache.hasOwnProperty(keyframeReference)) {
        const hash = md5(keyframeReference);

        const animationName =
          (renderer.selectorPrefix || '_') + hash.slice(0, 8);

        const cssKeyframe = cssifyKeyframe(
          processedKeyframe,
          animationName,
          renderer.keyframePrefixes,
        );

        const change = {
          type: KEYFRAME_TYPE,
          keyframe: cssKeyframe,
          name: animationName,
        };

        renderer.cache[keyframeReference] = change;
        renderer._emitChange(change);
      }

      return renderer.cache[keyframeReference].name;
    };

    renderer._renderStyleToClassNames = (
      {_className, ...style}: Record<string, any>,
      pseudo: string = '',
      media: string = '',
      support: string = '',
    ) => {
      let classNames = _className ? ` ${_className}` : '';

      for (const property in style) {
        const value = style[property];

        if (isPlainObject(value)) {
          if (isNestedSelector(property)) {
            classNames += renderer._renderStyleToClassNames(
              value,
              pseudo + normalizeNestedProperty(property),
              media,
              support,
            );
          } else if (isMediaQuery(property)) {
            const combinedMediaQuery = generateCombinedMediaQuery(
              media,
              property.slice(6).trim(),
            );
            classNames += renderer._renderStyleToClassNames(
              value,
              pseudo,
              combinedMediaQuery,
              support,
            );
          } else if (isSupport(property)) {
            const combinedSupport = generateCombinedMediaQuery(
              support,
              property.slice(9).trim(),
            );
            classNames += renderer._renderStyleToClassNames(
              value,
              pseudo,
              media,
              combinedSupport,
            );
          } else {
            console.warn(`The object key "${property}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);
          }
        } else {
          const declarationReference = generateDeclarationReference(
            property,
            value,
            pseudo,
            media,
            support,
          );

          // eslint-disable-next-line no-prototype-builtins
          if (!renderer.cache.hasOwnProperty(declarationReference)) {
            // we remove undefined values to enable
            // usage of optional props without side-effects
            if (isUndefinedValue(value)) {
              renderer.cache[declarationReference] = {
                className: '',
              };
              /* eslint-disable no-continue */
              continue;
              /* eslint-enable */
            }

            const declaration = cssifyDeclaration(property, value);

            const hash = md5(declarationReference);

            const className = renderer.devMode
              ? devClassName(property, value, pseudo, media, support, hash)
              : (renderer.selectorPrefix || '_') + hash.slice(0, 8);

            const selector = generateCSSSelector(className, pseudo);

            const change = {
              type: RULE_TYPE,
              className,
              selector,
              declaration,
              pseudo,
              media,
              support,
            };

            renderer.cache[declarationReference] = change;
            renderer._emitChange(change);
          }

          const cachedClassName =
            renderer.cache[declarationReference].className;

          // only append if we got a class cached
          if (cachedClassName) {
            classNames += ` ${cachedClassName}`;
          }
        }
      }

      return classNames;
    };
    return renderer;
  };
}
