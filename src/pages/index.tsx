import { seo }        from 'microsite/head';
import { definePage } from 'microsite/page';
import {
  BlogArtDefs,
  BlogListing,
  BlogPostProps,
} from '@/components/Blog';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';

interface IndexPageProps {
  readonly posts: readonly BlogPostProps[];
}

const IndexPage = ({
  posts,
}: IndexPageProps) => {
  return (
    <>
      <Head>
        <seo.title>Eyelidlessness</seo.title>
        <seo.description>
          Trevor Schmidt's tech blog
        </seo.description>
      </Head>

      <Main isListing={ true }>
        <BlogArtDefs />

        <BlogListing posts={ posts } />
      </Main>
    </>
  );
};

interface PostModule {
  default?: {
    getStaticProps?: (context: { path: string }) => {
      props: Promise<BlogPostProps>;
    };
  };
}

export default definePage(IndexPage, {
  async getStaticProps() {
    const url = import.meta?.url.replace(/^file:(\/\/)?/, '');

    const { default: glob } = await import('globby');
    const {
      dirname,
      resolve,
    } = await import('path');

    const basePath  = dirname(url);
    const postsGlob = resolve(basePath, './blog/**/*.js');
    const postFiles = await glob(postsGlob);

    const posts = await Promise.all(postFiles.map(async (path) => {
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

    return {
      props: {
        posts,
      },
    };
  },
});
