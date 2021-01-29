import {
  ElementType,
  ComponentProps,
} from 'preact';
import {
  css,
  theme,
} from '@/lib/styles';

type FullBleedContainerSubstitutedContainerProps<
  P extends BaseFullBleedContainerProps,
  T extends ElementType
> =
  P extends { as: T }
    ? (
      & P
      & ComponentProps<T>
    )
  : JSX.IntrinsicElements['div'];

interface BaseFullBleedContainerProps {
  as?: ElementType;
}

export const gridTemplateColumns = `
  ${theme.mainGridColumns[0]}
  ${theme.mainGridColumns[1]}
  min(
    ${theme.mainGridColumns[2][0]},
    ${theme.mainGridColumns[2][1]}
  )
  ${theme.mainGridColumns[3]}
  ${theme.mainGridColumns[4]}
`;

type FullBleedContainerProps<
  P extends BaseFullBleedContainerProps,
  T extends ElementType
> =
  & P
  & (
    | FullBleedContainerSubstitutedContainerProps<P, T>
    | JSX.IntrinsicElements['div']
  );

const baseFullBleedContainerClassName = css({
  gridColumn: '1 / -1',
});

const fullBleedContainerClassName = css({
  nested: {
    '& > *': {
      gridColumn: '3 / 3',
    },

    '& > details': {
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

    [`& > .${baseFullBleedContainerClassName}`]: {
      gridColumn: '1 / -1',
    },
  },

  display:    'grid',
  gridColumn: '1 / -1',
  gridTemplateColumns,
});

export const FullBleedContainer = <
  P extends BaseFullBleedContainerProps,
  T extends ElementType
>({
  as: Component = 'div',
  ...rest
}: FullBleedContainerProps<P, T>) => (
  Component == null
    ? <div
      className={ fullBleedContainerClassName }
      { ...rest }
    />
    // @ts-ignore
    : <Component
      className={ fullBleedContainerClassName }
      { ...rest }
    />
);

// export const FullBleedContainer = styled(BaseFullBleedContainer, );

// export default FullBleedContainer;
