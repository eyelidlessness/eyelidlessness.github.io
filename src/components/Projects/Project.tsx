import { GitHubLogo }            from '@/components/GitHubLogo';
import { ProjectData }           from '@/data/projects';
import { styled }                from '@/lib/styles';
import { ProjectsFlex }          from './ProjectsFlex';
import { projectsTwoUpQuery }    from './ProjectsTwoUp';
import { ProjectDescription }    from './ProjectDescription.jsx';
import { TimeRange } from '../TimeRange.jsx';

const ProjectTimeRangeContainer = styled('div', {
  marginLeft: 'auto',
});

const BaseFlex = styled(ProjectsFlex, {
  flexWrap: 'wrap',

  nested: {
    '& > *': {
      minWidth: 'max(calc(50% - 2rem), 30ch)',
    },
  },
});

const Header = styled(BaseFlex, {
  alignItems:     'baseline',
  justifyContent: 'space-between',
  margin:         '0 -0.5rem',
  rowGap:         '0.325rem',

  nested: {
    '& > *': {
      margin:   '0 0.5rem',
      minWidth: 'auto',
    },
  },
});

const ProjectHeading = styled('h3', {
  paddingLeft: 0,
  textIndent:  0,
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

const ProjectBody = styled('div', {
  paddingTop: '0.05556rem',
});

const BaseProject = styled('div', {
  alignItems:          'start',
  display:             'grid',
  gridTemplateColumns: 'auto 1fr',
  padding:             '1rem 0',
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
      <Header>
        <ProjectHeading>
          <ProjectHeadingLink href={ repo }>
            { title }
          </ProjectHeadingLink>
        </ProjectHeading>

        <ProjectTimeRangeContainer>
          <TimeRange range={ [ start, end ] } />
        </ProjectTimeRangeContainer>
      </Header>

      <ProjectDescription
        role={ role }
        description={ description }
        summary={ summary ?? null }
      />
    </ProjectBody>
  </BaseProject>
);
