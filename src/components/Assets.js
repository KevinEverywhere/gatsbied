import React from 'react'
// import html2canvas from 'html2canvas';
import { withPrefix } from 'gatsby';
import DynamicGatsbyImage from './DynamicGatsbyImage';

class Assets extends React.PureComponent {
  constructor(props){
    super();
    this.state={assets:null}
  }
  /*
  buildHTMLAssets = () => {
    var styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
    var ss = styleEl.sheet;
    ss.insertRule('#forHtml2Canvas { width:300px; height:200px; color:#300; background-color:#ff3; }');
    ss.insertRule('.forHtml2CanvasTxt { color:#300; }');
    this.instructions={};
    this.instructions.firstWords = document.createElement('div');
    this.instructions.firstWords.setAttribute('id', 'forHtml2Canvas');
    var h = document.createElement("h1");
    h.className = 'forHtml2CanvasTxt';
    var t1 = document.createTextNode('Any HTML');
    h.appendChild(t1);
    var p = document.createElement("p");
    p.className = 'forHtml2CanvasTxt';
    var t2 = document.createTextNode('You can place any HTML content on to 3D content.');
    p.appendChild(t2);
    this.instructions.firstWords.appendChild(h);
    this.instructions.firstWords.appendChild(p);
    document.body.appendChild(this.instructions.firstWords);
    // document.querySelector('#___gatsby').appendChild(this.instructions.firstWords);
    import('html2canvas').then((html2canvas) => {
      html2canvas(this.instructions.firstWords).then(function(canvas) {
        const converting = canvas.toDataURL();
        const img = <img crossOrigin="anonymous" alt="instructions" src={converting} id="forHtml2CanvasImg" />;
          console.log(img);
          console.log(typeof(img));
          return(img);
        // document.querySelector("a-assets").appendChild(canvas);
        // forHtml2Canvas
      }).catch(function (error){
        console.log('failed after typeof(canvas)');
        console.log(error);
      });
    })
  }
{ this.buildHTMLAssets() }
   */
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

              <img crossOrigin="anonymous" alt="earth with Degrees" src={withPrefix('/assets/equirectangularWithDegrees.jpg')} id="earthDegrees" />

              <img crossOrigin="anonymous" alt="eye chart" src={withPrefix('/assets/eyeChart_3000_6526.jpg')} id="eyeChart" />

              <video id="webcam" webkit-playsinline="true" playsInline></video>
              <video id="webcamBack" webkit-playsinline="true" playsInline></video>
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
