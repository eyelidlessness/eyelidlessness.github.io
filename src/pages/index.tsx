import { seo }        from 'microsite/head';
import { definePage } from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/BlogArt';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import HydrationCheck from '@/components/HydrationCheck';
import { Topic }      from '@/lib/content';
import {
  css,
  styled,
} from '@/lib/styles';

interface IndexProps {
  readonly a:        string;
  readonly cssPath?: string;
  readonly styles?:  string;
}

const blue32 = css({
  color: 'blue',
  fontSize: '32px',
});

const Red = styled('div', {
  color: 'red',
});

const IndexPage = ({
  a,
  cssPath,
  styles,
}: IndexProps) => {
  return (
    <>
      <Head>
        <seo.title>2 Hellooooooooo 2</seo.title>
      </Head>

      <Main>
        <BlogArtDefs />
        <BlogArt
          hash="b19a9fc4c8d52b37763e07fb7abd5d7d92c87fc0"
          topics={[ Topic.TECHNOLOGY ]}
        />
        <h1>Welcome to Microsite!</h1>
        <div class={ blue32 }>Blue 32</div>
        <Red>test</Red>
        <pre>{ JSON.stringify({ cssPath, styles, }, null, 2) }</pre>
        <p>
          Ready to build something amazing? <a href="https://github.com/natemoo-re/microsite">Read the docs</a> to get started.
        </p>

        <p><a href="/welp/" rel="prefetch preload">Go to welp page...</a></p>
        <p>props: { JSON.stringify({ a, cssPath, styles }) }</p>
        <HydrationCheck />
      </Main>
    </>
  );
};

export default definePage(IndexPage, {
  async getStaticProps() {
    return {
      props: {
        a: 'string',
      },
    };
  },
});
