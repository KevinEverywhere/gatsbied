(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(e,t,n){"use strict";n.r(t);var i=n(55),a=n.n(i),r=n(8),o=n.n(r),s=n(0),c=n.n(s),l=n(157),u=n(159),m=n(154),d=function(e){function t(t){var n;return(n=e.call(this)||this).state={assets:null},n}o()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,223,7)).then(function(t){e.setState({assets:c.a.createElement("a-assets",null,c.a.createElement("video",{id:"haight","webkit-playsinline":"",playsInline:"",autoPlay:"",controls:"",src:Object(m.withPrefix)("/videos/satTemptingHaight.mp4"),crossOrigin:"anonymous"}),c.a.createElement("video",{id:"biking","webkit-playsinline":"",playsInline:"",autoPlay:"",controls:"",src:Object(m.withPrefix)("/videos/biking.mp4"),crossOrigin:"anonymous"}),c.a.createElement("video",{id:"thankyou","webkit-playsinline":"",playsInline:"",autoPlay:"",controls:"",src:Object(m.withPrefix)("/videos/three36.mp4"),crossOrigin:"anonymous"}))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.assets},t}(c.a.PureComponent),h=function(e){function t(t){var n;return(n=e.call(this)||this).state={cameras:null},n}o()(t,e);var i=t.prototype;return i.clicked=function(e){console.log(e)},i.createdAnimations=function(e,t){var n,i=this;return t&&(n=e.map(function(e,t){var n=" animation__"+t+"=";for(var a in i)n+=a+": "+i[a]+";";return n.substr(0,n.length-1)})),n},i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,223,7)).then(function(){n.e(15).then(n.t.bind(null,224,7)).then(function(){e.setState({cameras:c.a.createElement("a-entity",{id:"rig",position:"0 1 -3",rotation:"0 180 0",animation__1:"property: position; to: 0 200 460; dur: 12000"},c.a.createElement("a-camera",{position:"0 2 0",id:"main-camera"},c.a.createElement("a-cursor",null)))})})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.cameras},t}(c.a.PureComponent),p=n(2),f=n.n(p),v=function(e){var t="primitive: sphere; radius:"+e.radius;return e.spherical?c.a.createElement("a-entity",{geometry:t,class:"video-holder",position:e.position,rotation:e.rotation},c.a.createElement("a-video",{material:"side:double",geometry:t,src:e.src,controls:!0,"video-texture":!0,position:"0 0 0"})):c.a.createElement("a-entity",{class:"video-holder",position:e.position,rotation:e.rotation},c.a.createElement("a-video",{src:e.src,controls:!0,"video-texture":!0,width:e.width,height:e.height,position:"0 0 0"}))};v.propTypes={position:f.a.string,rotation:f.a.string,src:f.a.string,width:f.a.number,height:f.a.number};var E=v,y=function(e){function t(t){var n;return(n=e.call(this)||this).state={entities:null},n}o()(t,e);var i=t.prototype;return i.clicked=function(e){console.log(e)},i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,223,7)).then(function(t){e.setState({entities:c.a.createElement("a-entity",null,c.a.createElement("a-plane",{position:"0 -100 4",rotation:"-90 0 0",width:"140",height:"90",color:"#333"}),c.a.createElement(E,{src:"#biking",id:"biking",rotation:"0 300 0",radius:1e3,position:"0 2 -15",spherical:"true"}),c.a.createElement(E,{src:"#thankyou",id:"thankyou",rotation:"0 100 0",width:5,height:5,position:"-5 2 4"}),c.a.createElement(E,{src:"#haight",id:"haight",rotation:"0 260 0",width:12,height:6.8,position:"6 3 4"}),c.a.createElement("a-sky",{color:"#000"}))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.entities},t}(c.a.PureComponent),g=function(e){function t(t){var n;return(n=e.call(this)||this).state={loadedContent:null,aframeLoaded:null},n}o()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,223,7)).then(function(t){t.components["video-texture"]||t.registerComponent("video-texture",{init:function(){var e=this;this.el.addEventListener("click",function(t){console.log(document.querySelector(e.el.getAttribute("src")).paused),document.querySelector(e.el.getAttribute("src")).paused?document.querySelector(e.el.getAttribute("src")).play():document.querySelector(e.el.getAttribute("src")).pause()})}}),e.setState({aframeLoaded:!0,loadedContent:c.a.createElement("main",null,c.a.createElement("a-scene",{cursor:"rayOrigin: mouse",embedded:!0,style:{width:"100%",height:"100%"}},c.a.createElement(d,null),c.a.createElement(y,null),c.a.createElement(h,null)))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.loadedContent},t}(c.a.PureComponent);g.propTypes={};var b=g,w=n(156),k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={loading:"is-loading"},n.handleOpenArticle=n.handleOpenArticle.bind(a()(n)),n.handleCloseArticle=n.handleCloseArticle.bind(a()(n)),n.setWrapperRef=n.setWrapperRef.bind(a()(n)),n.handleClickOutside=n.handleClickOutside.bind(a()(n)),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},n.setWrapperRef=function(e){this.wrapperRef=e},n.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},n.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},n.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},n.render=function(){return c.a.createElement(l.a,{location:this.props.location,position:this.state.position},c.a.createElement("div",{id:"wrapper",className:"page"},c.a.createElement(u.a,{active:"creative"}),c.a.createElement(b,{timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),c.a.createElement(w.a,null)),c.a.createElement("div",{id:"bg"}))},t}(c.a.Component);t.default=k},155:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(154);t.a=function(e){return a.a.createElement("li",null,a.a.createElement(r.Link,{to:e.item.toLowerCase()},e.item))}},156:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(2),o=function(e){return a.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},a.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",a.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",a.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:n.n(r).a.bool},t.a=o},159:function(e,t,n){"use strict";n(25);var i=n(0),a=n.n(i),r=n(155),o=n(154),s=function(e){return a.a.createElement("nav",null,a.a.createElement(o.Link,{to:"/"},a.a.createElement("div",{className:"smlogo"},a.a.createElement("span",{className:"icon fa-bicycle"}))),a.a.createElement("ul",null,a.a.createElement(r.a,{item:"Work"}),a.a.createElement(r.a,{item:"Creative"}),a.a.createElement(r.a,{item:"Contact"})))},c=function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement(r.a,{item:e})))};t.a=function(e){return a.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},a.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),function(e){var t;switch(e){case"":t=e;break;case"jobs":t=c("recommendations");break;case"recommendations":t=c("work");break;default:t=e}return t}(e.chosen))}}}]);
//# sourceMappingURL=component---src-pages-creative-js-4fd5a177c0d45572d1a8.js.map