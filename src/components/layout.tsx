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
      <main className={`${inter.className} relative h-full max-w-6xl mx-auto px-4 py-6`}>
        {children}
      </main>
    </>
  )
}
