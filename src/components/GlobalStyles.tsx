import { Global } from '@emotion/core';

/**
 * @see {@link https://www.digitalocean.com/community/tutorials/css-minimal-css-reset}
 */
const cssReset = {
  html: {
    boxSizing: 'border-box',
    fontSize: '16px',
  },

  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },

  'body, h1, h2, h3, h4, h5, h6, p, ol, ul': {
    fontWeight: 'normal',
    margin: 0,
    padding: 0,
  },

  'ol, ul': {
    listStyle: 'none',
  },

  img: {
    height: 'auto',
    maxWidth: '100%',
  },
} as const;

const sansSerifFonts = [
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

const fontFamily = sansSerifFonts
  .map((fontName) => (
    fontName.includes(' ') ?
      `"${fontName}"` :
    fontName
  ))
  .join(', ');

const globalStyles = {
  ...cssReset,
  body: {
    fontFamily,
  },
};

const GlobalStyles = () => (
  <Global styles={ globalStyles } />
);

export default GlobalStyles;
