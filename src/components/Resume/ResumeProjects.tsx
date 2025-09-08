import type { ComponentChildren } from 'preact';
import type { ProjectData } from '../../data/projects.js';
import { ResumeProjectRole } from '../../data/resume.js';
import { clamp } from '../../lib/styles/functions.js';
import { styled } from '../../lib/styles/styles.js';
import { theme } from '../../lib/styles/theme.js';
import { Project } from '../Projects/Project.js';
import { ProjectsTwoUp } from '../Projects/ProjectsTwoUp.js';

const FlexHeading = styled('h2', {
	fontSize: clamp(
		`${theme.headingRanges.h3.minEm}em`,
		`${theme.headingRanges.h3.fluidVw}vw`,
		`1.17778em`
	),
	marginBottom: 0,
	paddingLeft: 0,
	textIndent: 0,
});

const ProjectSet = styled('div', {
	marginTop: '0.5rem',
});

const ResumeProjectsPrintOnly = styled('div', {
	display: 'none',

	nested: {
		[theme.print]: {
			display: 'block',
			paddingBottom: '0.5em',
		},
	},
});

interface ResumeProjectSets {
	readonly creator: readonly ProjectData[];
	readonly contributor: readonly ProjectData[];
}

interface ResumeProjectsProps {
	readonly projects: readonly ProjectData[];
}

export const ResumeProjects = (
	props: ResumeProjectsProps
): ComponentChildren => {
	const { creator, contributor } = props.projects.reduce<ResumeProjectSets>(
		(acc, project) => {
			const setKey =
				project.role === ResumeProjectRole.CREATOR ? 'creator' : 'contributor';

			return {
				...acc,

				[setKey]: [...acc[setKey], project],
			};
		},
		{
			creator: [],
			contributor: [],
		}
	);
	const totalProjects = creator.length + contributor.length;

	return (
		<>
			<ProjectsTwoUp>
				<div>
					<FlexHeading>Projects I Created</FlexHeading>

					<ProjectSet>
						{creator.map((project) => (
							<Project project={project} />
						))}
					</ProjectSet>
				</div>

				<div>
					<FlexHeading>Open Source Contributions</FlexHeading>

					<ProjectSet>
						{contributor.map((project) => (
							<Project project={project} />
						))}
					</ProjectSet>
				</div>
			</ProjectsTwoUp>
			<ResumeProjectsPrintOnly>
				<h2>Projects</h2>
				{totalProjects} projects listed at{' '}
				<a href="https://eyelidlessness.github.io/projects">
					eyelidlessness.github.io/projects
				</a>
			</ResumeProjectsPrintOnly>
		</>
	);
};
