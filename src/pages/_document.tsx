import {
  defineDocument,
  Html,
  Head,
  __HeadContext,
  __InternalDocContext,
  Main,
  MicrositeScript,
} from 'microsite/document';
import { __SeoContext } from 'microsite/head';

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <MicrositeScript />
        <Main />
      </body>
    </Html>
  );
};

interface RenderPageResult {
  readonly __renderPageResult: any;
}

let renderLock: Promise<RenderPageResult> | null = null;

export default defineDocument(Document, {
  async prepare({ renderPage }) {
    await renderLock;
    renderLock = renderPage();

    const page = await renderLock;

    return {
      ...page,
    };
  },
});
