import type { ComponentChildren } from 'preact';
import type {
	AnyPointSequence,
	CubicBezierPoints,
	HexPointSequence,
	ScalePointOptions,
	SegmentList,
} from '../../lib/art/index.js';
import {
	COORDINATE_MAX,
	cubicBezierPoints,
	getNaiveSegments,
	getNonPhallicSegments,
	MIN_SMOOTHING,
	scalePoint,
	SMOOTHING_RATIO,
	toFixed,
	toHexPointSequence,
	toPointSequence,
} from '../../lib/art/index.js';
import { asserted } from '../../lib/assertions.js';
import { sortBy } from '../../lib/collections/arrays.js';
import type { CustomArtProps, Topic } from '../../lib/content/index.js';
import {
	StylesProvider as DefaultStylesProvider,
	renderer,
	styled,
	theme,
} from '../../lib/styles/index.js';
import type { IStyle } from '../../lib/styles/styles.js';
import { BLOG_ART_HEIGHT, blogArtDefaultParameters } from '../Blog/BlogArt.js';

type Indexed<P> = Omit<P, 'as'> & {
	readonly index: number;
};

const segmentTransition =
	'stroke-width 0.1s ease-in-out, color 0.1s ease-in-out';

// prettier-ignore
type LinePathProps =
	| JSX.IntrinsicElements['line']
	| JSX.IntrinsicElements['path'];

// prettier-ignore
type SegmentLinePathProps<P extends LinePathProps = LinePathProps> =
	& Indexed<Omit<P, 'fill'>>
	& {
			readonly fill?: boolean;
			readonly topic: Topic;
		};

const segmentLinePathStyles = ({
	fill,
	topic,
}: SegmentLinePathProps): IStyle => {
	const colors = theme.topicColors[topic];

	return {
		...colors,

		...(fill
			? {
					fill: 'currentcolor',
					fillOpacity: 0.05,
					mask: 'url(#curvesVerticalFade)',
					strokeWidth: 0,

					nested: {
						...colors.nested,

						[theme.darkMode]: {
							fillOpacity: 0.15,
						},
					},
				}
			: {
					fill: 'none',
					strokeWidth: 1,
					stroke: 'currentcolor',
				}),

		transition: segmentTransition,
		vectorEffect: 'non-scaling-stroke',
	} as const;
};

type BaseSegmentPathProps = SegmentLinePathProps<JSX.IntrinsicElements['path']>;

const BaseSegmentPath = ({
	fill,
	index,
	topic,
	...props
}: BaseSegmentPathProps) => <path {...props} />;

const SegmentPath = styled<BaseSegmentPathProps>(
	BaseSegmentPath,
	segmentLinePathStyles
);

const CurvesContainer = styled('svg', {
	overflow: 'visible',
	padding: '1rem',
});

const HASH_PLOT_PADDING = 20;

// prettier-ignore
type HashPlotScaleOptions =
	& Partial<ScalePointOptions>
	& {
		readonly xRange?: number;
		readonly xMax?: number;
		readonly yRange?: number;
		readonly yMax?: number;
	};

const defaultScaleOptions = {
	xMax: COORDINATE_MAX,
	xScale: 1,
	xShift: 0,
	yMax: COORDINATE_MAX,
	yScale: 1,
	yShift: 0,
} as const;

type HashPlotPointSize = number | 'data-driven';

interface HashPlotProps {
	readonly className?: string;
	readonly height?: number;
	readonly hexPoints: ReadonlyArray<ArrayType<HexPointSequence>>;
	readonly pointSize?: HashPlotPointSize;
	readonly points: AnyPointSequence;
	readonly scaleOptions?: HashPlotScaleOptions;
	readonly segments: SegmentList;
	readonly topics: readonly Topic[];
	readonly width?: number;
}

