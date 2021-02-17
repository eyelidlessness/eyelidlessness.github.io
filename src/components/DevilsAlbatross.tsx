import { ComponentChild } from 'preact';
import { styled }         from '@/lib/styles';

const AssignableComponent = styled('div', {});

interface DevilsAlbatrossGap {
  readonly horizontal?: string;
  readonly vertical?:   string;
}

type DevilsAlbatrossProps =
  & Omit<JSX.IntrinsicElements['div'], 'children'>
  & {
    readonly children?:        readonly [ ComponentChild, ComponentChild ];
    readonly devilsBreakpoint: string;
    readonly gap?:             DevilsAlbatrossGap
  };

const BaseDevilsAlbatross = ({
  devilsBreakpoint,
  gap,
  ...props
}: DevilsAlbatrossProps) => (
  <AssignableComponent { ...props as any } />
);

/**
 * @see {@link https://9elements.com/blog/the-devils-albatros-an-algorithmic-layout-technique/}
 */
export const DevilsAlbatross = styled(BaseDevilsAlbatross, ({
  devilsBreakpoint,
  gap,
}) => ({
  alignItems: 'center',
  display:    'flex',
  flexWrap:   'wrap',

  nested: {
    '&:before': {
      content:   '""',
      // start 😈
      flexBasis: `max(${[
        gap?.horizontal ?? '0px',
        `calc((${devilsBreakpoint} - 100%) * 666)`,
      ].join(', ')})`,
      flexGrow:  666,
      // end 😈
      marginTop:  gap?.vertical ?? '0px',
    },

    '& > *': {
      flexGrow:    1,
      marginLeft:  'auto',
      marginRight: 'auto',
      textAlign:   'center',
    },

    '& > *:first-child': {
      order: -1,
    },
  },
}));
