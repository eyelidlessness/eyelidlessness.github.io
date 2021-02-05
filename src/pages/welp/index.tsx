import { seo }         from 'microsite/head';
import { definePage }  from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/Blog';
import { Head }        from '@/components/Head';
import { Main }        from '@/components/Main';
import { Topic }       from '@/lib/content';
import { getFileHash } from '@/lib/git';

interface WelpPageProps {
  readonly hash:   string;
  readonly topics: readonly Topic[];
}

const WelpPage = ({ hash, topics }: WelpPageProps) => {
  return (
    <>
      <Head>
        <seo.title>Welp | Eyelidlessness</seo.title>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt
          hash={ hash }
          topics={ topics }
        />
        <p><a href="/">🏡 HELP</a></p>
      </Main>
    </>
  );
};

export default definePage(WelpPage, {
  async getStaticProps({ path }) {
    const hash = getFileHash(path);
    const topics = [
      Topic.LEMON,
      Topic.ARTS_CRAFTS,
    ] as const;

    return {
      props: {
        hash,
        topics,
      },
    };
  },
});
