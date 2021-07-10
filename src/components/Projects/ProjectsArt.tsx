import hsluv                 from 'hsluv';
import hasher                from 'node-object-hash';
import {
  Fragment,
} from 'preact';
import {
  blogArtDefaultParameters,
  BLOG_ART_HEIGHT,
} from '@/components/Blog';
import {
  AnyPointSequence,
  COORDINATE_MAX,
  CubicBezierPoints,
  cubicBezierPoints,
  getNaiveSegments,
  getNonPhallicSegments,
  HexChar,
  hexChars,
  HexPointSequence,
  MIN_SMOOTHING,
  SMOOTHING_RATIO,
  ScalePointOptions,
  SegmentList,
  scalePoint,
  toFixed,
  toHexPointSequence,
  toPointSequence,
} from '@/lib/art';
import {
  CustomArtProps,
  Topic,
} from '@/lib/content';
import { sortBy }            from '@/lib/collections';
import {
  identifier,
  renderer,
  styled,
  StylesProvider as DefaultStylesProvider,
  theme,
} from '@/lib/styles';

const hsluvColors = '0123456789'.split('').map((value) => {
  const offset = Number(value);

  const hue = offset * 36;

  return {
    dark: {
      emphasize: hsluv.hsluvToHex([ hue, 100, 35 ]),
      hover:     hsluv.hsluvToHex([ hue, 100, 3 ]),
      plot:      hsluv.hsluvToHex([ hue, 100, 74 ]),
      selected:  hsluv.hsluvToHex([ hue, 100, 64 ]),
      x:         hsluv.hsluvToHex([ hue, 100, 84 ]),
      y:         hsluv.hsluvToHex([ hue, 100, 74 ]),
    },

    light: {
      emphasize: hsluv.hsluvToHex([ hue, 100, 80 ]),
      hover:     hsluv.hsluvToHex([ hue, 100, 97 ]),
      plot:      hsluv.hsluvToHex([ hue, 100, 64 ]),
      selected:  hsluv.hsluvToHex([ hue, 100, 64 ]),
      x:         hsluv.hsluvToHex([ hue, 100, 54 ]),
      y:         hsluv.hsluvToHex([ hue, 100, 44 ]),
    },
  };
});

type Indexed<P> =
  & Omit<P, 'as'>
  & {
    readonly index: number;
  };

const segmentTransition = 'stroke-width 0.1s ease-in-out, color 0.1s ease-in-out';

type SegmentLinePathProps<P> =
  & Indexed<Omit<P, 'fill'>>
  & {
    readonly fill?:  boolean;
    readonly topic?: Topic;
  };

const topicColorStyles = (index: number, topic?: Topic) => (
  topic == null
    ? {
      color: hsluvColors[index].light.plot,

      nested: {
        [theme.darkMode]: {
          color: hsluvColors[index].dark.plot,
        },
      },
    }
    : theme.topicColors[topic]
);

const segmentLinePathStyles = ({
  fill,
  index,
  topic,
}: SegmentLinePathProps<{}>) => ({
  ...topicColorStyles(index, topic),

  ...(fill
    ? {
      fill:        'currentcolor',
      fillOpacity: 0.15,
      mask:        'url(#curvesVerticalFade)',
      strokeWidth: 0,
    }
    : {
      fill:        'none',
      strokeWidth: 2,
      stroke:      'currentcolor',
    }),

  transition:   segmentTransition,
  vectorEffect: 'non-scaling-stroke',
} as const);

type BaseSegmentPathProps = SegmentLinePathProps<JSX.IntrinsicElements['path']>;

const BaseSegmentPath = ({
  fill,
  index,
  topic,
  ...props
}: BaseSegmentPathProps) => (
  <path { ...props } />
);

const SegmentPath = styled<BaseSegmentPathProps>(
  BaseSegmentPath,
  segmentLinePathStyles
);

const HashPlotExample = styled('svg', {
  overflow:     'visible',
  padding:      '1rem',
});

const HASH_PLOT_PADDING = 20;

type HashPlotScaleOptions =
  & Partial<ScalePointOptions<any, any>>
  & {
    readonly xRange?: number;
    readonly xMax?:   number;
    readonly yRange?: number;
    readonly yMax?:   number;
  };

