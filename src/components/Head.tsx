import { Head as BaseHead } from 'microsite/head';
import {
  clamp,
  headingElements,
  jsToCSS,
  setGlobalStyles,
  theme,
} from '@/lib/styles';
import { Favicons }         from './Favicons';

setGlobalStyles();

const criticalStyles = `
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

  ${jsToCSS([ 'body' ], {
    ...theme.document,
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
`;

export const Head = ({
  children,
  ...rest
}: JSX.IntrinsicElements['head']) => {

  return (
    <BaseHead { ...rest }>
      <style dangerouslySetInnerHTML={{
        __html: criticalStyles,
      }} />
      { children }
      <Favicons />
    </BaseHead>
  );
};
