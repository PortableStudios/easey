import React from 'react';
import NextLink from 'next/link';
import { Flex, Heading } from '@chakra-ui/core';
import type { FlexProps } from '@chakra-ui/core';

import { Page } from '@/components/layout';
import { Button } from '@/components/ui';

type Props = FlexProps;

const Error404: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Page {...rest}>
      <Flex direction="column" margin="auto" padding={8}>
        <Heading as="h1" marginBottom={4}>
          Page not found
        </Heading>
        <NextLink href="/" passHref>
          <Button as="a">Back to home</Button>
        </NextLink>
      </Flex>
    </Page>
  );
};

export default Error404;
