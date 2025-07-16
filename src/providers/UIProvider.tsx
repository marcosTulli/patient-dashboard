'use client';

import { CssVarsProvider as JoyThemeProvider } from '@mui/joy/styles';
import { CssBaseline, GlobalStyles } from '@mui/joy';
import 'react-toastify/dist/ReactToastify.css';

export default function UIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <JoyThemeProvider defaultColorScheme="dark">
      <CssBaseline />
      <GlobalStyles styles={{}} />
      {children}
    </JoyThemeProvider>
  );
}
