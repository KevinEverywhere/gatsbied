import React from "react"
import renderer from "react-test-renderer"
import GyroController from "../GyroController"

describe("GyroController", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<GyroController />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
