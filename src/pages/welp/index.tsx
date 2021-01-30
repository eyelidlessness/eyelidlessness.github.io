import { seo }        from 'microsite/head';
import { definePage } from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/BlogArt';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import { Topic }      from '@/lib/content';

const WelpPage = () => {
  return (
    <>
      <Head>
        <seo.title>Blobby art exhibit temp site | Eyelidlessness</seo.title>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt
          hash="cb544c93e5b363ba1198a8b9c2f5ab9b97065a1a"
          topics={[ Topic.LEMON, Topic.ARTS_CRAFTS ]}
        />
        <p><a href="/">🏡 HELP</a></p>
      </Main>
    </>
  );
};

export default definePage(WelpPage);
