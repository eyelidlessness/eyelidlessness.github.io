import {
  computeBasicArt,
  toFixed,
} from '../../lib/art/index.js';
import {
  DEFAULT_TOPIC,
  Topic,
} from '../../lib/content/index.js';
import {
  clamp,
  IRenderer,
  renderer,
  styled,
  theme,
} from '../../lib/styles/index.js';
import {
  fullBleedClassName,
  FullBleedContainer,
} from '../FullBleed/FullBleedContainer.js';
import { BlogArtStaticDefs } from './BlogArtDefs.js';

const GOLDEN_RATIO = 1.6180334 as const;

const X_PADDING = 4 as const;
const X_SCALE   = toFixed(GOLDEN_RATIO * 5, 6) as 8.090167;
const Y_OFFSET  = 0.75 as const;
const Y_PADDING = 0.15 as const;
const Y_SCALE   = 1.5 as const;

export const BLOG_ART_HEIGHT = clamp('6rem', `${100 / X_SCALE}vw`, '10rem');

const BlogArtContainer = styled(FullBleedContainer, {
  height:   BLOG_ART_HEIGHT,
  position: 'relative',
  width:    '100%',
});

const BlogArtGraphic = styled('svg', {
  display:  'block',
  height:   'inherit',
  position: 'absolute',
  width:    '100%',
});

const Segment = styled('path', {
  fill:     'currentcolor',
  fillRule: 'nonzero',
  opacity:  0.85,
});

export enum BlogArtDefsUsage {
  INLINE = 'inline',
  NONE   = 'none',
}

export const blogArtDefaultParameters = {
  xPadding: X_PADDING,
  xScale:   X_SCALE,
  yOffset:  Y_OFFSET,
  yPadding: Y_PADDING,
  yScale:   Y_SCALE,
};

export interface BlogArtProps {
  readonly className?:     string;
  readonly defsUsage?:     BlogArtDefsUsage;
  readonly hash:           string;
  readonly height?:        number;
  readonly padded?:        boolean;
  readonly rawSVG?:        boolean;
  readonly styleRenderer?: IRenderer;
  readonly title:          string;
  readonly topics?:        readonly Topic[];
  readonly width?:         number;
}

export const BlogArt = (props: BlogArtProps) => {
  const {
    className,
    defsUsage          = BlogArtDefsUsage.INLINE,
    hash,
    height,
    rawSVG             = false,
    styleRenderer      = renderer,
    title,
    topics: baseTopics = [],
    width,
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
    ...blogArtDefaultParameters,
    hash,
  });

  const blurY      = yMax * Y_OFFSET;
  const glowSize   = yMax * Y_PADDING / 10.24;
  const glowOffset = glowSize * 0.75;
  const viewBox    = [ 0, 0, xMax, yMax ];

  const svg = (
    <BlogArtGraphic
      className={ fullBleedClassName }
      height={ height }
      preserveAspectRatio="none"
      viewBox={ viewBox.join(' ') }
      width={ width }
    >
      <title>
        Generated art for the page or post titled
        {' '}<i>{ title }</i>,
        with the content or commit hash { hash } {
          topics.length > 0
            ? [ ', and the topics: ', topics.map(String).join(', ') ]
            : null
        }
      </title>

      <defs>
        {(
          defsUsage === BlogArtDefsUsage.INLINE
            ? <BlogArtStaticDefs />
            : null
        )}

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
            const className = styleRenderer.renderRule(() => ({
              ...theme.topicColors[topic],
            }), Object.keys);

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
  );

  if (rawSVG) {
    // Wrapper `<svg>` "crops" the nested `<svg>`'s content, as detected by
    // downstream tooling (`sharp`).
    //
    // NOTE: this *just happens to work* because I know that the viewBox exceeds
    // width/height. It's a terrible solution!
    //
    // It only needs to be applied here because I also know that the ResumeArt
    // implementation **does not** exceed the dimensions. So, that's probably a
    // better frame of reference for a proper solution 🙃
    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {svg}
      </svg>
    );
  }

  return (
    <BlogArtContainer className={ className }>{ svg }</BlogArtContainer>
  );
};
