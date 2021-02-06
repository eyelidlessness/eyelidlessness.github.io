import fs                      from 'fs';
import { definePage }          from 'microsite/page';
import { BlogPost }            from '@/components/Blog';
import { BlogPostDescription } from '@/components/Blog/BlogPostDescription';
import { TopicTag }            from '@/components/Topic';
import {
  mdx,
  Topic,
} from '@/lib/content';
import {
  getFileHash,
  getInitialCommitDate,
} from '@/lib/git';

interface WhatTheArtPostProps {
  readonly hash: string;
  readonly path: string;
  readonly stat: {
    readonly created: Date;
  };
  readonly title:  string;
  readonly topics: readonly Topic[];
}

const fragmentURL = (path: string, fragment: string) => (
  `./${path.replace(/\/index$/, '/')}#${fragment}`
);

const WhatTheArtPost = ({
  hash,
  path,
  stat,
  title,
  topics,
}: WhatTheArtPostProps) => {
  return (
    <BlogPost
      description="Introduction to my generated art project"
      hash={ hash }
      stat={ stat }
      title={ title }
      topics={ topics }
    >
      <BlogPostDescription>
        {mdx`
          Today is the day! I'm finally ready to share a project I've
          been working on. A labor of love. It's been a long time
          coming—about four months! I've shared some details with
          some close friends and family, but mostly been pretty
          tight-lipped about it <small>other than a slightly premature
          post teasing it on social media… 🙃</small> until now.
        `}
      </BlogPostDescription>

      {mdx`
        ## Why did I make this blobby art thing?

        When I left my last job at the end of September, I knew I
        was pretty burned out. But I thought that I wanted to get on
        the job hunt pretty quickly. So I gave myself one week to
        decompress, then set myself a deadline to get my résumé
        updated and start looking after that week. I didn't quite
        hit that goal. I was more burned out than I realized, and
        I needed more time. And I needed to rediscover joy in my work.

        I didn't recognize that at the time, but what I did
        recognize is that something in my brain was resistant to
        doing the straightforward productive thing. So I did what I've
        come to learn is a tool I use to cope with ADHD: I tried to
        trick myself into wanting to do the productive thing by
        wrapping it with a reward. <q>I know what I'll do!</q> I said
        to myself. <q>I'll build a website! That'll be creative
        **and** productive!</q>

        ### Then the project took a turn…

        As projects often do, this one grew in scope. At first
        it was going to be just a creative way to market myself. A
        résumé, maybe that tech blog I've been meaning to start for
        years… Then I started writing my first blog post.

        This is not that post. It's still a draft, still queued up.
        Because I wanted to talk about something that happened while
        I was writing it.

        I've never had a tech blog, or much public tech presence.
        And while I want this site to _mostly_ focus on tech, I
        also had begun writing a disclaimer that I may post on
        other topics, some of which can be challenging. Both Because
        this is **my blog** after all, and because there are many
        important, challenging things to talk about that intersect
        with tech. Basically a site-wide content warning.

        But I had mixed feelings about using content warnings, or
        rather about how they might create an artificial separation
        between different types of content, and might minimize the
        non-tech/tech-intersecting content on a tech blog. I wanted
        a way to make any such warnings front and center, and clearly
        visible, while keeping the project and body of cotent
        cohesive and whole.

        What evolved from this idea became an art project, an
        example of which is displayed above this post. You can see
        that I've included labels for:
      `}

      <ul>
        <li><TopicTag link={ false } topic={ Topic.NEURODIVERGENCE } /></li>
        <li><TopicTag link={ false } topic={ Topic.MENTAL_ILLNESS } /></li>
      </ul>

      {mdx`
        I felt since I discussed ADHD and burnout, it'd be a good
        idea to use the art for its purpose from the start! And a
        new piece will be included on every post going forward,
        including those that are "only about tech".
      `}

      {mdx`
        ## The constraints

        In any creative project, constraints are an important
        part of my process, and a good set of constraints always
        gives me more satisfaction with the final product.

        For the art on this site, the constraints I chose were:

        ### Generated

        This is a tech blog, I make computers do work for me, and
        so too it would be with the art. And being a programmer,
        the first thing I did was look for existing libraries I
        could use to achieve my goals. But nothing I could find
        satisfied all of the other constraints.

        ### Uniqueness

        If it's not unique, it's not art (unless that's the
        thing that makes it art). I'm not going to let a computer
        produce the same thing twice and devalue my creativity!
        So I decided that I needed a way to guarantee that each
        piece would be distinct from the others. In this case,
        I did decide to use existing software to get that
        guarantee: [\`git\`](https://git-scm.com/).

        Since every commit to a Git repository has a unique hash,
        I'm able to use a hash associated with a commit of each
        post to guarantee its uniqueness. For instance, this
        post's unique commit hash is \`${ hash }\`.

        ### Cohesiveness

        In case you skipped the [Why...?][1] section, an
        important goal was to maintain a cohesive theme across
        the site, to be sure that none of the content feels like
        it's not a part of the whole. So while each piece is
        unique, it should be generally recognizable as part of
        the whole.

        [1]: ${fragmentURL(
          path,
          'why-did-i-make-this-blobby-art-thing'
        )}

        ### Immutability

        Once a post is published, I want the art piece
        associated with it to remain the same for the life of
        the post, even if it's edited. And again I could use
        Git to achieve this, by using the _first_ hash
        associated with a given post's commit log.

        ### Evolution

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

        ## The build

        I'm not going to walk through all of the source code,
        but I'll highlight some parts that I thought were
        interesting or found challenging.

      `}
    </BlogPost>
  );
};

export default definePage(WhatTheArtPost, {
  async getStaticProps({ path }) {
    const hash = getFileHash(path);
    const stat = {
      created: (
        getInitialCommitDate(path) ??
        fs.statSync(import.meta.url.replace(/^file:(\/\/)?/, '')).ctime
      ),
    };
    const title =  'What the art?';
    const topics = [
      Topic.ART,
      Topic.TECHNOLOGY,
      Topic.NEURODIVERGENCE,
      Topic.MENTAL_ILLNESS,
    ];

    return {
      props: {
        hash,
        path,
        stat,
        title,
        topics,
      },
    };
  },
});
