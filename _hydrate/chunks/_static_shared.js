import{h as o,Fragment as V,toChildArray as Re}from"https://cdn.skypack.dev/preact@10.5.10";import Dt from"@mdx-js/mdx";import{mdx as j,MDXProvider as _t}from"@mdx-js/preact";import{isobject as Ft,createComponent as zt,RendererProvider as Gt,emojiRegex as Xt,h as Ne,rehypeAccessibleEmojis as Yt,remarkSlug as Ut,remarkSmartypants_1 as Vt}from"./_vendor/index.js";import{transform as Wt}from"buble-jsx-only";import He from"dedent";import De from"module";import Kt from"remark-mdx";import qt from"remark-mdx-to-plain-text";import{createRenderer as Zt}from"fela";import{renderToString as Jt}from"fela-tools";import{processStyleWithPlugins as Qt,KEYFRAME_TYPE as _e,isNestedSelector as eo,normalizeNestedProperty as to,isMediaQuery as oo,generateCombinedMediaQuery as Fe,isSupport as no,generateDeclarationReference as io,isUndefinedValue as ro,generateCSSSelector as so,RULE_TYPE as ao}from"fela-utils";import{cssifyDeclaration as lo,cssifyObject as co}from"css-in-js-utils";import ze from"md5";import W from"path";import{loadTheme as Ge,getHighlighter as Xe}from"shiki";import{commonLangAliases as mo,commonLangIds as go,otherLangIds as po}from"shiki-languages";import{renderers as ho,runTwoSlash as uo}from"shiki-twoslash";import fo from"unist-util-visit";import Ye from"fs";import{Head as yo,seo as Ue}from"microsite/head";import bo from"child_process";import So from"crypto";const Co=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),v=(e,t)=>[e.join(","),"{",Object.entries(t).reduce((n,[r,s])=>typeof s=="object"&&(r==="nested"||r.includes("&"))?n:`${n}${Co(r)}:${s};`,""),"}",Object.entries(t).map(([n,r])=>{if(typeof r=="object"){if(n==="nested")return Object.entries(r).map(([s,a])=>{const l=e.map(d=>s.replace(/&/g,d));return v(l,a)}).join("");if(n.includes("&")){const s=e.map(a=>n.replace(/&/g,a));return v(s,r)}}return""},[]).join("")].join(""),K=(...e)=>`clamp(${e.join(",")})`,q=e=>e.replace(/\s+/g," ").trim(),Ve="production",vo="production",ko=!0;var ce=Object.freeze({__proto__:null,MODE:Ve,NODE_ENV:vo,SSR:ko});function ne(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function xo(e,t,n,r,s,a){const l=[];return s&&l.push(ne(s).slice(0,16)),r&&l.push(ne(r).slice(0,16)),n&&l.push(ne(n).slice(0,16)),l.push(ne(e).slice(0,16)),l.push(ne(t).slice(0,16)),l.push(a.slice(0,8)),l.join("_")}function To(e,t,n=[""]){let r="";for(const a in e){const l=e[a];r=`${r}${a}{${co(l)}}`}let s="";for(let a=0;a<n.length;a++){const l=n[a];s=`${s}@${l}keyframes ${t}{${r}}`}return s}function Eo(){return e=>(e.renderKeyframe=(t,n)=>{const r=t(n,e),s=Qt(e,r,_e,n),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const l=ze(a),d=(e.selectorPrefix||"_")+l.slice(0,8),m=To(s,d,e.keyframePrefixes),g={type:_e,keyframe:m,name:d};e.cache[a]=g,e._emitChange(g)}return e.cache[a].name},e._renderStyleToClassNames=({_className:t,...n},r="",s="",a="")=>{let l=t?` ${t}`:"";for(const d in n){const m=n[d];if(Ft(m))if(eo(d))l+=e._renderStyleToClassNames(m,r+to(d),s,a);else if(oo(d)){const g=Fe(s,d.slice(6).trim());l+=e._renderStyleToClassNames(m,r,g,a)}else if(no(d)){const g=Fe(a,d.slice(9).trim());l+=e._renderStyleToClassNames(m,r,s,g)}else console.warn(`The object key "${d}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const g=io(d,m,r,s,a);if(!e.cache.hasOwnProperty(g)){if(ro(m)){e.cache[g]={className:""};continue}const y=lo(d,m),h=ze(g),b=e.devMode?xo(d,m,r,s,a,h):(e.selectorPrefix||"_")+h.slice(0,8),p=so(b,r),x={type:ao,className:b,selector:p,declaration:y,pseudo:r,media:s,support:a};e.cache[g]=x,e._emitChange(x)}const f=e.cache[g].className;f&&(l+=` ${f}`)}}return l},e)}import.meta.env=ce;const de=De.createRequire(import.meta.url),{default:wo}=de("fela-identifier"),{default:$o}=de("fela-plugin-embedded"),{default:Mo}=de("fela-plugin-multiple-selectors"),{default:Oo}=de("fela-plugin-typescript"),We=Ve==="development",Ee=wo(),Z=Zt({devMode:We,enhancers:[Eo(),Ee],plugins:[$o(),Mo(),Oo()]});!We&&import.meta.url.endsWith("/.microsite/staging/src/lib/styles/styles.js")&&Z.subscribe(async()=>{Jt(Z)});const Ao=e=>Array.isArray(e)?e:[e],me=({children:e})=>o(Gt,{renderer:Z},...Ao(e)),Po=e=>e,Lo=e=>Z.renderRule(Po,e),C=Object.assign(Lo,{global:Z.renderStatic.bind(Z)}),c=(e,t)=>{const n=typeof t=="function"?t:()=>t;return zt(n,e,Object.keys)},ie=Symbol("DEFAULT_TOPIC"),u={[ie]:ie,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},jo=e=>typeof e=="string"||typeof e=="symbol",Ke=e=>jo(e)&&e in u,qe=e=>Ke(e)?u[e]:e,Ze=Object.entries(u).reduce((e,t)=>{const[n,r]=t;return typeof n=="string"?{...e,[r]:n}:e},{}),Io=e=>Ke(e)?e:Ze[e],Bo=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),Ro=Object.fromEntries(Object.entries(Ze).map(([e,t])=>typeof t=="string"?[e,Bo(t)]:null).filter(e=>e!=null)),No=e=>{const t=qe(e);if(typeof t=="string")return Ro[t]},ge=2,we={minEm:1.0625,fluidVw:1.0625*ge,maxEm:1.325},T="@media (prefers-color-scheme: dark)",Ho=["h1","h2","h3","h4","h5","h6"],Do=["dd","dl","dt","li","ol","ul"],_o=[...Ho,...Do,"p"],J=we.minEm/we.maxEm,I={h1:1.953,h2:1.563,h3:1.25},Fo={h1:{minEm:I.h1*J,fluidVw:I.h1*J*ge,maxEm:I.h1},h2:{minEm:I.h2*J,fluidVw:I.h2*J*ge,maxEm:I.h2},h3:{minEm:I.h3*J,fluidVw:I.h3*J*ge,maxEm:I.h3}},Je=75,pe=1.25,zo=["0.7fr",`${pe}rem`,[`${Je}ch`,`calc(100% - ${pe*2}rem)`],`${pe}rem`,"1.2fr"],$e=1,Go=["0.7fr",`${$e}rem`,[`${Je*1.1875}ch`,`calc(100% - ${$e*2}rem)`],`${$e}rem`,"1.2fr"],Xo=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],Qe=Xo.join(", "),Yo=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Uo=Yo.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),k={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Vo="hover-inherit-topic-color",Wo=[[u[ie],C({"&, &.hover-inherit-topic-color:hover":{color:k.DEFAULT_TOPIC.light},[T]:{"&, &.hover-inherit-topic-color:hover":{color:k.DEFAULT_TOPIC.dark}}})],[u.ABLEISM,C({"&, &.hover-inherit-topic-color:hover":{color:k.ABLEISM}})],[u.ART,C({"&, &.hover-inherit-topic-color:hover":{color:k.ARTS_CRAFTS}})],[u.LEMON,C({"&, &.hover-inherit-topic-color:hover":{color:k.LEMON}})],[u.MENTAL_ILLNESS,C({"&, &.hover-inherit-topic-color:hover":{color:k.MENTAL_ILLNESS}})],[u.NEURODIVERGENCE,C({"&, &.hover-inherit-topic-color:hover":{color:k.NEURODIVERGENCE}})],[u.PHILOSOPHY,C({"&, &.hover-inherit-topic-color:hover":{color:k.PHILOSOPHY}})],[u.POLITICS,C({"&, &.hover-inherit-topic-color:hover":{color:k.POLITICS}})],[u.RACISM,C({"&, &.hover-inherit-topic-color:hover":{color:k.RACISM}})],[u.SEXISM,C({"&, &.hover-inherit-topic-color:hover":{color:k.SEXISM}})],[u.SUBSTANCE_ABUSE,C({"&, &.hover-inherit-topic-color:hover":{color:k.SUBSTANCE_ABUSE}})],[u.TECHNOLOGY,C({"&, &.hover-inherit-topic-color:hover":{color:k.TECHNOLOGY}})],[u.TRANSPHOBIA,C({"&, &.hover-inherit-topic-color:hover":{color:k.TRANSPHOBIA}})]],Ko=Object.fromEntries(Wo),et=Ee(),i={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Vo,baseFontSizeRange:we,darkMode:T,aside:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},[T]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},blog:{listing:{descriptionIdentifier:et,description:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em",nested:{[T]:{color:"hsl(212deg, 10%, 75%)"}}},item:{outlineColor:"rgba(0, 0, 0, 0.1)",nested:{[T]:{outlineColor:"#000"}}},itemAlt:{backgroundColor:"hsl(192deg, 45%, 96%)",outlineColor:"rgba(0, 0, 0, 0.15)",nested:{[`& .${et}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[T]:{color:"hsl(212deg, 10%, 90%)"}}},[T]:{backgroundColor:"hsl(192deg, 45%, 3%)",outlineColor:"#000"}}},linkTextContent:{backgroundColor:"rgba(255, 255, 255, 0.75)",nested:{[T]:{backgroundColor:"rgba(0, 0, 0, 0.7)"}}},linkTitle:{color:"#000",nested:{":hover":{color:"#000"},[T]:{color:"#fff",":hover":{color:"#fff"}}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(220deg, 10%, 94%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:Qe},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:Qe,nested:{[T]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:_o,headingRanges:Fo,[T]:{code:{backgroundColor:"hsl(220deg, 10%, 20%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",outline:"none"},prose:{color:"hsl(210deg, 10%, 90%)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 95%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:zo,mainGridSidePaddingRem:pe,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",outline:"1px solid #eee"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:Uo},siteHeader:{columns:Go,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},topicColorClassNames:Ko,topicTagIdentifier:Ee(),topicTagInner:{backgroundImage:q(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[T]:{backgroundImage:q(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:q(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[T]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:q(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")}},tt=["b","em","h1","h2","h3","i","strong"],he=["h1","h2","h3","h4","h5","h6"],qo=[...he,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Zo=Array.from(new Set([...he,...qo,"div","fieldset","form","hgroup","hr","pre"])),Jo=q(`
  @font-face {
    font-display: fallback;
    font-family:  Minipax;
    font-style:   normal;
    font-weight:  normal;

    src:
      local('__Minipax'),
      url('/fonts/Minipax/regular.woff2') format('woff2'),
      url('/fonts/Minipax/regular.woff')  format('woff'),
      url('/fonts/Minipax/regular.ttf')   format('truetype');
  }

  html, body {
    margin:     0;
    max-width:  100%;
    overflow-x: hidden;
    padding:    0;
  }

  html {
    box-sizing:       border-box;
    font-size:        ${K(`${i.baseFontSizeRange.minEm}em`,`${i.baseFontSizeRange.fluidVw}vw`,`${i.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${v(["body"],{...i.document,...i.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${he.join(",")} {
    font-family:             Minipax, Georgia, serif;
    font-smooth:             always;
    font-weight:             normal;
    line-height:             0.9375;
    margin-bottom:           1rem;
    margin-top:              1rem;
    padding-left:            1rem;
    text-indent:             -1rem;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`),Qo=()=>{C.global(q(`
      ${Zo.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${he.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${v(tt,i.emphasize)}

      h1 {
        font-size: ${K(`${i.headingRanges.h1.minEm}em`,`${i.headingRanges.h1.fluidVw}vw`,`${i.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${K(`${i.headingRanges.h2.minEm}em`,`${i.headingRanges.h2.fluidVw}vw`,`${i.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${K(`${i.headingRanges.h3.minEm}em`,`${i.headingRanges.h3.fluidVw}vw`,`${i.headingRanges.h3.maxEm}em`)};
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

      ${v(["pre"],i.pre)}

      ${v(["code"],{...i.code,borderRadius:"0.1875rem",display:"inline-block",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.25rem 0.375rem 0",wordWrap:"break-word",nested:{"&:first-line":{verticalAlign:"-0.5em"}}})}

      pre code {
        background-color: transparent;
        line-height:      1.325em;
        margin:           0;
        padding:          0;
      }

      ${i.firstLastMarginZeroElements.map(e=>`${e}:first-child`).join(", ")} {
        margin-top: 0;
      }

      ${i.firstLastMarginZeroElements.map(e=>`${e}:last-child`).join(", ")} {
        margin-bottom: 0;
      }

      ${v(["a"],{...i.links,fontWeight:"bolder"})}

      ${v(["aside","small"],i.deemphasize)}

      img {
        height:    auto;
        max-width: 100%;
      }

      q {
        font-style: italic;
      }

      q::before {
        content: "\u201C";
      }

      q::after {
        content: "\u201D";
      }

      sup {
        line-height: 0;
      }

      sup a {
        text-decoration: none;
      }

      ${i.darkMode} {
        ${v(["body"],{...i[i.darkMode].document,...i[i.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${v(tt,i[i.darkMode].emphasize)}
        ${v(["pre"],i[i.darkMode].pre)}
        ${v(["code"],i[i.darkMode].code)}
        ${v(["a"],i[i.darkMode].links)}
        ${v(["aside","small"],i[i.darkMode].deemphasize)}
      }
    `))},en=`
  ${i.mainGridColumns[0]}
  ${i.mainGridColumns[1]}
  min(
    ${i.mainGridColumns[2][0]},
    ${i.mainGridColumns[2][1]}
  )
  ${i.mainGridColumns[3]}
  ${i.mainGridColumns[4]}
`.replace(/\s+/g," "),ot={gridColumn:"1 / -1"},nt=C(ot),B=c("div",{nested:{[`& > .${nt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:en,...ot}),tn=c(B,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),it=c("div",{alignContent:"flex-start",alignItems:"flex-start",display:"flex",gridColumn:"2 / 5"}),on=c("div",{flexGrow:0,fontSize:"9em",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),nn=c("div",{flexGrow:1,padding:"1rem 0.75rem"}),Me="div",rn={ContentContainer:Me,InnerContainer:it,OuterContainer:Me,SymbolContainer:Me},sn=e=>{const{children:t,ContentContainer:n,InnerContainer:r,OuterContainer:s,outerContainerProps:a,symbol:l,SymbolContainer:d}={...rn,...e};return o(tn,{as:s,...a},o(it,{as:r},o(on,{as:d,role:"presentation"},l),o(nn,{as:n},t)))},an=c("pre",{fontSize:"1rem"}),ln=c("div",{gridColumn:"2 / 6"}),cn=c(B,{...i.pre,nested:{[i.darkMode]:{...i[i.darkMode].pre},"& code":{backgroundColor:"transparent"},"& pre":{backgroundColor:"transparent",maxWidth:"100%",margin:0,overflow:"auto",outline:"none",padding:["1rem","0"].join(" ")}}}),dn=c("div",{...i.codeBlock.symbol,fontSize:K("3.2em","10vw","4.5em"),marginTop:"-0.325em",textIndent:"-0.25em"}),mn=({children:e})=>o(sn,{ContentContainer:an,InnerContainer:ln,OuterContainer:cn,symbol:"{",SymbolContainer:dn},e),gn=e=>typeof e=="object"&&e!=null,pn=c("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),hn=(e,t)=>gn(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof t=="string"&&Xt().test(t),un=({["aria-label"]:e,children:t,role:n})=>o(pn,{"aria-label":e,role:n},t),rt=W.resolve(process.cwd(),"./syntax-themes"),[fn,yn]=await Promise.all([Ge(W.resolve(rt,"./yi-dark.json")),Ge(W.resolve(rt,"./yi-light.json"))]),bn={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},Sn={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},Cn=e=>e.trim().split(/\b\W*\b/).reduce((t,n)=>({...t,...Sn[n]}),{}),st=e=>Object.entries(e).reduce((t,[n,r])=>{const s=bn[n];if(r==null||typeof s!="string")return t;const a=s==="fontStyle"?Cn(r):{[s]:r};return{...t,...a}},{}),[vn,at]=await Promise.all([Xe({theme:fn}),Xe({theme:yn})]),kn=new Set([...mo,...go,...po]),xn=new Set(["ts","tsx","typescript"]),Tn=(e,t)=>{const[n,r]=[at,vn].map(s=>s.codeToThemedTokens(e,t).reduce((l,d)=>d.reduce((m,g)=>({...m,...g.explanation?.reduce((f,y)=>({...f,...y.scopes.reduce((h,{themeMatches:b})=>({...h,...b.reduce((p,{name:x,scope:A,settings:N})=>({...p,byName:x==null?p.byName:{...p.byName,[x]:N},byScope:Array.isArray(A)?{...p.byScope,...A.reduce((R,H)=>({...R,[H]:N}),p.byScope)}:typeof A=="string"?{...p.byScope,[A]:N}:p.byScope}),{...h,byName:{...h.byName},byScope:{...h.byScope}})}),f)}),m)}),l),{byName:{},byScope:{}}));return{dark:r,light:n}},En=(e,t)=>{const{content:n,explanation:r}=e,{dark:s,light:a}=t,l=r?.reduce((m,g)=>({...m,...g.scopes.reduce((f,{themeMatches:y})=>({...f,...y.reduce((h,{name:b,scope:p})=>{const x=st({...b==null?{}:a.byName[b],...Array.isArray(p)?p.reduce((H,P)=>({...H,...a.byScope[P]}),{}):typeof p=="string"?a.byScope[p]:{}}),A=st({...b==null?{}:s.byName[b],...Array.isArray(p)?p.reduce((H,P)=>({...H,...s.byScope[P]}),{}):typeof p=="string"?s.byScope[p]:{}}),N={...h,...x},R=Object.keys(A).length>0?{nested:{[i.darkMode]:A}}:{};return{...N,...R}},{})}),{})}),{})??{},d=Object.keys(l).length>0?c("span",l):"span";return n.replace(/\s+/,"")===""||d==null?o("span",{},n):o(d,{},n)},wn=(e,t)=>Ne(o(me,{},o("pre",{},o("code",{},...e.reduce((n,r,s)=>{const a=r.map(d=>En(d,t)),l=s===0?"":`
`;return[...n,l,...a]},[]))))),$n=(e,t={})=>n=>{const{lang:r,value:s,meta:a}=n;!!process?.env?.TWOSLASH_DISABLE||Mn(t,n);const d=String(r)==="json5"?"json":r;let m;const g=s.replace(/^\n+|\n+$/g,"");if(!kn.has(d))m=ho.plainTextRenderer(g,{});else{const f=e.codeToThemedTokens(g,d),y=Tn(g,d);m=wn(f,y)}xn.has(d)&&!a?.includes("ignore"),n.children=[],n.type="html",n.value=m},Mn=(e,t)=>{if(t.meta?.includes("twoslash")){const n=uo(t.value,t.lang,e);t.value=n.code,t.lang=n.extension,t.twoslash=n}},On=()=>t=>{fo(t,"code",$n(at))};import.meta.env=ce;const An=De.createRequire(import.meta.url),Pn=An("remark"),Ln=({className:e,children:t,...n})=>e==="language-id"?null:e==="code-container"?j(V,n,...Re(t)):j("div",{className:e,...n},...Re(t)),jn=({children:e,...t})=>hn(t,e)?j(un,t,e):j("span",t,e),Oe={components:{div:Ln,pre:mn,span:jn},rehypePlugins:[Yt],remarkPlugins:[On,Ut,Vt]},In=e=>{const{children:t=j(()=>null,{}),components:n={},rehypePlugins:r=[],remarkPlugins:s=[]}=e,a={...Oe.components,...n},l={mdx:j,MDXProvider:_t,components:a,props:{}},d=typeof t=="string"?He(t).trim():t,m=[...Oe.rehypePlugins,...r],g=[...Oe.remarkPlugins,...s],f=Dt.sync(d,{rehypePlugins:m,remarkPlugins:g,skipExport:!0}).trim(),{code:y}=Wt(f,{objectAssign:"Object.assign"}),h=Object.keys(l),b=Object.values(l),p=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...h,`${y}

${p}`)(j,...b)},lt=(e,t)=>{const[n,...r]=e;return t.reduce((s,a,l)=>[...s,a,r[l]],[n]).join("")},Bn=(e,...t)=>{const n=lt(e,t);return j(me,{},j(In,{},n))},Rn=(e,...t)=>{const n=He(lt(e,t)).trim();return Pn().use(Kt).use(qt).processSync(n).contents.trim()},Nn=1.6180334,Ae=Nn*5,Hn=100/Ae,Pe=K("6rem",`${Hn}vw`,"10rem"),Dn=c(B,{height:Pe,position:"relative",width:"100%"}),_n=c("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Fn=(e=ie)=>i.topicColorClassNames[e],zn=c("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85}),ct=(e,t)=>{const n=new RegExp(`.{${t}}`,"g");return e.match(n)??[]},Gn=e=>parseInt(e,16),Xn=(e,t)=>e.slice().sort(t),Yn=([e,t],[n,r])=>{const s=n-e,a=r-t;return{angle:Math.atan2(a,s),length:Math.sqrt(Math.pow(s,2)+Math.pow(a,2))}},dt=(e,t,n,r,s)=>{const a=r?Math.PI:0,l=Yn(t,n),d=l.angle+a,m=l.length*s,[g,f]=e,y=g+Math.cos(d)*m,h=f+Math.sin(d)*m;return[y,h]},Un=(e,t,n,r=.1)=>{const s=n[t-1];if(s==null)throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());const a=n[t-2]??s,l=dt(s,a,e,!1,r),d=s,m=n[t+1]??e,g=dt(e,d,m,!0,r);return[l,g,e]},mt=e=>e.reduce(([t,n],[r,s])=>[Math.min(t,s),Math.max(n,s)],[Infinity,-Infinity]),Vn=e=>e.join(","),Wn=e=>e.map(Vn).join(" "),gt=e=>e.length===0,pt=(e,t)=>e.reduce((n,r,s,a)=>{if(s===0)return n;const l=Un(r,s,a,t);return[...n,`C ${Wn(l)}`]},[]),Le=e=>{const{className:t,hash:n,title:r,topics:s=[]}=e,a=s.length<2?[...s,u[ie]]:s,d=ct(n,4).map(S=>ct(S,2).map(Gn));if(d.length<8)return null;const m=Xn(d,([S],[w])=>S>w?1:-1);if(gt(m))return null;const[g]=m[0],[f]=m[m.length-1],y=f-g,[h,b]=mt(m),p=b-h,x=4*Ae,A=x/2,N=1.5,R=m.map(([S,w])=>[(S-g+A)/y*100*Ae,(w-h)/p*100]);if(gt(m))return null;const[H]=R[R.length-1],P=H+x*4,[,wt]=mt(R),E=wt*N,$t=[0,0,P,E],Mt=[0,E],Ot=[P,E],At=R.reduce((S,w,M,O)=>{const[L]=O[M-1]??Mt,[D]=O[M+1]??Ot,_=[[L,0],w,[D,0]];return[...S,_]},[]).map(S=>{const[w,[M,O],[L,D]]=S,[_,ve]=w,G=L-_,ke=O/G,X=6/ke;if(X<1){const re=X*.2*_,Y=_-re,U=L+re,te=Y<0?Math.abs(Y):U>P?P-U:0,oe=Y+te,xe=U+te,se=X*.3,ae=M+te,le=se*O,Te=O-le;return[[oe,ve],[ae,Te],[xe,D]]}return S}),Se=E*.75,z=.15,Pt=At.reduce((S,w,M,O)=>{const{length:L}=O,[D,_,ve]=w,[G,ke]=D,[F,X]=_,[ee,re]=ve,Y=ee-G,U=Y===0?0:Math.max(X/Y*.05,.15),te=ke+Se,oe=[G,te],xe=re+Se,se=[ee,xe],ae=F-G,le=ee-F,Te=le>ae?0:0-(F-G)*.05,Lt=(L-M)*(.015*E),jt=[F+Te,X-Lt],It=pt([oe,jt,se],U),Bt=le>ae?(ee-F)*.05:0,Rt=(L-M)*(.015*E),Nt=[F+Bt,E-Rt],Ht=pt([se,Nt,oe],U);return[...S,[`M ${oe}`,...It,...Ht,"Z"]]},[]),$=S=>`${S}-${n}`,Q=E*(z/4),Ce=Q*.75;return o(Dn,{className:t},o(_n,{className:nt,preserveAspectRatio:"none",viewBox:$t.join(" ")},o("title",null,"Generated art for the page or post titled",o("i",null,r),", with the content or commit hash ",n," ",a.length>0?[", and the topics: ",a.map(String).join(", ")]:null),o("defs",null,o("filter",{id:$("blur")},o("feOffset",{in:"SourceGraphic",dx:"0",dy:Ce,result:"glowOffsetOut"}),o("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:Q,result:"glowBlurOut"}),o("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),o("clipPath",{id:$("blurOverlayClip")},o("rect",{x:"0",width:P,y:0+Se-z,height:E})),o("filter",{id:$("blurOverlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:Ce}),o("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:Q})),o("filter",{id:$("blurUnderlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:Ce}),o("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:Q}),o("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),o("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),o("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),o("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:Q})),o("g",{id:$("blobs")},Pt.map((S,w)=>{const M=S.join(" "),O=w%a.length,L=a[O],D=Fn(L);return o(zn,{key:M,className:D,d:M,mask:"url(#softVerticalFade)"})}))),o("g",{transform:[`translate(0, ${E*z})`,`scale(1, ${1-z*2})`].join(" "),filter:`url(#${$("blur")})`},o("use",{href:`#${$("blobs")}`,mask:"url(#horizontalMidFade)"})),o("g",{"clip-path":`url(#${$("blurOverlayClip")})`,filter:`url(#${$("blurOverlay")})`,transform:[`translate(0, ${E*z})`,`scale(1, ${1-z*2})`].join(" ")},o("use",{href:`#${$("blobs")}`,mask:"url(#softVerticalFade)"}))))},ht=()=>o("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},o("defs",null,o("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),o("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),o("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),o("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})))),Kn=[,"January","February","March","April","May","June","July","August","September","October","November","December"],qn=c("time",{nested:{[i.darkMode]:{...i[i.darkMode].deemphasize}},...i.deemphasize}),ut=({date:e,...t})=>o(qn,{...t,datetime:e.toISOString()},e.getDate()," ",Kn[e.getMonth()+1]," ",e.getFullYear()),ft=c("span",{...i.topicTagOuter,backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"}),Zn=c(ft,{...i.topicTagLink(i.topicTagIdentifier.className)}),Jn=c("span",i.topicTagIdentifier()),Qn=c(Jn,{...i.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),yt=({className:e,link:t=!0,topic:n})=>{const r=No(n),s=qe(n);if(r==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=t?Zn:ft,l=t?{as:"a",href:`/blog/topics/${r}/`}:{as:"span"};return o(a,{className:[e,i.topicColorClassNames[s]??"",i.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...l},o(Qn,null,s))},ei=c("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),ti=c("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),bt=({className:e,link:t=!0,topics:n})=>o(ei,{className:e},n.map(r=>typeof r=="string"?o(ti,{key:Io(r)},o(yt,{link:t,topic:r})):null)),oi=e=>e.reduce((t,n)=>{const r=n.stat.created.getFullYear(),s=t[r]??[];return{...t,[r]:[...s,n]}},{}),ni=c(B,{marginTop:"1.5rem",paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),St=c(B,{...i.blog.listing.item,minHeight:Pe,outlineStyle:"solid",outlineWidth:"1px",padding:"1rem 0 1.5rem",position:"relative",nested:{...i.blog.listing.item.nested,"&:last-child":{marginBottom:0}}}),ii=c(St,{...i.blog.listing.itemAlt}),ri=c(Le,{left:0,position:"absolute",top:"1rem"}),si=c(B,{fontWeight:"normal",gridColumn:"2 / -2",paddingTop:`calc(${Pe} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),ai=C({...i.blog.listing.linkTextContent,backdropFilter:"blur(1rem)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(1rem)"}),li=c("h2",{...i.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),ci=c(ut,{padding:"0 0.5rem 0.125rem 0"}),di=c(bt,{gridColumn:"3 / 3"}),mi=c("div",{...i.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),gi=c("a",{fontSize:"0.875em"});var ue;(function(e){e.DATE="date"})(ue||(ue={}));var fe;(function(e){e.ASC="asc",e.DESC="desc"})(fe||(fe={}));const pi=({order:e=fe.DESC,posts:t,sort:n=ue.DATE})=>{const r=t.slice().sort((a,l)=>e===fe.DESC&&n===ue.DATE?a.stat.created>l.stat.created?-1:1:0),s=oi(r);return o(V,null,Object.entries(s).map(([a,l])=>o(V,{key:a},o(ni,null,l.map((d,m)=>{const{description:g,hash:f,path:y,stat:{created:h},title:b,topics:p}=d,x=m%2==1?ii:St;return o(x,{key:y},o(si,{as:"a",href:y},o(ri,{hash:f,padded:!0,title:b,topics:p}),o(li,{className:ai},b),o(ci,{date:h})),o(di,{link:!1,topics:p}),o(mi,{className:i.blog.listing.descriptionIdentifier},g),o("p",null,o(gi,{href:y},"Read more\u2026")))})))))},hi=()=>o(V,null,o("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),o("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),o("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),o("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),o("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),o("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),o("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),o("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),o("meta",{name:"application-name",content:"Eyelidlessness"}),o("meta",{name:"msapplication-TileColor",content:"#555555"}),o("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),o("meta",{name:"theme-color",content:"#ffffff"}));Qo();const Ct=({children:e,...t})=>o(yo,{...t},o("style",{dangerouslySetInnerHTML:{__html:Jo}}),e,o(hi,null)),je={height:60,width:338},ui=c("svg",{display:"inline-block",maxWidth:"100%",width:`${je.width}px`}),fi=c("use",{nested:{[i.darkMode]:{...i[i.darkMode].siteLogo}},...i.siteLogo,fill:"currentcolor"}),yi=`0 0 ${je.width} ${je.height}`,bi=()=>o(ui,{viewBox:yi},o(fi,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),o("title",null,"Eyelidlessness")),Si=`
  ${i.siteHeader.columns[0]}
  ${i.siteHeader.columns[1]}
  min(
    ${i.siteHeader.columns[2][0]},
    ${i.siteHeader.columns[2][1]}
  )
  ${i.siteHeader.columns[3]}
  ${i.siteHeader.columns[4]}
`.replace(/\s+/g," "),Ci=c("div",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Si,padding:"1rem 0"}),Ie="@media (min-width: 0)",vi=c("nav",{nested:{[Ie]:{flexFlow:"row",justifyContent:"space-between"}},alignItems:"center",display:"flex",flexFlow:"column",justifyContent:"center"}),ki=c("div",{display:"grid",gridColumn:3,justifyContent:"stretch",textAlign:"center"}),xi=c("div",{nested:{[Ie]:{marginLeft:0,marginRight:"1em"}},margin:"0 auto"}),Ti=c("a",{nested:{[i.darkMode]:{color:"hsl(336deg, 80%, 62%)"}},textDecoration:"none"}),mr=c("ul",{nested:{[Ie]:{marginLeft:"1em",marginRight:0,marginTop:0}},alignItems:"baseline",display:"flex",justifyContent:"center",listStyle:"none",margin:"0.75rem auto 0",padding:0}),gr=c("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"inline-block",listStyle:"none",margin:"0 0 0 2rem",padding:0}),pr=c("a",{...i.siteHeader.pageLinks,fontSize:"1.125em",fontWeight:300,lineHeight:1,textDecoration:"none",nested:{[i.darkMode]:{...i[i.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),Ei=()=>o(Ci,{as:"header"},o(ki,null,o(vi,null,o(xi,null,o(Ti,{href:"/"},o(bi,null))),!1))),wi=c(B,{paddingBottom:"4em"}),vt=({as:e="main",children:t})=>o(me,null,o(Ei,null),o(wi,{as:e},t)),Be=process.cwd(),kt=e=>e.startsWith("/")?W.resolve(Be,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):W.extname(e)==""?W.resolve(Be,"./src/pages/",`${e}.tsx`):e;var ye;(function(e){e.ALL="",e.FIRST="--diff-filter=A"})(ye||(ye={}));var be;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(be||(be={}));const $i="origin",Mi="main",xt=e=>{const{branch:t=Mi,filter:n=ye.FIRST,format:r,path:s=Be,remote:a=$i}=e,{error:l,stdout:d}=bo.spawnSync("git",["log",n,`--branches=${t}`,`--format=${r}`,`--remotes=${a}`,"--",s]);if(l)throw l;const m=d.toString().trim();return m===""?null:n===ye.FIRST?m:m.split(`
`)},Tt=e=>{const t=kt(e),n=xt({format:be.ISO_DATE,path:t}),r=new Date(n??"");return isNaN(r.getTime())?null:r},Oi=e=>{const t=Ye.readFileSync(e).toString();let n=So.createHash("sha1");return n.update(t),n.digest("hex")},Et=e=>{const t=kt(e);return xt({format:be.HASH,path:t})??Oi(t)},Ai=c(B,{...i.aside,nested:{...i.aside.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Pi=c("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Li=c("div",{fontSize:"0.889em"}),ji=({as:e="section",title:t,...n})=>o(Ai,{as:e,itemprop:"description"},t?o(Pi,null,t):null,o(Li,{...n}));import.meta.env=ce;const Ii=c("h1",{marginBottom:"0.25rem"}),Bi=c(B,{marginBottom:"1rem"}),Ri=({children:e,description:t,descriptionRaw:n,hash:r,stat:{created:s},title:a,topics:l})=>o(V,null,o(Ct,null,o(Ue.title,null,a," | Eyelidlessness"),o(Ue.description,null,n)),o(vt,{as:"article"},o(Bi,null,o(ht,null),o(Le,{hash:r,title:a,topics:l}),o(Ii,null,a),o(ut,{date:s,itemprop:"datePublished"}),o(bt,{link:!1,topics:l})),o(ji,null,t),e)),Ni=e=>{const{description:t,path:n,title:r,topics:s}=e,a=Rn`${Ne(o(V,null,t))}`,l=Et(n),d={created:Tt(n)??Ye.statSync(import.meta.url.replace(/^file:(\/\/)?/,"")).ctime};return{description:t,descriptionRaw:a,hash:l,path:n,stat:d,title:r,topics:s}};export{Le as BlogArt,ht as BlogArtDefs,pi as BlogListing,Ri as BlogPost,Ct as Head,vt as Main,me as StylesProvider,u as Topic,yt as TopicTag,ce as __SNOWPACK_ENV__,Ni as getBlogPostStaticProps,Tt as getInitialCommitDate,Et as getInitialFileHash,Bn as mdx,c as styled};