const defaultScaleOptions = {
  xMax:   COORDINATE_MAX,
  xScale: 1,
  xShift: 0,
  yMax:   COORDINATE_MAX,
  yScale: 1,
  yShift: 0,
} as const;

type HashPlotPointSize =
  | number
  | 'data-driven';

const dataDrivenRadiusHasher = hasher({
  alg:    'sha1',
  coerce: true,
  sort:   true,
  trim:   true,
});

const dataDrivenRadiusMin = 16;
const dataDrivenRadiusMax = 128;

const hexCharsList = Array.from(hexChars);

const dataDrivenHexCharValues = hexCharsList.map((char) => (
  parseInt(char ?? dataDrivenRadiusHasher.hash(char), 16)
));

const dataDrivenHexCharMin = Math.min(...dataDrivenHexCharValues);
const dataDrivenHexCharMax = (
  Math.max(...dataDrivenHexCharValues) - dataDrivenHexCharMin
);

type DataDrivenHexCharPointSizes = Record<HexChar, number>;

const dataDrivenHexCharPointSizes = hexCharsList.reduce<
  DataDrivenHexCharPointSizes
>((acc, char, index) => {
  const value = dataDrivenHexCharValues[index];
  const scale = toFixed(
    (
      ((value - dataDrivenHexCharMin) / dataDrivenHexCharMax) *
        (dataDrivenRadiusMax - dataDrivenRadiusMin)
    ) + dataDrivenHexCharMin
  , 2);

  return {
    ...acc,

    [char]: scale,
  };
}, {} as DataDrivenHexCharPointSizes);

interface HashPlotProps {
  readonly className?:      string;
  readonly exampleId:       number;
  readonly height?:         number;
  readonly hexPoints:       ReadonlyArray<ArrayType<HexPointSequence>>;
  readonly pointSize?:      HashPlotPointSize;
  readonly points:          AnyPointSequence;
  readonly scaleOptions?:   HashPlotScaleOptions;
  readonly segments?:       SegmentList<any, any>;
  readonly sortIndexes:     readonly number[];
  readonly sortToggleClass: string;
  readonly topics?:         readonly Topic[];
  readonly width?:          number;
}

