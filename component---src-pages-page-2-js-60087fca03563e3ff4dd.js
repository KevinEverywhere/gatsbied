(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{152:function(t,n,e){"use strict";e.r(n);var a=e(0),i=e.n(a),o=e(55),r=e.n(o),s=e(8),l=e.n(s),d=function(t){function n(n){var e;return(e=t.call(this,n)||this).onCompassAxis=function(t){return Math.round((450+t.alpha)%180-90)-e.state.orientation},e.onUpDownAxis=function(t){var n=0===e.state.orientation?"beta":"gamma";return window.orientation+Math.round((450+t[n])%180-90)},e.onSideToSideAxis=function(t){var n=0===e.state.orientation?"gamma":"beta";return window.orientation+Math.round((450+t[n])%180-90)},e.deorient=function(t){window.removeEventListener("deviceorientation",e.deviceOrientationHandler,!1)},e.reorient=function(t){e.setState({startingPoint:null,started:{alpha:null,beta:null,gamma:new Date}}),window.addEventListener("deviceorientation",e.deviceOrientationHandler,!1)},e.deviceOrientationHandler=function(t){var n=t.alpha,a=t.beta,i=t.gamma,o=t.absolute;if(e.state.startingPoint)e.testPosition(t);else{var r={alpha:n,beta:a,gamma:i,absolute:o};e.setState({startingPoint:r})}},e.orientationChangeHandler=function(t){console.log(window.orientation),e.setState({orientation:window.orientation})},e.actionableValue=function(t,n){return e.state.startingPoint?Math.round((450+n-e.state.startingPoint[t])%180-90):0},e.testPosition=function(t){document.querySelector("#zeroVal").innerHTML="Compass:\n    "+e.onCompassAxis(t)+", Forward-Backward:\n    "+e.onUpDownAxis(t)+", Spin:\n    "+e.onSideToSideAxis(t)+"}\n    "},e.deviceOrientationHandler=e.deviceOrientationHandler.bind(r()(e)),e.state={orientation:0,thresholds:{alpha:[-45,45],beta:[-45,45],gamma:[-45,45]},started:{alpha:null,beta:null,gamma:null},clocks:{alpha:1e4,beta:1e4,gamma:1e4},startingPoint:null},e}l()(n,t);var e=n.prototype;return e.componentWillUnmount=function(){window.removeEventListener("deviceorientation",this.deviceOrientationHandler,!0),window.removeEventListener("orientationchange",this.orientationChangeHandler,!0)},e.componentDidMount=function(){window.addEventListener("orientationchange",this.orientationChangeHandler,!0)},e.render=function(){return i.a.createElement("main",null,i.a.createElement("div",{className:"allCoords"},i.a.createElement("div",{onClick:this.reorient,className:"coord alpha"},"A (",this.state.startingPoint?Math.round(this.state.startingPoint.alpha):0,")"),i.a.createElement("div",{className:"coord beta"},"B (",this.state.startingPoint?Math.round(this.state.startingPoint.beta):0,")"),i.a.createElement("div",{onClick:this.deorient,className:"coord gamma"},"G (",this.state.startingPoint?Math.round(this.state.startingPoint.gamma):0,")")),i.a.createElement("div",{id:"zeroVal"},"click, here"),this.props.children)},n}(i.a.Component);n.default=function(){return i.a.createElement(d,null,i.a.createElement("h1",null,"II"),i.a.createElement("p",null,"This is gyroscope test"))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-60087fca03563e3ff4dd.js.map