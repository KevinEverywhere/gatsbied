import React from "react"
import renderer from "react-test-renderer"
import ExperimentalPage from "../experimental"

describe("ExperimentalPage", () => {
  Promise.all([
    import (store) from '../../services/store',
    import (assets) from '../../services/assets',
    import (entities) from '../../services/entities'
  ]).then((store) => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ExperimentalPage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
