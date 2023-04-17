import { Props } from './types'

export const IconButton = ({ icon, onClick }: Props) => {
  return (
    <button
      className='border border-zinc-800 grid place-items-center p-2.5 rounded-md'
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
