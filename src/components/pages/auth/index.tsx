'use client';

import { useAuthHandler } from '@components/pages/auth/hooks/useAuthHandler';
import { Box, Tabs, Tab } from '@mui/material';
import React from 'react';
import CardContainer from '@components/common/CardContainer';
import useAccessType from './hooks/useAccessType';
import { type AccessTypes } from './models';
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
        {tabs.map(({ id, value, label, panelId }) => (
          <Tab key={id} id={id} value={value} label={label} aria-controls={panelId} />
        ))}
      </Tabs>
      <Box mt={2} minHeight={350}>
        {tabs.map(({ value }) => (
          <AuthFormContainer
            key={value}
            value={value}
            currentValue={mode}
            tabIdPrefix={tabIdPrefix}
            isLoading={isLoading}
            error={error}
            onSubmit={handleSubmit}
          />
        ))}
      </Box>
    </CardContainer>
  );
};

export default AuthPageComponent;
