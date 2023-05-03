import { Grid } from '@/components/atoms/Grid'
import { Card } from '@/components/atoms/Card'
import { DailyReport } from '@/components/modals/DailyReport'
import { useProfiles } from './hooks/useProfiles'
import { UserReport } from './UserReport'
import { Avatar } from './Avatar'

export const Workgroup = () => {
  const [profiles, profile, onSelect, onClear] = useProfiles()

  return (
    <>
      {
        Boolean(profile) && (
          <DailyReport
            onClose={onClear}
            title={`${profile!.username}'s`}
          >
            <UserReport userId={profile!.id} />
          </DailyReport>
        )
      }
      <Grid
        items={profiles}
        renderItem={(props) => (
          <Card
            id={props.id}
            title={`${props.username}`}
            onClick={() => onSelect(props)}
            avatar={<Avatar username={props.username!} />}
          />
        )}
      />
    </>
  )
}
