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
  AnyPoint,
  AnyPointSequence,
  COORDINATE_MAX,
  COORDINATE_MIN,
  CubicBezierPoints,
  cubicBezierPoints,
  getNaiveSegments,
  getNonPhallicSegments,
  HexChar,
  hexChars,
  HexPointSequence,
  InvalidHashError,
  MIN_SMOOTHING,
  SMOOTHING_RATIO,
  PointSequence,
  ScalePointOptions,
  SegmentList,
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
  rgba,
  styled,
  StylesProvider as DefaultStylesProvider,
  theme,
  StyleableClassName,
} from '@/lib/styles';

const repoURL = (...segments: readonly string[]) => ([
  'https://github.com/eyelidlessness/eyelidlessness.github.io',
  ...segments,
].join('/'));

const links = {
  blame: repoURL(
    'blame/9216eb05cd375fccc7e9b06a98bb9c1b110a97d0/src/pages/blog/2021/02',
    'what-the-art-p2-constraints/index.tsx#L111-L112'
  ),
  artBoilerplate: repoURL('blob/main/src/lib/art/math.ts'),
  bezierCurves:   'https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B%C3%A9zier_curves',
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
  readonly className?: StyleableClassName;
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

const FlexText = styled('text', {
  fill:       'currentcolor',
  fontFamily: theme.monospaceFont,
});

interface BaseSHA1ExampleProps {
  readonly className?: StyleableClassName;
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
  color:      hsluvColors[9].light.x,
  marginTop: '0.5rem',

  nested: {
    [theme.darkMode]: {
      color: hsluvColors[9].dark.y,
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
  & { readonly className?: StyleableClassName }
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
}: Sortable<JSX.IntrinsicElements['rect']>) => (
  <rect { ...sortableProps(props, flexPointBackgroundClassName) }>
    { children }
  </rect>
);

const FlexColumnBackground = styled(BaseFlexPointBackground, ({
  index,
  sortedIndex,
}) => ({
  '--selected-color':        hsluvColors[index].light.selected,
  '--selected-sorted-color': hsluvColors[sortedIndex].light.selected,
  '--sorted-color':          hsluvColors[sortedIndex].light.hover,
  color:                     hsluvColors[index].light.hover,
  fill:                      'currentcolor',
  opacity:                   0,
  transition:                'opacity 0.1s ease-in-out',
  zIndex:                    -1,

  nested: {
    [theme.darkMode]: {
      '--selected-color':        hsluvColors[index].dark.selected,
      '--selected-sorted-color': hsluvColors[sortedIndex].dark.selected,
      '--sorted-color':          hsluvColors[sortedIndex].dark.hover,
      color:                     hsluvColors[index].dark.hover,
    },
  },
}));

type BasePlotPointProps =
  & Sortable<JSX.IntrinsicElements['circle']>
  & {
    readonly cx:                      number | string;
    readonly cy:                      number | string;
    readonly isControlPoint?:         boolean;
    readonly isSegment:               boolean;
    readonly pointSize:               number;
    readonly sortedX:                 number;
    readonly sortedY:                 number;
    readonly sortedTranslateXPercent: number;
    readonly sortedTranslateyPercent: number;
    readonly xShift:                  number;
    readonly yShift:                  number;
  };

const plotPointClassName = identifier();

const BasePlotPoint = ({
  children,
  index,
  isControlPoint,
  isSegment,
  pointSize,
  sortedIndex,
  sortedX,
  sortedY,
  sortedTranslateXPercent,
  sortedTranslateyPercent,
  xShift,
  yShift,
  ...props
}: BasePlotPointProps) => (
  <circle { ...sortableProps(props, plotPointClassName) }>
    { children }
  </circle>
);

const segmentTransition = 'stroke-width 0.1s ease-in-out, color 0.1s ease-in-out';

const PlotPoint = styled(BasePlotPoint, ({
  index,
  isControlPoint,
  isSegment,
  sortedIndex,
  sortedTranslateXPercent,
  sortedTranslateyPercent,
  // xShift,
  // yShift,
}) => (
  isControlPoint
    ? {
      '--emphasized-color':       '#666',
      // '--emphasized-r':           '3',
      '--emphasized-stroke-width': 0,
      color:                       'transparent',
      fill:                        'currentcolor',
      stroke:                      'currentcolor',
      // r:                           '3',
      strokeWidth:                 0,

      nested: {
        [theme.darkMode]: {
          '--emphasized-color': '#ccc',
          color:                'transparent',
        },
      },
    }

  : isSegment
    ? {
      '--emphasized-color': hsluvColors[index].light.plot,
      // '--emphasized-r':     '6',
      color:                '#dadada',
      fill:                 'currentcolor',
      stroke:               hsluvColors[index].light.plot,
      strokeWidth:          0,
      // r:                    '4',
      transition:           segmentTransition,

      nested: {
        [theme.darkMode]: {
          '--emphasized-color': hsluvColors[index].dark.plot,
          color:                '#666',
        },
      },
    }

    : {
      // '--emphasized-r':            pointSize,
      '--emphasized-color':        hsluvColors[index].light.plot,
      '--emphasized-sorted-color': hsluvColors[sortedIndex].light.plot,

      '--unsorted-transform': `translate(${[
        `${sortedTranslateXPercent}%`,
        `${sortedTranslateyPercent}%`,
      ].join(',')})`,

      '--sorted-color':  hsluvColors[sortedIndex].light.plot,
      '--sorted-stroke': hsluvColors[sortedIndex].light.emphasize,

      color:                       hsluvColors[index].light.plot,
      fill:                        'currentcolor',
      paintOrder:                  'stroke fill',
      stroke:                      hsluvColors[index].light.emphasize,
      strokeWidth:                 0,
      transition: Object.entries({
        fill:           '0.1s',
        stroke:         '0.1s',
        'stroke-width': '0.1s',
        transform:      '0.2s',
      }).map(([ property, duration ]) => (
        `${property} ${duration} ease-in-out`
      )).join(', '),

      nested: {
        [theme.darkMode]: {
          '--emphasized-color':        hsluvColors[index].dark.plot,
          '--emphasized-sorted-color': hsluvColors[sortedIndex].dark.plot,
          '--sorted-color':            hsluvColors[sortedIndex].dark.plot,
          '--sorted-stroke':           hsluvColors[sortedIndex].dark.emphasize,
          color:                       hsluvColors[index].dark.plot,
          stroke:                      hsluvColors[index].dark.emphasize,
        },
      },
    }
));

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

type BaseSegmentLineProps = SegmentLinePathProps<JSX.IntrinsicElements['line']>;

const BaseSegmentLine = ({
  fill,
  index,
  topic,
  ...props
}: BaseSegmentLineProps) => (
  <line { ...props } />
);

const SegmentLine = styled<BaseSegmentLineProps>(
  BaseSegmentLine,
  segmentLinePathStyles
);

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
    ? `example-${exampleId}-${index}-${suffix}-choice`
    : `example-${exampleId}-${suffix}-choice`
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
      id={ id }
      name={ `example-${exampleId}-${suffix}` }
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

    [`&:checked ~ * .example-${exampleId}-${index}-${suffix}`]: {
      color:       'var(--emphasized-color)',
      strokeWidth: 'var(--emphasized-stroke-width, 3)',
    },

    [`&:checked ~ * .example-${exampleId}-${index}-line`]: {
      // strokeWidth: 'var(--emphasized-stroke-width, 5)',
    },

    [`&:checked ~ * [for="example-${exampleId}-${index}-${suffix}-choice"] .${(
      flexPointBackgroundClassName
    )}`]: {
      opacity: 1,
      color:   'var(--selected-color)',
    },

    [`&:checked ~ * [for="example-${exampleId}-${index}-${suffix}-choice"] text`]: {
      color: '#fff',

      nested: {
        [theme.darkMode]: {
          color: rgba(255, 255, 255, 0.9),
        },
      },
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
  <FullBleedScrollableOverflow { ...props } shadow={ {
    darkMask:    [ 0, 0, 0, 1 ],
    darkScroll:  [ 230, 179, 213, 0.75 ],
    lightMask:   [ 255, 255, 255, 1 ],
    lightScroll: [ 124, 128, 131, 0.75 ],
  } }>
    { children }
  </FullBleedScrollableOverflow>
);

const HashConversionInner = styled('div', {
  alignItems: 'stretch',
  display:    'flex',

  nested: {
    '&:after': {
      content:         '""',
      backgroundImage: `linear-gradient(${[
        'to left',
        'rgba(255,255,255,1)',
        'rgba(255,255,255,1) 3rem',
        'rgba(255,255,255,0) 4rem',
      ].join(', ')})`,
      backgroundSize:  '4rem 100%',
      boxShadow:       '2rem 0 0 #fff',
      display:         'block',
      flexShrink:      0,
      marginLeft:      'auto',
      order:           10,
      width:           '2rem',
    },

    [theme.darkMode]: {
      nested: {
        '&:after': {
          backgroundImage: `linear-gradient(${[
            'to left',
            'rgba(0,0,0,1)',
            'rgba(0,0,0,1) 3rem',
            'rgba(0,0,0,0) 4rem',
          ].join(', ')})`,
          boxShadow:       '2rem 0 0 #000',
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

type HashPointsExampleSortToggleLabelProps =
  & Omit<JSX.IntrinsicElements['label'], 'as'>
  & Omit<BaseChoiceData, 'suffix' | 'type'>;

const HashPointsExampleSortToggleLabel = ({
  children,
  exampleId,
  ...baseProps
}: HashPointsExampleSortToggleLabelProps) => {
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
      color:  'var(--sorted-color)',
      stroke: 'var(--sorted-stroke)',
    },

    [`&:checked ~ * .${flexPointBackgroundClassName}`]: {
      '--selected-color': 'var(--selected-sorted-color)',
      color:              'var(--sorted-color)',
    },

    [`&:checked ~ * .${hashPointClassName}`]: {
      order: 'var(--sorted-index)' as any,
    },

    [`& ~ * .${plotPointClassName}`]: {
      transform: 'var(--unsorted-transform)',
    } as any,

    [`&:checked ~ * .${plotPointClassName}`]: {
      '--emphasized-color': 'var(--emphasized-sorted-color)',
      color:                'var(--sorted-color)',
      stroke:               'var(--sorted-stroke)',
      transform:            'translate(0, 0)',
    } as any,

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

type RenderCurves =
  | 'all'
  | 'first'
  | 'only';

interface HashPlotProps {
  readonly className?:      string;
  readonly exampleId:       number;
  readonly height?:         number;
  readonly hexPoints:       ReadonlyArray<ArrayType<HexPointSequence>>;
  readonly pointSize?:      HashPlotPointSize;
  readonly points:          AnyPointSequence;
  readonly renderAxis?:     boolean;
  readonly renderCurves?:   RenderCurves;
  readonly renderSegments?: boolean;
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
  renderAxis     = true,
  renderCurves,
  renderSegments = false,
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

  const defs = blurRadii == null
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
      );

  const axis = renderAxis
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
    : null;

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

  const PositionedPoint = ({
    index,
    isControlPoint = false,
    point,
    pointSize: pointSizeOverride,
  }: {
    index:           number;
    isControlPoint?: boolean;
    point:           AnyPoint;
    pointSize?:      number;
  }) => {
    const {
      cx,
      cy,
      filterProps,
      pointSize,
      sortedCx,
      sortedCy,
      sortedTranslateXPercent,
      sortedTranslateyPercent,
    } = plotPoint(point, index);
    const isSegment = Boolean(renderSegments || renderCurves);
    const sortedIndex = sortIndexes[index];
    const identifierProps = isSegment
      ? { className: `example-${exampleId}-${index}-point` }
      : {
          className: [
            `example-${exampleId}-${index}-point`,
            `example-${exampleId}-${sortedIndex}-sorted-point`,
          ].join(' '),

          id: `example-${exampleId}-${index}-point`,
        };

    return (
      <PlotPoint
        { ...filterProps }
        { ...identifierProps }

        cx={ `${cx}%` }
        cy={ `${cy}%` }
        index={ index }
        isControlPoint={ isControlPoint }
        isSegment={ isSegment }
        pointSize={ pointSizeOverride ?? pointSize }
        r={ pointSizeOverride ?? pointSize }
        sortedIndex={ sortedIndex }
        sortedX={ sortedCx - point.x }
        sortedY={ sortedCy - sortedCy }
        sortedTranslateXPercent={ sortedTranslateXPercent }
        sortedTranslateyPercent={ sortedTranslateyPercent }
        toggleClass={ sortToggleClass }
        xShift={ HASH_PLOT_PADDING }
        yShift={ HASH_PLOT_PADDING }
      />
    )
  };

  const renderedPoints = renderSegments
    ? null
    : points.map((point, index) => (
      <PositionedPoint index={ index } point={ point } />
    ));

  const renderedSegments = renderSegments
    ? segments?.map(([ start, mid, end ], index) => {
      const {
        cx: startX,
        cy: startY,
      } = plotPoint(start, index);

      const {
        cx: midX,
        cy: midY,
      } = plotPoint(mid, index);

      const {
        cx: endX,
        cy: endY,
      } = plotPoint(end, index);

      const topic = topics?.[index % topics.length];

      return (
        <g>
          <PositionedPoint index={ index } point={ start } />
          <PositionedPoint index={ index } point={ mid } />
          <PositionedPoint index={ index } point={ end } />

          <SegmentLine
            className={ `example-${exampleId}-${index}-line` }
            index={ index }
            topic={ topic }
            x1={ `${startX}%` }
            x2={ `${midX}%` }
            y1={ `${startY}%` }
            y2={ `${midY}%` }
          />

          <SegmentLine
            className={ `example-${exampleId}-${index}-line` }
            index={ index }
            topic={ topic }
            x1={ `${midX}%` }
            x2={ `${endX}%` }
            y1={ `${midY}%` }
            y2={ `${endY}%` }
          />
        </g>
      );
    })
    : null;

  const curves = () => {
    if (segments == null || renderCurves == null) {
      return {
        curvePoints:    null,
        renderedCurves: null,
      };
    }

    const renderableSegments = (
      renderCurves === 'all' || renderCurves === 'only'
    )
      ? segments
      : [ segments[0] ];

    const segmentData = renderableSegments.map((segment) => {
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

    const CurvesContainer =  renderCurves === 'only'
      ? styled(HashPlotExample, curvesContainerStyles)
      : styled('svg', curvesContainerStyles);

    const curvesContainerClassProps = renderCurves === 'only'
      ? { className }
      : undefined;

    const curvesContainerHeight = renderCurves === 'only'
      ? height
      : '100%';

    const curvesContainerWidth = renderCurves === 'only'
      ? width
      : '100%';

    return {
      curvePoints: (
        <>
          { segmentData.map(({
            cubicPoints,
            segment,
          }, index) => {
            const [
              baseStartPoint,
              baseMidPoint,
              baseEndPoint,
            ] = segment;

            return (
              <g>
                <PositionedPoint
                  index={ index }
                  point={ baseStartPoint }
                  pointSize={ 4 }
                />
                <PositionedPoint
                  index={ index }
                  point={ baseMidPoint }
                  pointSize={ 4 }
                />
                <PositionedPoint
                  index={ index }
                  point={ baseEndPoint }
                  pointSize={ 4 }
                />

                { cubicPoints.map(([ controlStart, controlEnd ]) => {
                  return (
                    <>
                      <PositionedPoint
                        index={ index }
                        isControlPoint={ true }
                        point={ controlStart }
                        pointSize={ 3 }
                      />
                      <PositionedPoint
                        index={ index }
                        isControlPoint={ true }
                        point={ controlEnd }
                        pointSize={ 3 }
                      />
                    </>
                  );
                })}
              </g>
            );
          }) }
        </>
      ),

      renderedCurves: (
        <CurvesContainer
          { ...curvesContainerClassProps }
          height={ curvesContainerHeight }
          width={ curvesContainerWidth }
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

                  const topic = topics?.[index % topics.length];

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

              const topic = topics?.[index % topics.length];

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
      ),
    };
  };

  const {
    curvePoints,
    renderedCurves,
  } = curves();

  if (renderCurves === 'only') {
    return renderedCurves;
  }

  return (
    <HashPlotExample
      className={ className }
      height={ height }
      width={ width }
    >
      { defs }
      { axis }
      { renderedPoints }
      { renderedSegments }
      { curvePoints }
      { renderedCurves }
    </HashPlotExample>
  );
};

const HashPointsExamplePlotContainer = styled(FullBleedContainer, {
  marginBottom: '1rem',
});

const ScaledHashPlot = styled(HashPlot, {
  gridColumn: '1 / -1',
});

const WidthRestrictedHashPlot = styled(HashPlot, {
  width: '32rem',
});

interface BaseHashPointsExampleProps {
  readonly exampleId:       number;
  readonly hexPoints:       HexPointSequence;
  readonly plotPointSize?:  number;
  readonly points:          PointSequence;
  readonly renderAxis?:     boolean;
  readonly renderCurves?:   RenderCurves;
  readonly renderScaled?:   boolean;
  readonly renderSegments?: boolean;
  readonly scaleOptions?:   HashPlotScaleOptions;
  readonly toggleSorting?:  unknown;
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
  renderCurves,
  renderScaled  = true,
  renderSegments,
  scaleOptions:  baseScaleOptions = defaultScaleOptions,
  toggleSorting: isUnsortedByDefault,
}: HashPointsExampleProps) => {
  const Container = renderScaled
    ? FullBleedContainer
    : Fragment;

  const HashPlotComponent = renderScaled
    ? ScaledHashPlot
    : WidthRestrictedHashPlot;

  const renderOnlyHex = Boolean(renderCurves || renderSegments);

  const renderCalculations = (
    !renderOnlyHex &&
    renderScaled
  );

  const hashChunksHeight = renderOnlyHex
    ? HASH_EXAMPLE_LINE_HEIGHT * 3
  : renderCalculations
    ? HASH_EXAMPLE_LINE_HEIGHT * 5
    : HASH_EXAMPLE_LINE_HEIGHT * 4;

  const labelYOffset  = HASH_EXAMPLE_TEXT_OFFSET;
  const hashYOffset   = labelYOffset * 2.5;
  const pointYOffset  = labelYOffset * 3.5;
  const scaledYOffset = labelYOffset * 4.5;

  const scaleOptions = {
    ...defaultScaleOptions,
    ...baseScaleOptions,
  };

  const scaledPoints = points.map((point) => (
    scalePoint(point, scaleOptions)
  ));

  const sortedPoints = sortBy(scaledPoints, (a, b) => (
    Number(a.x) === Number(b.x)
      ? 0
    : Number(a.x) > Number(b.x)
      ? 1
      : -1
  ));

  const sortIndexes = scaledPoints.map((point, index) => (
    isUnsortedByDefault
      ? sortedPoints.indexOf(point) ?? -1
      : index
  ));

  // const inverseSortIndexes = sortedPoints.map((point) => (
  //   scaledPoints.indexOf(point) ?? -1
  // ));

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

  const {
    xScale,
    xShift,
    yScale,
  } = scaleOptions;
  const xPadding = xShift * 2;
  const xMax     = (COORDINATE_MAX + xPadding) * xScale;

  const naiveSegments = getNaiveSegments({
    points: renderScaledPoints as any,
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

  const hashPlotScaleOptions = {
    ...scaleOptions,

    // yMax: isScaled ? 100 : COORDINATE_MAX,
  };

  return (
    <Container>
      <HashPointsExampleContainer>
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

        <HashPointsExamplePlotContainer>
          <HashPlotComponent
            exampleId={ exampleId }
            hexPoints={ renderHexPoints }
            points={ renderPoints }
            pointSize={ plotPointSize }
            renderAxis={ renderAxis }
            renderCurves={ renderCurves }
            renderSegments={ renderSegments }
            scaleOptions={ hashPlotScaleOptions }
            segments={ segments }
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
                    renderScaled
                      ? [
                        scaledX,
                        scaledY,
                      ]
                      : []
                  ),
                ] as const;

                const hexLength = String(COORDINATE_MAX).length;

                const chunkLength = renderOnlyHex
                  ? hexLength
                  : Math.max(
                    hexLength,
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
                    for={ `example-${exampleId}-${index}-point-choice` }
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

                        {( !renderOnlyHex
                          ? (<>
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
                            </>)
                            : null )}

                        {( renderScaled && !renderOnlyHex
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

const CurvePointText = ({ index }: Indexed<{}>) => (
  <>
    <code>P<sub>{ index }</sub></code>:&nbsp;
    <code>{'{'}&nbsp;x<sub>{ index }</sub>,&nbsp;y<sub>{ index }</sub>&nbsp;{'}'}</code>
  </>
);

export const CustomArt = ({
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

  // const {
  //   height: socialHeight,
  //   width:  socialWidth,
  // } = SOCIAL_IMAGE_DIMENSIONS;

  const xPadding = isMeta
    ? 0
    : defaultXPadding;
  const yPadding = isMeta
    ? 0
    : defaultYPadding;

  // const height = isMeta
  //   ? socialHeight * 0.65
  //   : propsHeight;
  // const width  = isMeta
  //   ? socialWidth * 0.9
  //   : propsWidth;

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
        '& path': {
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
        renderAxis={ false }
        renderCurves="only"
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

const WhatTheArt3Post = (props: BlogPostProps<any>) => {
  const {
    hash,
    title,
    topics,
  } = props;

  const hexPoints = toHexPointSequence(hash);
  const points    = toPointSequence(hash, hexPoints);

  const sortedPoints = sortBy(points, ({ x: a }, { x: b }) => (
    Number(a) === Number(b)
      ? 0
    : Number(a) > Number(b)
      ? 1
      : -1
  ));

  const {
    xPadding,
    xScale,
    yPadding,
    yScale,
  } = blogArtDefaultParameters;

  const xShift = xPadding / 2;
  const yShift = yPadding / 2;

  const scaleOptions = {
    xShift,
    xScale,
    yShift,
    yScale,
  };

  const scaledPoints = sortedPoints.map((point) => (
    scalePoint(point, scaleOptions)
  ));

  const {
    // max: scaledYMax,
  } = yBounds(scaledPoints);
  // const yMax = (scaledYMax + yPadding) * yScale;

  const escapeInterpolation = (expr: string) => (
    '${' + expr + '}'
  );

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
            throw new Error(\`Not a valid coordinate: ${escapeInterpolation('value')}\`);
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
          Number(a) === Number(b)
            ? 0
          : Number(a) > Number(b)
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
        renderScaled={ false }
        toggleSorting={ true }
      />

      <h2>Aspect ratio & padding adjustments</h2>

      {mdx`
        Of course, the final art rendering isn't square, it's much wider than
        it is tall. With some adjustments for very small & very large
        viewports, its aspect ratio is roughly five times the
        [golden ratio][goldenRatio] (there's no significance to this other than
        that it was the first ratio I tried), plus a small amount of padding—on
        the \`x\` axis to begin and end the blobs on the art's baseline, and on
        the \`y\` axis to leave some room for overshoot once the curves are
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
        }: ScalePointOptions<X, Y>): ScaledPoint<X, Y> => (
          scaledPoint({
            x: (x + xShift) * xScale,
            xScale,
            y: (y + yShift) * yScale,
            yScale,
          })
        );

        const scaledPoints = sortedPoints.map((point) => (
          scalePoint(point, scaleOptions)
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

      <h2>Connecting the dots</h2>

      {mdx`
        In the final art rendering, each point is joined into overlapping
        curves, each segment curving from approximately the previous point's
        \`x\` (or \`0\`) at the \`y\` the baseline to the following point's
        \`x\` (or \`xMax\`), also at the baseline.

        ~~~typescript
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

        const naiveSegments = getNaiveSegments({
          points: scaledPoints,
          xMax,
        });
        ~~~

        Why are they _naïve_ segments? As I mentioned in Constraints, I
        discovered during development that sometimes certain hashes would
        create shapes which were inappropriate for the kind of content I wanted
        on my site. So after constructing these naïve segments, I walk through
        them again in hopes of detecting that scenario.

        I should add a caveat: this was entirely a process trial and error, and
        produced some moderately ugly "magic" code. I try not to write code like
        this, but if you're making art sometimes you've gotta break a few eggs!

        ~~~typescript
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

        const segments = getNonPhallicSegments({
          segments: naiveSegments,
          xMax,
          xScale,
          yScale,
        });
        ~~~
      `}

      <HashPointsExample
        exampleId={ 3 }
        hexPoints={ hexPoints }
        points={ points }
        renderAxis={ false }
        renderSegments={ true }
        scaleOptions={ scaleOptions }
      />

      <h2>My trig crash course</h2>

      {mdx`
        We're coming near the end! But before I get to the final step, I needed
        to be able to generate [cubic Bézier curves][bezierCurves] for each
        segment.
      `}

      <CommentaryAside>
        {mdx`
          I had to ~~learn~~ copy & paste some math to generate the curves. I
          did take the time to learn what the math is actually doing while
          writing this post, but I've never taken a trigonometry course, so I'm
          probably not the best person to explain it in great detail, but I'll
          give it a shot.
        `}
      </CommentaryAside>

      {mdx`
        A single cubic Bézier curve is defined by:
      `}

      <ul>
        <li>
          A starting point <CurvePointText index={ 0 } />
        </li>
        <li>
          A starting control point <CurvePointText index={ 1 } />
        </li>
        <li>
          An ending control point <CurvePointText index={ 2 } />
        </li>
        <li>
          An ending point <CurvePointText index={ 3 } />
        </li>
      </ul>

      {mdx`
        The control points determine how far the curve extends, and how fast
        it arrives at the ending point. Here's how I calculate those curves.
        This is a fair bit of code, but the important bits are the
        \`curveLine\` function—which calculates an angled line to the control
        point, and the \`curveControlPoint\` function which calculates the
        control point's position from that line.

        ~~~typescript
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

        const cubicPoints = segments.map((segment) => (
          segment.reduce((acc, point, index) => {
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

            return [
              ...acc,
              segmentPoints,
            ]
          }, []);
        ));
        ~~~
      `}

      <HashPointsExample
        exampleId={ 4 }
        hexPoints={ hexPoints }
        points={ points }
        renderAxis={ false }
        renderCurves="all"
        scaleOptions={ scaleOptions }
      />

      <h2>Now, the magic happens</h2>

      {mdx`
        Now that I can get those smooth curves, I put on the final touches.
        Again, this is a fair bit of code, but essentially what's happening
        is that for each segment, I calculate a _slightly adjusted_ curve
        above the \`y\` axis baseline, then a _slightly differently adjusted_
        curve approximately mirroring it below the same baseline.

        These adjustments were chosen to fit a general theme in the site
        design, where most everything is laid out slightly to the left
        (assuming you're on a screen large enough for that to kick in), and
        to add just a little more visual variety than the curves alone.

        ~~~typescript
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
              \`${escapeInterpolation('point.x')},${escapeInterpolation('point.y')}\`
            )).join(' ');

            return [
              ...acc,
              \`C ${escapeInterpolation('result')}\`,
            ];
          }, [])
        );

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
                \`M ${escapeInterpolation('startPoint.x')},${escapeInterpolation('startPoint.y')}\`,
                ...forwardPoints,
                ...reversePoints,
                'Z',
              ].join(' '),
            ];
          }, [] as readonly string[])
        );

        const segmentPaths = getSegmentPaths({
          baseYCoordinate,
          segments,
          xScale,
          yMax,
          isBaselineBelowMidpoint,
          yScale,
        });
        ~~~
      `}

      <BlogArt hash={ hash } title={ title } topics={ topics } />

      <h2>My mistakes</h2>

      {mdx`
        One thing that was challenging building both the original art
        project, as well as the examples for this post, is that I'm working
        with numerical data, which I expect to go _up_ as it increases, but
        SVG renders higher numbers on the \`y\` axis _down_. I've gotten
        so frequently so turned around by this that, well, the final art
        rendering shows I never quite got it right! But I like how it looks,
        and I don't want to mess with that for now.

        Sometimes technically incorrect is the best kind of correct!

        * * *

        ### And another thing...

        I discovered two more mistakes after the post went live! First, I
        noticed the post's timestamp was incorrect. Since the timestamp is
        also defined by the time of the first commit to \`origin/main\`,
        this means that the command I'd used to retrieve the initial hash
        was also wrong.

        Then I realized the URL is wrong, because I began writing the post
        in February. Both have been corrected.
      `}
    </BlogPost>
  );
};

export default definePage(WhatTheArt3Post, {
  async getStaticProps(context) {
    const baseProps = await getBlogPostStaticProps({
      ...context,

      description: baseMDX`
        The final part in a series introducing my new site's art project.
        I walk through some of the more interesting parts of how the art
        is generated.
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
