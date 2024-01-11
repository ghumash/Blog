import { useEffect } from 'react'

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (!['storybook', 'jest'].includes(__PROJECT__)) {
      callback()
    }
    // eslint-disable-next-line
  }, [])
}
