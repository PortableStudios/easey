import React from 'react';
import { Flex } from '@chakra-ui/core';
import type { FlexProps } from '@chakra-ui/core';

import Footer from '../Footer';
import Header from '../Header';

type Props = FlexProps;

const Page: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Flex
      alignItems="center"
      backgroundColor="brand.warmWhite"
      direction="column"
      minHeight="100%"
      {...rest}
    >
      <Header />
      <Flex
        as="main"
        flexGrow={1}
        flexShrink={0}
        maxWidth="contentMax"
        width="100%"
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Page;
