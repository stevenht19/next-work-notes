import { RiStickyNoteLine } from 'react-icons/ri'

export const Note = () => {
  return (
    <div className='rounded-md bg-zinc-900/90 p-4'>
      <RiStickyNoteLine size={20} className='mb-1 fill-neutral-300' />
      <h2 className='font-bold text-sm mb-1 text-neutral-300'>
        No reason note
      </h2>
      <span className='text-zinc-600 text-xs flex justify-end'>
        12/02/23
      </span>
    </div>
  )
}
