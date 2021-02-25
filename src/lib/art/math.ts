import { sortBy } from '@/lib/collections';

const COORDINATE_MAX  = parseInt('ff', 16);
const COORDINATE_MIN  = parseInt('00', 16);
const MID_POINT_TILT  = 0.05 as const;
const MIN_SMOOTHING   = 0.15 as const;
const SMOOTHING_RATIO = 0.05 as const;

export class InvalidHashError extends Error {
  constructor(hash: string) {
    super(`Invalid hash: ${hash}`);
  }
}

const validHashPattern = /^[0-9a-f]{40}$/i;

const isValidHash = (value: string) => (
  validHashPattern.test(value)
);

const hexChars = new Set([
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
] as const);

type HexChar = SetType<typeof hexChars>;

type Tuple<
  T,
  Length extends number,
  Acc    extends readonly T[] = readonly []
> =
    Acc extends { length: Length }
      ? Acc
      : Tuple<T, Length, readonly [...Acc, T]>;

type HexCoordinate = `${HexChar}${HexChar}`;

interface HexPoint {
  readonly x: HexCoordinate;
  readonly y: HexCoordinate;
}

type HexPointSequence = Tuple<HexPoint, 10>;

const isHexPointSequence = (
  value: readonly HexPoint[]
): value is HexPointSequence => (
  value.length === 10
);

const hexPointPattern = /([0-9a-f]{2})([0-9a-f]{2})/ig;

export const toHexPointSequence = (hash: string): HexPointSequence => {
  if (!isValidHash(hash)) {
    throw new InvalidHashError(hash);
  }

  const matches = Array.from(hash.matchAll(hexPointPattern) ?? []);
  const points  = matches.map(([ _, x, y ]) => ({
    x,
    y,
  } as HexPoint));

  if (!isHexPointSequence(points)) {
    throw new InvalidHashError(hash);
  }

  return points;
};

const isCoordinateSymbol = Symbol('IS_POINT');

type Coordinate =
  & number
  & {
    [isCoordinateSymbol]: true;
  };

export const coordinate = (value: number): Coordinate => (
  Object.assign(value, {
    [isCoordinateSymbol]: true,
  } as const)
);

const toCoordinate = (value: HexCoordinate): Coordinate => {
  const result = parseInt(value, 16);

  if (result > COORDINATE_MAX || result < COORDINATE_MIN) {
    throw new Error(`Not a valid coordinate: ${value}`);
  }

  return coordinate(result);
};

interface Point {
  readonly x: Coordinate;
  readonly y: Coordinate;
}

const toPoint = ({ x, y }: HexPoint): Point => ({
  x: toCoordinate(x),
  y: toCoordinate(y),
});

type PointSequence = Tuple<Point, 10>;

const isPointSequence = (value: readonly Point[]): value is PointSequence => (
  value.length === 10
);

export const toPointSequence = (hash: string): PointSequence => {
  const hexPoints = toHexPointSequence(hash);

  try {
    const result = hexPoints.map(toPoint);

    if (!isPointSequence(result)) {
      throw new InvalidHashError(hash);
    }

    return result;
  }
  catch {
    throw new InvalidHashError(hash);
  }
};

const scaledCoordinateSymbol = Symbol('SCALED_COORDINATE');

type ScaledCoordinate<Ratio> =
  & number
  & {
    [scaledCoordinateSymbol]: Ratio;
  };

type AnyCoordinate =
  | Coordinate
  | ScaledCoordinate<any>;

interface VerticallyPositioned {
  readonly y: AnyCoordinate;
}

const yBounds = (points: readonly VerticallyPositioned[]) => (
  points.reduce(({ max, min }, { y }) => ({
    max: Math.max(max, y),
    min: Math.min(min, y),
  }), {
    max: -Infinity,
    min: Infinity,
  })
);

const scaledCoordinate = <Scale>(
  value: number,
  scale: Scale
): ScaledCoordinate<Scale> => (
  Object.assign(value, {
    [scaledCoordinateSymbol]: scale,
  } as const)
);

interface ScalePointOptions<X extends number, Y extends number> {
  readonly point:  Point;
  readonly xScale: X;
  readonly xShift: number;
  readonly yScale: Y;
  readonly yRange: number;
  readonly yShift: number;
}

interface ScaledPoint<X extends number, Y extends number> {
  readonly x: ScaledCoordinate<X>;
  readonly y: ScaledCoordinate<Y>;
}

