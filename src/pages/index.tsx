import fs             from 'fs';
import { seo }        from 'microsite/head';
import { definePage } from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/Blog';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import { Topic }      from '@/lib/content';
import {
  getFileHash,
  getInitialCommitDate,
} from '@/lib/git';
import { styled }     from '@/lib/styles';

interface IndexPageProps {
  readonly hash: string;
  readonly stat: {
    readonly created: Date;
  };
}

const WhatTheArtLink = styled('a', {
  display:  'inline-block',
  fontSize: '2em',
  margin:   '0 auto',
});

const IndexPage = ({
  hash,
}: IndexPageProps) => {
  const title = 'Hello world';
  const topics = [ Topic.TECHNOLOGY ] as const;

  return (
    <>
      <Head>
        <seo.title>{ title } { ' ' } | Eyelidlessness</seo.title>
        <seo.description>
          Just a little sneak peak of my personal site and statically
          generated art project.
        </seo.description>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt hash={ hash } title={ title } topics={ topics } />

        <WhatTheArtLink href="/blog/2021/02/what-the-art-p1-why/">
          What the art, part 1: Why?
        </WhatTheArtLink>
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
