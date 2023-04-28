import { Database } from './supabase'

export type Report = Database['public']['Tables']['reports']['Row']
export type CreateReport = Database['public']['Tables']['reports']['Insert']
export type UpdateReport = Database['public']['Tables']['reports']['Update']
