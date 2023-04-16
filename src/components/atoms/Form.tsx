type Props = {
  children: React.ReactNode
  className?: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onClick?: (e: React.MouseEvent<HTMLFormElement>) => void
}

export const Form = ({
  children,
  onSubmit,
  onClick
}: Props) => {
  return (
    <form 
      onSubmit={onSubmit}
      onClick={onClick}
      className='flex-1'
    >
      {children}
    </form>
  )
}
