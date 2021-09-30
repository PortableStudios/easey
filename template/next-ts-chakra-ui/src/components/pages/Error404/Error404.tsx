import React from 'react';
import NextLink from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import type { FlexProps } from '@chakra-ui/react';

import { Page } from '@/components/layout';

type Props = FlexProps;

const Error404 = ({ ...rest }: Props) => {
  return (
    <Page backgroundColor="gray.900" {...rest}>
      <Flex
        alignItems="center"
        direction="column"
        flexGrow={1}
        justifyContent="center"
      >
        <Stack padding={8} spacing={4}>
          <Heading as="h1" color="white" fontSize="3xl" textAlign="center">
            Page not found
          </Heading>
          <NextLink href="/" passHref>
            <Button as="a" colorScheme="white" leftIcon={<FaArrowLeft />}>
              Back to home
            </Button>
          </NextLink>
        </Stack>
      </Flex>
    </Page>
  );
};

export default Error404;
