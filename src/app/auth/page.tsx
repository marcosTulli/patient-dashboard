'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  Input,
  Typography,
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from '@mui/joy';
import { useState } from 'react';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="background.body"
    >
      <Card
        variant="outlined"
        sx={{
          width: 400,
          bgcolor: 'background.surface',
        }}
      >
        <CardContent>
          <Typography
            level="h4"
            textAlign="center"
            mb={2}
            textColor="text.primary"
          >
            {mode === 'login' ? 'Admin Login' : 'Create Account'}
          </Typography>

          <Tabs
            value={mode}
            onChange={(_, val) => setMode(val as 'login' | 'signup')}
          >
            <TabList>
              <Tab value="login">Login</Tab>
              <Tab value="signup">Sign Up</Tab>
            </TabList>
            <TabPanel value="login">
              <form>
                <FormControl sx={{ mb: 2 }}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" required />
                </FormControl>
                <FormControl sx={{ mb: 2 }}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" required />
                </FormControl>
                <Button fullWidth>Login</Button>
              </form>
            </TabPanel>
            <TabPanel value="signup">
              <form>
                <FormControl sx={{ mb: 2 }}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" required />
                </FormControl>
                <FormControl sx={{ mb: 2 }}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" required />
                </FormControl>
                <FormControl sx={{ mb: 2 }}>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="password" required />
                </FormControl>
                <Button fullWidth>Create Account</Button>
              </form>
            </TabPanel>
          </Tabs>
        </CardContent>
      </Card>
    </Box>
  );
}
