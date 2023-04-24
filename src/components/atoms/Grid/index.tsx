import { Props } from './types'

export const Grid = <T, >({ items, renderItem }: Props<T>) => {
  return (
    <ul className='grid grid-cols-3 gap-6'>
      {
        items.map(renderItem)
      }
    </ul>
  )
}
