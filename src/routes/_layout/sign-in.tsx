import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/sign-in')({
  component: SignInPage,
});

function SignInPage() {
  return (
    <div>
      <h3>Sign In</h3>
    </div>
  );
}
