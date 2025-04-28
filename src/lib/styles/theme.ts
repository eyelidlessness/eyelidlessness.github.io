import { ResumeSkillLevel } from '@/data/resume';
import {
  DEFAULT_TOPIC,
  Topic,
} from '@/lib/content/topics';
import { cleanWhitespace }  from './functions';
import { identifier }       from './styles';

const vwRatio = 2;

const baseFontSizeRange = {
  minEm:   1.0625,
  fluidVw: 1.0625 * vwRatio,
  maxEm:   1.25,
} as const;

const darkMode = '@media (prefers-color-scheme: dark)' as const;

const print = '@media print';

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

const mainGridMaxWidthCh = 75;
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

const siteHeaderPaddingRem = 1;

export const siteHeaderColumns = [
  '0.7fr',
  `${siteHeaderPaddingRem}rem`,
  [
    `${mainGridMaxWidthCh * 1.1875}ch`,
    `calc(100% - ${siteHeaderPaddingRem * 2}rem)`
  ],
  `${siteHeaderPaddingRem}rem`,
  '1.2fr',
] as const;

const monospaceFonts = [
  'ui-monospace',
  'Menlo',
  'Monaco',
  'Cascadia Mono',
  'Segoe UI Mono',
  'Roboto Mono',
  'Oxygen Mono',
  'Ubuntu Monospace',
  'Source Code Pro',
  'Fira Mono',
  'Droid Sans Mono',
  'Courier New',
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

const HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME = 'hover-inherit-topic-color';

const topicColors = {
  [Topic[DEFAULT_TOPIC]]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.DEFAULT_TOPIC.light,
      },

      [darkMode]: {
        nested: {
          '&, &.hover-inherit-topic-color:hover': {
            color: topicColorMapping.DEFAULT_TOPIC.dark,
          },
        },
      },
    },
  },

  [Topic.ABLEISM]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.ABLEISM,
      },
    },
  },
  [Topic.ART]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.ARTS_CRAFTS,
      },
    },
  },
  [Topic.LEMON]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.LEMON,
      },
    },
  },
  [Topic.MENTAL_ILLNESS]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.MENTAL_ILLNESS,
      },
    },
  },
  [Topic.NEURODIVERGENCE]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.NEURODIVERGENCE,
      },
    },
  },
  [Topic.PHILOSOPHY]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.PHILOSOPHY,
      },
    },
  },
  [Topic.POLITICS]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.POLITICS,
      },
    },
  },
  [Topic.RACISM]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.RACISM,
      },
    },
  },
  [Topic.SEXISM]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.SEXISM,
      },
    },
  },
  [Topic.SUBSTANCE_ABUSE]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.SUBSTANCE_ABUSE,
      },
    },
  },
  [Topic.TECHNOLOGY]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.TECHNOLOGY,
      },
    },
  },
  [Topic.TRANSPHOBIA]: {
    nested: {
      '&, &.hover-inherit-topic-color:hover': {
        color: topicColorMapping.TRANSPHOBIA,
      },
    },
  },
};


const blogListingDescriptionIdentifier = identifier();

