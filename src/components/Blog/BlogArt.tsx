import {
  computeBasicArt,
} from '@/lib/art';
import {
  DEFAULT_TOPIC,
  Topic,
} from '@/lib/content';
import {
  clamp,
  styled,
  theme,
} from '@/lib/styles';
import {
  fullBleedClassName,
  FullBleedContainer,
} from '@/components/FullBleedContainer';

const GOLDEN_RATIO = 1.6180334 as const;

const X_PADDING = 4 as const;
const X_SCALE   = GOLDEN_RATIO * 5 as 8.090167;
const Y_OFFSET  = 0.75 as const;
const Y_PADDING = 0.15 as const;
const Y_SCALE   = 1.5 as const;

export const blogArtHeight = clamp('6rem', `${100 / X_SCALE}vw`, '10rem');

const BlogArtContainer = styled(FullBleedContainer, {
  height:   blogArtHeight,
  position: 'relative',
  width:    '100%',
});

const BlogArtGraphic = styled('svg', {
  display:  'block',
  height:   'inherit',
  position: 'absolute',
  width:    '100%',
});

const topicClassName = (topic: Topic = DEFAULT_TOPIC) => (
  theme.topicColorClassNames[topic]
);

const Segment = styled('path', {
  fill:     'currentcolor',
  fillRule: 'nonzero',
  opacity:  0.85,
});

export interface BlogArtProps {
  readonly className?: string;
  readonly hash:       string;
  readonly padded?:    boolean;
  readonly title:      string;
  readonly topics?:    readonly Topic[];
}

export const BlogArt = (props: BlogArtProps) => {
  const {
    className,
    hash,
    title,
    topics: baseTopics = [],
  } = props;

  const topics: readonly Topic[] = baseTopics.length < 2
    ? [ ...baseTopics, Topic[DEFAULT_TOPIC] ]
  : baseTopics;

  const id = (str: string) => (
    `${str}-${hash}`
  );

  const {
    segmentPaths,
    xMax,
    yMax,
  } = computeBasicArt({
    hash,
    xPadding: X_PADDING,
    xScale:   X_SCALE,
    yOffset:  Y_OFFSET,
    yPadding: Y_PADDING,
    yScale:   Y_SCALE,
  });

  const blurY      = yMax * Y_OFFSET;
  const glowSize   = yMax * Y_PADDING / 4;
  const glowOffset = glowSize * 0.75;
  const viewBox    = [ 0, 0, xMax, yMax ];

  return (
    <BlogArtContainer className={ className }>
      <BlogArtGraphic
        className={ fullBleedClassName }
        preserveAspectRatio="none"
        viewBox={ viewBox.join(' ') }
      >
        <title>
          Generated art for the page or post titled
          <i>{ title }</i>,
          with the content or commit hash { hash } {
            topics.length > 0
              ? [ ', and the topics: ', topics.map(String).join(', ') ]
              : null
          }
        </title>

        <defs>
          <filter id={ id('blur') }>
            <feOffset
              in="SourceGraphic"
              dx="0"
              dy={ glowOffset }
              result="glowOffsetOut"
            />

            <feGaussianBlur
              in="glowOffsetOut"
              stdDeviation={ glowSize }
              result="glowBlurOut"
            />

            <feBlend
              in="SourceGraphic"
              in2="glowBlurOut"
              mode="color-dodge"
            />
          </filter>

          <clipPath id={ id('blurOverlayClip') }>
            <rect
              x="0"
              width={ xMax }
              y={ blurY }
              height={ yMax }
            />
          </clipPath>

          <filter id={ id('blurOverlay') }>
            <feOffset
              result="glowOffsetOut"
              in="SourceGraphic"
              dx="0"
              dy={ glowOffset }
            />

            <feGaussianBlur
              result="glowBlurOut"
              in="glowOffsetOut"
              stdDeviation={ glowSize }
            />
          </filter>

          <filter id={ id('blurUnderlay') }>
            <feOffset
              result="glowOffsetOut"
              in="SourceGraphic"
              dx="0"
              dy={ glowOffset }
            />

            <feGaussianBlur
              in="glowOffsetOut"
              result="glowBlurOut"
              stdDeviation={ glowSize }
            />

            <feTurbulence
              type="turbulence"
              baseFrequency="10"
              numOctaves="2"
              result="turbulence"
            />

            <feDisplacementMap
              in="glowBlurOut"
              in2="turbulence"
              result="dither"
              scale="25"
              xChannelSelector="R"
              yChannelSelector="G"
            />

            <feColorMatrix
              in="dither"
              result="saturated"
              type="saturate"
              values="5"
            />

            <feGaussianBlur
              in="saturated"
              result="saturatedBlurOut"
              stdDeviation={ glowSize }
            />
          </filter>

          <g id={ id('blobs') }>
            { segmentPaths.map((path, index) => {
              const topicIndex = index % topics.length;
              const topic = topics[topicIndex];
              const className = topicClassName(topic);

              return (
                <Segment
                  key={ path }
                  className={ className }
                  d={ path }
                  mask="url(#softVerticalFade)"
                />
              );
            }) }
          </g>
        </defs>

        <g
          transform={ [
            `translate(0, ${yMax * Y_PADDING})`,
            `scale(1, ${1 - (Y_PADDING * 2)})`,
          ].join(' ') }
          filter={ `url(#${id('blur')})` }
        >
          <use
            href={ `#${id('blobs')}` }
            mask="url(#horizontalMidFade)"
          />
        </g>

        <g
          clip-path={ `url(#${id('blurOverlayClip')})` }
          filter={ `url(#${id('blurOverlay')})` }
          transform={ [
            `translate(0, ${yMax * Y_PADDING})`,
            `scale(1, ${1 - (Y_PADDING * 2)})`,
          ].join(' ') }
        >
          <use
            href={ `#${id('blobs')}` }
            mask="url(#softVerticalFade)"
          />
        </g>
      </BlogArtGraphic>
    </BlogArtContainer>
  );
};
