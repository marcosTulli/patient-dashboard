import { ProtectedPage } from '@/components/common/ProtectedPage';
import { NotesGrid } from '@/components/pages/session-notes/NotesGrid';
import { routes } from '@/config/routes';

export default async function SessionNotesPage() {
  return (
    <ProtectedPage redirectTo={routes.auth}>
      <NotesGrid />
    </ProtectedPage>
  );
}
