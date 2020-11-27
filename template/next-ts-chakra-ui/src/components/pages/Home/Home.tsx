import React, { useState } from 'react';
import NextLink from 'next/link';
import { GoHeart, GoMail } from 'react-icons/go';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Button, Heading, Icon, Link, Stack, Text } from '@chakra-ui/core';
import type { FlexProps } from '@chakra-ui/core';

import { Card } from '@/components/ui';
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
          Welcome to your new project <Icon as={GoHeart} />
        </Heading>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Button
            size="sm"
            flexShrink={0}
            rightIcon={<FaArrowCircleRight />}
            onClick={() => setUpdated(new Date().getTime())}
          >
            Update
          </Button>
          <Heading as="h2" fontSize={['sm', 'md', 'lg']}>
            {updatedTimestamp === null
              ? `Page generated at ${iso(timestamp)}.`
              : `Page updated at ${iso(updatedTimestamp)}.`}
          </Heading>
        </Stack>
        <Stack fontSize={['sm', 'md']} spacing={4}>
          <NextLink href="/404" passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link color="blue.700" sx={{ _hover: { color: 'blue.900' } }}>
              <Icon as={GoMail} mb="0.1em" /> Click here to contact us
            </Link>
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
          <Card
            title="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum fringilla eleifend. Donec auctor blandit commodo. Ut id tellus placerat, rutrum diam sed, pretium magna."
            link={{
              label: 'View repository',
              url: 'https://github.com/PortableStudios/sao-easey',
            }}
            backgroundColor="gray.900"
            color="white"
          />
        </Stack>
      </Stack>
    </Page>
  );
};

export default Home;
