(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,i){"use strict";i.r(t);var a=i(52),n=i.n(a),r=i(7),s=i.n(r),o=i(0),l=i.n(o),c=i(151),u=i(152),m=i(4),d=i.n(m),h=function(e){function t(t){return e.call(this)||this}return s()(t,e),t.prototype.render=function(){return l.a.createElement("main",null,"Main Contact div")},t}(l.a.Component);h.propTypes={route:d.a.object,article:d.a.string,articleTimeout:d.a.bool,onCloseArticle:d.a.func,timeout:d.a.bool,setWrapperRef:d.a.func.isRequired};var p=h,f=i(150),E=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},i.handleOpenArticle=i.handleOpenArticle.bind(n()(i)),i.handleCloseArticle=i.handleCloseArticle.bind(n()(i)),i.setWrapperRef=i.setWrapperRef.bind(n()(i)),i.handleClickOutside=i.handleClickOutside.bind(n()(i)),i}s()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},i.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},i.setWrapperRef=function(e){this.wrapperRef=e},i.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},i.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},i.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},i.render=function(){return l.a.createElement(c.a,{location:this.props.location},l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},l.a.createElement("div",{id:"wrapper",className:"page"},l.a.createElement(u.a,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),l.a.createElement(p,{timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),l.a.createElement(f.a,{timeout:this.state.timeout})),l.a.createElement("div",{id:"bg"})))},t}(l.a.Component);t.default=E},149:function(e,t,i){"use strict";var a=i(0),n=i.n(a),r=(i(4),i(147));t.a=function(e){return n.a.createElement("li",null,n.a.createElement(r.Link,{to:e.item.toLowerCase()},e.item))}},150:function(e,t,i){"use strict";var a=i(0),n=i.n(a),r=i(4),s=function(e){return n.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},n.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",n.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",n.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};s.propTypes={timeout:i.n(r).a.bool},t.a=s},152:function(e,t,i){"use strict";var a=i(0),n=i.n(a),r=(i(4),i(149)),s=i(147),o=function(e){return n.a.createElement("nav",null,n.a.createElement(s.Link,{to:"/"},n.a.createElement("div",{className:"smlogo"},n.a.createElement("span",{className:"icon fa-bicycle"}))),n.a.createElement("ul",null,n.a.createElement(r.a,{item:"Work"}),n.a.createElement(r.a,{item:"Creative"}),n.a.createElement(r.a,{item:"Contact"})))};t.a=function(e){return n.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},n.a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-315bf17dfe360cb51194.js.map