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
            avatar={
              <div className='bg-white uppercase text-zinc-950 w-8 h-8 font-medium mb-2 rounded-full grid place-content-center'>
                Hacer commit fix get reports
                {props.username?.at(0)}
              </div>
            }
          />
        )}
      />
    </>
  )
}
