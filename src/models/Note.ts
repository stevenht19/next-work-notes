import { Database } from './supabase'

export type Note = Database['public']['Tables']['notes']['Row']
