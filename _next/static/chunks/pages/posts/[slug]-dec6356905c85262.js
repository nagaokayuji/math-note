(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{2070:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(8576)}])},5741:function(e,t,n){"use strict";var r=n(5893),s=n(1664),i=n(6260);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}t.Z=function(e){var t=e.href,n=o(e,["href"]),a=t&&t.startsWith("/"),l=t&&t.startsWith("#");return a?(0,r.jsx)(s.default,{href:(0,i.Z)(t),children:(0,r.jsx)("a",c({},n))}):l?(0,r.jsx)("a",c({href:t},n)):(0,r.jsx)("a",c({target:"_blank",rel:"noopener noreferrer",href:t},n))}},5437:function(e,t,n){"use strict";var r=n(5893),s=n(1664),i=n(6260);t.Z=function(e){var t=e.text;return(0,r.jsx)(s.default,{href:(0,i.Z)("/tags/".concat(t)),children:(0,r.jsx)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t})})}},7518:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5",children:t})}},3797:function(e,t,n){"use strict";var r=n(5893),s=n(3855),i=n(4797);t.Z=function(e){var t=e.dateString,n=(0,s.Z)(t);return(0,r.jsx)("time",{dateTime:t,children:(0,i.Z)(n,"yyyy/MM/dd")})}},7905:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),s=n(7518),i=function(){return(0,r.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,r.jsx)(s.Z,{})})},a=n(9008),c=n(6260),o=function(){return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,c.Z)("/favicon/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"shortcut icon",href:(0,c.Z)("/favicon/favicon.ico")}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"mathematics"})]})},l=n(5741),u=function(e){e.preview;var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{}),(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossOrigin:"anonymous"}),(0,r.jsxs)("div",{className:"min-h-screen",children:[(0,r.jsxs)("nav",{className:"py-4",children:[(0,r.jsx)(l.Z,{href:"/",children:(0,r.jsx)("a",{className:"m-8 md:m-8 hover:underline hover:text-blue-800 cursor-pointer",children:"Math note"})}),(0,r.jsx)(l.Z,{href:"/tags",children:(0,r.jsx)("a",{className:"m-8 md:m-8 hover:underline hover:text-blue-800 cursor-pointer",children:"Tags"})}),(0,r.jsx)(l.Z,{href:"/about",children:(0,r.jsx)("a",{className:"m-8 md:m-8 hover:underline hover:text-blue-800 cursor-pointer",children:"About"})})]}),(0,r.jsx)("main",{children:t})]}),(0,r.jsx)(i,{})]})}},6260:function(e,t,n){"use strict";var r=((0,n(1752).default)()||{}).publicRuntimeConfig,s=(void 0===r?{}:r).basePath;t.Z=function(e){return(s||"")+(e||"")}},8576:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return g}});var r=n(5893),s=n(1163),i=n(2918),a=n(7518),c=n(602),o=n.n(c),l=function(e){var t=e.content;return(0,r.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,r.jsx)("div",{className:o().markdown,dangerouslySetInnerHTML:{__html:t}})})},u=n(1664),d=n(6260),x=function(){return(0,r.jsx)("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:(0,r.jsx)(u.default,{href:(0,d.Z)("/"),children:(0,r.jsx)("a",{className:"hover:underline",children:"Math note"})})})},f=n(3797),m=n(5437),h=function(e){e.title,e.coverImage;var t=e.date,n=e.tags;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,r.jsx)("div",{className:"flex flex-wrap",children:n.map((function(e){return(0,r.jsx)(m.Z,{text:e},e)}))}),(0,r.jsx)("div",{className:"mb-6 text-lg",children:(0,r.jsx)(f.Z,{dateString:t})}),(0,r.jsx)("hr",{})]})})},j=n(7905),v=n(9008),p=!0,g=function(e){var t=e.post,n=(e.morePosts,e.preview),c=(0,s.useRouter)();return c.isFallback||(null===t||void 0===t?void 0:t.slug)?(0,r.jsx)(j.Z,{preview:n,children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(x,{}),c.isFallback?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("article",{className:"mb-32",children:[(0,r.jsx)(v.default,{children:(0,r.jsx)("title",{children:t.title})}),(0,r.jsx)(h,{title:t.title,coverImage:t.coverImage,date:t.date,tags:t.tags}),(0,r.jsx)(l,{content:t.content})]})})]})}):(0,r.jsx)(i.default,{statusCode:404})}},602:function(e){e.exports={markdown:"markdown-styles_markdown__1x9gM"}},2918:function(e,t,n){e.exports=n(9185)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[613,774,888,179],(function(){return t=2070,e(e.s=t);var t}));var t=e.O();_N_E=t}]);