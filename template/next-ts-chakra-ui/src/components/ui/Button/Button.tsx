import React from 'react';
import { PseudoBox } from '@chakra-ui/core';
import type { PseudoBoxProps } from '@chakra-ui/core';

import { assertNever } from '@/utils/types';

type Props = {
  variant?: 'black' | 'white';
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
} & PseudoBoxProps;

const Button = React.forwardRef<HTMLElement, Props>(
  ({ as = 'button', variant = 'black', onClick, children, ...rest }, ref) => {
    let backgroundColor;
    let hoverBackgroundColor;
    let textColor;
    switch (variant) {
      case 'black':
        backgroundColor = 'brand.almostBlack';
        hoverBackgroundColor = 'black';
        textColor = 'brand.warmWhite';
        break;
      case 'white':
        backgroundColor = 'brand.warmWhite';
        hoverBackgroundColor = 'gray.100';
        textColor = 'brand.almostBlack';
        break;
      default:
        assertNever(variant);
    }

    return (
      <PseudoBox
        as={as}
        ref={ref}
        onClick={onClick}
        backgroundColor={backgroundColor}
        borderRadius="md"
        color={textColor}
        display="flex"
        fontSize="lg"
        fontWeight={600}
        justifyContent="center"
        lineHeight={1.3}
        outline="none"
        padding={4}
        position="relative"
        textDecoration="none"
        transition="0.3s background-color"
        width="auto"
        _hover={{
          backgroundColor: hoverBackgroundColor,
        }}
        _focus={{
          textDecoration: 'underline',
        }}
        {...rest}
      >
        {children}
      </PseudoBox>
    );
  }
);

export default Button;
