'use client';

import * as React from 'react';
import { ErrorMessage, Formik, Form as FormikForm } from 'formik';
import { Box } from '@mui/joy';

import FormField from './FormField';
import FormLabel from './FormLabel';
import DialogButtons from '../Overlays/DialogButtons';
import useForm from '@/hooks/forms/useForm';
import { FormProps } from '@/models';

const Form: React.FC<FormProps> = ({
  formFields,
  acceptButtonLabel,
  cancelButtonLabel,
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
        onSubmit(values, helpers);
        toggle();
      }}
    >
      {({ handleSubmit, isValid }) => (
        <FormikForm onSubmit={handleSubmit}>
          {fields.map(([fieldKey, fieldProps]) => (
            <Box key={fieldKey} sx={{ height: 108, mb: 2 }}>
              <FormLabel fieldKey={fieldKey} fieldProps={fieldProps} />
              <FormField fieldKey={fieldKey} fieldProps={fieldProps} />
              <ErrorMessage
                name={fieldKey}
                component="div"
                className="text-danger m-2"
              />
            </Box>
          ))}

          <DialogButtons
            onClickCancel={toggle}
            cancelButtonVariant="plain"
            cancelButtonLabel={cancelButtonLabel}
            acceptButtonLabel={acceptButtonLabel}
            acceptButtonVariant="solid"
            disabled={!isValid}
            onClickAccept={toggle}
          />
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
