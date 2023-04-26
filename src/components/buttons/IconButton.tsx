import { Props } from './types'
import style from './style.module.css'

export const IconButton = ({ icon, open, active, onClick }: Props) => {

  const activeClassName = active ?
    'border-blue-700' : 
    'border-zinc-800' 

  return (
    <button
      type='button'
      className={`${style.iconbutton} border group grid transition-colors place-items-center p-2.5 rounded-md cursor-pointer ${activeClassName}`}
      onClick={onClick}
      data-active={Boolean(open)}
    >
      {icon}
    </button>
  )
}
