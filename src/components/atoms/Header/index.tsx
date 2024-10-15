import { Link } from '@tanstack/react-router';
import { House } from 'lucide-react';

import { ThemeSwitcher } from '@/components/atoms/ThemeSwitcher';

export function Header() {
  return (
    <header className="h-[72px] w-full">
      <div className="fixed left-0 right-0 flex w-full bg-background px-10 py-4">
        <div className="flex w-full justify-between">
          <nav className="flex gap-3">
            <Link className="mr-6" to="/">
              <House />
            </Link>
            <Link
              to="/sign-in"
              activeProps={{
                className: 'font-bold',
              }}
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              activeProps={{
                className: 'font-bold',
              }}
            >
              Sign Up
            </Link>
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
