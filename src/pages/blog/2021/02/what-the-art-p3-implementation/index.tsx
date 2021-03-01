import hsluv                 from 'hsluv';
import { definePage }        from 'microsite/page';
import hasher                from 'node-object-hash';
import {
  ComponentChildren,
  Fragment,
} from 'preact';
import {
  blogArtDefaultParameters,
  BLOG_ART_HEIGHT,
  BlogArt,
  BlogPost,
  BlogPostProps,
  getBlogPostStaticProps,
} from '@/components/Blog';
import { CommentaryAside }   from '@/components/CommentaryAside';
import {
  FullBleedContainer,
  FullBleedScrollableOverflow,
  FullBleedScrollableOverflowProps,
} from '@/components/FullBleed';
import { VisiblyHidden }     from '@/components/VisiblyHidden';
import {
  AnyPointSequence,
  COORDINATE_MAX,
  COORDINATE_MIN,
  HexChar,
  hexChars,
  HexPointSequence,
  InvalidHashError,
  PointSequence,
  ScalePointOptions,
  scalePoint,
  toFixed,
  toHexPointSequence,
  toPointSequence,
  yBounds,
} from '@/lib/art';
import {
  CustomArtProps,
  mdx as baseMDX,
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

const repoURL = (...segments: readonly string[]) => ([
  'https://github.com/eyelidlessness/eyelidlessness.github.io',
  ...segments,
].join('/'));

const links = {
  blame: repoURL(
    'src/pages/blog/2021/02',
    'what-the-art-p2-constraints/index.tsx#L146-L147'
  ),
  artBoilerplate: repoURL('blob/main/src/lib/art/math.ts'),
  gitBoilerplate: repoURL('blob/main/src/lib/git/log.ts'),
  goldenRatio:    'https://en.wikipedia.org/wiki/Golden_ratio',
  microsite:      'https://github.com/natemoo-re/microsite',
  originMain:     repoURL('tree/main'),
  p1:             '/blog/2021/02/what-the-art-p1-why/',
  p2:             '/blog/2021/02/what-the-art-p2-constraints/',
  resume:         '/resume/',
  sha1:           'https://en.wikipedia.org/wiki/SHA-1',
};

const linkReferences = Object.entries(links).map(([ key, url ]) => (
  `[${key}]: ${url}`
)).join('\n');

const mdx = (...args: Parameters<TemplateTag<any>>) => (
  baseMDX(String.raw(...args), '\n\n', linkReferences)
);

const ExampleHeading = styled('h3', {
  fontFamily: 'inherit',
  fontSize:   '0.889em',
  fontWeight: 700,
  margin:     0,
});

const DEFAULT_UA_FONT_SIZE = 16;
const HASH_LENGTH          = 40;

const MIN_FONT_SIZE_RATIO = theme.baseFontSizeRange.minEm;
const MAX_FONT_SIZE_RATIO = theme.baseFontSizeRange.maxEm;

const HASH_EXAMPLE_LINE_HEIGHT = DEFAULT_UA_FONT_SIZE * MAX_FONT_SIZE_RATIO;
const HASH_EXAMPLE_TEXT_OFFSET = HASH_EXAMPLE_LINE_HEIGHT / MIN_FONT_SIZE_RATIO;

const getHashExampleWidth = (characterLength: number) => (
  characterLength * HASH_EXAMPLE_LINE_HEIGHT / 2
);

const HASH_EXAMPLE_WIDTH = getHashExampleWidth(HASH_LENGTH);

const HashExampleOuter = styled(FullBleedContainer, {
  margin: '0.5rem 0 2rem',
});

const BaseHashExampleGraphic = styled('svg', {
  display:  'block',
  fontSize: `${DEFAULT_UA_FONT_SIZE * MIN_FONT_SIZE_RATIO}px`,
  maxWidth: '28rem',
  width:    '100%',
});

interface HashExampleGraphicProps {
  readonly className?: string;
  readonly children?:  ComponentChildren;
  readonly height?:    number;
  readonly width?:     number;
}

const HashExampleGraphic = ({
  className,
  children,
  height,
  width,
}: HashExampleGraphicProps) => (
  <BaseHashExampleGraphic className={ className } viewBox={ `0 0 ${width} ${height}` }>
    { children }
  </BaseHashExampleGraphic>
);

interface HashExampleProps extends HashExampleGraphicProps {}

const HashExample = ({
  children,
  className,
  height = HASH_EXAMPLE_LINE_HEIGHT,
  width  = HASH_EXAMPLE_WIDTH,
}: HashExampleProps) => {

  return (
    <HashExampleOuter className={ className }>
      <HashExampleGraphic height={ height } width={ width }>
        { children }
      </HashExampleGraphic>
    </HashExampleOuter>
  );
};

const hsluvColors = '0123456789'.split('').map((value) => {
  const offset = Number(value);

  const hue = offset * 36;

  return {
    dark: {
      emphasize: hsluv.hsluvToHex([ hue, 100, 35 ]),
      hover:     hsluv.hsluvToHex([ hue, 100, 3 ]),
      plot:      hsluv.hsluvToHex([ hue, 100, 74 ]),
      x:         hsluv.hsluvToHex([ hue, 100, 84 ]),
      y:         hsluv.hsluvToHex([ hue, 100, 74 ]),
    },

    light: {
      emphasize: hsluv.hsluvToHex([ hue, 100, 80 ]),
      hover:     hsluv.hsluvToHex([ hue, 100, 97 ]),
      plot:      hsluv.hsluvToHex([ hue, 100, 64 ]),
      x:         hsluv.hsluvToHex([ hue, 100, 54 ]),
      y:         hsluv.hsluvToHex([ hue, 100, 44 ]),
    },
  };
});

const FlexText = styled('text', {
  fill:       'currentcolor',
  fontFamily: theme.monospaceFont,
});

interface BaseSHA1ExampleProps {
  readonly className?: string;
  readonly hash:       string;
}

const BaseSHA1Example = ({
  className,
  hash,
}: BaseSHA1ExampleProps) => (
  <>
    <ExampleHeading>Result:</ExampleHeading>
    <HashExample className={ className }>
      <FlexText
        textLength={ HASH_EXAMPLE_WIDTH }
        x="0"
        y={ HASH_EXAMPLE_TEXT_OFFSET }
      >
        { hash }
      </FlexText>
    </HashExample>
  </>
);

const SHA1Example = styled(BaseSHA1Example, {
  color:      hsluvColors[0].light.y,
  marginTop: '0.5rem',

  nested: {
    [theme.darkMode]: {
      color: hsluvColors[0].dark.x,
    },
  },
});

type Indexed<P> =
  & Omit<P, 'as'>
  & {
    readonly index: number;
  };

const sortableClassName = identifier();

type BaseSortableProps<P> =
  & { readonly className?: string }
  & P;

const sortableProps = <P,>(
  {
    className = '',
    ...props
  }: BaseSortableProps<P>,
  ...classNames: readonly string[]
): BaseSortableProps<P> => ({
  ...props,

  className: [
    className,
    sortableClassName,
    ...classNames,
  ].join(' '),
} as BaseSortableProps<P>);

type Sortable<P> =
  & Indexed<P>
  & {
    readonly className?:  string;
    readonly sortedIndex: number;
    readonly toggleClass: string;
  };

type BaseFlexPointProps =
  & Sortable<JSX.IntrinsicElements['text']>
  & {
    readonly coordinate: 'x' | 'y';
    readonly padLength:  number;
  };

const flexPointClassName = identifier();

const BaseFlexPoint = ({
  children,
  className = '',
  coordinate,
  index,
  padLength,
  sortedIndex,
  toggleClass,
  ...props
}: BaseFlexPointProps) => (
  <FlexText { ...sortableProps(props, className, flexPointClassName) }>
    {( typeof children === 'string'
        ? children.padStart(padLength, ' ')
        : children
    )}
  </FlexText>
);

const FlexPoint = styled(BaseFlexPoint, ({
  coordinate,
  index,
  sortedIndex,
}) => ({
  '--sorted-color': hsluvColors[sortedIndex].light[coordinate],
  color:            hsluvColors[index].light[coordinate],
  whiteSpace:       'pre',

  nested: {
    [theme.darkMode]: {
      '--sorted-color': hsluvColors[sortedIndex].dark[coordinate],
      color:            hsluvColors[index].dark[coordinate],
    },
  },
}));

const flexPointBackgroundClassName = identifier();

const BaseFlexPointBackground = ({
  children,
  index,
  sortedIndex,
  toggleClass,
  ...props
}: Sortable<Sortable<JSX.IntrinsicElements['rect']>>) => (
  <rect { ...sortableProps(props, flexPointBackgroundClassName) }>{ children }</rect>
);

const FlexColumnBackground = styled(BaseFlexPointBackground, ({
  index,
  sortedIndex,
}) => ({
  '--sorted-color': hsluvColors[sortedIndex].light.hover,
  color:            hsluvColors[index].light.hover,
  fill:             'currentcolor',
  opacity:          0,
  transition:       'opacity 0.1s ease-in-out',
  zIndex:           -1,

  nested: {
    [theme.darkMode]: {
      '--sorted-color': hsluvColors[sortedIndex].dark.hover,
      color:            hsluvColors[index].dark.hover,
    },
  },
}));

type BasePlotPointProps =
  & Sortable<JSX.IntrinsicElements['circle']>
  & {
    readonly cx:        number | string;
    readonly cy:        number | string;
    readonly pointSize: number;
    readonly sortedX:   number;
    readonly sortedY:   number;
    readonly xShift:    number;
    readonly yShift:    number;
  };

const plotPointClassName = identifier();

const BasePlotPoint = ({
  children,
  index,
  pointSize,
  sortedIndex,
  sortedX,
  sortedY,
  xShift,
  yShift,
  ...props
}: BasePlotPointProps) => (
  <circle { ...sortableProps(props, plotPointClassName) }>
    { children }
  </circle>
);

const PlotPoint = styled(BasePlotPoint, ({
  index,
  sortedIndex,
  sortedX,
  sortedY,
  // xShift,
  // yShift,
}) => ({
  '--sorted-color':     hsluvColors[sortedIndex].light.plot,
  '--sorted-stroke':    hsluvColors[sortedIndex].light.emphasize,
  '--sorted-transform': `translate(${sortedX}px, ${sortedY}px)`,
  color:                hsluvColors[index].light.plot,
  fill:                 'currentcolor',
  paintOrder:           'stroke fill',
  stroke:               hsluvColors[index].light.emphasize,
  strokeWidth:          0,

  transition: [
    'fill',
    'stroke',
    'stroke-width',
  ].map((property) => `${property} 0.1s ease-in-out`).join(', '),

  nested: {
    [theme.darkMode]: {
      '--sorted-color':  hsluvColors[sortedIndex].dark.plot,
      '--sorted-stroke': hsluvColors[sortedIndex].dark.emphasize,
      color:             hsluvColors[index].dark.plot,
      stroke:            hsluvColors[index].dark.emphasize,
    },
  },
}));

type ChoiceType = 'checkbox' | 'radio';

type BaseChoiceData =
  & {
    readonly exampleId: number;
    readonly index?:    unknown;
    readonly suffix:    string;
    readonly type:      ChoiceType;
  }
  & (
    | { readonly type: 'checkbox' }
    | Indexed<{ readonly type: 'radio' }>
  );

const choiceId = ({
  exampleId,
  index,
  suffix,
  type,
}: BaseChoiceData) => (
  type === 'radio'
    ? `example-${exampleId}-${index}-${suffix}`
    : `example-${exampleId}-${suffix}`
);

type BaseChoiceProps =
  & BaseChoiceData
  & {
    readonly checked?:   boolean;
    readonly className?: string;
    readonly value?:     string;
  };

const BaseChoice = (props: BaseChoiceProps) => {
  const {
    checked,
    className,
    exampleId,
    suffix,
    type,
    value,
  } = props;
  const checkedProps = Boolean(checked)
    ? { checked }
    : {};
  const id = choiceId(props);

  return (
    <VisiblyHidden
      { ...checkedProps }
      as="input"
      className={ className }
      name={ `example-${exampleId}-${suffix}` }
      id={ id }
      type={ type }
      value={ value }
    />
  );
};

type BasePlotPointEmphasisChoiceProps =
  & BaseChoiceProps
  & { readonly pointSize: number };

const BasePlotPointEmphasisChoice = ({
  pointSize,
  ...props
}: BasePlotPointEmphasisChoiceProps) => (
  <BaseChoice { ...props } />
);

const PlotPointEmphasisChoice = styled(BasePlotPointEmphasisChoice, ({
  exampleId,
  index,
  pointSize,
  suffix,
}) => ({
  nested: {
    [`&:checked ~ * #example-${exampleId}-${index}-${suffix}`]: {
      strokeWidth: pointSize * 2.5,
    },

    [`&:checked ~ * [for="example-${exampleId}-${index}-${suffix}"] rect`]: {
      opacity: 1,
    },
  },
}));

const PointExampleGroup = styled('g', {
  nested: {
    '&:hover rect': {
      opacity: 0.5,
    },
  },
});

interface HashNumberProps {
  readonly hash: string;
}

const HashNumber = ({ hash }: HashNumberProps) => {
  const num = Number.parseInt(hash, 16);

  if (isNaN(num)) {
    throw new InvalidHashError(hash);
  }

  const exponential = num.toExponential(2);
  const [ fractional, exponent ] = exponential.split(/e[-+]/);

  return (
    <>
      { fractional }{(
        exponent == null
          ? null
          : (<sup>{ exponent }</sup>)
      )}
    </>
  );
};

const HashConversionOuter = styled(FullBleedContainer, {
  ...theme.pre,

  marginBottom: '1.5rem',

  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].pre,
    },
  },
});

