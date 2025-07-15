'use client';

import { CssVarsProvider as JoyThemeProvider } from '@mui/joy/styles';
import { CssBaseline, GlobalStyles } from '@mui/joy';
import 'react-toastify/dist/ReactToastify.css';
import useTheme from '@/hooks/useTheme';

export default function UIProvider({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <JoyThemeProvider theme={theme} defaultColorScheme="dark">
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: theme.colorSchemes.dark.palette.background.body,
            color: theme.colorSchemes.dark.palette.text?.primary || '#fff',
          },
        }}
      />
      {children}
    </JoyThemeProvider>
  );
}
