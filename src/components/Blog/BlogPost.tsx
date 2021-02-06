import { seo }                 from 'microsite/head';
import { ComponentChildren }   from 'preact';
import { FullBleedContainer }  from '@/components/FullBleedContainer';
import { Head }                from '@/components/Head';
import { Main }                from '@/components/Main';
import { Timestamp }           from '@/components/Timestamp';
import { TopicTagList }        from '@/components/Topic/TopicTagList';
import {
  MDXDescription,
  Topic,
} from '@/lib/content';
import { styled }              from '@/lib/styles';
import { BlogArt }             from './BlogArt';
import { BlogArtDefs }         from './BlogArtDefs';
import { BlogPostDescription } from './BlogPostDescription';

const BlogPostTitle = styled('h1', {
  marginBottom: '0.25rem',
});

const BlogPostHeading = styled(FullBleedContainer, {
  marginBottom: '1rem',
});

interface BlogPostProps {
  readonly children?:   ComponentChildren;
  readonly description: MDXDescription;
  readonly hash:        string;
  readonly stat: {
    readonly created: Date;
  };
  readonly title:       string;
  readonly topics:      readonly Topic[];
}

export const BlogPost = ({
  children,
  description: {
    Component: Description,
    raw:       description,
  },
  hash,
  stat: { created },
  title,
  topics,
}: BlogPostProps) => (
  <>
    <Head>
      <seo.title>{ title } | Eyelidlessness</seo.title>
      <seo.description>
        { description }
      </seo.description>
    </Head>

    <Main as="article">
      <BlogPostHeading>
        <BlogArtDefs />
        <BlogArt hash={ hash } title={ title } topics={ topics } />

        <BlogPostTitle>{ title }</BlogPostTitle>
        <Timestamp date={ created } itemprop="datePublished" />
        <TopicTagList link={ false } topics={ topics } />
      </BlogPostHeading>

      <BlogPostDescription>
        <Description />
      </BlogPostDescription>

      { children }
    </Main>
  </>
);
