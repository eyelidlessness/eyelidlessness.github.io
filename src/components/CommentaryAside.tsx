import {
  clamp,
  styled,
  theme,
} from '../lib/styles/index.js';
import { FullBleedSymbolBlock } from './FullBleed/FullBleedSymbolBlock.js';

const ContentContainer = styled('div', {
  fontSize:    '0.8889em',
  paddingLeft: '0.25rem',
});

const OuterContainer = styled('aside', {
  ...theme.aside,

  fontSize: '1rem',

  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].aside,
    },
  },
});

const SymbolContainer = styled('div', {
  ...theme.asideBlock.symbol,

  fontSize:   clamp('2.2em', '7vw', '3em'),
  marginLeft: '-1.25rem',
  marginTop:  '-1.25rem',
  transform:  'rotate(-20deg)',

  nested: {
    ...theme.asideBlock.symbol.nested,

    [theme.darkMode]: {
      ...theme.asideBlock.symbol.nested[theme.darkMode],

      fontWeight: 'bolder',
    },
  },
});

export const CommentaryAside = ({ children }: JSX.IntrinsicElements['aside']) => {
  return (
    <FullBleedSymbolBlock
      ContentContainer={ ContentContainer }
      OuterContainer={ OuterContainer }
      symbol="#"
      SymbolContainer={ SymbolContainer }
    >
      { children }
    </FullBleedSymbolBlock>
  );
};
