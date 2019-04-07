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
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
      this.setState({
        activeCamera:(
          <a-entity id="cameraRig" position="300 20 -300" rotation="0 315 0">
            <a-entity position="0 2 0"
            geometry="primitive: plane; width: 320; height:180"
            material="src: #webcam"></a-entity>
          </a-entity>
        )
      })
      navigator.mediaDevices.getUserMedia({ audio: true, video: { facingMode: "environment" }})
      .then(function(stream) {
        var video = document.getElementById('webcam');
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
    var video = document.getElementById('webcam');
    this.stopVideo(video);
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
