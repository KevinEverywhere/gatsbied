import React from "react"
import renderer from "react-test-renderer"
import WorkPage from "../work"

describe("WorkPage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<WorkPage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
