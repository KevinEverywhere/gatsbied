import React from 'react'

class GyroController extends React.Component {
  constructor(props){
    super(props);
    this.deviceOrientationHandler=this.deviceOrientationHandler.bind(this)
    this.state={
      orientation: 0,
      startingPoint:null,
    }
  }
  onCompassAxis = e => {
    return Math.round(e.alpha+this.state.orientation) % 360
  }
  onUpDownAxis = e => {
    const arg = this.state.orientation === 0 ? 'beta' : 'gamma'
    let val =  Math.round(((450 + e[arg])%360))
    return val > 90 ? val - 180 : val
  }
  onSideToSideAxis = e => {
    const arg = this.state.orientation === 0 ? 'gamma' : 'beta'
    let val =  Math.round(((450 + e[arg])%360)-90)
    return val > 90 ? val - 180 : val
  }
  deorient = e => {
    window.removeEventListener('deviceorientation', this.deviceOrientationHandler, false);
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
    const { alpha, beta, gamma, absolute } = e;
    if(this.state.startingPoint){
      this.testPosition(e)
    }else{
      const startingPoint = { alpha, beta, gamma, absolute }
      this.setState({ startingPoint })
    }
  }

  orientationChangeHandler = e => {
    console.log(window.orientation)
    this.setState({
      orientation: window.orientation
    })
  }

  upDownTest = val => {
    const rtnVal = Math.floor(val/10);
    return rtnVal;
  }

  testPosition=(e)=>{
    console.log(`testPosition(${this.upDownTest(this.onUpDownAxis(e))})`)
    document.querySelector('#zeroVal').innerHTML=`Compass:
    ${this.onCompassAxis(e)}, UD:
    ${this.onUpDownAxis(e)}, Spin:
    ${this.onSideToSideAxis(e)}}
    `;
  }
  componentWillUnmount(){
    window.removeEventListener('deviceorientation', this.deviceOrientationHandler, true);
    window.removeEventListener('orientationchange', this.orientationChangeHandler, true);
  }
  componentDidMount(){
    window.addEventListener('orientationchange', this.orientationChangeHandler, true);
  }
  render() {
    return (
      <main>
      <div className="allCoords">
        <div onClick={this.reorient} className="coord alpha">
        1A ({ this.state.startingPoint ? Math.round(this.state.startingPoint['alpha']) : 0 })
        </div>
        <div className="coord beta">
        1B ({ this.state.startingPoint ? Math.round(this.state.startingPoint['beta']) : 0 })
        </div>
        <div onClick={this.deorient} className="coord gamma">
        1G ({ this.state.startingPoint ? Math.round(this.state.startingPoint['gamma']) : 0 })
        </div>
      </div>
      <div id="zeroVal">click, here</div>
      { this.props.children }
      </main>
    )
  }
}

export default GyroController
