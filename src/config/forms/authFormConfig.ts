import * as yup from 'yup';

export const getFormSchema = (mode: 'login' | 'signup') => {
  const base = {
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  };
  return yup.object(
    mode === 'signup'
      ? {
          ...base,
          name: yup.string().min(2).required(),
        }
      : base
  );
};

export const getFormFields = (mode: 'login' | 'signup') => {
  const base = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];
  return mode === 'signup'
    ? [{ name: 'name', label: 'Name', type: 'text' }, ...base]
    : base;
};
