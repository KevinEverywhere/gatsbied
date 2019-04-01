import React from 'react'
import Assets from './Assets'
import Cameras from './Cameras'
import Entities from './Entities'

class MainCreative extends React.PureComponent {
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
                console.log(document.querySelector(this.el.getAttribute('src')).paused);
                if(document.querySelector(this.el.getAttribute('src')).paused){
                  document.querySelector(this.el.getAttribute('src')).play()
                }else{
                  document.querySelector(this.el.getAttribute('src')).pause()
                }
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
                  // _element = document.documentElement;
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
                // if (!document.fullscreenElement) {
                //   this.el.sceneEl.requestFullscreen();
                //   // .then({}).catch(err => {
                //   //   alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                //   // });
                // } else {
                //   document.exitFullscreen();
                // }
                // if(this.el.sceneEl.getAttribute('embedded')){
                //   this.el.sceneEl.removeAttribute('embedded');
                // }else{
                //   this.el.sceneEl.setEntityAttribute('embedded',true);
                //   // this.el.sceneEl.setAttribute('embedded');
                // }
                console.log(this.el.sceneEl.getAttribute('embedded'));
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
                <Entities data={this.props.data} />
                <Cameras />
              </a-scene>
            </main>
          )})
          // aframe.ANIME.timeline({
          //   targets:document.querySelector('#rig'),
          //   position: [650,0,600],
          //   easing: 'easeInOutSine',
          //   endDelay: 1000
          // })
      })
      .catch((error) => console.error(error));
  }
  render() {
    return this.state.loadedContent;
  }
}

export default MainCreative
