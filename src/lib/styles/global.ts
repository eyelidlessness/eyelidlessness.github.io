import {
  clamp,
  cleanWhitespace,
  jsToCSS
} from './functions';
import { css }   from './styles';
import { theme } from './theme';

const emphasisElements = [
  'b',
  'em',
  'h1',
  'h2',
  'h3',
  'i',
  'strong',
] as const;

export const headingElements = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
] as const;

const semanticBlockElements = [
  ...headingElements,
  'address',
  'article',
  'aside',
  'blockquote',
  'details',
  'dialog',
  'figcaption',
  'figure',
  'footer',
  'header',
  'hgroup',
  'main',
  'menu',
  'nav',
  'p',
  'section',
] as const;

const blockElements = Array.from(new Set([
  ...headingElements,
  ...semanticBlockElements,
  'div',
  'fieldset',
  'form',
  'hgroup',
  'hr',
  'pre',
] as const));

export const criticalStyles = cleanWhitespace(`
  @font-face {
    font-display: fallback;
    font-family:  Minipax;
    font-style:   normal;
    font-weight:  normal;

    src:
      local('__Minipax'),
      url('/fonts/Minipax/regular.woff2') format('woff2'),
      url('/fonts/Minipax/regular.woff')  format('woff'),
      url('/fonts/Minipax/regular.ttf')   format('truetype');
  }

  html, body {
    margin:     0;
    max-width:  100%;
    overflow-x: hidden;
    padding:    0;
  }

  html {
    box-sizing:       border-box;
    font-size:        ${clamp(
      `${theme.baseFontSizeRange.minEm}em`,
      `${theme.baseFontSizeRange.fluidVw}vw`,
      `${theme.baseFontSizeRange.maxEm}em`
    )};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${jsToCSS([ 'html', 'body' ], {
    ...theme.document,
  })}

  ${jsToCSS([ 'body' ], {
    ...theme.prose,
  })}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${headingElements.join(',')} {
    font-family:             Minipax, Georgia, serif;
    font-smooth:             always;
    font-weight:             normal;
    line-height:             0.9375;
    margin-bottom:           1rem;
    margin-top:              1rem;
    padding-left:            1rem;
    text-indent:             -1rem;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`);

export const setGlobalStyles = () => {
  css.global(
    cleanWhitespace(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${blockElements.join(',')} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${headingElements.map((el) => `${el} small`).join(',')} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${jsToCSS(emphasisElements, theme.emphasize)}

      h1 {
        font-size: ${clamp(
          `${theme.headingRanges.h1.minEm}em`,
          `${theme.headingRanges.h1.fluidVw}vw`,
          `${theme.headingRanges.h1.maxEm}em`
        )};
      }

      h2 {
        font-size: ${clamp(
          `${theme.headingRanges.h2.minEm}em`,
          `${theme.headingRanges.h2.fluidVw}vw`,
          `${theme.headingRanges.h2.maxEm}em`
        )};
      }

      h3 {
        font-size: ${clamp(
          `${theme.headingRanges.h3.minEm}em`,
          `${theme.headingRanges.h3.fluidVw}vw`,
          `${theme.headingRanges.h3.maxEm}em`
        )};
      }

      dl {
        padding-inline-start: 1em;
      }

      dl, dt, dd {
        font-style: normal;
        margin:     0;
        padding:    0;
      }

      ol, ul {
        padding-inline-start: 2em;
      }

      details, ol, p, ul {
        line-height: 1.618;
        margin:      1em 0 1.5em;
      }

      figure {
        margin:              0;
        margin-block-end:    0;
        margin-block-start:  0;
        margin-inline-end:   0;
        margin-inline-start: 0;
      }

      hr {
        border: 0;
        margin: 1.5em 0;
      }

      ${jsToCSS([ 'hr:after' ], {
        ...theme.separator,

        content:       '"✻ ✻ ✻"',
        display:       'block',
        letterSpacing: '0.5em',
        textAlign:     'center',
      })}

      li {
        margin: 0.5em 0;
      }

      ${jsToCSS([ 'pre' ], theme.pre)}

      ${jsToCSS([ 'code' ], {
        ...theme.code,

        borderRadius: '0.1875rem',
        display:      'inline-flex',
        fontSize:     '0.875em',
        hyphens:      'auto',
        lineHeight:   '1.5em',
        overflowWrap: 'break-word',
        padding:      '0.1111rem 0.3333rem 0',
        wordWrap:     'break-word',
      })}

      pre code {
        background-color: transparent;
        display:          block;
        line-height:      1.325em;
        margin:           0;
        padding:          0;
      }

      ${theme.firstLastMarginZeroElements.map((el) => `${el}:first-child`).join(', ')} {
        margin-top: 0;
      }

      ${theme.firstLastMarginZeroElements.map((el) => `${el}:last-child`).join(', ')} {
        margin-bottom: 0;
      }

      ${jsToCSS([ 'a' ], {
        ...theme.links,
        fontWeight: 'bolder',
      })}

      ${jsToCSS([ 'abbr' ], {
        ...theme.abbreviation,

        textDecoration: 'none',
      })}

      ${jsToCSS([ 'aside', 'small' ], theme.deemphasize)}

      ${jsToCSS([ 'aside' ], {
        ...theme.aside,

        fontSize: '0.8889em',
        margin:   '1rem 0',
        padding:  '0.8889rem',

        nested: {
          '& a': {
            fontWeight: 600,
          },
        },
      })}

      ${emphasisElements.map((el) => `aside ${el}`).join(', ')} {
        color: inherit;
      }

      img, svg {
        height:    auto;
        max-width: 100%;
      }

      q {
        font-style: italic;
      }

      q::before {
        content: "“";
      }

      q::after {
        content: "”";
      }

      sup {
        line-height: 0;
      }

      sup a {
        text-decoration: none;
      }

      ${theme.darkMode} {
        ${jsToCSS([ 'html', 'body' ], {
          ...theme[theme.darkMode].document,
        })}

        ${jsToCSS([ 'body' ], {
          ...theme[theme.darkMode].prose,
        })}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${jsToCSS(emphasisElements, theme[theme.darkMode].emphasize)}
        ${jsToCSS([ 'pre' ], theme[theme.darkMode].pre)}
        ${jsToCSS([ 'code' ], theme[theme.darkMode].code)}
        ${jsToCSS([ 'a' ], theme[theme.darkMode].links)}
        ${jsToCSS([ 'aside', 'small' ], theme[theme.darkMode].deemphasize)}
        ${jsToCSS([ 'aside' ], theme[theme.darkMode].aside)}
        ${jsToCSS([ 'hr:after' ], theme[theme.darkMode].separator)}
      }
    `)
  );
};
