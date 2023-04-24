import { Avatar } from '@/components/atoms/Avatar'

export const Header = () => {

  return (
    <header
      className='fixed top-0 flex items-center justify-between px-4 border-b border-b-zinc-800 bg-zinc-950 -800 h-16 w-full z-20'
    >
      <nav>
      </nav>
      <Avatar />
    </header>
  )
}
