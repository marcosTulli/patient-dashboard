'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, FormControl, FormLabel, Input } from '@mui/joy';
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
        <FormControl key={field.name} sx={{ mb: 2 }}>
          <FormLabel>{field.label}</FormLabel>
          <Input
            type={field.type}
            {...register(field.name as keyof FormValues)}
            error={!!errors[field.name as keyof FormValues]}
          />
          {errors[field.name as keyof FormValues] && (
            <div style={{ color: 'red', fontSize: 12 }}>
              {errors[field.name as keyof FormValues]?.message as string}
            </div>
          )}
        </FormControl>
      ))}

      <Button type="submit" loading={isLoading} fullWidth>
        {mode === AccessTypes.login ? 'Login' : 'Sign Up'}
      </Button>
    </form>
  );
};

export default AuthForm;
