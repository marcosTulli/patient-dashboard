import * as Yup from 'yup';

export enum FormFieldKey {
  FirstName = 'firstName',
  LastName = 'lastName',
  Email = 'email',
  PhoneNumber = 'phoneNumber',
  DOB = 'dob',
}

export interface FieldProps<T = unknown> {
  label?: React.ReactNode
  isRequired?: boolean
  type?: string
  placeholder?: string
  disabled?: boolean
  hidden?: boolean
  as?: 'input' | 'select'
  options?: { id: string | number; value: string | number; name: string }[]
  value?: T
  validation: (yup: typeof Yup) => Yup.AnySchema
}

const usePatientsFormFields = (): {
  createPatientFormFields: Partial<Record<FormFieldKey, FieldProps>>
//   editPatientFormFields: Partial<Record<FormFieldKey, FieldProps>>
} => {


const validation = {
  firstName: () =>
    Yup.string()
      .required('First name is required')
      .min(2, 'First name must be at least 2 characters'),
  lastName: () =>
    Yup.string()
      .required('Last name is required')
      .min(2, 'Last name must be at least 2 characters'),
  email: () =>
    Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

  // Phone number is optional but must match the pattern if present
  phoneNumber: () =>
    Yup.string()
      .nullable()
      .required()
      .matches(
        /^(\+?[0-9\s-]*)?$/,
        'Phone number can only contain numbers, spaces, dashes, and an optional leading +'
      ),

  // Date of birth is optional but must be a valid date <= today if provided
  dob: () =>
    Yup.date()
      .nullable()
      .required()
      .max(new Date(), 'DOB cannot be in the future'),
};


const commonFields: Record<FormFieldKey, FieldProps> = {
  [FormFieldKey.FirstName]: {
    type: 'text',
    label: 'First Name',
    isRequired: true,
    value: '',
    placeholder: 'Enter first name',
    validation: validation.firstName,
  },
  [FormFieldKey.LastName]: {
    type: 'text',
    label: 'Last Name',
    isRequired: true,
    value: '',
    placeholder: 'Enter last name',
    validation: validation.lastName,
  },
  [FormFieldKey.Email]: {
    type: 'email',
    label: 'Email',
    isRequired: true,
    value: '',
    placeholder: 'Enter email address',
    validation: validation.email,
  },
  [FormFieldKey.PhoneNumber]: {
    type: 'tel',
    label: 'Phone Number',
    isRequired: true,
    value: '',
    placeholder: 'Enter phone number ',
    validation: validation.phoneNumber,
  },
  [FormFieldKey.DOB]: {
    type: 'date',
    label: 'Date of Birth',
    isRequired: true,
    value: '',
    placeholder: 'Enter date of birth',
    validation: validation.dob,
  },
};

  // For create form, all values default to empty string
  const createPatientFormFields = {
    ...commonFields,
    [FormFieldKey.FirstName]: {
      ...commonFields[FormFieldKey.FirstName],
      value: '',
    },
    [FormFieldKey.LastName]: {
      ...commonFields[FormFieldKey.LastName],
      value: '',
    },
    [FormFieldKey.Email]: {
      ...commonFields[FormFieldKey.Email],
      value: '',
    },
    [FormFieldKey.PhoneNumber]: {
      ...commonFields[FormFieldKey.PhoneNumber],
      value: '',
    },
    [FormFieldKey.DOB]: {
      ...commonFields[FormFieldKey.DOB],
      value: '',
    },
  };

//   // For edit form, fill values from selectedRow or fallback to empty string
//   const editPatientFormFields = {
//     ...commonFields,
//     [FormFieldKey.FirstName]: {
//       ...commonFields[FormFieldKey.FirstName],
//       value: selectedRow?.firstName ?? '',
//     },
//     [FormFieldKey.LastName]: {
//       ...commonFields[FormFieldKey.LastName],
//       value: selectedRow?.lastName ?? '',
//     },
//     [FormFieldKey.Email]: {
//       ...commonFields[FormFieldKey.Email],
//       value: selectedRow?.email ?? '',
//     },
//     [FormFieldKey.PhoneNumber]: {
//       ...commonFields[FormFieldKey.PhoneNumber],
//       value: selectedRow?.phoneNumber ?? '',
//     },
//     [FormFieldKey.DOB]: {
//       ...commonFields[FormFieldKey.DOB],
//       value: selectedRow?.dob ?? '',
//     },
//   };

  return { createPatientFormFields  };
};

export default usePatientsFormFields;
