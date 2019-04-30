import React from "react"
import renderer from "react-test-renderer"
import AReactImage from "../AReactImage"

describe("AReactImage", () => {
  it("renders correctly", () => {
    const fluid = {src:''}
    const pos = '0 0 0';
    const distanceBetween = 10;
    const tree = renderer
      .create(<AReactImage fluid={fluid} rotation={pos} width={distanceBetween} height={distanceBetween} position={pos} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
