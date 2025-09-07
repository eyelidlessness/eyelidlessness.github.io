import type { ComponentChildren, ComponentProps } from 'preact';
import { styled, theme } from '../lib/styles/index.js';

const months = [
	null,
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

export const TimestampMode = {
	DEFAULT: 'DEFAULT',
	META: 'META',
	SHORT: 'SHORT',
} as const;

type TimestampModes = typeof TimestampMode;

export type TimestampMode = TimestampModes[keyof TimestampModes];

export type TimestampProps = ComponentProps<typeof Time> & {
	readonly date: Date;
	readonly mode?: TimestampMode;
};

export const Timestamp = ({
	date,
	mode = TimestampMode.DEFAULT,
	...rest
}: TimestampProps): ComponentChildren => {
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	const formatted =
		mode === TimestampMode.SHORT
			? `${month}/${year}`
			: mode === TimestampMode.META
				? ''
				: [date.getDate(), months[month], year].join(' ');

	return (
		<Time {...rest} datetime={date.toISOString()}>
			{formatted}
		</Time>
	);
};
