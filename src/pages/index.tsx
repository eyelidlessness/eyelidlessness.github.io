import { seo }        from 'microsite/head';
import { definePage } from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/BlogArt';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import { Topic }      from '@/lib/content';

const IndexPage = () => {
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
          hash="b19a9fc4c8d52b37763e07fb7abd5d7d92c87fc0"
          topics={[ Topic.TECHNOLOGY ]}
        />
        <p><a href="./huh/" rel="preload">Huh</a></p>
      </Main>
    </>
  );
};

export default definePage(IndexPage);
