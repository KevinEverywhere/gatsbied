import AFRAME from 'aframe'

AFRAME.registerComponent("video-texture", {
  init: function() {
    this.el.addEventListener("click", (e) => {
      console.log(e);
      console.log(this.el.getAttribute('src'))
      // if(document.querySelector(this.el.getAttribute('src')).paused){
        document.querySelector(this.el.getAttribute('src')).play()
      // }else{
      //   document.querySelector(this.el.getAttribute('src')).pause()
      // }
      // this.el.setAttribute("scale", scale)
    })
  }
})
