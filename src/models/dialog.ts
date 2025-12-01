import { type FormFields, type SubmitBody } from './form';

export interface DialogButtonsProps {
  onClickCancel: () => void;
  cancelButtonLabel: string;
  cancelButtonVariant?: 'text' | 'outlined' | 'contained';
  acceptButtonLabel: string;
  acceptButtonVariant?: 'text' | 'outlined' | 'contained';
  disabled?: boolean;
}

export interface DialogTriggerProps {
  title: string;
  openDialogButtonLabel: string;
  toggle: () => void;
  renderContent?: () => React.ReactNode;
  children?: React.ReactNode;
  isOpen: boolean;
  displayButton: boolean;
  id?: string | number;
}

export interface CreateItemDialogProps {
  onSubmit: (values: SubmitBody) => void;
  formFields: FormFields;
  isLoading: boolean;
  title: string;
  acceptButtonLabel: string;
  openDialogButtonLabel: string;
  cancelButtonLabel: string;
  displayButton: boolean;
}
