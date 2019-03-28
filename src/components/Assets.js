import React from 'react'
import { withPrefix } from 'gatsby';
import store from '../state/store';


class Assets extends React.PureComponent {
  constructor(props){
    super();
    this.state={assets:null}
    /**
     * <video id="bikingVideo" webkit-playsinline="" playsInline="" autoPlay="" controls="" src=withPrefix('/videos/biking.mp4') crossOrigin="anonymous" />
     * type {[type]} this.props
     */
  }
  buildImageAssets = () => {
    const imageAssets = store().getState().getImages.map((item, d) => {
      return <img key={item} alt={item} src={withPrefix(`/images/${item}`)} id={item} />;
    })
    return imageAssets;
  }
  componentDidMount(){
    import('aframe')
      .then((aframe) => {
          this.setState({
          assets:(
            <a-assets>
              <img alt="universe background" src={withPrefix('/images/universe_4096.jpg')} id="universe_4096Image" />
              {this.buildImageAssets()}
              <video id="haightVideo" webkit-playsinline="" playsInline="" autoPlay="" controls="" src={withPrefix('/videos/satTemptingHaight.mp4')} crossOrigin="anonymous" />
              <video id="thankyouVideo" webkit-playsinline="" playsInline="" autoPlay="" controls="" src={withPrefix('/videos/three36.mp4')} crossOrigin="anonymous" />
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
