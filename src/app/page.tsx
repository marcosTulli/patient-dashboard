'use client';
import { ProtectedPage } from '@/components/common/ProtectedPage';
import { useUser } from '@/hooks/auth';

export default function Home() {
  const { user } = useUser();
  return (
    <ProtectedPage redirectTo="/auth">
      <h1>Welcome Home!</h1>
      <div>
        <p>Email: {user?.email}</p>
        <p>Role: {user?.role}</p>
      </div>
    </ProtectedPage>
  );
}
