(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{158:function(e,t,a){"use strict";a.r(t);var n=a(40),r=a.n(n),i=a(10),c=a.n(i),o=a(0),l=a.n(o),s=a(30),m=a(167),u=a(170),d=a(169),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={timeout:!1,loading:"is-loading"},a.setWrapperRef=a.setWrapperRef.bind(r()(a)),a}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.setWrapperRef=function(e){this.wrapperRef=e},a.render=function(){return l.a.createElement(m.a,{location:this.props.location},l.a.createElement("div",{className:"body "+this.state.loading},l.a.createElement("div",{id:"wrapper",className:"page"},l.a.createElement(u.a,{timeout:this.state.timeout}),l.a.createElement("div",{className:"deadCenter"},l.a.createElement("p",null,"Messages will be responded to within 24 hours. Thank you for contacting me."),l.a.createElement(s.a,{to:"/"},l.a.createElement("div",{className:"lglogo"},l.a.createElement("span",{className:"icon fa-bicycle"}))," Home")),l.a.createElement(d.a,{timeout:this.state.timeout})),l.a.createElement("div",{id:"bg"})))},t}(l.a.Component);t.default=p},166:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(30);t.a=function(e){return r.a.createElement("li",null,r.a.createElement(i.a,{to:e.item.toLowerCase()},e.item))}},167:function(e,t,a){"use strict";var n=a(168),r=a(0),i=a.n(r),c=a(1),o=a.n(c),l=a(171),s=a.n(l),m=a(30),u=(a(172),function(e){var t,a=e.children,r=e.location;return t=r&&"/"===r.pathname?i.a.createElement("div",null,a):i.a.createElement("div",{id:"wrapper",className:"page"},i.a.createElement("div",null,a)),i.a.createElement(m.b,{query:"2994927498",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Kevin Ready is a developer, musician and adventurist."},{name:"keywords",content:"freelance,react,node,javascript,contractor,developer"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{name:"theme-color",content:"#000000"}),i.a.createElement("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),i.a.createElement("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"}),i.a.createElement("meta",{name:"description",content:"Kevin Ready | Creativist"})),t)},data:n})});u.propTypes={children:o.a.node.isRequired},t.a=u},168:function(e){e.exports={data:{site:{siteMetadata:{title:"PlanetKevin | 2019"}}}}},169:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),c=function(e){return r.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},r.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",r.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",r.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};c.propTypes={timeout:a.n(i).a.bool},t.a=c},170:function(e,t,a){"use strict";a(22);var n=a(0),r=a.n(n),i=a(166),c=a(30),o=function(e){return r.a.createElement("nav",null,r.a.createElement(c.a,{to:"/"},r.a.createElement("div",{className:"smlogo"},r.a.createElement("span",{className:"icon fa-bicycle"}))),r.a.createElement("ul",null,r.a.createElement(i.a,{item:"Work"}),r.a.createElement(i.a,{item:"Creative"}),r.a.createElement(i.a,{item:"Contact"})))},l=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(i.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return r.a.createElement("header",{id:"header"},r.a.createElement(o,Object.assign({},e,{chosen:e.chosen})),l(e.chosen))}}}]);
//# sourceMappingURL=component---src-pages-contact-reply-js-ae111e4c5813be2983b7.js.map