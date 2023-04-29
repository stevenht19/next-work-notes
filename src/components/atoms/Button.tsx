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

  const withIcon = icon ? 'gap-4 w-fit pl-4 pr-8 items-center' : 'justify-center px-7 '
  const disabledClassName = disabled || loading ? `bg-white/40 cursor-not-allowed justify-center` : `${color || 'bg-white'} cursor-pointer`
  const className = 'flex py-2 text-md font-normal rounded-md text-neutral-900 mt-4 min-w-[7.5rem]'

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