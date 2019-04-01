import React from 'react'
import { withPrefix, graphql } from 'gatsby';
// import { GatsbyImage } from 'gatsby-image';
import DynamicGatsbyImage from './DynamicGatsbyImage';
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
    const imageAssets = this.props.data.allFile.edges.map((node, index) => {
      console.log(node);
      console.log(node.node);
      console.log(node.node.childImageSharp);
      try{
        if(node && node.node && node.node.childImageSharp){
          return (
            <DynamicGatsbyImage
              id={node.node.id}
              key={index}
              fluid={node.node.childImageSharp.fluid}
            />
            )
        }else{
          return null;
        }
      }catch(oops){
        return null;
      }
    })
    return imageAssets;
  }
  componentDidMount(){
    console.log(this.props);
    import('aframe')
      .then((aframe) => {
          this.setState({
          assets:(
            <a-assets>
              <img crossOrigin="anonymous" alt="universe background" src={withPrefix('/images/universe_4096.jpg')} id="universe_4096Image" />
              { this.buildImageAssets() }
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
