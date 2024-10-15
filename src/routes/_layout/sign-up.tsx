import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/sign-up')({
  component: SignUpPage,
});

function SignUpPage() {
  return (
    <div>
      <h3>Sign Up page</h3>
    </div>
  );
}
