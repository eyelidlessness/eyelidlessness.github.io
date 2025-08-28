import { ComponentChildren } from 'preact';
import { DevilsAlbatross }   from '@/components/DevilsAlbatross';
import { GitHubLogo }        from '@/components/GitHubLogo';
import {
  styled,
  theme,
} from '@/lib/styles';
import {
  SiteLogo,
  siteLogoDimensionsPx,
} from './SiteLogo';
import { PageMetadata } from '@/lib/content/meta.js';

const { columns } = theme.siteHeader;

const gridTemplateColumns = `
  ${columns[0]}
  ${columns[1]}
  min(
    ${columns[2][0]},
    ${columns[2][1]}
  )
  ${columns[3]}
  ${columns[4]}
`.replace(/\s+/g, ' ');

const BaseSiteHeader = styled('header', {
  display:    'grid',
  gridColumn: '1 / -1',
  gridTemplateColumns,
  padding:    'clamp(0.5rem, 4vmin, 2rem) 0',
  position:   'relative',
  zIndex:     1,

  nested: {
    [theme.print]: {
      nested: {
        '&[data-page-id="resume"]': {
          display: 'none',
        },
      },
    },
  },
});

const SiteHeaderNavOuter = styled('div', {
  gridColumn: 3,
});

const SiteHeaderHomeLinkContainer = styled('div', {
  margin: '0 auto',
});

const SiteHeaderHomeLink = styled('a', {
  textDecoration: 'none',
});

const SiteHeaderPagesList = styled('ul', {
  alignItems:     'center',
  display:        'flex',
  flexShrink:     0,
  justifyContent: 'center',
  listStyle:      'none',
  marginBottom:   0,
  marginTop:      0,
  padding:        0,

  nested: {
    '&[data-page-id="resume"]': {
      display: 'none',
    },
  },
});

const listItemMarginRem = 1;

const SiteHeaderPagesListItem = styled('li', {
  nested: {
    '&:first-child': {
      marginLeft: 0,
    },

    '&:last-child': {
      marginRight: 0,
    },
  },

  display:    'block',
  flexShrink: 0,
  listStyle:  'none',
  margin:     `0 ${listItemMarginRem / 2}rem`,
  padding:    0,
});

const SiteHeaderPageLink = styled('a', {
  ...theme.siteHeader.pageLinks,

  display:        'block',
  fontSize:       'clamp(1em, 3vw, 1.125em)',
  fontWeight:     300,
  lineHeight:     1,
  padding:        '0.25rem',
  textDecoration: 'none',
  whiteSpace:     'nowrap',

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

const gitHubLogoMaxWidth = '1.5em';

const SiteHeaderGitHubLogo = styled(GitHubLogo, {
  display: 'block',
  width:   `clamp(1.125em, 4vw, ${gitHubLogoMaxWidth})`,
});

type GitHubLinkType =
  | 'GITHUB_LINK_LOGO'
  | 'GITHUB_LINK_TEXT';

const GITHUB_LINK_TYPE: GitHubLinkType = 'GITHUB_LINK_TEXT';

interface SiteLink {
  readonly label:    ComponentChildren;
  readonly location: string;
}

interface SiteHeaderProps {
  readonly meta: PageMetadata<any>;
}

const BLOG_HREF = '/blog/';
const RESUME_HREF = '/resume/#resume';

export const SiteHeader = (props: SiteHeaderProps) => {
  const metaProps = (
    props.meta.pageId == null
      ? {}
      : { 'data-page-id': props.meta.pageId }
  );
  const isResume = props.meta.pageId === 'resume';
  const homeHREF = isResume ? RESUME_HREF : BLOG_HREF;
  const siteLinks: readonly SiteLink[] = [
    {
      label:    'Blog',
      location: BLOG_HREF,
    },

    {
      label:    'Hire me',
      location: RESUME_HREF,
    },

    {
      label:    GITHUB_LINK_TYPE === 'GITHUB_LINK_TEXT'
        ? 'GitHub'
        : ( <SiteHeaderGitHubLogo /> ),
      location: 'https://github.com/eyelidlessness',
    }
  ] as const;
  const characterCount = siteLinks.reduce((acc, link) => (
    typeof link.label === 'string'
      ? acc + link.label.length
      : acc
  ), 0);

  const gap = {
    horizontal: '2rem',
  };
  const devilsBreakpoint = `${[
    `${siteLogoDimensionsPx.width}px`,
    gap.horizontal,
    `${characterCount + 2}ch`,
    gitHubLogoMaxWidth,
    `${siteLinks.length * listItemMarginRem}rem`,
  ].join(' + ')}`;

  return (
    <BaseSiteHeader { ...metaProps }>
      <SiteHeaderNavOuter>
        <DevilsAlbatross
          as="nav"
          devilsBreakpoint={ devilsBreakpoint }
          gap={ gap }
        >
          <SiteHeaderHomeLinkContainer>
            <SiteHeaderHomeLink href={homeHREF}>
              <SiteLogo />
            </SiteHeaderHomeLink>
          </SiteHeaderHomeLinkContainer>

          <SiteHeaderPagesList {...metaProps}>
          { siteLinks.map(({ location, label }) => (
            <SiteHeaderPagesListItem>
              <SiteHeaderPageLink href={ location }>
                { label }
              </SiteHeaderPageLink>
            </SiteHeaderPagesListItem>
          )) }
          </SiteHeaderPagesList>
        </DevilsAlbatross>
      </SiteHeaderNavOuter>
    </BaseSiteHeader>
  );
};
