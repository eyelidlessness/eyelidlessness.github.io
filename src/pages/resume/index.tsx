import { definePage } from 'microsite/page';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import { Resume }     from '@/components/Resume';
import { resume }     from '@/data/resume';
import {
  getPageMetadata,
  PageMetadata,
  PageMetadataType,
  Topic,
} from '@/lib/content';
import { styled }     from '@/lib/styles';

const ResumePageResume = styled(Resume, {
  marginTop: 0,
});

interface ResumePageProps extends PageMetadata<any> {
  readonly description: string;
}

const ResumePage = (props: ResumePageProps) => (
  <>
    <Head meta={ props } />

    <Main>
      <ResumePageResume
        id="resume"
        meta={ props }
        resume={ resume }
        updated={ props.stat.updated }
      />
    </Main>
  </>
);

export default definePage(ResumePage, {
  async getStaticProps({ path }) {
    const description = `Trevor Schmidt's résumé`;
    const title  = 'Hire Me';
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

        description,
        title,
        topics,
      },
    };
  },
});
