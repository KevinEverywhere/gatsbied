(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{157:function(e,t,a){"use strict";a.r(t);var n=a(40),i=a.n(n),r=a(8),o=a.n(r),s=a(0),l=a.n(s),c=a(31),u=a(168),m=a(167),f=(a(169),a(166)),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i()(a)),a.setWrapperRef=a.setWrapperRef.bind(i()(a)),a.handleClickOutside=a.handleClickOutside.bind(i()(a)),a}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return l.a.createElement(u.a,{location:this.props.location},l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},l.a.createElement("div",{id:"wrapper",className:"page"},l.a.createElement(m.a,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),l.a.createElement("div",{className:"deadCenter"},l.a.createElement("p",null,"Please forgive a disobedient technology. Its day of reckoning is at hand."),l.a.createElement(c.Link,{to:"/"},l.a.createElement("div",{className:"lglogo"},l.a.createElement("span",{className:"icon fa-bicycle"}))," Home")),l.a.createElement(f.a,{timeout:this.state.timeout})),l.a.createElement("div",{id:"bg"})))},t}(l.a.Component);t.default=d},165:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(31);t.a=function(e){return i.a.createElement("li",null,i.a.createElement(r.Link,{to:e.item.toLowerCase()},e.item))}},166:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),o=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:a.n(r).a.bool},t.a=o},167:function(e,t,a){"use strict";a(21);var n=a(0),i=a.n(n),r=a(165),o=a(31),s=function(e){return i.a.createElement("nav",null,i.a.createElement(o.Link,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(r.a,{item:"Work"}),i.a.createElement(r.a,{item:"Creative"}),i.a.createElement(r.a,{item:"Contact"})))},l=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(r.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),l(e.chosen))}},169:function(e,t,a){"use strict";a(170),a(87),a(175);var n=a(8),i=a.n(n),r=a(0),o=a.n(r),s=a(1),l=a.n(s),c=a(28),u=function(e){function t(t){var a;return(a=e.call(this)||this).handleChange=function(e){var t=a.state.fields;t[e.target.name]=e.target.value,console.log(t),a.setState({fields:t})},a.sendFields=function(){Object(c.e)(a.state.fields)},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.fields),a.validateForm()&&a.sendFields()},a.validateForm=function(){var e=a.state.fields,t={},n=!0;(e.uname||(n=!1,t.uname="Please enter your name."),void 0!==e.uname&&(e.uname.match(/^[a-zA-Z ]*$/)||(n=!1,t.uname="Please enter alphabetic characters only.")),e.message||(n=!1,t.message="Please enter a message."),e.email||(n=!1,t.email="*Please enter your email-ID."),void 0!==e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(n=!1,t.email="*Please enter valid email-ID."));return a.setState({errors:t}),n},a.state={fields:{},errors:{}},a}return i()(t,e),t.prototype.render=function(){return o.a.createElement("main",null,o.a.createElement("form",{name:"contactForm",onSubmit:this.handleSubmit,method:"post"},o.a.createElement("div",{className:"field half first"},o.a.createElement("label",{htmlFor:"uname"},"Name ",o.a.createElement("span",{style:{color:"white",fontWeight:900}},this.state.errors.uname)),o.a.createElement("input",{onChange:this.handleChange,type:"text",name:"uname",id:"uname"})),o.a.createElement("div",{className:"field half"},o.a.createElement("label",{htmlFor:"email"},"Email ",o.a.createElement("span",{style:{color:"white",fontWeight:900}},this.state.errors.email)),o.a.createElement("input",{onChange:this.handleChange,type:"text",name:"email",id:"email"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"message"},"Message"),o.a.createElement("textarea",{onChange:this.handleChange,name:"message",id:"message",rows:"6"})),o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("input",{type:"submit",name:"submitter",value:"Send Message",className:"special"})),o.a.createElement("li",null,o.a.createElement("input",{type:"reset",name:"resetter",value:"Reset"}))),o.a.createElement("input",{type:"hidden",name:"_text",value:"contactReply"})))},t}(o.a.Component);u.propTypes={route:l.a.object,article:l.a.string,articleTimeout:l.a.bool,onCloseArticle:l.a.func,timeout:l.a.bool,setWrapperRef:l.a.func.isRequired},t.a=u},170:function(e,t,a){var n=a(7),i=a(171),r=a(32).f,o=a(174).f,s=a(66),l=a(84),c=n.RegExp,u=c,m=c.prototype,f=/a/g,d=/a/g,p=new c(f)!==f;if(a(20)&&(!p||a(22)(function(){return d[a(4)("match")]=!1,c(f)!=f||c(d)==d||"/a/i"!=c(f,"i")}))){c=function(e,t){var a=this instanceof c,n=s(e),r=void 0===t;return!a&&n&&e.constructor===c&&r?e:i(p?new u(n&&!r?e.source:e,t):u((n=e instanceof c)?e.source:e,n&&r?l.call(e):t),a?this:m,c)};for(var h=function(e){e in c||r(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},E=o(u),g=0;E.length>g;)h(E[g++]);m.constructor=c,c.prototype=m,a(23)(n,"RegExp",c)}a(90)("RegExp")},171:function(e,t,a){var n=a(12),i=a(172).set;e.exports=function(e,t,a){var r,o=t.constructor;return o!==a&&"function"==typeof o&&(r=o.prototype)!==a.prototype&&n(r)&&i&&i(e,r),e}},172:function(e,t,a){var n=a(12),i=a(6),r=function(e,t){if(i(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(24)(Function.call,a(173).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,a){return r(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:r}},173:function(e,t,a){var n=a(89),i=a(64),r=a(41),o=a(86),s=a(33),l=a(85),c=Object.getOwnPropertyDescriptor;t.f=a(20)?c:function(e,t){if(e=r(e),t=o(t,!0),l)try{return c(e,t)}catch(a){}if(s(e,t))return i(!n.f.call(e,t),e[t])}},174:function(e,t,a){var n=a(88),i=a(65).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},175:function(e,t,a){var n=a(32).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||a(20)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-contact-oops-js-8dbf203b388939e09ddd.js.map