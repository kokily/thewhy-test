import type { SyntheticEvent } from 'react';
import { useRef } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function useLogin() {
  const router = useRouter();
  const passwordRef = useRef<HTMLInputElement>(null);
  const { status } = useSession();

  const onLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    const password = passwordRef.current?.value;

    const response = await signIn('credentials', {
      redirect: false,
      password,
      callbackUrl: '/',
    });

    if (response?.error) {
      toast.error(response.error);
      return;
    }
  };

  if (status === 'authenticated') {
    router.replace('/');
  }

  return {
    passwordRef,
    onLogin,
  };
}
