import type { ComponentChildren } from 'preact';
import { BLOG_BASE_PATH } from '../../data/site.js';
import type { TopicLike } from '../../lib/content/topics.js';
import { getHyphenatedTopicKey, getTopic } from '../../lib/content/topics.js';
import { styled, theme } from '../../lib/styles/index.js';

const TopicTagLink = styled('a', {
	...theme.topicTagLink(theme.topicTagIdentifier.className),
});

const TopicTagInner = styled('span', {
	...theme.topicTagInner,

	display: 'inline-block',
	lineHeight: 1,
	padding: '0.325rem 0.625rem 0.325rem 0.5rem',
});

interface BaseTopicTagProps {
	readonly className?: string;
	readonly link?: boolean;
	readonly topic: TopicLike;
}

export const BaseTopicTag = ({
	className,
	link = true,
	topic: topicLike,
}: BaseTopicTagProps): ComponentChildren => {
	const pathSegment = getHyphenatedTopicKey(topicLike);
	const topic = getTopic(topicLike);

	if (pathSegment == null || typeof topic != 'string') {
		throw new Error(`Unexpected topic: ${String(topic)}`);
	}

	const TopicTagOuter = link ? TopicTagLink : 'span';
	const outerProps = link
		? ({ href: `${BLOG_BASE_PATH}topics/${pathSegment}/` } as const)
		: {};

	return (
		<TopicTagOuter
			className={[className, theme.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(
				' '
			)}
			{...outerProps}
		>
			<TopicTagInner className={theme.topicTagIdentifier.className}>
				{topic}
			</TopicTagInner>
		</TopicTagOuter>
	);
};

export const TopicTag = styled(BaseTopicTag, (props) => ({
	...theme.topicTagOuter,
	...theme.topicColors[getTopic(props.topic)],

	backgroundColor: 'currentcolor',
	borderRadius: '0.25rem',
	display: 'inline-block',
	fontSize: 'max(15px, 0.7778em)',
	fontWeight: 500,
	lineHeight: 1,
	overflow: 'hidden',
	textDecoration: 'none',
}));
