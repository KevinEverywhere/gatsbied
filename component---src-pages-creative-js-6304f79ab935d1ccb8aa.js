(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(e,t,n){"use strict";n.r(t);var i=n(40),r=n.n(i),a=n(8),o=n.n(a),c=n(0),l=n.n(c),s=n(168),u=n(1),m=n.n(u),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).onUpDownAxis=function(e){var t=0===n.state.orientation?"beta":"gamma",i=Math.round((450+e[t])%360);return i>90?i-180:i},n.upDownTest=function(e){return Math.abs(e)>30?e/120:0},n.testPosition=function(e){try{if(document.querySelector("#rig")){var t=document.querySelector("#rig").getAttribute("position");document.querySelector("#rig").setEntityAttribute("position",t,{x:t.x,y:t.y,z:t.z-n.upDownTest(n.onUpDownAxis(e))})}}catch(i){}},n.deviceOrientationHandler=n.deviceOrientationHandler.bind(r()(n)),n.orientationChangeHandler=n.orientationChangeHandler.bind(r()(n)),n.state={orientation:0,startingPoint:null},n}o()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){window.removeEventListener("deviceorientation",this.deviceOrientationHandler,!1),window.removeEventListener("orientationchange",this.orientationChangeHandler,!1)},n.componentDidMount=function(){window.addEventListener("deviceorientation",this.deviceOrientationHandler,!1),window.addEventListener("orientationchange",this.orientationChangeHandler,!1)},n.deviceOrientationHandler=function(e){var t=e.alpha,n=e.beta,i=e.gamma;if(this.state.startingPoint)this.testPosition(e);else{var r={alpha:t,beta:n,gamma:i};this.setState({startingPoint:r,orientation:window.orientation})}},n.orientationChangeHandler=function(e){this.setState({orientation:window.orientation})},n.render=function(){return l.a.createElement("div",null,this.props.children)},t}(l.a.Component),h=n(167),p=n(21),f=function(e){function t(t){var n;return(n=e.call(this)||this).state={assets:null},n}o()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,230,7)).then(function(t){e.setState({assets:l.a.createElement("a-assets",null,l.a.createElement("img",{alt:"universe background",src:Object(p.withPrefix)("/images/universe_4096.jpg"),id:"universe_4096Image"}),l.a.createElement("video",{id:"haightVideo","webkit-playsinline":"",playsInline:"",autoPlay:"",controls:"",src:Object(p.withPrefix)("/videos/satTemptingHaight.mp4"),crossOrigin:"anonymous"}),l.a.createElement("video",{id:"thankyouVideo","webkit-playsinline":"",playsInline:"",autoPlay:"",controls:"",src:Object(p.withPrefix)("/videos/three36.mp4"),crossOrigin:"anonymous"}))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.assets},t}(l.a.PureComponent),v=function(e){function t(t){var n;return(n=e.call(this)||this).state={cameras:null},n}o()(t,e);var i=t.prototype;return i.clicked=function(e){console.log(e)},i.createdAnimations=function(e,t){var n,i=this;return t||(n=e.map(function(e,t){var n=" animation__"+t+"=";for(var r in i)n+=r+": "+i[r]+";";return n.substr(0,n.length-1)})),n},i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,230,7)).then(function(){n.e(17).then(n.t.bind(null,231,7)).then(function(){e.setState({cameras:l.a.createElement("a-entity",{id:"rig",position:"0 1 -3",rotation:"0 180 0"},l.a.createElement("a-camera",{far:"20000",position:"0 2 0",id:"main-camera"},l.a.createElement("a-cursor",null)))})})}).catch(function(e){return console.error(e)}),console.log("cameramounted")},i.render=function(){return this.state.cameras},t}(l.a.PureComponent),g=function(e){var t="primitive: sphere; radius:"+e.radius;return e.spherical?l.a.createElement("a-entity",{geometry:t,position:e.position,rotation:e.rotation},l.a.createElement("a-video",{material:"side:double",geometry:t,src:e.src,controls:!0,"video-texture":!0,position:"0 0 0"})):l.a.createElement("a-entity",{position:e.position,rotation:e.rotation},l.a.createElement("a-video",{src:e.src,controls:!0,"video-texture":!0,width:e.width,height:e.height,position:"0 0 0"}))};g.propTypes={position:m.a.string,rotation:m.a.string,radius:m.a.string,src:m.a.string,width:m.a.number,height:m.a.number};var E=g,b=function(e){function t(t){var n;return(n=e.call(this)||this).createWalls=function(){},n.state={imagesPerSide:40,numberOfSides:4,entities:null},n}o()(t,e);var i=t.prototype;return i.clicked=function(e){console.log(e)},i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,230,7)).then(function(t){e.setState({entities:l.a.createElement("a-entity",null,l.a.createElement("a-plane",{"plane-texture":!0,position:"0 -100 4",rotation:"-90 0 0",width:"1400",height:"900",color:"#3e5"}),l.a.createElement(E,{src:"#thankyouVideo",id:"thankyou",rotation:"0 100 0",width:75,height:75,position:"-50 2 4"}),l.a.createElement(E,{src:"#haightVideo",id:"haight",rotation:"0 260 0",width:120,height:68,position:"60 3 4"}),l.a.createElement("a-sky",{color:"#fff",src:"#universe_4096Image"}))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.entities},t}(l.a.PureComponent),y=function(e){function t(t){var n;return(n=e.call(this)||this).state={loadedContent:null,aframeLoaded:null},n}o()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,230,7)).then(function(t){t.components["video-texture"]||(t.registerComponent("video-texture",{init:function(){var e=this;this.el.addEventListener("click",function(t){console.log(document.querySelector(e.el.getAttribute("src")).paused),document.querySelector(e.el.getAttribute("src")).paused?document.querySelector(e.el.getAttribute("src")).play():document.querySelector(e.el.getAttribute("src")).pause()})}}),t.registerComponent("plane-texture",{init:function(){var e=this;this.el.addEventListener("click",function(t){var n=e.el.sceneEl;document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),console.log(e.el.sceneEl.getAttribute("embedded"))})}})),e.setState({aframeLoaded:!0,loadedContent:l.a.createElement("main",null,l.a.createElement("a-scene",{cursor:"rayOrigin: mouse",embedded:!0,style:{width:"100%",height:"100%"}},l.a.createElement(f,null),l.a.createElement(b,null),l.a.createElement(v,null)))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.loadedContent},t}(l.a.PureComponent),w=n(166),k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={loading:"is-loading"},n.setWrapperRef=n.setWrapperRef.bind(r()(n)),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.setWrapperRef=function(e){this.wrapperRef=e},n.render=function(){return l.a.createElement(s.a,{location:this.props.location,position:this.state.position},l.a.createElement("div",{id:"wrapper",className:"page"},l.a.createElement(h.a,{active:"creative"}),l.a.createElement(d,null,l.a.createElement(y,{setWrapperRef:this.setWrapperRef})),l.a.createElement(w.a,null)),l.a.createElement("div",{id:"bg"}))},t}(l.a.Component);t.default=k},165:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(21);t.a=function(e){return r.a.createElement("li",null,r.a.createElement(a.Link,{to:e.item.toLowerCase()},e.item))}},166:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(1),o=function(e){return r.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},r.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",r.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",r.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:n.n(a).a.bool},t.a=o},167:function(e,t,n){"use strict";n(22);var i=n(0),r=n.n(i),a=n(165),o=n(21),c=function(e){return r.a.createElement("nav",null,r.a.createElement(o.Link,{to:"/"},r.a.createElement("div",{className:"smlogo"},r.a.createElement("span",{className:"icon fa-bicycle"}))),r.a.createElement("ul",null,r.a.createElement(a.a,{item:"Work"}),r.a.createElement(a.a,{item:"Creative"}),r.a.createElement(a.a,{item:"Contact"})))},l=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(a.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return r.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},r.a.createElement(c,Object.assign({},e,{chosen:e.chosen})),l(e.chosen))}}}]);
//# sourceMappingURL=component---src-pages-creative-js-6304f79ab935d1ccb8aa.js.map