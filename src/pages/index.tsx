import { definePage } from 'microsite/page';
import { Head } from '../components/Head.js';
import {
  getPageMetadata,
  PageMetadata,
  PageMetadataType,
} from '../lib/content/meta.js';

interface IndexPageProps extends PageMetadata<any> {
  readonly description: string;
}

const IndexPage = (props: IndexPageProps) => (
  <>
    <Head meta={ props } />
  </>
);

export default definePage(IndexPage, {
  async getStaticProps({ path }) {
    const title = 'Eyelidlessness';
    const description = `Trevor Schmidt's personal website`;
    const meta  = getPageMetadata(
      path,
      import.meta.url,
      title,
      PageMetadataType.MUTABLE
    );

    return {
      props: {
        ...meta,

        description,
        redirect: '/resume/#resume',
      },
    };
  },
});
