import React from 'react'
import { withPrefix } from 'gatsby';

class Assets extends React.PureComponent {
  constructor(props){
    super();
    this.state={assets:null}
  }
  componentDidMount(){
    import('aframe')
      .then((aframe) => {
          this.setState({
          assets:(
            <a-assets>
              <video id="skyTexture" src={withPrefix('/videos/satTemptingHaight.mp4')} crossOrigin="anonymous" />
            </a-assets>
          )})
      })
      .catch((error) => console.error(error));
  }
  render() {
    return this.state.assets;
  }
}

export default Assets
