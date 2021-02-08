import { Head as BaseHead } from 'microsite/head';
import {
  criticalStyles,
  setGlobalStyles,
} from '@/lib/styles';
import { Favicons }         from './Favicons';

setGlobalStyles();

export const Head = ({
  children,
  ...rest
}: JSX.IntrinsicElements['head']) => {

  return (
    <BaseHead { ...rest }>
      <style dangerouslySetInnerHTML={{
        __html: criticalStyles,
      }} />
      { children }
      <Favicons />
    </BaseHead>
  );
};
