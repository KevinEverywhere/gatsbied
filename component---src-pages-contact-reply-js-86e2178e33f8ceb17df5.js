(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,t,a){"use strict";a.r(t);var n=a(55),i=a.n(n),l=a(8),r=a.n(l),s=a(0),c=a.n(s),o=a(155),m=a(159),u=a(158),d=(a(161),a(157)),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i()(a)),a.setWrapperRef=a.setWrapperRef.bind(i()(a)),a.handleClickOutside=a.handleClickOutside.bind(i()(a)),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return c.a.createElement(m.a,{location:this.props.location},c.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},c.a.createElement("div",{id:"wrapper",className:"page"},c.a.createElement(u.a,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),c.a.createElement("div",{className:"deadCenter"},c.a.createElement("p",null,"Messages will be responded to within 24 hours. Thank you for contacting me."),c.a.createElement(o.Link,{to:"/"},c.a.createElement("div",{className:"lglogo"},c.a.createElement("span",{className:"icon fa-bicycle"}))," Home")),c.a.createElement(d.a,{timeout:this.state.timeout})),c.a.createElement("div",{id:"bg"})))},t}(c.a.Component);t.default=p},156:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(155);t.a=function(e){return i.a.createElement("li",null,i.a.createElement(l.Link,{to:e.item.toLowerCase()},e.item))}},157:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(2),r=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};r.propTypes={timeout:a.n(l).a.bool},t.a=r},158:function(e,t,a){"use strict";a(25);var n=a(0),i=a.n(n),l=a(156),r=a(155),s=function(e){return i.a.createElement("nav",null,i.a.createElement(r.Link,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(l.a,{item:"Work"}),i.a.createElement(l.a,{item:"Creative"}),i.a.createElement(l.a,{item:"Contact"})))},c=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(l.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),c(e.chosen))}},161:function(e,t,a){"use strict";var n=a(8),i=a.n(n),l=a(0),r=a.n(l),s=a(2),c=a.n(s),o=function(e){function t(t){return e.call(this)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("main",null,r.a.createElement("form",{method:"post",action:"/contactReply"},r.a.createElement("div",{className:"field half first"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"field half"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",name:"email",id:"email"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"message"},"Message"),r.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),r.a.createElement("li",null,r.a.createElement("input",{type:"reset",value:"Reset"}))),r.a.createElement("input",{type:"hidden",name:"_text",value:"contactReply"})))},t}(r.a.Component);o.propTypes={route:c.a.object,article:c.a.string,articleTimeout:c.a.bool,onCloseArticle:c.a.func,timeout:c.a.bool,setWrapperRef:c.a.func.isRequired},t.a=o}}]);
//# sourceMappingURL=component---src-pages-contact-reply-js-86e2178e33f8ceb17df5.js.map