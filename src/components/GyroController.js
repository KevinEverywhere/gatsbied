import React from 'react'

class GyroController extends React.Component {
  constructor(props){
    super(props);
    this.deviceOrientationHandler=this.deviceOrientationHandler.bind(this)
    this.orientationChangeHandler=this.orientationChangeHandler.bind(this)
    this.state={
      orientation: 0,
      timer: Date.now(),
      distanceBetween: 60, // duplicated in Entities, need to make one variable for both
      timeoutLength: 2000,
      startingPoint:null,
      vectors: ['xPos', 'xNeg', 'zPos', 'zNeg'],
      vector: 'xPos',
      changedDirection: -1,
    }
  }

  componentWillUnmount(){
    window.removeEventListener('deviceorientation', this.deviceOrientationHandler, false);
    window.removeEventListener('orientationchange', this.orientationChangeHandler, false);
  }
  componentDidMount(){
    this.timeoutId = setTimeout(() => {
        this.setState({changedDirection: 0, timer:Date.now()});
    }, 100);
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

  selectView = () => {
    const theDir = Math.floor(
      (document.querySelector('#main-camera').getAttribute('rotation').y + 45)/90
    ) % 4;
    let vector;
    switch(theDir){
      case 1:
        vector = 'xPos';
        break;
      case 2:
        vector = 'zPos';
        break;
      case 3:
        vector = 'xNeg';
        break;
      case 0:
        vector = 'zNeg';
        break;
      default:
        vector = this.state.vector;
        break;
    }
    return vector;
  }

  testPosition=(e)=>{
    try{
      if(document.querySelector('#rig')){
        const old=document.querySelector('#rig').getAttribute('position');
        if(
          (Math.abs(old.x)<this.state.distanceBetween/2) &&
          (Math.abs(old.z)<this.state.distanceBetween/2)
        ){
          if(this.state.vector !== this.selectView()){
            this.setState({ vector: this.selectView() })
          }
        }
        switch(this.state.vector){
          case 'xPos':
            document.querySelector('#rig').setEntityAttribute('position',
              old,{
                x:(old.x + this.upDownTest(this.onUpDownAxis(e))),
                y:old.y,
                z:old.z
              }
            );
            break;
          case 'xNeg':
            document.querySelector('#rig').setEntityAttribute('position',
              old,{
                x:(old.x - this.upDownTest(this.onUpDownAxis(e))),
                y:old.y,
                z:old.z
              }
            );
            break;
          case 'zNeg':
            document.querySelector('#rig').setEntityAttribute('position',
              old,{
                x:old.x,
                y:old.y,
                z:(old.z + this.upDownTest(this.onUpDownAxis(e)))
              });
            break;
          case 'zPos':
            document.querySelector('#rig').setEntityAttribute('position',
              old,{
                x:old.x,
                y:old.y,
                z:(old.z - this.upDownTest(this.onUpDownAxis(e)))
              }
            );
            break;
          default:
            break;
        }
      }
    }catch(oops){
      console.log(oops)
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
