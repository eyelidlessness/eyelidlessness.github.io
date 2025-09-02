import {
  defineDocument,
  Head,
  Html,
  Main,
  MicrositeScript,
} from 'microsite/document';
import { resetAbbrContext } from '../lib/content/abbr.js';
import { StylesProvider }   from '../lib/styles/styles.js';

const Document = () => {
  return (
    <StylesProvider>
      <Html>
        <Head />
        <body tabIndex={ -1 }>
          <MicrositeScript />
          <Main />
        </body>
      </Html>
    </StylesProvider>
  );
};

interface RenderPageResult {
  readonly __renderPageResult: any;
}

let renderLock: Promise<RenderPageResult> | null = null;

export default defineDocument(Document, {
  async prepare({ renderPage }) {
    resetAbbrContext();

    await renderLock;
    renderLock = renderPage();

    const page = await renderLock;

    return {
      ...page,
    };
  },
});
