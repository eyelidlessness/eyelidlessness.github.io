import {
  renderer,
  styled,
  theme,
} from '../../lib/styles/index.js';
import {
  FullBleedContainer,
  FullBleedContainerProps,
} from './FullBleedContainer.js';

type RGBA = readonly [ r: number, g: number, b: number, a: number ];

interface FullBleedScrollableOverflowShadowMask {
  readonly darkMask?:   RGBA;
  readonly darkScroll?: RGBA;
  readonly lightMask:   RGBA;
  readonly lightScroll: RGBA;
}

export interface FullBleedScrollableOverflowProps
  extends Omit<FullBleedContainerProps, 'as'> {
  readonly className?: string;
  readonly shadow?:    FullBleedScrollableOverflowShadowMask;
}

const BaseFullBleedScrollableOverflow = ({
  children,
  shadow,
  ...props
}: FullBleedScrollableOverflowProps) => (
  <FullBleedContainer { ...props }>
    { children }
  </FullBleedContainer>
);

const transparent = ([ r, g, b ]: RGBA) => (
  `rgba(${[ r, g, b, 0].join(',')})`
);

const backgroundSizes = [
  '12rem 100%',
  'auto',
];

const backgroundSize = backgroundSizes.join(', ');

const backgroundSizeAlt = backgroundSizes.map((size) => (
  size.replace('100%', '100.1%')
)).join(', ');

const safariScrollShadowFix = renderer.renderKeyframe(() => ({
  '0%': {
    backgroundSize,
  },
  '100%': {
    backgroundSize: backgroundSizeAlt,
  },
}), {});

const shadowSizePx = '5px';

const shadowImages = (scroll?: RGBA, mask?: RGBA) => (
  scroll != null && mask != null
    ? {
        backgroundImage: [
          `linear-gradient(${[
            'to left',
            `rgba(${mask.join(',')})`,
            `rgba(${mask.join(',')}) calc(11rem + ${shadowSizePx})`,
            `${transparent(mask)} 12rem`,
          ].join(', ')})`,
          `linear-gradient(${[
            'to left',
            `rgba(${scroll.join(',')})`,
            `rgba(${scroll.join(',')}) 0.5px`,
            `${transparent(scroll)} ${shadowSizePx}`,
          ].join(', ')})`,
        ].join(', '),
      }
    : null
);

const shadowStyles = (shadow?: FullBleedScrollableOverflowShadowMask) => {
  if (shadow != null) {
    const {
      darkMask,
      darkScroll,
      lightMask,
      lightScroll,
    } = shadow;

    return {
      dark:  shadowImages(darkScroll, darkMask),
      light: shadowImages(lightScroll, lightMask),
    };
  }

  return {
    dark:  null,
    light: null,
  };
};

export const FullBleedScrollableOverflow = styled(
  BaseFullBleedScrollableOverflow,
  ({ shadow }) => {
    const {
      dark,
      light,
    } = shadowStyles(shadow);

    const darkStyles = dark == null
      ? null
      : {
        [theme.darkMode]: dark,
      };

    return {
      ...light,

      // '@keyframes': {},

      backgroundAttachment: 'local, scroll',
      backgroundPosition:   'calc(100% + 11rem) 0, 0 0',
      backgroundRepeat:     'no-repeat',
      backgroundSize,
      paddingRight: theme.mainGridSidePaddingRem,
      overflowX:    'auto',

      nested: {
        ...darkStyles,

        '& > *': {
          gridColumn: '3 / -1',
        },

        '@media not all and (min-resolution: .001dpcm)': {
          nested: {
            '@supports (-webkit-appearance: none)': {
              animationName:           safariScrollShadowFix,
              animationDuration:       '1000s',
              animationIterationCount: 'infinite',
            },
          },
        },

        '@media (hover: hover)': {
          animationPlayState: 'paused',

          nested: {
            '&:active, &:focus, &:hover': {
              animationPlayState: 'running',
            },
          },
        },
      },
    } as const;
  }
);
