import { ComponentProps }     from 'preact';
import { FullBleedContainer } from '@/components/FullBleed';
import { styled }             from '@/lib/styles';

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
