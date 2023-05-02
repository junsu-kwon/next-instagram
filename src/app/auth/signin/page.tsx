import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { authOptions } from '../../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import SignIn from '@/components/SignIn';

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex flex-col gap-2 items-center justify-center">
      <SignIn providers={providers} callbackUrl={callbackUrl} />
    </section>
  );
}
