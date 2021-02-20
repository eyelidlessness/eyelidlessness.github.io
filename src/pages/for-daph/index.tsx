import { definePage } from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/Blog';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import {
  getPageMetadata,
  PageMetadata,
} from '@/lib/content';

interface IndexPageProps extends PageMetadata<any> {
  readonly description: string;
}

const IndexPage = (props: IndexPageProps) => {
  const {
    hash,
    title,
    topics,
  } = props;

  return (
    <>
      <Head meta={ props } />

      <Main>
        <BlogArtDefs />
        <BlogArt hash={ hash } title={ title } topics={ topics } />

        <p><a href="/for-daph/huh/" rel="preload">Huh</a></p>
      </Main>
    </>
  );
};

export default definePage(IndexPage, {
  async getStaticProps({ path }) {
    const title = 'Hello world';
    const description = `Just a little sneak peak of my personal site and${
      ' '} statically generated art project.`;

    const meta = getPageMetadata(path, import.meta.url, title);

    return {
      props: {
        ...meta,

        description,
      },
    };
  },
});
