'use client';

import { TabPanel } from '@mui/joy';
import React from 'react';
import SmallLoader from '@components/common/Loader/Small';
import ErrorContainer from '@components/common/ErrorContainer';
import AuthForm from './AuthForm';
import { AccessTypes } from '../models';

interface AuthFormContainerProps {
  value: AccessTypes;
  tabIdPrefix: string;
  isLoading: boolean;
  error: Error | null;
  onSubmit: (form: { email: string; password: string }) => void;
}

const AuthFormContainer = ({
  value,
  tabIdPrefix,
  isLoading,
  error,
  onSubmit,
}: AuthFormContainerProps) => {
  return (
    <TabPanel
      value={value}
      id={`${tabIdPrefix}-panel-${value}`}
      aria-labelledby={`${tabIdPrefix}-${value}`}
    >
      {isLoading ? (
        <SmallLoader />
      ) : (
        <>
          <ErrorContainer error={error} />
          <AuthForm mode={value} onSubmit={onSubmit} isLoading={isLoading} />
        </>
      )}
    </TabPanel>
  );
};

export default AuthFormContainer;
