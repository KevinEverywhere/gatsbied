import React from 'react'

class CameraHolder extends React.PureComponent {
  constructor(props){
    super();
    this.state={activeCamera:null}
  }
  stopVideo=(videoElem) =>{
    let stream = videoElem.srcObject;
    let tracks = stream.getTracks();
    tracks.forEach(function(track) {
      track.stop();
    });
    videoElem.srcObject = null;
  }
  setVideo=()=>{
    const me=this;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
      const srcTarget = `src: #${me.props.camera}`
      this.setState({
        activeCamera:(
          <a-entity id={this.props.id} position={this.props.position} rotation={this.props.rotation}>
            <a-entity position="0 2 0"
            geometry="primitive: plane; width: 240; height:180"
            material={srcTarget}></a-entity>
          </a-entity>
        )
      })
      navigator.mediaDevices.getUserMedia({ audio: true, video: { facingMode: this.props.facingMode }})
      .then(function(stream) {
        var video = document.getElementById(me.props.camera);
        if ("srcObject" in video) {
          video.srcObject=stream;
        }else{
          video.src = window.URL.createObjectURL(stream);
        }
        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch((oops)=>{
        console.log('bad camera')
      });
    }
  }
  componentWillUnmount(){
    try{
      var video = document.getElementById(this.props.camera);
      this.stopVideo(video);
    }catch(oops){
       // video not playing
    }
  }
  componentDidMount(){
    import('aframe')
      .then(() => {
        import('aframe-extras')
          .then(() => {
            this.setVideo();
          })
          .catch((oops)=>{
            console.log('bad camera')
          });
      })
      .catch((error) => console.error(error));
    }
  render() {
    return this.state.activeCamera
  }
}

export default CameraHolder

// <div class="inputdialog">
//   <input class="biginput" type="file" accept="video/*" capture="camera">
// </div>
