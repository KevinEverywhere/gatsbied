(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{161:function(e,t,i){"use strict";i.r(t);var a=i(40),n=i.n(a),l=i(9),s=i.n(l),r=i(0),c=i.n(r),o=i(168),m=i(1),u=i.n(m),d=i(165),p=function(){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement(d.a,{item:"Work"}),c.a.createElement(d.a,{item:"Creative"}),c.a.createElement(d.a,{item:"Contact"})))},h=function(e){return c.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},c.a.createElement("div",{className:"logo"},c.a.createElement("span",{className:"icon fa-bicycle"})),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"inner"},c.a.createElement("h2",null,"Welcome!"),c.a.createElement("p",{className:"singleSpace"},"I am a Mobile-first"),c.a.createElement("p",{className:"singleSpace"},"front end developer who enjoys"),c.a.createElement("p",{className:"singleSpace"},"playing keytar and bicycling"),c.a.createElement("p",{className:"singleSpace"},"when not pushing cloud content."),c.a.createElement("p",null,"©2019 • Kevin Ready"))),c.a.createElement(p,null))};h.propTypes={onOpenArticle:u.a.func,timeout:u.a.bool};var f=h,E=i(166),b=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},i.handleOpenArticle=i.handleOpenArticle.bind(n()(i)),i.handleCloseArticle=i.handleCloseArticle.bind(n()(i)),i.setWrapperRef=i.setWrapperRef.bind(n()(i)),i.handleClickOutside=i.handleClickOutside.bind(n()(i)),i}s()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},i.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},i.setWrapperRef=function(e){this.wrapperRef=e},i.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},i.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},i.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},i.render=function(){return c.a.createElement(o.a,{location:this.props.location},c.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},c.a.createElement("div",{id:"wrapper"},c.a.createElement(f,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),c.a.createElement(E.a,{timeout:this.state.timeout})),c.a.createElement("div",{id:"bg"})))},t}(c.a.Component);t.default=b},165:function(e,t,i){"use strict";var a=i(0),n=i.n(a),l=i(21);t.a=function(e){return n.a.createElement("li",null,n.a.createElement(l.Link,{to:e.item.toLowerCase()},e.item))}},166:function(e,t,i){"use strict";var a=i(0),n=i.n(a),l=i(1),s=function(e){return n.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},n.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",n.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",n.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};s.propTypes={timeout:i.n(l).a.bool},t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-68525850eedf9883d574.js.map