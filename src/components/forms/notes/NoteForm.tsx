import { Props } from './types'
import { useBoolean } from '@/hooks'
import { useForm } from '@/hooks/useForm'
import { NoteValues } from './types'
import { Typography } from '@/components/atoms/Typography'
import { IconButton } from '@/components/buttons/IconButton'
import { FloatingButton } from '@/components/buttons/FloatingButton'
import { RxCheck } from 'react-icons/rx'
import { AiFillEdit } from 'react-icons/ai'
import { IoIosSave } from 'react-icons/io'
import { Textarea } from './Textarea'
import { Input } from './Input'

export default function NoteForm({ initialValues, onSubmit }: Props) {
  const [open, setOpen] = useBoolean()

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
        className='flex flex-1 p-2 relative'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Textarea
          value={formValues!.content!}
          name={'content'}
          onChange={onChange}
          placeholder='Type to add a note'
        />
        <FloatingButton
          loading={isSubmitting}
          type='submit'
          icon={
            <IoIosSave size={23} />
          }
        >
          Save
        </FloatingButton>
      </form>
    </div>
  )
}
