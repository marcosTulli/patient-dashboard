'use client';

import { useLogin, useSignup } from '@/hooks/auth/';
import useAuthToken from '@/hooks/auth/token';
import { SignupRequest } from '@/models/auth';
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
import { useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';

export default function AuthPage() {
  const [mode, setMode] = React.useState<'login' | 'signup'>('login');
  const { accessToken, login, isPending } = useLogin();

  const {
    accessToken: signupToken,
    signup,
    isPending: signupPending,
  } = useSignup();

  const { setAuthToken } = useAuthToken();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get('redirect') || '/';
  const router = useRouter();

  // LOGIN PART
  const [form, setForm] = React.useState<LoginRequest>({
    email: '',
    password: '',
  });

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, email: e.target.value }));
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, password: e.target.value }));
  };

  React.useEffect(() => {
    if (accessToken) {
      setAuthToken(accessToken);
      router.replace(redirectTo);
    }
  }, [accessToken, setAuthToken, router, redirectTo]);

  React.useEffect(() => {
    if (accessToken) {
      setAuthToken(accessToken);
    }
  }, [accessToken, setAuthToken]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;
    await login({ email, password });
  };

  // LOGIN PART

  // SIGNUP

  const [signUpForm, setSignupForm] = React.useState<SignupRequest>({
    name: '',
    email: '',
    password: '',
  });

  const updateSignupName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((prev) => ({ ...prev, name: e.target.value }));
  };

  const updateSignupEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((prev) => ({ ...prev, email: e.target.value }));
  };

  const updateSignupPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((prev) => ({ ...prev, password: e.target.value }));
  };

  React.useEffect(() => {
    if (signupToken) {
      setAuthToken(signupToken);
      router.replace(redirectTo);
    }
  }, [signupToken, setAuthToken, router, redirectTo]);

  React.useEffect(() => {
    if (signupToken) {
      setAuthToken(signupToken);
    }
  }, [signupToken, setAuthToken]);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, name } = signUpForm;
    await signup({ name, email, password });
  };

  // SIGN UP

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
        sx={{ width: 400, bgcolor: 'background.surface' }}
      >
        <CardContent>
          {!isPending || !signupPending ? (
            <>
              <Typography level="h4" textAlign="center" mb={2}>
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
                  <form onSubmit={handleSignup}>
                    <FormControl sx={{ mb: 2 }}>
                      <FormLabel>Name</FormLabel>
                      <Input
                        onChange={updateSignupName}
                        value={signUpForm.name}
                        type="name"
                        name="name"
                        required
                      />
                    </FormControl>

                    <FormControl sx={{ mb: 2 }}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        onChange={updateSignupEmail}
                        value={signUpForm.email}
                        type="email"
                        name="email"
                        required
                      />
                    </FormControl>

                    <FormControl sx={{ mb: 2 }}>
                      <FormLabel>Password</FormLabel>
                      <Input
                        onChange={updateSignupPassword}
                        value={signUpForm.password}
                        type="password"
                        name="password"
                        required
                      />
                    </FormControl>

                    {/* <FormControl sx={{ mb: 2 }}>
                      <FormLabel>Confirm Password</FormLabel>
                      <Input type="password" required />
                    </FormControl> */}

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
