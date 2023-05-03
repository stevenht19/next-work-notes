import { Typography } from '../Typography'
import { Props } from './types'

const ModalBody = ({ children }: Props) => {
  return (
    <div className='px-6'>
      <Typography>
        {children}
      </Typography>
    </div>
  )
}

export default ModalBody