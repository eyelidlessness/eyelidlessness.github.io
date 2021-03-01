import {
  styled,
  theme,
} from '@/lib/styles';
import {
  FullBleedContainer,
  FullBleedContainerProps,
} from './FullBleedContainer';

export interface FullBleedScrollableOverflowProps
  extends Omit<FullBleedContainerProps, 'as'> {
  readonly className?: string;
  readonly shadow?:    boolean;
}

const BaseFullBleedScrollableOverflow = ({
  children,
  shadow = false,
  ...props
}: FullBleedScrollableOverflowProps) => (
  <FullBleedContainer { ...props }>{ children }</FullBleedContainer>
);

export const FullBleedScrollableOverflow = styled(
  BaseFullBleedScrollableOverflow,
  ({ shadow }) => ({
    ...(
      shadow
        ? theme.scrollable.shadow
        : {}
    ),

    paddingRight: theme.mainGridSidePaddingRem,
    overflowX:    'auto',

    nested: {
      '& > *': {
        gridColumn: '3 / -1',
      },
    },
  })
);
