'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, FormControl, FormLabel, Input } from '@mui/joy';
import { getFormFields, getFormSchema } from '@/config/forms/authFormConfig';
import { LoginRequest, SignupRequest } from '@/models/auth';
import { ValidationError } from 'yup';

type FormValues = LoginRequest | SignupRequest;

type AuthFormProps = {
  mode: 'login' | 'signup';
  onSubmit: (data: FormValues) => void;
  isLoading?: boolean;
};

export default function AuthForm({ mode, onSubmit, isLoading }: AuthFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  const fields = getFormFields(mode);
  const schema = getFormSchema(mode);

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await schema.validate(data, { abortEarly: false });
      onSubmit(data);
    } catch (validationError) {
      if (validationError instanceof ValidationError) {
        validationError.inner.forEach((err) => {
          if (err.path) {
            setError(err.path as keyof FormValues, { message: err.message });
          }
        });
      }
    }
  };

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
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </Button>
    </form>
  );
}
