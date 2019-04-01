import React from 'react'

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
    return val > 90 ? val - 180 : val
  }

  upDownTest = val => Math.abs(val) > 20 ? val/10 : 0;

  deviceOrientationHandler(e){
    const { alpha, beta, gamma } = e;
    if(this.state.startingPoint){
      this.testPosition(e)
    }else{
      const startingPoint = { alpha, beta, gamma }
      this.setState({ startingPoint, orientation:window.orientation })
    }
  }

  orientationChangeHandler(e){
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
