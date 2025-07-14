'use client';

import { getFormFields, getFormSchema } from '@/config/forms/authFormConfig';
import { LoginRequest, SignupRequest } from '@/models/auth';
import { ValidationError } from 'yup';
import { AccessTypes } from '../models';

type FormValues = LoginRequest | SignupRequest;

interface UseAuthFormProps {
  mode: AccessTypes;
  onSubmit: (data: FormValues) => void;
  setError: (name: keyof FormValues, error: { message: string }) => void;
}

const useAuthForm = ({ mode, onSubmit, setError }: UseAuthFormProps) => {
  const fields = getFormFields(mode);
  const schema = getFormSchema(mode);

  const handleFormSubmit = async (data: FormValues) => {
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

  return { fields, handleFormSubmit };
};

export default useAuthForm;
