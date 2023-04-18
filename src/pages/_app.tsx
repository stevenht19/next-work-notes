import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import { Layout } from '@/components/layout'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import ToastProvider from '@/context/Toast'

export default function App({ Component, pageProps }: AppProps) {

  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ToastProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </SessionContextProvider>
  )
}
