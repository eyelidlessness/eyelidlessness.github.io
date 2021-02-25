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
import {
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
  <HashExample className={ className }>
    <FlexText
      textLength={ HASH_EXAMPLE_WIDTH }
      x="0"
      y={ HASH_EXAMPLE_TEXT_OFFSET }
    >
      { hash }
    </FlexText>
  </HashExample>
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

type BaseFlexPointProps =
  & Indexed<JSX.IntrinsicElements['text']>
  & {
    readonly coordinate: 'x' | 'y';
  };

const BaseFlexPoint = ({
  children,
  coordinate,
  index,
  ...props
}: BaseFlexPointProps) => (
  <FlexText { ...props }>
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
}) => ({
  color:      flexPointColors[index].light[coordinate],
  whiteSpace: 'pre',

  nested: {
    [theme.darkMode]: {
      color: flexPointColors[index].dark[coordinate],
    },
  },
}));

const BaseFlexPointBackground = ({
  children,
  index,
  ...props
}: Indexed<Indexed<JSX.IntrinsicElements['rect']>>) => (
  <rect { ...props }>{ children }</rect>
);

const FlexColumnBackground = styled(BaseFlexPointBackground, ({ index }) => ({
  color:      flexPointColors[index].light.hover,
  fill:       'currentcolor',
  opacity:    0,
  transition: 'opacity 0.05s ease-in-out',
  zIndex:     -1,

  nested: {
    [theme.darkMode]: {
      color: flexPointColors[index].dark.hover,
    },
  },
}));

const BasePlotPoint = ({
  children,
  index,
  ...props
}: Indexed<JSX.IntrinsicElements['circle']>) => (
  <circle { ...props }>{ children }</circle>
);

const PlotPoint = styled(BasePlotPoint, ({
  index,
}) => ({
  color:       flexPointColors[index].light.plot,
  fill:        'currentcolor',
  paintOrder:  'stroke fill',
  stroke:      flexPointColors[index].light.emphasize,
  strokeWidth: 0,
  transition:  'stroke-width 0.05s ease-in-out',

  nested: {
    [theme.darkMode]: {
      color:  flexPointColors[index].dark.plot,
      stroke: flexPointColors[index].dark.emphasize,
    },
  },
}));

type BasePlotPointEmphasisRadioProps = Indexed<{
  readonly className?: string;
  readonly exampleId:  string;
}>;

const BasePlotPointEmphasisRadio = ({
  className,
  exampleId,
  index,
}: BasePlotPointEmphasisRadioProps) => (
  <VisiblyHidden
    as="input"
    className={ className }
    name={ `example-${exampleId}-point` }
    id={ `example-${exampleId}-${index}` }
    type="radio"
  />
);

const PlotPointEmphasisToggle = styled(BasePlotPointEmphasisRadio, ({
  exampleId,
  index,
}) => ({
  nested: {
    [`&:checked ~ svg #example-${exampleId}-${index}-point`]: {
      strokeWidth: '9',
    },

    [`&:checked ~ * [for="example-${exampleId}-${index}"] rect`]: {
      opacity: 1,
    },
  },
}))

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

const HashPointsExampleOuter = styled(FullBleedScrollableOverflow, {
  maskImage:       hashPointsExampleMaskImage,
  WebkitMaskImage: hashPointsExampleMaskImage,
});

const HashPointsExampleInner = styled('div', {
  display: 'flex',
});

const HashPoint = styled('label', {
  display:    'inline-block',
  flexShrink: 0,
  width:      '9ch',
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
  maxWidth:     '32rem',
  overflow:     'visible',
});

const hashPlotAxisLabelSize = 13;

const HashPlotAxisLabel = styled('text', {
  ...theme.visualization.plot.axis,

  fontFamily: theme.monospaceFont,
  fontSize:   `${hashPlotAxisLabelSize}px`,
  fill:       'currentcolor',
});

interface HashPointsExampleProps {
  readonly hash: string;
}

