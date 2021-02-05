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

interface TimestampProps {
  readonly date: Date;
}

export const Timestamp = ({ date }: TimestampProps) => (
  <Time
    // @ts-expect-error: Preact is just wrong about this.
    datetime={ date.toISOString() }
  >
    { date.getDate() } { months[date.getMonth() + 1] } { date.getFullYear() }
  </Time>
);
