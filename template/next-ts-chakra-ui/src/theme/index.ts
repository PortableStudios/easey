import { theme, extendTheme, withDefaultProps } from '@chakra-ui/react';

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
  // Remove the default value for the Heading component "size" prop
  // This fixes the "textStyle" prop sometimes being overriden by the default size
  withDefaultProps({
    defaultProps: {
      size: '',
    },
    components: ['Heading'],
  }),
  theme
);
export type Theme = typeof customTheme;

export default customTheme;
