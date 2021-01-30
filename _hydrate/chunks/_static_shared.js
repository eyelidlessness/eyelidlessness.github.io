import{h as t,Fragment as De}from"https://cdn.skypack.dev/preact@10.5.10";import{Head as Ye}from"microsite/head";import{processStyleWithPlugins as Ue,md5 as fe,isobject as He,isNestedSelector as Ve,normalizeNestedProperty as qe,isMediaQuery as Ke,generateCombinedMediaQuery as ge,isSupport as Ze,isUndefinedValue as We,cssifyDeclaration as Qe,generateCSSSelector as Je,cssifyObject as et,KEYFRAME_TYPE as pe,generateDeclarationReference as tt,RULE_TYPE as ot,createRenderer as nt,renderToString as st,RendererProvider as it,combineRules as rt,createComponent as at}from"./_vendor/index.js";import ct from"module";const lt=e=>e.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`),C=(e,n)=>[e.join(","),"{",Object.entries(n).reduce((s,[i,o])=>typeof o=="object"&&i.includes("&")?s:`${s}${lt(i)}:${o};`,""),"}",Object.entries(n).reduce((s,[i,o])=>typeof o=="object"&&i.includes("&")?`${s}${C(e.map(r=>i.replace(/&/g,r)),o)}`:s,"")].join(""),D=(...e)=>`clamp(${e.join(",")})`,ye="production",dt="production",mt=!0;var ht=Object.freeze({__proto__:null,MODE:ye,NODE_ENV:dt,SSR:mt});function Y(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function ut(e,n,s,i,o,r){const c=[];return o&&c.push(Y(o).slice(0,16)),i&&c.push(Y(i).slice(0,16)),s&&c.push(Y(s).slice(0,16)),c.push(Y(e).slice(0,16)),c.push(Y(n).slice(0,16)),c.push(r.slice(0,8)),c.join("_")}function ft(e,n,s=[""]){let i="";for(const r in e){const c=e[r];i=`${i}${r}{${et(c)}}`}let o="";for(let r=0;r<s.length;r++){const c=s[r];o=`${o}@${c}keyframes ${n}{${i}}`}return o}function gt(){return e=>(e.renderKeyframe=(n,s)=>{const i=n(s,e),o=Ue(e,i,pe,s),r=JSON.stringify(o);if(!e.cache.hasOwnProperty(r)){const c=fe(r),l=(e.selectorPrefix||"_")+c.slice(0,8),d=ft(o,l,e.keyframePrefixes),m={type:pe,keyframe:d,name:l};e.cache[r]=m,e._emitChange(m)}return e.cache[r].name},e._renderStyleToClassNames=({_className:n,...s},i="",o="",r="")=>{let c=n?` ${n}`:"";for(const l in s){const d=s[l];if(He(d))if(Ve(l))c+=e._renderStyleToClassNames(d,i+qe(l),o,r);else if(Ke(l)){const m=ge(o,l.slice(6).trim());c+=e._renderStyleToClassNames(d,i,m,r)}else if(Ze(l)){const m=ge(r,l.slice(9).trim());c+=e._renderStyleToClassNames(d,i,o,m)}else console.warn(`The object key "${l}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const m=tt(l,d,i,o,r);if(!e.cache.hasOwnProperty(m)){if(We(d)){e.cache[m]={className:""};continue}const h=Qe(l,d),A=fe(m),H=e.devMode?ut(l,d,i,o,r,A):(e.selectorPrefix||"_")+A.slice(0,8),V=Je(H,i),q={type:ot,className:H,selector:V,declaration:h,pseudo:i,media:o,support:r};e.cache[m]=q,e._emitChange(q)}const w=e.cache[m].className;w&&(c+=` ${w}`)}}return c},e)}import.meta.env=ht;const le=ct.createRequire(import.meta.url),{default:pt}=le("fela-plugin-embedded"),{default:yt}=le("fela-plugin-multiple-selectors"),{default:St}=le("fela-plugin-typescript"),Se=ye==="development",I=nt({devMode:Se,enhancers:[gt()],plugins:[pt(),yt(),St()]});!Se&&import.meta.url.endsWith("/.microsite/staging/src/lib/styles/styles.js")&&I.subscribe(async()=>{st(I)});const bt=e=>Array.isArray(e)?e:[e],be=({children:e})=>t(it,{renderer:I},...bt(e)),vt=e=>e,Et=e=>I.renderRule(vt,e),f=Object.assign(Et,{global:I.renderStatic.bind(I)}),de=Symbol("styles"),Ct=e=>typeof e=="function"&&Array.isArray(e[de]),ee=(e,n)=>{const s=Ct(e)?e[de]:[],o=[...s.map(h=>typeof h=="function"?h:()=>h),()=>n],r=rt(...o),c=[...s,n],l=typeof e=="string"?e:"div",d=at(r,l,Object.keys),m=h=>Array.isArray(h)?h:[h];return Object.assign(({children:h,...A})=>t(d,{...A,as:e},...m(h)),{[de]:c})},B=Symbol("DEFAULT_TOPIC"),g={[B]:B,ABLEISM:"Ableism",ARTS_CRAFTS:"Art, music & craft",LEMON:"My puppy!",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},te=2,me={minEm:1.0625,fluidVw:1.0625*te,maxEm:1.325},U="@media (prefers-color-scheme: dark)",Mt=["h1","h2","h3","h4","h5","h6"],Ot=["dd","dl","dt","li","ol","ul"],$t=[...Mt,...Ot,"p"],L=me.minEm/me.maxEm,$={h1:1.953,h2:1.563,h3:1.25},At={h1:{minEm:$.h1*L,fluidVw:$.h1*L*te,maxEm:$.h1},h2:{minEm:$.h2*L,fluidVw:$.h2*L*te,maxEm:$.h2},h3:{minEm:$.h3*L,fluidVw:$.h3*L*te,maxEm:$.h3}},wt=65,he=1.25,Nt=["0.7fr",`${he}rem`,[`${wt}ch`,`calc(100% - ${he*2}rem)`],`${he}rem`,"1.2fr"],xt=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],Pt=xt.join(", "),Rt=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],jt=Rt.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),y={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Tt=[[g[B],f({"&, &.hover-inherit-topic-color:hover":{color:y.DEFAULT_TOPIC.light},[U]:{"&, &.hover-inherit-topic-color:hover":{color:y.DEFAULT_TOPIC.dark}}})],[g.ABLEISM,f({"&, &.hover-inherit-topic-color:hover":{color:y.ABLEISM}})],[g.ARTS_CRAFTS,f({"&, &.hover-inherit-topic-color:hover":{color:y.ARTS_CRAFTS}})],[g.LEMON,f({"&, &.hover-inherit-topic-color:hover":{color:y.LEMON}})],[g.MENTAL_ILLNESS,f({"&, &.hover-inherit-topic-color:hover":{color:y.MENTAL_ILLNESS}})],[g.NEURODIVERGENCE,f({"&, &.hover-inherit-topic-color:hover":{color:y.NEURODIVERGENCE}})],[g.PHILOSOPHY,f({"&, &.hover-inherit-topic-color:hover":{color:y.PHILOSOPHY}})],[g.POLITICS,f({"&, &.hover-inherit-topic-color:hover":{color:y.POLITICS}})],[g.RACISM,f({"&, &.hover-inherit-topic-color:hover":{color:y.RACISM}})],[g.SEXISM,f({"&, &.hover-inherit-topic-color:hover":{color:y.SEXISM}})],[g.SUBSTANCE_ABUSE,f({"&, &.hover-inherit-topic-color:hover":{color:y.SUBSTANCE_ABUSE}})],[g.TECHNOLOGY,f({"&, &.hover-inherit-topic-color:hover":{color:y.TECHNOLOGY}})],[g.TRANSPHOBIA,f({"&, &.hover-inherit-topic-color:hover":{color:y.TRANSPHOBIA}})]],kt=Object.fromEntries(Tt),a={baseFontSizeRange:me,darkMode:U,document:{backgroundColor:"hsl(192deg, 100%, 99%)",[U]:{backgroundColor:"hsl(192deg, 100%, 3%)"}},code:{backgroundColor:"hsl(220deg, 10%, 94%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:Pt},deemphasize:{color:"hsl(212deg, 10%, 35%)"},emphasize:{color:"#000"},firstLastMarginZeroElements:$t,headingRanges:At,[U]:{code:{backgroundColor:"hsl(220deg, 10%, 20%)",color:"hsla(210deg, 12%, 100%, 95%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"hsl(240deg, 8%, 12%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"},mainGridColumns:Nt,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"hsl(240deg, 8%, 97%)"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:jt,[U]:{color:"hsla(210deg, 12%, 90%, 95%)"}},topicColorClassNames:kt},ve=["b","em","h1","h2","h3","i","strong"],oe=["h1","h2","h3","h4","h5","h6"],It=[...oe,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Bt=Array.from(new Set([...oe,...It,"div","fieldset","form","hgroup","hr","pre"])),Lt=()=>{f.global(`
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

    ${Bt.join(",")} {
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

    ${C(ve,a.emphasize)}

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

    ${C(["pre"],a.pre)}

    ${C(["code"],{...a.code,borderRadius:"0.1875rem",display:"inline-block",fontSize:"0.875em",lineHeight:1,padding:"0.3125rem 0.375rem 0.125rem"})}

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

    ${C(["a","a:active","a:visited"],{...a.links,fontWeight:"bold"})}

    ${C(["aside","small"],a.deemphasize)}

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
      ${C(ve,a[a.darkMode].emphasize)}

      ${C(["pre"],a[a.darkMode].pre)}

      ${C(["a","a:active","a:visited"],a[a.darkMode].links)}

      ${C(["aside","small"],a[a.darkMode].deemphasize)}
    }
  `)},_t=`
  ${a.mainGridColumns[0]}
  ${a.mainGridColumns[1]}
  min(
    ${a.mainGridColumns[2][0]},
    ${a.mainGridColumns[2][1]}
  )
  ${a.mainGridColumns[3]}
  ${a.mainGridColumns[4]}
`,Gt=f({gridColumn:"1 / -1"}),Ee=f({nested:{"& > *":{gridColumn:"3 / 3"},"& > details":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0},[`& > .${Gt}`]:{gridColumn:"1 / -1"}},display:"grid",gridColumn:"1 / -1",gridTemplateColumns:_t}),Ce=({as:e="div",...n})=>e==null?t("div",{className:Ee,...n}):t(e,{className:Ee,...n}),zt=1.6180334,ue=zt*5,Ft=100/ue,Xt=D("6rem",`${Ft}vw`,"10rem"),Dt=ee(Ce,{gridColumn:"1/-1",height:Xt,position:"relative",width:"100%",zIndex:-1}),Yt=ee("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Ut=(e=B)=>a.topicColorClassNames[e],Ht=ee("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85}),Me=(e,n)=>{const s=new RegExp(`.{${n}}`,"g");return e.match(s)??[]},Vt=e=>parseInt(e,16),qt=(e,n)=>e.slice().sort(n),Kt=([e,n],[s,i])=>{const o=s-e,r=i-n;return{angle:Math.atan2(r,o),length:Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}},Oe=(e,n,s,i,o)=>{const r=i?Math.PI:0,c=Kt(n,s),l=c.angle+r,d=c.length*o,[m,w]=e,h=m+Math.cos(l)*d,A=w+Math.sin(l)*d;return[h,A]},Zt=(e,n,s,i=.1)=>{const o=s[n-1];if(o==null)throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());const r=s[n-2]??o,c=Oe(o,r,e,!1,i),l=o,d=s[n+1]??e,m=Oe(e,l,d,!0,i);return[c,m,e]},$e=e=>e.reduce(([n,s],[i,o])=>[Math.min(n,o),Math.max(s,o)],[Infinity,-Infinity]),Wt=e=>e.join(","),Qt=e=>e.map(Wt).join(" "),Ae=e=>e.length===0,we=(e,n)=>e.reduce((s,i,o,r)=>{if(o===0)return s;const c=Zt(i,o,r,n);return[...s,`C ${Qt(c)}`]},[]),Jt=e=>{const{className:n,hash:s,topics:i=[]}=e,o=i.length<2?[...i,g[B]]:i,c=Me(s,4).map(u=>Me(u,2).map(Vt));if(c.length<8)return null;const l=qt(c,([u],[S])=>u>S?1:-1);if(Ae(l))return null;const[d]=l[0],[m]=l[l.length-1],w=m-d,[h,A]=$e(l),H=A-h,V=4*ue,q=V/2,Ne=1.5,K=l.map(([u,S])=>[(u-d+q)/w*100*ue,(S-h)/H*100]);if(Ae(l))return null;const[xe]=K[K.length-1],_=xe+V*4,[,Pe]=$e(K),p=Pe*Ne,Re=[0,0,_,p],je=[0,p],Te=[_,p],ke=K.reduce((u,S,v,E)=>{const[O]=E[v-1]??je,[N]=E[v+1]??Te,x=[[O,0],S,[N,0]];return[...u,x]},[]).map(u=>{const[S,[v,E],[O,N]]=u,[x,ie]=S,R=O-x,re=E/R,j=6/re;if(j<1){const Z=j*.2*x,T=x-Z,k=O+Z,F=T<0?Math.abs(T):k>_?_-k:0,X=T+F,ae=k+F,W=j*.3,Q=v+F,J=W*E,ce=E-J;return[[X,ie],[Q,ce],[ae,N]]}return u}),ne=p*.75,M=.15,Ie=ke.reduce((u,S,v,E)=>{const{length:O}=E,[N,x,ie]=S,[R,re]=N,[P,j]=x,[z,Z]=ie,T=z-R,k=T===0?0:Math.max(j/T*.05,.15),F=re+ne,X=[R,F],ae=Z+ne,W=[z,ae],Q=P-R,J=z-P,ce=J>Q?0:0-(P-R)*.05,Be=(O-v)*(.015*p),Le=[P+ce,j-Be],_e=we([X,Le,W],k),Ge=J>Q?(z-P)*.05:0,ze=(O-v)*(.015*p),Fe=[P+Ge,p-ze],Xe=we([W,Fe,X],k);return[...u,[`M ${X}`,..._e,...Xe,"Z"]]},[]),b=u=>`${u}-${s}`,G=p*(M/4),se=G*.75;return t(Dt,{className:n},t(Yt,{preserveAspectRatio:"none",viewBox:Re.join(" ")},t("defs",null,t("filter",{id:b("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:se,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:G,transform:`translate(0, ${p*(M*2)})`,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:b("blurOverlayClip")},t("rect",{x:"0",width:_,y:0+ne-M,height:p})),t("filter",{id:b("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:se}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:G,transform:`translate(0, ${p*(M*2)})`})),t("filter",{id:b("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:se}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:G,transform:`translate(0, ${p*(M*20)})`}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:G})),t("g",{id:b("blobs")},Ie.map((u,S)=>{const v=u.join(" "),E=S%o.length,O=o[E],N=Ut(O);return t(Ht,{key:v,className:N,d:v,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${p*M})`,`scale(1, ${1-M*2})`].join(" "),filter:`url(#${b("blur")})`},t("use",{href:`#${b("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${b("blurOverlayClip")})`,filter:`url(#${b("blurOverlay")})`,transform:[`translate(0, ${p*M})`,`scale(1, ${1-M*2})`].join(" ")},t("use",{href:`#${b("blobs")}`,mask:"url(#softVerticalFade)"}))))},eo=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})))),to=()=>t(De,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png?v=ngjrq69M4N"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png?v=ngjrq69M4N"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png?v=ngjrq69M4N"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png?v=ngjrq69M4N"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest?v=ngjrq69M4N"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg?v=ngjrq69M4N",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico?v=ngjrq69M4N"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml?v=ngjrq69M4N"}),t("meta",{name:"theme-color",content:"#ffffff"})),oo=({children:e,...n})=>t(Ye,{...n},e,t(to,null)),no=({children:e})=>t(be,null,t(Ce,null,e));export{Jt as BlogArt,eo as BlogArtDefs,B as DEFAULT_TOPIC,oo as Head,no as Main,be as StylesProvider,g as Topic,D as clamp,Lt as setGlobalStyles,ee as styled,a as theme};
