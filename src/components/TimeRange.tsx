import type { ComponentChildren } from 'preact';
import type { ProjectTimestamp } from '../data/projects.js';
import { styled, theme } from '../lib/styles/index.js';
import type { TimestampProps } from './Timestamp.js';
import { Timestamp, TimestampMode } from './Timestamp.js';

interface OptionalTimestampProps extends Omit<TimestampProps, 'date'> {
	readonly date: Date | null;
}

const OptionalTimestamp = ({ date, ...rest }: OptionalTimestampProps) =>
	date == null ? null : <Timestamp {...rest} date={date} />;

const TimeRangeText = styled('span', {
	nested: {
		[theme.darkMode]: {
			...theme[theme.darkMode].deemphasize,
		},
	},
	...theme.deemphasize,
});

const dateStringPattern = /^(\d{4})-(\d{2})$/;

type PreserveNullability<MaybeNullable, T> = [MaybeNullable] extends [
	NonNullable<MaybeNullable>,
]
	? NonNullable<T>
	: T | null;

const dateStringToDate = <T extends string | null>(
	dateString: T
): PreserveNullability<T, Date> => {
	if (dateString == null) {
		return null as PreserveNullability<T, Date>;
	}

	const matches = dateStringPattern.exec(dateString);

	if (matches == null) {
		throw new Error(`Invalid format for date: ${dateString}, expected YYYY-MM`);
	}

	const [, year, month] = matches;

	return new Date(`${year}-${month}-01T00:00:00`) as PreserveNullability<T, Date>;
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
}: TimeRangeProps): ComponentChildren => {
	const startDate = dateStringToDate(start);
	const endDate = dateStringToDate(end ?? null);

	if (start == end) {
		return (
			<BaseTimeRange className={className}>
				<Timestamp date={startDate} itemprop="endDate" mode={TimestampMode.SHORT} />
			</BaseTimeRange>
		);
	}

	return (
		<BaseTimeRange className={className}>
			<Timestamp date={startDate} itemprop="startDate" mode={TimestampMode.SHORT} />
			<TimeRangeText>-</TimeRangeText>
			<OptionalTimestamp date={endDate} itemprop="endDate" mode={TimestampMode.SHORT} />
		</BaseTimeRange>
	);
};
