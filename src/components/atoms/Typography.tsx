type Props = {
  color?: string
  children: React.ReactNode
}

export const Typography = ({ color, children }: Props) => {
  return (
    <p className={color ?? 'text-zinc-500'}>
      {children}
    </p>
  )
}

const Subtitle = ({ children }: Props) => (
  <h2 className='font-bold text-4xl my-3'>
    {children}
  </h2>
)

Typography.h2 = Subtitle