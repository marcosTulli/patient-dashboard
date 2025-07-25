import { ProtectedPage } from '@/components/common/ProtectedPage';
import PatientsTable from '@/components/pages/patients-list/table';
import { routes } from '@/config/routes';

export default async function PatientsListPage() {
  return (
    <ProtectedPage redirectTo={routes.auth}>
      <PatientsTable />
    </ProtectedPage>
  );
}
