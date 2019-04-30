import React from "react"
import renderer from "react-test-renderer"
import ContactOopsPage from "../contactOops"

describe("ContactOopsPage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ContactOopsPage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
/**
<Layout location={this.props.location}>
  <div className={`body ${this.state.loading}`}>
    <div id="wrapper" className="page">
      <SmallHeader timeout={this.state.timeout} />
**/
