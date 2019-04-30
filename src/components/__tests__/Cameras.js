import React from "react"
import renderer from "react-test-renderer"
import Cameras from "../Cameras"

describe("Cameras", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Cameras />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
