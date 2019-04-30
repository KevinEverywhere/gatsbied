import React from "react"
import renderer from "react-test-renderer"
import SectionChosen from "../SectionChosen"

describe("SectionChosen", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SectionChosen />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
