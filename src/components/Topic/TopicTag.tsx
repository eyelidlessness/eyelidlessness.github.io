import {
  getHyphenatedTopicKey,
  getTopic,
  TopicLike,
} from '@/lib/content';
import {
  styled,
  theme,
} from '@/lib/styles';

interface TopicTagProps {
  readonly className?: string;
  readonly link?:      boolean;
  readonly topic:      TopicLike;
}

const BaseTopicTagOuter = styled('span', {
  ...theme.topicTagOuter,

  backgroundColor: 'currentcolor',
  borderRadius:    '0.25rem',
  display:         'inline-block',
  fontSize:        'max(15px, 0.7778em)',
  fontWeight:      500,
  lineHeight:      1,
  overflow:        'hidden',
  textDecoration:  'none',
});

const TopicTagLink = styled(BaseTopicTagOuter, {
  ...theme.topicTagLink(theme.topicTagIdentifier.className),
});

const BaseTopicTagInner = styled('span', theme.topicTagIdentifier());

const TopicTagInner = styled(BaseTopicTagInner, {
  ...theme.topicTagInner,

  display:    'inline-block',
  lineHeight: 1,
  padding:    '0.325rem 0.625rem 0.325rem 0.5rem',
});

export const TopicTag = ({
  className,
  link = true,
  topic: topicLike,
}: TopicTagProps) => {
  const pathSegment = getHyphenatedTopicKey(topicLike);
  const topic = getTopic(topicLike);

  if (
    pathSegment == null ||
    typeof topic != 'string'
  ) {
    throw new Error(`Unexpected topic: ${String(topic)}`);
  }

  const TopicTagOuter = link
    ? TopicTagLink
    : BaseTopicTagOuter;
  const outerProps = link
    ? {
      as:   'a',
      href: `/blog/topics/${pathSegment}/`,
    } as const
    : {
      as: 'span',
    } as const;

  return (
    <TopicTagOuter
      className={ [
        className,
        theme.topicColorClassNames[topic] ?? '',
        theme.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME,
      ].join(' ') }

      { ...outerProps }
    >
      <TopicTagInner>
        { topic }
      </TopicTagInner>
    </TopicTagOuter>
  );
};
