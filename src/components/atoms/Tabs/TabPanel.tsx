import { Props } from './Tab'

const TabPanel = ({ index, value, children }: Props) => {
  if (index !== value) return null

  return (
    <div className='py-8 px-2'>
      {children}
    </div>
  )
}

export default TabPanel