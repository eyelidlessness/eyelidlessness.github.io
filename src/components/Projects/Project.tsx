import { GitHubLogo }            from '@/components/GitHubLogo';
import {
  Timestamp,
  TimestampMode,
} from '@/components/Timestamp';
import type { ProjectTimestamp } from '@/data/projects';
import { ProjectData }           from '@/data/projects';
import { styled }                from '@/lib/styles';
import { ProjectsFlex }          from './ProjectsFlex';
import { projectsTwoUpQuery }    from './ProjectsTwoUp';
import { ProjectDescription }    from './ProjectDescription.jsx';

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

const dateStringPattern = /^(\d{4})-(\d{2})$/;

const dateStringToDate = (dateString: string) => {
  const matches = dateString.match(dateStringPattern);

  if (matches == null) {
    throw new Error(`Invalid format for date: ${dateString}, expected YYYY-MM`);
  }

  const [ , year, month ] = matches;

  return new Date(`${year}-${month}-01T00:00:00`);
};

const BaseTimeRange = styled('div', {
  fontSize: '0.88889em',
  marginLeft: 'auto',
});

const ProjectTimestamp = styled(Timestamp, {
  fontSize: 'inherit',
});

interface TimeRangeProps {
  readonly range: readonly [ start: ProjectTimestamp, end?: ProjectTimestamp ];
}

const TimeRange = ({
  range: [ start, end ],
}: TimeRangeProps) => {
  const startDate = dateStringToDate(start);

  if (end == null) {
    return (
      <BaseTimeRange>
        { 'Since ' }
        <ProjectTimestamp
          date={ startDate }
          itemprop="startDate"
          mode={ TimestampMode.SHORT }
        />
      </BaseTimeRange>
    );
  }

  const endDate = dateStringToDate(end);

  if (start == end) {
    return (
      <BaseTimeRange>
        <ProjectTimestamp
          date={ startDate }
          itemprop="endDate"
          mode={ TimestampMode.SHORT }
        />
      </BaseTimeRange>
    );
  }

  return (
    <BaseTimeRange>
      <ProjectTimestamp
        date={ startDate }
        itemprop="startDate"
        mode={ TimestampMode.SHORT }
      />
      { ' – ' }
      <ProjectTimestamp
        date={ endDate }
        itemprop="endDate"
        mode={ TimestampMode.SHORT }
      />
    </BaseTimeRange>
  );
};

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
}: ProjectProps) => {


  return (
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

          <TimeRange range={ [ start, end ] } />
        </Header>

        <ProjectDescription
          role={ role }
          description={ description }
          summary={ summary ?? null }
        />
      </ProjectBody>
    </BaseProject>
  );;
}
