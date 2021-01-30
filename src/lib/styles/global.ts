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

const headingElements = [
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
    @font-face {
      font-family: Minipax;
      font-style:  normal;
      font-weight: normal;

      src:
        local('__Minipax'),
        url('/fonts/Minipax/regular.woff2') format('woff2'),
        url('/fonts/Minipax/regular.woff')  format('woff'),
        url('/fonts/Minipax/regular.ttf')   format('truetype');
    }

    html, body {
      margin: 0;
      padding: 0;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    ${blockElements.join(',')} {
      display: block;
    }

    body, p, ol, ul {
      font-weight: normal;
    }

    ${headingElements.join(',')} {
      font-family:   Minipax;
      font-weight:   normal;
      line-height:   0.9375;
      margin-bottom: 1rem;
      margin-top:    1rem;
      padding-left:  1rem;
      text-indent:   -1rem;
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
      lineHeight:   1,
      padding:      '0.3125rem 0.375rem 0.125rem',
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

    ${jsToCSS([ 'a', 'a:active', 'a:visited' ], {
      ...theme.links,
      fontWeight: 'bold',
    })}

    ${jsToCSS([ 'aside', 'small' ], theme.deemphasize)}

    img {
      height:    auto;
      max-width: 100%;
    }

    small {
      font-size: 0.9375em;
    }

    sup {
      line-height: 0;
    }

    sup a {
      text-decoration: none;
    }

    ${theme.darkMode} {
      ${jsToCSS(emphasisElements, theme[theme.darkMode].emphasize)}

      ${jsToCSS([ 'pre' ], theme[theme.darkMode].pre)}

      ${jsToCSS([ 'a', 'a:active', 'a:visited' ], theme[theme.darkMode].links)}

      ${jsToCSS([ 'aside', 'small' ], theme[theme.darkMode].deemphasize)}
    }
  `);
};