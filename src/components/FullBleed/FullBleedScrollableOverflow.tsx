import {
  styled,
  theme,
} from '@/lib/styles';
import { FullBleedContainer } from './FullBleedContainer';

export const FullBleedScrollableOverflow = styled(FullBleedContainer, {
  paddingRight: theme.mainGridSidePaddingRem,
  overflowX:    'auto',

  nested: {
    '& > *': {
      gridColumn: '3 / -1',
    },
  },
});
