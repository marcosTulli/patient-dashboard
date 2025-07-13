'use client';

import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from '@mui/joy';

import * as React from 'react';

export default function AuthPage() {
  const [mode, setMode] = React.useState<'login' | 'signup'>('login');

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography
            level="h4"
            textAlign="center"
            mb={2}
            textColor="text.primary"
          >
            TITLE
          </Typography>
          <Tabs
            value={mode}
            onChange={(_, val) => setMode(val as 'login' | 'signup')}
          >
            {/* TABS */}
            <TabList>
              <Tab value="login">Login</Tab>
              <Tab value="signup">Sign Up</Tab>
            </TabList>

            {/* LOGIN */}

            <TabPanel value="login">
              <form>LOGIN FORM</form>
            </TabPanel>

            {/* SIGNUP */}
            <TabPanel value="signup">
              <form>SIGN IN FORM</form>
            </TabPanel>
          </Tabs>
        </CardContent>
      </Card>
    </Box>
  );
}
