import type {
  ComponentChildren,
  ComponentProps,
  ElementType,
} from 'preact';
import {
  styled,
  theme,
} from '../../lib/styles/index.js';
import { FullBleedContainer } from '../../components/FullBleed/FullBleedContainer.js';

const BlogPostDescriptionOuter = styled(FullBleedContainer, {
  ...theme.description,

  nested: {
    ...theme.description.nested,

    '&:last-child': {
      marginBottom: 0,
    },

    '& h1': {
      fontFamily:      'unset',
      fontSize:        '1.2em',
      lineHeight:      1,
      marginBottom:    '0.75rem',
      scrollMarginTop: '1rem'
    },

    '& p': {
      marginBottom: '0.625rem',
    },

    '& p:last-child': {
      marginBottom: 0,
    },
  },

  marginBottom:  '2rem',
  paddingBottom: '1rem',
  paddingTop:    '1rem',
});

const BlogPostDescriptionTitle = styled('h1', {
  fontSize:     '1em',
  lineHeight:   1,
  marginBottom: '0.75rem',
});

const BlogPostDescriptionInner = styled('div', {
  fontSize: '0.889em',
});

type BlogPostDescriptionProps =
  & Omit<ComponentProps<typeof BlogPostDescriptionInner>, 'ref' | 'title'>
  & {
    readonly as?:    ElementType;
    readonly title?: ComponentChildren;
  };

export const BlogPostDescription = ({
  as = 'section',
  title,
  ...rest
}: BlogPostDescriptionProps) => (
  <BlogPostDescriptionOuter as={ as } itemprop="description">
    { title
      ? (<BlogPostDescriptionTitle>{ title }</BlogPostDescriptionTitle>)
    : null }
    <BlogPostDescriptionInner { ...rest } />
  </BlogPostDescriptionOuter>
);
