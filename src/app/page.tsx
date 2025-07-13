'use client';
import { redirect } from 'next/navigation';

export default function Home() {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    redirect('/auth');
  }

  return <h1>HOME</h1>;
}
