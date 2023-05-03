import { useEffect, useRef } from 'react'

export const useScroll = <T>(dependencies: T) => {

  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }

  }, [dependencies])

  return listRef
}
