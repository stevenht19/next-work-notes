import { Props } from './types'

export const IconButton = ({ icon, active, onClick }: Props) => {

  const activeClassName = active ? 'border-blue-600' : 'border-neutral-800' 

  return (
    <div
      className={`border grid transition-colors place-items-center p-2.5 rounded-md cursor-pointer ${activeClassName}`}
      onClick={onClick}
    >
      {icon}
    </div>
  )
}
