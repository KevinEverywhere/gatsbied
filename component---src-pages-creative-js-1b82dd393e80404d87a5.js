(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(e,t,a){"use strict";a.r(t);var n=a(34),i=a.n(n),r=a(8),o=a.n(r),s=a(0),c=a.n(s),l=a(159),u=a(166),m=(a(1),a(157)),d=function(e){function t(t){var a;return(a=e.call(this)||this).state={loadedContent:null},a}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;a.e(14).then(a.t.bind(null,183,7)).then(function(t){e.setState({loadedContent:c.a.createElement("main",null,c.a.createElement("a-scene",{embedded:!0,style:{width:"100%",height:"100%"}},c.a.createElement("a-assets",null,c.a.createElement("video",{id:"skyTexture",src:"https://planetkevin.com/videos360/firstCrossClip.mp4",crossOrigin:"anonymous"})),c.a.createElement("a-box",{position:"-3 0.5 3",rotation:"0 45 0",color:"#4CC3D9"}),c.a.createElement("a-sphere",{position:"0 1.25 5",radius:"1.25",color:"#2D5EEF"}),c.a.createElement("a-cylinder",{position:"2 0.75 1",radius:"0.5",height:"1.5",color:"#FFC65D"}),c.a.createElement("a-plane",{position:"0 -1 4",rotation:"-90 0 0",width:"4",height:"4",color:"#7BC8A4"}),c.a.createElement("a-video",{src:"#skyTexture",rotation:"0 180 0",width:"8",height:"4",position:"-1 0 4"},c.a.createElement("a-animation",{attribute:"rotation",repeat:"indefinite",to:"0 360 0",dur:"3000",easing:"linear"})),c.a.createElement("a-sky",{color:"#954"})))})}).catch(function(e){return console.error(e)})},n.assets=function(){return c.a.createElement("a-assets",null,c.a.createElement("video",{id:"skyTexture",src:Object(m.c)("/videos/satTemptingHaight.mp4"),crossOrigin:"anonymous"}))},n.render=function(){return this.state.loadedContent},t}(c.a.Component);d.propTypes={};var p=d,h=a(163),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i()(a)),a.setWrapperRef=a.setWrapperRef.bind(i()(a)),a.handleClickOutside=a.handleClickOutside.bind(i()(a)),a}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return c.a.createElement(l.a,{location:this.props.location},c.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},c.a.createElement("div",{id:"wrapper",className:"page"},c.a.createElement(u.a,{active:"creative",chosen:"",onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),c.a.createElement(p,{timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),c.a.createElement(h.a,{timeout:this.state.timeout})),c.a.createElement("div",{id:"bg"})))},t}(c.a.Component);t.default=f},157:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),i=a.n(n),r=a(1),o=a.n(r),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a}),a.d(t,"c",function(){return s.withPrefix});a(158);var l=i.a.createContext({}),u=function(e){return i.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},159:function(e,t,a){"use strict";var n=a(160),i=a(0),r=a.n(i),o=a(1),s=a.n(o),c=a(164),l=a.n(c),u=a(157),m=(a(165),function(e){var t,a=e.children,i=e.location;return t=i&&"/"===i.pathname?r.a.createElement("div",null,a):r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement("div",null,a)),r.a.createElement(u.b,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Kevin Ready is a developer, musician and adventurist."},{name:"keywords",content:"freelance,react,node,javascript,contractor,developer"},{name:"Access-Control-Request-Headers",content:"Accept"},{name:"Access-Control-Allow-Origin",content:"*"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{name:"theme-color",content:"#000000"}),r.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),r.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"}),r.a.createElement("meta",{name:"description",content:"Kevin Ready | Creativist"})),t)},data:n})});m.propTypes={children:s.a.node.isRequired},t.a=m},160:function(e){e.exports={data:{site:{siteMetadata:{title:"PlanetKevin 2019"}}}}},161:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),i=a.n(n),r=a(1),o=a.n(r),s=a(57),c=a(3),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},162:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=(a(1),a(157));t.a=function(e){return i.a.createElement("li",null,i.a.createElement(r.a,{to:e.item.toLowerCase()},e.item))}},163:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),o=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:a.n(r).a.bool},t.a=o},166:function(e,t,a){"use strict";a(25);var n=a(0),i=a.n(n),r=(a(1),a(162)),o=a(157),s=function(e){return i.a.createElement("nav",null,i.a.createElement(o.a,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(r.a,{item:"Work"}),i.a.createElement(r.a,{item:"Creative"}),i.a.createElement(r.a,{item:"Contact"})))},c=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(r.a,{item:e})))};t.a=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),function(e){var t;switch(e){case"":t=e;break;case"jobs":t=c("recommendations");break;case"recommendations":t=c("work");break;default:t=e}return t}(e.chosen))}}}]);
//# sourceMappingURL=component---src-pages-creative-js-1b82dd393e80404d87a5.js.map