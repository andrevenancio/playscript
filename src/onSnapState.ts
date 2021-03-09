import emitter from "./emitter"

const onSnapState = (
  keys: string[],
  onStateChange: (props: Record<string, any>) => void
) => {
  // subscribe for changes on the provided keys
  if (keys && Array.isArray(keys)) {
    for (let i = 0; i < keys.length; i++) {
      emitter.on(keys[i], onStateChange)
    }
  }

  // returns a unsubscribe function
  return () => {
    if (keys && Array.isArray(keys)) {
      for (let i = 0; i < keys.length; i++) {
        emitter.off(keys[i], onStateChange)
      }
    }
  }
}
export default onSnapState
