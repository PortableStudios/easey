import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/core';
import type { FlexProps } from '@chakra-ui/core';

type Props = FlexProps;

const Footer: React.FC<Props> = ({ ...rest }) => {
  return (
    <Flex
      as="footer"
      backgroundColor="portable.almostBlack"
      flexShrink={0}
      justifyContent="center"
      padding={4}
      width="100%"
      {...rest}
    >
      <Text color="portable.warmWhite" fontSize={['xs', 'sm']}>
        Copyright © 2020{' '}
        <Link href="https://www.portable.com.au" isExternal>
          Portable
        </Link>
        . All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
