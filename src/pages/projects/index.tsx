import { definePage } from 'microsite/page';
import { Head }       from '@/components/Head';
import {
  getPageMetadata,
  PageMetadata,
  PageMetadataType,
} from '@/lib/content';

interface ProjectPageProps extends PageMetadata<any> {}

const ProjectPage = (props: ProjectPageProps) => (
    <Head meta={ props } />
);

export default definePage(ProjectPage, {
  async getStaticProps({ path }) {
    const description = 'My projects';
    const title  = 'Projects';
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
        redirect: '/resume/#projects',
        title,
      },
    };
  },
});
