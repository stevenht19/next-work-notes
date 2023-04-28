export const Note = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='p-4 rounded-md border border-zinc-800 w-fit'>
      <p className='text-sm text-zinc-100'>
        <span className='text-white font-semibold'>Note: </span>
        {children}
      </p>
    </div>
  )
}
