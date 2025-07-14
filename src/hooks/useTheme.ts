'use client';

import { extendTheme } from '@mui/joy/styles';

const useTheme = () => {
  const black = '#1d2226';

  const baseColors = {
    white: '#F7F7F7',
    black: '#333333',
    gray: '#808080',
  };

  const dark = extendTheme({
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            solidBg: black,
            solidHoverBg: '#444444',
            plainColor: baseColors.white,
          },
          neutral: {
            solidBg: '#222222',
            solidHoverBg: '#2b2b2b',
          },
          background: {
            body: black,
            surface: '#222222',
            popup: '#2a2a2a',
            level1: '#2b2b2b',
            level2: '#333333',
          },
          text: {
            primary: baseColors.white,
            secondary: '#CCCCCC',
          },
        },
      },
    },
  });

  return { theme: dark };
};

export default useTheme;
