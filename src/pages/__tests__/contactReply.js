import React from "react"
import renderer from "react-test-renderer"
import ContactReplyPage from "../contactReply"

describe("ContactReplyPage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ContactReplyPage location='nowhere' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
