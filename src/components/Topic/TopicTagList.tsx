import {
  getTopicKey,
  TopicLike,
} from '../../lib/content/topics.js';
import { styled }   from '../../lib/styles/styles.js';
import { TopicTag } from './TopicTag.js';

const StyledTopicTagList = styled('ul', {
  nested: {
    '&, & > li': {
      listStyle: 'none',
    },
  },

  display:  'flex',
  flexWrap: 'wrap',
  margin:   0,
  padding:  0,
});

const TopicTagListItem = styled('li', {
  nested: {
    '&, &:first-child': {
      margin: '0.5em 1em 0 0',
    },

    '&:last-child': {
      marginBottom: 0,
      marginRight:  0,
    },
  },

  display:    'inline-block',
  flexShrink: 0,
});

interface TopicTagListProps {
  readonly className?: string;
  readonly link?:      boolean;
  readonly topics:     readonly TopicLike[];
}

export const TopicTagList = ({
  className,
  link = true,
  topics,
}: TopicTagListProps) => (
  <StyledTopicTagList className={ className }>
    { topics.map((topic) => {
      return (
        typeof topic === 'string'
          ? (
            <TopicTagListItem key={ getTopicKey(topic) }>
              <TopicTag link={ link } topic={ topic } />
            </TopicTagListItem>
          )
        : null
      );
    }) }
  </StyledTopicTagList>
);
