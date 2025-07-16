'use client';

import type React from 'react';
import { useEffect } from 'react';
import {
  Modal,
  ModalDialog,
  ModalClose,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Box,
} from '@mui/joy';
import { useForm, Controller } from 'react-hook-form';
// import * as yup from 'yup';
import type { Patient } from '@/models/patients';

interface PatientFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  dob?: string;
}

interface PatientDialogProps {
  open?: boolean;
  patient?: Patient | null;
  onClose?: () => void;
  onSubmit?: (data: PatientFormData) => void;
}

const PatientDialog: React.FC<PatientDialogProps> = ({
  open = false,
  patient = null,
  onClose = () => {},
  onSubmit = () => {},
}) => {
  const isEditing = Boolean(patient);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PatientFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dob: '',
    },
  });

  useEffect(() => {
    if (patient) {
      reset({
        firstName: patient.firstName,
        lastName: patient.lastName,
        email: patient.email,
        phoneNumber: patient.phoneNumber || '',
        dob: patient.dob || '',
      });
    } else {
      reset({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dob: '',
      });
    }
  }, [patient, reset]);

  const handleFormSubmit = async (data: PatientFormData) => {
    try {
      await onSubmit(data);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog sx={{ minWidth: '400px', maxWidth: '500px' }}>
        <ModalClose />
        <Typography level="h4" sx={{ mb: 2 }}>
          {isEditing ? 'Edit Patient' : 'Add New Patient'}
        </Typography>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: 'First name is required' }}
                render={({ field }) => (
                  <FormControl
                    error={Boolean(errors.firstName)}
                    sx={{ flex: 1 }}
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input {...field} placeholder="Enter first name" />
                    {errors.firstName && (
                      <Typography level="body-xs" color="danger">
                        {errors.firstName.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />

              <Controller
                name="lastName"
                control={control}
                rules={{ required: 'Last name is required' }}
                render={({ field }) => (
                  <FormControl
                    error={Boolean(errors.lastName)}
                    sx={{ flex: 1 }}
                  >
                    <FormLabel>Last Name</FormLabel>
                    <Input {...field} placeholder="Enter last name" />
                    {errors.lastName && (
                      <Typography level="body-xs" color="danger">
                        {errors.lastName.message}
                      </Typography>
                    )}
                  </FormControl>
                )}
              />
            </Box>

            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => (
                <FormControl error={Boolean(errors.email)}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <Typography level="body-xs" color="danger">
                      {errors.email.message}
                    </Typography>
                  )}
                </FormControl>
              )}
            />

            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <FormControl>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    {...field}
                    placeholder="Enter phone number (optional)"
                  />
                </FormControl>
              )}
            />

            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <FormControl>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input {...field} type="date" />
                </FormControl>
              )}
            />

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'flex-end',
                mt: 3,
              }}
            >
              <Button variant="plain" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" loading={isSubmitting}>
                {isEditing ? 'Update Patient' : 'Add Patient'}
              </Button>
            </Box>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
};

export default PatientDialog;
