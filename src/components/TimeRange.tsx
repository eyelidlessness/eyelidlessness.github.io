import { ProjectTimestamp } from '@/data/projects.js';
import { styled, theme } from '@/lib/styles';
import { Timestamp, TimestampMode, TimestampProps } from './Timestamp.jsx';

interface OptionalTimestampProps extends Omit<TimestampProps, 'date'> {
  readonly date: Date | null;
}

const OptionalTimestamp = ({ date, ...rest }: OptionalTimestampProps) => (
  date == null
    ? null
    : <Timestamp {...rest} date={date} />
);

const TimeRangeText = styled('span', {
  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].deemphasize,
    },
  },
  ...theme.deemphasize,
});

const dateStringPattern = /^(\d{4})-(\d{2})$/;

interface DateStringToDate {
  (dateString: string): Date;
  (dateString?: string): Date | null;
}

const dateStringToDate: DateStringToDate = (dateString) => {
  if (dateString == null) {
    return null!;
  }

  const matches = dateStringPattern.exec(dateString);

  if (matches == null) {
    throw new Error(`Invalid format for date: ${dateString}, expected YYYY-MM`);
  }

  const [ , year, month ] = matches;

  return new Date(`${year}-${month}-01T00:00:00`);
};

const BaseTimeRange = styled('div', {
  fontSize: '0.88889em',
  whiteSpace: 'nowrap',

  nested: {
    '& time': {
      fontSize: 'inherit',
    },
  },
});

interface TimeRangeProps {
  readonly className?: string;
  readonly range: readonly [start: ProjectTimestamp, end?: ProjectTimestamp];
}

export const TimeRange = ({
  className = '',
  range: [start, end],
}: TimeRangeProps) => {
  const startDate = dateStringToDate(start);
  const endDate = dateStringToDate(end);

  if (start == end) {
    return (
      <BaseTimeRange className={className}>
        <Timestamp
          date={ startDate }
          itemprop="endDate"
          mode={ TimestampMode.SHORT }
        />
      </BaseTimeRange>
    );
  }

  return (
    <BaseTimeRange>
      <Timestamp
        date={ startDate }
        itemprop="startDate"
        mode={ TimestampMode.SHORT }
      />
      <TimeRangeText>-</TimeRangeText>
      <OptionalTimestamp
        date={ endDate }
        itemprop="endDate"
        mode={ TimestampMode.SHORT }
      />
    </BaseTimeRange>
  );
};
