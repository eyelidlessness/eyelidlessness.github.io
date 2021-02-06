import {
  clamp,
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

export const setGlobalStyles = () => {
  css.global(`
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

    li {
      margin: 0.5em 0;
    }

    ${jsToCSS([ 'pre' ], theme.pre)}

    ${jsToCSS([ 'code' ], {
      ...theme.code,

      borderRadius: '0.1875rem',
      display:      'inline-block',
      fontSize:     '0.875em',
      hyphens:      'auto',
      lineHeight:   '1.5em',
      overflowWrap: 'break-word',
      padding:      '0.25rem 0.375rem 0',
      wordWrap:     'break-word',

      nested: {
        '&:first-line': {
          verticalAlign: '-0.5em',
        },
      },
    })}

    pre code {
      background-color: transparent;
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

    ${jsToCSS([ 'aside', 'small' ], theme.deemphasize)}

    img {
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
      ${jsToCSS([ 'body' ], {
        ...theme[theme.darkMode].document,
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
    }
  `);
};
