import type { Styles } from '@chakra-ui/theme-tools';

import theme from './_generated';

const defaultStyles = theme.styles.global;

const styles: Styles = {
  ...theme.styles,
  global: (props) => ({
    ...(typeof defaultStyles === 'object' && defaultStyles),
    ...(typeof defaultStyles === 'function' && defaultStyles(props)),
    'html, body, #root, #__next': {
      height: '100%',
    },
  }),
};

export default styles;
