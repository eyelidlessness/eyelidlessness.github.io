import {
  ComponentProps,
  ElementType,
} from 'preact';
import {
  BlogArt,
  BlogArtProps,
} from '@/components/Blog';
import { FullBleedContainer } from '@/components/FullBleed';
import { GitHubLogo }         from '@/components/GitHubLogo';
import {
  Timestamp,
  TimestampMode,
} from '@/components/Timestamp';
import {
  ProjectData,
  ProjectTimestamp,
} from '@/data/projects';
import type { ResumeData } from '@/data/resume';
import {
  ResumeProjectRole,
  ResumeSkillLevel,
} from '@/data/resume';
import {
  mdx,
  mdxInline,
} from '@/lib/content';
import {
  clamp,
  styled,
  theme,
} from '@/lib/styles';
import { ResumeSection }      from './ResumeSection';
import { ProjectDescription } from '../Projects/ProjectDescription.jsx';

const Flex = styled('div', {
  alignItems: 'start',
  display:    'flex',
  margin:     '-0.5rem',

  nested: {
    '& > *': {
      margin: '0.5rem',
    },
  },
});

const BaseFlex = styled(Flex, {
  flexWrap: 'wrap',

  nested: {
    '& > *': {
      minWidth: 'max(calc(50% - 2rem), 30ch)',
    },
  },
});

const ResumeHeader = styled(BaseFlex, {
  alignItems:     'baseline',
  justifyContent: 'space-between',
  margin:         '0 -0.5rem',

  nested: {
    '& > *': {
      margin:   '0 0.5rem',
      minWidth: 'auto',
    },
  },
});

const ResumeHeaderSection = styled(ResumeSection, {
  padding: 0,
});

const ResumeHeaderLinksContainer = styled(Flex, {
  flexWrap: 'wrap',
  margin:   '0.1111rem 0 0',
});

const BaseResumeHeaderLink = styled('a', {
  ...theme.resume.contactList.link,

  fontSize:       '0.88889em',
  fontWeight:     500,
  minWidth:       'auto',
  textDecoration: 'none',
});

const ResumeHeaderLinkInner = styled('span', {
  nested: {
    '@media print': {
      nested: {
        '& > *': {
          display: 'none',
        },

        '&:after': {
          content: 'attr(data-print-label)',
        },
      },
    },
  },
});

type ResumeHeaderLinkProps =
  & ComponentProps<typeof BaseResumeHeaderLink>
  & { readonly printLabel: string };

const ResumeHeaderLink = ({
  children,
  printLabel,
  ...props
}: ResumeHeaderLinkProps) => (
  <BaseResumeHeaderLink { ...props }>
    <ResumeHeaderLinkInner data-print-label={ printLabel }>
      <span>{ children }</span>
    </ResumeHeaderLinkInner>
  </BaseResumeHeaderLink>
);

const ResumeBrief = styled(FullBleedContainer, {
  ...theme.resume.brief,

  margin:  '1rem 0 0',
  padding: '1rem 0',

  nested: {
    ...theme.resume.brief.nested,

    '& p, & ul, & li': {
      margin: '0.5em 0',
    },

    '& :first-child': {
      marginTop: 0,
    },

    '& :last-child': {
      marginBottom: 0,
    },

    '& > *': {
      fontSize: '0.88889em',
      minWidth: 'auto',
    },
  },
});

const threeUpQuery = '@media (min-width: 44.625rem)';

const ThreeUp = styled(Flex, {
  display: 'block',
  margin:  0,

  nested: {
    '& > *': {
      margin:  '0 0 1rem',
    },

    [threeUpQuery]: {
      display:        'flex',
      flexWrap:       'nowrap',
      justifyContent: 'space-between',
      margin:         '0 -0.5rem -0.5rem',

      nested: {
        '& > *': {
          margin: '0 0.5rem 0.5rem'
        },
      },
    },
  },
});

const ResumeFlexHeading = styled('h2', {
  fontSize:    clamp(
    `${theme.headingRanges.h3.minEm}em`,
    `${theme.headingRanges.h3.fluidVw}vw`,
    `1.17778em`
  ),
  marginBottom: 0,
  paddingLeft:  0,
  textIndent:   0,
});

const ResumeSkillsetsContainer = styled(ThreeUp, {
  fontSize: '0.88889em',
});

const ResumeSkillsList = styled('ul', {
  display: 'block',
  padding: 0,
});

