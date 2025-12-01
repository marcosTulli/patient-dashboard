import { useTheme } from '@mui/material/styles';
import React from 'react';

export function CssVarsProvider({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  React.useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--scrollbar-thumb-bg', theme.palette.primary.main);
    root.style.setProperty('--scrollbar-thumb-hover-bg', theme.palette.primary.dark);
    root.style.setProperty(
      '--scrollbar-track-bg',
      theme.palette.background.default || theme.palette.background.paper,
    );
  }, [theme.palette]);

  return <>{children}</>;
}
