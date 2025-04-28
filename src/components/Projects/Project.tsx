import { GitHubLogo }            from '@/components/GitHubLogo';
import { ProjectData }           from '@/data/projects';
import { styled, theme }  from '@/lib/styles';
import { projectsTwoUpQuery }    from './ProjectsTwoUp';
import { ProjectDescription }    from './ProjectDescription.jsx';
import { TimeRange } from '../TimeRange.jsx';

const ProjectHeader = styled('div', {
  display: 'grid',
  rowGap:  '0.325rem',

  nested: {
    '& > *': {
      margin: 0,
    },
  },
});

const projectHeadingFontSize = '1.0625rem';

const ProjectHeading = styled('h3', {
  fontFamily:  theme.prose.fontFamily,
  fontWeight:  500,
  fontSize:    projectHeadingFontSize,
  paddingLeft: 0,
  textIndent:  0,

  nested: {
    [theme.print]: {
      fontSize: '1rem',
    },
  },
});

const ProjectHeadingLink = styled('a', {
  color:          'inherit',
  fontWeight:     'inherit',
  textDecoration: 'none',

  nested: {
    '&:active, &:focus, &:hover, &:visited': {
      color: 'inherit',
    },
  },
});

const ProjectIconLink = styled('a', {
  alignSelf:  'baseline',
  display:    'block',
  flexShrink: 0,
  height:     `calc(${projectHeadingFontSize} * ${theme.headingLineHeight})`,
  lineHeight: `calc(${projectHeadingFontSize} * ${theme.headingLineHeight * 1.5})`,
  padding:    '0 0.5rem',
  zIndex:     1,

  nested: {
    '& svg': {
      width: '1em',
    },

    [projectsTwoUpQuery]: {
      paddingLeft: 0,
    },

    [theme.print]: {
      display: 'none',
    },
  },
});

const ProjectBody = styled('div', {
  flexGrow:   1,
  paddingTop: '0.05556rem',
});

const BaseProject = styled('div', {
  alignItems: 'start',
  display:    'flex',
  padding:    '1rem 0 0',
});

interface ProjectProps {
  readonly project: ProjectData;
}

export const Project = ({
  project: {
    description,
    end,
    repo,
    role,
    title,
    start,
    summary,
  },
}: ProjectProps) => (
  <BaseProject>
    <ProjectIconLink href={ repo }>
      <GitHubLogo />
    </ProjectIconLink>

    <ProjectBody>
      <ProjectHeader>
        <ProjectHeading>
          <ProjectHeadingLink href={ repo }>
            { title }
          </ProjectHeadingLink>
        </ProjectHeading>

        <TimeRange range={ [ start, end ] } />
      </ProjectHeader>

      <ProjectDescription
        role={ role }
        description={ description }
        summary={ summary ?? null }
      />
    </ProjectBody>
  </BaseProject>
);
