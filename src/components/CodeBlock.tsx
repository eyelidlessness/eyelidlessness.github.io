import FullBleedSymbolBlock   from '@/components/FullBleedSymbolBlock';
import {
  clamp,
  styled,
  theme,
} from '@/lib/styles';
import { FullBleedContainer } from './FullBleedContainer';

const ContentContainer = styled('pre', {
  fontSize: '1rem',
});

const InnerContainer = styled('div', {
  gridColumn: '2 / 6',
});

const OuterContainer = styled(FullBleedContainer, {
  ...theme.pre,
  // width: '100vw', //

  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].pre,
    },

    '& code': {
      backgroundColor: 'transparent',
    },

    '& pre': {
      backgroundColor: 'transparent',
      maxWidth:        '100%',
      margin:          0,
      overflow:        'auto',
      outline:         'none',
      padding:         [
        '1rem',
        `0`,
        // '1rem',
        // `${theme.mainGridSidePaddingRem * 3}rem`,
      ].join(' '),

      // WebkitOverflowScrolling: 'touch',
    },
  },
});

const SymbolContainer = styled('div', {
  ...theme.codeBlock.symbol,

  fontSize:   clamp('3.2em', '10vw', '4.5em'),
  marginTop:  '-0.325em',
  textIndent: '-0.25em',
});

export const CodeBlock = ({ children }: JSX.IntrinsicElements['pre']) => {
  return (
    <FullBleedSymbolBlock
      ContentContainer={ ContentContainer }
      InnerContainer={ InnerContainer }
      OuterContainer={ OuterContainer }
      symbol="{"
      SymbolContainer={ SymbolContainer }
    >
      { children }
    </FullBleedSymbolBlock>
  );
};
