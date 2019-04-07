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

  positionedImageAsset = ( node, index, arr, vector, level ) => {
    const fluid = node.node.childImageSharp.fluid;
    let rot, hPos, vPos, pos;
    let distanceBetween = this.state.distanceBetween;
    switch(vector){
      case 'xPos':
        rot =  index % 2 === 0 ? "0 180 0" : "0 0 0";
        vPos = Math.floor(arr.length/4) - Math.floor(index/2);
        pos =  index % 2 === 0 ?
          `${distanceBetween * vPos} ${(level * 800)+2} ${distanceBetween}` :
          `${distanceBetween * vPos} ${(level * 800)+2} ${-distanceBetween}`;
        return (
          <AReactImage key={node.node.id} fluid={fluid} rotation={rot} width={distanceBetween} height={distanceBetween} position={pos} />
        )
      case 'xNeg':
        break;
      case 'zPos':
        rot =  index % 2 === 0 ? "0 270 0" : "0 90 0";
        hPos = Math.floor(arr.length/4) - Math.floor(index/2);
        distanceBetween = this.state.distanceBetween;
        pos =  index % 2 === 0 ?
          `${distanceBetween} ${(level * 800)+2} ${distanceBetween * hPos}` :
          `${-distanceBetween} ${(level * 800)+2} ${distanceBetween * hPos}`;
        return (
          <AReactImage key={node.node.id} fluid={fluid} rotation={rot} width={distanceBetween} height={distanceBetween} position={pos} />
        )
      case 'zNeg':
      default:
        break;
    }
  }

  builtImageAssets = ( vector, level ) => {
    const imageAssets =this.props.data.allFile.edges.map((node, index, arr) => {
      if(node && node.node && node.node.childImageSharp && node.node.childImageSharp.fluid){
        return this.positionedImageAsset(node, index, arr, vector, level);
      }else{
        return null;
      }
    })
    return imageAssets;
  }

  builtVideoAssets = ( vector, level ) => {
    let video1Pos, video2Pos, rot;
    let fullLength = store().getState().getImages.length/3;
    switch(vector){
      case 'xPos':
        rot =  index => index % 2 === 0 ? "0 270 0" : "0 90 0";
        video1Pos = `${-fullLength * 2 * this.state.distanceBetween} ${(level * 800)+120} 0`;
        video2Pos = `${fullLength * 2 * this.state.distanceBetween} ${(level * 800)+120} 0`;
        break;
      case 'xNeg':
        break;
      case 'zPos':
        rot =  index => index % 2 === 0 ? "0 180 0" : "0 0 0";
        video1Pos = `0 ${(level * 800)+120} ${-fullLength * this.state.distanceBetween}`;
        video2Pos = `0 ${(level * 800)+120} ${fullLength * this.state.distanceBetween}`;
        break;
      case 'zNeg':
      default:
        break;
    }
    return (
      <>
      <AReactVideo src="#mixVideo" id="mix" spherical={true} width={400} height={400} radius="750" position={video1Pos} />
      <AReactVideo src="#haightVideo" id="haight" rotation={rot(1)} width={600} height={340} position={video2Pos} />
      </>
    );
  }

  builtAframeAssets = () => {
    // This is for putting all types of aframe assets. In this case, there is a
    // plane that is used to click back and forth to full screen.
    return (
      <>
        <a-sky geometry="radius:12000" color="#fff" src="#universe_4096Image" />
      </>
    );
  }

  componentDidMount(){
    import('aframe')
      .then((aframe) => {
        this.setState({
          entities:(
              <a-entity>
                { this.builtImageAssets('xPos', -.1)  }
                { this.builtImageAssets('zPos', -.1) }
                { this.builtVideoAssets('xPos', 0) }
                { this.builtVideoAssets('zPos', 0) }
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

//   <a-plane material="opacity:0.31" un-planned-texture position="0 -100 4" rotation="-90 0 0" width="5000" height="5000" color="#111" />
