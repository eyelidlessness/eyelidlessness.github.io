import { definePage } from 'microsite/page';
import {
  BlogArtDefs,
  BlogListing,
  BlogPostProps,
} from '@/components/Blog';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import {
  getPageMetadata,
  PageMetadata,
  PageMetadataType,
} from '@/lib/content';

interface BlogIndexPageProps extends PageMetadata<any> {
  readonly description: string;
  readonly posts:       readonly BlogPostProps<any>[];
}

const BlogIndexPage = (props: BlogIndexPageProps) => (
  <>
    <Head meta={ props } />

    <Main meta={ props }>
      <BlogArtDefs />

      <BlogListing posts={ props.posts } />
    </Main>
  </>
);

type Awaitable<T> = T | PromiseLike<T>;

interface PostModule {
  default?: {
    getStaticProps?: (context: { path: string }) => Awaitable<{
      props: Promise<BlogPostProps<any>>;
    }>;
  };
}

export default definePage(BlogIndexPage, {
  async getStaticProps({ path }) {
    const selfPath = import.meta?.url.replace(/^file:(\/\/)?/, '');

    const { default: glob } = await import('globby');
    const {
      dirname,
      resolve,
    } = await import('path');

    const basePath  = dirname(selfPath);
    const blogGlob = resolve(basePath, './**/*.js');
    const blogFiles = await glob(blogGlob);
    const postFiles = blogFiles.filter((filePath) => {
      return filePath !== selfPath;
    });

    const postResults = await Promise.all(postFiles.map(async (path) => {
      const { default: postPage } = await import(path) as PostModule;
      const postProps = await postPage?.getStaticProps?.({
        path,
      });

      if (postProps == null) {
        throw new Error(`Couldn't get post props for post at path: ${path}`);
      }

      const relativePath = path.replace(basePath, '').replace(/(\/index)?\.js$/, '/');

      return {
        ...postProps.props,
        path: relativePath,
      };
    }));
    const posts = postResults.filter((post) => (
      post.redirect == null
    ));

    const title = 'Blog';
    const description = `Trevor Schmidt's tech blog`;
    const meta  = getPageMetadata(
      path,
      import.meta.url,
      title,
      PageMetadataType.MUTABLE
    );

    return {
      props: {
        ...meta,

        description,
        posts,
      },
    };
  },
});
