import React from "react"
import renderer from "react-test-renderer"
import Entities from "../Entities"

describe("Entities", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Entities />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
