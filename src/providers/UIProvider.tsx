'use client';

import { CssBaseline } from '@mui/material';

export default function UIProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
}
