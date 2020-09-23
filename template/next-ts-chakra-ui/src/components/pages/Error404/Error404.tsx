import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, Heading } from '@chakra-ui/core';
import type { FlexProps } from '@chakra-ui/core';

import { Page } from '@/components/layout';

type Props = FlexProps;

const Error404: React.FC<Props> = ({ ...rest }) => {
  return (
    <Page backgroundColor="gray.900" {...rest}>
      <Flex direction="column" margin="auto" padding={8}>
        <Heading as="h1" color="white" fontSize="3xl" marginBottom={4}>
          Page not found
        </Heading>
        <NextLink href="/" passHref>
          <Button as="a" colorScheme="white">
            Back to home
          </Button>
        </NextLink>
      </Flex>
    </Page>
  );
};

export default Error404;
