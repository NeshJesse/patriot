'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../supabaseClient';

export default function SignInLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          router.push('/app/invite');
        }
      }
    );

    
  }, [router]);

  return <>{children}</>;
}
