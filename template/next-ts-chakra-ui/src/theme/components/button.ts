// Example of how to customise the Chakra UI Button component
// View the default theme: https://github.com/chakra-ui/chakra-ui/blob/develop/packages/theme/src/components/button.ts

import theme from '../_generated';

const defaultButton = theme.components.Button;

const baseStyle = {
  ...defaultButton.baseStyle,
};

type Dict = Record<string, unknown>;

// Add "custom" variant that accepts "colorScheme" prop of "black" or "white"
// Alternatively we could just override the default "solid" variant
function variantCustom(props: Dict) {
  const { colorScheme: c } = props;

  let textColor;
  let backgroundColor;
  let hoverBackgroundColor;
  switch (c) {
    case 'white':
      textColor = 'portable.almostBlack';
      backgroundColor = 'portable.warmWhite';
      hoverBackgroundColor = 'gray.100';
      break;
    case 'black':
    default:
      textColor = 'portable.warmWhite';
      backgroundColor = 'portable.almostBlack';
      hoverBackgroundColor = 'black';
      break;
  }

  return {
    color: textColor,
    backgroundColor: backgroundColor,
    _hover: {
      backgroundColor: hoverBackgroundColor,
    },
  };
}

const variants = {
  ...defaultButton.variants,
  custom: variantCustom,
};

const sizes = {
  ...defaultButton.sizes,
};

const defaultProps = {
  ...defaultButton.defaultProps,
  size: 'md',
  variant: 'custom',
  colorScheme: 'black',
};

const button = {
  ...defaultButton,
  baseStyle,
  variants,
  sizes,
  defaultProps,
};

export default button;
