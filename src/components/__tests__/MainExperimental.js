import React from "react"
import renderer from "react-test-renderer"
import MainExperimental from "../MainExperimental"

describe("MainExperimental", () => {
  Promise.all([
    import('../Assets'),
    import('../Cameras'),
    import('../Entities')
  ]).then([ Assets, Cameras, Entities]) => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<MainExperimental />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
