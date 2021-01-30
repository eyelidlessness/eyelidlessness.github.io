import{h as t,Fragment as Xe}from"https://cdn.skypack.dev/preact@10.5.10";import{Head as De}from"microsite/head";import{processStyleWithPlugins as Ye,KEYFRAME_TYPE as ue,md5 as fe,isobject as Ue,isNestedSelector as He,normalizeNestedProperty as Ve,isMediaQuery as qe,generateCombinedMediaQuery as ge,isSupport as Ke,isUndefinedValue as Ze,cssifyDeclaration as We,generateCSSSelector as Qe,cssifyObject as Je,generateDeclarationReference as et,RULE_TYPE as tt,identifier as ot,createRenderer as nt,renderToString as st,RendererProvider as it,combineRules as rt,createComponent as at,__pika_web_default_export_for_treeshaking__ as ct,__pika_web_default_export_for_treeshaking__$1 as lt,__pika_web_default_export_for_treeshaking__$2 as dt}from"./_vendor/index.js";const ht=e=>e.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`),E=(e,n)=>[e.join(","),"{",Object.entries(n).reduce((s,[i,o])=>typeof o=="object"&&i.includes("&")?s:`${s}${ht(i)}:${o};`,""),"}",Object.entries(n).reduce((s,[i,o])=>typeof o=="object"&&i.includes("&")?`${s}${E(e.map(r=>i.replace(/&/g,r)),o)}`:s,"")].join(""),D=(...e)=>`clamp(${e.join(",")})`,pe="production",mt="production",ut=!0;var ft=Object.freeze({__proto__:null,MODE:pe,NODE_ENV:mt,SSR:ut});function Y(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function gt(e,n,s,i,o,r){const c=[];return o&&c.push(Y(o).slice(0,16)),i&&c.push(Y(i).slice(0,16)),s&&c.push(Y(s).slice(0,16)),c.push(Y(e).slice(0,16)),c.push(Y(n).slice(0,16)),c.push(r.slice(0,8)),c.join("_")}function pt(e,n,s=[""]){let i="";for(const r in e){const c=e[r];i=`${i}${r}{${Je(c)}}`}let o="";for(let r=0;r<s.length;r++){const c=s[r];o=`${o}@${c}keyframes ${n}{${i}}`}return o}function yt(){return e=>(e.renderKeyframe=(n,s)=>{const i=n(s,e),o=Ye(e,i,ue,s),r=JSON.stringify(o);if(!e.cache.hasOwnProperty(r)){const c=fe(r),l=(e.selectorPrefix||"_")+c.slice(0,8),d=pt(o,l,e.keyframePrefixes),h={type:ue,keyframe:d,name:l};e.cache[r]=h,e._emitChange(h)}return e.cache[r].name},e._renderStyleToClassNames=({_className:n,...s},i="",o="",r="")=>{let c=n?` ${n}`:"";for(const l in s){const d=s[l];if(Ue(d))if(He(l))c+=e._renderStyleToClassNames(d,i+Ve(l),o,r);else if(qe(l)){const h=ge(o,l.slice(6).trim());c+=e._renderStyleToClassNames(d,i,h,r)}else if(Ke(l)){const h=ge(r,l.slice(9).trim());c+=e._renderStyleToClassNames(d,i,o,h)}else console.warn(`The object key "${l}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const h=et(l,d,i,o,r);if(!e.cache.hasOwnProperty(h)){if(Ze(d)){e.cache[h]={className:""};continue}const m=We(l,d),w=fe(h),H=e.devMode?gt(l,d,i,o,r,w):(e.selectorPrefix||"_")+w.slice(0,8),V=Qe(H,i),q={type:tt,className:H,selector:V,declaration:m,pseudo:i,media:o,support:r};e.cache[h]=q,e._emitChange(q)}const A=e.cache[h].className;A&&(c+=` ${A}`)}}return c},e)}import.meta.env=ft;const St=ot(),ye=pe==="development",T=nt({devMode:ye,enhancers:[St,yt()],plugins:[ct(),lt(),dt()]});!ye&&import.meta.url.endsWith("/.microsite/staging/src/lib/styles/styles.js")&&T.subscribe(async()=>{st(T)});const bt=e=>Array.isArray(e)?e:[e],Se=({children:e})=>t(it,{renderer:T},...bt(e)),vt=e=>e,Ct=e=>T.renderRule(vt,e),f=Object.assign(Ct,{global:T.renderStatic.bind(T)}),le=Symbol("styles"),Et=e=>typeof e=="function"&&Array.isArray(e[le]),ee=(e,n)=>{const s=Et(e)?e[le]:[],o=[...s.map(m=>typeof m=="function"?m:()=>m),()=>n],r=rt(...o),c=[...s,n],l=typeof e=="string"?e:"div",d=at(r,l,Object.keys),h=m=>Array.isArray(m)?m:[m];return Object.assign(({children:m,...w})=>t(d,{...w,as:e},...h(m)),{[le]:c})},I=Symbol("DEFAULT_TOPIC"),g={[I]:I,ABLEISM:"Ableism",ARTS_CRAFTS:"Art, music & craft",LEMON:"My puppy!",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},te=2,de={minEm:1.0625,fluidVw:1.0625*te,maxEm:1.325},U="@media (prefers-color-scheme: dark)",Mt=["h1","h2","h3","h4","h5","h6"],Ot=["dd","dl","dt","li","ol","ul"],$t=[...Mt,...Ot,"p"],B=de.minEm/de.maxEm,$={h1:1.953,h2:1.563,h3:1.25},wt={h1:{minEm:$.h1*B,fluidVw:$.h1*B*te,maxEm:$.h1},h2:{minEm:$.h2*B,fluidVw:$.h2*B*te,maxEm:$.h2},h3:{minEm:$.h3*B,fluidVw:$.h3*B*te,maxEm:$.h3}},At=65,he=1.25,Nt=["0.7fr",`${he}rem`,[`${At}ch`,`calc(100% - ${he*2}rem)`],`${he}rem`,"1.2fr"],xt=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],_t=xt.join(", "),Pt=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Rt=Pt.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),y={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},jt=[[g[I],f({"&, &.hover-inherit-topic-color:hover":{color:y.DEFAULT_TOPIC.light},[U]:{"&, &.hover-inherit-topic-color:hover":{color:y.DEFAULT_TOPIC.dark}}})],[g.ABLEISM,f({"&, &.hover-inherit-topic-color:hover":{color:y.ABLEISM}})],[g.ARTS_CRAFTS,f({"&, &.hover-inherit-topic-color:hover":{color:y.ARTS_CRAFTS}})],[g.LEMON,f({"&, &.hover-inherit-topic-color:hover":{color:y.LEMON}})],[g.MENTAL_ILLNESS,f({"&, &.hover-inherit-topic-color:hover":{color:y.MENTAL_ILLNESS}})],[g.NEURODIVERGENCE,f({"&, &.hover-inherit-topic-color:hover":{color:y.NEURODIVERGENCE}})],[g.PHILOSOPHY,f({"&, &.hover-inherit-topic-color:hover":{color:y.PHILOSOPHY}})],[g.POLITICS,f({"&, &.hover-inherit-topic-color:hover":{color:y.POLITICS}})],[g.RACISM,f({"&, &.hover-inherit-topic-color:hover":{color:y.RACISM}})],[g.SEXISM,f({"&, &.hover-inherit-topic-color:hover":{color:y.SEXISM}})],[g.SUBSTANCE_ABUSE,f({"&, &.hover-inherit-topic-color:hover":{color:y.SUBSTANCE_ABUSE}})],[g.TECHNOLOGY,f({"&, &.hover-inherit-topic-color:hover":{color:y.TECHNOLOGY}})],[g.TRANSPHOBIA,f({"&, &.hover-inherit-topic-color:hover":{color:y.TRANSPHOBIA}})]],kt=Object.fromEntries(jt),a={baseFontSizeRange:de,darkMode:U,document:{backgroundColor:"hsl(192deg, 100%, 99%)",[U]:{backgroundColor:"hsl(192deg, 100%, 3%)"}},code:{backgroundColor:"hsl(220deg, 10%, 94%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:_t},deemphasize:{color:"hsl(212deg, 10%, 35%)"},emphasize:{color:"#000"},firstLastMarginZeroElements:$t,headingRanges:wt,[U]:{code:{backgroundColor:"hsl(220deg, 10%, 20%)",color:"hsla(210deg, 12%, 100%, 95%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"hsl(240deg, 8%, 12%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"},mainGridColumns:Nt,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"hsl(240deg, 8%, 97%)"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:Rt,[U]:{color:"hsla(210deg, 12%, 90%, 95%)"}},topicColorClassNames:kt},be=["b","em","h1","h2","h3","i","strong"],oe=["h1","h2","h3","h4","h5","h6"],Tt=[...oe,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],It=Array.from(new Set([...oe,...Tt,"div","fieldset","form","hgroup","hr","pre"])),Bt=()=>{f.global(`
    @font-face {
      font-family: Minipax;
      font-style:  normal;
      font-weight: normal;

      src:
        local('__Minipax'),
        url('/fonts/Minipax/regular.woff2') format('woff2'),
        url('/fonts/Minipax/regular.woff')  format('woff'),
        url('/fonts/Minipax/regular.ttf')   format('truetype');
    }

    html, body {
      margin: 0;
      padding: 0;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    ${It.join(",")} {
      display: block;
    }

    body, p, ol, ul {
      font-weight: normal;
    }

    ${oe.join(",")} {
      font-family:   Minipax;
      font-weight:   normal;
      line-height:   0.9375;
      margin-bottom: 1rem;
      margin-top:    1rem;
      padding-left:  1rem;
      text-indent:   -1rem;
    }

    ${oe.map(e=>`${e} small`).join(",")} {
      color:          currentColor;
      font-size:      0.875em;
      vertical-align: 0.05em;
    }

    ${E(be,a.emphasize)}

    h1 {
      font-size: ${D(`${a.headingRanges.h1.minEm}em`,`${a.headingRanges.h1.fluidVw}vw`,`${a.headingRanges.h1.maxEm}em`)};
    }

    h2 {
      font-size: ${D(`${a.headingRanges.h2.minEm}em`,`${a.headingRanges.h2.fluidVw}vw`,`${a.headingRanges.h2.maxEm}em`)};
    }

    h3 {
      font-size: ${D(`${a.headingRanges.h3.minEm}em`,`${a.headingRanges.h3.fluidVw}vw`,`${a.headingRanges.h3.maxEm}em`)};
    }

    dl {
      padding-inline-start: 1em;
    }

    ol, ul {
      padding-inline-start: 2em;
    }

    details, ol, p, ul {
      line-height: 1.618;
      margin:      1em 0 1.5em;
    }

    figure {
      margin:              0;
      margin-block-end:    0;
      margin-block-start:  0;
      margin-inline-end:   0;
      margin-inline-start: 0;
    }

    li {
      margin: 0.5em 0;
    }

    ${E(["pre"],a.pre)}

    ${E(["code"],{...a.code,borderRadius:"0.1875rem",display:"inline-block",fontSize:"0.875em",lineHeight:1,padding:"0.3125rem 0.375rem 0.125rem"})}

    pre code {
      background-color: transparent;
      line-height:      1.325em;
      margin:           0;
      padding:          0;
    }

    ${a.firstLastMarginZeroElements.map(e=>`${e}:first-child`).join(", ")} {
      margin-top: 0;
    }

    ${a.firstLastMarginZeroElements.map(e=>`${e}:last-child`).join(", ")} {
      margin-bottom: 0;
    }

    ${E(["a","a:active","a:visited"],{...a.links,fontWeight:"bold"})}

    ${E(["aside","small"],a.deemphasize)}

    img {
      height:    auto;
      max-width: 100%;
    }

    small {
      font-size: 0.9375em;
    }

    sup {
      line-height: 0;
    }

    sup a {
      text-decoration: none;
    }

    ${a.darkMode} {
      ${E(be,a[a.darkMode].emphasize)}

      ${E(["pre"],a[a.darkMode].pre)}

      ${E(["a","a:active","a:visited"],a[a.darkMode].links)}

      ${E(["aside","small"],a[a.darkMode].deemphasize)}
    }
  `)},Lt=`
  ${a.mainGridColumns[0]}
  ${a.mainGridColumns[1]}
  min(
    ${a.mainGridColumns[2][0]},
    ${a.mainGridColumns[2][1]}
  )
  ${a.mainGridColumns[3]}
  ${a.mainGridColumns[4]}
`,Gt=f({gridColumn:"1 / -1"}),ve=f({nested:{"& > *":{gridColumn:"3 / 3"},"& > details":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0},[`& > .${Gt}`]:{gridColumn:"1 / -1"}},display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Lt}),Ce=({as:e="div",...n})=>e==null?t("div",{className:ve,...n}):t(e,{className:ve,...n}),zt=1.6180334,me=zt*5,Ft=100/me,Xt=D("6rem",`${Ft}vw`,"10rem"),Dt=ee(Ce,{gridColumn:"1/-1",height:Xt,position:"relative",width:"100%",zIndex:-1}),Yt=ee("svg",{nested:{"&, & > *":{gridColumn:"1 / -1"}},display:"block",height:"inherit",position:"absolute",width:"100%"}),Ut=(e=I)=>a.topicColorClassNames[e],Ht=ee("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85}),Ee=(e,n)=>{const s=new RegExp(`.{${n}}`,"g");return e.match(s)??[]},Vt=e=>parseInt(e,16),qt=(e,n)=>e.slice().sort(n),Kt=([e,n],[s,i])=>{const o=s-e,r=i-n;return{angle:Math.atan2(r,o),length:Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}},Me=(e,n,s,i,o)=>{const r=i?Math.PI:0,c=Kt(n,s),l=c.angle+r,d=c.length*o,[h,A]=e,m=h+Math.cos(l)*d,w=A+Math.sin(l)*d;return[m,w]},Zt=(e,n,s,i=.1)=>{const o=s[n-1];if(o==null)throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());const r=s[n-2]??o,c=Me(o,r,e,!1,i),l=o,d=s[n+1]??e,h=Me(e,l,d,!0,i);return[c,h,e]},Oe=e=>e.reduce(([n,s],[i,o])=>[Math.min(n,o),Math.max(s,o)],[Infinity,-Infinity]),Wt=e=>e.join(","),Qt=e=>e.map(Wt).join(" "),$e=e=>e.length===0,we=(e,n)=>e.reduce((s,i,o,r)=>{if(o===0)return s;const c=Zt(i,o,r,n);return[...s,`C ${Qt(c)}`]},[]),Jt=e=>{const{className:n,hash:s,topics:i=[]}=e,o=i.length<2?[...i,g[I]]:i,c=Ee(s,4).map(u=>Ee(u,2).map(Vt));if(c.length<8)return null;const l=qt(c,([u],[S])=>u>S?1:-1);if($e(l))return null;const[d]=l[0],[h]=l[l.length-1],A=h-d,[m,w]=Oe(l),H=w-m,V=4*me,q=V/2,Ae=1.5,K=l.map(([u,S])=>[(u-d+q)/A*100*me,(S-m)/H*100]);if($e(l))return null;const[Ne]=K[K.length-1],L=Ne+V*4,[,xe]=Oe(K),p=xe*Ae,_e=[0,0,L,p],Pe=[0,p],Re=[L,p],je=K.reduce((u,S,v,C)=>{const[O]=C[v-1]??Pe,[N]=C[v+1]??Re,x=[[O,0],S,[N,0]];return[...u,x]},[]).map(u=>{const[S,[v,C],[O,N]]=u,[x,ie]=S,P=O-x,re=C/P,R=6/re;if(R<1){const Z=R*.2*x,j=x-Z,k=O+Z,F=j<0?Math.abs(j):k>L?L-k:0,X=j+F,ae=k+F,W=R*.3,Q=v+F,J=W*C,ce=C-J;return[[X,ie],[Q,ce],[ae,N]]}return u}),ne=p*.75,M=.15,ke=je.reduce((u,S,v,C)=>{const{length:O}=C,[N,x,ie]=S,[P,re]=N,[_,R]=x,[z,Z]=ie,j=z-P,k=j===0?0:Math.max(R/j*.05,.15),F=re+ne,X=[P,F],ae=Z+ne,W=[z,ae],Q=_-P,J=z-_,ce=J>Q?0:0-(_-P)*.05,Te=(O-v)*(.015*p),Ie=[_+ce,R-Te],Be=we([X,Ie,W],k),Le=J>Q?(z-_)*.05:0,Ge=(O-v)*(.015*p),ze=[_+Le,p-Ge],Fe=we([W,ze,X],k);return[...u,[`M ${X}`,...Be,...Fe,"Z"]]},[]),b=u=>`${u}-${s}`,G=p*(M/4),se=G*.75;return t(Dt,{className:n},t(Yt,{preserveAspectRatio:"none",viewBox:_e.join(" ")},t("defs",null,t("filter",{id:b("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:se,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:G,transform:`translate(0, ${p*(M*2)})`,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:b("blurOverlayClip")},t("rect",{x:"0",width:L,y:0+ne-M,height:p})),t("filter",{id:b("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:se}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:G,transform:`translate(0, ${p*(M*2)})`})),t("filter",{id:b("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:se}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:G,transform:`translate(0, ${p*(M*20)})`}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:G})),t("g",{id:b("blobs")},ke.map((u,S)=>{const v=u.join(" "),C=S%o.length,O=o[C],N=Ut(O);return t(Ht,{key:v,className:N,d:v,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${p*M})`,`scale(1, ${1-M*2})`].join(" "),filter:`url(#${b("blur")})`},t("use",{href:`#${b("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${b("blurOverlayClip")})`,filter:`url(#${b("blurOverlay")})`,transform:[`translate(0, ${p*M})`,`scale(1, ${1-M*2})`].join(" ")},t("use",{href:`#${b("blobs")}`,mask:"url(#softVerticalFade)"}))))},eo=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})))),to=()=>t(Xe,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png?v=ngjrq69M4N"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png?v=ngjrq69M4N"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png?v=ngjrq69M4N"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png?v=ngjrq69M4N"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest?v=ngjrq69M4N"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg?v=ngjrq69M4N",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico?v=ngjrq69M4N"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml?v=ngjrq69M4N"}),t("meta",{name:"theme-color",content:"#ffffff"})),oo=({children:e,...n})=>t(De,{...n},e,t(to,null)),no=({children:e})=>t(Se,null,t(Ce,null,e));export{Jt as BlogArt,eo as BlogArtDefs,I as DEFAULT_TOPIC,oo as Head,no as Main,Se as StylesProvider,g as Topic,D as clamp,Bt as setGlobalStyles,ee as styled,a as theme};
