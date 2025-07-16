'use client';

import * as React from 'react';
import { ErrorMessage, Formik, Form as FormikForm } from 'formik';
import { Box, Typography } from '@mui/joy';

import FormLabel from './FormLabel';
import DialogButtons from '../Overlays/DialogButtons';
import useForm from '@/hooks/forms/useForm';
import { FormProps, SubmitBody } from '@/models';
import FormField from './FormField';

const Form: React.FC<FormProps> = ({
  formFields,
  acceptButtonLabel,
  cancelButtonLabel,
  isLoading,
  onSubmit,
  toggle,
}) => {
  const { formInitialValues, fields, validationSchema } = useForm({
    formFields,
  });

  return (
    <Formik
      key="page-form"
      initialValues={formInitialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={(values, helpers) => {
        onSubmit(values as SubmitBody, helpers);
        toggle();
      }}
    >
      {({ handleSubmit, isValid }) => (
        <FormikForm onSubmit={handleSubmit}>
          {fields.map(([fieldKey, fieldProps]) => (
            <Box key={fieldKey} sx={{ height: 108, mb: 2 }}>
              <FormLabel fieldKey={fieldKey} fieldProps={fieldProps} />
              <FormField fieldKey={fieldKey} fieldProps={fieldProps} />
              <Typography
                color="danger"
                sx={{ mat: 0.5, mb: 1, ml: 0.5 }}
                aria-live="polite"
              >
                <ErrorMessage name={fieldKey} />
              </Typography>
            </Box>
          ))}

          <DialogButtons
            onClickCancel={toggle}
            cancelButtonVariant="plain"
            cancelButtonLabel={cancelButtonLabel}
            acceptButtonLabel={acceptButtonLabel}
            acceptButtonVariant="solid"
            disabled={!isValid || isLoading}
          />
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
