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
    document.addEventListener('keydown', this.keyHandler, false);
    window.addEventListener('deviceorientation', this.deviceOrientationHandler, false);
    window.addEventListener('orientationchange', this.orientationChangeHandler, false);
  }

  keyHandler = (event) => {
    console.log(event.target);
    console.log(event);
    // event.preventDefault();
    const keyName = event.key;
    console.log(keyName);
    switch(keyName){
      case "ArrowRight":
        this.moveOnVector(
          this.state.vector.charAt(0) === 'z' ? 'xPos' : 'zPos',
          this.state.distanceBetween/4,
          this.state.distanceBetween/10);
        break;
      case "ArrowLeft":
        this.moveOnVector(
          this.state.vector.charAt(0) === 'z' ? 'xNeg' : 'zNeg',
          this.state.distanceBetween/4,
          this.state.distanceBetween/10);
        // this.moveOnVector('xNeg', this.state.distanceBetween/4, this.state.distanceBetween/10);
        break;
      case "ArrowUp":
        this.moveOnVector(
          this.state.vector.charAt(0) === 'z' ? 'zPos' : 'xPos',
          this.state.distanceBetween/4,
          this.state.distanceBetween/10);
        // this.moveOnVector('zPos', this.state.distanceBetween/4, this.state.distanceBetween/10);
        break;
      case "ArrowDown":
        this.moveOnVector(
          this.state.vector.charAt(0) === 'z' ? 'zNeg' : 'xNeg',
          this.state.distanceBetween/4,
          this.state.distanceBetween/10);
          // 'zNeg', this.state.distanceBetween/4, this.state.distanceBetween/10);
        break;
      default:
        break;
    }
    // if (keyName === 'Control') {
    //   // do not alert when only Control key is pressed.
    //   return;
    // }
    // if (event.ctrlKey) {
    //   // Even though event.key is not 'Control' (e.g., 'a' is pressed),
    //   // event.ctrlKey may be true if Ctrl key is pressed at the same time.
    //   alert(`Combination of ctrlKey + ${keyName}`);
    // } else {
    //   alert(`Key pressed ${keyName}`);
    // }
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
    console.log(`${this.state.vector}, ${theDir}`);
    return vector;
  }
  getOld = () =>{
    const old={
      pos: document.querySelector('#rig').getAttribute('position'),
      rot: document.querySelector('#rig').getAttribute('rotation'),
    };
    if(
      (Math.abs(old.pos.x)<this.state.distanceBetween/2) &&
      (Math.abs(old.pos.z)<this.state.distanceBetween/2)
    ){
      if(this.state.vector !== this.selectView()){
        this.setState({ vector: this.selectView() })
      }
    }
    return old;
  }

  testRotation=(old, which, rot)=>{
    document.querySelector('#rig').setEntityAttribute('rotation',
      old.rot,{
        x: old.rot.x,
        y:old.rot.y+rot,
        z:old.rot.z
      }
    );
  }
  /**
   x:(old.rotation.x + rot),
   y:old.rotation.y,
   z:old.rotation.z
   */

  moveOnVector=(which, what, rot)=>{
    const old = this.getOld();
    console.log(`${this.state.vector}, which ${which}`);
    if(which.charAt(0)!==this.state.vector.charAt(0)){
      console.log('will rotate')
      this.testRotation(old, which.charAt(0), (which.indexOf('Pos')===-1 ? rot : -rot))
    }else{
      console.log('will move')
      switch(which){
        case 'xPos':
          document.querySelector('#rig').setEntityAttribute('position',
            old.pos,{
              x:(old.pos.x + what),
              y:old.pos.y,
              z:old.pos.z
            }
          );
          break;
        case 'xNeg':
          document.querySelector('#rig').setEntityAttribute('position',
            old.pos,{
              x:(old.pos.x - what),
              y:old.pos.y,
              z:old.pos.z
            }
          );
          break;
        case 'zNeg':
          document.querySelector('#rig').setEntityAttribute('position',
            old.pos,{
              x:old.pos.x,
              y:old.pos.y,
              z:(old.pos.z + what)
            }
          );
          break;
        case 'zPos':
          document.querySelector('#rig').setEntityAttribute('position',
            old.pos,{
              x:old.pos.x,
              y:old.pos.y,
              z:(old.pos.z - what)
            }
          );
          break;
        default:
          break;
      }
    }
  }

  testPosition=(e)=>{
    try{
      if(document.querySelector('#rig')){
        this.moveOnVector(this.state.vector, this.upDownTest(this.onUpDownAxis(e)));
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
