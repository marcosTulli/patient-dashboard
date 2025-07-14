'use client';

import { useLogin } from '@/hooks/auth/';
import { LoginRequest } from '@/models/auth/login';

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
import * as React from 'react';

export default function AuthPage() {
  const [mode, setMode] = React.useState<'login' | 'signup'>('login');
  const { data, login, isPending } = useLogin();
  const [form, setForm] = React.useState<LoginRequest>({
    email: '',
    password: '',
  });

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  React.useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;
    await login({ email, password });
  };

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
          {!isPending ? (
            <>
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
                  <form onSubmit={handleLogin}>
                    <FormControl sx={{ mb: 2 }}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        onChange={updateEmail}
                        value={form.email}
                        type="email"
                        name="email"
                        required
                      />
                    </FormControl>
                    <FormControl sx={{ mb: 2 }}>
                      <FormLabel>Password</FormLabel>
                      <Input
                        onChange={updatePassword}
                        value={form.password}
                        type="password"
                        name="password"
                        required
                      />
                    </FormControl>
                    <Button type="submit" fullWidth>
                      Login
                    </Button>
                  </form>
                </TabPanel>

                <TabPanel value="signup">
                  <form onSubmit={(e) => e.preventDefault()}>
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
                    <Button type="submit" fullWidth>
                      Create Account
                    </Button>
                  </form>
                </TabPanel>
              </Tabs>
            </>
          ) : (
            <Typography>Cargando</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
