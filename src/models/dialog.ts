import { FormFields, SubmitBody } from './form';

export interface DialogButtonsProps {
  onClickCancel: () => void;
  cancelButtonLabel: string;
  cancelButtonVariant?: 'plain' | 'outlined' | 'soft' | 'solid';
  acceptButtonLabel: string;
  acceptButtonVariant?: 'plain' | 'outlined' | 'soft' | 'solid';
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
  displayButton: boolean
}
