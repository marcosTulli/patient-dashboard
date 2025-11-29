import { useDialogsStore, dialogs } from '@/store/overlays';

function useDialogs() {
  const state = useDialogsStore();

  const toggleCreateDialog = () => {
    state.toggle({ dialog: dialogs.create });
  };
  const toggleDeleteDialog = () => {
    state.toggle({ dialog: dialogs.delete });
  };
  const toggleEditDialog = () => {
    state.toggle({ dialog: dialogs.edit });
  };
  const toggleAlertDialog = () => {
    state.toggle({ dialog: dialogs.alert });
  };

  const toggleRemoveFormItemDialog = () => {
    state.toggle({ dialog: dialogs.remove });
  };
  return {
    ...state,
    toggleCreateDialog,
    toggleDeleteDialog,
    toggleEditDialog,
    toggleAlertDialog,
    toggleRemoveFormItemDialog,
  };
}

export default useDialogs;
