import React from 'react'
// import '../aframe/VideoTexture'

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
                <a-sphere position="-10 -1.25 5" radius="1.25" color="#2D5EEF" />
                <a-plane position="0 -1 4" rotation="-90 0 0" width="4" height="4" color="#C87BA4" />
                <a-video src="#thankyou" video-texture rotation="0 120 0" width="9" height="5" position="-3 0 4" />
                <a-video src="#skyTexture" video-texture rotation="0 240 0" width="12" height="6.8" position="5 0 4" />
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
