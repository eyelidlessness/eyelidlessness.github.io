import { ComponentProps } from 'preact';
import {
  css,
  styled,
  theme,
} from '@/lib/styles';

export const gridTemplateColumns = `
  ${theme.mainGridColumns[0]}
  ${theme.mainGridColumns[1]}
  min(
    ${theme.mainGridColumns[2][0]},
    ${theme.mainGridColumns[2][1]}
  )
  ${theme.mainGridColumns[3]}
  ${theme.mainGridColumns[4]}
`.replace(/\s+/g, ' ');

const fullBleedStyles = {
  gridColumn: '1 / -1',
};

export const fullBleedClassName = css(fullBleedStyles);

export const FullBleedContainer = styled('div', {
  nested: {
    [`& > .${fullBleedClassName}`]: {
      gridColumn: `1 / -1`,
    },

    '& > *': {
      gridColumn: '3 / 3',
    },

    '& > aside': {
      marginTop: 0,
    },
    '& > details': {
      marginTop: 0,
    },
    '& > h1': {
      marginTop: 0,
    },
    '& > h2': {
      marginTop: 0,
    },
    '& > h3': {
      marginTop: 0,
    },
    '& > hr': {
      marginTop: 0,
    },
    '& > ol': {
      marginTop: 0,
    },
    '& > p': {
      marginTop: 0,
    },
    '& > ul': {
      marginTop: 0,
    },
  },

  display: 'grid',
  gridTemplateColumns,

  ...fullBleedStyles,
});

export type FullBleedContainerProps = ComponentProps<
  typeof FullBleedContainer
>;
