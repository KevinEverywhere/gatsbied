(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,t,n){"use strict";n.r(t);var a=n(55),i=n.n(a),r=n(8),o=n.n(r),s=n(0),l=n.n(s),c=n(156),u=n(160),m=n(159),p=(n(162),n(158)),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},n.handleOpenArticle=n.handleOpenArticle.bind(i()(n)),n.handleCloseArticle=n.handleCloseArticle.bind(i()(n)),n.setWrapperRef=n.setWrapperRef.bind(i()(n)),n.handleClickOutside=n.handleClickOutside.bind(i()(n)),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},n.setWrapperRef=function(e){this.wrapperRef=e},n.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},n.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},n.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},n.render=function(){return l.a.createElement(u.a,{location:this.props.location},l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},l.a.createElement("div",{id:"wrapper",className:"page"},l.a.createElement(m.a,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),l.a.createElement("div",{className:"deadCenter"},l.a.createElement("p",null,"Please forgive a disobedient technology. Its day of reckoning is at hand."),l.a.createElement(c.Link,{to:"/"},l.a.createElement("div",{className:"lglogo"},l.a.createElement("span",{className:"icon fa-bicycle"}))," Home")),l.a.createElement(p.a,{timeout:this.state.timeout})),l.a.createElement("div",{id:"bg"})))},t}(l.a.Component);t.default=d},157:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(156);t.a=function(e){return i.a.createElement("li",null,i.a.createElement(r.Link,{to:e.item.toLowerCase()},e.item))}},158:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:n.n(r).a.bool},t.a=o},159:function(e,t,n){"use strict";n(25);var a=n(0),i=n.n(a),r=n(157),o=n(156),s=function(e){return i.a.createElement("nav",null,i.a.createElement(o.Link,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(r.a,{item:"Work"}),i.a.createElement(r.a,{item:"Creative"}),i.a.createElement(r.a,{item:"Contact"})))},l=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(r.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),l(e.chosen))}},162:function(e,t,n){"use strict";n(163),n(81),n(168);var a=n(8),i=n.n(a),r=n(0),o=n.n(r),s=n(2),l=n.n(s),c=n(156),u=function(e){function t(t){var n;return(n=e.call(this)||this).handleChange=function(e){var t=n.state.fields;t[e.target.name]=e.target.value,console.log(t),n.setState({fields:t})},n.sendFields=function(){var e=n.state.fields;fetch("https://planetkevin.com/scripts/jsonEmail.php",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, OPTIONS","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},body:e}).then(function(e){return console.log("got a response: "+e),e.json()}).then(function(e){Object(c.navigate)("/contactReply"),console.log(JSON.stringify(e))}).catch(function(e){Object(c.navigate)("/contactOops"),console.error(e)})},n.handleSubmit=function(e){e.preventDefault(),console.log(n.state.fields),n.validateForm()&&n.sendFields()},n.validateForm=function(){var e=n.state.fields,t={},a=!0;(e.uname||(a=!1,t.uname="Please enter your name."),void 0!==e.uname&&(e.uname.match(/^[a-zA-Z ]*$/)||(a=!1,t.uname="Please enter alphabetic characters only.")),e.message||(a=!1,t.message="Please enter a message."),e.email||(a=!1,t.email="*Please enter your email-ID."),void 0!==e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(a=!1,t.email="*Please enter valid email-ID."));return n.setState({errors:t}),a},n.state={fields:{},errors:{}},n}return i()(t,e),t.prototype.render=function(){return o.a.createElement("main",null,o.a.createElement("form",{name:"contactForm",onSubmit:this.handleSubmit,method:"post"},o.a.createElement("div",{className:"field half first"},o.a.createElement("label",{htmlFor:"uname"},"Name ",o.a.createElement("span",{style:{color:"white",fontWeight:900}},this.state.errors.uname)),o.a.createElement("input",{onChange:this.handleChange,type:"text",name:"uname",id:"uname"})),o.a.createElement("div",{className:"field half"},o.a.createElement("label",{htmlFor:"email"},"Email ",o.a.createElement("span",{style:{color:"white",fontWeight:900}},this.state.errors.email)),o.a.createElement("input",{onChange:this.handleChange,type:"text",name:"email",id:"email"})),o.a.createElement("div",{className:"field"},o.a.createElement("label",{htmlFor:"message"},"Message"),o.a.createElement("textarea",{onChange:this.handleChange,name:"message",id:"message",rows:"6"})),o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("input",{type:"submit",name:"submitter",value:"Send Message",className:"special"})),o.a.createElement("li",null,o.a.createElement("input",{type:"reset",name:"resetter",value:"Reset"}))),o.a.createElement("input",{type:"hidden",name:"_text",value:"contactReply"})))},t}(o.a.Component);u.propTypes={route:l.a.object,article:l.a.string,articleTimeout:l.a.bool,onCloseArticle:l.a.func,timeout:l.a.bool,setWrapperRef:l.a.func.isRequired},t.a=u},163:function(e,t,n){var a=n(7),i=n(164),r=n(26).f,o=n(167).f,s=n(59),l=n(78),c=a.RegExp,u=c,m=c.prototype,p=/a/g,d=/a/g,f=new c(p)!==p;if(n(16)&&(!f||n(17)(function(){return d[n(4)("match")]=!1,c(p)!=p||c(d)==d||"/a/i"!=c(p,"i")}))){c=function(e,t){var n=this instanceof c,a=s(e),r=void 0===t;return!n&&a&&e.constructor===c&&r?e:i(f?new u(a&&!r?e.source:e,t):u((a=e instanceof c)?e.source:e,a&&r?l.call(e):t),n?this:m,c)};for(var h=function(e){e in c||r(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},g=o(u),E=0;g.length>E;)h(g[E++]);m.constructor=c,c.prototype=m,n(18)(a,"RegExp",c)}n(84)("RegExp")},164:function(e,t,n){var a=n(11),i=n(165).set;e.exports=function(e,t,n){var r,o=t.constructor;return o!==n&&"function"==typeof o&&(r=o.prototype)!==n.prototype&&a(r)&&i&&i(e,r),e}},165:function(e,t,n){var a=n(11),i=n(6),r=function(e,t){if(i(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(19)(Function.call,n(166).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,n){return r(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:r}},166:function(e,t,n){var a=n(83),i=n(57),r=n(33),o=n(80),s=n(27),l=n(79),c=Object.getOwnPropertyDescriptor;t.f=n(16)?c:function(e,t){if(e=r(e),t=o(t,!0),l)try{return c(e,t)}catch(n){}if(s(e,t))return i(!a.f.call(e,t),e[t])}},167:function(e,t,n){var a=n(82),i=n(58).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,i)}},168:function(e,t,n){var a=n(26).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(16)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-contact-oops-js-468a5cfeeeb7c710b0dd.js.map