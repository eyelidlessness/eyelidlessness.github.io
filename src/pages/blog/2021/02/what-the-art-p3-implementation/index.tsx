import hsluv                 from 'hsluv';
import { definePage }        from 'microsite/page';
import { ComponentChildren } from 'preact';
import {
  BlogPost,
  BlogPostProps,
  getBlogPostStaticProps,
} from '@/components/Blog';
import { CommentaryAside }   from '@/components/CommentaryAside';
import {
  FullBleedContainer,
  FullBleedScrollableOverflow,
} from '@/components/FullBleed';
import { VisiblyHidden }     from '@/components/VisiblyHidden';
import {
  InvalidHashError,
  toPointSequence,
  toHexPointSequence,
} from '@/lib/art';
import {
  mdx as baseMDX,
  Topic,
} from '@/lib/content';
import { sortBy }            from '@/lib/collections';
import {
  identifier,
  styled,
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

const DEFAULT_UA_FONT_SIZE     = 16;
const HASH_LENGTH              = 40;

const MIN_FONT_SIZE_RATIO      = theme.baseFontSizeRange.minEm;
const MAX_FONT_SIZE_RATIO      = theme.baseFontSizeRange.maxEm;

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
  marginTop: '0.5rem',
});

const FlexText = styled('text', {
  ...theme.code,

  fill: 'currentcolor',

  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].code,
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
  };

const flexPointClassName = identifier();

const BaseFlexPoint = ({
  children,
  className = '',
  coordinate,
  index,
  sortedIndex,
  toggleClass,
  ...props
}: BaseFlexPointProps) => (
  <FlexText { ...sortableProps(props, className, flexPointClassName) }>
    {( typeof children === 'string'
        ? children.padStart(3, ' ')
        : children
    )}
  </FlexText>
);

