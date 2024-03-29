import React from 'react';
import { GoHeart } from 'react-icons/go';
import { Icon, Stack, Text } from '@chakra-ui/react';
import type { FlexProps } from '@chakra-ui/react';

import { Page } from '@/components/layout';

type Props = FlexProps;

const Home = ({ ...rest }: Props) => {
  return (
    <Page {...rest}>
      <Stack
        alignItems="center"
        marginX="auto"
        justifyContent="center"
        padding={4}
        spacing={4}
        textAlign="center"
        width="100%"
      >
        <Text
          as="h1"
          alignItems="center"
          fontSize={['2xl', '3xl']}
          fontWeight="bold"
        >
          Welcome to your new project{' '}
          <Icon
            as={GoHeart}
            fontSize="1.5em"
            color="red"
            verticalAlign="middle"
          />
        </Text>
        <Text fontSize="xl">Check out the README to get started!</Text>
      </Stack>
    </Page>
  );
};

export default Home;
