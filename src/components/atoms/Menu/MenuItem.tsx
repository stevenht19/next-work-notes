import { Props } from '@/components/buttons/types'

export const MenuItem = ({ children, onClick }: Props) => {
  return (
    <button
      type='button'
      className='flex items-center gap-3 font-medium my-2 px-3.5 py-2 text-zinc-300 hover:bg-neutral-900 w-44'
      onClick={onClick}
    >
      {children}
    </button>
  )
}