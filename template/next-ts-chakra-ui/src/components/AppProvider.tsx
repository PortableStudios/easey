import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import theme from '@/utils/theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Global
        styles={css`
          html {
            height: 100%;
          }
          html,
          body,
          #root,
          #__next {
            height: 100%;
          }
        `}
      />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
