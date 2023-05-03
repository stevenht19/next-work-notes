import { Profile } from '@/models/Profile'
import { profileService } from '@/services/profiles/profile.service'
import { useEffect, useState } from 'react'

type ProfileWithPartialData = Pick<Profile, 'id' | 'username'>


export const useProfiles = () => {

  const [profiles, setProfiles] = useState<ProfileWithPartialData[]>([])
  const [profile, setProfile] = useState<ProfileWithPartialData | null>()

  useEffect(() => {
    const getProfiles = async () => {
      const data = await profileService
        .findProfiles()
      setProfiles(data ?? [])
    }

    getProfiles()
  }, [])

  const onSelect = (profile: ProfileWithPartialData) => {
    setProfile(profile)
  }

  const onClear = () => setProfile(null)

  return [
    profiles,
    profile,
    onSelect,
    onClear
  ] as const
}
