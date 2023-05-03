import { Database } from '@/models/supabase';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

class Profile {
  private supabase = createBrowserSupabaseClient<Database>()

  async findProfiles() {
    return (await this.supabase.from('profiles').select('id, username')).data ?? []
  }

}

export const profileService = new Profile()