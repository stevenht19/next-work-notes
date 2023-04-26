import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import style from './style.module.css'

export const config = {
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