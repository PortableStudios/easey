import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '@/theme';

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppProvider;
