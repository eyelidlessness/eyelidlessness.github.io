import { definePage } from 'microsite/page';
import { Head }       from '@/components/Head';
import {
  getPageMetadata,
  PageMetadata,
  PageMetadataType,
} from '@/lib/content';

interface ResumePageProps extends PageMetadata<any> {}

const ResumePage = (props: ResumePageProps) => (
  <Head meta={ props } />
);

export default definePage(ResumePage, {
  async getStaticProps({ path }) {
    const description = `Trevor Schmidt's résumé`;
    const title  = 'Hire Me';
    const meta = getPageMetadata(
      path,
      import.meta.url,
      title,
      PageMetadataType.IMMUTABLE,
      []
    );

    return {
      props: {
        ...meta,

        description,
        redirect: '/projects/',
        title,
      },
    };
  },
});
