(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[523],{6359:function(e,t,r){"use strict";var n=r(6156),s=r(5893),a=r(7375),i=r(1664),c=r(2602);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.href,r=(0,a.Z)(e,["href"]),n=t&&t.startsWith("/"),o=t&&t.startsWith("#");return n?(0,s.jsx)(i.default,{href:(0,c.Z)(t),children:(0,s.jsx)("a",l({},r))}):o?(0,s.jsx)("a",l({href:t},r)):(0,s.jsx)("a",l({target:"_blank",rel:"noopener noreferrer",href:t},r))}},8458:function(e,t,r){"use strict";var n=r(5893),s=r(1664),a=r(2602);t.Z=function(e){var t=e.text;return(0,n.jsx)(s.default,{href:(0,a.Z)("/tags/".concat(t)),children:(0,n.jsx)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t})})}},7063:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"container mx-auto px-5",children:t})}},3453:function(e,t,r){"use strict";var n=r(5893),s=r(3855),a=r(4790);t.Z=function(e){var t=e.dateString,r=(0,s.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,a.Z)(r,"yyyy/MM/dd")})}},6878:function(e,t,r){"use strict";var n=r(5893);t.Z=function(){return(0,n.jsxs)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:[(0,n.jsx)("h1",{className:"text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8",children:"Math note"}),(0,n.jsx)("h4",{className:"text-center md:text-left text-lg mt-5 md:pl-8",children:"\u30e1\u30e2\u66f8\u304d"})]})}},9798:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),s=r(7063),a=function(){return(0,n.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,n.jsx)(s.Z,{})})},i=r(9008),c=r(2602),o=function(){return(0,n.jsxs)(i.default,{children:[(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,c.Z)("/favicon/favicon-32x32.png")}),(0,n.jsx)("link",{rel:"shortcut icon",href:(0,c.Z)("/favicon/favicon.ico")}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000"}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,n.jsx)("meta",{name:"description",content:"blog"})]})},l=r(6359),d=function(e){e.preview;var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossOrigin:"anonymous"}),(0,n.jsxs)("div",{className:"min-h-screen",children:[(0,n.jsxs)("nav",{children:[(0,n.jsx)(l.Z,{href:"/",children:(0,n.jsx)("a",{className:"pr-10 hover:underline hover:text-blue-800 cursor-pointer",children:"Math note"})}),(0,n.jsx)(l.Z,{href:"/tags",children:(0,n.jsx)("a",{className:"pr-10 hover:underline hover:text-blue-800 cursor-pointer",children:"Tags"})}),(0,n.jsx)(l.Z,{href:"/about",children:(0,n.jsx)("a",{className:"pr-10 hover:underline hover:text-blue-800 cursor-pointer",children:"About"})})]}),(0,n.jsx)("main",{children:t})]}),(0,n.jsx)(a,{})]})}},8851:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),s=r(3453),a=r(6359),i=r(8458),c=function(e){var t=e.title,r=e.date,c=e.excerpt,o=e.slug,l=e.tags;return(0,n.jsx)("li",{className:"py-4",children:(0,n.jsxs)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,n.jsx)("dl",{children:(0,n.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.jsx)(s.Z,{dateString:r})})}),(0,n.jsxs)("div",{className:"space-y-3 xl:col-span-3",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-2xl font-bold leading-8 tracking-tight hover:underline hover:text-blue-800 cursor-pointer",children:(0,n.jsx)(a.Z,{href:"/posts/".concat(o),className:"text-gray-900 dark:text-gray-100",children:t})}),(0,n.jsx)("div",{className:"flex flex-wrap",children:l.map((function(e){return(0,n.jsx)(i.Z,{text:e},e)}))})]}),(0,n.jsx)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:c})]})]})},o)},o=r(7294);function l(e){var t=e.totalPages,r=e.currentPage,s=e.basePath,i=r-1>0,c=r+1<=t;return(0,n.jsx)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.jsxs)("nav",{className:"flex justify-between",children:[!i&&(0,n.jsx)("button",{className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Previous"}),i&&(0,n.jsx)(a.Z,{href:"".concat(s,"/").concat(r-1),children:(0,n.jsx)("button",{children:"Previous"})}),(0,n.jsxs)("span",{children:[r," of ",t]}),!c&&(0,n.jsx)("button",{className:"cursor-auto disabled:opacity-50",disabled:!c,children:"Next"}),c&&(0,n.jsx)(a.Z,{href:"".concat(s,"/").concat(r+1),children:(0,n.jsx)("button",{children:"Next"})})]})})}var d=function(e){var t=e.posts,r=e.pagePosts,s=e.pagination,a=(0,o.useState)(""),i=a[0],d=a[1],u=t.filter((function(e){return(e.title+e.excerpt+e.tags.join(" ")).includes(i)})),x=r&&!i?r:u,h=t.length;return(0,n.jsxs)("section",{children:[(0,n.jsxs)("div",{className:"relative max-w-lg",children:[(0,n.jsx)("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return d(e.target.value)},placeholder:"Search articles",className:"block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-100"}),(0,n.jsx)("svg",{className:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]}),(0,n.jsx)("ul",{children:(0,n.jsx)("div",{className:"container mx-auto",children:x.map((function(e){return(0,n.jsx)(c,{title:e.title,date:e.date,slug:e.slug,excerpt:e.excerpt,tags:e.tags},e.slug)}))})}),s&&s.totalPages&&!i&&(0,n.jsx)(l,{currentPage:s.currentPage,totalPages:s.totalPages,basePath:s.basePath}),(0,n.jsxs)("p",{children:["\u5168 ",h," \u4ef6"]})]})}},2602:function(e,t,r){"use strict";var n=((0,r(1752).default)()||{}).publicRuntimeConfig,s=(void 0===n?{}:n).basePath;t.Z=function(e){return(s||"")+(e||"")}},9190:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return l}});var n=r(5893),s=r(7063),a=r(8851),i=r(6878),c=r(9798),o=r(9008),l=!0;t.default=function(e){var t=e.allPosts,r=e.pagePosts,l=e.pagination;return console.log(JSON.stringify(l)),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"Math note"})}),(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(a.Z,{posts:t,pagePosts:r,pagination:l})]})]})})}},3892:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/[page]",function(){return r(9190)}])}},function(e){e.O(0,[613,522,774,888,179],(function(){return t=3892,e(e.s=t);var t}));var t=e.O();_N_E=t}]);