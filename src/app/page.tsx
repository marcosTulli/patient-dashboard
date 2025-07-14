'use client';
import { ProtectedPage } from '@/components/common/ProtectedPage';
import { routes } from '@/config/routes';
import { useUser } from '@/hooks/auth';

export default function Home() {
  const { user } = useUser();
  return (
    <ProtectedPage redirectTo={routes.auth}>
      <h1>Welcome Home!</h1>
      <div>
        <p>Email: {user?.email}</p>
        <p>Role: {user?.role}</p>
      </div>
    </ProtectedPage>
  );
}
