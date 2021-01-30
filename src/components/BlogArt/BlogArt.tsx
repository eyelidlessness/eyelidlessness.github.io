import {
  DEFAULT_TOPIC,
  Topic,
} from '@/lib/content';
import {
  clamp,
  styled,
  theme,
} from '@/lib/styles';
import { FullBleedContainer } from '@/components/FullBleedContainer';

const GOLDEN_RATIO  = 1.6180334;
const RATIO         = GOLDEN_RATIO * 5;
const INVERSE_RATIO = 100 / RATIO;

export const blogArtHeight = clamp('6rem', `${INVERSE_RATIO}vw`, '10rem');

const BlogArtContainer = styled(FullBleedContainer, {
  gridColumn: '1/-1',
  height:   blogArtHeight/* :   `${INVERSE_RATIO}vw` */,
  position: 'relative',
  width:    '100%',
  zIndex:   -1,
});

const BlogArtGraphic = styled('svg', {
  display:  'block',
  height:   'inherit'/* :   `${INVERSE_RATIO}vw` */,
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

const chunkString = (value: string, length: number): readonly string[] => {
  const pattern = new RegExp(`.{${length}}`, 'g');

  return value.match(pattern) ?? [];
};

const hexToNumber = (value: string) => parseInt(value, 16);

type SortResult = -1 | 1;

const sortBy = <T, >(
  values:   readonly T[],
  callback: (a: T, b: T) => SortResult
) => {
  let results = values.slice();

  return results.sort(callback);
};

type Point = readonly [ x: number, y: number ];

const curveLine = ([ x0, y0 ]: Point, [ x1, y1 ]: Point) => {
  const xLength = x1 - x0;
  const yLength = y1 - y0;

  return {
    angle:  Math.atan2(yLength, xLength),
    length: Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2)),
  };
};

const curveControlPoint = (
  current:   Point,
  previous:  Point,
  next:      Point,
  reverse:   boolean,
  smoothing: number
): Point => {
  const reverseCompensation = reverse ?
    Math.PI :
    0;
  const opposedLine = curveLine(previous, next);

  const angle = opposedLine.angle + reverseCompensation;
  const length = opposedLine.length * smoothing;

  const [ xCurrent, yCurrent ] = current;

  const x = xCurrent + (Math.cos(angle) * length);
  const y = yCurrent + (Math.sin(angle) * length);

  return [ x, y ];
};

type CubicBezierPoints = [ controlA: Point, controlB: Point, point: Point ];

const cubicBezierPoints = (
  point:  Point,
  index:  number,
  points: readonly Point[],
  smoothing = 0.1
): CubicBezierPoints => {
  const startCurrent = points[index - 1];

  if (startCurrent == null) {
    throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());
  }

  const startPrevious = points[index - 2] ?? startCurrent;
  const startControl = curveControlPoint(
    startCurrent,
    startPrevious,
    point,
    false,
    smoothing
  );

  const previous = startCurrent;
  const next = points[index + 1] ?? point;
  const endControl = curveControlPoint(
    point,
    previous,
    next,
    true,
    smoothing
  );

  return [ startControl, endControl, point ];
};

const yBounds = (points: Point[]) => (
  points.reduce(([ min, max ], [ _, y ]) => ([
    Math.min(min, y),
    Math.max(max, y),
  ]), [ Infinity, -Infinity ])
);

const joinPoint = (point: Point) => point.join(',');
const joinPoints = (points: Point[]) => points.map(joinPoint).join(' ');

type Segment = readonly [ start: Point, mid: Point, end: Point ];

export interface BlogArtProps {
  readonly className?: string;
  readonly hash:       string;
  readonly padded?:    boolean;
  readonly topics?:    readonly Topic[];
}

const isEmpty = (array: unknown[]): array is [] => (
  array.length === 0
);

const getCubicPoints = (segment: Segment, smoothing: number) => (
  segment.reduce<readonly string[]>((
    acc:    readonly string[],
    point:  Point,
    index:  number,
    points: readonly Point[]
  ) => {
    if (index === 0) {
      return acc;
    }

    const result = cubicBezierPoints(
      point,
      index,
      points,
      smoothing
    );

    return [
      ...acc,
      `C ${joinPoints(result)}`,
    ];
  }, [])
);

