import"fela-tools";import{h as t,toChildArray as ze,Fragment as D}from"https://cdn.skypack.dev/preact@10.27.1";import"sharp";import{visit as Ge}from"unist-util-visit";import{isobject as _o,identifier as Fo,embedded as Uo,multipleSelectors as Yo,__pika_web_default_export_for_treeshaking__ as zo,createComponent as Go,RendererProvider as Wo,Readonly as Xo,Object$1 as Vo,Optional as g,Unknown as Ko,Literal as qo,String as d,Partial as te,Union as We,Boolean as Rt,Array$1 as M,Integer as Jo,Number$1 as Qo,__pika_web_default_export_for_treeshaking__$1 as Zo,B as Xe}from"./_vendor/index.js";import{Head as xt,seo as Pe}from"microsite/head";import*as At from"@mdx-js/mdx";import en from"@richardtowers/remark-abbr";import tn from"dedent";import{rehypeAccessibleEmojis as on}from"rehype-accessible-emojis";import nn from"rehype-parse";import rn from"rehype-raw";import sn from"rehype-remark";import an from"rehype-slug";import{remark as ln}from"remark";import cn from"remark-mdx";import dn from"remark-mdx-to-plain-text";import mn from"remark-smartypants";import pn from"remark-stringify";import Oe,{resolve as Pt,extname as un}from"node:path";import Ot,{cwd as gn}from"node:process";import{loadTheme as Mt,getHighlighter as It}from"shiki";import{BUNDLED_LANGUAGES as hn}from"shiki-languages";import{renderers as fn}from"shiki-twoslash";import{hasher as yn}from"node-object-hash";import Ve from"node:fs";import bn from"node:child_process";import Sn from"node:crypto";import{createRenderer as vn}from"fela";import{cssifyDeclaration as En,cssifyObject as kn}from"css-in-js-utils";import{processStyleWithPlugins as wn,KEYFRAME_TYPE as Lt,isNestedSelector as Cn,normalizeNestedProperty as Tn,isMediaQuery as Rn,generateCombinedMediaQuery as jt,isSupport as xn,generateDeclarationReference as An,isUndefinedValue as Pn,generateCSSSelector as On,RULE_TYPE as Mn}from"fela-utils";import Bt from"md5";const In=e=>e.type==="abbr",Ln=e=>e.type==="text";let Ke=new Set;const jn=()=>{Ke=new Set},Bn=()=>e=>{Ge(e,In,o=>{const{identifier:n}=o;if(Ke.has(n)){for(const r in o)delete o[r];Object.assign(o,{type:"text",value:n})}Ke.add(n)}),Ge(e,Ln,o=>{o.value.includes("\u200B")&&Object.assign(o,{value:o.value.replace(/\u200b/gu,"")})})},$t="production",$n="production",Dn=!0;var Dt=Object.freeze({__proto__:null,MODE:$t,NODE_ENV:$n,SSR:Dn});const Me=e=>e,Nn=e=>typeof e=="object"&&e!=null;function ke(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function Hn(e,o,n,r,i,a){const c=[];return i&&c.push(ke(i).slice(0,16)),r&&c.push(ke(r).slice(0,16)),n&&c.push(ke(n).slice(0,16)),c.push(ke(e).slice(0,16)),c.push(ke(o).slice(0,16)),c.push(a.slice(0,8)),c.join("_")}function _n(e,o,n=[""]){let r="";for(const a in e){const c=e[a];r=`${r}${a}{${kn(c)}}`}let i="";for(let a=0;a<n.length;a++){const c=n[a];i=`${i}@${c}keyframes ${o}{${r}}`}return i}function Fn(){return e=>(e.renderKeyframe=(o,n)=>{const r=o(n,e),i=wn(e,r,Lt,n),a=JSON.stringify(i);if(!e.cache.hasOwnProperty(a)){const c=Bt(a),m=(e.selectorPrefix||"_")+c.slice(0,8),p=_n(i,m,e.keyframePrefixes),u={type:Lt,keyframe:p,name:m};e.cache[a]=u,e._emitChange(u)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...n},r="",i="",a="")=>{let c=o?` ${o}`:"";for(const m in n){const p=n[m];if(_o(p))if(Cn(m))c+=e._renderStyleToClassNames(p,r+Tn(m),i,a);else if(Rn(m)){const u=jt(i,m.slice(6).trim());c+=e._renderStyleToClassNames(p,r,u,a)}else if(xn(m)){const u=jt(a,m.slice(9).trim());c+=e._renderStyleToClassNames(p,r,i,u)}else console.warn(`The object key "${m}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const u=An(m,p,r,i,a);if(!e.cache.hasOwnProperty(u)){if(Pn(p)){e.cache[u]={className:""};continue}const f=En(m,p),k=Bt(u),S=e.devMode?Hn(m,p,r,i,a,k):(e.selectorPrefix||"_")+k.slice(0,8),h=On(S,r),x={type:Mn,className:S,selector:h,declaration:f,pseudo:r,media:i,support:a};e.cache[u]=x,e._emitChange(x)}const y=e.cache[u].className;y&&(c+=` ${y}`)}}return c},e)}import.meta.env=Dt;const Un=$t==="development",Yn=()=>{const e=Fo(),o=vn({devMode:Un,enhancers:[Fn(),e],plugins:[Uo(),Yo(),zo()]});return{identifier:e,renderer:o}},{identifier:qe,renderer:oe}=Yn(),zn=e=>({children:o})=>t(Wo,{renderer:e},...ze(o)),le=zn(oe),Gn=e=>oe.renderRule(Me,e),Ie=Object.assign(Gn,{global:oe.renderStatic.bind(oe)}),l=(e,o)=>{const n=typeof o=="function"?o:()=>o;return Go(n,e,Object.keys)},Wn=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),w=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((n,[r,i])=>typeof i=="object"&&(r==="nested"||r.includes("&"))?n:`${n}${Wn(r)}:${String(i)};`,""),"}",Object.entries(o).map(([n,r])=>{if(Nn(r)){if(n==="nested")return Object.entries(r).map(([i,a])=>{const c=e.map(m=>i.replace(/&/g,m));return w(c,a)}).join("");if(n.includes("&")){const i=e.map(a=>n.replace(/&/g,a));return w(i,r)}}return""},[]).join("")].join(""),ne=(...e)=>`clamp(${e.join(",")})`,ue=e=>e.replace(/\s+/g," ").trim(),L=(e,o)=>Xo(Vo(e,o)),z=()=>g(Ko()),Nt="FRESH@0.1.0",Xn=L({format:qo(Nt,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:g(d({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),Vn=te(L({label:d({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:d({description:"Profession type or 'character class'."}),image:d({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:d({description:"A short description or summary of yourself as a candidate."}),quote:d({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),Kn=te(L({willing:We([Rt(),d()],{description:"Willingness to relocate."}),destinations:M(d({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),qn=te(L({travel:Jo({description:"Percentage of time willing to travel (0 to 100)."}),authorization:d({description:"Work authorization: citizen, work visa, etc."}),commitment:M(d({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:Rt({description:"Open to remote employment opportunities."}),relocation:Kn},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),Jn=M(te(L({label:d({description:"A label for this contact information."}),category:d({description:"Type of contact information: email, phone, url, postal, or IM."}),value:d({description:"Phone number, email address, website, etc."})}))),Qn=te(L({email:d({description:"Primary contact email.",format:"email"}),phone:d({description:"Primary phone number."}),website:d({description:"Website, blog, or home page.",format:"uri"}),other:Jn},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),Zn=te(L({address:d({description:"Your full postal address."}),code:d({description:"Postal or other official routing code."}),city:d({description:"Your home city."}),country:d({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:d({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),er=M(L({employer:d({description:"Employer name."}),position:g(d({description:"Your position or formal job title."})),url:g(d({description:"Employer website.",format:"uri"})),start:g(d({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:g(d({description:"A summary of your achievements and responsibilities under this employer."})),marginalia:g(d()),highlights:g(M(We([d(),M(d())]))),location:g(d({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(M(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),tr=te(L({summary:d({description:"Summary of overall employment."}),history:er},{description:"The 'employment' section describes the candidate's formal employment history."})),or=M(L({category:d({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:g(d({type:"string",description:"Friendly media name."})),url:g(d({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),nr=M(L({title:d({description:"Project name or code-name."}),category:g(d({description:"Project type: open-source, private, side project, etc."})),description:g(d({description:"Project description or summary."})),summary:g(d({description:"A summary of your achievements and responsibilities on the project."})),role:g(d({description:"Your role on the project: Contributor, Creator, etc."})),url:g(d({description:"Project URL.",format:"uri"})),media:g(or),repo:g(d({description:"Repo URL.",format:"uri"})),start:g(d({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:g(M(d({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:g(d({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(M(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),rr=te(L({sets:M(L({name:d({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:g(d({description:"Level of mastery of the skill."})),skills:M(d({description:"Title or ID of a skill from the skills list."}))})),list:M(L({name:d({description:"The name or title of the skill."}),level:g(d({description:"A freeform description of your level of mastery with the skill."})),summary:g(d({description:"A short summary of your experience with this skill."})),years:g(We([d(),Qo()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),ir=M(L({title:g(d({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:d({description:"College or school name."}),area:g(d({description:"e.g. Arts"})),studyType:g(d({description:"e.g. Bachelor"})),start:g(d({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:g(d({description:"Grade or GPA."})),curriculum:g(M(d({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:g(d({description:"Website or URL of the institution or school.",format:"uri"})),summary:g(d({description:"A short summary of this education experience."})),keywords:g(M(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:g(M(d({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(d({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),sr=L({summary:g(d({description:"Summary of overall education."})),level:d({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:g(d({description:"Your degree, if any (BSCS, BA, etc.)."})),history:g(ir)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),ar=M(L({network:d({description:"The name of the social network, such as Facebook or GitHub."}),user:d({description:"Your username or handle on the social network."}),url:d({description:"URL of your profile page on this network.",format:"uri"}),label:g(d({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."});L({name:d({description:"The candidate's name as it should appear on the resume."}),meta:Xn,info:g(Vn),disposition:g(qn),contact:g(Qn),location:g(Zn),employment:g(tr),projects:g(nr),skills:g(rr),education:g(sr),social:g(ar),services:z(),recognition:z(),writing:z(),reading:z(),speaking:z(),governance:z(),languages:z(),samples:z(),references:z(),testimonials:z(),interests:z(),extracurricular:z(),affiliation:z()},{title:"FRESH Resume Schema"});const R={OPEN_SOURCE:"Open source",PUBLIC_ACCESS:"Public access"},v={CONTRIBUTOR:"Contributor",CREATOR:"Creator",DEVELOPER:"Developer"},lr=Date.now(),Le=e=>e==null?lr:new Date(e).getTime(),cr=e=>e.slice().sort((o,n)=>{const r=Le(o.end),i=Le(n.end);if(r>i)return-1;if(i>r)return 1;const a=Le(o.start),c=Le(n.start);return a>c?-1:c>a?1:0}),dr=e=>cr(e),mr=dr([{title:"@getodk/xforms-engine",category:R.OPEN_SOURCE,description:`
      Client-agnostic, reactive runtime for
      [ODK XForms](https://getodk.github.io/xforms-spec/)
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xforms-engine",role:v.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/xpath",category:R.OPEN_SOURCE,description:`
      Extensible XPath 1.0 interpreter, supporting
      [ODK XForms](https://getodk.github.io/xforms-spec/#xpath-functions)
      extensions, arbitrary DOM implementations
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xpath",role:v.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/tree-sitter-xpath",category:R.OPEN_SOURCE,description:`
      [tree-sitter](https://tree-sitter.github.io/tree-sitter/) parser for
      XPath 1.0 syntax
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/tree-sitter-xpath",role:v.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/web-forms",category:R.OPEN_SOURCE,description:`
      [ODK Web Forms](https://github.com/getodk/web-forms) UI client
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/web-forms",role:v.CONTRIBUTOR,start:"2024-03",end:"2025-04"},{title:"Astro",category:R.OPEN_SOURCE,description:`
      "Build faster websites with less client-side Javascript"
    `,summary:`
      Collaborate with core contributors to add support for rendering
      [SolidJS](https://www.solidjs.com/) components.
    `,repo:"https://github.com/snowpackjs/astro",role:v.CONTRIBUTOR,start:"2021-07",end:"2021-07"},{title:"Enketo",category:R.OPEN_SOURCE,description:`
      "Web forms evolved. Deploy and conduct surveys that work without a
      connection, on any device."
    `,summary:`
      Long-term maintenance.
    `,repo:"https://github.com/enketo",role:v.DEVELOPER,start:"2021-04",end:"2023-10"},{title:"Microsite",category:R.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:v.CONTRIBUTOR,start:"2021-01",end:"2021-05"},{title:"HNDarkMode",category:R.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:v.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:R.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:v.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:R.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:v.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:R.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:v.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:R.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:v.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:R.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:v.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:R.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:v.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:R.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:v.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:R.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:v.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:R.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:v.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:R.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:v.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:R.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:v.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:R.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:v.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:R.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:v.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:R.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:v.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:R.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:v.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:R.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:v.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),pr=e=>e,ur=e=>typeof e[0]=="string",gr=e=>e,hr=gr([{employer:"ODK",position:"Senior Software Engineer",start:"2021-03",end:"2025-04",summary:`
      Created & led development of ODK Web Forms, a web-based complement to their flagship Android app.
    `,marginalia:"2021-2023: Maintainer of ODK Web Forms' legacy predecessor, Enketo.",highlights:[`
        Conceived and prototyped foundations for ODK Web Forms\u2014first as a skunkworks project on personal time, ultimately forming the basis for formally evaluating the project's viability.
      `,`
        Led design & architecture to ensure core product/business goals: initial alignment with the flagship Collect app for Andriod; sustainable productivity and maintainability for user-facing functionality core to the business; anticipation of long-term unification on a single tool/platform.
      `,`
        Primary development of ODK XForms and XPath engines. Responsible for design & implementation of parsing, data model, runtime computational architecture, and client-agnostic rendering APIs.
      `,`
        Prototyped initial UI/UX; collaborated with dedicated UI developers as team grew; coordinated downstream integration with team developing ODK Central software for form and submission management.
      `]},{employer:"Reup \u2192 Mister Kraken \u2192 Treez",position:"Senior Software Engineer",start:"2015-11",end:"2020-09",summary:`
      Full-stack web service & application development serving a diverse range of
      responsibilities related to the legal cannabis industry.
    `,marginalia:"Reup partnered with Mister Kraken in 2017; both companies were acquired by Treez in 2018.",highlights:[["Treez","2018-2020","Led integration between Treez B2B inventory management services, and Mister Kraken's extant integrations with state-mandated traceability services; expanded on prior success maturing said integration to all major regulatory & vendor environments.","Built robust & general web service tooling as basis for Treez/Mister Kraken integration. By time of my departure, this tooling had become a foundation for all new and anticipated service development.","Intervened on personal initiative in the wake of widespread vendor outages and data corruption, instituting reliable, auditable, and reproducible processes to recover/reconcile customer regulatory reporting and inventory data."],["Mister Kraken","2017-2018","Led efforts to mature and adapt early-stage integrations with WA state-mandated traceability services, ensuring stable continuation of service for customers through abrupt/rapid changes to the state's regulatory environment and service vendor.","Promoted a team culture shift to embrace automation & other safeguard processes, significantly improving velocity and product quality alike.","Integrated Reup's B2B marketplace software, filling the remaining gaps in Mister Kraken's end-to-end inventory management offering."],["Reup","2015-2018","Led technical design & development of Reup's core web application, a B2B cannabis supply chain marketplace.","Shared leadership & development of associated web services.","Joined founders & design team in user research to ensure direct engineering involvement in product-market fit."]]},{employer:"ClipCard",position:"Senior Software Engineer",start:"2013-04",end:"2015-08",summary:`
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
      `]}]),fr=hr,b={BASIC:"Basic",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced",EXPERT:"Expert"},je={EXPERTISE:"Expertise",LANGUAGES_PLATFORMS:"Languages",SERVICES_DISTRIBUTED_SYSTEMS:"Services",WEB_UI_UX:"Web UI & UX",DOMAIN_SPECIFIC_LANGUAGES:"DSL\u200Bs",NICHE_ESOTERIC:"Niche/Esoteric"},Je={[je.EXPERTISE]:[{name:"Domain-driven design & architecture",level:b.EXPERT},{name:"Technical vision, direction & execution",level:b.EXPERT},{name:"Web apps & services",level:b.ADVANCED},{name:"Performance",level:b.ADVANCED}],[je.WEB_UI_UX]:[{name:"React (+ Preact & similar)",level:b.EXPERT},{name:"Reactivity (framework-agnostic)",level:b.EXPERT},{name:"\u201CVanilla\u201D JS",level:b.EXPERT},{name:"Vue",level:b.INTERMEDIATE}],[je.LANGUAGES_PLATFORMS]:[{name:"TypeScript/JavaScript",level:b.EXPERT},{name:"CSS",level:b.EXPERT},{name:"HTML",level:b.EXPERT},{name:"SQL",level:b.ADVANCED},{name:"Python",level:b.INTERMEDIATE},{name:"Swift",level:b.BASIC},{name:"Java",level:b.BASIC}],[je.NICHE_ESOTERIC]:[{name:"ODK XForms & XPath",level:b.EXPERT},{name:"Clojure",level:b.ADVANCED},{name:"SolidJS",level:b.ADVANCED},{name:"DSL\u200Bs (parsers, semantics & runtime)",level:b.ADVANCED}]},yr={list:Object.values(Je).flatMap(Me),merged:Je,sets:Object.entries(Je).map(([e,o])=>({name:e,skills:o.map(n=>n.name)}))},br=pr({name:"Trevor Schmidt",meta:{format:Nt,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:void 0},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:fr},info:{class:"Software Engineer",brief:`
Senior software engineer with a proven record of technical leadership and achievement, across a wide range of problems and disciplines:

- driving projects from conception to successful adoption and sustainable growth
- acquiring and applying deep domain/subject matter expertise
- fostering an engineering culture of velocity, quality, and continuous improvement of both
- reducing and overcoming risk, to grow and deliver on new project/business opportunities
    `.trim(),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:mr,skills:yr,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),Be=Symbol("DEFAULT_TOPIC"),I={[Be]:Be,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},Sr=e=>typeof e=="string"||typeof e=="symbol",Ht=e=>Sr(e)&&e in I,Qe=e=>Ht(e)?I[e]:e,_t=Object.entries(I).reduce((e,o)=>{const[n,r]=o;return typeof n=="string"?{...e,[r]:n}:e},{}),vr=e=>Ht(e)?e:_t[e],Er=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),kr=Object.fromEntries(Object.entries(_t).map(([e,o])=>typeof o=="string"?[e,Er(o)]:null).filter(e=>e!=null)),wr=e=>{const o=Qe(e);return typeof o=="string"?kr[o]:null},$e=2,Ze={minEm:1.0625,fluidVw:1.0625*$e,maxEm:1.25},E="@media (prefers-color-scheme: dark)",De="@media print",Cr=["h1","h2","h3","h4","h5","h6"],Tr=["dd","dl","dt","li","ol","ul"],Rr=[...Cr,...Tr,"p"],ge=Ze.minEm/Ze.maxEm,Q={h1:1.953,h2:1.563,h3:1.25},xr={h1:{minEm:Q.h1*ge,fluidVw:Q.h1*ge*$e,maxEm:Q.h1},h2:{minEm:Q.h2*ge,fluidVw:Q.h2*ge*$e,maxEm:Q.h2},h3:{minEm:Q.h3*ge,fluidVw:Q.h3*ge*$e,maxEm:Q.h3}},Ft=75,Ne=1.25,Ar=["0.7fr",`${Ne}rem`,[`${Ft}ch`,`calc(100% - ${Ne*2}rem)`],`${Ne}rem`,"1.2fr"],et=1,Pr=["0.7fr",`${et}rem`,[`${Ft*1.1875}ch`,`calc(100% - ${et*2}rem)`],`${et}rem`,"1.2fr"],Or=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],tt=Or.join(", "),Mr=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Ir=Mr.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),F={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Lr="hover-inherit-topic-color",jr={[I[Be]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.DEFAULT_TOPIC.light},[E]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.DEFAULT_TOPIC.dark}}}}},[I.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.ABLEISM}}},[I.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.ARTS_CRAFTS}}},[I.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.LEMON}}},[I.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.MENTAL_ILLNESS}}},[I.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.NEURODIVERGENCE}}},[I.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.PHILOSOPHY}}},[I.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.POLITICS}}},[I.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.RACISM}}},[I.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.SEXISM}}},[I.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.SUBSTANCE_ABUSE}}},[I.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.TECHNOLOGY}}},[I.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.TRANSPHOBIA}}}},Ut=qe().className,s={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Lr,baseFontSizeRange:Ze,darkMode:E,print:De,abbreviation:{"--abbreviation-highlight":"hsl(64deg 100% 50% / 0.25)",backgroundImage:`linear-gradient(${["to top","var(--abbreviation-highlight)","var(--abbreviation-highlight) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[E]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[E]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:Ut,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[E]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${Ut}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[E]:{color:"hsl(212deg, 10%, 90%)"}}},[E]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[E]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[E]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:tt},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:tt,nested:{[E]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em",fontWeight:300},emphasize:{color:"#000"},firstLastMarginZeroElements:Rr,gitHubLogo:{fill:"#171515",nested:{[E]:{fill:"#fff"}}},headingLineHeight:.9375,headingRanges:xr,[E]:{abbreviation:{"--abbreviation-highlight":"hsl(336deg 85% 25%)"},aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg 60% 4%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)",fontWeight:200},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{"--color-prose":"hsl(190deg 20% 97%)","--color-prose-decoration":"hsl(190deg 20% 97% / 55%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"oklch(0.71 0.16 355.75)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:Ar,mainGridSidePaddingRem:Ne,monospaceFont:tt,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[E]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{"--color-prose":"hsl(210deg 12% 5% / 95%)","--color-prose-decoration":"hsl(210deg 12% 5% / 55%)",color:"var(--color-prose)",fontFamily:`var(--prose-font-family, ${Ir})`},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[E]:{backgroundColor:"hsl(336deg, 100%, 7%)"},[De]:{backgroundColor:"transparent"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[E]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"#fffff1",nested:{[E]:{backgroundColor:"hsl(41deg, 100%, 8%)"},[De]:{backgroundColor:"transparent",padding:0}}},itemOdd:{backgroundColor:"transparent"},itemEven:{backgroundColor:"oklch(0.99 0.03 100.56)",nested:{[E]:{backgroundColor:"oklch(0.26 0.06 71.28)"},[De]:{backgroundColor:"transparent"}}}},skillLevel:{[b.BASIC]:{color:"hsl(207deg, 25%, 83%)",nested:{[E]:{color:"hsl(207deg, 15%, 43%)"}}},[b.INTERMEDIATE]:{color:"hsl(188deg, 53%, 74%)",nested:{[E]:{color:"hsl(188deg, 53%, 34%)"}}},[b.ADVANCED]:{color:"hsl(188deg, 70%, 59%)",nested:{[E]:{color:"hsl(188deg, 80%, 39%)"}}},[b.EXPERT]:{color:"hsl(152deg, 100%, 39%)",nested:{[E]:{color:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:Pr,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[E]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[E]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:jr,topicTagIdentifier:qe(),topicTagInner:{backgroundImage:ue(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[E]:{backgroundImage:ue(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:ue(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[E]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:ue(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visiblyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[E]:{color:"hsl(194deg, 8%, 50%)"}}}}}},ot=["b","em","h1","h2","h3","i","strong"],He=["h1","h2","h3","h4","h5","h6"],Br=[...He,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],$r=Array.from(new Set([...He,...Br,"div","fieldset","form","hgroup","hr","pre"])),nt="PDFPrint",Dr="/fonts/pdf-print.woff",Nr=ue(`
  @font-face {
    font-family: "${nt}";
    font-weight: 400;
    src: url("${Dr}");
  }

  ${s.print} {
    :root {
      --prose-font-family: "${nt}";
      font-family: "${nt}";
    }
  }

  @font-face {
    font-display: fallback;
    font-family:  Minipax;
    font-style:   normal;
    font-weight:  normal;

    src:
      local('__Minipax'),
      url('/fonts/Minipax/regular.woff2') format('woff2');
  }

  :root {
    color-scheme: light dark;
  }

  html, body {
    margin:     0;
    max-width:  100%;
    overflow-x: hidden;
    padding:    0;
  }

  html {
    box-sizing:       border-box;
    font-size:        ${ne(`${s.baseFontSizeRange.minEm}em`,`${s.baseFontSizeRange.fluidVw}vw`,`${s.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${w(["html","body"],{...s.document})}

  ${w(["body"],{...s.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${He.join(",")} {
    font-family:             Minipax, Georgia, serif;
    font-smooth:             always;
    font-weight:             normal;
    line-height:             ${s.headingLineHeight};
    margin-bottom:           1rem;
    margin-top:              1rem;
    padding-left:            1rem;
    text-indent:             -1rem;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`),Hr=()=>{Ie.global(ue(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${$r.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${He.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${w(ot,s.emphasize)}

      h1 {
        font-size: ${ne(`${s.headingRanges.h1.minEm}em`,`${s.headingRanges.h1.fluidVw}vw`,`${s.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${ne(`${s.headingRanges.h2.minEm}em`,`${s.headingRanges.h2.fluidVw}vw`,`${s.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${ne(`${s.headingRanges.h3.minEm}em`,`${s.headingRanges.h3.fluidVw}vw`,`${s.headingRanges.h3.maxEm}em`)};
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

      ${w(["hr:after"],{...s.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${w(["pre"],s.pre)}

      ${w(["code"],{...s.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

      pre code {
        background-color: transparent;
        display:          block;
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

      ${w(["a"],{...s.links,fontWeight:"bolder"})}

      ${w(["abbr"],{...s.abbreviation,textDecoration:"none"})}

      ${w(["aside","small"],s.deemphasize)}

      ${w(["aside"],{...s.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem",nested:{"& a":{fontWeight:600}}})}

      ${ot.map(e=>`aside ${e}`).join(", ")} {
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

      ${s.darkMode} {
        :root {
          color-scheme: dark light;
        }

        ${w(["html","body"],{...s[s.darkMode].document})}

        ${w(["body"],{...s[s.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${w(ot,s[s.darkMode].emphasize)}
        ${w(["abbr"],s[s.darkMode].abbreviation)}
        ${w(["pre"],s[s.darkMode].pre)}
        ${w(["code"],s[s.darkMode].code)}
        ${w(["a"],s[s.darkMode].links)}
        ${w(["aside","small"],s[s.darkMode].deemphasize)}
        ${w(["aside"],s[s.darkMode].aside)}
        ${w(["hr:after"],s[s.darkMode].separator)}
      }

      ${s.print} {
        @page {
          margin: 0.325in;
        }

        ${w(["a","a:hover","code"],{color:"inherit",fontWeight:"inherit",textDecorationColor:"currentcolor"})}

        ${w(["abbr"],{backgroundImage:"none"})}

        ${w(["code"],{backgroundColor:"transparent",borderRadius:0,display:"inline-flex",lineHeight:"inherit",padding:0})}
      }
    `))},_r=()=>t(D,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));Hr();const Yt=({children:e,meta:{description:o,host:n,redirect:r,social:{image:i},title:a},...c})=>r?t(xt,{...c},t(Pe.title,null,"Redirecting to ",r),t("meta",{"http-equiv":"refresh",content:`0; URL=${r}`}),t("link",{rel:"canonical",href:r})):t(xt,{...c},t(Pe.title,null,a," | Eyelidlessness"),o!=null?t(Pe.description,null,o):t(D,null),t("meta",{name:"theme-color",content:s.siteLogo.color}),t("style",{dangerouslySetInnerHTML:{__html:Nr}}),t("meta",{name:"twitter:card",content:"summary_large_image"}),t("meta",{name:"twitter:site",content:"@eyelidlessenss"}),t(Pe.image,{alt:a,height:i.height,src:`${n}${i.publicPath}`,width:i.width}),t(D,null,e),t(_r,null)),Fr={PNG:"png"},rt=Ot.cwd(),we=e=>e.startsWith("/")?Pt(rt,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):un(e)==""?Pt(rt,"./src/pages/",`${e}.tsx`):e,_e={ALL:"",CURRENT:"--diff-filter=M",FIRST:"--diff-filter=A",FIRST_MERGE:"--full-history --reverse --merges"},Ce={HASH:"%H",ISO_DATE:"%aI"},Ur="origin",Yr="main",Te=e=>{const{branch:o=Yr,decode:n,filter:r=_e.FIRST,format:i,path:a=rt,remote:c=Ur}=e,{error:m,stdout:p}=bn.spawnSync("git",["log",...r.split(" "),`--branches=${o}`,`--format=${i}`,`--remotes=${c}`,"--",a]);if(m)throw m;const u=p.toString().trim();return(u===""?[]:u.split(`
`)).map(n)},it=e=>{const o=new Date(e);return isNaN(o.getTime())?null:o},zr=e=>{const o=we(e),[n=null]=Te({decode:it,filter:_e.CURRENT,format:Ce.ISO_DATE,path:o});return n},Gr=e=>{const o=we(e),[n=null]=Te({decode:it,format:Ce.ISO_DATE,path:o});return n},Wr=e=>{const o=we(e),[n=null]=Te({decode:it,filter:_e.FIRST_MERGE,format:Ce.ISO_DATE,path:o});return n},st=e=>{const o=Ve.readFileSync(e).toString(),n=Sn.createHash("sha1");return n.update(o),n.digest("hex")},Xr=e=>{const o=we(e),[n]=Te({decode:Me,format:Ce.HASH,path:o});return n??st(o)},Vr=e=>{const o=we(e),[n]=Te({decode:Me,filter:_e.FIRST_MERGE,format:Ce.HASH,path:o});return n??st(o)},Kr={height:630,width:1200},qr=Ot.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",Jr=yn({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Qr=(e,o,n=Fr.PNG,r=Kr)=>{const i=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=Jr.hash(o),c=Oe.resolve(i,`${a}.${n}`),m=c.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:c,imageType:n,publicPath:m,...r}}},Re={IMMUTABLE:"immutable",IMMUTABLE_MERGE:"immutable-merge",MUTABLE:"mutable"},zt=(e,o,n,r,i=[I.TECHNOLOGY])=>{const a=r===Re.MUTABLE,c=r===Re.IMMUTABLE_MERGE,m=o.replace(/^file:(\/\/)?/,""),p=a?st(m):c?Vr(e):Xr(e),u={created:(c?Wr(e):Gr(e))??Ve.statSync(m).ctime,updated:zr(e)??Ve.statSync(m).mtime},f=Qr(o,a?{importURL:o,stat:u,topics:i}:{hash:p,importURL:o});return{hash:p,host:qr,path:e,social:f,stat:u,title:n,topics:i}},Zr=(e,o="Assertion failed: expected non-nullish value")=>{if(e==null)throw new Error(o)},re=(e,o)=>(Zr(e,o),e),ei=e=>e.map((o,n)=>n),at=(e,o)=>ei(e).toSorted((n,r)=>{const i=o(e[n],e[r]);return i===0?n===r?0:n>r?1:-1:i}).map(n=>re(e[n])),xe=(e,o)=>Number(e.toFixed(o)),ce=parseInt("ff",16),Gt=parseInt("00",16),Wt=.05,lt=.15,ct=.05;class Ae extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const ti=/^[0-9a-f]{40}$/i,oi=e=>ti.test(e),ni=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),ri=e=>e.length===10,ii=/([0-9a-f]{2})([0-9a-f]{2})/gi,dt=e=>{if(!oi(e))throw new Ae(e);const n=Array.from(e.matchAll(ii)).map(([r,i,a])=>({x:i,y:a}));if(!ri(n))throw new Ae(e);return n},si=Symbol("IS_POINT"),ai=e=>Object.assign(e,{[si]:!0}),Xt=e=>{const o=parseInt(e,16);if(o>ce||o<Gt)throw new Error(`Not a valid coordinate: ${e}`);return ai(o)},li=({x:e,y:o})=>({x:Xt(e),y:Xt(o)}),ci=e=>e.length===10,mt=(e,o)=>{try{const n=o.map(li);if(!ci(n))throw new Ae(e);return n}catch{throw new Ae(e)}},di=Symbol("SCALED_COORDINATE"),mi=e=>e.reduce(({max:o,min:n},{y:r})=>({max:Math.max(o,Number(r)),min:Math.min(n,Number(r))}),{max:-Infinity,min:Infinity}),W=(e,o)=>Object.assign(xe(e,2),{[di]:o}),he=({x:e,xScale:o,y:n,yScale:r})=>({x:W(e,o),y:W(n,r)}),pt=({x:e,y:o},{xScale:n,xShift:r,yScale:i,yShift:a})=>he({x:(e+r)*n,xScale:n,y:(o+a)*i,yScale:i}),ut=e=>{const{xScale:o,yScale:n,xMax:r}=e;return[he({x:0,xScale:o,y:0,yScale:n}),...e.points,he({x:r,xScale:o,y:0,yScale:n})].reduce((i,a,c,m)=>{if(c===0||c===m.length-1)return i;const p=W(0,n),u=[{x:re(m[c-1]).x,y:p},a,{x:re(m[c+1]).x,y:p}];return[...i,u]},[])},gt=({segments:e,xMax:o,xScale:n,yScale:r})=>e.map(i=>{const[{x:a,y:c},{x:m,y:p},{x:u,y}]=i,f=u-a,k=p/f,h=6/k;if(h<1){const A=h*.2*a,C=a-A,_=u+A,B=C<0?Math.abs(C):_>o?o-_:0,T=C+B,P=_+B,$=h*.3,H=m+B,U=$*p,V=p-U;return[he({x:T,xScale:n,y:c,yScale:r}),he({x:H,xScale:n,y:V,yScale:r}),he({x:P,xScale:n,y,yScale:r})]}return i}),pi=({x:e,y:o},{x:n,y:r})=>{const i=n-e,a=r-o;return{angle:Math.atan2(a,i),length:Math.sqrt(i**2+a**2)}},Vt=({current:e,previous:o,next:n,reverse:r,smoothing:i,xScale:a,yScale:c})=>{const m=r?Math.PI:0,p=pi(o,n),u=p.angle+m,y=p.length*i,{x:f,y:k}=e,S=f+Math.cos(u)*y,h=k+Math.sin(u)*y;return{x:W(S,a),y:W(h,c)}},ht=({index:e,point:o,points:n,smoothing:r,xScale:i,yScale:a})=>{const c=n[e-1];if(c==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const m=n[e-2]??c,p=Vt({current:c,previous:m,next:o,reverse:!1,smoothing:r,xScale:i,yScale:a}),u=c,y=n[e+1]??o,f=Vt({current:o,previous:u,next:y,reverse:!0,smoothing:r,xScale:i,yScale:a});return[p,f,o]},Kt=({segment:e,smoothing:o,xScale:n,yScale:r})=>e.reduce((i,a,c)=>{if(c===0)return i;const p=ht({index:c,point:a,points:e,smoothing:o,xScale:n,yScale:r}).map(({x:u,y})=>`${u},${y}`).join(" ");return[...i,`C ${p}`]},[]),ui=e=>{const{baseYCoordinate:o,isBaselineBelowMidpoint:n,xScale:r,yMax:i,yScale:a,yTilt:c=!1}=e;return e.segments.reduce((m,p,u,y)=>{const{length:f}=y,[k,S,h]=p,{x,y:A}=k,{x:C,y:_}=S,{x:B,y:T}=h,P=B-x,$=P===0?0:Math.max(_/P*ct,lt),H=c?.1:0,U=1-H,V=1+H,Z=u%2==0?U:V,ie=n?A+o:i-A+o,J={x,y:W(ie*Z,a)},K=u%2==0?U:V,Y=n?T+o:i-T+o,N={x:W(B,r),y:W(Y*K,a)},G=C-x,X=B-C,se=X>G?0:0-(C-x)*Wt,q=(f-u)*(a/100*i),ae={x:W(C+se,r),y:W(_-q,a)},O=Kt({segment:[J,ae,N],smoothing:$,xScale:r,yScale:a}),ee=X>G?(B-C)*Wt:0,Tt={x:W(C+ee,r),y:W(i-q,a)},Ho=Kt({segment:[N,Tt,J],smoothing:$,xScale:r,yScale:a});return[...m,[`M ${J.x},${J.y}`,...O,...Ho,"Z"].join(" ")]},[])},gi=({hash:e,xPadding:o=0,xScale:n=1,yOffset:r=.5,yPadding:i=0,yScale:a=1})=>{const c=dt(e),m=mt(e,c),p=at(m,({x:T},{x:P})=>Number(T)===Number(P)?0:Number(T)>Number(P)?1:-1),u=o/2,y=i/2,f=p.map(T=>pt(T,{xScale:n,xShift:u,yScale:a,yShift:y})),k=(ce+o)*n,{max:S}=mi(f),h=(S+i)*a,x=ut({points:f,xMax:k,xScale:n,yScale:a}),A=gt({segments:x,xMax:k,xScale:n,yScale:a}),C=r>.5,_=C?h*r:-1*h*r;return{segmentPaths:ui({baseYCoordinate:_,segments:A,xScale:n,yMax:h,isBaselineBelowMidpoint:C,yScale:a}),xMax:k,yMax:h}},hi=`
  ${s.mainGridColumns[0]}
  ${s.mainGridColumns[1]}
  min(
    ${s.mainGridColumns[2][0]},
    ${s.mainGridColumns[2][1]}
  )
  ${s.mainGridColumns[3]}
  ${s.mainGridColumns[4]}
`.replace(/\s+/g," "),qt={gridColumn:"1 / -1"},Jt=Ie(qt),j=l("div",{nested:{[`& > .${Jt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0},[s.print]:{gridTemplateColumns:"0 0 auto 0 0"}},display:"grid",gridTemplateColumns:hi,...qt}),fi=({children:e,shadow:o,...n})=>t(j,{...n},e),Qt=([e,o,n])=>`rgba(${[e,o,n,0].join(",")})`,Zt=["12rem 100%","auto"],eo=Zt.join(", "),yi=Zt.map(e=>e.replace("100%","100.1%")).join(", "),bi=oe.renderKeyframe(()=>({"0%":{backgroundSize:eo},"100%":{backgroundSize:yi}}),{}),to="5px",oo=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`rgba(${o.join(",")}) calc(11rem + ${to})`,`${Qt(o)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${Qt(e)} ${to}`].join(", ")})`].join(", ")}:null,Si=e=>{if(e!=null){const{darkMask:o,darkScroll:n,lightMask:r,lightScroll:i}=e;return{dark:oo(n,o),light:oo(i,r)}}return{dark:null,light:null}},no=l(fi,({shadow:e})=>{const{dark:o,light:n}=Si(e),r=o==null?null:{[s.darkMode]:o};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:eo,paddingRight:s.mainGridSidePaddingRem,overflowX:"auto",nested:{...r,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:bi,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),vi=l(j,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),ro=l("div",{paddingLeft:"1rem"}),Ei=l("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),ki=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),ft="div",wi={ContentContainer:ft,InnerContainer:ro,OuterContainer:ft,SymbolContainer:ft},io=e=>{const{children:o,ContentContainer:n,InnerContainer:r,OuterContainer:i,outerContainerProps:a,symbol:c,SymbolContainer:m}={...wi,...e};return t(vi,{as:i,...a},t(Ei,{as:m,role:"presentation"},c),t(ro,{as:r},t(ki,{as:n},o)))},Ci=l("pre",{fontSize:"1rem",tabSize:2}),Ti=l(no,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)"}),Ri=e=>t(Ti,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),xi=l(j,{...s.pre,nested:{[s.darkMode]:{...s[s.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),Ai=l("div",{...s.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Pi=({children:e})=>t(io,{ContentContainer:Ci,InnerContainer:Ri,OuterContainer:xi,symbol:"{",SymbolContainer:Ai},e),Oi=e=>typeof e=="object"&&e!=null,Mi=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),Ii=(e,o)=>Oi(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&Zo().test(o),Li=({["aria-label"]:e,children:o,role:n})=>t(Mi,{"aria-label":e,role:n},o),ji={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},Bi={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",ODK:"Open Data Kit (https://getodk.org/)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},$i={...ji,...Bi},so=Oe.resolve(gn(),"./syntax-themes"),[Di,Ni]=await Promise.all([Mt(Oe.resolve(so,"./yi-dark.json")),Mt(Oe.resolve(so,"./yi-light.json"))]),Hi={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},_i={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},Fi=e=>e.trim().split(/\b\W*\b/).reduce((o,n)=>({...o,..._i[n]}),{}),Ui=e=>Object.entries(e).reduce((o,[n,r])=>{const i=Hi[n];if(r==null||typeof i!="string")return o;const a=i==="fontStyle"?Fi(r):{[i]:r};return{...o,...a}},{}),[Yi,zi]=await Promise.all([It({theme:Di}),It({theme:Ni})]),Gi=new Set(hn.map(e=>e.id)),Wi=new Set(["ts","tsx","typescript"]),ao=e=>e.explanation==null?null:e.explanation.reduce((o,n)=>({...o,...n.scopes.reduce((r,{themeMatches:i})=>({...r,...i.reduce((a,{settings:c})=>({...a,...Ui(c)}),r)}),o)}),{color:e.color}),Xi=(e,o,n={})=>{const r=ao(e),i=ao(o),a=i==null?null:{nested:{[s.darkMode]:i}},{content:c}=e;if(r==null&&a==null)return t("span",n,c);const m={...r,...a},p=l("span",m);return t(p,n,c)},Vi=Ie({paddingRight:"1rem"}),Ki={className:Vi},qi=(e,o)=>Xe(t(le,{},t("pre",{},t("code",{},...e.reduce((n,r,i)=>{const a=r.map((m,p)=>{const u=re(o[i]?.[p]),y=p===r.length-1?Ki:{};return Xi(m,u,y)}),c=i===0?"":`
`;return[...n,c,...a]},[]))))),Ji=e=>{const{lang:o,value:n,meta:r}=e,i=o==="json5"?"json":o;let a;const c=n.replace(/^\n+|\n+$/g,"");if(!Gi.has(i))a=fn.plainTextRenderer(c,{},{});else{const m=zi.codeToThemedTokens(c,i),p=Yi.codeToThemedTokens(c,i);a=qi(m,p)}Wi.has(i)&&!r?.includes("ignore"),e.children=[],e.type="html",e.value=a},Qi=()=>o=>{Ge(o,"code",Ji)},Zi=({className:e,children:o,...n})=>e==="language-id"?null:e==="code-container"?t(D,n,...ze(o)):t("div",{className:e,...n},...ze(o)),es=({children:e,...o})=>Ii(o,e)?t(Li,o,e):t("span",o,e),yt={components:{div:Zi,pre:Pi,span:es},rehypePlugins:[on,[rn,{passThrough:At.nodeTypes}]],remarkPlugins:[Qi,en,Bn,an,mn]},lo=e=>{const{children:o=t(()=>null,{}),components:n={},rehypePlugins:r=[],remarkPlugins:i=[]}=e,a={...yt.components,...n},c=[...yt.rehypePlugins,...r],m=[...yt.remarkPlugins,...i],p=typeof o=="string"?tn(o).trim():Xe(o),u=At.compileSync(p,{rehypePlugins:c,remarkPlugins:m,outputFormat:"function-body",remarkRehypeOptions:{handlers:{abbrDefinition:()=>{}}}});return new Function("options",u.value.toString())({Fragment:D,jsx:t,jsxs:t}).default({components:a})},ts=Object.entries($i).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),os=e=>[e,ts].join(`

`),bt=([e,...o],{includeAbbreviations:n})=>{const r=typeof e=="string"?[e,...o].join(""):String.raw({raw:e},...o);return n?os(r):r},fe=(...e)=>{const o=bt(e,{includeAbbreviations:!0});return t(le,{},t(lo,{},o))},co=(...e)=>{const o=bt(e,{includeAbbreviations:!0});return t(le,{},t(lo,{components:{p:D}},o))},ns=(...e)=>{const o=bt(e,{includeAbbreviations:!1});return ln().use(nn).use(sn).use(pn).use(cn).use(dn).processSync(o).value.toString().trim()},mo=()=>t(D,null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),rs=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t(mo,null))),is=1.6180334,ss=4,po=xe(is*5,6),uo=.75,ye=.15,as=1.5,be=ne("6rem",`${100/po}vw`,"10rem"),ls=l(j,{height:be,position:"relative",width:"100%"}),cs=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),ds=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85}),St={INLINE:"inline",NONE:"none"},vt={xPadding:ss,xScale:po,yOffset:uo,yPadding:ye,yScale:as},Et=e=>{const{className:o,defsUsage:n=St.INLINE,hash:r,height:i,rawSVG:a=!1,styleRenderer:c=oe,title:m,topics:p=[],width:u}=e,y=p.length<2?[...p,I[Be]]:p,f=T=>`${T}-${r}`,{segmentPaths:k,xMax:S,yMax:h}=gi({...vt,hash:r}),x=h*uo,A=h*ye/10.24,C=A*.75,B=t(cs,{className:Jt,height:i,preserveAspectRatio:"none",viewBox:[0,0,S,h].join(" "),width:u},t("title",null,"Generated art for the page or post titled ",t("i",null,m),", with the content or commit hash ",r," ",y.length>0?[", and the topics: ",y.map(String).join(", ")]:null),t("defs",null,n===St.INLINE?t(mo,null):null,t("filter",{id:f("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:C,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:A,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:f("blurOverlayClip")},t("rect",{x:"0",width:S,y:x,height:h})),t("filter",{id:f("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:C}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:A})),t("filter",{id:f("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:C}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:A}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:A})),t("g",{id:f("blobs")},k.map((T,P)=>{const $=P%y.length,H=y[$],U=c.renderRule(()=>({...s.topicColors[H]}),Object.keys);return t(ds,{key:T,className:U,d:T,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${h*ye})`,`scale(1, ${1-ye*2})`].join(" "),filter:`url(#${f("blur")})`},t("use",{href:`#${f("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${f("blurOverlayClip")})`,filter:`url(#${f("blurOverlay")})`,transform:[`translate(0, ${h*ye})`,`scale(1, ${1-ye*2})`].join(" ")},t("use",{href:`#${f("blobs")}`,mask:"url(#softVerticalFade)"})));return a?t("svg",{width:u,height:i,viewBox:`0 0 ${u} ${i}`},B):t(ls,{className:o},B)},ms=[null,"January","February","March","April","May","June","July","August","September","October","November","December"],ps=l("time",{nested:{[s.darkMode]:{...s[s.darkMode].deemphasize}},...s.deemphasize}),de={DEFAULT:"DEFAULT",META:"META",SHORT:"SHORT"},Se=({date:e,mode:o=de.DEFAULT,...n})=>{const r=e.getMonth()+1,i=e.getFullYear(),a=o===de.SHORT?`${r}/${i}`:o===de.META?"":[e.getDate(),ms[r],i].join(" ");return t(ps,{...n,datetime:e.toISOString()},a)},us=l("a",{...s.topicTagLink(s.topicTagIdentifier.className)}),gs=l("span",{...s.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),hs=({className:e,link:o=!0,topic:n})=>{const r=wr(n),i=Qe(n);if(r==null||typeof i!="string")throw new Error(`Unexpected topic: ${String(i)}`);const a=o?us:"span",c=o?{href:`/blog/topics/${r}/`}:{};return t(a,{className:[e,s.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...c},t(gs,{className:s.topicTagIdentifier.className},i))},go=l(hs,e=>({...s.topicTagOuter,...s.topicColors[Qe(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),fs=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),ys=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),ho=({className:e,link:o=!0,topics:n})=>t(fs,{className:e},n.map(r=>typeof r=="string"?t(ys,{key:vr(r)},t(go,{link:o,topic:r})):null)),bs=e=>e.reduce((o,n)=>{const r=n.stat.created.getFullYear(),i=o[r]??[];return{...o,[r]:[...i,n]}},{}),Ss=l(j,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),vs=l(j,{...s.blog.listing.item,minHeight:be,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),Es=l(j,{paddingTop:`calc(${be} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),ks=l(j,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),ws=l("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),Cs=Ie({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),Ts=l("h2",{...s.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),Rs=l(Se,{padding:"0 0.5rem 0.125rem 0"}),xs=l(ho,{gridColumn:"3 / 3"}),As=l("div",{...s.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),Ps=l("a",{fontSize:"0.875em"}),fo={DATE:"date"},yo={ASC:"asc",DESC:"desc"},Os=({order:e=yo.DESC,posts:o,sort:n=fo.DATE})=>{const r=o.slice().sort((a,c)=>e===yo.DESC&&n===fo.DATE?a.stat.created>c.stat.created?-1:1:0),i=bs(r);return t(D,null,Object.entries(i).map(([a,c])=>t(D,{key:a},t(Ss,null,c.map(m=>{const{CustomArt:p=Et,description:u,hash:y,path:f,stat:{created:k},title:S,topics:h}=m;return t(vs,{key:f},t(Es,{as:"a",href:f},t(ws,null,t(p,{defsUsage:St.NONE,hash:y,padded:!0,renderType:"listing",title:S,topics:h})),t(ks,null,t(Ts,{className:Cs},S),t(Rs,{date:k}))),t(xs,{link:!1,topics:h}),t(As,{className:s.blog.listing.descriptionIdentifier},u),t("p",null,t(Ps,{href:f},"Read more\u2026")))})))))},Ms=({as:e="div",devilsBreakpoint:o,gap:n,...r})=>{const i=l(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return t(i,{...r})},Is=l("svg",{...s.visiblyHidden,position:"absolute"}),me=512,bo=[0,0,me,me].join(" "),Ls=me/2,js="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z",Bs=()=>t(Is,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:bo,width:"0"},t("defs",null,t("mask",{id:"octocat-knockout"},t("rect",{fill:"#fff",height:me,mask:"url(#octocat)",rx:Ls,width:me}),t("path",{d:js,fill:"#000"})))),$s=l("rect",{...s.gitHubLogo}),kt=({className:e})=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:bo},t("title",null,"GitHub"),t($s,{height:me,mask:"url(#octocat-knockout)",width:me})),Fe={height:60,width:338},Ds=l("svg",{display:"inline-block",maxWidth:"100%",width:`${Fe.width}px`}),Ns=l("use",{nested:{[s.darkMode]:{...s[s.darkMode].siteLogo}},...s.siteLogo,fill:"currentcolor"}),Hs=`0 0 ${Fe.width} ${Fe.height}`,_s=()=>t(Ds,{viewBox:Hs},t(Ns,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),t("title",null,"Eyelidlessness")),{columns:ve}=s.siteHeader,Fs=`
  ${ve[0]}
  ${ve[1]}
  min(
    ${ve[2][0]},
    ${ve[2][1]}
  )
  ${ve[3]}
  ${ve[4]}
`.replace(/\s+/g," "),Us=l("header",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Fs,padding:"clamp(0.5rem, 4vmin, 2rem) 0",position:"relative",zIndex:1,nested:{[s.print]:{nested:{'&[data-page-id="resume"]':{display:"none"}}}}}),Ys=l("div",{gridColumn:3}),zs=l("div",{margin:"0 auto"}),Gs=l("a",{textDecoration:"none"}),Ws=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0,nested:{'&[data-page-id="resume"]':{display:"none"}}}),So=1,Xs=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${So/2}rem`,padding:0}),Vs=l("a",{...s.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[s.darkMode]:{...s[s.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),vo="1.5em";l(kt,{display:"block",width:`clamp(1.125em, 4vw, ${vo})`});const Eo="/blog/",ko="/resume/#resume",Ks=e=>{const o=e.meta.pageId==null?{}:{"data-page-id":e.meta.pageId},r=e.meta.pageId==="resume"?ko:Eo,i=[{label:"Blog",location:Eo},{label:"Hire me",location:ko},{label:"GitHub",location:"https://github.com/eyelidlessness"}],a=i.reduce((p,u)=>typeof u.label=="string"?p+u.label.length:p,0),c={horizontal:"2rem"},m=[`${Fe.width}px`,c.horizontal,`${a+2}ch`,vo,`${i.length*So}rem`].join(" + ");return e.meta.pageId==="resume"?t(D,null):t(Us,{...o},t(Ys,null,t(Ms,{as:"nav",devilsBreakpoint:m,gap:c},t(zs,null,t(Gs,{href:r},t(_s,null))),t(Ws,{...o},i.map(({location:p,label:u})=>t(Xs,null,t(Vs,{href:p},u)))))))},qs=l(j,{paddingTop:0,paddingBottom:"4em",nested:{[s.print]:{nested:{'&[data-page-id="resume"]':{paddingTop:0,paddingBottom:0}}}}}),Js=e=>{if(e.pageId!=null)return{"data-page-id":e.pageId}},wo=({meta:e,...o})=>e.redirect?t(D,null):t(le,null,t(Bs,null),t(Ks,{meta:e}),t(qs,{as:"main",...Js(e),...o})),Qs=l(j,{...s.description,nested:{...s.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Zs=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),ea=l("div",{fontSize:"0.889em"}),ta=({as:e="section",title:o,...n})=>t(Qs,{as:e,itemprop:"description"},o?t(Zs,null,o):null,t(ea,{...n})),oa=l(j,{paddingTop:"1rem"}),na=l("h1",{marginBottom:"0.25rem"}),ra=l(j,{paddingBlock:"1rem"}),ia=e=>{const{children:o,CustomArt:n,description:r,descriptionRaw:i,hash:a,stat:{created:c},title:m,topics:p}=e;return t(D,null,t(Yt,{meta:{...e,description:i}}),t(wo,{as:"article",meta:e},t(ra,null,n==null?t(Et,{hash:a,title:m,topics:p}):t(n,{hash:a,renderType:"post",StylesProvider:le,title:m,topics:p}),t(oa,null,t(na,null,m),t(Se,{date:c,itemprop:"datePublished"}),t(ho,{link:!1,topics:p}))),t(ta,null,r),o))},Co={IMMUTABLE:Re.IMMUTABLE,IMMUTABLE_MERGE:Re.IMMUTABLE_MERGE},sa=e=>{const{description:o,importURL:n,path:r,redirect:i,title:a,topics:c,type:m=Co.IMMUTABLE_MERGE}=e,{CustomArt:p,hash:u,host:y,social:f,stat:k}=zt(r,n,a,m,c),S=ns`${Xe(t(D,null,o))}`;return Promise.resolve({CustomArt:p,description:o,descriptionRaw:S,hash:u,host:y,path:r,redirect:i,social:f,stat:k,title:a,topics:c})},aa=({date:e,...o})=>e==null?null:t(Se,{...o,date:e}),la=l("span",{nested:{[s.darkMode]:{...s[s.darkMode].deemphasize}},...s.deemphasize}),ca=/^(\d{4})-(\d{2})$/,To=e=>{if(e==null)return null;const o=ca.exec(e);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,r]=o;return new Date(`${n}-${r}-01T00:00:00`)},Ro=l("div",{fontSize:"0.88889em",whiteSpace:"nowrap",nested:{"& time":{fontSize:"inherit"}}}),xo=({className:e="",range:[o,n]})=>{const r=To(o),i=To(n??null);return o==n?t(Ro,{className:e},t(Se,{date:r,itemprop:"endDate",mode:de.SHORT})):t(Ro,{className:e},t(Se,{date:r,itemprop:"startDate",mode:de.SHORT}),t(la,null,"-"),t(aa,{date:i,itemprop:"endDate",mode:de.SHORT}))},da="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",ma=({fill:e,topic:o})=>{const n=s.topicColors[o];return{...n,...e?{fill:"currentcolor",fillOpacity:.05,mask:"url(#curvesVerticalFade)",strokeWidth:0,nested:{...n.nested,[s.darkMode]:{fillOpacity:.15}}}:{fill:"none",strokeWidth:1,stroke:"currentcolor"},transition:da,vectorEffect:"non-scaling-stroke"}},pa=({fill:e,index:o,topic:n,...r})=>t("path",{...r}),Ao=l(pa,ma),ua=l("svg",{overflow:"visible",padding:"1rem"}),ga=20,ha={xMax:ce,xScale:1,xShift:0,yMax:ce,yScale:1,yShift:0},fa=({className:e,hexPoints:o,points:n,pointSize:r,scaleOptions:i,segments:a,topics:c,...m})=>{const{xScale:p,xShift:u,xRange:y=p*(ce+u*2),yMax:f,yShift:k,yScale:S,yRange:h=S*(f+k*2)}={...ha,...i},x=ga*2,A=m.height??h+x,C=m.width??y+x,_=({x:T,y:P})=>{const $=xe((T+u)/y*100,4),H=100-xe((P-k)/h*100,4);return{cx:$,cy:H}},B=a.map(T=>{const[P,$,H]=T,{x:U}=P,{y:V}=$,{x:Z}=H,ie=Z-U,J=ie===0?0:Math.max(V/ie*ct,lt);return{cubicPoints:T.reduce((Y,N,G)=>{if(G===0)return Y;const X=ht({index:G,point:N,points:T,smoothing:J,xScale:p,yScale:S});return[...Y,X]},[]),segment:T}});return t(ua,{className:e,height:A,width:C,preserveAspectRatio:"none",viewBox:`0 0 ${C} ${A}`},t("defs",null,t("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.15","stop-color":"white","stop-opacity":".95"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),t("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),B.map(({cubicPoints:T,segment:P},$)=>{const[H,U,V]=P,Z=T.map(([K,Y],N)=>[N===0?H:U,K,Y,N===0?U:V]);return t(D,null,t(()=>t(D,null,Z.map(K=>{const Y=K.map((G,X)=>{const{cx:se,cy:q}=_(G),ae=se/100*C,pe=q/100*A;return`${X===0?"M ":X===1?"C ":""} ${ae},${pe}`}).join(" "),N=re(c[$%c.length]);return t(Ao,{d:Y,index:$,topic:N})})),null),t(()=>{const K=Z.map((N,G)=>N.map((se,q)=>{if(G>0&&q===0)return"";const{cx:ae,cy:pe}=_(se),O=ae/100*C,ee=pe/100*A;return`${q===0?"M ":q===1?"C ":""} ${O},${ee}`}).join(" ")).join(" "),Y=re(c[$%c.length]);return t(Ao,{d:K,fill:!0,index:$,topic:Y})},null))}))},Po=({className:e="",hash:o,height:n,renderType:r,StylesProvider:i=le,styleRenderer:a=oe,topics:c=[],width:m})=>{const p=dt(o),u=mt(o,p),{xPadding:y,xScale:f,yPadding:k,yScale:S}=vt,h=r==="meta",x=h?0:y,A=h?0:k,C=x/2,_=A/2,B={xScale:f,xShift:C,yScale:S,yShift:_},P=at(u,({x:O},{x:ee})=>O===ee?0:O>ee?1:-1).map(O=>pt(O,B)),$=P.map(O=>re(p[P.indexOf(O)])),H=(ce+x)*f,U=ut({points:P,xMax:H,xScale:f,yScale:S}),V=gt({segments:U,xMax:H,xScale:f,yScale:S}),Z=h?{"& path":{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,ie=h?"0 !important":"0 0 1rem !important",J=be,K="100%",Y=O=>typeof O=="number"?`${O}px`:O,N=(O,ee)=>typeof O=="number"?O*ee:O,G=h?N(n??J,.95):be,X=h?N(m??K,.95):"100%",se=h&&n!=null?N(n,.95):n,q=h&&m!=null?N(m,.95):m,ae=a.renderRule(()=>({gridColumn:"1 / -1",height:Y(G),padding:ie,width:Y(X),nested:{...Z}}),Object.keys),pe=h?e:`${e} ${ae}`;return t(i,null,t(fa,{className:pe,height:se,hexPoints:$,points:P,scaleOptions:B,segments:V,topics:c,width:q}))},ya=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),ba=e=>{const o=Array();return e.role===v.CREATOR&&o.push(e.description),e.summary!=null&&o.push(e.summary),o.length===0&&o.push(e.description),t(ya,null,o.map(n=>fe(n)))},Oo="@media screen and (min-width: 41.666rem)",Sa=l("div",{display:"block",margin:0,padding:0,nested:{"& > *":{containerType:"inline-size",paddingTop:"1rem"},[Oo]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}},[s.print]:{display:"none"}}}),va=l("div",{display:"grid",rowGap:"0.325rem",nested:{"& > *":{margin:0}}}),wt="1.0625rem",Ea=l("h3",{fontFamily:s.prose.fontFamily,fontWeight:500,fontSize:wt,paddingLeft:0,textIndent:0,nested:{[s.print]:{fontSize:"1rem"}}}),ka=l("a",{color:"var(--color-prose)",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"},"&:hover, &:focus":{color:"var(--color-prose)",textDecoration:"underline",textDecorationColor:"var(--color-prose-decoration, currentColor)"}}}),wa=l("a",{alignSelf:"baseline",display:"block",flexShrink:0,height:`calc(${wt} * ${s.headingLineHeight})`,lineHeight:`calc(${wt} * ${s.headingLineHeight*1.5})`,padding:"0 0.5rem",zIndex:1,nested:{"& svg":{width:"1em"},[Oo]:{paddingLeft:0},[s.print]:{display:"none"}}}),Ca=l("div",{flexGrow:1,paddingTop:"0.05556rem",nested:{"& a":{fontWeight:"inherit"}}}),Ta=l("div",{alignItems:"start",display:"flex",padding:"1rem 0 0"}),Mo=({project:{description:e,end:o,repo:n,role:r,title:i,start:a,summary:c}})=>t(Ta,null,t(wa,{href:n},t(kt,null)),t(Ca,null,t(va,null,t(Ea,null,t(ka,{href:n},i)),t(xo,{range:[a,o]})),t(ba,{role:r,description:e,summary:c??null}))),Io=l("h2",{fontSize:ne(`${s.headingRanges.h3.minEm}em`,`${s.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Lo=l("div",{marginTop:"0.5rem"}),Ra=l("div",{display:"none",nested:{[s.print]:{display:"block"}}}),xa=e=>{const{creator:o,contributor:n}=e.projects.reduce((i,a)=>{const c=a.role===v.CREATOR?"creator":"contributor";return{...i,[c]:[...i[c],a]}},{creator:[],contributor:[]}),r=o.length+n.length;return t(D,null,t(Sa,null,t("div",null,t(Io,null,"Projects I Created"),t(Lo,null,o.map(i=>t(Mo,{project:i})))),t("div",null,t(Io,null,"Open Source Contributions"),t(Lo,null,n.map(i=>t(Mo,{project:i}))))),t(Ra,null,t("h2",null,"Projects"),r," projects listed at"," ",t("a",{href:"https://eyelidlessness.github.io/projects"},"eyelidlessness.github.io/projects")))},Aa=l(j,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),Ee=e=>t(Aa,{as:"section",...e}),Pa=l(j,{nested:{[s.print]:{display:"none",paddingInline:"0.125rem"}}}),jo=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),Oa=l(jo,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),Ma=l(Oa,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",paddingTop:ne("0.5rem","3vw","2rem"),nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"},[s.print]:{paddingTop:0}}}),Ia=l(Ee,{padding:0}),La=l(jo,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),ja=l("a",{...s.resume.contactList.link,display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"0.5ch",fontSize:"0.88889em",fontWeight:400,minWidth:"auto",color:"var(--color-prose)",textDecoration:"none",nested:{"&:hover, &:focus":{color:"var(--color-prose)",fontWeight:400,textDecoration:"underline",textDecorationColor:"var(--color-prose-decoration, currentColor)"}}}),Ba=l("span",{nested:{[s.print]:{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),Ct=({children:e,screenLabel:o,printLabel:n,Icon:r,...i})=>t(ja,{...i},r&&t(r,null),t(Ba,{"data-print-label":n},t("span",null,o??e))),Bo=l("svg",{width:"1rem",height:"1rem",color:"var(--color-prose)"}),$a=l("path",{color:"currentColor"}),Da=()=>t(Bo,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},t($a,{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"})),Na=()=>t(Bo,{as:kt}),Ha={GitHub:Na},$o={display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}},_a=l(j,{...s.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...s.resume.brief.nested,"& p":{margin:"0.5em 0"},"& ul, & ul li":{margin:0,padding:0},"& li":$o,"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"},[s.print]:{...s.resume.brief.nested[s.print],padding:0}}}),Ue={screen:"@media screen and (min-width: 40rem)",print:"@media print"},Fa=l("h2",{fontSize:"1em",marginBottom:0,paddingLeft:0,textIndent:0,nested:{[Ue.screen]:{justifySelf:"end"},[Ue.print]:{justifySelf:"end"}}}),Ua=l("div",{alignItems:"baseline",display:"grid",gap:"0.5rem 0",gridTemplateColumns:"auto",gridTemplateRows:"auto",fontSize:"0.88889em",nested:{[Ue.screen]:{gridTemplateColumns:"auto 1fr"},[Ue.print]:{gridTemplateColumns:"auto 1fr"}}}),Ya=l("ul",{display:"block",margin:0,padding:"0 0 0 1rem"}),za=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Ga=l("svg",{display:"inline-block",margin:"0 0.325rem 0 0",verticalAlign:"middle",nested:{[s.print]:{height:"0.325rem",width:"0.325rem"}}}),Wa=l("circle",{fill:"currentcolor"}),Ye=e=>t(Ga,{xmlns:"http://www.w3.org/2000/svg",className:e.className,width:"8",height:"8",viewBox:"0 0 8 8"},t(Wa,{cx:"4",cy:"4",r:"4"}),t("title",null,"Skill level: ",e.level)),Xa={[b.BASIC]:l(Ye,{...s.resume.skillLevel[b.BASIC]}),[b.INTERMEDIATE]:l(Ye,{...s.resume.skillLevel[b.INTERMEDIATE]}),[b.ADVANCED]:l(Ye,{...s.resume.skillLevel[b.ADVANCED]}),[b.EXPERT]:l(Ye,{...s.resume.skillLevel[b.EXPERT]})},Va=l("div",{display:"contents"}),Ka=({name:e,skills:o})=>t(Va,{itemscope:!0,itemtype:"http://schema.org/ItemList"},t(Fa,{itemprop:"name"},co(e)),t(Ya,null,o.map(({level:n,name:r})=>{const i=Xa[n];return t(za,{key:r,itemprop:"itemListElement"},t(i,{level:n}),co`${r}`)}))),qa=l(j,{padding:"1rem 0"}),Ja=l("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),Qa=l("p",{fontSize:"0.88889rem",opacity:.8}),Za=l("h2",{marginBottom:0}),el=l("ul",{fontSize:"0.88889em",paddingInlineStart:0}),tl=l("li",$o),ol=l(qa,{padding:"1.5rem 0",position:"relative",nested:{"&:last-child:after":{display:"none"},"&:nth-of-type(odd)":{...s.resume.employment.itemOdd},"&:nth-of-type(even)":{...s.resume.employment.itemEven},"& strong":{fontWeight:500,nested:{[s.darkMode]:{fontWeight:400}}},[s.print]:{paddingBottom:0}}}),nl=l("div",{alignItems:"baseline",display:"grid",columnGap:"0.5rem",gridTemplate:`
    "employer time-range"
    "position position"
  `,justifyContent:"space-between",nested:{[s.print]:{gridTemplate:`
        "employer position time-range"
      `,gridAutoColumns:"1fr auto auto"}}}),rl=l("h3",{gridArea:"employer",marginBottom:0,whiteSpace:"nowrap"}),il=l(xo,{gridArea:"time-range",nested:{"&.has-marginalia::after":{content:'"*"'}}}),sl=l("div",{fontSize:"0.88889rem",fontWeight:s.deemphasize.fontWeight,gridArea:"position",nested:{[s.print]:{nested:{"&:after":{content:'","'}}}}}),al=l("p",{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"baseline",gap:"1ch"}),ll=l("span",{fontWeight:500}),cl=l("span",{fontSize:"0.88889rem",opacity:.8}),Do=e=>{const{subEmployer:o,subRange:n,highlights:r}=e;return t(D,null,(o??n)&&t(al,null,o&&t(ll,null,o),n&&t(cl,null,n)),t(el,{itemtype:"http://schema.org/ItemList"},r.map(i=>t(tl,{key:i,itemprop:"itemListElement"},fe(i)))))},dl=({employer:e,end:o,highlights:n,position:r,start:i,summary:a,marginalia:c,...m})=>t(ol,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...m},t(nl,null,t(rl,{itemprop:"name"},e),t(sl,{itemprop:"roleName"},r),t(il,{className:c?"has-marginalia":"",range:[i,o]})),a==null?null:t(Ja,{itemprop:"description"},fe(a)),c&&t(Qa,null,"* ",c),ur(n)?t(Do,{highlights:n}):n.map(p=>{const[u,y,...f]=p;return t(Do,{subEmployer:u,subRange:y,highlights:f})})),ml=l(Ee,{...s.resume.employment.container,marginTop:"1rem"}),pl=({employment:e})=>t(ml,null,t(Za,null,"Recent Experience"),e.history.map(o=>t(dl,{...o}))),ul=l(Ee,{textAlign:"right",nested:{[s.print]:{display:"none"}}}),gl=l(j,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),hl=l(Se,{...s.visiblyHidden}),No=e=>e.replace(/^https?:\/\/|\/$/g,""),fl=({className:e,id:o,meta:n,resume:r,updated:i})=>{const{contact:{email:a,website:c},employment:m,info:p,name:u,projects:y,skills:f,social:k}=r;return t(gl,{className:e,id:o,itemscope:!0,itemtype:"http://schema.org/Person"},t(Pa,null,t(Po,{...n,renderType:"post"})),t(Ia,null,t(Ma,null,t("h1",{itemprop:"name"},u),t(hl,{date:i,itemprop:"datePublished",mode:de.META}),t(La,null,t(Ct,{href:`mailto:${a}`,itemprop:"email",screenLabel:a,printLabel:a,Icon:Da},"Email"),c!=null&&t(Ct,{href:c,itemprop:"url",printLabel:No(c),rel:"me"},"Website"),k.map(({user:S,network:h,url:x})=>t(Ct,{href:x,itemprop:"url",screenLabel:S??h,printLabel:S??No(x),Icon:Ha[h],rel:"me"},h)))),t(_a,{itemprop:"description"},fe(p.brief))),t(Ee,{"aria-label":"Skillsets"},t(Ua,null,Object.entries(f.merged).map(([S,h])=>t(Ka,{key:S,name:S,skills:h})))),t(pl,{employment:m}),t(Ee,{id:"projects"},t(xa,{projects:y})),t(Ee,null,t("h2",null,"References"),fe("Available upon request, email [gnosis@gmail.com](mailto:gnosis@gmail.com)")),t(ul,null,t("a",{href:"/Trevor_Schmidt_resume.pdf"},"View as PDF")))};l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),l("a",{...s.resume.contactList.link,textDecoration:"none"});export{be as BLOG_ART_HEIGHT,Et as BlogArt,rs as BlogArtDefs,Os as BlogListing,Co as BlogMetadataType,ia as BlogPost,ce as COORDINATE_MAX,Gt as COORDINATE_MIN,j as FullBleedContainer,no as FullBleedScrollableOverflow,io as FullBleedSymbolBlock,Yt as Head,Ae as InvalidHashError,lt as MIN_SMOOTHING,wo as Main,Re as PageMetadataType,fl as Resume,Po as ResumeArt,ct as SMOOTHING_RATIO,le as StylesProvider,I as Topic,go as TopicTag,Dt as __SNOWPACK_ENV__,re as asserted,vt as blogArtDefaultParameters,ne as clamp,ht as cubicBezierPoints,sa as getBlogPostStaticProps,ut as getNaiveSegments,gt as getNonPhallicSegments,zt as getPageMetadata,ni as hexChars,qe as identifier,fe as mdx,oe as renderer,jn as resetAbbrContext,br as resume,pt as scalePoint,at as sortBy,l as styled,s as theme,xe as toFixed,dt as toHexPointSequence,mt as toPointSequence};
