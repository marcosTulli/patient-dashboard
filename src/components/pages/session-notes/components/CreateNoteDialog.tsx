import React from 'react';
import { useNotes } from '../hooks/useNotes';
import useDialogs from '@/hooks/overlays/useDialogs';
import { CreateNoteForm } from './CreateNoteForm';
import DialogTrigger from '@/components/common/Overlays/DialogTrigger';

export const CreateNoteDialog: React.FC = () => {
  const { handleCreateNote } = useNotes();
  const { isOpenCreateDialog, toggleCreateDialog } = useDialogs();

  return (
    <DialogTrigger
      title="Create New Note"
      openDialogButtonLabel="Add Note"
      isOpen={isOpenCreateDialog}
      displayButton
      toggle={toggleCreateDialog}
      renderContent={() => (
        <CreateNoteForm onSubmit={handleCreateNote} onCancel={toggleCreateDialog} />
      )}
    />
  );
};
