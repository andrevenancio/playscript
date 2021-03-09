import React, { useEffect } from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import State from "./State"
import useSnapState from "./useSnapState"

const Mock = () => {
  const state = useSnapState(["theme"])

  useEffect(() => {
    State.theme = "dark"
  }, [])

  return <p>{state.theme}</p>
}

describe("onSnapState", () => {
  it("renders without crashing", () => {
    render(<Mock />)
  })

  it("renders on State change", () => {
    const { queryByText } = render(<Mock />)
    expect(queryByText("dark")).toBeInTheDocument()
  })
})
