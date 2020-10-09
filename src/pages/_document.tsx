import BaseDocument, {
  Head,
  Html,
  Main as BaseMain,
  NextScript,
} from 'next/document';
import GlobalStyles from '../components/GlobalStyles';
import Main from '../components/Main';

class Document extends BaseDocument {
  render() {
    return (
      <Html>
        <Head>
          <GlobalStyles />
          <title>Hey okay be patient...</title>
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
