"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[628],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3548:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],u={id:"monitoring",title:"Monitoring"},s=void 0,c={unversionedId:"server/monitoring",id:"server/monitoring",isDocsHomePage:!1,title:"Monitoring",description:"Centrifugo supports reporting metrics in Prometheus format and can automatically export metrics to Graphite.",source:"@site/docs/server/monitoring.md",sourceDirName:"server",slug:"/server/monitoring",permalink:"/docs/server/monitoring",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/monitoring.md",version:"current",frontMatter:{id:"monitoring",title:"Monitoring"},sidebar:"Guides",previous:{title:"Admin web UI",permalink:"/docs/server/admin_web"},next:{title:"Infrastructure tuning",permalink:"/docs/server/infra_tuning"}},l=[{value:"Prometheus",id:"prometheus",children:[]},{value:"Graphite",id:"graphite",children:[]},{value:"Grafana dashboard",id:"grafana-dashboard",children:[]}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Centrifugo supports reporting metrics in Prometheus format and can automatically export metrics to Graphite."),(0,a.kt)("h3",{id:"prometheus"},"Prometheus"),(0,a.kt)("p",null,"To enable Prometheus endpoint start Centrifugo with ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," option on:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "prometheus": true\n}\n')),(0,a.kt)("p",null,"This will enable ",(0,a.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint so the Centrifugo instance can be monitored by your Prometheus server."),(0,a.kt)("h3",{id:"graphite"},"Graphite"),(0,a.kt)("p",null,"To enable automatic export to Graphite (via TCP):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "graphite": true,\n    "graphite_host": "localhost",\n    "graphite_port": 2003\n}\n')),(0,a.kt)("p",null,"By default, stats will be aggregated over 10 seconds intervals inside Centrifugo and then pushed to Graphite over TCP connection."),(0,a.kt)("p",null,"If you need to change this aggregation interval use the ",(0,a.kt)("inlineCode",{parentName:"p"},"graphite_interval")," option (in seconds, default ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),")."),(0,a.kt)("h3",{id:"grafana-dashboard"},"Grafana dashboard"),(0,a.kt)("p",null,"Check out Centrifugo ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/13039"},"official Grafana dashboard")," for Prometheus storage. You can import that dashboard to your Grafana, point to Prometheus storage \u2013 and enjoy visualized metrics."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://grafana.com/api/dashboards/13039/images/8950/image",alt:null})))}m.isMDXComponent=!0}}]);