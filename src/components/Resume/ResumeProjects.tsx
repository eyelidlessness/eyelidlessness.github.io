import { ProjectData } from '@/data/projects.js';
import { ResumeProjectRole } from '@/data/resume.js';
import { ProjectsTwoUp } from '../Projects/ProjectsTwoUp.jsx';
import { styled } from '@/lib/styles/styles.js';
import { clamp } from '@/lib/styles/functions.js';
import { theme } from '@/lib/styles/theme.js';
import { Project } from '../Projects/Project.jsx';

const FlexHeading = styled('h2', {
  fontSize:    clamp(
    `${theme.headingRanges.h3.minEm}em`,
    `${theme.headingRanges.h3.fluidVw}vw`,
    `1.17778em`
  ),
  marginBottom: 0,
  paddingLeft:  0,
  textIndent:   0,
});

const ProjectSet = styled('div', {
  marginTop: '0.5rem',
});

interface ResumeProjectSets {
  readonly creator:     readonly ProjectData[];
  readonly contributor: readonly ProjectData[];
}

interface ResumeProjectsProps {
  readonly projects: readonly ProjectData[];
}

export const ResumeProjects = (props: ResumeProjectsProps) => {
  const {
    creator,
    contributor,
  } = props.projects.reduce<ResumeProjectSets>((acc, project) => {
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
  });

  return (
    <ProjectsTwoUp>
      <div>
        <FlexHeading>
          Projects I Created
        </FlexHeading>

        <ProjectSet>
          { creator.map((project) => (
            <Project project={ project } />
          )) }
        </ProjectSet>
      </div>

      <div>
        <FlexHeading>
          Open Source Contributions
        </FlexHeading>

        <ProjectSet>
          { contributor.map((project) => (
            <Project project={ project } />
          )) }
        </ProjectSet>
      </div>
    </ProjectsTwoUp>
  );
};
