import Link from 'next/link'
import { Props as ButtonProps } from './types'
import { HiOutlinePlus } from 'react-icons/hi'

type Props = ButtonProps & {
  path: string
}

const className = 'max-w-[12rem] w-full text-neutral-500 bg-zinc-900/90 rounded-md transition-colors hover:bg-zinc-800 hover:text-zinc-400'

export const Button = ({ path, children }: Props) => {
  return (
    <Link
      href={path}
      className={className}
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
