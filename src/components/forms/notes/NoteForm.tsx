import { RxCheck } from 'react-icons/rx'
import { AiFillEdit } from 'react-icons/ai'
import { CiSaveDown2 } from 'react-icons/ci'
import { MdCreateNewFolder } from 'react-icons/md'
import { useBoolean } from '@/hooks'
import { useForm } from '@/hooks/useForm'
import { Typography } from '@/components/atoms/Typography'
import { IconButton } from '@/components/buttons/IconButton'
import { Textarea } from './Textarea'
import { Input } from './Input'
import { Props, NoteValues } from './types'
import { Button } from '@/components/atoms/Button'
import { useToast } from '@/hooks/useToast'

export default function NoteForm({ initialValues, onSubmit }: Props) {
  const [open, setOpen] = useBoolean()
  const { onOpen } = useToast()

  const {
    formValues,
    onChange,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<NoteValues>(
    initialValues ?? {
      title: 'Notes Reason Title',
      content: '',
    }
  )

  const onOpenToast = () => {
    onOpen({
      type: 'success',
      message: 'Saved Successfully'
    })
  }

  return (
    <div className='flex flex-col h-full'>
      <header className='flex items-center gap-5'>
        {
          open ? (
            <Input
              value={formValues!.title!}
              name='title'
              placeholder={'Type to add a title'}
              onChange={onChange}
            />
          ) : (
            <Typography.h2>
              {formValues.title}
            </Typography.h2>
          )
        }
        <IconButton
          icon={
            open ? (
              <RxCheck />
            ) : (
              <AiFillEdit />
            )
          }
          onClick={setOpen.toggle}
        />
      </header>
      <form
        className='flex flex-1 p-2 relative text-neutral-200'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Textarea
          value={formValues!.content!}
          name={'content'}
          onChange={onChange}
          placeholder='Type to add a note'
        />
      </form>
      <footer className='flex gap-6 pb-8'>
        <Button
          onClick={onOpenToast}
          icon={<CiSaveDown2 size={23} />}
        >
          Generate a Report
        </Button>
        <Button
          type='submit'
          loading={isSubmitting}
          icon={<CiSaveDown2 size={23} />}
        >
          Save
        </Button>
      </footer>
    </div>
  )
}
