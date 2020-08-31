import React from 'react';
import NextLink from 'next/link';
import { Flex, Icon, Image, Link, Stack } from '@chakra-ui/core';
import type { FlexProps, LinkProps } from '@chakra-ui/core';

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/theme/icons';

type Props = FlexProps;

const SocialLink: React.FC<LinkProps & { alt: string; href: string }> = ({
  alt,
  href,
  children,
  ...rest
}) => (
  <Link
    aria-label={alt}
    href={href}
    isExternal
    lineHeight={1}
    padding={3}
    _hover={{ color: 'gray.400' }}
    {...rest}
  >
    {children}
  </Link>
);

const Header: React.FC<Props> = ({ ...rest }) => {
  return (
    <Flex
      as="header"
      backgroundColor="gray.900"
      flexShrink={0}
      justifyContent="center"
      width="100%"
      {...rest}
    >
      <Flex
        alignItems="center"
        direction={['column', 'row']}
        justifyContent="space-between"
        maxWidth="1024px"
        padding={6}
        paddingBottom={[3, 6]}
        width="100%"
      >
        <NextLink href="/" passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link>
            <Image
              alt="Portable Logo"
              src={require('@/images/logo.svg')}
              ignoreFallback
            />
          </Link>
        </NextLink>
        <Stack
          color="white"
          direction="row"
          fontSize="2xl"
          marginTop={[2, 0]}
          spacing={2}
        >
          <SocialLink
            alt="Visit Portable's Facebook page"
            href="https://www.facebook.com/portable/"
          >
            <Icon as={FacebookIcon} />
          </SocialLink>
          <SocialLink
            alt="Visit Portable's Instagram page"
            href="https://www.instagram.com/portable/"
          >
            <Icon as={InstagramIcon} />
          </SocialLink>
          <SocialLink
            alt="Visit Portable's Twitter page"
            href="https://twitter.com/Portable"
          >
            <Icon as={TwitterIcon} />
          </SocialLink>
          <SocialLink
            alt="Visit Portable's YouTube page"
            href="https://www.youtube.com/channel/UCRL26DPexiRaRvixhn-GGpw"
          >
            <Icon as={YouTubeIcon} />
          </SocialLink>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Header;
