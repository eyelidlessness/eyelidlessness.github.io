import { ComponentProps } from 'preact';
import {
  styled,
  theme,
} from '@/lib/styles';

const months = [
  ,
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Time = styled('time', {
  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].deemphasize,
    },
  },
  ...theme.deemphasize,
});

type TimestampProps =
  & ComponentProps<typeof Time>
  & { readonly date: Date }

export const Timestamp = ({ date, ...rest }: TimestampProps) => (
  <Time { ...rest } datetime={ date.toISOString() }>
    { date.getDate() } { months[date.getMonth() + 1] } { date.getFullYear() }
  </Time>
);
