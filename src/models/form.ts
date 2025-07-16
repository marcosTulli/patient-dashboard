export interface OptionType {
  id: string | number;
  value: string | number;
  name: string;
}

import { AnySchema } from 'yup';
import { Patient } from './patients';
import { FormikHelpers } from 'formik';

export interface FieldProps<T = unknown> {
  label?: React.ReactNode;
  isRequired?: boolean;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  hidden?: boolean;
  as?: 'input' | 'select';
  options?: { id: string | number; value: string | number; name: string }[];
  value?: T;
  validation: (yup: typeof import('yup')) => AnySchema;
}

export interface FormFieldProps {
  fieldKey: string;
  fieldProps: FieldProps;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export enum FormFieldKey {
  Name = 'name',
  Email = 'email',
  Password = 'password',
  Role = 'role',
  IsActive = 'isActive',
}

export type FormFields = Partial<Record<FormFieldKey, FieldProps>>;
export type SubmitBody = unknown | Patient;

export interface FormProps {
  formFields: FormFields;
  acceptButtonLabel: string;
  isLoading: boolean;
  cancelButtonLabel: string;
  onSubmit: (
    values: SubmitBody,
    formikHelpers: FormikHelpers<Record<string, unknown>>,
  ) => void;
  toggle: () => void;
}
