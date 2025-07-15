
export interface OptionType  {
  id: string | number;
  value: string | number;
  name: string;
};

import { FormikHelpers } from 'formik';
import { AnySchema } from 'yup';

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


export interface FormFieldProps  {
  fieldKey: string;
  fieldProps: FieldProps;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export enum FormFieldKey {
  Name = 'name',
  Email = 'email',
  Password = 'password',
  Role = 'role',
  IsActive = 'isActive',
  // add more as needed
}

export type FormFields = Partial<Record<FormFieldKey, FieldProps>>;

export interface FormProps {
  formFields: FormFields;
  acceptButtonLabel: string;
  cancelButtonLabel: string;
  onSubmit: (
    values: Record<string, unknown>,
    formikHelpers: FormikHelpers<Record<string, unknown>>,
  ) => void;
  toggle: () => void;
}
