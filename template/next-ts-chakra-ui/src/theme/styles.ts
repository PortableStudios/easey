import type { Styles } from '@chakra-ui/theme-tools';

// Extend the default global styles
// https://chakra-ui.com/docs/features/global-styles
const styles: Styles = {
  global: {
    html: {
      height: '100%',
    },
    body: {
      height: '100%',
    },
    '#root, #__next': {
      height: '100%',
    },
  },
};

export default styles;
