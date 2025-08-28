import { definePage } from 'microsite/page';
import { Head } from '@/components/Head';
import {
  getPageMetadata,
  PageMetadata,
  PageMetadataType,
} from '@/lib/content';

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
