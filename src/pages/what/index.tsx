import { seo }        from 'microsite/head';
import { definePage } from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/BlogArt';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import {
  DEFAULT_TOPIC,
  Topic,
} from '@/lib/content';

const WhatPage = () => {
  return (
    <>
      <Head>
        <seo.title>What | Eyelidlessness</seo.title>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt
          hash="7461f03259e399046ca9791aceb4fc91bdff4c9c"
          topics={[
            Topic.PHILOSOPHY,
            Topic.TECHNOLOGY,
            Topic[DEFAULT_TOPIC],
          ]}
        />
        <p><a href="./welp/">Welp</a></p>
      </Main>
    </>
  );
};

export default definePage(WhatPage);
