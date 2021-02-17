import { seo }        from 'microsite/head';
import { definePage } from 'microsite/page';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import { Resume }     from '@/components/Resume';
import { resume }     from '@/data/resume';
import {
  getPageMetadata,
  Topic,
} from '@/lib/content';
import { styled }     from '@/lib/styles';

const ResumePageResume = styled(Resume, {
  marginTop: '1rem',
});

interface ResumePageProps {
  readonly description: string;
  readonly hash:        string;
  readonly title:       string;
  readonly topics:      readonly Topic[];
}

const ResumePage = ({
  description,
  hash,
  title,
  topics,
}: ResumePageProps) => {
  const meta = {
    hash,
    title,
    topics,
  };

  return (
    <>
      <Head>
        <seo.title>{ title } | Eyelidlessness</seo.title>
        <seo.description>{ description }</seo.description>
      </Head>

      <Main>
        <ResumePageResume id="resume" meta={ meta } resume={ resume } />
      </Main>
    </>
  );
};

export default definePage(ResumePage, {
  async getStaticProps({ path }) {
    const description = `Trevor Schmidt's résumé`;
    const meta   = getPageMetadata(path, import.meta.url);
    const title  = 'Hire Me';
    const topics = [
      Topic.TECHNOLOGY,
      Topic.ART,
    ];

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
