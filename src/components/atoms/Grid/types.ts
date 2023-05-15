export type Props<T> = {
  items?: T[]
  children?: React.ReactNode
  renderItem?: (props: T, i: number) => React.ReactNode
}
