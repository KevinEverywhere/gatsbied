import React from "react"
import renderer from "react-test-renderer"
import SmallHeader from "../SmallHeader"

describe("SmallHeader", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SmallHeader />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
