import React from "react"
import renderer from "react-test-renderer"
import IndexPage from "../index"

describe("IndexPage", () => {
  Promise.all([
    import('../components/Layout'),
    import('../components/Header'),
    import('../components/Footer')
  ]).then([ Layout, Header, Footer]) => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<IndexPage />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})
