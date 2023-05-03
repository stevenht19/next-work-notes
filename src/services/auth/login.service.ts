import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Credentials } from './utils'

export const login = async (credentials: Credentials) => {
  try {
    const supabase = createBrowserSupabaseClient()

    const { error } = await supabase.auth.signInWithPassword(credentials)
  
    if (error) {
      throw new Error(error.message)
    }

  } catch (err) {
    if (err instanceof Error)
      throw new Error(err.message)
  }
}