import { useUser } from '@supabase/auth-helpers-react'

export const Avatar = () => {
  const user = useUser()

  if (!user) return null

  return (
    <div className='cursor-pointer bg-yellow-500 font-medium grid place-items-center w-9 h-9 rounded-full'>
      {user.email?.charAt(0).toUpperCase()}
    </div>
  )
}
