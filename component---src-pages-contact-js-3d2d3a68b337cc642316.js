(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.r(t);var n=a(55),i=a.n(n),s=a(8),l=a.n(s),r=a(0),o=a.n(r),c=a(161),m=a(160),u=a(163),d=a(158),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i()(a)),a.setWrapperRef=a.setWrapperRef.bind(i()(a)),a.handleClickOutside=a.handleClickOutside.bind(i()(a)),a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return o.a.createElement(c.a,{location:this.props.location},o.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},o.a.createElement("div",{id:"wrapper",className:"page"},o.a.createElement(m.a,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),o.a.createElement(u.a,{nextPage:"ContactReply",timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),o.a.createElement(d.a,{timeout:this.state.timeout})),o.a.createElement("div",{id:"bg"})))},t}(o.a.Component);t.default=h},157:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(156);t.a=function(e){return i.a.createElement("li",null,i.a.createElement(s.Link,{to:e.item.toLowerCase()},e.item))}},158:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(2),l=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};l.propTypes={timeout:a.n(s).a.bool},t.a=l},160:function(e,t,a){"use strict";a(25);var n=a(0),i=a.n(n),s=a(157),l=a(156),r=function(e){return i.a.createElement("nav",null,i.a.createElement(l.Link,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(s.a,{item:"Work"}),i.a.createElement(s.a,{item:"Creative"}),i.a.createElement(s.a,{item:"Contact"})))},o=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(s.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement(r,Object.assign({},e,{chosen:e.chosen})),o(e.chosen))}},163:function(e,t,a){"use strict";a(164),a(78),a(165);var n=a(8),i=a.n(n),s=a(0),l=a.n(s),r=a(2),o=a.n(r),c=a(166),m=a.n(c),u=a(156),d=function(e){function t(t){var a;return(a=e.call(this)||this).handleChange=function(e){var t=a.state.fields;t[e.target.name]=e.target.value,a.setState({fields:t})},a.sendFields=function(){var e,t=a.state.fields;m.a.post("https://planetkevin.com/jsonEmail.php",{headers:(e={"X-Requested-With":"XMLHttpRequest","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*"},e["Access-Control-Allow-Origin"]="*",e["Content-Type"]="application/json",e),responseType:"json",responseEncoding:"utf8",timeout:5e3,data:t}).then(function(e){Object(u.navigate)("/contactReply")}).catch(function(e){Object(u.navigate)("/contactOops")})},a.handleSubmit=function(e){e.preventDefault(),a.validateForm()&&a.sendFields()},a.validateForm=function(){var e=a.state.fields,t={},n=!0;(e.uname||(n=!1,t.uname="Please enter your name."),void 0!==e.uname&&(e.uname.match(/^[a-zA-Z ]*$/)||(n=!1,t.uname="Please enter alphabetic characters only.")),e.message||(n=!1,t.message="Please enter a message."),e.email||(n=!1,t.email="*Please enter your email-ID."),void 0!==e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(n=!1,t.email="*Please enter valid email-ID."));return a.setState({errors:t}),n},a.state={fields:{},errors:{}},a}return i()(t,e),t.prototype.render=function(){return l.a.createElement("main",null,l.a.createElement("form",{name:"contactForm",onSubmit:this.handleSubmit,method:"post"},l.a.createElement("div",{className:"field half first"},l.a.createElement("label",{htmlFor:"uname"},"Name ",l.a.createElement("span",{style:{color:"white",fontWeight:900}},this.state.errors.uname)),l.a.createElement("input",{onChange:this.handleChange,type:"text",name:"uname",id:"uname"})),l.a.createElement("div",{className:"field half"},l.a.createElement("label",{htmlFor:"email"},"Email ",l.a.createElement("span",{style:{color:"white",fontWeight:900}},this.state.errors.email)),l.a.createElement("input",{onChange:this.handleChange,type:"text",name:"email",id:"email"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{onChange:this.handleChange,name:"message",id:"message",rows:"6"})),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("input",{type:"submit",name:"submitter",value:"Send Message",className:"special"})),l.a.createElement("li",null,l.a.createElement("input",{type:"reset",name:"resetter",value:"Reset"}))),l.a.createElement("input",{type:"hidden",name:"_text",value:"contactReply"})))},t}(l.a.Component);d.propTypes={route:o.a.object,article:o.a.string,articleTimeout:o.a.bool,onCloseArticle:o.a.func,timeout:o.a.bool,setWrapperRef:o.a.func.isRequired},t.a=d}}]);
//# sourceMappingURL=component---src-pages-contact-js-3d2d3a68b337cc642316.js.map