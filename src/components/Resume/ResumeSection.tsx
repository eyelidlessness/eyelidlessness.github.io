import { ComponentProps }     from 'preact';
import { FullBleedContainer } from '../FullBleed/FullBleedContainer.js';
import { styled }             from '../../lib/styles/styles.js';

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

export const ResumeSection = (props: ResumeSectionProps) => (
  <BaseResumeSection as="section" { ...props } />
);
