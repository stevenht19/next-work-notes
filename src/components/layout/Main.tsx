export const Main = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <main className={`h-screen max-w-6xl mx-auto px-4 pt-24`}>
      {children}
    </main>
  )
}
