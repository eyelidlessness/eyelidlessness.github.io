import {
  styled,
  theme,
} from '@/lib/styles';
import {
  FullBleedContainer,
  FullBleedContainerProps,
} from './FullBleedContainer';

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

const shadowImages = (scroll?: RGBA, mask?: RGBA) => (
  scroll != null && mask != null
    ? {
        backgroundImage: [
          `linear-gradient(${[
            'to left',
            `rgba(${mask.join(',')})`,
            `${transparent(mask)} 2rem`,
          ].join(', ')})`,
          `linear-gradient(${[
            'to left',
            `rgba(${scroll.join(',')})`,
            `rgba(${scroll.join(',')}) 0.5px`,
            `${transparent(scroll)} 5px`,
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
}

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

      backgroundAttachment: 'local, scroll',
      backgroundPosition:   '100% 0, 0 0',
      backgroundRepeat:     'no-repeat',
      backgroundSize:       '1rem, auto',
      paddingRight:         theme.mainGridSidePaddingRem,
      overflowX:            'auto',

      nested: {
        ...darkStyles,

        '& > *': {
          gridColumn: '3 / -1',
        },
      },
    };
  }
);
