(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.r(t);var i=a(55),n=a.n(i),l=a(8),s=a.n(l),r=a(0),c=a.n(r),o=a(160),m=a(159),u=a(162),d=a(158),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(n()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(n()(a)),a.setWrapperRef=a.setWrapperRef.bind(n()(a)),a.handleClickOutside=a.handleClickOutside.bind(n()(a)),a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return c.a.createElement(o.a,{location:this.props.location},c.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},c.a.createElement("div",{id:"wrapper",className:"page"},c.a.createElement(m.a,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),c.a.createElement(u.a,{nextPage:"ContactReply",timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),c.a.createElement(d.a,{timeout:this.state.timeout})),c.a.createElement("div",{id:"bg"})))},t}(c.a.Component);t.default=h},156:function(e,t,a){"use strict";var i=a(0),n=a.n(i),l=a(155);t.a=function(e){return n.a.createElement("li",null,n.a.createElement(l.Link,{to:e.item.toLowerCase()},e.item))}},158:function(e,t,a){"use strict";var i=a(0),n=a.n(i),l=a(2),s=function(e){return n.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},n.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",n.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",n.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};s.propTypes={timeout:a.n(l).a.bool},t.a=s},159:function(e,t,a){"use strict";a(25);var i=a(0),n=a.n(i),l=a(156),s=a(155),r=function(e){return n.a.createElement("nav",null,n.a.createElement(s.Link,{to:"/"},n.a.createElement("div",{className:"smlogo"},n.a.createElement("span",{className:"icon fa-bicycle"}))),n.a.createElement("ul",null,n.a.createElement(l.a,{item:"Work"}),n.a.createElement(l.a,{item:"Creative"}),n.a.createElement(l.a,{item:"Contact"})))},c=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement(l.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return n.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},n.a.createElement(r,Object.assign({},e,{chosen:e.chosen})),c(e.chosen))}},162:function(e,t,a){"use strict";a(169),a(78),a(170);var i=a(8),n=a.n(i),l=a(0),s=a.n(l),r=a(2),c=a.n(r),o=(a(171),function(e){function t(t){var a;return(a=e.call(this)||this).state={fields:{},errors:{}},a}n()(t,e);var a=t.prototype;return a.handleChange=function(e){var t=this.state.fields;t[e.target.name]=e.target.value,this.setState({fields:t})},a.sendFields=function(e){},a.handleSubmit=function(e){e.preventDefault();this.validateForm()&&this.sendFields()},a.validateForm=function(){var e=this.state.fields,t={},a=!0;(e.uname||(a=!1,t.uname="Please enter your name."),void 0!==e.uname&&(e.uname.match(/^[a-zA-Z ]*$/)||(a=!1,t.uname="Please enter alphabetic characters only.")),e.message||(a=!1,t.message="Please enter a message."),e.email||(a=!1,t.email="*Please enter your email-ID."),void 0!==e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(a=!1,t.email="*Please enter valid email-ID."));return this.setState({errors:t}),a},a.render=function(){return s.a.createElement("main",null,s.a.createElement("form",{name:"contactForm",onSubmit:this.handleSubmit,method:"post"},s.a.createElement("div",{className:"field half first"},s.a.createElement("label",{htmlFor:"uname"},"Name"),s.a.createElement("input",{type:"text",name:"uname",id:"uname"})),s.a.createElement("div",{className:"field half"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"text",name:"email",id:"email"})),s.a.createElement("div",{className:"field"},s.a.createElement("label",{htmlFor:"message"},"Message"),s.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),s.a.createElement("li",null,s.a.createElement("input",{type:"reset",value:"Reset"}))),s.a.createElement("input",{type:"hidden",name:"_text",value:"contactReply"})))},t}(s.a.Component));o.propTypes={route:c.a.object,article:c.a.string,articleTimeout:c.a.bool,onCloseArticle:c.a.func,timeout:c.a.bool,setWrapperRef:c.a.func.isRequired},t.a=o}}]);
//# sourceMappingURL=component---src-pages-contact-js-e69a517e54da66c47754.js.map