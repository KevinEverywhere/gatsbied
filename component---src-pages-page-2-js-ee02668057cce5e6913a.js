(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{152:function(t,a,e){"use strict";e.r(a);var n=e(0),i=e.n(n),o=e(55),r=e.n(o),l=e(8),s=e.n(l),m=function(t){function a(a){var e;return(e=t.call(this,a)||this).deviceOrientationHandler=function(t){var a=t.alpha,n=t.beta,i=t.gamma;if(e.state.startingPoint)e.testPosition(t.alpha,t.beta,t.gamma);else{var o={alpha:a,beta:n,gamma:i};e.setState({startingPoint:o})}},e.testPosition=function(t,a,n){Math.abs((e.state.startingPoint.gamma+180)%360)-(n+180)%360&&(null===e.state.started.gamma||Date.now()-e.state.started.gamma<e.state.clocks.gamma||(console.log("alpha",e.state.started.gamma),e.setState({started:{gamma:Date.now()}})))},e.deviceOrientationHandler=e.deviceOrientationHandler.bind(r()(e)),e.state={thresholds:{alpha:[-45,45],beta:[-45,45],gamma:[-45,45]},started:{alpha:null,beta:null,gamma:null},clocks:{alpha:1e4,beta:1e4,gamma:1e4},startingPoint:null},e}s()(a,t);var e=a.prototype;return e.reorient=function(t){this.setState({alpha:0,beta:0,gamma:0,startingPoint:{alpha:Math.round(t.alpha),beta:Math.round(t.beta),gamma:Math.round(t.gamma)},started:{alpha:null,beta:null,gamma:new Date}})},e.componentWillUnmount=function(){window.removeEventListener("deviceorientation",this.deviceOrientationHandler,!0)},e.componentDidMount=function(){window.addEventListener("deviceorientation",this.deviceOrientationHandler,!0)},e.render=function(){return i.a.createElement("main",null,i.a.createElement("div",{id:"zeroVal"},"value here"),this.props.children)},a}(i.a.Component);a.default=function(){return i.a.createElement(m,null,i.a.createElement("h1",null,"This is the second page"),i.a.createElement("p",null,"Welcome to page 2"))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-ee02668057cce5e6913a.js.map