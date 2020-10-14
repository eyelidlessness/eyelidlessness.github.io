import BaseDocument, {
  Head,
  Html,
  Main as BaseMain,
  NextScript,
} from 'next/document';
import Favicons from '../components/Favicons';
import GlobalStyles from '../components/GlobalStyles';
import Main from '../components/Main';

class Document extends BaseDocument {
  render() {
    return (
      <Html>
        <Head>
          <GlobalStyles />
          <Favicons />
        </Head>
        <body>
          <Main>
            <BaseMain />
          </Main>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document;
