import { AiFillDelete } from 'react-icons/ai'
import { MdSettings } from 'react-icons/md'
import { Menu } from '@/components/atoms/Menu'
import { IconButton } from '@/components/buttons/IconButton'
import { Props } from '@/components/buttons/types'
import { useBoolean } from '@/hooks'

export const Settings = ({ onClick }: Props) => {

  const [open, setOpen] = useBoolean()

  return (
    <div>
      <IconButton
        icon={<MdSettings />}
        onClick={setOpen.toggle}
      />
      <Menu
        open={open}
        onClose={setOpen.off}
      >
        <Menu.Item onClick={onClick}>
          <AiFillDelete
            className='fill-white'
            size={19}
          />
          Delete Notes
        </Menu.Item>
      </Menu>
    </div>
  )
}
