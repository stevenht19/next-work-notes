export const Grid = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <ul className='grid grid-cols-3 gap-6'>
      {children}
    </ul>
  )
}
