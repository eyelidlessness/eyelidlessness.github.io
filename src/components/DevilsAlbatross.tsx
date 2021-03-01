import {
  ComponentChild,
  ComponentType,
  ElementType,
} from 'preact';
import {
  StyleableProps,
  styled,
} from '@/lib/styles';

interface DevilsAlbatrossGap {
  readonly horizontal?: string;
  readonly vertical?:   string;
}

type DevilsAlbatrossProps<P extends StyleableProps = StyleableProps> =
  & Omit<P, 'as' | 'children'>
  & {
    readonly as?:              ElementType<P>;
    readonly children?:        readonly [ ComponentChild, ComponentChild ];
    readonly devilsBreakpoint: string;
    readonly gap?:             DevilsAlbatrossGap
  };

/**
 * @see {@link https://9elements.com/blog/the-devils-albatros-an-algorithmic-layout-technique/}
 */
export const DevilsAlbatross = <P extends StyleableProps>({
  as:        Component = 'div' as ElementType<P>,
  devilsBreakpoint,
  gap,
  ...props
}: DevilsAlbatrossProps<P>) => {
  const DevilsAlbatrossComponent = styled(Component as ComponentType<P>, {
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
  });

  return (
    <DevilsAlbatrossComponent { ...props as any } />
  );
};
