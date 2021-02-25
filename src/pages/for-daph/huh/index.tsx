import { definePage } from 'microsite/page';
import {
  BlogArt,
  BlogArtDefs,
} from '@/components/Blog';
import { Head }       from '@/components/Head';
import { Main }       from '@/components/Main';
import {
  getPageMetadata,
  PageMetadata,
  PageMetadataType,
  Topic,
} from '@/lib/content';

const HuhPage = (props: PageMetadata<any>) => {
  const {
    hash,
    topics,
  } = props;
  return (
    <>
      <Head meta={ props } />

      <Main>
        <BlogArtDefs />
        <BlogArt
          hash={ hash }
          title={ 'Huh' }
          topics={ topics }
        />
        <p><a href="/blog/2021/02/what-the-art-p1-why/">What</a></p>
      </Main>
    </>
  );
};

export default definePage(HuhPage, {
  async getStaticProps({ path }) {
    const title = 'Huh';
    const topics = [
      Topic.NEURODIVERGENCE,
      Topic.MENTAL_ILLNESS,
      Topic.SUBSTANCE_ABUSE,
    ] as const;
    const meta = getPageMetadata(
      path,
      import.meta.url,
      title,
      PageMetadataType.MUTABLE,
      topics
    );

    return {
      props: {
        ...meta,

        topics,
      },
    };
  },
});
