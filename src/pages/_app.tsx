import { useState } from 'react'
import { Inter } from 'next/font/google'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { ToastProvider } from '@/context/Toast'
import type { AppProps } from 'next/app'
import NextProgress from 'next-progress'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {

  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <NextProgress
        delay={300}
        color='#ededed'
        height={1.5}
        options={{ showSpinner: false }}
      />
      <ToastProvider>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </ToastProvider>
    </SessionContextProvider>
  )
}
