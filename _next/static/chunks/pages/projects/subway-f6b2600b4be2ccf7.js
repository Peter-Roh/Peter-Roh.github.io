(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{138:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/subway",function(){return s(6090)}])},9514:function(e,r,s){"use strict";s.d(r,{Z:function(){return v}});var t=s(5893),n=s(7294),a=s(2469),l=s(9382),i=s(2676),o=s(9680);let c=(0,s(5139).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,r)=>{let{className:s,variant:n,size:a,asChild:l=!1,...d}=e,u=l?o.g7:"button";return(0,t.jsx)(u,{className:(0,i.cn)(c({variant:n,size:a,className:s})),ref:r,...d})});d.displayName="Button";let u=n.createContext(null);function m(){let e=n.useContext(u);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let f=n.forwardRef((e,r)=>{let{orientation:s="horizontal",opts:a,setApi:o,plugins:c,className:d,children:m,...f}=e,[h,x]=(0,l.Z)({...a,axis:"horizontal"===s?"x":"y"},c),[p,j]=n.useState(!1),[v,N]=n.useState(!1),g=n.useCallback(e=>{e&&(j(e.canScrollPrev()),N(e.canScrollNext()))},[]),w=n.useCallback(()=>{null==x||x.scrollPrev()},[x]),b=n.useCallback(()=>{null==x||x.scrollNext()},[x]),y=n.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),w()):"ArrowRight"===e.key&&(e.preventDefault(),b())},[w,b]);return n.useEffect(()=>{x&&o&&o(x)},[x,o]),n.useEffect(()=>{if(x)return g(x),x.on("reInit",g),x.on("select",g),()=>{null==x||x.off("select",g)}},[x,g]),(0,t.jsx)(u.Provider,{value:{carouselRef:h,api:x,opts:a,orientation:s||((null==a?void 0:a.axis)==="y"?"vertical":"horizontal"),scrollPrev:w,scrollNext:b,canScrollPrev:p,canScrollNext:v},children:(0,t.jsx)("div",{ref:r,onKeyDownCapture:y,className:(0,i.cn)("relative",d),role:"region","aria-roledescription":"carousel",...f,children:m})})});f.displayName="Carousel";let h=n.forwardRef((e,r)=>{let{className:s,...n}=e,{carouselRef:a,orientation:l}=m();return(0,t.jsx)("div",{ref:a,className:"overflow-hidden",children:(0,t.jsx)("div",{ref:r,className:(0,i.cn)("flex","horizontal"===l?"-ml-4":"-mt-4 flex-col",s),...n})})});h.displayName="CarouselContent";let x=n.forwardRef((e,r)=>{let{className:s,...n}=e,{orientation:a}=m();return(0,t.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:(0,i.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===a?"pl-4":"pt-4",s),...n})});x.displayName="CarouselItem";let p=n.forwardRef((e,r)=>{let{className:s,variant:n="outline",size:l="icon",...o}=e,{orientation:c,scrollPrev:u,canScrollPrev:f}=m();return(0,t.jsxs)(d,{ref:r,variant:n,size:l,className:(0,i.cn)("absolute  h-8 w-8 rounded-full","horizontal"===c?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",s),disabled:!f,onClick:u,...o,children:[(0,t.jsx)(a.Y4O,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});p.displayName="CarouselPrevious";let j=n.forwardRef((e,r)=>{let{className:s,variant:n="outline",size:l="icon",...o}=e,{orientation:c,scrollNext:u,canScrollNext:f}=m();return(0,t.jsxs)(d,{ref:r,variant:n,size:l,className:(0,i.cn)("absolute h-8 w-8 rounded-full","horizontal"===c?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",s),disabled:!f,onClick:u,...o,children:[(0,t.jsx)(a.LZ3,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Next slide"})]})});function v(e){let{images:r}=e;return(0,t.jsxs)(f,{className:"w-full max-w-xs lg:max-w-4xl",children:[(0,t.jsx)(h,{children:r.map((e,r)=>(0,t.jsx)(x,{children:(0,t.jsx)("div",{className:"p-1",children:(0,t.jsx)("img",{className:"aspect-[4/3] object-contain",src:e.imgUrl,alt:e.description})})},r))}),(0,t.jsx)(p,{}),(0,t.jsx)(j,{})]})}j.displayName="CarouselNext"},2676:function(e,r,s){"use strict";s.d(r,{Y:function(){return l},cn:function(){return a}});var t=s(512),n=s(8388);function a(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return(0,n.m6)((0,t.W)(r))}let l=e=>{window.open(e,"_blank","noopener,noreferrer")}},6090:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return d}});var t=s(5893),n=s(9008),a=s.n(n),l=s(1664),i=s.n(l),o=s(2469),c=s(9514);function d(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a(),{children:(0,t.jsx)("title",{children:"Subway KIOSK | Roh Minchul"})}),(0,t.jsxs)("div",{className:"page",children:[(0,t.jsxs)("div",{className:"grid grid-cols-3",children:[(0,t.jsx)(i(),{href:"/projects",children:(0,t.jsxs)("div",{className:"text-sub flex cursor-pointer items-center",children:[(0,t.jsx)(o.wyc,{}),(0,t.jsx)("span",{className:"ml-1",children:"See other projects"})]})}),(0,t.jsx)("div",{className:"mx-auto text-center text-lg font-semibold",children:"Subway KIOSK"}),(0,t.jsx)("div",{})]}),(0,t.jsx)("div",{className:"w-full",children:(0,t.jsx)("div",{className:"flex-x-center mt-6",children:(0,t.jsx)(c.Z,{images:[{imgUrl:"https://peter-roh.github.io/_next/static/media/kiosk.e3f8766e.png",description:"Subway KIOSK"}]})})}),(0,t.jsxs)("div",{className:"project-section",children:[(0,t.jsx)("p",{className:"project-title",children:"Description"}),(0,t.jsx)("div",{className:"mt-2 font-medium",children:"Developed and maintained Subway KIOSK program which is a program for customers to order foods without a shop assistant as a frontend developer."})]}),(0,t.jsxs)("div",{className:"project-section",children:[(0,t.jsx)("p",{className:"project-title",children:"Features"}),(0,t.jsx)("div",{className:"mt-2 font-medium",children:(0,t.jsx)("ul",{className:"project-ul",children:["Interactive UX","i18n multi-language support","Receipt Printing","Admin Page"].map(e=>(0,t.jsx)("li",{children:e},e))})})]}),(0,t.jsxs)("div",{className:"project-section",children:[(0,t.jsx)("p",{className:"project-title",children:"Tech Stack"}),(0,t.jsx)("div",{className:"mt-2 font-medium",children:(0,t.jsx)("ul",{className:"project-ul",children:["Typescript","React","Sass","Redux"].map(e=>(0,t.jsx)("li",{children:e},e))})})]}),(0,t.jsxs)("div",{className:"project-section",children:[(0,t.jsx)("p",{className:"project-title",children:"Development personnel & Duration"}),(0,t.jsx)("div",{className:"mt-2 font-medium",children:"3 people, 10 months"})]})]})]})}}},function(e){e.O(0,[409,159,664,379,888,774,179],function(){return e(e.s=138)}),_N_E=e.O()}]);