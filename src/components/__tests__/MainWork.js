import React from "react"
import renderer from "react-test-renderer"
import MainWork from "../MainWork"

describe("MainWork", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<MainWork />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
