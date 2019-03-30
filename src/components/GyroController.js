import React from 'react'
import PropTypes from 'prop-types';

class GyroController extends React.Component {
  constructor(props){
    super(props);
    this.deviceOrientationHandler=this.deviceOrientationHandler.bind(this)
    this.orientationChangeHandler=this.orientationChangeHandler.bind(this)
    this.state={
      orientation: 0,
      startingPoint:null,
    }
  }

  componentWillUnmount(){
    window.removeEventListener('deviceorientation', this.deviceOrientationHandler, false);
    window.removeEventListener('orientationchange', this.orientationChangeHandler, false);
  }
  componentDidMount(){
    window.addEventListener('deviceorientation', this.deviceOrientationHandler, false);
    window.addEventListener('orientationchange', this.orientationChangeHandler, false);
  }

  onUpDownAxis = e => {
    const arg = this.state.orientation === 0 ? 'beta' : 'gamma'
    let val =  Math.round(((450 + e[arg])%360))
    // console.log(e);
    // console.log(`${this.state.orientation} before converstion, ${arg} plus ${e[arg]} equals ${val}`);
    return val > 90 ? val - 180 : val
  }

  upDownTest = val => Math.abs(val) > 20 ? val/10 : 0;

  deviceOrientationHandler(e){
    // console.log('deviceOrientationHandler');
    const { alpha, beta, gamma } = e;
    if(this.state.startingPoint){
      // this.props.gyroControls(this.upDownTest(this.onUpDownAxis(e)))
      this.testPosition(e)
    }else{
      const startingPoint = { alpha, beta, gamma }
      this.setState({ startingPoint, orientation:window.orientation })
    }
  }

  orientationChangeHandler(e){
    // console.log(window.orientation)
    this.setState({
      orientation: window.orientation
    })
  }

  testPosition=(e)=>{
    try{
      if(document.querySelector('#rig')){
        const old=document.querySelector('#rig').getAttribute('position');
        document.querySelector('#rig').setEntityAttribute('position',
          old,
          {x:old.x,y:old.y,z:(old.z - this.upDownTest(this.onUpDownAxis(e)))});
      }
    }catch(oops){

    }
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default GyroController

// GyroController.propTypes = {
//   gyroControls: PropTypes.func.isRequired,
// }

// onCompassAxis = e => {
//   return Math.round(e.alpha+this.state.orientation) % 360
// }
// onSideToSideAxis = e => {
//   const arg = this.state.orientation === 0 ? 'gamma' : 'beta'
//   let val =  Math.round(((450 + e[arg])%360)-90)
//   return val > 90 ? val - 180 : val
// }
// deorient = e => {
//   window.removeEventListener('deviceorientation', this.deviceOrientationHandler, false);
// }

// const isDeviceOrientationOff = () => {
//   let timer = 500;
//   let assumption = aframe.utils.device.isMobile();
//   if(assumption){
//     assumption = false;
//     window.addEventListener('deviceorientation', function(e){
//       const oneTry = setTimeout((e)=>{
//         assumption = true;
//         window.removeEventListener('deviceorientation');
//       },timer);
//     }, false);
//   }
//   return setTimeout(()=>{
//     return assumption;
//   }, timer + 100);
// }
// alert(`testPosition=${this.upDownTest(this.onUpDownAxis(e))}`)
// document.querySelector('#rig'). id="rig" position="0 1 -3" rotation="0 180 0" animation="property: position; to: 0 60 120; dur: 10000"
//   console.log(`testPosition(${})`)
//   document.querySelector('#zeroVal').innerHTML=`Compass:
//   ${this.onCompassAxis(e)}, UD:
//   ${this.onUpDownAxis(e)}, Spin:
//   ${this.onSideToSideAxis(e)}}
//   `;
