(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(55),r=a.n(o),l=a(8),s=a.n(l),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).deviceOrientationHandler=function(e){var t=e.alpha,n=e.beta,i=e.gamma;if(a.state.startingPoint)a.testPosition(e.alpha,e.beta,e.gamma);else{var o={alpha:t,beta:n,gamma:i};a.setState({startingPoint:o})}},a.testPosition=function(e,t,n){console.log(e,t,n),document.querySelector("#zeroVal").innerHTML="A:\n    "+((Math.round(a.state.startingPoint.alpha-e)+180)%360-180)+", B:\n    "+((Math.round(a.state.startingPoint.beta-t)+180)%360-180)+", G:\n    "+((Math.round(a.state.startingPoint.gamma-n)+180)%360-180)+"\n    "},a.deviceOrientationHandler=a.deviceOrientationHandler.bind(r()(a)),a.state={thresholds:{alpha:[-45,45],beta:[-45,45],gamma:[-45,45]},started:{alpha:null,beta:null,gamma:null},clocks:{alpha:1e4,beta:1e4,gamma:1e4},startingPoint:null},a}s()(t,e);var a=t.prototype;return a.reorient=function(e){this.setState({startingPoint:null,started:{alpha:null,beta:null,gamma:new Date}})},a.componentWillUnmount=function(){window.removeEventListener("deviceorientation",this.deviceOrientationHandler,!0)},a.componentDidMount=function(){window.addEventListener("deviceorientation",this.deviceOrientationHandler,!0)},a.render=function(){return i.a.createElement("main",null,i.a.createElement("div",{onclick:this.reorient,className:"allCoords"},i.a.createElement("div",{className:"coord alpha"},"Alpha"),i.a.createElement("div",{className:"coord beta"},"BETA"),i.a.createElement("div",{className:"coord gamma"},"GAMMA")),i.a.createElement("div",{id:"zeroVal"},"CLICK, here"),this.props.children)},t}(i.a.Component);t.default=function(){return i.a.createElement(c,null,i.a.createElement("h1",null,"This is . . ."),i.a.createElement("p",null,"Page 2"))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-a56cdfaba5b863e607e0.js.map