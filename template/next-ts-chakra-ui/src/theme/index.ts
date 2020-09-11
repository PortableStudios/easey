import generatedTheme from './_generated';
import { button } from './components';
import styles from './styles';

const theme = {
  ...generatedTheme,
  styles: styles,
  components: {
    ...generatedTheme.components,
    Button: button,
  },
};
export type Theme = typeof theme;

export default theme;