const scalePoint = <X extends number, Y extends number>({
  point: { x, y },
  xScale,
  xShift,
  yRange,
  yScale,
  yShift,
}: ScalePointOptions<X, Y>): ScaledPoint<X, Y> => ({
  x: scaledCoordinate(
    COORDINATE_MAX * ((x + xShift) / COORDINATE_MAX) * xScale,
    xScale
  ),
  y: scaledCoordinate(
    ((y + yShift) / yRange * 100),
    yScale
  ),
});

interface GetSegmentsOptions<X extends number, Y extends number> {
  readonly points: ReadonlyArray<ScaledPoint<X, Y>>;
  readonly xMax:   number;
  readonly xScale: X;
  readonly yScale: Y;
}

type Segment<X extends number, Y extends number> = readonly [
  start: ScaledPoint<X, Y>,
  mid:   ScaledPoint<X, Y>,
  end:   ScaledPoint<X, Y>,
];

const getSegments = <
  X extends number,
  Y extends number
>({
  points,
  xMax,
  xScale,
  yScale,
}: GetSegmentsOptions<X, Y>) => (
  points.reduce<
    ReadonlyArray<Segment<X, Y>>
  >((
    acc,
    mid,
    index,
    points
  ) => {
    const { x: previousX } = points[index - 1] ?? {
      x: scaledCoordinate(0, xScale),
    };
    const { x: nextX } = points[index + 1] ?? {
      x: scaledCoordinate(xMax, xScale),
    };

    const y = scaledCoordinate(0, yScale);

    const start = {
      x: previousX,
      y,
    };
    const end = {
      x: nextX,
      y,
    }

    const segment = [
      start,
      mid,
      end,
    ] as const;

    return [
      ...acc,
      segment,
    ];
  }, [])
);

interface GetNonPhallicSegmentsOptions<X extends number, Y extends number> {
  readonly segments: ReadonlyArray<Segment<X, Y>>;
  readonly xMax:     number;
  readonly xScale:   X;
  readonly yScale:   Y;
}

/**
 * Generating art will be risk-free fun, I thought...
 */
const getNonPhallicSegments = <X extends number, Y extends number>({
  segments,
  xMax,
  xScale,
  yScale,
}: GetNonPhallicSegmentsOptions<X, Y>) => (
  segments.map<Segment<X, Y>>((segment) => {
    const [
      start,
      { x: midX, y: height },
      { x: endX, y: endY },
    ] = segment;
    const { x: startX, y: startY } = start;
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

      const start = {
        x: scaledCoordinate(adjustedStartX, xScale),
        y: scaledCoordinate(startY,         yScale),
      };
      const mid = {
        x: scaledCoordinate(adjustedMidX,   xScale),
        y: scaledCoordinate(adjustedHeight, yScale),
      };
      const end = {
        x: scaledCoordinate(adjustedEndX, xScale),
        y: scaledCoordinate(endY,         yScale),
      };

      return [
        start,
        mid,
        end,
      ];
    }

    return segment;
  })
);

const curveLine = <X extends number, Y extends number>(
  { x: x0, y: y0 }: ScaledPoint<X, Y>,
  { x: x1, y: y1 }: ScaledPoint<X, Y>
) => {
  const xLength = x1 - x0;
  const yLength = y1 - y0;

  return {
    angle:  Math.atan2(yLength, xLength),
    length: Math.sqrt((xLength ** 2) + (yLength ** 2)),
  };
};

interface CurveControlPointOptions<X extends number, Y extends number> {
  readonly current:   ScaledPoint<X, Y>;
  readonly previous:  ScaledPoint<X, Y>;
  readonly next:      ScaledPoint<X, Y>;
  readonly reverse:   boolean;
  readonly smoothing: number;
  readonly xScale:    X;
  readonly yScale:    Y;
}

const curveControlPoint = <X extends number, Y extends number>({
  current,
  previous,
  next,
  reverse,
  smoothing,
  xScale,
  yScale,
}: CurveControlPointOptions<X, Y>): ScaledPoint<X, Y> => {
  const reverseCompensation = reverse
    ? Math.PI
    : 0;
  const opposedLine = curveLine(previous, next);

  const angle  = opposedLine.angle  + reverseCompensation;
  const length = opposedLine.length * smoothing;

  const { x: xCurrent, y: yCurrent } = current;

  const x = xCurrent + (Math.cos(angle) * length);
  const y = yCurrent + (Math.sin(angle) * length);

  return {
    x: scaledCoordinate(x, xScale),
    y: scaledCoordinate(y, yScale),
  };
};

