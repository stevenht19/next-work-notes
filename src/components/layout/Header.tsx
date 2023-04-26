import { Avatar } from '@/components/atoms/Avatar'
import { GiSlumberingSanctuary } from 'react-icons/gi'
import Link from 'next/link'

export const Header = () => {

  return (
    <header
      className='fixed top-0 flex items-center justify-between px-5 border-b border-b-zinc-800 bg-zinc-950 -800 h-16 w-full z-20'
    >
      <Link href='/'>
        <GiSlumberingSanctuary
          size={30}
          className='fill-zinc-100' 
        />
      </Link>
      <Avatar />
    </header>
  )
}
