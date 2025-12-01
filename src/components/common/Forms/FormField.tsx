'use client';

import * as React from 'react';
import { Field, type FieldProps as FormikFieldProps } from 'formik';
import { TextField, Select, MenuItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { type FormFieldProps } from '@/models';

const FormField: React.FC<FormFieldProps> = ({ fieldKey, fieldProps, className = '', onClick }) => {
  const isSelect = fieldProps.as === 'select' && Array.isArray(fieldProps.options);
  const isDate = fieldProps.type === 'date';

  const threeYearsAgo = new Date();
  threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

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

  if (isDate) {
    return (
      <Field name={fieldKey}>
        {({ field, form }: FormikFieldProps<string | Date | null>) => (
          <DatePicker
            value={field.value ? new Date(field.value) : null}
            onChange={(newValue) => {
              if (newValue && typeof newValue === 'object' && 'toDate' in newValue) {
                const dateValue = (newValue as { toDate: () => Date }).toDate();
                form.setFieldValue(field.name, dateValue);
              } else {
                form.setFieldValue(field.name, newValue);
              }
            }}
            maxDate={threeYearsAgo}
            disabled={fieldProps.disabled}
            slotProps={{
              textField: {
                size: 'small',
                fullWidth: true,
                className,
                placeholder: fieldProps.placeholder,
                sx: { display: fieldProps.hidden ? 'none' : undefined },
              },
            }}
          />
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
