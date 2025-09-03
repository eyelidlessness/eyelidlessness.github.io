import {
  Head as BaseHead,
  seo,
} from 'microsite/head';
import {
  criticalStyles,
  setGlobalStyles,
  theme,
} from '../lib/styles/index.js';
import { Favicons } from './Favicons.js';
import type { PageMetadata } from '../lib/content/meta.js';

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
    redirect,
    social: {
      image: socialImage,
    },
    title,
  },
  ...rest
}: HeadProps) => {
  if (redirect) {
    return (
      <BaseHead { ...rest }>
        <seo.title>Redirecting to { redirect }</seo.title>

        <meta
          http-equiv="refresh"
          content={ `0; URL=${redirect}` }
        />
        <link rel="canonical" href={ redirect } />
      </BaseHead>
    )
  }

  return (
    <BaseHead { ...rest }>
      <seo.title>{ title } | Eyelidlessness</seo.title>
      {( description != null
        ? (<seo.description>{ description }</seo.description>)
        : <></>
      )}

      <meta name="theme-color" content={ theme.siteLogo.color } />

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