const HashPlot = ({
	className,
	hexPoints,
	points,
	pointSize,
	scaleOptions,
	segments,
	topics,
	...props
}: HashPlotProps) => {
	const {
		xScale,
		xShift,
		xRange = xScale * (COORDINATE_MAX + xShift * 2),
		yMax,
		yShift,
		yScale,
		yRange = yScale * (yMax + yShift * 2),
	} = {
		...defaultScaleOptions,
		...scaleOptions,
	} as Required<HashPlotScaleOptions>;
	const pad = HASH_PLOT_PADDING * 2;
	const height = props.height ?? yRange + pad;
	const width = props.width ?? xRange + pad;

	const plotPoint = ({ x: pointX, y: pointY }: ArrayType<typeof points>) => {
		const cx = toFixed(((pointX + xShift) / xRange) * 100, 4);
		const cy = 100 - toFixed(((pointY - yShift) / yRange) * 100, 4);

		return {
			cx,
			cy,
		};
	};

	const segmentData = segments.map((segment) => {
		const [baseStartPoint, baseMidPoint, baseEndPoint] = segment;

		const { x: startX } = baseStartPoint;
		const { y: midY } = baseMidPoint;
		const { x: endX } = baseEndPoint;
		const segmentWidth = endX - startX;

		// prettier-ignore
		const smoothing = (
			segmentWidth === 0
				? 0
				: Math.max((midY / segmentWidth) * SMOOTHING_RATIO, MIN_SMOOTHING)
		);

		const cubicPoints = segment.reduce<readonly CubicBezierPoints[]>(
			(acc, point, index) => {
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

				return [...acc, segmentPoints];
			},
			[]
		);

		return {
			cubicPoints,
			segment,
		};
	});

	return (
		<CurvesContainer
			className={className}
			height={height}
			width={width}
			preserveAspectRatio="none"
			viewBox={`0 0 ${width} ${height}`}
		>
			<defs>
				<linearGradient id="curvesVerticalFadeGradient" y2="1" x2="0">
					<stop offset="0" stop-color="white" stop-opacity="1" />
					<stop offset="0.15" stop-color="white" stop-opacity=".95" />
					<stop offset="1" stop-color="white" stop-opacity="0" />
				</linearGradient>

				<mask id="curvesVerticalFade" maskContentUnits="objectBoundingBox">
					<rect fill="url(#curvesVerticalFadeGradient)" height="1" width="1" />
				</mask>
			</defs>

			{segmentData.map(({ cubicPoints, segment }, index) => {
				const [baseStartPoint, baseMidPoint, baseEndPoint] = segment;

				const curvesPoints = cubicPoints.map(
					([controlStart, controlEnd], curveIndex) => {
						const start = curveIndex === 0 ? baseStartPoint : baseMidPoint;
						const end = curveIndex === 0 ? baseMidPoint : baseEndPoint;

						return [start, controlStart, controlEnd, end];
					}
				);

				const StrokePath = () => (
					<>
						{curvesPoints.map((curvePoints) => {
							const d = curvePoints
								.map((point, curvePointIndex) => {
									const { cx, cy } = plotPoint(point);
									const x = (cx / 100) * width;
									const y = (cy / 100) * height;

									const command =
										curvePointIndex === 0
											? 'M '
											: curvePointIndex === 1
												? 'C '
												: '';

									return `${command} ${x},${y}`;
								})
								.join(' ');

							const topic = asserted(topics[index % topics.length]);

							return <SegmentPath d={d} index={index} topic={topic} />;
						})}
					</>
				);

				const FillPath = () => {
					const d = curvesPoints
						.map((curvePoints, curveIndex) => {
							const result = curvePoints
								.map((point, curvePointIndex) => {
									if (curveIndex > 0 && curvePointIndex === 0) {
										return '';
									}

									const { cx, cy } = plotPoint(point);
									const x = (cx / 100) * width;
									const y = (cy / 100) * height;

									const command =
										curvePointIndex === 0
											? 'M '
											: curvePointIndex === 1
												? 'C '
												: '';

									return `${command} ${x},${y}`;
								})
								.join(' ');

							return result;
						})
						.join(' ');

					const topic = asserted(topics[index % topics.length]);

					return <SegmentPath d={d} fill={true} index={index} topic={topic} />;
				};

				return (
					<>
						<StrokePath />
						<FillPath />
					</>
				);
			})}
		</CurvesContainer>
	);
};

export const ResumeArt = ({
	className: propsClassName = '',
	hash,
	height,
	renderType,
	StylesProvider = DefaultStylesProvider,
	styleRenderer = renderer,
	topics = [],
	width,
}: CustomArtProps): ComponentChildren => {
	const hexPoints = toHexPointSequence(hash);
	const basePoints = toPointSequence(hash, hexPoints);

	const {
		xPadding: defaultXPadding,
		xScale,
		yPadding: defaultYPadding,
		yScale,
	} = blogArtDefaultParameters;

	const isMeta = renderType === 'meta';

	const xPadding = isMeta ? 0 : defaultXPadding;
	const yPadding = isMeta ? 0 : defaultYPadding;

	const xShift = xPadding / 2;
	const yShift = yPadding / 2;

	const scaleOptions = {
		xScale,
		xShift,
		yScale,
		yShift,
	};

	const sortedPoints = sortBy(basePoints, ({ x: a }, { x: b }) =>
		a === b ? 0 : a > b ? 1 : -1
	);
	const scaledPoints = sortedPoints.map((point) => {
		return scalePoint(point, scaleOptions);
	});
	const renderHexPoints = scaledPoints.map((point) =>
		asserted(hexPoints[scaledPoints.indexOf(point)])
	);

	const xMax = (COORDINATE_MAX + xPadding) * xScale;

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

	const pathStyles = isMeta
		? {
				'& path': {
					strokeWidth: '4px !important',
					transform: 'scale(.95)',
					transformOrigin: '50% 50%',
				},
			}
		: null;

	const padding = isMeta ? '0 !important' : '0 0 1rem !important';

	const defaultRenderHeight = BLOG_ART_HEIGHT;
	const defaultRenderWidth = '100%';

	const toPx = (value?: number | string) =>
		typeof value === 'number' ? `${value}px` : value;
	const scaled = <T extends number | string>(value: T, ratio: number) =>
		typeof value === 'number' ? value * ratio : value;

	const renderHeight = isMeta
		? scaled(height ?? defaultRenderHeight, 0.95)
		: BLOG_ART_HEIGHT;
	const renderWidth = isMeta
		? scaled(width ?? defaultRenderWidth, 0.95)
		: '100%';

	const graphicHeight =
		isMeta && height != null ? scaled(height, 0.95) : height;
	const graphicWidth = isMeta && width != null ? scaled(width, 0.95) : width;

	const hashPlotClassName = styleRenderer.renderRule(
		() => ({
			gridColumn: '1 / -1',
			height: toPx(renderHeight),
			padding,
			width: toPx(renderWidth),

			nested: {
				...pathStyles,
			},
		}),
		Object.keys
	);

	const className = isMeta
		? propsClassName
		: `${propsClassName} ${hashPlotClassName}`;

	return (
		<StylesProvider>
			<HashPlot
				className={className}
				height={graphicHeight}
				hexPoints={renderHexPoints}
				points={scaledPoints}
				scaleOptions={scaleOptions}
				segments={segments}
				topics={topics}
				width={graphicWidth}
			/>
		</StylesProvider>
	);
};
