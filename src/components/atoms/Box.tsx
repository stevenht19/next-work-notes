export const Box = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='p-5 rounded-md border border-zinc-800 text-sm'>
      {children}
    </div>
  )
}
