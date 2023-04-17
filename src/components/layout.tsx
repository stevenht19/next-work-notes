import { Inter } from 'next/font/google'
import { Header } from './layout/Header'

const inter = Inter({
  subsets: ['latin']
})

export const Layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Header />
      <main className={`${inter.className} h-screen max-w-6xl mx-auto px-4 pt-24`}>
        {children}
      </main>
    </>
  )
}
