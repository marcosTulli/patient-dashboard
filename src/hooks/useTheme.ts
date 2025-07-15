import { extendTheme } from '@mui/joy/styles';

export default function useTheme() {
  return extendTheme({
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            solidBg: '#1d2226',
            solidHoverBg: '#444444',
          },
          background: {
            body: '#1d2226',
            surface: '#222222',
          },
        },
      },
    },
  });
}