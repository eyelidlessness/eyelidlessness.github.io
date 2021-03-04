import { definePage } from 'microsite/page';
import {
  BlogMetadataType,
  BlogPost,
  BlogPostProps,
  getBlogPostStaticProps,
} from '@/components/Blog';
import {
  mdx,
  Topic,
} from '@/lib/content';

const WhatTheArtPost = (props: BlogPostProps<any>) => {
  return (
    <BlogPost { ...props }>
      {mdx`
        Previous: [What the art, part 1: Why?](/blog/2021/02/what-the-art-p1-why/)

        In any creative project, constraints are an important
        part of my process, and a good set of constraints always
        gives me more satisfaction with the final product.

        For the art on this site, the constraints I chose were:

        ## Generated

        This is a tech blog, I make computers do work for me, and
        so too it would be with the art. And being a programmer,
        the first thing I did was look for existing libraries I
        could use to achieve my goals. But nothing I could find
        satisfied all of the other constraints.

        ## Uniqueness

        If it's not unique, it's not art (unless that's the
        thing that makes it art). I'm not going to let a computer
        produce the same thing twice and devalue my creativity!
        So I decided that I needed a way to guarantee that each
        piece would be distinct from the others. In this case,
        I did decide to use existing software to get that
        guarantee: [\`git\`][1].

        [1]: https://git-scm.com/

        Since every commit to a Git repository has a unique hash,
        I'm able to use a hash associated with a commit of each
        post to guarantee its uniqueness. For instance, this
        post's unique commit hash is \`${ props.hash }\`.

        ## Cohesiveness

        In case you missed the [Why...?][2] post, an important
        goal was to maintain a cohesive theme across the site,
        to be sure that none of the content feels like it's not a
        part of the whole. So while each piece is unique, it
        should be generally recognizable as part of the whole.

        [2]: /blog/2021/02/what-the-art-p1-why/

        ## Immutability

        Once a post is published, I want the art piece
        associated with it to remain the same for the life of
        the post, even if it's edited. And again I could use
        Git to achieve this, by using the _first_ hash
        associated with a given post's commit log.

        There are a few caveats to this approach:

        1. If I use the first commit _on any branch_, this
           discourages committing work-in-progress. I've worked
           around this by filtering by branch and remote:<br />
           \`git log --diff-filter=A --branches=main --format=%H --remotes=origin -- $FILENAME\`

        2. Before I've committed to a feature branch, the post
           has no Git history at all. I've worked around this by
           using a SHA-1 hash of the file contents on disk. This
           doesn't give me a preview of the actual final product,
           if I were to publish a given post at that point, but it
           does have the benefit of letting me do a little bit of
           quality control as I preview a post in progress!

        3. I never merge to \`main\` locally, so I have no
           way to preview the stable piece associated with any
           given post until it's already published! This is a
           bit of a risk (see [Evolution][4] below), but it also
           removes a bit of incentive for me to overly control
           the outcome.

        [4]: #evolution

        ## Evolution

        I do want to be free to make changes to the underlying
        algorithm(s) which generate each piece, and make
        revisions after the fact. This is partly because it's
        a living project, and partly because I discovered, in
        the course of building this first release, something I
        would have wanted to revise after the fact: a more
        naïve version of the current iteration was sometimes
        producing elements which looked, well, rather phallic.

        In a sense, this is partly a **non-constraint**, as it
        means that old posts can continue to call the same
        code, they'll be updated on the next build! But that
        also means that I will need to have a way to review
        any rendering changes to ensure I don't introduce yet
        another embarrassing body likeness.

        Next: [What the art, part 3: Implementation][implementation]

        [implementation]: /blog/2021/03/what-the-art-p3-implementation/
      `}
    </BlogPost>
  );
};

export default definePage(WhatTheArtPost, {
  async getStaticProps(context) {
    const props = await getBlogPostStaticProps({
      ...context,

      description: mdx`
        In part two in a three part series revealing my new site's
        art project, I talk through some of the constraints I
        chose for the project, the motivation behind them, and
        how they were achieved in broad strokes.
      `,

      importURL: import.meta.url,
      title:     'What the art, part 2: Constraints',

      topics: [
        Topic.ART,
        Topic.TECHNOLOGY,
      ],

      type: BlogMetadataType.IMMUTABLE,
    });

    return { props };
  },
});
