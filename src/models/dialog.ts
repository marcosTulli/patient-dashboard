
export interface DialogButtonsProps  {
  onClickCancel: () => void;
  cancelButtonLabel: string;
  cancelButtonVariant?: 'plain' | 'outlined' | 'soft' | 'solid';
  onClickAccept: () => void;
  acceptButtonLabel: string;
  acceptButtonVariant?: 'plain' | 'outlined' | 'soft' | 'solid';
  disabled?: boolean;
};


export interface DialogTriggerProps  {
  title: string;
  openDialogButtonLabel: string;
  toggle: () => void;
  renderContent?: () => React.ReactNode;
  children?: React.ReactNode;
  isOpen: boolean;
  showButton?: boolean;
  id?: string | number;
};