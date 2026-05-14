import"fela-tools";import{h as t,toChildArray as jt,Fragment as I}from"https://cdn.skypack.dev/preact@10.27.1";import"sharp";import{visit as Ht}from"unist-util-visit";import{definePage as pi}from"microsite/page";import{isobject as hi,identifier as ui,embedded as gi,__pika_web_default_export_for_treeshaking__ as fi,createComponent as yi,RendererProvider as bi,Readonly as Si,Object$1 as xi,Optional as u,Unknown as vi,Literal as wi,String as h,Partial as Oe,Union as Bt,Boolean as Ro,Array$1 as te,Integer as ki,Number$1 as Pi,__pika_web_default_export_for_treeshaking__$1 as Ci,B as Dt}from"./_vendor/index.js";import{Head as Ao,seo as at}from"microsite/head";import*as Io from"@mdx-js/mdx";import Ei from"@richardtowers/remark-abbr";import Ti from"dedent";import{rehypeAccessibleEmojis as Ri}from"rehype-accessible-emojis";import Ai from"rehype-parse";import Ii from"rehype-raw";import Mi from"rehype-remark";import Oi from"rehype-slug";import{remark as Li}from"remark";import $i from"remark-mdx";import Ni from"remark-mdx-to-plain-text";import ji from"remark-smartypants";import Hi from"remark-stringify";import lt,{resolve as Mo,extname as Bi}from"node:path";import Oo,{cwd as Di}from"node:process";import{loadTheme as Lo,getHighlighter as $o}from"shiki";import{BUNDLED_LANGUAGES as _i}from"shiki-languages";import{renderers as Yi}from"shiki-twoslash";import{hasher as Fi}from"node-object-hash";import _t from"node:fs";import Xi from"node:child_process";import zi from"node:crypto";import{createRenderer as Gi}from"fela";import{cssifyDeclaration as Ui,cssifyObject as Wi}from"css-in-js-utils";import{processStyleWithPlugins as Vi,KEYFRAME_TYPE as No,isNestedSelector as qi,normalizeNestedProperty as Ki,isMediaQuery as Ji,generateCombinedMediaQuery as jo,isSupport as Zi,generateDeclarationReference as Qi,isUndefinedValue as er,generateCSSSelector as tr,RULE_TYPE as or}from"fela-utils";import Ho from"md5";const nr=e=>e.type==="abbr",ir=e=>e.type==="text";let Yt=new Set;const rr=()=>{Yt=new Set},sr=()=>e=>{Ht(e,nr,o=>{const{identifier:n}=o;if(Yt.has(n)){for(const i in o)delete o[i];Object.assign(o,{type:"text",value:n})}Yt.add(n)}),Ht(e,ir,o=>{o.value.includes("\u200B")&&Object.assign(o,{value:o.value.replace(/\u200b/gu,"")})})},Bo="production",ar="production",lr=!0;var Ft=Object.freeze({__proto__:null,MODE:Bo,NODE_ENV:ar,SSR:lr});const ct=e=>e,cr=e=>typeof e=="object"&&e!=null,Do=e=>e!=null&&typeof e=="object"&&!Array.isArray(e);function Xt(e){const o=e,n=e;for(const[i,r]of Object.entries(o))if(Do(r)){if(i.startsWith("@media")){n[i]=Xt(r);continue}const a=Xt(r),c=i.split(/(?<!\([^)]*),(?![^(]*\))/);if(c.length>1){for(const d of c){const m=d.trim(),p=n[m]??{};if(!Do(p))throw new Error(`Failed to merge styles for selector: ${m}`);n[m]={...p,...a}}delete n[i]}}else n[i]=r;return n}function dr(){return Xt}function et(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function mr(e,o,n,i,r,a){const c=[];return r&&c.push(et(r).slice(0,16)),i&&c.push(et(i).slice(0,16)),n&&c.push(et(n).slice(0,16)),c.push(et(e).slice(0,16)),c.push(et(o).slice(0,16)),c.push(a.slice(0,8)),c.join("_")}function pr(e,o,n=[""]){let i="";for(const a in e){const c=e[a];i=`${i}${a}{${Wi(c)}}`}let r="";for(let a=0;a<n.length;a++){const c=n[a];r=`${r}@${c}keyframes ${o}{${i}}`}return r}function hr(){return e=>(e.renderKeyframe=(o,n)=>{const i=o(n,e),r=Vi(e,i,No,n),a=JSON.stringify(r);if(!e.cache.hasOwnProperty(a)){const c=Ho(a),d=(e.selectorPrefix||"_")+c.slice(0,8),m=pr(r,d,e.keyframePrefixes),p={type:No,keyframe:m,name:d};e.cache[a]=p,e._emitChange(p)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...n},i="",r="",a="")=>{let c=o?` ${o}`:"";for(const d in n){const m=n[d];if(hi(m))if(qi(d))c+=e._renderStyleToClassNames(m,i+Ki(d),r,a);else if(Ji(d)){const p=jo(r,d.slice(6).trim());c+=e._renderStyleToClassNames(m,i,p,a)}else if(Zi(d)){const p=jo(a,d.slice(9).trim());c+=e._renderStyleToClassNames(m,i,r,p)}else console.warn(`The object key "${d}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const p=Qi(d,m,i,r,a);if(!e.cache.hasOwnProperty(p)){if(er(m)){e.cache[p]={className:""};continue}const y=Ui(d,m),g=Ho(p),x=e.devMode?mr(d,m,i,r,a,g):(e.selectorPrefix||"_")+g.slice(0,8),b=tr(x,i),k={type:or,className:x,selector:b,declaration:y,pseudo:i,media:r,support:a};e.cache[p]=k,e._emitChange(k)}const S=e.cache[p].className;S&&(c+=` ${S}`)}}return c},e)}import.meta.env=Ft;const ur=Bo==="development",gr=()=>{const e=ui(),o=Gi({devMode:ur,enhancers:[hr(),e],plugins:[gi(),dr(),fi()]});return{identifier:e,renderer:o}},{identifier:Se,renderer:Le}=gr(),fr=e=>({children:o})=>t(bi,{renderer:e},...jt(o)),$e=fr(Le),yr=e=>Le.renderRule(ct,e),dt=Object.assign(yr,{global:Le.renderStatic.bind(Le)}),l=(e,o)=>{const n=typeof o=="function"?o:()=>o;return yi(n,e,Object.keys)},br=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),j=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((n,[i,r])=>typeof r=="object"&&(i==="nested"||i.includes("&"))?n:`${n}${br(i)}:${String(r)};`,""),"}",Object.entries(o).map(([n,i])=>{if(cr(i)){if(n==="nested")return Object.entries(i).map(([r,a])=>{const c=e.map(d=>r.replace(/&/g,d));return j(c,a)}).join("");if(n.includes("&")){const r=e.map(a=>n.replace(/&/g,a));return j(r,i)}}return""},[]).join("")].join(""),ke=(...e)=>`clamp(${e.join(",")})`,Xe=e=>e.replace(/\s+/g," ").trim(),oe=(e,o)=>Si(xi(e,o)),pe=()=>u(vi()),_o="FRESH@0.1.0",Sr=oe({format:wi(_o,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:u(h({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),xr=Oe(oe({label:h({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:h({description:"Profession type or 'character class'."}),image:h({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:h({description:"A short description or summary of yourself as a candidate."}),quote:h({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),vr=Oe(oe({willing:Bt([Ro(),h()],{description:"Willingness to relocate."}),destinations:te(h({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),wr=Oe(oe({travel:ki({description:"Percentage of time willing to travel (0 to 100)."}),authorization:h({description:"Work authorization: citizen, work visa, etc."}),commitment:te(h({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:Ro({description:"Open to remote employment opportunities."}),relocation:vr},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),kr=te(Oe(oe({label:h({description:"A label for this contact information."}),category:h({description:"Type of contact information: email, phone, url, postal, or IM."}),value:h({description:"Phone number, email address, website, etc."})}))),Pr=Oe(oe({email:h({description:"Primary contact email.",format:"email"}),phone:h({description:"Primary phone number."}),website:h({description:"Website, blog, or home page.",format:"uri"}),other:kr},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),Cr=Oe(oe({address:h({description:"Your full postal address."}),code:h({description:"Postal or other official routing code."}),city:h({description:"Your home city."}),country:h({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:h({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),Er=te(oe({employer:h({description:"Employer name."}),position:u(h({description:"Your position or formal job title."})),url:u(h({description:"Employer website.",format:"uri"})),start:u(h({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:u(h({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:u(h({description:"A summary of your achievements and responsibilities under this employer."})),marginalia:u(h()),highlights:u(te(Bt([h(),te(h())]))),location:u(h({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:u(te(h({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),Tr=Oe(oe({summary:h({description:"Summary of overall employment."}),history:Er},{description:"The 'employment' section describes the candidate's formal employment history."})),Rr=te(oe({category:h({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:u(h({type:"string",description:"Friendly media name."})),url:u(h({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),Ar=te(oe({title:h({description:"Project name or code-name."}),category:u(h({description:"Project type: open-source, private, side project, etc."})),description:u(h({description:"Project description or summary."})),summary:u(h({description:"A summary of your achievements and responsibilities on the project."})),role:u(h({description:"Your role on the project: Contributor, Creator, etc."})),url:u(h({description:"Project URL.",format:"uri"})),media:u(Rr),repo:u(h({description:"Repo URL.",format:"uri"})),start:u(h({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:u(h({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:u(te(h({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:u(h({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:u(te(h({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),Ir=Oe(oe({sets:te(oe({name:h({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:u(h({description:"Level of mastery of the skill."})),skills:te(h({description:"Title or ID of a skill from the skills list."}))})),list:te(oe({name:h({description:"The name or title of the skill."}),level:u(h({description:"A freeform description of your level of mastery with the skill."})),summary:u(h({description:"A short summary of your experience with this skill."})),years:u(Bt([h(),Pi()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),Mr=te(oe({title:u(h({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:h({description:"College or school name."}),area:u(h({description:"e.g. Arts"})),studyType:u(h({description:"e.g. Bachelor"})),start:u(h({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:u(h({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:u(h({description:"Grade or GPA."})),curriculum:u(te(h({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:u(h({description:"Website or URL of the institution or school.",format:"uri"})),summary:u(h({description:"A short summary of this education experience."})),keywords:u(te(h({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:u(te(h({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:u(h({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),Or=oe({summary:u(h({description:"Summary of overall education."})),level:h({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:u(h({description:"Your degree, if any (BSCS, BA, etc.)."})),history:u(Mr)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),Lr=te(oe({network:h({description:"The name of the social network, such as Facebook or GitHub."}),user:h({description:"Your username or handle on the social network."}),url:h({description:"URL of your profile page on this network.",format:"uri"}),label:u(h({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."});oe({name:h({description:"The candidate's name as it should appear on the resume."}),meta:Sr,info:u(xr),disposition:u(wr),contact:u(Pr),location:u(Cr),employment:u(Tr),projects:u(Ar),skills:u(Ir),education:u(Or),social:u(Lr),services:pe(),recognition:pe(),writing:pe(),reading:pe(),speaking:pe(),governance:pe(),languages:pe(),samples:pe(),references:pe(),testimonials:pe(),interests:pe(),extracurricular:pe(),affiliation:pe()},{title:"FRESH Resume Schema"});const D={OPEN_SOURCE:"Open source",PUBLIC_ACCESS:"Public access"},M={CONTRIBUTOR:"Contributor",CREATOR:"Creator",DEVELOPER:"Developer"},$r=Date.now(),mt=e=>e==null?$r:new Date(e).getTime(),Nr=e=>e.slice().sort((o,n)=>{const i=mt(o.end),r=mt(n.end);if(i>r)return-1;if(r>i)return 1;const a=mt(o.start),c=mt(n.start);return a>c?-1:c>a?1:0}),jr=e=>Nr(e),Yo=jr([{title:"@getodk/xforms-engine",category:D.OPEN_SOURCE,description:`
      Client-agnostic, reactive runtime for
      [ODK XForms](https://getodk.github.io/xforms-spec/)
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xforms-engine",role:M.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/xpath",category:D.OPEN_SOURCE,description:`
      Extensible XPath 1.0 interpreter, supporting
      [ODK XForms](https://getodk.github.io/xforms-spec/#xpath-functions)
      extensions, arbitrary DOM implementations
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xpath",role:M.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/tree-sitter-xpath",category:D.OPEN_SOURCE,description:`
      [tree-sitter](https://tree-sitter.github.io/tree-sitter/) parser for
      XPath 1.0 syntax
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/tree-sitter-xpath",role:M.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/web-forms",category:D.OPEN_SOURCE,description:`
      [ODK Web Forms](https://github.com/getodk/web-forms) UI client
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/web-forms",role:M.CONTRIBUTOR,start:"2024-03",end:"2025-04"},{title:"Astro",category:D.OPEN_SOURCE,description:`
      "Build faster websites with less client-side Javascript"
    `,summary:`
      Collaborate with core contributors to add support for rendering
      [SolidJS](https://www.solidjs.com/) components.
    `,repo:"https://github.com/snowpackjs/astro",role:M.CONTRIBUTOR,start:"2021-07",end:"2021-07"},{title:"Enketo",category:D.OPEN_SOURCE,description:`
      "Web forms evolved. Deploy and conduct surveys that work without a
      connection, on any device."
    `,summary:`
      Long-term maintenance.
    `,repo:"https://github.com/enketo",role:M.DEVELOPER,start:"2021-04",end:"2023-10"},{title:"Microsite",category:D.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:M.CONTRIBUTOR,start:"2021-01",end:"2021-05"},{title:"HNDarkMode",category:D.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:M.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:D.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:M.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:D.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:M.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:D.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:M.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:D.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:M.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:D.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:M.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:D.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:M.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:D.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:M.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:D.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:M.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:D.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:M.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:D.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:M.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:D.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:M.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:D.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:M.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:D.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:M.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:D.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:M.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:D.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:M.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:D.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:M.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),Hr=e=>e,Br=e=>typeof e[0]=="string",Dr=e=>e,zt="treez.mk.reup",_r=Dr([{employer:"ODK",position:"Senior Software Engineer",start:"2021-03",end:"2025-04",summary:`
			Created and led ODK Web Forms, a runtime for user-defined
			data collection tools and form-based applications.
		`,highlights:[`
				Led ODK Web Forms development, from conception to user adoption in production.
			`,`
				Led design and architecture to ensure key business and product goals: alignment with the flagship Collect app for Andriod; sustainable productivity and maintainability for user-facing functionality core to the business; long-term anticipation of unification on Web Forms for that core functionality.
			`,`
				Primary development of ODK XForms and XPath engines. Responsible for design and implementation of parsing, data model, runtime computational architecture, and client-/framework-agnostic rendering APIs.
			`,`
				Prototyped initial UI/UX; collaborated with dedicated UI developers as team grew; coordinated downstream integration with team developing ODK Central software for managing form applications and data access.
			`,"(2021-2023) Maintainer of Enketo, legacy predecessor to ODK Web Forms."]},{employer:"Treez",position:"Senior Software Engineer",start:"2018-12",end:"2020-09",affiliation:{id:zt,description:null},summary:"Led integration of core inventory management services across a full spectrum of regulatory reporting services.",highlights:["Led integration between Treez B2B inventory management services, and Mister Kraken's extant integrations with state-mandated traceability services; expanded on prior success maturing said integration to all major regulatory and vendor environments.","Built robust, general web service tooling as basis for Treez/Mister Kraken integration, which became a foundation for all new and anticipated service development.","Intervened on personal initiative in the wake of widespread vendor outages and data corruption, to institute reliable, auditable, and reproducible processes to recover and reconcile customer regulatory reporting and inventory history."]},{employer:"Mister Kraken",position:"Senior Software Engineer",start:"2017-04",end:"2018-12",affiliation:{id:zt,description:"Mister Kraken and Reup were acquired by Treez in 2018"},summary:"Led regulatory reporting integration amidst rapid growth and evolution of early legal cannabis markets.",highlights:["Led efforts to mature and adapt early-stage integrations with Washington State-mandated traceability services, ensuring stable continuation of service for customers through abrupt/rapid changes to the state's regulatory environment and service vendor.","Promoted a team culture shift to embrace automation and other safeguard processes, significantly improving both team velocity and product quality.","Integrated Reup's B2B marketplace software, filling the remaining gaps in Mister Kraken's end-to-end inventory management offering."]},{employer:"Reup",position:"Senior Software Engineer",start:"2015-11",end:"2017-04",affiliation:{id:zt,description:"Reup informally merged with Mister Kraken in 2017"},summary:"Led UI/UX and co-led backend API of Reup's B2B marketplace.",highlights:["Led technical design and development of Reup's core web application, a B2B cannabis supply chain marketplace.","Shared leadership and development of supporting web services.","Joined founders and design team in user research, to ensure direct engineering involvement in product-market fit."]},{employer:"ClipCard",position:"Senior Software Engineer",start:"2013-04",end:"2015-08",summary:`
			Full stack engineer, leading frontend team and then service integrations.
		`,highlights:[`
				Led design and development of data processing tools used by all of
				ClipCard's cloud API integrations; providing common interfaces to
				standardize and accelerate development of service API authorization,
				backpressure, fault tolerance, and common data extraction patterns.
			`,`
				Led integrations with Dropbox, Evernote, GitHub and Trello; contributed
				to integrations with 8 additional cloud services.
			`,`
				Organized a hackathon which produced 8 API integration
				prototypes, ultimately leading to company wide alignment
				on product direction as a search engine for private cloud data.
			`,`
				Led frontend architecture and development of ClipCard's
				web app, and provided mentorship for my successor in that role.
			`]}]),Yr=_r,w={BASIC:"Basic",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced",EXPERT:"Expert"},pt={LANGUAGES_PLATFORMS:"Languages",BACKEND:"Backend",FRONTEND:"Frontend",NICHE:"Niche"},Gt={[pt.LANGUAGES_PLATFORMS]:[{name:"TypeScript",level:w.EXPERT},{name:"Python",level:w.ADVANCED},{name:"SQL",level:w.ADVANCED},{name:"Clojure",level:w.EXPERT},{name:"Java",level:w.BASIC},{name:"Swift",level:w.BASIC},{name:"HTML",level:w.ADVANCED},{name:"CSS",level:w.ADVANCED},{name:"SVG",level:w.ADVANCED}],[pt.BACKEND]:[{name:"REST",level:w.EXPERT},{name:"RPC",level:w.EXPERT},{name:"Distributed Systems",level:w.EXPERT},{name:"Node",level:w.EXPERT},{name:"Django REST Framework",level:w.ADVANCED}],[pt.FRONTEND]:[{name:"React",level:w.EXPERT},{name:"Reactivity",level:w.EXPERT},{name:"Vue",level:w.INTERMEDIATE},{name:"Astro",level:w.INTERMEDIATE},{name:"Qwik",level:w.INTERMEDIATE},{name:"SolidJS",level:w.ADVANCED},{name:"DOM & Web APIs",level:w.EXPERT}],[pt.NICHE]:[{name:"Effect",level:w.INTERMEDIATE},{name:"Marko",level:w.INTERMEDIATE},{name:"Custom DSL\u200Bs",level:w.ADVANCED},{name:"Custom JSX",level:w.ADVANCED},{name:"ODK XForms",level:w.EXPERT},{name:"XPath",level:w.EXPERT},{name:"XSLT",level:w.INTERMEDIATE}]},Fr={list:Object.values(Gt).flatMap(ct),merged:Gt,sets:Object.entries(Gt).map(([e,o])=>({name:e,skills:o.map(n=>n.name)}))},Xr=Hr({name:"Trevor Schmidt",meta:{format:_o,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:void 0},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:Yr},info:{class:"Senior Software Engineer",brief:`
<span class="inline-role">Full Stack Senior Software Engineer</span> with a proven record of achievement and leadership, across a broad range of disciplines, roles, and technologies:

- Driving projects from conception to successful adoption and sustainable growth.
- Acquiring and applying deep domain and subject matter expertise.
- Fostering an engineering culture of velocity and quality, continuously improving both.
- Reducing and overcoming risk, to grow and deliver on new project and business opportunities.
		`.trim(),label:"Full Stack Senior Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:Yo,skills:Fr,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),ht=Symbol("DEFAULT_TOPIC"),z={[ht]:ht,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},zr=e=>typeof e=="string"||typeof e=="symbol",Fo=e=>zr(e)&&e in z,Ut=e=>Fo(e)?z[e]:e,Xo=Object.entries(z).reduce((e,o)=>{const[n,i]=o;return typeof n=="string"?{...e,[i]:n}:e},{}),Gr=e=>Fo(e)?e:Xo[e],Ur=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),Wr=Object.fromEntries(Object.entries(Xo).map(([e,o])=>typeof o=="string"?[e,Ur(o)]:null).filter(e=>e!=null)),Vr=e=>{const o=Ut(e);return typeof o=="string"?Wr[o]:null},ut=2,Wt={minEm:1.0625,fluidVw:1.0625*ut,maxEm:1.25},$="@media (prefers-color-scheme: dark)",gt="@media print",qr=["h1","h2","h3","h4","h5","h6"],Kr=["dd","dl","dt","li","ol","ul"],Jr=[...qr,...Kr,"p"],ze=Wt.minEm/Wt.maxEm,Re={h1:1.953,h2:1.563,h3:1.25},Zr={h1:{minEm:Re.h1*ze,fluidVw:Re.h1*ze*ut,maxEm:Re.h1},h2:{minEm:Re.h2*ze,fluidVw:Re.h2*ze*ut,maxEm:Re.h2},h3:{minEm:Re.h3*ze,fluidVw:Re.h3*ze*ut,maxEm:Re.h3}},zo=75,ft=1.25,Qr=["0.7fr",`${ft}rem`,[`${zo}ch`,`calc(100% - ${ft*2}rem)`],`${ft}rem`,"1.2fr"],Vt=1,es=["0.7fr",`${Vt}rem`,[`${zo*1.1875}ch`,`calc(100% - ${Vt*2}rem)`],`${Vt}rem`,"1.2fr"],ts=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],qt=ts.join(", "),os=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],ns=os.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),de={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},is="hover-inherit-topic-color",rs={[z[ht]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.DEFAULT_TOPIC.light},[$]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.DEFAULT_TOPIC.dark}}}}},[z.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.ABLEISM}}},[z.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.ARTS_CRAFTS}}},[z.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.LEMON}}},[z.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.MENTAL_ILLNESS}}},[z.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.NEURODIVERGENCE}}},[z.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.PHILOSOPHY}}},[z.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.POLITICS}}},[z.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.RACISM}}},[z.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.SEXISM}}},[z.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.SUBSTANCE_ABUSE}}},[z.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.TECHNOLOGY}}},[z.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:de.TRANSPHOBIA}}}},Go=Se().className,s={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:is,baseFontSizeRange:Wt,darkMode:$,print:gt,abbreviation:{"--abbreviation-highlight":"hsl(64deg 100% 50% / 0.25)",backgroundImage:`linear-gradient(${["to top","var(--abbreviation-highlight)","var(--abbreviation-highlight) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[$]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[$]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:Go,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[$]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${Go}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[$]:{color:"hsl(212deg, 10%, 90%)"}}},[$]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[$]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[$]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:qt},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:qt,nested:{[$]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em",fontWeight:300},emphasize:{color:"#000"},firstLastMarginZeroElements:Jr,gitHubLogo:{fill:"#171515",nested:{[$]:{fill:"#fff"}}},headingLineHeight:.9375,headingRanges:Zr,[$]:{abbreviation:{"--abbreviation-highlight":"hsl(336deg 85% 25%)"},aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg 60% 4%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)",fontWeight:200},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{"--color-prose":"hsl(190deg 20% 97%)","--color-prose-decoration":"hsl(190deg 20% 97% / 55%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"oklch(0.71 0.16 355.75)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:Qr,mainGridSidePaddingRem:ft,monospaceFont:qt,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[$]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{"--color-prose":"hsl(210deg 12% 5% / 95%)","--color-prose-decoration":"hsl(210deg 12% 5% / 55%)",color:"var(--color-prose)",fontFamily:`var(--prose-font-family, ${ns})`},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[$]:{backgroundColor:"hsl(336deg, 100%, 7%)"},[gt]:{backgroundColor:"transparent"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[$]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"#fffff1",nested:{[$]:{backgroundColor:"hsl(41deg, 100%, 8%)"},[gt]:{backgroundColor:"transparent"}}},itemOdd:{backgroundColor:"transparent"},itemEven:{backgroundColor:"oklch(0.99 0.03 100.56)",nested:{[$]:{backgroundColor:"oklch(0.26 0.06 71.28)"},[gt]:{backgroundColor:"transparent"}}}},skillLevel:{[w.BASIC]:{color:"hsl(207deg, 25%, 83%)",nested:{[$]:{color:"hsl(207deg, 15%, 43%)"}}},[w.INTERMEDIATE]:{color:"hsl(188deg, 53%, 74%)",nested:{[$]:{color:"hsl(188deg, 53%, 34%)"}}},[w.ADVANCED]:{color:"hsl(188deg, 70%, 59%)",nested:{[$]:{color:"hsl(188deg, 80%, 39%)"}}},[w.EXPERT]:{color:"hsl(152deg, 100%, 39%)",nested:{[$]:{color:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:es,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[$]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[$]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:rs,topicTagIdentifier:Se(),topicTagInner:{backgroundImage:Xe(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[$]:{backgroundImage:Xe(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:Xe(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[$]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:Xe(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visiblyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[$]:{color:"hsl(194deg, 8%, 50%)"}}}}}},Kt=["b","em","h1","h2","h3","i","strong"],yt=["h1","h2","h3","h4","h5","h6"],ss=[...yt,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],as=Array.from(new Set([...yt,...ss,"div","fieldset","form","hgroup","hr","pre"])),Jt="PDFPrint",ls="/fonts/pdf-print.woff",cs=Xe(`
  @font-face {
    font-family: "${Jt}";
    font-weight: 400;
    src: url("${ls}");
  }

  ${s.print} {
    :root {
      --prose-font-family: "${Jt}";
      font-family: "${Jt}";
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
    font-size:        ${ke(`${s.baseFontSizeRange.minEm}em`,`${s.baseFontSizeRange.fluidVw}vw`,`${s.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${j(["html","body"],{...s.document})}

  ${j(["body"],{...s.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${yt.join(",")} {
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
`),ds=()=>{dt.global(Xe(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${as.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${yt.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${j(Kt,s.emphasize)}

      h1 {
        font-size: ${ke(`${s.headingRanges.h1.minEm}em`,`${s.headingRanges.h1.fluidVw}vw`,`${s.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${ke(`${s.headingRanges.h2.minEm}em`,`${s.headingRanges.h2.fluidVw}vw`,`${s.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${ke(`${s.headingRanges.h3.minEm}em`,`${s.headingRanges.h3.fluidVw}vw`,`${s.headingRanges.h3.maxEm}em`)};
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

      ${j(["hr:after"],{...s.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${j(["pre"],s.pre)}

      ${j(["code"],{...s.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

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

      ${j(["a"],{...s.links,fontWeight:"bolder"})}

      ${j(["abbr"],{...s.abbreviation,textDecoration:"none"})}

      ${j(["aside","small"],s.deemphasize)}

      ${j(["aside"],{...s.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem",nested:{"& a":{fontWeight:600}}})}

      ${Kt.map(e=>`aside ${e}`).join(", ")} {
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

        ${j(["html","body"],{...s[s.darkMode].document})}

        ${j(["body"],{...s[s.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${j(Kt,s[s.darkMode].emphasize)}
        ${j(["abbr"],s[s.darkMode].abbreviation)}
        ${j(["pre"],s[s.darkMode].pre)}
        ${j(["code"],s[s.darkMode].code)}
        ${j(["a"],s[s.darkMode].links)}
        ${j(["aside","small"],s[s.darkMode].deemphasize)}
        ${j(["aside"],s[s.darkMode].aside)}
        ${j(["hr:after"],s[s.darkMode].separator)}
      }

      ${s.print} {
        @page {
          margin: 0.325in;
        }

        ${j(["a","a:hover","code"],{color:"inherit",fontWeight:"inherit",textDecorationColor:"currentcolor"})}

        ${j(["abbr"],{backgroundImage:"none"})}

        ${j(["code"],{backgroundColor:"transparent",borderRadius:0,display:"inline-flex",lineHeight:"inherit",padding:0})}
      }
    `))},ms=`
  ${s.mainGridColumns[0]}
  ${s.mainGridColumns[1]}
  min(
    ${s.mainGridColumns[2][0]},
    ${s.mainGridColumns[2][1]}
  )
  ${s.mainGridColumns[3]}
  ${s.mainGridColumns[4]}
`.replace(/\s+/g," "),Uo={gridColumn:"1 / -1"},Wo=dt(Uo),X=l("div",{nested:{[`& > .${Wo}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0},[s.print]:{display:"flex",flexDirection:"column"}},display:"grid",gridTemplateColumns:ms,...Uo}),ps=()=>t(I,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));ds();const Vo=({children:e,meta:{description:o,host:n,redirect:i,social:{image:r},title:a},...c})=>i?t(Ao,{...c},t(at.title,null,"Redirecting to ",i),t("meta",{"http-equiv":"refresh",content:`0; URL=${i}`}),t("link",{rel:"canonical",href:i})):t(Ao,{...c},t(at.title,null,a," | Eyelidlessness"),o!=null?t(at.description,null,o):t(I,null),t("meta",{name:"theme-color",content:s.siteLogo.color}),t("style",{dangerouslySetInnerHTML:{__html:cs}}),t("meta",{name:"twitter:card",content:"summary_large_image"}),t("meta",{name:"twitter:site",content:"@eyelidlessenss"}),t(at.image,{alt:a,height:r.height,src:`${n}${r.publicPath}`,width:r.width}),t(I,null,e),t(ps,null)),hs=l("svg",{...s.visiblyHidden,position:"absolute"}),He=512,qo=[0,0,He,He].join(" "),us=He/2,gs="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z",fs=()=>t(hs,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:qo,width:"0"},t("defs",null,t("mask",{id:"octocat-knockout"},t("rect",{fill:"#fff",height:He,mask:"url(#octocat)",rx:us,width:He}),t("path",{d:gs,fill:"#000"})))),ys=l("rect",{...s.gitHubLogo}),Zt=e=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e.className,role:"img",viewBox:qo},!e.omitTitle&&t("title",null,"GitHub"),t(ys,{height:He,mask:"url(#octocat-knockout)",width:He})),tt="/blog/",bs=tt,Ss=!0,xs="/resume/",vs=(()=>xs)(),ws="/projects/",ks=({as:e="div",devilsBreakpoint:o,gap:n,...i})=>{const r=l(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return t(r,{...i})},bt={height:60,width:338},Ps=l("svg",{display:"inline-block",maxWidth:"100%",width:`${bt.width}px`}),Cs=l("use",{nested:{[s.darkMode]:{...s[s.darkMode].siteLogo}},...s.siteLogo,fill:"currentcolor"}),Es=`0 0 ${bt.width} ${bt.height}`,Ts=()=>t(Ps,{viewBox:Es},t(Cs,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),t("title",null,"Eyelidlessness")),{columns:Ge}=s.siteHeader,Rs=`
  ${Ge[0]}
  ${Ge[1]}
  min(
    ${Ge[2][0]},
    ${Ge[2][1]}
  )
  ${Ge[3]}
  ${Ge[4]}
`.replace(/\s+/g," "),As=l("header",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Rs,padding:"clamp(0.5rem, 4vmin, 2rem) 0",position:"relative",zIndex:1,nested:{[s.print]:{nested:{'&[data-page-id="resume"]':{display:"none"}}}}}),Is=l("div",{gridColumn:3}),Ms=l("div",{margin:"0 auto"}),Os=l("a",{textDecoration:"none"}),Ls=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0,nested:{'&[data-page-id="resume"]':{display:"none"}}}),Ko=1,$s=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${Ko/2}rem`,padding:0}),Ns=l("a",{...s.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[s.darkMode]:{...s[s.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),Jo="1.5em";l(Zt,{display:"block",width:`clamp(1.125em, 4vw, ${Jo})`});const js=e=>{const o=e.meta.pageId==null?{}:{"data-page-id":e.meta.pageId},i=e.meta.pageId==="resume"&&Ss,r=[{label:"Blog",location:bs},{label:"Projects",location:ws},{label:"GitHub",location:"https://github.com/eyelidlessness"}],a=r.reduce((m,p)=>typeof p.label=="string"?m+p.label.length:m,0),c={horizontal:"2rem"},d=[`${bt.width}px`,c.horizontal,`${a+2}ch`,Jo,`${r.length*Ko}rem`].join(" + ");return i?t(I,null):t(As,{...o},t(Is,null,t(ks,{as:"nav",devilsBreakpoint:d,gap:c},t(Ms,null,t(Os,{href:"/"},t(Ts,null))),!e.hideMenu&&t(Ls,{...o},r.map(({location:m,label:p})=>t($s,null,t(Ns,{href:m},p)))))))},Hs=l(X,{paddingTop:0,paddingBottom:"4em",nested:{[s.print]:{nested:{'&[data-page-id="resume"]':{paddingTop:0,paddingBottom:0}}}}}),Bs=e=>{if(e.pageId!=null)return{"data-page-id":e.pageId}},Zo=({meta:e,hideMenu:o,...n})=>e.redirect?t(I,null):t($e,null,t(fs,null),t(js,{meta:e,hideMenu:o}),t(Hs,{as:"main",...Bs(e),...n})),Ds=(e,o="Assertion failed: expected non-nullish value")=>{if(e==null)throw new Error(o)},Ae=(e,o)=>(Ds(e,o),e),_s=e=>e.map((o,n)=>n),St=(e,o)=>_s(e).toSorted((n,i)=>{const r=o(e[n],e[i]);return r===0?n===i?0:n>i?1:-1:r}).map(n=>Ae(e[n])),xe=(e,o)=>Number(e.toFixed(o)),he=parseInt("ff",16),Qo=parseInt("00",16),en=.05,Qt=.15,eo=.05;class ot extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const Ys=/^[0-9a-f]{40}$/i,Fs=e=>Ys.test(e),Xs=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),zs=e=>e.length===10,Gs=/([0-9a-f]{2})([0-9a-f]{2})/gi,xt=e=>{if(!Fs(e))throw new ot(e);const n=Array.from(e.matchAll(Gs)).map(([i,r,a])=>({x:r,y:a}));if(!zs(n))throw new ot(e);return n},Us=Symbol("IS_POINT"),Ws=e=>Object.assign(e,{[Us]:!0}),tn=e=>{const o=parseInt(e,16);if(o>he||o<Qo)throw new Error(`Not a valid coordinate: ${e}`);return Ws(o)},Vs=({x:e,y:o})=>({x:tn(e),y:tn(o)}),qs=e=>e.length===10,vt=(e,o)=>{try{const n=o.map(Vs);if(!qs(n))throw new ot(e);return n}catch{throw new ot(e)}},Ks=Symbol("SCALED_COORDINATE"),Js=e=>e.reduce(({max:o,min:n},{y:i})=>({max:Math.max(o,Number(i)),min:Math.min(n,Number(i))}),{max:-Infinity,min:Infinity}),ye=(e,o)=>Object.assign(xe(e,2),{[Ks]:o}),Ue=({x:e,xScale:o,y:n,yScale:i})=>({x:ye(e,o),y:ye(n,i)}),wt=({x:e,y:o},{xScale:n,xShift:i,yScale:r,yShift:a})=>Ue({x:(e+i)*n,xScale:n,y:(o+a)*r,yScale:r}),kt=e=>{const{xScale:o,yScale:n,xMax:i}=e;return[Ue({x:0,xScale:o,y:0,yScale:n}),...e.points,Ue({x:i,xScale:o,y:0,yScale:n})].reduce((r,a,c,d)=>{if(c===0||c===d.length-1)return r;const m=ye(0,n),p=[{x:Ae(d[c-1]).x,y:m},a,{x:Ae(d[c+1]).x,y:m}];return[...r,p]},[])},Pt=({segments:e,xMax:o,xScale:n,yScale:i})=>e.map(r=>{const[{x:a,y:c},{x:d,y:m},{x:p,y:S}]=r,y=p-a,g=m/y,b=6/g;if(b<1){const T=b*.2*a,E=a-T,_=p+T,O=E<0?Math.abs(E):_>o?o-_:0,P=E+O,R=_+O,v=b*.3,L=d+O,G=v*m,Z=m-G;return[Ue({x:P,xScale:n,y:c,yScale:i}),Ue({x:L,xScale:n,y:Z,yScale:i}),Ue({x:R,xScale:n,y:S,yScale:i})]}return r}),Zs=({x:e,y:o},{x:n,y:i})=>{const r=n-e,a=i-o;return{angle:Math.atan2(a,r),length:Math.sqrt(r**2+a**2)}},on=({current:e,previous:o,next:n,reverse:i,smoothing:r,xScale:a,yScale:c})=>{const d=i?Math.PI:0,m=Zs(o,n),p=m.angle+d,S=m.length*r,{x:y,y:g}=e,x=y+Math.cos(p)*S,b=g+Math.sin(p)*S;return{x:ye(x,a),y:ye(b,c)}},to=({index:e,point:o,points:n,smoothing:i,xScale:r,yScale:a})=>{const c=n[e-1];if(c==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const d=n[e-2]??c,m=on({current:c,previous:d,next:o,reverse:!1,smoothing:i,xScale:r,yScale:a}),p=c,S=n[e+1]??o,y=on({current:o,previous:p,next:S,reverse:!0,smoothing:i,xScale:r,yScale:a});return[m,y,o]},nn=({segment:e,smoothing:o,xScale:n,yScale:i})=>e.reduce((r,a,c)=>{if(c===0)return r;const m=to({index:c,point:a,points:e,smoothing:o,xScale:n,yScale:i}).map(({x:p,y:S})=>`${p},${S}`).join(" ");return[...r,`C ${m}`]},[]),Qs=e=>{const{baseYCoordinate:o,isBaselineBelowMidpoint:n,xScale:i,yMax:r,yScale:a,yTilt:c=!1}=e;return e.segments.reduce((d,m,p,S)=>{const{length:y}=S,[g,x,b]=m,{x:k,y:T}=g,{x:E,y:_}=x,{x:O,y:P}=b,R=O-k,v=R===0?0:Math.max(_/R*eo,Qt),L=c?.1:0,G=1-L,Z=1+L,N=p%2==0?G:Z,ae=n?T+o:r-T+o,ie={x:k,y:ye(ae*N,a)},Q=p%2==0?G:Z,U=n?P+o:r-P+o,W={x:ye(O,i),y:ye(U*Q,a)},q=E-k,ee=O-E,re=ee>q?0:0-(E-k)*en,A=(y-p)*(a/100*r),Y={x:ye(E+re,i),y:ye(_-A,a)},F=nn({segment:[ie,Y,W],smoothing:v,xScale:i,yScale:a}),Pe=ee>q?(O-E)*en:0,Ce={x:ye(E+Pe,i),y:ye(r-A,a)},ue=nn({segment:[W,Ce,ie],smoothing:v,xScale:i,yScale:a});return[...d,[`M ${ie.x},${ie.y}`,...F,...ue,"Z"].join(" ")]},[])},ea=({hash:e,xPadding:o=0,xScale:n=1,yOffset:i=.5,yPadding:r=0,yScale:a=1})=>{const c=xt(e),d=vt(e,c),m=St(d,({x:P},{x:R})=>Number(P)===Number(R)?0:Number(P)>Number(R)?1:-1),p=o/2,S=r/2,y=m.map(P=>wt(P,{xScale:n,xShift:p,yScale:a,yShift:S})),g=(he+o)*n,{max:x}=Js(y),b=(x+r)*a,k=kt({points:y,xMax:g,xScale:n,yScale:a}),T=Pt({segments:k,xMax:g,xScale:n,yScale:a}),E=i>.5,_=E?b*i:-1*b*i;return{segmentPaths:Qs({baseYCoordinate:_,segments:T,xScale:n,yMax:b,isBaselineBelowMidpoint:E,yScale:a}),xMax:g,yMax:b}},ta={PNG:"png"},oa=({children:e,shadow:o,...n})=>t(X,{...n},e),rn=([e,o,n])=>`rgba(${[e,o,n,0].join(",")})`,sn=["12rem 100%","auto"],an=sn.join(", "),na=sn.map(e=>e.replace("100%","100.1%")).join(", "),ia=Le.renderKeyframe(()=>({"0%":{backgroundSize:an},"100%":{backgroundSize:na}}),{}),ln="5px",cn=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`rgba(${o.join(",")}) calc(11rem + ${ln})`,`${rn(o)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${rn(e)} ${ln}`].join(", ")})`].join(", ")}:null,ra=e=>{if(e!=null){const{darkMask:o,darkScroll:n,lightMask:i,lightScroll:r}=e;return{dark:cn(n,o),light:cn(r,i)}}return{dark:null,light:null}},dn=l(oa,({shadow:e})=>{const{dark:o,light:n}=ra(e),i=o==null?null:{[s.darkMode]:o};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:an,paddingRight:s.mainGridSidePaddingRem,overflowX:"auto",nested:{...i,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:ia,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),sa=l(X,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),mn=l("div",{paddingLeft:"1rem"}),aa=l("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),la=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),oo="div",ca={ContentContainer:oo,InnerContainer:mn,OuterContainer:oo,SymbolContainer:oo},pn=e=>{const{children:o,ContentContainer:n,InnerContainer:i,OuterContainer:r,outerContainerProps:a,symbol:c,SymbolContainer:d}={...ca,...e};return t(sa,{as:r,...a},t(aa,{as:d,role:"presentation"},c),t(mn,{as:i},t(la,{as:n},o)))},da=l("pre",{fontSize:"1rem",tabSize:2}),ma=l(dn,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)"}),pa=e=>t(ma,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),ha=l(X,{...s.pre,nested:{[s.darkMode]:{...s[s.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),ua=l("div",{...s.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),ga=({children:e})=>t(pn,{ContentContainer:da,InnerContainer:pa,OuterContainer:ha,symbol:"{",SymbolContainer:ua},e),fa=e=>typeof e=="object"&&e!=null,ya=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),ba=(e,o)=>fa(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&Ci().test(o),Sa=({["aria-label"]:e,children:o,role:n})=>t(ya,{"aria-label":e,role:n},o),xa={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},va={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",ODK:"Open Data Kit (https://getodk.org/)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer",RPC:"Remote Procedure Calls","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board",XSLT:"Extensible Stylesheet Language Transformations"},wa={...xa,...va},hn=lt.resolve(Di(),"./syntax-themes"),[ka,Pa]=await Promise.all([Lo(lt.resolve(hn,"./yi-dark.json")),Lo(lt.resolve(hn,"./yi-light.json"))]),Ca={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},Ea={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},Ta=e=>e.trim().split(/\b\W*\b/).reduce((o,n)=>({...o,...Ea[n]}),{}),Ra=e=>Object.entries(e).reduce((o,[n,i])=>{const r=Ca[n];if(i==null||typeof r!="string")return o;const a=r==="fontStyle"?Ta(i):{[r]:i};return{...o,...a}},{}),[Aa,Ia]=await Promise.all([$o({theme:ka}),$o({theme:Pa})]),Ma=new Set(_i.map(e=>e.id)),Oa=new Set(["ts","tsx","typescript"]),un=e=>e.explanation==null?null:e.explanation.reduce((o,n)=>({...o,...n.scopes.reduce((i,{themeMatches:r})=>({...i,...r.reduce((a,{settings:c})=>({...a,...Ra(c)}),i)}),o)}),{color:e.color}),La=(e,o,n={})=>{const i=un(e),r=un(o),a=r==null?null:{nested:{[s.darkMode]:r}},{content:c}=e;if(i==null&&a==null)return t("span",n,c);const d={...i,...a},m=l("span",d);return t(m,n,c)},$a=dt({paddingRight:"1rem"}),Na={className:$a},ja=(e,o)=>Dt(t($e,{},t("pre",{},t("code",{},...e.reduce((n,i,r)=>{const a=i.map((d,m)=>{const p=Ae(o[r]?.[m]),S=m===i.length-1?Na:{};return La(d,p,S)}),c=r===0?"":`
`;return[...n,c,...a]},[]))))),Ha=e=>{const{lang:o,value:n,meta:i}=e,r=o==="json5"?"json":o;let a;const c=n.replace(/^\n+|\n+$/g,"");if(!Ma.has(r))a=Yi.plainTextRenderer(c,{},{});else{const d=Ia.codeToThemedTokens(c,r),m=Aa.codeToThemedTokens(c,r);a=ja(d,m)}Oa.has(r)&&!i?.includes("ignore"),e.children=[],e.type="html",e.value=a},Ba=()=>o=>{Ht(o,"code",Ha)},Da=({className:e,children:o,...n})=>e==="language-id"?null:e==="code-container"?t(I,n,...jt(o)):t("div",{className:e,...n},...jt(o)),_a=({children:e,...o})=>ba(o,e)?t(Sa,o,e):t("span",o,e),no={components:{div:Da,pre:ga,span:_a},rehypePlugins:[Ri,[Ii,{passThrough:Io.nodeTypes}]],remarkPlugins:[Ba,Ei,sr,Oi,ji]},gn=e=>{const{children:o=t(()=>null,{}),components:n={},rehypePlugins:i=[],remarkPlugins:r=[]}=e,a={...no.components,...n},c=[...no.rehypePlugins,...i],d=[...no.remarkPlugins,...r],m=typeof o=="string"?Ti(o).trim():Dt(o),p=Io.compileSync(m,{rehypePlugins:c,remarkPlugins:d,outputFormat:"function-body",remarkRehypeOptions:{handlers:{abbrDefinition:()=>{}}}});return new Function("options",p.value.toString())({Fragment:I,jsx:t,jsxs:t}).default({components:a})},Ya=Object.entries(wa).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),Fa=e=>[e,Ya].join(`

`),io=([e,...o],{includeAbbreviations:n})=>{const i=typeof e=="string"?[e,...o].join(""):String.raw({raw:e},...o);return n?Fa(i):i},Be=(...e)=>{const o=io(e,{includeAbbreviations:!0});return t($e,{},t(gn,{},o))},fn=(...e)=>{const o=io(e,{includeAbbreviations:!0});return t($e,{},t(gn,{components:{p:I}},o))},Xa=(...e)=>{const o=io(e,{includeAbbreviations:!1});return Li().use(Ai).use(Mi).use(Hi).use($i).use(Ni).processSync(o).value.toString().trim()},ro=Oo.cwd(),nt=e=>e.startsWith("/")?Mo(ro,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):Bi(e)==""?Mo(ro,"./src/pages/",`${e}.tsx`):e,Ct={ALL:"",CURRENT:"--diff-filter=M",FIRST:"--diff-filter=A",FIRST_MERGE:"--full-history --reverse --merges"},it={HASH:"%H",ISO_DATE:"%aI"},za="origin",Ga="main",rt=e=>{const{branch:o=Ga,decode:n,filter:i=Ct.FIRST,format:r,path:a=ro,remote:c=za}=e,{error:d,stdout:m}=Xi.spawnSync("git",["log",...i.split(" "),`--branches=${o}`,`--format=${r}`,`--remotes=${c}`,"--",a]);if(d)throw d;const p=m.toString().trim();return(p===""?[]:p.split(`
`)).map(n)},so=e=>{const o=new Date(e);return isNaN(o.getTime())?null:o},Ua=e=>{const o=nt(e),[n=null]=rt({decode:so,filter:Ct.CURRENT,format:it.ISO_DATE,path:o});return n},Wa=e=>{const o=nt(e),[n=null]=rt({decode:so,format:it.ISO_DATE,path:o});return n},Va=e=>{const o=nt(e),[n=null]=rt({decode:so,filter:Ct.FIRST_MERGE,format:it.ISO_DATE,path:o});return n},ao=e=>{const o=_t.readFileSync(e).toString(),n=zi.createHash("sha1");return n.update(o),n.digest("hex")},qa=e=>{const o=nt(e),[n]=rt({decode:ct,format:it.HASH,path:o});return n??ao(o)},Ka=e=>{const o=nt(e),[n]=rt({decode:ct,filter:Ct.FIRST_MERGE,format:it.HASH,path:o});return n??ao(o)},Ja={height:630,width:1200},Za=Oo.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",Qa=Fi({alg:"sha1",coerce:!0,sort:!0,trim:!0}),el=(e,o,n=ta.PNG,i=Ja)=>{const r=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=Qa.hash(o),c=lt.resolve(r,`${a}.${n}`),d=c.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:c,imageType:n,publicPath:d,...i}}},st={IMMUTABLE:"immutable",IMMUTABLE_MERGE:"immutable-merge",MUTABLE:"mutable"},yn=(e,o,n,i,r=[z.TECHNOLOGY])=>{const a=i===st.MUTABLE,c=i===st.IMMUTABLE_MERGE,d=o.replace(/^file:(\/\/)?/,""),m=a?ao(d):c?Ka(e):qa(e),p={created:(c?Va(e):Wa(e))??_t.statSync(d).ctime,updated:Ua(e)??_t.statSync(d).mtime},y=el(o,a?{importURL:o,stat:p,topics:r}:{hash:m,importURL:o});return{hash:m,host:Za,path:e,social:y,stat:p,title:n,topics:r}},bn=()=>t(I,null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),tl=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t(bn,null))),ol=1.6180334,nl=4,Sn=xe(ol*5,6),xn=.75,We=.15,il=1.5,De=ke("6rem",`${100/Sn}vw`,"10rem"),rl=l(X,{height:De,position:"relative",width:"100%"}),sl=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),al=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85}),lo={INLINE:"inline",NONE:"none"},Et={xPadding:nl,xScale:Sn,yOffset:xn,yPadding:We,yScale:il},Tt=e=>{const{className:o,defsUsage:n=lo.INLINE,hash:i,height:r,rawSVG:a=!1,styleRenderer:c=Le,title:d,topics:m=[],width:p}=e,S=m.length<2?[...m,z[ht]]:m,y=P=>`${P}-${i}`,{segmentPaths:g,xMax:x,yMax:b}=ea({...Et,hash:i}),k=b*xn,T=b*We/10.24,E=T*.75,O=t(sl,{className:Wo,height:r,preserveAspectRatio:"none",viewBox:[0,0,x,b].join(" "),width:p},t("title",null,"Generated art for the page or post titled ",t("i",null,d),", with the content or commit hash ",i," ",S.length>0?[", and the topics: ",S.map(String).join(", ")]:null),t("defs",null,n===lo.INLINE?t(bn,null):null,t("filter",{id:y("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:E,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:T,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:y("blurOverlayClip")},t("rect",{x:"0",width:x,y:k,height:b})),t("filter",{id:y("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:E}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:T})),t("filter",{id:y("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:E}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:T}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:T})),t("g",{id:y("blobs")},g.map((P,R)=>{const v=R%S.length,L=S[v],G=c.renderRule(()=>({...s.topicColors[L]}),Object.keys);return t(al,{key:P,className:G,d:P,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${b*We})`,`scale(1, ${1-We*2})`].join(" "),filter:`url(#${y("blur")})`},t("use",{href:`#${y("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${y("blurOverlayClip")})`,filter:`url(#${y("blurOverlay")})`,transform:[`translate(0, ${b*We})`,`scale(1, ${1-We*2})`].join(" ")},t("use",{href:`#${y("blobs")}`,mask:"url(#softVerticalFade)"})));return a?t("svg",{width:p,height:r,viewBox:`0 0 ${p} ${r}`},O):t(rl,{className:o},O)},ll="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",cl=({fill:e,topic:o})=>{const n=s.topicColors[o];return{...n,...e?{fill:"currentcolor",fillOpacity:.05,mask:"url(#curvesVerticalFade)",strokeWidth:0,nested:{...n.nested,[s.darkMode]:{fillOpacity:.15}}}:{fill:"none",strokeWidth:1,stroke:"currentcolor"},transition:ll,vectorEffect:"non-scaling-stroke"}},dl=({fill:e,index:o,topic:n,...i})=>t("path",{...i}),vn=l(dl,cl),ml=l("svg",{overflow:"visible",padding:"1rem"}),pl=20,hl={xMax:he,xScale:1,xShift:0,yMax:he,yScale:1,yShift:0},ul=({className:e,hexPoints:o,points:n,pointSize:i,scaleOptions:r,segments:a,topics:c,...d})=>{const{xScale:m,xShift:p,xRange:S=m*(he+p*2),yMax:y,yShift:g,yScale:x,yRange:b=x*(y+g*2)}={...hl,...r},k=pl*2,T=d.height??b+k,E=d.width??S+k,_=({x:P,y:R})=>{const v=xe((P+p)/S*100,4),L=100-xe((R-g)/b*100,4);return{cx:v,cy:L}},O=a.map(P=>{const[R,v,L]=P,{x:G}=R,{y:Z}=v,{x:N}=L,ae=N-G,ie=ae===0?0:Math.max(Z/ae*eo,Qt);return{cubicPoints:P.reduce((U,W,q)=>{if(q===0)return U;const ee=to({index:q,point:W,points:P,smoothing:ie,xScale:m,yScale:x});return[...U,ee]},[]),segment:P}});return t(ml,{className:e,height:T,width:E,preserveAspectRatio:"none",viewBox:`0 0 ${E} ${T}`},t("defs",null,t("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.15","stop-color":"white","stop-opacity":".95"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),t("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),O.map(({cubicPoints:P,segment:R},v)=>{const[L,G,Z]=R,N=P.map(([Q,U],W)=>[W===0?L:G,Q,U,W===0?G:Z]);return t(I,null,t(()=>t(I,null,N.map(Q=>{const U=Q.map((q,ee)=>{const{cx:re,cy:A}=_(q),Y=re/100*E,f=A/100*T;return`${ee===0?"M ":ee===1?"C ":""} ${Y},${f}`}).join(" "),W=Ae(c[v%c.length]);return t(vn,{d:U,index:v,topic:W})})),null),t(()=>{const Q=N.map((W,q)=>W.map((re,A)=>{if(q>0&&A===0)return"";const{cx:Y,cy:f}=_(re),F=Y/100*E,Pe=f/100*T;return`${A===0?"M ":A===1?"C ":""} ${F},${Pe}`}).join(" ")).join(" "),U=Ae(c[v%c.length]);return t(vn,{d:Q,fill:!0,index:v,topic:U})},null))}))},gl=({className:e="",hash:o,height:n,renderType:i,StylesProvider:r=$e,styleRenderer:a=Le,topics:c=[],width:d})=>{const m=xt(o),p=vt(o,m),{xPadding:S,xScale:y,yPadding:g,yScale:x}=Et,b=i==="meta",k=b?0:S,T=b?0:g,E=k/2,_=T/2,O={xScale:y,xShift:E,yScale:x,yShift:_},R=St(p,({x:f},{x:F})=>f===F?0:f>F?1:-1).map(f=>wt(f,O)),v=R.map(f=>Ae(m[R.indexOf(f)])),L=(he+k)*y,G=kt({points:R,xMax:L,xScale:y,yScale:x}),Z=Pt({segments:G,xMax:L,xScale:y,yScale:x}),N=b?{"& path":{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,ae=De,ie="100%",Q=f=>typeof f=="number"?`${f}px`:f,U=(f,F)=>typeof f=="number"?f*F:f,W=b?U(n??ae,.95):De,q=b?U(d??ie,.95):"100%",ee=b&&n!=null?U(n,.95):n,re=b&&d!=null?U(d,.95):d,A=a.renderRule(()=>({gridColumn:"1 / -1",height:Q(W),padding:"0 !important",width:Q(q),nested:{...N}}),Object.keys),Y=b?e:`${e} ${A}`;return t(r,null,t(ul,{className:Y,height:ee,hexPoints:v,points:R,scaleOptions:O,segments:Z,topics:c,width:re}))},fl=[null,"January","February","March","April","May","June","July","August","September","October","November","December"],yl=l("time",{nested:{[s.darkMode]:{...s[s.darkMode].deemphasize}},...s.deemphasize}),_e={DEFAULT:"DEFAULT",META:"META",SHORT:"SHORT"},Ve=({date:e,mode:o=_e.DEFAULT,...n})=>{const i=e.getMonth()+1,r=e.getFullYear(),a=o===_e.SHORT?`${i}/${r}`:o===_e.META?"":[e.getDate(),fl[i],r].join(" ");return t(yl,{...n,datetime:e.toISOString()},a)},bl=l("a",{...s.topicTagLink(s.topicTagIdentifier.className)}),Sl=l("span",{...s.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),xl=({className:e,link:o=!0,topic:n})=>{const i=Vr(n),r=Ut(n);if(i==null||typeof r!="string")throw new Error(`Unexpected topic: ${String(r)}`);const a=o?bl:"span",c=o?{href:`${tt}topics/${i}/`}:{};return t(a,{className:[e,s.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...c},t(Sl,{className:s.topicTagIdentifier.className},r))},wn=l(xl,e=>({...s.topicTagOuter,...s.topicColors[Ut(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),vl=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),wl=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),kn=({className:e,link:o=!0,topics:n})=>t(vl,{className:e},n.map(i=>typeof i=="string"?t(wl,{key:Gr(i)},t(wn,{link:o,topic:i})):null)),kl=e=>e.reduce((o,n)=>{const i=n.stat.created.getFullYear(),r=o[i]??[];return{...o,[i]:[...r,n]}},{}),Pl=l(X,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),Cl=l(X,{...s.blog.listing.item,minHeight:De,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),El=l(X,{paddingTop:`calc(${De} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),Tl=l(X,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),Rl=l("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),Al=dt({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),Il=l("h2",{...s.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),Ml=l(Ve,{padding:"0 0.5rem 0.125rem 0"}),Ol=l(kn,{gridColumn:"3 / 3"}),Ll=l("div",{...s.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),$l=l("a",{fontSize:"0.875em"}),Pn={DATE:"date"},Cn={ASC:"asc",DESC:"desc"},Nl=({order:e=Cn.DESC,posts:o,sort:n=Pn.DATE})=>{const i=o.slice().sort((a,c)=>e===Cn.DESC&&n===Pn.DATE?a.stat.created>c.stat.created?-1:1:0),r=kl(i);return t(I,null,Object.entries(r).map(([a,c])=>t(I,{key:a},t(Pl,null,c.map(d=>{const{CustomArt:m=Tt,description:p,hash:S,path:y,stat:{created:g},title:x,topics:b}=d;return t(Cl,{key:y},t(El,{as:"a",href:y},t(Rl,null,t(m,{defsUsage:lo.NONE,hash:S,padded:!0,renderType:"listing",title:x,topics:b})),t(Tl,null,t(Il,{className:Al},x),t(Ml,{date:g}))),t(Ol,{link:!1,topics:b}),t(Ll,{className:s.blog.listing.descriptionIdentifier},p),t("p",null,t($l,{href:y},"Read more\u2026")))})))))},jl=l(X,{...s.description,nested:{...s.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Hl=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Bl=l("div",{fontSize:"0.889em"}),Dl=({as:e="section",title:o,...n})=>t(jl,{as:e,itemprop:"description"},o?t(Hl,null,o):null,t(Bl,{...n})),_l=l(X,{paddingTop:"1rem"}),Yl=l("h1",{marginBottom:"0.25rem"}),Fl=l(X,{paddingBlock:"1rem"}),En=e=>{const{children:o,CustomArt:n,description:i,descriptionRaw:r,hash:a,stat:{created:c},title:d,topics:m}=e;return t(I,null,t(Vo,{meta:{...e,description:r}}),t(Zo,{as:"article",meta:e},t(Fl,null,n==null?t(Tt,{hash:a,title:d,topics:m}):t(n,{hash:a,renderType:"post",StylesProvider:$e,title:d,topics:m}),t(_l,null,t(Yl,null,d),t(Ve,{date:c,itemprop:"datePublished"}),t(kn,{link:!1,topics:m}))),t(Dl,null,i),o))},Tn={IMMUTABLE:st.IMMUTABLE,IMMUTABLE_MERGE:st.IMMUTABLE_MERGE},Rn=e=>{const{description:o,importURL:n,path:i,redirect:r,title:a,topics:c,type:d=Tn.IMMUTABLE_MERGE}=e,{CustomArt:m,hash:p,host:S,social:y,stat:g}=yn(i,n,a,d,c),x=Xa`${Dt(t(I,null,o))}`;return Promise.resolve({CustomArt:m,description:o,descriptionRaw:x,hash:p,host:S,path:i,redirect:r,social:y,stat:g,title:a,topics:c})},Xl=({date:e,...o})=>e==null?null:t(Ve,{...o,date:e}),zl=l("span",{nested:{[s.darkMode]:{...s[s.darkMode].deemphasize}},...s.deemphasize}),Gl=/^(\d{4})-(\d{2})$/,An=e=>{if(e==null)return null;const o=Gl.exec(e);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,i]=o;return new Date(`${n}-${i}-01T00:00:00`)},In=l("div",{fontSize:"0.88889em",whiteSpace:"nowrap",nested:{"& time":{fontSize:"inherit"}}}),Mn=({className:e="",range:[o,n]})=>{const i=An(o),r=An(n??null);return o==n?t(In,{className:e},t(Ve,{date:i,itemprop:"endDate",mode:_e.SHORT})):t(In,{className:e},t(Ve,{date:i,itemprop:"startDate",mode:_e.SHORT}),t(zl,null,"-"),t(Xl,{date:r,itemprop:"endDate",mode:_e.SHORT}))},Ul=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),Wl=e=>{const o=Array();return e.role===M.CREATOR&&o.push(e.description),e.summary!=null&&o.push(e.summary),o.length===0&&o.push(e.description),t(Ul,null,o.map(n=>Be(n)))},On="@media screen and (min-width: 41.666rem)",Ln=l("div",{display:"block",margin:0,padding:0,nested:{"& > *":{containerType:"inline-size",paddingTop:"1rem"},[On]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}},[s.print]:{display:"none"}}}),Vl=l("div",{display:"grid",rowGap:"0.325rem",nested:{"& > *":{margin:0}}}),co="1.0625rem",ql=l("h3",{fontFamily:s.prose.fontFamily,fontWeight:500,fontSize:co,paddingLeft:0,textIndent:0,nested:{[s.print]:{fontSize:"1rem"}}}),Kl=l("a",{color:"var(--color-prose)",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"},"&:hover, &:focus":{color:"var(--color-prose)",textDecoration:"underline",textDecorationColor:"var(--color-prose-decoration, currentColor)"}}}),Jl=l("a",{alignSelf:"baseline",display:"block",flexShrink:0,height:`calc(${co} * ${s.headingLineHeight})`,lineHeight:`calc(${co} * ${s.headingLineHeight*1.5})`,padding:"0 0.5rem",zIndex:1,nested:{"& svg":{width:"1em"},[On]:{paddingLeft:0},[s.print]:{display:"none"}}}),Zl=l("div",{flexGrow:1,paddingTop:"0.05556rem",nested:{"& a":{fontWeight:"inherit"}}}),Ql=l("div",{alignItems:"start",display:"flex",padding:"1rem 0 0"}),mo=({project:{description:e,end:o,repo:n,role:i,title:r,start:a,summary:c}})=>t(Ql,null,t(Jl,{href:n},t(Zt,null)),t(Zl,null,t(Vl,null,t(ql,null,t(Kl,{href:n},r)),t(Mn,{range:[a,o]})),t(Wl,{role:i,description:e,summary:c??null}))),ec=l("div",{fontSize:"0.8889em",paddingLeft:"0.25rem"}),tc=l("aside",{...s.aside,fontSize:"1rem",nested:{[s.darkMode]:{...s[s.darkMode].aside}}}),oc=l("div",{...s.asideBlock.symbol,fontSize:ke("2.2em","7vw","3em"),marginLeft:"-1.25rem",marginTop:"-1.25rem",transform:"rotate(-20deg)",nested:{...s.asideBlock.symbol.nested,[s.darkMode]:{...s.asideBlock.symbol.nested[s.darkMode],fontWeight:"bolder"}}}),$n=({children:e})=>t(pn,{ContentContainer:ec,OuterContainer:tc,symbol:"#",SymbolContainer:oc},e),nc=l("span",{...s.visiblyHidden}),po=e=>{const{min:o,max:n,semantics:i="value"}=e;return r=>{if(r<o||r>n)throw new Error(`Expected ${i} to be in range ${o}\u2013${n}. Got: ${r}`)}},ic=po({min:0,max:1,semantics:"alpha"}),ho=e=>po({min:0,max:100,semantics:e}),rc=ho("percentage"),sc=ho("lightness"),ac=ho("chroma"),lc=po({min:0,max:360,semantics:"hue (degrees)"}),uo=(e,o=rc)=>(o(e),`${e}%`),cc=e=>(lc(e),`${e}deg`),dc=e=>(ic(e),` / ${uo(e*100)}`),Nn=e=>{const{lightness:o,chroma:n,hue:i,alpha:r=1}=e,a=uo(o,sc),c=uo(n,ac),d=cc(i),m=dc(r);return`oklch(${a} ${c} ${d}${m})`},mc=e=>{const{darkLightness:o,...n}=e,i={...n,lightness:o},r=Nn(n),a=Nn(i);return`light-dark(${r}, ${a})`};import.meta.env=Ft;const go={get x(){throw new Error("Failed to access MISSING_POINT.x")},get y(){throw new Error("Failed to access MISSING_POINT.y")}},Rt=(...e)=>["https://github.com/eyelidlessness/eyelidlessness.github.io",...e].join("/"),jn={blame:Rt("blame/9216eb05cd375fccc7e9b06a98bb9c1b110a97d0/src/pages/blog/2021/02","what-the-art-p2-constraints/index.tsx#L111-L112"),artBoilerplate:Rt("blob/main/src/lib/art/math.ts"),bezierCurves:"https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B%C3%A9zier_curves",gitBoilerplate:Rt("blob/main/src/lib/git/log.ts"),goldenRatio:"https://en.wikipedia.org/wiki/Golden_ratio",microsite:"https://github.com/natemoo-re/microsite",originMain:Rt("tree/main"),p1:`${tt}2021/02/what-the-art-p1-why/`,p2:`${tt}2021/02/what-the-art-p2-constraints/`,resume:vs,sha1:"https://en.wikipedia.org/wiki/SHA-1"},pc=Object.entries(jn).map(([e,o])=>`[${e}]: ${o}`).join(`
`),be=(...e)=>{const[o,...n]=e,i=String.raw({raw:o},...n);return Be(i,`

`,pc)},Hn=l("h3",{fontFamily:"inherit",fontSize:"0.889em",fontWeight:700,margin:0}),Bn=16,hc=40,Dn=s.baseFontSizeRange.minEm,uc=s.baseFontSizeRange.maxEm,qe=Bn*uc,_n=qe/Dn,Yn=e=>e*qe/2,Fn=Yn(hc),gc=l(X,{margin:"0.5rem 0 2rem"}),fc=l("svg",{display:"block",fontSize:`${Bn*Dn}px`,maxWidth:"28rem",width:"100%"}),Xn=({className:e,children:o,height:n,width:i})=>t(fc,{className:e,viewBox:`0 0 ${i} ${n}`},o),yc=({children:e,className:o,height:n=qe,width:i=Fn})=>t(gc,{className:o},t(Xn,{height:n,width:i},e)),ne="0123456789".split("").map(e=>{const n=Number(e)*36,i=r=>mc({lightness:r.lightness,chroma:r.chroma??100,hue:n,darkLightness:r.darkLightness});return{emphasize:i({lightness:93,darkLightness:34,chroma:20}),hover:i({lightness:97,darkLightness:30,chroma:10}),plot:i({lightness:64,darkLightness:74,chroma:60}),selected:i({lightness:71,darkLightness:71,chroma:60}),x:i({lightness:54,darkLightness:94,chroma:70}),y:i({lightness:44,darkLightness:84,chroma:70})}}),zn=l("text",{fill:"currentcolor",fontFamily:s.monospaceFont}),bc=({className:e,hash:o})=>t(I,null,t(Hn,null,"Result:"),t(yc,{className:e},t(zn,{textLength:Fn,x:"0",y:_n},o))),Sc=l(bc,{color:ne[9]?.x,marginTop:"0.5rem"}),xc=Se().className,Ke=({className:e="",...o},...n)=>({...o,className:[e,xc,...n].join(" ")}),Gn=Se().className,vc=({children:e,className:o="",coordinate:n,index:i,padLength:r,sortedIndex:a,toggleClass:c,...d})=>t(zn,{...Ke(d,o,Gn)},typeof e=="string"?e.padStart(r," "):e),Ne=l(vc,({coordinate:e,index:o,sortedIndex:n})=>({"--sorted-color":ne[n]?.[e],color:ne[o]?.[e],whiteSpace:"pre"})),fo=Se().className,wc=({children:e,index:o,sortedIndex:n,toggleClass:i,...r})=>t("rect",{...Ke(r,fo)},e),kc=l(wc,({index:e,sortedIndex:o})=>({"--selected-color":ne[e]?.selected,"--selected-sorted-color":ne[o]?.selected,"--sorted-color":ne[o]?.hover,color:ne[e]?.hover,fill:"currentcolor",opacity:0,transition:"opacity 0.1s ease-in-out",zIndex:-1})),yo=Se().className,Pc=({children:e,index:o,isControlPoint:n,isSegment:i,pointSize:r,sortedIndex:a,sortedX:c,sortedY:d,sortedTranslateXPercent:m,sortedTranslateyPercent:p,xShift:S,yShift:y,...g})=>t("circle",{...Ke(g,yo)},e),Un="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",Cc=l(Pc,({index:e,isControlPoint:o,isSegment:n,sortedIndex:i,sortedTranslateXPercent:r,sortedTranslateyPercent:a})=>o?{"--emphasized-color":"#666","--emphasized-stroke-width":0,color:"transparent",fill:"currentcolor",stroke:"currentcolor",strokeWidth:0,nested:{[s.darkMode]:{"--emphasized-color":"#ccc",color:"transparent"}}}:n?{"--emphasized-color":ne[e]?.plot,color:"#dadada",fill:"currentcolor",stroke:ne[e]?.plot,strokeWidth:0,transition:Un,nested:{[s.darkMode]:{color:"#666"}}}:{"--emphasized-color":ne[e]?.plot,"--emphasized-sorted-color":ne[i]?.plot,"--unsorted-transform":`translate(${[`${r}%`,`${a}%`].join(",")})`,"--sorted-color":ne[i]?.plot,"--sorted-stroke":ne[i]?.emphasize,color:ne[e]?.plot,fill:"currentcolor",paintOrder:"stroke fill",stroke:ne[e]?.emphasize,strokeWidth:0,transition:Object.entries({fill:"0.1s",stroke:"0.1s","stroke-width":"0.1s",transform:"0.2s"}).map(([c,d])=>`${c} ${d} ease-in-out`).join(", ")}),Ec=(e,o)=>o==null?{color:ne[e]?.plot,nested:{[s.darkMode]:{color:ne[e]?.plot}}}:s.topicColors[o],Wn=({fill:e,index:o,topic:n})=>({...Ec(o,n),...e?{fill:"currentcolor",fillOpacity:.15,mask:"url(#curvesVerticalFade)",strokeWidth:0}:{fill:"none",strokeWidth:2,stroke:"currentcolor"},transition:Un,vectorEffect:"non-scaling-stroke"}),Tc=({fill:e,index:o,topic:n,...i})=>t("line",{...i}),Vn=l(Tc,Wn),Rc=({fill:e,index:o,topic:n,...i})=>t("path",{...i}),qn=l(Rc,Wn),Kn=({exampleId:e,index:o,suffix:n,type:i})=>i==="radio"?`example-${e}-${o}-${n}-choice`:`example-${e}-${n}-choice`,Jn=e=>{const{checked:o,className:n,exampleId:i,suffix:r,type:a,value:c}=e,d=o?{checked:o}:{},m=Kn(e);return t(nc,{...d,as:"input",className:n,id:m,name:`example-${i}-${r}`,type:a,value:c})},Ac=({pointSize:e,...o})=>t(Jn,{...o}),Ic=l(Ac,({exampleId:e,index:o,pointSize:n,suffix:i})=>({nested:{[`&:checked ~ * #example-${e}-${o}-${i}`]:{strokeWidth:n*2.5},[`&:checked ~ * .example-${e}-${o}-${i}`]:{color:"var(--emphasized-color)",strokeWidth:"var(--emphasized-stroke-width, 3)"},[`&:checked ~ * .example-${e}-${o}-line`]:{},[`&:checked ~ * [for="example-${e}-${o}-${i}-choice"] .${fo}`]:{opacity:1,color:"var(--selected-color)"},[`&:checked ~ * [for="example-${e}-${o}-${i}-choice"] text`]:{color:"#fff",nested:{[s.darkMode]:{color:"rgba(255, 255, 255, 0.9)"}}}}})),Mc=l("g",{nested:{"&:hover rect":{opacity:.5}}}),Oc=({hash:e})=>{const o=Number.parseInt(e,16);if(isNaN(o))throw new ot(e);const n=o.toExponential(2),[i,r]=n.split(/e[-+]/);return t(I,null,i,r==null?null:t("sup",null,r))},Lc=l(X,{...s.pre,marginBottom:"1.5rem",nested:{[s.darkMode]:{...s[s.darkMode].pre}}}),$c=({children:e,...o})=>t(dn,{...o,shadow:{darkMask:[0,0,0,1],darkScroll:[230,179,213,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]}},e),Nc=l("div",{alignItems:"stretch",display:"flex",nested:{"&:after":{content:'""',backgroundImage:`linear-gradient(${["to left","rgba(255,255,255,1)","rgba(255,255,255,1) 3rem","rgba(255,255,255,0) 4rem"].join(", ")})`,backgroundSize:"4rem 100%",boxShadow:"2rem 0 0 #fff",display:"block",flexShrink:0,marginLeft:"auto",order:10,width:"2rem"},[s.darkMode]:{nested:{"&:after":{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,1)","rgba(0,0,0,1) 3rem","rgba(0,0,0,0) 4rem"].join(", ")})`,boxShadow:"2rem 0 0 #000"}}}}}),Zn=Se().className,jc=({children:e,sortedIndex:o,...n})=>t("label",{...Ke(n,Zn)},e),Hc=l(jc,({sortedIndex:e})=>({"--sorted-index":e,display:"inline-block",flexShrink:0,paddingBottom:"0.5rem",paddingRight:"1rem",paddingTop:"0.5rem",transition:"order 0.05s ease-in-out"})),Bc=l("span",{...s.toggleSwitch.container.off,alignItems:"center",backgroundColor:"currentcolor",border:"4px solid currentcolor",borderRadius:"16px",boxSizing:"content-box",display:"inline-flex",height:"24px",padding:0,width:"48px",verticalAlign:"middle"}),Qn=Se().className,Dc=({children:e,...o})=>t(Bc,{...o,className:Qn},e),_c=l("span",{...s.toggleSwitch.button,borderRadius:"12px",display:"inline-block",height:"24px",width:"24px",verticalAlign:"middle"}),Yc=l("label",{alignItems:"center",display:"inline-flex",justifySelf:"start"}),Fc=l("span",{fontSize:"0.8889rem",marginRight:"0.5rem"}),Xc=Se().className,zc=({children:e,exampleId:o,...n})=>{const r=Kn({exampleId:o,suffix:"sort",type:"checkbox"}),a=Ke({...n,for:r},Xc);return t(Yc,{...a},t(Fc,null,"Enable sorting"),t(Dc,null,t(_c,null)))},Gc=({sortIndexes:e,toggleClass:o,...n})=>t(Jn,{...Ke(n,o),type:"checkbox"}),Uc=l(Gc,{nested:{[`&:checked ~ * .${Gn}`]:{color:"var(--sorted-color)",stroke:"var(--sorted-stroke)"},[`&:checked ~ * .${fo}`]:{"--selected-color":"var(--selected-sorted-color)",color:"var(--sorted-color)"},[`&:checked ~ * .${Zn}`]:{order:"var(--sorted-index)"},[`& ~ * .${yo}`]:{transform:"var(--unsorted-transform)"},[`&:checked ~ * .${yo}`]:{"--emphasized-color":"var(--emphasized-sorted-color)",color:"var(--sorted-color)",stroke:"var(--sorted-stroke)",transform:"translate(0, 0)"},[`&:checked ~ * .${Qn}`]:{...s.toggleSwitch.container.on,justifyContent:"flex-end"}}}),Wc=l("div",{alignItems:"center",display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}),ei=e=>typeof e=="number"?`${e}px`:e,Vc=l(Xn,({height:e,width:o})=>({height:ei(e),overflow:"visible",width:ei(o)})),qc=l(X,{position:"relative"}),ti=l("svg",{overflow:"visible",padding:"1rem"}),At=13,bo=l("text",{...s.visualization.plot.axis,fontFamily:s.monospaceFont,fontSize:`${At}px`,fill:"currentcolor"}),So=20,xo={xMax:he,xScale:1,xShift:0,yMax:he,yScale:1,yShift:0},Kc=16,Jc=128,oi=Array.from(Xs),vo=oi.map(e=>parseInt(e,16)),wo=Math.min(...vo),Zc=Math.max(...vo)-wo,Qc=oi.reduce((e,o,n)=>{const i=vo[n]??NaN,r=xe((i-wo)/Zc*(Jc-Kc)+wo,2);return{...e,[o]:r}},{}),ko=({className:e,exampleId:o,hexPoints:n,points:i,pointSize:r=6,renderAxis:a=!0,renderCurves:c,renderSegments:d=!1,scaleOptions:m,segments:p,sortIndexes:S,sortToggleClass:y,topics:g,...x})=>{const{xScale:b,xShift:k,xRange:T=b*(he+k*2),yMax:E,yShift:_,yScale:O,yRange:P=O*(E+_*2)}={...xo,...m},R=So*2,v=x.height??P+R,L=x.width??T+R,G=0,Z="100%",N=0-At,ae="100%",ie=he.toString(16),Q=Qo.toString(16),U=Q.padStart(2,Q),W=n.map(({x:C,y:K},se)=>{if(typeof r=="number")return r;const ge=(se%2==0?C:K)[0];return typeof r=="number"?r:Qc[ge]}),q=typeof r=="number"?null:W.map(C=>C*.666+4),ee=q?.map((C,K)=>`hash-plot-blur-${o}-${K}`),re=q==null?null:t("defs",null,q.map((C,K)=>t("filter",{id:ee?.[K]},t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:C})))),A=a?t(I,null,t(bo,{x:N,y:Z,transform:`translate(0, ${At})`},U),t(bo,{x:N,y:G},ie),t(bo,{x:ae,y:Z,transform:`translate(0, ${At})`},ie)):null,Y=r,f=({x:C,y:K},se)=>{const H=S[se]??NaN,{x:ge,y:Ee}=i[H]??go,ce=xe((C+k)/T*100,4),J=100-xe((K-_)/P*100,4),le=xe((ge+k)/T*100,4),B=100-xe((Ee-_)/P*100,4),fe=0-xe(ce-le,4),ve=0-xe(J-B,4),we=W[se]??Y,me=ee?.[se],Te=me==null?{}:{filter:`url(#${me})`};return{cx:ce,cy:J,filterId:me,filterProps:Te,pointSize:we,sortedCx:le,sortedCy:B,sortedTranslateXPercent:fe,sortedTranslateyPercent:ve}},F=({index:C,isControlPoint:K=!1,point:se,pointSize:H})=>{const{cx:ge,cy:Ee,filterProps:ce,pointSize:J,sortedCx:le,sortedCy:B,sortedTranslateXPercent:fe,sortedTranslateyPercent:ve}=f(se,C),we=Boolean(d||c),me=S[C]??NaN,Te=we?{className:`example-${o}-${C}-point`}:{className:[`example-${o}-${C}-point`,`example-${o}-${me}-sorted-point`].join(" "),id:`example-${o}-${C}-point`};return t(Cc,{...ce,...Te,cx:`${ge}%`,cy:`${Ee}%`,index:C,isControlPoint:K,isSegment:we,pointSize:H??J,r:H??J,sortedIndex:me,sortedX:le-se.x,sortedY:B-B,sortedTranslateXPercent:fe,sortedTranslateyPercent:ve,toggleClass:y,xShift:So,yShift:So})},Pe=d?null:i.map((C,K)=>t(F,{index:K,point:C})),Ce=d?p?.map(([C,K,se],H)=>{const{cx:ge,cy:Ee}=f(C,H),{cx:ce,cy:J}=f(K,H),{cx:le,cy:B}=f(se,H),fe=g?.[H%g.length];return t("g",null,t(F,{index:H,point:C}),t(F,{index:H,point:K}),t(F,{index:H,point:se}),t(Vn,{className:`example-${o}-${H}-line`,index:H,topic:fe,x1:`${ge}%`,x2:`${ce}%`,y1:`${Ee}%`,y2:`${J}%`}),t(Vn,{className:`example-${o}-${H}-line`,index:H,topic:fe,x1:`${ce}%`,x2:`${le}%`,y1:`${J}%`,y2:`${B}%`}))}):null,V=()=>{if(p==null||c==null)return{curvePoints:null,renderedCurves:null};let C;c==="first"?C=p.slice(0,1):C=p;const K=C.map(J=>{const[le,B,fe]=J,{x:ve}=le,{y:we}=B,{x:me}=fe,Te=me-ve,Eo=Te===0?0:Math.max(we/Te*eo,Qt);return{cubicPoints:J.reduce((Ie,Me,je)=>{if(je===0)return Ie;const Fe=to({index:je,point:Me,points:J,smoothing:Eo,xScale:b,yScale:O});return[...Ie,Fe]},[]),segment:J}}),se={overflow:"visible"},H=l(c==="only"?ti:"svg",se),ge=c==="only"?{className:e}:void 0,Ee=c==="only"?v:"100%",ce=c==="only"?L:"100%";return{curvePoints:t(I,null,K.map(({cubicPoints:J,segment:le},B)=>{const[fe,ve,we]=le;return t("g",null,t(F,{index:B,point:fe,pointSize:4}),t(F,{index:B,point:ve,pointSize:4}),t(F,{index:B,point:we,pointSize:4}),J.map(([me,Te])=>t(I,null,t(F,{index:B,isControlPoint:!0,point:me,pointSize:3}),t(F,{index:B,isControlPoint:!0,point:Te,pointSize:3}))))})),renderedCurves:t(H,{...ge,height:Ee,width:ce,preserveAspectRatio:"none",viewBox:`0 0 ${L} ${v}`},t("defs",null,t("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),t("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),K.map(({cubicPoints:J,segment:le},B)=>{const[fe,ve,we]=le,me=J.map(([Ye,Ie],Me)=>[Me===0?fe:ve,Ye,Ie,Me===0?ve:we]);return t(I,null,t(()=>t(I,null,me.map(Ye=>{const Ie=Ye.map((je,Fe)=>{const{cx:Lt,cy:Qe}=f(je,B),$t=Lt/100*L,Nt=Qe/100*v;return`${Fe===0?"M ":Fe===1?"C ":""} ${$t},${Nt}`}).join(" "),Me=g?.[B%g.length];return t(qn,{d:Ie,index:B,topic:Me})})),null),t(()=>{const Ye=me.map((Me,je)=>Me.map((Lt,Qe)=>{if(je>0&&Qe===0)return"";const{cx:$t,cy:Nt}=f(Lt,B),To=$t/100*L,mi=Nt/100*v;return`${Qe===0?"M ":Qe===1?"C ":""} ${To},${mi}`}).join(" ")).join(" "),Ie=g?.[B%g.length];return t(qn,{d:Ye,fill:!0,index:B,topic:Ie})},null))}))}},{curvePoints:ue,renderedCurves:Ze}=V();return c==="only"?Ze:t(ti,{className:e,height:v,width:L},re,A,Pe,Ce,ue,Ze)},ed=l(X,{marginBottom:"1rem"}),td=l(ko,{gridColumn:"1 / -1"}),od=l(ko,{width:"32rem"}),It=({exampleId:e,hexPoints:o,plotPointSize:n=6,points:i,renderAxis:r,renderCurves:a,renderScaled:c=!0,renderSegments:d,scaleOptions:m=xo,toggleSorting:p})=>{const S=c?X:I,y=c?td:od,g=Boolean(a??d),b=g?qe*3:!g&&c?qe*5:qe*4,k=_n,T=k*2.5,E=k*3.5,_=k*4.5,O={...xo,...m},P=i.map(A=>wt(A,O)),R=St(P,(A,Y)=>Number(A.x)===Number(Y.x)?0:Number(A.x)>Number(Y.x)?1:-1),v=P.map((A,Y)=>p?R.indexOf(A):Y),L=p?o:R.map(A=>Ae(o[P.indexOf(A)])),G=p?i:R,Z=p?P:R,N=Se().className,{xScale:ae,xShift:ie,yScale:Q}=O,U=ie*2,W=(he+U)*ae,q=kt({points:Z,xMax:W,xScale:ae,yScale:Q}),ee=Pt({segments:q,xMax:W,xScale:ae,yScale:Q}),re={...O};return t(S,null,t(qc,null,G.map((A,Y)=>t(Ic,{checked:Y===0,exampleId:e,pointSize:n,index:Y,suffix:"point",type:"radio"})),p?t(Uc,{exampleId:e,sortIndexes:v,suffix:"sort",toggleClass:N}):null,t(Wc,null,t(Hn,null,"Result:"),p?t(zc,{exampleId:e}):null),t(ed,null,t(y,{exampleId:e,hexPoints:L,points:G,renderAxis:r,renderCurves:a,renderSegments:d,scaleOptions:re,segments:ee,sortIndexes:v,sortToggleClass:N})),t(Lc,null,t($c,null,t(Nc,null,L.map(({x:A,y:Y},f)=>{const{x:F,y:Pe}=G[f]??go,{x:Ce,y:V}=Z[f]??go,ue=[A,Y,F,Pe,...c?[Ce,V]:[]],Ze=String(he).length,C=g?Ze:Math.max(Ze,...ue.map(B=>String(B).length)),K=o.length,se=Yn(K),H=1/K*se,ge=C*H,Ee=ge*2+H,ce=ge+H,J=H/2,le=Ee+J*2;return t(Hc,{className:`point-${f}`,for:`example-${e}-${f}-point-choice`,sortedIndex:v[f]??NaN},t(Vc,{height:b,width:le},t(Mc,null,t(kc,{index:f,height:b,rx:3,ry:3,width:le,x:0-J,y:0,sortedIndex:v[f]??NaN,toggleClass:N}),t(Ne,{coordinate:"x",index:f,y:k,padLength:C,sortedIndex:v[f]??NaN,toggleClass:N},"x"),t(Ne,{coordinate:"y",index:f,x:ce,y:k,padLength:C,sortedIndex:v[f]??NaN,toggleClass:N},"y"),t(Ne,{coordinate:"x",index:f,y:T,padLength:C,sortedIndex:v[f]??NaN,toggleClass:N},A),t(Ne,{coordinate:"y",index:f,x:ce,y:T,padLength:C,sortedIndex:v[f]??NaN,toggleClass:N},Y),g?null:t(I,null,t(Ne,{coordinate:"x",index:f,y:E,padLength:C,sortedIndex:v[f]??NaN,toggleClass:N},String(parseInt(A,16))),t(Ne,{coordinate:"y",index:f,x:ce,y:E,padLength:C,sortedIndex:v[f]??NaN,toggleClass:N},String(parseInt(Y,16)))),c&&!g?t(I,null,t(Ne,{coordinate:"x",index:f,y:_,padLength:C,sortedIndex:v[f]??NaN,toggleClass:N},String(Ce)),t(Ne,{coordinate:"y",index:f,padLength:C,x:ce,y:_,sortedIndex:v[f]??NaN,toggleClass:N},String(V))):null)))}))))))},Mt=({index:e})=>t(I,null,t("code",null,"P",t("sub",null,e)),":\xA0",t("code",null,"{","\xA0x",t("sub",null,e),",\xA0y",t("sub",null,e),"\xA0","}")),Po=({className:e,hash:o,height:n,identifier:i=Se,renderType:r,StylesProvider:a=$e,styleRenderer:c=Le,topics:d,width:m})=>{const p=xt(o),S=vt(o,p),{xPadding:y,xScale:g,yPadding:x,yScale:b}=Et,k=r==="meta",T=k?0:y,E=k?0:x,_=T/2,O=E/2,P={xScale:g,xShift:_,yScale:b,yShift:O},v=St(S,(V,ue)=>V.x===ue.x?0:V.x>ue.x?1:-1).map(V=>wt(V,P)),L=v.map((V,ue)=>ue),G=v.map(V=>Ae(p[v.indexOf(V)])),Z=(he+T)*g,N=i().className,ae=kt({points:v,xMax:Z,xScale:g,yScale:b}),ie=Pt({segments:ae,xMax:Z,xScale:g,yScale:b}),Q=k?{"& path":{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,U=k?"0 !important":"0 0 1rem !important",W=De,q="100%",ee=V=>typeof V=="number"?`${V}px`:V,re=(V,ue)=>typeof V=="number"?V*ue:V,A=k?re(n??W,.95):De,Y=k?re(m??q,.95):"100%",f=k&&n!=null?re(n,.95):n,F=k&&m!=null?re(m,.95):m,Pe=c.renderRule(()=>({gridColumn:"1 / -1",height:ee(A),padding:U,width:ee(Y),nested:{...Q}}),Object.keys),Ce=k?e:`${e} ${Pe}`;return t(a,null,t(ko,{className:Ce,exampleId:-1,height:f,hexPoints:G,points:v,renderAxis:!1,renderCurves:"only",scaleOptions:P,segments:ie,sortIndexes:L,sortToggleClass:N,topics:d,width:F}))},nd=e=>{const{hash:o,title:n,topics:i}=e,r=xt(o),a=vt(o,r),{xPadding:c,xScale:d,yPadding:m,yScale:p}=Et,S=c/2,y=m/2,g={xShift:S,xScale:d,yShift:y,yScale:p},x=b=>"${"+b+"}";return t(En,{...e,CustomArt:Po},be`
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
			`,t($n,null,be`
					There's a fair bit of boilerplate & plumbing that the art
					functionality depends on. To keep the post focused I'll leave out
					some of the boring stuff. But if you want to see the nitty gritty,
					you can check out the full source for Git usage in
					[\`lib/git/log.ts\`][gitBoilerplate], and for art generation in
					[\`lib/art/math.ts\`][artBoilerplate].
				`),t("h2",null,"Getting the Git"),be`
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
			`,t(Sc,{hash:o}),t("h2",null,"Using (abusing) the hash data"),t("p",null,"The hash ",t("a",{href:jn.sha1},"represents a 160-bit number"),", this post's hash being approximately ",t(Oc,{hash:o}),". My idea was to treat it as the basis for a data structure: a set of ten numeric pairs, two hex characters per number, 8 bits each, which are then converted to ",t("code",null,"{ x, y }")," coordinates."),be`
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
						throw new Error(\`Not a valid coordinate: ${x("value")}\`);
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
			`,t(It,{exampleId:1,hexPoints:r,points:a,renderScaled:!1,toggleSorting:!0}),t("h2",null,"Aspect ratio & padding adjustments"),be`
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
			`,t(It,{exampleId:2,hexPoints:r,points:a,renderAxis:!1,scaleOptions:g}),t("h2",null,"Connecting the dots"),be`
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
			`,t(It,{exampleId:3,hexPoints:r,points:a,renderAxis:!1,renderSegments:!0,scaleOptions:g}),t("h2",null,"My trig crash course"),be`
				We're coming near the end! But before I get to the final step, I needed
				to be able to generate [cubic Bézier curves][bezierCurves] for each
				segment.
			`,t($n,null,be`
					I had to <s>learn</s> copy & paste some math to generate the curves. I
					did take the time to learn what the math is actually doing while
					writing this post, but I've never taken a trigonometry course, so I'm
					probably not the best person to explain it in great detail, but I'll
					give it a shot.
				`),be`
				A single cubic Bézier curve is defined by:
			`,t("ul",null,t("li",null,"A starting point ",t(Mt,{index:0})),t("li",null,"A starting control point ",t(Mt,{index:1})),t("li",null,"An ending control point ",t(Mt,{index:2})),t("li",null,"An ending point ",t(Mt,{index:3}))),be`
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
			`,t(It,{exampleId:4,hexPoints:r,points:a,renderAxis:!1,renderCurves:"all",scaleOptions:g}),t("h2",null,"Now, the magic happens"),be`
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
							\`${x("point.x")},${x("point.y")}\`
						)).join(' ');

						return [
							...acc,
							\`C ${x("result")}\`,
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
								\`M ${x("startPoint.x")},${x("startPoint.y")}\`,
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
			`,t(Tt,{hash:o,title:n,topics:i}),t("h2",null,"My mistakes"),be`
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
			`)};var id=pi(nd,{async getStaticProps(e){return{props:{...await Rn({...e,description:Be`
				The final part in a series introducing my new site's art project.
				I walk through some of the more interesting parts of how the art
				is generated.
			`,importURL:import.meta.url,title:"What the art, part 3: Implementation",topics:[z.ART,z.TECHNOLOGY,z.NEURODIVERGENCE]}),CustomArt:Po}}}});const ni=l("h2",{fontSize:ke(`${s.headingRanges.h3.minEm}em`,`${s.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),ii=l("div",{marginTop:"0.5rem"}),rd=l("div",{display:"none",nested:{[s.print]:{display:"block",paddingBottom:"0.5em"}}}),sd=e=>{const{creator:o,contributor:n}=e.projects.reduce((i,r)=>{const a=r.role===M.CREATOR?"creator":"contributor";return{...i,[a]:[...i[a],r]}},{creator:[],contributor:[]});return t(I,null,t(Ln,null,t("div",null,t(ni,null,"Projects I Created"),t(ii,null,o.map(i=>t(mo,{project:i})))),t("div",null,t(ni,null,"Open Source Contributions"),t(ii,null,n.map(i=>t(mo,{project:i}))))),t(rd,null,t("p",null,t("b",null,"Open source projects & contributions:")," ",t("a",{href:"https://eyelidlessness.github.io/projects"},"eyelidlessness.github.io/projects"))))},ad=l(X,{padding:0}),Je=e=>t(ad,{as:"section",...e}),ri=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),ld=l(ri,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),cd=l(ld,{alignItems:"baseline",justifyContent:"space-between",paddingTop:ke("0.5em","3vw","2em"),paddingBottom:ke("0.5em","2vw","1em"),nested:{"&, & > *":{margin:0},"& > *":{minWidth:"auto"},[s.print]:{paddingTop:0}}}),dd=l(Je,{padding:0}),md=l(ri,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),pd=l("a",{...s.resume.contactList.link,display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"0.5ch",fontSize:"0.88889em",fontWeight:400,minWidth:"auto",color:"var(--color-prose)",textDecoration:"none",nested:{"&:hover, &:focus":{color:"var(--color-prose)",fontWeight:400,textDecoration:"underline",textDecorationColor:"var(--color-prose-decoration, currentColor)"}}}),hd=l("span",{nested:{[s.print]:{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),ud=l("span",{nested:{"@media screen and (min-width: 0)":{display:"none"}}}),Co=({children:e,screenLabel:o,printLabel:n,Icon:i,...r})=>t(pd,{...r},i&&t(i,null),t(hd,{"data-print-label":n},t(ud,null,o??e))),si=l("svg",{"--line-height":"1.05lh",width:"var(--line-height)",height:"var(--line-height)",lineHeight:"var(--line-height)",color:"var(--color-prose)",nested:{[s.print]:{display:"none"}}}),gd=l("path",{fill:"var(--color-prose)"}),fd=()=>t(si,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},t(gd,{d:"M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"})),yd=e=>t(Zt,{...e,omitTitle:!0}),bd=()=>t(si,{as:yd}),Sd={GitHub:bd},ai={display:"grid",fontSize:"0.88889em",margin:0,paddingInlineStart:0},li={display:"grid",gridTemplateColumns:"1.25rem 1fr",alignItems:"baseline",lineHeight:1.325,listStyle:"none",margin:0,padding:0,nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:"normal",textAlign:"center"}}},xd=l(X,{...s.resume.brief,rowGap:"0.25em",margin:0,padding:"0.5em 0",nested:{...s.resume.brief.nested,"& p, & ul, & li":{margin:0},"& p, & li":{padding:0},"& ul":{...ai,gap:"0.125em 0",padding:"0.25em 0"},"& li":li,"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"},[s.print]:{...s.resume.brief.nested[s.print],padding:0}}}),vd=l("h2",{fontFamily:"inherit",fontSize:"1em",fontWeight:600,marginBottom:0,paddingLeft:0,textIndent:0}),wd=l("div",{alignItems:"baseline",display:"grid",gap:"0.5em 0",gridTemplateColumns:"auto",gridTemplateRows:"auto",fontSize:"0.88889em",padding:"0.25em 0",nested:{"@media screen and (min-width: 48rem), print and (min-width: 0)":{gridTemplateColumns:"minmax(5rem, max-content) 1fr",paddingBlockStart:"0.75em",paddingInline:"1.2rem"},"& ul, & li":{lineHeight:1.5}}}),kd=l("ul",{display:"block",margin:0,padding:"0 0 0 1rem"}),Pd=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Cd=l("svg",{display:"inline-block",margin:"0 0.325rem 0 0",verticalAlign:"middle",nested:{[s.print]:{height:"0.325rem",width:"0.325rem"}}}),Ed=l("circle",{fill:"currentcolor"}),Ot=e=>t(Cd,{xmlns:"http://www.w3.org/2000/svg",className:e.className,width:"8",height:"8",viewBox:"0 0 8 8"},t(Ed,{cx:"4",cy:"4",r:"4"}),t("title",null,"Skill level: ",e.level));w.BASIC+"",l(Ot,{...s.resume.skillLevel[w.BASIC]}),w.INTERMEDIATE+"",l(Ot,{...s.resume.skillLevel[w.INTERMEDIATE]}),w.ADVANCED+"",l(Ot,{...s.resume.skillLevel[w.ADVANCED]}),w.EXPERT+"",l(Ot,{...s.resume.skillLevel[w.EXPERT]});const Td=l("div",{display:"contents"}),Rd=({name:e,skills:o})=>t(Td,{itemscope:!0,itemtype:"http://schema.org/ItemList"},t(vd,{itemprop:"name"},fn(e)),t(kd,null,o.map(({name:n})=>t(Pd,{key:n,itemprop:"itemListElement"},fn`${n}`)))),Ad=l(X,{gap:"0.5em 0"}),Id=l("div",{fontSize:"0.94444em"}),Md=l("p",{alignItems:"baseline",display:"grid",gridTemplateColumns:"1.2ch 1fr",fontSize:"0.88889rem",opacity:.8,nested:{"&::before":{content:'"*"',display:"block",width:"2ch"}}}),Od=l("h2",{marginBottom:0,nested:{[s.print]:{fontSize:"1.2em",paddingInline:0,textAlign:"center",textIndent:0}}}),Ld=l(X,{gap:"0.5em 0",nested:{[s.print]:{breakInside:"avoid"}}}),$d=l("ul",{...ai,gap:"0.5em 0"}),Nd=l("li",li),jd=l(Ad,{position:"relative",padding:"1em 0",nested:{"&:last-child:after":{display:"none"},"&:nth-of-type(odd)":{...s.resume.employment.itemOdd},"&:nth-of-type(even)":{...s.resume.employment.itemEven},"& strong":{fontWeight:500,nested:{[s.darkMode]:{fontWeight:400}}},[s.print]:{padding:"0.25em 0"}}}),Hd=l("div",{alignItems:"baseline",display:"grid",columnGap:"0.5rem",rowGap:"0.25rem",gridTemplate:`
				"employer"
				"position"
				"time-range"
			`,gridAutoColumns:"auto"}),Bd=l("h3",{fontFamily:"inherit",fontWeight:550,gridArea:"employer",marginBottom:0,whiteSpace:"nowrap",[s.print]:{fontWeight:600}}),Dd=l(Mn,{fontSize:"0.88889rem",fontWeight:s.deemphasize.fontWeight,gridArea:"time-range",lineHeight:1,nested:{"&.has-marginalia::after":{content:'"*"'}}}),_d=l("div",{fontSize:"0.88889rem",fontWeight:s.deemphasize.fontWeight,gridArea:"position"}),Yd=l("p",{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"baseline",gap:"1ch"}),Fd=l("span",{fontWeight:500}),Xd=l("span",{fontSize:"0.88889rem",opacity:.8}),ci=e=>{const{subEmployer:o,subRange:n,highlights:i}=e;return t(I,null,(o??n)&&t(Yd,null,o&&t(Fd,null,o),n&&t(Xd,null,n)),t($d,{itemtype:"http://schema.org/ItemList"},i.map(r=>t(Nd,{key:r,itemprop:"itemListElement"},Be(r)))))},zd=({employer:e,end:o,highlights:n,position:i,start:r,summary:a,marginalia:c,...d})=>t(jd,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...d},t(Hd,null,t(Bd,{itemprop:"name"},e),t(_d,{itemprop:"roleName"},i),t(Dd,{className:c?"has-marginalia":"",range:[r,o]})),a==null?null:t(Id,{itemprop:"description"},Be(a)),Br(n)?t(ci,{highlights:n}):n.map(m=>{const[p,S,...y]=m;return t(Ld,null,t(ci,{subEmployer:p,subRange:S,highlights:y}))}),c&&t(Md,null,c)),Gd=l(Je,{...s.resume.employment.container,padding:"1em 0",nested:{[s.darkMode]:{...s.resume.employment.container.nested[s.darkMode]},[s.print]:{...s.resume.employment.container.nested[s.print],gap:"0.675em 0"}}}),Ud=({id:e,employment:o})=>t(Gd,{id:e},t(Od,null,"Recent Experience"),o.history.map(n=>t(zd,{...n}))),Wd=l(Je,{nested:{[s.print]:{order:10}}}),Vd=l(Je,{paddingTop:"1em",nested:{[s.print]:{paddingTop:0}}}),qd=l(X,{gap:"0.5em 0",nested:{"& p":{lineHeight:1.325,margin:0}}}),Kd=l(Ve,{...s.visiblyHidden}),di=e=>e.replace(/^https?:\/\/|\/$/g,""),Jd=({className:e,id:o,resume:n,updated:i})=>{const{contact:{email:r,website:a},employment:c,info:d,name:m,projects:p,skills:S,social:y}=n;return t(qd,{className:e,id:o,itemscope:!0,itemtype:"http://schema.org/Person"},t(dd,{id:"resume-header"},t(cd,null,t("h1",{itemprop:"name"},m),t(Kd,{date:i,itemprop:"datePublished",mode:_e.META}),t(md,null,t(Co,{href:`mailto:${r}`,itemprop:"email",screenLabel:r,printLabel:r,title:`Email: ${r}`,Icon:fd},"Email"),a!=null&&t(Co,{href:a,itemprop:"url",printLabel:di(a),rel:"me"},"Website"),y.map(({user:g,network:x,url:b})=>t(Co,{href:b,itemprop:"url",screenLabel:g??x,printLabel:di(b),title:`${x}: ${g}`,Icon:Sd[x],rel:"me"},x)))),t(xd,{id:"resume-brief",itemprop:"description"},Be(d.brief))),t(Je,{id:"resume-skillsets","aria-label":"Skillsets"},t(wd,null,Object.entries(S.merged).map(([g,x])=>t(Rd,{key:g,name:g,skills:x})))),t(Ud,{id:"resume-employment",employment:c}),t(Wd,{id:"projects"},t(sd,{projects:p})),t(Vd,{id:"references"},t("p",null,t("b",null,"References:")," available upon request to"," ",t("a",{href:"mailto:gnosis@gmail.com"},"gnosis@gmail.com"),".")))};l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),l("a",{...s.resume.contactList.link,textDecoration:"none"});export{tt as BLOG_BASE_PATH,Tt as BlogArt,tl as BlogArtDefs,Nl as BlogListing,Tn as BlogMetadataType,En as BlogPost,Po as CustomArt,X as FullBleedContainer,Vo as Head,Zo as Main,st as PageMetadataType,mo as Project,M as ProjectRole,Ln as ProjectsTwoUp,Jd as Resume,gl as ResumeArt,Je as ResumeSection,$e as StylesProvider,z as Topic,wn as TopicTag,Ft as __SNOWPACK_ENV__,ke as clamp,Rn as getBlogPostStaticProps,yn as getPageMetadata,id as index,Be as mdx,Yo as projects,rr as resetAbbrContext,Xr as resume,l as styled,s as theme};
