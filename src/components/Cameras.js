import React from 'react'

class Cameras extends React.PureComponent {
  constructor(props){
    super();
    this.state={cameras:null}
  }
  clicked(e){
    console.log(e)
  }

  componentDidMount(){
    import('aframe')
      .then(() => {
        import('aframe-extras')
          .then(() => {
            this.setState({
              cameras:(
                <a-entity id="rig" position="0 -1 -3" rotation="0 180 0">
                  <a-camera position="0 2 0" id="main-camera">
                    <a-cursor></a-cursor>
                    <a-animation  />
                  </a-camera>
                </a-entity>
              )})
          })
          // document.querySelector('#main-camera').setAttribute('camera', 'active', true);
          // console.log(document.querySelector('#main-camera'));
      })
      .catch((error) => console.error(error));
    }
  render() {
    return this.state.cameras;
  }
}

export default Cameras
