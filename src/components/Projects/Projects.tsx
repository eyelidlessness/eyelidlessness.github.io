import type { ComponentChildren } from 'preact';
import type { BlogArtProps } from '../../components/Blog/BlogArt.js';
import { FullBleedContainer } from '../../components/FullBleed/FullBleedContainer.js';
import type { ProjectData } from '../../data/projects.js';
import { ProjectRole } from '../../data/projects.js';
import { clamp, styled, theme } from '../../lib/styles/index.js';
import { Project } from './Project.js';
import { ProjectsArt } from './ProjectsArt.js';
import { ProjectsTwoUp } from './ProjectsTwoUp.js';

const ProjectsCurrent = styled(FullBleedContainer, {
	...theme.projects.current,

	margin: '0.5rem 0 3rem',
	padding: '1rem 0',
});

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

interface ProjectSets {
	readonly contributor: readonly ProjectData[];
	readonly creator: readonly ProjectData[];
}

interface TemporalProjectSets extends ProjectSets {
	readonly current: readonly ProjectData[];
}

interface ProjectsProps {
	readonly className?: string;
	readonly id?: string;
	readonly meta: BlogArtProps;
	readonly projects: readonly ProjectData[];
}

export const Projects = ({
	projects,
	meta,
	...props
}: ProjectsProps): ComponentChildren => {
	const { contributor, creator, current } = projects.reduce<TemporalProjectSets>(
		(acc, project) => {
			const setKey =
				(project.end as string | null) == null
					? 'current'
					: project.role === ProjectRole.CREATOR
						? 'creator'
						: 'contributor';

			return {
				...acc,

				[setKey]: [...acc[setKey], project],
			};
		},
		{
			contributor: [],
			creator: [],
			current: [],
		}
	);

	return (
		<>
			<ProjectsArt {...meta} renderType={'post'} />
			<h1>Projects</h1>

			<ProjectsCurrent>
				<h2>Current</h2>
				<ProjectSet>
					{current.map((project) => (
						<Project project={project} />
					))}
				</ProjectSet>
			</ProjectsCurrent>

			<ProjectsTwoUp {...props}>
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
		</>
	);
};
