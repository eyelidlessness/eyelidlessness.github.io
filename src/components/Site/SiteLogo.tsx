import {
  styled,
  theme,
} from '@/lib/styles';

export const siteLogoDimensionsPx = {
  height: 60,
  width:  338,
};

const BaseSiteLogo = styled('svg', {
  display:  'inline-block',
  maxWidth: '100%',
  width:    `${siteLogoDimensionsPx.width}px`,
});

const SiteLogoExternalReference = styled('use', {
  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].siteLogo,
    },
  },

  ...theme.siteLogo,

  fill: 'currentcolor',
});

const viewBox = (
  `0 0 ${siteLogoDimensionsPx.width} ${siteLogoDimensionsPx.height}`
);

export const SiteLogo = () => (
  <BaseSiteLogo
    viewBox={ viewBox }
  >
    <SiteLogoExternalReference xlinkHref="/images/SiteLogo.svg#site-logo" />
    <title>Eyelidlessness</title>
  </BaseSiteLogo>
);
