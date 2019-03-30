import React from 'react'

class Cameras extends React.PureComponent {
  constructor(props){
    super();
    this.state={cameras:null}
  }
  clicked(e){
    console.log(e)
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
                <a-entity id="rig" position="0 40 -3" rotation="0 180 0">
                  <a-camera far="20000" position="0 2 0" id="main-camera">
                    <a-cursor></a-cursor>
                  </a-camera>
                </a-entity>
              )})
          })
      })
      .catch((error) => console.error(error));
      console.log('cameramounted')
    }
  render() {
    return this.state.cameras;
  }
}

export default Cameras


          // return `animation__${i}="property: ${anim.property}; to: 0 400 0; dur: 15000"`
           // animation__1="property: position; to: 0 200 460; dur: 20000"
           // animation__2="property: rotation; to: 0 400 0; dur: 15000"
           // animation__3="property: rotation; to: 0 540 0;delay:15000; from: 0 400 0; dur: 5000"
          // document.querySelector('#main-camera').setAttribute('camera', 'active', true);
          // console.log(document.querySelector('#main-camera'));
