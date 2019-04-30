import React from "react"
import renderer from "react-test-renderer"
import ItemChooser from "../ItemChooser"

describe("ItemChooser", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ItemChooser item="Work" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
