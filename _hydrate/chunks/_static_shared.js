import{h as o,Fragment as ve,toChildArray as je}from"https://cdn.skypack.dev/preact@10.5.10";import Ot from"@mdx-js/mdx";import{mdx as I,MDXProvider as At}from"@mdx-js/preact";import{isobject as jt,RendererProvider as Pt,createComponent as Rt,emojiRegex as It,h as Lt,rehypeAccessibleEmojis as Bt,remarkSlug as Ht,remarkSmartypants_1 as Nt}from"./_vendor/index.js";import{transform as _t}from"buble-jsx-only";import Pe from"dedent";import Re from"module";import Dt from"remark-mdx";import zt from"remark-mdx-to-plain-text";import{createRenderer as Ft,combineRules as Gt}from"fela";import{renderToString as Xt}from"fela-tools";import{processStyleWithPlugins as Ut,KEYFRAME_TYPE as Ie,isNestedSelector as Yt,normalizeNestedProperty as Vt,isMediaQuery as Wt,generateCombinedMediaQuery as Le,isSupport as Kt,generateDeclarationReference as qt,isUndefinedValue as Zt,generateCSSSelector as Jt,RULE_TYPE as Qt}from"fela-utils";import{cssifyDeclaration as eo,cssifyObject as to}from"css-in-js-utils";import Be from"md5";import Y from"path";import{loadTheme as He,getHighlighter as Ne}from"shiki";import{commonLangAliases as oo,commonLangIds as no,otherLangIds as so}from"shiki-languages";import{renderers as ro,runTwoSlash as io}from"shiki-twoslash";import ao from"unist-util-visit";import{Head as lo,seo as _e}from"microsite/head";import co from"child_process";import mo from"crypto";import go from"fs";const ho=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),x=(e,t)=>[e.join(","),"{",Object.entries(t).reduce((n,[i,r])=>typeof r=="object"&&(i==="nested"||i.includes("&"))?n:`${n}${ho(i)}:${r};`,""),"}",Object.entries(t).map(([n,i])=>{if(typeof i=="object"){if(n==="nested")return Object.entries(i).map(([r,a])=>{const l=e.map(c=>r.replace(/&/g,c));return x(l,a)}).join("");if(n.includes("&")){const r=e.map(a=>n.replace(/&/g,a));return x(r,i)}}return""},[]).join("")].join(""),V=(...e)=>`clamp(${e.join(",")})`,te=e=>e.replace(/\s+/g," ").trim(),De="production",po="production",uo=!0;var xe=Object.freeze({__proto__:null,MODE:De,NODE_ENV:po,SSR:uo});function oe(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function fo(e,t,n,i,r,a){const l=[];return r&&l.push(oe(r).slice(0,16)),i&&l.push(oe(i).slice(0,16)),n&&l.push(oe(n).slice(0,16)),l.push(oe(e).slice(0,16)),l.push(oe(t).slice(0,16)),l.push(a.slice(0,8)),l.join("_")}function yo(e,t,n=[""]){let i="";for(const a in e){const l=e[a];i=`${i}${a}{${to(l)}}`}let r="";for(let a=0;a<n.length;a++){const l=n[a];r=`${r}@${l}keyframes ${t}{${i}}`}return r}function So(){return e=>(e.renderKeyframe=(t,n)=>{const i=t(n,e),r=Ut(e,i,Ie,n),a=JSON.stringify(r);if(!e.cache.hasOwnProperty(a)){const l=Be(a),c=(e.selectorPrefix||"_")+l.slice(0,8),d=yo(r,c,e.keyframePrefixes),g={type:Ie,keyframe:d,name:c};e.cache[a]=g,e._emitChange(g)}return e.cache[a].name},e._renderStyleToClassNames=({_className:t,...n},i="",r="",a="")=>{let l=t?` ${t}`:"";for(const c in n){const d=n[c];if(jt(d))if(Yt(c))l+=e._renderStyleToClassNames(d,i+Vt(c),r,a);else if(Wt(c)){const g=Le(r,c.slice(6).trim());l+=e._renderStyleToClassNames(d,i,g,a)}else if(Kt(c)){const g=Le(a,c.slice(9).trim());l+=e._renderStyleToClassNames(d,i,r,g)}else console.warn(`The object key "${c}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const g=qt(c,d,i,r,a);if(!e.cache.hasOwnProperty(g)){if(Zt(d)){e.cache[g]={className:""};continue}const h=eo(c,d),u=Be(g),b=e.devMode?fo(c,d,i,r,a,u):(e.selectorPrefix||"_")+u.slice(0,8),p=Jt(b,i),k={type:Qt,className:b,selector:p,declaration:h,pseudo:i,media:r,support:a};e.cache[g]=k,e._emitChange(k)}const y=e.cache[g].className;y&&(l+=` ${y}`)}}return l},e)}import.meta.env=xe;const le=Re.createRequire(import.meta.url),{default:bo}=le("fela-identifier"),{default:vo}=le("fela-plugin-embedded"),{default:xo}=le("fela-plugin-multiple-selectors"),{default:Co}=le("fela-plugin-typescript"),ze=De==="development",Fe=bo(),W=Ft({devMode:ze,enhancers:[So(),Fe],plugins:[vo(),xo(),Co()]});!ze&&import.meta.url.endsWith("/.microsite/staging/src/lib/styles/styles.js")&&W.subscribe(async()=>{Xt(W)});const ko=e=>Array.isArray(e)?e:[e],Ce=({children:e})=>o(Pt,{renderer:W},...ko(e)),To=e=>e,wo=e=>W.renderRule(To,e),v=Object.assign(wo,{global:W.renderStatic.bind(W)}),ke=Symbol("styles"),Eo=e=>typeof e=="function"&&Array.isArray(e[ke]),m=(e,t)=>{const n=Eo(e)?e[ke]:[],r=[...n.map(h=>typeof h=="function"?h:()=>h),()=>t],a=Gt(...r),l=[...n,t],c=typeof e=="string"?e:"div",d=Rt(a,c,Object.keys),g=h=>Array.isArray(h)?h:[h];return Object.assign(({as:h=e,children:u,...b})=>o(d,{...b,as:h},...g(u)),{[ke]:l})},ne=Symbol("DEFAULT_TOPIC"),f={[ne]:ne,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},Mo=e=>typeof e=="string"||typeof e=="symbol",Ge=e=>Mo(e)&&e in f,Xe=e=>Ge(e)?f[e]:e,Ue=Object.entries(f).reduce((e,t)=>{const[n,i]=t;return typeof n=="string"?{...e,[i]:n}:e},{}),$o=e=>Ge(e)?e:Ue[e],Oo=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),Ao=Object.fromEntries(Object.entries(Ue).map(([e,t])=>typeof t=="string"?[e,Oo(t)]:null).filter(e=>e!=null)),jo=e=>{const t=Xe(e);if(typeof t=="string")return Ao[t]},ce=2,Te={minEm:1.0625,fluidVw:1.0625*ce,maxEm:1.325},D="@media (prefers-color-scheme: dark)",Po=["h1","h2","h3","h4","h5","h6"],Ro=["dd","dl","dt","li","ol","ul"],Io=[...Po,...Ro,"p"],K=Te.minEm/Te.maxEm,P={h1:1.953,h2:1.563,h3:1.25},Lo={h1:{minEm:P.h1*K,fluidVw:P.h1*K*ce,maxEm:P.h1},h2:{minEm:P.h2*K,fluidVw:P.h2*K*ce,maxEm:P.h2},h3:{minEm:P.h3*K,fluidVw:P.h3*K*ce,maxEm:P.h3}},Ye=75,de=1.25,Bo=["0.7fr",`${de}rem`,[`${Ye}ch`,`calc(100% - ${de*2}rem)`],`${de}rem`,"1.2fr"],we=1,Ho=["0.7fr",`${we}rem`,[`${Ye*1.1875}ch`,`calc(100% - ${we*2}rem)`],`${we}rem`,"1.2fr"],No=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],Ve=No.join(", "),_o=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Do=_o.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),C={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},zo="hover-inherit-topic-color",Fo=[[f[ne],v({"&, &.hover-inherit-topic-color:hover":{color:C.DEFAULT_TOPIC.light},[D]:{"&, &.hover-inherit-topic-color:hover":{color:C.DEFAULT_TOPIC.dark}}})],[f.ABLEISM,v({"&, &.hover-inherit-topic-color:hover":{color:C.ABLEISM}})],[f.ART,v({"&, &.hover-inherit-topic-color:hover":{color:C.ARTS_CRAFTS}})],[f.LEMON,v({"&, &.hover-inherit-topic-color:hover":{color:C.LEMON}})],[f.MENTAL_ILLNESS,v({"&, &.hover-inherit-topic-color:hover":{color:C.MENTAL_ILLNESS}})],[f.NEURODIVERGENCE,v({"&, &.hover-inherit-topic-color:hover":{color:C.NEURODIVERGENCE}})],[f.PHILOSOPHY,v({"&, &.hover-inherit-topic-color:hover":{color:C.PHILOSOPHY}})],[f.POLITICS,v({"&, &.hover-inherit-topic-color:hover":{color:C.POLITICS}})],[f.RACISM,v({"&, &.hover-inherit-topic-color:hover":{color:C.RACISM}})],[f.SEXISM,v({"&, &.hover-inherit-topic-color:hover":{color:C.SEXISM}})],[f.SUBSTANCE_ABUSE,v({"&, &.hover-inherit-topic-color:hover":{color:C.SUBSTANCE_ABUSE}})],[f.TECHNOLOGY,v({"&, &.hover-inherit-topic-color:hover":{color:C.TECHNOLOGY}})],[f.TRANSPHOBIA,v({"&, &.hover-inherit-topic-color:hover":{color:C.TRANSPHOBIA}})]],Go=Object.fromEntries(Fo),s={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:zo,baseFontSizeRange:Te,darkMode:D,aside:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},[D]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(220deg, 10%, 94%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:Ve},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:Ve,nested:{[D]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:Io,headingRanges:Lo,[D]:{code:{backgroundColor:"hsl(220deg, 10%, 20%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",outline:"none"},prose:{color:"hsl(210deg, 10%, 90%)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 95%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:Bo,mainGridSidePaddingRem:de,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",outline:"1px solid #eee"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:Do},siteHeader:{columns:Ho,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},topicColorClassNames:Go,topicTagIdentifier:Fe(),topicTagInner:{backgroundImage:te(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[D]:{backgroundImage:te(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:te(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[D]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:te(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")}},We=["b","em","h1","h2","h3","i","strong"],me=["h1","h2","h3","h4","h5","h6"],Xo=[...me,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Uo=Array.from(new Set([...me,...Xo,"div","fieldset","form","hgroup","hr","pre"])),Yo=()=>{v.global(`
    ${Uo.join(",")} {
      display: block;
    }

    body, dl, p, ol, ul {
      font-weight: normal;
    }

    ${me.map(e=>`${e} small`).join(",")} {
      color:          currentColor;
      font-size:      0.875em;
      vertical-align: 0.05em;
    }

    ${x(We,s.emphasize)}

    h1 {
      font-size: ${V(`${s.headingRanges.h1.minEm}em`,`${s.headingRanges.h1.fluidVw}vw`,`${s.headingRanges.h1.maxEm}em`)};
    }

    h2 {
      font-size: ${V(`${s.headingRanges.h2.minEm}em`,`${s.headingRanges.h2.fluidVw}vw`,`${s.headingRanges.h2.maxEm}em`)};
    }

    h3 {
      font-size: ${V(`${s.headingRanges.h3.minEm}em`,`${s.headingRanges.h3.fluidVw}vw`,`${s.headingRanges.h3.maxEm}em`)};
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

    ${x(["pre"],s.pre)}

    ${x(["code"],{...s.code,borderRadius:"0.1875rem",display:"inline-block",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.25rem 0.375rem 0",wordWrap:"break-word",nested:{"&:first-line":{verticalAlign:"-0.5em"}}})}

    pre code {
      background-color: transparent;
      line-height:      1.325em;
      margin:           0;
      padding:          0;
    }

    ${s.firstLastMarginZeroElements.map(e=>`${e}:first-child`).join(", ")} {
      margin-top: 0;
    }

    ${s.firstLastMarginZeroElements.map(e=>`${e}:last-child`).join(", ")} {
      margin-bottom: 0;
    }

    ${x(["a"],{...s.links,fontWeight:"bolder"})}

    ${x(["aside","small"],s.deemphasize)}

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

    ${s.darkMode} {
      ${x(["body"],{...s[s.darkMode].document,...s[s.darkMode].prose})}

      body, dl, p, ol, ul {
        font-weight:    300;
        letter-spacing: 0.2px;
      }

      ${x(We,s[s.darkMode].emphasize)}
      ${x(["pre"],s[s.darkMode].pre)}
      ${x(["code"],s[s.darkMode].code)}
      ${x(["a"],s[s.darkMode].links)}
      ${x(["aside","small"],s[s.darkMode].deemphasize)}
    }
  `)},Vo=`
  ${s.mainGridColumns[0]}
  ${s.mainGridColumns[1]}
  min(
    ${s.mainGridColumns[2][0]},
    ${s.mainGridColumns[2][1]}
  )
  ${s.mainGridColumns[3]}
  ${s.mainGridColumns[4]}
`.replace(/\s+/g," "),Ke={gridColumn:"1 / -1"},qe=v(Ke),q=m("div",{nested:{[`& > .${qe}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:Vo,...Ke}),Wo=m(q,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Ze=m("div",{alignContent:"flex-start",alignItems:"flex-start",display:"flex",gridColumn:"2 / 5"}),Ko=m("div",{flexGrow:0,fontSize:"9em",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),qo=m("div",{flexGrow:1,padding:"1rem 0.75rem"}),Zo=e=>{const{children:t,ContentContainer:n="div",InnerContainer:i=Ze,OuterContainer:r="div",outerContainerProps:a={},symbol:l,SymbolContainer:c="div"}=e;return o(Wo,{as:r,...a},o(Ze,{as:i},o(Ko,{as:c,role:"presentation"},l),o(qo,{as:n},t)))},Jo=m("pre",{fontSize:"1rem"}),Qo=m("div",{gridColumn:"2 / 6"}),en=m(q,{...s.pre,nested:{[s.darkMode]:{...s[s.darkMode].pre},"& code":{backgroundColor:"transparent"},"& pre":{backgroundColor:"transparent",maxWidth:"100%",margin:0,overflow:"auto",outline:"none",padding:["1rem","0"].join(" ")}}}),tn=m("div",{...s.codeBlock.symbol,fontSize:V("3.2em","10vw","4.5em"),marginTop:"-0.325em",textIndent:"-0.25em"}),on=({children:e})=>o(Zo,{ContentContainer:Jo,InnerContainer:Qo,OuterContainer:en,symbol:"{",SymbolContainer:tn},e),nn=e=>typeof e=="object"&&e!=null,sn=m("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),rn=(e,t)=>nn(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof t=="string"&&It().test(t),an=({["aria-label"]:e,children:t,role:n})=>o(sn,{"aria-label":e,role:n},t),Je=Y.resolve(process.cwd(),"./syntax-themes"),[ln,cn]=await Promise.all([He(Y.resolve(Je,"./yi-dark.json")),He(Y.resolve(Je,"./yi-light.json"))]),dn={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},mn={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},gn=e=>e.trim().split(/\b\W*\b/).reduce((t,n)=>({...t,...mn[n]}),{}),Qe=e=>Object.entries(e).reduce((t,[n,i])=>{const r=dn[n];if(i==null||typeof r!="string")return t;const a=r==="fontStyle"?gn(i):{[r]:i};return{...t,...a}},{}),[hn,et]=await Promise.all([Ne({theme:ln}),Ne({theme:cn})]),pn=new Set([...oo,...no,...so]),un=new Set(["ts","tsx","typescript"]),fn=(e,t)=>{const[n,i]=[et,hn].map(r=>r.codeToThemedTokens(e,t).reduce((l,c)=>c.reduce((d,g)=>({...d,...g.explanation?.reduce((y,h)=>({...y,...h.scopes.reduce((u,{themeMatches:b})=>({...u,...b.reduce((p,{name:k,scope:O,settings:L})=>({...p,byName:k==null?p.byName:{...p.byName,[k]:L},byScope:Array.isArray(O)?{...p.byScope,...O.reduce((R,B)=>({...R,[B]:L}),p.byScope)}:typeof O=="string"?{...p.byScope,[O]:L}:p.byScope}),{...u,byName:{...u.byName},byScope:{...u.byScope}})}),y)}),d)}),l),{byName:{},byScope:{}}));return{dark:i,light:n}},yn=(e,t)=>{const{content:n,explanation:i}=e,{dark:r,light:a}=t,l=i?.reduce((d,g)=>({...d,...g.scopes.reduce((y,{themeMatches:h})=>({...y,...h.reduce((u,{name:b,scope:p})=>{const k=Qe({...b==null?{}:a.byName[b],...Array.isArray(p)?p.reduce((B,A)=>({...B,...a.byScope[A]}),{}):typeof p=="string"?a.byScope[p]:{}}),O=Qe({...b==null?{}:r.byName[b],...Array.isArray(p)?p.reduce((B,A)=>({...B,...r.byScope[A]}),{}):typeof p=="string"?r.byScope[p]:{}}),L={...u,...k},R=Object.keys(O).length>0?{nested:{[s.darkMode]:O}}:{};return{...L,...R}},{})}),{})}),{})??{},c=Object.keys(l).length>0?m("span",l):"span";return n.replace(/\s+/,"")===""||c==null?o("span",{},n):o(c,{},n)},Sn=(e,t)=>Lt(o(Ce,{},o("pre",{},o("code",{},...e.reduce((n,i,r)=>{const a=i.map(c=>yn(c,t)),l=r===0?"":`
`;return[...n,l,...a]},[]))))),bn=(e,t={})=>n=>{const{lang:i,value:r,meta:a}=n;!!process?.env?.TWOSLASH_DISABLE||vn(t,n);const c=String(i)==="json5"?"json":i;let d;const g=r.replace(/^\n+|\n+$/g,"");if(!pn.has(c))d=ro.plainTextRenderer(g,{});else{const y=e.codeToThemedTokens(g,c),h=fn(g,c);d=Sn(y,h)}un.has(c)&&!a?.includes("ignore"),n.children=[],n.type="html",n.value=d},vn=(e,t)=>{if(t.meta?.includes("twoslash")){const n=io(t.value,t.lang,e);t.value=n.code,t.lang=n.extension,t.twoslash=n}},xn=()=>t=>{ao(t,"code",bn(et))};import.meta.env=xe;const Cn=Re.createRequire(import.meta.url),kn=Cn("remark"),Tn=({className:e,children:t,...n})=>e==="language-id"?null:e==="code-container"?I(ve,n,...je(t)):I("div",{className:e,...n},...je(t)),wn=({children:e,...t})=>rn(t,e)?I(an,t,e):I("span",t,e),Ee={components:{div:Tn,pre:on,span:wn},rehypePlugins:[Bt],remarkPlugins:[xn,Ht,Nt]},En=e=>{const{children:t=I(()=>null,{}),components:n={},rehypePlugins:i=[],remarkPlugins:r=[]}=e,a={...Ee.components,...n},l={mdx:I,MDXProvider:At,components:a,props:{}},c=typeof t=="string"?Pe(t).trim():t,d=[...Ee.rehypePlugins,...i],g=[...Ee.remarkPlugins,...r],y=Ot.sync(c,{rehypePlugins:d,remarkPlugins:g,skipExport:!0}).trim(),{code:h}=_t(y,{objectAssign:"Object.assign"}),u=Object.keys(l),b=Object.values(l),p=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...u,`${h}

${p}`)(I,...b)},tt=(e,t)=>{const[n,...i]=e;return t.reduce((r,a,l)=>[...r,a,i[l]],[n]).join("")},ot=(e,...t)=>{const n=tt(e,t);return I(En,{},n)},Mn=(e,...t)=>{const n=Pe(tt(e,t)).trim();return kn().use(Dt).use(zt).processSync(n).contents.trim()},$n=(e,...t)=>({Component:()=>ot(e,...t),raw:Mn(e,...t)}),On=1.6180334,Me=On*5,An=100/Me,jn=V("6rem",`${An}vw`,"10rem"),Pn=m(q,{height:jn,position:"relative",width:"100%",zIndex:-1}),Rn=m("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),In=(e=ne)=>s.topicColorClassNames[e],Ln=m("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85}),nt=(e,t)=>{const n=new RegExp(`.{${t}}`,"g");return e.match(n)??[]},Bn=e=>parseInt(e,16),Hn=(e,t)=>e.slice().sort(t),Nn=([e,t],[n,i])=>{const r=n-e,a=i-t;return{angle:Math.atan2(a,r),length:Math.sqrt(Math.pow(r,2)+Math.pow(a,2))}},st=(e,t,n,i,r)=>{const a=i?Math.PI:0,l=Nn(t,n),c=l.angle+a,d=l.length*r,[g,y]=e,h=g+Math.cos(c)*d,u=y+Math.sin(c)*d;return[h,u]},_n=(e,t,n,i=.1)=>{const r=n[t-1];if(r==null)throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());const a=n[t-2]??r,l=st(r,a,e,!1,i),c=r,d=n[t+1]??e,g=st(e,c,d,!0,i);return[l,g,e]},rt=e=>e.reduce(([t,n],[i,r])=>[Math.min(t,r),Math.max(n,r)],[Infinity,-Infinity]),Dn=e=>e.join(","),zn=e=>e.map(Dn).join(" "),it=e=>e.length===0,at=(e,t)=>e.reduce((n,i,r,a)=>{if(r===0)return n;const l=_n(i,r,a,t);return[...n,`C ${zn(l)}`]},[]),lt=e=>{const{className:t,hash:n,title:i,topics:r=[]}=e,a=r.length<2?[...r,f[ne]]:r,c=nt(n,4).map(S=>nt(S,2).map(Bn));if(c.length<8)return null;const d=Hn(c,([S],[w])=>S>w?1:-1);if(it(d))return null;const[g]=d[0],[y]=d[d.length-1],h=y-g,[u,b]=rt(d),p=b-u,k=4*Me,O=k/2,L=1.5,R=d.map(([S,w])=>[(S-g+O)/h*100*Me,(w-u)/p*100]);if(it(d))return null;const[B]=R[R.length-1],A=B+k*4,[,ft]=rt(R),T=ft*L,yt=[0,0,A,T],St=[0,T],bt=[A,T],vt=R.reduce((S,w,M,$)=>{const[j]=$[M-1]??St,[H]=$[M+1]??bt,N=[[j,0],w,[H,0]];return[...S,N]},[]).map(S=>{const[w,[M,$],[j,H]]=S,[N,fe]=w,F=j-N,ye=$/F,G=6/ye;if(G<1){const se=G*.2*N,X=N-se,U=j+se,Q=X<0?Math.abs(X):U>A?A-U:0,ee=X+Q,Se=U+Q,re=G*.3,ie=M+Q,ae=re*$,be=$-ae;return[[ee,fe],[ie,be],[Se,H]]}return S}),pe=T*.75,z=.15,xt=vt.reduce((S,w,M,$)=>{const{length:j}=$,[H,N,fe]=w,[F,ye]=H,[_,G]=N,[J,se]=fe,X=J-F,U=X===0?0:Math.max(G/X*.05,.15),Q=ye+pe,ee=[F,Q],Se=se+pe,re=[J,Se],ie=_-F,ae=J-_,be=ae>ie?0:0-(_-F)*.05,Ct=(j-M)*(.015*T),kt=[_+be,G-Ct],Tt=at([ee,kt,re],U),wt=ae>ie?(J-_)*.05:0,Et=(j-M)*(.015*T),Mt=[_+wt,T-Et],$t=at([re,Mt,ee],U);return[...S,[`M ${ee}`,...Tt,...$t,"Z"]]},[]),E=S=>`${S}-${n}`,Z=T*(z/4),ue=Z*.75;return o(Pn,{className:t},o(Rn,{className:qe,preserveAspectRatio:"none",viewBox:yt.join(" ")},o("title",null,"Generated art for the page or post titled",o("i",null,i),", with the content or commit hash ",n," ",a.length>0?[", and the topics: ",a.map(String).join(", ")]:null),o("defs",null,o("filter",{id:E("blur")},o("feOffset",{in:"SourceGraphic",dx:"0",dy:ue,result:"glowOffsetOut"}),o("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:Z,result:"glowBlurOut"}),o("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),o("clipPath",{id:E("blurOverlayClip")},o("rect",{x:"0",width:A,y:0+pe-z,height:T})),o("filter",{id:E("blurOverlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:ue}),o("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:Z})),o("filter",{id:E("blurUnderlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:ue}),o("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:Z}),o("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),o("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),o("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),o("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:Z})),o("g",{id:E("blobs")},xt.map((S,w)=>{const M=S.join(" "),$=w%a.length,j=a[$],H=In(j);return o(Ln,{key:M,className:H,d:M,mask:"url(#softVerticalFade)"})}))),o("g",{transform:[`translate(0, ${T*z})`,`scale(1, ${1-z*2})`].join(" "),filter:`url(#${E("blur")})`},o("use",{href:`#${E("blobs")}`,mask:"url(#horizontalMidFade)"})),o("g",{"clip-path":`url(#${E("blurOverlayClip")})`,filter:`url(#${E("blurOverlay")})`,transform:[`translate(0, ${T*z})`,`scale(1, ${1-z*2})`].join(" ")},o("use",{href:`#${E("blobs")}`,mask:"url(#softVerticalFade)"}))))},ct=()=>o("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},o("defs",null,o("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),o("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),o("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),o("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})))),Fn=()=>o(ve,null,o("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),o("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),o("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),o("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),o("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),o("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),o("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),o("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),o("meta",{name:"application-name",content:"Eyelidlessness"}),o("meta",{name:"msapplication-TileColor",content:"#555555"}),o("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),o("meta",{name:"theme-color",content:"#ffffff"}));Yo();const Gn=te(`
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
    font-size:        ${V(`${s.baseFontSizeRange.minEm}em`,`${s.baseFontSizeRange.fluidVw}vw`,`${s.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${x(["body"],{...s.document,...s.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${me.join(",")} {
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
`),dt=({children:e,...t})=>o(lo,{...t},o("style",{dangerouslySetInnerHTML:{__html:Gn}}),e,o(Fn,null)),$e={height:60,width:338},Xn=m("svg",{display:"inline-block",maxWidth:"100%",width:`${$e.width}px`}),Un=m("use",{nested:{[s.darkMode]:{...s[s.darkMode].siteLogo}},...s.siteLogo,fill:"currentcolor"}),Yn=`0 0 ${$e.width} ${$e.height}`,Vn=()=>o(Xn,{viewBox:Yn},o(Un,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),o("title",null,"Eyelidlessness")),Wn=`
  ${s.siteHeader.columns[0]}
  ${s.siteHeader.columns[1]}
  min(
    ${s.siteHeader.columns[2][0]},
    ${s.siteHeader.columns[2][1]}
  )
  ${s.siteHeader.columns[3]}
  ${s.siteHeader.columns[4]}
`.replace(/\s+/g," "),Kn=m("div",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Wn,padding:"1rem 0"}),Oe="@media (min-width: 0)",qn=m("nav",{nested:{[Oe]:{flexFlow:"row",justifyContent:"space-between"}},alignItems:"center",display:"flex",flexFlow:"column",justifyContent:"center"}),Zn=m("div",{display:"grid",gridColumn:3,justifyContent:"stretch",textAlign:"center"}),Jn=m("div",{nested:{[Oe]:{marginLeft:0,marginRight:"1em"}},margin:"0 auto"}),Qn=m("a",{nested:{[s.darkMode]:{color:"hsl(336deg, 80%, 62%)"}},textDecoration:"none"}),qs=m("ul",{nested:{[Oe]:{marginLeft:"1em",marginRight:0,marginTop:0}},alignItems:"baseline",display:"flex",justifyContent:"center",listStyle:"none",margin:"0.75rem auto 0",padding:0}),Zs=m("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"inline-block",listStyle:"none",margin:"0 0 0 2rem",padding:0}),Js=m("a",{...s.siteHeader.pageLinks,fontSize:"1.125em",fontWeight:300,lineHeight:1,textDecoration:"none",nested:{[s.darkMode]:{...s[s.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),es=()=>o(Kn,{as:"header"},o(Zn,null,o(qn,null,o(Jn,null,o(Qn,{href:"/"},o(Vn,null))),!1))),ts=m(q,{paddingBottom:"4em"}),mt=({as:e="main",children:t})=>o(Ce,null,o(es,null),o(ts,{as:e},t)),os=[,"January","February","March","April","May","June","July","August","September","October","November","December"],ns=m("time",{nested:{[s.darkMode]:{...s[s.darkMode].deemphasize}},...s.deemphasize}),ss=({date:e,...t})=>o(ns,{...t,datetime:e.toISOString()},e.getDate()," ",os[e.getMonth()+1]," ",e.getFullYear()),gt=m("span",{...s.topicTagOuter,backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"}),rs=m(gt,{...s.topicTagLink(s.topicTagIdentifier.className)}),is=m("span",s.topicTagIdentifier()),as=m(is,{...s.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),ht=({link:e=!0,topic:t})=>{const n=jo(t),i=Xe(t);if(n==null||typeof i!="string")throw new Error(`Unexpected topic: ${String(i)}`);const r=e?rs:gt,a=e?{as:"a",href:`/blog/topics/${n}/`}:{as:"span"};return o(r,{className:[s.topicColorClassNames[i]??"",s.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...a},o(as,null,i))},ls=m("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),cs=m("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),ds=({link:e=!0,topics:t})=>o(ls,null,t.map(n=>typeof n=="string"?o(cs,{key:$o(n)},o(ht,{link:e,topic:n})):null)),ms=m(q,{...s.aside,nested:{...s.aside.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),gs=m("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),hs=m("div",{fontSize:"0.889em"}),ps=({as:e="section",title:t,...n})=>o(ms,{as:e},t?o(gs,null,t):null,o(hs,{...n})),us=m("h1",{marginBottom:"0.25rem"}),fs=m(q,{marginBottom:"1rem"}),ys=({children:e,description:{Component:t,raw:n},hash:i,stat:{created:r},title:a,topics:l})=>o(ve,null,o(dt,null,o(_e.title,null,a," | Eyelidlessness"),o(_e.description,null,n)),o(mt,{as:"article"},o(fs,null,o(ct,null),o(lt,{hash:i,title:a,topics:l}),o(us,null,a),o(ss,{date:r,itemprop:"datePublished"}),o(ds,{link:!1,topics:l})),o(ps,null,o(t,null)),e)),Ae=process.cwd(),pt=e=>e.startsWith("/")?Y.resolve(Ae,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):Y.extname(e)==""?Y.resolve(Ae,"./src/pages/",`${e}.tsx`):e;var ge;(function(e){e.ALL="",e.FIRST="--diff-filter=A"})(ge||(ge={}));var he;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(he||(he={}));const Ss="origin",bs="main",ut=e=>{const{branch:t=bs,filter:n=ge.FIRST,format:i,path:r=Ae,remote:a=Ss}=e,{error:l,stdout:c}=co.spawnSync("git",["log",n,`--branches=${t}`,`--format=${i}`,`--remotes=${a}`,"--",r]);if(l)throw l;const d=c.toString().trim();return d===""?null:n===ge.FIRST?d:d.split(`
`)},vs=e=>{const t=pt(e),n=ut({format:he.ISO_DATE,path:t}),i=new Date(n??"");return isNaN(i.getTime())?null:i},xs=e=>{const t=go.readFileSync(e).toString();let n=mo.createHash("sha1");return n.update(t),n.digest("hex")},Cs=e=>{const t=pt(e);return ut({format:he.HASH,path:t})??xs(t)};export{lt as BlogArt,ct as BlogArtDefs,ys as BlogPost,dt as Head,mt as Main,Ce as StylesProvider,f as Topic,ht as TopicTag,xe as __SNOWPACK_ENV__,Cs as getFileHash,vs as getInitialCommitDate,ot as mdx,$n as mdxDescription,m as styled};
