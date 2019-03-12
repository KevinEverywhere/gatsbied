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
              <video id="haight" webkit-playsinline="" playsInline="" autoPlay="" controls="" src={withPrefix('/videos/satTemptingHaight.mp4')} crossOrigin="anonymous" />
              <video id="biking" webkit-playsinline="" playsInline={true} autoPlay={true} controls="" src={withPrefix('/videos/biking.mp4')} crossOrigin="anonymous" />
              <video id="thankyou" webkit-playsinline="" playsInline="" autoPlay="" controls="" src={withPrefix('/videos/three36.mp4')} crossOrigin="anonymous" />
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
