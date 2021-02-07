import { definePage } from 'microsite/page';
import {
  BlogPost,
  BlogPostProps,
  getBlogPostStaticProps,
} from '@/components/Blog';
import { TopicTag }   from '@/components/Topic';
import {
  mdx,
  Topic,
} from '@/lib/content';
import { styled }     from '@/lib/styles';

const VerticallyCenterTopicTagChild = styled('span', {
  nested: {
    '& span': {
      display:       'inline-block',
      verticalAlign: 'middle',
    },
  },
});

const WhatTheArtPost = (props: BlogPostProps) => (
  <BlogPost { ...props }>
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
      other topics, some of which can be challenging. Both because
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
      And I want to keep the project and body of content cohesive
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

export default definePage(WhatTheArtPost, {
  async getStaticProps(context) {
    const props = await getBlogPostStaticProps({
      ...context,

      description: mdx`
        Today is the day! I'm finally ready to share a project I've
        been working on. A labor of love. It's been a long time
        coming—about four months! I've shared some details with
        some close friends and family, but mostly been pretty
        tight-lipped about it <small>other than a slightly premature
        post teasing it on social media… 🙃</small> until now.
      `,

      title: 'What the art, part 1: Why?',

      topics: [
        Topic.ART,
        Topic.TECHNOLOGY,
        Topic.NEURODIVERGENCE,
        Topic.MENTAL_ILLNESS,
      ],
    });

    return { props };
  },
});
