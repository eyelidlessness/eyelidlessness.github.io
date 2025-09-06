import type { ComponentChildren, ComponentProps } from 'preact';
import { styled } from '../../lib/styles/styles.js';
import { FullBleedContainer } from '../FullBleed/FullBleedContainer.js';

const BaseResumeSection = styled(FullBleedContainer, {
	// ...theme.resume.section,

	padding: '1rem 0 0',

	nested: {
		'&:first-child, &:nth-of-type(1)': {
			paddingTop: 0,
		},
	},
});

type ResumeSectionProps = ComponentProps<typeof BaseResumeSection>;

export const ResumeSection = (props: ResumeSectionProps): ComponentChildren => (
	<BaseResumeSection as="section" {...props} />
);
