import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import type { FlexProps } from '@chakra-ui/react';

type Props = FlexProps;

const Footer = ({ ...rest }: Props) => {
  return (
    <Flex
      as="footer"
      backgroundColor="gray.900"
      flexShrink={0}
      justifyContent="center"
      padding={4}
      width="100%"
      {...rest}
    >
      <Text color="white" fontSize={['xs', 'sm']}>
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