type CubicBezierPoints<X extends number, Y extends number> = readonly [
  controlA: ScaledPoint<X, Y>,
  controlB: ScaledPoint<X, Y>,
  point:    ScaledPoint<X, Y>,
];

interface CubicBezierPointsOptions<X extends number, Y extends number> {
  readonly index:     number;
  readonly point:     ScaledPoint<X, Y>;
  readonly points:    Segment<X, Y>;
  readonly smoothing: number;
  readonly xScale:    X;
  readonly yScale:    Y;
}

const cubicBezierPoints = <X extends number, Y extends number>({
  index,
  point,
  points,
  smoothing,
  xScale,
  yScale,
}: CubicBezierPointsOptions<X, Y>): CubicBezierPoints<X, Y> => {
  const startCurrent = points[index - 1];

  if (startCurrent == null) {
    throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());
  }

  const startPrevious = points[index - 2] ?? startCurrent;
  const startControl = curveControlPoint({
    current:  startCurrent,
    previous: startPrevious,
    next:     point,
    reverse:  false,
    smoothing,
    xScale,
    yScale,
  });

  const previous = startCurrent;
  const next = points[index + 1] ?? point;
  const endControl = curveControlPoint({
    current:  point,
    previous: previous,
    next,
    reverse:  true,
    smoothing,
    xScale,
    yScale,
  });

  return [ startControl, endControl, point ];
};

interface GetCubicPointsOptions<X extends number, Y extends number>{
  readonly segment:   Segment<X, Y>;
  readonly smoothing: number;
  readonly xScale:    X;
  readonly yScale:    Y;
}

const getCubicPoints = <X extends number, Y extends number>({
  segment,
  smoothing,
  xScale,
  yScale,
}: GetCubicPointsOptions<X, Y>) => (
  segment.reduce<readonly string[]>((
    acc:    readonly string[],
    point:  ScaledPoint<X, Y>,
    index:  number
  ) => {
    if (index === 0) {
      return acc;
    }

    const segmentPoints = cubicBezierPoints({
      index,
      point,
      points: segment,
      smoothing,
      xScale,
      yScale,
    });

    const result = segmentPoints.map((point) => (
      `${point.x},${point.y}`
    )).join(' ');

    return [
      ...acc,
      `C ${result}`,
    ];
  }, [])
);

interface GetSegmentPathsOptions<X extends number, Y extends number> {
  readonly baseYCoordinate:      number;
  readonly segments:             ReadonlyArray<Segment<X, Y>>;
  readonly xScale:               X;
  readonly yMax:                 number;
  readonly yOffsetBelowMidpoint: boolean;
  readonly yScale:               Y;
  readonly yTilt?:               boolean;
}

