import type { ComponentChildren } from 'preact';
import { ProjectRole } from '../../data/projects.js';
import { mdx } from '../../lib/content/mdx.js';
import { styled } from '../../lib/styles/styles.js';

const BaseProjectDescription = styled('div', {
	fontSize: '0.88889em',
	margin: '0.5rem 0',
});

interface ProjectDescriptionProps {
	readonly role: ProjectRole;
	readonly description: string;
	readonly summary: string | null;
}

export const ProjectDescription = (props: ProjectDescriptionProps): ComponentChildren => {
	const texts = Array<string>();

	if (props.role === ProjectRole.CREATOR) {
		texts.push(props.description);
	}

	if (props.summary != null) {
		texts.push(props.summary);
	}

	if (texts.length === 0) {
		texts.push(props.description);
	}

	return (
		<BaseProjectDescription>{texts.map((text) => mdx(text))}</BaseProjectDescription>
	);
};
