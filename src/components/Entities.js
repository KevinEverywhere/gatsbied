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
                <a-plane position="0 -100 4" rotation="-90 0 0" width="1400" height="900" color="#311" />
                <AReactVideo src="#biking" id="biking" rotation="0 300 0" radius={1000} position="0 2 -15" spherical="true" />
                <AReactVideo src="#thankyou" id="thankyou" rotation="0 100 0" width={5} height={5} position="-5 2 4" />
                <AReactVideo src="#haight" id="haight" rotation="0 260 0" width={12} height={6.8} position="6 3 4" />
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
