import fs                      from 'fs';
import { seo }                 from 'microsite/head';
import { PathParams }          from 'microsite/page';
import { StaticPropsContext }  from 'microsite/utils/router';
import { ComponentChildren }   from 'preact';
import { renderToString }      from 'preact-render-to-string';
import { FullBleedContainer }  from '@/components/FullBleedContainer';
import { Head }                from '@/components/Head';
import { Main }                from '@/components/Main';
import { Timestamp }           from '@/components/Timestamp';
import { TopicTagList }        from '@/components/Topic/TopicTagList';
import {
  mdxRaw,
  Topic,
} from '@/lib/content';
import {
  getInitialFileHash,
  getInitialCommitDate,
} from '@/lib/git';
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

export interface BlogPostDescription {
  readonly description:    ComponentChildren;
  readonly descriptionRaw: string;
}

interface BlogPostFileStat {
  readonly created: Date;
}

export interface BlogPostProps extends BlogPostDescription {
  readonly children?: ComponentChildren;
  readonly hash:      string;
  readonly path:      string;
  readonly stat:      BlogPostFileStat;
  readonly title:     string;
  readonly topics:    readonly Topic[];
}

export const BlogPost = ({
  children,
  description,
  descriptionRaw,
  hash,
  stat: { created },
  title,
  topics,
}: BlogPostProps) => (
  <>
    <Head>
      <seo.title>{ title } | Eyelidlessness</seo.title>
      <seo.description>
        { descriptionRaw }
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

      <BlogPostDescription>{ description }</BlogPostDescription>

      { children }
    </Main>
  </>
);

type AnyBlogPostProps<Path extends string> =
  & PathParams<Path>
  & Partial<Omit<BlogPostProps, 'children' | 'stat'>>
  & {
    readonly stat?: Partial<BlogPostFileStat>;
  };

interface DefineBlogPostOptions<
  Path extends string,
  P    extends AnyBlogPostProps<Path>
> extends Omit<StaticPropsContext<P>, 'params'> {
  readonly description: ComponentChildren;
  readonly title:       string;
  readonly topics:      readonly Topic[];
}

export const getBlogPostStaticProps = <
  Path extends string,
  P    extends AnyBlogPostProps<Path>
>(options: DefineBlogPostOptions<Path, P>) => {
  const {
    description,
    path,
    title,
    topics
  } = options;

  const descriptionRaw = mdxRaw`${renderToString(
    <>{ description }</>
  )}`;
  const hash = getInitialFileHash(path);
  const stat = {
    created: (
      getInitialCommitDate(path) ??
      fs.statSync(import.meta.url.replace(/^file:(\/\/)?/, '')).ctime
    ),
  };

  return {
    description,
    descriptionRaw,
    hash,
    path,
    stat,
    title,
    topics,
  };
};
