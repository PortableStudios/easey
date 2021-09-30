import { theme, extendTheme } from '@chakra-ui/react';

import { button } from './components';
import styles from './styles';

// https://chakra-ui.com/docs/theming/customize-theme
const customTheme = extendTheme(
  // Override the global styles with our own
  {
    styles: styles,
  },
  // Override the button theme with our own
  {
    components: {
      Button: button,
    },
  },
  theme
);
export type Theme = typeof customTheme;

export default customTheme;