const HashConversionScrollableOverflow = ({
  children,
  ...props
}: FullBleedScrollableOverflowProps) => (
  <FullBleedScrollableOverflow { ...props } shadow={ true }>
    { children }
  </FullBleedScrollableOverflow>
);

const HashConversionInner = styled('div', {
  display: 'flex',

  nested: {
    '&:after': {
      ...theme.scrollable.cover(theme.pre.backgroundColor),

      content:    '""',
      display:    'block',
      flexShrink: 0,
      height:     '100%',
      left:       'calc(100% + 2rem)',
      order:      10,
      position:   'sticky',
      width:      '2rem',

      nested: {
        [theme.darkMode]: {
          ...theme.scrollable.cover(
            theme[theme.darkMode].pre.backgroundColor
          ),
        },
      },
    },
  },
});

type BaseHashPointConversionProps =
  & Omit<JSX.IntrinsicElements['label'], 'as'>
  & { readonly sortedIndex: number };

const hashPointClassName = identifier();

const BaseHashPointConversion = ({
  children,
  sortedIndex,
  ...props
}: BaseHashPointConversionProps) => (
  <label { ...sortableProps(props, hashPointClassName) }>
    { children }
  </label>
);

const HashPointConversion = styled(BaseHashPointConversion, ({ sortedIndex }) => ({
  '--sorted-index': sortedIndex,
  display:          'inline-block',
  flexShrink:       0,
  paddingBottom:    '0.5rem',
  paddingRight:     '1rem',
  paddingTop:       '0.5rem',
  transition:       'order 0.05s ease-in-out',
}));