const HashPlot = ({
  className,
  exampleId,
  hexPoints,
  points,
  pointSize      = 6,
  scaleOptions,
  segments,
  sortIndexes,
  sortToggleClass,
  topics,
  ...props
}: HashPlotProps) => {
  const {
    xScale,
    xShift,
    xRange = xScale * (COORDINATE_MAX + (xShift * 2)),
    yMax,
    yShift,
    yScale,
    yRange = yScale * (yMax + (yShift * 2)),
  } = {
    ...defaultScaleOptions,
    ...scaleOptions,
  } as Required<HashPlotScaleOptions>;
  const pad    = (HASH_PLOT_PADDING * 2);
  const height = props.height ?? yRange + pad;
  const width  = props.width  ?? xRange + pad;

  const pointSizes = hexPoints.map(({ x, y }, index) => {
    if (typeof pointSize === 'number') {
      return pointSize;
    }

    const hexPointCoordinate = index % 2 === 0
      ? x
      : y;
    const hexPointCoordinateChar = (
      hexPointCoordinate[0]
    ) as HexChar;

    return typeof pointSize === 'number'
      ? pointSize
      : dataDrivenHexCharPointSizes[hexPointCoordinateChar];
  });

  const blurRadii = typeof pointSize === 'number'
    ? null
    : pointSizes.map((computedPointSize) => (
        computedPointSize * 0.666 + 4
      ));

  const filterIds = blurRadii?.map((_, index) => (
    `hash-plot-blur-${exampleId}-${index}`
  ));

  const plotPoint = ({
    x: pointX,
    y: pointY,
  }: ArrayType<typeof points>, index: number) => {
    const sortedIndex = sortIndexes[index];
    const {
      x: sortedX,
      y: sortedY,
    } = points[sortedIndex];

    const cx = toFixed((pointX + xShift) / xRange * 100, 4);
    const cy = 100 - toFixed((pointY - yShift) / yRange * 100, 4);

    const sortedCx = toFixed((sortedX + xShift) / xRange * 100, 4);
    const sortedCy = 100 - toFixed((sortedY - yShift) / yRange * 100, 4);

    const sortedTranslateXPercent = 0 - toFixed(cx - sortedCx, 4);
    const sortedTranslateyPercent = 0 - toFixed(cy - sortedCy, 4);

    const pointSize = pointSizes[index];
    const filterId  = filterIds?.[index];

    const filterProps = filterId == null
      ? {}
      : {
        filter: `url(#${filterId})`,
      };

    return {
      cx,
      cy,
      filterId,
      filterProps,
      pointSize,
      sortedCx,
      sortedCy,
      sortedTranslateXPercent,
      sortedTranslateyPercent,
    };
  };

  if (segments == null) {
    return null;
  }

  const segmentData = segments.map((segment) => {
    const [
      baseStartPoint,
      baseMidPoint,
      baseEndPoint,
    ] = segment;

    const { x: startX } = baseStartPoint;
    const { y: midY }       = baseMidPoint;
    const { x: endX }   = baseEndPoint;

    const width = endX - startX;

    const smoothing = width === 0
      ? 0
      : Math.max(midY / width * SMOOTHING_RATIO, MIN_SMOOTHING);

    const cubicPoints = segment?.reduce<
      ReadonlyArray<CubicBezierPoints<any, any>>
    >((
      acc,
      point,
      index
    ) => {
      if (index === 0) {
        return acc;
      }

      const segmentPoints = cubicBezierPoints<any, any>({
        index,
        point,
        points: segment,
        smoothing,
        xScale,
        yScale,
      });

      return [
        ...acc,
        segmentPoints,
      ];
    }, []);

    return {
      cubicPoints,
      segment,
    };
  });

  const curvesContainerStyles = {
    overflow: 'visible',
  };

  const CurvesContainer = styled(HashPlotExample, curvesContainerStyles);

  return (
    <CurvesContainer
      className={ className }
      height={ height }
      width={ width }
      preserveAspectRatio="none"
      viewBox={ `0 0 ${width} ${height}` }
    >
      <defs>
        <linearGradient id="curvesVerticalFadeGradient" y2="1" x2="0">
          <stop offset="0" stop-color="white" stop-opacity="1" />
          <stop offset="0.25" stop-color="white" stop-opacity=".75" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>

        <mask
          id="curvesVerticalFade"
          maskContentUnits="objectBoundingBox"
        >
          <rect
            fill="url(#curvesVerticalFadeGradient)"
            height="1"
            width="1"
          />
        </mask>
      </defs>

      { segmentData.map(({
        cubicPoints,
        segment,
      }, index) => {
        const [
          baseStartPoint,
          baseMidPoint,
          baseEndPoint,
        ] = segment;

        const curvesPoints = cubicPoints.map((
          [ controlStart, controlEnd ],
          curveIndex
        ) => {
          const start = curveIndex === 0
            ? baseStartPoint
            : baseMidPoint;
          const end = curveIndex === 0
            ? baseMidPoint
            : baseEndPoint;

          return [
            start,
            controlStart,
            controlEnd,
            end,
          ];
        });

        const StrokePath = () => (
          <>
            { curvesPoints.map((curvePoints) => {
              const d = curvePoints.map((point, curvePointIndex) => {
                const { cx, cy } = plotPoint(point, index);
                const x = cx / 100 * width;
                const y = cy / 100 * height;

                const command = curvePointIndex === 0
                  ? 'M '
                : curvePointIndex === 1
                  ? 'C '
                  : '';

                return `${command} ${x},${y}`;
              }).join(' ');

              const topic = topics?.[index % topics?.length ?? 0];

              return (
                <SegmentPath
                  d={ d }
                  index={ index }
                  topic={ topic }
                />
              );
            }) }
          </>
        );

        const FillPath = () => {
          const d = curvesPoints
          .map((curvePoints, curveIndex) => {
            const d = curvePoints.map((point, curvePointIndex) => {
              if (curveIndex > 0 && curvePointIndex === 0) {
                return '';
              }

              const { cx, cy } = plotPoint(point, index);
              const x = cx / 100 * width;
              const y = cy / 100 * height;

              const command = (
                curvePointIndex === 0
                  ? 'M '
                : curvePointIndex === 1
                  ? 'C '
                  : ''
              );

              return `${command} ${x},${y}`;
            }).join(' ');

            return d;
          })
          .join(' ');

          const topic = topics?.[index % topics?.length ?? 0];

          return (
            <SegmentPath
              d={ d }
              fill={ true }
              index={ index }
              topic={ topic }
            />
          );
        };

        return (
          <>
            <StrokePath />
            <FillPath />
          </>
        );
      }) }
    </CurvesContainer>
  );
};

