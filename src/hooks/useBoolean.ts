import { useState } from 'react'

const useBoolean = (initialBoolean = false) => {
  const [boolean, setState] = useState<boolean>(initialBoolean)

  const setBoolean = {
    on: () => setState(() => true),
    off: () => setState(() => false),
    toggle: () => setState((b) => !b)
  }

  return [
    boolean,
    setBoolean
  ] as const
}

export default useBoolean