import {
  DEFAULT_TOPIC,
  Topic,
} from '@/lib/content';
import { css } from './styles';

const vwRatio = 2;

const baseFontSizeRange = {
  minEm:   1.0625,
  fluidVw: 1.0625 * vwRatio,
  maxEm:   1.325,
} as const;

const darkMode = '@media (prefers-color-scheme: dark)' as const;

const headingElements = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
] as const;

const listElements = [
  'dd',
  'dl',
  'dt',
  'li',
  'ol',
  'ul',
] as const;

// const semanticBlockElements = [
//   ...headingElements,
//   'address',
//   'article',
//   'aside',
//   'blockquote',
//   'details',
//   'dialog',
//   'figcaption',
//   'figure',
//   'footer',
//   'header',
//   'hgroup',
//   'main',
//   'menu',
//   'nav',
//   'p',
//   'section',
// ] as const;

// const blockElements = [
//   ...headingElements,
//   ...semanticBlockElements,
//   'div',
//   'fieldset',
//   'form',
//   'hgroup',
//   'hr',
//   'pre',
// ] as const;

const firstLastMarginZeroElements = [
  ...headingElements,
  ...listElements,
  'p',
];

const fontSizeRangeMinRatio = (
  baseFontSizeRange.minEm / baseFontSizeRange.maxEm
);

const headingMaxSizes = {
  h1: 1.953,
  h2: 1.563,
  h3: 1.25,
} as const;

const headingRanges = {
  h1: {
    minEm:   headingMaxSizes.h1 * fontSizeRangeMinRatio,
    fluidVw: headingMaxSizes.h1 * fontSizeRangeMinRatio * vwRatio,
    maxEm:   headingMaxSizes.h1,
  },
  h2: {
    minEm:   headingMaxSizes.h2 * fontSizeRangeMinRatio,
    fluidVw: headingMaxSizes.h2 * fontSizeRangeMinRatio * vwRatio,
    maxEm:   headingMaxSizes.h2,
  },
  h3: {
    minEm:   headingMaxSizes.h3 * fontSizeRangeMinRatio,
    fluidVw: headingMaxSizes.h3 * fontSizeRangeMinRatio * vwRatio,
    maxEm:   headingMaxSizes.h3,
  },
};

const mainGridMaxWidthCh = 65;
const mainGridSidePaddingRem = 1.25;

const mainGridColumns = [
  '0.7fr',
  `${mainGridSidePaddingRem}rem`,
  [
    `${mainGridMaxWidthCh}ch`,
    `calc(100% - ${mainGridSidePaddingRem * 2}rem)`
  ],
  `${mainGridSidePaddingRem}rem`,
  '1.2fr',
] as const;

const monospaceFonts = [
  '"Consolas"',
  '"Bitstream Vera Sans Mono"',
  '"Courier New"',
  'Courier',
  'monospace',
] as const;

const monospaceFont = monospaceFonts.join(', ');

const proseFonts = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'Noto Sans',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji',
] as const;

const proseFontFamily = proseFonts
  .map((fontName) => (
    fontName.includes(' ') ?
      `"${fontName}"` :
    fontName
  ))
  .join(', ');


const topicColorMapping = {
  DEFAULT_TOPIC: {
    dark:  '#aaa',
    light: '#555',
  },

  ABLEISM:         '#edc258',
  ARTS_CRAFTS:     '#293fe4',
  LEMON:           '#82c2e4',
  MENTAL_ILLNESS:  '#d33d0a',
  NEURODIVERGENCE: '#f7834a',
  PHILOSOPHY:      '#9a9aa6',
  POLITICS:        '#ffe413',
  RACISM:          '#7a5221',
  SEXISM:          '#ec9ac0',
  SUBSTANCE_ABUSE: '#edbb0e',
  TECHNOLOGY:      'hsla(336deg, 100%, 42%, 0.9)',
  TRANSPHOBIA:     '#10be8a',
} as const;


