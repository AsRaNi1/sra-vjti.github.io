_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"KXE/":function(t,e,a){t.exports={startupsSectionTitle:"Startups_startupsSectionTitle__tciLS",startup:"Startups_startup__3S8Dc",startupImg:"Startups_startupImg__1SvyR",startupCont:"Startups_startupCont__1SVDs",startupContName:"Startups_startupContName__3q4E5",startupIcon:"Startups_startupIcon__31AtP",wiggle:"Startups_wiggle__Eqtp4",startupContSub:"Startups_startupContSub__10-YR"}},"Tu/p":function(t,e,a){t.exports={hero:"Hero_hero__1fVUa",heroHead:"Hero_heroHead__12Yiw",heroSub:"Hero_heroSub__3-rrY",notif:"Hero_notif__yKDqh",wobble:"Hero_wobble__DlBEw","scroll-indicator":"Hero_scroll-indicator__1OdvK",bounce:"Hero_bounce__22czQ",is:"Hero_is__2c_Nk",caption:"Hero_caption__1RLmY",captionHead:"Hero_captionHead__bPVFr",captionSub:"Hero_captionSub__-hd2G",scrollIndicator:"Hero_scrollIndicator__zJATM"}},aZGL:function(t,e,a){"use strict";a.r(e);var n=a("rePB"),r=a("KXE/"),i=a.n(r),s=a("mC2l"),c=a("KSab"),o=a("nKUr"),u=a("q1tI");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(n.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p=function(t){var e=t.imgName,a=t.name,n=t.sub,r=t.externalLink;return Object(o.jsxs)("div",{onClick:function(){return window.location=r},className:i.a.startup,children:[Object(o.jsx)("div",{style:{backgroundImage:'url("/static/images/'.concat(e,'")')},className:i.a.startupImg}),Object(o.jsxs)("div",{className:i.a.startupCont,children:[Object(o.jsx)("div",{className:i.a.startupContName,children:a}),Object(o.jsx)("div",{className:i.a.startupContSub,children:n})]})]})},b=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.a,{imgName:"startups-hero.jpg",backgroundPosition:"center top",title:Object(o.jsx)(o.Fragment,{children:"Startups"}),subtitleList:["Launching... into space!"],isHome:!1}),Object(o.jsx)("div",{className:i.a.startupsList,id:"is",children:c.t.map((function(t,e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:i.a.startupSection,children:[Object(o.jsx)("div",{className:i.a.startupsSectionTitle,children:t.name}),t.startups.map((function(t,e){return Object(u.createElement)(p,d(d({},t),{},{key:"startup_card_".concat(e)}))}))]},"startup_".concat(e))})}))})]})};e.default=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(b,{})})}},fWG7:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/startups",function(){return a("aZGL")}])},mC2l:function(t,e,a){"use strict";var n=a("Tu/p"),r=a.n(n),i=a("IP2g"),s=a("wHSu"),c=a("q1tI"),o=a("nKUr");e.a=function(t){var e=t.imgName,a=t.title,n=t.subtitleList,u=t.isHome,l=t.backgroundPosition,d=void 0===l?"center":l,p=Object(c.useState)("none"),b=p[0],j=p[1];return Object(c.useEffect)((function(){setTimeout((function(){j("")}),2e3)}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(\n                            to bottom,\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5)), url("/static/images/hero/'.concat(e,'")'),backgroundPosition:d},className:r.a.hero,children:[Object(o.jsx)("div",{className:r.a.heroHead,children:a}),Object(o.jsx)("div",{className:r.a.heroSub,children:n.map((function(t,e){return n.length!==e+1?Object(o.jsxs)("span",{children:[t,"\xa0\xa0\u2022\xa0\xa0"]},"hero_".concat(e)):Object(o.jsx)("span",{children:t},"hero_".concat(e))}))}),Object(o.jsx)("a",{href:"#is",children:Object(o.jsx)("div",{className:r.a.scrollIndicator})}),u&&Object(o.jsx)("a",{href:"#notifs",className:r.a.notif,style:{display:b},children:Object(o.jsx)(i.a,{icon:s.a})})]}),u&&Object(o.jsxs)("div",{className:r.a.is,id:"is",children:[Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/ideate-final2.jpg")'},className:r.a.caption,children:[Object(o.jsx)("div",{className:r.a.captionHead,children:"Ideate"}),Object(o.jsx)("div",{className:r.a.captionSub,children:"Changing the world, one solution at a time."})]}),Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000098, #00000098),\n\t\turl("/static/images/innovate-final2.jpg")'},className:r.a.caption,children:[Object(o.jsx)("div",{className:r.a.captionHead,children:"Innovate"}),Object(o.jsx)("div",{className:r.a.captionSub,children:"Creativity is thinking up new things. Innovation is doing new things."})]}),Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/inspire-final2.jpg")'},className:r.a.caption,children:[Object(o.jsx)("div",{className:r.a.captionHead,children:"Inspire"}),Object(o.jsx)("div",{className:r.a.captionSub,children:"Don't inspire by being perfect, inspire by embracing your imperfections."})]})]})]})}},rePB:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return n}))}},[["fWG7",0,1,4,2,3]]]);