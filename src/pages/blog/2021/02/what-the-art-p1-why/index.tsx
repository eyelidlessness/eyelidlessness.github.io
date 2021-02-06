import fs             from 'fs';
import { definePage } from 'microsite/page';
import { BlogPost }   from '@/components/Blog';
import { TopicTag }   from '@/components/Topic';
import {
  mdx,
  mdxDescription,
  Topic,
} from '@/lib/content';
import {
  getFileHash,
  getInitialCommitDate,
} from '@/lib/git';
import { styled }     from '@/lib/styles';

interface WhatTheArtPostProps {
  readonly hash: string;
  readonly path: string;
  readonly stat: {
    readonly created: Date;
  };
  readonly title:  string;
  readonly topics: readonly Topic[];
}

const VerticallyCenterTopicTagChild = styled('span', {
  nested: {
    '& span': {
      display:       'inline-block',
      verticalAlign: 'middle',
    },
  },
});

const WhatTheArtPost = ({
  hash,
  stat,
  title,
  topics,
}: WhatTheArtPostProps) => {
  return (
    <BlogPost
      description={mdxDescription`
        Today is the day! I'm finally ready to share a project I've
        been working on. A labor of love. It's been a long time
        coming—about four months! I've shared some details with
        some close friends and family, but mostly been pretty
        tight-lipped about it <small>other than a slightly premature
        post teasing it on social media… 🙃</small> until now.
      `}
      hash={ hash }
      stat={ stat }
      title={ title }
      topics={ topics }
    >
      {mdx`
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

        ## Then the project took a turn…

        As projects often do, this one grew in scope (in more ways
        than the art project, I have a bunch of other posts planned
        to talk about all of the tech goodies I've been working up).
        At first it was going to be just a creative way to market
        myself. A résumé, maybe that tech blog I've been meaning to
        start for years… Then I started writing my first blog post.

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
        a way to make any such warnings clear and prominent. I want
        to be sure my site is inclusive and doesn't blindside anyone,
        whether it's for tech talk or any other subject I discuss.
        And I want to keep the project and body of cotent cohesive
        and whole.

        What evolved from this idea became an art project, an
        example of which is displayed above this post. You can see
        that I've included labels for:
      `}

      <ul>
        <li>
          <VerticallyCenterTopicTagChild>
            <TopicTag link={ false } topic={ Topic.NEURODIVERGENCE } />
          </VerticallyCenterTopicTagChild>
        </li>
        <li>
          <VerticallyCenterTopicTagChild>
            <TopicTag link={ false } topic={ Topic.MENTAL_ILLNESS } />
          </VerticallyCenterTopicTagChild>
        </li>
      </ul>

      {mdx`
        I felt since I discussed ADHD and burnout, it'd be a good
        idea to use the art for its purpose from the start! And a
        new piece will be included on every post going forward,
        including those that are "only about tech".

        Next: [What the art, part 2: Constraints][1]

        [1]: /blog/2021/02/what-the-art-p2-constraints/
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
    const title =  'What the art, part 1: Why?';
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