const topicColorClassNameEntries = [
  [
    Topic[DEFAULT_TOPIC],
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.DEFAULT_TOPIC.light,
      },

      [darkMode]: {
        '&, &.hover-inherit-topic-color:hover': {
          color: topicColorMapping.DEFAULT_TOPIC.dark,
        },
      },
    }),
  ],

  [
    Topic.ABLEISM,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.ABLEISM,
      },
    }),
  ],
  [
    Topic.ARTS_CRAFTS,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.ARTS_CRAFTS,
      },
    }),
  ],
  [
    Topic.LEMON,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.LEMON,
      },
    }),
  ],
  [
    Topic.MENTAL_ILLNESS,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.MENTAL_ILLNESS,
      },
    }),
  ],
  [
    Topic.NEURODIVERGENCE,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.NEURODIVERGENCE,
      },
    }),
  ],
  [
    Topic.PHILOSOPHY,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.PHILOSOPHY,
      },
    }),
  ],
  [
    Topic.POLITICS,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.POLITICS,
      },
    }),
  ],
  [
    Topic.RACISM,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.RACISM,
      },
    }),
  ],
  [
    Topic.SEXISM,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.SEXISM,
      },
    }),
  ],
  [
    Topic.SUBSTANCE_ABUSE,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.SUBSTANCE_ABUSE,
      },
    }),
  ],
  [
    Topic.TECHNOLOGY,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.TECHNOLOGY,
      },
    }),
  ],
  [
    Topic.TRANSPHOBIA,
    css({
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.TRANSPHOBIA,
      },
    }),
  ],
] as const;

type TopicThemeKey =
  | typeof DEFAULT_TOPIC
  | string;

export const topicColorClassNames = Object.fromEntries<TopicThemeKey, string>(
  topicColorClassNameEntries
);

