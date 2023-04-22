import StarterKit from '@tiptap/starter-kit'
import { useEditor, EditorContent } from '@tiptap/react'
import { RiBold, RiItalic, RiH2 } from 'react-icons/ri'
import { Toolbar } from '@/components/editor/Toolbar'
import { Props } from './types'
import { Input } from './Input'

export default function NoteForm({ initialValues, onSubmit }: Props) {

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'h-full border-none p-2 outline-none'
      }
    },
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: 'text-2xl font-bold',
          }
        }
      }),
    ]
  })

  return (
    <div className='flex flex-col h-full'>
      <Input />
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
      <EditorContent
        editor={editor}
        spellCheck={false}
        autoFocus={false}
        className='flex-1'
      />
    </div>
  )
}


/*
<form onSubmit={handleSubmit(onSubmit)} className='h-full flex flex-col justify-between'>
        <div className='flex flex-1 p-2 relative text-neutral-200'>
        </div>
        <footer className='flex gap-6 pb-8'>
          <Button
            onClick={onOpenToast}
            icon={<CiSaveDown2 size={23} />}
          >
            Report
          </Button>
          <Button
            type='submit'
            loading={isSubmitting}
            icon={<CiSaveDown2 size={23} />}
          >
            Save
          </Button>
        </footer>
      </form>

*/