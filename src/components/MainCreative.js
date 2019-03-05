import React from 'react'
import PropTypes from 'prop-types'
import AFRAME from 'aframe'
import { withPrefix } from 'gatsby';
// { satTemptingHaight } from '../assets/videos/satTemptingHaight.mp4'

// <img src={withPrefix('/videos/satTemptingHaight.mp4')} alt="Logo" />;

class MainCreative extends React.Component {
  constructor(props){
    super();
  }
  componentDidMount(){
    this.loadedContent=(
      <main>
        <a-scene embedded style={{width:'100%',height:'100%'}}>
        {this.assets()}
          <a-box position="-1 0.5 3" rotation="0 45 0" color="#4CC3D9" />
          <a-sphere position="0 1.25 5" radius="1.25" color="#EF2D5E" />
          <a-cylinder position="1 0.75 3" radius="0.5" height="1.5" color="#FFC65D" />
          <a-plane position="0 0 4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" />
          <a-video src="#skyTexture" rotation="0 180 0" width="8" height="4" position="-1 0 4">
          <a-animation attribute="rotation" repeat="indefinite" to="0 360 0" dur="3000" easing="linear"></a-animation>
          </a-video>
            <a-sky color="#954" />
        </a-scene>
      </main>
    )
  }
  assets(){
    return (<a-assets>
  <video id="skyTexture" src={withPrefix('/videos/satTemptingHaight.mp4')} crossOrigin="anonymous" />
</a-assets>)
  }
  render() {
    return this.loadedContent ? this.loadedContent : <div>Loading . . .</div>
  }
}

MainCreative.propTypes = {
}

export default MainCreative

// npx create-react-app demo-demo

// // <a-entity
// //   position="0 0 0"
// //   scale="-1 1 1"
// //   rotation="0 0 0"
// //   geometry={{primitive:'sphere',radius:200}}
// // >
// //   <a-animation
// //     attribute="rotation"
// //     to="0 -360 0"
// //     dur="150000"
// //     easing="linear"
// //     repeat="indefinite"
// //   />
// // </a-entity>
// // <a-camera position="0 -100 0" />
//  */
// Content360Page.defaultProps = {
//   first: '',
//   second: '',
// };
//
// Content360Page.propTypes = {
//   first: PropTypes.string,
//   second: PropTypes.string,
// }
