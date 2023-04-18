import { useCallback, useState } from 'react'

const useBoolean = (initialBoolean = false) => {
  const [boolean, setState] = useState<boolean>(initialBoolean)

  const setBoolean = useCallback(() => ({
    on: () => setState(true),
    off: () => setState(false),
    toggle: () => setState(b => !b)
  }), [])

  const onChangeBoolean = setBoolean()

  return [
    boolean,
    onChangeBoolean
  ] as const
}

export default useBoolean