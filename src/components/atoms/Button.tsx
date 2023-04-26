import { Spin } from './Spin'

type Props = {
  type?: 'button' | 'submit'
  loading?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
  color?: string
  onClick?: () => void
}

export const Button = ({ 
  type, 
  icon, 
  loading,
  disabled,
  color,
  children,
  onClick
}: Props) => {

  const withIcon = icon ? ' gap-3 w-fit min-w-[7.5rem]' : ''
  const disabledClassName = disabled || loading ? 'bg-white/40 cursor-not-allowed' : `${color || 'bg-white'} cursor-pointer`
  const className = 'justify-center font-medium flex py-2 px-7 rounded-md text-neutral-900 mt-4 mb-3'

  return (
    <button
      type={type || 'button'}
      disabled={disabled || loading}
      className={`${withIcon} ${disabledClassName} ${className}`}
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