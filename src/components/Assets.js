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
          //
          //
          // <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          // <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
          // <Img fluid={props.data.imageThree.childImageSharp.fluid} />
          //
      
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

// export const fluidImage = graphql`
// fragment fluidImage on File {
//   childImageSharp {
//     fluid(maxWidth: 400) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// `;
//
// export const imgQuery = which => `image${which.substring(which.indexOf('.'))}: file(relativePath: { eq "${which}" }) {
//   ...fluidImage
// }
// `
//
// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "one.jpg" }) {
//       ...fluidImage
//     }
//     imageTwo: file(relativePath: { eq: "two.jpg" }) {
//       ...fluidImage
//     }
//     imageThree: file(relativePath: { eq: "three.jpg" }) {
//       ...fluidImage
//     }
//   }
// `
