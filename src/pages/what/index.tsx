import { seo }         from 'microsite/head';
import { definePage }  from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/Blog';
import { Head }        from '@/components/Head';
import { Main }        from '@/components/Main';
import {
  DEFAULT_TOPIC,
  Topic,
} from '@/lib/content';
import { getFileHash } from '@/lib/git';

interface WhatPageProps {
  readonly hash:   string;
  readonly topics: readonly Topic[];
}

const WhatPage = ({ hash, topics }: WhatPageProps) => {
  return (
    <>
      <Head>
        <seo.title>What | Eyelidlessness</seo.title>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt
          hash={ hash }
          topics={ topics }
        />
        <p><a href="./welp/">Welp</a></p>
      </Main>
    </>
  );
};

export default definePage(WhatPage, {
  async getStaticProps({ path }) {
    const hash = getFileHash(path);
    const topics = [
      Topic.PHILOSOPHY,
      Topic.TECHNOLOGY,
      Topic[DEFAULT_TOPIC],
    ] as const;

    return {
      props: {
        hash,
        topics,
      },
    };
  },
});
