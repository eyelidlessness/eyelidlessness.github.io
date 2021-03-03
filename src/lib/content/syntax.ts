import {
  // twoslasher,
  TwoSlashReturn,
} from '@typescript/twoslash';
import { IStyle }           from 'fela';
import path                 from 'path';
import { VNode }            from 'preact';
import { renderToString }   from 'preact-render-to-string';
import {
  getHighlighter,
  loadTheme,
  IThemedToken,
} from 'shiki';
import {
  BUNDLED_LANGUAGES,
  Lang,
} from 'shiki-languages';
import {
  renderers,
  // runTwoSlash,
  // ShikiTwoslashSettings,
} from 'shiki-twoslash';
import visit                from 'unist-util-visit';
import { Node }             from 'unist';
import { IRawThemeSetting } from 'vscode-textmate';
import {
  css,
  styled,
  StylesProvider,
  theme,
} from '@/lib/styles';

interface RichNode extends Node {
  children:  Node[];
  lang:      Lang;
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

const allLanguages = new Set(BUNDLED_LANGUAGES.map((language) => (
  language.id
)));

const twoslashLanguages = new Set([
  'ts',
  'tsx',
  'typescript',
]);

const getTokenStyles = (token: IThemedToken): IStyle | void => (
  token.explanation?.reduce((acc, explanation) => ({
    ...acc,

    ...explanation.scopes.reduce((acc, { themeMatches }) => ({
      ...acc,

      ...themeMatches.reduce((acc, { settings }) => ({
        ...acc,
        ...getSettingStyles(settings),
      }), acc)
    }), acc)
  }), {
    color: token.color,
  })
);

const renderToken = (
  lightToken: IThemedToken,
  darkToken:  IThemedToken,
  props:      JSX.IntrinsicElements['span'] = {}
): VNode => {
  const lightStyles = getTokenStyles(lightToken);

  const baseDarkStyles = getTokenStyles(darkToken);
  const darkStyles = baseDarkStyles == null
    ? null
    : {
      nested: {
        [theme.darkMode]: baseDarkStyles,
      },
    };

  const { content } = lightToken;

  if (lightStyles == null && darkStyles == null) {
    return h('span', props, content);
  }

  const styles = {
    ...lightStyles,
    ...darkStyles,
  };

  const Component = styled('span', styles);

  return h(Component, props, content);
};

const lastLineTokenClassName = css({
  paddingRight: '1rem',
});

const lastLineProps = {
  className: lastLineTokenClassName,
};

const renderTokens = (
  lightLines: readonly IThemedToken[][],
  darkLines:  readonly IThemedToken[][]
) => (
  renderToString(
    h(StylesProvider, {},
      h('pre', {},
        h('code', {},
          ...lightLines.reduce<Array<VNode | string>>((acc, line, lineIndex) => {
            const tokens = line.map((lightToken, columnIndex) => {
              const darkToken = darkLines[lineIndex][columnIndex];

              const props = columnIndex === line.length - 1
                ? lastLineProps
                : {};

              return renderToken(lightToken, darkToken, props);
            });
            const separator = lineIndex === 0
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

const visitor = (node: RichNode) => {
  const {
    lang:  baseLanguage,
    value: baseCode,
    meta,
  } = node;
  const shouldDisableTwoslash = Boolean(process?.env?.TWOSLASH_DISABLE) || true;

  if (!shouldDisableTwoslash) {
    // runTwoSlashOnNode(settings, node);
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
    const lightLines = lightHighlighter.codeToThemedTokens(code, language);
    const darkLines  = darkHighlighter.codeToThemedTokens(code, language);

    value = renderTokens(lightLines, darkLines);
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
// const runTwoSlashOnNode = (settings: ShikiTwoslashSettings, node: RichNode) => {
//   if (node.meta?.includes('twoslash')) {
//     const results = runTwoSlash(node.value, node.lang, settings);

//     node.value    = results.code;
//     node.lang     = results.extension as Lang;
//     node.twoslash = results;
//   }
// };

export const syntaxHighlighting = () => {
  const transform = (markdownAST: any) => {
    visit(markdownAST, 'code', visitor);
  };

  return transform;
};
