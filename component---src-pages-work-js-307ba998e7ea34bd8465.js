(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{152:function(e,t,n){"use strict";n.r(t);var a=n(56),i=n.n(a),r=n(8),o=n.n(r),s=n(0),c=n.n(s),l=n(162),m=n(161),u=n(171),p=n(160),d=n(74),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={position:0,active:!1,jobs:null,recommendations:null,isSelected:"jobs",loading:"is-loading"},n.setWrapperRef=n.setWrapperRef.bind(i()(n)),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:"",jobs:Object(d.a)().getState().getJobs,recommendations:Object(d.a)().getState().getRecommendations})},100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.setWrapperRef=function(e){this.wrapperRef=e},n.selectPosition=function(e){this.setState({currentPosition:e})},n.render=function(){return c.a.createElement(l.a,{location:this.props.location,position:this.state.position},c.a.createElement("div",{id:"wrapper",className:"page"},c.a.createElement(m.a,{active:"work",chosen:this.state.isSelected}),c.a.createElement(u.a,{jobs:this.state.jobs,recommendations:this.state.recommendations,position:this.state.position,isSelected:this.state.isSelected}),c.a.createElement(p.a,null)),c.a.createElement("div",{id:"bg"}))},t}(c.a.Component);t.default=h},159:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(158);t.a=function(e){return i.a.createElement("li",null,i.a.createElement(r.Link,{to:e.item.toLowerCase()},e.item))}},160:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};o.propTypes={timeout:n.n(r).a.bool},t.a=o},161:function(e,t,n){"use strict";n(26);var a=n(0),i=n.n(a),r=n(159),o=n(158),s=function(e){return i.a.createElement("nav",null,i.a.createElement(o.Link,{to:"/"},i.a.createElement("div",{className:"smlogo"},i.a.createElement("span",{className:"icon fa-bicycle"}))),i.a.createElement("ul",null,i.a.createElement(r.a,{item:"Work"}),i.a.createElement(r.a,{item:"Creative"}),i.a.createElement(r.a,{item:"Contact"})))},c=function(e){var t;switch(e){case"":t=e;break;case"jobs":t="";break;case"recommendations":t=function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(r.a,{item:e})))}("work");break;default:t=e}return t};t.a=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement(s,Object.assign({},e,{chosen:e.chosen})),c(e.chosen))}},171:function(e,t,n){"use strict";var a=n(8),i=n.n(a),r=n(0),o=n.n(r),s=n(2),c=n.n(s),l=n(158),m=function(e){var t=e.item;return o.a.createElement("div",{className:"box"},o.a.createElement("details",null,o.a.createElement("summary",null,t.Company),o.a.createElement("h3",null,t.Title),t.Description))};m.propTypes={item:c.a.shape({Company:c.a.string,Title:c.a.string,Description:c.a.string})};var u=m,p=function(e){function t(t){return e.call(this)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("details",{key:this.props.item.key},o.a.createElement("summary",null,this.props.item.First," ",this.props.item.Last," "),o.a.createElement("h3",null,this.props.item.Title),this.props.item.Text)},t}(o.a.Component);p.propTypes={item:c.a.shape({First:c.a.string,Last:c.a.string,Company:c.a.string,Title:c.a.string,Text:c.a.string,Created:c.a.string})};var d=p,h=function(e){function t(t){return e.call(this)||this}i()(t,e);var n=t.prototype;return n.drawrecommendations=function(){return this.props.recommendations.map(function(e,t){return o.a.createElement(d,{key:t,item:e})})},n.drawjobs=function(){return this.props.jobs.map(function(e,t){return o.a.createElement(u,{key:t,item:e})})},n.oldrender=function(){return this.props[this.props.isSelected]?this["draw"+this.props.isSelected]():""},n.render=function(){return o.a.createElement("main",null,o.a.createElement("div",{style:{textShadow:"1px 1px black",padding:"1rem",color:"white",fontWeight:"bold",width:"60%",minWidth:"240px"}},o.a.createElement("h2",null,"About Kevin"),o.a.createElement("p",null,"Kevin Ready has kept up with the most current technolgies creating code, players, templates and content for startups, agencies, and digital media clients, since Bill Clinton was in office. This site was created in 2019 using react and gatsby, with redux, aframe, three.js, and others, optimized for mobile. Kevin is often looking for contract or permanent work using software and technologies for which he is passionate."),o.a.createElement("p",null,"More information can be found at the following links.")),o.a.createElement("ul",{className:"horizontalBar"},o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/contact"},"Contact")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://linkedin.com/in/planetkevin/"},"LinkedIn")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/kevineverywhere/"},"GitHub"))))},t}(o.a.Component);h.propTypes={jobs:c.a.arrayOf(c.a.shape({company:c.a.string,title:c.a.string,description:c.a.string,location:c.a.string}))};t.a=h}}]);
//# sourceMappingURL=component---src-pages-work-js-307ba998e7ea34bd8465.js.map