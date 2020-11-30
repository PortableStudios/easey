import { mode } from '@chakra-ui/theme-tools';
import type { Styles } from '@chakra-ui/theme-tools';

// Extend the default global styles
const styles: Styles = {
  global: (props) => ({
    // Default styles
    // https://chakra-ui.com/docs/features/global-styles#default-styles
    fontFamily: 'body',
    color: mode('gray.800', 'whiteAlpha.900')(props),
    bg: mode('white', 'gray.800')(props),
    lineHeight: 'base',
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    fontFeatureSettings: '"pnum"',
    fontVariantNumeric: 'proportional-nums',
    // Custom styles
    html: {
      height: '100%',
    },
    body: {
      height: '100%',
    },
    '#root, #__next': {
      height: '100%',
    },
  }),
};

export default styles;
