type FieldProps = {
  label?: React.ReactNode;
  isRequired?: boolean;
};

type FormLabelProps = {
  fieldKey: string;
  fieldProps: FieldProps;
};

const FormLabel: React.FC<FormLabelProps> = ({ fieldKey, fieldProps }) => {
  return (
    <label
      className="fw-bold d-flex flex-row gap-2 pb-1"
      htmlFor={fieldKey}
      hidden={!fieldProps.label}
    >
      {fieldProps.isRequired && <div className="text-danger">*</div>}
      {fieldProps.label}
    </label>
  );
};

export default FormLabel;
