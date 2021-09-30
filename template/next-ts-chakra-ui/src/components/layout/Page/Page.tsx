import React from 'react';
import { Flex } from '@chakra-ui/react';
import type { FlexProps } from '@chakra-ui/react';

import Footer from '../Footer';
import Header from '../Header';

type Props = FlexProps;

const Page = ({ children, ...rest }: Props) => {
  return (
    <Flex
      alignItems="center"
      backgroundColor="white"
      direction="column"
      height="100%"
      minHeight="100%"
      {...rest}
    >
      <Header />
      <Flex
        as="main"
        flexGrow={1}
        flexShrink={0}
        maxWidth="1024px"
        width="100%"
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Page;
