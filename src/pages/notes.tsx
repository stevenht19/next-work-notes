import { Form } from '@/components/atoms/Form'
import { Typography } from '@/components/atoms/Typography'
import { Input, Props } from '@/components/atoms/Textarea'
import { FloatingButton } from '@/components/buttons/FloatingButton'
import { IoIosSave } from 'react-icons/io'
import { useState } from 'react'

export default function Notes() {
  const [notes, setNotes] = useState<string[]>([])
  const [value, setValue] = useState<string>('')

  const onChange: Props['onChange'] = (e) => {
    setValue(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!value.trim().length) return

    setNotes(notes => {
      return notes.concat(value)
    })

    setValue('')
  }

  return (
    <div className='flex flex-col h-full'>
      <Typography.h2>
        Quick Notes
      </Typography.h2>
      {
        Boolean(notes.length) ? (
          <ul className='flex flex-col gap-1 list-disc pl-8 py-2 text-zinc-100'>
            {
              notes.map((note, i) => (
                <li key={i}>
                  {note}
                </li>
              ))
            }
          </ul>
        ) : null
      }
      <Form onSubmit={onSubmit}>
        <Input
          value={value}
          onChange={onChange}
          placeholder='Type to add a note'
        />
      </Form>
      <FloatingButton
        icon={<IoIosSave size={23} />}
      >
        Save
      </FloatingButton>
    </div>
  )
}
