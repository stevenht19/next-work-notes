export type Props = {
  loading?: boolean
  active?: boolean
  icon?: React.ReactNode
  title?: string
  open?: boolean
  type?: 'button' | 'submit'
  children?: React.ReactNode
  onClick?: () => void
}