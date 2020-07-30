import { theme, ITheme } from '@chakra-ui/core';

import customIcons from './icons';

interface CustomColors {
  brand: {
    almostBlack: string;
    warmWhite: string;
    robbie: string;
    rose: string;
    fixation: string;
    slow: string;
    mash: string;
    everyday: string;
    cibi: string;
    suzie: string;
    gem: string;
    paradise: string;
  };
}

interface CustomSizes {
  contentMax: string;
}

export interface CustomTheme extends ITheme {
  colors: ITheme['colors'] & CustomColors;
  sizes: ITheme['sizes'] & CustomSizes;
}

export const rem = (px: string) => {
  return `${parseInt(px, 10) / 16}rem`;
};

// Customised Chakra UI theme
// Default values: https://chakra-ui.com/theme
const customTheme: CustomTheme = {
  borders: theme.borders,
  breakpoints: [rem('768px')],
  colors: {
    ...theme.colors,
    brand: {
      almostBlack: '#181818',
      warmWhite: '#FCFCFC',
      robbie: '#6D2041',
      rose: '#E35740',
      fixation: '#257846',
      slow: '#FB7D10',
      mash: '#133230',
      everyday: '#FFD337',
      cibi: '#4538DD',
      suzie: '#D9FF88',
      gem: '#5B2382',
      paradise: '#F9AAD0',
    },
  },
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", serif',
    mono: 'monospace',
  },
  fontSizes: theme.fontSizes,
  fontWeights: theme.fontWeights,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
  letterSpacings: theme.letterSpacings,
  lineHeights: theme.lineHeights,
  opacity: theme.opacity,
  radii: theme.radii,
  shadows: theme.shadows,
  sizes: {
    ...theme.sizes,
    contentMax: rem('1024px'),
  },
  space: theme.space,
  zIndices: theme.zIndices,
};

export default customTheme;
