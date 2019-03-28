import { createStore } from 'redux';
import reducers from './reducers'

const initialState = {
  getJobs:[
    {
      "Company": "Self-Employed",
      "Title": "Software Developer and Consultant",
      "Description": "Software developer, consultant, engineer and occasional architect on B2B and consumer facing applications.  Recent clients include:  • AAA (A3Ventures) • IAC (Dictionary.com) • LiquidHub (Eveo) • Frontline (Teachscape) • Interactive NYC  My responsibilities have included:  • building and extending react components that matched legacy look and feel functionality;   [react, redux, jquery, bootstrap] • porting Web content to Native Apps via Cordova and React-Native;   [cordova, react, angular, react-native, AndroidStudio, XCode, others] • creating docker images and working with YML files for CI/DC on Amazon, GitLab, and Heroku;   [react, react-dom, redux, react-router, contentful, git, yml, aws, heroku] • creating IOT Bridge for iOS/Android App using Beacon and Ranging functionality;   [cordova, JavaScript, XCode, AndroidStudio, native ranging and notification] • introducing processes that increased productivity and helped stop high attrition for a tech client;   [node, npm, git, jira, confluence, grunt, angular] • architecting and implementing a portal interface for angular 1.x apps to share routing and navigation;   [node, angular, angular-ui, express] • building taggable hotspots in 360 video, and functioning audio/video editing prototypes;   [ffmpeg, three.js, aframe, JavaScript] • developing bots for PayPal, Chegg and others for successful acquisition of startup; • creating abstraction layer to manage multiple shopify elements on WordPress; • daily scrum and agile participation in remote and onsite settings; • keeping abreast of technology changes through conference, meetup and online means; • documenting processes and mentoring others;",
      "Location": "",
      "Started": 2010,
      "Finished": ""
    },
    {
      "Company": "Conversant, Inc.",
      "Title": "Software Developer",
      "Description": "Developed JavaScript, CSS, AS3 and HTML templates for Flash/Rich Media/HTML5/video ads on major ad networks, including Google, Yahoo, AOL, and others. Responsible for ensuring consistent functionality in all modern browsers (IE6+, Chrome, Firefox, Safari, et al) and devices, across ad networks, and publisher sites, A/B unit testing, new feature prototyping and integration with jQuery, Backbone and other frameworks. Participated in team meetings via Skype, onsite as needed.",
      "Location": "",
      "Started": "Apr 2010",
      "Finished": "Apr 2014"
    },
    {
      "Company": "AKQA",
      "Title": "Software Engineer",
      "Description": "Developing client side functionality (JavaScript, CSS, HTML, Yahoo Map API), using JQuery and integrating Groovy/Grails back end for pharmaceutical application. Responsible for .gsp file, editing, localization, in addition to standard front end interactivity.",
      "Location": "",
      "Started": "Mar 2010",
      "Finished": "Jun 2010"
    },
    {
      "Company": "SmartShoot",
      "Title": "Software Engineer",
      "Description": "Developed Facebook Application (page and profile/tab version) for online video company. My role was coding PHP, CSS, JavaScript, FBML using Eclipse and Zend Framework. Also created namespace-based extension to MRSS feed to augment search function.",
      "Location": "",
      "Started": "Jan 2010",
      "Finished": "Mar 2010"
    },
    {
      "Company": "Nuance Communications",
      "Title": "Software Engineer",
      "Description": "Nuance acquired Virtuoz in 2013. Developed client applications for Intelligent Agent Web Service in Flex, Flash and JavaScript for VirtuOz clients PayPal, H&amp;R Block and Chegg.",
      "Location": "",
      "Started": "Oct 2009",
      "Finished": "Jan 2010"
    },
    {
      "Company": "CBS Interactive",
      "Title": "Social Network Application Engineer",
      "Description": "Developed a Facebook IFrame application for a reality TV show; was responsible for ActionScript, JavaScript (jQuery), PHP, and Facebook programming, including FBML, XFBML, FQL and the JS and PHP APIs. Worked with client to ensure knowledge transfer to enable staff to work with commented/documented code.",
      "Location": "",
      "Started": "Aug 2009",
      "Finished": "Oct 2009"
    },
    {
      "Company": "Organic",
      "Title": "Senior Interface Developer",
      "Description": "Developed Income and Expenses module for Bank of America's current home loan guide. Created interactive pie using existing and new AS3 frameworks.  http://homeloans.bankofamerica.com/en/home-loan-experience/start.html",
      "Location": "",
      "Started": "Jan 2009",
      "Finished": "May 2009"
    },
    {
      "Company": "frog design",
      "Title": "Flex / Air Engineer",
      "Description": "Developed an Air application for a prominent telecommunications firm that used a variety of technologies to bridge the desktop and mobile devices. After developing prototype, tested with beta version of Web Services for Fortune 100 software firm for usability analysis.",
      "Location": "",
      "Started": "Nov 2008",
      "Finished": "Dec 2008"
    },
    {
      "Company": "Mindjet",
      "Title": "Flash Developer",
      "Description": "Developed a video for the new MindMaster 8 flagship product for front page of their English and German sites. Attended client meetings and worked with their team to ensure pixel-perfect replication of PSD comps.",
      "Location": "",
      "Started": "Oct 2008",
      "Finished": "Nov 2008"
    },
    {
      "Company": "ON24",
      "Title": "Flex Engineer",
      "Description": "Developed MXML components for Virtual Tradeshow. Used Cairngorm framework for B2B administrative application for Tradeshow. My role was Flex development and bug resolution.",
      "Location": "",
      "Started": "Jul 2008",
      "Finished": "Oct 2008"
    },
    {
      "Company": "Eveo",
      "Title": "Flash Developer",
      "Description": "Created XML-driven marketing application with video, Tweener-animated fades, blurs and placement, for Novartis FocalinXR. Developed XML-backed PDF to SWF conversion process for a number of vaccine products for GlaxoSmithKline, as part of a larger application suite..",
      "Location": "",
      "Started": "Mar 2008",
      "Finished": "Jun 2008"
    },
    {
      "Company": "Blowtorch Entertainment",
      "Title": "Sr. Web Developer",
      "Description": "My responsibilities included developing Flash players, recorders and widgets, using OPML, RSS, REST and other XML formats with a variety of Content Delivery Networks. Worked with Flex 3, Red5 server, MySQL/PHP, and associated technologies/APIs to support publishing requirements.",
      "Location": "",
      "Started": "Nov 2007",
      "Finished": "Apr 2008"
    },
    {
      "Company": "UStream",
      "Title": "Flash Developer",
      "Description": "Developed horizontal reflective thumbnail scroller using ActionScript 3 which loaded object data from AMFPHP (Flash Remoting) and called image and video feeds in response to user interaction. Was responsible for determining handshake requirements, gradient fade, exponential navigation and media functionality. The videos are served from a Flash Media Server, and all feeds are live.",
      "Location": "",
      "Started": "Sep 2007",
      "Finished": "Oct 2007"
    },
    {
      "Company": "Reality Digital",
      "Title": "Application Developer",
      "Description": "Developed suite of XML-based FLV players, including simple video players, video players for blogs, WebCam recording, video editing, and more. All players share a core logic swf and are configurable to support size and shape requirements, third party assets, ad tracking, and advanced functionality. Was responsible for the Flash/ActionScript programming, and client-side functionality of RD's Opus Platform. Worked with both streaming and progressive video content, on Flash Communication servers, using ASPX and Web Services. High-trafficked client sites include MTV, Atom Uploads, Lonely Planet, The Capitol Hill Broadcasting Network.",
      "Location": "",
      "Started": "Nov 2006",
      "Finished": "Aug 2007"
    },
    {
      "Company": "Comcast",
      "Title": "Flash Developer",
      "Description": "Developed Flash protoypes for applications being built for set top boxes around the country, including Call Waiting and Video on Demand.",
      "Location": "",
      "Started": "Aug 2006",
      "Finished": "Dec 2006"
    },
    {
      "Company": "Podshow",
      "Title": "Application Developer",
      "Description": "Flash actionscript /XML/RSS/Ajax/CSS/JavaScript: Rich media player using Flash/PHP and XML/OO on the client side.",
      "Location": "",
      "Started": "Jan 2006",
      "Finished": "Jul 2006"
    },
    {
      "Company": "NASA",
      "Title": "Programmer",
      "Description": "Developed Event Sequence Tab/timeline using Flash/ActionScript/XML/Ajax and proprietary technologies.",
      "Location": "",
      "Started": "Oct 2005",
      "Finished": "Jan 2006"
    },
    {
      "Company": "MetaTV",
      "Title": "Prototype Developer",
      "Description": "Developed Flash implementations for conversion to set top box applications.",
      "Location": "",
      "Started": 2006,
      "Finished": 2006
    },
    {
      "Company": "ID Society",
      "Title": "Programmer",
      "Description": "Flash/Ajax/HTML/JavaScript/PHP-mysql",
      "Location": "",
      "Started": "Apr 2003",
      "Finished": "Jan 2005"
    },
    {
      "Company": "Miva",
      "Title": "Flash Application Developer",
      "Description": "",
      "Location": "",
      "Started": 2005,
      "Finished": 2005
    },
    {
      "Company": "Sonic Branding Solutions",
      "Title": "Developer",
      "Description": "",
      "Location": "",
      "Started": 2003,
      "Finished": 2004
    },
    {
      "Company": "Fantastic Corporation",
      "Title": "Application Developer",
      "Description": "",
      "Location": "",
      "Started": 2000,
      "Finished": 2000
    },
    {
      "Company": "Blue Platypus",
      "Title": "CEO",
      "Description": "Shockwave, Flash and DHTML original content and client production work. Won several Macromedia Shocked Site of the Day Awards.",
      "Location": "",
      "Started": "Jun 1996",
      "Finished": 1998
    },
    {
      "Company": "New Riders Publishing",
      "Title": "Author",
      "Description": "I was the principal author of two books in the early days of the Web: Hybrid HTML Design and Plug and Play JavaScript. The books dealt with defensive coding before such the need for such practices were identified.",
      "Location": "",
      "Started": "Jan 1996",
      "Finished": "Aug 1996"
    },
    {
      "Company": "@Home",
      "Title": "Application Developer",
      "Description": "",
      "Location": "",
      "Started": 1995,
      "Finished": 1996
    }
  ],
  getRecommendations:[
    {
      "First": "Tim",
      "Last": "Villanueva",
      "Company": "Quicken Inc.",
      "Title": "CTO",
      "Text": "Kevin is a super creative developer who can dive into many technologies and deliver rapid results.  I have been able to leverage Kevin's work in 2 different companies, and was always impressed with his passion, creativity, energy, and results.  He is especially adept at projects that need rapid results and Kevin is comfortable with iteration.",
      "Created": "4/11/10, 11:23 AM",
      "Status": "VISIBLE"
    },
    {
      "First": "Jason",
      "Last": "Randell",
      "Company": "CBS Interactive",
      "Title": "Senior Vice President Of Engineering",
      "Text": "Kevin did an excellent job of getting up to speed on the project and the requirements involved despite not having a traditional MRD.  He asked the right questions and was able to work independently to deliver a robust product on time!",
      "Created": "12/11/09, 2:56 AM",
      "Status": "VISIBLE"
    },
    {
      "First": "Andrew",
      "Last": "Grumet",
      "Company": "Google",
      "Title": "Technical Program Manager",
      "Text": "Kevin built our first multiformat-capable player, it handled Flash, MP3, Quicktime, WMV and several other formats.  Nobody was doing this at the time, and few do it today.    Kevin knows his craft --- what I call the Flash arts --- well and likes to stay at the cutting edge.  He's impatient in the best possible sense, he's driven to do big things and to do them now.",
      "Created": "3/26/08, 3:45 PM",
      "Status": "VISIBLE"
    },
    {
      "First": "Karen",
      "Last": "Ma",
      "Company": "Rice University",
      "Title": "Senior Developer",
      "Text": "Kevin is an exceptional UI architech providing creative solutions to difficult problems.  While working on the tasks at hand, he's always thinking ahead  providing long-term solutions.  He's energetic, dedicated and lots of fun to work with.  Kevin will be a great addition to any company.",
      "Created": "7/9/15, 12:44 PM",
      "Status": "VISIBLE"
    },
    {
      "First": "Heath",
      "Last": "Kornblum",
      "Company": "Conversant Inc.",
      "Title": "Software Engineer",
      "Text": "Kevin's work is very effective whether he's in the same office as me or working remote from across the world.  Most notable is his expertise in cross-origin AJAX Javascript.",
      "Created": "3/11/13, 2:40 PM",
      "Status": "VISIBLE"
    },
    {
      "First": "Christopher",
      "Last": "Robison",
      "Company": "Conversant (formerly Mediaplex)",
      "Title": "Senior Software Engineering Manager",
      "Text": "Kevin is one of the brightest minds you will ever meet.  The passion and energy he brings to a project is beyond expectation and quite infectious.  He is an excellent developer with a broad knowledge of technologies.  His creative and original ideas are some of the best I've ever seen.",
      "Created": "2/20/10, 2:48 PM",
      "Status": "VISIBLE"
    },
    {
      "First": "Franco",
      "Last": "Yuvienco",
      "Company": "Tightrope Interactive, Inc.",
      "Title": "CTO",
      "Text": "I worked with Kevin on several medium/large scale projects at Miva and found him to be an extraordinary resource. He has a remarkable command of ASx/Flash, Javascript, and programming in general, as well as having a great deal of creativity when developing solutions. His skill and experience was a great asset for my team and his ability to adapt to the often changing tides of product development was an absolute bonus. More specifically, one of Kevin’s tasks was to shift programming logic (midstream) from a Flash Wrapper to SwfKit – Kevin was able to do this with a great deal of efficiency as well as rapidity. Overall, Kevin is a highly recommended individual.",
      "Created": "1/20/09, 4:39 AM",
      "Status": "VISIBLE"
    },
    {
      "First": "Cody",
      "Last": "Tolmasoff",
      "Company": "Flashtaking, Inc.",
      "Title": "Senior Creative Technologist",
      "Text": "Kevin is a positive guy with a good head on his shoulders. Once I was able to relate to him the requirements of the project we worked on, he was quick to offer multiple options on how to move forward. I'd welcome Kevin on my team again in the future.",
      "Created": "11/4/08, 3:06 AM",
      "Status": "VISIBLE"
    },
    {
      "First": "Benoit",
      "Last": "Marsot",
      "Company": "Medsphere Systems Corporation",
      "Title": "Senior Software Engineer R&D",
      "Text": "Kevin constantly keeps up with developments in client side technologies.  He is particularly capable of taking an object-oriented approach to non-object oriented environments!  If something is possible, he will find a way to make it happen. He's come a long way from the 1990s when we first met and wrote a book together on JavaScript. I strongly recommend this problem solver.",
      "Created": "11/29/07, 6:28 AM",
      "Status": "VISIBLE"
    },
    {
      "First": "Georgia",
      "Last": "Gibbs",
      "Company": "Georgia Gibbs",
      "Title": "Artist",
      "Text": "Kevin Ready worked as a contractor doing flash development for TV Works. His work focused on developing working prototypes to demonstrate and test functionality.  He was a pleasure to work with and stayed positive throughout the process, even in light of multiple changes and updates.",
      "Created": "1/21/09, 9:21 AM",
      "Status": "VISIBLE"
    },
    {
      "First": "Xander",
      "Last": "Harris",
      "Company": "Fox Media",
      "Title": "Senior DevOps Engineer",
      "Text": "Aside from being one of my favorite people in general, Mr. Ready is the best in the field when it comes to JavaScript and a whole bunch of other things that I don't understand. A man of his word who has been educational.",
      "Created": "5/10/16, 11:19 AM",
      "Status": "VISIBLE"
    },
    {
      "First": "Parker",
      "Last": "LAU",
      "Company": "Conversant LLC",
      "Title": "Head Of Technology, China",
      "Text": "I fully recommend Kevin and he will be also my first point of contact for advice for anything html5 Flash centric.     Highly knowledgeable in his subject field, he has continued to provide the highest standard of RichMedia services and Ad serving solutions that beyond our expectations.     I worked with Kevin in almost 12-hrs different time zone. And we managed to cope with the challenge, we were able to save endless hours on debugging & testing; and be able to quickly streamline an ever increase demand of RichMedia demand in the region.     Our team in Asia finally successfully delivered the Shangri-La Hotel global Video Display project within very tight timeline.    Kevin is a really great person to work with and I challenge you to find better in the relevant field.",
      "Created": "12/16/15, 6:34 PM",
      "Status": "VISIBLE"
    },
    {
      "First": "Christopher",
      "Last": "Robison",
      "Company": "Conversant (formerly Mediaplex)",
      "Title": "Senior Software Engineering Manager",
      "Text": "Kevin has consistently demonstrated an eagerness to tackle new projects, dedication to professional growth, and the initiative to conceptualize new ways to improve client results and internal efficiencies.",
      "Created": "2/19/13, 11:36 AM",
      "Status": "VISIBLE"
    },
    {
      "First": "Paul",
      "Last": "Headley",
      "Company": "KarHead",
      "Title": "Chief Technology Officer",
      "Text": "Kevin’s focus on team productivity was clear from the first day of work. His ability to take hold of the product line and quickly simplify the development process impressed me the most. He immediately added value with inventive solutions providing remarkable improvements to the UI. His insightful early work was a platform for a strategy that easily integrated the most complex solutions.  Kevin proved to be a hard working leader sharing his knowledge with the younger, less experienced staff.  As his director, I could count on Kevin to execute on tasks going far beyond my expectations. He spent long hours making sure that his solutions were in place when the team needed them.  At crunch time he was there for team, driven by his passion for responsive product, never losing his sense of humor and always willing to learn from others. You’ll find Kevin challenging everyone to pick a number between 1 and 1000 and he’ll start reciting the square before you take your next breath.  If you’re still not impressed, you can give 2 numbers and he’ll multiply them in the same time. Kevin is an asset to any team.",
      "Created": "7/8/15, 6:39 PM",
      "Status": "VISIBLE"
    },
    {
      "First": "Gregg",
      "Last": "Dessen",
      "Company": "Ebates",
      "Title": "VP, Product Management & Platform Services",
      "Text": "Kevin is a very talented and innovative developer who is adept at delivering high quality work under pressure, intense deadlines, and through shifts in strategy.  I am especially impressed by Kevin's determination and resourcefulness - in addition to his technical acumen.  Kevin went beyond the call of duty in his delivery of a sophisticated Flash project, also helping us work through a complex implementation... thereby contributing to a successful product launch of major and global scale for Mindjet.",
      "Created": "1/21/09, 11:34 AM",
      "Status": "VISIBLE"
    },
    {
      "First": "Sanjay",
      "Last": "Vasdev",
      "Company": "Facebook",
      "Title": "Measurement Partner (Disruptors) - Marketing Science",
      "Text": "We brought in Kevin to support us on a highly critical strategic initiative to provide third party rich media content to our network of online publishers. He was swiftly able to tackle immediate problems of iframe security and rendering of expandable advertisements on high traffic pages, often tailoring his solution to accommodate nuances of different sites and their architectures. Kevin's personable nature, attention to detail and ability to relay complex subject matter in a concise fashion allowed Mediaplex to forge strong relationships with its publishers, in most cases allowing Mediaplex to be accredited with formal certification for rich media delivery. Our internal Engineering Group has also benefited from the knowledge he has transferred to the point of him being considered a thought leader, playing a hand in future architectural decisions.     Kevin's overall success with this project and the timely delivery of a robust permanent solution has paved the way for significant revenue opportunities for Mediaplex and its Rich Media business. I would not hesitate to hire Kevin again for future rich media work.",
      "Created": "9/2/10, 5:23 AM",
      "Status": "VISIBLE"
    }
  ],
  emailURL: 'https://planetkevin.com/scripts/jsonEmail.php',
  emailConfig: {
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Request-Origin": "*",
    "Access-Control-Request-Method": "OPTIONS",
    "Access-Control-Request-Headers": "Origin, X-Requested-With, Content-Type"
  },
  getImages:[
    "another_4_u.jpg", "bayStreet.jpg", "bgCroatia.jpg", "bikeReadier.jpg", "bridgeFade.jpg", "AuntDotWithHeart.jpg", "antCrawlingUpBamboo.jpg", "beardedGuy.jpg", "bigA.jpg", "bikeReady.jpg", "brollyMan.jpg", "BrandonKevin.jpg", "antonioClimbing.jpg", "beautifulFlower.jpg", "bigBalatonSunrise.jpg", "bikeless.jpg", "budapestSunset.jpg", "actionBee.jpg", "archer.jpg", "beddedBike.jpg", "bigData.jpg", "bikersForBikers.jpg", "butterflew.jpg", "adriaticSunrise.jpg", "auntDotSamGusTwo.jpg", "beeFlower.jpg", "bigFig.jpg", "birdInFlight.jpg", "bwKevin.jpg", "aftermath.jpg", "averyCastle.jpg", "beeFood.jpg", "bigFlowerUmbrella.jpg", "birdLady.jpg", "byeByeBike.jpg", "airSun.jpg", "babyBulb.jpg", "beheaded.jpg", "bigLeafSmallFlowers.jpg", "birdPlant.jpg", "centered.jpg", "akhenatenNefertiti.jpg", "backgroundBoys.jpg", "benAliceCake.jpg", "bigYellow.jpg", "birthdayLoriann.jpg", "cheersTwo.jpg", "akhenatenNefertitiFamily.jpg", "balaton.jpg", "benAliceMooned.jpg", "bikeAndSutroSquare.jpg", "birthdaySteve.jpg", "stars_milky_way.jpg", "angelAbovePope.jpg", "balatonSunset.jpg", "benoitBigHair.jpg", "bikeBeach.jpg", "blackWhtieFace.jpg", "universe_4096.jpg", "angelKev.jpg", "balatonSunsetting.jpg", "berries.jpg", "bikeBeached.jpg", "blurryTwo.jpg", "anotherGod.jpg", "bandida.jpg", "betweenTwo.jpg", "bikeChoices.jpg", "brentHomer.jpg"
  ],
  msg:{
    uname: '',
    email: '',
    message: '',
    msgTime: Date.now()
  }
};

const store = () => createStore(reducers, initialState)

export default store;
