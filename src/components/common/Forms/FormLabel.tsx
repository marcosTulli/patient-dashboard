'use client';

import * as React from 'react';
import { Typography } from '@mui/material';

type FieldProps = {
  label?: React.ReactNode;
  isRequired?: boolean;
};

type FormLabelProps = {
  fieldKey: string;
  fieldProps: FieldProps;
};

const FormLabel: React.FC<FormLabelProps> = ({ fieldKey, fieldProps }) => {
  if (!fieldProps.label) return null;

  return (
    <Typography
      component="label"
      htmlFor={fieldKey}
      variant="body2"
      fontWeight={500}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        pb: 0.5,
      }}
    >
      {fieldProps.label}
      {fieldProps.isRequired && (
        <Typography color="error" component="span">
          *
        </Typography>
      )}
    </Typography>
  );
};

export default FormLabel;
