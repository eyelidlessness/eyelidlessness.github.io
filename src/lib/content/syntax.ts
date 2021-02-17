import {
  // twoslasher,
  TwoSlashReturn,
} from '@typescript/twoslash';
import path                 from 'path';
import { renderToString }   from 'preact-render-to-string';
import {
  getHighlighter,
  loadTheme,
  IThemedToken,
} from 'shiki';
import { Highlighter }      from 'shiki/dist/highlighter';
import {
  commonLangAliases,
  commonLangIds,
  otherLangIds,
  TLang,
} from 'shiki-languages';
import {
  renderers,
  runTwoSlash,
  ShikiTwoslashSettings,
} from 'shiki-twoslash';
import visit                from 'unist-util-visit';
import { Node }             from 'unist';
import { IRawThemeSetting } from 'vscode-textmate';
import {
  styled,
  StylesProvider,
  theme,
} from '@/lib/styles';
import { VNode }            from 'preact';

interface RichNode extends Node {
  children:  Node[];
  lang:      TLang;
  meta?:     string[] | null;
  twoslash?: TwoSlashReturn;
  type:      string;
  value:     string;
}

const themesDir = path.resolve(process.cwd(), './syntax-themes');

const [
  darkTheme,
  lightTheme,
] = await Promise.all([
  loadTheme(path.resolve(themesDir, './yi-dark.json')),
  loadTheme(path.resolve(themesDir, './yi-light.json')),
]);

const themeStyleMapping = {
  background: 'backgroundColor',
  fontStyle:  'fontStyle',
  foreground: 'color',
} as const;

const fontStyleMapping = {
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  strikethrough: {
    textDecoration: 'strikethrough',
  },
  underline: {
    textDecoration: 'underline',
  },
} as const;

const getFontStyles = (fontStyle: string) => (
  fontStyle.trim().split(/\b\W*\b/).reduce((acc, style) => ({
    ...acc,

    ...fontStyleMapping[style as keyof typeof fontStyleMapping],
  }), {})
);

const getSettingStyles = (setting: IRawThemeSetting['settings']) => (
  Object.entries(setting).reduce((acc, [ key, value ]) => {
    const styleKey = (themeStyleMapping as Record<string, unknown>)[key];

    if (value == null || typeof styleKey !== 'string') {
      return acc;
    }

    const styles = styleKey === 'fontStyle'
      ? getFontStyles(value)
      : { [styleKey]: value };

    return {
      ...acc,
      ...styles,
    };
  }, {})
);

const [
  darkHighlighter,
  lightHighlighter,
] = await Promise.all([
  getHighlighter({ theme: darkTheme }),
  getHighlighter({ theme: lightTheme }),
]);

const allLanguages = new Set([
  ...commonLangAliases,
  ...commonLangIds,
  ...otherLangIds,
]);

const twoslashLanguages = new Set([
  'ts',
  'tsx',
  'typescript',
]);

interface ThemeMatches {
  readonly byName:  Record<string, IRawThemeSetting['settings']>;
  readonly byScope: Record<string, IRawThemeSetting['settings']>;
}

/**
 * Look at this monstrosity!
 */
const getThemeMatches = (
  code:     string,
  language: TLang
) => {
  const [
    light,
    dark,
  ] = [ lightHighlighter, darkHighlighter ].map((highlighter) => {
    const lines = highlighter.codeToThemedTokens(code, language);

    return lines.reduce<ThemeMatches>((acc, line) => (
      line.reduce((acc, token) => ({
        ...acc,

        ...token.explanation?.reduce((acc, explanation) => ({
          ...acc,

          ...explanation.scopes.reduce((acc, { themeMatches }) => ({
            ...acc,

            ...themeMatches.reduce((acc, { name, scope, settings }) => ({
              ...acc,

              byName: name == null
                ? acc.byName
                : {
                  ...acc.byName,

                  [name]: settings,
                },

              byScope: Array.isArray(scope)
                ? {
                  ...acc.byScope,

                  ...scope.reduce((acc, scope) => ({
                    ...acc,

                    [scope]: settings,
                  }), acc.byScope),
                }
              : typeof scope === 'string'
                ? {
                  ...acc.byScope,

                  [scope]: settings,
                }
                : acc.byScope,
            }), {
              ...acc,

              byName:  {
                ...acc.byName,
              },
              byScope: {
                ...acc.byScope,
              },
            })
          }), acc)
        }), acc)
      }), acc)
    ), {
      byName:  {},
      byScope: {},
    });
  }) as [ light: ThemeMatches, dark: ThemeMatches ];

  return {
    dark,
    light,
  };
};

