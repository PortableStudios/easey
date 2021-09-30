import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Flex, Icon, Link, Stack } from '@chakra-ui/react';
import type { FlexProps, LinkProps } from '@chakra-ui/react';

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/theme/icons';
import LogoImage from '@/images/logo.svg';

type SocialLinkProps = {
  alt: string;
  href: string;
} & LinkProps;

const SocialLink = ({ alt, href, children, ...rest }: SocialLinkProps) => {
  return (
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
};

type HeaderProps = FlexProps;

const Header = ({ ...rest }: HeaderProps) => {
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
            <NextImage
              alt="Portable Logo"
              src={LogoImage}
              height={30}
              width={168}
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
