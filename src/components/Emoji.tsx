import emojiRegex from 'emoji-regex';
import type { ComponentChildren } from 'preact';
import { isUnknownObject } from '../lib/collections/objects.js';
import { styled } from '../lib/styles/styles.js';

const StyledEmoji = styled('span', {
	// nested: {
	//   'p > &:first-child': {
	//     textIndent: '-0.5rem',
	//   },
	// },

	display: 'inline-block',
	fontSize: '1.5em',
	fontStyle: 'normal',
	lineHeight: 0.5,
	padding: '0 0.125em',
	verticalAlign: '-0.125em',
});

interface EmojiProps {
	readonly 'aria-label': string;
	readonly children: string;
	readonly role: 'img';
}

export const isEmojiProps = (props: unknown, children: unknown): props is EmojiProps =>
	isUnknownObject(props) &&
	props.role === 'img' &&
	typeof props['aria-label'] === 'string' &&
	typeof children === 'string' &&
	emojiRegex().test(children);

export const Emoji = ({
	['aria-label']: ariaLabel,
	children,
	role,
}: EmojiProps): ComponentChildren => (
	<StyledEmoji aria-label={ariaLabel} role={role}>
		{children}
	</StyledEmoji>
);
