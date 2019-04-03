import React from 'react'

class Cameras extends React.PureComponent {
  constructor(props){
    super();
    this.state={cameras:null}
  }
  createdAnimations(fromAnimArray, sequential){
    let myAnimations;
    if(!sequential){
      myAnimations = fromAnimArray.map((anim, i) => {
        let str = ` animation__${i}=`
        for(var z in this){
          str += `${z}: ${this[z]};`
        }
        return str.substr(0,str.length-1)
      });
    }
    return myAnimations;
  }
  componentDidMount(){
    import('aframe')
      .then(() => {
        import('aframe-extras')
          .then(() => {
            this.setState({
              cameras:(
                <a-entity id="rig" position="0 10 -3" rotation="0 0 0">
                  <a-camera far="20000" position="0 2 0" id="main-camera">
                    <a-cursor></a-cursor>
                  </a-camera>
                </a-entity>
              )})
          })
      })
      .catch((error) => console.error(error));
    }
  render() {
    return this.state.cameras;
  }
}

export default Cameras