const BaseToggleButton = styled('span', {
  ...theme.toggleSwitch.container.off,

  alignItems:      'center',
  backgroundColor: 'currentcolor',
  border:          '4px solid currentcolor',
  borderRadius:    '16px',
  boxSizing:       'content-box',
  display:         'inline-flex',
  height:          '24px',
  padding:         0,
  width:           '48px',
  verticalAlign:   'middle',
});

const toggleSwitchClassName = identifier();

type ToggleButtonProps = Omit<JSX.IntrinsicElements['span'], 'as'>;

const ToggleButton = ({
  children,
  ...props
}: ToggleButtonProps) => (
  <BaseToggleButton { ...props } className={ toggleSwitchClassName }>
    { children }
  </BaseToggleButton>
)

const ToggleButtonStateIndicator = styled('span', {
  ...theme.toggleSwitch.button,

  borderRadius:  '12px',
  display:       'inline-block',
  height:        '24px',
  width:         '24px',
  verticalAlign: 'middle',
});

const BaseHashPointsExampleSortToggleLabel = styled('label', {
  alignItems:  'center',
  display:     'inline-flex',
  justifySelf: 'start',
});

const HashPointsExampleSortToggleLabelText = styled('span', {
  fontSize:    '0.8889rem',
  marginRight: '0.5rem',
});

