import {
  FullBleedContainer,
  FullBleedScrollableOverflow,
  FullBleedSymbolBlock,
} from '@/components/FullBleed';
import {
  styled,
  theme,
} from '@/lib/styles';

const ContentContainer = styled('pre', {
  fontSize: '1rem',
});

const maskImage = `linear-gradient(${[
  'to right',
  'transparent',
  'transparent 1.5rem',
  'black 2.5rem',
  'black calc(100% - 1rem)',
  'transparent,'
].join(', ')})`;

const InnerContainer = styled(FullBleedScrollableOverflow, {
  paddingLeft:     'clamp(1.25em, 3.5vw, 3em)',
  maskImage,
  WebkitMaskImage: maskImage,
});

const OuterContainer = styled(FullBleedContainer, {
  ...theme.pre,

  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].pre,
    },

    '& code': {
      backgroundColor: 'transparent',
      hyphens:         'none',
      overflowWrap:    'normal',
      whiteSpace:      'pre',
      wordWrap:        'normal',
    },

    '& pre': {
      backgroundColor: 'transparent',
      maxWidth:        '100%',
      margin:          0,
      outline:         'none',
      padding:         '1rem 0',
      whiteSpace:      'pre',
    },
  },
});

const SymbolContainer = styled('div', {
  ...theme.codeBlock.symbol,

  fontSize:   'clamp(3em, 7vw, 4em)',
  marginLeft: '-0.3em',
  marginTop:  '-0.325em',
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