export const theme = {
  baseFontSizeRange,
  darkMode,
  // aside: {
  //   backgroundColor: 'hsl(53deg, 81%, 96%)',
  //   color:           'hsl(212deg, 10%, 35%)',

  //   'h1, h2, h3, h4, h5, h6': {
  //     color: 'hsl(53deg, 13%, 26%)',
  //   },

  //   [darkMode]: {
  //     backgroundColor: 'hsl(130deg,21%,14%)',
  //     color:           'hsl(212deg, 3%, 80%)',

  //     'h1, h2, h3, h4, h5, h6': {
  //       color: 'hsl(130deg, 6%, 90%)',
  //     },
  //   },
  // },

  // blog: {
  //   listing: {
  //     linkTextContent: {
  //       backgroundColor: 'rgba(255, 255, 255, 0.75)',

  //       [darkMode]: {
  //         backgroundColor: 'rgba(0, 0, 0, 0.7)',
  //       },
  //     },

  //     linkTitle: {
  //       '&, &:hover': {
  //         color: '#000',
  //       },

  //       [darkMode]: {
  //         '&, &:hover': {
  //           color: '#fff',
  //         },
  //       },
  //     },
  //   },

  //   timestamp: {
  //     color: 'hsl(212deg, 10%, 25%)',

  //     [darkMode]: {
  //       color: 'hsl(212deg, 10%, 85%)',
  //     },
  //   },
  // },

  // details: {
  //   borderColor: 'hsl(240deg, 8%, 95%)',

  //   [darkMode]: {
  //     backgroundColor: 'hsl(192deg, 100%, 6%)',
  //     borderColor:     'hsl(192deg, 100%, 6%)',
  //   },
  // },

  document: {
    backgroundColor: 'hsl(192deg, 100%, 99%)',

    [darkMode]: {
      backgroundColor: 'hsl(192deg, 100%, 3%)',
    },
  },

  code: {
    backgroundColor: 'hsl(220deg, 10%, 94%)',
    color:           'hsla(210deg, 12%, 0%, 95%)',
    fontFamily:      monospaceFont,
  },

  deemphasize: {
    color: 'hsl(212deg, 10%, 35%)',
  },

  emphasize: {
    color: '#000',

  },

  firstLastMarginZeroElements,

  headingRanges,

  [darkMode]: {
    code: {
      backgroundColor: 'hsl(220deg, 10%, 20%)',
      color:           'hsla(210deg, 12%, 100%, 95%)',
    },

    deemphasize: {
      color: 'hsl(212deg, 10%, 75%)',
    },

    emphasize: {
      color: '#fff',
    },

    links: {
      '&:hover': {
        color: 'hsl(205deg, 76%, 70%)',
      },

      color:               'hsl(205deg, 56%, 70%)',
      textDecorationColor: 'hsla(205deg, 56%, 70%, 50%)',
    },

    pre: {
      color:           'hsla(210deg, 12%, 100%, 90%)',
      backgroundColor: 'hsl(240deg, 8%, 12%)',
    },
  },

  // footnote: {
  //   definition: {
  //     color:           'hsla(210deg, 12%, 90%, 95%)',
  //     backgroundColor: 'hsla(210deg, 12%, 5%, 95%)',
  //     boxShadow:       '0 0.0625em 0.25em hsla(210deg, 12%, 90%, 95%)',

  //     [supportsBlur]: {
  //       backdropFilter:  'blur(0.5em)',
  //       backgroundColor: 'hsla(210deg, 12%, 5%, 75%)',

  //       [explicitLightMode]: {
  //         color:           'hsla(210deg, 12%, 5%, 95%)',
  //         backgroundColor: 'hsla(192deg, 10%, 97%, 75%)',
  //         boxShadow:       '0 0.0625em 0.125em hsla(210deg, 12%, 5%, 75%)',
  //       },
  //     },
  //   },
  // },

  // imageCaption: {
  //   color:           'hsla(210deg, 12%, 90%, 95%)',
  //   backgroundColor: 'hsla(210deg, 12%, 5%, 95%)',

  //   // [explicitLightMode]: {
  //   //   '--welp': 'attr(alt)',
  //   //   color:           'hsla(210deg, 12%, 5%, 95%)',
  //   //   backgroundColor: 'hsla(192deg, 100%, 99%, 0.9)',
  //   // },

  //   [supportsBlur]: {
  //     backdropFilter:  'blur(0.5em)',
  //     backgroundColor: 'hsla(210deg, 12%, 5%, 75%)',

  //     [explicitLightMode]: {
  //       color:           'hsla(210deg, 12%, 5%, 95%)',
  //       backgroundColor: 'hsla(192deg, 100%, 99%, 75%)',
  //     },
  //   },
  // },

  links: {
    '&:hover': {
      color:               'hsl(205deg, 78%, 41%)',
      textDecorationColor: 'initial',
    },

    color:               'hsl(205deg, 86%, 31%)',
    textDecorationColor: 'hsla(205deg, 86%, 31%, 50%)',
  },

  mainGridColumns,

  pre: {
    color:           'hsl(210deg, 12%, 16%)',
    backgroundColor: 'hsl(240deg, 8%, 97%)',
  },

  prose: {
    color:      'hsla(210deg, 12%, 5%, 95%)',
    fontFamily: proseFontFamily,

    [darkMode]: {
      color: 'hsla(210deg, 12%, 90%, 95%)',
    },
  },

  // quoted: {
  //   container: {
  //     backgroundColor: 'hsla(205deg, 40%, 82%, 35%)',

  //     [darkMode]: {
  //       backgroundColor: 'hsla(205deg, 30%, 42%, 45%)',
  //     },
  //   },

  //   symbol: {
  //     color:      'hsl(205deg, 45%, 69%)',
  //     fontFamily: 'Minipax',

  //     [darkMode]: {
  //       color: 'hsl(205deg, 35%, 49%)',
  //     },
  //   },
  // },

  // siteHeader: {
  //   columns: siteHeaderColumns,

  //   pageLinks: {
  //     color: '#000',

  //     [darkMode]: {
  //       color: '#fff',
  //     },
  //   },
  // },

  // siteLogo: {
  //   color: 'hsl(336deg, 100%, 42%)',

  //   [darkMode]: {
  //     color: 'hsl(336deg, 100%, 90%)',
  //   },
  // },

  // syntaxHighlighter: {
  //   commentLike: {
  //     color:     'hsl(60deg, 8%, 57%)',
  //     fontStyle: 'italic',

  //     [darkMode]: {
  //       color: 'hsl(60deg, 8%, 70%)',
  //     },
  //   },

  //   constantLike: {
  //     color: 'hsl(212deg, 100%, 39%)',

  //     [darkMode]: {
  //       color: 'hsl(212deg, 58%, 72%)',
  //     },
  //   },

  //   functionLike: {
  //     color: 'hsl(261deg, 51%, 51%)',

  //     [darkMode]: {
  //       color: 'hsl(261deg, 41%, 81%)',
  //     },
  //   },

  //   keywordLike: {
  //     color: 'hsl(354deg, 66%, 54%)',

  //     [darkMode]: {
  //       color: 'hsl(354deg, 40%, 70%)',
  //     },
  //   },

  //   punctuationLike: {
  //     color: 'hsl(70deg, 5%, 22%)',

  //     [darkMode]: {
  //       color: 'hsl(70deg, 5%, 80%)',
  //     },
  //   },

  //   stringLike: {
  //     color: 'hsl(212deg, 94%, 20%)',

  //     [darkMode]: {
  //       color: 'hsl(212deg, 34%, 84%)',
  //     },
  //   },

  //   symbol: {
  //     color:      'hsl(228deg, 5%, 81%)',
  //     fontFamily: monospaceFont,

  //     [darkMode]: {
  //       color: 'hsl(228deg, 6%, 21%)',
  //     },
  //   },

  //   valueLike: {
  //     color: 'hsl(179deg, 52%, 44%)',

  //     [darkMode]: {
  //       color: 'hsl(179deg, 42%, 64%)',
  //     },
  //   },
  // },

  topicColorClassNames,

  // // topicTagOutlineMask: {
  // //   light: 'rgba(255, 255, 255, 0.85)',
  // //   dark:  'rgba(255, 255, 255, 0.85)',
  // // },

  // topicTagInner: {
  //   '*:active > &, *:focus > &, *:hover > &': {
  //     // backgroundColor: 'rgba(255, 255, 255, 0.95)',
  //     backgroundImage: `linear-gradient(
  //       to top,
  //       rgba(255, 255, 255, 0.8),
  //       rgba(255, 255, 255, 0.925) 2px
  //     )`,
  //   },

  //   '&, :hover > *': {
  //     color: '#000',
  //   },

  //   // backgroundColor: 'rgba(255, 255, 255, 0.9)',
  //   backgroundImage: `linear-gradient(
  //     to top,
  //     rgba(255, 255, 255, 0.9),
  //     rgba(255, 255, 255, 0.95) 2px
  //   )`,

  //   [darkMode]: {
  //     '*:active > &, *:focus > &, *:hover > &': {
  //       backgroundImage: `linear-gradient(
  //         to top,
  //         rgba(0, 0, 0, 0.7),
  //         rgba(0, 0, 0, 0.75) 2px
  //       )`,
  //     },

  //     '&, &:hover': {
  //       color: '#fff',
  //     },

  //     backgroundImage: `linear-gradient(
  //       to top,
  //       rgba(0, 0, 0, 0.65),
  //       rgba(0, 0, 0, 0.7) 2px
  //     )`,
  //   },
  // },

  // topicTagLink: {
  //   '&:active, &:focus, &:hover': {
  //     boxShadow: [
  //       '-1px   0 0.125em     currentcolor',
  //       ' 0     0 0       2px currentcolor',
  //     ].join(', '),
  //     outline:   'none',
  //   },

  //   boxShadow: [
  //     `-0.5px 0 0.25em        rgba(255, 255, 255, 0)`,
  //     '-1px   0 0.125em       currentcolor',
  //     ` 0     0 0       0.5px rgba(255, 255, 255, 0)`,
  //     ' 0     0 0       0.5px currentcolor',
  //   ].join(', '),
  // },
};
