(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,t,n){"use strict";n.r(t);var a=n(34),i=n.n(a),r=n(8),o=n.n(r),c=n(0),s=n.n(c),l=n(159),u=n(166),m=n(157),d=function(e){function t(t){var n;return(n=e.call(this)||this).state={assets:null},n}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;n.e(2).then(n.t.bind(null,183,7)).then(function(t){e.setState({assets:s.a.createElement("a-assets",null,s.a.createElement("video",{id:"skyTexture",src:Object(m.c)("/videos/satTemptingHaight.mp4"),crossOrigin:"anonymous"}))})}).catch(function(e){return console.error(e)})},a.render=function(){return this.state.assets},t}(s.a.PureComponent),p=function(e){function t(t){var n;return(n=e.call(this)||this).state={entities:null},n}o()(t,e);var a=t.prototype;return a.clicked=function(e){console.log(e)},a.componentDidMount=function(){var e=this;n.e(2).then(n.t.bind(null,183,7)).then(function(t){e.setState({entities:s.a.createElement("a-entity",null,s.a.createElement("a-box",{position:"-3 0.5 3",rotation:"0 45 0",color:"#4CC3D9"}),s.a.createElement("a-sphere",{position:"-10 -1.25 5",radius:"1.25",color:"#2D5EEF"}),s.a.createElement("a-cylinder",{position:"2 0.75 1",radius:"0.5",height:"1.5",color:"#FFC65D"}),s.a.createElement("a-plane",{position:"0 -1 4",rotation:"-90 0 0",width:"4",height:"4",color:"#C87BA4"}),s.a.createElement("a-video",{src:"#skyTexture","video-texture":!0,rotation:"0 180 0",width:"12",height:"6.8",position:"-1 0 4"},s.a.createElement("a-animation",{attribute:"rotation",repeat:"indefinite",to:"0 360 0",dur:"3000",easing:"linear"})),s.a.createElement("a-entity",{id:"rig",rotation:"0 180 0"},s.a.createElement("a-camera",{id:"camera"},s.a.createElement("a-cursor",null))),s.a.createElement("a-sky",{color:"#954"}))})}).catch(function(e){return console.error(e)})},a.render=function(){return this.state.entities},t}(s.a.PureComponent),h=function(e){function t(t){var n;return(n=e.call(this)||this).state={loadedContent:null,aframeLoaded:null},n}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;n.e(2).then(n.t.bind(null,183,7)).then(function(t){t.components["video-texture"]||t.registerComponent("video-texture",{init:function(){var e=this;this.el.addEventListener("click",function(t){console.log(document.querySelector(e.el.getAttribute("src")).paused),document.querySelector(e.el.getAttribute("src")).paused?document.querySelector(e.el.getAttribute("src")).play():document.querySelector(e.el.getAttribute("src")).pause()})}}),e.setState({aframeLoaded:!0,loadedContent:s.a.createElement("main",null,s.a.createElement("a-scene",{cursor:"rayOrigin: mouse",embedded:!0,style:{width:"100%",height:"100%"}},s.a.createElement(d,null),s.a.createElement(p,null)))})}).catch(function(e){return console.error(e)})},a.render=function(){return this.state.loadedContent},t}(s.a.PureComponent);h.propTypes={};var f=h,v=n(163),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},n.handleOpenArticle=n.handleOpenArticle.bind(i()(n)),n.handleCloseArticle=n.handleCloseArticle.bind(i()(n)),n.setWrapperRef=n.setWrapperRef.bind(i()(n)),n.handleClickOutside=n.handleClickOutside.bind(i()(n)),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},n.setWrapperRef=function(e){this.wrapperRef=e},n.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},n.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},n.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},n.render=function(){return s.a.createElement(l.a,{location:this.props.location},s.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},s.a.createElement("div",{id:"wrapper",className:"page"},s.a.createElement(u.a,{active:"creative",chosen:"",onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),s.a.createElement(f,{timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),s.a.createElement(v.a,{timeout:this.state.timeout})),s.a.createElement("div",{id:"bg"})))},t}(s.a.Component);t.default=E},157:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),i=n.n(a),r=n(1),o=n.n(r),c=n(33),s=n.n(c);n.d(t,"a",function(){return s.a}),n.d(t,"c",function(){return c.withPrefix});n(158);var l=i.a.createContext({}),u=function(e){return i.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},159:function(e,t,n){"use strict";var a=n(160),i=n(0),r=n.n(i),o=n(1),c=n.n(o),s=n(164),l=n.n(s),u=n(157),m=(n(165),function(e){var t,n=e.children,i=e.location;return t=i&&"/"===i.pathname?r.a.createElement("div",null,n):r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement("div",null,n)),r.a.createElement(u.b,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Kevin Ready is a developer, musician and adventurist."},{name:"keywords",content:"freelance,react,node,javascript,contractor,developer"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{name:"theme-color",content:"#000000"}),r.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"}),r.a.createElement("meta",{name:"description",content:"Kevin Ready | Creativist"})),t)},data:a})});m.propTypes={children:c.a.node.isRequired},t.a=m},160:function(e){e.exports={data:{site:{siteMetadata:{title:"PlanetKevin 2019"}}}}},161:function(e,t,n){"use strict";n.r(t);n(25);var a=n(0),i=n.n(a),r=n(1),o=n.n(r),c=n(57),s=n(3),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},162:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(157);t.a=function(e){return i.a.createElement("li",null,i.a.createElement(r.a,{to:e.item.toLowerCase()},e.item))}},163:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(1),o=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:n.n(r).a.bool},t.a=o},166:function(e,t,n){"use strict";n(25);var a=n(0),i=n.n(a),r=n(162),o=n(157),c=function(e){return i.a.createElement("nav",null,i.a.createElement(o.a,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(r.a,{item:"Work"}),i.a.createElement(r.a,{item:"Creative"}),i.a.createElement(r.a,{item:"Contact"})))},s=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(r.a,{item:e})))};t.a=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement(c,Object.assign({},e,{chosen:e.chosen})),function(e){var t;switch(e){case"":t=e;break;case"jobs":t=s("recommendations");break;case"recommendations":t=s("work");break;default:t=e}return t}(e.chosen))}}}]);
//# sourceMappingURL=component---src-pages-creative-js-192c05607e848bd6903e.js.map