import { AiOutlineUser } from 'react-icons/ai'
import { Grid } from '@/components/atoms/Grid'
import { Card } from '@/components/atoms/Card'
import { useProfiles } from './hooks/useProfiles'
import DiaryReport from '@/components/modals/DiaryReport'
import { UserReport } from './UserReport'

export const Workgroup = () => {
  const [profiles, profile, onSelect, onClear] = useProfiles()

  return (
    <>
      {
        Boolean(profile) && (
          <DiaryReport
            title={`${profile?.username}'s`}
            onClose={onClear}
          >
            <UserReport userId={profile!.id} />
          </DiaryReport>
        )
      }
      <Grid
        items={profiles}
        renderItem={(props) => (
          <Card
            id={props.id}
            title={`${props.username}`}
            onClick={() => onSelect(props)}
            created_at={new Date().toString()}
            icon={
              <AiOutlineUser
                size={22}
                className='mb-1 fill-neutral-300' />
            }
          />
        )}
      />
    </>
  )
}
