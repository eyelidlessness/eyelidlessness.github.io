import { styled, theme } from '@/lib/styles';

export const projectsTwoUpQuery = '@media screen and (min-width: 41.666rem)';

export const ProjectsTwoUp = styled('div', {
  display: 'block',
  margin:  0,
  padding: 0,

  nested: {
    '& > *': {
      containerType: 'inline-size',
    },

    '& > * + *': {
      paddingTop: '1rem',
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

    [theme.print]: {
      display: 'none',
    },
  },
});