const ResumeSkillsListItem = styled('li', {
  display:   'inline-block',
  listStyle: 'none',
  margin:    '0 1.5rem 0.125rem 0',
  padding:   0,

  nested: {
    '&:last-child': {
      marginRight: 0,
    },

    [threeUpQuery]: {
      display: 'block',

      nested: {
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
  },
});

type ResumeSkillLevelMarker = ElementType<JSX.IntrinsicElements['span']>;

const ResumeSkillLevelMarkers = Object.values(ResumeSkillLevel)
  .reduce<Record<ResumeSkillLevel, ResumeSkillLevelMarker>>((acc, level) => ({
    ...acc,

    [level]: styled('span', {
      ...theme.resume.skillLevel[level],

      borderRadius:  '4px',
      display:       'inline-block',
      height:        '8px',
      margin:        '0 0.325rem 0 0',
      width:         '8px',
      verticalAlign: 'middle',

      nested: {
        ...theme.resume.skillLevel[level].nested,

        [threeUpQuery]: {
          margin: '0 0.325rem',
        },
      },
    })
  }), {} as Record<ResumeSkillLevel, ResumeSkillLevelMarker>);

interface ResumeSkillsListProps {
  readonly name:   string;
  readonly skills: ResumeData['skills']['list'];
}

const ResumeSkillsetListing = ({
  name,
  skills,
}: ResumeSkillsListProps) => (
  <div itemscope itemtype="http://schema.org/ItemList">
    <ResumeFlexHeading itemprop="name">{ name }</ResumeFlexHeading>

    <ResumeSkillsList>
      { skills.map(({
        level,
        name,
      }) => {
        const Marker = ResumeSkillLevelMarkers[level];

        return (
          <ResumeSkillsListItem key={ name } itemprop="itemListElement">
            <Marker
              role="img"
              title={ `Skill level: ${level}` }
            />

            { mdxInline`${name}` }
          </ResumeSkillsListItem>
        );
      }) }
    </ResumeSkillsList>
  </div>
);

const ResumeTopLevelListingItem = styled(FullBleedContainer, {
  padding: '1rem 0',
});


// TODO: the FRESH spec says this should be a summary of my achievements,
// but so far I've summarized the business.
const ResumeEmployerSummary = styled('div', {
  fontSize: '0.94444em',
  margin:   '0.5rem 0',
});

const dateStringPattern = /^(\d{4})-(\d{2})$/;

const dateStringToDate = (dateString: string) => {
  const matches = dateString.match(dateStringPattern);

  if (matches == null) {
    throw new Error(`Invalid format for date: ${dateString}, expected YYYY-MM`);
  }

  const [ , year, month ] = matches;

  return new Date(`${year}-${month}-01T00:00:00`);
};

const BaseResumeTimeRange = styled('div', {
  fontSize: '0.88889em',
});

const ResumeTimestamp = styled(Timestamp, {
  fontSize: 'inherit',
});

const ResumeEmploymentHeading = styled('h2', {
  marginBottom: '0.5rem',
});

interface ResumeEmploymentTimeRangeProps {
  readonly range: readonly [ start: ProjectTimestamp, end?: ProjectTimestamp ];
}

const ResumeTimeRange = ({
  range: [ start, end ],
}: ResumeEmploymentTimeRangeProps) => {
  const startDate = dateStringToDate(start);

  if (start == end || end == null) {
    return (
      <BaseResumeTimeRange>
        <ResumeTimestamp
          date={ startDate }
          itemprop="endDate"
          mode={ TimestampMode.SHORT }
        />
      </BaseResumeTimeRange>
    );
  }

  const endDate = dateStringToDate(end);

  return (
    <BaseResumeTimeRange>
      <ResumeTimestamp
        date={ startDate }
        itemprop="startDate"
        mode={ TimestampMode.SHORT }
      />
      { ' – ' }
      <ResumeTimestamp
        date={ endDate }
        itemprop="endDate"
        mode={ TimestampMode.SHORT }
      />
    </BaseResumeTimeRange>
  );
};

const ResumeEmploymentPosition = styled('div', {
  fontSize: '0.88889rem',
});

const ResumeEmploymentHighlightsList = styled('ul', {
  fontSize:           '0.88889em',
  paddingInlineStart: 0,
});

const ResumeEmploymentHighlightsListItem = styled('li', {
  display:             'grid',
  gridTemplateColumns: '1.25rem 1fr',
  listStyle:           'none',

  nested: {
    '&:before': {
      content:    '"›"',
      fontWeight: 'bolder',
      lineHeight: 1.2222,
      textAlign:  'center',
    },
  },
});

const BaseResumeTopLevelListingItem = styled(ResumeTopLevelListingItem, {
  marginBottom:  '0.5rem',
  paddingBottom: '1.5rem',
  position:      'relative',

  nested: {
    '&:after': {
      ...theme.resume.employment.separator,

      bottom:     0,
      content:    '""',
      display:    'block',
      gridColumn: '3 / 3',
      left:       0,
      position:   'absolute',
      width:      '100%',
    },

    '&:last-child': {
      marginBottom: 0,
    },

    '&:last-child:after': {
      display: 'none',
    },
  },
});

type ResumeEmploymentListItemProps =
  & {
    readonly employer:    string;
    readonly end:         ProjectTimestamp;
    readonly highlights?: readonly string[];
    readonly position:    string;
    readonly start:       ProjectTimestamp;
    readonly summary?:    string;
  };

const ResumeEmploymentListItem = ({
  employer,
  end,
  highlights,
  position,
  start,
  summary,
  ...props
}: ResumeEmploymentListItemProps) => (
  <BaseResumeTopLevelListingItem
    as="section"
    itemscope itemtype="https://schema.org/EmployeeRole"
    { ...props }
  >
    <ResumeHeader>
      <h3 itemprop="name">{ employer }</h3>
      <ResumeTimeRange range={ [ start, end ] } />
    </ResumeHeader>
    <ResumeEmploymentPosition itemprop="roleName">
      { position }
    </ResumeEmploymentPosition>

    {(
      summary == null
        ? null
        : (
            <ResumeEmployerSummary itemprop="description">
              { mdx(summary) }
            </ResumeEmployerSummary>
          )
    )}
    {(
      highlights == null
        ? null
        : (
          <ResumeEmploymentHighlightsList itemtype="http://schema.org/ItemList">
            { highlights.map((highlight) => (
              <ResumeEmploymentHighlightsListItem
                key={ highlight }
                itemprop="itemListElement"
              >
                { mdx(highlight) }
              </ResumeEmploymentHighlightsListItem>
            )) }
          </ResumeEmploymentHighlightsList>
        )
    )}
  </BaseResumeTopLevelListingItem>
);

const BaseResumeEmployment = styled(ResumeSection, {
  ...theme.resume.employment.container,

  marginTop: '1rem',
});

interface ResumeEmploymentProps {
  readonly employment:
    ResumeData['employment'] extends infer T
      ? T
      : ResumeData['employment'];
}

const ResumeEmployment = ({ employment }: ResumeEmploymentProps) => (
  <BaseResumeEmployment>
    <ResumeEmploymentHeading>Recent Experience</ResumeEmploymentHeading>

    { employment.history.map((employment) => (
      <ResumeEmploymentListItem { ...employment } />
    )) }
  </BaseResumeEmployment>
);

const ResumeProjectHeading = styled('h3', {
  paddingLeft: 0,
  textIndent:  0,
});

const ResumeProjectHeadingLink = styled('a', {
  color:          'inherit',
  fontWeight:     'inherit',
  textDecoration: 'none',

  nested: {
    '&:active, &:focus, &:hover, &:visited': {
      color: 'inherit',
    },
  },
});

const projectsTwoUpQuery = '@media (min-width: 41.666rem)';

const ResumeProjectIconLink = styled('a', {
  display:  'block',
  padding:  '0 0.5rem 0.5rem 0.5rem',
  zIndex:   1,

  nested: {
    '& svg': {
      width: '1.25em',
    },

    [projectsTwoUpQuery]: {
      paddingLeft: 0,
    },
  },
});

const ResumeProjectBody = styled('div', {
  paddingTop: '0.05556rem',
});

const BaseResumeProject = styled('div', {
  alignItems:          'start',
  display:             'grid',
  gridTemplateColumns: 'auto 1fr',
  padding:             '1rem 0',
});

interface ResumeProjectProps {
  readonly project: ProjectData;
}

const ResumeProject = ({
  project: {
    description,
    end,
    repo,
    role,
    title,
    start,
    summary,
  },
}: ResumeProjectProps) => (
  <BaseResumeProject>
    <ResumeProjectIconLink href={ repo }>
      <GitHubLogo />
    </ResumeProjectIconLink>

    <ResumeProjectBody>
      <ResumeHeader>
        <ResumeProjectHeading>
          <ResumeProjectHeadingLink href={ repo }>
            { title }
          </ResumeProjectHeadingLink>
        </ResumeProjectHeading>

        <ResumeTimeRange range={ [ start, end ] } />
      </ResumeHeader>

      <ProjectDescription
        role={ role }
        description={ description }
        summary={ summary ?? null }
      />
    </ResumeProjectBody>
  </BaseResumeProject>
);

const ResumeProjectsTwoUp = styled(Flex, {
  display: 'block',
  margin:  0,

  nested: {
    [projectsTwoUpQuery]: {
      display:  'flex',
      flexWrap: 'nowrap',
      margin:   '-1rem',

      nested: {
        '& > *': {
          flexBasis: 'calc(50% - 2rem)',
          margin:    '1rem',
        },
      },
    },
  },
});

const ResumeProjectSet = styled('div', {
  marginTop: '0.5rem',
});


interface ResumeProjectSets {
  readonly creator:     readonly ProjectData[];
  readonly contributor: readonly ProjectData[];
}

interface ResumeProjectsProps {
  readonly projects: readonly ProjectData[];
}

const ResumeProjects = ({ projects }: ResumeProjectsProps) => {
  const {
    creator,
    contributor,
  } = projects.reduce<ResumeProjectSets>((acc, project) => {
    const setKey = project.role === ResumeProjectRole.CREATOR
      ? 'creator'
      : 'contributor';

    return {
      ...acc,

      [setKey]: [
        ...acc[setKey],

        project,
      ],
    };
  }, {
    creator:     [],
    contributor: [],
  })

  return (
    <ResumeSection>
      <ResumeProjectsTwoUp>
        <div>
          <ResumeFlexHeading>
            Projects I Created
          </ResumeFlexHeading>

          <ResumeProjectSet>
            { creator.map((project) => (
              <ResumeProject project={ project } />
            )) }
          </ResumeProjectSet>
        </div>

        <div>
          <ResumeFlexHeading>
            Open Source Contributions
          </ResumeFlexHeading>

          <ResumeProjectSet>
            { contributor.map((project) => (
              <ResumeProject project={ project } />
            )) }
          </ResumeProjectSet>
        </div>
      </ResumeProjectsTwoUp>
    </ResumeSection>
  );
};

const BaseResume = styled(FullBleedContainer, {
  nested: {
    '& p': {
      lineHeight: 1.325,
      margin:     '0 0 0.75em',
    },

    '& p:last-child': {
      margin: 0,
    },
  },
});

const ReaderModeTimestamp = styled(Timestamp, {
  clip:       'rect(0 0 0 0)',
  clipPath:   'inset(50%)',
  height:     '1px',
  overflow:   'hidden',
  position:   'absolute',
  whiteSpace: 'nowrap',
  width:      '1px',
});

const shortURL = (url: string) => (
  url.replace(/^https?:\/\/|\/$/g, '')
);

interface ResumeProps {
  readonly className?: string;
  readonly id?:        string;
  readonly meta:       BlogArtProps;
  readonly resume:     ResumeData;
  readonly updated:    Date;
}

export const Resume = ({
  className,
  id,
  meta,
  resume,
  updated,
}: ResumeProps) => {
  const {
    contact: {
      email,
      website,
    },
    employment,
    info,
    name,
    projects,
    skills,
    social,
  } = resume;

  return (
    <BaseResume
      className={ className }
      id={ id }
      itemscope
      itemtype="http://schema.org/Person"
    >
      <BlogArt { ...meta } />

      <ResumeHeaderSection>
        <ResumeHeader>
          <h1 itemprop="name">{ name }</h1>
          <ReaderModeTimestamp
            date={ updated }
            itemprop="datePublished"
            mode={ TimestampMode.META }
          />

          <ResumeHeaderLinksContainer>
            <ResumeHeaderLink
              href={ `mailto:${email}` }
              itemprop="email"
              printLabel={ email }
            >
              Email
            </ResumeHeaderLink>

            <ResumeHeaderLink
              href={ website }
              itemprop="url"
              printLabel={ shortURL(website) }
              rel="me"
            >
              Website
            </ResumeHeaderLink>

            { social.map(({
              network,
              url,
            }) => (
              <ResumeHeaderLink
                href={ url }
                itemprop="url"
                printLabel={ shortURL(url) }
                rel="me"
              >
                { network }
              </ResumeHeaderLink>
            )) }
          </ResumeHeaderLinksContainer>
        </ResumeHeader>

        <ResumeBrief itemprop="description">{ mdx(info.brief) }</ResumeBrief>
      </ResumeHeaderSection>

      <ResumeSection aria-label="Skillsets">
        <ResumeSkillsetsContainer>
          { Object.entries(skills.merged).map(([ name, skills ]) => (
            <ResumeSkillsetListing
              key={ name }
              name={ name }
              skills={ skills }
            />
          )) }
        </ResumeSkillsetsContainer>
      </ResumeSection>

      <ResumeEmployment employment={ employment } />

      <ResumeProjects projects={ projects } />

      <ResumeSection>
        <h2>References</h2>

        { mdx('Available upon request.') }
      </ResumeSection>
    </BaseResume>
  );
};
