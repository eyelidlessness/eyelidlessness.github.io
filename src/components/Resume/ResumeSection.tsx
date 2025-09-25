import type { ComponentChildren, ComponentProps } from 'preact';
import { styled } from '../../lib/styles/styles.js';
import { FullBleedContainer } from '../FullBleed/FullBleedContainer.js';

const BaseResumeSection = styled(FullBleedContainer, {
	padding: 0,
});

export type ResumeSectionProps = ComponentProps<typeof BaseResumeSection>;

export const ResumeSection = (props: ResumeSectionProps): ComponentChildren => (
	<BaseResumeSection as="section" {...props} />
);
