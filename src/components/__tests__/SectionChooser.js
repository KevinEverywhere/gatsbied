import React from "react"
import renderer from "react-test-renderer"
import SectionChooser from "../SectionChooser"

describe("SectionChooser", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SectionChooser />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
