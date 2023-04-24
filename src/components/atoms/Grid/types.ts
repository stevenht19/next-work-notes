export type Props<T> = {
  items: T[]
  renderItem: (props: T, i: number) => React.ReactNode
}