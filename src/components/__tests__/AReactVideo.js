import React from "react"
import renderer from "react-test-renderer"
import AReactVideo from "../AReactVideo"

describe("AReactVideo", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<AReactVideo />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
