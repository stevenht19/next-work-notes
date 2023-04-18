import { Spin } from './Spin'

type Props = {
  type?: 'button' | 'submit'
  loading?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ 
  type, 
  icon, 
  loading, 
  children,
  onClick
}: Props) => {

  const withIcon = icon ? ' gap-3 w-fit min-w-[7.5rem] px-4' : ''
  const disabledClassName = loading ? 'bg-white/40 cursor-not-allowed' : 'bg-white cursor-pointer'

  return (
    <button
      type={type || 'button'}
      disabled={loading} 
      className={`${withIcon} ${disabledClassName} justify-center flex py-2 rounded-md text-neutral-900 mt-3 mb-3`}
      {...(onClick && { onClick })}
    >
      {
        loading ? (
          <Spin />
        ) : (
          <>
            {icon}
            {children}
          </>
        )
      }
    </button>
  )
}
