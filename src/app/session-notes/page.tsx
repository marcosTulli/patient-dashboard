'use client';
import DeleteItemDialog from '@/components/common/Overlays/DeleteItemDialog';
import { ProtectedPage } from '@/components/common/ProtectedPage';
import { NotesPageHeader } from '@/components/pages/session-notes/components/NotesPageHeader';
import { useNotes } from '@/components/pages/session-notes/hooks/useNotes';
import { NotesGrid } from '@/components/pages/session-notes/NotesGrid';
import { routes } from '@/config/routes';
import { Box } from '@mui/material';

export default function SessionNotesPage() {
  const { noteToDelete, handleConfirmDelete } = useNotes();
  return (
    <ProtectedPage redirectTo={routes.auth}>
      <Box
        id="notes-page"
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={3}
        px={{ xs: 2, sm: 3, md: 4 }}
        py={3}
      >
        <NotesPageHeader />
        <NotesGrid />
        {noteToDelete && (
          <DeleteItemDialog
            id="delete-note-dialog"
            content={{
              alertMessage:
                'Are you sure you want to delete this note? This action cannot be undone.',
            }}
            acceptButtonLabel="Delete"
            displayButton={false}
            title="Delete"
            cancelButtonLabel="Cancel"
            onSubmit={handleConfirmDelete}
          />
        )}
      </Box>
    </ProtectedPage>
  );
}
