import {
  defineDocument,
  // Html,
  Head,
  __HeadContext,
  __InternalDocContext,
  Main,
  MicrositeScript,
} from 'microsite/document';
import { __SeoContext }   from 'microsite/head';
import { Body }           from '@/components/Body';
import { Html }           from '@/components/Html';
import { StylesProvider } from '@/lib/styles';

const Document = () => {
  return (
    <StylesProvider>
      <Html>
        <Head />
        <Body>
          <MicrositeScript />
          <Main />
        </Body>
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
    await renderLock;
    renderLock = renderPage();

    const page = await renderLock;

    return {
      ...page,
    };
  },
});
