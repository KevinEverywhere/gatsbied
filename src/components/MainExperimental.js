import React from 'react'
import Assets from './Assets'
import Cameras from './Cameras'
import Entities from './Entities'

class MainExperimental extends React.PureComponent {
  constructor(props){
    super();
    this.state={
      loadedContent:null,
      aframeLoaded: null,
    }
  }
  componentDidMount(){
    import('aframe')
      .then((aframe) => {
        if(!!!aframe.components['video-texture']){
          aframe.registerComponent("video-texture", {
            init: function() {
              this.el.addEventListener("click", (e) => {
                try{
                  if(document.querySelector(this.el.getAttribute('src')).paused){
                    document.querySelector(this.el.getAttribute('src')).play()
                  }else{
                    document.querySelector(this.el.getAttribute('src')).pause()
                  }
                }catch(oops){}
              })
            }
          })

          aframe.registerComponent("plane-texture", {
            init: function() {
              this.el.addEventListener("click", (e) => {
                let _element = this.el.sceneEl;
                if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
                  if (document.cancelFullScreen) {
                      document.cancelFullScreen();
                  } else {
                      if (document.mozCancelFullScreen) {
                          document.mozCancelFullScreen();
                      } else {
                          if (document.webkitCancelFullScreen) {
                              document.webkitCancelFullScreen();
                          }
                      }
                  }
                } else {
                    if (_element.requestFullscreen) {
                        _element.requestFullscreen();
                    } else {
                        if (_element.mozRequestFullScreen) {
                            _element.mozRequestFullScreen();
                        } else {
                            if (_element.webkitRequestFullscreen) {
                                _element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                            }
                        }
                    }
                }
              })
            }
          })
        }
        this.setState({
          aframeLoaded: true,
          loadedContent:(
            <main>
              <a-scene cursor="rayOrigin: mouse" embedded style={{width:'100%',height:'100%'}}>
                <Assets data={this.props.data} />
                <Entities experimental="true" data={this.props.data} />
                <Cameras data={this.props.data} />
                { this.props.children }
              </a-scene>
            </main>
          )})
      })
      .catch((error) => console.error(error));
  }
  render() {
    return this.state.loadedContent;
  }
}

export default MainExperimental
