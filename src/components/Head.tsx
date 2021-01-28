import { __HeadContext }    from 'microsite/document';
import { Head as BaseHead } from 'microsite/head';

export const Head = ({
  children,
  ...rest
}: JSX.IntrinsicElements['head']) => {

  return (
    <BaseHead { ...rest }>
      { children }
      <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
      <link rel="alternate icon" href="./favicon.ico" />
    </BaseHead>
  );
};
