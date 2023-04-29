import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Credentials } from './utils'

export const signUp = async (credentials: Credentials) => {
  console.log(credentials)

  try {

    const supabase = createBrowserSupabaseClient()
    const { error } = await supabase.auth.signUp({
      ...credentials,
      options: {
        data: {
          username: credentials.username
        }
      }
    })

    if (error) {
      throw new Error(error.message)
    }

  } catch (err) {
    if (err instanceof Error)
      throw new Error(err.message)
  }
}