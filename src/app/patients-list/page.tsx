import { ProtectedPage } from '@/components/common/ProtectedPage';
import { routes } from '@/config/routes';

export default async function PatientsListPage() {
  return (
    <ProtectedPage redirectTo={routes.auth}>
      <h1>Patients list commign soon </h1>
    </ProtectedPage>
  );
}
