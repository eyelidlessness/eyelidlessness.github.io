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

interface IndexPageProps extends PageMetadata<any> {
  readonly description: string;
  readonly posts:       readonly BlogPostProps<any>[];
}

const IndexPage = (props: IndexPageProps) => (
  <>
    <Head meta={ props } />

    <Main meta={ props }>
      <BlogArtDefs />

      <BlogListing posts={ props.posts } />
    </Main>
  </>
);

interface PostModule {
  default?: {
    getStaticProps?: (context: { path: string }) => {
      props: Promise<BlogPostProps<any>>;
    };
  };
}

export default definePage(IndexPage, {
  async getStaticProps({ path }) {
    const url = import.meta?.url.replace(/^file:(\/\/)?/, '');

    const { default: glob } = await import('globby');
    const {
      dirname,
      resolve,
    } = await import('path');

    const basePath  = dirname(url);
    const postsGlob = resolve(basePath, './blog/**/*.js');
    const postFiles = await glob(postsGlob);

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
