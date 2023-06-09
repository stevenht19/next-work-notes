import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useBoolean } from '@/hooks'
import { Menu } from './Menu'

export const Avatar = () => {

  const [open, setOpen] = useBoolean()
  const [loggingOut, setLoggingOut] = useBoolean()

  const router = useRouter()
  const supabase = useSupabaseClient()
  const user = useUser()

  const signOut = async () => {
    setLoggingOut.on()
    await supabase.auth.signOut()

    router.push('/login')
  }

  if (!user) return null

  return (
    <div>
      <button
        type='button'
        data-active={open}
        onClick={setOpen.toggle}
        className='shadow-lg shadow-yellow-300/20 select-none cursor-pointer bg-yellow-500 font-medium grid place-items-center w-9 h-9 rounded-full animate-fadeIn'
      >
        {user?.email?.charAt(0).toUpperCase()}
      </button>
      <Menu open={open} onClose={setOpen.off}>
        <div className='text-zinc-400 pt-4 px-4 whitespace-nowrap'>
          {user?.email}
        </div>
        <Menu.Item onClick={signOut} w={loggingOut ? 'min-w-[12rem]' : 'w-full'}>
          <AiOutlinePoweroff size={17} />
          {
            loggingOut ? 'Logging out...' : 'Sign out'
          }
        </Menu.Item>
      </Menu>
    </div>
  )
}
