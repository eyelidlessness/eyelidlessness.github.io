import { seo }                from 'microsite/head';
import { VNode }              from 'preact';
import { Head }               from '@/components/Head';
import { Main }               from '@/components/Main';
import { Timestamp }          from '@/components/Timestamp';
import { TopicTagList }       from '@/components/Topic/TopicTagList';
import { Topic }              from '@/lib/content';
import { styled }             from '@/lib/styles';
import { BlogArt }            from './BlogArt';
import { BlogArtDefs }        from './BlogArtDefs';
import { FullBleedContainer } from '../FullBleedContainer';

const BlogPostTitle = styled('h1', {
  marginBottom: '0.25rem',
});

const BlogPostHeading = styled(FullBleedContainer, {
  marginBottom: '1rem',
});

interface BlogPostProps {
  readonly children?:   VNode;
  readonly description: string;
  readonly hash:        string;
  readonly stat: {
    readonly created: Date;
  };
  readonly title:       string;
  readonly topics:      readonly Topic[];
}

export const BlogPost = ({
  children,
  description,
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

        <BlogPostTitle>What the art?</BlogPostTitle>
        <Timestamp date={ created } itemprop="datePublished" />
        <TopicTagList link={ false } topics={ topics } />
      </BlogPostHeading>

      { children }
    </Main>
  </>
);
