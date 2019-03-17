import React from 'react'
import PropTypes from 'prop-types';

class GyroController extends React.Component {
  constructor(props){
    super(props);
    this.deviceOrientationHandler=this.deviceOrientationHandler.bind(this)
    this.state={
      orientation: 0,
      startingPoint:null,
    }
  }

  reorient = e => {
    this.setState({
      startingPoint:null,
      started: {
        alpha: null,
        beta: null,
        gamma: new Date(),
      },
    })
    window.addEventListener('deviceorientation', this.deviceOrientationHandler, false);
  }

  deviceOrientationHandler = e => {
    const { alpha, beta, gamma } = e;
    if(this.state.startingPoint){
      this.props.gyroControls(this.upDownTest(this.onUpDownAxis(e)))
      // this.testPosition(e)
    }else{
      const startingPoint = { alpha, beta, gamma }
      this.setState({ startingPoint })
    }
  }

  orientationChangeHandler = e => {
    console.log(window.orientation)
    this.setState({
      orientation: window.orientation
    })
  }

  onUpDownAxis = e => {
    const arg = this.state.orientation === 0 ? 'beta' : 'gamma'
    let val =  Math.round(((450 + e[arg])%360))
    return val > 90 ? val - 180 : val
  }

  upDownTest = val => {
    const rtnVal = Math.floor(val/10);
    return Math.abs(rtnVal) > 2 ? rtnVal : 0;
  }

  // testPosition=(e)=>{
  //   console.log(`testPosition(${})`)
  //   document.querySelector('#zeroVal').innerHTML=`Compass:
  //   ${this.onCompassAxis(e)}, UD:
  //   ${this.onUpDownAxis(e)}, Spin:
  //   ${this.onSideToSideAxis(e)}}
  //   `;
  // }
  componentWillUnmount(){
    window.removeEventListener('deviceorientation', this.deviceOrientationHandler, true);
    window.removeEventListener('orientationchange', this.orientationChangeHandler, true);
  }
  componentDidMount(){
    window.addEventListener('orientationchange', this.orientationChangeHandler, true);
  }
  render() {
    return (
      { this.props.children }
    )
  }
}

export default GyroController

GyroController.propTypes = {
  gyroControls: PropTypes.func.isRequired,
}

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
