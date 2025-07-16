import * as Yup from 'yup';
import { FormFieldKey, FieldProps, FormFields } from '@/models'; 


const useForm = ({ formFields }: { formFields: FormFields }) => {
  const fields = Object.entries(formFields) as [FormFieldKey, FieldProps][];

  const keys = Object.keys(formFields).reduce<Record<string, string>>((acc, key) => {
    acc[key] = key;
    return acc;
  }, {});

  const formInitialValues = Object.entries(formFields).reduce<Record<string, unknown>>((acc, [key, field]) => {
    acc[key] = field?.value ?? '';
    return acc;
  }, {});

  const validationSchema = Yup.object(
    Object.entries(formFields).reduce<Record<string, Yup.AnySchema>>((acc, [key, field]) => {
      if (field?.validation) {
        acc[key] = field.validation(Yup);
      }
      return acc;
    }, {})
  );

  return {
    fields,
    keys,
    formInitialValues,
    validationSchema,
  };
};

export default useForm;
