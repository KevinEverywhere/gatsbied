(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{152:function(t,e,o){"use strict";o.r(e);var n=o(34),i=o.n(n),s=o(8),a=o.n(s),c=o(0),r=o.n(c),l=o(159),m=o(166),p=o(169),d=(o(162),o(163)),u=o(168),h=function(t){function e(e){var o;return(o=t.call(this,e)||this).state={position:0,active:!1,jobs:null,recommendations:null,isSelected:"jobs",loading:"is-loading"},o.setWrapperRef=o.setWrapperRef.bind(i()(o)),o}a()(e,t);var o=e.prototype;return o.componentDidMount=function(){var t=this;this.timeoutId=setTimeout(function(){t.setState({loading:"",jobs:u.a.jobs,recommendations:u.a.recommendations})},100)},o.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},o.setWrapperRef=function(t){this.wrapperRef=t},o.selectPosition=function(t){this.setState({currentPosition:t})},o.render=function(){return console.log(this.state.recommendations),console.log(this.state.jobs),r.a.createElement(l.a,{location:this.props.location,position:this.state.position},r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement(m.a,{active:"work",chosen:this.state.isSelected}),r.a.createElement(p.a,{jobs:this.state.jobs,recommendations:this.state.recommendations,position:this.state.position,isSelected:this.state.isSelected}),r.a.createElement(d.a,null)),r.a.createElement("div",{id:"bg"}))},e}(r.a.Component);e.default=h}}]);
//# sourceMappingURL=component---src-pages-work-js-1c0e226a78dfcaf43f79.js.map