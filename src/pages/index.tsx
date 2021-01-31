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

interface IndexPageProps {
  readonly hash:   string;
  readonly topics: readonly Topic[];
}

const IndexPage = ({ hash, topics }: IndexPageProps) => {
  return (
    <>
      <Head>
        <seo.title>Blobby art exhibit temp site | Eyelidlessness</seo.title>
        <seo.description>
          Just a little sneak peak of my personal site and statically
          generated art project.
        </seo.description>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt
          hash={ hash }
          topics={ topics }
        />
        <p><a href="./huh/" rel="preload">Huh</a></p>
      </Main>
    </>
  );
};

export default definePage(IndexPage, {
  async getStaticProps({ path }) {
    const hash = getFileHash(path);
    const topics = [ Topic.TECHNOLOGY ] as const;

    return {
      props: {
        hash,
        topics,
      },
    };
  },
});
