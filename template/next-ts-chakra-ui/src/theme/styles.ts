import type { Styles } from '@chakra-ui/theme-tools';

// Extend the default global styles
// https://chakra-ui.com/docs/features/global-styles
const styles: Styles = {
  global: {
    // Make our page containers fill the height of the browser
    'html, body, #root, #__next': {
      height: '100%',
    },
  },
};

export default styles;
