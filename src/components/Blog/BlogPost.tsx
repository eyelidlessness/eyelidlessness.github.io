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
  getPageMetadata,
  mdxRaw,
  PageMetadata,
  PageStat,
  Topic,
} from '@/lib/content';
import { styled }              from '@/lib/styles';
import { BlogArt }             from './BlogArt';
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

export interface BlogPostProps<
  Path extends string
> extends BlogPostDescription, PageMetadata<Path> {
  readonly children?: ComponentChildren;
  readonly hash:      string;
  readonly path:      Path;
  readonly title:     string;
  readonly topics:    readonly Topic[];
}

export const BlogPost = <Path extends string>(props: BlogPostProps<Path>) => {
  const {
    children,
    description,
    descriptionRaw,
    hash,
    stat: { created },
    title,
    topics,
  } = props;

  return (
    <>
      <Head meta={ {
        ...props,
        description: descriptionRaw,
      } } />

      <Main as="article">
        <BlogPostHeading>
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
};

type AnyBlogPostProps<Path extends string> =
  & PathParams<Path>
  & Partial<Omit<BlogPostProps<Path>, 'children' | 'stat'>>
  & {
    readonly stat?: Partial<PageStat>;
  };

interface DefineBlogPostOptions<Path extends string> extends Omit<
  StaticPropsContext<AnyBlogPostProps<Path>>,
  'params'
> {
  readonly description: ComponentChildren;
  readonly importURL:   string;
  readonly path:        Path;
  readonly title:       string;
  readonly topics:      readonly Topic[];
}

export const getBlogPostStaticProps = async <Path extends string>(
  options: DefineBlogPostOptions<Path>
): Promise<BlogPostProps<Path>> => {
  const {
    description,
    importURL,
    path,
    title,
    topics,
  } = options;
  const {
    hash,
    host,
    social,
    stat,
  } = getPageMetadata(path, importURL, title, topics, 'created');

  const descriptionRaw = mdxRaw`${renderToString(<>{ description }</>)}`;

  return {
    description,
    descriptionRaw,
    hash,
    host,
    path,
    social,
    stat,
    title,
    topics,
  };
};
