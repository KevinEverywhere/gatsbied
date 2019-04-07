import React from 'react'
import { withPrefix } from 'gatsby';
import DynamicGatsbyImage from './DynamicGatsbyImage';

class Assets extends React.PureComponent {
  constructor(props){
    super();
    this.state={assets:null}
  }
  buildImageAssets = () => {
    const imageAssets = this.props.data.allFile.edges.map((node, index) => {
      if(node && node.node && node.node.childImageSharp && node.node.childImageSharp.fluid){
        return (
          <DynamicGatsbyImage
            alt={node.node.childImageSharp.fluid.originalName}
            id={node.node.id}
            key={index}
            fluid={node.node.childImageSharp.fluid}
          />
          )
      }
      return null;
    })
    return imageAssets;
  }
  componentDidMount(){
    import('aframe')
      .then((aframe) => {
          this.setState({
          assets:(
            <a-assets>
              <img crossOrigin="anonymous" alt="universe background" src={withPrefix('/images/universe_4096.jpg')} id="universe_4096Image" />
              { this.buildImageAssets() }
              <video id="webcam" webkit-playsinline="true" playsInline></video>
              <video id="haightVideo" webkit-playsinline="" playsInline="" autoPlay="" controls="" src={withPrefix('/videos/satTemptingHaight.mp4')} crossOrigin="anonymous" />
              <video id="mixVideo" webkit-playsinline="" playsInline="" autoPlay="" controls="" src={withPrefix('/videos/mix_injected.mp4')} crossOrigin="anonymous" />
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
