import { definePage } from 'microsite/page';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import {
  Projects,
  ProjectsArt,
} from '@/components/Projects';
import { projects }   from '@/data/projects';
import {
  getPageMetadata,
  PageMetadata,
  PageMetadataType,
  Topic,
} from '@/lib/content';

interface ProjectPageProps extends PageMetadata<any> {
  readonly description: string;
}

const ProjectPage = (props: ProjectPageProps) => (
  <>
    <Head meta={ props } />

    <Main>
      <Projects
        meta={ props }
        projects={ projects }
      />
    </Main>
  </>
);

export default definePage(ProjectPage, {
  async getStaticProps({ path }) {
    const description = 'My projects';
    const title  = 'Projects';
    const topics = [
      Topic.TECHNOLOGY,
      Topic.ART,
    ];
    const meta = getPageMetadata(
      path,
      import.meta.url,
      title,
      PageMetadataType.IMMUTABLE,
      topics
    );

    return {
      props: {
        ...meta,

        CustomArt: ProjectsArt,
        description,
        title,
        topics,
      },
    };
  },
});
