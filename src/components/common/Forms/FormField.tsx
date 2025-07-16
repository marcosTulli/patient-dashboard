'use client';

import * as React from 'react';
import { Field, FieldProps as FormikFieldProps } from 'formik';
import { Input, Select, Option } from '@mui/joy';
import { FormFieldProps } from '@/models';

const FormField: React.FC<FormFieldProps> = ({
  fieldKey,
  fieldProps,
  className = '',
  onClick,
}) => {
  const isSelect =
    fieldProps.as === 'select' && Array.isArray(fieldProps.options);

  if (isSelect) {
    return (
      <Field name={fieldKey}>
        {({ field, form }: FormikFieldProps<string>) => (
          <Select
            {...field}
            onChange={(_, value) => form.setFieldValue(field.name, value)}
            value={field.value ?? ''}
            className={className}
            placeholder={fieldProps.placeholder}
            disabled={fieldProps.disabled}
            onClick={onClick}
            sx={{ display: fieldProps.hidden ? 'none' : undefined }}
          >
            {fieldProps.options!.map((option) => (
              <Option key={option.id} value={option.value}>
                {option.name}
              </Option>
            ))}
          </Select>
        )}
      </Field>
    );
  }

  return (
    <Field name={fieldKey}>
      {({ field }: FormikFieldProps<string>) => (
        <Input
          {...field}
          type={fieldProps.type || 'text'}
          placeholder={fieldProps.placeholder}
          disabled={fieldProps.disabled}
          onClick={onClick}
          className={className}
          sx={{ display: fieldProps.hidden ? 'none' : undefined }}
        />
      )}
    </Field>
  );
};

export default FormField;
