import { seo }        from 'microsite/head';
import { definePage } from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/BlogArt';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import { Topic }      from '@/lib/content';

const HuhPage = () => {
  return (
    <>
      <Head>
        <seo.title>Huh | Eyelidlessness</seo.title>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt
          hash="681e459feb0081fa8d068d4be66a2ce65d066aa6"
          topics={[
            Topic.NEURODIVERGENCE,
            Topic.MENTAL_ILLNESS,
            Topic.SUBSTANCE_ABUSE,
          ]}
        />
        <p><a href="./what/">What</a></p>
      </Main>
    </>
  );
};

export default definePage(HuhPage);
