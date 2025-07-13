import { createTheme } from '@mui/material/styles';

const useTheme = () => {
  const black = '#1d2226';

  const baseColors = {
    white: '#F7F7F7',
    black: '#333333',
    gray: '#808080',
  };

  const dark = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: black,
        light: '#444444',
      },
      secondary: {
        main: '#F7F7F7',
        dark: '#CCCCCC',
      },
      background: {
        default: black,
        paper: '#222222', 
      },
      text: {
        primary: '#F7F7F7',
        secondary: '#CCCCCC',
      },
      grey: {
        500: baseColors.gray,
      },
    },
  });

  return { theme: dark };
};

export default useTheme;
