import {
  getTopicKey,
  TopicLike,
} from '@/lib/content';
import { styled }   from '@/lib/styles';
import { TopicTag } from './TopicTag';

interface TopicTagListProps {
  readonly link?:      boolean;
  readonly topics:     readonly TopicLike[];
}

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

export const TopicTagList = ({
  link = true,
  topics,
}: TopicTagListProps) => (
  <StyledTopicTagList>
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
