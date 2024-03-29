import { definePage } from 'microsite/page';
import {
  BlogPost,
  BlogPostProps,
  getBlogPostStaticProps,
} from '@/components/Blog';
import {
  mdx as baseMDX,
  Topic,
} from '@/lib/content';

const WhatTheArt3Post = (props: BlogPostProps<any>) => (
  <BlogPost { ...props } />
);

export default definePage(WhatTheArt3Post, {
  async getStaticProps(context) {
    const props = await getBlogPostStaticProps({
      ...context,

      description: baseMDX`
        The final part in a series introducing my new site's art project.
        I walk through some of the more interesting parts of how the art
        is generated.
      `,

      importURL: import.meta.url,
      redirect:  '/blog/2021/03/what-the-art-part3-implementation/',
      title:     'What the art, part 3: Implementation',

      topics: [
        Topic.ART,
        Topic.TECHNOLOGY,
        Topic.NEURODIVERGENCE,
      ],
    });

    return { props };
  },
});
