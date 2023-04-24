import { useRouter } from 'next/router'
import { useBoolean } from '@/hooks'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { AiOutlinePoweroff } from 'react-icons/ai'

export const Avatar = () => {

  const router = useRouter()
  const supabase = useSupabaseClient()
  const user = useUser()
  const [open, setOpen] = useBoolean()

  if (!user) return null

  const signOut = async () => {
    await supabase.auth.signOut()
    router.push('/auth')
  }

  return (
    <div className='relative'>
      <button
        onClick={setOpen.toggle}
        className='select-none cursor-pointer bg-yellow-500 font-medium grid place-items-center w-9 h-9 rounded-full'
      >
        {user.email?.charAt(0).toUpperCase()}
      </button>
      {
        open && (
          <div
            className='shadow-lg top-full m-2 rounded-md bg-neutral-950 border border-neutral-700 right-0 absolute w-48'
          >
            <div className='text-zinc-400 pt-4 px-4'>
              {user.email}
            </div>
            <button
              className='flex items-center gap-3 font-medium w-full my-2 px-3 py-2 text-zinc-300 hover:bg-neutral-900'
              onClick={signOut}
            >
              <AiOutlinePoweroff size={17} />
              Sign out
            </button>
          </div>
        )
      }
    </div>
  )
}
