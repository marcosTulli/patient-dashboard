'use client';

import { useAuthHandler } from '@components/pages/auth/hooks/useAuthHandler';
import { Box, Tabs } from '@mui/joy';
import React from 'react';
import CardContainer from '@components/common/CardContainer';
import useAccessType from './hooks/useAccessType';
import { type AccessTypes } from './models';
import AccessTabs from './components/AccessTabs';
import AuthFormContainer from './components/AuthFormContainer';
import CardTitle from './components/CardTitle';
import { tabs } from './config/tabsConfig';

const tabIdPrefix = 'auth-tab';

const AuthPageComponent = () => {
  const { mode, setMode } = useAccessType();
  const { handleSubmit, isLoading, error } = useAuthHandler(mode);

  return (
    <CardContainer>
      <CardTitle mode={mode} tabIdPrefix={tabIdPrefix} />

      <Tabs
        aria-label="Authentication form tabs"
        value={mode}
        onChange={(_, val) => setMode(val as AccessTypes)}
      >
        <AccessTabs />
        <Box mt={2} minHeight={350}>
          {tabs.map(({ value }) => (
            <AuthFormContainer
              key={value}
              value={value}
              tabIdPrefix={tabIdPrefix}
              isLoading={isLoading}
              error={error}
              onSubmit={handleSubmit}
            />
          ))}
        </Box>
      </Tabs>
    </CardContainer>
  );
};

export default AuthPageComponent;
