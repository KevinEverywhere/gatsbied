(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,i){"use strict";i.r(t);var n=i(52),a=i.n(n),r=i(7),l=i.n(r),o=i(0),s=i.n(o),c=i(146),u=i(4),m=i.n(u),p=function(e){return s.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("intro")}},"Work")),s.a.createElement("li",null,s.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("work")}},"Creative")),s.a.createElement("li",null,s.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("contact")}},"Contact")))))};p.propTypes={onOpenArticle:m.a.func,timeout:m.a.bool};var h=p,d=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this;s.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return s.a.createElement("main",null,"Main work div")},t}(s.a.Component);d.propTypes={route:m.a.object,article:m.a.string,articleTimeout:m.a.bool,onCloseArticle:m.a.func,timeout:m.a.bool,setWrapperRef:m.a.func.isRequired};var f=d,b=i(148),v=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},i.handleOpenArticle=i.handleOpenArticle.bind(a()(i)),i.handleCloseArticle=i.handleCloseArticle.bind(a()(i)),i.setWrapperRef=i.setWrapperRef.bind(a()(i)),i.handleClickOutside=i.handleClickOutside.bind(a()(i)),i}l()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},i.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},i.setWrapperRef=function(e){this.wrapperRef=e},i.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},i.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},i.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},i.render=function(){return s.a.createElement(c.a,{location:this.props.location},s.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},s.a.createElement("div",{id:"wrapper",className:"page"},s.a.createElement(h,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),s.a.createElement(f,{timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),s.a.createElement(b.a,{timeout:this.state.timeout})),s.a.createElement("div",{id:"bg"})))},t}(s.a.Component);t.default=v},148:function(e,t,i){"use strict";var n=i(0),a=i.n(n),r=i(4),l=function(e){return a.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},a.a.createElement("p",{className:"copyright"},"© Gatsby Starter - Dimension. Design: ",a.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),". Built with: ",a.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")))};l.propTypes={timeout:i.n(r).a.bool},t.a=l}}]);
//# sourceMappingURL=component---src-pages-work-js-6fcf77ac4cd524f02027.js.map