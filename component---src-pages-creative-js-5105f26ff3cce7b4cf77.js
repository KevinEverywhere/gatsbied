(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(e,t,n){"use strict";n.r(t);var i=n(40),a=n.n(i),r=n(8),o=n.n(r),s=n(0),l=n.n(s),c=n(168),u=n(1),d=n.n(u),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).onUpDownAxis=function(e){var t=0===n.state.orientation?"beta":"gamma",i=Math.round((450+e[t])%360);return i>90?i-180:i},n.upDownTest=function(e){return Math.abs(e)>20?e/10:0},n.testPosition=function(e){try{if(document.querySelector("#rig")){var t=document.querySelector("#rig").getAttribute("position");document.querySelector("#rig").setEntityAttribute("position",t,{x:t.x,y:t.y,z:t.z-n.upDownTest(n.onUpDownAxis(e))})}}catch(i){}},n.deviceOrientationHandler=n.deviceOrientationHandler.bind(a()(n)),n.orientationChangeHandler=n.orientationChangeHandler.bind(a()(n)),n.state={orientation:0,startingPoint:null},n}o()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){window.removeEventListener("deviceorientation",this.deviceOrientationHandler,!1),window.removeEventListener("orientationchange",this.orientationChangeHandler,!1)},n.componentDidMount=function(){window.addEventListener("deviceorientation",this.deviceOrientationHandler,!1),window.addEventListener("orientationchange",this.orientationChangeHandler,!1)},n.deviceOrientationHandler=function(e){var t=e.alpha,n=e.beta,i=e.gamma;if(this.state.startingPoint)this.testPosition(e);else{var a={alpha:t,beta:n,gamma:i};this.setState({startingPoint:a,orientation:window.orientation})}},n.orientationChangeHandler=function(e){this.setState({orientation:window.orientation})},n.render=function(){return l.a.createElement("div",null,this.props.children)},t}(l.a.Component),m=n(167),h=n(21),p=(n(187),n(9)),g=function(e){function t(t){var n;return(n=e.call(this)||this).buildImageAssets=function(){return Object(p.a)().getState().getImages.map(function(e,t){return l.a.createElement("img",{key:e,alt:e,src:Object(h.withPrefix)("/images/"+e),id:e})})},n.state={assets:null},n}o()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,231,7)).then(function(t){e.setState({assets:l.a.createElement("a-assets",null,l.a.createElement("img",{alt:"universe background",src:Object(h.withPrefix)("/images/universe_4096.jpg"),id:"universe_4096Image"}),e.buildImageAssets(),l.a.createElement("video",{id:"haightVideo","webkit-playsinline":"",playsInline:"",autoPlay:"",controls:"",src:Object(h.withPrefix)("/videos/satTemptingHaight.mp4"),crossOrigin:"anonymous"}),l.a.createElement("video",{id:"thankyouVideo","webkit-playsinline":"",playsInline:"",autoPlay:"",controls:"",src:Object(h.withPrefix)("/videos/ouch.mp4"),crossOrigin:"anonymous"}))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.assets},t}(l.a.PureComponent),b=function(e){function t(t){var n;return(n=e.call(this)||this).state={cameras:null},n}o()(t,e);var i=t.prototype;return i.clicked=function(e){console.log(e)},i.createdAnimations=function(e,t){var n,i=this;return t||(n=e.map(function(e,t){var n=" animation__"+t+"=";for(var a in i)n+=a+": "+i[a]+";";return n.substr(0,n.length-1)})),n},i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,231,7)).then(function(){n.e(17).then(n.t.bind(null,232,7)).then(function(){e.setState({cameras:l.a.createElement("a-entity",{id:"rig",position:"0 40 -3",rotation:"0 180 0"},l.a.createElement("a-camera",{far:"20000",position:"0 2 0",id:"main-camera"},l.a.createElement("a-cursor",null)))})})}).catch(function(e){return console.error(e)}),console.log("cameramounted")},i.render=function(){return this.state.cameras},t}(l.a.PureComponent),y=function(e){var t="primitive: sphere; radius:"+e.radius;return e.spherical?l.a.createElement("a-entity",{geometry:t,position:e.position,rotation:e.rotation},l.a.createElement("a-image",{geometry:t,src:e.src,position:"0 0 0"})):l.a.createElement("a-entity",{position:e.position,rotation:e.rotation},l.a.createElement("a-image",{material:"opacity:0.8",src:e.src,width:e.width,height:e.height,position:"0 0 0"}))};y.propTypes={position:d.a.string,rotation:d.a.string,radius:d.a.string,src:d.a.string,width:d.a.number,height:d.a.number};var v=y,E=function(e){var t="primitive: sphere; radius:"+e.radius;return e.spherical?l.a.createElement("a-entity",{geometry:t,position:e.position,rotation:e.rotation},l.a.createElement("a-video",{material:"side:double",geometry:t,src:e.src,controls:!0,"video-texture":!0,position:"0 0 0"})):l.a.createElement("a-entity",{position:e.position,rotation:e.rotation},l.a.createElement("a-video",{src:e.src,controls:!0,"video-texture":!0,width:e.width,height:e.height,position:"0 0 0"}))};E.propTypes={position:d.a.string,rotation:d.a.string,radius:d.a.string,src:d.a.string,width:d.a.number,height:d.a.number};var w=E,S=function(e){function t(t){var n;return(n=e.call(this)||this).builtImageAssets=function(){return Object(p.a)().getState().getImages.map(function(e,t,i){var a="#"+e,r=t%2==0?"0 270 0":"0 90 0",o=Math.floor(i.length/4)-Math.floor(t/2),s=n.state.distanceBetween,c=t%2==0?s+" 2 "+s*o:-s+" 2 "+s*o;return l.a.createElement(v,{key:e,src:a,rotation:r,width:s,height:s,position:c})})},n.builtVideoAssets=function(){var e=Object(p.a)().getState().getImages.length/3,t="0 120 "+-e*n.state.distanceBetween,i="0 120 "+e*n.state.distanceBetween;return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,{src:"#thankyouVideo",id:"thankyou",rotation:"0 0 0",spherical:!0,width:750,height:750,radius:750,position:t}),l.a.createElement(w,{src:"#haightVideo",id:"haight",rotation:"0 180 0",width:1200,height:680,position:i}))},n.builtAframeAssets=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("a-plane",{material:"opacity:0.31","un-planned-texture":!0,position:"0 -100 4",rotation:"-90 0 0",width:"5000",height:"5000",color:"#111"}),l.a.createElement("a-sky",{color:"#fff",src:"#universe_4096Image"}))},n.state={distanceBetween:60,imagesPerSide:40,numberOfSides:4,entities:null},n}o()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,231,7)).then(function(t){e.setState({entities:l.a.createElement("a-entity",null,e.builtImageAssets(),e.builtVideoAssets(),e.builtAframeAssets())})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.entities},t}(l.a.PureComponent),L=function(e){function t(t){var n;return(n=e.call(this)||this).state={loadedContent:null,aframeLoaded:null},n}o()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;n.e(3).then(n.t.bind(null,231,7)).then(function(t){t.components["video-texture"]||(t.registerComponent("video-texture",{init:function(){var e=this;this.el.addEventListener("click",function(t){console.log(document.querySelector(e.el.getAttribute("src")).paused),document.querySelector(e.el.getAttribute("src")).paused?document.querySelector(e.el.getAttribute("src")).play():document.querySelector(e.el.getAttribute("src")).pause()})}}),t.registerComponent("plane-texture",{init:function(){var e=this;this.el.addEventListener("click",function(t){var n=e.el.sceneEl;document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen&&n.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),console.log(e.el.sceneEl.getAttribute("embedded"))})}})),e.setState({aframeLoaded:!0,loadedContent:l.a.createElement("main",null,l.a.createElement("a-scene",{cursor:"rayOrigin: mouse",embedded:!0,style:{width:"100%",height:"100%"}},l.a.createElement(g,null),l.a.createElement(S,null),l.a.createElement(b,null)))})}).catch(function(e){return console.error(e)})},i.render=function(){return this.state.loadedContent},t}(l.a.PureComponent),I=n(166),O=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={loading:"is-loading"},n.setWrapperRef=n.setWrapperRef.bind(a()(n)),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:"",images:Object(p.a)().getState().getImages})},100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.setWrapperRef=function(e){this.wrapperRef=e},n.render=function(){return l.a.createElement(c.a,{location:this.props.location,position:this.state.position},l.a.createElement("div",{id:"wrapper",className:"page"},l.a.createElement(m.a,{active:"creative"}),l.a.createElement(f,null,l.a.createElement(L,{images:this.state.images,setWrapperRef:this.setWrapperRef})),l.a.createElement(I.a,null)),l.a.createElement("div",{id:"bg"}))},t}(l.a.Component);t.default=O},165:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(21);t.a=function(e){return a.a.createElement("li",null,a.a.createElement(r.Link,{to:e.item.toLowerCase()},e.item))}},166:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(1),o=function(e){return a.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},a.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",a.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",a.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:n.n(r).a.bool},t.a=o},167:function(e,t,n){"use strict";n(22);var i=n(0),a=n.n(i),r=n(165),o=n(21),s=function(e){return a.a.createElement("nav",null,a.a.createElement(o.Link,{to:"/"},a.a.createElement("div",{className:"smlogo"},a.a.createElement("span",{className:"icon fa-bicycle"}))),a.a.createElement("ul",null,a.a.createElement(r.a,{item:"Work"}),a.a.createElement(r.a,{item:"Creative"}),a.a.createElement(r.a,{item:"Contact"})))},l=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement(r.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return a.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},a.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),l(e.chosen))}},187:function(e,t,n){"use strict";var i=n(11);t.__esModule=!0,t.default=void 0;var a,r=i(n(8)),o=i(n(40)),s=i(n(91)),l=i(n(92)),c=i(n(0)),u=i(n(1)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),m=function(e){var t=d(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},h=new WeakMap;var p=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),a);return n&&(n.observe(e),h.set(e,t)),function(){n.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+i+"<img "+s+l+n+a+t+o+r+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var n=e.sizes,i=e.srcSet,a=e.src,r=e.style,o=e.onLoad,u=e.onError,d=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:n,srcSet:i,src:a},d,{onLoad:o,onError:u,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var n;n=e.call(this,t)||this;var i=!0,a=!1,r=t.fadeIn,s=m(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,a=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,a=!1);var l=!(t.critical&&!t.fadeIn);return n.state={isVisible:i,imgLoaded:!1,IOSupported:a,fadeIn:r,hasNoScript:l,seenBefore:s},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=p(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=d(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=d(this.props),t=e.title,n=e.alt,i=e.className,a=e.style,r=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,p=e.fixed,y=e.backgroundColor,v=e.Tag,E=e.itemProp,w="boolean"==typeof y?"lightgray":y,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),L=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),I={title:t,alt:this.state.isVisible?"":n,style:S,className:m};if(h){var O=h;return c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),O.base64&&c.default.createElement(b,(0,l.default)({src:O.base64},I)),O.tracedSVG&&c.default.createElement(b,(0,l.default)({src:O.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(b,{alt:n,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t},O))}}))}if(p){var k=p,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},r);return"inherit"===r.display&&delete R.display,c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),k.base64&&c.default.createElement(b,(0,l.default)({src:k.base64},I)),k.tracedSVG&&c.default.createElement(b,(0,l.default)({src:k.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(b,{alt:n,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t,width:k.width,height:k.height},k))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),E=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-pages-creative-js-5105f26ff3cce7b4cf77.js.map