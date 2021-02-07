import{h as o,Fragment as le,toChildArray as je}from"https://cdn.skypack.dev/preact@10.5.10";import Pt from"@mdx-js/mdx";import{mdx as P,MDXProvider as Rt}from"@mdx-js/preact";import{isobject as It,RendererProvider as Lt,createComponent as Bt,emojiRegex as Ht,h as Pe,rehypeAccessibleEmojis as Nt,remarkSlug as _t,remarkSmartypants_1 as Dt}from"./_vendor/index.js";import{transform as zt}from"buble-jsx-only";import Re from"dedent";import Ie from"module";import Ft from"remark-mdx";import Gt from"remark-mdx-to-plain-text";import{createRenderer as Xt,combineRules as Ut}from"fela";import{renderToString as Yt}from"fela-tools";import{processStyleWithPlugins as Vt,KEYFRAME_TYPE as Le,isNestedSelector as Wt,normalizeNestedProperty as Kt,isMediaQuery as qt,generateCombinedMediaQuery as Be,isSupport as Zt,generateDeclarationReference as Jt,isUndefinedValue as Qt,generateCSSSelector as eo,RULE_TYPE as to}from"fela-utils";import{cssifyDeclaration as oo,cssifyObject as no}from"css-in-js-utils";import He from"md5";import Y from"path";import{loadTheme as Ne,getHighlighter as _e}from"shiki";import{commonLangAliases as so,commonLangIds as ro,otherLangIds as io}from"shiki-languages";import{renderers as ao,runTwoSlash as lo}from"shiki-twoslash";import co from"unist-util-visit";import De from"fs";import{Head as mo,seo as ze}from"microsite/head";import go from"child_process";import po from"crypto";const ho=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),x=(e,t)=>[e.join(","),"{",Object.entries(t).reduce((n,[i,r])=>typeof r=="object"&&(i==="nested"||i.includes("&"))?n:`${n}${ho(i)}:${r};`,""),"}",Object.entries(t).map(([n,i])=>{if(typeof i=="object"){if(n==="nested")return Object.entries(i).map(([r,a])=>{const l=e.map(c=>r.replace(/&/g,c));return x(l,a)}).join("");if(n.includes("&")){const r=e.map(a=>n.replace(/&/g,a));return x(r,i)}}return""},[]).join("")].join(""),V=(...e)=>`clamp(${e.join(",")})`,te=e=>e.replace(/\s+/g," ").trim(),Fe="production",uo="production",fo=!0;var ce=Object.freeze({__proto__:null,MODE:Fe,NODE_ENV:uo,SSR:fo});function oe(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function yo(e,t,n,i,r,a){const l=[];return r&&l.push(oe(r).slice(0,16)),i&&l.push(oe(i).slice(0,16)),n&&l.push(oe(n).slice(0,16)),l.push(oe(e).slice(0,16)),l.push(oe(t).slice(0,16)),l.push(a.slice(0,8)),l.join("_")}function So(e,t,n=[""]){let i="";for(const a in e){const l=e[a];i=`${i}${a}{${no(l)}}`}let r="";for(let a=0;a<n.length;a++){const l=n[a];r=`${r}@${l}keyframes ${t}{${i}}`}return r}function bo(){return e=>(e.renderKeyframe=(t,n)=>{const i=t(n,e),r=Vt(e,i,Le,n),a=JSON.stringify(r);if(!e.cache.hasOwnProperty(a)){const l=He(a),c=(e.selectorPrefix||"_")+l.slice(0,8),d=So(r,c,e.keyframePrefixes),g={type:Le,keyframe:d,name:c};e.cache[a]=g,e._emitChange(g)}return e.cache[a].name},e._renderStyleToClassNames=({_className:t,...n},i="",r="",a="")=>{let l=t?` ${t}`:"";for(const c in n){const d=n[c];if(It(d))if(Wt(c))l+=e._renderStyleToClassNames(d,i+Kt(c),r,a);else if(qt(c)){const g=Be(r,c.slice(6).trim());l+=e._renderStyleToClassNames(d,i,g,a)}else if(Zt(c)){const g=Be(a,c.slice(9).trim());l+=e._renderStyleToClassNames(d,i,r,g)}else console.warn(`The object key "${c}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const g=Jt(c,d,i,r,a);if(!e.cache.hasOwnProperty(g)){if(Qt(d)){e.cache[g]={className:""};continue}const p=oo(c,d),u=He(g),b=e.devMode?yo(c,d,i,r,a,u):(e.selectorPrefix||"_")+u.slice(0,8),h=eo(b,i),k={type:to,className:b,selector:h,declaration:p,pseudo:i,media:r,support:a};e.cache[g]=k,e._emitChange(k)}const y=e.cache[g].className;y&&(l+=` ${y}`)}}return l},e)}import.meta.env=ce;const de=Ie.createRequire(import.meta.url),{default:vo}=de("fela-identifier"),{default:xo}=de("fela-plugin-embedded"),{default:Co}=de("fela-plugin-multiple-selectors"),{default:ko}=de("fela-plugin-typescript"),Ge=Fe==="development",Xe=vo(),W=Xt({devMode:Ge,enhancers:[bo(),Xe],plugins:[xo(),Co(),ko()]});!Ge&&import.meta.url.endsWith("/.microsite/staging/src/lib/styles/styles.js")&&W.subscribe(async()=>{Yt(W)});const To=e=>Array.isArray(e)?e:[e],me=({children:e})=>o(Lt,{renderer:W},...To(e)),wo=e=>e,Eo=e=>W.renderRule(wo,e),v=Object.assign(Eo,{global:W.renderStatic.bind(W)}),ke=Symbol("styles"),Mo=e=>typeof e=="function"&&Array.isArray(e[ke]),m=(e,t)=>{const n=Mo(e)?e[ke]:[],r=[...n.map(p=>typeof p=="function"?p:()=>p),()=>t],a=Ut(...r),l=[...n,t],c=typeof e=="string"?e:"div",d=Bt(a,c,Object.keys),g=p=>Array.isArray(p)?p:[p];return Object.assign(({as:p=e,children:u,...b})=>o(d,{...b,as:p},...g(u)),{[ke]:l})},ne=Symbol("DEFAULT_TOPIC"),f={[ne]:ne,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},$o=e=>typeof e=="string"||typeof e=="symbol",Ue=e=>$o(e)&&e in f,Ye=e=>Ue(e)?f[e]:e,Ve=Object.entries(f).reduce((e,t)=>{const[n,i]=t;return typeof n=="string"?{...e,[i]:n}:e},{}),Oo=e=>Ue(e)?e:Ve[e],Ao=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),jo=Object.fromEntries(Object.entries(Ve).map(([e,t])=>typeof t=="string"?[e,Ao(t)]:null).filter(e=>e!=null)),Po=e=>{const t=Ye(e);if(typeof t=="string")return jo[t]},ge=2,Te={minEm:1.0625,fluidVw:1.0625*ge,maxEm:1.325},D="@media (prefers-color-scheme: dark)",Ro=["h1","h2","h3","h4","h5","h6"],Io=["dd","dl","dt","li","ol","ul"],Lo=[...Ro,...Io,"p"],K=Te.minEm/Te.maxEm,R={h1:1.953,h2:1.563,h3:1.25},Bo={h1:{minEm:R.h1*K,fluidVw:R.h1*K*ge,maxEm:R.h1},h2:{minEm:R.h2*K,fluidVw:R.h2*K*ge,maxEm:R.h2},h3:{minEm:R.h3*K,fluidVw:R.h3*K*ge,maxEm:R.h3}},We=75,pe=1.25,Ho=["0.7fr",`${pe}rem`,[`${We}ch`,`calc(100% - ${pe*2}rem)`],`${pe}rem`,"1.2fr"],we=1,No=["0.7fr",`${we}rem`,[`${We*1.1875}ch`,`calc(100% - ${we*2}rem)`],`${we}rem`,"1.2fr"],_o=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],Ke=_o.join(", "),Do=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],zo=Do.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),C={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Fo="hover-inherit-topic-color",Go=[[f[ne],v({"&, &.hover-inherit-topic-color:hover":{color:C.DEFAULT_TOPIC.light},[D]:{"&, &.hover-inherit-topic-color:hover":{color:C.DEFAULT_TOPIC.dark}}})],[f.ABLEISM,v({"&, &.hover-inherit-topic-color:hover":{color:C.ABLEISM}})],[f.ART,v({"&, &.hover-inherit-topic-color:hover":{color:C.ARTS_CRAFTS}})],[f.LEMON,v({"&, &.hover-inherit-topic-color:hover":{color:C.LEMON}})],[f.MENTAL_ILLNESS,v({"&, &.hover-inherit-topic-color:hover":{color:C.MENTAL_ILLNESS}})],[f.NEURODIVERGENCE,v({"&, &.hover-inherit-topic-color:hover":{color:C.NEURODIVERGENCE}})],[f.PHILOSOPHY,v({"&, &.hover-inherit-topic-color:hover":{color:C.PHILOSOPHY}})],[f.POLITICS,v({"&, &.hover-inherit-topic-color:hover":{color:C.POLITICS}})],[f.RACISM,v({"&, &.hover-inherit-topic-color:hover":{color:C.RACISM}})],[f.SEXISM,v({"&, &.hover-inherit-topic-color:hover":{color:C.SEXISM}})],[f.SUBSTANCE_ABUSE,v({"&, &.hover-inherit-topic-color:hover":{color:C.SUBSTANCE_ABUSE}})],[f.TECHNOLOGY,v({"&, &.hover-inherit-topic-color:hover":{color:C.TECHNOLOGY}})],[f.TRANSPHOBIA,v({"&, &.hover-inherit-topic-color:hover":{color:C.TRANSPHOBIA}})]],Xo=Object.fromEntries(Go),s={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Fo,baseFontSizeRange:Te,darkMode:D,aside:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},[D]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(220deg, 10%, 94%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:Ke},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:Ke,nested:{[D]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:Lo,headingRanges:Bo,[D]:{code:{backgroundColor:"hsl(220deg, 10%, 20%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",outline:"none"},prose:{color:"hsl(210deg, 10%, 90%)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 95%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:Ho,mainGridSidePaddingRem:pe,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",outline:"1px solid #eee"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:zo},siteHeader:{columns:No,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},topicColorClassNames:Xo,topicTagIdentifier:Xe(),topicTagInner:{backgroundImage:te(`linear-gradient(
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
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")}},qe=["b","em","h1","h2","h3","i","strong"],he=["h1","h2","h3","h4","h5","h6"],Uo=[...he,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Yo=Array.from(new Set([...he,...Uo,"div","fieldset","form","hgroup","hr","pre"])),Vo=()=>{v.global(`
    ${Yo.join(",")} {
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

    ${x(qe,s.emphasize)}

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

      ${x(qe,s[s.darkMode].emphasize)}
      ${x(["pre"],s[s.darkMode].pre)}
      ${x(["code"],s[s.darkMode].code)}
      ${x(["a"],s[s.darkMode].links)}
      ${x(["aside","small"],s[s.darkMode].deemphasize)}
    }
  `)},Wo=`
  ${s.mainGridColumns[0]}
  ${s.mainGridColumns[1]}
  min(
    ${s.mainGridColumns[2][0]},
    ${s.mainGridColumns[2][1]}
  )
  ${s.mainGridColumns[3]}
  ${s.mainGridColumns[4]}
`.replace(/\s+/g," "),Ze={gridColumn:"1 / -1"},Je=v(Ze),q=m("div",{nested:{[`& > .${Je}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:Wo,...Ze}),Ko=m(q,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Qe=m("div",{alignContent:"flex-start",alignItems:"flex-start",display:"flex",gridColumn:"2 / 5"}),qo=m("div",{flexGrow:0,fontSize:"9em",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),Zo=m("div",{flexGrow:1,padding:"1rem 0.75rem"}),Jo=e=>{const{children:t,ContentContainer:n="div",InnerContainer:i=Qe,OuterContainer:r="div",outerContainerProps:a={},symbol:l,SymbolContainer:c="div"}=e;return o(Ko,{as:r,...a},o(Qe,{as:i},o(qo,{as:c,role:"presentation"},l),o(Zo,{as:n},t)))},Qo=m("pre",{fontSize:"1rem"}),en=m("div",{gridColumn:"2 / 6"}),tn=m(q,{...s.pre,nested:{[s.darkMode]:{...s[s.darkMode].pre},"& code":{backgroundColor:"transparent"},"& pre":{backgroundColor:"transparent",maxWidth:"100%",margin:0,overflow:"auto",outline:"none",padding:["1rem","0"].join(" ")}}}),on=m("div",{...s.codeBlock.symbol,fontSize:V("3.2em","10vw","4.5em"),marginTop:"-0.325em",textIndent:"-0.25em"}),nn=({children:e})=>o(Jo,{ContentContainer:Qo,InnerContainer:en,OuterContainer:tn,symbol:"{",SymbolContainer:on},e),sn=e=>typeof e=="object"&&e!=null,rn=m("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),an=(e,t)=>sn(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof t=="string"&&Ht().test(t),ln=({["aria-label"]:e,children:t,role:n})=>o(rn,{"aria-label":e,role:n},t),et=Y.resolve(process.cwd(),"./syntax-themes"),[cn,dn]=await Promise.all([Ne(Y.resolve(et,"./yi-dark.json")),Ne(Y.resolve(et,"./yi-light.json"))]),mn={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},gn={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},pn=e=>e.trim().split(/\b\W*\b/).reduce((t,n)=>({...t,...gn[n]}),{}),tt=e=>Object.entries(e).reduce((t,[n,i])=>{const r=mn[n];if(i==null||typeof r!="string")return t;const a=r==="fontStyle"?pn(i):{[r]:i};return{...t,...a}},{}),[hn,ot]=await Promise.all([_e({theme:cn}),_e({theme:dn})]),un=new Set([...so,...ro,...io]),fn=new Set(["ts","tsx","typescript"]),yn=(e,t)=>{const[n,i]=[ot,hn].map(r=>r.codeToThemedTokens(e,t).reduce((l,c)=>c.reduce((d,g)=>({...d,...g.explanation?.reduce((y,p)=>({...y,...p.scopes.reduce((u,{themeMatches:b})=>({...u,...b.reduce((h,{name:k,scope:O,settings:L})=>({...h,byName:k==null?h.byName:{...h.byName,[k]:L},byScope:Array.isArray(O)?{...h.byScope,...O.reduce((I,B)=>({...I,[B]:L}),h.byScope)}:typeof O=="string"?{...h.byScope,[O]:L}:h.byScope}),{...u,byName:{...u.byName},byScope:{...u.byScope}})}),y)}),d)}),l),{byName:{},byScope:{}}));return{dark:i,light:n}},Sn=(e,t)=>{const{content:n,explanation:i}=e,{dark:r,light:a}=t,l=i?.reduce((d,g)=>({...d,...g.scopes.reduce((y,{themeMatches:p})=>({...y,...p.reduce((u,{name:b,scope:h})=>{const k=tt({...b==null?{}:a.byName[b],...Array.isArray(h)?h.reduce((B,A)=>({...B,...a.byScope[A]}),{}):typeof h=="string"?a.byScope[h]:{}}),O=tt({...b==null?{}:r.byName[b],...Array.isArray(h)?h.reduce((B,A)=>({...B,...r.byScope[A]}),{}):typeof h=="string"?r.byScope[h]:{}}),L={...u,...k},I=Object.keys(O).length>0?{nested:{[s.darkMode]:O}}:{};return{...L,...I}},{})}),{})}),{})??{},c=Object.keys(l).length>0?m("span",l):"span";return n.replace(/\s+/,"")===""||c==null?o("span",{},n):o(c,{},n)},bn=(e,t)=>Pe(o(me,{},o("pre",{},o("code",{},...e.reduce((n,i,r)=>{const a=i.map(c=>Sn(c,t)),l=r===0?"":`
`;return[...n,l,...a]},[]))))),vn=(e,t={})=>n=>{const{lang:i,value:r,meta:a}=n;!!process?.env?.TWOSLASH_DISABLE||xn(t,n);const c=String(i)==="json5"?"json":i;let d;const g=r.replace(/^\n+|\n+$/g,"");if(!un.has(c))d=ao.plainTextRenderer(g,{});else{const y=e.codeToThemedTokens(g,c),p=yn(g,c);d=bn(y,p)}fn.has(c)&&!a?.includes("ignore"),n.children=[],n.type="html",n.value=d},xn=(e,t)=>{if(t.meta?.includes("twoslash")){const n=lo(t.value,t.lang,e);t.value=n.code,t.lang=n.extension,t.twoslash=n}},Cn=()=>t=>{co(t,"code",vn(ot))};import.meta.env=ce;const kn=Ie.createRequire(import.meta.url),Tn=kn("remark"),wn=({className:e,children:t,...n})=>e==="language-id"?null:e==="code-container"?P(le,n,...je(t)):P("div",{className:e,...n},...je(t)),En=({children:e,...t})=>an(t,e)?P(ln,t,e):P("span",t,e),Ee={components:{div:wn,pre:nn,span:En},rehypePlugins:[Nt],remarkPlugins:[Cn,_t,Dt]},Mn=e=>{const{children:t=P(()=>null,{}),components:n={},rehypePlugins:i=[],remarkPlugins:r=[]}=e,a={...Ee.components,...n},l={mdx:P,MDXProvider:Rt,components:a,props:{}},c=typeof t=="string"?Re(t).trim():t,d=[...Ee.rehypePlugins,...i],g=[...Ee.remarkPlugins,...r],y=Pt.sync(c,{rehypePlugins:d,remarkPlugins:g,skipExport:!0}).trim(),{code:p}=zt(y,{objectAssign:"Object.assign"}),u=Object.keys(l),b=Object.values(l),h=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...u,`${p}

${h}`)(P,...b)},nt=(e,t)=>{const[n,...i]=e;return t.reduce((r,a,l)=>[...r,a,i[l]],[n]).join("")},$n=(e,...t)=>{const n=nt(e,t);return P(me,{},P(Mn,{},n))},On=(e,...t)=>{const n=Re(nt(e,t)).trim();return Tn().use(Ft).use(Gt).processSync(n).contents.trim()},An=1.6180334,Me=An*5,jn=100/Me,Pn=V("6rem",`${jn}vw`,"10rem"),Rn=m(q,{height:Pn,position:"relative",width:"100%",zIndex:-1}),In=m("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Ln=(e=ne)=>s.topicColorClassNames[e],Bn=m("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85}),st=(e,t)=>{const n=new RegExp(`.{${t}}`,"g");return e.match(n)??[]},Hn=e=>parseInt(e,16),Nn=(e,t)=>e.slice().sort(t),_n=([e,t],[n,i])=>{const r=n-e,a=i-t;return{angle:Math.atan2(a,r),length:Math.sqrt(Math.pow(r,2)+Math.pow(a,2))}},rt=(e,t,n,i,r)=>{const a=i?Math.PI:0,l=_n(t,n),c=l.angle+a,d=l.length*r,[g,y]=e,p=g+Math.cos(c)*d,u=y+Math.sin(c)*d;return[p,u]},Dn=(e,t,n,i=.1)=>{const r=n[t-1];if(r==null)throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());const a=n[t-2]??r,l=rt(r,a,e,!1,i),c=r,d=n[t+1]??e,g=rt(e,c,d,!0,i);return[l,g,e]},it=e=>e.reduce(([t,n],[i,r])=>[Math.min(t,r),Math.max(n,r)],[Infinity,-Infinity]),zn=e=>e.join(","),Fn=e=>e.map(zn).join(" "),at=e=>e.length===0,lt=(e,t)=>e.reduce((n,i,r,a)=>{if(r===0)return n;const l=Dn(i,r,a,t);return[...n,`C ${Fn(l)}`]},[]),ct=e=>{const{className:t,hash:n,title:i,topics:r=[]}=e,a=r.length<2?[...r,f[ne]]:r,c=st(n,4).map(S=>st(S,2).map(Hn));if(c.length<8)return null;const d=Nn(c,([S],[w])=>S>w?1:-1);if(at(d))return null;const[g]=d[0],[y]=d[d.length-1],p=y-g,[u,b]=it(d),h=b-u,k=4*Me,O=k/2,L=1.5,I=d.map(([S,w])=>[(S-g+O)/p*100*Me,(w-u)/h*100]);if(at(d))return null;const[B]=I[I.length-1],A=B+k*4,[,bt]=it(I),T=bt*L,vt=[0,0,A,T],xt=[0,T],Ct=[A,T],kt=I.reduce((S,w,M,$)=>{const[j]=$[M-1]??xt,[H]=$[M+1]??Ct,N=[[j,0],w,[H,0]];return[...S,N]},[]).map(S=>{const[w,[M,$],[j,H]]=S,[N,be]=w,F=j-N,ve=$/F,G=6/ve;if(G<1){const se=G*.2*N,X=N-se,U=j+se,Q=X<0?Math.abs(X):U>A?A-U:0,ee=X+Q,xe=U+Q,re=G*.3,ie=M+Q,ae=re*$,Ce=$-ae;return[[ee,be],[ie,Ce],[xe,H]]}return S}),ye=T*.75,z=.15,Tt=kt.reduce((S,w,M,$)=>{const{length:j}=$,[H,N,be]=w,[F,ve]=H,[_,G]=N,[J,se]=be,X=J-F,U=X===0?0:Math.max(G/X*.05,.15),Q=ve+ye,ee=[F,Q],xe=se+ye,re=[J,xe],ie=_-F,ae=J-_,Ce=ae>ie?0:0-(_-F)*.05,wt=(j-M)*(.015*T),Et=[_+Ce,G-wt],Mt=lt([ee,Et,re],U),$t=ae>ie?(J-_)*.05:0,Ot=(j-M)*(.015*T),At=[_+$t,T-Ot],jt=lt([re,At,ee],U);return[...S,[`M ${ee}`,...Mt,...jt,"Z"]]},[]),E=S=>`${S}-${n}`,Z=T*(z/4),Se=Z*.75;return o(Rn,{className:t},o(In,{className:Je,preserveAspectRatio:"none",viewBox:vt.join(" ")},o("title",null,"Generated art for the page or post titled",o("i",null,i),", with the content or commit hash ",n," ",a.length>0?[", and the topics: ",a.map(String).join(", ")]:null),o("defs",null,o("filter",{id:E("blur")},o("feOffset",{in:"SourceGraphic",dx:"0",dy:Se,result:"glowOffsetOut"}),o("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:Z,result:"glowBlurOut"}),o("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),o("clipPath",{id:E("blurOverlayClip")},o("rect",{x:"0",width:A,y:0+ye-z,height:T})),o("filter",{id:E("blurOverlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:Se}),o("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:Z})),o("filter",{id:E("blurUnderlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:Se}),o("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:Z}),o("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),o("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),o("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),o("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:Z})),o("g",{id:E("blobs")},Tt.map((S,w)=>{const M=S.join(" "),$=w%a.length,j=a[$],H=Ln(j);return o(Bn,{key:M,className:H,d:M,mask:"url(#softVerticalFade)"})}))),o("g",{transform:[`translate(0, ${T*z})`,`scale(1, ${1-z*2})`].join(" "),filter:`url(#${E("blur")})`},o("use",{href:`#${E("blobs")}`,mask:"url(#horizontalMidFade)"})),o("g",{"clip-path":`url(#${E("blurOverlayClip")})`,filter:`url(#${E("blurOverlay")})`,transform:[`translate(0, ${T*z})`,`scale(1, ${1-z*2})`].join(" ")},o("use",{href:`#${E("blobs")}`,mask:"url(#softVerticalFade)"}))))},dt=()=>o("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},o("defs",null,o("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),o("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),o("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),o("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})))),Gn=()=>o(le,null,o("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),o("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),o("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),o("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),o("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),o("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),o("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),o("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),o("meta",{name:"application-name",content:"Eyelidlessness"}),o("meta",{name:"msapplication-TileColor",content:"#555555"}),o("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),o("meta",{name:"theme-color",content:"#ffffff"}));Vo();const Xn=te(`
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
`),mt=({children:e,...t})=>o(mo,{...t},o("style",{dangerouslySetInnerHTML:{__html:Xn}}),e,o(Gn,null)),$e={height:60,width:338},Un=m("svg",{display:"inline-block",maxWidth:"100%",width:`${$e.width}px`}),Yn=m("use",{nested:{[s.darkMode]:{...s[s.darkMode].siteLogo}},...s.siteLogo,fill:"currentcolor"}),Vn=`0 0 ${$e.width} ${$e.height}`,Wn=()=>o(Un,{viewBox:Vn},o(Yn,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),o("title",null,"Eyelidlessness")),Kn=`
  ${s.siteHeader.columns[0]}
  ${s.siteHeader.columns[1]}
  min(
    ${s.siteHeader.columns[2][0]},
    ${s.siteHeader.columns[2][1]}
  )
  ${s.siteHeader.columns[3]}
  ${s.siteHeader.columns[4]}
`.replace(/\s+/g," "),qn=m("div",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Kn,padding:"1rem 0"}),Oe="@media (min-width: 0)",Zn=m("nav",{nested:{[Oe]:{flexFlow:"row",justifyContent:"space-between"}},alignItems:"center",display:"flex",flexFlow:"column",justifyContent:"center"}),Jn=m("div",{display:"grid",gridColumn:3,justifyContent:"stretch",textAlign:"center"}),Qn=m("div",{nested:{[Oe]:{marginLeft:0,marginRight:"1em"}},margin:"0 auto"}),es=m("a",{nested:{[s.darkMode]:{color:"hsl(336deg, 80%, 62%)"}},textDecoration:"none"}),qs=m("ul",{nested:{[Oe]:{marginLeft:"1em",marginRight:0,marginTop:0}},alignItems:"baseline",display:"flex",justifyContent:"center",listStyle:"none",margin:"0.75rem auto 0",padding:0}),Zs=m("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"inline-block",listStyle:"none",margin:"0 0 0 2rem",padding:0}),Js=m("a",{...s.siteHeader.pageLinks,fontSize:"1.125em",fontWeight:300,lineHeight:1,textDecoration:"none",nested:{[s.darkMode]:{...s[s.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),ts=()=>o(qn,{as:"header"},o(Jn,null,o(Zn,null,o(Qn,null,o(es,{href:"/"},o(Wn,null))),!1))),os=m(q,{paddingBottom:"4em"}),gt=({as:e="main",children:t})=>o(me,null,o(ts,null),o(os,{as:e},t)),ns=[,"January","February","March","April","May","June","July","August","September","October","November","December"],ss=m("time",{nested:{[s.darkMode]:{...s[s.darkMode].deemphasize}},...s.deemphasize}),rs=({date:e,...t})=>o(ss,{...t,datetime:e.toISOString()},e.getDate()," ",ns[e.getMonth()+1]," ",e.getFullYear()),pt=m("span",{...s.topicTagOuter,backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"}),is=m(pt,{...s.topicTagLink(s.topicTagIdentifier.className)}),as=m("span",s.topicTagIdentifier()),ls=m(as,{...s.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),ht=({link:e=!0,topic:t})=>{const n=Po(t),i=Ye(t);if(n==null||typeof i!="string")throw new Error(`Unexpected topic: ${String(i)}`);const r=e?is:pt,a=e?{as:"a",href:`/blog/topics/${n}/`}:{as:"span"};return o(r,{className:[s.topicColorClassNames[i]??"",s.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...a},o(ls,null,i))},cs=m("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),ds=m("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),ms=({link:e=!0,topics:t})=>o(cs,null,t.map(n=>typeof n=="string"?o(ds,{key:Oo(n)},o(ht,{link:e,topic:n})):null)),Ae=process.cwd(),ut=e=>e.startsWith("/")?Y.resolve(Ae,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):Y.extname(e)==""?Y.resolve(Ae,"./src/pages/",`${e}.tsx`):e;var ue;(function(e){e.ALL="",e.FIRST="--diff-filter=A"})(ue||(ue={}));var fe;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(fe||(fe={}));const gs="origin",ps="main",ft=e=>{const{branch:t=ps,filter:n=ue.FIRST,format:i,path:r=Ae,remote:a=gs}=e,{error:l,stdout:c}=go.spawnSync("git",["log",n,`--branches=${t}`,`--format=${i}`,`--remotes=${a}`,"--",r]);if(l)throw l;const d=c.toString().trim();return d===""?null:n===ue.FIRST?d:d.split(`
`)},yt=e=>{const t=ut(e),n=ft({format:fe.ISO_DATE,path:t}),i=new Date(n??"");return isNaN(i.getTime())?null:i},hs=e=>{const t=De.readFileSync(e).toString();let n=po.createHash("sha1");return n.update(t),n.digest("hex")},St=e=>{const t=ut(e);return ft({format:fe.HASH,path:t})??hs(t)},us=m(q,{...s.aside,nested:{...s.aside.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),fs=m("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),ys=m("div",{fontSize:"0.889em"}),Ss=({as:e="section",title:t,...n})=>o(us,{as:e},t?o(fs,null,t):null,o(ys,{...n}));import.meta.env=ce;const bs=m("h1",{marginBottom:"0.25rem"}),vs=m(q,{marginBottom:"1rem"}),xs=({children:e,description:t,descriptionRaw:n,hash:i,stat:{created:r},title:a,topics:l})=>o(le,null,o(mt,null,o(ze.title,null,a," | Eyelidlessness"),o(ze.description,null,n)),o(gt,{as:"article"},o(vs,null,o(dt,null),o(ct,{hash:i,title:a,topics:l}),o(bs,null,a),o(rs,{date:r,itemprop:"datePublished"}),o(ms,{link:!1,topics:l})),o(Ss,null,t),e)),Cs=e=>{const{description:t,path:n,title:i,topics:r}=e,a=On`${Pe(o(le,null,t))}`,l=St(n),c={created:yt(n)??De.statSync(import.meta.url.replace(/^file:(\/\/)?/,"")).ctime};return{description:t,descriptionRaw:a,hash:l,path:n,stat:c,title:i,topics:r}};export{ct as BlogArt,dt as BlogArtDefs,xs as BlogPost,mt as Head,gt as Main,me as StylesProvider,f as Topic,ht as TopicTag,ce as __SNOWPACK_ENV__,Cs as getBlogPostStaticProps,St as getFileHash,yt as getInitialCommitDate,$n as mdx,m as styled};
