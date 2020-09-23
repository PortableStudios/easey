import theme from '@chakra-ui/theme';
import { runIfFn, merge } from '@chakra-ui/utils';
import type { Styles } from '@chakra-ui/theme-tools';

// Extend the default global styles
const styles: Styles = {
  global: (props) =>
    merge(runIfFn(theme.styles.global, props), {
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
