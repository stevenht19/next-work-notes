import Link from 'next/link'
import { HiOutlinePlus } from 'react-icons/hi'

type Props = {
  path: string
  children: React.ReactNode
}

export const Button = ({ path, children }: Props) => {
  return (
    <Link
      href={path}
      className='max-w-[12rem] w-full text-neutral-500 bg-zinc-900/90 rounded-md transition-colors hover:bg-zinc-800 hover:text-zinc-400'
    >
      <button
        className='grid w-full place-items-center py-8 text-sm font-medium'
      >
        <HiOutlinePlus
          size={25}
          className='mb-1.5'
        />
        {children}
      </button>
    </Link>
  )
}
