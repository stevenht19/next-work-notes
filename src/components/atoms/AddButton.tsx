import Link from 'next/link'
import { HiOutlinePlus } from 'react-icons/hi'

export const Button = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <Link href='/notes'>
      <button
        className='bg-zinc-900 transition-colors max-w-[14rem] text-zinc-500 p-2 w-full py-10 grid place-items-center rounded-md hover:bg-zinc-800 hover:text-zinc-400'
      >
        <HiOutlinePlus
          size={25}
          className='mb-1'
        />
        {children}
      </button>
    </Link>
  )
}
