export type Props = {
  loading?: boolean
  active?: boolean
  icon?: React.ReactNode
  type?: 'button' | 'submit'
  children?: React.ReactNode
  onClick?: () => void
}