import { Props } from './types'

export const Grid = <T, >({ children, items, renderItem }: Props<T>) => {
  return (
    <ul className='grid grid-cols-3 gap-6'>
      {
        children ?? items!.map(renderItem!)
      }
    </ul>
  )
}