const HashPointsExample = ({
  hash,
}: HashPointsExampleProps) => {
  const chunkLength      = 3;
  const hashPoints       = toHexPointSequence(hash);
  const hashChunksLength = hashPoints.length;
  const hashChunksWidth  = getHashExampleWidth(hashChunksLength);

  const chunksHeight = (HASH_EXAMPLE_LINE_HEIGHT * 5);

  const charWidth             = 1 / hashChunksLength * hashChunksWidth;
  const coordinateColumnWidth = chunkLength * charWidth;
  const pointColumnWidth      = (coordinateColumnWidth * 2) + charWidth;
  const yPointColumnOffset    = coordinateColumnWidth + charWidth;

  const labelYOffset = HASH_EXAMPLE_TEXT_OFFSET;
  const hashYOffset  = labelYOffset * 2.5;
  const pointYOffset = labelYOffset * 3.5;

  const backgroundPadding = charWidth / 2;
  const backgroundWidth   = pointColumnWidth + (backgroundPadding * 2);
  const backgroundYOffset = 0;
  const backgroundHeight  = (labelYOffset * 3.5) + (backgroundPadding * 2);

  const points       = toPointSequence(hash);
  const plotsRange   = HASH_EXAMPLE_WIDTH;
  const plotsPadding = 20;
  const plotsSize    = plotsRange + (plotsPadding * 2);
  const axisYTop     = hashPlotAxisLabelSize + plotsPadding;
  const axisYBottom  = axisYTop + plotsRange;
  const axisXRight   = plotsRange - hashPlotAxisLabelSize;

  return (
    <HashPointsExampleContainer>
      { points.map((_, index) => (
        <PlotPointEmphasisToggle exampleId="1" index={ index } />
      )) }

      <HashPlotExample
        viewBox={ `0 0 ${plotsSize} ${plotsSize}` }
      >
        <HashPlotAxisLabel x="0" y={ axisYBottom }>00</HashPlotAxisLabel>
        <HashPlotAxisLabel x="0" y={ axisYTop }>ff</HashPlotAxisLabel>
        <HashPlotAxisLabel x={ axisXRight } y={ axisYBottom }>ff</HashPlotAxisLabel>

        { points.map(({
          x: pointX,
          y: pointY,
        }, index) => (
          <PlotPoint
            id={ `example-1-${index}-point` }
            index={ index }
            cx={ pointX + plotsPadding }
            cy={ plotsRange - pointY - plotsPadding }
            r="3"
          />
        )) }
      </HashPlotExample>

      <HashPointsExampleOuter>
        <HashPointsExampleInner>
          { hashPoints.map(({
            x: hashX,
            y: hashY,
          }, index) => {
            const {
              x: pointX,
              y: pointY,
            } = points[index];

            return (
              <HashPoint for={ `example-1-${index}` }>
                <BaseHashPointsExample
                  height={ chunksHeight }
                  width={ hashChunksWidth }
                >
                  <PointExampleGroup>
                    <FlexColumnBackground
                      index={ index }
                      height={ backgroundHeight }
                      rx={ 3 }
                      ry={ 3 }
                      width={ backgroundWidth }
                      x={ 0 - backgroundPadding }
                      y={ backgroundYOffset }
                    />

                    <FlexPoint
                      coordinate="x"
                      index={ index }
                      y={ labelYOffset }
                    >
                      x
                    </FlexPoint>

                    <FlexPoint
                      coordinate="y"
                      index={ index }
                      x={ yPointColumnOffset }
                      y={ labelYOffset }
                    >
                      y
                    </FlexPoint>

                    <FlexPoint
                      coordinate="x"
                      index={ index }
                      y={ hashYOffset }
                    >
                      { hashX }
                    </FlexPoint>

                    <FlexPoint
                      coordinate="y"
                      index={ index }
                      x={ yPointColumnOffset }
                      y={ hashYOffset }
                    >
                      { hashY }
                    </FlexPoint>

                    <FlexPoint
                      coordinate="x"
                      index={ index }
                      y={ pointYOffset }
                    >
                      { String(pointX) }
                    </FlexPoint>

                    <FlexPoint
                      coordinate="y"
                      index={ index }
                      x={ yPointColumnOffset }
                      y={ pointYOffset }
                    >
                      { String(pointY) }
                    </FlexPoint>
                  </PointExampleGroup>
                </BaseHashPointsExample>
              </HashPoint>
            )
          }) }
        </HashPointsExampleInner>
      </HashPointsExampleOuter>
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

      <ExampleHeading>Result:</ExampleHeading>

      <SHA1Example hash={ hash } />

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
      `}

      <ExampleHeading>Result:</ExampleHeading>

      <HashPointsExample hash={ hash } />
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
