type Props = {
  children: React.ReactNode
}

export const Typography = ({ children }: Props) => {
  return (
    <p className='text-zinc-500'>
      {children}
    </p>
  )
}

const Subtitle = ({ children }: Props) => (
  <h2 className='font-bold text-4xl mt-3 mb-2'>
    {children}
  </h2>
)

Typography.h2 = Subtitle