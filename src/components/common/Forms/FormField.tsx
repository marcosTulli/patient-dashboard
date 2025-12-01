'use client';

import * as React from 'react';
import { Field, type FieldProps as FormikFieldProps } from 'formik';
import { TextField, Select, MenuItem } from '@mui/material';
import { type FormFieldProps } from '@/models';

const FormField: React.FC<FormFieldProps> = ({ fieldKey, fieldProps, className = '', onClick }) => {
  const isSelect = fieldProps.as === 'select' && Array.isArray(fieldProps.options);

  if (isSelect) {
    return (
      <Field name={fieldKey}>
        {({ field, form }: FormikFieldProps<string>) => (
          <Select
            {...field}
            onChange={(e) => form.setFieldValue(field.name, e.target.value)}
            value={field.value ?? ''}
            className={className}
            displayEmpty
            disabled={fieldProps.disabled}
            onClick={onClick}
            size="small"
            fullWidth
            sx={{ display: fieldProps.hidden ? 'none' : undefined }}
          >
            {fieldProps.placeholder && (
              <MenuItem value="" disabled>
                {fieldProps.placeholder}
              </MenuItem>
            )}
            {fieldProps.options!.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        )}
      </Field>
    );
  }

  return (
    <Field name={fieldKey}>
      {({ field }: FormikFieldProps<string>) => (
        <TextField
          {...field}
          type={fieldProps.type || 'text'}
          placeholder={fieldProps.placeholder}
          disabled={fieldProps.disabled}
          onClick={onClick}
          className={className}
          size="small"
          fullWidth
          sx={{ display: fieldProps.hidden ? 'none' : undefined }}
        />
      )}
    </Field>
  );
};

export default FormField;
