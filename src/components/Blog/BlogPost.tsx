import { PathParams }          from 'microsite/page';
import { StaticPropsContext }  from 'microsite/utils/router';
import { ComponentChildren }   from 'preact';
import { renderToString }      from 'preact-render-to-string';
import { FullBleedContainer }  from '@/components/FullBleed';
import { Head }                from '@/components/Head';
import { Main }                from '@/components/Main';
import { Timestamp }           from '@/components/Timestamp';
import { TopicTagList }        from '@/components/Topic/TopicTagList';
import {
  getPageMetadata,
  mdxRaw,
  PageMetadata,
  PageMetadataType,
  PageStat,
  PageSocial,
  Topic,
} from '@/lib/content';
import {
  styled,
  StylesProvider,
} from '@/lib/styles';
import { BlogArt }             from './BlogArt';
import { BlogPostDescription } from './BlogPostDescription';

const BlogPostHeadingContent = styled(FullBleedContainer, {
  paddingTop: '1rem',
});

const BlogPostTitle = styled('h1', {
  marginBottom: '0.25rem',
});

const BlogPostHeading = styled(FullBleedContainer, {
  paddingBlock: '1rem',
});

export interface BlogPostDescription {
  readonly description:    ComponentChildren;
  readonly descriptionRaw: string;
}

export interface BlogPostProps<
  Path extends string = string,
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
    CustomArt,
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

      <Main as="article" meta={ props }>
        <BlogPostHeading>
          {( CustomArt == null
              ? (<BlogArt hash={ hash } title={ title } topics={ topics } />)
              : (
                  <CustomArt
                    hash={ hash }
                    renderType="post"
                    StylesProvider={ StylesProvider }
                    title={ title }
                    topics={ topics }
                  />
                )
          )}

          <BlogPostHeadingContent>
            <BlogPostTitle>{ title }</BlogPostTitle>
            <Timestamp date={ created } itemprop="datePublished" />
            <TopicTagList link={ false } topics={ topics } />
          </BlogPostHeadingContent>
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
    readonly social?: PageSocial;
    readonly stat?:   Partial<PageStat>;
  };

export type BlogMetadataType =
  | PageMetadataType.IMMUTABLE
  | PageMetadataType.IMMUTABLE_MERGE;

export const BlogMetadataType = {
  IMMUTABLE:       PageMetadataType.IMMUTABLE,
  IMMUTABLE_MERGE: PageMetadataType.IMMUTABLE_MERGE,
} as const;

interface GetBlogPostStaticPropsOptions<Path extends string> extends Omit<
  StaticPropsContext<AnyBlogPostProps<Path>>,
  'params'
> {
  readonly description: ComponentChildren;
  readonly importURL:   string;
  readonly path:        Path;
  readonly redirect?:   string;
  readonly title:       string;
  readonly topics:      readonly Topic[];
  readonly type?:       BlogMetadataType;
}

export const getBlogPostStaticProps = async <Path extends string>(
  options: GetBlogPostStaticPropsOptions<Path>
): Promise<BlogPostProps<Path>> => {
  const {
    description,
    importURL,
    path,
    redirect,
    title,
    topics,
    type = BlogMetadataType.IMMUTABLE_MERGE,
  } = options;
  const {
    CustomArt,
    hash,
    host,
    social,
    stat,
  } = getPageMetadata(
    path,
    importURL,
    title,
    type,
    topics
  );

  const descriptionRaw = mdxRaw`${renderToString(<>{ description }</>)}`;

  return {
    CustomArt,
    description,
    descriptionRaw,
    hash,
    host,
    path,
    redirect,
    social,
    stat,
    title,
    topics,
  };
};
