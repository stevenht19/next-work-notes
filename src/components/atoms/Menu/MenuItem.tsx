import { Props as ButtonProps } from '@/components/buttons/types'

type Props = ButtonProps & {
  w?: string
}

export const MenuItem = ({ children, w, onClick }: Props) => {
  return (
    <button
      type='button'
      className={`flex items-center gap-3 font-medium my-2 px-3.5 py-2 text-zinc-300 hover:bg-neutral-900 ${w || 'w-full'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}