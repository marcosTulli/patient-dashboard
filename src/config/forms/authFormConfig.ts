import { AccessTypes } from '@/components/pages/auth/models';
import * as yup from 'yup';

export const getFormSchema = (mode: AccessTypes) => {
  const base = {
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  };
  return yup.object(
    mode === AccessTypes.signup 
      ? {
          ...base,
          name: yup.string().min(2).required(),
        }
      : base,
  );
};

export const getFormFields = (mode: AccessTypes) => {
  const base = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];
  return mode === AccessTypes.signup
    ? [{ name: 'name', label: 'Name', type: 'text' }, ...base]
    : base;
};
