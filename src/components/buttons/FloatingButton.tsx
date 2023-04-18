import { Spin } from '../atoms/Spin'
import { Props } from './types'

export const FloatingButton = ({ type, icon, loading, children }: Props) => {
  const withIcon = icon ? 'flex gap-3 items-center' : ''
  const loadingClassName = loading ? 'bg-white/70' : 'bg-white'

  return (
    <button
      type={type ?? 'button'}
      disabled={loading}
      className={`${loadingClassName} font-medium px-6 py-3 rounded-md text-gray-900 ${withIcon}`}
    >
      {(loading) ? <Spin /> : icon}
      {children}
    </button>
  )
}
