import React from 'react';
import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';

import { rem } from 'polished';

type Props = {
  title: string;
  description?: string;
  link?: {
    label: string;
    url: string;
  };
} & StackProps;

const Card = ({ title, description, link, ...rest }: Props) => {
  return (
    <Stack
      backgroundColor="teal.100"
      borderRadius="md"
      color="gray.900"
      padding={{ base: 4, lg: 8 }}
      spacing={{ base: 2, lg: 4 }}
      {...rest}
    >
      <Heading fontSize={{ base: 'xl', lg: '2xl' }}>{title}</Heading>
      {description && (
        <Text fontSize={{ base: 'lg', lg: 'xl' }}>{description}</Text>
      )}
      {link && (
        <Link
          href={link.url}
          fontSize={rem('15px')}
          textDecoration="underline"
          isExternal
        >
          {link.label}
        </Link>
      )}
    </Stack>
  );
};

export default Card;
