(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{6359:function(e,t,r){"use strict";var n=r(6156),i=r(5893),a=r(7375),s=r(1664),c=r(2602);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.href,r=(0,a.Z)(e,["href"]),n=t&&t.startsWith("/"),o=t&&t.startsWith("#");return n?(0,i.jsx)(s.default,{href:(0,c.Z)(t),children:(0,i.jsx)("a",l({},r))}):o?(0,i.jsx)("a",l({href:t},r)):(0,i.jsx)("a",l({target:"_blank",rel:"noopener noreferrer",href:t},r))}},8458:function(e,t,r){"use strict";var n=r(5893),i=r(1664),a=r(2602);t.Z=function(e){var t=e.text;return(0,n.jsx)(i.default,{href:(0,a.Z)("/tags/".concat(t)),children:(0,n.jsx)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t})})}},7063:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"container mx-auto px-5",children:t})}},3453:function(e,t,r){"use strict";var n=r(5893),i=r(3855),a=r(4790);t.Z=function(e){var t=e.dateString,r=(0,i.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,a.Z)(r,"yyyy/MM/dd")})}},9798:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),i=r(7063),a=function(){return(0,n.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,n.jsx)(i.Z,{})})},s=r(9008),c=r(2602),o=function(){return(0,n.jsxs)(s.default,{children:[(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,c.Z)("/favicon/favicon-32x32.png")}),(0,n.jsx)("link",{rel:"shortcut icon",href:(0,c.Z)("/favicon/favicon.ico")}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000"}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,n.jsx)("meta",{name:"description",content:"mathematics"})]})},l=r(6359),u=function(e){e.preview;var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossOrigin:"anonymous"}),(0,n.jsxs)("div",{className:"min-h-screen",children:[(0,n.jsxs)("nav",{className:"py-4",children:[(0,n.jsx)(l.Z,{href:"/",children:(0,n.jsx)("a",{className:"m-8 md:m-8 hover:underline hover:text-blue-800 cursor-pointer",children:"Math note"})}),(0,n.jsx)(l.Z,{href:"/tags",children:(0,n.jsx)("a",{className:"m-8 md:m-8 hover:underline hover:text-blue-800 cursor-pointer",children:"Tags"})}),(0,n.jsx)(l.Z,{href:"/about",children:(0,n.jsx)("a",{className:"m-8 md:m-8 hover:underline hover:text-blue-800 cursor-pointer",children:"About"})})]}),(0,n.jsx)("main",{children:t})]}),(0,n.jsx)(a,{})]})}},2602:function(e,t,r){"use strict";var n=((0,r(1752).default)()||{}).publicRuntimeConfig,i=(void 0===n?{}:n).basePath;t.Z=function(e){return(i||"")+(e||"")}},3359:function(e,t,r){"use strict";var n=r(4575),i=r(3913),a=r(2205),s=r(8585),c=r(9754);function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var i=c(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return s(this,r)}}var l=r(5318);t.__esModule=!0,t.default=void 0;var u=l(r(7294)),d=l(r(2775)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var m=function(e){a(r,e);var t=o(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:x.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:x.h1},e):null,u.default.createElement("div",{style:x.desc},u.default.createElement("h2",{style:x.h2},this.props.title||e?t:u.default.createElement(u.default.Fragment,null,"Application error: a client-side exception has occurred (",u.default.createElement("a",{href:"https://nextjs.org/docs/messages/client-side-exception-occurred"},"developer guidance"),")"),"."))))}}]),r}(u.default.Component);t.default=m,m.displayName="ErrorPage",m.getInitialProps=h,m.origGetInitialProps=h;var x={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},7266:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return v},default:function(){return j}});var n=r(5893),i=r(1163),a=r(2918),s=r(7063),c=r(1255),o=r.n(c),l=function(e){var t=e.content;return(0,n.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,n.jsx)("div",{className:o().markdown,dangerouslySetInnerHTML:{__html:t}})})},u=r(1664),d=r(2602),f=function(){return(0,n.jsx)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:(0,n.jsx)(u.default,{href:(0,d.Z)("/"),children:(0,n.jsx)("a",{className:"hover:underline",children:"Math note"})})})},h=r(3453),m=r(8458),x=function(e){e.title,e.coverImage;var t=e.date,r=e.tags;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,n.jsx)("div",{className:"flex flex-wrap",children:r.map((function(e){return(0,n.jsx)(m.Z,{text:e},e)}))}),(0,n.jsx)("div",{className:"mb-6 text-lg",children:(0,n.jsx)(h.Z,{dateString:t})}),(0,n.jsx)("hr",{})]})})},p=r(9798),g=r(9008),v=!0,j=function(e){var t=e.post,r=(e.morePosts,e.preview),c=(0,i.useRouter)();return c.isFallback||null!==t&&void 0!==t&&t.slug?(0,n.jsx)(p.Z,{preview:r,children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(f,{}),c.isFallback?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("article",{className:"mb-32",children:[(0,n.jsx)(g.default,{children:(0,n.jsx)("title",{children:t.title})}),(0,n.jsx)(x,{title:t.title,coverImage:t.coverImage,date:t.date,tags:t.tags}),(0,n.jsx)(l,{content:t.content})]})})]})}):(0,n.jsx)(a.default,{statusCode:404})}},9035:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(7266)}])},1255:function(e){e.exports={markdown:"markdown-styles_markdown__1x9gM"}},2918:function(e,t,r){e.exports=r(3359)},1163:function(e,t,r){e.exports=r(4651)}},function(e){e.O(0,[613,522,774,888,179],(function(){return t=9035,e(e.s=t);var t}));var t=e.O();_N_E=t}]);