interface RenderThemeMatches {
  readonly dark:  ThemeMatches;
  readonly light: ThemeMatches;
}

/**
 * This, too, is a monstrosity!
 */
const renderToken = (token: IThemedToken, themeMatches: RenderThemeMatches): VNode => {
  const {
    content,
    explanation,
  } = token;
  const {
    dark,
    light,
  } = themeMatches;

  const styles = explanation?.reduce((acc, explanation) => ({
    ...acc,

    ...explanation.scopes.reduce((acc, { themeMatches }) => ({
      ...acc,

      ...themeMatches.reduce((acc, {
        name,
        scope,
        // settings,
      }) => {
        const lightStyles = getSettingStyles({
          ...(name == null
            ? {}
            : light.byName[name]
          ),

          ...(Array.isArray(scope)
            ? (scope.reduce((acc, scope) => ({
              ...acc,
              ...light.byScope[scope],
            }), {}))
          : typeof scope === 'string'
            ? light.byScope[scope]
            : {}),
        });
        const darkStyles = getSettingStyles({
          ...(name == null
            ? {}
            : dark.byName[name]
          ),

          ...(Array.isArray(scope)
            ? (scope.reduce((acc, scope) => ({
              ...acc,
              ...dark.byScope[scope],
            }), {}))
          : typeof scope === 'string'
            ? dark.byScope[scope]
            : {}),
        });

        const baseStyles = {
          ...acc,

          ...lightStyles,
        };

        const nested = Object.keys(darkStyles).length > 0
          ? {
            nested: {
              [theme.darkMode]: darkStyles,
            },
          }
          : {};

        return {
          ...baseStyles,
          ...nested,
        };
      }, {})
    }), {})
  }), {}) ?? {};

  const Component = Object.keys(styles).length > 0
    ? styled('span', styles)
    : 'span';

  if (content.replace(/\s+/, '') === '' || Component == null) {
    return h('span', {}, content);
  }

  return h(Component, {}, content);
};

const renderTokens = (
  lines:        readonly IThemedToken[][],
  themeMatches: RenderThemeMatches
) => (
  renderToString(
    h(StylesProvider, {},
      h('pre', {},
        h('code', {},
          ...lines.reduce<Array<VNode | string>>((acc, line, index) => {
            const tokens = line.map((token) => renderToken(token, themeMatches));
            const separator = index === 0
              ? ''
              : '\n';

            return [
              ...acc,
              separator,
              ...tokens,
            ];
          }, [])
        )
      )
    )
  )
);

const visitor = (
  highlighter: Highlighter,
  settings:    Readonly<ShikiTwoslashSettings> = {}
) => (node: RichNode) => {
  const {
    lang:  baseLanguage,
    value: baseCode,
    meta,
  } = node;
  const shouldDisableTwoslash = !!process?.env?.TWOSLASH_DISABLE;

  if (!shouldDisableTwoslash) {
    runTwoSlashOnNode(settings, node);
  }

  // Shiki doesn't respect json5 as an input, so switch it
  // to json, which can handle comments in the syntax highlight
  const language = String(baseLanguage) === 'json5'
    ? 'json'
    : baseLanguage;

  let value: string;

  const code = baseCode.replace(/^\n+|\n+$/g, '');

  if (!allLanguages.has(language)) {
    value = renderers.plainTextRenderer(code, {});
  }
  else {
    const tokens = highlighter.codeToThemedTokens(code, language);
    const themeMatches = getThemeMatches(code, language);

    value = renderTokens(tokens, themeMatches);
  }

  if (twoslashLanguages.has(language) && !meta?.includes('ignore')) {
    // const ext = language === 'tsx'
    //   ? language
    //   : 'ts';

    // const twoslash = twoslasher(code, ext);
  }

  node.children = [];
  node.type     = 'html';
  node.value    = value;
};

/**
 * Runs twoslash across an AST node, switching out the text content, and lang
 * and adding a `twoslash` property to the node.
 */
const runTwoSlashOnNode = (settings: ShikiTwoslashSettings, node: RichNode) => {
  if (node.meta?.includes('twoslash')) {
    const results = runTwoSlash(node.value, node.lang, settings);

    node.value    = results.code;
    node.lang     = results.extension as TLang;
    node.twoslash = results;
  }
};

export const syntaxHighlighting = () => {
  const transform = (markdownAST: any) => {
    visit(markdownAST, 'code', visitor(lightHighlighter));
  };

  return transform;
};
