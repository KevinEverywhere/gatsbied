(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{161:function(e,t,n){"use strict";n.r(t);var i=n(40),a=n.n(i),o=n(8),r=n.n(o),s=n(0),c=n.n(s),l=n(168),u=n(1),d=n.n(u),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onUpDownAxis=function(e){var t=0===n.state.orientation?"beta":"gamma",i=Math.round((450+e[t])%360);return i>90?i-180:i},n.upDownTest=function(e){var t=Math.floor(e/30);return Math.abs(t)>2?t:0},n.testPosition=function(e){var t=document.querySelector("#rig").getAttribute("position");document.querySelector("#rig").setEntityAttribute("position",t,{x:t.x,y:t.y,z:t.z-n.upDownTest(n.onUpDownAxis(e))})},n.deviceOrientationHandler=n.deviceOrientationHandler.bind(a()(n)),n.orientationChangeHandler=n.orientationChangeHandler.bind(a()(n)),n.state={orientation:0,startingPoint:null},n}r()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){window.removeEventListener("deviceorientation",this.deviceOrientationHandler,!1),window.removeEventListener("orientationchange",this.orientationChangeHandler,!1)},n.componentDidMount=function(){window.addEventListener("deviceorientation",this.deviceOrientationHandler,!1),window.addEventListener("orientationchange",this.orientationChangeHandler,!1)},n.deviceOrientationHandler=function(e){console.log("deviceOrientationHandler");var t=e.alpha,n=e.beta,i=e.gamma;if(this.state.startingPoint)this.testPosition(e);else{var a={alpha:t,beta:n,gamma:i};this.setState({startingPoint:a})}},n.orientationChangeHandler=function(e){console.log(window.orientation),this.setState({orientation:window.orientation})},n.render=function(){return c.a.createElement("div",null,this.props.children)},t}(c.a.Component),h=n(167),p=n(21),f=function(e){function t(t){var n;return(n=e.call(this)||this).state={assets:null},n}r()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,231,7)).then(function(t){e.setState({assets:c.a.createElement("a-assets",null,c.a.createElement("video",{id:"haight","webkit-playsinline":"",playsInline:"",autoPlay:"",controls:"",src:Object(p.withPrefix)("/videos/satTemptingHaight.mp4"),crossOrigin:"anonymous"}),c.a.createElement("video",{id:"biking","webkit-playsinline":"",playsInline:"",autoPlay:"",controls:"",src:Object(p.withPrefix)("/videos/biking.mp4"),crossOrigin:"anonymous"}),c.a.createElement("video",{id:"thankyou","webkit-playsinline":"",playsInline:"",autoPlay:"",controls:"",src:Object(p.withPrefix)("/videos/three36.mp4"),crossOrigin:"anonymous"}))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.assets},t}(c.a.PureComponent),v=function(e){function t(t){var n;return(n=e.call(this)||this).state={cameras:null},n}r()(t,e);var i=t.prototype;return i.clicked=function(e){console.log(e)},i.createdAnimations=function(e,t){var n,i=this;return t||(n=e.map(function(e,t){var n=" animation__"+t+"=";for(var a in i)n+=a+": "+i[a]+";";return n.substr(0,n.length-1)})),n},i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,231,7)).then(function(){n.e(17).then(n.t.bind(null,232,7)).then(function(){e.setState({cameras:c.a.createElement("a-entity",{id:"rig",position:"0 1 -3",rotation:"0 180 0"},c.a.createElement("a-camera",{position:"0 2 0",id:"main-camera"},c.a.createElement("a-cursor",null)))})})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.cameras},t}(c.a.PureComponent),g=function(e){var t="primitive: sphere; radius:"+e.radius;return e.spherical?c.a.createElement("a-entity",{geometry:t,class:"video-holder",position:e.position,rotation:e.rotation},c.a.createElement("a-video",{material:"side:double",geometry:t,src:e.src,controls:!0,"video-texture":!0,position:"0 0 0"})):c.a.createElement("a-entity",{class:"video-holder",position:e.position,rotation:e.rotation},c.a.createElement("a-video",{src:e.src,controls:!0,"video-texture":!0,width:e.width,height:e.height,position:"0 0 0"}))};g.propTypes={position:d.a.string,rotation:d.a.string,src:d.a.string,width:d.a.number,height:d.a.number};var E=g,y=function(e){function t(t){var n;return(n=e.call(this)||this).createWalls=function(){},n.state={imagesPerSide:40,numberOfSides:4,entities:null},n}r()(t,e);var i=t.prototype;return i.clicked=function(e){console.log(e)},i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,231,7)).then(function(t){e.setState({entities:c.a.createElement("a-entity",null,c.a.createElement("a-plane",{position:"0 -100 4",rotation:"-90 0 0",width:"1400",height:"900",color:"#311"}),c.a.createElement(E,{src:"#biking",id:"biking",rotation:"0 300 0",radius:1e3,position:"0 2 -15",spherical:"true"}),c.a.createElement(E,{src:"#thankyou",id:"thankyou",rotation:"0 100 0",width:5,height:5,position:"-5 2 4"}),c.a.createElement(E,{src:"#haight",id:"haight",rotation:"0 260 0",width:12,height:6.8,position:"6 3 4"}),c.a.createElement("a-sky",{color:"#000"}))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.entities},t}(c.a.PureComponent),b=function(e){function t(t){var n;return(n=e.call(this)||this).state={loadedContent:null,aframeLoaded:null},n}r()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,231,7)).then(function(t){t.components["video-texture"]||t.registerComponent("video-texture",{init:function(){var e=this;this.el.addEventListener("click",function(t){console.log(document.querySelector(e.el.getAttribute("src")).paused),document.querySelector(e.el.getAttribute("src")).paused?document.querySelector(e.el.getAttribute("src")).play():document.querySelector(e.el.getAttribute("src")).pause()})}}),e.setState({aframeLoaded:!0,loadedContent:c.a.createElement("main",null,c.a.createElement("a-scene",{cursor:"rayOrigin: mouse",embedded:!0,style:{width:"100%",height:"100%"}},c.a.createElement(f,null),c.a.createElement(y,null),c.a.createElement(v,null)))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.loadedContent},t}(c.a.PureComponent),w=n(166),k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={loading:"is-loading"},n.setWrapperRef=n.setWrapperRef.bind(a()(n)),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.setWrapperRef=function(e){this.wrapperRef=e},n.render=function(){return c.a.createElement(l.a,{location:this.props.location,position:this.state.position},c.a.createElement("div",{id:"wrapper",className:"page"},c.a.createElement(h.a,{active:"creative"}),c.a.createElement(m,null,c.a.createElement(b,{setWrapperRef:this.setWrapperRef})),c.a.createElement(w.a,null)),c.a.createElement("div",{id:"bg"}))},t}(c.a.Component);t.default=k},165:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(21);t.a=function(e){return a.a.createElement("li",null,a.a.createElement(o.Link,{to:e.item.toLowerCase()},e.item))}},166:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(1),r=function(e){return a.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},a.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",a.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",a.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};r.propTypes={timeout:n.n(o).a.bool},t.a=r},167:function(e,t,n){"use strict";n(23);var i=n(0),a=n.n(i),o=n(165),r=n(21),s=function(e){return a.a.createElement("nav",null,a.a.createElement(r.Link,{to:"/"},a.a.createElement("div",{className:"smlogo"},a.a.createElement("span",{className:"icon fa-bicycle"}))),a.a.createElement("ul",null,a.a.createElement(o.a,{item:"Work"}),a.a.createElement(o.a,{item:"Creative"}),a.a.createElement(o.a,{item:"Contact"})))},c=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement(o.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return a.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},a.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),c(e.chosen))}}}]);
//# sourceMappingURL=component---src-pages-creative-js-bc7fca6afdac1885d6fe.js.map