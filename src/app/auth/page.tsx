'use client';

import AuthForm from '@/components/AccessForm';
import { useAuthHandler } from '@/components/AccessForm/useAuthHandler';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  CircularProgress,
} from '@mui/joy';
import React from 'react';

export default function AuthPage() {
  const [mode, setMode] = React.useState<'login' | 'signup'>('login');
  const { handleSubmit, isLoading, error } = useAuthHandler(mode);

  const tabIdPrefix = 'auth-tab';

  return (
    <Box
      component="main"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="background.body"
      p={2}
    >
      <Card
        component="section"
        variant="outlined"
        role="region"
        aria-labelledby={`${tabIdPrefix}-${mode}`}
        sx={{
          width: { xs: '90%', sm: 400 },
          bgcolor: 'background.surface',
          minHeight: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CardContent>
          <Typography
            id={`${tabIdPrefix}-${mode}`}
            level="h4"
            textAlign="center"
            mb={2}
            component="h1"
          >
            {mode === 'login' ? 'Admin Login' : 'Create Account'}
          </Typography>

          <Tabs
            aria-label="Authentication form tabs"
            value={mode}
            onChange={(_, val) => setMode(val as 'signup' | 'login')}
          >
            <TabList>
              <Tab
                id={`${tabIdPrefix}-login`}
                value="login"
                aria-controls={`${tabIdPrefix}-panel-login`}
              >
                Login
              </Tab>
              <Tab
                id={`${tabIdPrefix}-signup`}
                value="signup"
                aria-controls={`${tabIdPrefix}-panel-signup`}
              >
                Sign Up
              </Tab>
            </TabList>

            <Box mt={2} minHeight={350}>
              <TabPanel
                value="login"
                id={`${tabIdPrefix}-panel-login`}
                aria-labelledby={`${tabIdPrefix}-login`}
              >
                {isLoading ? (
                  <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress size="lg" aria-label="Loading" />
                  </Box>
                ) : (
                  <>
                    <Box minHeight={40} mb={2}>
                      {error && (
                        <Typography
                          color="danger"
                          role="alert"
                          aria-live="assertive"
                        >
                          {error.message || 'Login failed'}
                        </Typography>
                      )}
                    </Box>
                    <AuthForm
                      mode="login"
                      onSubmit={handleSubmit}
                      isLoading={isLoading}
                    />
                  </>
                )}
              </TabPanel>

              <TabPanel
                value="signup"
                id={`${tabIdPrefix}-panel-signup`}
                aria-labelledby={`${tabIdPrefix}-signup`}
              >
                {isLoading ? (
                  <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress size="lg" aria-label="Loading" />
                  </Box>
                ) : (
                  <>
                    <Box minHeight={40} mb={2}>
                      {error && (
                        <Typography
                          color="danger"
                          role="alert"
                          aria-live="assertive"
                        >
                          {error.message || 'Signup failed'}
                        </Typography>
                      )}
                    </Box>
                    <AuthForm
                      mode="signup"
                      onSubmit={handleSubmit}
                      isLoading={isLoading}
                    />
                  </>
                )}
              </TabPanel>
            </Box>
          </Tabs>
        </CardContent>
      </Card>
    </Box>
  );
}
