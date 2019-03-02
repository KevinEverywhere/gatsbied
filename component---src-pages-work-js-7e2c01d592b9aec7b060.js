(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,i){"use strict";i.r(t);var n=i(55),a=i.n(n),o=i(8),r=i.n(o),s=i(0),c=i.n(s),l=i(157),d=i(158),p=i(2),m=i.n(p),u=(i(33),function(e){function t(t){return e.call(this)||this}r()(t,e);var i=t.prototype;return i.createListsFromDots=function(e){return e.replace("  • ","\n").replace("  ","\n").replace(" • ",", ")},i.render=function(){return c.a.createElement("details",{key:this.props.item.key},c.a.createElement("summary",null,this.props.item.company),c.a.createElement("h3",null,this.props.item.title),this.createListsFromDots(this.props.item.description))},t}(c.a.Component));u.propTypes={item:m.a.shape({company:m.a.string,title:m.a.string,description:m.a.string,location:m.a.string,started:m.a.string,finished:m.a.string})};var h=u,f=function(e){function t(t){return e.call(this)||this}return r()(t,e),t.prototype.render=function(){var e=this,t=c.a.createElement("li",null,"Main work div");this.props.jobs&&(t=this.props.jobs.map(function(e,t){return console.log(e),c.a.createElement(h,{key:t,item:e})}));var i=c.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return c.a.createElement("main",null,i,t)},t}(c.a.Component);f.propTypes={jobs:m.a.arrayOf(m.a.shape({company:m.a.string,title:m.a.string,description:m.a.string,location:m.a.string,started:m.a.string,finished:m.a.string}))};var g=f,v=i(156),y={jobs:[{company:"Self-Employed",title:"Software Developer and Consultant",description:"Software developer, consultant, engineer and occasional architect on B2B and consumer facing applications.  Recent clients include:  • AAA (A3Ventures) • IAC (Dictionary.com) • LiquidHub (Eveo) • Frontline (Teachscape) • Interactive NYC  My responsibilities have included:  • building and extending react components that matched legacy look and feel functionality;   [react, redux, jquery, bootstrap] • porting Web content to Native Apps via Cordova and React-Native;   [cordova, react, angular, react-native, AndroidStudio, XCode, others] • creating docker images and working with YML files for CI/DC on Amazon, GitLab, and Heroku;   [react, react-dom, redux, react-router, contentful, git, yml, aws, heroku] • creating IOT Bridge for iOS/Android App using Beacon and Ranging functionality;   [cordova, JavaScript, XCode, AndroidStudio, native ranging and notification] • introducing processes that increased productivity and helped stop high attrition for a tech client;   [node, npm, git, jira, confluence, grunt, angular] • architecting and implementing a portal interface for angular 1.x apps to share routing and navigation;   [node, angular, angular-ui, express] • building taggable hotspots in 360 video, and functioning audio/video editing prototypes;   [ffmpeg, three.js, aframe, JavaScript] • developing bots for PayPal, Chegg and others for successful acquisition of startup; • creating abstraction layer to manage multiple shopify elements on WordPress; • daily scrum and agile participation in remote and onsite settings; • keeping abreast of technology changes through conference, meetup and online means; • documenting processes and mentoring others;",location:"",started:2010,finished:""},{company:"Conversant, Inc.",title:"Software Developer",description:"Developed JavaScript, CSS, AS3 and HTML templates for Flash/Rich Media/HTML5/video ads on major ad networks, including Google, Yahoo, AOL, and others. Responsible for ensuring consistent functionality in all modern browsers (IE6+, Chrome, Firefox, Safari, et al) and devices, across ad networks, and publisher sites, A/B unit testing, new feature prototyping and integration with jQuery, Backbone and other frameworks. Participated in team meetings via Skype, onsite as needed.",location:"",started:"Apr 2010",finished:"Apr 2014"},{company:"AKQA",title:"Software Engineer",description:"Developing client side functionality (JavaScript, CSS, HTML, Yahoo Map API), using JQuery and integrating Groovy/Grails back end for pharmaceutical application. Responsible for .gsp file, editing, localization, in addition to standard front end interactivity.",location:"",started:"Mar 2010",finished:"Jun 2010"},{company:"SmartShoot",title:"Software Engineer",description:"Developed Facebook Application (page and profile/tab version) for online video company. My role was coding PHP, CSS, JavaScript, FBML using Eclipse and Zend Framework. Also created namespace-based extension to MRSS feed to augment search function.",location:"",started:"Jan 2010",finished:"Mar 2010"},{company:"Nuance Communications",title:"Software Engineer",description:"Nuance acquired Virtuoz in 2013. Developed client applications for Intelligent Agent Web Service in Flex, Flash and JavaScript for VirtuOz clients PayPal, H&amp;R Block and Chegg.",location:"",started:"Oct 2009",finished:"Jan 2010"},{company:"CBS Interactive",title:"Social Network Application Engineer",description:"Developed a Facebook IFrame application for a reality TV show; was responsible for ActionScript, JavaScript (jQuery), PHP, and Facebook programming, including FBML, XFBML, FQL and the JS and PHP APIs. Worked with client to ensure knowledge transfer to enable staff to work with commented/documented code.",location:"",started:"Aug 2009",finished:"Oct 2009"},{company:"Organic",title:"Senior Interface Developer",description:"Developed Income and Expenses module for Bank of America's current home loan guide. Created interactive pie using existing and new AS3 frameworks.  http://homeloans.bankofamerica.com/en/home-loan-experience/start.html",location:"",started:"Jan 2009",finished:"May 2009"},{company:"frog design",title:"Flex / Air Engineer",description:"Developed an Air application for a prominent telecommunications firm that used a variety of technologies to bridge the desktop and mobile devices. After developing prototype, tested with beta version of Web Services for Fortune 100 software firm for usability analysis.",location:"",started:"Nov 2008",finished:"Dec 2008"},{company:"Mindjet",title:"Flash Developer",description:"Developed a video for the new MindMaster 8 flagship product for front page of their English and German sites. Attended client meetings and worked with their team to ensure pixel-perfect replication of PSD comps.",location:"",started:"Oct 2008",finished:"Nov 2008"},{company:"ON24",title:"Flex Engineer",description:"Developed MXML components for Virtual Tradeshow. Used Cairngorm framework for B2B administrative application for Tradeshow. My role was Flex development and bug resolution.",location:"",started:"Jul 2008",finished:"Oct 2008"},{company:"Eveo",title:"Flash Developer",description:"Created XML-driven marketing application with video, Tweener-animated fades, blurs and placement, for Novartis FocalinXR. Developed XML-backed PDF to SWF conversion process for a number of vaccine products for GlaxoSmithKline, as part of a larger application suite..",location:"",started:"Mar 2008",finished:"Jun 2008"},{company:"Blowtorch Entertainment",title:"Sr. Web Developer",description:"My responsibilities included developing Flash players, recorders and widgets, using OPML, RSS, REST and other XML formats with a variety of Content Delivery Networks. Worked with Flex 3, Red5 server, MySQL/PHP, and associated technologies/APIs to support publishing requirements.",location:"",started:"Nov 2007",finished:"Apr 2008"},{company:"UStream",title:"Flash Developer",description:"Developed horizontal reflective thumbnail scroller using ActionScript 3 which loaded object data from AMFPHP (Flash Remoting) and called image and video feeds in response to user interaction. Was responsible for determining handshake requirements, gradient fade, exponential navigation and media functionality. The videos are served from a Flash Media Server, and all feeds are live.",location:"",started:"Sep 2007",finished:"Oct 2007"},{company:"Reality Digital",title:"Application Developer",description:"Developed suite of XML-based FLV players, including simple video players, video players for blogs, WebCam recording, video editing, and more. All players share a core logic swf and are configurable to support size and shape requirements, third party assets, ad tracking, and advanced functionality. Was responsible for the Flash/ActionScript programming, and client-side functionality of RD's Opus Platform. Worked with both streaming and progressive video content, on Flash Communication servers, using ASPX and Web Services. High-trafficked client sites include MTV, Atom Uploads, Lonely Planet, The Capitol Hill Broadcasting Network.",location:"",started:"Nov 2006",finished:"Aug 2007"},{company:"Comcast",title:"Flash Developer",description:"Developed Flash protoypes for applications being built for set top boxes around the country, including Call Waiting and Video on Demand.",location:"",started:"Aug 2006",finished:"Dec 2006"},{company:"Podshow",title:"Application Developer",description:"Flash actionscript /XML/RSS/Ajax/CSS/JavaScript: Rich media player using Flash/PHP and XML/OO on the client side.",location:"",started:"Jan 2006",finished:"Jul 2006"},{company:"NASA",title:"Programmer",description:"Developed Event Sequence Tab/timeline using Flash/ActionScript/XML/Ajax and proprietary technologies.",location:"",started:"Oct 2005",finished:"Jan 2006"},{company:"MetaTV",title:"Prototype Developer",description:"Developed Flash implementations for conversion to set top box applications.",location:"",started:2006,finished:2006},{company:"ID Society",title:"Programmer",description:"Flash/Ajax/HTML/JavaScript/PHP-mysql",location:"",started:"Apr 2003",finished:"Jan 2005"},{company:"Miva",title:"Flash Application Developer",description:"",location:"",started:2005,finished:2005},{company:"Sonic Branding Solutions",title:"Developer",description:"",location:"",started:2003,finished:2004},{company:"Fantastic Corporation",title:"Application Developer",description:"",location:"",started:2e3,finished:2e3},{company:"Blue Platypus",title:"CEO",description:"Shockwave, Flash and DHTML original content and client production work. Won several Macromedia Shocked Site of the Day Awards.",location:"",started:"Jun 1996",finished:1998},{company:"New Riders Publishing",title:"Author",description:"I was the principal author of two books in the early days of the Web: Hybrid HTML Design and Plug and Play JavaScript. The books dealt with defensive coding before such the need for such practices were identified.",location:"",started:"Jan 1996",finished:"Aug 1996"},{company:"@Home",title:"Application Developer",description:"",location:"",started:1995,finished:1996}]},b=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={position:0,active:!1,jobs:null,recommendations:null,loading:"is-loading"},i.setWrapperRef=i.setWrapperRef.bind(a()(i)),i}r()(t,e);var i=t.prototype;return i.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:"",jobs:y.jobs,recommendations:y.recommendations})},100)},i.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},i.setWrapperRef=function(e){this.wrapperRef=e},i.selectPosition=function(e){this.setState({currentPosition:e})},i.render=function(){return console.log(this.state.jobs),c.a.createElement(l.a,{location:this.props.location,position:this.state.position},c.a.createElement("div",{id:"wrapper",className:"page"},c.a.createElement(d.a,{active:"work"}),c.a.createElement(g,{jobs:this.state.jobs,recommendations:this.state.recommendations,position:this.state.position}),c.a.createElement(v.a,null)),c.a.createElement("div",{id:"bg"}))},t}(c.a.Component);t.default=b},155:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=(i(2),i(153));t.a=function(e){return a.a.createElement("li",null,a.a.createElement(o.Link,{to:e.item.toLowerCase()},e.item))}},156:function(e,t,i){"use strict";var n=i(0),a=i.n(n),o=i(2),r=function(e){return a.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},a.a.createElement("p",{className:"copyright"},"Derived by Kevin Ready w/",a.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"gatsby")," from a design by ",a.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))};r.propTypes={timeout:i.n(o).a.bool},t.a=r},158:function(e,t,i){"use strict";i(25);var n=i(0),a=i.n(n),o=(i(2),i(155)),r=i(153),s=function(e){return a.a.createElement("nav",null,a.a.createElement(r.Link,{to:"/"},a.a.createElement("div",{className:"smlogo"},a.a.createElement("span",{className:"icon fa-bicycle"}))),a.a.createElement("ul",null,a.a.createElement(o.a,{item:"Work"}),a.a.createElement(o.a,{item:"Creative"}),a.a.createElement(o.a,{item:"Contact"})))};t.a=function(e){return a.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},a.a.createElement(s,Object.assign({},e,{chosen:e.chosen})))}}}]);
//# sourceMappingURL=component---src-pages-work-js-7e2c01d592b9aec7b060.js.map