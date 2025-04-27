import Je from"unist-util-visit";import{h as o,Fragment as z,toChildArray as Rt}from"https://cdn.skypack.dev/preact@10.5.10";import Ho from"@mdx-js/mdx";import{mdx as $e,MDXProvider as _o}from"@mdx-js/preact";import{isobject as Fo,createComponent as Uo,RendererProvider as Yo,Readonly as zo,Object$1 as Go,Optional as g,Unknown as Xo,Literal as Wo,String as d,Partial as le,Union as At,Boolean as Pt,Array$1 as L,Integer as Vo,Number$1 as Ko,emojiRegex as qo,h as Ot,rehypeAccessibleEmojis as Jo,remarkSlug as Qo,remarkSmartypants_1 as Zo,hsluv_1 as K}from"./_vendor/index.js";import{transform as en}from"buble-jsx-only";import It from"dedent";import Mt from"module";import tn from"remark-mdx";import on from"remark-mdx-to-plain-text";import ue from"path";import{loadTheme as jt,getHighlighter as Lt}from"shiki";import{BUNDLED_LANGUAGES as nn}from"shiki-languages";import{renderers as rn}from"shiki-twoslash";import Qe from"fs";import sn from"node-object-hash";import"fela-tools";import"sharp";import an from"child_process";import ln from"crypto";import{Head as Dt,seo as Ne}from"microsite/head";import{createRenderer as cn}from"fela";import{processStyleWithPlugins as dn,KEYFRAME_TYPE as Bt,isNestedSelector as mn,normalizeNestedProperty as pn,isMediaQuery as un,generateCombinedMediaQuery as $t,isSupport as gn,generateDeclarationReference as hn,isUndefinedValue as fn,generateCSSSelector as bn,RULE_TYPE as yn}from"fela-utils";import{cssifyDeclaration as Sn,cssifyObject as vn}from"css-in-js-utils";import Nt from"md5";let Ze=new Set;const En=()=>{Ze=new Set},kn=()=>e=>{Je(e,"abbr",t=>{const{abbr:n}=t;Ze.has(n)&&(delete t.abbr,delete t.children,delete t.data,delete t.reference,Object.assign(t,{type:"text",value:n})),Ze.add(n)}),Je(e,"text",t=>{t.value.includes("\u200B")&&Object.assign(t,{value:t.value.replace(/\u200b/gu,"")})})},Ht="production",Tn="production",wn=!0;var et=Object.freeze({__proto__:null,MODE:Ht,NODE_ENV:Tn,SSR:wn});const Cn=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),x=(e,t)=>[e.join(","),"{",Object.entries(t).reduce((n,[r,i])=>typeof i=="object"&&(r==="nested"||r.includes("&"))?n:`${n}${Cn(r)}:${i};`,""),"}",Object.entries(t).map(([n,r])=>{if(typeof r=="object"){if(n==="nested")return Object.entries(r).map(([i,s])=>{const l=e.map(m=>i.replace(/&/g,m));return x(l,s)}).join("");if(n.includes("&")){const i=e.map(s=>n.replace(/&/g,s));return x(i,r)}}return""},[]).join("")].join(""),ne=(...e)=>`clamp(${e.join(",")})`,ve=e=>e.replace(/\s+/g," ").trim(),He=e=>e;function Oe(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function xn(e,t,n,r,i,s){const l=[];return i&&l.push(Oe(i).slice(0,16)),r&&l.push(Oe(r).slice(0,16)),n&&l.push(Oe(n).slice(0,16)),l.push(Oe(e).slice(0,16)),l.push(Oe(t).slice(0,16)),l.push(s.slice(0,8)),l.join("_")}function Rn(e,t,n=[""]){let r="";for(const s in e){const l=e[s];r=`${r}${s}{${vn(l)}}`}let i="";for(let s=0;s<n.length;s++){const l=n[s];i=`${i}@${l}keyframes ${t}{${r}}`}return i}function An(){return e=>(e.renderKeyframe=(t,n)=>{const r=t(n,e),i=dn(e,r,Bt,n),s=JSON.stringify(i);if(!e.cache.hasOwnProperty(s)){const l=Nt(s),m=(e.selectorPrefix||"_")+l.slice(0,8),p=Rn(i,m,e.keyframePrefixes),u={type:Bt,keyframe:p,name:m};e.cache[s]=u,e._emitChange(u)}return e.cache[s].name},e._renderStyleToClassNames=({_className:t,...n},r="",i="",s="")=>{let l=t?` ${t}`:"";for(const m in n){const p=n[m];if(Fo(p))if(mn(m))l+=e._renderStyleToClassNames(p,r+pn(m),i,s);else if(un(m)){const u=$t(i,m.slice(6).trim());l+=e._renderStyleToClassNames(p,r,u,s)}else if(gn(m)){const u=$t(s,m.slice(9).trim());l+=e._renderStyleToClassNames(p,r,i,u)}else console.warn(`The object key "${m}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const u=hn(m,p,r,i,s);if(!e.cache.hasOwnProperty(u)){if(fn(p)){e.cache[u]={className:""};continue}const h=Sn(m,p),y=Nt(u),v=e.devMode?xn(m,p,r,i,s,y):(e.selectorPrefix||"_")+y.slice(0,8),f=bn(v,r),k={type:yn,className:v,selector:f,declaration:h,pseudo:r,media:i,support:s};e.cache[u]=k,e._emitChange(k)}const b=e.cache[u].className;b&&(l+=` ${b}`)}}return l},e)}import.meta.env=et;const _e=Mt.createRequire(import.meta.url),{default:Pn}=_e("fela-identifier"),{default:On}=_e("fela-plugin-embedded"),{default:In}=_e("fela-plugin-multiple-selectors"),{default:Mn}=_e("fela-plugin-typescript"),jn=Ht==="development",Ln=()=>{const e=Pn(),t=cn({devMode:jn,enhancers:[An(),e],plugins:[On(),In(),Mn()]});return{identifier:e,renderer:t}},{identifier:Fe,renderer:ce}=Ln(),Dn=e=>Array.isArray(e)?e:[e],Bn=e=>({children:t})=>o(Yo,{renderer:e},...Dn(t)),ge=Bn(ce),$n=e=>ce.renderRule(He,e),Ue=Object.assign($n,{global:ce.renderStatic.bind(ce)}),c=(e,t)=>{const n=typeof t=="function"?t:()=>t;return Uo(n,e,Object.keys)},D=(e,t)=>zo(Go(e,t)),W=()=>g(Xo()),_t="FRESH@0.1.0",Nn=D({format:Wo(_t,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:g(d({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),Hn=le(D({label:d({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:d({description:"Profession type or 'character class'."}),image:d({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:d({description:"A short description or summary of yourself as a candidate."}),quote:d({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),_n=le(D({willing:At([Pt(),d()],{description:"Willingness to relocate."}),destinations:L(d({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),Fn=le(D({travel:Vo({description:"Percentage of time willing to travel (0 to 100)."}),authorization:d({description:"Work authorization: citizen, work visa, etc."}),commitment:L(d({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:Pt({description:"Open to remote employment opportunities."}),relocation:_n},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),Un=L(le(D({label:d({description:"A label for this contact information."}),category:d({description:"Type of contact information: email, phone, url, postal, or IM."}),value:d({description:"Phone number, email address, website, etc."})}))),Yn=le(D({email:d({description:"Primary contact email.",format:"email"}),phone:d({description:"Primary phone number."}),website:d({description:"Website, blog, or home page.",format:"uri"}),other:Un},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),zn=le(D({address:d({description:"Your full postal address."}),code:d({description:"Postal or other official routing code."}),city:d({description:"Your home city."}),country:d({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:d({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),Gn=L(D({employer:d({description:"Employer name."}),position:g(d({description:"Your position or formal job title."})),url:g(d({description:"Employer website.",format:"uri"})),start:g(d({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:g(d({description:"A summary of your achievements and responsibilities under this employer."})),highlights:g(L(d({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(d({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(L(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),Xn=le(D({summary:d({description:"Summary of overall employment."}),history:Gn},{description:"The 'employment' section describes the candidate's formal employment history."})),Wn=L(D({category:d({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:g(d({type:"string",description:"Friendly media name."})),url:g(d({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),Vn=L(D({title:d({description:"Project name or code-name."}),category:g(d({description:"Project type: open-source, private, side project, etc."})),description:g(d({description:"Project description or summary."})),summary:g(d({description:"A summary of your achievements and responsibilities on the project."})),role:g(d({description:"Your role on the project: Contributor, Creator, etc."})),url:g(d({description:"Project URL.",format:"uri"})),media:g(Wn),repo:g(d({description:"Repo URL.",format:"uri"})),start:g(d({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:g(L(d({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:g(d({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(L(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),Kn=le(D({sets:L(D({name:d({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:g(d({description:"Level of mastery of the skill."})),skills:L(d({description:"Title or ID of a skill from the skills list."}))})),list:L(D({name:d({description:"The name or title of the skill."}),level:g(d({description:"A freeform description of your level of mastery with the skill."})),summary:g(d({description:"A short summary of your experience with this skill."})),years:g(At([d(),Ko()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),qn=L(D({title:g(d({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:d({description:"College or school name."}),area:g(d({description:"e.g. Arts"})),studyType:g(d({description:"e.g. Bachelor"})),start:g(d({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:g(d({description:"Grade or GPA."})),curriculum:g(L(d({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:g(d({description:"Website or URL of the institution or school.",format:"uri"})),summary:g(d({description:"A short summary of this education experience."})),keywords:g(L(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:g(L(d({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(d({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),Jn=D({summary:g(d({description:"Summary of overall education."})),level:d({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:g(d({description:"Your degree, if any (BSCS, BA, etc.)."})),history:g(qn)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),Qn=L(D({network:d({description:"The name of the social network, such as Facebook or GitHub."}),user:d({description:"Your username or handle on the social network."}),url:d({description:"URL of your profile page on this network.",format:"uri"}),label:g(d({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."}),yl=D({name:d({description:"The candidate's name as it should appear on the resume."}),meta:Nn,info:g(Hn),disposition:g(Fn),contact:g(Yn),location:g(zn),employment:g(Xn),projects:g(Vn),skills:g(Kn),education:g(Jn),social:g(Qn),services:W(),recognition:W(),writing:W(),reading:W(),speaking:W(),governance:W(),languages:W(),samples:W(),references:W(),testimonials:W(),interests:W(),extracurricular:W(),affiliation:W()},{title:"FRESH Resume Schema"});var T;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(T||(T={}));var E;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator",e.DEVELOPER="Developer"})(E||(E={}));const Zn=Date.now(),Ye=e=>e==null?Zn:new Date(e).getTime(),er=e=>e.slice().sort((t,n)=>{const r=Ye(t.end),i=Ye(n.end);if(r>i)return-1;if(i>r)return 1;const s=Ye(t.start),l=Ye(n.start);return s>l?-1:l>s?1:0}),tr=e=>er(e),or=tr([{title:"@getodk/xforms-engine",category:T.OPEN_SOURCE,description:`
      Client-agnostic, reactive runtime for
      [ODK XForms](https://getodk.github.io/xforms-spec/)
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xforms-engine",role:E.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/xpath",category:T.OPEN_SOURCE,description:`
      Extensible XPath 1.0 interpreter, supporting
      [ODK XForms](https://getodk.github.io/xforms-spec/#xpath-functions)
      extensions, arbitrary DOM implementations
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xpath",role:E.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/tree-sitter-xpath",category:T.OPEN_SOURCE,description:`
      [tree-sitter](https://tree-sitter.github.io/tree-sitter/) parser for
      XPath 1.0 syntax
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/tree-sitter-xpath",role:E.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/web-forms",category:T.OPEN_SOURCE,description:`
      [ODK Web Forms](https://github.com/getodk/web-forms) UI client
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/web-forms",role:E.CONTRIBUTOR,start:"2024-03",end:"2025-04"},{title:"Astro",category:T.OPEN_SOURCE,description:`
      "Build faster websites with less client-side Javascript"
    `,summary:`
      Collaborate with core contributors to add support for rendering
      [SolidJS](https://www.solidjs.com/) components.
    `,repo:"https://github.com/snowpackjs/astro",role:E.CONTRIBUTOR,start:"2021-07",end:"2021-07"},{title:"Enketo",category:T.OPEN_SOURCE,description:`
      "Web forms evolved. Deploy and conduct surveys that work without a
      connection, on any device."
    `,summary:`
      Ongoing maintenance, developer experience improvements & helping
      determine the future direction of Enketo projects.
    `,repo:"https://github.com/enketo",role:E.DEVELOPER,start:"2021-04",end:"2023-10"},{title:"Microsite",category:T.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:E.CONTRIBUTOR,start:"2021-01",end:"2021-05"},{title:"HNDarkMode",category:T.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:E.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:T.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:E.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:T.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:E.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:T.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:E.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:T.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:E.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:T.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:E.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:T.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:E.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:T.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:E.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:T.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:E.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:T.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:E.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:T.OPEN_SOURCE,description:`
      "It's a TDD/BDD framework for [Clojure][1] and [Clojurescript][2],
      based on [RSpec][3]."

      [1]: https://clojure.org/
      [2]: https://clojurescript.org/
      [3]: https://rspec.info/
    `,summary:`
      Introduced support for [\`.cljc\`][1] modules. Improved reliability
      of determining whether \`.cljc\` tests are being run in Clojure or
      ClojureScript. Fixed a bug when testing whether a value is a given
      throwable type.

      [1]: https://github.com/clojure/clojurescript/wiki/Using-cljc
    `,repo:"https://github.com/slagyr/speclj",role:E.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:T.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:E.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:T.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:E.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:T.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:E.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:T.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:E.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:T.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:E.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:T.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:E.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),nr=e=>e,rr=e=>e,ir=rr([{employer:"ODK",position:"Senior Software Engineer",start:"2021-03",end:"2025-04",summary:`
      ODK builds data collection software, used globally across a wide variety
      of high-social impact campaigns, in public health and beyond.
    `,highlights:[`
        Conceived and created ODK Web Forms\u2014ODK's greenfield web-based data
        collection software\u2014which now complements Collect, ODK's long-standing
        flagship data collection product for Android devices.
      `,`
        Spearheaded initial prototyping, design & architecture of Web Forms,
        supporting evaluation of long-term viability for the project by ODK
        leadership.
      `,`
        Primarily responsible for design & implementation of Web Forms XPath
        functionality. Achieved full W3C XPath 1.0 standards compliance;
        extension of XPath language semantics to support additional data types;
        development of a broad library of custom functions supporting the
        underlying ODK XForms specification; adapted interpreter to provide XPath
        evaluation semantics in arbitrary runtime contexts, with a small &
        flexible adapter API.
      `,`
        Primarily responsible for design & implementation of the Web Forms XForms
        Engine. Implemented the engine's core data model and computational
        graph, according to ODK XForms spec; developed the engine's fundamental
        abstractions for computation as an internal reactive graph; conceived and
        matured the engine's external interfaces, providing simple, cohesive & client-agnostic access to the engine's underlying ODK XForms semantics.`,`
        Directed design & architecture of Web forms to support long-term vision
        for the project\u2014anticipating unification of ODK's data collection
        software across all supported platforms, and expanding functionality well
        beyond the project's current, core data capture feature set.
      `]},{employer:"Treez",position:"Senior Software Engineer",start:"2018-12",end:"2020-09",summary:`
      Treez provides a full seed-to-sale catalogue of tools for
      inventory & process management, regulatory reporting, B2B
      sales, and point of sale for the legal cannabis market.
    `,highlights:[`
        Created and maintained a set of libraries designed for rapid
        development of REST API services, providing simple,
        declarative API boundaries with runtime & static type safety,
        automatically generated documentation, and a clear separation
        of concerns between those boundaries and a service's business
        logic. These libraries had been used in production for one
        successful service, adopted by another team for a greenfield
        service, and ports of all other Treez API services planned,
        with no significant maintenance requests.
      `,`
        Expanded the API translation layer built at Mister Kraken to
        support the regulatory reporting APIs used in markets served by
        Treez in CA, MI, and beyond. This also allowed the original
        Mister Kraken product to expand integration into those markets,
        and Treez to expand its operations from point of sale to a full
        seed-to-sale suite.
      `,`
        Led and maintained a robust fault tolerance service layer
        between Treez end-user products and regulator reporting services.
        This ensured that frequent and widespread errors in the
        regulatory agencies' APIs did not result in a loss of compliance
        for Treez customers.
      `,`
        Promoted a team culture shift to embrace automated data
        correction with a historical record, and built a standard set
        of tools for data correction operations. These tools were used
        successfully for two major incidents, ensuring compliance was
        maintained with an auditable proof of operations log.
      `]},{employer:"Mister Kraken",position:"Senior Software Engineer",start:"2017-04",end:"2018-12",summary:`
      Mister Kraken provided a rich suite of inventory and process
      management tools for the legal cannabis market. The Reup and
      Mister Kraken teams joined forces and products in 2017.

      **Mister Kraken was acquired by Treez in late 2018.**
    `,highlights:[`
        Led design and development of an API translation layer which
        ensured a zero downtime transition for regulatory compliance
        when the WSLCB abruptly selected a new vendor's
        incompatible reporting APIs. This ensured minimal changes in
        the original Mister Kraken codebase while also preparing the
        product for expansion into other markets where other vendor
        APIs were common.
      `,`
        Promoted a team culture shift in development and collaboration
        to embrace automated testing, type safety, tool-based quality
        assurance, CI & automated review tools, thorough manual review
        by team members, and collaborative design & planning processes.
        This significantly improved the team's ability to deliver and
        maintain quality and value at a faster pace.
      `,`
        Adapted Reup's frontend web app to integrate with Mister
        Kraken's existing B2B sales platform. From time of release,
        through the Treez acquisition, to my departure, the app
        remained in active use with no significant change requests.
      `]},{employer:"Reup",position:"Senior Software Engineer",start:"2015-11",end:"2018-12",summary:`
      Reup was a startup in the legal recreational cannabis market,
      providing a B2B marketplace for retailers and manufacturers
      to discover and order cannabis products and supplies.

      **Reup was acquired by Treez in late 2018.**
    `,highlights:[`
        Shaped and refined product direction as the second engineer
        and fourth employee, sharing leadership on market & user
        research to inform core user stories and product decisions.
      `,`
        Led frontend architecture and spearheaded development of
        Reup's web app.
      `,`
        Shared leadership in defining core abstractions in the
        product's backend API layer to improve development safety
        and velocity.
      `,`
        Took ownership of refining and adapting UI & UX design as
        product requirements changed and use case complexities grew.
      `]},{employer:"ClipCard",position:"Senior Software Engineer",start:"2013-04",end:"2015-08",summary:`
      ClipCard was a set of apps and services which let users find
      files, notes and more across a wide variety of consumer and
      business cloud services by indexing those resources in a
      common format.
    `,highlights:[`
        Led design and development an ETL framework used by all of
        ClipCard's API integrations, providing simple, generalized
        interfaces to accelerate development of service API
        authorization, backpressure, fault tolerance and
        extract/integration patterns.
      `,`
        Contributed to 12 of ClipCard's API integrations, leading
        development on integrations with Dropbox, Evernote, GitHub
        and Trello.
      `,`
        Led frontend architecture and development of ClipCard's
        web app, and provided mentorship for the team member who
        eventually replaced me in that role as I transitioned to
        to lead API integration efforts.
      `,`
        Organized a hackathon which produced 8 API integration
        prototypes, ultimately leading to the company's pivot
        from enterprise services to focus on cloud services and
        consumer adoption.
      `,`
        Designed and developed ClipCard for Mac.
      `]}]),sr=ir;var S;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(S||(S={}));var Ee;(function(e){e.LANGUAGES_PLATFORMS="Languages",e.SERVICES_DISTRIBUTED_SYSTEMS="Services",e.USER_INTERFACE_EXPERIENCE="UI/UX",e.DOMAIN_SPECIFIC_LANGUAGES="DSL\u200Bs"})(Ee||(Ee={}));const tt={[Ee.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:S.EXPERT},{name:"OpenAPI & JSON Schema",level:S.EXPERT},{name:"Django REST framework",level:S.ADVANCED},{name:"Fault tolerance",level:S.ADVANCED},{name:"Microservice architecture",level:S.ADVANCED},{name:"Apache Storm",level:S.INTERMEDIATE},{name:"Redis",level:S.BASIC}],[Ee.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:S.EXPERT},{name:"DOM & Web APIs",level:S.EXPERT},{name:"Web performance",level:S.ADVANCED},{name:"UI & UX design",level:S.ADVANCED},{name:"A11y",level:S.INTERMEDIATE}],[Ee.DOMAIN_SPECIFIC_LANGUAGES]:[{name:"Interpreter runtime",level:S.ADVANCED},{name:"Interpreter optimization",level:S.INTERMEDIATE},{name:"Domain-specific tooling",level:S.INTERMEDIATE}],[Ee.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:S.EXPERT},{name:"Clojure & ClojureScript",level:S.EXPERT},{name:"XPath",level:S.EXPERT},{name:"ODK XForms",level:S.EXPERT},{name:"HTML & CSS",level:S.EXPERT},{name:"SQL (PostgreSQL)",level:S.ADVANCED},{name:"Python",level:S.INTERMEDIATE},{name:"Swift",level:S.BASIC},{name:"Java",level:S.BASIC}]},ar={list:Object.values(tt).flatMap(He),merged:tt,sets:Object.entries(tt).map(([e,t])=>({name:e,skills:t.map(({name:n})=>n)}))},lr=nr({name:"Trevor Schmidt",meta:{format:_t,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:sr},info:{class:"Software Engineer",brief:It(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:or,skills:ar,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),ze=Symbol("DEFAULT_TOPIC"),M={[ze]:ze,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},cr=e=>typeof e=="string"||typeof e=="symbol",Ft=e=>cr(e)&&e in M,ot=e=>Ft(e)?M[e]:e,Ut=Object.entries(M).reduce((e,t)=>{const[n,r]=t;return typeof n=="string"?{...e,[r]:n}:e},{}),dr=e=>Ft(e)?e:Ut[e],mr=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),pr=Object.fromEntries(Object.entries(Ut).map(([e,t])=>typeof t=="string"?[e,mr(t)]:null).filter(e=>e!=null)),ur=e=>{const t=ot(e);if(typeof t=="string")return pr[t]},Ge=2,nt={minEm:1.0625,fluidVw:1.0625*Ge,maxEm:1.25},w="@media (prefers-color-scheme: dark)",gr=["h1","h2","h3","h4","h5","h6"],hr=["dd","dl","dt","li","ol","ul"],fr=[...gr,...hr,"p"],ke=nt.minEm/nt.maxEm,re={h1:1.953,h2:1.563,h3:1.25},br={h1:{minEm:re.h1*ke,fluidVw:re.h1*ke*Ge,maxEm:re.h1},h2:{minEm:re.h2*ke,fluidVw:re.h2*ke*Ge,maxEm:re.h2},h3:{minEm:re.h3*ke,fluidVw:re.h3*ke*Ge,maxEm:re.h3}},Yt=75,Xe=1.25,yr=["0.7fr",`${Xe}rem`,[`${Yt}ch`,`calc(100% - ${Xe*2}rem)`],`${Xe}rem`,"1.2fr"],rt=1,Sr=["0.7fr",`${rt}rem`,[`${Yt*1.1875}ch`,`calc(100% - ${rt*2}rem)`],`${rt}rem`,"1.2fr"],vr=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],it=vr.join(", "),Er=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],kr=Er.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),G={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Tr="hover-inherit-topic-color",wr={[M[ze]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.DEFAULT_TOPIC.light},[w]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.DEFAULT_TOPIC.dark}}}}},[M.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.ABLEISM}}},[M.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.ARTS_CRAFTS}}},[M.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.LEMON}}},[M.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.MENTAL_ILLNESS}}},[M.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.NEURODIVERGENCE}}},[M.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.PHILOSOPHY}}},[M.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.POLITICS}}},[M.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.RACISM}}},[M.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.SEXISM}}},[M.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.SUBSTANCE_ABUSE}}},[M.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.TECHNOLOGY}}},[M.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.TRANSPHOBIA}}}},zt=Fe(),a={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Tr,baseFontSizeRange:nt,darkMode:w,abbreviation:{"--abbreviation-highlight":"hsl(64deg 100% 50% / 0.25)",backgroundImage:`linear-gradient(${["to top","var(--abbreviation-highlight)","var(--abbreviation-highlight) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[w]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[w]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:zt,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[w]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${zt}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[w]:{color:"hsl(212deg, 10%, 90%)"}}},[w]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[w]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[w]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:it},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:it,nested:{[w]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:fr,gitHubLogo:{fill:"#171515",nested:{[w]:{fill:"#fff"}}},headingLineHeight:.9375,headingRanges:br,[w]:{abbreviation:{"--abbreviation-highlight":"hsl(336deg 85% 25%)"},aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg 60% 4%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(190deg 20% 97%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 85%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:yr,mainGridSidePaddingRem:Xe,monospaceFont:it,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[w]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{color:"hsl(210deg 12% 5% / 95%)",fontFamily:kr},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[w]:{backgroundColor:"hsl(336deg, 100%, 7%)"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[w]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"hsl(47deg, 58%, 98%)",nested:{[w]:{backgroundColor:"hsl(41deg, 100%, 8%)"}}},separator:{borderBottom:"1px solid hsl(17deg, 28%, 96%)",nested:{[w]:{borderColor:"hsl(17deg, 70%, 17%)"}}}},skillLevel:{[S.BASIC]:{backgroundColor:"hsl(207deg, 25%, 83%)",nested:{[w]:{backgroundColor:"hsl(207deg, 15%, 43%)"}}},[S.INTERMEDIATE]:{backgroundColor:"hsl(188deg, 53%, 74%)",nested:{[w]:{backgroundColor:"hsl(188deg, 53%, 34%)"}}},[S.ADVANCED]:{backgroundColor:"hsl(188deg, 70%, 59%)",nested:{[w]:{backgroundColor:"hsl(188deg, 80%, 39%)"}}},[S.EXPERT]:{backgroundColor:"hsl(152deg, 100%, 39%)",nested:{[w]:{backgroundColor:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:Sr,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[w]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[w]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:wr,topicTagIdentifier:Fe(),topicTagInner:{backgroundImage:ve(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[w]:{backgroundImage:ve(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:ve(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[w]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:ve(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[w]:{color:"hsl(194deg, 8%, 50%)"}}}}}},st=["b","em","h1","h2","h3","i","strong"],We=["h1","h2","h3","h4","h5","h6"],Cr=[...We,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],xr=Array.from(new Set([...We,...Cr,"div","fieldset","form","hgroup","hr","pre"])),Rr=ve(`
  @font-face {
    font-display: fallback;
    font-family:  Minipax;
    font-style:   normal;
    font-weight:  normal;

    src:
      local('__Minipax'),
      url('/fonts/Minipax/regular.woff2') format('woff2');
  }

  html, body {
    margin:     0;
    max-width:  100%;
    overflow-x: hidden;
    padding:    0;
  }

  html {
    box-sizing:       border-box;
    font-size:        ${ne(`${a.baseFontSizeRange.minEm}em`,`${a.baseFontSizeRange.fluidVw}vw`,`${a.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${x(["html","body"],{...a.document})}

  ${x(["body"],{...a.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${We.join(",")} {
    font-family:             Minipax, Georgia, serif;
    font-smooth:             always;
    font-weight:             normal;
    line-height:             ${a.headingLineHeight};
    margin-bottom:           1rem;
    margin-top:              1rem;
    padding-left:            1rem;
    text-indent:             -1rem;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`),Ar=()=>{Ue.global(ve(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${xr.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${We.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${x(st,a.emphasize)}

      h1 {
        font-size: ${ne(`${a.headingRanges.h1.minEm}em`,`${a.headingRanges.h1.fluidVw}vw`,`${a.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${ne(`${a.headingRanges.h2.minEm}em`,`${a.headingRanges.h2.fluidVw}vw`,`${a.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${ne(`${a.headingRanges.h3.minEm}em`,`${a.headingRanges.h3.fluidVw}vw`,`${a.headingRanges.h3.maxEm}em`)};
      }

      dl {
        padding-inline-start: 1em;
      }

      dl, dt, dd {
        font-style: normal;
        margin:     0;
        padding:    0;
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

      hr {
        border: 0;
        margin: 1.5em 0;
      }

      ${x(["hr:after"],{...a.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${x(["pre"],a.pre)}

      ${x(["code"],{...a.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

      pre code {
        background-color: transparent;
        display:          block;
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

      ${x(["a"],{...a.links,fontWeight:"bolder"})}

      ${x(["abbr"],{...a.abbreviation,textDecoration:"none"})}

      ${x(["aside","small"],a.deemphasize)}

      ${x(["aside"],{...a.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem",nested:{"& a":{fontWeight:600}}})}

      ${st.map(e=>`aside ${e}`).join(", ")} {
        color: inherit;
      }

      img, svg {
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

      ${a.darkMode} {
        ${x(["html","body"],{...a[a.darkMode].document})}

        ${x(["body"],{...a[a.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${x(st,a[a.darkMode].emphasize)}
        ${x(["abbr"],a[a.darkMode].abbreviation)}
        ${x(["pre"],a[a.darkMode].pre)}
        ${x(["code"],a[a.darkMode].code)}
        ${x(["a"],a[a.darkMode].links)}
        ${x(["aside","small"],a[a.darkMode].deemphasize)}
        ${x(["aside"],a[a.darkMode].aside)}
        ${x(["hr:after"],a[a.darkMode].separator)}
      }
    `))},Pr=`
  ${a.mainGridColumns[0]}
  ${a.mainGridColumns[1]}
  min(
    ${a.mainGridColumns[2][0]},
    ${a.mainGridColumns[2][1]}
  )
  ${a.mainGridColumns[3]}
  ${a.mainGridColumns[4]}
`.replace(/\s+/g," "),Gt={gridColumn:"1 / -1"},Xt=Ue(Gt),B=c("div",{nested:{[`& > .${Xt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:Pr,...Gt}),Or=({children:e,shadow:t,...n})=>o(B,{...n},e),Wt=([e,t,n])=>`rgba(${[e,t,n,0].join(",")})`,Vt=["12rem 100%","auto"],Kt=Vt.join(", "),Ir=Vt.map(e=>e.replace("100%","100.1%")).join(", "),Mr=ce.renderKeyframe(()=>({"0%":{backgroundSize:Kt},"100%":{backgroundSize:Ir}}),{}),qt="5px",Jt=(e,t)=>e!=null&&t!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${t.join(",")})`,`rgba(${t.join(",")}) calc(11rem + ${qt})`,`${Wt(t)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${Wt(e)} ${qt}`].join(", ")})`].join(", ")}:null,jr=e=>{if(e!=null){const{darkMask:t,darkScroll:n,lightMask:r,lightScroll:i}=e;return{dark:Jt(n,t),light:Jt(i,r)}}return{dark:null,light:null}},Qt=c(Or,({shadow:e})=>{const{dark:t,light:n}=jr(e),r=t==null?null:{[a.darkMode]:t};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:Kt,paddingRight:a.mainGridSidePaddingRem,overflowX:"auto",nested:{...r,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:Mr,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),Lr=c(B,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Zt=c("div",{paddingLeft:"1rem"}),Dr=c("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),Br=c("div",{flexGrow:1,padding:"1rem 0.75rem"}),at="div",$r={ContentContainer:at,InnerContainer:Zt,OuterContainer:at,SymbolContainer:at},eo=e=>{const{children:t,ContentContainer:n,InnerContainer:r,OuterContainer:i,outerContainerProps:s,symbol:l,SymbolContainer:m}={...$r,...e};return o(Lr,{as:i,...s},o(Dr,{as:m,role:"presentation"},l),o(Zt,{as:r},o(Br,{as:n},t)))},Nr=c("pre",{fontSize:"1rem"}),Hr=c(Qt,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[a.darkMode]:{}}}),_r=e=>o(Hr,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),Fr=c(B,{...a.pre,nested:{[a.darkMode]:{...a[a.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),Ur=c("div",{...a.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Yr=({children:e})=>o(eo,{ContentContainer:Nr,InnerContainer:_r,OuterContainer:Fr,symbol:"{",SymbolContainer:Ur},e),zr=e=>e.map((t,n)=>n),lt=(e,t)=>zr(e).sort((n,r)=>{const i=t(e[n],e[r]);return i===0?n===r?0:n>r?1:-1:i}).map(n=>e[n]),Gr=e=>typeof e=="object"&&e!=null,Xr=c("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),Wr=(e,t)=>Gr(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof t=="string"&&qo().test(t),Vr=({["aria-label"]:e,children:t,role:n})=>o(Xr,{"aria-label":e,role:n},t),Kr={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},qr={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",ODK:"Open Data Kit (https://getodk.org/)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},Jr={...Kr,...qr},to=ue.resolve(process.cwd(),"./syntax-themes"),[Qr,Zr]=await Promise.all([jt(ue.resolve(to,"./yi-dark.json")),jt(ue.resolve(to,"./yi-light.json"))]),ei={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},ti={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},oi=e=>e.trim().split(/\b\W*\b/).reduce((t,n)=>({...t,...ti[n]}),{}),ni=e=>Object.entries(e).reduce((t,[n,r])=>{const i=ei[n];if(r==null||typeof i!="string")return t;const s=i==="fontStyle"?oi(r):{[i]:r};return{...t,...s}},{}),[ri,ii]=await Promise.all([Lt({theme:Qr}),Lt({theme:Zr})]),si=new Set(nn.map(e=>e.id)),ai=new Set(["ts","tsx","typescript"]),oo=e=>e.explanation?.reduce((t,n)=>({...t,...n.scopes.reduce((r,{themeMatches:i})=>({...r,...i.reduce((s,{settings:l})=>({...s,...ni(l)}),r)}),t)}),{color:e.color}),li=(e,t,n={})=>{const r=oo(e),i=oo(t),s=i==null?null:{nested:{[a.darkMode]:i}},{content:l}=e;if(r==null&&s==null)return o("span",n,l);const m={...r,...s},p=c("span",m);return o(p,n,l)},ci=Ue({paddingRight:"1rem"}),di={className:ci},mi=(e,t)=>Ot(o(ge,{},o("pre",{},o("code",{},...e.reduce((n,r,i)=>{const s=r.map((m,p)=>{const u=t[i][p],b=p===r.length-1?di:{};return li(m,u,b)}),l=i===0?"":`
`;return[...n,l,...s]},[]))))),pi=e=>{const{lang:t,value:n,meta:r}=e,i=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,s=String(t)==="json5"?"json":t;let l;const m=n.replace(/^\n+|\n+$/g,"");if(!si.has(s))l=rn.plainTextRenderer(m,{});else{const p=ii.codeToThemedTokens(m,s),u=ri.codeToThemedTokens(m,s);l=mi(p,u)}ai.has(s)&&!r?.includes("ignore"),e.children=[],e.type="html",e.value=l},ui=()=>t=>{Je(t,"code",pi)};import.meta.env=et;const Ie=Mt.createRequire(import.meta.url),gi=Ie("rehype-parse"),hi=Ie("rehype-remark"),fi=Ie("remark"),bi=Ie("remark-abbr"),yi=Ie("remark-stringify"),Si=({className:e,children:t,...n})=>e==="language-id"?null:e==="code-container"?$e(z,n,...Rt(t)):o("div",{className:e,...n},...Rt(t)),vi=({children:e,...t})=>Wr(t,e)?o(Vr,t,e):o("span",t,e),ct={components:{div:Si,pre:Yr,span:vi},rehypePlugins:[Jo],remarkPlugins:[ui,bi,kn,Qo,Zo]},no=e=>{const{children:t=$e(()=>null,{}),components:n={},rehypePlugins:r=[],remarkPlugins:i=[]}=e,s={...ct.components,...n},l={mdx:$e,MDXProvider:_o,components:s,props:{}},m=typeof t=="string"?It(t).trim():t,p=[...ct.rehypePlugins,...r],u=[...ct.remarkPlugins,...i],b=Ho.sync(m,{rehypePlugins:p,remarkPlugins:u,skipExport:!0}).trim(),{code:h}=en(b,{objectAssign:"Object.assign"}),y=Object.keys(l),v=Object.values(l),f=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...y,`${h}

${f}`)($e,...v)},Ei=Object.entries(Jr).map(([e,t])=>`*[${e}]: ${t}`).join(`
`),ki=e=>[e,Ei].join(`

`),dt=([e,...t],{includeAbbreviations:n=!0})=>{const r=typeof e=="string"?[e,...t].join(""):String.raw(e,...t);return n?ki(r):r},Te=(...e)=>{const t=dt(e,{includeAbbreviations:!0});return o(ge,{},o(no,{},t))},ro=(...e)=>{const t=dt(e,{includeAbbreviations:!0});return o(ge,{},o(no,{components:{p:z}},t))},Ti=(...e)=>{const t=dt(e,{includeAbbreviations:!1});return fi().use(gi).use(hi).use(yi).use(tn).use(on).processSync(t).contents.toString().trim()},ie=(e,t)=>Number(e.toFixed(t)),he=parseInt("ff",16),io=parseInt("00",16),so=.05,mt=.15,pt=.05;class Me extends Error{constructor(t){super(`Invalid hash: ${t}`)}}const wi=/^[0-9a-f]{40}$/i,Ci=e=>wi.test(e),xi=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),Ri=e=>e.length===10,Ai=/([0-9a-f]{2})([0-9a-f]{2})/ig,ut=e=>{if(!Ci(e))throw new Me(e);const n=Array.from(e.matchAll(Ai)??[]).map(([r,i,s])=>({x:i,y:s}));if(!Ri(n))throw new Me(e);return n},Pi=Symbol("IS_POINT"),Oi=e=>Object.assign(e,{[Pi]:!0}),ao=e=>{const t=parseInt(e,16);if(t>he||t<io)throw new Error(`Not a valid coordinate: ${e}`);return Oi(t)},Ii=({x:e,y:t})=>({x:ao(e),y:ao(t)}),Mi=e=>e.length===10,gt=(e,t)=>{try{const n=t.map(Ii);if(!Mi(n))throw new Me(e);return n}catch{throw new Me(e)}},ji=Symbol("SCALED_COORDINATE"),lo=e=>e.reduce(({max:t,min:n},{y:r})=>({max:Math.max(Number(t),Number(r)),min:Math.min(Number(n),Number(r))}),{max:-Infinity,min:Infinity}),q=(e,t)=>Object.assign(ie(e,2),{[ji]:t}),we=({x:e,xScale:t,y:n,yScale:r})=>({x:q(e,t),y:q(n,r)}),ht=({x:e,y:t},{xScale:n,xShift:r,yScale:i,yShift:s})=>we({x:(e+r)*n,xScale:n,y:(t+s)*i,yScale:i}),ft=({points:e,xMax:t,xScale:n,yScale:r})=>[we({x:0,xScale:n,y:0,yScale:r}),...e,we({x:t,xScale:n,y:0,yScale:r})].reduce((i,s,l,m)=>{if(l===0||l===m.length-1)return i;const p=q(0,r),u=[{x:m[l-1].x,y:p},s,{x:m[l+1].x,y:p}];return[...i,u]},[]),bt=({segments:e,xMax:t,xScale:n,yScale:r})=>e.map(i=>{const[{x:s,y:l},{x:m,y:p},{x:u,y:b}]=i,h=u-s,y=p/h,f=6/y;if(f<1){const A=f*.2*s,C=s-A,$=u+A,O=C<0?Math.abs(C):$>t?t-$:0,P=C+O,V=$+O,R=f*.3,_=m+O,I=R*p,X=p-I;return[we({x:P,xScale:n,y:l,yScale:r}),we({x:_,xScale:n,y:X,yScale:r}),we({x:V,xScale:n,y:b,yScale:r})]}return i}),Li=({x:e,y:t},{x:n,y:r})=>{const i=n-e,s=r-t;return{angle:Math.atan2(s,i),length:Math.sqrt(i**2+s**2)}},co=({current:e,previous:t,next:n,reverse:r,smoothing:i,xScale:s,yScale:l})=>{const m=r?Math.PI:0,p=Li(t,n),u=p.angle+m,b=p.length*i,{x:h,y}=e,v=h+Math.cos(u)*b,f=y+Math.sin(u)*b;return{x:q(v,s),y:q(f,l)}},yt=({index:e,point:t,points:n,smoothing:r,xScale:i,yScale:s})=>{const l=n[e-1];if(l==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const m=n[e-2]??l,p=co({current:l,previous:m,next:t,reverse:!1,smoothing:r,xScale:i,yScale:s}),u=l,b=n[e+1]??t,h=co({current:t,previous:u,next:b,reverse:!0,smoothing:r,xScale:i,yScale:s});return[p,h,t]},mo=({segment:e,smoothing:t,xScale:n,yScale:r})=>e.reduce((i,s,l)=>{if(l===0)return i;const p=yt({index:l,point:s,points:e,smoothing:t,xScale:n,yScale:r}).map(u=>`${u.x},${u.y}`).join(" ");return[...i,`C ${p}`]},[]),Di=({baseYCoordinate:e,isBaselineBelowMidpoint:t,segments:n,xScale:r,yMax:i,yScale:s,yTilt:l=!1})=>n.reduce((m,p,u,b)=>{const{length:h}=b,[y,v,f]=p,{x:k,y:A}=y,{x:C,y:$}=v,{x:O,y:P}=f,V=O-k,R=V===0?0:Math.max($/V*pt,mt),_=l?.1:0,I=1-_,X=1+_,Q=u%2==0?I:X,ee=t?A+e:i-A+e,F={x:k,y:q(ee*Q,s)},Z=u%2==0?I:X,te=t?P+e:i-P+e,U={x:q(O,r),y:q(te*Z,s)},H=C-k,N=O-C,Y=N>H?0:0-(C-k)*so,J=(h-u)*(s/100*i),de={x:q(C+Y,r),y:q($-J,s)},me=mo({segment:[F,de,U],smoothing:R,xScale:r,yScale:s}),pe=N>H?(O-C)*so:0,Se={x:q(C+pe,r),y:q(i-J,s)},oe=mo({segment:[U,Se,F],smoothing:R,xScale:r,yScale:s});return[...m,[`M ${F.x},${F.y}`,...me,...oe,"Z"].join(" ")]},[]),Bi=({hash:e,xPadding:t=0,xScale:n=1,yOffset:r=.5,yPadding:i=0,yScale:s=1})=>{const l=ut(e),m=gt(e,l),p=lt(m,({x:P},{x:V})=>Number(P)===Number(V)?0:Number(P)>Number(V)?1:-1),u=t/2,b=i/2,h=p.map(P=>ht(P,{xScale:n,xShift:u,yScale:s,yShift:b})),y=(he+t)*n,{max:v}=lo(h),f=(v+i)*s,k=ft({points:h,xMax:y,xScale:n,yScale:s}),A=bt({segments:k,xMax:y,xScale:n,yScale:s}),C=r>.5,$=C?f*r:-1*f*r;return{segmentPaths:Di({baseYCoordinate:$,segments:A,xScale:n,yMax:f,isBaselineBelowMidpoint:C,yScale:s}),xMax:y,yMax:f}};var St;(function(e){e.PNG="png"})(St||(St={}));const vt=process.cwd(),je=e=>e.startsWith("/")?ue.resolve(vt,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):ue.extname(e)==""?ue.resolve(vt,"./src/pages/",`${e}.tsx`):e;var Ce;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(Ce||(Ce={}));var fe;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(fe||(fe={}));const $i="origin",Ni="main",Le=e=>{const{branch:t=Ni,decode:n,filter:r=Ce.FIRST,format:i,path:s=vt,remote:l=$i}=e,{error:m,stdout:p}=an.spawnSync("git",["log",...r.split(" "),`--branches=${t}`,`--format=${i}`,`--remotes=${l}`,"--",s]);if(m)throw m;const u=p.toString().trim();return(u===""?[]:u.split(`
`)).map(n)},Et=e=>{const t=new Date(e);if(!isNaN(t.getTime()))return t},Hi=e=>{const t=je(e),[n=null]=Le({decode:Et,filter:Ce.CURRENT,format:fe.ISO_DATE,path:t});return n},_i=e=>{const t=je(e),[n=null]=Le({decode:Et,format:fe.ISO_DATE,path:t});return n},Fi=e=>{const t=je(e),[n=null]=Le({decode:Et,filter:Ce.FIRST_MERGE,format:fe.ISO_DATE,path:t});return n},kt=e=>{const t=Qe.readFileSync(e).toString();let n=ln.createHash("sha1");return n.update(t),n.digest("hex")},Ui=e=>{const t=je(e),[n]=Le({decode:He,format:fe.HASH,path:t});return n??kt(t)},Yi=e=>{const t=je(e),[n]=Le({decode:He,filter:Ce.FIRST_MERGE,format:fe.HASH,path:t});return n??kt(t)},zi={height:630,width:1200},Gi=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",Xi=sn({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Wi=(e,t,n=St.PNG,r=zi)=>{const i=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),s=Xi.hash(t),l=ue.resolve(i,`${s}.${n}`),m=l.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:l,imageType:n,publicPath:m,...r}}};var be;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(be||(be={}));const po=(e,t,n,r,i=[M.TECHNOLOGY])=>{const s=r===be.MUTABLE,l=r===be.IMMUTABLE_MERGE,m=t.replace(/^file:(\/\/)?/,""),p=s?kt(m):l?Yi(e):Ui(e),u={created:(l?Fi(e):_i(e))??Qe.statSync(m).ctime,updated:Hi(e)??Qe.statSync(m).mtime},h=Wi(t,s?{importURL:t,stat:u,topics:i}:{hash:p,importURL:t});return{hash:p,host:Gi,path:e,social:h,stat:u,title:n,topics:i}},uo=()=>o(z,null,o("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),o("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),o("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),o("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Vi=()=>o("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},o("defs",null,o(uo,null))),Ki=1.6180334,qi=4,go=ie(Ki*5,6),ho=.75,xe=.15,Ji=1.5,Re=ne("6rem",`${100/go}vw`,"10rem"),Qi=c(B,{height:Re,position:"relative",width:"100%"}),Zi=c("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),es=c("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var De;(function(e){e.INLINE="inline",e.NONE="none"})(De||(De={}));const Tt={xPadding:qi,xScale:go,yOffset:ho,yPadding:xe,yScale:Ji},wt=e=>{const{className:t,defsUsage:n=De.INLINE,hash:r,height:i,rawSVG:s=!1,styleRenderer:l=ce,title:m,topics:p=[],width:u}=e,b=p.length<2?[...p,M[ze]]:p,h=P=>`${P}-${r}`,{segmentPaths:y,xMax:v,yMax:f}=Bi({...Tt,hash:r}),k=f*ho,A=f*xe/10.24,C=A*.75,O=o(Zi,{className:Xt,height:i,preserveAspectRatio:"none",viewBox:[0,0,v,f].join(" "),width:u},o("title",null,"Generated art for the page or post titled"," ",o("i",null,m),", with the content or commit hash ",r," ",b.length>0?[", and the topics: ",b.map(String).join(", ")]:null),o("defs",null,n===De.INLINE?o(uo,null):null,o("filter",{id:h("blur")},o("feOffset",{in:"SourceGraphic",dx:"0",dy:C,result:"glowOffsetOut"}),o("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:A,result:"glowBlurOut"}),o("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),o("clipPath",{id:h("blurOverlayClip")},o("rect",{x:"0",width:v,y:k,height:f})),o("filter",{id:h("blurOverlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:C}),o("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:A})),o("filter",{id:h("blurUnderlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:C}),o("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:A}),o("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),o("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),o("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),o("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:A})),o("g",{id:h("blobs")},y.map((P,V)=>{const R=V%b.length,_=b[R],I=l.renderRule(()=>({...a.topicColors[_]}),Object.keys);return o(es,{key:P,className:I,d:P,mask:"url(#softVerticalFade)"})}))),o("g",{transform:[`translate(0, ${f*xe})`,`scale(1, ${1-xe*2})`].join(" "),filter:`url(#${h("blur")})`},o("use",{href:`#${h("blobs")}`,mask:"url(#horizontalMidFade)"})),o("g",{"clip-path":`url(#${h("blurOverlayClip")})`,filter:`url(#${h("blurOverlay")})`,transform:[`translate(0, ${f*xe})`,`scale(1, ${1-xe*2})`].join(" ")},o("use",{href:`#${h("blobs")}`,mask:"url(#softVerticalFade)"})));return s?O:o(Qi,{className:t},O)},ts=[,"January","February","March","April","May","June","July","August","September","October","November","December"],os=c("time",{nested:{[a.darkMode]:{...a[a.darkMode].deemphasize}},...a.deemphasize});var se;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(se||(se={}));const Ae=({date:e,mode:t=se.DEFAULT,...n})=>{const r=e.getMonth()+1,i=e.getFullYear(),s=t===se.SHORT?`${r}/${i}`:t===se.META?"":[e.getDate(),ts[r],i].join(" ");return o(os,{...n,datetime:e.toISOString()},s)},ns=c("a",{...a.topicTagLink(a.topicTagIdentifier.className)}),rs=c("span",a.topicTagIdentifier()),is=c(rs,{...a.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),ss=({className:e,link:t=!0,topic:n})=>{const r=ur(n),i=ot(n);if(r==null||typeof i!="string")throw new Error(`Unexpected topic: ${String(i)}`);const s=t?ns:"span",l=t?{href:`/blog/topics/${r}/`}:{};return o(s,{className:[e,a.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...l},o(is,null,i))},fo=c(ss,e=>({...a.topicTagOuter,...a.topicColors[ot(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),as=c("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),ls=c("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),bo=({className:e,link:t=!0,topics:n})=>o(as,{className:e},n.map(r=>typeof r=="string"?o(ls,{key:dr(r)},o(fo,{link:t,topic:r})):null)),cs=e=>e.reduce((t,n)=>{const r=n.stat.created.getFullYear(),i=t[r]??[];return{...t,[r]:[...i,n]}},{}),ds=c(B,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),ms=c(B,{...a.blog.listing.item,minHeight:Re,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),ps=c(B,{paddingTop:`calc(${Re} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),us=c(B,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),gs=c("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),hs=Ue({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),fs=c("h2",{...a.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),bs=c(Ae,{padding:"0 0.5rem 0.125rem 0"}),ys=c(bo,{gridColumn:"3 / 3"}),Ss=c("div",{...a.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),vs=c("a",{fontSize:"0.875em"});var Ve;(function(e){e.DATE="date"})(Ve||(Ve={}));var Ke;(function(e){e.ASC="asc",e.DESC="desc"})(Ke||(Ke={}));const Es=({order:e=Ke.DESC,posts:t,sort:n=Ve.DATE})=>{const r=t.slice().sort((s,l)=>e===Ke.DESC&&n===Ve.DATE?s.stat.created>l.stat.created?-1:1:0),i=cs(r);return o(z,null,Object.entries(i).map(([s,l])=>o(z,{key:s},o(ds,null,l.map(m=>{const{CustomArt:p=wt,description:u,hash:b,path:h,stat:{created:y},title:v,topics:f}=m;return o(ms,{key:h},o(ps,{as:"a",href:h},o(gs,null,o(p,{defsUsage:De.NONE,hash:b,padded:!0,renderType:"listing",title:v,topics:f})),o(us,null,o(fs,{className:hs},v),o(bs,{date:y}))),o(ys,{link:!1,topics:f}),o(Ss,{className:a.blog.listing.descriptionIdentifier},u),o("p",null,o(vs,{href:h},"Read more\u2026")))})))))},ks=()=>o(z,null,o("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),o("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),o("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),o("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),o("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),o("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),o("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),o("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),o("meta",{name:"application-name",content:"Eyelidlessness"}),o("meta",{name:"msapplication-TileColor",content:"#555555"}),o("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));Ar();const yo=({children:e,meta:{description:t,host:n,redirect:r,social:{image:i},title:s},...l})=>r?o(Dt,{...l},o(Ne.title,null,"Redirecting to ",r),o("meta",{"http-equiv":"refresh",content:`0; URL=${r}`}),o("link",{rel:"canonical",href:r})):o(Dt,{...l},o(Ne.title,null,s," | Eyelidlessness"),t!=null?o(Ne.description,null,t):o(z,null),o("meta",{name:"theme-color",content:a.siteLogo.color}),o("style",{dangerouslySetInnerHTML:{__html:Rr}}),o("meta",{name:"twitter:card",content:"summary_large_image"}),o("meta",{name:"twitter:site",content:"@eyelidlessenss"}),o(Ne.image,{alt:s,height:i.height,src:`${n}${i.publicPath}`,width:i.width}),o(z,null,e),o(ks,null)),Ts=({as:e="div",devilsBreakpoint:t,gap:n,...r})=>{const i=c(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${t} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return o(i,{...r})},ye=512,So=[0,0,ye,ye].join(" "),ws=ye/2,Cs=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),xs=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:So,width:"0"},o("defs",null,o("mask",{id:"octocat-knockout"},o("rect",{fill:"#fff",height:ye,mask:"url(#octocat)",rx:ws,width:ye}),o("path",{d:Cs,fill:"#000"})))),Rs=c("rect",{...a.gitHubLogo}),vo=({className:e})=>o("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:So},o("title",null,"GitHub"),o(Rs,{height:ye,mask:"url(#octocat-knockout)",width:ye})),qe={height:60,width:338},As=c("svg",{display:"inline-block",maxWidth:"100%",width:`${qe.width}px`}),Ps=c("use",{nested:{[a.darkMode]:{...a[a.darkMode].siteLogo}},...a.siteLogo,fill:"currentcolor"}),Os=`0 0 ${qe.width} ${qe.height}`,Is=()=>o(As,{viewBox:Os},o(Ps,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),o("title",null,"Eyelidlessness")),{columns:Pe}=a.siteHeader,Ms=`
  ${Pe[0]}
  ${Pe[1]}
  min(
    ${Pe[2][0]},
    ${Pe[2][1]}
  )
  ${Pe[3]}
  ${Pe[4]}
`.replace(/\s+/g," "),js=c("header",{...a.artOverlay,display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Ms,padding:"clamp(0.5rem, 5vmin, 3rem) 0",position:"relative",zIndex:1}),Ls=c("div",{gridColumn:3}),Ds=c("div",{margin:"0 auto"}),Bs=c("a",{textDecoration:"none"}),$s=c("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),Eo=1,Ns=c("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${Eo/2}rem`,padding:0}),Hs=c("a",{...a.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[a.darkMode]:{...a[a.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),ko="1.5em",Sl=c(vo,{display:"block",width:`clamp(1.125em, 4vw, ${ko})`}),_s=()=>{const e=[{label:"Blog",location:"/"},{label:"Hire me",location:"/resume/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],t=e.reduce((i,s)=>typeof s.label=="string"?i+s.label.length:i,0),n={horizontal:"2rem"},r=`${[`${qe.width}px`,n.horizontal,`${t+2}ch`,ko,`${e.length*Eo}rem`].join(" + ")}`;return o(js,null,o(Ls,null,o(Ts,{as:"nav",devilsBreakpoint:r,gap:n},o(Ds,null,o(Bs,{href:"/"},o(Is,null))),o($s,null,e.map(({location:i,label:s})=>o(Ns,null,o(Hs,{href:i},s)))))))},Fs=c(B,{paddingTop:0,paddingBottom:"4em"}),To=({redirect:e,...t})=>o(ge,null,e==null?o(z,null,o(xs,null),o(_s,null),o(Fs,{as:"main",...t})):o(z,null)),Us=c(B,{...a.description,nested:{...a.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Ys=c("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),zs=c("div",{fontSize:"0.889em"}),Gs=({as:e="section",title:t,...n})=>o(Us,{as:e,itemprop:"description"},t?o(Ys,null,t):null,o(zs,{...n})),Xs=c(B,{paddingTop:"1rem"}),Ws=c("h1",{marginBottom:"0.25rem"}),Vs=c(B,{paddingBlock:"1rem"}),Ks=e=>{const{children:t,CustomArt:n,description:r,descriptionRaw:i,hash:s,redirect:l,stat:{created:m},title:p,topics:u}=e;return o(z,null,o(yo,{meta:{...e,description:i}}),o(To,{as:"article",redirect:l},o(Vs,null,n==null?o(wt,{hash:s,title:p,topics:u}):o(n,{hash:s,renderType:"post",StylesProvider:ge,title:p,topics:u}),o(Xs,null,o(Ws,null,p),o(Ae,{date:m,itemprop:"datePublished"}),o(bo,{link:!1,topics:u}))),o(Gs,null,r),t))},wo={IMMUTABLE:be.IMMUTABLE,IMMUTABLE_MERGE:be.IMMUTABLE_MERGE},qs=async e=>{const{description:t,importURL:n,path:r,redirect:i,title:s,topics:l,type:m=wo.IMMUTABLE_MERGE}=e,{CustomArt:p,hash:u,host:b,social:h,stat:y}=po(r,n,s,m,l),v=Ti`${Ot(o(z,null,t))}`;return{CustomArt:p,description:t,descriptionRaw:v,hash:u,host:b,path:r,redirect:i,social:h,stat:y,title:s,topics:l}},Js=c("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),Co="@media (min-width: 41.666rem)",Qs=c(Js,{display:"block",margin:0,nested:{"& > *":{containerType:"inline-size"},[Co]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}}}}),Zs=c("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),ea=e=>{const t=Array();return e.role===E.CREATOR&&t.push(e.description),e.summary!=null&&t.push(e.summary),t.length===0&&t.push(e.description),o(Zs,null,t.map(n=>Te(n)))},ta=({date:e,...t})=>e==null?null:o(Ae,{...t,date:e}),oa=c("span",{nested:{[a.darkMode]:{...a[a.darkMode].deemphasize}},...a.deemphasize}),na=/^(\d{4})-(\d{2})$/,xo=e=>{if(e==null)return null;const t=na.exec(e);if(t==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,r]=t;return new Date(`${n}-${r}-01T00:00:00`)},Ro=c("div",{fontSize:"0.88889em",whiteSpace:"nowrap",nested:{"& time":{fontSize:"inherit"}}}),Ao=({range:[e,t]})=>{const n=xo(e),r=xo(t);return e==t?o(Ro,null,o(Ae,{date:n,itemprop:"endDate",mode:se.SHORT})):o(Ro,null,o(Ae,{date:n,itemprop:"startDate",mode:se.SHORT}),o(oa,null,"-"),o(ta,{date:r,itemprop:"endDate",mode:se.SHORT}))},ra=c("div",{display:"grid",rowGap:"0.325rem",nested:{"& > *":{margin:0}}}),Ct=ne("1rem","3.5cqi","1.25rem"),ia=c("h3",{fontFamily:a.prose.fontFamily,fontWeight:500,fontSize:Ct,paddingLeft:0,textIndent:0}),sa=c("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),aa=c("a",{alignSelf:"baseline",display:"block",flexShrink:0,height:`calc(${Ct} * ${a.headingLineHeight})`,lineHeight:`calc(${Ct} * ${a.headingLineHeight*1.5})`,padding:"0 0.5rem",zIndex:1,nested:{"& svg":{width:"1em"},[Co]:{paddingLeft:0}}}),la=c("div",{flexGrow:1,paddingTop:"0.05556rem"}),ca=c("div",{alignItems:"start",display:"flex",padding:"1rem 0"}),Po=({project:{description:e,end:t,repo:n,role:r,title:i,start:s,summary:l}})=>o(ca,null,o(aa,{href:n},o(vo,null)),o(la,null,o(ra,null,o(ia,null,o(sa,{href:n},i)),o(Ao,{range:[s,t]})),o(ea,{role:r,description:e,summary:l??null}))),Oo=c("h2",{fontSize:ne(`${a.headingRanges.h3.minEm}em`,`${a.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Io=c("div",{marginTop:"0.5rem"}),da=e=>{const{creator:t,contributor:n}=e.projects.reduce((r,i)=>{const s=i.role===E.CREATOR?"creator":"contributor";return{...r,[s]:[...r[s],i]}},{creator:[],contributor:[]});return o(Qs,null,o("div",null,o(Oo,null,"Projects I Created"),o(Io,null,t.map(r=>o(Po,{project:r})))),o("div",null,o(Oo,null,"Open Source Contributions"),o(Io,null,n.map(r=>o(Po,{project:r})))))},ma=c(B,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),Be=e=>o(ma,{as:"section",...e}),Mo="0123456789".split("").map(e=>{const n=Number(e)*36;return{dark:{emphasize:K.hsluvToHex([n,100,35]),hover:K.hsluvToHex([n,100,3]),plot:K.hsluvToHex([n,100,74]),selected:K.hsluvToHex([n,100,64]),x:K.hsluvToHex([n,100,84]),y:K.hsluvToHex([n,100,74])},light:{emphasize:K.hsluvToHex([n,100,80]),hover:K.hsluvToHex([n,100,97]),plot:K.hsluvToHex([n,100,64]),selected:K.hsluvToHex([n,100,64]),x:K.hsluvToHex([n,100,54]),y:K.hsluvToHex([n,100,44])}}}),pa="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",ua=(e,t)=>t==null?{color:Mo[e].light.plot,nested:{[a.darkMode]:{color:Mo[e].dark.plot}}}:a.topicColors[t],ga=({fill:e,index:t,topic:n})=>({...ua(t,n),...e?{fill:"currentcolor",fillOpacity:.05,mask:"url(#curvesVerticalFade)",strokeWidth:0}:{fill:"none",strokeWidth:1,stroke:"currentcolor"},transition:pa,vectorEffect:"non-scaling-stroke"}),ha=({fill:e,index:t,topic:n,...r})=>o("path",{...r}),jo=c(ha,ga),fa=c("svg",{overflow:"visible",padding:"1rem"}),ba=20,ya={xMax:he,xScale:1,xShift:0,yMax:he,yScale:1,yShift:0},Sa=({className:e,hexPoints:t,points:n,pointSize:r=6,scaleOptions:i,segments:s,sortIndexes:l,sortToggleClass:m,topics:p,...u})=>{const{xScale:b,xShift:h,xRange:y=b*(he+h*2),yMax:v,yShift:f,yScale:k,yRange:A=k*(v+f*2)}={...ya,...i},C=ba*2,$=u.height??A+C,O=u.width??y+C,P=({x:R,y:_},I)=>{const X=l[I],{x:Q,y:ee}=n[X],F=ie((R+h)/y*100,4),Z=100-ie((_-f)/A*100,4),te=ie((Q+h)/y*100,4),U=100-ie((ee-f)/A*100,4),H=0-ie(F-te,4),N=0-ie(Z-U,4);return{cx:F,cy:Z,sortedCx:te,sortedCy:U,sortedTranslateXPercent:H,sortedTranslateyPercent:N}},V=s.map(R=>{const[_,I,X]=R,{x:Q}=_,{y:ee}=I,{x:F}=X,Z=F-Q,te=Z===0?0:Math.max(ee/Z*pt,mt);return{cubicPoints:R?.reduce((H,N,Y)=>{if(Y===0)return H;const J=yt({index:Y,point:N,points:R,smoothing:te,xScale:b,yScale:k});return[...H,J]},[]),segment:R}});return o(fa,{className:e,height:$,width:O,preserveAspectRatio:"none",viewBox:`0 0 ${O} ${$}`},o("defs",null,o("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.15","stop-color":"white","stop-opacity":".95"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),o("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),V.map(({cubicPoints:R,segment:_},I)=>{const[X,Q,ee]=_,F=R.map(([U,H],N)=>[N===0?X:Q,U,H,N===0?Q:ee]);return o(z,null,o(()=>o(z,null,F.map(U=>{const H=U.map((Y,J)=>{const{cx:de,cy:ae}=P(Y,I),me=de/100*O,pe=ae/100*$;return`${J===0?"M ":J===1?"C ":""} ${me},${pe}`}).join(" "),N=p?.[I%p.length];return o(jo,{d:H,index:I,topic:N})})),null),o(()=>{const U=F.map((N,Y)=>N.map((de,ae)=>{if(Y>0&&ae===0)return"";const{cx:me,cy:pe}=P(de,I),Se=me/100*O,j=pe/100*$;return`${ae===0?"M ":ae===1?"C ":""} ${Se},${j}`}).join(" ")).join(" "),H=p?.[I%p.length];return o(jo,{d:U,fill:!0,index:I,topic:H})},null))}))},Lo=({className:e="",hash:t,height:n,identifier:r=Fe,renderType:i,StylesProvider:s=ge,styleRenderer:l=ce,topics:m,width:p})=>{const u=ut(t),b=gt(t,u),{xPadding:h,xScale:y,yPadding:v,yScale:f}=Tt,k=i==="meta",A=k?0:h,C=k?0:v,$=A/2,O=C/2,P={xScale:y,xShift:$,yScale:f,yShift:O},R=lt(b,({x:j},{x:oe})=>j===oe?0:j>oe?1:-1).map(j=>ht(j,P)),_=R.map((j,oe)=>oe),I=R.map(j=>u[R.indexOf(j)]),X=(he+A)*y,Q=r(),ee=ft({points:R,xMax:X,xScale:y,yScale:f}),F=bt({segments:ee,xMax:X,xScale:y,yScale:f}),Z=k?{path:{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,te=k?"0 !important":"0 0 1rem !important",U=Re,H="100%",N=j=>typeof j=="number"?`${j}px`:j,Y=(j,oe)=>typeof j=="number"?j*oe:j,J=k?Y(n??U,.95):Re,de=k?Y(p??H,.95):"100%",ae=k&&n!=null?Y(n,.95):n,me=k&&p!=null?Y(p,.95):p,pe=l.renderRule(()=>({gridColumn:"1 / -1",height:N(J),padding:te,width:N(de),nested:{...Z}}),Object.keys),Se=k?e:`${e} ${pe}`;return o(s,null,o(Sa,{className:Se,height:ae,hexPoints:I,points:R,scaleOptions:P,segments:F,sortIndexes:_,sortToggleClass:Q,topics:m,width:me}))},Do=c("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),Bo=c(Do,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),va=c(Bo,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",paddingTop:ne("0.5rem","3vw","2rem"),nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),Ea=c(Be,{padding:0}),ka=c(Do,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),Ta=c("a",{...a.resume.contactList.link,fontSize:"0.88889em",fontWeight:500,minWidth:"auto",textDecoration:"none"}),wa=c("span",{nested:{"@media print":{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),xt=({children:e,printLabel:t,...n})=>o(Ta,{...n},o(wa,{"data-print-label":t},o("span",null,e))),Ca=c(B,{...a.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...a.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"}}}),$o="@media (min-width: 44.625rem)",xa=c("h2",{fontSize:"1em",marginBottom:0,paddingLeft:0,textIndent:0,nested:{[$o]:{justifySelf:"end"}}}),Ra=c("div",{alignItems:"baseline",display:"grid",gap:"1rem 0",gridTemplateColumns:"auto",gridTemplateRows:"auto",fontSize:"0.88889em",nested:{[$o]:{gridTemplateColumns:"auto 1fr"}}}),Aa=c("ul",{display:"block",margin:0,padding:"0 0 0 1rem"}),Pa=c("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0.125rem 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Oa=Object.values(S).reduce((e,t)=>({...e,[t]:c("span",{...a.resume.skillLevel[t],borderRadius:"4px",display:"inline-block",height:"8px",margin:"0 0.325rem 0 0",width:"8px",verticalAlign:"middle",nested:{...a.resume.skillLevel[t].nested}})}),{}),Ia=c("div",{display:"contents"}),Ma=({name:e,skills:t})=>o(Ia,{itemscope:!0,itemtype:"http://schema.org/ItemList"},o(xa,{itemprop:"name"},ro(e)),o(Aa,null,t.map(({level:n,name:r})=>{const i=Oa[n];return o(Pa,{key:r,itemprop:"itemListElement"},o(i,{role:"img",title:`Skill level: ${n}`}),ro`${r}`)}))),ja=c(B,{padding:"1rem 0"}),La=c("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),Da=c("h2",{marginBottom:"1rem"}),Ba=c("div",{fontSize:"0.88889rem"}),$a=c("ul",{fontSize:"0.88889em",paddingInlineStart:0}),Na=c("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),Ha=c(ja,{marginBottom:"0.5rem",paddingBottom:"1.5rem",position:"relative",nested:{"&:after":{...a.resume.employment.separator,bottom:0,content:'""',display:"block",gridColumn:"1 / -1",left:0,position:"absolute",width:"100%"},"&:last-child":{marginBottom:0},"&:last-child:after":{display:"none"}}}),_a=c(Bo,{alignItems:"baseline",justifyContent:"space-between",gap:"0.5rem",nested:{"& > *":{minWidth:"auto"}}}),Fa=({employer:e,end:t,highlights:n,position:r,start:i,summary:s,...l})=>o(Ha,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...l},o(_a,null,o("h3",{itemprop:"name"},e),o(Ao,{range:[i,t]})),o(Ba,{itemprop:"roleName"},r),s==null?null:o(La,{itemprop:"description"},Te(s)),n==null?null:o($a,{itemtype:"http://schema.org/ItemList"},n.map(m=>o(Na,{key:m,itemprop:"itemListElement"},Te(m))))),Ua=c(Be,{...a.resume.employment.container,marginTop:"1rem"}),Ya=({employment:e})=>o(Ua,null,o(Da,null,"Recent Experience"),e.history.map(t=>o(Fa,{...t}))),za=c(B,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),Ga=c(Ae,{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"}),No=e=>e.replace(/^https?:\/\/|\/$/g,""),Xa=({className:e,id:t,meta:n,resume:r,updated:i})=>{const{contact:{email:s,website:l},employment:m,info:p,name:u,projects:b,skills:h,social:y}=r;return o(za,{className:e,id:t,itemscope:!0,itemtype:"http://schema.org/Person"},o(Lo,{...n,renderType:"post"}),o(Ea,null,o(va,null,o("h1",{itemprop:"name"},u),o(Ga,{date:i,itemprop:"datePublished",mode:se.META}),o(ka,null,o(xt,{href:`mailto:${s}`,itemprop:"email",printLabel:s},"Email"),o(xt,{href:l,itemprop:"url",printLabel:No(l),rel:"me"},"Website"),y.map(({network:v,url:f})=>o(xt,{href:f,itemprop:"url",printLabel:No(f),rel:"me"},v)))),o(Ca,{itemprop:"description"},Te(p.brief))),o(Be,{"aria-label":"Skillsets"},o(Ra,null,Object.entries(h.merged).map(([v,f])=>o(Ma,{key:v,name:v,skills:f})))),o(Ya,{employment:m}),o(Be,null,o(da,{projects:b})),o(Be,null,o("h2",null,"References"),Te("Available upon request.")))},vl=c("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),El=c("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),kl=c("a",{...a.resume.contactList.link,textDecoration:"none"});export{Re as BLOG_ART_HEIGHT,wt as BlogArt,Vi as BlogArtDefs,Es as BlogListing,wo as BlogMetadataType,Ks as BlogPost,he as COORDINATE_MAX,io as COORDINATE_MIN,B as FullBleedContainer,Qt as FullBleedScrollableOverflow,eo as FullBleedSymbolBlock,yo as Head,Me as InvalidHashError,mt as MIN_SMOOTHING,To as Main,be as PageMetadataType,Xa as Resume,Lo as ResumeArt,pt as SMOOTHING_RATIO,ge as StylesProvider,M as Topic,fo as TopicTag,et as __SNOWPACK_ENV__,Tt as blogArtDefaultParameters,ne as clamp,yt as cubicBezierPoints,qs as getBlogPostStaticProps,ft as getNaiveSegments,bt as getNonPhallicSegments,po as getPageMetadata,xi as hexChars,Fe as identifier,Te as mdx,ce as renderer,En as resetAbbrContext,lr as resume,ht as scalePoint,lt as sortBy,c as styled,a as theme,ie as toFixed,ut as toHexPointSequence,gt as toPointSequence,lo as yBounds};
