import React, { useState } from 'react';
import NextLink from 'next/link';
import { Button, Heading, Link, Stack, Text } from '@chakra-ui/core';
import type { FlexProps } from '@chakra-ui/core';

import { Page } from '@/components/layout';

type Props = {
  timestamp: number;
} & FlexProps;

const Home: React.FC<Props> = ({ timestamp, ...rest }) => {
  const [updatedTimestamp, setUpdated] = useState<number | null>(null);
  const iso = (ts: number) => new Date(ts).toISOString();
  return (
    <Page {...rest}>
      <Stack marginX="auto" padding={4} spacing={4}>
        <Heading as="h1" fontSize={['2xl', '3xl']}>
          Lorem ipsum
        </Heading>
        <Stack alignItems="flex-start" direction="column" spacing={2}>
          <Button size="lg" onClick={() => setUpdated(new Date().getTime())}>
            Update
          </Button>
          <Heading as="h2" fontSize={['lg', 'xl']}>
            {updatedTimestamp === null
              ? `This page was generated at ${iso(timestamp)}.`
              : `This page was updated at ${iso(updatedTimestamp)}.`}
          </Heading>
        </Stack>
        <Stack fontSize={['sm', 'md']} spacing={2}>
          <NextLink href="/404" passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link>Click here to contact us.</Link>
          </NextLink>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eleifend iaculis iaculis. Sed fringilla nunc vitae risus venenatis
            venenatis. Pellentesque quis odio a est euismod posuere. Donec eu ex
            mi. Morbi eu mollis mauris.
          </Text>
          <Text>
            Cras quis risus eget enim sollicitudin eleifend. Etiam tempus, est
            eget commodo lacinia, velit nisl fringilla est, ut consequat ante
            urna sit amet nulla. Donec vitae libero sit amet magna sodales
            auctor non vitae nulla. Cras venenatis leo non erat sodales, sed
            vestibulum arcu placerat.
          </Text>
          <Text>
            Sed et imperdiet diam, dignissim malesuada metus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Morbi nec ex ut arcu cursus tristique quis in
            lectus. In vitae molestie sem, in fringilla augue. Cras cursus ante
            vitae dignissim consequat. Phasellus lobortis magna ac erat
            condimentum, id aliquet dolor venenatis. Pellentesque ac neque et mi
            posuere tristique.
          </Text>
        </Stack>
      </Stack>
    </Page>
  );
};

export default Home;
