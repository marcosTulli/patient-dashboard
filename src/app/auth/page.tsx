import AuthPageComponent from '@/components/pages/auth';
import { Box, CircularProgress } from '@mui/joy';
import { Suspense } from 'react';

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress size="lg" />
        </Box>
      }
    >
      <AuthPageComponent />
    </Suspense>
  );
}
