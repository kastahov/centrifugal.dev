"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6685],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3116:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),o=["components"],l={id:"admin_web",title:"Admin web UI"},s=void 0,c={unversionedId:"server/admin_web",id:"version-3/server/admin_web",title:"Admin web UI",description:"Centrifugo comes with builtin admin web interface. It can:",source:"@site/versioned_docs/version-3/server/admin_web.md",sourceDirName:"server",slug:"/server/admin_web",permalink:"/docs/3/server/admin_web",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/server/admin_web.md",tags:[],version:"3",frontMatter:{id:"admin_web",title:"Admin web UI"},sidebar:"Guides",previous:{title:"History and recovery",permalink:"/docs/3/server/history_and_recovery"},next:{title:"Monitoring",permalink:"/docs/3/server/monitoring"}},u={},d=[{value:"Options",id:"options",level:2},{value:"Using custom web interface",id:"using-custom-web-interface",level:2},{value:"Admin insecure mode",id:"admin-insecure-mode",level:2}],m={toc:d};function p(e){var n=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Centrifugo comes with builtin admin web interface. It can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Show general information and statistics from server nodes - number of connections, unique users, number of subscriptions, unique channels etc."),(0,a.kt)("li",{parentName:"ul"},"Call ",(0,a.kt)("inlineCode",{parentName:"li"},"publish"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"broadcast"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"subscribe"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"unsubscribe"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"disconnect"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"history"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"history_remove"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"presence"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"presence_stats"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"channels")," and some additional Centrifugo PRO server API commands."),(0,a.kt)("li",{parentName:"ul"},"Configure namespaces over a database (Centrifugo PRO feature)"),(0,a.kt)("li",{parentName:"ul"},"Trace connections in real-time (Centrifugo PRO feature)")),(0,a.kt)("p",null,"To enable admin web interface run Centrifugo with ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," option enabled and provide some security options in configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "admin": true,\n    "admin_password": "<PASSWORD>",\n    "admin_secret": "<SECRET>"\n}\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"admin")," (boolean, default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),") \u2013 enables/disables admin web UI"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"admin_password")," (string, default: ",(0,a.kt)("inlineCode",{parentName:"li"},'""'),") \u2013 this is a password to log into admin web interface"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"admin_secret")," (string, default: ",(0,a.kt)("inlineCode",{parentName:"li"},'""'),") - this is a secret key for authentication token set on successful login.")),(0,a.kt)("p",null,"Make both ",(0,a.kt)("inlineCode",{parentName:"p"},"admin_password")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"admin_secret")," strong and keep them in secret."),(0,a.kt)("p",null,"After configuring, restart Centrifugo and go to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000")," (by default) - you should see web interface."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Although there is a password based authentication a good advice is to protect web interface by firewall rules in production.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Admin web panel",src:t(9260).Z,width:"2896",height:"1448"})),(0,a.kt)("h2",{id:"using-custom-web-interface"},"Using custom web interface"),(0,a.kt)("p",null,"If you want to use custom web interface you can specify path to web interface directory dist:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...,\n    "admin": true,\n    "admin_password": "<PASSWORD>",\n    "admin_secret": "<SECRET>",\n    "admin_web_path": "<PATH_TO_WEB_DIST>"\n}\n')),(0,a.kt)("p",null,"This can be useful if you want to modify official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/web"},"web interface code")," in some way and test it with Centrifugo."),(0,a.kt)("h2",{id:"admin-insecure-mode"},"Admin insecure mode"),(0,a.kt)("p",null,"There is also an option to run Centrifugo in insecure admin mode - in this case you don't need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"admin_password")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"admin_secret")," in config \u2013 in web interface you will be logged in automatically without any password. Note that this is only an option for production if you protected admin web interface with firewall rules. Otherwise anyone in internet will have full access to admin functionality described above. To enable insecure admin mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...,\n    "admin": true,\n    "admin_insecure": true,\n    "admin_password": "<PASSWORD>",\n    "admin_secret": "<SECRET>"\n}\n')))}p.isMDXComponent=!0},9260:function(e,n,t){n.Z=t.p+"assets/images/quick_start_admin-3a12aa4705d288a373385439769dca64.png"}}]);