export const BlogArt = (props: BlogArtProps) => {
  const {
    className,
    hash,
    // padded             = false,
    topics: baseTopics = [],
  } = props;

  const topics: readonly Topic[] = baseTopics.length < 2
    ? [ ...baseTopics, Topic[DEFAULT_TOPIC] ]
  : baseTopics;

  const hashChunks = chunkString(hash, 4);
  const basePoints = hashChunks.map((value) => (
    chunkString(value, 2).map(hexToNumber) as any as Point
  ));

  if (basePoints.length < 8) {
    return null;
  }

  const sortedPoints = sortBy(basePoints, ([ a ], [ b ]) => (
    a > b ?
      1 :
    -1
  ));

  if (isEmpty(sortedPoints)) {
    return null;
  }

  const [ originalXMin ] = sortedPoints[0]!;
  const [ originalXMax ] = sortedPoints[sortedPoints.length - 1]!;

  const xRange = originalXMax - originalXMin;

  const [ originalYMin, originalYMax ] = yBounds(sortedPoints);

  const yRange = originalYMax - originalYMin;

  const xPadding = 4 * RATIO;
  const xShift = xPadding / 2;
  const yPadding = 1.5;

  const adjustedPoints = sortedPoints.map(([ x, y ]): Point => ([
    ((x - originalXMin + xShift) / xRange * 100 * RATIO),
    (y - originalYMin) / yRange * 100,
  ]));

  if (isEmpty(sortedPoints)) {
    return null;
  }

  const [ baseXMax ] = adjustedPoints[adjustedPoints.length - 1]!;
  const xMax = baseXMax + (xPadding * 4);

  const [ , baseYMax ] = yBounds(adjustedPoints);
  const yMax = baseYMax * yPadding;

  const viewBox = [
    0,
    0,
    xMax,
    yMax,
  ];

  const startPoint: Point = [ 0, yMax ];
  const endPoint: Point = [ xMax, yMax ];

  const segments = adjustedPoints.reduce<readonly Segment[]>((
    acc,
    point,
    index,
    points
  ) => {
    const [ previousX ] = points[index - 1] ?? startPoint;
    const [ nextX ] = points[index + 1] ?? endPoint;

    const segment: Segment = [
      [ previousX, 0 ],
      point,
      [ nextX, 0 ],
    ];

    return [
      ...acc,
      segment,
    ];
  }, []);

  // Generating art will be risk-free fun, I thought...
  const nonPhallicSegments = segments.map<Segment>((segment) => {
    const [
      startPoint,
      [ midX, height ],
      [ endX, endY ],
    ] = segment;
    const [ startX, startY ] = startPoint;
    const width = endX - startX;
    const ratio = height / width;
    const maxRatio = 6;
    const ratioAdjustment = maxRatio / ratio;

    if (ratioAdjustment < 1) {
      const ratioAdjustmentX    = ratioAdjustment * 0.2;
      const adjustmentX         = ratioAdjustmentX * startX;
      const ratioAdjustedStartX = startX - adjustmentX;
      const ratioAdjustedEndX   = endX   + adjustmentX;

      const overshootX = (
        ratioAdjustedStartX < 0 ?
          Math.abs(ratioAdjustedStartX) :
        ratioAdjustedEndX > xMax ?
          xMax - ratioAdjustedEndX :
        0
      );

      const adjustedStartX = ratioAdjustedStartX + overshootX;
      const adjustedEndX   = ratioAdjustedEndX   + overshootX;

      const ratioAdjustmentY = ratioAdjustment * 0.3;

      const adjustedMidX   = midX   + overshootX;
      const adjustmentY    = ratioAdjustmentY * height;
      const adjustedHeight = height - adjustmentY;

      return [
        [ adjustedStartX, startY ],
        [ adjustedMidX,   adjustedHeight ],
        [ adjustedEndX,   endY ],
      ];
    }

    return segment;
  });

  const reverseYProportion = 0.75;
  const terminatingPointAdjustment = reverseYProportion > 0.5
    ? yMax * reverseYProportion
  : -1 * yMax * reverseYProportion;

  const verticalPadding = 0.15;

  const cubicSegments = nonPhallicSegments.reduce((
    acc,
    segment,
    index,
    segments
  ) => {
    const { length } = segments;
    const [
      baseStartPoint,
      // ease0,
      baseMidPoint,
      // ease1,
      baseEndPoint,
    ] = segment;
    const [ startX, baseStartY ] = baseStartPoint;
    const [ midX, midY ] = baseMidPoint;
    const [ endX, baseEndY ] = baseEndPoint;
    const width = endX - startX;

    const smoothing = width === 0 ?
      0 :
    Math.max(midY / width * 0.05, 0.15);

    const startY = reverseYProportion > 0.5
      ? baseStartY + terminatingPointAdjustment
    : yMax - baseStartY + terminatingPointAdjustment;

    const startPoint: Point = [
      startX,
      startY,
    ];

    const endY = reverseYProportion > 0.5
      ? baseEndY + terminatingPointAdjustment
    : yMax - baseEndY + terminatingPointAdjustment;

    const endPoint: Point = [
      endX,
      endY,
    ];

    const startMidXDistance = midX - startX;
    const midEndXDistance = endX - midX;
    // const midPointAdjustment = (midX - startX) * 0.05;

    const forwardMidPointXAdjustment = midEndXDistance > startMidXDistance
      ? 0
    : 0 - ((midX - startX) * 0.05);
    const forwardMidPointYAdjustment = (length - index) * (0.015 * yMax);

    const forwardMidPoint: Point = [
      midX + forwardMidPointXAdjustment,
      midY - forwardMidPointYAdjustment,
    ];

    const forwardSegment: Segment = [
      startPoint,
      forwardMidPoint,
      endPoint,
    ];

    const cubicPoints = getCubicPoints(forwardSegment, smoothing);

    const reverseMidPointXAdjustment = midEndXDistance > startMidXDistance
      ? (endX - midX) * 0.05
    : 0;
    const reverseMidPointYAdjustment = (length - index) * (0.015 * yMax);

    const reverseMidPoint: Point = [
      midX + reverseMidPointXAdjustment,
      yMax - reverseMidPointYAdjustment,
    ];

    const reverseSegment: Segment = [
      endPoint,
      reverseMidPoint,
      startPoint,
    ];

    const inverseCubicPoints = getCubicPoints(reverseSegment, smoothing);

    return [
      ...acc,
      [
        `M ${startPoint}`,
        ...cubicPoints,
        // `V ${endPoint}`,
        ...inverseCubicPoints,
        'Z',
      ],
    ];
  }, [] as ReadonlyArray<readonly string[]>);

  const id = (str: string) => `${str}-${hash}`;

  const glowSize = yMax * (verticalPadding / 4);
  const glowOffset = glowSize * 0.75;

  return (
    <BlogArtContainer className={ className }>
      <BlogArtGraphic preserveAspectRatio="none" viewBox={ viewBox.join(' ') }>
        <defs>
          {/* <linearGradient id="horizontalMidFadeGradient" y2="0" x2="1">
            <stop offset="0"      stopColor="white" stopOpacity="0.25" />
            <stop offset="0.0125" stopColor="white" stopOpacity="0.25" />
            <stop offset="0.075"  stopColor="white" stopOpacity=".5" />
            <stop offset="0.5"    stopColor="white" stopOpacity="1" />
            <stop offset="0.925"  stopColor="white" stopOpacity=".5" />
            <stop offset="0.9875" stopColor="white" stopOpacity="0.25" />
            <stop offset="1"      stopColor="white" stopOpacity="0.25" />
          </linearGradient>

          <mask id="horizontalMidFade" maskContentUnits="objectBoundingBox">
            <rect fill="url(#softVerticalFadeGradient)" height="1" width="1" />
          </mask>

          <linearGradient id="softVerticalFadeGradient" y2="1" x2="0">
            <stop offset="0"    stopColor="white" stopOpacity="1" />
            <stop offset="0.25" stopColor="white" stopOpacity=".75" />
            <stop offset="1"    stopColor="white" stopOpacity="0.35" />
          </linearGradient>

          <mask id="softVerticalFade" maskContentUnits="objectBoundingBox">
            <rect fill="url(#softVerticalFadeGradient)" height="1" width="1" />
          </mask> */}

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
              transform={ `translate(0, ${yMax * (verticalPadding * 2)})` }
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
              y={ (
                reverseYProportion > 0.5
                  ? 0 + terminatingPointAdjustment - verticalPadding
                : yMax + terminatingPointAdjustment - verticalPadding
              ) }
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
              transform={ `translate(0, ${yMax * (verticalPadding * 2)})` }
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
              transform={ `translate(0, ${yMax * (verticalPadding * 20)})` }
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
            { cubicSegments.map((segment, index) => {
              const path = segment.join(' ');
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
            `translate(0, ${yMax * verticalPadding})`,
            `scale(1, ${1 - (verticalPadding * 2)})`,
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
            `translate(0, ${yMax * verticalPadding})`,
            `scale(1, ${1 - (verticalPadding * 2)})`,
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
