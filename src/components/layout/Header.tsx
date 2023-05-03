import Link from 'next/link'
import { Avatar } from '@/components/atoms/Avatar'
import { GiSlumberingSanctuary } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { Routes } from '@/utils/routes'

export const Header = () => {

  const { pathname } = useRouter()

  const isInAuthPage = pathname === Routes.SIGN_UP || pathname === Routes.LOGIN

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
      {
        !isInAuthPage && (
          <Avatar />
        )
      }
    </header>
  )
}
