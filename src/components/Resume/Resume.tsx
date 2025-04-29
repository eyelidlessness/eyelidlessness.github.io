import {
  ComponentProps,
  ElementType,
} from 'preact';
import { BlogArtProps }       from '@/components/Blog';
import { FullBleedContainer } from '@/components/FullBleed';
import {
  Timestamp,
  TimestampMode,
} from '@/components/Timestamp';
import {
  ProjectTimestamp,
} from '@/data/projects';
import type { ResumeData } from '@/data/resume';
import {
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
import { ResumeProjects } from './ResumeProjects.jsx';
import { ResumeSection }      from './ResumeSection';
import { ResumeArt } from './ResumeArt.jsx';
import { TimeRange } from '../TimeRange.jsx';

const ResumeArtContainer = styled(FullBleedContainer, {
  nested: {
    [theme.print]: {
      display: 'none',
      paddingInline: '0.125rem',
    },
  },
});

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
  paddingTop:     clamp('0.5rem', '3vw', '2rem'),

  nested: {
    '& > *': {
      margin:   '0 0.5rem',
      minWidth: 'auto',
    },

    [theme.print]: {
      paddingTop: 0,
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
  minWidth:       'auto',
  textDecoration: 'none',

  nested: {
    '&, &:hover': {
      fontWeight: 500,
    },
  },
});

const ResumeHeaderLinkInner = styled('span', {
  nested: {
    [theme.print]: {
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

    [theme.print]: {
      ...theme.resume.brief.nested[theme.print],

      padding: 0,
    },
  },
});

const resumeSkillsetsColumnarQuery = '@media (min-width: 44.625rem)';

const ResumeFlexHeading = styled('h2', {
  fontSize:    '1em',
  marginBottom: 0,
  paddingLeft:  0,
  textIndent:   0,

  nested: {
    [resumeSkillsetsColumnarQuery]: {
      justifySelf: 'end',
    },
  },
});

const ResumeSkillsetsContainer = styled('div', {
  alignItems:          'baseline',
  display:             'grid',
  gap:                 '0.5rem 0',
  gridTemplateColumns: 'auto',
  gridTemplateRows:    'auto',
  fontSize:            '0.88889em',

  nested: {
    [resumeSkillsetsColumnarQuery]: {
      gridTemplateColumns: 'auto 1fr',
    },
  },
});

const ResumeSkillsList = styled('ul', {
  display: 'block',
  margin:  0,
  padding: '0 0 0 1rem',
});

const ResumeSkillsListItem = styled('li', {
  display:   'inline-block',
  listStyle: 'none',
  margin:    '0 1.5rem 0 0',
  padding:   0,

  nested: {
    '&:last-child': {
      marginRight: 0,
    },
  },
});

const BaseResumeSkillLevelMarker = styled('svg', {
  display:       'inline-block',
  margin:        '0 0.325rem 0 0',
  verticalAlign: 'middle',

  nested: {
    [theme.print]: {
      height: '0.325rem',
      width:  '0.325rem',
    },
  },
});

const ResumeSkillLevelMarkerCircle = styled('circle', {
  fill: 'currentcolor',
});

interface ResumeSkillLevelMarkerProps {
  readonly className?: string;
  readonly level:      ResumeSkillLevel;
}

const ResumeSkillLevelMarker = (props: ResumeSkillLevelMarkerProps) => {
  return (
    <BaseResumeSkillLevelMarker
      xmlns="http://www.w3.org/2000/svg"
      className={ props.className }
      width="8"
      height="8"
      viewBox="0 0 8 8"
    >
      <ResumeSkillLevelMarkerCircle
        cx="4"
        cy="4"
        r="4"
      />
      <title>Skill level: { props.level }</title>
    </BaseResumeSkillLevelMarker>
  );
}

type ResumeSkillLevelMarker = ElementType<JSX.IntrinsicElements['span']>;

const ResumeSkillLevelMarkers = {
  [ResumeSkillLevel.BASIC]: styled(ResumeSkillLevelMarker, {
    ...theme.resume.skillLevel[ResumeSkillLevel.BASIC],
  }),
  [ResumeSkillLevel.INTERMEDIATE]: styled(ResumeSkillLevelMarker, {
    ...theme.resume.skillLevel[ResumeSkillLevel.INTERMEDIATE],
  }),
  [ResumeSkillLevel.ADVANCED]: styled(ResumeSkillLevelMarker, {
    ...theme.resume.skillLevel[ResumeSkillLevel.ADVANCED],
  }),
  [ResumeSkillLevel.EXPERT]: styled(ResumeSkillLevelMarker, {
    ...theme.resume.skillLevel[ResumeSkillLevel.EXPERT],
  }),
} as const;

const BaseResumeSkillsetListing = styled('div', {
  display: 'contents',
});

interface ResumeSkillsListProps {
  readonly name:   string;
  readonly skills: ResumeData['skills']['list'];
}

const ResumeSkillsetListing = ({
  name,
  skills,
}: ResumeSkillsListProps) => (
  <BaseResumeSkillsetListing itemscope itemtype="http://schema.org/ItemList">
    <ResumeFlexHeading itemprop="name">{ mdxInline(name) }</ResumeFlexHeading>

    <ResumeSkillsList>
      { skills.map(({
        level,
        name,
      }) => {
        const Marker = ResumeSkillLevelMarkers[level];

        return (
          <ResumeSkillsListItem key={ name } itemprop="itemListElement">
            <Marker level={ level } />

            { mdxInline`${name}` }
          </ResumeSkillsListItem>
        );
      }) }
    </ResumeSkillsList>
  </BaseResumeSkillsetListing>
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

const ResumeEmploymentHeading = styled('h2', {
  marginBottom: 0,
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
  padding:  '1.5rem 0',
  position: 'relative',

  nested: {
    '&:last-child:after': {
      display: 'none',
    },

    '&:nth-of-type(odd)': {
      ...theme.resume.employment.itemOdd,
    },

    '&:nth-of-type(even)': {
      ...theme.resume.employment.itemEven,
    },

    '& strong': {
      fontWeight: 500,

      nested: {
        [theme.darkMode]: {
          fontWeight: 400,
        },
      },
    },

    [theme.print]: {
      breakInside:   'avoid',
      paddingBottom: 0,
    },
  },
});

const ResumeEmploymentListItemHeader = styled('div', {
  alignItems: 'baseline',
  display:    'grid',
  columnGap:  '0.5rem',
  gridTemplate: `
    "employer time-range"
    "position position"
  `,
  justifyContent: 'space-between',

  nested: {
    [theme.print]: {
      gridTemplate: `
        "employer position time-range"
      `,
      gridAutoColumns: '1fr auto auto',
    },
  },
});

const ResumeEmploymentListItemEmployerHeading = styled('h3', {
  gridArea:     'employer',
  marginBottom: 0,
  whiteSpace:   'nowrap',
});

const ResumeEmploymentListItemTimeRange = styled(TimeRange, {
  gridArea: 'time-range',
});

const ResumeEmploymentPosition = styled('div', {
  fontSize:   '0.88889rem',
  fontWeight: theme.deemphasize.fontWeight,
  gridArea:   'position',

  nested: {
    [theme.print]: {
      nested: {
        '&:after': {
          content: '","',
        },
      },
    },
  },
});

interface ResumeEmploymentListItemProps  {
  readonly employer:    string;
  readonly position:    string;
  readonly start:       ProjectTimestamp;
  readonly end:         ProjectTimestamp;
  readonly summary?:    string;
  readonly highlights?: readonly string[];
}

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
    <ResumeEmploymentListItemHeader>
      <ResumeEmploymentListItemEmployerHeading itemprop="name">
        { employer }
      </ResumeEmploymentListItemEmployerHeading>
      <ResumeEmploymentPosition itemprop="roleName">
        { position }
      </ResumeEmploymentPosition>
      <ResumeEmploymentListItemTimeRange range={ [ start, end ] } />
    </ResumeEmploymentListItemHeader>

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
  ...theme.visiblyHidden,
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
      <ResumeArtContainer>
        <ResumeArt { ...meta } renderType="post" />
      </ResumeArtContainer>

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

      <ResumeSection id="projects">
        <ResumeProjects projects={ projects } />
      </ResumeSection>

      <ResumeSection>
        <h2>References</h2>

        { mdx('Available upon request, email <gnosis@gmail.com>') }
      </ResumeSection>
    </BaseResume>
  );
};
