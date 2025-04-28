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
  gap:                 '1rem 0',
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
  margin:    '0 1.5rem 0.125rem 0',
  padding:   0,

  nested: {
    '&:last-child': {
      marginRight: 0,
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
      },
    })
  }), {} as Record<ResumeSkillLevel, ResumeSkillLevelMarker>);

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
            <Marker
              role="img"
              title={ `Skill level: ${level}` }
            />

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
  marginBottom: '1rem',
});

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
      gridColumn: '1 / -1',
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

const ResumeEmploymentListItemHeader = styled(BaseFlex, {
  alignItems:     'baseline',
  justifyContent: 'space-between',
  gap:            '0.5rem',

  nested: {
    '& > *': {
      minWidth: 'auto',
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
      <h3 itemprop="name">{ employer }</h3>
      <TimeRange range={ [ start, end ] } />
    </ResumeEmploymentListItemHeader>

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
      <ResumeArt { ...meta } renderType="post" />

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

      <ResumeSection>
        <ResumeProjects projects={ projects } />
      </ResumeSection>

      <ResumeSection>
        <h2>References</h2>

        { mdx('Available upon request.') }
      </ResumeSection>
    </BaseResume>
  );
};
