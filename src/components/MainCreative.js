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
        }
        this.setState({
          aframeLoaded: true,
          loadedContent:(
            <main>
              <a-scene cursor="rayOrigin: mouse" embedded style={{width:'100%',height:'100%'}}>
                <Assets />
                <Entities />
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