export const ProjectsArt = ({
  className:  propsClassName,
  hash,
  height,
  identifier: identifier_ = identifier,
  renderType,
  StylesProvider          = DefaultStylesProvider,
  styleRenderer           = renderer,
  topics,
  width,
}: CustomArtProps) => {
  const hexPoints  = toHexPointSequence(hash);
  const basePoints = toPointSequence(hash, hexPoints);

  const {
    xPadding: defaultXPadding,
    xScale,
    yPadding: defaultYPadding,
    yScale,
  } = blogArtDefaultParameters;

  const isMeta = renderType === 'meta';

  const xPadding = isMeta
    ? 0
    : defaultXPadding;
  const yPadding = isMeta
    ? 0
    : defaultYPadding;

  const xShift = xPadding / 2;
  const yShift = yPadding / 2;

  const scaleOptions = {
    xScale,
    xShift,
    yScale,
    yShift,
  };

  const sortedPoints = sortBy(basePoints, (a, b) => (
    a.x === b.x
      ? 0
    : a.x > b.x
      ? 1
      : -1
  ));

  const scaledPoints: AnyPointSequence = sortedPoints.map((point) => (
    scalePoint(point, scaleOptions)
  ));

  const sortIndexes = scaledPoints.map((_, index) => index);

  const renderHexPoints = scaledPoints.map((point) => (
    hexPoints[scaledPoints.indexOf(point)]
  ));

  const xMax = (COORDINATE_MAX + xPadding) * xScale;

  const sortToggleClass = identifier_();

  const naiveSegments = getNaiveSegments({
    points: scaledPoints as any,
    xMax,
    xScale,
    yScale,
  });

  const segments = getNonPhallicSegments({
    segments: naiveSegments,
    xMax,
    xScale,
    yScale,
  });

  const pathStyles = isMeta
    ? {
      path: {
        strokeWidth:     '4px !important',
        transform:       'scale(.95)',
        transformOrigin: '50% 50%',
      },
    }
    : null;

  const padding = isMeta
    ? '0 !important'
    : '0 0 1rem !important';

  const defaultRenderHeight = BLOG_ART_HEIGHT;
  const defaultRenderWidth  = '100%';

  const toPx = (value?: number | string) => (
    typeof value === 'number'
      ? `${value}px`
      : value
  );
  const scaled = <T extends number | string>(value: T, ratio: number) => (
    typeof value === 'number'
      ? value * ratio
      : value
  );

  const renderHeight = isMeta
    ? scaled(height ?? defaultRenderHeight, 0.95)
    : BLOG_ART_HEIGHT;
  const renderWidth = isMeta
    ? scaled(width ?? defaultRenderWidth, 0.95)
    : '100%';

  const graphicHeight = isMeta && height != null
    ? scaled(height, 0.95)
    : height;
  const graphicWidth = isMeta && width != null
    ? scaled(width, 0.95)
    : width;

  const hashPlotClassName = styleRenderer.renderRule(() => ({
    gridColumn: '1 / -1',
    height:     toPx(renderHeight),
    padding,
    width:      toPx(renderWidth),

    nested: {
      ...pathStyles,
    },
  }), Object.keys);

  const className = isMeta
    ? propsClassName
    : `${propsClassName} ${hashPlotClassName}`;

  return (
    <StylesProvider>
      <HashPlot
        className={ className }
        exampleId={ -1 }
        height={ graphicHeight }
        hexPoints={ renderHexPoints }
        points={ scaledPoints }
        scaleOptions={ scaleOptions }
        segments={ segments }
        sortIndexes={ sortIndexes }
        sortToggleClass={ sortToggleClass }
        topics={ topics }
        width={ graphicWidth }
      />
    </StylesProvider>
  );
};
