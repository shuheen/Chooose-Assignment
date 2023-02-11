// 1. Import the extendTheme function
import {extendTheme} from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  monochrome: {
    black: '#000',
    white: '#fff',
  },
  grey: {
    100: '#f6f7f9',
    200: '#f1f1f1',
    300: '#e2e2e2',
    400: '#d1d1d1',
    500: '#b5b5b5',
    600: '#9e9e9e',
    700: '#737373',
    800: '#595959',
    900: '#1f2837',
  },
};

export const theme = extendTheme({colors});
