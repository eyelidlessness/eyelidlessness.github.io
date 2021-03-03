import {
  Head as BaseHead,
  seo,
} from 'microsite/head';
import {
  criticalStyles,
  setGlobalStyles,
} from '@/lib/styles';
import { Favicons }     from './Favicons';
import { PageMetadata } from '@/lib/content';

setGlobalStyles();

type HeadProps =
  & JSX.IntrinsicElements['head']
  & {
    readonly meta:
      & PageMetadata<any>
      & { readonly description?: string };
  };

export const Head = ({
  children,
  meta: {
    description,
    host,
    social: {
      image: socialImage,
    },
    title,
  },
  ...rest
}: HeadProps) => {

  return (
    <BaseHead { ...rest }>
      <seo.title>{ title } | Eyelidlessness</seo.title>
      {( description != null
        ? (<seo.description>{ description }</seo.description>)
        : <></>
      )}
      <style dangerouslySetInnerHTML={{
        __html: criticalStyles,
      }} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@eyelidlessenss" />

      <seo.image
        alt={ title }
        height={ socialImage.height }
        src={ `${host}${socialImage.publicPath}` }
        width={ socialImage.width }
      />
      <>{ children }</>
      <Favicons />
    </BaseHead>
  );
};
