import { useEffect, useState } from 'react'
import { useReports } from '@/hooks/useReports'
import { Profile } from '@/models/Profile'
import { profileService } from '@/services/profiles/profile.service'

export type ProfileWithPartialData = Pick<Profile, 'id' | 'username' | 'job'>

export const useProfiles = () => {
  const { team, setTeam } = useReports()
  const [profile, setProfile] = useState<ProfileWithPartialData | null>(null)

  const teamLength = team.length

  useEffect(() => {

    if (teamLength) return

    const getProfiles = async () => {
      const data = await profileService
        .findProfiles()

      setTeam(data ?? [])
    }

    getProfiles()
  }, [setTeam, teamLength])

  const onSelect = (profile: ProfileWithPartialData) => {
    setProfile(profile)
  }

  const onClear = () => setProfile(null)

  return [
    team,
    profile,
    onSelect,
    onClear
  ] as const
}