const sortToggleLabelClassName = identifier();

type HashPointsExampleSortToggleLabel =
  & Omit<JSX.IntrinsicElements['label'], 'as'>
  & Omit<BaseChoiceData, 'suffix' | 'type'>;

const HashPointsExampleSortToggleLabel = ({
  children,
  exampleId,
  ...baseProps
}: HashPointsExampleSortToggleLabel) => {
  const suffix = 'sort';

  const id = choiceId({
    exampleId,
    suffix,
    type: 'checkbox',
  });

  const props = sortableProps({
    ...baseProps,

    for: id,
  }, sortToggleLabelClassName);

  return (
    <BaseHashPointsExampleSortToggleLabel { ...props }>
      <HashPointsExampleSortToggleLabelText>
        Enable sorting
      </HashPointsExampleSortToggleLabelText>

      <ToggleButton>
        <ToggleButtonStateIndicator />
      </ToggleButton>
    </BaseHashPointsExampleSortToggleLabel>
  );
};

type BaseHashPointsExampleSortToggleProps =
  & Omit<BaseChoiceProps, 'index' | 'type'>
  & {
    readonly sortIndexes: readonly number[];
    readonly toggleClass: string;
  };

const BaseHashPointsExampleSortToggle = ({
  sortIndexes,
  toggleClass,
  ...props
}: BaseHashPointsExampleSortToggleProps) => (
  <BaseChoice { ...sortableProps(props, toggleClass) } type="checkbox" />
);

const HashPointsExampleSortToggle = styled(BaseHashPointsExampleSortToggle, {
  nested: {
    [`&:checked ~ * .${flexPointClassName}`]: {
      color: 'var(--sorted-color)',
    },

    [`&:checked ~ * .${flexPointBackgroundClassName}`]: {
      color: 'var(--sorted-color)',
    },

    [`&:checked ~ * .${hashPointClassName}`]: {
      order: 'var(--sorted-index)' as any,
    },

    [`&:checked ~ * .${plotPointClassName}`]: {
      color:  'var(--sorted-color)',
      stroke: 'var(--sorted-stroke)',
    },

    [`&:checked ~ * .${toggleSwitchClassName}`]: {
      ...theme.toggleSwitch.container.on,

      justifyContent: 'flex-end',
    },
  },
});

const HashPointsExampleHeader = styled('div', {
  alignItems:     'center',
  display:        'flex',
  justifyContent: 'space-between',
  marginBottom:   '0.5rem',
});

const length = (value?: number | string) => (
  typeof value === 'number'
    ? `${value}px`
    : value
);

const BaseHashPointsExample = styled(HashExampleGraphic, ({
  height,
  width,
}) => ({
  height:   length(height),
  overflow: 'visible',
  width:    length(width),
}));

const HashPointsExampleContainer = styled(FullBleedContainer, {
  position: 'relative',
});

const HashPlotExample = styled('svg', {
  overflow:     'visible',
  padding:      '1rem',
});

const HASH_PLOT_AXIS_LABEL_SIZE = 13;

const HashPlotAxisLabel = styled('text', {
  ...theme.visualization.plot.axis,

  fontFamily: theme.monospaceFont,
  fontSize:   `${HASH_PLOT_AXIS_LABEL_SIZE}px`,
  fill:       'currentcolor',
});

const HASH_PLOT_PADDING = 20;

type HashPlotScaleOptions =
  & Partial<ScalePointOptions<any, any>>
  & {
    readonly xRange?: number;
    readonly yRange?: number;
    readonly yMax?:   number;
  };

const defaultScaleOptions = {
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
  readonly renderAxis?:     boolean;
  readonly scaleOptions?:   HashPlotScaleOptions;
  readonly sortIndexes:     readonly number[];
  readonly sortToggleClass: string;
  readonly width?:          number;
}

