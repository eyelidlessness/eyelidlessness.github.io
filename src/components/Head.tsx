import { __HeadContext }    from 'microsite/document';
import { Head as BaseHead } from 'microsite/head';
import { Favicons }         from './Favicons';

export const Head = ({
  children,
  ...rest
}: JSX.IntrinsicElements['head']) => {

  return (
    <BaseHead { ...rest }>
      { children }
      <Favicons />
    </BaseHead>
  );
};
