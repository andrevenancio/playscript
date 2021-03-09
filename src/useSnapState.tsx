import { useState, useEffect } from "react"
import emitter from "./emitter"
import State from "./State"

function useSnapState(keys: string[]) {
  const current = Object.assign({}, State)

  const matching: Record<string, any> = {}
  keys.forEach((prop) => {
    matching[prop] = current[prop]
  })

  const [state, setState] = useState({ ...matching })

  function handleStateChange({ key, value }: Record<string, any>) {
    setState(
      Object.assign(matching, {
        [key]: value,
      })
    )
  }

  useEffect(() => {
    if (keys && Array.isArray(keys)) {
      for (let i = 0; i < keys.length; i++) {
        emitter.on(keys[i], handleStateChange)
      }
    }

    return () => {
      if (keys && Array.isArray(keys)) {
        for (let i = 0; i < keys.length; i++) {
          emitter.off(keys[i], handleStateChange)
        }
      }
    }
  })

  return state
}

export default useSnapState
