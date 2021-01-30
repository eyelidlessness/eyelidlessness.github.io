import { Html as BaseHtml } from 'microsite/document';
import {
  clamp,
  setGlobalStyles,
  styled,
  theme,
} from '@/lib/styles';

setGlobalStyles();

export const Html = styled(BaseHtml, {
  boxSizing: 'border-box',

  fontSize: clamp(
    `${theme.baseFontSizeRange.minEm}em`,
    `${theme.baseFontSizeRange.fluidVw}vw`,
    `${theme.baseFontSizeRange.maxEm}em`
  ),

  margin:         0,
  padding:        0,
  textSizeAdjust: '100%',
});
