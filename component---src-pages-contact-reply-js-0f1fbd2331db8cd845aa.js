(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,a){"use strict";a.r(t);var n=a(55),i=a.n(n),l=a(8),s=a.n(l),r=a(0),o=a.n(r),c=a(155),m=a(160),u=a(159),d=(a(162),a(158)),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i()(a)),a.setWrapperRef=a.setWrapperRef.bind(i()(a)),a.handleClickOutside=a.handleClickOutside.bind(i()(a)),a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return o.a.createElement(m.a,{location:this.props.location},o.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},o.a.createElement("div",{id:"wrapper",className:"page"},o.a.createElement(u.a,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),o.a.createElement("div",{className:"deadCenter"},o.a.createElement("p",null,"Messages will be responded to within 24 hours. Thank you for contacting me."),o.a.createElement(c.Link,{to:"/"},o.a.createElement("div",{className:"lglogo"},o.a.createElement("span",{className:"icon fa-bicycle"}))," Home")),o.a.createElement(d.a,{timeout:this.state.timeout})),o.a.createElement("div",{id:"bg"})))},t}(o.a.Component);t.default=h},156:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(155);t.a=function(e){return i.a.createElement("li",null,i.a.createElement(l.Link,{to:e.item.toLowerCase()},e.item))}},158:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(2),s=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};s.propTypes={timeout:a.n(l).a.bool},t.a=s},159:function(e,t,a){"use strict";a(25);var n=a(0),i=a.n(n),l=a(156),s=a(155),r=function(e){return i.a.createElement("nav",null,i.a.createElement(s.Link,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(l.a,{item:"Work"}),i.a.createElement(l.a,{item:"Creative"}),i.a.createElement(l.a,{item:"Contact"})))},o=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(l.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement(r,Object.assign({},e,{chosen:e.chosen})),o(e.chosen))}},162:function(e,t,a){"use strict";a(169),a(78),a(170);var n=a(8),i=a.n(n),l=a(0),s=a.n(l),r=a(2),o=a.n(r),c=a(171),m=a.n(c),u=a(155),d=function(e){function t(t){var a;return(a=e.call(this)||this).state={fields:{},errors:{}},a}i()(t,e);var a=t.prototype;return a.handleChange=function(e){var t=this.state.fields;t[e.target.name]=e.target.value,this.setState({fields:t})},a.sendFields=function(){var e=this.state.fields;m.a.post("https://planetkevin.com/json-email.php",{fields:e}).then(function(e){Object(u.navigate)("/contactReply"),console.log(e),console.log(e.data)})},a.handleSubmit=function(e){e.preventDefault(),this.validateForm()&&this.sendFields()},a.validateForm=function(){var e=this.state.fields,t={},a=!0;(e.uname||(a=!1,t.uname="Please enter your name."),void 0!==e.uname&&(e.uname.match(/^[a-zA-Z ]*$/)||(a=!1,t.uname="Please enter alphabetic characters only.")),e.message||(a=!1,t.message="Please enter a message."),e.email||(a=!1,t.email="*Please enter your email-ID."),void 0!==e.email)&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(e.email)||(a=!1,t.email="*Please enter valid email-ID."));return this.setState({errors:t}),a},a.render=function(){return s.a.createElement("main",null,s.a.createElement("form",{name:"contactForm",onSubmit:this.handleSubmit,method:"post"},s.a.createElement("div",{className:"field half first"},s.a.createElement("label",{htmlFor:"uname"},"Name")," ",s.a.createElement("span",{style:{color:"red"}},this.state.errors.uname),s.a.createElement("input",{onChange:this.handleChange,type:"text",name:"uname",id:"uname"})),s.a.createElement("div",{className:"field half"},s.a.createElement("label",{htmlFor:"email"},"Email")," ",s.a.createElement("span",{style:{color:"red"}},this.state.errors.email),s.a.createElement("input",{onChange:this.handleChange,type:"text",name:"email",id:"email"})),s.a.createElement("div",{className:"field"},s.a.createElement("label",{htmlFor:"message"},"Message"),s.a.createElement("textarea",{onChange:this.handleChange,name:"message",id:"message",rows:"6"})),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),s.a.createElement("li",null,s.a.createElement("input",{type:"reset",value:"Reset"}))),s.a.createElement("input",{type:"hidden",name:"_text",value:"contactReply"})))},t}(s.a.Component);d.propTypes={route:o.a.object,article:o.a.string,articleTimeout:o.a.bool,onCloseArticle:o.a.func,timeout:o.a.bool,setWrapperRef:o.a.func.isRequired},t.a=d}}]);
//# sourceMappingURL=component---src-pages-contact-reply-js-0f1fbd2331db8cd845aa.js.map