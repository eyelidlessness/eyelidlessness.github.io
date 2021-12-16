import { ComponentProps } from 'preact';
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

// const maskImage = `linear-gradient(${[
//   'to right',
//   'transparent',
//   'transparent 1.5rem',
//   'black 2.5rem',
//   'black calc(100% - 1rem)',
//   'transparent,'
// ].join(', ')})`;

const BaseInnerContainer = styled(FullBleedScrollableOverflow, {
  // backgroundAttachment: 'local',
  // backgroundImage: `linear-gradient(${[
  //   'to left',
  //   'rgba(255,255,255,1)',
  //   'rgba(255,255,255,1) 5rem',
  //   'rgba(255,255,255,0) 6rem',
  //   'rgba(255,255,255,0) 12rem',
  // ].join(',')})`,
  // backgroundPosition: 'calc(100% + 4rem) 0',
  // backgroundRepeat:   'no-repeat',
  // backgroundSize:     '12rem 100%',
  paddingLeft:        'clamp(1.25em, 3.5vw, 3em)',

  nested: {
    [theme.darkMode]: {
      // backgroundImage: `linear-gradient(${[
      //   'to left',
      //   'rgba(0,0,0,1)',
      //   'rgba(0,0,0,1) 5rem',
      //   'rgba(0,0,0,0) 6rem',
      //   'rgba(0,0,0,0) 12rem',
      // ].join(',')})`,
    },
  },
  // maskImage,
  // WebkitMaskImage: maskImage,
});

const InnerContainer = (props: ComponentProps<typeof BaseInnerContainer>) => (
  <BaseInnerContainer
    shadow={ {
      darkMask:    [ 0, 0, 0, 1 ],
      darkScroll:  [ 0, 164, 255, 0.75 ],
      lightMask:   [ 255, 255, 255, 1 ],
      lightScroll: [ 124, 128, 131, 0.75 ],
    } }
    { ...props }
  />
);

const OuterContainer = styled(FullBleedContainer, {
  ...theme.pre,

  // backgroundImage: `linear-gradient(${[
  //   'to left',
  //   'rgba(124, 128, 131, 0.75)',
  //   'rgba(124, 128, 131, 0.75) 0.5px',
  //   'rgba(124, 128, 131, 0)    5px',
  // ].join(',')})`,

  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].pre,

      // backgroundImage: `linear-gradient(${[
      //   'to left',
      //   'rgba(230, 179, 213, 0.75)',
      //   'rgba(230, 179, 213, 0.75) 0.5px',
      //   'rgba(230, 179, 213, 0)    5px',
      // ].join(',')})`,
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
      border:          0,
      maxWidth:        '100%',
      margin:          0,
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
