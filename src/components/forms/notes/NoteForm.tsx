import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import { useRouter } from 'next/router'
import { RiBold, RiItalic, RiH2 } from 'react-icons/ri'
import { useEditor, EditorContent } from '@tiptap/react'
import { useBoolean } from '@/hooks'
import { Button } from '@/components/atoms/Button'
import { Toolbar } from '@/components/editor/Toolbar'
import { useRef } from 'react'
import { Props } from './types'
import { Input } from './Input'
import style from './style.module.css'

const config = {
  editorProps: {
    attributes: {
      class: 'h-full border-none p-2 outline-none'
    }
  },
  extensions: [
    StarterKit.configure({
      heading: {
        HTMLAttributes: {
          class: 'text-3xl font-bold mb-2.5',
        }
      }
    }),
    Placeholder.configure({
      emptyEditorClass: style.editor_placeholder,
      placeholder: 'Type your notes here'
    }),
    Link.configure({
      HTMLAttributes: {
        class: 'text-blue-500',
        rel: 'noopener noreferrer',
        target: null,
      },
    }),
    Image.configure({
      inline: true,
      allowBase64: true
    })
  ]
}

export default function NoteForm({ initialValues, onSubmit }: Props) {
  const router = useRouter()
  const ref = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    ...config,
    content: initialValues?.content
  })

  const [loading, setLoading] = useBoolean()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const value = ref.current?.value
      setLoading.on()

      onSubmit({
        title: value?.length ? value : 'My Notes Title',
        content: editor?.getHTML()
      })

      router.push('/')

    } catch (err) {
      setLoading.off()
    }
  }

  return (
    <form className='flex flex-col h-full' onSubmit={handleSubmit}>
      <Input ref={ref} value={initialValues?.title} />
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
      <div className='flex pb-6 gap-6'>
        <Button>
          Generate Report
        </Button>
        <Button
          loading={loading}
          type='submit'
        >
          Save
        </Button>
      </div>
    </form>
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