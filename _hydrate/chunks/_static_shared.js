import uo from"unist-util-visit";import{h as t,Fragment as $,toChildArray as go}from"https://cdn.skypack.dev/preact@10.5.10";import{createRenderer as Gn}from"fela";import"fela-tools";import fo from"module";import{isobject as Wn,createComponent as Vn,RendererProvider as qn,Readonly as Kn,Object$1 as Jn,Optional as u,Unknown as Zn,Literal as Qn,String as m,Partial as Ie,Union as bo,Boolean as yo,Array$1 as G,Integer as er,Number$1 as tr,emojiRegex as or,h as So,rehypeAccessibleEmojis as nr,remarkSlug as rr,remarkSmartypants_1 as sr,hsluv_1 as ie,rgba as ir}from"./_vendor/index.js";import{processStyleWithPlugins as ar,KEYFRAME_TYPE as xo,isNestedSelector as cr,normalizeNestedProperty as lr,isMediaQuery as dr,generateCombinedMediaQuery as vo,isSupport as mr,generateDeclarationReference as pr,isUndefinedValue as hr,generateCSSSelector as ur,RULE_TYPE as gr}from"fela-utils";import{cssifyDeclaration as fr,cssifyObject as br}from"css-in-js-utils";import Co from"md5";import wo from"dedent";import yr from"@mdx-js/mdx";import{mdx as at,MDXProvider as Sr}from"@mdx-js/preact";import{transform as xr}from"buble-jsx-only";import vr from"remark-mdx";import Cr from"remark-mdx-to-plain-text";import Le from"path";import{loadTheme as ko,getHighlighter as Po}from"shiki";import{BUNDLED_LANGUAGES as wr}from"shiki-languages";import{renderers as kr}from"shiki-twoslash";import{definePage as Pr}from"microsite/page";import To from"node-object-hash";import"sharp";import $t from"fs";import Tr from"child_process";import Er from"crypto";import{Head as Eo,seo as ct}from"microsite/head";let Lt=new Set;const Ar=()=>{Lt=new Set},Ir=()=>e=>{uo(e,"abbr",o=>{const{abbr:n}=o;Lt.has(n)&&(delete o.abbr,delete o.children,delete o.data,delete o.reference,Object.assign(o,{type:"text",value:n})),Lt.add(n)})},Ao="production",Mr="production",Or=!0;var lt=Object.freeze({__proto__:null,MODE:Ao,NODE_ENV:Mr,SSR:Or});const Rr=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),_=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((n,[r,s])=>typeof s=="object"&&(r==="nested"||r.includes("&"))?n:`${n}${Rr(r)}:${s};`,""),"}",Object.entries(o).map(([n,r])=>{if(typeof r=="object"){if(n==="nested")return Object.entries(r).map(([s,i])=>{const c=e.map(d=>s.replace(/&/g,d));return _(c,i)}).join("");if(n.includes("&")){const s=e.map(i=>n.replace(/&/g,i));return _(s,r)}}return""},[]).join("")].join(""),Be=(...e)=>`clamp(${e.join(",")})`,ze=e=>e.replace(/\s+/g," ").trim(),dt=e=>e;function Qe(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function jr(e,o,n,r,s,i){const c=[];return s&&c.push(Qe(s).slice(0,16)),r&&c.push(Qe(r).slice(0,16)),n&&c.push(Qe(n).slice(0,16)),c.push(Qe(e).slice(0,16)),c.push(Qe(o).slice(0,16)),c.push(i.slice(0,8)),c.join("_")}function $r(e,o,n=[""]){let r="";for(const i in e){const c=e[i];r=`${r}${i}{${br(c)}}`}let s="";for(let i=0;i<n.length;i++){const c=n[i];s=`${s}@${c}keyframes ${o}{${r}}`}return s}function Lr(){return e=>(e.renderKeyframe=(o,n)=>{const r=o(n,e),s=ar(e,r,xo,n),i=JSON.stringify(s);if(!e.cache.hasOwnProperty(i)){const c=Co(i),d=(e.selectorPrefix||"_")+c.slice(0,8),p=$r(s,d,e.keyframePrefixes),h={type:xo,keyframe:p,name:d};e.cache[i]=h,e._emitChange(h)}return e.cache[i].name},e._renderStyleToClassNames=({_className:o,...n},r="",s="",i="")=>{let c=o?` ${o}`:"";for(const d in n){const p=n[d];if(Wn(p))if(cr(d))c+=e._renderStyleToClassNames(p,r+lr(d),s,i);else if(dr(d)){const h=vo(s,d.slice(6).trim());c+=e._renderStyleToClassNames(p,r,h,i)}else if(mr(d)){const h=vo(i,d.slice(9).trim());c+=e._renderStyleToClassNames(p,r,s,h)}else console.warn(`The object key "${d}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const h=pr(d,p,r,s,i);if(!e.cache.hasOwnProperty(h)){if(hr(p)){e.cache[h]={className:""};continue}const g=fr(d,p),f=Co(h),w=e.devMode?jr(d,p,r,s,i,f):(e.selectorPrefix||"_")+f.slice(0,8),S=ur(w,r),b={type:gr,className:w,selector:S,declaration:g,pseudo:r,media:s,support:i};e.cache[h]=b,e._emitChange(b)}const y=e.cache[h].className;y&&(c+=` ${y}`)}}return c},e)}import.meta.env=lt;const mt=fo.createRequire(import.meta.url),{default:Br}=mt("fela-identifier"),{default:Nr}=mt("fela-plugin-embedded"),{default:Hr}=mt("fela-plugin-multiple-selectors"),{default:Dr}=mt("fela-plugin-typescript"),Yr=Ao==="development",_r=()=>{const e=Br(),o=Gn({devMode:Yr,enhancers:[Lr(),e],plugins:[Nr(),Hr(),Dr()]});return{identifier:e,renderer:o}},{identifier:me,renderer:Ne}=_r(),Xr=e=>Array.isArray(e)?e:[e],zr=e=>({children:o})=>t(qn,{renderer:e},...Xr(o)),Fe=zr(Ne),Fr=e=>Ne.renderRule(dt,e),pt=Object.assign(Fr,{global:Ne.renderStatic.bind(Ne)}),l=(e,o)=>{const n=typeof o=="function"?o:()=>o;return Vn(n,e,Object.keys)},W=(e,o)=>Kn(Jn(e,o)),se=()=>u(Zn()),Io="FRESH@0.1.0",Ur=W({format:Qn(Io,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:u(m({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),Gr=Ie(W({label:m({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:m({description:"Profession type or 'character class'."}),image:m({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:m({description:"A short description or summary of yourself as a candidate."}),quote:m({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),Wr=Ie(W({willing:bo([yo(),m()],{description:"Willingness to relocate."}),destinations:G(m({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),Vr=Ie(W({travel:er({description:"Percentage of time willing to travel (0 to 100)."}),authorization:m({description:"Work authorization: citizen, work visa, etc."}),commitment:G(m({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:yo({description:"Open to remote employment opportunities."}),relocation:Wr},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),qr=G(Ie(W({label:m({description:"A label for this contact information."}),category:m({description:"Type of contact information: email, phone, url, postal, or IM."}),value:m({description:"Phone number, email address, website, etc."})}))),Kr=Ie(W({email:m({description:"Primary contact email.",format:"email"}),phone:m({description:"Primary phone number."}),website:m({description:"Website, blog, or home page.",format:"uri"}),other:qr},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),Jr=Ie(W({address:m({description:"Your full postal address."}),code:m({description:"Postal or other official routing code."}),city:m({description:"Your home city."}),country:m({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:m({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),Zr=G(W({employer:m({description:"Employer name."}),position:u(m({description:"Your position or formal job title."})),url:u(m({description:"Employer website.",format:"uri"})),start:u(m({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:u(m({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:u(m({description:"A summary of your achievements and responsibilities under this employer."})),highlights:u(G(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy achievements and/or highlights."})),location:u(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:u(G(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),Qr=Ie(W({summary:m({description:"Summary of overall employment."}),history:Zr},{description:"The 'employment' section describes the candidate's formal employment history."})),es=G(W({category:m({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:u(m({type:"string",description:"Friendly media name."})),url:u(m({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),ts=G(W({title:m({description:"Project name or code-name."}),category:u(m({description:"Project type: open-source, private, side project, etc."})),description:u(m({description:"Project description or summary."})),summary:u(m({description:"A summary of your achievements and responsibilities on the project."})),role:u(m({description:"Your role on the project: Contributor, Creator, etc."})),url:u(m({description:"Project URL.",format:"uri"})),media:u(es),repo:u(m({description:"Repo URL.",format:"uri"})),start:u(m({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:u(m({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:u(G(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:u(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:u(G(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),os=Ie(W({sets:G(W({name:m({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:u(m({description:"Level of mastery of the skill."})),skills:G(m({description:"Title or ID of a skill from the skills list."}))})),list:G(W({name:m({description:"The name or title of the skill."}),level:u(m({description:"A freeform description of your level of mastery with the skill."})),summary:u(m({description:"A short summary of your experience with this skill."})),years:u(bo([m(),tr()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),ns=G(W({title:u(m({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:m({description:"College or school name."}),area:u(m({description:"e.g. Arts"})),studyType:u(m({description:"e.g. Bachelor"})),start:u(m({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:u(m({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:u(m({description:"Grade or GPA."})),curriculum:u(G(m({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:u(m({description:"Website or URL of the institution or school.",format:"uri"})),summary:u(m({description:"A short summary of this education experience."})),keywords:u(G(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:u(G(m({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:u(m({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),rs=W({summary:u(m({description:"Summary of overall education."})),level:m({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:u(m({description:"Your degree, if any (BSCS, BA, etc.)."})),history:u(ns)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),ss=G(W({network:m({description:"The name of the social network, such as Facebook or GitHub."}),user:m({description:"Your username or handle on the social network."}),url:m({description:"URL of your profile page on this network.",format:"uri"}),label:u(m({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."}),Dl=W({name:m({description:"The candidate's name as it should appear on the resume."}),meta:Ur,info:u(Gr),disposition:u(Vr),contact:u(Kr),location:u(Jr),employment:u(Qr),projects:u(ts),skills:u(os),education:u(rs),social:u(ss),services:se(),recognition:se(),writing:se(),reading:se(),speaking:se(),governance:se(),languages:se(),samples:se(),references:se(),testimonials:se(),interests:se(),extracurricular:se(),affiliation:se()},{title:"FRESH Resume Schema"});var A;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(A||(A={}));var P;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator",e.DEVELOPER="Developer"})(P||(P={}));const is=Date.now(),ht=e=>e==null?is:new Date(e).getTime(),as=e=>e.slice().sort((o,n)=>{const r=ht(o.end),s=ht(n.end);if(r>s)return-1;if(s>r)return 1;const i=ht(o.start),c=ht(n.start);return i>c?-1:c>i?1:0}),cs=e=>as(e),Mo=cs([{title:"@getodk/xforms-engine",category:A.OPEN_SOURCE,description:`
      Client-agnostic, reactive runtime for
      [ODK XForms](https://getodk.github.io/xforms-spec/)
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xforms-engine",role:P.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/xpath",category:A.OPEN_SOURCE,description:`
      Extensible XPath 1.0 interpreter, supporting
      [ODK XForms](https://getodk.github.io/xforms-spec/#xpath-functions)
      extensions, arbitrary DOM implementations
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xpath",role:P.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/tree-sitter-xpath",category:A.OPEN_SOURCE,description:`
      [tree-sitter](https://tree-sitter.github.io/tree-sitter/) parser for
      XPath 1.0 syntax
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/tree-sitter-xpath",role:P.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/web-forms",category:A.OPEN_SOURCE,description:`
      [ODK Web Forms](https://github.com/getodk/web-forms) UI client
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/web-forms",role:P.CONTRIBUTOR,start:"2024-03",end:"2025-04"},{title:"Astro",category:A.OPEN_SOURCE,description:`
      "Build faster websites with less client-side Javascript"
    `,summary:`
      Collaborate with core contributors to add support for rendering
      [SolidJS](https://www.solidjs.com/) components.
    `,repo:"https://github.com/snowpackjs/astro",role:P.CONTRIBUTOR,start:"2021-07",end:"2021-07"},{title:"Enketo",category:A.OPEN_SOURCE,description:`
      "Web forms evolved. Deploy and conduct surveys that work without a
      connection, on any device."
    `,summary:`
      Ongoing maintenance, developer experience improvements & helping
      determine the future direction of Enketo projects.
    `,repo:"https://github.com/enketo",role:P.DEVELOPER,start:"2021-04",end:"2023-10"},{title:"eyelidlessness.github.io",category:A.PUBLIC_ACCESS,description:`
      My personal website, r\xE9sum\xE9 and tech blog.
    `,repo:"https://github.com/eyelidlessness/eyelidlessness.github.io",role:P.CREATOR,start:"2020-10"},{title:"Microsite",category:A.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:P.CONTRIBUTOR,start:"2021-01",end:"2021-05"},{title:"HNDarkMode",category:A.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:P.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:A.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:P.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:A.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:P.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:A.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:P.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:A.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:P.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:A.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:P.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:A.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:P.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:A.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:P.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:A.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:P.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:A.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:P.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:A.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:P.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:A.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:P.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:A.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:P.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:A.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:P.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:A.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:P.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:A.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:P.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:A.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:P.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),ls=e=>e,ds=[{employer:"Treez",position:"Senior Software Engineer",start:"2018-12",end:"2020-09",summary:`
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
      `]}],ms=ds;var M;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(M||(M={}));var et;(function(e){e.LANGUAGES_PLATFORMS="Languages & Platforms",e.SERVICES_DISTRIBUTED_SYSTEMS="Services & Distributed Systems",e.USER_INTERFACE_EXPERIENCE="User Interface & Experience"})(et||(et={}));const Bt={[et.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:M.EXPERT},{name:"OpenAPI & JSON Schema",level:M.EXPERT},{name:"Django REST framework",level:M.ADVANCED},{name:"Fault tolerance",level:M.ADVANCED},{name:"Microservice architecture",level:M.ADVANCED},{name:"Apache Storm",level:M.INTERMEDIATE},{name:"Redis",level:M.BASIC}],[et.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:M.EXPERT},{name:"DOM & Web APIs",level:M.EXPERT},{name:"Web performance",level:M.ADVANCED},{name:"SVG",level:M.ADVANCED},{name:"UI & UX design",level:M.ADVANCED},{name:"A11y",level:M.INTERMEDIATE}],[et.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:M.EXPERT},{name:"Clojure & ClojureScript",level:M.EXPERT},{name:"HTML & CSS",level:M.EXPERT},{name:"SQL (PostgreSQL)",level:M.ADVANCED},{name:"Python",level:M.INTERMEDIATE},{name:"Swift",level:M.BASIC},{name:"Java",level:M.BASIC}]},ps={list:Object.values(Bt).flatMap(dt),merged:Bt,sets:Object.entries(Bt).map(([e,o])=>({name:e,skills:o.map(({name:n})=>n)}))},Yl=ls({name:"Trevor Schmidt",meta:{format:Io,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:ms},info:{class:"Software Engineer",brief:wo(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:Mo,skills:ps,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),ut=Symbol("DEFAULT_TOPIC"),N={[ut]:ut,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},hs=e=>typeof e=="string"||typeof e=="symbol",Oo=e=>hs(e)&&e in N,Nt=e=>Oo(e)?N[e]:e,Ro=Object.entries(N).reduce((e,o)=>{const[n,r]=o;return typeof n=="string"?{...e,[r]:n}:e},{}),us=e=>Oo(e)?e:Ro[e],gs=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),fs=Object.fromEntries(Object.entries(Ro).map(([e,o])=>typeof o=="string"?[e,gs(o)]:null).filter(e=>e!=null)),bs=e=>{const o=Nt(e);if(typeof o=="string")return fs[o]},gt=2,Ht={minEm:1.0625,fluidVw:1.0625*gt,maxEm:1.25},O="@media (prefers-color-scheme: dark)",ys=["h1","h2","h3","h4","h5","h6"],Ss=["dd","dl","dt","li","ol","ul"],xs=[...ys,...Ss,"p"],Ue=Ht.minEm/Ht.maxEm,Ce={h1:1.953,h2:1.563,h3:1.25},vs={h1:{minEm:Ce.h1*Ue,fluidVw:Ce.h1*Ue*gt,maxEm:Ce.h1},h2:{minEm:Ce.h2*Ue,fluidVw:Ce.h2*Ue*gt,maxEm:Ce.h2},h3:{minEm:Ce.h3*Ue,fluidVw:Ce.h3*Ue*gt,maxEm:Ce.h3}},jo=75,ft=1.25,Cs=["0.7fr",`${ft}rem`,[`${jo}ch`,`calc(100% - ${ft*2}rem)`],`${ft}rem`,"1.2fr"],Dt=1,ws=["0.7fr",`${Dt}rem`,[`${jo*1.1875}ch`,`calc(100% - ${Dt*2}rem)`],`${Dt}rem`,"1.2fr"],ks=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],Yt=ks.join(", "),Ps=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Ts=Ps.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),te={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Es="hover-inherit-topic-color",As={[N[ut]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.DEFAULT_TOPIC.light},[O]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.DEFAULT_TOPIC.dark}}}}},[N.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.ABLEISM}}},[N.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.ARTS_CRAFTS}}},[N.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.LEMON}}},[N.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.MENTAL_ILLNESS}}},[N.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.NEURODIVERGENCE}}},[N.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.PHILOSOPHY}}},[N.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.POLITICS}}},[N.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.RACISM}}},[N.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.SEXISM}}},[N.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.SUBSTANCE_ABUSE}}},[N.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.TECHNOLOGY}}},[N.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:te.TRANSPHOBIA}}}},$o=me(),a={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Es,baseFontSizeRange:Ht,darkMode:O,abbreviation:{backgroundImage:`linear-gradient(${["to top","hsl(64deg, 100%, 50%, 0.25)","hsl(64deg, 100%, 50%, 0.25) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[O]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[O]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:$o,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[O]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${$o}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[O]:{color:"hsl(212deg, 10%, 90%)"}}},[O]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[O]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[O]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:Yt},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:Yt,nested:{[O]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:xs,gitHubLogo:{fill:"#171515",nested:{[O]:{fill:"#fff"}}},headingRanges:vs,[O]:{aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(190deg, 80%, 95%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 85%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:Cs,mainGridSidePaddingRem:ft,monospaceFont:Yt,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[O]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:Ts},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[O]:{backgroundColor:"hsl(336deg, 100%, 7%)"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[O]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"hsl(47deg, 58%, 98%)",nested:{[O]:{backgroundColor:"hsl(41deg, 100%, 8%)"}}},separator:{borderBottom:"1px solid hsl(17deg, 78%, 90%)",nested:{[O]:{borderColor:"hsl(17deg, 70%, 17%)"}}}},skillLevel:{[M.BASIC]:{backgroundColor:"hsl(207deg, 25%, 83%)",nested:{[O]:{backgroundColor:"hsl(207deg, 15%, 43%)"}}},[M.INTERMEDIATE]:{backgroundColor:"hsl(188deg, 53%, 74%)",nested:{[O]:{backgroundColor:"hsl(188deg, 53%, 34%)"}}},[M.ADVANCED]:{backgroundColor:"hsl(188deg, 70%, 59%)",nested:{[O]:{backgroundColor:"hsl(188deg, 80%, 39%)"}}},[M.EXPERT]:{backgroundColor:"hsl(152deg, 100%, 39%)",nested:{[O]:{backgroundColor:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:ws,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[O]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[O]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:As,topicTagIdentifier:me(),topicTagInner:{backgroundImage:ze(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[O]:{backgroundImage:ze(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:ze(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[O]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:ze(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[O]:{color:"hsl(194deg, 8%, 50%)"}}}}}},_t=["b","em","h1","h2","h3","i","strong"],bt=["h1","h2","h3","h4","h5","h6"],Is=[...bt,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Ms=Array.from(new Set([...bt,...Is,"div","fieldset","form","hgroup","hr","pre"])),Os=ze(`
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
    font-size:        ${Be(`${a.baseFontSizeRange.minEm}em`,`${a.baseFontSizeRange.fluidVw}vw`,`${a.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${_(["html","body"],{...a.document})}

  ${_(["body"],{...a.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${bt.join(",")} {
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
`),Rs=()=>{pt.global(ze(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${Ms.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${bt.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${_(_t,a.emphasize)}

      h1 {
        font-size: ${Be(`${a.headingRanges.h1.minEm}em`,`${a.headingRanges.h1.fluidVw}vw`,`${a.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${Be(`${a.headingRanges.h2.minEm}em`,`${a.headingRanges.h2.fluidVw}vw`,`${a.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${Be(`${a.headingRanges.h3.minEm}em`,`${a.headingRanges.h3.fluidVw}vw`,`${a.headingRanges.h3.maxEm}em`)};
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

      ${_(["hr:after"],{...a.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${_(["pre"],a.pre)}

      ${_(["code"],{...a.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

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

      ${_(["a"],{...a.links,fontWeight:"bolder"})}

      ${_(["abbr"],{...a.abbreviation,textDecoration:"none"})}

      ${_(["aside","small"],a.deemphasize)}

      ${_(["aside"],{...a.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem",nested:{"& a":{fontWeight:600}}})}

      ${_t.map(e=>`aside ${e}`).join(", ")} {
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
        ${_(["html","body"],{...a[a.darkMode].document})}

        ${_(["body"],{...a[a.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${_(_t,a[a.darkMode].emphasize)}
        ${_(["pre"],a[a.darkMode].pre)}
        ${_(["code"],a[a.darkMode].code)}
        ${_(["a"],a[a.darkMode].links)}
        ${_(["aside","small"],a[a.darkMode].deemphasize)}
        ${_(["aside"],a[a.darkMode].aside)}
        ${_(["hr:after"],a[a.darkMode].separator)}
      }
    `))},js=`
  ${a.mainGridColumns[0]}
  ${a.mainGridColumns[1]}
  min(
    ${a.mainGridColumns[2][0]},
    ${a.mainGridColumns[2][1]}
  )
  ${a.mainGridColumns[3]}
  ${a.mainGridColumns[4]}
`.replace(/\s+/g," "),Lo={gridColumn:"1 / -1"},Bo=pt(Lo),V=l("div",{nested:{[`& > .${Bo}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:js,...Lo}),$s=({children:e,shadow:o,...n})=>t(V,{...n},e),No=([e,o,n])=>`rgba(${[e,o,n,0].join(",")})`,Ho=["12rem 100%","auto"],Do=Ho.join(", "),Ls=Ho.map(e=>e.replace("100%","100.1%")).join(", "),Bs=Ne.renderKeyframe(()=>({"0%":{backgroundSize:Do},"100%":{backgroundSize:Ls}}),{}),Yo="5px",_o=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`rgba(${o.join(",")}) calc(11rem + ${Yo})`,`${No(o)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${No(e)} ${Yo}`].join(", ")})`].join(", ")}:null,Ns=e=>{if(e!=null){const{darkMask:o,darkScroll:n,lightMask:r,lightScroll:s}=e;return{dark:_o(n,o),light:_o(s,r)}}return{dark:null,light:null}},Xo=l($s,({shadow:e})=>{const{dark:o,light:n}=Ns(e),r=o==null?null:{[a.darkMode]:o};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:Do,paddingRight:a.mainGridSidePaddingRem,overflowX:"auto",nested:{...r,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:Bs,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),Hs=l(V,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),zo=l("div",{paddingLeft:"1rem"}),Ds=l("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),Ys=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),Xt="div",_s={ContentContainer:Xt,InnerContainer:zo,OuterContainer:Xt,SymbolContainer:Xt},Fo=e=>{const{children:o,ContentContainer:n,InnerContainer:r,OuterContainer:s,outerContainerProps:i,symbol:c,SymbolContainer:d}={..._s,...e};return t(Hs,{as:s,...i},t(Ds,{as:d,role:"presentation"},c),t(zo,{as:r},t(Ys,{as:n},o)))},Xs=l("pre",{fontSize:"1rem"}),zs=l(Xo,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[a.darkMode]:{}}}),Fs=e=>t(zs,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),Us=l(V,{...a.pre,nested:{[a.darkMode]:{...a[a.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),Gs=l("div",{...a.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Ws=({children:e})=>t(Fo,{ContentContainer:Xs,InnerContainer:Fs,OuterContainer:Us,symbol:"{",SymbolContainer:Gs},e),Vs=e=>e.map((o,n)=>n),yt=(e,o)=>Vs(e).sort((n,r)=>{const s=o(e[n],e[r]);return s===0?n===r?0:n>r?1:-1:s}).map(n=>e[n]),qs=e=>typeof e=="object"&&e!=null,Ks=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),Js=(e,o)=>qs(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&or().test(o),Zs=({["aria-label"]:e,children:o,role:n})=>t(Ks,{"aria-label":e,role:n},o),Qs={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},ei={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},ti={...Qs,...ei},Uo=Le.resolve(process.cwd(),"./syntax-themes"),[oi,ni]=await Promise.all([ko(Le.resolve(Uo,"./yi-dark.json")),ko(Le.resolve(Uo,"./yi-light.json"))]),ri={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},si={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},ii=e=>e.trim().split(/\b\W*\b/).reduce((o,n)=>({...o,...si[n]}),{}),ai=e=>Object.entries(e).reduce((o,[n,r])=>{const s=ri[n];if(r==null||typeof s!="string")return o;const i=s==="fontStyle"?ii(r):{[s]:r};return{...o,...i}},{}),[ci,li]=await Promise.all([Po({theme:oi}),Po({theme:ni})]),di=new Set(wr.map(e=>e.id)),mi=new Set(["ts","tsx","typescript"]),Go=e=>e.explanation?.reduce((o,n)=>({...o,...n.scopes.reduce((r,{themeMatches:s})=>({...r,...s.reduce((i,{settings:c})=>({...i,...ai(c)}),r)}),o)}),{color:e.color}),pi=(e,o,n={})=>{const r=Go(e),s=Go(o),i=s==null?null:{nested:{[a.darkMode]:s}},{content:c}=e;if(r==null&&i==null)return t("span",n,c);const d={...r,...i},p=l("span",d);return t(p,n,c)},hi=pt({paddingRight:"1rem"}),ui={className:hi},gi=(e,o)=>So(t(Fe,{},t("pre",{},t("code",{},...e.reduce((n,r,s)=>{const i=r.map((d,p)=>{const h=o[s][p],y=p===r.length-1?ui:{};return pi(d,h,y)}),c=s===0?"":`
`;return[...n,c,...i]},[]))))),fi=e=>{const{lang:o,value:n,meta:r}=e,s=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,i=String(o)==="json5"?"json":o;let c;const d=n.replace(/^\n+|\n+$/g,"");if(!di.has(i))c=kr.plainTextRenderer(d,{});else{const p=li.codeToThemedTokens(d,i),h=ci.codeToThemedTokens(d,i);c=gi(p,h)}mi.has(i)&&!r?.includes("ignore"),e.children=[],e.type="html",e.value=c},bi=()=>o=>{uo(o,"code",fi)};import.meta.env=lt;const tt=fo.createRequire(import.meta.url),yi=tt("rehype-parse"),Si=tt("rehype-remark"),xi=tt("remark"),vi=tt("remark-abbr"),Ci=tt("remark-stringify"),wi=({className:e,children:o,...n})=>e==="language-id"?null:e==="code-container"?at($,n,...go(o)):t("div",{className:e,...n},...go(o)),ki=({children:e,...o})=>Js(o,e)?t(Zs,o,e):t("span",o,e),zt={components:{div:wi,pre:Ws,span:ki},rehypePlugins:[nr],remarkPlugins:[bi,vi,Ir,rr,sr]},Pi=e=>{const{children:o=at(()=>null,{}),components:n={},rehypePlugins:r=[],remarkPlugins:s=[]}=e,i={...zt.components,...n},c={mdx:at,MDXProvider:Sr,components:i,props:{}},d=typeof o=="string"?wo(o).trim():o,p=[...zt.rehypePlugins,...r],h=[...zt.remarkPlugins,...s],y=yr.sync(d,{rehypePlugins:p,remarkPlugins:h,skipExport:!0}).trim(),{code:g}=xr(y,{objectAssign:"Object.assign"}),f=Object.keys(c),w=Object.values(c),S=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...f,`${g}

${S}`)(at,...w)},Ti=Object.entries(ti).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),Ei=e=>[e,Ti].join(`

`),Wo=([e,...o],{includeAbbreviations:n=!0})=>{const r=typeof e=="string"?[e,...o].join(""):String.raw(e,...o);return n?Ei(r):r},St=(...e)=>{const o=Wo(e,{includeAbbreviations:!0});return t(Fe,{},t(Pi,{},o))},Ai=(...e)=>{const o=Wo(e,{includeAbbreviations:!1});return xi().use(yi).use(Si).use(Ci).use(vr).use(Cr).processSync(o).contents.toString().trim()},we=(e,o)=>Number(e.toFixed(o)),ke=parseInt("ff",16),Vo=parseInt("00",16),qo=.05,Ko=.15,Jo=.05;class ot extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const Ii=/^[0-9a-f]{40}$/i,Mi=e=>Ii.test(e),Oi=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),Ri=e=>e.length===10,ji=/([0-9a-f]{2})([0-9a-f]{2})/ig,Ft=e=>{if(!Mi(e))throw new ot(e);const n=Array.from(e.matchAll(ji)??[]).map(([r,s,i])=>({x:s,y:i}));if(!Ri(n))throw new ot(e);return n},$i=Symbol("IS_POINT"),Li=e=>Object.assign(e,{[$i]:!0}),Zo=e=>{const o=parseInt(e,16);if(o>ke||o<Vo)throw new Error(`Not a valid coordinate: ${e}`);return Li(o)},Bi=({x:e,y:o})=>({x:Zo(e),y:Zo(o)}),Ni=e=>e.length===10,Ut=(e,o)=>{try{const n=o.map(Bi);if(!Ni(n))throw new ot(e);return n}catch{throw new ot(e)}},Hi=Symbol("SCALED_COORDINATE"),Qo=e=>e.reduce(({max:o,min:n},{y:r})=>({max:Math.max(Number(o),Number(r)),min:Math.min(Number(n),Number(r))}),{max:-Infinity,min:Infinity}),ae=(e,o)=>Object.assign(we(e,2),{[Hi]:o}),Ge=({x:e,xScale:o,y:n,yScale:r})=>({x:ae(e,o),y:ae(n,r)}),xt=({x:e,y:o},{xScale:n,xShift:r,yScale:s,yShift:i})=>Ge({x:(e+r)*n,xScale:n,y:(o+i)*s,yScale:s}),Gt=({points:e,xMax:o,xScale:n,yScale:r})=>[Ge({x:0,xScale:n,y:0,yScale:r}),...e,Ge({x:o,xScale:n,y:0,yScale:r})].reduce((s,i,c,d)=>{if(c===0||c===d.length-1)return s;const p=ae(0,r),h=[{x:d[c-1].x,y:p},i,{x:d[c+1].x,y:p}];return[...s,h]},[]),Wt=({segments:e,xMax:o,xScale:n,yScale:r})=>e.map(s=>{const[{x:i,y:c},{x:d,y:p},{x:h,y}]=s,g=h-i,f=p/g,S=6/f;if(S<1){const k=S*.2*i,T=i-k,z=h+k,H=T<0?Math.abs(T):z>o?o-z:0,I=T+H,F=z+H,v=S*.3,q=d+H,Z=v*p,oe=p-Z;return[Ge({x:I,xScale:n,y:c,yScale:r}),Ge({x:q,xScale:n,y:oe,yScale:r}),Ge({x:F,xScale:n,y,yScale:r})]}return s}),Di=({x:e,y:o},{x:n,y:r})=>{const s=n-e,i=r-o;return{angle:Math.atan2(i,s),length:Math.sqrt(s**2+i**2)}},en=({current:e,previous:o,next:n,reverse:r,smoothing:s,xScale:i,yScale:c})=>{const d=r?Math.PI:0,p=Di(o,n),h=p.angle+d,y=p.length*s,{x:g,y:f}=e,w=g+Math.cos(h)*y,S=f+Math.sin(h)*y;return{x:ae(w,i),y:ae(S,c)}},tn=({index:e,point:o,points:n,smoothing:r,xScale:s,yScale:i})=>{const c=n[e-1];if(c==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const d=n[e-2]??c,p=en({current:c,previous:d,next:o,reverse:!1,smoothing:r,xScale:s,yScale:i}),h=c,y=n[e+1]??o,g=en({current:o,previous:h,next:y,reverse:!0,smoothing:r,xScale:s,yScale:i});return[p,g,o]},on=({segment:e,smoothing:o,xScale:n,yScale:r})=>e.reduce((s,i,c)=>{if(c===0)return s;const p=tn({index:c,point:i,points:e,smoothing:o,xScale:n,yScale:r}).map(h=>`${h.x},${h.y}`).join(" ");return[...s,`C ${p}`]},[]),Yi=({baseYCoordinate:e,isBaselineBelowMidpoint:o,segments:n,xScale:r,yMax:s,yScale:i,yTilt:c=!1})=>n.reduce((d,p,h,y)=>{const{length:g}=y,[f,w,S]=p,{x:b,y:k}=f,{x:T,y:z}=w,{x:H,y:I}=S,F=H-b,v=F===0?0:Math.max(z/F*Jo,Ko),q=c?.1:0,Z=1-q,oe=1+q,U=h%2==0?Z:oe,Se=o?k+e:s-k+e,le={x:b,y:ae(Se*U,i)},xe=h%2==0?Z:oe,Oe=o?I+e:s-I+e,pe={x:ae(H,r),y:ae(Oe*xe,i)},he=T-b,ue=H-T,ge=ue>he?0:0-(T-b)*qo,X=(g-h)*(i/100*s),L={x:ae(T+ge,r),y:ae(z-X,i)},Re=on({segment:[le,L,pe],smoothing:v,xScale:r,yScale:i}),je=ue>he?(H-T)*qo:0,Te={x:ae(T+je,r),y:ae(s-X,i)},ne=on({segment:[pe,Te,le],smoothing:v,xScale:r,yScale:i});return[...d,[`M ${le.x},${le.y}`,...Re,...ne,"Z"].join(" ")]},[]),_i=({hash:e,xPadding:o=0,xScale:n=1,yOffset:r=.5,yPadding:s=0,yScale:i=1})=>{const c=Ft(e),d=Ut(e,c),p=yt(d,({x:I},{x:F})=>Number(I)===Number(F)?0:Number(I)>Number(F)?1:-1),h=o/2,y=s/2,g=p.map(I=>xt(I,{xScale:n,xShift:h,yScale:i,yShift:y})),f=(ke+o)*n,{max:w}=Qo(g),S=(w+s)*i,b=Gt({points:g,xMax:f,xScale:n,yScale:i}),k=Wt({segments:b,xMax:f,xScale:n,yScale:i}),T=r>.5,z=T?S*r:-1*S*r;return{segmentPaths:Yi({baseYCoordinate:z,segments:k,xScale:n,yMax:S,isBaselineBelowMidpoint:T,yScale:i}),xMax:f,yMax:S}};var Vt;(function(e){e.PNG="png"})(Vt||(Vt={}));const qt=process.cwd(),nt=e=>e.startsWith("/")?Le.resolve(qt,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):Le.extname(e)==""?Le.resolve(qt,"./src/pages/",`${e}.tsx`):e;var We;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(We||(We={}));var He;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(He||(He={}));const Xi="origin",zi="main",rt=e=>{const{branch:o=zi,decode:n,filter:r=We.FIRST,format:s,path:i=qt,remote:c=Xi}=e,{error:d,stdout:p}=Tr.spawnSync("git",["log",...r.split(" "),`--branches=${o}`,`--format=${s}`,`--remotes=${c}`,"--",i]);if(d)throw d;const h=p.toString().trim();return(h===""?[]:h.split(`
`)).map(n)},Kt=e=>{const o=new Date(e);if(!isNaN(o.getTime()))return o},Fi=e=>{const o=nt(e),[n=null]=rt({decode:Kt,filter:We.CURRENT,format:He.ISO_DATE,path:o});return n},Ui=e=>{const o=nt(e),[n=null]=rt({decode:Kt,format:He.ISO_DATE,path:o});return n},Gi=e=>{const o=nt(e),[n=null]=rt({decode:Kt,filter:We.FIRST_MERGE,format:He.ISO_DATE,path:o});return n},Jt=e=>{const o=$t.readFileSync(e).toString();let n=Er.createHash("sha1");return n.update(o),n.digest("hex")},Wi=e=>{const o=nt(e),[n]=rt({decode:dt,format:He.HASH,path:o});return n??Jt(o)},Vi=e=>{const o=nt(e),[n]=rt({decode:dt,filter:We.FIRST_MERGE,format:He.HASH,path:o});return n??Jt(o)},qi={height:630,width:1200},Ki=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",Ji=To({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Zi=(e,o,n=Vt.PNG,r=qi)=>{const s=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),i=Ji.hash(o),c=Le.resolve(s,`${i}.${n}`),d=c.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:c,imageType:n,publicPath:d,...r}}};var De;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(De||(De={}));const nn=(e,o,n,r,s=[N.TECHNOLOGY])=>{const i=r===De.MUTABLE,c=r===De.IMMUTABLE_MERGE,d=o.replace(/^file:(\/\/)?/,""),p=i?Jt(d):c?Vi(e):Wi(e),h={created:(c?Gi(e):Ui(e))??$t.statSync(d).ctime,updated:Fi(e)??$t.statSync(d).mtime},g=Zi(o,i?{importURL:o,stat:h,topics:s}:{hash:p,importURL:o});return{hash:p,host:Ki,path:e,social:g,stat:h,title:n,topics:s}},rn=()=>t($,null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Qi=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t(rn,null))),ea=1.6180334,ta=4,sn=we(ea*5,6),an=.75,Ve=.15,oa=1.5,st=Be("6rem",`${100/sn}vw`,"10rem"),na=l(V,{height:st,position:"relative",width:"100%"}),ra=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),sa=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var it;(function(e){e.INLINE="inline",e.NONE="none"})(it||(it={}));const Zt={xPadding:ta,xScale:sn,yOffset:an,yPadding:Ve,yScale:oa},vt=e=>{const{className:o,defsUsage:n=it.INLINE,hash:r,height:s,rawSVG:i=!1,styleRenderer:c=Ne,title:d,topics:p=[],width:h}=e,y=p.length<2?[...p,N[ut]]:p,g=I=>`${I}-${r}`,{segmentPaths:f,xMax:w,yMax:S}=_i({...Zt,hash:r}),b=S*an,k=S*Ve/10.24,T=k*.75,H=t(ra,{className:Bo,height:s,preserveAspectRatio:"none",viewBox:[0,0,w,S].join(" "),width:h},t("title",null,"Generated art for the page or post titled",t("i",null,d),", with the content or commit hash ",r," ",y.length>0?[", and the topics: ",y.map(String).join(", ")]:null),t("defs",null,n===it.INLINE?t(rn,null):null,t("filter",{id:g("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:T,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:k,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:g("blurOverlayClip")},t("rect",{x:"0",width:w,y:b,height:S})),t("filter",{id:g("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:T}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:k})),t("filter",{id:g("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:T}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:k}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:k})),t("g",{id:g("blobs")},f.map((I,F)=>{const v=F%y.length,q=y[v],Z=c.renderRule(()=>({...a.topicColors[q]}),Object.keys);return t(sa,{key:I,className:Z,d:I,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${S*Ve})`,`scale(1, ${1-Ve*2})`].join(" "),filter:`url(#${g("blur")})`},t("use",{href:`#${g("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${g("blurOverlayClip")})`,filter:`url(#${g("blurOverlay")})`,transform:[`translate(0, ${S*Ve})`,`scale(1, ${1-Ve*2})`].join(" ")},t("use",{href:`#${g("blobs")}`,mask:"url(#softVerticalFade)"})));return i?H:t(na,{className:o},H)},ia=[,"January","February","March","April","May","June","July","August","September","October","November","December"],aa=l("time",{nested:{[a.darkMode]:{...a[a.darkMode].deemphasize}},...a.deemphasize});var Pe;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(Pe||(Pe={}));const Qt=({date:e,mode:o=Pe.DEFAULT,...n})=>{const r=e.getMonth()+1,s=e.getFullYear(),i=o===Pe.SHORT?`${r}/${s}`:o===Pe.META?"":[e.getDate(),ia[r],s].join(" ");return t(aa,{...n,datetime:e.toISOString()},i)},ca=l("a",{...a.topicTagLink(a.topicTagIdentifier.className)}),la=l("span",a.topicTagIdentifier()),da=l(la,{...a.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),ma=({className:e,link:o=!0,topic:n})=>{const r=bs(n),s=Nt(n);if(r==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const i=o?ca:"span",c=o?{href:`/blog/topics/${r}/`}:{};return t(i,{className:[e,a.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...c},t(da,null,s))},cn=l(ma,e=>({...a.topicTagOuter,...a.topicColors[Nt(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),pa=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),ha=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),ln=({className:e,link:o=!0,topics:n})=>t(pa,{className:e},n.map(r=>typeof r=="string"?t(ha,{key:us(r)},t(cn,{link:o,topic:r})):null)),ua=e=>e.reduce((o,n)=>{const r=n.stat.created.getFullYear(),s=o[r]??[];return{...o,[r]:[...s,n]}},{}),ga=l(V,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),fa=l(V,{...a.blog.listing.item,minHeight:st,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),ba=l(V,{paddingTop:`calc(${st} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),ya=l(V,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),Sa=l("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),xa=pt({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),va=l("h2",{...a.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),Ca=l(Qt,{padding:"0 0.5rem 0.125rem 0"}),wa=l(ln,{gridColumn:"3 / 3"}),ka=l("div",{...a.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),Pa=l("a",{fontSize:"0.875em"});var Ct;(function(e){e.DATE="date"})(Ct||(Ct={}));var wt;(function(e){e.ASC="asc",e.DESC="desc"})(wt||(wt={}));const Ta=({order:e=wt.DESC,posts:o,sort:n=Ct.DATE})=>{const r=o.slice().sort((i,c)=>e===wt.DESC&&n===Ct.DATE?i.stat.created>c.stat.created?-1:1:0),s=ua(r);return t($,null,Object.entries(s).map(([i,c])=>t($,{key:i},t(ga,null,c.map(d=>{const{CustomArt:p=vt,description:h,hash:y,path:g,stat:{created:f},title:w,topics:S}=d;return t(fa,{key:g},t(ba,{as:"a",href:g},t(Sa,null,t(p,{defsUsage:it.NONE,hash:y,padded:!0,renderType:"listing",title:w,topics:S})),t(ya,null,t(va,{className:xa},w),t(Ca,{date:f}))),t(wa,{link:!1,topics:S}),t(ka,{className:a.blog.listing.descriptionIdentifier},h),t("p",null,t(Pa,{href:g},"Read more\u2026")))})))))},Ea=()=>t($,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));Rs();const dn=({children:e,meta:{description:o,host:n,redirect:r,social:{image:s},title:i},...c})=>r?t(Eo,{...c},t(ct.title,null,"Redirecting to ",r),t("meta",{"http-equiv":"refresh",content:`0; URL=${r}`}),t("link",{rel:"canonical",href:r})):t(Eo,{...c},t(ct.title,null,i," | Eyelidlessness"),o!=null?t(ct.description,null,o):t($,null),t("meta",{name:"theme-color",content:a.siteLogo.color}),t("style",{dangerouslySetInnerHTML:{__html:Os}}),t("meta",{name:"twitter:card",content:"summary_large_image"}),t("meta",{name:"twitter:site",content:"@eyelidlessenss"}),t(ct.image,{alt:i,height:s.height,src:`${n}${s.publicPath}`,width:s.width}),t($,null,e),t(Ea,null)),Aa=({as:e="div",devilsBreakpoint:o,gap:n,...r})=>{const s=l(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return t(s,{...r})},Ye=512,mn=[0,0,Ye,Ye].join(" "),Ia=Ye/2,Ma=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),Oa=()=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:mn,width:"0"},t("defs",null,t("mask",{id:"octocat-knockout"},t("rect",{fill:"#fff",height:Ye,mask:"url(#octocat)",rx:Ia,width:Ye}),t("path",{d:Ma,fill:"#000"})))),Ra=l("rect",{...a.gitHubLogo}),pn=({className:e})=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:mn},t("title",null,"GitHub"),t(Ra,{height:Ye,mask:"url(#octocat-knockout)",width:Ye})),kt={height:60,width:338},ja=l("svg",{display:"inline-block",maxWidth:"100%",width:`${kt.width}px`}),$a=l("use",{nested:{[a.darkMode]:{...a[a.darkMode].siteLogo}},...a.siteLogo,fill:"currentcolor"}),La=`0 0 ${kt.width} ${kt.height}`,Ba=()=>t(ja,{viewBox:La},t($a,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),t("title",null,"Eyelidlessness")),{columns:qe}=a.siteHeader,Na=`
  ${qe[0]}
  ${qe[1]}
  min(
    ${qe[2][0]},
    ${qe[2][1]}
  )
  ${qe[3]}
  ${qe[4]}
`.replace(/\s+/g," "),Ha=l("header",{...a.artOverlay,display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Na,padding:"clamp(0.5rem, 5vmin, 3rem) 0",position:"relative",zIndex:1}),Da=l("div",{gridColumn:3}),Ya=l("div",{margin:"0 auto"}),_a=l("a",{textDecoration:"none"}),Xa=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),hn=1,za=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${hn/2}rem`,padding:0}),Fa=l("a",{...a.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[a.darkMode]:{...a[a.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),un="1.5em",_l=l(pn,{display:"block",width:`clamp(1.125em, 4vw, ${un})`}),Ua=()=>{const e=[{label:"Blog",location:"/"},{label:"Projects",location:"/projects/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],o=e.reduce((s,i)=>typeof i.label=="string"?s+i.label.length:s,0),n={horizontal:"2rem"},r=`${[`${kt.width}px`,n.horizontal,`${o+1}ch`,un,`${e.length*hn}rem`].join(" + ")}`;return t(Ha,null,t(Da,null,t(Aa,{as:"nav",devilsBreakpoint:r,gap:n},t(Ya,null,t(_a,{href:"/"},t(Ba,null))),t(Xa,null,e.map(({location:s,label:i})=>t(za,null,t(Fa,{href:s},i)))))))},Ga=l(V,{paddingTop:0,paddingBottom:"4em"}),gn=({redirect:e,...o})=>t(Fe,null,e==null?t($,null,t(Ua,null),t(Ga,{as:"main",...o})):t($,null)),Wa=l(V,{...a.description,nested:{...a.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Va=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),qa=l("div",{fontSize:"0.889em"}),Ka=({as:e="section",title:o,...n})=>t(Wa,{as:e,itemprop:"description"},o?t(Va,null,o):null,t(qa,{...n})),Ja=l(V,{...a.artOverlay}),Za=l("h1",{marginBottom:"0.25rem"}),Qa=l(V,{marginBottom:"1rem"}),fn=e=>{const{children:o,CustomArt:n,description:r,descriptionRaw:s,hash:i,redirect:c,stat:{created:d},title:p,topics:h}=e;return t($,null,t(dn,{meta:{...e,description:s}}),t(gn,{as:"article",redirect:c},t(Qa,null,n==null?t(vt,{hash:i,title:p,topics:h}):t(n,{hash:i,renderType:"post",StylesProvider:Fe,title:p,topics:h}),t(Ja,null,t(Za,null,p),t(Qt,{date:d,itemprop:"datePublished"}),t(ln,{link:!1,topics:h}))),t(Ka,null,r),o))},bn={IMMUTABLE:De.IMMUTABLE,IMMUTABLE_MERGE:De.IMMUTABLE_MERGE},yn=async e=>{const{description:o,importURL:n,path:r,redirect:s,title:i,topics:c,type:d=bn.IMMUTABLE_MERGE}=e,{CustomArt:p,hash:h,host:y,social:g,stat:f}=nn(r,n,i,d,c),w=Ai`${So(t($,null,o))}`;return{CustomArt:p,description:o,descriptionRaw:w,hash:h,host:y,path:r,redirect:s,social:g,stat:f,title:i,topics:c}},Sn=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),xn="@media (min-width: 41.666rem)",ec=l(Sn,{display:"block",margin:0,nested:{[xn]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}}}}),tc=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),oc=e=>{const o=Array();return e.role===P.CREATOR&&o.push(e.description),e.summary!=null&&o.push(e.summary),o.length===0&&o.push(e.description),t(tc,null,o.map(n=>St(n)))},nc=l(Sn,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),rc=l(nc,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",rowGap:"0.325rem",nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),sc=l("h3",{paddingLeft:0,textIndent:0}),ic=l("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),ac=/^(\d{4})-(\d{2})$/,vn=e=>{const o=e.match(ac);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,r]=o;return new Date(`${n}-${r}-01T00:00:00`)},eo=l("div",{fontSize:"0.88889em",marginLeft:"auto"}),Pt=l(Qt,{fontSize:"inherit"}),cc=({range:[e,o]})=>{const n=vn(e);if(o==null)return t(eo,null,"Since ",t(Pt,{date:n,itemprop:"startDate",mode:Pe.SHORT}));const r=vn(o);return e==o?t(eo,null,t(Pt,{date:n,itemprop:"endDate",mode:Pe.SHORT})):t(eo,null,t(Pt,{date:n,itemprop:"startDate",mode:Pe.SHORT})," \u2013 ",t(Pt,{date:r,itemprop:"endDate",mode:Pe.SHORT}))},lc=l("a",{display:"block",padding:"0 0.5rem 0.5rem 0.5rem",zIndex:1,nested:{"& svg":{width:"1.25em"},[xn]:{paddingLeft:0}}}),dc=l("div",{paddingTop:"0.05556rem"}),mc=l("div",{alignItems:"start",display:"grid",gridTemplateColumns:"auto 1fr",padding:"1rem 0"}),to=({project:{description:e,end:o,repo:n,role:r,title:s,start:i,summary:c}})=>t(mc,null,t(lc,{href:n},t(Oa,null),t(pn,null)),t(dc,null,t(rc,null,t(sc,null,t(ic,{href:n},s)),t(cc,{range:[i,o]})),t(oc,{role:r,description:e,summary:c??null}))),pc=l("div",{fontSize:"0.8889em",paddingLeft:"0.25rem"}),hc=l("aside",{...a.aside,fontSize:"1rem",nested:{[a.darkMode]:{...a[a.darkMode].aside}}}),uc=l("div",{...a.asideBlock.symbol,fontSize:Be("2.2em","7vw","3em"),marginLeft:"-1.25rem",marginTop:"-1.25rem",transform:"rotate(-20deg)",nested:{...a.asideBlock.symbol.nested,[a.darkMode]:{...a.asideBlock.symbol.nested[a.darkMode],fontWeight:"bolder"}}}),Cn=({children:e})=>t(Fo,{ContentContainer:pc,OuterContainer:hc,symbol:"#",SymbolContainer:uc},e),gc=l("span",{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"});import.meta.env=lt;const Tt=(...e)=>["https://github.com/eyelidlessness/eyelidlessness.github.io",...e].join("/"),wn={blame:Tt("blame/9216eb05cd375fccc7e9b06a98bb9c1b110a97d0/src/pages/blog/2021/02","what-the-art-p2-constraints/index.tsx#L111-L112"),artBoilerplate:Tt("blob/main/src/lib/art/math.ts"),bezierCurves:"https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B%C3%A9zier_curves",gitBoilerplate:Tt("blob/main/src/lib/git/log.ts"),goldenRatio:"https://en.wikipedia.org/wiki/Golden_ratio",microsite:"https://github.com/natemoo-re/microsite",originMain:Tt("tree/main"),p1:"/blog/2021/02/what-the-art-p1-why/",p2:"/blog/2021/02/what-the-art-p2-constraints/",resume:"/resume/",sha1:"https://en.wikipedia.org/wiki/SHA-1"},fc=Object.entries(wn).map(([e,o])=>`[${e}]: ${o}`).join(`
`),ce=(...e)=>St(String.raw(...e),`

`,fc),kn=l("h3",{fontFamily:"inherit",fontSize:"0.889em",fontWeight:700,margin:0}),Pn=16,bc=40,Tn=a.baseFontSizeRange.minEm,yc=a.baseFontSizeRange.maxEm,Ke=Pn*yc,En=Ke/Tn,An=e=>e*Ke/2,In=An(bc),Sc=l(V,{margin:"0.5rem 0 2rem"}),xc=l("svg",{display:"block",fontSize:`${Pn*Tn}px`,maxWidth:"28rem",width:"100%"}),Mn=({className:e,children:o,height:n,width:r})=>t(xc,{className:e,viewBox:`0 0 ${r} ${n}`},o),vc=({children:e,className:o,height:n=Ke,width:r=In})=>t(Sc,{className:o},t(Mn,{height:n,width:r},e)),C="0123456789".split("").map(e=>{const n=Number(e)*36;return{dark:{emphasize:ie.hsluvToHex([n,100,35]),hover:ie.hsluvToHex([n,100,3]),plot:ie.hsluvToHex([n,100,74]),selected:ie.hsluvToHex([n,100,64]),x:ie.hsluvToHex([n,100,84]),y:ie.hsluvToHex([n,100,74])},light:{emphasize:ie.hsluvToHex([n,100,80]),hover:ie.hsluvToHex([n,100,97]),plot:ie.hsluvToHex([n,100,64]),selected:ie.hsluvToHex([n,100,64]),x:ie.hsluvToHex([n,100,54]),y:ie.hsluvToHex([n,100,44])}}}),On=l("text",{fill:"currentcolor",fontFamily:a.monospaceFont}),Cc=({className:e,hash:o})=>t($,null,t(kn,null,"Result:"),t(vc,{className:e},t(On,{textLength:In,x:"0",y:En},o))),wc=l(Cc,{color:C[9].light.x,marginTop:"0.5rem",nested:{[a.darkMode]:{color:C[9].dark.y}}}),kc=me(),Je=({className:e="",...o},...n)=>({...o,className:[e,kc,...n].join(" ")}),Rn=me(),Pc=({children:e,className:o="",coordinate:n,index:r,padLength:s,sortedIndex:i,toggleClass:c,...d})=>t(On,{...Je(d,o,Rn)},typeof e=="string"?e.padStart(s," "):e),Me=l(Pc,({coordinate:e,index:o,sortedIndex:n})=>({"--sorted-color":C[n].light[e],color:C[o].light[e],whiteSpace:"pre",nested:{[a.darkMode]:{"--sorted-color":C[n].dark[e],color:C[o].dark[e]}}})),oo=me(),Tc=({children:e,index:o,sortedIndex:n,toggleClass:r,...s})=>t("rect",{...Je(s,oo)},e),Ec=l(Tc,({index:e,sortedIndex:o})=>({"--selected-color":C[e].light.selected,"--selected-sorted-color":C[o].light.selected,"--sorted-color":C[o].light.hover,color:C[e].light.hover,fill:"currentcolor",opacity:0,transition:"opacity 0.1s ease-in-out",zIndex:-1,nested:{[a.darkMode]:{"--selected-color":C[e].dark.selected,"--selected-sorted-color":C[o].dark.selected,"--sorted-color":C[o].dark.hover,color:C[e].dark.hover}}})),no=me(),Ac=({children:e,index:o,isControlPoint:n,isSegment:r,pointSize:s,sortedIndex:i,sortedX:c,sortedY:d,sortedTranslateXPercent:p,sortedTranslateyPercent:h,xShift:y,yShift:g,...f})=>t("circle",{...Je(f,no)},e),jn="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",Ic=l(Ac,({index:e,isControlPoint:o,isSegment:n,sortedIndex:r,sortedTranslateXPercent:s,sortedTranslateyPercent:i})=>o?{"--emphasized-color":"#666","--emphasized-stroke-width":0,color:"transparent",fill:"currentcolor",stroke:"currentcolor",strokeWidth:0,nested:{[a.darkMode]:{"--emphasized-color":"#ccc",color:"transparent"}}}:n?{"--emphasized-color":C[e].light.plot,color:"#dadada",fill:"currentcolor",stroke:C[e].light.plot,strokeWidth:0,transition:jn,nested:{[a.darkMode]:{"--emphasized-color":C[e].dark.plot,color:"#666"}}}:{"--emphasized-color":C[e].light.plot,"--emphasized-sorted-color":C[r].light.plot,"--unsorted-transform":`translate(${[`${s}%`,`${i}%`].join(",")})`,"--sorted-color":C[r].light.plot,"--sorted-stroke":C[r].light.emphasize,color:C[e].light.plot,fill:"currentcolor",paintOrder:"stroke fill",stroke:C[e].light.emphasize,strokeWidth:0,transition:Object.entries({fill:"0.1s",stroke:"0.1s","stroke-width":"0.1s",transform:"0.2s"}).map(([c,d])=>`${c} ${d} ease-in-out`).join(", "),nested:{[a.darkMode]:{"--emphasized-color":C[e].dark.plot,"--emphasized-sorted-color":C[r].dark.plot,"--sorted-color":C[r].dark.plot,"--sorted-stroke":C[r].dark.emphasize,color:C[e].dark.plot,stroke:C[e].dark.emphasize}}}),Mc=(e,o)=>o==null?{color:C[e].light.plot,nested:{[a.darkMode]:{color:C[e].dark.plot}}}:a.topicColors[o],$n=({fill:e,index:o,topic:n})=>({...Mc(o,n),...e?{fill:"currentcolor",fillOpacity:.15,mask:"url(#curvesVerticalFade)",strokeWidth:0}:{fill:"none",strokeWidth:2,stroke:"currentcolor"},transition:jn,vectorEffect:"non-scaling-stroke"}),Oc=({fill:e,index:o,topic:n,...r})=>t("line",{...r}),Ln=l(Oc,$n),Rc=({fill:e,index:o,topic:n,...r})=>t("path",{...r}),Bn=l(Rc,$n),Nn=({exampleId:e,index:o,suffix:n,type:r})=>r==="radio"?`example-${e}-${o}-${n}-choice`:`example-${e}-${n}-choice`,Hn=e=>{const{checked:o,className:n,exampleId:r,suffix:s,type:i,value:c}=e,d=Boolean(o)?{checked:o}:{},p=Nn(e);return t(gc,{...d,as:"input",className:n,id:p,name:`example-${r}-${s}`,type:i,value:c})},jc=({pointSize:e,...o})=>t(Hn,{...o}),$c=l(jc,({exampleId:e,index:o,pointSize:n,suffix:r})=>({nested:{[`&:checked ~ * #example-${e}-${o}-${r}`]:{strokeWidth:n*2.5},[`&:checked ~ * .example-${e}-${o}-${r}`]:{color:"var(--emphasized-color)",strokeWidth:"var(--emphasized-stroke-width, 3)"},[`&:checked ~ * .example-${e}-${o}-line`]:{},[`&:checked ~ * [for="example-${e}-${o}-${r}-choice"] .${oo}`]:{opacity:1,color:"var(--selected-color)"},[`&:checked ~ * [for="example-${e}-${o}-${r}-choice"] text`]:{color:"#fff",nested:{[a.darkMode]:{color:ir(255,255,255,.9)}}}}})),Lc=l("g",{nested:{"&:hover rect":{opacity:.5}}}),Bc=({hash:e})=>{const o=Number.parseInt(e,16);if(isNaN(o))throw new ot(e);const n=o.toExponential(2),[r,s]=n.split(/e[-+]/);return t($,null,r,s==null?null:t("sup",null,s))},Nc=l(V,{...a.pre,marginBottom:"1.5rem",nested:{[a.darkMode]:{...a[a.darkMode].pre}}}),Hc=({children:e,...o})=>t(Xo,{...o,shadow:{darkMask:[0,0,0,1],darkScroll:[230,179,213,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]}},e),Dc=l("div",{alignItems:"stretch",display:"flex",nested:{"&:after":{content:'""',backgroundImage:`linear-gradient(${["to left","rgba(255,255,255,1)","rgba(255,255,255,1) 3rem","rgba(255,255,255,0) 4rem"].join(", ")})`,backgroundSize:"4rem 100%",boxShadow:"2rem 0 0 #fff",display:"block",flexShrink:0,marginLeft:"auto",order:10,width:"2rem"},[a.darkMode]:{nested:{"&:after":{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,1)","rgba(0,0,0,1) 3rem","rgba(0,0,0,0) 4rem"].join(", ")})`,boxShadow:"2rem 0 0 #000"}}}}}),Dn=me(),Yc=({children:e,sortedIndex:o,...n})=>t("label",{...Je(n,Dn)},e),_c=l(Yc,({sortedIndex:e})=>({"--sorted-index":e,display:"inline-block",flexShrink:0,paddingBottom:"0.5rem",paddingRight:"1rem",paddingTop:"0.5rem",transition:"order 0.05s ease-in-out"})),Xc=l("span",{...a.toggleSwitch.container.off,alignItems:"center",backgroundColor:"currentcolor",border:"4px solid currentcolor",borderRadius:"16px",boxSizing:"content-box",display:"inline-flex",height:"24px",padding:0,width:"48px",verticalAlign:"middle"}),Yn=me(),zc=({children:e,...o})=>t(Xc,{...o,className:Yn},e),Fc=l("span",{...a.toggleSwitch.button,borderRadius:"12px",display:"inline-block",height:"24px",width:"24px",verticalAlign:"middle"}),Uc=l("label",{alignItems:"center",display:"inline-flex",justifySelf:"start"}),Gc=l("span",{fontSize:"0.8889rem",marginRight:"0.5rem"}),Wc=me(),Vc=({children:e,exampleId:o,...n})=>{const s=Nn({exampleId:o,suffix:"sort",type:"checkbox"}),i=Je({...n,for:s},Wc);return t(Uc,{...i},t(Gc,null,"Enable sorting"),t(zc,null,t(Fc,null)))},qc=({sortIndexes:e,toggleClass:o,...n})=>t(Hn,{...Je(n,o),type:"checkbox"}),Kc=l(qc,{nested:{[`&:checked ~ * .${Rn}`]:{color:"var(--sorted-color)",stroke:"var(--sorted-stroke)"},[`&:checked ~ * .${oo}`]:{"--selected-color":"var(--selected-sorted-color)",color:"var(--sorted-color)"},[`&:checked ~ * .${Dn}`]:{order:"var(--sorted-index)"},[`& ~ * .${no}`]:{transform:"var(--unsorted-transform)"},[`&:checked ~ * .${no}`]:{"--emphasized-color":"var(--emphasized-sorted-color)",color:"var(--sorted-color)",stroke:"var(--sorted-stroke)",transform:"translate(0, 0)"},[`&:checked ~ * .${Yn}`]:{...a.toggleSwitch.container.on,justifyContent:"flex-end"}}}),Jc=l("div",{alignItems:"center",display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}),_n=e=>typeof e=="number"?`${e}px`:e,Zc=l(Mn,({height:e,width:o})=>({height:_n(e),overflow:"visible",width:_n(o)})),Qc=l(V,{position:"relative"}),Xn=l("svg",{overflow:"visible",padding:"1rem"}),Et=13,ro=l("text",{...a.visualization.plot.axis,fontFamily:a.monospaceFont,fontSize:`${Et}px`,fill:"currentcolor"}),so=20,io={xMax:ke,xScale:1,xShift:0,yMax:ke,yScale:1,yShift:0},el=To({alg:"sha1",coerce:!0,sort:!0,trim:!0}),tl=16,ol=128,zn=Array.from(Oi),ao=zn.map(e=>parseInt(e??el.hash(e),16)),co=Math.min(...ao),nl=Math.max(...ao)-co,rl=zn.reduce((e,o,n)=>{const r=ao[n],s=we((r-co)/nl*(ol-tl)+co,2);return{...e,[o]:s}},{}),lo=({className:e,exampleId:o,hexPoints:n,points:r,pointSize:s=6,renderAxis:i=!0,renderCurves:c,renderSegments:d=!1,scaleOptions:p,segments:h,sortIndexes:y,sortToggleClass:g,topics:f,...w})=>{const{xScale:S,xShift:b,xRange:k=S*(ke+b*2),yMax:T,yShift:z,yScale:H,yRange:I=H*(T+z*2)}={...io,...p},F=so*2,v=w.height??I+F,q=w.width??k+F,Z=0,oe="100%",U=0-Et,Se="100%",le=ke.toString(16),xe=Vo.toString(16),Oe=xe.padStart(2,xe),pe=n.map(({x:j,y:E},K)=>{if(typeof s=="number")return s;const Q=(K%2==0?j:E)[0];return typeof s=="number"?s:rl[Q]}),he=typeof s=="number"?null:pe.map(j=>j*.666+4),ue=he?.map((j,E)=>`hash-plot-blur-${o}-${E}`),ge=he==null?null:t("defs",null,he.map((j,E)=>t("filter",{id:ue?.[E]},t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:j})))),X=i?t($,null,t(ro,{x:U,y:oe,transform:`translate(0, ${Et})`},Oe),t(ro,{x:U,y:Z},le),t(ro,{x:Se,y:oe,transform:`translate(0, ${Et})`},le)):null,L=({x:j,y:E},K)=>{const Y=y[K],{x:Q,y:fe}=r[Y],de=we((j+b)/k*100,4),B=100-we((E-z)/I*100,4),J=we((Q+b)/k*100,4),R=100-we((fe-z)/I*100,4),ee=0-we(de-J,4),be=0-we(B-R,4),ye=pe[K],re=ue?.[K],ve=re==null?{}:{filter:`url(#${re})`};return{cx:de,cy:B,filterId:re,filterProps:ve,pointSize:ye,sortedCx:J,sortedCy:R,sortedTranslateXPercent:ee,sortedTranslateyPercent:be}},x=({index:j,isControlPoint:E=!1,point:K,pointSize:Y})=>{const{cx:Q,cy:fe,filterProps:de,pointSize:B,sortedCx:J,sortedCy:R,sortedTranslateXPercent:ee,sortedTranslateyPercent:be}=L(K,j),ye=Boolean(d||c),re=y[j],ve=ye?{className:`example-${o}-${j}-point`}:{className:[`example-${o}-${j}-point`,`example-${o}-${re}-sorted-point`].join(" "),id:`example-${o}-${j}-point`};return t(Ic,{...de,...ve,cx:`${Q}%`,cy:`${fe}%`,index:j,isControlPoint:E,isSegment:ye,pointSize:Y??B,r:Y??B,sortedIndex:re,sortedX:J-K.x,sortedY:R-R,sortedTranslateXPercent:ee,sortedTranslateyPercent:be,toggleClass:g,xShift:so,yShift:so})},Re=d?null:r.map((j,E)=>t(x,{index:E,point:j})),je=d?h?.map(([j,E,K],Y)=>{const{cx:Q,cy:fe}=L(j,Y),{cx:de,cy:B}=L(E,Y),{cx:J,cy:R}=L(K,Y),ee=f?.[Y%f.length];return t("g",null,t(x,{index:Y,point:j}),t(x,{index:Y,point:E}),t(x,{index:Y,point:K}),t(Ln,{className:`example-${o}-${Y}-line`,index:Y,topic:ee,x1:`${Q}%`,x2:`${de}%`,y1:`${fe}%`,y2:`${B}%`}),t(Ln,{className:`example-${o}-${Y}-line`,index:Y,topic:ee,x1:`${de}%`,x2:`${J}%`,y1:`${B}%`,y2:`${R}%`}))}):null,Te=()=>{if(h==null||c==null)return{curvePoints:null,renderedCurves:null};const E=(c==="all"||c==="only"?h:[h[0]]).map(B=>{const[J,R,ee]=B,{x:be}=J,{y:ye}=R,{x:re}=ee,ve=re-be,po=ve===0?0:Math.max(ye/ve*Jo,Ko);return{cubicPoints:B?.reduce((Ee,Ae,$e)=>{if($e===0)return Ee;const Xe=tn({index:$e,point:Ae,points:B,smoothing:po,xScale:S,yScale:H});return[...Ee,Xe]},[]),segment:B}}),K={overflow:"visible"},Y=l(c==="only"?Xn:"svg",K),Q=c==="only"?{className:e}:void 0,fe=c==="only"?v:"100%",de=c==="only"?q:"100%";return{curvePoints:t($,null,E.map(({cubicPoints:B,segment:J},R)=>{const[ee,be,ye]=J;return t("g",null,t(x,{index:R,point:ee,pointSize:4}),t(x,{index:R,point:be,pointSize:4}),t(x,{index:R,point:ye,pointSize:4}),B.map(([re,ve])=>t($,null,t(x,{index:R,isControlPoint:!0,point:re,pointSize:3}),t(x,{index:R,isControlPoint:!0,point:ve,pointSize:3}))))})),renderedCurves:t(Y,{...Q,height:fe,width:de,preserveAspectRatio:"none",viewBox:`0 0 ${q} ${v}`},t("defs",null,t("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),t("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),E.map(({cubicPoints:B,segment:J},R)=>{const[ee,be,ye]=J,re=B.map(([_e,Ee],Ae)=>[Ae===0?ee:be,_e,Ee,Ae===0?be:ye]);return t($,null,t(()=>t($,null,re.map(_e=>{const Ee=_e.map(($e,Xe)=>{const{cx:Ot,cy:Ze}=L($e,R),Rt=Ot/100*q,jt=Ze/100*v;return`${Xe===0?"M ":Xe===1?"C ":""} ${Rt},${jt}`}).join(" "),Ae=f?.[R%f.length];return t(Bn,{d:Ee,index:R,topic:Ae})})),null),t(()=>{const _e=re.map((Ae,$e)=>Ae.map((Ot,Ze)=>{if($e>0&&Ze===0)return"";const{cx:Rt,cy:jt}=L(Ot,R),ho=Rt/100*q,Un=jt/100*v;return`${Ze===0?"M ":Ze===1?"C ":""} ${ho},${Un}`}).join(" ")).join(" "),Ee=f?.[R%f.length];return t(Bn,{d:_e,fill:!0,index:R,topic:Ee})},null))}))}},{curvePoints:D,renderedCurves:ne}=Te();return c==="only"?ne:t(Xn,{className:e,height:v,width:q},ge,X,Re,je,D,ne)},sl=l(V,{marginBottom:"1rem"}),il=l(lo,{gridColumn:"1 / -1"}),al=l(lo,{width:"32rem"}),At=({exampleId:e,hexPoints:o,plotPointSize:n=6,points:r,renderAxis:s,renderCurves:i,renderScaled:c=!0,renderSegments:d,scaleOptions:p=io,toggleSorting:h})=>{const y=c?V:$,g=c?il:al,f=Boolean(i||d),S=f?Ke*3:!f&&c?Ke*5:Ke*4,b=En,k=b*2.5,T=b*3.5,z=b*4.5,H={...io,...p},I=r.map(X=>xt(X,H)),F=yt(I,(X,L)=>Number(X.x)===Number(L.x)?0:Number(X.x)>Number(L.x)?1:-1),v=I.map((X,L)=>h?F.indexOf(X)??-1:L),q=h?o:F.map(X=>o[I.indexOf(X)]),Z=h?r:F,oe=h?I:F,U=me(),{xScale:Se,xShift:le,yScale:xe}=H,Oe=le*2,pe=(ke+Oe)*Se,he=Gt({points:oe,xMax:pe,xScale:Se,yScale:xe}),ue=Wt({segments:he,xMax:pe,xScale:Se,yScale:xe}),ge={...H};return t(y,null,t(Qc,null,Z.map((X,L)=>t($c,{checked:L===0,exampleId:e,pointSize:n,index:L,suffix:"point",type:"radio"})),h?t(Kc,{exampleId:e,sortIndexes:v,suffix:"sort",toggleClass:U}):null,t(Jc,null,t(kn,null,"Result:"),h?t(Vc,{exampleId:e}):null),t(sl,null,t(g,{exampleId:e,hexPoints:q,points:Z,pointSize:n,renderAxis:s,renderCurves:i,renderSegments:d,scaleOptions:ge,segments:ue,sortIndexes:v,sortToggleClass:U})),t(Nc,null,t(Hc,null,t(Dc,null,q.map(({x:X,y:L},x)=>{const{x:Re,y:je}=Z[x],{x:Te,y:D}=oe[x],ne=[X,L,Re,je,...c?[Te,D]:[]],j=String(ke).length,E=f?j:Math.max(j,...ne.map(ee=>String(ee).length)),K=o.length,Y=An(K),Q=1/K*Y,fe=E*Q,de=fe*2+Q,B=fe+Q,J=Q/2,R=de+J*2;return t(_c,{className:`point-${x}`,for:`example-${e}-${x}-point-choice`,sortedIndex:v[x]},t(Zc,{height:S,width:R},t(Lc,null,t(Ec,{index:x,height:S,rx:3,ry:3,width:R,x:0-J,y:0,sortedIndex:v[x],toggleClass:U}),t(Me,{coordinate:"x",index:x,y:b,padLength:E,sortedIndex:v[x],toggleClass:U},"x"),t(Me,{coordinate:"y",index:x,x:B,y:b,padLength:E,sortedIndex:v[x],toggleClass:U},"y"),t(Me,{coordinate:"x",index:x,y:k,padLength:E,sortedIndex:v[x],toggleClass:U},X),t(Me,{coordinate:"y",index:x,x:B,y:k,padLength:E,sortedIndex:v[x],toggleClass:U},L),f?null:t($,null,t(Me,{coordinate:"x",index:x,y:T,padLength:E,sortedIndex:v[x],toggleClass:U},String(parseInt(X,16))),t(Me,{coordinate:"y",index:x,x:B,y:T,padLength:E,sortedIndex:v[x],toggleClass:U},String(parseInt(L,16)))),c&&!f?t($,null,t(Me,{coordinate:"x",index:x,y:z,padLength:E,sortedIndex:v[x],toggleClass:U},String(Te)),t(Me,{coordinate:"y",index:x,padLength:E,x:B,y:z,sortedIndex:v[x],toggleClass:U},String(D))):null)))}))))))},It=({index:e})=>t($,null,t("code",null,"P",t("sub",null,e)),":\xA0",t("code",null,"{","\xA0x",t("sub",null,e),",\xA0y",t("sub",null,e),"\xA0","}")),Mt=({className:e,hash:o,height:n,identifier:r=me,renderType:s,StylesProvider:i=Fe,styleRenderer:c=Ne,topics:d,width:p})=>{const h=Ft(o),y=Ut(o,h),{xPadding:g,xScale:f,yPadding:w,yScale:S}=Zt,b=s==="meta",k=b?0:g,T=b?0:w,z=k/2,H=T/2,I={xScale:f,xShift:z,yScale:S,yShift:H},v=yt(y,(D,ne)=>D.x===ne.x?0:D.x>ne.x?1:-1).map(D=>xt(D,I)),q=v.map((D,ne)=>ne),Z=v.map(D=>h[v.indexOf(D)]),oe=(ke+k)*f,U=r(),Se=Gt({points:v,xMax:oe,xScale:f,yScale:S}),le=Wt({segments:Se,xMax:oe,xScale:f,yScale:S}),xe=b?{path:{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,Oe=b?"0 !important":"0 0 1rem !important",pe=st,he="100%",ue=D=>typeof D=="number"?`${D}px`:D,ge=(D,ne)=>typeof D=="number"?D*ne:D,X=b?ge(n??pe,.95):st,L=b?ge(p??he,.95):"100%",x=b&&n!=null?ge(n,.95):n,Re=b&&p!=null?ge(p,.95):p,je=c.renderRule(()=>({gridColumn:"1 / -1",height:ue(X),padding:Oe,width:ue(L),nested:{...xe}}),Object.keys),Te=b?e:`${e} ${je}`;return t(i,null,t(lo,{className:Te,exampleId:-1,height:x,hexPoints:Z,points:v,renderAxis:!1,renderCurves:"only",scaleOptions:I,segments:le,sortIndexes:q,sortToggleClass:U,topics:d,width:Re}))},cl=e=>{const{hash:o,title:n,topics:r}=e,s=Ft(o),i=Ut(o,s),c=yt(i,({x:k},{x:T})=>Number(k)===Number(T)?0:Number(k)>Number(T)?1:-1),{xPadding:d,xScale:p,yPadding:h,yScale:y}=Zt,g=d/2,f=h/2,w={xShift:g,xScale:p,yShift:f,yScale:y},S=c.map(k=>xt(k,w)),{}=Qo(S),b=k=>"${"+k+"}";return t(fn,{...e,CustomArt:Mt},ce`
        Previous:

        - [What the art, part 1: Why?][p1]
        - [What the art, part 2: Constraints][p2]

        Well, I certainly was [overly optimistic][blame] about how quickly I'd
        be able to finish this post! I took a little detour to build out
        [my résumé][resume] because I'm currently on the job hunt (want to hire
        me?). I wanted to finish this series, but knowing the site was live and
        ready to serve up my résumé proved to be a big enough ADHD mental block
        that I couldn't focus on the blog until it was done.

        But we're back to fill in some of the juicy implementation details! In
        the previous posts, I discussed the motivation behind the art, and the
        constraints that informed the artistic direction. This is how it was
        built.
      `,t(Cn,null,ce`
          There's a fair bit of boilerplate & plumbing that the art
          functionality depends on. To keep the post focused I'll leave out
          some of the boring stuff. But if you want to see the nitty gritty,
          you can check out the full source for Git usage in
          [\`lib/git/log.ts\`][gitBoilerplate], and for art generation in
          [\`lib/art/math.ts\`][artBoilerplate].
        `),t("h2",null,"Getting the Git"),ce`
        As I mentioned in Constraints, one of the goals was immutability:
        art that would render the same even if a given post is edited. This
        is achieved by retrieving a Git hash of the initial commit of the post.
        To allow incremental commits (save early, save often!), I restrict
        this hash lookup to the [\`origin/main\`][originMain] branch.

        For every post, I look up the initial commit hash of the post's entry
        module, falling back to a format-compatible SHA-1 hash of the current
        content of the file on disk in cases where the post isn't yet
        committed:

        ~~~typescript
        export const getInitialFileHash = (basePath: string) => {
          const path = resolveModulePath(basePath);
          const [ hash ] = getFormattedGitLogData({
            decode: identity,
            format: GitFormat.HASH,
            path,
          });

          return hash ?? getSHA1Hash(path);
        };

        const hash = getInitialFileHash(path);
        ~~~
      `,t(wc,{hash:o}),t("h2",null,"Using (abusing) the hash data"),t("p",null,"The hash ",t("a",{href:wn.sha1},"represents a 160-bit number"),", this post's hash being approximately ",t(Bc,{hash:o}),". My idea was to treat it as the basis for a data structure: a set of ten numeric pairs, two hex characters per number, 8 bits each, which are then converted to ",t("code",null,"{ x, y }")," coordinates."),ce`
        ~~~typescript
        export const COORDINATE_MAX  = parseInt('ff', 16);
        export const COORDINATE_MIN  = parseInt('00', 16);

        // ...

        const hexPointPattern = /([0-9a-f]{2})([0-9a-f]{2})/ig;

        export const toHexPointSequence = (hash: string): HexPointSequence => {
          if (!isValidHash(hash)) {
            throw new InvalidHashError(hash);
          }

          const matches = Array.from(hash.matchAll(hexPointPattern) ?? []);
          const points  = matches.map(([ _, x, y ]) => ({
            x,
            y,
          } as HexPoint));

          if (!isHexPointSequence(points)) {
            throw new InvalidHashError(hash);
          }

          return points;
        };

        // ...

        const toCoordinate = (value: HexCoordinate): Coordinate => {
          const result = parseInt(value, 16);

          if (result > COORDINATE_MAX || result < COORDINATE_MIN) {
            throw new Error(\`Not a valid coordinate: ${b("value")}\`);
          }

          return coordinate(result);
        };

        export const toPointSequence = (
          hash:      string,
          hexPoints: HexPointSequence
        ): PointSequence => {
          try {
            const result = hexPoints.map(toPoint);

            if (!isPointSequence(result)) {
              throw new InvalidHashError(hash);
            }

            return result;
          }
          catch {
            throw new InvalidHashError(hash);
          }
        };

        const hexPoints  = toHexPointSequence(hash);
        const basePoints = toPointSequence(hash, hexPoints);
        ~~~

        While I can't predict the initial commit hash on \`main/origin\`
        for this post, it's improbable (but possible!) that the plot points in
        the example result below follow the same horizontal order as their
        labels—that would require a hash where every other 8-bit
        substring assigned to an \`x\` coordinate has a greater value than the
        previous \`x\`. But the final art style is a series of horizontal curves
        along a baseline, so the next thing I do is sort the point sequence
        along the \`x\` axis.

        ~~~typescript
        const sortedPoints = sortBy(basePoints, ({ x: a }, { x: b }) => (
          Number(a) === Number(b)
            ? 0
          : Number(a) > Number(b)
            ? 1
            : -1
        ));
        ~~~

        Sorting is off by default in the example, to allow readers to toggle
        the before/after state.
      `,t(At,{exampleId:1,hexPoints:s,points:i,renderScaled:!1,toggleSorting:!0}),t("h2",null,"Aspect ratio & padding adjustments"),ce`
        Of course, the final art rendering isn't square, it's much wider than
        it is tall. With some adjustments for very small & very large
        viewports, its aspect ratio is roughly five times the
        [golden ratio][goldenRatio] (there's no significance to this other than
        that it was the first ratio I tried), plus a small amount of padding—on
        the \`x\` axis to begin and end the blobs on the art's baseline, and on
        the \`y\` axis to leave some room for overshoot once the curves are
        computed.

        ~~~typescript
        export const scalePoint = <
          X extends number,
          Y extends number
        >({ x, y }: Point, {
          xScale,
          xShift,
          yScale,
          yShift,
        }: ScalePointOptions<X, Y>): ScaledPoint<X, Y> => (
          scaledPoint({
            x: (x + xShift) * xScale,
            xScale,
            y: (y + yShift) * yScale,
            yScale,
          })
        );

        const scaledPoints = sortedPoints.map((point) => (
          scalePoint(point, scaleOptions)
        ));
        ~~~
      `,t(At,{exampleId:2,hexPoints:s,points:i,renderAxis:!1,scaleOptions:w}),t("h2",null,"Connecting the dots"),ce`
        In the final art rendering, each point is joined into overlapping
        curves, each segment curving from approximately the previous point's
        \`x\` (or \`0\`) at the \`y\` the baseline to the following point's
        \`x\` (or \`xMax\`), also at the baseline.

        ~~~typescript
        export const getNaiveSegments = <
          X extends number,
          Y extends number
        >({
          points,
          xMax,
          xScale,
          yScale,
        }: GetSegmentsOptions<X, Y>): SegmentList<X, Y> => (
          [
            scaledPoint({
              x: 0,
              xScale,
              y: 0,
              yScale,
            }),
            ...points,
            scaledPoint({
              x: xMax,
              xScale,
              y: 0,
                yScale,
            }),
          ].reduce<SegmentList<X, Y>>((
            acc,
            mid,
            index,
            points
          ) => {
            if (index === 0 || index === points.length - 1) {
              return acc;
            }

            const baseline = scaledCoordinate(0, yScale);

            const segment = [
              {
                x: points[index - 1].x,
                y: baseline,
              },
              mid,
              {
                x: points[index + 1].x,
                y: baseline,
              },
            ] as const;

            return [
              ...acc,
              segment,
            ];
          }, [])
        );

        const naiveSegments = getNaiveSegments({
          points: scaledPoints,
          xMax,
        });
        ~~~

        Why are they _naïve_ segments? As I mentioned in Constraints, I
        discovered during development that sometimes certain hashes would
        create shapes which were inappropriate for the kind of content I wanted
        on my site. So after constructing these naïve segments, I walk through
        them again in hopes of detecting that scenario.

        I should add a caveat: this was entirely a process trial and error, and
        produced some moderately ugly "magic" code. I try not to write code like
        this, but if you're making art sometimes you've gotta break a few eggs!

        ~~~typescript
        /**
         * Generating art will be risk-free fun, I thought...
         */
        export const getNonPhallicSegments = <X extends number, Y extends number>({
          segments,
          xMax,
          xScale,
          yScale,
        }: GetNonPhallicSegmentsOptions<X, Y>): SegmentList<X, Y> => (
          segments.map<Segment<X, Y>>((segment) => {
            const [
              { x: startX, y: startY },
              { x: midX,   y: midY },
              { x: endX,   y: endY },
            ] = segment;

            const width           = endX - startX;
            const ratio           = midY / width;
            const maxRatio        = 6;
            const ratioAdjustment = maxRatio / ratio;

            if (ratioAdjustment < 1) {
              const ratioAdjustmentX    = ratioAdjustment * 0.2;
              const adjustmentX         = ratioAdjustmentX * startX;
              const ratioAdjustedStartX = startX - adjustmentX;
              const ratioAdjustedEndX   = endX   + adjustmentX;

              const overshootX = (
                ratioAdjustedStartX < 0
                  ? Math.abs(ratioAdjustedStartX)
                : ratioAdjustedEndX > xMax
                  ? xMax - ratioAdjustedEndX
                  : 0
              );

              const adjustedStartX = ratioAdjustedStartX + overshootX;
              const adjustedEndX   = ratioAdjustedEndX   + overshootX;

              const ratioAdjustmentY = ratioAdjustment * 0.3;

              const adjustedMidX = midX + overshootX;
              const adjustmentY  = ratioAdjustmentY * midY;
              const adjustedMidY = midY - adjustmentY;

              return [
                scaledPoint({
                  x: adjustedStartX,
                  xScale,
                  y: startY,
                  yScale,
                }),
                scaledPoint({
                  x: adjustedMidX,
                  xScale,
                  y: adjustedMidY,
                  yScale,
                }),
                scaledPoint({
                  x: adjustedEndX,
                  xScale,
                  y: endY,
                  yScale,
                }),
              ];
            }

            return segment;
          })
        );

        const segments = getNonPhallicSegments({
          segments: naiveSegments,
          xMax,
          xScale,
          yScale,
        });
        ~~~
      `,t(At,{exampleId:3,hexPoints:s,points:i,renderAxis:!1,renderSegments:!0,scaleOptions:w}),t("h2",null,"My trig crash course"),ce`
        We're coming near the end! But before I get to the final step, I needed
        to be able to generate [cubic Bézier curves][bezierCurves] for each
        segment.
      `,t(Cn,null,ce`
          I had to ~~learn~~ copy & paste some math to generate the curves. I
          did take the time to learn what the math is actually doing while
          writing this post, but I've never taken a trigonometry course, so I'm
          probably not the best person to explain it in great detail, but I'll
          give it a shot.
        `),ce`
        A single cubic Bézier curve is defined by:
      `,t("ul",null,t("li",null,"A starting point ",t(It,{index:0})),t("li",null,"A starting control point ",t(It,{index:1})),t("li",null,"An ending control point ",t(It,{index:2})),t("li",null,"An ending point ",t(It,{index:3}))),ce`
        The control points determine how far the curve extends, and how fast
        it arrives at the ending point. Here's how I calculate those curves.
        This is a fair bit of code, but the important bits are the
        \`curveLine\` function—which calculates an angled line to the control
        point, and the \`curveControlPoint\` function which calculates the
        control point's position from that line.

        ~~~typescript
        const curveLine = <X extends number, Y extends number>(
          { x: x0, y: y0 }: ScaledPoint<X, Y>,
          { x: x1, y: y1 }: ScaledPoint<X, Y>
        ) => {
          const xLength = x1 - x0;
          const yLength = y1 - y0;

          return {
            angle:  Math.atan2(yLength, xLength),
            length: Math.sqrt((xLength ** 2) + (yLength ** 2)),
          };
        };

        const curveControlPoint = <X extends number, Y extends number>({
          current,
          previous,
          next,
          reverse,
          smoothing,
          xScale,
          yScale,
        }: CurveControlPointOptions<X, Y>): ScaledPoint<X, Y> => {
          const reverseCompensation = reverse
            ? Math.PI
            : 0;
          const opposedLine = curveLine(previous, next);

          const angle  = opposedLine.angle  + reverseCompensation;
          const length = opposedLine.length * smoothing;

          const { x: xCurrent, y: yCurrent } = current;

          const x = xCurrent + (Math.cos(angle) * length);
          const y = yCurrent + (Math.sin(angle) * length);

          return {
            x: scaledCoordinate(x, xScale),
            y: scaledCoordinate(y, yScale),
          };
        };

        export const cubicBezierPoints = <X extends number, Y extends number>({
          index,
          point,
          points,
          smoothing,
          xScale,
          yScale,
        }: CubicBezierPointsOptions<X, Y>): CubicBezierPoints<X, Y> => {
          const startCurrent = points[index - 1];

          if (startCurrent == null) {
            throw new Error(
              'Cannot build cubic bezier points, no point before the provided index.'
            );
          }

          const startPrevious = points[index - 2] ?? startCurrent;
          const startControl = curveControlPoint({
            current:  startCurrent,
            previous: startPrevious,
            next:     point,
            reverse:  false,
            smoothing,
            xScale,
            yScale,
          });

          const previous = startCurrent;
          const next = points[index + 1] ?? point;
          const endControl = curveControlPoint({
            current:  point,
            previous: previous,
            next,
            reverse:  true,
            smoothing,
            xScale,
            yScale,
          });

          return [ startControl, endControl, point ];
        };

        const cubicPoints = segments.map((segment) => (
          segment.reduce((acc, point, index) => {
            if (index === 0) {
              return acc;
            }

            const segmentPoints = cubicBezierPoints({
              index,
              point,
              points: segment,
              smoothing,
              xScale,
              yScale,
            });

            return [
              ...acc,
              segmentPoints,
            ]
          }, []);
        ));
        ~~~
      `,t(At,{exampleId:4,hexPoints:s,points:i,renderAxis:!1,renderCurves:"all",scaleOptions:w}),t("h2",null,"Now, the magic happens"),ce`
        Now that I can get those smooth curves, I put on the final touches.
        Again, this is a fair bit of code, but essentially what's happening
        is that for each segment, I calculate a _slightly adjusted_ curve
        above the \`y\` axis baseline, then a _slightly differently adjusted_
        curve approximately mirroring it below the same baseline.

        These adjustments were chosen to fit a general theme in the site
        design, where most everything is laid out slightly to the left
        (assuming you're on a screen large enough for that to kick in), and
        to add just a little more visual variety than the curves alone.

        ~~~typescript
        const getCubicPoints = <X extends number, Y extends number>({
          segment,
          smoothing,
          xScale,
          yScale,
        }: GetCubicPointsOptions<X, Y>) => (
          segment.reduce<readonly string[]>((
            acc:    readonly string[],
            point:  ScaledPoint<X, Y>,
            index:  number
          ) => {
            if (index === 0) {
              return acc;
            }

            const segmentPoints = cubicBezierPoints({
              index,
              point,
              points: segment,
              smoothing,
              xScale,
              yScale,
            });

            const result = segmentPoints.map((point) => (
              \`${b("point.x")},${b("point.y")}\`
            )).join(' ');

            return [
              ...acc,
              \`C ${b("result")}\`,
            ];
          }, [])
        );

        export const getSegmentPaths = <X extends number, Y extends number>({
          baseYCoordinate,
          isBaselineBelowMidpoint,
          segments,
          xScale,
          yMax,
          yScale,
          yTilt = false,
        }: GetSegmentPathsOptions<X, Y>) => (
          segments.reduce((
            acc,
            segment,
            index,
            segments
          ) => {
            const { length } = segments;
            const [
              baseStartPoint,
              baseMidPoint,
              baseEndPoint,
            ] = segment;

            const { x: startX, y: baseStartY } = baseStartPoint;
            const { x: midX,   y: midY }       = baseMidPoint;
            const { x: endX,   y: baseEndY }   = baseEndPoint;

            const width = endX - startX;

            const smoothing = width === 0
              ? 0
              : Math.max(midY / width * SMOOTHING_RATIO, MIN_SMOOTHING);

            const Y_TILT = yTilt
              ? 0.1
              : 0;

            const Y_TILT_NEG = 1 - Y_TILT;
            const Y_TILT_POS = 1 + Y_TILT;

            const startYTilt = index % 2 === 0
              ? Y_TILT_NEG
              : Y_TILT_POS;

            const startY = isBaselineBelowMidpoint
              ? baseStartY + baseYCoordinate
              : yMax - baseStartY + baseYCoordinate;

            const startPoint: ScaledPoint<X, Y> = {
              x: startX,
              y: scaledCoordinate(startY * startYTilt, yScale),
            };

            const endYTilt = index % 2 === 0
              ? Y_TILT_NEG
              : Y_TILT_POS;

            const endY = isBaselineBelowMidpoint
              ? baseEndY + baseYCoordinate
              : yMax - baseEndY + baseYCoordinate;

            const endPoint: ScaledPoint<X, Y> = {
              x: scaledCoordinate(endX, xScale),
              y: scaledCoordinate(endY * endYTilt, yScale),
            };

            const startMidXDistance = midX - startX;
            const midEndXDistance = endX - midX;

            const forwardMidPointXAdjustment = midEndXDistance > startMidXDistance
              ? 0
              : 0 - ((midX - startX) * MID_POINT_TILT);

            const midPointYAdjustment = (length - index) * (yScale / 100 * yMax);

            const forwardMidPoint: ScaledPoint<X, Y> = {
              x: scaledCoordinate(midX + forwardMidPointXAdjustment, xScale),
              y: scaledCoordinate(midY - midPointYAdjustment, yScale),
            };

            const forwardSegment: Segment<X, Y> = [
              startPoint,
              forwardMidPoint,
              endPoint,
            ];

            const forwardPoints = getCubicPoints({
              segment: forwardSegment,
              smoothing,
              xScale,
              yScale,
            });

            const reverseMidPointXAdjustment = midEndXDistance > startMidXDistance
              ? (endX - midX) * MID_POINT_TILT
              : 0;

            const reverseMidPoint: ScaledPoint<X, Y> = {
              x: scaledCoordinate(midX + reverseMidPointXAdjustment, xScale),
              y: scaledCoordinate(yMax - midPointYAdjustment, yScale),
            };

            const reverseSegment: Segment<X, Y> = [
              endPoint,
              reverseMidPoint,
              startPoint,
            ];

            const reversePoints = getCubicPoints({
              segment: reverseSegment,
              smoothing,
              xScale,
              yScale,
            });

            return [
              ...acc,
              [
                \`M ${b("startPoint.x")},${b("startPoint.y")}\`,
                ...forwardPoints,
                ...reversePoints,
                'Z',
              ].join(' '),
            ];
          }, [] as readonly string[])
        );

        const segmentPaths = getSegmentPaths({
          baseYCoordinate,
          segments,
          xScale,
          yMax,
          isBaselineBelowMidpoint,
          yScale,
        });
        ~~~
      `,t(vt,{hash:o,title:n,topics:r}),t("h2",null,"My mistakes"),ce`
        One thing that was challenging building both the original art
        project, as well as the examples for this post, is that I'm working
        with numerical data, which I expect to go _up_ as it increases, but
        SVG renders higher numbers on the \`y\` axis _down_. I've gotten
        so frequently so turned around by this that, well, the final art
        rendering shows I never quite got it right! But I like how it looks,
        and I don't want to mess with that for now.

        Sometimes technically incorrect is the best kind of correct!

        * * *

        ### And another thing...

        I discovered two more mistakes after the post went live! First, I
        noticed the post's timestamp was incorrect. Since the timestamp is
        also defined by the time of the first commit to \`origin/main\`,
        this means that the command I'd used to retrieve the initial hash
        was also wrong.

        Then I realized the URL is wrong, because I began writing the post
        in February. Both have been corrected.
      `)};var ll=Pr(cl,{async getStaticProps(e){return{props:{...await yn({...e,description:St`
        The final part in a series introducing my new site's art project.
        I walk through some of the more interesting parts of how the art
        is generated.
      `,importURL:import.meta.url,title:"What the art, part 3: Implementation",topics:[N.ART,N.TECHNOLOGY,N.NEURODIVERGENCE]}),CustomArt:Mt}}}});const dl=l(V,{...a.projects.current,margin:"0.5rem 0 3rem",padding:"1rem 0"}),Fn=l("h2",{fontSize:Be(`${a.headingRanges.h3.minEm}em`,`${a.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),mo=l("div",{marginTop:"0.5rem"}),ml=({projects:e,meta:o,...n})=>{const{contributor:r,creator:s,current:i}=e.reduce((c,d)=>{const p=d.end==null?"current":d.role===P.CREATOR?"creator":"contributor";return{...c,[p]:[...c[p],d]}},{contributor:[],creator:[],current:[]});return t($,null,t(Mt,{...o,renderType:"post"}),t("h1",null,"Projects"),t(dl,null,t("h2",null,"Current"),t(mo,null,i.map(c=>t(to,{project:c})))),t(ec,{...n},t("div",null,t(Fn,null,"Projects I Created"),t(mo,null,s.map(c=>t(to,{project:c})))),t("div",null,t(Fn,null,"Open Source Contributions"),t(mo,null,r.map(c=>t(to,{project:c}))))))};export{vt as BlogArt,Qi as BlogArtDefs,Ta as BlogListing,bn as BlogMetadataType,fn as BlogPost,Mt as CustomArt,dn as Head,gn as Main,De as PageMetadataType,ml as Projects,Fe as StylesProvider,N as Topic,cn as TopicTag,lt as __SNOWPACK_ENV__,yn as getBlogPostStaticProps,nn as getPageMetadata,ll as index,St as mdx,Mo as projects,Ar as resetAbbrContext,l as styled};
