import { theme } from '@chakra-ui/react';
import { button } from './components';
import styles from './styles';

const customTheme = {
  ...theme,
  styles: styles,
  components: {
    ...theme.components,
    Button: button,
  },
};
export type Theme = typeof customTheme;

export default customTheme;
