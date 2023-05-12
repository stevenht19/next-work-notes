import { Profile } from '@/models/Profile'

export type ActivityCalendar = {
  count: number
  level: Level
  date: string
}

export type Level = 0 | 1 | 2 | 3 | 4

export type ProfileWithPartialData = Pick<Profile, 'id' | 'username' | 'job'>