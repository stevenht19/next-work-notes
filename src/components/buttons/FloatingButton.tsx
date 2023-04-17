import { Props } from './types'

export const FloatingButton = ({ type, icon, loading, children }: Props) => {
  const withIcon = icon ? 'flex gap-3 items-center' : ''
  const loadingClassName = loading ? 'bg-white/70' : 'bg-white'

  return (
    <button
      type={type ?? 'button'}
      disabled={loading}
      className={`${loadingClassName} font-medium absolute px-6 py-3 rounded-full bottom-10 right-10 text-gray-900 ${withIcon}`}
    >
      {icon && icon}
      {children}
    </button>
  )
}
