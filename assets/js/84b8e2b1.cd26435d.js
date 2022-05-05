"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[477],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1041:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={id:"user_connections",title:"User connections API"},s=void 0,c={unversionedId:"pro/user_connections",id:"version-3/pro/user_connections",title:"User connections API",description:"Centrifugo PRO provides an additional API call userconnections. It allows getting all active sessions of the user (by user ID) without turning on presence feature for channels at all. It's also possible to attach any JSON payload to a connection which will be then visible in the result of userconnections call. The important thing is that this additional meta information won't be exposed to a client-side (unlike connection info for example).",source:"@site/versioned_docs/version-3/pro/user_connections.md",sourceDirName:"pro",slug:"/pro/user_connections",permalink:"/docs/pro/user_connections",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/pro/user_connections.md",tags:[],version:"3",frontMatter:{id:"user_connections",title:"User connections API"},sidebar:"Pro",previous:{title:"Operation throttling",permalink:"/docs/pro/throttling"},next:{title:"User blocking API",permalink:"/docs/pro/user_block"}},p={},u=[{value:"User connections params",id:"user-connections-params",level:4},{value:"User connections result",id:"user-connections-result",level:4},{value:"UserConnectionInfo",id:"userconnectioninfo",level:4}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo PRO provides an additional API call ",(0,o.kt)("inlineCode",{parentName:"p"},"user_connections"),". It allows getting all active sessions of the user (by user ID) without turning on presence feature for channels at all. It's also possible to attach any JSON payload to a connection which will be then visible in the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"user_connections")," call. The important thing is that this additional meta information won't be exposed to a client-side (unlike connection ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," for example)."),(0,o.kt)("p",null,"This feature can be useful to manage active user sessions \u2013 for example in a messenger application. Users can look at a list of own current sessions and close some of them (possible with Centrifugo disconnect server API)."),(0,o.kt)("p",null,"Below is a feature showcase using admin web UI, but this call is available over HTTP or GRPC server API."),(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:"/img/user_connections.mp4",type:"video/mp4"}),"Sorry, your browser doesn't support embedded video."),(0,o.kt)("p",null,"Let's look at example. Generate a JWT for user 42:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"centrifugo genconfig\ncentrifugo gentoken -u 42\nHMAC SHA-256 JWT for user 42 with expiration TTL 168h0m0s:\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y\n")),(0,o.kt)("p",null,"Run Centrifugo with ",(0,o.kt)("inlineCode",{parentName:"p"},"uni_http_stream")," transport enabled (it will allow us to connect from console):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CENTRIFUGO_UNI_HTTP_STREAM=1 centrifugo -c config.json\n")),(0,o.kt)("p",null,"Create new terminal window and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8000/connection/uni_http_stream --data \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y", "name": "terminal"}\'\n')),(0,o.kt)("p",null,"In another terminal create one more connection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8000/connection/uni_http_stream --data \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y", "name": "terminal"}\'\n')),(0,o.kt)("p",null,"Now let's call ",(0,o.kt)("inlineCode",{parentName:"p"},"user_connections")," over HTTP API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "user_connections", "params": {"user": "42"}}\' \\\n  http://localhost:8000/api\n')),(0,o.kt)("p",null,"The result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": {\n        "connections": {\n            "db8bc772-2654-4283-851a-f29b888ace74": {\n                "app_name": "terminal",\n                "transport": "uni_http_stream",\n                "protocol": "json"\n            },\n            "4bc3ca70-ecc5-439d-af14-a78ae18e31c7": {\n                "app_name": "terminal",\n                "transport": "uni_http_stream",\n                "protocol": "json"\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Here we can see that user has 2 connections from ",(0,o.kt)("inlineCode",{parentName:"p"},"terminal")," app."),(0,o.kt)("p",null,"Each connection can be annotated with meta JSON information which is set during connection establishment (over ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," claim of JWT or by returning ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," in connect proxy result)."),(0,o.kt)("h4",{id:"user-connections-params"},"User connections params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"User ID")))),(0,o.kt)("h4",{id:"user-connections-result"},"User connections result"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field name"),(0,o.kt)("th",{parentName:"tr",align:null},"Field type"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"connections"),(0,o.kt)("td",{parentName:"tr",align:null},"map of string to UserConnectionInfo"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"active user connections map where key is client ID and value is UserConnectionInfo")))),(0,o.kt)("h4",{id:"userconnectioninfo"},"UserConnectionInfo"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field name"),(0,o.kt)("th",{parentName:"tr",align:null},"Field type"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"app_name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"client app name (if provided by client)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"app_version"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"client app version (if provided by client)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"transport"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"client connection transport")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"protocol"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"client connection protocol (json or protobuf)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"token_uid"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"client JWT unique ID (if set)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"token_issued_at"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"client JWT issued at time as Unix seconds (if set)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"meta"),(0,o.kt)("td",{parentName:"tr",align:null},"JSON"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"meta information attached to a connection")))))}d.isMDXComponent=!0}}]);