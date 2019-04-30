import React from "react"
import renderer from "react-test-renderer"
import MainCreative from "../MainCreative"

describe("MainCreative", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<MainCreative />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
