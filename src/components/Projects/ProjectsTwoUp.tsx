import { styled }       from '@/lib/styles';
import { ProjectsFlex } from './ProjectsFlex';

export const projectsTwoUpQuery = '@media (min-width: 41.666rem)';

export const ProjectsTwoUp = styled(ProjectsFlex, {
  display: 'block',
  margin:  0,

  nested: {
    '& > *': {
      containerType: 'inline-size',
    },

    [projectsTwoUpQuery]: {
      display:  'flex',
      flexWrap: 'nowrap',
      margin:   '-1rem',

      nested: {
        '& > *': {
          flexBasis: 'calc(50% - 2rem)',
          margin:    '1rem',
        },
      },
    },
  },
});
