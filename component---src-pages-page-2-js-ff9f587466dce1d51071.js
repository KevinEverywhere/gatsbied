(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{152:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(55),r=a.n(o),l=a(8),s=a.n(l),u=function(t){function e(e){var a;return(a=t.call(this,e)||this).deviceOrientationHandler=function(t){var e=t.alpha,n=t.beta,i=t.gamma;if(a.state.startingPoint)a.testPosition(t.alpha,t.beta,t.gamma);else{var o={alpha:e,beta:n,gamma:i};a.setState({startingPoint:o})}},a.testPosition=function(t,e,n){console.log(t,e,n),document.querySelector("#zeroVal").innerHTML="\n    "+((Math.round(a.state.startingPoint.alpha-t)+180)%360-180)+",\n    "+((Math.round(a.state.startingPoint.beta-e)+180)%360-180)+",\n    "+((Math.round(a.state.startingPoint.gamma-n)+180)%360-180)+"\n    "},a.deviceOrientationHandler=a.deviceOrientationHandler.bind(r()(a)),a.state={thresholds:{alpha:[-45,45],beta:[-45,45],gamma:[-45,45]},started:{alpha:null,beta:null,gamma:null},clocks:{alpha:1e4,beta:1e4,gamma:1e4},startingPoint:null},a}s()(e,t);var a=e.prototype;return a.reorient=function(t){this.setState({alpha:0,beta:0,gamma:0,startingPoint:{alpha:Math.round(t.alpha),beta:Math.round(t.beta),gamma:Math.round(t.gamma)},started:{alpha:null,beta:null,gamma:new Date}})},a.componentWillUnmount=function(){window.removeEventListener("deviceorientation",this.deviceOrientationHandler,!0)},a.componentDidMount=function(){window.addEventListener("deviceorientation",this.deviceOrientationHandler,!0)},a.render=function(){return i.a.createElement("main",null,i.a.createElement("div",{id:"zeroVal"},"value, here"),this.props.children)},e}(i.a.Component);e.default=function(){return i.a.createElement(u,null,i.a.createElement("h1",null,"This is the second page"),i.a.createElement("p",null,"Welcome, page 2"))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-ff9f587466dce1d51071.js.map