const flexPointColors = '0123456789'.split('').map((value) => {
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

const FlexPoint = styled(BaseFlexPoint, ({
  coordinate,
  index,
  sortedIndex,
}) => ({
  '--sorted-color': flexPointColors[sortedIndex].light[coordinate],
  color:            flexPointColors[index].light[coordinate],
  whiteSpace:       'pre',

  nested: {
    [theme.darkMode]: {
      '--sorted-color': flexPointColors[sortedIndex].dark[coordinate],
      color:            flexPointColors[index].dark[coordinate],
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
  '--sorted-color': flexPointColors[sortedIndex].light.hover,
  color:            flexPointColors[index].light.hover,
  fill:             'currentcolor',
  opacity:          0,
  transition:       'opacity 0.1s ease-in-out',
  zIndex:           -1,

  nested: {
    [theme.darkMode]: {
      '--sorted-color': flexPointColors[sortedIndex].dark.hover,
      color:            flexPointColors[index].dark.hover,
    },
  },
}));

type BasePlotPointProps =
  & Sortable<JSX.IntrinsicElements['circle']>
  & {
    readonly cx:      number;
    readonly cy:      number;
    readonly sortedX: number;
    readonly sortedY: number;
  };

const plotPointClassName = identifier();

const BasePlotPoint = ({
  children,
  index,
  sortedIndex,
  sortedX,
  sortedY,
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
}) => ({
  '--sorted-color':     flexPointColors[sortedIndex].light.plot,
  '--sorted-stroke':    flexPointColors[sortedIndex].light.emphasize,
  '--sorted-transform': `translate(${sortedX}px, ${sortedY}px)`,
  color:                flexPointColors[index].light.plot,
  fill:                 'currentcolor',
  paintOrder:           'stroke fill',
  stroke:               flexPointColors[index].light.emphasize,
  strokeWidth:          0,

  transition: [
    'fill',
    'stroke',
    'stroke-width',
  ].map((property) => `${property} 0.1s ease-in-out`).join(', '),

  nested: {
    [theme.darkMode]: {
      '--sorted-color':  flexPointColors[sortedIndex].dark.plot,
      '--sorted-stroke': flexPointColors[sortedIndex].dark.emphasize,
      color:             flexPointColors[index].dark.plot,
      stroke:            flexPointColors[index].dark.emphasize,
    },
  },
}));

type ChoiceType = 'checkbox' | 'radio';

type BaseChoiceData =
  & {
    readonly exampleId: number;
    readonly index?:     unknown;
    readonly suffix:     string;
    readonly type:       ChoiceType;
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

const PlotPointEmphasisChoice = styled(BaseChoice, ({
  exampleId,
  index,
  suffix,
}) => ({
  nested: {
    [`&:checked ~ svg #example-${exampleId}-${index}-${suffix}`]: {
      strokeWidth: '9',
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

const hashPointsExampleMaskImage = `linear-gradient(${[
  'to left',
  'transparent',
  'transparent 1rem',
  'black 2.5rem',
].join(', ')})`;

const HashConversionOuter = styled(FullBleedContainer, {
  ...theme.pre,

  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].pre,
    },
  },
});

const HashConversionScrollableOverflow = styled(FullBleedScrollableOverflow, {
  maskImage:       hashPointsExampleMaskImage,
  WebkitMaskImage: hashPointsExampleMaskImage,
});

const HashConversionInner = styled('div', {
  display: 'flex',
  padding: '0.5rem 0',
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
  width:            '9ch',
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

const BaseHashPointsExample = styled(HashExampleGraphic, {
  overflow: 'visible',
  width:    '9.2ch',
});

const HashPointsExampleContainer = styled(FullBleedContainer, {
  position: 'relative',
});

const HashPlotExample = styled('svg', {
  marginBottom: '1rem',
  width:        '32rem',
});

const hashPlotAxisLabelSize = 13;

const HashPlotAxisLabel = styled('text', {
  ...theme.visualization.plot.axis,

  fontFamily: theme.monospaceFont,
  fontSize:   `${hashPlotAxisLabelSize}px`,
  fill:       'currentcolor',
});

interface HashPointsExampleProps {
  readonly exampleId: number;
  readonly hash:      string;
}

const HashPointsExample = ({
  exampleId,
  hash,
}: HashPointsExampleProps) => {
  const chunkLength      = 3;
  const hashPoints       = toHexPointSequence(hash);
  const hashChunksLength = hashPoints.length;
  const hashChunksWidth  = getHashExampleWidth(hashChunksLength);

  const chunksHeight = (HASH_EXAMPLE_LINE_HEIGHT * 4);

  const charWidth             = 1 / hashChunksLength * hashChunksWidth;
  const coordinateColumnWidth = chunkLength * charWidth;
  const pointColumnWidth      = (coordinateColumnWidth * 2) + charWidth;
  const yPointColumnOffset    = coordinateColumnWidth + charWidth;

  const labelYOffset = HASH_EXAMPLE_TEXT_OFFSET;
  const hashYOffset  = labelYOffset * 2.5;
  const pointYOffset = labelYOffset * 3.5;

  const backgroundPadding = charWidth / 2;
  const backgroundWidth   = pointColumnWidth + (backgroundPadding * 2);

  const points = toPointSequence(hash);

  const sortedPoints = sortBy(points, (a, b) => (
    a.x > b.x
      ? 1
      : -1
  ));

  const sortIndexes = points.map((point) => (
    sortedPoints.indexOf(point) ?? -1
  ));

  const plotsRange   = HASH_EXAMPLE_WIDTH;
  const plotsPadding = 20;
  const plotsSize    = plotsRange + (plotsPadding * 2);
  const axisYTop     = hashPlotAxisLabelSize;
  const axisYBottom  = axisYTop + plotsRange + plotsPadding;
  const axisXRight   = plotsSize - hashPlotAxisLabelSize;

  const sortToggleClass = identifier();

  return (
    <HashPointsExampleContainer>
      <HashPointsExampleSortToggle
        exampleId={ exampleId }
        sortIndexes={ sortIndexes }
        suffix="sort"
        toggleClass={ sortToggleClass }
      />

      <HashPointsExampleHeader>
        <ExampleHeading>Result:</ExampleHeading>

        <HashPointsExampleSortToggleLabel exampleId={ exampleId } />
      </HashPointsExampleHeader>

      { points.map((_, index) => (
        <PlotPointEmphasisChoice
          checked={ index === 0 }
          exampleId={ exampleId }
          index={ index }
          suffix="point"
          type="radio"
        />
      )) }

      <HashPlotExample viewBox={ `0 0 ${plotsSize} ${plotsSize}` }>
        <HashPlotAxisLabel x="0" y={ axisYBottom }>
          00
        </HashPlotAxisLabel>
        <HashPlotAxisLabel x="0" y={ axisYTop }>
          ff
        </HashPlotAxisLabel>
        <HashPlotAxisLabel x={ axisXRight } y={ axisYBottom }>
          ff
        </HashPlotAxisLabel>

        { points.map(({
          x: pointX,
          y: pointY,
        }, index) => {
          const sortedIndex = sortIndexes[index];
          const {
            x: sortedX,
            y: sortedY,
          } = points[sortedIndex];
          const cx = plotsPadding + (pointX / 255 * plotsRange);
          const cy = plotsSize - (pointY / 255 * plotsRange) - plotsPadding;

          const sortedCx = plotsPadding + (sortedX / 255 * plotsRange);
          const sortedCy = plotsSize - (sortedY / 255 * plotsRange) - plotsPadding;

          return (
            <PlotPoint
              id={ `example-${exampleId}-${index}-point` }
              index={ index }
              cx={ cx }
              cy={ cy }
              r="3"
              sortedIndex={ sortIndexes[index] }
              sortedX={ sortedCx - pointX }
              sortedY={ sortedCy - sortedY }
              toggleClass={ sortToggleClass }
            />
          );
        }) }
      </HashPlotExample>

      <HashConversionOuter>
        <HashConversionScrollableOverflow>
          <HashConversionInner>
            { hashPoints.map(({
              x: hashX,
              y: hashY,
            }, index) => {
              const point = points[index];
              const {
                x: pointX,
                y: pointY,
              } = point;

              return (
                <HashPointConversion
                  className={ `point-${index}` }
                  for={ `example-${exampleId}-${index}-point` }
                  sortedIndex={ sortIndexes[index] }
                >
                  <BaseHashPointsExample
                    height={ chunksHeight }
                    width={ hashChunksWidth }
                  >
                    <PointExampleGroup>
                      <FlexColumnBackground
                        index={ index }
                        height={ chunksHeight }
                        rx={ 3 }
                        ry={ 3 }
                        width={ backgroundWidth }
                        x={ 0 - backgroundPadding }
                        y={ 0 }
                        sortedIndex={ sortIndexes[index] }
                        toggleClass={ sortToggleClass }
                      />

                      <FlexPoint
                        coordinate="x"
                        index={ index }
                        y={ labelYOffset }
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
                        sortedIndex={ sortIndexes[index] }
                        toggleClass={ sortToggleClass }
                      >
                        y
                      </FlexPoint>

                      <FlexPoint
                        coordinate="x"
                        index={ index }
                        y={ hashYOffset }
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
                        sortedIndex={ sortIndexes[index] }
                        toggleClass={ sortToggleClass }
                      >
                        { hashY }
                      </FlexPoint>

                      <FlexPoint
                        coordinate="x"
                        index={ index }
                        y={ pointYOffset }
                        sortedIndex={ sortIndexes[index] }
                        toggleClass={ sortToggleClass }
                      >
                        { String(pointX) }
                      </FlexPoint>

                      <FlexPoint
                        coordinate="y"
                        index={ index }
                        x={ yPointColumnOffset }
                        y={ pointYOffset }
                        sortedIndex={ sortIndexes[index] }
                        toggleClass={ sortToggleClass }
                      >
                        { String(pointY) }
                      </FlexPoint>
                    </PointExampleGroup>
                  </BaseHashPointsExample>
                </HashPointConversion>
              )
            }) }
          </HashConversionInner>
        </HashConversionScrollableOverflow>
      </HashConversionOuter>
    </HashPointsExampleContainer>
  );
};

const WhatTheArt3Post = (props: BlogPostProps<any>) => {
  const { hash } = props;

  return (
    <BlogPost { ...props }>
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

        getInitialFileHash(__filename);
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

        toPointSequence(hash);
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
        sortBy(basePoints, (a, b) => (
          a.x > b.x
            ? 1
            : -1
        ));
        ~~~

        I've left sorting off by default in the example, so you can see the
        order before and after.
      `}

      <HashPointsExample exampleId={ 1 } hash={ hash } />
    </BlogPost>
  );
}

export default definePage(WhatTheArt3Post, {
  async getStaticProps(context) {
    const props = await getBlogPostStaticProps({
      ...context,

      description: mdx`
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

    return { props };
  },
});
