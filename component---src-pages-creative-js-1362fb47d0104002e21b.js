(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(e,t,i){"use strict";i.r(t);var a=i(55),n=i.n(a),r=i(8),o=i.n(r),s=i(0),l=i.n(s),c=i(157),u=i(159),m=(i(2),i(155)),d=function(e){function t(t){var i;return(i=e.call(this)||this).state={loadedContent:null},i}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;i.e(14).then(i.t.bind(null,183,7)).then(function(t){e.setState({loadedContent:l.a.createElement("main",null,l.a.createElement("a-scene",{embedded:!0,style:{width:"100%",height:"100%"}},e.assets(),l.a.createElement("a-box",{position:"-3 0.5 3",rotation:"0 45 0",color:"#4CC3D9"}),l.a.createElement("a-sphere",{position:"0 1.25 5",radius:"1.25",color:"#EF2D5E"}),l.a.createElement("a-cylinder",{position:"2 0.75 1",radius:"0.5",height:"1.5",color:"#FFC65D"}),l.a.createElement("a-plane",{position:"0 -1 4",rotation:"-90 0 0",width:"4",height:"4",color:"#7BC8A4"}),l.a.createElement("a-video",{src:"#skyTexture",rotation:"0 180 0",width:"8",height:"4",position:"-1 0 4"},l.a.createElement("a-animation",{attribute:"rotation",repeat:"indefinite",to:"0 360 0",dur:"3000",easing:"linear"})),l.a.createElement("a-sky",{color:"#954"})))})}).catch(function(e){return console.error(e)})},a.assets=function(){return l.a.createElement("a-assets",null,l.a.createElement("video",{id:"skyTexture",src:Object(m.withPrefix)("/videos/satTemptingHaight.mp4"),crossOrigin:"anonymous"}))},a.render=function(){return this.state.loadedContent},t}(l.a.Component);d.propTypes={};var h=d,p=i(156),f=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},i.handleOpenArticle=i.handleOpenArticle.bind(n()(i)),i.handleCloseArticle=i.handleCloseArticle.bind(n()(i)),i.setWrapperRef=i.setWrapperRef.bind(n()(i)),i.handleClickOutside=i.handleClickOutside.bind(n()(i)),i}o()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},i.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},i.setWrapperRef=function(e){this.wrapperRef=e},i.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},i.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},i.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},i.render=function(){return l.a.createElement(c.a,{location:this.props.location},l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},l.a.createElement("div",{id:"wrapper",className:"page"},l.a.createElement(u.a,{active:"creative",chosen:"",onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),l.a.createElement(h,{timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),l.a.createElement(p.a,{timeout:this.state.timeout})),l.a.createElement("div",{id:"bg"})))},t}(l.a.Component);t.default=f},154:function(e,t,i){"use strict";var a=i(0),n=i.n(a),r=(i(2),i(155));t.a=function(e){return n.a.createElement("li",null,n.a.createElement(r.Link,{to:e.item.toLowerCase()},e.item))}},156:function(e,t,i){"use strict";var a=i(0),n=i.n(a),r=i(2),o=function(e){return n.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},n.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",n.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",n.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:i.n(r).a.bool},t.a=o},159:function(e,t,i){"use strict";i(25);var a=i(0),n=i.n(a),r=(i(2),i(154)),o=i(155),s=function(e){return n.a.createElement("nav",null,n.a.createElement(o.Link,{to:"/"},n.a.createElement("div",{className:"smlogo"},n.a.createElement("span",{className:"icon fa-bicycle"}))),n.a.createElement("ul",null,n.a.createElement(r.a,{item:"Work"}),n.a.createElement(r.a,{item:"Creative"}),n.a.createElement(r.a,{item:"Contact"})))},l=function(e){return n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement(r.a,{item:e})))};t.a=function(e){return n.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},n.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),function(e){var t;switch(e){case"":t=e;break;case"jobs":t=l("recommendations");break;case"recommendations":t=l("work");break;default:t=e}return t}(e.chosen))}}}]);
//# sourceMappingURL=component---src-pages-creative-js-1362fb47d0104002e21b.js.map