import { Box, Typography } from '@mui/joy';
import React from 'react';

interface Error {
  message: string;
}

interface ErrorContainerProps {
  error: Error | null;
}
const ErrorContainer: React.FC<ErrorContainerProps> = ({ error }) => {
  return (
    <Box minHeight={40} mb={2}>
      {error && (
        <Typography color="danger" role="alert" aria-live="assertive">
          {error.message || 'Authorization failed'}
        </Typography>
      )}
    </Box>
  );
};

export default ErrorContainer;
