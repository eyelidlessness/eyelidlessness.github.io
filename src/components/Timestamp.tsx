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
  & {
    readonly date:   Date;
    readonly short?: boolean;
  };

export const Timestamp = ({
  date,
  short = false,
  ...rest
}: TimestampProps) => {
  const month = date.getMonth() + 1;
  const year  = date.getFullYear();

  const formatted = short
    ? `${month}/${year}`
    : [
      date.getDate(),
      months[month],
      year,
    ].join(' ');

  return (
    <Time { ...rest } datetime={ date.toISOString() }>
      { formatted }
    </Time>
  );
};