export const theme = {
  HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME,

  baseFontSizeRange,
  darkMode,
  print,

  abbreviation: {
    '--abbreviation-highlight': 'hsl(64deg 100% 50% / 0.25)',

    backgroundImage: `linear-gradient(${[
      'to top',
      'var(--abbreviation-highlight)',
      'var(--abbreviation-highlight) 0.5em',
      'transparent 0.5em',
    ].join(', ')})`,
  },

  artOverlay: {
    backgroundColor: 'hsla(192deg, 85%, 99%, 0.7)',

    nested: {
      '@supports (backdrop-filter: blur(40px))': {
        backgroundColor:      'hsla(192deg, 85%, 99%, 0.5)',
        backdropFilter:       'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
      },

      [darkMode]: {
        backgroundColor: 'hsla(192deg, 10%, 10%, 0.7)',

        '@supports (backdrop-filter: blur(40px))': {
          backgroundColor: 'hsla(192deg, 10%, 10%, 0.5)',
        },
      },
    },
  },

  aside: {
    backgroundColor: 'hsl(192deg, 35%, 96.5%)',
  },

  asideBlock: {
    symbol: {
      color: 'hsl(208deg, 35%, 81%)',

      nested: {
        [darkMode]: {
          color: 'hsl(208deg, 35%, 35%)',
        },
      },
    },
  },

  blog: {
    listing: {
      descriptionIdentifier: blogListingDescriptionIdentifier,

      description: {
        color:    'hsl(212deg, 10%, 15%)',
        fontSize: '0.9375em',

        nested: {
          [darkMode]: {
            color: 'hsl(212deg, 10%, 75%)',
          },
        },
      },

      item: {
        '&:nth-child(odd)': {
          backgroundColor: 'hsl(192deg, 15%, 97%)',

          nested: {
            '& h2': {
              backgroundColor: 'hsla(192deg, 15%, 97%, 0.75)',
            },

            [`& .${blogListingDescriptionIdentifier}`]: {
              color:    'hsl(212deg, 10%, 20%)',

              nested: {
                [darkMode]: {
                  color: 'hsl(212deg, 10%, 90%)',
                },
              },
            },

            [darkMode]: {
              backgroundColor: 'hsl(192deg, 45%, 3%)',

              nested: {
                '& h2': {
                  backgroundColor: 'hsla(192deg, 45%, 3%, 0.75)',
                },
              },
            },
          },
        },
      },

      // linkTextContent: {
      //   backgroundColor: 'rgba(255, 255, 255, 0.75)',

      //   nested: {
      //     [darkMode]: {
      //       backgroundColor: 'rgba(0, 0, 0, 0.7)',
      //     },
      //   },
      // },

      linkTitle: {
        backgroundColor: 'hsla(192deg, 85%, 99%, 0.75)',
        color:           '#000',

        nested: {
          ':hover': {
            color: '#000',
          },

          [darkMode]: {
            backgroundColor: 'hsla(192deg, 10%, 10%, 0.75)',
            color:           '#fff',

            ':hover': {
              color: '#fff',
            },
          },
        },
      },
    },

    // timestamp: {
    //   color: 'hsl(212deg, 10%, 25%)',

    //   [darkMode]: {
    //     color: 'hsl(212deg, 10%, 85%)',
    //   },
    // },
  },

  description: {
    backgroundColor: 'hsl(53deg, 81%, 96%)',
    color:           'hsl(212deg, 10%, 35%)',

    nested: {
      '& > h1': {
        color: 'hsl(53deg, 13%, 26%)',
      },

      '& p': {
        lineHeight: 1.3333,
      },

      [darkMode]: {
        backgroundColor: 'hsl(130deg,21%,14%)',
        color:           '#f1f3f2',

        nested: {
          '& > h1': {
            color: 'hsl(130deg, 6%, 90%)',
          },
        },
      },
    },
  },

  // details: {
  //   borderColor: 'hsl(240deg, 8%, 95%)',

  //   [darkMode]: {
  //     backgroundColor: 'hsl(192deg, 100%, 6%)',
  //     borderColor:     'hsl(192deg, 100%, 6%)',
  //   },
  // },

  document: {
    backgroundColor: 'hsl(192deg, 85%, 99%)',
  },

  code: {
    backgroundColor: 'hsl(200deg, 80%, 95%)',
    color:           'hsla(210deg, 12%, 0%, 95%)',
    fontFamily:      monospaceFont,
  },

  codeBlock: {
    symbol: {
      color:      'hsl(228deg, 5%, 81%)',
      fontFamily: monospaceFont,

      nested: {
        [darkMode]: {
          color: 'hsl(228deg, 6%, 21%)',
        },
      },
    },
  },

  deemphasize: {
    color:      'hsl(212deg, 50%, 25%)',
    fontSize:   '0.9375em',
    fontWeight: 300,
  },

  emphasize: {
    color: '#000',
  },

  firstLastMarginZeroElements,

  gitHubLogo: {
    fill: '#171515',

    nested: {
      [darkMode]: {
        fill: '#fff',
      },
    },
  },

  headingLineHeight: 0.9375,
  headingRanges,

  [darkMode]: {
    abbreviation: {
      '--abbreviation-highlight': 'hsl(336deg 85% 25%)',
    },

    aside: {
      backgroundColor: 'hsl(192deg, 55%, 11%)',

      nested: {
        '& a': {
          color: 'hsla(205deg, 100%, 90%, 90%)',
          textDecorationColor: 'hsla(205deg, 100%, 78%, 120%)',
        },
      },
    },

    code: {
      backgroundColor: 'hsl(200deg, 60%, 15%)',
      color:           'hsla(210deg, 12%, 100%, 95%)',
    },

    document: {
      backgroundColor: 'hsl(192deg 60% 4%)',
    },

    deemphasize: {
      color:      'hsl(202deg, 20%, 95%)',
      fontWeight: 200,
    },

    emphasize: {
      color: '#fff',
    },

    links: {
      '&:hover': {
        color: 'hsl(195deg, 90%, 68%)',
      },

      '&, &:active, &:visited, & code': {
        color:               'hsl(205deg, 100%, 78%)',
        textDecorationColor: 'hsla(205deg, 100%, 78%, 50%)',
      },
    },

    pre: {
      color:           'hsla(210deg, 12%, 100%, 90%)',
      backgroundColor: '#000',
      borderColor:     '#000',
    },

    prose: {
      color: 'hsl(190deg 20% 97%)',
    },

    separator: {
      color: 'hsla(0deg, 0%, 100%, 0.2)',
    },

    siteHeader: {
      pageLinks: {
        color: '#fff',

        '&:active, &:focus, &:hover': {
          color: '#f9f9f9',
        },

        ':visited': {
          color: '#fff',
        },
      },
    },

    siteLogo: {
      color: 'oklch(0.71 0.16 355.75)',
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

    '&, & code': {
      color:               'hsl(205deg, 86%, 31%)',
      textDecorationColor: 'hsla(205deg, 86%, 31%, 50%)',
    },
  },

  mainGridColumns,
  mainGridSidePaddingRem,

  monospaceFont,

  pre: {
    color:           'hsl(210deg, 12%, 16%)',
    backgroundColor: '#fff',
    borderColor:     '#dbdbdb',
    borderStyle:     'solid',
    borderWidth:     '0.5px 0',
  },

  projects: {
    current: {
      backgroundColor: 'hsl(244deg 100% 98%)',

      nested: {
        [darkMode]: {
          backgroundColor: 'hsl(244deg 30% 13%)',
        },
      },
    },
  },

  prose: {
    color:      'hsl(210deg 12% 5% / 95%)',
    fontFamily: proseFontFamily,
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

  resume: {
    brief: {
      backgroundColor: 'hsl(336deg, 100%, 97%)',

      nested: {
        [darkMode]: {
          backgroundColor: 'hsl(336deg, 100%, 7%)',
        },
        [print]: {
          backgroundColor: '#fafafa',
        },
      },
    },

    contactList: {
      link: {
        nested: {
          '&, &:active, &:hover, &:visited': {
            color: 'hsla(210deg, 12%, 5%, 95%)'
          },

          [darkMode]: {
            nested: {
              '&, &:active, &:hover, &:visited': {
                color: 'hsl(210deg, 10%, 90%)',
              },
            },
          },
        },
      },
    },

    employment: {
      container: {
        backgroundColor: '#fffff1',

        nested: {
          [darkMode]: {
            backgroundColor: 'hsl(41deg, 100%, 8%)',
          },

          [print]: {
            backgroundColor: 'oklch(0.98 0 0)',
          },
        },
      },

      itemOdd: {
        backgroundColor: 'inherit',
      },

      itemEven: {
        backgroundColor: 'oklch(0.99 0.03 100.56)',

        nested: {
          [darkMode]: {
            backgroundColor: 'oklch(0.26 0.06 71.28)',
          },

          [print]: {
            backgroundColor: 'oklch(0.99 0 0)',
          },
        },
      },
    },

    skillLevel: {
      [ResumeSkillLevel.BASIC]: {
        backgroundColor: 'hsl(207deg, 25%, 83%)',

        nested: {
          [darkMode]: {
            backgroundColor: 'hsl(207deg, 15%, 43%)',
          },
        },
      },

      [ResumeSkillLevel.INTERMEDIATE]: {
        backgroundColor: 'hsl(188deg, 53%, 74%)',

        nested: {
          [darkMode]: {
            backgroundColor: 'hsl(188deg, 53%, 34%)',
          },
        },
      },

      [ResumeSkillLevel.ADVANCED]: {
        backgroundColor: 'hsl(188deg, 70%, 59%)',

        nested: {
          [darkMode]: {
            backgroundColor: 'hsl(188deg, 80%, 39%)',
          },
        },
      },

      [ResumeSkillLevel.EXPERT]: {
        backgroundColor: 'hsl(152deg, 100%, 39%)',

        nested: {
          [darkMode]: {
            backgroundColor: 'hsl(152deg, 100%, 29%)',
          },
        },
      },
    },

    // section: {
    //   '&:nth-child(odd)': {
    //     nested: {
    //       backgroundColor: 'hsl(33deg, 100%, 97%)',

    //       nested: {
    //         [darkMode]: {
    //           backgroundColor: 'hsl(33deg, 100%, 7%)',
    //         },
    //       },
    //     },
    //   },
    // },
  },

  separator: {
    color: 'hsla(0deg, 0%, 0%, 0.2)',
  },

  scrollable: {
    cover: (backgroundColor: string) => ({
      backgroundImage: `linear-gradient(to right, ${[
        'transparent',
        `${backgroundColor} 1rem`,
        backgroundColor,
      ].join(', ')})`,
    }),

    shadow: {
      backgroundImage: `linear-gradient(${[
        'to left',
        'rgba(0,0,0,0.3)',
        'rgba(0,0,0,0.125) 1px',
        'transparent 5px',
      ].join(', ')})` as string,
    },
  },

  siteHeader: {
    columns: siteHeaderColumns,

    pageLinks: {
      color: '#000',

      '&:active, &:focus, &:hover': {
        color: '#0a0a0a',
      },

      ':visited': {
        color: '#000',
      },
    },
  },

  siteLogo: {
    color: 'hsl(336deg, 100%, 42%)',
    // color: '#fff'
  },

  toggleSwitch: {
    button: {
      backgroundColor: '#fff',

      nested: {
        [darkMode]: {
          backgroundColor: '#f9f9f9',
        },
      },
    },

    container: {
      off: {
        color: '#ddd',

        nested: {
          [darkMode]: {
            color: '#666',
          },
        },
      },

      on: {
        color: 'hsl(152deg, 100%, 39%)',
      },
    },
  },

  topicColors,

  topicTagIdentifier: identifier(),

  topicTagInner: {
    backgroundImage: cleanWhitespace(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),
    color: '#000',

    nested: {
      [darkMode]: {
        backgroundImage: cleanWhitespace(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),
        color: '#fff',
      },
    },
  },

  topicTagLink: (innerClassName: string) => ({
    nested: {
      '&:active, &:focus, &:hover': {
        boxShadow: [
          '-1px   0 0.125em     currentcolor',
          ' 0     0 0       2px currentcolor',
        ].join(', '),
        outline:   'none',
      },

      [[
        `&:active .${innerClassName}`,
        `&:focus .${innerClassName}`,
        `&:hover .${innerClassName}`,
      ].join(',')]: {
        // backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backgroundImage: cleanWhitespace(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`),
      },

      [`& .${innerClassName}, &:hover .${innerClassName}`]: {
        color: '#000',
      },

      [darkMode]: {
        nested: {
          [[
            `&:active .${innerClassName}`,
            `&:focus .${innerClassName}`,
            `&:hover .${innerClassName}`,
          ].join(',')]: {
            backgroundImage: cleanWhitespace(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`),
          },

          [`& .${innerClassName}, &:hover .${innerClassName}`]: {
            color: '#fff',
          },
        },
      },
    },
  }),

  topicTagOuter: {
    boxShadow: [
      `-0.5px 0 0.25em        rgba(255, 255, 255, 0)`,
      '-1px   0 0.125em       currentcolor',
      ` 0     0 0       0.5px rgba(255, 255, 255, 0)`,
      ' 0     0 0       0.5px currentcolor',
    ].join(', '),
  },

  visiblyHidden: {
    clip:       'rect(0 0 0 0)',
    clipPath:   'inset(50%)',
    height:     '1px',
    overflow:   'hidden',
    position:   'absolute',
    whiteSpace: 'nowrap',
    width:      '1px',
  },

  visualization: {
    plot: {
      axis: {
        color: 'hsl(194deg, 8%, 67%)',

        nested: {
          [darkMode]: {
            color: 'hsl(194deg, 8%, 50%)',
          },
        },
      },
    },
  },
} as const;
