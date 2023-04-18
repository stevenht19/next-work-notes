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
            className='shadow-lg top-full m-1 rounded-md py-2 bg-neutral-800 right-0 absolute w-32'
          >
            <button
              className='flex w-full items-center justify-center gap-3 font-medium'
              onClick={signOut}
            >
              <AiOutlinePoweroff size={18} />
              Sign out
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Avatar