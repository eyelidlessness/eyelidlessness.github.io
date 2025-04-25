import { ProjectTimestamp } from '@/data/projects.js';
import { styled } from '@/lib/styles/styles.js';
import { Timestamp, TimestampMode } from './Timestamp.jsx';

const dateStringPattern = /^(\d{4})-(\d{2})$/;

const dateStringToDate = (dateString: string): Date => {
  const matches = dateStringPattern.exec(dateString);

  if (matches == null) {
    throw new Error(`Invalid format for date: ${dateString}, expected YYYY-MM`);
  }

  const [ , year, month ] = matches;

  return new Date(`${year}-${month}-01T00:00:00`);
};

const BaseTimeRange = styled('div', {
  fontSize: '0.88889em',

  nested: {
    '& time': {
      fontSize: 'inherit',
    },
  },
});

interface TimeRangeProps {
  readonly range: readonly [start: ProjectTimestamp, end?: ProjectTimestamp];
}

export const TimeRange = ({
  range: [start, end],
}: TimeRangeProps) => {
  const startDate = dateStringToDate(start);

  if (end == null) {
    return (
      <BaseTimeRange>
        { 'Since ' }
        <Timestamp
          date={ startDate }
          itemprop="startDate"
          mode={ TimestampMode.SHORT }
        />
      </BaseTimeRange>
    );
  }

  const endDate = dateStringToDate(end);

  if (start == end) {
    return (
      <BaseTimeRange>
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
      { ' – ' }
      <Timestamp
        date={ endDate }
        itemprop="endDate"
        mode={ TimestampMode.SHORT }
      />
    </BaseTimeRange>
  );
};