const HashPlot = ({
  className,
  exampleId,
  hexPoints,
  points,
  pointSize  = 6,
  renderAxis = true,
  scaleOptions,
  sortIndexes,
  sortToggleClass,
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

  const axisYTop    = 0;
  const axisYBottom = '100%';
  const axisXLeft   = 0 - HASH_PLOT_AXIS_LABEL_SIZE
  const axisXRight  = '100%';

  const axisMaxLabel = COORDINATE_MAX.toString(16);
  const baseAxisMin  = COORDINATE_MIN.toString(16);
  const axisMinLabel = baseAxisMin.padStart(2, baseAxisMin);

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

  return (
    <HashPlotExample
      className={ className }
      height={ height }
      width={ width }
    >
      {(
          blurRadii == null
            ? null
            : (
                <defs>
                  { blurRadii.map((radius, index) => (
                    <filter id={ filterIds?.[index] }>
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation={ radius }
                      />
                    </filter>
                  )) }
                </defs>
              )
      )}
      {( renderAxis
          ? (<>
              <HashPlotAxisLabel
                x={ axisXLeft }
                y={ axisYBottom }
                transform={ `translate(0, ${HASH_PLOT_AXIS_LABEL_SIZE})`}
              >
                { axisMinLabel }
              </HashPlotAxisLabel>

              <HashPlotAxisLabel x={ axisXLeft } y={ axisYTop }>
                { axisMaxLabel }
              </HashPlotAxisLabel>

              <HashPlotAxisLabel
                x={ axisXRight }
                y={ axisYBottom }
                transform={ `translate(0, ${HASH_PLOT_AXIS_LABEL_SIZE})`}
              >
                { axisMaxLabel }
              </HashPlotAxisLabel>
            </>)
          : null )}

      { points.map(({
        x: pointX,
        y: pointY,
      }, index) => {
        const sortedIndex = sortIndexes[index];
        const {
          x: sortedX,
          y: sortedY,
        } = points[sortedIndex];

        const cx = toFixed((pointX + xShift) / xRange * 100, 4);
        const cy = 100 - toFixed((pointY - yShift) / yRange * 100, 4);

        const sortedCx = toFixed((sortedX + xShift) / xRange * 100, 4);
        const sortedCy = 100 - toFixed((sortedY - yShift) / yRange * 100, 4);

        const pointSize = pointSizes[index];
        const filterId  = filterIds?.[index];

        const filterProps = filterId == null
          ? {}
          : {
            filter: `url(#${filterId})`,
          };

        return (
          <>
            <PlotPoint
              { ...filterProps }

              id={ `example-${exampleId}-${index}-point` }
              index={ index }
              cx={ `${cx}%` }
              cy={ `${cy}%` }
              pointSize={ pointSize }
              r={ pointSize }
              sortedIndex={ sortIndexes[index] }
              sortedX={ sortedCx - pointX }
              sortedY={ sortedCy - sortedY }
              xShift={ HASH_PLOT_PADDING }
              yShift={ HASH_PLOT_PADDING }
              toggleClass={ sortToggleClass }
            />
          </>
        );
      }) }
    </HashPlotExample>
  );
};

const HashPointsExamplePlotContainer = styled('div', {
  marginBottom: '1rem',
});

const ScaledHashPlot = styled(HashPlot, {
  gridColumn: '1 / -1',
});

const WidthRestrictedHashPlot = styled(HashPlot, {
  width: '32rem',
});

interface BaseHashPointsExampleProps {
  readonly exampleId:      number;
  readonly hexPoints:      HexPointSequence;
  readonly plotPointSize?: number;
  readonly points:         PointSequence;
  readonly renderAxis?:    boolean;
  readonly scaleOptions?:  HashPlotScaleOptions;
  readonly toggleSorting?: unknown;
}

type HashPointsExampleProps =
  & BaseHashPointsExampleProps
  & (
    | { readonly scaleOptions:  HashPlotScaleOptions }
    | { readonly toggleSorting: true }
  );

const HashPointsExample = ({
  exampleId,
  hexPoints,
  plotPointSize = 6,
  points,
  renderAxis,
  scaleOptions = defaultScaleOptions,
  toggleSorting: isUnsortedByDefault,
}: HashPointsExampleProps) => {
  const isScaled = scaleOptions !== defaultScaleOptions;

  const Container = isScaled
    ? FullBleedContainer
    : Fragment;

  const HashPlotComponent = isScaled
    ? ScaledHashPlot
    : WidthRestrictedHashPlot;

  const hashChunksHeight = isScaled
    ? HASH_EXAMPLE_LINE_HEIGHT * 5
    : HASH_EXAMPLE_LINE_HEIGHT * 4;

  const labelYOffset  = HASH_EXAMPLE_TEXT_OFFSET;
  const hashYOffset   = labelYOffset * 2.5;
  const pointYOffset  = labelYOffset * 3.5;
  const scaledYOffset = labelYOffset * 4.5;

  const scaledPoints = points.map((point) => (
    scalePoint(point, {
      ...defaultScaleOptions,
      ...scaleOptions,
    })
  ));

  const sortedPoints = sortBy(scaledPoints, (a, b) => (
    Number(a.x) === Number(b.x)
      ? 0
    : Number(a.x) > Number(b.x)
      ? 1
      : -1
  ));

  const sortIndexes = scaledPoints.map((point) => (
    sortedPoints.indexOf(point) ?? -1
  ));

  const renderHexPoints = isUnsortedByDefault
    ? hexPoints as ReadonlyArray<ArrayType<HexPointSequence>>
    : sortedPoints.map((point) => (
      hexPoints[scaledPoints.indexOf(point)]
    ));

  const renderPoints: AnyPointSequence = isUnsortedByDefault
    ? points
    : sortedPoints;

  const renderScaledPoints: AnyPointSequence = isUnsortedByDefault
    ? scaledPoints
    : sortedPoints;

  const sortToggleClass = identifier();

  const hashPlotYMax = isScaled
    ? 150
    : COORDINATE_MAX;

  const hashPlotScaleOptions = {
    ...scaleOptions,

    // yMax: isScaled ? 100 : COORDINATE_MAX,
  };

  return (
    <Container>
      <HashPointsExampleContainer>
        {( isUnsortedByDefault
            ? (
                <HashPointsExampleSortToggle
                  exampleId={ exampleId }
                  sortIndexes={ sortIndexes }
                  suffix="sort"
                  toggleClass={ sortToggleClass }
                />
              )
            : null
        )}

        <HashPointsExampleHeader>
          <ExampleHeading>Result:</ExampleHeading>

          {( isUnsortedByDefault
            ? (<HashPointsExampleSortToggleLabel exampleId={ exampleId } />)
            : null )}
        </HashPointsExampleHeader>

        { renderPoints.map((_, index) => (
          <PlotPointEmphasisChoice
            checked={ index === 0 }
            exampleId={ exampleId }
            pointSize={ plotPointSize }
            index={ index }
            suffix="point"
            type="radio"
          />
        )) }

        <HashPointsExamplePlotContainer>
          <HashPlotComponent
            exampleId={ exampleId }
            hexPoints={ renderHexPoints }
            points={ renderPoints }
            pointSize={ plotPointSize }
            renderAxis={ renderAxis }
            scaleOptions={ hashPlotScaleOptions }
            sortIndexes={ sortIndexes }
            sortToggleClass={ sortToggleClass }
          />
        </HashPointsExamplePlotContainer>

        <HashConversionOuter>
          <HashConversionScrollableOverflow>
            <HashConversionInner>
              { renderHexPoints.map(({
                x: hashX,
                y: hashY,
              }, index) => {
                const {
                  x: pointX,
                  y: pointY,
                } = renderPoints[index];
                const {
                  x: scaledX,
                  y: scaledY,
                } = renderScaledPoints[index];

                const coordinateValues = [
                  hashX,
                  hashY,
                  pointX,
                  pointY,
                  ...(
                    isScaled
                      ? [
                        scaledX,
                        scaledY,
                      ]
                      : []
                  ),
                ] as const;

                const chunkLength = Math.max(
                  String(COORDINATE_MAX).length,
                  ...coordinateValues.map((coordinate) => (
                    String(coordinate).length
                  ))
                );

                const hashChunksLength = hexPoints.length;
                const hashChunksWidth  = getHashExampleWidth(hashChunksLength);

                const charWidth             = 1 / hashChunksLength * hashChunksWidth;
                const coordinateColumnWidth = chunkLength * charWidth;
                const pointColumnWidth      = (coordinateColumnWidth * 2) + charWidth;
                const yPointColumnOffset    = coordinateColumnWidth + charWidth;

                const hashChunkBgPadding = charWidth / 2;
                const hashChunkWidth     = pointColumnWidth + (hashChunkBgPadding * 2);

                return (
                  <HashPointConversion
                    className={ `point-${index}` }
                    for={ `example-${exampleId}-${index}-point` }
                    sortedIndex={ sortIndexes[index] }
                  >
                    <BaseHashPointsExample
                      height={ hashChunksHeight }
                      width={ hashChunkWidth }
                    >
                      <PointExampleGroup>
                        <FlexColumnBackground
                          index={ index }
                          height={ hashChunksHeight }
                          rx={ 3 }
                          ry={ 3 }
                          width={ hashChunkWidth }
                          x={ 0 - hashChunkBgPadding }
                          y={ 0 }
                          sortedIndex={ sortIndexes[index] }
                          toggleClass={ sortToggleClass }
                        />

                        <FlexPoint
                          coordinate="x"
                          index={ index }
                          y={ labelYOffset }
                          padLength={ chunkLength }
                          sortedIndex={ sortIndexes[index] }
                          toggleClass={ sortToggleClass }
                        >
                          x
                        </FlexPoint>

                        <FlexPoint
                          coordinate="y"
                          index={ index }
                          x={ yPointColumnOffset }
                          y={ labelYOffset }
                          padLength={ chunkLength }
                          sortedIndex={ sortIndexes[index] }
                          toggleClass={ sortToggleClass }
                        >
                          y
                        </FlexPoint>

                        <FlexPoint
                          coordinate="x"
                          index={ index }
                          y={ hashYOffset }
                          padLength={ chunkLength }
                          sortedIndex={ sortIndexes[index] }
                          toggleClass={ sortToggleClass }
                        >
                          { hashX }
                        </FlexPoint>

                        <FlexPoint
                          coordinate="y"
                          index={ index }
                          x={ yPointColumnOffset }
                          y={ hashYOffset }
                          padLength={ chunkLength }
                          sortedIndex={ sortIndexes[index] }
                          toggleClass={ sortToggleClass }
                        >
                          { hashY }
                        </FlexPoint>

                        <FlexPoint
                          coordinate="x"
                          index={ index }
                          y={ pointYOffset }
                          padLength={ chunkLength }
                          sortedIndex={ sortIndexes[index] }
                          toggleClass={ sortToggleClass }
                        >
                          { String(parseInt(hashX, 16)) }
                        </FlexPoint>

                        <FlexPoint
                          coordinate="y"
                          index={ index }
                          x={ yPointColumnOffset }
                          y={ pointYOffset }
                          padLength={ chunkLength }
                          sortedIndex={ sortIndexes[index] }
                          toggleClass={ sortToggleClass }
                        >
                          { String(parseInt(hashY, 16)) }
                        </FlexPoint>

                        {( isScaled
                            ? (
                                <>
                                  <FlexPoint
                                    coordinate="x"
                                    index={ index }
                                    y={ scaledYOffset }
                                    padLength={ chunkLength }
                                    sortedIndex={ sortIndexes[index] }
                                    toggleClass={ sortToggleClass }
                                  >
                                    { String(scaledX) }
                                  </FlexPoint>

                                  <FlexPoint
                                    coordinate="y"
                                    index={ index }
                                    padLength={ chunkLength }
                                    x={ yPointColumnOffset }
                                    y={ scaledYOffset }
                                    sortedIndex={ sortIndexes[index] }
                                    toggleClass={ sortToggleClass }
                                  >
                                    { String(scaledY) }
                                  </FlexPoint>
                                </>
                              )
                            : null )}
                      </PointExampleGroup>
                    </BaseHashPointsExample>
                  </HashPointConversion>
                )
              }) }
            </HashConversionInner>
          </HashConversionScrollableOverflow>
        </HashConversionOuter>
      </HashPointsExampleContainer>
    </Container>
  );
};

const CustomArt = ({
  className,
  hash,
  height,
  identifier: identifier_ = identifier,
  StylesProvider          = DefaultStylesProvider,
  styleRenderer           = renderer,
  width,
}: CustomArtProps) => {
  const hexPoints  = toHexPointSequence(hash);
  const basePoints = toPointSequence(hash, hexPoints);

  const { min: baseYMin } = yBounds(basePoints);
  const {
    xPadding,
    xScale,
    yPadding,
    yScale,
  } = blogArtDefaultParameters;

  // const yMax   = 100;
  const xShift = xPadding / 2;
  const yShift = baseYMin + (yPadding / 2);

  const scaleOptions = {
    xScale,
    xShift,
    // yMax,
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

  const sortToggleClass = identifier_();

  const hashPlotClassName = styleRenderer.renderRule(() => ({
    gridColumn: '1 / -1',
    height:     BLOG_ART_HEIGHT,
    padding:    '0 !important',
    width:      '100%',
  }), Object.keys);

  const renderHexPoints = scaledPoints.map((point) => (
    hexPoints[scaledPoints.indexOf(point)]
  ));

  return (
    <StylesProvider>
      <HashPlot
        className={ [
          className,
          hashPlotClassName,
        ].join(' ') }
        exampleId={ 0 }
        height={ height }
        hexPoints={ renderHexPoints }
        points={ scaledPoints }
        pointSize={ 'data-driven' }
        renderAxis={ false }
        scaleOptions={ scaleOptions }
        sortIndexes={ sortIndexes }
        sortToggleClass={ sortToggleClass }
        width={ width }
      />
    </StylesProvider>
  );
};

const WhatTheArt3Post = (props: BlogPostProps<any>) => {
  const {
    hash,
    title,
    topics,
  } = props;

  const hexPoints = toHexPointSequence(hash);
  const points    = toPointSequence(hash, hexPoints);

  const worstCase = '000000ffff00ffffa0b0c0d0e0f0102030405060';

  const wcHexPoints = toHexPointSequence(worstCase);
  const wcPoints = toPointSequence(hash, wcHexPoints);

  const scaleOptions = {
    xShift: blogArtDefaultParameters.xPadding / 2,
    xScale: blogArtDefaultParameters.xScale,
    yShift: blogArtDefaultParameters.yPadding / 2,
    yScale: blogArtDefaultParameters.yScale,
  };

  return (
    <BlogPost { ...props } CustomArt={ CustomArt }>
      {mdx`
        Previous:

        - [What the art, part 1: Why?][p1]
        - [What the art, part 2: Constraints][p2]

        Well, I certainly was [overly optimistic][blame] about how quickly I'd
        be able to finish this post! I took a little detour to build out
        [my résumé][resume] because I'm currently on the job hunt (want to hire
        me?). I wanted to finish this series, but knowing the site was live and
        ready to serve up my résumé proved to be a big enough ADHD mental block
        that I couldn't focus on the blog until it was done.

        But we're back to fill in some of the juicy implementation details! In
        the previous posts, I discussed the motivation behind the art, and the
        constraints that informed the artistic direction. This is how it was
        built.
      `}

      <CommentaryAside>
        {mdx`
          There's a fair bit of boilerplate & plumbing that the art
          functionality depends on. To keep the post focused I'll leave out
          some of the boring stuff. But if you want to see the nitty gritty,
          you can check out the full source for Git usage in
          [\`lib/git/log.ts\`][gitBoilerplate], and for art generation in
          [\`lib/art/math.ts\`][artBoilerplate].
        `}
      </CommentaryAside>

      <h2>Getting the Git</h2>

      {mdx`
        As I mentioned in Constraints, one of the goals was immutability:
        art that would render the same even if a given post is edited. This
        is achieved by retrieving a Git hash of the initial commit of the post.
        To allow incremental commits (save early, save often!), I restrict
        this hash lookup to the [\`origin/main\`][originMain] branch.

        For every post, I look up the initial commit hash of the post's entry
        module, falling back to a format-compatible SHA-1 hash of the current
        content of the file on disk in cases where the post isn't yet
        committed:

        ~~~typescript
        export const getInitialFileHash = (basePath: string) => {
          const path = resolveModulePath(basePath);
          const [ hash ] = getFormattedGitLogData({
            decode: identity,
            format: GitFormat.HASH,
            path,
          });

          return hash ?? getSHA1Hash(path);
        };

        const hash = getInitialFileHash(path);
        ~~~
      `}

      <SHA1Example hash={ hash } />

      <h2>Using (abusing) the hash data</h2>

      <p>
        The hash <a href={ links.sha1 }>represents a 160-bit number</a>, this
        post's hash being approximately <HashNumber hash={ hash } />. My idea
        was to treat it as the basis for a data structure: a set of ten numeric
        pairs, two hex characters per number, 8 bits each, which are then
        converted to <code>{ '{ x, y }' }</code> coordinates.
      </p>

      {mdx`
        ~~~typescript
        export const COORDINATE_MAX  = parseInt('ff', 16);
        export const COORDINATE_MIN  = parseInt('00', 16);

        // ...

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

        // ...

        const toCoordinate = (value: HexCoordinate): Coordinate => {
          const result = parseInt(value, 16);

          if (result > COORDINATE_MAX || result < COORDINATE_MIN) {
            throw new Error(\`Not a valid coordinate: \${value}\`);
          }

          return coordinate(result);
        };

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

        const hexPoints  = toHexPointSequence(hash);
        const basePoints = toPointSequence(hash, hexPoints);
        ~~~

        While I can't predict the initial commit hash on \`main/origin\`
        for this post, it's improbable (but possible!) that the plot points in
        the example result below follow the same horizontal order as their
        labels—that would require a hash where every other 8-bit
        substring assigned to an \`x\` coordinate has a greater value than the
        previous \`x\`. But the final art style is a series of horizontal curves
        along a baseline, so the next thing I do is sort the point sequence
        along the \`x\` axis.

        ~~~typescript
        const sortedPoints = sortBy(basePoints, ({ x: a }, { x: b }) => (
          a === b
            ? 0
          : a > b
            ? 1
            : -1
        ));
        ~~~

        Sorting is off by default in the example, to allow readers to toggle
        the before/after state.
      `}

      <HashPointsExample
        exampleId={ 1 }
        hexPoints={ hexPoints }
        points={ points }
        toggleSorting={ true }
      />

      <h2>Aspect ratio & padding adjustments</h2>

      {mdx`
        Of course, the final art rendering isn't square, it's much wider than
        it is tall. With some adjustments for very small & very large
        viewports, its aspect ratio is roughly five times the
        [golden ratio][goldenRatio], plus a small amount of padding—on the
        \`x\` axis to begin and end the blobs on the art's baseline, and on the
        \`y\` axis to leave some room for overshoot once the curves are
        computed.

        ~~~typescript
        export const scalePoint = <
          X extends number,
          Y extends number
        >({ x, y }: Point, {
          xScale,
          xShift,
          yScale,
          yShift,
        }: ScalePointOptions<X, Y>): ScaledPoint<X, Y> => ({
          x: scaledCoordinate(
            (x + xShift) * xScale,
            xScale
          ),
          y: scaledCoordinate(
            (y + yShift) * yScale,
            yScale
          ),
        });

        const scaledPoints = sortedPoints.map((point) => (
          scalePoint(point, {
            xScale: ${scaleOptions.xScale},
            xShift: ${scaleOptions.xShift},
            yScale: ${scaleOptions.yScale},
            yShift: ${scaleOptions.yShift},
          });
        ));
        ~~~
      `}

      <HashPointsExample
        exampleId={ 2 }
        hexPoints={ hexPoints }
        points={ points }
        renderAxis={ false }
        scaleOptions={ scaleOptions }
      />

      {/* <hr />

      <HashPointsExample
        exampleId={ 3 }
        hexPoints={ wcHexPoints }
        points={ wcPoints }
        renderAxis={ false }
        toggleSorting={ true }
      />

      <HashPointsExample
        exampleId={ 4 }
        hexPoints={ wcHexPoints }
        points={ wcPoints }
        renderAxis={ false }
        scaleOptions={ scaleOptions }
      /> */}

      <BlogArt hash={ hash } title={ title } topics={ topics } />
      {/* <BlogArt hash={ worstCase } title={ title } topics={ topics } /> */}
    </BlogPost>
  );
};

export default definePage(WhatTheArt3Post, {
  async getStaticProps(context) {
    const baseProps = await getBlogPostStaticProps({
      ...context,

      description: baseMDX`
        For the final part in a series introducing my new site's
        art project, I walk through some of the more interesting
        parts of how the art is generated.
      `,

      importURL: import.meta.url,
      title:     'What the art, part 3: Implementation',

      topics: [
        Topic.ART,
        Topic.TECHNOLOGY,
        Topic.NEURODIVERGENCE,
      ],
    });

    const props = {
      ...baseProps,

      CustomArt,
    };

    return { props };
  },
});
