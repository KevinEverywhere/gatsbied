(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{153:function(e,t,a){"use strict";a.r(t);var i=a(55),n=a.n(i),l=a(8),r=a.n(l),s=a(0),c=a.n(s),o=a(159),m=a(158),u=a(2),d=a.n(u),h=function(e){function t(t){return e.call(this)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement("main",null,c.a.createElement("form",{method:"post",action:"#"},c.a.createElement("div",{className:"field half first"},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",name:"name",id:"name"})),c.a.createElement("div",{className:"field half"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"text",name:"email",id:"email"})),c.a.createElement("div",{className:"field"},c.a.createElement("label",{htmlFor:"message"},"Message"),c.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),c.a.createElement("li",null,c.a.createElement("input",{type:"reset",value:"Reset"})))))},t}(c.a.Component);h.propTypes={route:d.a.object,article:d.a.string,articleTimeout:d.a.bool,onCloseArticle:d.a.func,timeout:d.a.bool,setWrapperRef:d.a.func.isRequired};var p=h,f=a(156),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(n()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(n()(a)),a.setWrapperRef=a.setWrapperRef.bind(n()(a)),a.handleClickOutside=a.handleClickOutside.bind(n()(a)),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return c.a.createElement(o.a,{location:this.props.location},c.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},c.a.createElement("div",{id:"wrapper",className:"page"},c.a.createElement(m.a,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),c.a.createElement(p,{timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),c.a.createElement(f.a,{timeout:this.state.timeout})),c.a.createElement("div",{id:"bg"})))},t}(c.a.Component);t.default=E},154:function(e,t,a){"use strict";var i=a(0),n=a.n(i),l=a(155);t.a=function(e){return n.a.createElement("li",null,n.a.createElement(l.Link,{to:e.item.toLowerCase()},e.item))}},156:function(e,t,a){"use strict";var i=a(0),n=a.n(i),l=a(2),r=function(e){return n.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},n.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",n.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",n.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};r.propTypes={timeout:a.n(l).a.bool},t.a=r},158:function(e,t,a){"use strict";a(25);var i=a(0),n=a.n(i),l=a(154),r=a(155),s=function(e){return n.a.createElement("nav",null,n.a.createElement(r.Link,{to:"/"},n.a.createElement("div",{className:"smlogo"},n.a.createElement("span",{className:"icon fa-bicycle"}))),n.a.createElement("ul",null,n.a.createElement(l.a,{item:"Work"}),n.a.createElement(l.a,{item:"Creative"}),n.a.createElement(l.a,{item:"Contact"})))},c=function(e){return n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement(l.a,{item:e})))};t.a=function(e){return n.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},n.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),function(e){var t;switch(e){case"":t=e;break;case"jobs":t=c("recommendations");break;case"recommendations":t=c("work");break;default:t=e}return t}(e.chosen))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-f2bc9c6d99319d9528a9.js.map