import React from 'react'
import AReactImage from './AReactImage'
import AReactVideo from './AReactVideo'
import store from '../state/store';

class Entities extends React.PureComponent {
  constructor(props){
    super();
    this.state={
      distanceBetween:60,
      imagesPerSide: 40,
      numberOfSides: 4,
      entities:null
    }
  }

  builtImageAssets = () => {
    const imageAssets =this.props.data.allFile.edges.map((node, index, arr) => {
      if(node && node.node && node.node.childImageSharp && node.node.childImageSharp.fluid){
        const itemZ = node.node.childImageSharp.fluid.src;
        const rot =  index % 2 === 0 ? "0 270 0" : "0 90 0";
        const hPos = Math.floor(arr.length/4) - Math.floor(index/2);
        const distanceBetween = this.state.distanceBetween;
        const pos =  index % 2 === 0 ?
          `${distanceBetween} 2 ${distanceBetween * hPos}` :
          `${-distanceBetween} 2 ${distanceBetween * hPos}`;
        return <AReactImage key={node.node.id} src={itemZ} rotation={rot} width={distanceBetween} height={distanceBetween} position={pos} />
      }else{
        return null;
      }
    })
    return imageAssets;
  }

  builtVideoAssets = () => {
    const fullLength = store().getState().getImages.length/3;
    const video1Pos = `0 120 ${-fullLength * this.state.distanceBetween}`;
    const video2Pos = `0 120 ${fullLength * this.state.distanceBetween}`;
    return (
      <>
      <AReactVideo src="#mixVideo" id="mix" spherical={true} width={750} height={750} radius="750" position={video1Pos} />
      <AReactVideo src="#haightVideo" id="haight" rotation="0 180 0" width={1200} height={680} position={video2Pos} />
      </>
    );
  }

  builtAframeAssets = () => {
    // This is for putting all types of aframe assets. In this case, there is a
    // plane that is used to click back and forth to full screen.
    return (
      <>
        <a-plane material="opacity:0.31" un-planned-texture position="0 -100 4" rotation="-90 0 0" width="5000" height="5000" color="#111" />
        <a-sky color="#fff" src="#universe_4096Image" />
      </>
    );
  }

  componentDidMount(){
    import('aframe')
      .then((aframe) => {
        this.setState({
          entities:(
              <a-entity>
                { this.builtImageAssets() }
                { this.builtVideoAssets() }
                { this.builtAframeAssets() }
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
