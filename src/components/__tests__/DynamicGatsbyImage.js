import React from "react"
import renderer from "react-test-renderer"
import DynamicGatsbyImage from "../DynamicGatsbyImage"

describe("DynamicGatsbyImage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<DynamicGatsbyImage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
