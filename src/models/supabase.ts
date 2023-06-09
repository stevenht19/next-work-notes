export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          content: string
          created_at: string | null
          id: number
          title: string
          user_id: string | null
        }
        Insert: {
          content?: string
          created_at?: string | null
          id?: number
          title: string
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: number
          title?: string
          user_id?: string | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          job: string | null
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          job?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          job?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
      reports: {
        Row: {
          activities: string[]
          created_at: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          activities: string[]
          created_at?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          activities?: string[]
          created_at?: string | null
          id?: number
          user_id?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
