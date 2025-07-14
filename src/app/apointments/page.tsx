import { ProtectedPage } from '@/components/common/ProtectedPage';
import { routes } from '@/config/routes';

export default async function ApointmentsPage() {
  return (
    <ProtectedPage redirectTo={routes.auth}>
      <h1>Apointments commign soon </h1>
    </ProtectedPage>
  );
}