const getSegmentPaths = <X extends number, Y extends number>({
  baseYCoordinate,
  segments,
  xScale,
  yMax,
  yOffsetBelowMidpoint,
  yScale,
  yTilt = false,
}: GetSegmentPathsOptions<X, Y>) => (
  segments.reduce((
    acc,
    segment,
    index,
    segments
  ) => {
    const { length } = segments;
    const [
      baseStartPoint,
      baseMidPoint,
      baseEndPoint,
    ] = segment;

    const { x: startX, y: baseStartY } = baseStartPoint;
    const { x: midX,   y: midY }       = baseMidPoint;
    const { x: endX,   y: baseEndY }   = baseEndPoint;

    const width = endX - startX;

    const smoothing = width === 0
      ? 0
      : Math.max(midY / width * SMOOTHING_RATIO, MIN_SMOOTHING);

    const Y_TILT = yTilt
      ? 0.1
      : 0;

    const Y_TILT_NEG = 1 - Y_TILT;
    const Y_TILT_POS = 1 + Y_TILT;

    const startYTilt = index % 2 === 0
      ? Y_TILT_NEG
      : Y_TILT_POS;

    const startY = yOffsetBelowMidpoint
      ? baseStartY + baseYCoordinate
      : yMax - baseStartY + baseYCoordinate;

    const startPoint: ScaledPoint<X, Y> = {
      x: startX,
      y: scaledCoordinate(startY * startYTilt, yScale),
    };

    const endYTilt = index % 2 === 0
      ? Y_TILT_NEG
      : Y_TILT_POS;

    const endY = yOffsetBelowMidpoint
      ? baseEndY + baseYCoordinate
      : yMax - baseEndY + baseYCoordinate;

    const endPoint: ScaledPoint<X, Y> = {
      x: scaledCoordinate(endX, xScale),
      y: scaledCoordinate(endY * endYTilt, yScale),
    };

    const startMidXDistance = midX - startX;
    const midEndXDistance = endX - midX;

    const forwardMidPointXAdjustment = midEndXDistance > startMidXDistance
      ? 0
      : 0 - ((midX - startX) * MID_POINT_TILT);

    const midPointYAdjustment = (length - index) * (yScale / 100 * yMax);

    const forwardMidPoint: ScaledPoint<X, Y> = {
      x: scaledCoordinate(midX + forwardMidPointXAdjustment, xScale),
      y: scaledCoordinate(midY - midPointYAdjustment, yScale),
    };

    const forwardSegment: Segment<X, Y> = [
      startPoint,
      forwardMidPoint,
      endPoint,
    ];

    const forwardPoints = getCubicPoints({
      segment: forwardSegment,
      smoothing,
      xScale,
      yScale,
    });

    const reverseMidPointXAdjustment = midEndXDistance > startMidXDistance
      ? (endX - midX) * MID_POINT_TILT
      : 0;

    const reverseMidPoint: ScaledPoint<X, Y> = {
      x: scaledCoordinate(midX + reverseMidPointXAdjustment, xScale),
      y: scaledCoordinate(yMax - midPointYAdjustment, yScale),
    };

    const reverseSegment: Segment<X, Y> = [
      endPoint,
      reverseMidPoint,
      startPoint,
    ];

    const reversePoints = getCubicPoints({
      segment: reverseSegment,
      smoothing,
      xScale,
      yScale,
    });

    return [
      ...acc,
      [
        `M ${startPoint.x},${startPoint.y}`,
        ...forwardPoints,
        ...reversePoints,
        'Z',
      ].join(' '),
    ];
  }, [] as readonly string[])
);

interface ComputeBasicArtOptions<
  T extends string,
  X extends number,
  Y extends number
> {
  readonly hash:      T;
  readonly xPadding?: number;
  readonly xScale?:   X;
  readonly yOffset?:  number;
  readonly yPadding?: number;
  readonly yScale?:   Y;
}

export const computeBasicArt = <
  T extends string,
  X extends number,
  Y extends number
>({
  hash,
  xPadding = 0,
  xScale   = 1 as X,
  yOffset  = 0.5,
  yPadding = 0,
  yScale   = 1 as Y,
}: ComputeBasicArtOptions<T, X, Y>) => {
  const basePoints   = toPointSequence(hash);
  const sortedPoints = sortBy(basePoints, (a, b) => (
    a.x > b.x
      ? 1
      : -1
  ));

  const {
    max: baseYMax,
    min: baseYMin,
  } = yBounds(sortedPoints);

  const xShift = xPadding / 2;
  const yRange = baseYMax - baseYMin;
  const yShift = 0 - baseYMin + (yPadding / 2);

  const scaledPoints = sortedPoints.map((point) => scalePoint({
    xScale,
    xShift,
    yRange,
    yScale,
    yShift,
    point,
  }));

  const xMax = (COORDINATE_MAX + xPadding) * xScale;

  const {
    max: scaledYMax,
  } = yBounds(scaledPoints);

  const yMax = (scaledYMax + yPadding) * yScale;

  const naiveSegments = getSegments({
    points: scaledPoints,
    xMax,
    xScale,
    yScale,
  });

  // Generating art will be risk-free fun, I thought...
  const nonPhallicSegments = getNonPhallicSegments({
    segments: naiveSegments,
    xMax,
    xScale,
    yScale,
  });

  const yOffsetBelowMidpoint = yOffset > 0.5;

  const baseYCoordinate = yOffsetBelowMidpoint
    ? yMax * yOffset
    : -1 * yMax * yOffset;

  const segmentPaths = getSegmentPaths({
    baseYCoordinate,
    segments: nonPhallicSegments,
    xScale,
    yMax,
    yOffsetBelowMidpoint,
    yScale,
  });

  return {
    segmentPaths,
    xMax,
    yMax,
  };
};
