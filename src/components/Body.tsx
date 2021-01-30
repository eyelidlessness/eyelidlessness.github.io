import {
  styled,
  theme,
} from '@/lib/styles';

export const Body = styled('body', {
  ...theme.document,
  ...theme.prose,

  nested: {
    [theme.darkMode]: {
      ...theme.document[theme.darkMode],
      ...theme.document[theme.darkMode],
    },
  },
});
