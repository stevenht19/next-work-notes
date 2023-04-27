import { Props as ModalProps } from '@/components/atoms/Modal/types'

export type Props = {
  size?: string
  children: ModalProps['children']
  onClose: ModalProps['onClose']
}