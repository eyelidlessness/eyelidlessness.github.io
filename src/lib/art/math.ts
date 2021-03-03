import { sortBy } from '@/lib/collections';

export const toFixed = (value: number, fractionalDigits: number) => (
  Number(value.toFixed(fractionalDigits))
);

export const COORDINATE_MAX  = parseInt('ff', 16);
export const COORDINATE_MIN  = parseInt('00', 16);
export const MID_POINT_TILT  = 0.05 as const;
export const MIN_SMOOTHING   = 0.15 as const;
export const SMOOTHING_RATIO = 0.05 as const;

export class InvalidHashError extends Error {
  constructor(hash: string) {
    super(`Invalid hash: ${hash}`);
  }
}

const validHashPattern = /^[0-9a-f]{40}$/i;

const isValidHash = (value: string) => (
  validHashPattern.test(value)
);

export const hexChars = new Set([
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

export type HexChar = SetType<typeof hexChars>;

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

export type HexPointSequence = Tuple<HexPoint, 10>;

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

export interface Point {
  readonly x: Coordinate;
  readonly y: Coordinate;
}

const toPoint = ({ x, y }: HexPoint): Point => ({
  x: toCoordinate(x),
  y: toCoordinate(y),
});

export type PointSequence = Tuple<Point, 10>;

const isPointSequence = (value: readonly Point[]): value is PointSequence => (
  value.length === 10
);

export const toPointSequence = (
  hash:      string,
  hexPoints: HexPointSequence
): PointSequence => {
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

export interface AnyPoint extends VerticallyPositioned {
  readonly x: AnyCoordinate;
}

export type AnyPointSequence = readonly AnyPoint[];

export const yBounds = (points: readonly VerticallyPositioned[]) => (
  points.reduce(({ max, min }, { y }) => ({
    max: Math.max(Number(max), Number(y)),
    min: Math.min(Number(min), Number(y)),
  }), {
    max: -Infinity,
    min: Infinity,
  })
);

const scaledCoordinate = <Scale>(
  value: number,
  scale: Scale
): ScaledCoordinate<Scale> => (
  Object.assign(toFixed(value, 2), {
    [scaledCoordinateSymbol]: scale,
  } as const)
);

export interface ScalePointOptions<X extends number, Y extends number> {
  readonly xScale: X;
  readonly xShift: number;
  readonly yScale: Y;
  readonly yShift: number;
}

interface ScaledPoint<X extends number, Y extends number> {
  readonly x: ScaledCoordinate<X>;
  readonly y: ScaledCoordinate<Y>;
}

interface ScaleablePoint<X extends number, Y extends number> {
  readonly x:      number;
  readonly xScale: X;
  readonly y:      number;
  readonly yScale: Y;
}

const scaledPoint = <
  X extends number,
  Y extends number
>({
  x,
  xScale,
  y,
  yScale,
}: ScaleablePoint<X, Y>): ScaledPoint<X, Y> => ({
  x: scaledCoordinate(x, xScale),
  y: scaledCoordinate(y, yScale),
});

export const scalePoint = <
  X extends number,
  Y extends number
>({ x, y }: Point, {
  xScale,
  xShift,
  yScale,
  yShift,
}: ScalePointOptions<X, Y>): ScaledPoint<X, Y> => (
  scaledPoint({
    x: (x + xShift) * xScale,
    xScale,
    y: (y + yShift) * yScale,
    yScale,
  })
);

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

export type SegmentList<
  X extends number,
  Y extends number
> = ReadonlyArray<Segment<X, Y>>

export const getNaiveSegments = <
  X extends number,
  Y extends number
>({
  points,
  xMax,
  xScale,
  yScale,
}: GetSegmentsOptions<X, Y>): SegmentList<X, Y> => (
  [
    scaledPoint({
      x: 0,
      xScale,
      y: 0,
      yScale,
    }),
    ...points,
    scaledPoint({
      x: xMax,
      xScale,
      y: 0,
         yScale,
    }),
  ].reduce<SegmentList<X, Y>>((
    acc,
    mid,
    index,
    points
  ) => {
    if (index === 0 || index === points.length - 1) {
      return acc;
    }

    const baseline = scaledCoordinate(0, yScale);

    const segment = [
      {
        x: points[index - 1].x,
        y: baseline,
      },
      mid,
      {
        x: points[index + 1].x,
        y: baseline,
      },
    ] as const;

    return [
      ...acc,
      segment,
    ];
  }, [])
);

interface GetNonPhallicSegmentsOptions<X extends number, Y extends number> {
  readonly segments: SegmentList<X, Y>;
  readonly xMax:     number;
  readonly xScale:   X;
  readonly yScale:   Y;
}

/**
 * Generating art will be risk-free fun, I thought...
 */
export const getNonPhallicSegments = <X extends number, Y extends number>({
  segments,
  xMax,
  xScale,
  yScale,
}: GetNonPhallicSegmentsOptions<X, Y>): SegmentList<X, Y> => (
  segments.map<Segment<X, Y>>((segment) => {
    const [
      { x: startX, y: startY },
      { x: midX,   y: midY },
      { x: endX,   y: endY },
    ] = segment;

    const width           = endX - startX;
    const ratio           = midY / width;
    const maxRatio        = 6;
    const ratioAdjustment = maxRatio / ratio;

    if (ratioAdjustment < 1) {
      const ratioAdjustmentX    = ratioAdjustment * 0.2;
      const adjustmentX         = ratioAdjustmentX * startX;
      const ratioAdjustedStartX = startX - adjustmentX;
      const ratioAdjustedEndX   = endX   + adjustmentX;

      const overshootX = (
        ratioAdjustedStartX < 0
          ? Math.abs(ratioAdjustedStartX)
        : ratioAdjustedEndX > xMax
          ? xMax - ratioAdjustedEndX
          : 0
      );

      const adjustedStartX = ratioAdjustedStartX + overshootX;
      const adjustedEndX   = ratioAdjustedEndX   + overshootX;

      const ratioAdjustmentY = ratioAdjustment * 0.3;

      const adjustedMidX = midX + overshootX;
      const adjustmentY  = ratioAdjustmentY * midY;
      const adjustedMidY = midY - adjustmentY;

      return [
        scaledPoint({
          x: adjustedStartX,
          xScale,
          y: startY,
          yScale,
        }),
        scaledPoint({
          x: adjustedMidX,
          xScale,
          y: adjustedMidY,
          yScale,
        }),
        scaledPoint({
          x: adjustedEndX,
          xScale,
          y: endY,
          yScale,
        }),
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

export type CubicBezierPoints<X extends number, Y extends number> = readonly [
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

export const cubicBezierPoints = <X extends number, Y extends number>({
  index,
  point,
  points,
  smoothing,
  xScale,
  yScale,
}: CubicBezierPointsOptions<X, Y>): CubicBezierPoints<X, Y> => {
  const startCurrent = points[index - 1];

  if (startCurrent == null) {
    throw new Error(
      'Cannot build cubic bezier points, no point before the provided index.'
    );
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
  readonly baseYCoordinate:         number;
  readonly isBaselineBelowMidpoint: boolean;
  readonly segments:                SegmentList<X, Y>;
  readonly xScale:                  X;
  readonly yMax:                    number;
  readonly yScale:                  Y;
  readonly yTilt?:                  boolean;
}

export const getSegmentPaths = <X extends number, Y extends number>({
  baseYCoordinate,
  isBaselineBelowMidpoint,
  segments,
  xScale,
  yMax,
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

    const startY = isBaselineBelowMidpoint
      ? baseStartY + baseYCoordinate
      : yMax - baseStartY + baseYCoordinate;

    const startPoint: ScaledPoint<X, Y> = {
      x: startX,
      y: scaledCoordinate(startY * startYTilt, yScale),
    };

    const endYTilt = index % 2 === 0
      ? Y_TILT_NEG
      : Y_TILT_POS;

    const endY = isBaselineBelowMidpoint
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
  const hexPoints    = toHexPointSequence(hash);
  const basePoints   = toPointSequence(hash, hexPoints);
  const sortedPoints = sortBy(basePoints, ({ x: a }, { x: b }) => (
    Number(a) === Number(b)
      ? 0
    : Number(a) > Number(b)
      ? 1
      : -1
  ));

  const xShift = xPadding / 2;
  const yShift = yPadding / 2;

  const scaledPoints = sortedPoints.map((point) => (
    scalePoint(point, {
      xScale,
      xShift,
      yScale,
      yShift,
    })
  ));

  const xMax = (COORDINATE_MAX + xPadding) * xScale;

  const {
    max: scaledYMax,
  } = yBounds(scaledPoints);

  const yMax = (scaledYMax + yPadding) * yScale;

  const naiveSegments = getNaiveSegments({
    points: scaledPoints,
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

  const isBaselineBelowMidpoint = yOffset > 0.5;

  const baseYCoordinate = isBaselineBelowMidpoint
    ? yMax * yOffset
    : -1 * yMax * yOffset;

  const segmentPaths = getSegmentPaths({
    baseYCoordinate,
    segments,
    xScale,
    yMax,
    isBaselineBelowMidpoint,
    yScale,
  });

  return {
    segmentPaths,
    xMax,
    yMax,
  };
};
