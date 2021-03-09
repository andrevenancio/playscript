import React, { useEffect, useState } from "@storybook/client-api"
import { storiesOf } from "@storybook/react"
// import { State, onSnapState } from "../src"

storiesOf("Vanilla", module).add("Example", () => {
  const [log, setLog] = useState("No state defined yet")

  const updateUserDisplayMessage = ({ key, value }: Record<string, any>) => {
    setLog(`key ${key} has value of ${value}`)
  }

  const handleClick = () => {
    // State.test = Math.random()
  }

  useEffect(() => {
    // 1) update this react demo by showing the initial value of test
    // this should be undefined because State.test is not defined
    updateUserDisplayMessage({})

    // 2) define initial state
    // State.test = 0

    // 3) add callback for when state changes, by specifying to which keys to listen to
    // onSnapState(["test"], updateUserDisplayMessage)
  }, [])

  return (
    <>
      <div>{log}</div>
      <button onClick={handleClick}>change state</button>
    </>
  )
})
