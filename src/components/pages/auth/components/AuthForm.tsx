'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, FormControl, InputLabel, TextField, CircularProgress } from '@mui/material';
import { type LoginRequest, type SignupRequest } from '@/models/auth';
import { AccessTypes } from '../models';
import useAuthForm from '../hooks/useAuthForm';

type FormValues = LoginRequest | SignupRequest;

type AuthFormProps = {
  mode: AccessTypes;
  onSubmit: (data: FormValues) => void;
  isLoading?: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  const { fields, handleFormSubmit } = useAuthForm({
    mode,
    onSubmit,
    setError,
  });

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {fields.map((field) => (
        <FormControl key={field.name} fullWidth sx={{ mb: 2 }}>
          <InputLabel shrink>{field.label}</InputLabel>
          <TextField
            type={field.type}
            {...register(field.name as keyof FormValues)}
            error={!!errors[field.name as keyof FormValues]}
            helperText={errors[field.name as keyof FormValues]?.message as string}
            size="small"
            fullWidth
            sx={{ mt: 2 }}
          />
        </FormControl>
      ))}

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={isLoading}
        startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
      >
        {mode === AccessTypes.login ? 'Login' : 'Sign Up'}
      </Button>
    </form>
  );
};

export default AuthForm;
