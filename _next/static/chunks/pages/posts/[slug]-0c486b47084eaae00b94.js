(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{8458:function(e,t,n){"use strict";var r=n(5893),i=n(1664),a=n(2602);t.Z=function(e){var t=e.text;return(0,r.jsx)(i.default,{href:(0,a.Z)("/tags/".concat(t)),children:(0,r.jsx)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t})})}},7063:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},3453:function(e,t,n){"use strict";var r=n(5893),i=n(3855),a=n(4790);t.Z=function(e){var t=e.dateString,n=(0,i.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,a.Z)(n,"yyyy/MM/dd")})}},9798:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),i=n(7063),a=function(){return(0,r.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,r.jsx)(i.Z,{})})},s=n(9008),c=n(2602),l=function(){return(0,r.jsxs)(s.default,{children:[(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,c.Z)("/favicon/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"shortcut icon",href:(0,c.Z)("/favicon/favicon.ico")}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"blog"})]})},o=n(1664),u=function(e){e.preview;var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossOrigin:"anonymous"}),(0,r.jsxs)("div",{className:"min-h-screen",children:[(0,r.jsxs)("nav",{children:[(0,r.jsx)(o.default,{href:(0,c.Z)("/"),children:(0,r.jsx)("a",{className:"pr-10",children:"Math note"})}),(0,r.jsx)(o.default,{href:(0,c.Z)("/about"),children:(0,r.jsx)("a",{children:"About(todo)"})})]}),(0,r.jsx)("main",{children:t})]}),(0,r.jsx)(a,{})]})}},2602:function(e,t,n){"use strict";var r=((0,n(1752).default)()||{}).publicRuntimeConfig,i=(void 0===r?{}:r).basePath;t.Z=function(e){return(i||"")+(e||"")}},3359:function(e,t,n){"use strict";var r=n(4575),i=n(3913),a=n(2205),s=n(8585),c=n(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}var o=n(5318);t.__esModule=!0,t.default=void 0;var u=o(n(7294)),d=o(n(2775)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function x(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){a(n,e);var t=l(n);function n(){return r(this,n),t.apply(this,arguments)}return i(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||f[e]||"An unexpected error has occurred";return u.default.createElement("div",{style:m.error},u.default.createElement(d.default,null,u.default.createElement("title",null,e?"".concat(e,": ").concat(t):"Application error: a client-side exception has occurred")),u.default.createElement("div",null,u.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?u.default.createElement("h1",{style:m.h1},e):null,u.default.createElement("div",{style:m.desc},u.default.createElement("h2",{style:m.h2},this.props.title||e?t:u.default.createElement(u.default.Fragment,null,"Application error: a client-side exception has occurred (",u.default.createElement("a",{href:"https://nextjs.org/docs/messages/client-side-exception-occurred"},"developer guidance"),")"),"."))))}}]),n}(u.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=x,h.origGetInitialProps=x;var m={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},7266:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return j}});var r=n(5893),i=n(1163),a=n(2918),s=n(7063),c=n(1255),l=n.n(c),o=function(e){var t=e.content;return(0,r.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,r.jsx)("div",{className:l().markdown,dangerouslySetInnerHTML:{__html:t}})})},u=n(1664),d=n(2602),f=function(){return(0,r.jsx)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:(0,r.jsx)(u.default,{href:(0,d.Z)("/"),children:(0,r.jsx)("a",{className:"hover:underline",children:"Math note"})})})},x=n(3453),h=n(8458),m=function(e){e.title,e.coverImage;var t=e.date,n=e.tags;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,r.jsx)("div",{className:"flex flex-wrap",children:n.map((function(e){return(0,r.jsx)(h.Z,{text:e},e)}))}),(0,r.jsx)("div",{className:"mb-6 text-lg",children:(0,r.jsx)(x.Z,{dateString:t})}),(0,r.jsx)("hr",{})]})})},p=n(9798),g=n(9008),v=!0,j=function(e){var t=e.post,n=(e.morePosts,e.preview),c=(0,i.useRouter)();return c.isFallback||null!==t&&void 0!==t&&t.slug?(0,r.jsx)(p.Z,{preview:n,children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(f,{}),c.isFallback?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("article",{className:"mb-32",children:[(0,r.jsx)(g.default,{children:(0,r.jsxs)("title",{children:[t.title," | Next.js Blog Example with markdown"]})}),(0,r.jsx)(m,{title:t.title,coverImage:t.coverImage,date:t.date,tags:t.tags}),(0,r.jsx)(o,{content:t.content})]})})]})}):(0,r.jsx)(a.default,{statusCode:404})}},9035:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(7266)}])},1255:function(e){e.exports={markdown:"markdown-styles_markdown__1x9gM"}},2918:function(e,t,n){e.exports=n(3359)},1163:function(e,t,n){e.exports=n(4651)}},function(e){e.O(0,[574,522,774,888,179],(function(){return t=9035,e(e.s=t);var t}));var t=e.O();_N_E=t}]);