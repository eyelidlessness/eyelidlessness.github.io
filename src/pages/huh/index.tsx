import { seo }         from 'microsite/head';
import { definePage }  from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/BlogArt';
import { Head }        from '@/components/Head';
import { Main }        from '@/components/Main';
import { Topic }       from '@/lib/content';
import { getFileHash } from '@/lib/git';

interface HuhPageProps {
  readonly hash:   string;
  readonly topics: readonly Topic[];
}

const HuhPage = ({ hash, topics }: HuhPageProps) => {
  return (
    <>
      <Head>
        <seo.title>Huh | Eyelidlessness</seo.title>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt
          hash={ hash }
          topics={ topics }
        />
        <p><a href="./what/">What</a></p>
      </Main>
    </>
  );
};

export default definePage(HuhPage, {
  async getStaticProps({ path }) {
    const hash = getFileHash(path);
    const topics = [
      Topic.NEURODIVERGENCE,
      Topic.MENTAL_ILLNESS,
      Topic.SUBSTANCE_ABUSE,
    ] as const;

    return {
      props: {
        hash,
        topics,
      },
    };
  },
});
