import Ve from"unist-util-visit";import{h as t,Fragment as H,toChildArray as Rt}from"https://cdn.skypack.dev/preact@10.5.10";import Bo from"@mdx-js/mdx";import{mdx as Le,MDXProvider as $o}from"@mdx-js/preact";import{isobject as No,createComponent as Ho,RendererProvider as _o,Readonly as Fo,Object$1 as Uo,Optional as g,Unknown as Yo,Literal as zo,String as m,Partial as oe,Union as At,Boolean as xt,Array$1 as M,Integer as Go,Number$1 as Xo,emojiRegex as Wo,h as Pt,rehypeAccessibleEmojis as Vo,remarkSlug as Ko,remarkSmartypants_1 as qo}from"./_vendor/index.js";import{transform as Jo}from"buble-jsx-only";import Qo from"dedent";import Ot from"module";import Zo from"remark-mdx";import en from"remark-mdx-to-plain-text";import le from"path";import{loadTheme as It,getHighlighter as Mt}from"shiki";import{BUNDLED_LANGUAGES as tn}from"shiki-languages";import{renderers as on}from"shiki-twoslash";import Ke from"fs";import nn from"node-object-hash";import"fela-tools";import"sharp";import rn from"child_process";import sn from"crypto";import{Head as Lt,seo as je}from"microsite/head";import{createRenderer as an}from"fela";import{processStyleWithPlugins as ln,KEYFRAME_TYPE as jt,isNestedSelector as cn,normalizeNestedProperty as dn,isMediaQuery as mn,generateCombinedMediaQuery as Dt,isSupport as pn,generateDeclarationReference as un,isUndefinedValue as gn,generateCSSSelector as hn,RULE_TYPE as fn}from"fela-utils";import{cssifyDeclaration as bn,cssifyObject as yn}from"css-in-js-utils";import Bt from"md5";let qe=new Set;const Sn=()=>{qe=new Set},vn=()=>e=>{Ve(e,"abbr",o=>{const{abbr:n}=o;qe.has(n)&&(delete o.abbr,delete o.children,delete o.data,delete o.reference,Object.assign(o,{type:"text",value:n})),qe.add(n)}),Ve(e,"text",o=>{o.value.includes("\u200B")&&Object.assign(o,{value:o.value.replace(/\u200b/gu,"")})})},$t="production",En="production",kn=!0;var Je=Object.freeze({__proto__:null,MODE:$t,NODE_ENV:En,SSR:kn});const Tn=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),C=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((n,[i,s])=>typeof s=="object"&&(i==="nested"||i.includes("&"))?n:`${n}${Tn(i)}:${s};`,""),"}",Object.entries(o).map(([n,i])=>{if(typeof i=="object"){if(n==="nested")return Object.entries(i).map(([s,a])=>{const l=e.map(d=>s.replace(/&/g,d));return C(l,a)}).join("");if(n.includes("&")){const s=e.map(a=>n.replace(/&/g,a));return C(s,i)}}return""},[]).join("")].join(""),ne=(...e)=>`clamp(${e.join(",")})`,he=e=>e.replace(/\s+/g," ").trim(),De=e=>e;function we(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function Cn(e,o,n,i,s,a){const l=[];return s&&l.push(we(s).slice(0,16)),i&&l.push(we(i).slice(0,16)),n&&l.push(we(n).slice(0,16)),l.push(we(e).slice(0,16)),l.push(we(o).slice(0,16)),l.push(a.slice(0,8)),l.join("_")}function wn(e,o,n=[""]){let i="";for(const a in e){const l=e[a];i=`${i}${a}{${yn(l)}}`}let s="";for(let a=0;a<n.length;a++){const l=n[a];s=`${s}@${l}keyframes ${o}{${i}}`}return s}function Rn(){return e=>(e.renderKeyframe=(o,n)=>{const i=o(n,e),s=ln(e,i,jt,n),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const l=Bt(a),d=(e.selectorPrefix||"_")+l.slice(0,8),p=wn(s,d,e.keyframePrefixes),u={type:jt,keyframe:p,name:d};e.cache[a]=u,e._emitChange(u)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...n},i="",s="",a="")=>{let l=o?` ${o}`:"";for(const d in n){const p=n[d];if(No(p))if(cn(d))l+=e._renderStyleToClassNames(p,i+dn(d),s,a);else if(mn(d)){const u=Dt(s,d.slice(6).trim());l+=e._renderStyleToClassNames(p,i,u,a)}else if(pn(d)){const u=Dt(a,d.slice(9).trim());l+=e._renderStyleToClassNames(p,i,s,u)}else console.warn(`The object key "${d}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const u=un(d,p,i,s,a);if(!e.cache.hasOwnProperty(u)){if(gn(p)){e.cache[u]={className:""};continue}const f=bn(d,p),E=Bt(u),S=e.devMode?Cn(d,p,i,s,a,E):(e.selectorPrefix||"_")+E.slice(0,8),h=hn(S,i),P={type:fn,className:S,selector:h,declaration:f,pseudo:i,media:s,support:a};e.cache[u]=P,e._emitChange(P)}const y=e.cache[u].className;y&&(l+=` ${y}`)}}return l},e)}import.meta.env=Je;const Be=Ot.createRequire(import.meta.url),{default:An}=Be("fela-identifier"),{default:xn}=Be("fela-plugin-embedded"),{default:Pn}=Be("fela-plugin-multiple-selectors"),{default:On}=Be("fela-plugin-typescript"),In=$t==="development",Mn=()=>{const e=An(),o=an({devMode:In,enhancers:[Rn(),e],plugins:[xn(),Pn(),On()]});return{identifier:e,renderer:o}},{identifier:Qe,renderer:ie}=Mn(),Ln=e=>Array.isArray(e)?e:[e],jn=e=>({children:o})=>t(_o,{renderer:e},...Ln(o)),ce=jn(ie),Dn=e=>ie.renderRule(De,e),$e=Object.assign(Dn,{global:ie.renderStatic.bind(ie)}),c=(e,o)=>{const n=typeof o=="function"?o:()=>o;return Ho(n,e,Object.keys)},L=(e,o)=>Fo(Uo(e,o)),z=()=>g(Yo()),Nt="FRESH@0.1.0",Bn=L({format:zo(Nt,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:g(m({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),$n=oe(L({label:m({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:m({description:"Profession type or 'character class'."}),image:m({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:m({description:"A short description or summary of yourself as a candidate."}),quote:m({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),Nn=oe(L({willing:At([xt(),m()],{description:"Willingness to relocate."}),destinations:M(m({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),Hn=oe(L({travel:Go({description:"Percentage of time willing to travel (0 to 100)."}),authorization:m({description:"Work authorization: citizen, work visa, etc."}),commitment:M(m({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:xt({description:"Open to remote employment opportunities."}),relocation:Nn},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),_n=M(oe(L({label:m({description:"A label for this contact information."}),category:m({description:"Type of contact information: email, phone, url, postal, or IM."}),value:m({description:"Phone number, email address, website, etc."})}))),Fn=oe(L({email:m({description:"Primary contact email.",format:"email"}),phone:m({description:"Primary phone number."}),website:m({description:"Website, blog, or home page.",format:"uri"}),other:_n},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),Un=oe(L({address:m({description:"Your full postal address."}),code:m({description:"Postal or other official routing code."}),city:m({description:"Your home city."}),country:m({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:m({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),Yn=M(L({employer:m({description:"Employer name."}),position:g(m({description:"Your position or formal job title."})),url:g(m({description:"Employer website.",format:"uri"})),start:g(m({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:g(m({description:"A summary of your achievements and responsibilities under this employer."})),highlights:g(M(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(M(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),zn=oe(L({summary:m({description:"Summary of overall employment."}),history:Yn},{description:"The 'employment' section describes the candidate's formal employment history."})),Gn=M(L({category:m({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:g(m({type:"string",description:"Friendly media name."})),url:g(m({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),Xn=M(L({title:m({description:"Project name or code-name."}),category:g(m({description:"Project type: open-source, private, side project, etc."})),description:g(m({description:"Project description or summary."})),summary:g(m({description:"A summary of your achievements and responsibilities on the project."})),role:g(m({description:"Your role on the project: Contributor, Creator, etc."})),url:g(m({description:"Project URL.",format:"uri"})),media:g(Gn),repo:g(m({description:"Repo URL.",format:"uri"})),start:g(m({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:g(M(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:g(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(M(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),Wn=oe(L({sets:M(L({name:m({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:g(m({description:"Level of mastery of the skill."})),skills:M(m({description:"Title or ID of a skill from the skills list."}))})),list:M(L({name:m({description:"The name or title of the skill."}),level:g(m({description:"A freeform description of your level of mastery with the skill."})),summary:g(m({description:"A short summary of your experience with this skill."})),years:g(At([m(),Xo()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),Vn=M(L({title:g(m({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:m({description:"College or school name."}),area:g(m({description:"e.g. Arts"})),studyType:g(m({description:"e.g. Bachelor"})),start:g(m({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:g(m({description:"Grade or GPA."})),curriculum:g(M(m({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:g(m({description:"Website or URL of the institution or school.",format:"uri"})),summary:g(m({description:"A short summary of this education experience."})),keywords:g(M(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:g(M(m({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(m({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),Kn=L({summary:g(m({description:"Summary of overall education."})),level:m({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:g(m({description:"Your degree, if any (BSCS, BA, etc.)."})),history:g(Vn)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),qn=M(L({network:m({description:"The name of the social network, such as Facebook or GitHub."}),user:m({description:"Your username or handle on the social network."}),url:m({description:"URL of your profile page on this network.",format:"uri"}),label:g(m({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."}),Cl=L({name:m({description:"The candidate's name as it should appear on the resume."}),meta:Bn,info:g($n),disposition:g(Hn),contact:g(Fn),location:g(Un),employment:g(zn),projects:g(Xn),skills:g(Wn),education:g(Kn),social:g(qn),services:z(),recognition:z(),writing:z(),reading:z(),speaking:z(),governance:z(),languages:z(),samples:z(),references:z(),testimonials:z(),interests:z(),extracurricular:z(),affiliation:z()},{title:"FRESH Resume Schema"});var k;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(k||(k={}));var v;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator",e.DEVELOPER="Developer"})(v||(v={}));const Jn=Date.now(),Ne=e=>e==null?Jn:new Date(e).getTime(),Qn=e=>e.slice().sort((o,n)=>{const i=Ne(o.end),s=Ne(n.end);if(i>s)return-1;if(s>i)return 1;const a=Ne(o.start),l=Ne(n.start);return a>l?-1:l>a?1:0}),Zn=e=>Qn(e),ei=Zn([{title:"@getodk/xforms-engine",category:k.OPEN_SOURCE,description:`
      Client-agnostic, reactive runtime for
      [ODK XForms](https://getodk.github.io/xforms-spec/)
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xforms-engine",role:v.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/xpath",category:k.OPEN_SOURCE,description:`
      Extensible XPath 1.0 interpreter, supporting
      [ODK XForms](https://getodk.github.io/xforms-spec/#xpath-functions)
      extensions, arbitrary DOM implementations
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xpath",role:v.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/tree-sitter-xpath",category:k.OPEN_SOURCE,description:`
      [tree-sitter](https://tree-sitter.github.io/tree-sitter/) parser for
      XPath 1.0 syntax
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/tree-sitter-xpath",role:v.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/web-forms",category:k.OPEN_SOURCE,description:`
      [ODK Web Forms](https://github.com/getodk/web-forms) UI client
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/web-forms",role:v.CONTRIBUTOR,start:"2024-03",end:"2025-04"},{title:"Astro",category:k.OPEN_SOURCE,description:`
      "Build faster websites with less client-side Javascript"
    `,summary:`
      Collaborate with core contributors to add support for rendering
      [SolidJS](https://www.solidjs.com/) components.
    `,repo:"https://github.com/snowpackjs/astro",role:v.CONTRIBUTOR,start:"2021-07",end:"2021-07"},{title:"Enketo",category:k.OPEN_SOURCE,description:`
      "Web forms evolved. Deploy and conduct surveys that work without a
      connection, on any device."
    `,summary:`
      Long-term maintenance.
    `,repo:"https://github.com/enketo",role:v.DEVELOPER,start:"2021-04",end:"2023-10"},{title:"Microsite",category:k.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:v.CONTRIBUTOR,start:"2021-01",end:"2021-05"},{title:"HNDarkMode",category:k.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:v.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:k.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:v.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:k.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:v.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:k.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:v.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:k.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:v.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:k.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:v.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:k.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:v.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:k.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:v.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:k.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:v.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:k.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:v.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:k.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:v.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:k.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:v.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:k.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:v.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:k.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:v.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:k.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:v.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:k.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:v.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:k.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:v.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),ti=e=>e,oi=e=>e,ni=oi([{employer:"ODK",position:"Senior Software Engineer",start:"2021-03",end:"2025-04",summary:`
      ODK builds a comprehensive suite of open source data collection tools, used
      globally across a wide variety of campaigns with high social impact in
      public health & beyond.
    `,highlights:[`
        Initially joined to maintain Enketo\u2014ODK's inherited/legacy web-based data
        collection tool.
      `,`
        Conceived, created & led development of ODK Web Forms\u2014ODK's
        greenfield replacement for Enketo & complement to their flagship Collect
        product for Andriod devices\u2014successfully shipping to real users as of
        early 2025.
      `,`
        Prototyped initial design, architecture & implementation of Web Forms,
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
      `]}]),ii=ni;var b;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(b||(b={}));var fe;(function(e){e.LANGUAGES_PLATFORMS="Languages",e.SERVICES_DISTRIBUTED_SYSTEMS="Services",e.USER_INTERFACE_EXPERIENCE="UI/UX",e.DOMAIN_SPECIFIC_LANGUAGES="DSL\u200Bs"})(fe||(fe={}));const Ze={[fe.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:b.EXPERT},{name:"OpenAPI & documentation-driven APIs",level:b.EXPERT},{name:"Microservice architecture",level:b.ADVANCED},{name:"Fault tolerance",level:b.ADVANCED},{name:"Composable systems",level:b.ADVANCED}],[fe.USER_INTERFACE_EXPERIENCE]:[{name:"Component-based UI & JSX",level:b.EXPERT},{name:"DOM & Web APIs",level:b.EXPERT},{name:"Web performance",level:b.ADVANCED},{name:"Reactivity",level:b.ADVANCED},{name:"UI & UX design",level:b.ADVANCED},{name:"A11y",level:b.INTERMEDIATE}],[fe.DOMAIN_SPECIFIC_LANGUAGES]:[{name:"Domain modeling & extensibility",level:b.EXPERT},{name:"Interpreters & runtime",level:b.ADVANCED},{name:"Grammar-defined parsers",level:b.INTERMEDIATE},{name:"Domain-specialized tools",level:b.INTERMEDIATE},{name:"Runtime optimization",level:b.INTERMEDIATE}],[fe.LANGUAGES_PLATFORMS]:[{name:"TypeScript",level:b.EXPERT},{name:"Clojure",level:b.EXPERT},{name:"XPath",level:b.EXPERT},{name:"ODK XForms",level:b.EXPERT},{name:"CSS",level:b.EXPERT},{name:"HTML",level:b.EXPERT},{name:"SQL",level:b.ADVANCED},{name:"XSLT",level:b.ADVANCED},{name:"Python",level:b.INTERMEDIATE},{name:"Swift",level:b.BASIC},{name:"Java",level:b.BASIC}]},ri={list:Object.values(Ze).flatMap(De),merged:Ze,sets:Object.entries(Ze).map(([e,o])=>({name:e,skills:o.map(({name:n})=>n)}))},si=ti({name:"Trevor Schmidt",meta:{format:Nt,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:ii},info:{class:"Software Engineer",brief:`
Senior full-stack software engineer with 15+ years experience building & maintaining quality services, systems and solutions; tools and libraries to accelerate development; usable, performant and attractive applications.
    `.trim(),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:ei,skills:ri,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),He=Symbol("DEFAULT_TOPIC"),I={[He]:He,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},ai=e=>typeof e=="string"||typeof e=="symbol",Ht=e=>ai(e)&&e in I,et=e=>Ht(e)?I[e]:e,_t=Object.entries(I).reduce((e,o)=>{const[n,i]=o;return typeof n=="string"?{...e,[i]:n}:e},{}),li=e=>Ht(e)?e:_t[e],ci=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),di=Object.fromEntries(Object.entries(_t).map(([e,o])=>typeof o=="string"?[e,ci(o)]:null).filter(e=>e!=null)),mi=e=>{const o=et(e);if(typeof o=="string")return di[o]},_e=2,tt={minEm:1.0625,fluidVw:1.0625*_e,maxEm:1.25},T="@media (prefers-color-scheme: dark)",Fe="@media print",pi=["h1","h2","h3","h4","h5","h6"],ui=["dd","dl","dt","li","ol","ul"],gi=[...pi,...ui,"p"],be=tt.minEm/tt.maxEm,Q={h1:1.953,h2:1.563,h3:1.25},hi={h1:{minEm:Q.h1*be,fluidVw:Q.h1*be*_e,maxEm:Q.h1},h2:{minEm:Q.h2*be,fluidVw:Q.h2*be*_e,maxEm:Q.h2},h3:{minEm:Q.h3*be,fluidVw:Q.h3*be*_e,maxEm:Q.h3}},Ft=75,Ue=1.25,fi=["0.7fr",`${Ue}rem`,[`${Ft}ch`,`calc(100% - ${Ue*2}rem)`],`${Ue}rem`,"1.2fr"],ot=1,bi=["0.7fr",`${ot}rem`,[`${Ft*1.1875}ch`,`calc(100% - ${ot*2}rem)`],`${ot}rem`,"1.2fr"],yi=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],nt=yi.join(", "),Si=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],vi=Si.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),F={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Ei="hover-inherit-topic-color",ki={[I[He]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.DEFAULT_TOPIC.light},[T]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.DEFAULT_TOPIC.dark}}}}},[I.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.ABLEISM}}},[I.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.ARTS_CRAFTS}}},[I.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.LEMON}}},[I.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.MENTAL_ILLNESS}}},[I.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.NEURODIVERGENCE}}},[I.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.PHILOSOPHY}}},[I.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.POLITICS}}},[I.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.RACISM}}},[I.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.SEXISM}}},[I.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.SUBSTANCE_ABUSE}}},[I.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.TECHNOLOGY}}},[I.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.TRANSPHOBIA}}}},Ut=Qe(),r={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Ei,baseFontSizeRange:tt,darkMode:T,print:Fe,abbreviation:{"--abbreviation-highlight":"hsl(64deg 100% 50% / 0.25)",backgroundImage:`linear-gradient(${["to top","var(--abbreviation-highlight)","var(--abbreviation-highlight) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[T]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[T]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:Ut,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[T]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${Ut}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[T]:{color:"hsl(212deg, 10%, 90%)"}}},[T]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[T]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[T]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:nt},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:nt,nested:{[T]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em",fontWeight:300},emphasize:{color:"#000"},firstLastMarginZeroElements:gi,gitHubLogo:{fill:"#171515",nested:{[T]:{fill:"#fff"}}},headingLineHeight:.9375,headingRanges:hi,[T]:{abbreviation:{"--abbreviation-highlight":"hsl(336deg 85% 25%)"},aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg 60% 4%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)",fontWeight:200},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(190deg 20% 97%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"oklch(0.71 0.16 355.75)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:fi,mainGridSidePaddingRem:Ue,monospaceFont:nt,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[T]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{color:"hsl(210deg 12% 5% / 95%)",fontFamily:vi},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[T]:{backgroundColor:"hsl(336deg, 100%, 7%)"},[Fe]:{backgroundColor:"transparent"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[T]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"#fffff1",nested:{[T]:{backgroundColor:"hsl(41deg, 100%, 8%)"},[Fe]:{backgroundColor:"transparent",padding:0}}},itemOdd:{backgroundColor:"transparent"},itemEven:{backgroundColor:"oklch(0.99 0.03 100.56)",nested:{[T]:{backgroundColor:"oklch(0.26 0.06 71.28)"},[Fe]:{backgroundColor:"transparent"}}}},skillLevel:{[b.BASIC]:{color:"hsl(207deg, 25%, 83%)",nested:{[T]:{color:"hsl(207deg, 15%, 43%)"}}},[b.INTERMEDIATE]:{color:"hsl(188deg, 53%, 74%)",nested:{[T]:{color:"hsl(188deg, 53%, 34%)"}}},[b.ADVANCED]:{color:"hsl(188deg, 70%, 59%)",nested:{[T]:{color:"hsl(188deg, 80%, 39%)"}}},[b.EXPERT]:{color:"hsl(152deg, 100%, 39%)",nested:{[T]:{color:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:bi,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[T]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[T]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:ki,topicTagIdentifier:Qe(),topicTagInner:{backgroundImage:he(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[T]:{backgroundImage:he(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:he(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[T]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:he(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visiblyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[T]:{color:"hsl(194deg, 8%, 50%)"}}}}}},it=["b","em","h1","h2","h3","i","strong"],Ye=["h1","h2","h3","h4","h5","h6"],Ti=[...Ye,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Ci=Array.from(new Set([...Ye,...Ti,"div","fieldset","form","hgroup","hr","pre"])),wi=he(`
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
    font-size:        ${ne(`${r.baseFontSizeRange.minEm}em`,`${r.baseFontSizeRange.fluidVw}vw`,`${r.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${C(["html","body"],{...r.document})}

  ${C(["body"],{...r.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${Ye.join(",")} {
    font-family:             Minipax, Georgia, serif;
    font-smooth:             always;
    font-weight:             normal;
    line-height:             ${r.headingLineHeight};
    margin-bottom:           1rem;
    margin-top:              1rem;
    padding-left:            1rem;
    text-indent:             -1rem;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`),Ri=()=>{$e.global(he(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${Ci.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${Ye.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${C(it,r.emphasize)}

      h1 {
        font-size: ${ne(`${r.headingRanges.h1.minEm}em`,`${r.headingRanges.h1.fluidVw}vw`,`${r.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${ne(`${r.headingRanges.h2.minEm}em`,`${r.headingRanges.h2.fluidVw}vw`,`${r.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${ne(`${r.headingRanges.h3.minEm}em`,`${r.headingRanges.h3.fluidVw}vw`,`${r.headingRanges.h3.maxEm}em`)};
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

      ${C(["hr:after"],{...r.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${C(["pre"],r.pre)}

      ${C(["code"],{...r.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

      pre code {
        background-color: transparent;
        display:          block;
        line-height:      1.325em;
        margin:           0;
        padding:          0;
      }

      ${r.firstLastMarginZeroElements.map(e=>`${e}:first-child`).join(", ")} {
        margin-top: 0;
      }

      ${r.firstLastMarginZeroElements.map(e=>`${e}:last-child`).join(", ")} {
        margin-bottom: 0;
      }

      ${C(["a"],{...r.links,fontWeight:"bolder"})}

      ${C(["abbr"],{...r.abbreviation,textDecoration:"none"})}

      ${C(["aside","small"],r.deemphasize)}

      ${C(["aside"],{...r.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem",nested:{"& a":{fontWeight:600}}})}

      ${it.map(e=>`aside ${e}`).join(", ")} {
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

      ${r.darkMode} {
        ${C(["html","body"],{...r[r.darkMode].document})}

        ${C(["body"],{...r[r.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${C(it,r[r.darkMode].emphasize)}
        ${C(["abbr"],r[r.darkMode].abbreviation)}
        ${C(["pre"],r[r.darkMode].pre)}
        ${C(["code"],r[r.darkMode].code)}
        ${C(["a"],r[r.darkMode].links)}
        ${C(["aside","small"],r[r.darkMode].deemphasize)}
        ${C(["aside"],r[r.darkMode].aside)}
        ${C(["hr:after"],r[r.darkMode].separator)}
      }

      ${r.print} {
        @page {
          margin: 0.325in;
        }

        ${C(["a","a:hover","code"],{color:"inherit",fontWeight:"inherit",textDecorationColor:"currentcolor"})}

        ${C(["abbr"],{backgroundImage:"none"})}

        ${C(["code"],{backgroundColor:"transparent",borderRadius:0,display:"inline-flex",lineHeight:"inherit",padding:0})}
      }
    `))},Ai=`
  ${r.mainGridColumns[0]}
  ${r.mainGridColumns[1]}
  min(
    ${r.mainGridColumns[2][0]},
    ${r.mainGridColumns[2][1]}
  )
  ${r.mainGridColumns[3]}
  ${r.mainGridColumns[4]}
`.replace(/\s+/g," "),Yt={gridColumn:"1 / -1"},zt=$e(Yt),j=c("div",{nested:{[`& > .${zt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0},[r.print]:{gridTemplateColumns:"0 0 auto 0 0"}},display:"grid",gridTemplateColumns:Ai,...Yt}),xi=({children:e,shadow:o,...n})=>t(j,{...n},e),Gt=([e,o,n])=>`rgba(${[e,o,n,0].join(",")})`,Xt=["12rem 100%","auto"],Wt=Xt.join(", "),Pi=Xt.map(e=>e.replace("100%","100.1%")).join(", "),Oi=ie.renderKeyframe(()=>({"0%":{backgroundSize:Wt},"100%":{backgroundSize:Pi}}),{}),Vt="5px",Kt=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`rgba(${o.join(",")}) calc(11rem + ${Vt})`,`${Gt(o)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${Gt(e)} ${Vt}`].join(", ")})`].join(", ")}:null,Ii=e=>{if(e!=null){const{darkMask:o,darkScroll:n,lightMask:i,lightScroll:s}=e;return{dark:Kt(n,o),light:Kt(s,i)}}return{dark:null,light:null}},qt=c(xi,({shadow:e})=>{const{dark:o,light:n}=Ii(e),i=o==null?null:{[r.darkMode]:o};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:Wt,paddingRight:r.mainGridSidePaddingRem,overflowX:"auto",nested:{...i,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:Oi,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),Mi=c(j,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Jt=c("div",{paddingLeft:"1rem"}),Li=c("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),ji=c("div",{flexGrow:1,padding:"1rem 0.75rem"}),rt="div",Di={ContentContainer:rt,InnerContainer:Jt,OuterContainer:rt,SymbolContainer:rt},Qt=e=>{const{children:o,ContentContainer:n,InnerContainer:i,OuterContainer:s,outerContainerProps:a,symbol:l,SymbolContainer:d}={...Di,...e};return t(Mi,{as:s,...a},t(Li,{as:d,role:"presentation"},l),t(Jt,{as:i},t(ji,{as:n},o)))},Bi=c("pre",{fontSize:"1rem"}),$i=c(qt,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[r.darkMode]:{}}}),Ni=e=>t($i,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),Hi=c(j,{...r.pre,nested:{[r.darkMode]:{...r[r.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),_i=c("div",{...r.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Fi=({children:e})=>t(Qt,{ContentContainer:Bi,InnerContainer:Ni,OuterContainer:Hi,symbol:"{",SymbolContainer:_i},e),Ui=e=>e.map((o,n)=>n),st=(e,o)=>Ui(e).sort((n,i)=>{const s=o(e[n],e[i]);return s===0?n===i?0:n>i?1:-1:s}).map(n=>e[n]),Yi=e=>typeof e=="object"&&e!=null,zi=c("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),Gi=(e,o)=>Yi(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&Wo().test(o),Xi=({["aria-label"]:e,children:o,role:n})=>t(zi,{"aria-label":e,role:n},o),Wi={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},Vi={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",ODK:"Open Data Kit (https://getodk.org/)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},Ki={...Wi,...Vi},Zt=le.resolve(process.cwd(),"./syntax-themes"),[qi,Ji]=await Promise.all([It(le.resolve(Zt,"./yi-dark.json")),It(le.resolve(Zt,"./yi-light.json"))]),Qi={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},Zi={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},er=e=>e.trim().split(/\b\W*\b/).reduce((o,n)=>({...o,...Zi[n]}),{}),tr=e=>Object.entries(e).reduce((o,[n,i])=>{const s=Qi[n];if(i==null||typeof s!="string")return o;const a=s==="fontStyle"?er(i):{[s]:i};return{...o,...a}},{}),[or,nr]=await Promise.all([Mt({theme:qi}),Mt({theme:Ji})]),ir=new Set(tn.map(e=>e.id)),rr=new Set(["ts","tsx","typescript"]),eo=e=>e.explanation?.reduce((o,n)=>({...o,...n.scopes.reduce((i,{themeMatches:s})=>({...i,...s.reduce((a,{settings:l})=>({...a,...tr(l)}),i)}),o)}),{color:e.color}),sr=(e,o,n={})=>{const i=eo(e),s=eo(o),a=s==null?null:{nested:{[r.darkMode]:s}},{content:l}=e;if(i==null&&a==null)return t("span",n,l);const d={...i,...a},p=c("span",d);return t(p,n,l)},ar=$e({paddingRight:"1rem"}),lr={className:ar},cr=(e,o)=>Pt(t(ce,{},t("pre",{},t("code",{},...e.reduce((n,i,s)=>{const a=i.map((d,p)=>{const u=o[s][p],y=p===i.length-1?lr:{};return sr(d,u,y)}),l=s===0?"":`
`;return[...n,l,...a]},[]))))),dr=e=>{const{lang:o,value:n,meta:i}=e,s=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,a=String(o)==="json5"?"json":o;let l;const d=n.replace(/^\n+|\n+$/g,"");if(!ir.has(a))l=on.plainTextRenderer(d,{});else{const p=nr.codeToThemedTokens(d,a),u=or.codeToThemedTokens(d,a);l=cr(p,u)}rr.has(a)&&!i?.includes("ignore"),e.children=[],e.type="html",e.value=l},mr=()=>o=>{Ve(o,"code",dr)};import.meta.env=Je;const Re=Ot.createRequire(import.meta.url),pr=Re("rehype-parse"),ur=Re("rehype-remark"),gr=Re("remark"),hr=Re("remark-abbr"),fr=Re("remark-stringify"),br=({className:e,children:o,...n})=>e==="language-id"?null:e==="code-container"?Le(H,n,...Rt(o)):t("div",{className:e,...n},...Rt(o)),yr=({children:e,...o})=>Gi(o,e)?t(Xi,o,e):t("span",o,e),at={components:{div:br,pre:Fi,span:yr},rehypePlugins:[Vo],remarkPlugins:[mr,hr,vn,Ko,qo]},to=e=>{const{children:o=Le(()=>null,{}),components:n={},rehypePlugins:i=[],remarkPlugins:s=[]}=e,a={...at.components,...n},l={mdx:Le,MDXProvider:$o,components:a,props:{}},d=typeof o=="string"?Qo(o).trim():o,p=[...at.rehypePlugins,...i],u=[...at.remarkPlugins,...s],y=Bo.sync(d,{rehypePlugins:p,remarkPlugins:u,skipExport:!0}).trim(),{code:f}=Jo(y,{objectAssign:"Object.assign"}),E=Object.keys(l),S=Object.values(l),h=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...E,`${f}

${h}`)(Le,...S)},Sr=Object.entries(Ki).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),vr=e=>[e,Sr].join(`

`),lt=([e,...o],{includeAbbreviations:n=!0})=>{const i=typeof e=="string"?[e,...o].join(""):String.raw(e,...o);return n?vr(i):i},ye=(...e)=>{const o=lt(e,{includeAbbreviations:!0});return t(ce,{},t(to,{},o))},oo=(...e)=>{const o=lt(e,{includeAbbreviations:!0});return t(ce,{},t(to,{components:{p:H}},o))},Er=(...e)=>{const o=lt(e,{includeAbbreviations:!1});return gr().use(pr).use(ur).use(fr).use(Zo).use(en).processSync(o).contents.toString().trim()},Ae=(e,o)=>Number(e.toFixed(o)),de=parseInt("ff",16),no=parseInt("00",16),io=.05,ct=.15,dt=.05;class xe extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const kr=/^[0-9a-f]{40}$/i,Tr=e=>kr.test(e),Cr=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),wr=e=>e.length===10,Rr=/([0-9a-f]{2})([0-9a-f]{2})/ig,mt=e=>{if(!Tr(e))throw new xe(e);const n=Array.from(e.matchAll(Rr)??[]).map(([i,s,a])=>({x:s,y:a}));if(!wr(n))throw new xe(e);return n},Ar=Symbol("IS_POINT"),xr=e=>Object.assign(e,{[Ar]:!0}),ro=e=>{const o=parseInt(e,16);if(o>de||o<no)throw new Error(`Not a valid coordinate: ${e}`);return xr(o)},Pr=({x:e,y:o})=>({x:ro(e),y:ro(o)}),Or=e=>e.length===10,pt=(e,o)=>{try{const n=o.map(Pr);if(!Or(n))throw new xe(e);return n}catch{throw new xe(e)}},Ir=Symbol("SCALED_COORDINATE"),so=e=>e.reduce(({max:o,min:n},{y:i})=>({max:Math.max(Number(o),Number(i)),min:Math.min(Number(n),Number(i))}),{max:-Infinity,min:Infinity}),X=(e,o)=>Object.assign(Ae(e,2),{[Ir]:o}),Se=({x:e,xScale:o,y:n,yScale:i})=>({x:X(e,o),y:X(n,i)}),ut=({x:e,y:o},{xScale:n,xShift:i,yScale:s,yShift:a})=>Se({x:(e+i)*n,xScale:n,y:(o+a)*s,yScale:s}),gt=({points:e,xMax:o,xScale:n,yScale:i})=>[Se({x:0,xScale:n,y:0,yScale:i}),...e,Se({x:o,xScale:n,y:0,yScale:i})].reduce((s,a,l,d)=>{if(l===0||l===d.length-1)return s;const p=X(0,i),u=[{x:d[l-1].x,y:p},a,{x:d[l+1].x,y:p}];return[...s,u]},[]),ht=({segments:e,xMax:o,xScale:n,yScale:i})=>e.map(s=>{const[{x:a,y:l},{x:d,y:p},{x:u,y}]=s,f=u-a,E=p/f,h=6/E;if(h<1){const A=h*.2*a,w=a-A,_=u+A,D=w<0?Math.abs(w):_>o?o-_:0,R=w+D,x=_+D,B=h*.3,N=d+D,U=B*p,V=p-U;return[Se({x:R,xScale:n,y:l,yScale:i}),Se({x:N,xScale:n,y:V,yScale:i}),Se({x,xScale:n,y,yScale:i})]}return s}),Mr=({x:e,y:o},{x:n,y:i})=>{const s=n-e,a=i-o;return{angle:Math.atan2(a,s),length:Math.sqrt(s**2+a**2)}},ao=({current:e,previous:o,next:n,reverse:i,smoothing:s,xScale:a,yScale:l})=>{const d=i?Math.PI:0,p=Mr(o,n),u=p.angle+d,y=p.length*s,{x:f,y:E}=e,S=f+Math.cos(u)*y,h=E+Math.sin(u)*y;return{x:X(S,a),y:X(h,l)}},ft=({index:e,point:o,points:n,smoothing:i,xScale:s,yScale:a})=>{const l=n[e-1];if(l==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const d=n[e-2]??l,p=ao({current:l,previous:d,next:o,reverse:!1,smoothing:i,xScale:s,yScale:a}),u=l,y=n[e+1]??o,f=ao({current:o,previous:u,next:y,reverse:!0,smoothing:i,xScale:s,yScale:a});return[p,f,o]},lo=({segment:e,smoothing:o,xScale:n,yScale:i})=>e.reduce((s,a,l)=>{if(l===0)return s;const p=ft({index:l,point:a,points:e,smoothing:o,xScale:n,yScale:i}).map(u=>`${u.x},${u.y}`).join(" ");return[...s,`C ${p}`]},[]),Lr=({baseYCoordinate:e,isBaselineBelowMidpoint:o,segments:n,xScale:i,yMax:s,yScale:a,yTilt:l=!1})=>n.reduce((d,p,u,y)=>{const{length:f}=y,[E,S,h]=p,{x:P,y:A}=E,{x:w,y:_}=S,{x:D,y:R}=h,x=D-P,B=x===0?0:Math.max(_/x*dt,ct),N=l?.1:0,U=1-N,V=1+N,ee=u%2==0?U:V,re=o?A+e:s-A+e,J={x:P,y:X(re*ee,a)},K=u%2==0?U:V,Y=o?R+e:s-R+e,$={x:X(D,i),y:X(Y*K,a)},G=w-P,W=D-w,se=W>G?0:0-(w-P)*io,q=(f-u)*(a/100*s),ae={x:X(w+se,i),y:X(_-q,a)},O=lo({segment:[J,ae,$],smoothing:B,xScale:i,yScale:a}),te=W>G?(D-w)*io:0,wt={x:X(w+te,i),y:X(s-q,a)},Do=lo({segment:[$,wt,J],smoothing:B,xScale:i,yScale:a});return[...d,[`M ${J.x},${J.y}`,...O,...Do,"Z"].join(" ")]},[]),jr=({hash:e,xPadding:o=0,xScale:n=1,yOffset:i=.5,yPadding:s=0,yScale:a=1})=>{const l=mt(e),d=pt(e,l),p=st(d,({x:R},{x})=>Number(R)===Number(x)?0:Number(R)>Number(x)?1:-1),u=o/2,y=s/2,f=p.map(R=>ut(R,{xScale:n,xShift:u,yScale:a,yShift:y})),E=(de+o)*n,{max:S}=so(f),h=(S+s)*a,P=gt({points:f,xMax:E,xScale:n,yScale:a}),A=ht({segments:P,xMax:E,xScale:n,yScale:a}),w=i>.5,_=w?h*i:-1*h*i;return{segmentPaths:Lr({baseYCoordinate:_,segments:A,xScale:n,yMax:h,isBaselineBelowMidpoint:w,yScale:a}),xMax:E,yMax:h}};var bt;(function(e){e.PNG="png"})(bt||(bt={}));const yt=process.cwd(),Pe=e=>e.startsWith("/")?le.resolve(yt,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):le.extname(e)==""?le.resolve(yt,"./src/pages/",`${e}.tsx`):e;var ve;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(ve||(ve={}));var me;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(me||(me={}));const Dr="origin",Br="main",Oe=e=>{const{branch:o=Br,decode:n,filter:i=ve.FIRST,format:s,path:a=yt,remote:l=Dr}=e,{error:d,stdout:p}=rn.spawnSync("git",["log",...i.split(" "),`--branches=${o}`,`--format=${s}`,`--remotes=${l}`,"--",a]);if(d)throw d;const u=p.toString().trim();return(u===""?[]:u.split(`
`)).map(n)},St=e=>{const o=new Date(e);if(!isNaN(o.getTime()))return o},$r=e=>{const o=Pe(e),[n=null]=Oe({decode:St,filter:ve.CURRENT,format:me.ISO_DATE,path:o});return n},Nr=e=>{const o=Pe(e),[n=null]=Oe({decode:St,format:me.ISO_DATE,path:o});return n},Hr=e=>{const o=Pe(e),[n=null]=Oe({decode:St,filter:ve.FIRST_MERGE,format:me.ISO_DATE,path:o});return n},vt=e=>{const o=Ke.readFileSync(e).toString();let n=sn.createHash("sha1");return n.update(o),n.digest("hex")},_r=e=>{const o=Pe(e),[n]=Oe({decode:De,format:me.HASH,path:o});return n??vt(o)},Fr=e=>{const o=Pe(e),[n]=Oe({decode:De,filter:ve.FIRST_MERGE,format:me.HASH,path:o});return n??vt(o)},Ur={height:630,width:1200},Yr=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",zr=nn({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Gr=(e,o,n=bt.PNG,i=Ur)=>{const s=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=zr.hash(o),l=le.resolve(s,`${a}.${n}`),d=l.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:l,imageType:n,publicPath:d,...i}}};var pe;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(pe||(pe={}));const co=(e,o,n,i,s=[I.TECHNOLOGY])=>{const a=i===pe.MUTABLE,l=i===pe.IMMUTABLE_MERGE,d=o.replace(/^file:(\/\/)?/,""),p=a?vt(d):l?Fr(e):_r(e),u={created:(l?Hr(e):Nr(e))??Ke.statSync(d).ctime,updated:$r(e)??Ke.statSync(d).mtime},f=Gr(o,a?{importURL:o,stat:u,topics:s}:{hash:p,importURL:o});return{hash:p,host:Yr,path:e,social:f,stat:u,title:n,topics:s}},mo=()=>t(H,null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Xr=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t(mo,null))),Wr=1.6180334,Vr=4,po=Ae(Wr*5,6),uo=.75,Ee=.15,Kr=1.5,ke=ne("6rem",`${100/po}vw`,"10rem"),qr=c(j,{height:ke,position:"relative",width:"100%"}),Jr=c("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Qr=c("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var Ie;(function(e){e.INLINE="inline",e.NONE="none"})(Ie||(Ie={}));const Et={xPadding:Vr,xScale:po,yOffset:uo,yPadding:Ee,yScale:Kr},kt=e=>{const{className:o,defsUsage:n=Ie.INLINE,hash:i,height:s,rawSVG:a=!1,styleRenderer:l=ie,title:d,topics:p=[],width:u}=e,y=p.length<2?[...p,I[He]]:p,f=R=>`${R}-${i}`,{segmentPaths:E,xMax:S,yMax:h}=jr({...Et,hash:i}),P=h*uo,A=h*Ee/10.24,w=A*.75,D=t(Jr,{className:zt,height:s,preserveAspectRatio:"none",viewBox:[0,0,S,h].join(" "),width:u},t("title",null,"Generated art for the page or post titled"," ",t("i",null,d),", with the content or commit hash ",i," ",y.length>0?[", and the topics: ",y.map(String).join(", ")]:null),t("defs",null,n===Ie.INLINE?t(mo,null):null,t("filter",{id:f("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:w,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:A,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:f("blurOverlayClip")},t("rect",{x:"0",width:S,y:P,height:h})),t("filter",{id:f("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:w}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:A})),t("filter",{id:f("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:w}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:A}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:A})),t("g",{id:f("blobs")},E.map((R,x)=>{const B=x%y.length,N=y[B],U=l.renderRule(()=>({...r.topicColors[N]}),Object.keys);return t(Qr,{key:R,className:U,d:R,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${h*Ee})`,`scale(1, ${1-Ee*2})`].join(" "),filter:`url(#${f("blur")})`},t("use",{href:`#${f("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${f("blurOverlayClip")})`,filter:`url(#${f("blurOverlay")})`,transform:[`translate(0, ${h*Ee})`,`scale(1, ${1-Ee*2})`].join(" ")},t("use",{href:`#${f("blobs")}`,mask:"url(#softVerticalFade)"})));return a?D:t(qr,{className:o},D)},Zr=[,"January","February","March","April","May","June","July","August","September","October","November","December"],es=c("time",{nested:{[r.darkMode]:{...r[r.darkMode].deemphasize}},...r.deemphasize});var Z;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(Z||(Z={}));const Te=({date:e,mode:o=Z.DEFAULT,...n})=>{const i=e.getMonth()+1,s=e.getFullYear(),a=o===Z.SHORT?`${i}/${s}`:o===Z.META?"":[e.getDate(),Zr[i],s].join(" ");return t(es,{...n,datetime:e.toISOString()},a)},ts=c("a",{...r.topicTagLink(r.topicTagIdentifier.className)}),os=c("span",r.topicTagIdentifier()),ns=c(os,{...r.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),is=({className:e,link:o=!0,topic:n})=>{const i=mi(n),s=et(n);if(i==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=o?ts:"span",l=o?{href:`/blog/topics/${i}/`}:{};return t(a,{className:[e,r.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...l},t(ns,null,s))},go=c(is,e=>({...r.topicTagOuter,...r.topicColors[et(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),rs=c("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),ss=c("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),ho=({className:e,link:o=!0,topics:n})=>t(rs,{className:e},n.map(i=>typeof i=="string"?t(ss,{key:li(i)},t(go,{link:o,topic:i})):null)),as=e=>e.reduce((o,n)=>{const i=n.stat.created.getFullYear(),s=o[i]??[];return{...o,[i]:[...s,n]}},{}),ls=c(j,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),cs=c(j,{...r.blog.listing.item,minHeight:ke,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),ds=c(j,{paddingTop:`calc(${ke} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),ms=c(j,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),ps=c("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),us=$e({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),gs=c("h2",{...r.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),hs=c(Te,{padding:"0 0.5rem 0.125rem 0"}),fs=c(ho,{gridColumn:"3 / 3"}),bs=c("div",{...r.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),ys=c("a",{fontSize:"0.875em"});var ze;(function(e){e.DATE="date"})(ze||(ze={}));var Ge;(function(e){e.ASC="asc",e.DESC="desc"})(Ge||(Ge={}));const Ss=({order:e=Ge.DESC,posts:o,sort:n=ze.DATE})=>{const i=o.slice().sort((a,l)=>e===Ge.DESC&&n===ze.DATE?a.stat.created>l.stat.created?-1:1:0),s=as(i);return t(H,null,Object.entries(s).map(([a,l])=>t(H,{key:a},t(ls,null,l.map(d=>{const{CustomArt:p=kt,description:u,hash:y,path:f,stat:{created:E},title:S,topics:h}=d;return t(cs,{key:f},t(ds,{as:"a",href:f},t(ps,null,t(p,{defsUsage:Ie.NONE,hash:y,padded:!0,renderType:"listing",title:S,topics:h})),t(ms,null,t(gs,{className:us},S),t(hs,{date:E}))),t(fs,{link:!1,topics:h}),t(bs,{className:r.blog.listing.descriptionIdentifier},u),t("p",null,t(ys,{href:f},"Read more\u2026")))})))))},vs=()=>t(H,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));Ri();const fo=({children:e,meta:{description:o,host:n,redirect:i,social:{image:s},title:a},...l})=>i?t(Lt,{...l},t(je.title,null,"Redirecting to ",i),t("meta",{"http-equiv":"refresh",content:`0; URL=${i}`}),t("link",{rel:"canonical",href:i})):t(Lt,{...l},t(je.title,null,a," | Eyelidlessness"),o!=null?t(je.description,null,o):t(H,null),t("meta",{name:"theme-color",content:r.siteLogo.color}),t("style",{dangerouslySetInnerHTML:{__html:wi}}),t("meta",{name:"twitter:card",content:"summary_large_image"}),t("meta",{name:"twitter:site",content:"@eyelidlessenss"}),t(je.image,{alt:a,height:s.height,src:`${n}${s.publicPath}`,width:s.width}),t(H,null,e),t(vs,null)),Es=({as:e="div",devilsBreakpoint:o,gap:n,...i})=>{const s=c(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return t(s,{...i})},ks=c("svg",{...r.visiblyHidden,position:"absolute"}),ue=512,bo=[0,0,ue,ue].join(" "),Ts=ue/2,Cs=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),ws=()=>t(ks,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:bo,width:"0"},t("defs",null,t("mask",{id:"octocat-knockout"},t("rect",{fill:"#fff",height:ue,mask:"url(#octocat)",rx:Ts,width:ue}),t("path",{d:Cs,fill:"#000"})))),Rs=c("rect",{...r.gitHubLogo}),yo=({className:e})=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:bo},t("title",null,"GitHub"),t(Rs,{height:ue,mask:"url(#octocat-knockout)",width:ue})),Xe={height:60,width:338},As=c("svg",{display:"inline-block",maxWidth:"100%",width:`${Xe.width}px`}),xs=c("use",{nested:{[r.darkMode]:{...r[r.darkMode].siteLogo}},...r.siteLogo,fill:"currentcolor"}),Ps=`0 0 ${Xe.width} ${Xe.height}`,Os=()=>t(As,{viewBox:Ps},t(xs,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),t("title",null,"Eyelidlessness")),{columns:Ce}=r.siteHeader,Is=`
  ${Ce[0]}
  ${Ce[1]}
  min(
    ${Ce[2][0]},
    ${Ce[2][1]}
  )
  ${Ce[3]}
  ${Ce[4]}
`.replace(/\s+/g," "),Ms=c("header",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Is,padding:"clamp(0.5rem, 4vmin, 2rem) 0",position:"relative",zIndex:1,nested:{[r.print]:{nested:{'&[data-page-id="resume"]':{display:"none"}}}}}),Ls=c("div",{gridColumn:3}),js=c("div",{margin:"0 auto"}),Ds=c("a",{textDecoration:"none"}),Bs=c("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),So=1,$s=c("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${So/2}rem`,padding:0}),Ns=c("a",{...r.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[r.darkMode]:{...r[r.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),vo="1.5em",wl=c(yo,{display:"block",width:`clamp(1.125em, 4vw, ${vo})`}),Hs=e=>{const o=e.meta.pageId==null?{}:{"data-page-id":e.meta.pageId},n=[{label:"Blog",location:"/"},{label:"Hire me",location:"/resume/#resume"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],i=n.reduce((l,d)=>typeof d.label=="string"?l+d.label.length:l,0),s={horizontal:"2rem"},a=`${[`${Xe.width}px`,s.horizontal,`${i+2}ch`,vo,`${n.length*So}rem`].join(" + ")}`;return t(Ms,{...o},t(Ls,null,t(Es,{as:"nav",devilsBreakpoint:a,gap:s},t(js,null,t(Ds,{href:"/"},t(Os,null))),t(Bs,null,n.map(({location:l,label:d})=>t($s,null,t(Ns,{href:l},d)))))))},_s=c(j,{paddingTop:0,paddingBottom:"4em",nested:{[r.print]:{nested:{'&[data-page-id="resume"]':{paddingTop:0,paddingBottom:0}}}}}),Fs=e=>{if(e.pageId!=null)return{"data-page-id":e.pageId}},Eo=({meta:e,...o})=>t(ce,null,e.redirect==null?t(H,null,t(ws,null),t(Hs,{meta:e}),t(_s,{as:"main",...Fs(e),...o})):t(H,null)),Us=c(j,{...r.description,nested:{...r.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Ys=c("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),zs=c("div",{fontSize:"0.889em"}),Gs=({as:e="section",title:o,...n})=>t(Us,{as:e,itemprop:"description"},o?t(Ys,null,o):null,t(zs,{...n})),Xs=c(j,{paddingTop:"1rem"}),Ws=c("h1",{marginBottom:"0.25rem"}),Vs=c(j,{paddingBlock:"1rem"}),Ks=e=>{const{children:o,CustomArt:n,description:i,descriptionRaw:s,hash:a,stat:{created:l},title:d,topics:p}=e;return t(H,null,t(fo,{meta:{...e,description:s}}),t(Eo,{as:"article",meta:e},t(Vs,null,n==null?t(kt,{hash:a,title:d,topics:p}):t(n,{hash:a,renderType:"post",StylesProvider:ce,title:d,topics:p}),t(Xs,null,t(Ws,null,d),t(Te,{date:l,itemprop:"datePublished"}),t(ho,{link:!1,topics:p}))),t(Gs,null,i),o))},ko={IMMUTABLE:pe.IMMUTABLE,IMMUTABLE_MERGE:pe.IMMUTABLE_MERGE},qs=async e=>{const{description:o,importURL:n,path:i,redirect:s,title:a,topics:l,type:d=ko.IMMUTABLE_MERGE}=e,{CustomArt:p,hash:u,host:y,social:f,stat:E}=co(i,n,a,d,l),S=Er`${Pt(t(H,null,o))}`;return{CustomArt:p,description:o,descriptionRaw:S,hash:u,host:y,path:i,redirect:s,social:f,stat:E,title:a,topics:l}},To="@media screen and (min-width: 41.666rem)",Js=c("div",{display:"block",margin:0,padding:0,nested:{"& > *":{containerType:"inline-size",paddingTop:"1rem"},[To]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}},[r.print]:{display:"none"}}}),Qs=c("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),Zs=e=>{const o=Array();return e.role===v.CREATOR&&o.push(e.description),e.summary!=null&&o.push(e.summary),o.length===0&&o.push(e.description),t(Qs,null,o.map(n=>ye(n)))},ea=({date:e,...o})=>e==null?null:t(Te,{...o,date:e}),ta=c("span",{nested:{[r.darkMode]:{...r[r.darkMode].deemphasize}},...r.deemphasize}),oa=/^(\d{4})-(\d{2})$/,Co=e=>{if(e==null)return null;const o=oa.exec(e);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,i]=o;return new Date(`${n}-${i}-01T00:00:00`)},wo=c("div",{fontSize:"0.88889em",whiteSpace:"nowrap",nested:{"& time":{fontSize:"inherit"}}}),Ro=({className:e="",range:[o,n]})=>{const i=Co(o),s=Co(n);return o==n?t(wo,{className:e},t(Te,{date:i,itemprop:"endDate",mode:Z.SHORT})):t(wo,null,t(Te,{date:i,itemprop:"startDate",mode:Z.SHORT}),t(ta,null,"-"),t(ea,{date:s,itemprop:"endDate",mode:Z.SHORT}))},na=c("div",{display:"grid",rowGap:"0.325rem",nested:{"& > *":{margin:0}}}),Tt="1.0625rem",ia=c("h3",{fontFamily:r.prose.fontFamily,fontWeight:500,fontSize:Tt,paddingLeft:0,textIndent:0,nested:{[r.print]:{fontSize:"1rem"}}}),ra=c("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),sa=c("a",{alignSelf:"baseline",display:"block",flexShrink:0,height:`calc(${Tt} * ${r.headingLineHeight})`,lineHeight:`calc(${Tt} * ${r.headingLineHeight*1.5})`,padding:"0 0.5rem",zIndex:1,nested:{"& svg":{width:"1em"},[To]:{paddingLeft:0},[r.print]:{display:"none"}}}),aa=c("div",{flexGrow:1,paddingTop:"0.05556rem"}),la=c("div",{alignItems:"start",display:"flex",padding:"1rem 0 0"}),Ao=({project:{description:e,end:o,repo:n,role:i,title:s,start:a,summary:l}})=>t(la,null,t(sa,{href:n},t(yo,null)),t(aa,null,t(na,null,t(ia,null,t(ra,{href:n},s)),t(Ro,{range:[a,o]})),t(Zs,{role:i,description:e,summary:l??null}))),xo=c("h2",{fontSize:ne(`${r.headingRanges.h3.minEm}em`,`${r.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Po=c("div",{marginTop:"0.5rem"}),ca=c("div",{display:"none",nested:{[r.print]:{display:"block"}}}),da=e=>{const{creator:o,contributor:n}=e.projects.reduce((s,a)=>{const l=a.role===v.CREATOR?"creator":"contributor";return{...s,[l]:[...s[l],a]}},{creator:[],contributor:[]}),i=o.length+n.length;return t(H,null,t(Js,null,t("div",null,t(xo,null,"Projects I Created"),t(Po,null,o.map(s=>t(Ao,{project:s})))),t("div",null,t(xo,null,"Open Source Contributions"),t(Po,null,n.map(s=>t(Ao,{project:s}))))),t(ca,null,t("h2",null,"Projects"),i," projects listed at "," ",t("a",{href:"https://eyelidlessness.github.io/resume/#projects"},"eyelidlessness.github.io/projects")))},ma=c(j,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),Me=e=>t(ma,{as:"section",...e}),pa="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",ua=({fill:e,topic:o})=>{const n=r.topicColors[o];return{...n,...e?{fill:"currentcolor",fillOpacity:.05,mask:"url(#curvesVerticalFade)",strokeWidth:0,nested:{...n.nested,[r.darkMode]:{fillOpacity:.15}}}:{fill:"none",strokeWidth:1,stroke:"currentcolor"},transition:pa,vectorEffect:"non-scaling-stroke"}},ga=({fill:e,index:o,topic:n,...i})=>t("path",{...i}),Oo=c(ga,ua),ha=c("svg",{overflow:"visible",padding:"1rem"}),fa=20,ba={xMax:de,xScale:1,xShift:0,yMax:de,yScale:1,yShift:0},ya=({className:e,hexPoints:o,points:n,pointSize:i=6,scaleOptions:s,segments:a,topics:l,...d})=>{const{xScale:p,xShift:u,xRange:y=p*(de+u*2),yMax:f,yShift:E,yScale:S,yRange:h=S*(f+E*2)}={...ba,...s},P=fa*2,A=d.height??h+P,w=d.width??y+P,_=({x:R,y:x})=>{const B=Ae((R+u)/y*100,4),N=100-Ae((x-E)/h*100,4);return{cx:B,cy:N}},D=a.map(R=>{const[x,B,N]=R,{x:U}=x,{y:V}=B,{x:ee}=N,re=ee-U,J=re===0?0:Math.max(V/re*dt,ct);return{cubicPoints:R?.reduce((Y,$,G)=>{if(G===0)return Y;const W=ft({index:G,point:$,points:R,smoothing:J,xScale:p,yScale:S});return[...Y,W]},[]),segment:R}});return t(ha,{className:e,height:A,width:w,preserveAspectRatio:"none",viewBox:`0 0 ${w} ${A}`},t("defs",null,t("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.15","stop-color":"white","stop-opacity":".95"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),t("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),D.map(({cubicPoints:R,segment:x},B)=>{const[N,U,V]=x,ee=R.map(([K,Y],$)=>[$===0?N:U,K,Y,$===0?U:V]);return t(H,null,t(()=>t(H,null,ee.map(K=>{const Y=K.map((G,W)=>{const{cx:se,cy:q}=_(G),ae=se/100*w,ge=q/100*A;return`${W===0?"M ":W===1?"C ":""} ${ae},${ge}`}).join(" "),$=l[B%l.length];return t(Oo,{d:Y,index:B,topic:$})})),null),t(()=>{const K=ee.map(($,G)=>$.map((se,q)=>{if(G>0&&q===0)return"";const{cx:ae,cy:ge}=_(se),O=ae/100*w,te=ge/100*A;return`${q===0?"M ":q===1?"C ":""} ${O},${te}`}).join(" ")).join(" "),Y=l?.[B%l.length];return t(Oo,{d:K,fill:!0,index:B,topic:Y})},null))}))},Io=({className:e="",hash:o,height:n,renderType:i,StylesProvider:s=ce,styleRenderer:a=ie,topics:l=[],width:d})=>{const p=mt(o),u=pt(o,p),{xPadding:y,xScale:f,yPadding:E,yScale:S}=Et,h=i==="meta",P=h?0:y,A=h?0:E,w=P/2,_=A/2,D={xScale:f,xShift:w,yScale:S,yShift:_},x=st(u,({x:O},{x:te})=>O===te?0:O>te?1:-1).map(O=>ut(O,D)),B=x.map(O=>p[x.indexOf(O)]),N=(de+P)*f,U=gt({points:x,xMax:N,xScale:f,yScale:S}),V=ht({segments:U,xMax:N,xScale:f,yScale:S}),ee=h?{"& path":{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,re=h?"0 !important":"0 0 1rem !important",J=ke,K="100%",Y=O=>typeof O=="number"?`${O}px`:O,$=(O,te)=>typeof O=="number"?O*te:O,G=h?$(n??J,.95):ke,W=h?$(d??K,.95):"100%",se=h&&n!=null?$(n,.95):n,q=h&&d!=null?$(d,.95):d,ae=a.renderRule(()=>({gridColumn:"1 / -1",height:Y(G),padding:re,width:Y(W),nested:{...ee}}),Object.keys),ge=h?e:`${e} ${ae}`;return t(s,null,t(ya,{className:ge,height:se,hexPoints:B,points:x,scaleOptions:D,segments:V,topics:l,width:q}))},Sa=c(j,{nested:{[r.print]:{display:"none",paddingInline:"0.125rem"}}}),Mo=c("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),va=c(Mo,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),Ea=c(va,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",paddingTop:ne("0.5rem","3vw","2rem"),nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"},[r.print]:{paddingTop:0}}}),ka=c(Me,{padding:0}),Ta=c(Mo,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),Ca=c("a",{...r.resume.contactList.link,fontSize:"0.88889em",minWidth:"auto",textDecoration:"none",nested:{"&, &:hover":{fontWeight:500}}}),wa=c("span",{nested:{[r.print]:{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),Ct=({children:e,printLabel:o,...n})=>t(Ca,{...n},t(wa,{"data-print-label":o},t("span",null,e))),Ra=c(j,{...r.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...r.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"},[r.print]:{...r.resume.brief.nested[r.print],padding:0}}}),Lo="@media (min-width: 44.625rem)",Aa=c("h2",{fontSize:"1em",marginBottom:0,paddingLeft:0,textIndent:0,nested:{[Lo]:{justifySelf:"end"}}}),xa=c("div",{alignItems:"baseline",display:"grid",gap:"0.5rem 0",gridTemplateColumns:"auto",gridTemplateRows:"auto",fontSize:"0.88889em",nested:{[Lo]:{gridTemplateColumns:"auto 1fr"}}}),Pa=c("ul",{display:"block",margin:0,padding:"0 0 0 1rem"}),Oa=c("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Ia=c("svg",{display:"inline-block",margin:"0 0.325rem 0 0",verticalAlign:"middle",nested:{[r.print]:{height:"0.325rem",width:"0.325rem"}}}),Ma=c("circle",{fill:"currentcolor"}),We=e=>t(Ia,{xmlns:"http://www.w3.org/2000/svg",className:e.className,width:"8",height:"8",viewBox:"0 0 8 8"},t(Ma,{cx:"4",cy:"4",r:"4"}),t("title",null,"Skill level: ",e.level)),La={[b.BASIC]:c(We,{...r.resume.skillLevel[b.BASIC]}),[b.INTERMEDIATE]:c(We,{...r.resume.skillLevel[b.INTERMEDIATE]}),[b.ADVANCED]:c(We,{...r.resume.skillLevel[b.ADVANCED]}),[b.EXPERT]:c(We,{...r.resume.skillLevel[b.EXPERT]})},ja=c("div",{display:"contents"}),Da=({name:e,skills:o})=>t(ja,{itemscope:!0,itemtype:"http://schema.org/ItemList"},t(Aa,{itemprop:"name"},oo(e)),t(Pa,null,o.map(({level:n,name:i})=>{const s=La[n];return t(Oa,{key:i,itemprop:"itemListElement"},t(s,{level:n}),oo`${i}`)}))),Ba=c(j,{padding:"1rem 0"}),$a=c("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),Na=c("h2",{marginBottom:0}),Ha=c("ul",{fontSize:"0.88889em",paddingInlineStart:0}),_a=c("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),Fa=c(Ba,{padding:"1.5rem 0",position:"relative",nested:{"&:last-child:after":{display:"none"},"&:nth-of-type(odd)":{...r.resume.employment.itemOdd},"&:nth-of-type(even)":{...r.resume.employment.itemEven},"& strong":{fontWeight:500,nested:{[r.darkMode]:{fontWeight:400}}},[r.print]:{breakInside:"avoid",paddingBottom:0}}}),Ua=c("div",{alignItems:"baseline",display:"grid",columnGap:"0.5rem",gridTemplate:`
    "employer time-range"
    "position position"
  `,justifyContent:"space-between",nested:{[r.print]:{gridTemplate:`
        "employer position time-range"
      `,gridAutoColumns:"1fr auto auto"}}}),Ya=c("h3",{gridArea:"employer",marginBottom:0,whiteSpace:"nowrap"}),za=c(Ro,{gridArea:"time-range"}),Ga=c("div",{fontSize:"0.88889rem",fontWeight:r.deemphasize.fontWeight,gridArea:"position",nested:{[r.print]:{nested:{"&:after":{content:'","'}}}}}),Xa=({employer:e,end:o,highlights:n,position:i,start:s,summary:a,...l})=>t(Fa,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...l},t(Ua,null,t(Ya,{itemprop:"name"},e),t(Ga,{itemprop:"roleName"},i),t(za,{range:[s,o]})),a==null?null:t($a,{itemprop:"description"},ye(a)),n==null?null:t(Ha,{itemtype:"http://schema.org/ItemList"},n.map(d=>t(_a,{key:d,itemprop:"itemListElement"},ye(d))))),Wa=c(Me,{...r.resume.employment.container,marginTop:"1rem"}),Va=({employment:e})=>t(Wa,null,t(Na,null,"Recent Experience"),e.history.map(o=>t(Xa,{...o}))),Ka=c(j,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),qa=c(Te,{...r.visiblyHidden}),jo=e=>e.replace(/^https?:\/\/|\/$/g,""),Ja=({className:e,id:o,meta:n,resume:i,updated:s})=>{const{contact:{email:a,website:l},employment:d,info:p,name:u,projects:y,skills:f,social:E}=i;return t(Ka,{className:e,id:o,itemscope:!0,itemtype:"http://schema.org/Person"},t(Sa,null,t(Io,{...n,renderType:"post"})),t(ka,null,t(Ea,null,t("h1",{itemprop:"name"},u),t(qa,{date:s,itemprop:"datePublished",mode:Z.META}),t(Ta,null,t(Ct,{href:`mailto:${a}`,itemprop:"email",printLabel:a},"Email"),t(Ct,{href:l,itemprop:"url",printLabel:jo(l),rel:"me"},"Website"),E.map(({network:S,url:h})=>t(Ct,{href:h,itemprop:"url",printLabel:jo(h),rel:"me"},S)))),t(Ra,{itemprop:"description"},ye(p.brief))),t(Me,{"aria-label":"Skillsets"},t(xa,null,Object.entries(f.merged).map(([S,h])=>t(Da,{key:S,name:S,skills:h})))),t(Va,{employment:d}),t(Me,{id:"projects"},t(da,{projects:y})),t(Me,null,t("h2",null,"References"),ye("Available upon request, email <gnosis@gmail.com>")))},Rl=c("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),Al=c("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),xl=c("a",{...r.resume.contactList.link,textDecoration:"none"});export{ke as BLOG_ART_HEIGHT,kt as BlogArt,Xr as BlogArtDefs,Ss as BlogListing,ko as BlogMetadataType,Ks as BlogPost,de as COORDINATE_MAX,no as COORDINATE_MIN,j as FullBleedContainer,qt as FullBleedScrollableOverflow,Qt as FullBleedSymbolBlock,fo as Head,xe as InvalidHashError,ct as MIN_SMOOTHING,Eo as Main,pe as PageMetadataType,Ja as Resume,Io as ResumeArt,dt as SMOOTHING_RATIO,ce as StylesProvider,I as Topic,go as TopicTag,Je as __SNOWPACK_ENV__,Et as blogArtDefaultParameters,ne as clamp,ft as cubicBezierPoints,qs as getBlogPostStaticProps,gt as getNaiveSegments,ht as getNonPhallicSegments,co as getPageMetadata,Cr as hexChars,Qe as identifier,ye as mdx,ie as renderer,Sn as resetAbbrContext,si as resume,ut as scalePoint,st as sortBy,c as styled,r as theme,Ae as toFixed,mt as toHexPointSequence,pt as toPointSequence,so as yBounds};
