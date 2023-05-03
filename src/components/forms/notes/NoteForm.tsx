import { useRef } from 'react'
import { useRouter } from 'next/router'
import { RiBold, RiItalic, RiH2 } from 'react-icons/ri'
import { useEditor, EditorContent } from '@tiptap/react'
import { useBoolean } from '@/hooks'
import { noteService } from '@/services/notes/notes.service'
import { AlertDialog } from '@/components/modals/AlertDialog'
import { Toolbar } from '@/components/editor/Toolbar'
import { config } from '@/components/editor/config'
import { Input } from './Input'
import { Footer } from './Footer'
import { Settings } from './Settings'
import { Props } from './types'

export default function NoteForm({ initialValues, onSubmit }: Props) {

  const router = useRouter()
  const ref = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    ...config,
    content: initialValues?.content
  })

  const [modalOpen, setModalOpen] = useBoolean()
  const [loading, setLoading] = useBoolean()
  const [deleting, setDeleting] = useBoolean()

  const onDelete = async () => {
    setDeleting.on()
    await noteService.deleteNote(initialValues!.id!)
    router.push('/')
  }

  const handleSubmit = () => {
    const value = ref.current?.value

    setLoading.on()

    onSubmit({
      title: value?.length ? value : 'Untitled',
      content: editor?.getHTML()
    })

    router.push('/')

  }

  return (
    <div className='flex flex-col h-full'>
      <form className='flex flex-col flex-1'>
        <div className='flex justify-between items-center'>
          <Input
            ref={ref}
            value={initialValues?.title}
          />
          {
            modalOpen && (
              <AlertDialog
                loading={deleting}
                onClose={setModalOpen.off}
                action={onDelete}
                title='Delete Notes'
                confirmButton='Delete'
                color='text-white bg-red-500'
              >
                {`Are you sure? You can't undo this action afterwards.`}
              </AlertDialog>
            )
          }
          {
            initialValues ? (
              <Settings onClick={setModalOpen.on} />
            ) : null
          }
        </div>
        <Toolbar>
          <Toolbar.Item
            tool='bold'
            icon={<RiBold />}
            editor={editor!}
            onClick={() => editor?.chain().focus().toggleBold().run()}
          />
          <Toolbar.Item
            tool='italic'
            icon={<RiItalic />}
            editor={editor!}
            onClick={() => editor?.chain().focus().toggleItalic().run()}
          />
          <Toolbar.Item
            tool='heading'
            icon={<RiH2 />}
            level={2}
            editor={editor!}
            onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
          />
        </Toolbar>
        <div className='flex-1 relative'>
          <EditorContent
            editor={editor}
            spellCheck={false}
            className='h-full leading-8'
          />
        </div>
      </form>
      <Footer
        editor={editor}
        loading={loading}
        onSave={handleSubmit}
      />
    </div>
  )
}
