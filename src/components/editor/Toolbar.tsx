import ToolItem from './ToolItem'

export const Toolbar = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className='flex gap-4 py-4'>
      {children}
    </div>
  )
}

Toolbar.Item = ToolItem