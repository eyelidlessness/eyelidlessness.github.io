import { styled } from '@/lib/styles';

export const ProjectsFlex = styled('div', {
  alignItems: 'start',
  display:    'flex',
  margin:     '-0.5rem',

  nested: {
    '& > *': {
      margin: '0.5rem',
    },
  },
});
