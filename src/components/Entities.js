import React from 'react'
import '../aframe/VideoTexture'

class Entities extends React.PureComponent {
  constructor(props){
    super();
    this.state={entities:null}
  }
  clicked(e){
    console.log(e)
  }
  componentDidMount(){
    import('aframe')
      .then((aframe) => {
          this.setState({
          entities:(
              <a-entity>
                <a-box position="-3 0.5 3" rotation="0 45 0" color="#4CC3D9" />
                <a-sphere position="-10 -1.25 5" radius="1.25" color="#2D5EEF" />
                <a-cylinder position="2 0.75 1" radius="0.5" height="1.5" color="#FFC65D" />
                <a-plane position="0 -1 4" rotation="-90 0 0" width="4" height="4" color="#C87BA4" />
                <a-video src="#skyTexture" video-texture rotation="0 180 0" width="8" height="4" position="-1 0 4">
                <a-animation attribute="rotation" repeat="indefinite" to="0 360 0" dur="3000" easing="linear"></a-animation>
                </a-video>
                <a-entity id="rig" rotation="0 180 0">
                  <a-camera  id="camera">
                    <a-cursor></a-cursor>
                  </a-camera>
                </a-entity>
                <a-sky color="#954" />
              </a-entity>
          )})
      })
      .catch((error) => console.error(error));
  }
  render() {
    return this.state.entities;
  }
}

export default Entities
