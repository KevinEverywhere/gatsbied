import React from "react"
import renderer from "react-test-renderer"
import CameraHolder from "../CameraHolder"

describe("CameraHolder", () => {
  it("renders correctly", () => {
    Promise.all([
      import('aframe'),
      import('aframe-extras')
     ]).then({
    const tree = renderer
      .create(<CameraHolder
        active="true"
        facingMode="environment"
        position="300 20 -300"
        rotation="0 315 0"
        camera="webcam"
        id="cameraRig"
        />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
//
// Promise.all([
//   import('aframe'),
//   import('aframe-extras')
//  ]).then(([
//    aframe,
//    aframeExtras
//   ]) => {
//    console.log(Import1);
//    /* CODE HERE*/
//   });
