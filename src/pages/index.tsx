import fs             from 'fs';
import { seo }        from 'microsite/head';
import { definePage } from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/Blog';
import { Head }       from '@/components/Head';
// import HydrationCheck from '@/components/HydrationCheck';
import { Main }       from '@/components/Main';
import { Timestamp }  from '@/components/Timestamp';
import { Topic }      from '@/lib/content';
import {
  getFileHash,
  getInitialCommitDate,
} from '@/lib/git';

interface IndexPageProps {
  readonly hash: string;
  readonly stat: {
    readonly created: Date;
  };
}

const IndexPage = ({
  hash,
  stat: { created },
}: IndexPageProps) => {
  const topics = [ Topic.TECHNOLOGY ] as const;

  return (
    <>
      <Head>
        <seo.title>Hello world | Eyelidlessness</seo.title>
        <seo.description>
          Just a little sneak peak of my personal site and statically
          generated art project.
        </seo.description>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt hash={ hash } topics={ topics } />
        <h1>Hello, whirled</h1>
        <Timestamp date={ created } />

        <p><code>{ hash }</code></p>
        <p><a href="./huh/" rel="preload">Huh</a></p>
        {/* <HydrationCheck /> */}
      </Main>
    </>
  );
};

export default definePage(IndexPage, {
  async getStaticProps({ path }) {
    const hash = getFileHash(path);
    const stat = {
      created: (
        getInitialCommitDate(path) ??
        fs.statSync(import.meta.url.replace(/^file:(\/\/)?/, '')).ctime
      ),
    };

    return {
      props: {
        hash,
        stat,
      },
    };
  },
});
