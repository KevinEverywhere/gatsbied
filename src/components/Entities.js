import React from 'react'
import AReactImage from './AReactImage'
import AReactVideo from './AReactVideo'
// import '../aframe/VideoTexture'
import store from '../state/store';

class Entities extends React.PureComponent {
  constructor(props){
    super();
    this.state={
      imagesPerSide: 40,
      numberOfSides: 4,
      entities:null
    }
  }
  clicked(e){
    console.log(e)
  }
  createWalls = () => {
    const wallList = [];

    // document.createElement('a-plane')
  }

  builtImageAssets = () => {
    const imageAssets = store().getState().getImages.map((item, d, arr) => {
      const itemZ = `#${item}`;
      const rot =  d % 2 === 0 ? "0 100 0" : "0 260 0";
      const hPos = Math.floor(arr.length/4) - Math.floor(d/2);
      const distanceBetween = 60;
      const pos =  d % 2 === 0 ?
        `${distanceBetween} 2 ${distanceBetween * hPos}` :
        `${-distanceBetween} 2 ${distanceBetween * hPos}`;
      return <AReactImage key={item} src={itemZ} rotation={rot} width={distanceBetween} height={distanceBetween} position={pos} />
    })
    return imageAssets;
  }
  componentDidMount(){
    import('aframe')
      .then((aframe) => {
        this.setState({
          entities:(
              <a-entity>
                <a-plane plane-texture position="0 -100 4" rotation="-90 0 0" width="1400" height="900" color="#154" />
                { this.builtImageAssets() }
                <AReactVideo src="#thankyouVideo" id="thankyou" rotation="0 100 0" width={750} height={750} position="-600 2 4" />
                <AReactVideo src="#haightVideo" id="haight" rotation="0 260 0" width={1200} height={680} position="600 3 4" />
                <a-sky color="#fff" src="#universe_4096Image" />
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
