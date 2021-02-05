import {
  styled,
  theme,
} from '@/lib/styles';
import { SiteLogo } from './SiteLogo';


const gridTemplateColumns = `
  ${theme.siteHeader.columns[0]}
  ${theme.siteHeader.columns[1]}
  min(
    ${theme.siteHeader.columns[2][0]},
    ${theme.siteHeader.columns[2][1]}
  )
  ${theme.siteHeader.columns[3]}
  ${theme.siteHeader.columns[4]}
`.replace(/\s+/g, ' ');

const BaseSiteHeader = styled('div', {
  display:    'grid',
  gridColumn: '1 / -1',
  gridTemplateColumns,
  padding: '1rem 0',
});

const wrapMediaQuery = '@media (min-width: 40em)';

const SiteHeaderNav = styled('nav', {
  nested: {
    [wrapMediaQuery]: {
      flexFlow:       'row wrap',
      justifyContent: 'space-between',
    },
  },

  alignItems:     'center',
  display:        'flex',
  flexFlow:       'column',
  justifyContent: 'center',
});

const SiteHeaderNavOuter = styled('div', {
  display:        'grid',
  gridColumn:     3,
  justifyContent: 'stretch',
  textAlign:      'center',
});

const SiteHeaderHomeLinkContainer = styled('div', {
  nested: {
    [wrapMediaQuery]: {
      marginLeft:  0,
      marginRight: '1em',
    },
  },

  margin: '0 auto',
});

const SiteHeaderHomeLink = styled('a', {
  nested: {
    [theme.darkMode]: {
      color: 'hsl(336deg, 80%, 62%)',
    },
  },

  textDecoration: 'none',
});

const SiteHeaderPagesList = styled('ul', {
  nested: {
    [wrapMediaQuery]: {
      marginLeft:  '1em',
      marginRight: 0,
      marginTop:   0,
    },
  },

  alignItems:     'baseline',
  display:        'flex',
  justifyContent: 'center',
  listStyle:      'none',
  margin:         '0.75rem auto 0',
  padding:        0,
});

const SiteHeaderPagesListItem = styled('li', {
  nested: {
    '&:first-child': {
      marginLeft: 0,
    },

    '&:last-child': {
      marginRight: 0,
    },
  },

  display:   'inline-block',
  listStyle: 'none',
  margin:    '0 0 0 2rem',
  padding:   0,
});

const SiteHeaderPageLink = styled('a', {
  ...theme.siteHeader.pageLinks,

  fontSize:       '1.125em',
  fontWeight:     300,
  lineHeight:     1,
  textDecoration: 'none',

  nested: {
    [theme.darkMode]: {
      ...theme[theme.darkMode].siteHeader.pageLinks,
    },

    ':active': {
      fontWeight: 300,
    },

    ':local-link': {
      textDecoration: 'underline',
    },
  },

});

export const SiteHeader = () => (
  <BaseSiteHeader as="header">
    <SiteHeaderNavOuter>
      <SiteHeaderNav>
        <SiteHeaderHomeLinkContainer>
          <SiteHeaderHomeLink href="/">
            <SiteLogo />
          </SiteHeaderHomeLink>
        </SiteHeaderHomeLinkContainer>

        <SiteHeaderPagesList>
          <SiteHeaderPagesListItem>
            <SiteHeaderPageLink href="/blog/">
              Blog
            </SiteHeaderPageLink>
          </SiteHeaderPagesListItem>
        </SiteHeaderPagesList>
      </SiteHeaderNav>
    </SiteHeaderNavOuter>
  </BaseSiteHeader>
);
