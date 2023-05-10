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

  const disabledClassName = disabled || loading ? `bg-white/40 cursor-not-allowed` : `${color || 'bg-white'} cursor-pointer`
  const withIcon = icon && !loading ? 'gap-4 w-fit pl-4 pr-8 items-center' : 'justify-center px-7'
  const className = 'flex py-2 text-md font-normal rounded-md text-neutral-900 mt-2 min-w-[7.5rem]'

  return (
    <button
      type={type || 'button'}
      disabled={disabled || loading}
      className={`${withIcon} ${disabledClassName} ${className}`}
      {...(onClick && { onClick })}
    >
      {
        loading ? (
          <Spin color={Boolean(color)} />
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