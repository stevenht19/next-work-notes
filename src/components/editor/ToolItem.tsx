import { Editor, ChainedCommands } from '@tiptap/react'
import { IconButton } from '@/components/buttons/IconButton'
import { Props } from '@/components/buttons/types'

type ToolProps = Props & {
  editor: Editor
  tool: string
  level?: number
}

const ToolItem = ({ 
  tool,
  editor,
  icon,
  level,
  onClick
}: ToolProps) => {

  const isActive = level ? editor?.isActive('heading', { level }) : editor?.isActive(tool)

  return (
    <IconButton
      icon={icon}
      active={isActive}
      onClick={onClick}
    />
  )
}

export default ToolItem