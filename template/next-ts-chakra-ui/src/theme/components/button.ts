// Example of how to customise the Chakra UI Button component
// View the default theme: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/button.ts

import { theme } from '@chakra-ui/react';

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
      textColor = 'gray.900';
      backgroundColor = 'white';
      hoverBackgroundColor = 'gray.100';
      break;
    case 'black':
    default:
      textColor = 'white';
      backgroundColor = 'gray.900';
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

// Change the default variant to "custom" rather than "solid"
const defaultProps = {
  ...defaultButton.defaultProps,
  variant: 'custom',
};

const button = {
  ...defaultButton,
  baseStyle,
  variants,
  sizes,
  defaultProps,
};

export default button;
