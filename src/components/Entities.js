import React from 'react'
import AReactVideo from './AReactVideo'
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
                <a-plane position="0 -100 4" rotation="-90 0 0" width="140" height="90" color="#333" />
                <AReactVideo src="#biking" spherical="true" id="biking" rotation="0 180 0"  width="12" height="6.8" position="0 3 -15" />
                <AReactVideo src="#thankyou" id="thankyou" rotation="0 120 0"  width="9" height="5" position="-3 3 4" />
                <AReactVideo src="#skyTexture" id="skyTexture" rotation="0 240 0" width="12" height="6.8" position="5 4 4" />
                <a-sky color="#000" />
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
