'use client';

import { Box } from '@mui/material';
import React from 'react';
import SmallLoader from '@components/common/Loader/Small';
import ErrorContainer from '@components/common/ErrorContainer';
import AuthForm from './AuthForm';
import { type AccessTypes } from '../models';

interface AuthFormContainerProps {
  value: AccessTypes;
  currentValue: AccessTypes;
  tabIdPrefix: string;
  isLoading: boolean;
  error: Error | null;
  onSubmit: (form: { email: string; password: string }) => void;
}

const AuthFormContainer = ({
  value,
  currentValue,
  tabIdPrefix,
  isLoading,
  error,
  onSubmit,
}: AuthFormContainerProps) => {
  if (value !== currentValue) return null;

  return (
    <Box
      role="tabpanel"
      id={`${tabIdPrefix}-panel-${value}`}
      aria-labelledby={`${tabIdPrefix}-${value}`}
      sx={{ minHeight: 300 }}
    >
      {isLoading ? (
        <Box
          sx={{
            minHeight: 300,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SmallLoader />
        </Box>
      ) : (
        <>
          <ErrorContainer error={error} />
          <AuthForm mode={value} onSubmit={onSubmit} isLoading={isLoading} />
        </>
      )}
    </Box>
  );
};

export default AuthFormContainer;
