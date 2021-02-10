import{h as n,Fragment as R,toChildArray as ke}from"https://cdn.skypack.dev/preact@10.5.10";import vt from"@mdx-js/mdx";import{mdx as M,MDXProvider as kt}from"@mdx-js/preact";import{isobject as Et,createComponent as wt,RendererProvider as Ot,emojiRegex as $t,h as Ee,rehypeAccessibleEmojis as At,remarkSlug as Mt,remarkSmartypants_1 as It}from"./_vendor/index.js";import{transform as Pt}from"buble-jsx-only";import we from"dedent";import Oe from"module";import Lt from"remark-mdx";import jt from"remark-mdx-to-plain-text";import{createRenderer as Bt}from"fela";import{renderToString as Rt}from"fela-tools";import{processStyleWithPlugins as Nt,KEYFRAME_TYPE as $e,isNestedSelector as Ht,normalizeNestedProperty as _t,isMediaQuery as Dt,generateCombinedMediaQuery as Ae,isSupport as Ft,generateDeclarationReference as zt,isUndefinedValue as Gt,generateCSSSelector as Xt,RULE_TYPE as Yt}from"fela-utils";import{cssifyDeclaration as Ut,cssifyObject as Vt}from"css-in-js-utils";import Me from"md5";import N from"path";import{loadTheme as Ie,getHighlighter as Pe}from"shiki";import{commonLangAliases as Wt,commonLangIds as qt,otherLangIds as Kt}from"shiki-languages";import{renderers as Zt,runTwoSlash as Jt}from"shiki-twoslash";import Qt from"unist-util-visit";import Le from"fs";import{Head as eo,seo as je}from"microsite/head";import to from"child_process";import oo from"crypto";const no=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),w=(e,t)=>[e.join(","),"{",Object.entries(t).reduce((o,[s,i])=>typeof i=="object"&&(s==="nested"||s.includes("&"))?o:`${o}${no(s)}:${i};`,""),"}",Object.entries(t).map(([o,s])=>{if(typeof s=="object"){if(o==="nested")return Object.entries(s).map(([i,r])=>{const a=e.map(c=>i.replace(/&/g,c));return w(a,r)}).join("");if(o.includes("&")){const i=e.map(r=>o.replace(/&/g,r));return w(i,s)}}return""},[]).join("")].join(""),H=(...e)=>`clamp(${e.join(",")})`,_=e=>e.replace(/\s+/g," ").trim(),Be="production",so="production",ro=!0;var W=Object.freeze({__proto__:null,MODE:Be,NODE_ENV:so,SSR:ro});function X(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function io(e,t,o,s,i,r){const a=[];return i&&a.push(X(i).slice(0,16)),s&&a.push(X(s).slice(0,16)),o&&a.push(X(o).slice(0,16)),a.push(X(e).slice(0,16)),a.push(X(t).slice(0,16)),a.push(r.slice(0,8)),a.join("_")}function ao(e,t,o=[""]){let s="";for(const r in e){const a=e[r];s=`${s}${r}{${Vt(a)}}`}let i="";for(let r=0;r<o.length;r++){const a=o[r];i=`${i}@${a}keyframes ${t}{${s}}`}return i}function lo(){return e=>(e.renderKeyframe=(t,o)=>{const s=t(o,e),i=Nt(e,s,$e,o),r=JSON.stringify(i);if(!e.cache.hasOwnProperty(r)){const a=Me(r),c=(e.selectorPrefix||"_")+a.slice(0,8),g=ao(i,c,e.keyframePrefixes),d={type:$e,keyframe:g,name:c};e.cache[r]=d,e._emitChange(d)}return e.cache[r].name},e._renderStyleToClassNames=({_className:t,...o},s="",i="",r="")=>{let a=t?` ${t}`:"";for(const c in o){const g=o[c];if(Et(g))if(Ht(c))a+=e._renderStyleToClassNames(g,s+_t(c),i,r);else if(Dt(c)){const d=Ae(i,c.slice(6).trim());a+=e._renderStyleToClassNames(g,s,d,r)}else if(Ft(c)){const d=Ae(r,c.slice(9).trim());a+=e._renderStyleToClassNames(g,s,i,d)}else console.warn(`The object key "${c}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const d=zt(c,g,s,i,r);if(!e.cache.hasOwnProperty(d)){if(Gt(g)){e.cache[d]={className:""};continue}const u=Ut(c,g),f=Me(d),y=e.devMode?io(c,g,s,i,r,f):(e.selectorPrefix||"_")+f.slice(0,8),h=Xt(y,s),b={type:Yt,className:y,selector:h,declaration:u,pseudo:s,media:i,support:r};e.cache[d]=b,e._emitChange(b)}const p=e.cache[d].className;p&&(a+=` ${p}`)}}return a},e)}import.meta.env=W;const q=Oe.createRequire(import.meta.url),{default:co}=q("fela-identifier"),{default:mo}=q("fela-plugin-embedded"),{default:go}=q("fela-plugin-multiple-selectors"),{default:ho}=q("fela-plugin-typescript"),Re=Be==="development",le=co(),D=Bt({devMode:Re,enhancers:[lo(),le],plugins:[mo(),go(),ho()]});!Re&&import.meta.url.endsWith("/.microsite/staging/src/lib/styles/styles.js")&&D.subscribe(async()=>{Rt(D)});const po=e=>Array.isArray(e)?e:[e],K=({children:e})=>n(Ot,{renderer:D},...po(e)),uo=e=>e,fo=e=>D.renderRule(uo,e),k=Object.assign(fo,{global:D.renderStatic.bind(D)}),m=(e,t)=>{const o=typeof t=="function"?t:()=>t;return wt(o,e,Object.keys)},Y=Symbol("DEFAULT_TOPIC"),T={[Y]:Y,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},yo=e=>typeof e=="string"||typeof e=="symbol",Ne=e=>yo(e)&&e in T,He=e=>Ne(e)?T[e]:e,_e=Object.entries(T).reduce((e,t)=>{const[o,s]=t;return typeof o=="string"?{...e,[s]:o}:e},{}),bo=e=>Ne(e)?e:_e[e],So=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),xo=Object.fromEntries(Object.entries(_e).map(([e,t])=>typeof t=="string"?[e,So(t)]:null).filter(e=>e!=null)),Co=e=>{const t=He(e);if(typeof t=="string")return xo[t]},Z=2,ce={minEm:1.0625,fluidVw:1.0625*Z,maxEm:1.325},A="@media (prefers-color-scheme: dark)",To=["h1","h2","h3","h4","h5","h6"],vo=["dd","dl","dt","li","ol","ul"],ko=[...To,...vo,"p"],F=ce.minEm/ce.maxEm,I={h1:1.953,h2:1.563,h3:1.25},Eo={h1:{minEm:I.h1*F,fluidVw:I.h1*F*Z,maxEm:I.h1},h2:{minEm:I.h2*F,fluidVw:I.h2*F*Z,maxEm:I.h2},h3:{minEm:I.h3*F,fluidVw:I.h3*F*Z,maxEm:I.h3}},De=75,J=1.25,wo=["0.7fr",`${J}rem`,[`${De}ch`,`calc(100% - ${J*2}rem)`],`${J}rem`,"1.2fr"],de=1,Oo=["0.7fr",`${de}rem`,[`${De*1.1875}ch`,`calc(100% - ${de*2}rem)`],`${de}rem`,"1.2fr"],$o=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],Fe=$o.join(", "),Ao=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Mo=Ao.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),O={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Io="hover-inherit-topic-color",Po=[[T[Y],k({"&, &.hover-inherit-topic-color:hover":{color:O.DEFAULT_TOPIC.light},[A]:{"&, &.hover-inherit-topic-color:hover":{color:O.DEFAULT_TOPIC.dark}}})],[T.ABLEISM,k({"&, &.hover-inherit-topic-color:hover":{color:O.ABLEISM}})],[T.ART,k({"&, &.hover-inherit-topic-color:hover":{color:O.ARTS_CRAFTS}})],[T.LEMON,k({"&, &.hover-inherit-topic-color:hover":{color:O.LEMON}})],[T.MENTAL_ILLNESS,k({"&, &.hover-inherit-topic-color:hover":{color:O.MENTAL_ILLNESS}})],[T.NEURODIVERGENCE,k({"&, &.hover-inherit-topic-color:hover":{color:O.NEURODIVERGENCE}})],[T.PHILOSOPHY,k({"&, &.hover-inherit-topic-color:hover":{color:O.PHILOSOPHY}})],[T.POLITICS,k({"&, &.hover-inherit-topic-color:hover":{color:O.POLITICS}})],[T.RACISM,k({"&, &.hover-inherit-topic-color:hover":{color:O.RACISM}})],[T.SEXISM,k({"&, &.hover-inherit-topic-color:hover":{color:O.SEXISM}})],[T.SUBSTANCE_ABUSE,k({"&, &.hover-inherit-topic-color:hover":{color:O.SUBSTANCE_ABUSE}})],[T.TECHNOLOGY,k({"&, &.hover-inherit-topic-color:hover":{color:O.TECHNOLOGY}})],[T.TRANSPHOBIA,k({"&, &.hover-inherit-topic-color:hover":{color:O.TRANSPHOBIA}})]],Lo=Object.fromEntries(Po),ze=le(),l={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Io,baseFontSizeRange:ce,darkMode:A,aside:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},[A]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},blog:{listing:{descriptionIdentifier:ze,description:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em",nested:{[A]:{color:"hsl(212deg, 10%, 75%)"}}},itemAlt:{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${ze}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[A]:{color:"hsl(212deg, 10%, 90%)"}}},[A]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[A]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(220deg, 10%, 94%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:Fe},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:Fe,nested:{[A]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:ko,headingRanges:Eo,[A]:{code:{backgroundColor:"hsl(220deg, 10%, 20%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",outline:"none"},prose:{color:"hsl(210deg, 10%, 90%)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 95%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:wo,mainGridSidePaddingRem:J,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",outline:"1px solid #eee"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:Mo},siteHeader:{columns:Oo,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},topicColorClassNames:Lo,topicTagIdentifier:le(),topicTagInner:{backgroundImage:_(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[A]:{backgroundImage:_(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:_(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[A]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:_(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")}},Ge=["b","em","h1","h2","h3","i","strong"],Q=["h1","h2","h3","h4","h5","h6"],jo=[...Q,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Bo=Array.from(new Set([...Q,...jo,"div","fieldset","form","hgroup","hr","pre"])),Ro=_(`
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
    font-size:        ${H(`${l.baseFontSizeRange.minEm}em`,`${l.baseFontSizeRange.fluidVw}vw`,`${l.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${w(["body"],{...l.document,...l.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${Q.join(",")} {
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
`),No=()=>{k.global(_(`
      ${Bo.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${Q.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${w(Ge,l.emphasize)}

      h1 {
        font-size: ${H(`${l.headingRanges.h1.minEm}em`,`${l.headingRanges.h1.fluidVw}vw`,`${l.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${H(`${l.headingRanges.h2.minEm}em`,`${l.headingRanges.h2.fluidVw}vw`,`${l.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${H(`${l.headingRanges.h3.minEm}em`,`${l.headingRanges.h3.fluidVw}vw`,`${l.headingRanges.h3.maxEm}em`)};
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

      ${w(["pre"],l.pre)}

      ${w(["code"],{...l.code,borderRadius:"0.1875rem",display:"inline-block",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.25rem 0.375rem 0",wordWrap:"break-word",nested:{"&:first-line":{verticalAlign:"-0.5em"}}})}

      pre code {
        background-color: transparent;
        line-height:      1.325em;
        margin:           0;
        padding:          0;
      }

      ${l.firstLastMarginZeroElements.map(e=>`${e}:first-child`).join(", ")} {
        margin-top: 0;
      }

      ${l.firstLastMarginZeroElements.map(e=>`${e}:last-child`).join(", ")} {
        margin-bottom: 0;
      }

      ${w(["a"],{...l.links,fontWeight:"bolder"})}

      ${w(["aside","small"],l.deemphasize)}

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

      ${l.darkMode} {
        ${w(["body"],{...l[l.darkMode].document,...l[l.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${w(Ge,l[l.darkMode].emphasize)}
        ${w(["pre"],l[l.darkMode].pre)}
        ${w(["code"],l[l.darkMode].code)}
        ${w(["a"],l[l.darkMode].links)}
        ${w(["aside","small"],l[l.darkMode].deemphasize)}
      }
    `))},Ho=(e,t)=>e.slice().sort(t),_o=e=>typeof e=="object"&&e!=null,me=e=>parseInt(e,16),ee=me("ff"),Do=me("00"),Xe=.05,Fo=.15,zo=.05;class ge extends Error{constructor(t){super(`Invalid hash: ${t}`)}}const Go=/([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/g,Xo=e=>e.length===10,Yo=e=>{const o=Array.from(e.matchAll(Go)??[]).map(([,s,i])=>({x:s,y:i}));if(!Xo(o))throw new ge(e);return o},Uo=Symbol("IS_POINT"),Vo=e=>Object.assign(e,{[Uo]:!0}),Ye=e=>{const t=me(e);if(t>ee||t<Do)throw new Error(`Not a valid coordinate: ${e}`);return Vo(t)},Wo=({x:e,y:t})=>({x:Ye(e),y:Ye(t)}),qo=e=>e.length===10,Ko=e=>{const t=Yo(e);try{const o=t.map(Wo);if(!qo(o))throw new ge(e);return o}catch{throw new ge(e)}},Zo=Symbol("SCALED_COORDINATE"),Ue=e=>e.reduce(({max:t,min:o},{y:s})=>({max:Math.max(t,s),min:Math.min(o,s)}),{max:-Infinity,min:Infinity}),S=(e,t)=>Object.assign(e,{[Zo]:t}),Jo=({point:{x:e,y:t},xScale:o,xShift:s,yRange:i,yScale:r,yShift:a})=>({x:S(ee*((e+s)/ee)*o,o),y:S((t+a)/i*100,r)}),Qo=({points:e,xMax:t,xScale:o,yScale:s})=>e.reduce((i,r,a,c)=>{const{x:g}=c[a-1]??{x:S(0,o)},{x:d}=c[a+1]??{x:S(t,o)},p=S(0,s),y=[{x:g,y:p},r,{x:d,y:p}];return[...i,y]},[]),en=({segments:e,xMax:t,xScale:o,yScale:s})=>e.map(i=>{const[r,{x:a,y:c},{x:g,y:d}]=i,{x:p,y:u}=r,f=g-p,y=c/f,b=6/y;if(b<1){const x=b*.2*p,E=p-x,v=g+x,$=E<0?Math.abs(E):v>t?t-v:0,G=E+$,L=v+$,j=b*.3,U=a+$,V=j*c,re=c-V,ie={x:S(G,o),y:S(u,s)},B={x:S(U,o),y:S(re,s)},ae={x:S(L,o),y:S(d,s)};return[ie,B,ae]}return i}),tn=({x:e,y:t},{x:o,y:s})=>{const i=o-e,r=s-t;return{angle:Math.atan2(r,i),length:Math.sqrt(i**2+r**2)}},Ve=({current:e,previous:t,next:o,reverse:s,smoothing:i,xScale:r,yScale:a})=>{const c=s?Math.PI:0,g=tn(t,o),d=g.angle+c,p=g.length*i,{x:u,y:f}=e,y=u+Math.cos(d)*p,h=f+Math.sin(d)*p;return{x:S(y,r),y:S(h,a)}},on=({index:e,point:t,points:o,smoothing:s,xScale:i,yScale:r})=>{const a=o[e-1];if(a==null)throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());const c=o[e-2]??a,g=Ve({current:a,previous:c,next:t,reverse:!1,smoothing:s,xScale:i,yScale:r}),d=a,p=o[e+1]??t,u=Ve({current:t,previous:d,next:p,reverse:!0,smoothing:s,xScale:i,yScale:r});return[g,u,t]},We=({segment:e,smoothing:t,xScale:o,yScale:s})=>e.reduce((i,r,a)=>{if(a===0)return i;const g=on({index:a,point:r,points:e,smoothing:t,xScale:o,yScale:s}).map(d=>`${d.x},${d.y}`).join(" ");return[...i,`C ${g}`]},[]),nn=({baseYCoordinate:e,segments:t,xScale:o,yMax:s,yOffsetBelowMidpoint:i,yScale:r,yTilt:a=!1})=>t.reduce((c,g,d,p)=>{const{length:u}=p,[f,y,h]=g,{x:b,y:C}=f,{x,y:E}=y,{x:v,y:$}=h,G=v-b,L=G===0?0:Math.max(E/G*zo,Fo),j=a?.1:0,U=1-j,V=1+j,re=d%2==0?U:V,ie=i?C+e:s-C+e,B={x:b,y:S(ie*re,r)},ae=d%2==0?U:V,ft=i?$+e:s-$+e,xe={x:S(v,o),y:S(ft*ae,r)},Ce=x-b,Te=v-x,yt=Te>Ce?0:0-(x-b)*Xe,ve=(u-d)*(r/100*s),bt={x:S(x+yt,o),y:S(E-ve,r)},St=We({segment:[B,bt,xe],smoothing:L,xScale:o,yScale:r}),xt=Te>Ce?(v-x)*Xe:0,Ct={x:S(x+xt,o),y:S(s-ve,r)},Tt=We({segment:[xe,Ct,B],smoothing:L,xScale:o,yScale:r});return[...c,[`M ${B.x},${B.y}`,...St,...Tt,"Z"].join(" ")]},[]),sn=({hash:e,xPadding:t=0,xScale:o=1,yOffset:s=.5,yPadding:i=0,yScale:r=1})=>{const a=Ko(e),c=Ho(a,(L,j)=>L.x>j.x?1:-1),{max:g,min:d}=Ue(c),p=t/2,u=g-d,f=0-d+i/2,y=c.map(L=>Jo({xScale:o,xShift:p,yRange:u,yScale:r,yShift:f,point:L})),h=(ee+t)*o,{max:b}=Ue(y),C=(b+i)*r,x=Qo({points:y,xMax:h,xScale:o,yScale:r}),E=en({segments:x,xMax:h,xScale:o,yScale:r}),v=s>.5,$=v?C*s:-1*C*s;return{segmentPaths:nn({baseYCoordinate:$,segments:E,xScale:o,yMax:C,yOffsetBelowMidpoint:v,yScale:r}),xMax:h,yMax:C}},rn=`
  ${l.mainGridColumns[0]}
  ${l.mainGridColumns[1]}
  min(
    ${l.mainGridColumns[2][0]},
    ${l.mainGridColumns[2][1]}
  )
  ${l.mainGridColumns[3]}
  ${l.mainGridColumns[4]}
`.replace(/\s+/g," "),qe={gridColumn:"1 / -1"},Ke=k(qe),P=m("div",{nested:{[`& > .${Ke}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:rn,...qe}),an=m(P,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Ze=m("div",{alignContent:"flex-start",alignItems:"flex-start",display:"flex",gridColumn:"2 / 5"}),ln=m("div",{flexGrow:0,fontSize:"9em",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),cn=m("div",{flexGrow:1,padding:"1rem 0.75rem"}),he="div",dn={ContentContainer:he,InnerContainer:Ze,OuterContainer:he,SymbolContainer:he},mn=e=>{const{children:t,ContentContainer:o,InnerContainer:s,OuterContainer:i,outerContainerProps:r,symbol:a,SymbolContainer:c}={...dn,...e};return n(an,{as:i,...r},n(Ze,{as:s},n(ln,{as:c,role:"presentation"},a),n(cn,{as:o},t)))},gn=m("pre",{fontSize:"1rem"}),hn=m("div",{gridColumn:"2 / 6"}),pn=m(P,{...l.pre,nested:{[l.darkMode]:{...l[l.darkMode].pre},"& code":{backgroundColor:"transparent"},"& pre":{backgroundColor:"transparent",maxWidth:"100%",margin:0,overflow:"auto",outline:"none",padding:["1rem","0"].join(" ")}}}),un=m("div",{...l.codeBlock.symbol,fontSize:H("3.2em","10vw","4.5em"),marginTop:"-0.325em",textIndent:"-0.25em"}),fn=({children:e})=>n(mn,{ContentContainer:gn,InnerContainer:hn,OuterContainer:pn,symbol:"{",SymbolContainer:un},e),yn=m("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),bn=(e,t)=>_o(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof t=="string"&&$t().test(t),Sn=({["aria-label"]:e,children:t,role:o})=>n(yn,{"aria-label":e,role:o},t),Je=N.resolve(process.cwd(),"./syntax-themes"),[xn,Cn]=await Promise.all([Ie(N.resolve(Je,"./yi-dark.json")),Ie(N.resolve(Je,"./yi-light.json"))]),Tn={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},vn={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},kn=e=>e.trim().split(/\b\W*\b/).reduce((t,o)=>({...t,...vn[o]}),{}),Qe=e=>Object.entries(e).reduce((t,[o,s])=>{const i=Tn[o];if(s==null||typeof i!="string")return t;const r=i==="fontStyle"?kn(s):{[i]:s};return{...t,...r}},{}),[En,et]=await Promise.all([Pe({theme:xn}),Pe({theme:Cn})]),wn=new Set([...Wt,...qt,...Kt]),On=new Set(["ts","tsx","typescript"]),$n=(e,t)=>{const[o,s]=[et,En].map(i=>i.codeToThemedTokens(e,t).reduce((a,c)=>c.reduce((g,d)=>({...g,...d.explanation?.reduce((p,u)=>({...p,...u.scopes.reduce((f,{themeMatches:y})=>({...f,...y.reduce((h,{name:b,scope:C,settings:x})=>({...h,byName:b==null?h.byName:{...h.byName,[b]:x},byScope:Array.isArray(C)?{...h.byScope,...C.reduce((E,v)=>({...E,[v]:x}),h.byScope)}:typeof C=="string"?{...h.byScope,[C]:x}:h.byScope}),{...f,byName:{...f.byName},byScope:{...f.byScope}})}),p)}),g)}),a),{byName:{},byScope:{}}));return{dark:s,light:o}},An=(e,t)=>{const{content:o,explanation:s}=e,{dark:i,light:r}=t,a=s?.reduce((g,d)=>({...g,...d.scopes.reduce((p,{themeMatches:u})=>({...p,...u.reduce((f,{name:y,scope:h})=>{const b=Qe({...y==null?{}:r.byName[y],...Array.isArray(h)?h.reduce((v,$)=>({...v,...r.byScope[$]}),{}):typeof h=="string"?r.byScope[h]:{}}),C=Qe({...y==null?{}:i.byName[y],...Array.isArray(h)?h.reduce((v,$)=>({...v,...i.byScope[$]}),{}):typeof h=="string"?i.byScope[h]:{}}),x={...f,...b},E=Object.keys(C).length>0?{nested:{[l.darkMode]:C}}:{};return{...x,...E}},{})}),{})}),{})??{},c=Object.keys(a).length>0?m("span",a):"span";return o.replace(/\s+/,"")===""||c==null?n("span",{},o):n(c,{},o)},Mn=(e,t)=>Ee(n(K,{},n("pre",{},n("code",{},...e.reduce((o,s,i)=>{const r=s.map(c=>An(c,t)),a=i===0?"":`
`;return[...o,a,...r]},[]))))),In=(e,t={})=>o=>{const{lang:s,value:i,meta:r}=o;!!process?.env?.TWOSLASH_DISABLE||Pn(t,o);const c=String(s)==="json5"?"json":s;let g;const d=i.replace(/^\n+|\n+$/g,"");if(!wn.has(c))g=Zt.plainTextRenderer(d,{});else{const p=e.codeToThemedTokens(d,c),u=$n(d,c);g=Mn(p,u)}On.has(c)&&!r?.includes("ignore"),o.children=[],o.type="html",o.value=g},Pn=(e,t)=>{if(t.meta?.includes("twoslash")){const o=Jt(t.value,t.lang,e);t.value=o.code,t.lang=o.extension,t.twoslash=o}},Ln=()=>t=>{Qt(t,"code",In(et))};import.meta.env=W;const jn=Oe.createRequire(import.meta.url),Bn=jn("remark"),Rn=({className:e,children:t,...o})=>e==="language-id"?null:e==="code-container"?M(R,o,...ke(t)):M("div",{className:e,...o},...ke(t)),Nn=({children:e,...t})=>bn(t,e)?M(Sn,t,e):M("span",t,e),pe={components:{div:Rn,pre:fn,span:Nn},rehypePlugins:[At],remarkPlugins:[Ln,Mt,It]},Hn=e=>{const{children:t=M(()=>null,{}),components:o={},rehypePlugins:s=[],remarkPlugins:i=[]}=e,r={...pe.components,...o},a={mdx:M,MDXProvider:kt,components:r,props:{}},c=typeof t=="string"?we(t).trim():t,g=[...pe.rehypePlugins,...s],d=[...pe.remarkPlugins,...i],p=vt.sync(c,{rehypePlugins:g,remarkPlugins:d,skipExport:!0}).trim(),{code:u}=Pt(p,{objectAssign:"Object.assign"}),f=Object.keys(a),y=Object.values(a),h=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...f,`${u}

${h}`)(M,...y)},tt=(e,t)=>{const[o,...s]=e;return t.reduce((i,r,a)=>[...i,r,s[a]],[o]).join("")},_n=(e,...t)=>{const o=tt(e,t);return M(K,{},M(Hn,{},o))},Dn=(e,...t)=>{const o=we(tt(e,t)).trim();return Bn().use(Lt).use(jt).processSync(o).contents.trim()},Fn=1.6180334,zn=4,ot=Fn*5,nt=.75,z=.15,Gn=1.5,ue=H("6rem",`${100/ot}vw`,"10rem"),Xn=m(P,{height:ue,position:"relative",width:"100%"}),Yn=m("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Un=(e=Y)=>l.topicColorClassNames[e],Vn=m("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85}),fe=e=>{const{className:t,hash:o,title:s,topics:i=[]}=e,r=i.length<2?[...i,T[Y]]:i,a=h=>`${h}-${o}`,{segmentPaths:c,xMax:g,yMax:d}=sn({hash:o,xPadding:zn,xScale:ot,yOffset:nt,yPadding:z,yScale:Gn}),p=d*nt,u=d*z/4,f=u*.75;return n(Xn,{className:t},n(Yn,{className:Ke,preserveAspectRatio:"none",viewBox:[0,0,g,d].join(" ")},n("title",null,"Generated art for the page or post titled",n("i",null,s),", with the content or commit hash ",o," ",r.length>0?[", and the topics: ",r.map(String).join(", ")]:null),n("defs",null,n("filter",{id:a("blur")},n("feOffset",{in:"SourceGraphic",dx:"0",dy:f,result:"glowOffsetOut"}),n("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:u,result:"glowBlurOut"}),n("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),n("clipPath",{id:a("blurOverlayClip")},n("rect",{x:"0",width:g,y:p,height:d})),n("filter",{id:a("blurOverlay")},n("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:f}),n("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:u})),n("filter",{id:a("blurUnderlay")},n("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:f}),n("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:u}),n("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),n("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),n("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),n("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:u})),n("g",{id:a("blobs")},c.map((h,b)=>{const C=b%r.length,x=r[C],E=Un(x);return n(Vn,{key:h,className:E,d:h,mask:"url(#softVerticalFade)"})}))),n("g",{transform:[`translate(0, ${d*z})`,`scale(1, ${1-z*2})`].join(" "),filter:`url(#${a("blur")})`},n("use",{href:`#${a("blobs")}`,mask:"url(#horizontalMidFade)"})),n("g",{"clip-path":`url(#${a("blurOverlayClip")})`,filter:`url(#${a("blurOverlay")})`,transform:[`translate(0, ${d*z})`,`scale(1, ${1-z*2})`].join(" ")},n("use",{href:`#${a("blobs")}`,mask:"url(#softVerticalFade)"}))))},st=()=>n("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},n("defs",null,n("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},n("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),n("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),n("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),n("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),n("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),n("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),n("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),n("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},n("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),n("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},n("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),n("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),n("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),n("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},n("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})))),Wn=[,"January","February","March","April","May","June","July","August","September","October","November","December"],qn=m("time",{nested:{[l.darkMode]:{...l[l.darkMode].deemphasize}},...l.deemphasize}),rt=({date:e,...t})=>n(qn,{...t,datetime:e.toISOString()},e.getDate()," ",Wn[e.getMonth()+1]," ",e.getFullYear()),it=m("span",{...l.topicTagOuter,backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"}),Kn=m(it,{...l.topicTagLink(l.topicTagIdentifier.className)}),Zn=m("span",l.topicTagIdentifier()),Jn=m(Zn,{...l.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),at=({className:e,link:t=!0,topic:o})=>{const s=Co(o),i=He(o);if(s==null||typeof i!="string")throw new Error(`Unexpected topic: ${String(i)}`);const r=t?Kn:it,a=t?{as:"a",href:`/blog/topics/${s}/`}:{as:"span"};return n(r,{className:[e,l.topicColorClassNames[i]??"",l.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...a},n(Jn,null,i))},Qn=m("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),es=m("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),lt=({className:e,link:t=!0,topics:o})=>n(Qn,{className:e},o.map(s=>typeof s=="string"?n(es,{key:bo(s)},n(at,{link:t,topic:s})):null)),ts=e=>e.reduce((t,o)=>{const s=o.stat.created.getFullYear(),i=t[s]??[];return{...t,[s]:[...i,o]}},{}),os=m(P,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),ct=m(P,{minHeight:ue,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),ns=m(ct,{...l.blog.listing.itemAlt}),ss=m(fe,{left:0,position:"absolute",top:"1rem"}),rs=m(P,{fontWeight:"normal",gridColumn:"2 / -2",paddingTop:`calc(${ue} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),is=k({backdropFilter:"blur(1rem)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(1rem)"}),as=m("h2",{...l.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),ls=m(rt,{padding:"0 0.5rem 0.125rem 0"}),cs=m(lt,{gridColumn:"3 / 3"}),ds=m("div",{...l.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),ms=m("a",{fontSize:"0.875em"});var te;(function(e){e.DATE="date"})(te||(te={}));var oe;(function(e){e.ASC="asc",e.DESC="desc"})(oe||(oe={}));const gs=({order:e=oe.DESC,posts:t,sort:o=te.DATE})=>{const s=t.slice().sort((r,a)=>e===oe.DESC&&o===te.DATE?r.stat.created>a.stat.created?-1:1:0),i=ts(s);return n(R,null,Object.entries(i).map(([r,a])=>n(R,{key:r},n(os,null,a.map((c,g)=>{const{description:d,hash:p,path:u,stat:{created:f},title:y,topics:h}=c,b=g%2==0?ns:ct;return n(b,{key:u},n(rs,{as:"a",href:u},n(ss,{hash:p,padded:!0,title:y,topics:h}),n(as,{className:is},y),n(ls,{date:f})),n(cs,{link:!1,topics:h}),n(ds,{className:l.blog.listing.descriptionIdentifier},d),n("p",null,n(ms,{href:u},"Read more\u2026")))})))))},hs=()=>n(R,null,n("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),n("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),n("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),n("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),n("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),n("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),n("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),n("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),n("meta",{name:"application-name",content:"Eyelidlessness"}),n("meta",{name:"msapplication-TileColor",content:"#555555"}),n("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),n("meta",{name:"theme-color",content:"#ffffff"}));No();const dt=({children:e,...t})=>n(eo,{...t},n("style",{dangerouslySetInnerHTML:{__html:Ro}}),e,n(hs,null)),ye={height:60,width:338},ps=m("svg",{display:"inline-block",maxWidth:"100%",width:`${ye.width}px`}),us=m("use",{nested:{[l.darkMode]:{...l[l.darkMode].siteLogo}},...l.siteLogo,fill:"currentcolor"}),fs=`0 0 ${ye.width} ${ye.height}`,ys=()=>n(ps,{viewBox:fs},n(us,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),n("title",null,"Eyelidlessness")),bs=`
  ${l.siteHeader.columns[0]}
  ${l.siteHeader.columns[1]}
  min(
    ${l.siteHeader.columns[2][0]},
    ${l.siteHeader.columns[2][1]}
  )
  ${l.siteHeader.columns[3]}
  ${l.siteHeader.columns[4]}
`.replace(/\s+/g," "),Ss=m("div",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:bs,padding:"1rem 0"}),be="@media (min-width: 0)",xs=m("nav",{nested:{[be]:{flexFlow:"row",justifyContent:"space-between"}},alignItems:"center",display:"flex",flexFlow:"column",justifyContent:"center"}),Cs=m("div",{display:"grid",gridColumn:3,justifyContent:"stretch",textAlign:"center"}),Ts=m("div",{nested:{[be]:{marginLeft:0,marginRight:"1em"}},margin:"0 auto"}),vs=m("a",{nested:{[l.darkMode]:{color:"hsl(336deg, 80%, 62%)"}},textDecoration:"none"}),lr=m("ul",{nested:{[be]:{marginLeft:"1em",marginRight:0,marginTop:0}},alignItems:"baseline",display:"flex",justifyContent:"center",listStyle:"none",margin:"0.75rem auto 0",padding:0}),cr=m("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"inline-block",listStyle:"none",margin:"0 0 0 2rem",padding:0}),dr=m("a",{...l.siteHeader.pageLinks,fontSize:"1.125em",fontWeight:300,lineHeight:1,textDecoration:"none",nested:{[l.darkMode]:{...l[l.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),ks=()=>n(Ss,{as:"header"},n(Cs,null,n(xs,null,n(Ts,null,n(vs,{href:"/"},n(ys,null))),!1))),Es=m(P,{paddingBottom:"4em"}),mt=({as:e="main",children:t})=>n(K,null,n(ks,null),n(Es,{as:e},t)),Se=process.cwd(),gt=e=>e.startsWith("/")?N.resolve(Se,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):N.extname(e)==""?N.resolve(Se,"./src/pages/",`${e}.tsx`):e;var ne;(function(e){e.ALL="",e.FIRST="--diff-filter=A"})(ne||(ne={}));var se;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(se||(se={}));const ws="origin",Os="main",ht=e=>{const{branch:t=Os,filter:o=ne.FIRST,format:s,path:i=Se,remote:r=ws}=e,{error:a,stdout:c}=to.spawnSync("git",["log",o,`--branches=${t}`,`--format=${s}`,`--remotes=${r}`,"--",i]);if(a)throw a;const g=c.toString().trim();return g===""?null:o===ne.FIRST?g:g.split(`
`)},pt=e=>{const t=gt(e),o=ht({format:se.ISO_DATE,path:t}),s=new Date(o??"");return isNaN(s.getTime())?null:s},$s=e=>{const t=Le.readFileSync(e).toString();let o=oo.createHash("sha1");return o.update(t),o.digest("hex")},ut=e=>{const t=gt(e);return ht({format:se.HASH,path:t})??$s(t)},As=m(P,{...l.aside,nested:{...l.aside.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Ms=m("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Is=m("div",{fontSize:"0.889em"}),Ps=({as:e="section",title:t,...o})=>n(As,{as:e,itemprop:"description"},t?n(Ms,null,t):null,n(Is,{...o}));import.meta.env=W;const Ls=m("h1",{marginBottom:"0.25rem"}),js=m(P,{marginBottom:"1rem"}),Bs=({children:e,description:t,descriptionRaw:o,hash:s,stat:{created:i},title:r,topics:a})=>n(R,null,n(dt,null,n(je.title,null,r," | Eyelidlessness"),n(je.description,null,o)),n(mt,{as:"article"},n(js,null,n(st,null),n(fe,{hash:s,title:r,topics:a}),n(Ls,null,r),n(rt,{date:i,itemprop:"datePublished"}),n(lt,{link:!1,topics:a})),n(Ps,null,t),e)),Rs=e=>{const{description:t,path:o,title:s,topics:i}=e,r=Dn`${Ee(n(R,null,t))}`,a=ut(o),c={created:pt(o)??Le.statSync(import.meta.url.replace(/^file:(\/\/)?/,"")).ctime};return{description:t,descriptionRaw:r,hash:a,path:o,stat:c,title:s,topics:i}};export{fe as BlogArt,st as BlogArtDefs,gs as BlogListing,Bs as BlogPost,dt as Head,mt as Main,K as StylesProvider,T as Topic,at as TopicTag,W as __SNOWPACK_ENV__,Rs as getBlogPostStaticProps,pt as getInitialCommitDate,ut as getInitialFileHash,_n as mdx,m as styled};
