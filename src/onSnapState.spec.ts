import State from "./State"
import onSnapState from "./onSnapState"

describe("onSnapState", () => {
  it("test callback", () => {
    const callback = jest.fn()

    onSnapState(["test"], callback)
    State.test = "a simple test"

    expect(callback).toBeCalled()
  })

  it("test unsubscribe", () => {
    const callback = jest.fn()
    const unsubscribe = onSnapState(["test", "lol"], callback)

    unsubscribe()

    State.test = "another test"
    expect(callback).not.toBeCalled()
  })
})
