(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4791:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893),s=r(1664);function a(e){var t=e.totalPages,r=e.currentPage,a=r-1>0,i=r+1<=t;return(0,n.jsx)("div",{className:"pt-6 pb-8 space-y-2 md:space-y-5",children:(0,n.jsxs)("nav",{className:"flex justify-between",children:[!a&&(0,n.jsx)("button",{className:"cursor-auto disabled:opacity-50",disabled:!a,children:"Previous"}),a&&(0,n.jsx)(s.default,{href:r-1===1?"/blog/":"/blog/page/".concat(r-1),children:(0,n.jsx)("button",{children:"Previous"})}),(0,n.jsxs)("span",{children:[r," of ",t]}),!i&&(0,n.jsx)("button",{className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Next"}),i&&(0,n.jsx)(s.default,{href:"/blog/page/".concat(r+1),children:(0,n.jsx)("button",{children:"Next"})})]})})}},8458:function(e,t,r){"use strict";var n=r(5893),s=r(1664),a=r(2602);t.Z=function(e){var t=e.text;return(0,n.jsx)(s.default,{href:(0,a.Z)("/tags/".concat(t)),children:(0,n.jsx)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t})})}},7063:function(e,t,r){"use strict";var n=r(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"container mx-auto px-5",children:t})}},3453:function(e,t,r){"use strict";var n=r(5893),s=r(3855),a=r(4790);t.Z=function(e){var t=e.dateString,r=(0,s.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,a.Z)(r,"yyyy/MM/dd")})}},6878:function(e,t,r){"use strict";var n=r(5893);t.Z=function(){return(0,n.jsxs)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:[(0,n.jsx)("h1",{className:"text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8",children:"Math note"}),(0,n.jsx)("h4",{className:"text-center md:text-left text-lg mt-5 md:pl-8",children:"\u30e1\u30e2\u66f8\u304d"})]})}},9798:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(5893),s=r(7063),a=function(){return(0,n.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,n.jsx)(s.Z,{})})},i=r(9008),c=r(2602),l=function(){return(0,n.jsxs)(i.default,{children:[(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,c.Z)("/favicon/favicon-32x32.png")}),(0,n.jsx)("link",{rel:"shortcut icon",href:(0,c.Z)("/favicon/favicon.ico")}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000"}),(0,n.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,n.jsx)("meta",{name:"description",content:"blog"})]})},o=r(1664),u=function(e){e.preview;var t=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossOrigin:"anonymous"}),(0,n.jsxs)("div",{className:"min-h-screen",children:[(0,n.jsxs)("nav",{children:[(0,n.jsx)(o.default,{href:(0,c.Z)("/"),children:(0,n.jsx)("a",{className:"pr-10",children:"Math note"})}),(0,n.jsx)(o.default,{href:(0,c.Z)("/about"),children:(0,n.jsx)("a",{children:"About(todo)"})})]}),(0,n.jsx)("main",{children:t})]}),(0,n.jsx)(a,{})]})}},6977:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(5893),s=r(3453),a=r(6156);function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=r(1664),l=r(2602);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.href,r=i(e,["href"]),s=t&&t.startsWith("/"),a=t&&t.startsWith("#");return s?(0,n.jsx)(c.default,{href:(0,l.Z)(t),children:(0,n.jsx)("a",u({},r))}):a?(0,n.jsx)("a",u({href:t},r)):(0,n.jsx)("a",u({target:"_blank",rel:"noopener noreferrer",href:t},r))},x=r(8458),f=function(e){var t=e.title,r=e.date,a=e.excerpt,i=e.slug,c=e.tags;return(0,n.jsx)("li",{className:"py-4",children:(0,n.jsxs)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",children:[(0,n.jsx)("dl",{children:(0,n.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.jsx)(s.Z,{dateString:r})})}),(0,n.jsxs)("div",{className:"space-y-3 xl:col-span-3",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-2xl font-bold leading-8 tracking-tight hover:underline hover:text-blue-800 cursor-pointer",children:(0,n.jsx)(d,{href:"/posts/".concat(i),className:"text-gray-900 dark:text-gray-100",children:t})}),(0,n.jsx)("div",{className:"flex flex-wrap",children:c.map((function(e){return(0,n.jsx)(x.Z,{text:e},e)}))})]}),(0,n.jsx)("div",{className:"prose text-gray-500 max-w-none dark:text-gray-400",children:a})]})]})},i)},h=function(e){var t=e.posts;e.pagination;return(0,n.jsx)("section",{children:(0,n.jsx)("ul",{children:(0,n.jsx)("div",{className:"container mx-auto",children:t.map((function(e){return(0,n.jsx)(f,{title:e.title,date:e.date,slug:e.slug,excerpt:e.excerpt,tags:e.tags},e.slug)}))})})})}},2602:function(e,t,r){"use strict";var n=((0,r(1752).default)()||{}).publicRuntimeConfig,s=(void 0===n?{}:n).basePath;t.Z=function(e){return(s||"")+(e||"")}},2562:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u}});var n=r(5893),s=r(7063),a=r(6977),i=r(6878),c=r(9798),l=r(9008),o=r(4791),u=!0;t.default=function(e){var t=e.allPosts,r=e.pagination;return console.log(JSON.stringify(r)),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(l.default,{children:(0,n.jsx)("title",{children:"Math note"})}),(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(a.Z,{posts:t,pagination:r})]}),(0,n.jsx)(o.Z,{currentPage:r.currentPage,totalPages:r.totalPages})]})})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2562)}])}},function(e){e.O(0,[574,522,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);