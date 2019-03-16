import React from 'react'

class GyroController extends React.Component {
  constructor(props){
    super(props);
    this.deviceOrientationHandler=this.deviceOrientationHandler.bind(this)
    this.state={
      thresholds: {
        alpha: [-45, 45],
        beta: [-45, 45],
        gamma: [-45, 45],
      },
      started: {
        alpha: null,
        beta: null,
        gamma: null,
      },
      clocks: {
        alpha: 10000,
        beta: 10000,
        gamma: 10000,
      },
      startingPoint:null,
    }
  }
  reorient(e){
    this.setState({
      alpha:0,
      beta:0,
      gamma:0,
      startingPoint:{
        alpha:Math.round(e.alpha),
        beta: Math.round(e.beta),
        gamma: Math.round(e.gamma),
      },
      started: {
        alpha: null,
        beta: null,
        gamma: new Date(),
      },
    })
  }

  deviceOrientationHandler=(e)=>{
    const { alpha, beta, gamma } = e;
    if(this.state.startingPoint){
    // if(this.state.alpha && this.state.beta && this.state.gamma){
      this.testPosition(
        e.alpha, e.beta, e.gamma,
      )
    }else{
      const startingPoint = { alpha, beta, gamma }
      this.setState({ startingPoint })
    }
  }

  testPosition=(alpha, beta, gamma)=>{
    console.log(alpha, beta, gamma)
    document.querySelector('#zeroVal').innerHTML=`A:
    ${((Math.round(this.state.startingPoint.alpha - alpha)+180)%360)-180}, B:
    ${((Math.round(this.state.startingPoint.beta - beta)+180)%360)-180}, G:
    ${((Math.round(this.state.startingPoint.gamma - gamma)+180)%360)-180}
    `;
    // document.querySelector('.gamma').style.opacity=
    // innerHTML=
    // ${((Math.round(this.state.startingPoint.alpha - alpha)+180)%360)-180},
    // ${((Math.round(this.state.startingPoint.beta - beta)+180)%360)-180},
    // ${((Math.round(this.state.startingPoint.gamma - gamma)+180)%360)-180}
    // if(
    //   Math.abs(((this.state.startingPoint.gamma + 180)%360) - ((gamma + 180)%360))>30){
    //     console.log('over 30 degrees')
    //     // if ((this.state.started.gamma === null) || (Date.now()-this.state.started.gamma)<this.state.clocks.gamma){
    //   }else{
    //     console.log('alpha', this.state.started.gamma)
    //     this.setState({
    //       started:{
    //         gamma: Date.now()
    //       }
    //     })
    //
    // }
  }
  // olddeviceOrientationHandler=(e)=>{
  //   axisControl = (axis, deg, control) => {
  //       // if(deg!==0){
  //         control(axis)
  //       // }
  //     }
  //   }
  //
  //
  //   const { absolute, alpha, beta, gamma } = e;
  //   console.log(e)
  //   // if(this.state.startingPoint===null){
  //   //   this.reorient(e)
  //   // }
  //   const zero = (which) =>{
  //     const testVal = Math.round(((450 + e[which]-this.state.startingPoint[which])%180)-90);
  //     const testFunc = arg => (this.state.threshold[which][0] < arg < this.state.threshold[which][1]);
  //     const no = testFunc(testVal) ? testVal : 0;
  //     return no;
  //   }
  //   this.axisControl('gamma',zero('gamma'),pos => {
  //     console.log(deg);
  //     document.getElementById('zeroVal').innerHTML = `DEG=${deg}`
  //   })()
  // }
  componentWillUnmount(){
    window.removeEventListener('deviceorientation', this.deviceOrientationHandler, true);
  }
  componentDidMount(){
    window.addEventListener('deviceorientation', this.deviceOrientationHandler, true);
  }
  render() {
    return (
      <main>
      <div className="allCoords">
        <div className="coord alpha">
        ALPHA
        </div>
        <div className="coord beta">
        BETA
        </div>
        <div className="coord gamma">
        GAMMA
        </div>
      </div>
      <div onclick={this.reorient} id="zeroVal">CLICK, here</div>
      { this.props.children }
      </main>
    )
  }
}

export default GyroController

//
//
// function deviceOrientationHandler(e){
//   if(window.startingPoint===null){
//     reorient(e);
//     document.getElementById('based').innerHTML = `
//     S.A: ${window.startingPoint.alpha},
//     S.B: ${window.startingPoint.beta},
//     S.G: ${(window.startingPoint.gamma - 90) % 180}`;
//   }
//   var threshold=15;
//   let alphaString='';
//   let betaString='';
//   let gammaString='';
//   let multiple = 0;
//   if(Math.abs(zero(e,'alpha'))>threshold){
//     multiple = Math.min(Math.floor(zero(e,'alpha')/threshold),3)*threshold;
//     document.querySelector('#alphaDiv').classList=`bg${multiple}`;
//   }else{
//     document.querySelector('#alphaDiv').classList=[];
//   }
//   if(Math.abs(zero(e,'beta'))>threshold){
//     betaString=`;${threshold} and ${zero(e,'beta')}`;
//     multiple = Math.min(Math.floor(zero(e,'beta')/threshold),3)*threshold;
//     document.querySelector('#betaDiv').classList=`bg${multiple}`;
//   }else{
//     document.querySelector('#betaDiv').classList=[];
//   }
//   if(Math.abs(zero(e,'gamma', true))>threshold){
//     gammaString=`;${threshold} and ${zero(e,'gamma', true)}`;
//     multiple = Math.max(0,Math.min(Math.floor(zero(e,'gamma',true)/threshold),3)*threshold);
//     document.querySelector('#gammaDiv').classList=`bg${multiple}`;
//   }else{
//     document.querySelector('#gammaDiv').classList=[];
//   }
//   document.getElementById('updated').innerHTML = `
//   A: ${calibrateMe(Math.round(e.alpha))};
//   B: ${calibrateMe(Math.round(e.beta))};
//   G: ${calibrateMe(Math.round(e.gamma),90)}`;
//   document.getElementById('difference').innerHTML = `
//   D.A: ${zero(e,'alpha')}, ${alphaString}
//   D.B: ${zero(e,'beta')}, ${betaString}
//   D.G: ${zero(e,'gamma', true)} ${gammaString}`;
// }
