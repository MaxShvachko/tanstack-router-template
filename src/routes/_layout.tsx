import { createFileRoute, Outlet } from '@tanstack/react-router';

import { Header } from '@/components/atoms/Header';

export const Route = createFileRoute('/_layout')({
  component: () => (
    <main className="min-h-[calc(100vh_-_theme(spacing.16))] p-4">
      <Header />
      <Outlet />
    </main>
  ),
});
