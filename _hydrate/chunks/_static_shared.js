import Qe from"unist-util-visit";import{h as t,Fragment as _,toChildArray as xt}from"https://cdn.skypack.dev/preact@10.5.10";import No from"@mdx-js/mdx";import{mdx as Be,MDXProvider as Ho}from"@mdx-js/preact";import{isobject as _o,createComponent as Fo,RendererProvider as Uo,Readonly as Yo,Object$1 as zo,Optional as g,Unknown as Go,Literal as Xo,String as m,Partial as se,Union as Pt,Boolean as Ot,Array$1 as j,Integer as Wo,Number$1 as Vo,emojiRegex as Ko,h as It,rehypeAccessibleEmojis as qo,remarkSlug as Jo,remarkSmartypants_1 as Qo}from"./_vendor/index.js";import{transform as Zo}from"buble-jsx-only";import Mt from"dedent";import Lt from"module";import en from"remark-mdx";import tn from"remark-mdx-to-plain-text";import pe from"path";import{loadTheme as jt,getHighlighter as Dt}from"shiki";import{BUNDLED_LANGUAGES as on}from"shiki-languages";import{renderers as nn}from"shiki-twoslash";import Ze from"fs";import rn from"node-object-hash";import"fela-tools";import"sharp";import sn from"child_process";import an from"crypto";import{Head as Bt,seo as $e}from"microsite/head";import{createRenderer as ln}from"fela";import{processStyleWithPlugins as cn,KEYFRAME_TYPE as $t,isNestedSelector as dn,normalizeNestedProperty as mn,isMediaQuery as pn,generateCombinedMediaQuery as Nt,isSupport as un,generateDeclarationReference as gn,isUndefinedValue as hn,generateCSSSelector as fn,RULE_TYPE as bn}from"fela-utils";import{cssifyDeclaration as yn,cssifyObject as Sn}from"css-in-js-utils";import Ht from"md5";let et=new Set;const vn=()=>{et=new Set},En=()=>e=>{Qe(e,"abbr",o=>{const{abbr:n}=o;et.has(n)&&(delete o.abbr,delete o.children,delete o.data,delete o.reference,Object.assign(o,{type:"text",value:n})),et.add(n)}),Qe(e,"text",o=>{o.value.includes("\u200B")&&Object.assign(o,{value:o.value.replace(/\u200b/gu,"")})})},_t="production",kn="production",wn=!0;var tt=Object.freeze({__proto__:null,MODE:_t,NODE_ENV:kn,SSR:wn});const Tn=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),C=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((n,[r,i])=>typeof i=="object"&&(r==="nested"||r.includes("&"))?n:`${n}${Tn(r)}:${i};`,""),"}",Object.entries(o).map(([n,r])=>{if(typeof r=="object"){if(n==="nested")return Object.entries(r).map(([i,a])=>{const c=e.map(d=>i.replace(/&/g,d));return C(c,a)}).join("");if(n.includes("&")){const i=e.map(a=>n.replace(/&/g,a));return C(i,r)}}return""},[]).join("")].join(""),ae=(...e)=>`clamp(${e.join(",")})`,Se=e=>e.replace(/\s+/g," ").trim(),Ne=e=>e;function Pe(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function Cn(e,o,n,r,i,a){const c=[];return i&&c.push(Pe(i).slice(0,16)),r&&c.push(Pe(r).slice(0,16)),n&&c.push(Pe(n).slice(0,16)),c.push(Pe(e).slice(0,16)),c.push(Pe(o).slice(0,16)),c.push(a.slice(0,8)),c.join("_")}function Rn(e,o,n=[""]){let r="";for(const a in e){const c=e[a];r=`${r}${a}{${Sn(c)}}`}let i="";for(let a=0;a<n.length;a++){const c=n[a];i=`${i}@${c}keyframes ${o}{${r}}`}return i}function An(){return e=>(e.renderKeyframe=(o,n)=>{const r=o(n,e),i=cn(e,r,$t,n),a=JSON.stringify(i);if(!e.cache.hasOwnProperty(a)){const c=Ht(a),d=(e.selectorPrefix||"_")+c.slice(0,8),p=Rn(i,d,e.keyframePrefixes),u={type:$t,keyframe:p,name:d};e.cache[a]=u,e._emitChange(u)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...n},r="",i="",a="")=>{let c=o?` ${o}`:"";for(const d in n){const p=n[d];if(_o(p))if(dn(d))c+=e._renderStyleToClassNames(p,r+mn(d),i,a);else if(pn(d)){const u=Nt(i,d.slice(6).trim());c+=e._renderStyleToClassNames(p,r,u,a)}else if(un(d)){const u=Nt(a,d.slice(9).trim());c+=e._renderStyleToClassNames(p,r,i,u)}else console.warn(`The object key "${d}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const u=gn(d,p,r,i,a);if(!e.cache.hasOwnProperty(u)){if(hn(p)){e.cache[u]={className:""};continue}const h=yn(d,p),S=Ht(u),v=e.devMode?Cn(d,p,r,i,a,S):(e.selectorPrefix||"_")+S.slice(0,8),f=fn(v,r),k={type:bn,className:v,selector:f,declaration:h,pseudo:r,media:i,support:a};e.cache[u]=k,e._emitChange(k)}const y=e.cache[u].className;y&&(c+=` ${y}`)}}return c},e)}import.meta.env=tt;const He=Lt.createRequire(import.meta.url),{default:xn}=He("fela-identifier"),{default:Pn}=He("fela-plugin-embedded"),{default:On}=He("fela-plugin-multiple-selectors"),{default:In}=He("fela-plugin-typescript"),Mn=_t==="development",Ln=()=>{const e=xn(),o=ln({devMode:Mn,enhancers:[An(),e],plugins:[Pn(),On(),In()]});return{identifier:e,renderer:o}},{identifier:_e,renderer:le}=Ln(),jn=e=>Array.isArray(e)?e:[e],Dn=e=>({children:o})=>t(Uo,{renderer:e},...jn(o)),ue=Dn(le),Bn=e=>le.renderRule(Ne,e),Fe=Object.assign(Bn,{global:le.renderStatic.bind(le)}),l=(e,o)=>{const n=typeof o=="function"?o:()=>o;return Fo(n,e,Object.keys)},D=(e,o)=>Yo(zo(e,o)),W=()=>g(Go()),Ft="FRESH@0.1.0",$n=D({format:Xo(Ft,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:g(m({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),Nn=se(D({label:m({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:m({description:"Profession type or 'character class'."}),image:m({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:m({description:"A short description or summary of yourself as a candidate."}),quote:m({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),Hn=se(D({willing:Pt([Ot(),m()],{description:"Willingness to relocate."}),destinations:j(m({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),_n=se(D({travel:Wo({description:"Percentage of time willing to travel (0 to 100)."}),authorization:m({description:"Work authorization: citizen, work visa, etc."}),commitment:j(m({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:Ot({description:"Open to remote employment opportunities."}),relocation:Hn},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),Fn=j(se(D({label:m({description:"A label for this contact information."}),category:m({description:"Type of contact information: email, phone, url, postal, or IM."}),value:m({description:"Phone number, email address, website, etc."})}))),Un=se(D({email:m({description:"Primary contact email.",format:"email"}),phone:m({description:"Primary phone number."}),website:m({description:"Website, blog, or home page.",format:"uri"}),other:Fn},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),Yn=se(D({address:m({description:"Your full postal address."}),code:m({description:"Postal or other official routing code."}),city:m({description:"Your home city."}),country:m({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:m({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),zn=j(D({employer:m({description:"Employer name."}),position:g(m({description:"Your position or formal job title."})),url:g(m({description:"Employer website.",format:"uri"})),start:g(m({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:g(m({description:"A summary of your achievements and responsibilities under this employer."})),highlights:g(j(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(j(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),Gn=se(D({summary:m({description:"Summary of overall employment."}),history:zn},{description:"The 'employment' section describes the candidate's formal employment history."})),Xn=j(D({category:m({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:g(m({type:"string",description:"Friendly media name."})),url:g(m({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),Wn=j(D({title:m({description:"Project name or code-name."}),category:g(m({description:"Project type: open-source, private, side project, etc."})),description:g(m({description:"Project description or summary."})),summary:g(m({description:"A summary of your achievements and responsibilities on the project."})),role:g(m({description:"Your role on the project: Contributor, Creator, etc."})),url:g(m({description:"Project URL.",format:"uri"})),media:g(Xn),repo:g(m({description:"Repo URL.",format:"uri"})),start:g(m({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:g(j(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:g(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(j(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),Vn=se(D({sets:j(D({name:m({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:g(m({description:"Level of mastery of the skill."})),skills:j(m({description:"Title or ID of a skill from the skills list."}))})),list:j(D({name:m({description:"The name or title of the skill."}),level:g(m({description:"A freeform description of your level of mastery with the skill."})),summary:g(m({description:"A short summary of your experience with this skill."})),years:g(Pt([m(),Vo()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),Kn=j(D({title:g(m({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:m({description:"College or school name."}),area:g(m({description:"e.g. Arts"})),studyType:g(m({description:"e.g. Bachelor"})),start:g(m({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:g(m({description:"Grade or GPA."})),curriculum:g(j(m({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:g(m({description:"Website or URL of the institution or school.",format:"uri"})),summary:g(m({description:"A short summary of this education experience."})),keywords:g(j(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:g(j(m({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(m({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),qn=D({summary:g(m({description:"Summary of overall education."})),level:m({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:g(m({description:"Your degree, if any (BSCS, BA, etc.)."})),history:g(Kn)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),Jn=j(D({network:m({description:"The name of the social network, such as Facebook or GitHub."}),user:m({description:"Your username or handle on the social network."}),url:m({description:"URL of your profile page on this network.",format:"uri"}),label:g(m({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."}),Tl=D({name:m({description:"The candidate's name as it should appear on the resume."}),meta:$n,info:g(Nn),disposition:g(_n),contact:g(Un),location:g(Yn),employment:g(Gn),projects:g(Wn),skills:g(Vn),education:g(qn),social:g(Jn),services:W(),recognition:W(),writing:W(),reading:W(),speaking:W(),governance:W(),languages:W(),samples:W(),references:W(),testimonials:W(),interests:W(),extracurricular:W(),affiliation:W()},{title:"FRESH Resume Schema"});var w;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(w||(w={}));var E;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator",e.DEVELOPER="Developer"})(E||(E={}));const Qn=Date.now(),Ue=e=>e==null?Qn:new Date(e).getTime(),Zn=e=>e.slice().sort((o,n)=>{const r=Ue(o.end),i=Ue(n.end);if(r>i)return-1;if(i>r)return 1;const a=Ue(o.start),c=Ue(n.start);return a>c?-1:c>a?1:0}),er=e=>Zn(e),tr=er([{title:"@getodk/xforms-engine",category:w.OPEN_SOURCE,description:`
      Client-agnostic, reactive runtime for
      [ODK XForms](https://getodk.github.io/xforms-spec/)
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xforms-engine",role:E.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/xpath",category:w.OPEN_SOURCE,description:`
      Extensible XPath 1.0 interpreter, supporting
      [ODK XForms](https://getodk.github.io/xforms-spec/#xpath-functions)
      extensions, arbitrary DOM implementations
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xpath",role:E.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/tree-sitter-xpath",category:w.OPEN_SOURCE,description:`
      [tree-sitter](https://tree-sitter.github.io/tree-sitter/) parser for
      XPath 1.0 syntax
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/tree-sitter-xpath",role:E.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/web-forms",category:w.OPEN_SOURCE,description:`
      [ODK Web Forms](https://github.com/getodk/web-forms) UI client
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/web-forms",role:E.CONTRIBUTOR,start:"2024-03",end:"2025-04"},{title:"Astro",category:w.OPEN_SOURCE,description:`
      "Build faster websites with less client-side Javascript"
    `,summary:`
      Collaborate with core contributors to add support for rendering
      [SolidJS](https://www.solidjs.com/) components.
    `,repo:"https://github.com/snowpackjs/astro",role:E.CONTRIBUTOR,start:"2021-07",end:"2021-07"},{title:"Enketo",category:w.OPEN_SOURCE,description:`
      "Web forms evolved. Deploy and conduct surveys that work without a
      connection, on any device."
    `,summary:`
      Long-term maintenance.
    `,repo:"https://github.com/enketo",role:E.DEVELOPER,start:"2021-04",end:"2023-10"},{title:"Microsite",category:w.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:E.CONTRIBUTOR,start:"2021-01",end:"2021-05"},{title:"HNDarkMode",category:w.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:E.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:w.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:E.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:w.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:E.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:w.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:E.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:w.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:E.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:w.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:E.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:w.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:E.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:w.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:E.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:w.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:E.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:w.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:E.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:w.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:E.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:w.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:E.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:w.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:E.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:w.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:E.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:w.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:E.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:w.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:E.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:w.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:E.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),or=e=>e,nr=e=>e,rr=nr([{employer:"ODK",position:"Senior Software Engineer",start:"2021-03",end:"2025-04",summary:`
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
      `]}]),ir=rr;var b;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(b||(b={}));var ve;(function(e){e.LANGUAGES_PLATFORMS="Languages",e.SERVICES_DISTRIBUTED_SYSTEMS="Services",e.USER_INTERFACE_EXPERIENCE="UI/UX",e.DOMAIN_SPECIFIC_LANGUAGES="DSL\u200Bs"})(ve||(ve={}));const ot={[ve.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:b.EXPERT},{name:"OpenAPI & JSON Schema",level:b.EXPERT},{name:"Django REST framework",level:b.ADVANCED},{name:"Fault tolerance",level:b.ADVANCED},{name:"Microservice architecture",level:b.ADVANCED},{name:"Apache Storm",level:b.INTERMEDIATE},{name:"Redis",level:b.BASIC}],[ve.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:b.EXPERT},{name:"DOM & Web APIs",level:b.EXPERT},{name:"Web performance",level:b.ADVANCED},{name:"UI & UX design",level:b.ADVANCED},{name:"A11y",level:b.INTERMEDIATE}],[ve.DOMAIN_SPECIFIC_LANGUAGES]:[{name:"Interpreter runtime",level:b.ADVANCED},{name:"Interpreter optimization",level:b.INTERMEDIATE},{name:"Domain-specific tooling",level:b.INTERMEDIATE}],[ve.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:b.EXPERT},{name:"Clojure & ClojureScript",level:b.EXPERT},{name:"XPath",level:b.EXPERT},{name:"ODK XForms",level:b.EXPERT},{name:"HTML & CSS",level:b.EXPERT},{name:"SQL (PostgreSQL)",level:b.ADVANCED},{name:"Python",level:b.INTERMEDIATE},{name:"Swift",level:b.BASIC},{name:"Java",level:b.BASIC}]},sr={list:Object.values(ot).flatMap(Ne),merged:ot,sets:Object.entries(ot).map(([e,o])=>({name:e,skills:o.map(({name:n})=>n)}))},ar=or({name:"Trevor Schmidt",meta:{format:Ft,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:ir},info:{class:"Software Engineer",brief:Mt(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:tr,skills:sr,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),Ye=Symbol("DEFAULT_TOPIC"),M={[Ye]:Ye,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},lr=e=>typeof e=="string"||typeof e=="symbol",Ut=e=>lr(e)&&e in M,nt=e=>Ut(e)?M[e]:e,Yt=Object.entries(M).reduce((e,o)=>{const[n,r]=o;return typeof n=="string"?{...e,[r]:n}:e},{}),cr=e=>Ut(e)?e:Yt[e],dr=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),mr=Object.fromEntries(Object.entries(Yt).map(([e,o])=>typeof o=="string"?[e,dr(o)]:null).filter(e=>e!=null)),pr=e=>{const o=nt(e);if(typeof o=="string")return mr[o]},ze=2,rt={minEm:1.0625,fluidVw:1.0625*ze,maxEm:1.25},T="@media (prefers-color-scheme: dark)",Ge="@media print",ur=["h1","h2","h3","h4","h5","h6"],gr=["dd","dl","dt","li","ol","ul"],hr=[...ur,...gr,"p"],Ee=rt.minEm/rt.maxEm,oe={h1:1.953,h2:1.563,h3:1.25},fr={h1:{minEm:oe.h1*Ee,fluidVw:oe.h1*Ee*ze,maxEm:oe.h1},h2:{minEm:oe.h2*Ee,fluidVw:oe.h2*Ee*ze,maxEm:oe.h2},h3:{minEm:oe.h3*Ee,fluidVw:oe.h3*Ee*ze,maxEm:oe.h3}},zt=75,Xe=1.25,br=["0.7fr",`${Xe}rem`,[`${zt}ch`,`calc(100% - ${Xe*2}rem)`],`${Xe}rem`,"1.2fr"],it=1,yr=["0.7fr",`${it}rem`,[`${zt*1.1875}ch`,`calc(100% - ${it*2}rem)`],`${it}rem`,"1.2fr"],Sr=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],st=Sr.join(", "),vr=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Er=vr.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),G={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},kr="hover-inherit-topic-color",wr={[M[Ye]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.DEFAULT_TOPIC.light},[T]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.DEFAULT_TOPIC.dark}}}}},[M.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.ABLEISM}}},[M.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.ARTS_CRAFTS}}},[M.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.LEMON}}},[M.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.MENTAL_ILLNESS}}},[M.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.NEURODIVERGENCE}}},[M.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.PHILOSOPHY}}},[M.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.POLITICS}}},[M.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.RACISM}}},[M.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.SEXISM}}},[M.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.SUBSTANCE_ABUSE}}},[M.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.TECHNOLOGY}}},[M.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.TRANSPHOBIA}}}},Gt=_e(),s={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:kr,baseFontSizeRange:rt,darkMode:T,print:Ge,abbreviation:{"--abbreviation-highlight":"hsl(64deg 100% 50% / 0.25)",backgroundImage:`linear-gradient(${["to top","var(--abbreviation-highlight)","var(--abbreviation-highlight) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[T]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[T]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:Gt,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[T]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${Gt}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[T]:{color:"hsl(212deg, 10%, 90%)"}}},[T]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[T]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[T]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:st},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:st,nested:{[T]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em",fontWeight:300},emphasize:{color:"#000"},firstLastMarginZeroElements:hr,gitHubLogo:{fill:"#171515",nested:{[T]:{fill:"#fff"}}},headingLineHeight:.9375,headingRanges:fr,[T]:{abbreviation:{"--abbreviation-highlight":"hsl(336deg 85% 25%)"},aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg 60% 4%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)",fontWeight:200},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(190deg 20% 97%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"oklch(0.71 0.16 355.75)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:br,mainGridSidePaddingRem:Xe,monospaceFont:st,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[T]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{color:"hsl(210deg 12% 5% / 95%)",fontFamily:Er},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[T]:{backgroundColor:"hsl(336deg, 100%, 7%)"},[Ge]:{backgroundColor:"transparent",padding:0}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[T]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"#fffff1",nested:{[T]:{backgroundColor:"hsl(41deg, 100%, 8%)"},[Ge]:{backgroundColor:"transparent",padding:0}}},itemOdd:{backgroundColor:"transparent"},itemEven:{backgroundColor:"oklch(0.99 0.03 100.56)",nested:{[T]:{backgroundColor:"oklch(0.26 0.06 71.28)"},[Ge]:{backgroundColor:"transparent"}}}},skillLevel:{[b.BASIC]:{color:"hsl(207deg, 25%, 83%)",nested:{[T]:{color:"hsl(207deg, 15%, 43%)"}}},[b.INTERMEDIATE]:{color:"hsl(188deg, 53%, 74%)",nested:{[T]:{color:"hsl(188deg, 53%, 34%)"}}},[b.ADVANCED]:{color:"hsl(188deg, 70%, 59%)",nested:{[T]:{color:"hsl(188deg, 80%, 39%)"}}},[b.EXPERT]:{color:"hsl(152deg, 100%, 39%)",nested:{[T]:{color:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:yr,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[T]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[T]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:wr,topicTagIdentifier:_e(),topicTagInner:{backgroundImage:Se(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[T]:{backgroundImage:Se(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:Se(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[T]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:Se(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visiblyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[T]:{color:"hsl(194deg, 8%, 50%)"}}}}}},at=["b","em","h1","h2","h3","i","strong"],We=["h1","h2","h3","h4","h5","h6"],Tr=[...We,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Cr=Array.from(new Set([...We,...Tr,"div","fieldset","form","hgroup","hr","pre"])),Rr=Se(`
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
    font-size:        ${ae(`${s.baseFontSizeRange.minEm}em`,`${s.baseFontSizeRange.fluidVw}vw`,`${s.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${C(["html","body"],{...s.document})}

  ${C(["body"],{...s.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${We.join(",")} {
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
`),Ar=()=>{Fe.global(Se(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${Cr.join(",")} {
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

      ${C(at,s.emphasize)}

      h1 {
        font-size: ${ae(`${s.headingRanges.h1.minEm}em`,`${s.headingRanges.h1.fluidVw}vw`,`${s.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${ae(`${s.headingRanges.h2.minEm}em`,`${s.headingRanges.h2.fluidVw}vw`,`${s.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${ae(`${s.headingRanges.h3.minEm}em`,`${s.headingRanges.h3.fluidVw}vw`,`${s.headingRanges.h3.maxEm}em`)};
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

      ${C(["hr:after"],{...s.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${C(["pre"],s.pre)}

      ${C(["code"],{...s.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

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

      ${C(["a"],{...s.links,fontWeight:"bolder"})}

      ${C(["abbr"],{...s.abbreviation,textDecoration:"none"})}

      ${C(["aside","small"],s.deemphasize)}

      ${C(["aside"],{...s.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem",nested:{"& a":{fontWeight:600}}})}

      ${at.map(e=>`aside ${e}`).join(", ")} {
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
        ${C(["html","body"],{...s[s.darkMode].document})}

        ${C(["body"],{...s[s.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${C(at,s[s.darkMode].emphasize)}
        ${C(["abbr"],s[s.darkMode].abbreviation)}
        ${C(["pre"],s[s.darkMode].pre)}
        ${C(["code"],s[s.darkMode].code)}
        ${C(["a"],s[s.darkMode].links)}
        ${C(["aside","small"],s[s.darkMode].deemphasize)}
        ${C(["aside"],s[s.darkMode].aside)}
        ${C(["hr:after"],s[s.darkMode].separator)}
      }

      ${s.print} {
        ${C(["a","a:hover","code"],{color:"inherit",cursor:"text",fontWeight:"inherit",textDecoration:"none"})}

        ${C(["abbr"],{backgroundImage:"none"})}

        ${C(["code"],{backgroundColor:"transparent",borderRadius:0,display:"inline-flex",lineHeight:"inherit",padding:0})}
      }
    `))},xr=`
  ${s.mainGridColumns[0]}
  ${s.mainGridColumns[1]}
  min(
    ${s.mainGridColumns[2][0]},
    ${s.mainGridColumns[2][1]}
  )
  ${s.mainGridColumns[3]}
  ${s.mainGridColumns[4]}
`.replace(/\s+/g," "),Xt={gridColumn:"1 / -1"},Wt=Fe(Xt),B=l("div",{nested:{[`& > .${Wt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:xr,...Xt}),Pr=({children:e,shadow:o,...n})=>t(B,{...n},e),Vt=([e,o,n])=>`rgba(${[e,o,n,0].join(",")})`,Kt=["12rem 100%","auto"],qt=Kt.join(", "),Or=Kt.map(e=>e.replace("100%","100.1%")).join(", "),Ir=le.renderKeyframe(()=>({"0%":{backgroundSize:qt},"100%":{backgroundSize:Or}}),{}),Jt="5px",Qt=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`rgba(${o.join(",")}) calc(11rem + ${Jt})`,`${Vt(o)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${Vt(e)} ${Jt}`].join(", ")})`].join(", ")}:null,Mr=e=>{if(e!=null){const{darkMask:o,darkScroll:n,lightMask:r,lightScroll:i}=e;return{dark:Qt(n,o),light:Qt(i,r)}}return{dark:null,light:null}},Zt=l(Pr,({shadow:e})=>{const{dark:o,light:n}=Mr(e),r=o==null?null:{[s.darkMode]:o};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:qt,paddingRight:s.mainGridSidePaddingRem,overflowX:"auto",nested:{...r,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:Ir,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),Lr=l(B,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),eo=l("div",{paddingLeft:"1rem"}),jr=l("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),Dr=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),lt="div",Br={ContentContainer:lt,InnerContainer:eo,OuterContainer:lt,SymbolContainer:lt},to=e=>{const{children:o,ContentContainer:n,InnerContainer:r,OuterContainer:i,outerContainerProps:a,symbol:c,SymbolContainer:d}={...Br,...e};return t(Lr,{as:i,...a},t(jr,{as:d,role:"presentation"},c),t(eo,{as:r},t(Dr,{as:n},o)))},$r=l("pre",{fontSize:"1rem"}),Nr=l(Zt,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[s.darkMode]:{}}}),Hr=e=>t(Nr,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),_r=l(B,{...s.pre,nested:{[s.darkMode]:{...s[s.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),Fr=l("div",{...s.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Ur=({children:e})=>t(to,{ContentContainer:$r,InnerContainer:Hr,OuterContainer:_r,symbol:"{",SymbolContainer:Fr},e),Yr=e=>e.map((o,n)=>n),ct=(e,o)=>Yr(e).sort((n,r)=>{const i=o(e[n],e[r]);return i===0?n===r?0:n>r?1:-1:i}).map(n=>e[n]),zr=e=>typeof e=="object"&&e!=null,Gr=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),Xr=(e,o)=>zr(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&Ko().test(o),Wr=({["aria-label"]:e,children:o,role:n})=>t(Gr,{"aria-label":e,role:n},o),Vr={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},Kr={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",ODK:"Open Data Kit (https://getodk.org/)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},qr={...Vr,...Kr},oo=pe.resolve(process.cwd(),"./syntax-themes"),[Jr,Qr]=await Promise.all([jt(pe.resolve(oo,"./yi-dark.json")),jt(pe.resolve(oo,"./yi-light.json"))]),Zr={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},ei={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},ti=e=>e.trim().split(/\b\W*\b/).reduce((o,n)=>({...o,...ei[n]}),{}),oi=e=>Object.entries(e).reduce((o,[n,r])=>{const i=Zr[n];if(r==null||typeof i!="string")return o;const a=i==="fontStyle"?ti(r):{[i]:r};return{...o,...a}},{}),[ni,ri]=await Promise.all([Dt({theme:Jr}),Dt({theme:Qr})]),ii=new Set(on.map(e=>e.id)),si=new Set(["ts","tsx","typescript"]),no=e=>e.explanation?.reduce((o,n)=>({...o,...n.scopes.reduce((r,{themeMatches:i})=>({...r,...i.reduce((a,{settings:c})=>({...a,...oi(c)}),r)}),o)}),{color:e.color}),ai=(e,o,n={})=>{const r=no(e),i=no(o),a=i==null?null:{nested:{[s.darkMode]:i}},{content:c}=e;if(r==null&&a==null)return t("span",n,c);const d={...r,...a},p=l("span",d);return t(p,n,c)},li=Fe({paddingRight:"1rem"}),ci={className:li},di=(e,o)=>It(t(ue,{},t("pre",{},t("code",{},...e.reduce((n,r,i)=>{const a=r.map((d,p)=>{const u=o[i][p],y=p===r.length-1?ci:{};return ai(d,u,y)}),c=i===0?"":`
`;return[...n,c,...a]},[]))))),mi=e=>{const{lang:o,value:n,meta:r}=e,i=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,a=String(o)==="json5"?"json":o;let c;const d=n.replace(/^\n+|\n+$/g,"");if(!ii.has(a))c=nn.plainTextRenderer(d,{});else{const p=ri.codeToThemedTokens(d,a),u=ni.codeToThemedTokens(d,a);c=di(p,u)}si.has(a)&&!r?.includes("ignore"),e.children=[],e.type="html",e.value=c},pi=()=>o=>{Qe(o,"code",mi)};import.meta.env=tt;const Oe=Lt.createRequire(import.meta.url),ui=Oe("rehype-parse"),gi=Oe("rehype-remark"),hi=Oe("remark"),fi=Oe("remark-abbr"),bi=Oe("remark-stringify"),yi=({className:e,children:o,...n})=>e==="language-id"?null:e==="code-container"?Be(_,n,...xt(o)):t("div",{className:e,...n},...xt(o)),Si=({children:e,...o})=>Xr(o,e)?t(Wr,o,e):t("span",o,e),dt={components:{div:yi,pre:Ur,span:Si},rehypePlugins:[qo],remarkPlugins:[pi,fi,En,Jo,Qo]},ro=e=>{const{children:o=Be(()=>null,{}),components:n={},rehypePlugins:r=[],remarkPlugins:i=[]}=e,a={...dt.components,...n},c={mdx:Be,MDXProvider:Ho,components:a,props:{}},d=typeof o=="string"?Mt(o).trim():o,p=[...dt.rehypePlugins,...r],u=[...dt.remarkPlugins,...i],y=No.sync(d,{rehypePlugins:p,remarkPlugins:u,skipExport:!0}).trim(),{code:h}=Zo(y,{objectAssign:"Object.assign"}),S=Object.keys(c),v=Object.values(c),f=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...S,`${h}

${f}`)(Be,...v)},vi=Object.entries(qr).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),Ei=e=>[e,vi].join(`

`),mt=([e,...o],{includeAbbreviations:n=!0})=>{const r=typeof e=="string"?[e,...o].join(""):String.raw(e,...o);return n?Ei(r):r},ke=(...e)=>{const o=mt(e,{includeAbbreviations:!0});return t(ue,{},t(ro,{},o))},io=(...e)=>{const o=mt(e,{includeAbbreviations:!0});return t(ue,{},t(ro,{components:{p:_}},o))},ki=(...e)=>{const o=mt(e,{includeAbbreviations:!1});return hi().use(ui).use(gi).use(bi).use(en).use(tn).processSync(o).contents.toString().trim()},ne=(e,o)=>Number(e.toFixed(o)),ge=parseInt("ff",16),so=parseInt("00",16),ao=.05,pt=.15,ut=.05;class Ie extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const wi=/^[0-9a-f]{40}$/i,Ti=e=>wi.test(e),Ci=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),Ri=e=>e.length===10,Ai=/([0-9a-f]{2})([0-9a-f]{2})/ig,gt=e=>{if(!Ti(e))throw new Ie(e);const n=Array.from(e.matchAll(Ai)??[]).map(([r,i,a])=>({x:i,y:a}));if(!Ri(n))throw new Ie(e);return n},xi=Symbol("IS_POINT"),Pi=e=>Object.assign(e,{[xi]:!0}),lo=e=>{const o=parseInt(e,16);if(o>ge||o<so)throw new Error(`Not a valid coordinate: ${e}`);return Pi(o)},Oi=({x:e,y:o})=>({x:lo(e),y:lo(o)}),Ii=e=>e.length===10,ht=(e,o)=>{try{const n=o.map(Oi);if(!Ii(n))throw new Ie(e);return n}catch{throw new Ie(e)}},Mi=Symbol("SCALED_COORDINATE"),co=e=>e.reduce(({max:o,min:n},{y:r})=>({max:Math.max(Number(o),Number(r)),min:Math.min(Number(n),Number(r))}),{max:-Infinity,min:Infinity}),K=(e,o)=>Object.assign(ne(e,2),{[Mi]:o}),we=({x:e,xScale:o,y:n,yScale:r})=>({x:K(e,o),y:K(n,r)}),ft=({x:e,y:o},{xScale:n,xShift:r,yScale:i,yShift:a})=>we({x:(e+r)*n,xScale:n,y:(o+a)*i,yScale:i}),bt=({points:e,xMax:o,xScale:n,yScale:r})=>[we({x:0,xScale:n,y:0,yScale:r}),...e,we({x:o,xScale:n,y:0,yScale:r})].reduce((i,a,c,d)=>{if(c===0||c===d.length-1)return i;const p=K(0,r),u=[{x:d[c-1].x,y:p},a,{x:d[c+1].x,y:p}];return[...i,u]},[]),yt=({segments:e,xMax:o,xScale:n,yScale:r})=>e.map(i=>{const[{x:a,y:c},{x:d,y:p},{x:u,y}]=i,h=u-a,S=p/h,f=6/S;if(f<1){const x=f*.2*a,R=a-x,$=u+x,O=R<0?Math.abs(R):$>o?o-$:0,P=R+O,V=$+O,A=f*.3,F=d+O,I=A*p,X=p-I;return[we({x:P,xScale:n,y:c,yScale:r}),we({x:F,xScale:n,y:X,yScale:r}),we({x:V,xScale:n,y,yScale:r})]}return i}),Li=({x:e,y:o},{x:n,y:r})=>{const i=n-e,a=r-o;return{angle:Math.atan2(a,i),length:Math.sqrt(i**2+a**2)}},mo=({current:e,previous:o,next:n,reverse:r,smoothing:i,xScale:a,yScale:c})=>{const d=r?Math.PI:0,p=Li(o,n),u=p.angle+d,y=p.length*i,{x:h,y:S}=e,v=h+Math.cos(u)*y,f=S+Math.sin(u)*y;return{x:K(v,a),y:K(f,c)}},St=({index:e,point:o,points:n,smoothing:r,xScale:i,yScale:a})=>{const c=n[e-1];if(c==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const d=n[e-2]??c,p=mo({current:c,previous:d,next:o,reverse:!1,smoothing:r,xScale:i,yScale:a}),u=c,y=n[e+1]??o,h=mo({current:o,previous:u,next:y,reverse:!0,smoothing:r,xScale:i,yScale:a});return[p,h,o]},po=({segment:e,smoothing:o,xScale:n,yScale:r})=>e.reduce((i,a,c)=>{if(c===0)return i;const p=St({index:c,point:a,points:e,smoothing:o,xScale:n,yScale:r}).map(u=>`${u.x},${u.y}`).join(" ");return[...i,`C ${p}`]},[]),ji=({baseYCoordinate:e,isBaselineBelowMidpoint:o,segments:n,xScale:r,yMax:i,yScale:a,yTilt:c=!1})=>n.reduce((d,p,u,y)=>{const{length:h}=y,[S,v,f]=p,{x:k,y:x}=S,{x:R,y:$}=v,{x:O,y:P}=f,V=O-k,A=V===0?0:Math.max($/V*ut,pt),F=c?.1:0,I=1-F,X=1+F,J=u%2==0?I:X,Z=o?x+e:i-x+e,U={x:k,y:K(Z*J,a)},Q=u%2==0?I:X,ee=o?P+e:i-P+e,Y={x:K(O,r),y:K(ee*Q,a)},H=R-k,N=O-R,z=N>H?0:0-(R-k)*ao,q=(h-u)*(a/100*i),ce={x:K(R+z,r),y:K($-q,a)},de=po({segment:[U,ce,Y],smoothing:A,xScale:r,yScale:a}),me=N>H?(O-R)*ao:0,ye={x:K(R+me,r),y:K(i-q,a)},te=po({segment:[Y,ye,U],smoothing:A,xScale:r,yScale:a});return[...d,[`M ${U.x},${U.y}`,...de,...te,"Z"].join(" ")]},[]),Di=({hash:e,xPadding:o=0,xScale:n=1,yOffset:r=.5,yPadding:i=0,yScale:a=1})=>{const c=gt(e),d=ht(e,c),p=ct(d,({x:P},{x:V})=>Number(P)===Number(V)?0:Number(P)>Number(V)?1:-1),u=o/2,y=i/2,h=p.map(P=>ft(P,{xScale:n,xShift:u,yScale:a,yShift:y})),S=(ge+o)*n,{max:v}=co(h),f=(v+i)*a,k=bt({points:h,xMax:S,xScale:n,yScale:a}),x=yt({segments:k,xMax:S,xScale:n,yScale:a}),R=r>.5,$=R?f*r:-1*f*r;return{segmentPaths:ji({baseYCoordinate:$,segments:x,xScale:n,yMax:f,isBaselineBelowMidpoint:R,yScale:a}),xMax:S,yMax:f}};var vt;(function(e){e.PNG="png"})(vt||(vt={}));const Et=process.cwd(),Me=e=>e.startsWith("/")?pe.resolve(Et,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):pe.extname(e)==""?pe.resolve(Et,"./src/pages/",`${e}.tsx`):e;var Te;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(Te||(Te={}));var he;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(he||(he={}));const Bi="origin",$i="main",Le=e=>{const{branch:o=$i,decode:n,filter:r=Te.FIRST,format:i,path:a=Et,remote:c=Bi}=e,{error:d,stdout:p}=sn.spawnSync("git",["log",...r.split(" "),`--branches=${o}`,`--format=${i}`,`--remotes=${c}`,"--",a]);if(d)throw d;const u=p.toString().trim();return(u===""?[]:u.split(`
`)).map(n)},kt=e=>{const o=new Date(e);if(!isNaN(o.getTime()))return o},Ni=e=>{const o=Me(e),[n=null]=Le({decode:kt,filter:Te.CURRENT,format:he.ISO_DATE,path:o});return n},Hi=e=>{const o=Me(e),[n=null]=Le({decode:kt,format:he.ISO_DATE,path:o});return n},_i=e=>{const o=Me(e),[n=null]=Le({decode:kt,filter:Te.FIRST_MERGE,format:he.ISO_DATE,path:o});return n},wt=e=>{const o=Ze.readFileSync(e).toString();let n=an.createHash("sha1");return n.update(o),n.digest("hex")},Fi=e=>{const o=Me(e),[n]=Le({decode:Ne,format:he.HASH,path:o});return n??wt(o)},Ui=e=>{const o=Me(e),[n]=Le({decode:Ne,filter:Te.FIRST_MERGE,format:he.HASH,path:o});return n??wt(o)},Yi={height:630,width:1200},zi=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",Gi=rn({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Xi=(e,o,n=vt.PNG,r=Yi)=>{const i=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=Gi.hash(o),c=pe.resolve(i,`${a}.${n}`),d=c.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:c,imageType:n,publicPath:d,...r}}};var fe;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(fe||(fe={}));const uo=(e,o,n,r,i=[M.TECHNOLOGY])=>{const a=r===fe.MUTABLE,c=r===fe.IMMUTABLE_MERGE,d=o.replace(/^file:(\/\/)?/,""),p=a?wt(d):c?Ui(e):Fi(e),u={created:(c?_i(e):Hi(e))??Ze.statSync(d).ctime,updated:Ni(e)??Ze.statSync(d).mtime},h=Xi(o,a?{importURL:o,stat:u,topics:i}:{hash:p,importURL:o});return{hash:p,host:zi,path:e,social:h,stat:u,title:n,topics:i}},go=()=>t(_,null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Wi=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t(go,null))),Vi=1.6180334,Ki=4,ho=ne(Vi*5,6),fo=.75,Ce=.15,qi=1.5,Re=ae("6rem",`${100/ho}vw`,"10rem"),Ji=l(B,{height:Re,position:"relative",width:"100%"}),Qi=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Zi=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var je;(function(e){e.INLINE="inline",e.NONE="none"})(je||(je={}));const Tt={xPadding:Ki,xScale:ho,yOffset:fo,yPadding:Ce,yScale:qi},Ct=e=>{const{className:o,defsUsage:n=je.INLINE,hash:r,height:i,rawSVG:a=!1,styleRenderer:c=le,title:d,topics:p=[],width:u}=e,y=p.length<2?[...p,M[Ye]]:p,h=P=>`${P}-${r}`,{segmentPaths:S,xMax:v,yMax:f}=Di({...Tt,hash:r}),k=f*fo,x=f*Ce/10.24,R=x*.75,O=t(Qi,{className:Wt,height:i,preserveAspectRatio:"none",viewBox:[0,0,v,f].join(" "),width:u},t("title",null,"Generated art for the page or post titled"," ",t("i",null,d),", with the content or commit hash ",r," ",y.length>0?[", and the topics: ",y.map(String).join(", ")]:null),t("defs",null,n===je.INLINE?t(go,null):null,t("filter",{id:h("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:R,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:x,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:h("blurOverlayClip")},t("rect",{x:"0",width:v,y:k,height:f})),t("filter",{id:h("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:R}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:x})),t("filter",{id:h("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:R}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:x}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:x})),t("g",{id:h("blobs")},S.map((P,V)=>{const A=V%y.length,F=y[A],I=c.renderRule(()=>({...s.topicColors[F]}),Object.keys);return t(Zi,{key:P,className:I,d:P,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${f*Ce})`,`scale(1, ${1-Ce*2})`].join(" "),filter:`url(#${h("blur")})`},t("use",{href:`#${h("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${h("blurOverlayClip")})`,filter:`url(#${h("blurOverlay")})`,transform:[`translate(0, ${f*Ce})`,`scale(1, ${1-Ce*2})`].join(" ")},t("use",{href:`#${h("blobs")}`,mask:"url(#softVerticalFade)"})));return a?O:t(Ji,{className:o},O)},es=[,"January","February","March","April","May","June","July","August","September","October","November","December"],ts=l("time",{nested:{[s.darkMode]:{...s[s.darkMode].deemphasize}},...s.deemphasize});var re;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(re||(re={}));const Ae=({date:e,mode:o=re.DEFAULT,...n})=>{const r=e.getMonth()+1,i=e.getFullYear(),a=o===re.SHORT?`${r}/${i}`:o===re.META?"":[e.getDate(),es[r],i].join(" ");return t(ts,{...n,datetime:e.toISOString()},a)},os=l("a",{...s.topicTagLink(s.topicTagIdentifier.className)}),ns=l("span",s.topicTagIdentifier()),rs=l(ns,{...s.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),is=({className:e,link:o=!0,topic:n})=>{const r=pr(n),i=nt(n);if(r==null||typeof i!="string")throw new Error(`Unexpected topic: ${String(i)}`);const a=o?os:"span",c=o?{href:`/blog/topics/${r}/`}:{};return t(a,{className:[e,s.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...c},t(rs,null,i))},bo=l(is,e=>({...s.topicTagOuter,...s.topicColors[nt(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),ss=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),as=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),yo=({className:e,link:o=!0,topics:n})=>t(ss,{className:e},n.map(r=>typeof r=="string"?t(as,{key:cr(r)},t(bo,{link:o,topic:r})):null)),ls=e=>e.reduce((o,n)=>{const r=n.stat.created.getFullYear(),i=o[r]??[];return{...o,[r]:[...i,n]}},{}),cs=l(B,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),ds=l(B,{...s.blog.listing.item,minHeight:Re,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),ms=l(B,{paddingTop:`calc(${Re} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),ps=l(B,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),us=l("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),gs=Fe({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),hs=l("h2",{...s.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),fs=l(Ae,{padding:"0 0.5rem 0.125rem 0"}),bs=l(yo,{gridColumn:"3 / 3"}),ys=l("div",{...s.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),Ss=l("a",{fontSize:"0.875em"});var Ve;(function(e){e.DATE="date"})(Ve||(Ve={}));var Ke;(function(e){e.ASC="asc",e.DESC="desc"})(Ke||(Ke={}));const vs=({order:e=Ke.DESC,posts:o,sort:n=Ve.DATE})=>{const r=o.slice().sort((a,c)=>e===Ke.DESC&&n===Ve.DATE?a.stat.created>c.stat.created?-1:1:0),i=ls(r);return t(_,null,Object.entries(i).map(([a,c])=>t(_,{key:a},t(cs,null,c.map(d=>{const{CustomArt:p=Ct,description:u,hash:y,path:h,stat:{created:S},title:v,topics:f}=d;return t(ds,{key:h},t(ms,{as:"a",href:h},t(us,null,t(p,{defsUsage:je.NONE,hash:y,padded:!0,renderType:"listing",title:v,topics:f})),t(ps,null,t(hs,{className:gs},v),t(fs,{date:S}))),t(bs,{link:!1,topics:f}),t(ys,{className:s.blog.listing.descriptionIdentifier},u),t("p",null,t(Ss,{href:h},"Read more\u2026")))})))))},Es=()=>t(_,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));Ar();const So=({children:e,meta:{description:o,host:n,redirect:r,social:{image:i},title:a},...c})=>r?t(Bt,{...c},t($e.title,null,"Redirecting to ",r),t("meta",{"http-equiv":"refresh",content:`0; URL=${r}`}),t("link",{rel:"canonical",href:r})):t(Bt,{...c},t($e.title,null,a," | Eyelidlessness"),o!=null?t($e.description,null,o):t(_,null),t("meta",{name:"theme-color",content:s.siteLogo.color}),t("style",{dangerouslySetInnerHTML:{__html:Rr}}),t("meta",{name:"twitter:card",content:"summary_large_image"}),t("meta",{name:"twitter:site",content:"@eyelidlessenss"}),t($e.image,{alt:a,height:i.height,src:`${n}${i.publicPath}`,width:i.width}),t(_,null,e),t(Es,null)),ks=({as:e="div",devilsBreakpoint:o,gap:n,...r})=>{const i=l(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return t(i,{...r})},ws=l("svg",{...s.visiblyHidden,position:"absolute"}),be=512,vo=[0,0,be,be].join(" "),Ts=be/2,Cs=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),Rs=()=>t(ws,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:vo,width:"0"},t("defs",null,t("mask",{id:"octocat-knockout"},t("rect",{fill:"#fff",height:be,mask:"url(#octocat)",rx:Ts,width:be}),t("path",{d:Cs,fill:"#000"})))),As=l("rect",{...s.gitHubLogo}),Eo=({className:e})=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:vo},t("title",null,"GitHub"),t(As,{height:be,mask:"url(#octocat-knockout)",width:be})),qe={height:60,width:338},xs=l("svg",{display:"inline-block",maxWidth:"100%",width:`${qe.width}px`}),Ps=l("use",{nested:{[s.darkMode]:{...s[s.darkMode].siteLogo}},...s.siteLogo,fill:"currentcolor"}),Os=`0 0 ${qe.width} ${qe.height}`,Is=()=>t(xs,{viewBox:Os},t(Ps,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),t("title",null,"Eyelidlessness")),{columns:xe}=s.siteHeader,Ms=`
  ${xe[0]}
  ${xe[1]}
  min(
    ${xe[2][0]},
    ${xe[2][1]}
  )
  ${xe[3]}
  ${xe[4]}
`.replace(/\s+/g," "),Ls=l("header",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Ms,padding:"clamp(0.5rem, 4vmin, 2rem) 0",position:"relative",zIndex:1,nested:{[s.print]:{nested:{'&[data-page-id="resume"]':{display:"none"}}}}}),js=l("div",{gridColumn:3}),Ds=l("div",{margin:"0 auto"}),Bs=l("a",{textDecoration:"none"}),$s=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),ko=1,Ns=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${ko/2}rem`,padding:0}),Hs=l("a",{...s.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[s.darkMode]:{...s[s.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),wo="1.5em",Cl=l(Eo,{display:"block",width:`clamp(1.125em, 4vw, ${wo})`}),_s=e=>{const o=e.meta.pageId==null?{}:{"data-page-id":e.meta.pageId},n=[{label:"Blog",location:"/"},{label:"Hire me",location:"/resume/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],r=n.reduce((c,d)=>typeof d.label=="string"?c+d.label.length:c,0),i={horizontal:"2rem"},a=`${[`${qe.width}px`,i.horizontal,`${r+2}ch`,wo,`${n.length*ko}rem`].join(" + ")}`;return t(Ls,{...o},t(js,null,t(ks,{as:"nav",devilsBreakpoint:a,gap:i},t(Ds,null,t(Bs,{href:"/"},t(Is,null))),t($s,null,n.map(({location:c,label:d})=>t(Ns,null,t(Hs,{href:c},d)))))))},Fs=l(B,{paddingTop:0,paddingBottom:"4em",nested:{[s.print]:{nested:{'&[data-page-id="resume"]':{paddingTop:"1rem",paddingBottom:"1rem"}}}}}),Us=e=>{if(e.pageId!=null)return{"data-page-id":e.pageId}},To=({meta:e,...o})=>t(ue,null,e.redirect==null?t(_,null,t(Rs,null),t(_s,{meta:e}),t(Fs,{as:"main",...Us(e),...o})):t(_,null)),Ys=l(B,{...s.description,nested:{...s.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),zs=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Gs=l("div",{fontSize:"0.889em"}),Xs=({as:e="section",title:o,...n})=>t(Ys,{as:e,itemprop:"description"},o?t(zs,null,o):null,t(Gs,{...n})),Ws=l(B,{paddingTop:"1rem"}),Vs=l("h1",{marginBottom:"0.25rem"}),Ks=l(B,{paddingBlock:"1rem"}),qs=e=>{const{children:o,CustomArt:n,description:r,descriptionRaw:i,hash:a,stat:{created:c},title:d,topics:p}=e;return t(_,null,t(So,{meta:{...e,description:i}}),t(To,{as:"article",meta:e},t(Ks,null,n==null?t(Ct,{hash:a,title:d,topics:p}):t(n,{hash:a,renderType:"post",StylesProvider:ue,title:d,topics:p}),t(Ws,null,t(Vs,null,d),t(Ae,{date:c,itemprop:"datePublished"}),t(yo,{link:!1,topics:p}))),t(Xs,null,r),o))},Co={IMMUTABLE:fe.IMMUTABLE,IMMUTABLE_MERGE:fe.IMMUTABLE_MERGE},Js=async e=>{const{description:o,importURL:n,path:r,redirect:i,title:a,topics:c,type:d=Co.IMMUTABLE_MERGE}=e,{CustomArt:p,hash:u,host:y,social:h,stat:S}=uo(r,n,a,d,c),v=ki`${It(t(_,null,o))}`;return{CustomArt:p,description:o,descriptionRaw:v,hash:u,host:y,path:r,redirect:i,social:h,stat:S,title:a,topics:c}},Ro="@media screen and (min-width: 41.666rem)",Qs=l("div",{display:"block",margin:0,padding:0,nested:{"& > *":{containerType:"inline-size"},"& > * + *":{paddingTop:"1rem"},[Ro]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}},[s.print]:{display:"none"}}}),Zs=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),ea=e=>{const o=Array();return e.role===E.CREATOR&&o.push(e.description),e.summary!=null&&o.push(e.summary),o.length===0&&o.push(e.description),t(Zs,null,o.map(n=>ke(n)))},ta=({date:e,...o})=>e==null?null:t(Ae,{...o,date:e}),oa=l("span",{nested:{[s.darkMode]:{...s[s.darkMode].deemphasize}},...s.deemphasize}),na=/^(\d{4})-(\d{2})$/,Ao=e=>{if(e==null)return null;const o=na.exec(e);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,r]=o;return new Date(`${n}-${r}-01T00:00:00`)},xo=l("div",{fontSize:"0.88889em",whiteSpace:"nowrap",nested:{"& time":{fontSize:"inherit"}}}),Po=({className:e="",range:[o,n]})=>{const r=Ao(o),i=Ao(n);return o==n?t(xo,{className:e},t(Ae,{date:r,itemprop:"endDate",mode:re.SHORT})):t(xo,null,t(Ae,{date:r,itemprop:"startDate",mode:re.SHORT}),t(oa,null,"-"),t(ta,{date:i,itemprop:"endDate",mode:re.SHORT}))},ra=l("div",{display:"grid",rowGap:"0.325rem",nested:{"& > *":{margin:0}}}),Rt="1.0625rem",ia=l("h3",{fontFamily:s.prose.fontFamily,fontWeight:500,fontSize:Rt,paddingLeft:0,textIndent:0,nested:{[s.print]:{fontSize:"1rem"}}}),sa=l("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),aa=l("a",{alignSelf:"baseline",display:"block",flexShrink:0,height:`calc(${Rt} * ${s.headingLineHeight})`,lineHeight:`calc(${Rt} * ${s.headingLineHeight*1.5})`,padding:"0 0.5rem",zIndex:1,nested:{"& svg":{width:"1em"},[Ro]:{paddingLeft:0},[s.print]:{display:"none"}}}),la=l("div",{flexGrow:1,paddingTop:"0.05556rem"}),ca=l("div",{alignItems:"start",display:"flex",padding:"1rem 0 0"}),Oo=({project:{description:e,end:o,repo:n,role:r,title:i,start:a,summary:c}})=>t(ca,null,t(aa,{href:n},t(Eo,null)),t(la,null,t(ra,null,t(ia,null,t(sa,{href:n},i)),t(Po,{range:[a,o]})),t(ea,{role:r,description:e,summary:c??null}))),Io=l("h2",{fontSize:ae(`${s.headingRanges.h3.minEm}em`,`${s.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Mo=l("div",{marginTop:"0.5rem"}),da=l("div",{display:"none",nested:{[s.print]:{display:"block"}}}),ma=e=>{const{creator:o,contributor:n}=e.projects.reduce((i,a)=>{const c=a.role===E.CREATOR?"creator":"contributor";return{...i,[c]:[...i[c],a]}},{creator:[],contributor:[]}),r=o.length+n.length;return t(_,null,t(Qs,null,t("div",null,t(Io,null,"Projects I Created"),t(Mo,null,o.map(i=>t(Oo,{project:i})))),t("div",null,t(Io,null,"Open Source Contributions"),t(Mo,null,n.map(i=>t(Oo,{project:i}))))),t(da,null,t("h2",null,"Projects"),r," projects listed at "," ",t("a",{href:"https://eyelidlessness.github.io/resume/#projects"},"eyelidlessness.github.io/projects")))},pa=l(B,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),De=e=>t(pa,{as:"section",...e}),ua="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",ga=({fill:e,topic:o})=>{const n=s.topicColors[o];return{...n,...e?{fill:"currentcolor",fillOpacity:.05,mask:"url(#curvesVerticalFade)",strokeWidth:0,nested:{...n.nested,[s.darkMode]:{fillOpacity:.15}}}:{fill:"none",strokeWidth:1,stroke:"currentcolor"},transition:ua,vectorEffect:"non-scaling-stroke"}},ha=({fill:e,index:o,topic:n,...r})=>t("path",{...r}),Lo=l(ha,ga),fa=l("svg",{overflow:"visible",padding:"1rem"}),ba=20,ya={xMax:ge,xScale:1,xShift:0,yMax:ge,yScale:1,yShift:0},Sa=({className:e,hexPoints:o,points:n,pointSize:r=6,scaleOptions:i,segments:a,sortIndexes:c,sortToggleClass:d,topics:p,...u})=>{const{xScale:y,xShift:h,xRange:S=y*(ge+h*2),yMax:v,yShift:f,yScale:k,yRange:x=k*(v+f*2)}={...ya,...i},R=ba*2,$=u.height??x+R,O=u.width??S+R,P=({x:A,y:F},I)=>{const X=c[I],{x:J,y:Z}=n[X],U=ne((A+h)/S*100,4),Q=100-ne((F-f)/x*100,4),ee=ne((J+h)/S*100,4),Y=100-ne((Z-f)/x*100,4),H=0-ne(U-ee,4),N=0-ne(Q-Y,4);return{cx:U,cy:Q,sortedCx:ee,sortedCy:Y,sortedTranslateXPercent:H,sortedTranslateyPercent:N}},V=a.map(A=>{const[F,I,X]=A,{x:J}=F,{y:Z}=I,{x:U}=X,Q=U-J,ee=Q===0?0:Math.max(Z/Q*ut,pt);return{cubicPoints:A?.reduce((H,N,z)=>{if(z===0)return H;const q=St({index:z,point:N,points:A,smoothing:ee,xScale:y,yScale:k});return[...H,q]},[]),segment:A}});return t(fa,{className:e,height:$,width:O,preserveAspectRatio:"none",viewBox:`0 0 ${O} ${$}`},t("defs",null,t("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.15","stop-color":"white","stop-opacity":".95"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),t("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),V.map(({cubicPoints:A,segment:F},I)=>{const[X,J,Z]=F,U=A.map(([Y,H],N)=>[N===0?X:J,Y,H,N===0?J:Z]);return t(_,null,t(()=>t(_,null,U.map(Y=>{const H=Y.map((z,q)=>{const{cx:ce,cy:ie}=P(z,I),de=ce/100*O,me=ie/100*$;return`${q===0?"M ":q===1?"C ":""} ${de},${me}`}).join(" "),N=p[I%p.length];return t(Lo,{d:H,index:I,topic:N})})),null),t(()=>{const Y=U.map((N,z)=>N.map((ce,ie)=>{if(z>0&&ie===0)return"";const{cx:de,cy:me}=P(ce,I),ye=de/100*O,L=me/100*$;return`${ie===0?"M ":ie===1?"C ":""} ${ye},${L}`}).join(" ")).join(" "),H=p?.[I%p.length];return t(Lo,{d:Y,fill:!0,index:I,topic:H})},null))}))},jo=({className:e="",hash:o,height:n,identifier:r=_e,renderType:i,StylesProvider:a=ue,styleRenderer:c=le,topics:d=[],width:p})=>{const u=gt(o),y=ht(o,u),{xPadding:h,xScale:S,yPadding:v,yScale:f}=Tt,k=i==="meta",x=k?0:h,R=k?0:v,$=x/2,O=R/2,P={xScale:S,xShift:$,yScale:f,yShift:O},A=ct(y,({x:L},{x:te})=>L===te?0:L>te?1:-1).map(L=>ft(L,P)),F=A.map((L,te)=>te),I=A.map(L=>u[A.indexOf(L)]),X=(ge+x)*S,J=r(),Z=bt({points:A,xMax:X,xScale:S,yScale:f}),U=yt({segments:Z,xMax:X,xScale:S,yScale:f}),Q=k?{"& path":{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,ee=k?"0 !important":"0 0 1rem !important",Y=Re,H="100%",N=L=>typeof L=="number"?`${L}px`:L,z=(L,te)=>typeof L=="number"?L*te:L,q=k?z(n??Y,.95):Re,ce=k?z(p??H,.95):"100%",ie=k&&n!=null?z(n,.95):n,de=k&&p!=null?z(p,.95):p,me=c.renderRule(()=>({gridColumn:"1 / -1",height:N(q),padding:ee,width:N(ce),nested:{...Q}}),Object.keys),ye=k?e:`${e} ${me}`;return t(a,null,t(Sa,{className:ye,height:ie,hexPoints:I,points:A,scaleOptions:P,segments:U,sortIndexes:F,sortToggleClass:J,topics:d,width:de}))},va=l(B,{nested:{[s.print]:{paddingInline:"0.125rem"}}}),Do=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),Ea=l(Do,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),ka=l(Ea,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",paddingTop:ae("0.5rem","3vw","2rem"),nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),wa=l(De,{padding:0}),Ta=l(Do,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),Ca=l("a",{...s.resume.contactList.link,fontSize:"0.88889em",minWidth:"auto",textDecoration:"none",nested:{"&, &:hover":{fontWeight:500}}}),Ra=l("span",{nested:{[s.print]:{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),At=({children:e,printLabel:o,...n})=>t(Ca,{...n},t(Ra,{"data-print-label":o},t("span",null,e))),Aa=l(B,{...s.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...s.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"}}}),Bo="@media (min-width: 44.625rem)",xa=l("h2",{fontSize:"1em",marginBottom:0,paddingLeft:0,textIndent:0,nested:{[Bo]:{justifySelf:"end"}}}),Pa=l("div",{alignItems:"baseline",display:"grid",gap:"0.5rem 0",gridTemplateColumns:"auto",gridTemplateRows:"auto",fontSize:"0.88889em",nested:{[Bo]:{gridTemplateColumns:"auto 1fr"}}}),Oa=l("ul",{display:"block",margin:0,padding:"0 0 0 1rem"}),Ia=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Ma=l("svg",{display:"inline-block",margin:"0 0.325rem 0 0",verticalAlign:"middle",nested:{[s.print]:{height:"0.325rem",width:"0.325rem"}}}),La=l("circle",{fill:"currentcolor"}),Je=e=>t(Ma,{xmlns:"http://www.w3.org/2000/svg",className:e.className,width:"8",height:"8",viewBox:"0 0 8 8"},t(La,{cx:"4",cy:"4",r:"4"}),t("title",null,"Skill level: ",e.level)),ja={[b.BASIC]:l(Je,{...s.resume.skillLevel[b.BASIC]}),[b.INTERMEDIATE]:l(Je,{...s.resume.skillLevel[b.INTERMEDIATE]}),[b.ADVANCED]:l(Je,{...s.resume.skillLevel[b.ADVANCED]}),[b.EXPERT]:l(Je,{...s.resume.skillLevel[b.EXPERT]})},Da=l("div",{display:"contents"}),Ba=({name:e,skills:o})=>t(Da,{itemscope:!0,itemtype:"http://schema.org/ItemList"},t(xa,{itemprop:"name"},io(e)),t(Oa,null,o.map(({level:n,name:r})=>{const i=ja[n];return t(Ia,{key:r,itemprop:"itemListElement"},t(i,{level:n}),io`${r}`)}))),$a=l(B,{padding:"1rem 0"}),Na=l("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),Ha=l("h2",{marginBottom:0}),_a=l("ul",{fontSize:"0.88889em",paddingInlineStart:0}),Fa=l("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),Ua=l($a,{padding:"1.5rem 0",position:"relative",nested:{"&:last-child:after":{display:"none"},"&:nth-of-type(odd)":{...s.resume.employment.itemOdd},"&:nth-of-type(even)":{...s.resume.employment.itemEven},"& strong":{fontWeight:500,nested:{[s.darkMode]:{fontWeight:400}}},[s.print]:{paddingBottom:0}}}),Ya=l("div",{alignItems:"baseline",display:"grid",columnGap:"0.5rem",gridTemplate:`
    "employer time-range"
    "position position"
  `,justifyContent:"space-between",nested:{[s.print]:{gridTemplate:`
        "employer position time-range"
      `,gridAutoColumns:"1fr auto auto"}}}),za=l("h3",{gridArea:"employer",marginBottom:0,whiteSpace:"nowrap"}),Ga=l(Po,{gridArea:"time-range"}),Xa=l("div",{fontSize:"0.88889rem",fontWeight:s.deemphasize.fontWeight,gridArea:"position",nested:{[s.print]:{nested:{"&:after":{content:'","'}}}}}),Wa=({employer:e,end:o,highlights:n,position:r,start:i,summary:a,...c})=>t(Ua,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...c},t(Ya,null,t(za,{itemprop:"name"},e),t(Xa,{itemprop:"roleName"},r),t(Ga,{range:[i,o]})),a==null?null:t(Na,{itemprop:"description"},ke(a)),n==null?null:t(_a,{itemtype:"http://schema.org/ItemList"},n.map(d=>t(Fa,{key:d,itemprop:"itemListElement"},ke(d))))),Va=l(De,{...s.resume.employment.container,marginTop:"1rem"}),Ka=({employment:e})=>t(Va,null,t(Ha,null,"Recent Experience"),e.history.map(o=>t(Wa,{...o}))),qa=l(B,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),Ja=l(Ae,{...s.visiblyHidden}),$o=e=>e.replace(/^https?:\/\/|\/$/g,""),Qa=({className:e,id:o,meta:n,resume:r,updated:i})=>{const{contact:{email:a,website:c},employment:d,info:p,name:u,projects:y,skills:h,social:S}=r;return t(qa,{className:e,id:o,itemscope:!0,itemtype:"http://schema.org/Person"},t(va,null,t(jo,{...n,renderType:"post"})),t(wa,null,t(ka,null,t("h1",{itemprop:"name"},u),t(Ja,{date:i,itemprop:"datePublished",mode:re.META}),t(Ta,null,t(At,{href:`mailto:${a}`,itemprop:"email",printLabel:a},"Email"),t(At,{href:c,itemprop:"url",printLabel:$o(c),rel:"me"},"Website"),S.map(({network:v,url:f})=>t(At,{href:f,itemprop:"url",printLabel:$o(f),rel:"me"},v)))),t(Aa,{itemprop:"description"},ke(p.brief))),t(De,{"aria-label":"Skillsets"},t(Pa,null,Object.entries(h.merged).map(([v,f])=>t(Ba,{key:v,name:v,skills:f})))),t(Ka,{employment:d}),t(De,{id:"projects"},t(ma,{projects:y})),t(De,null,t("h2",null,"References"),ke("Available upon request")))},Rl=l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),Al=l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),xl=l("a",{...s.resume.contactList.link,textDecoration:"none"});export{Re as BLOG_ART_HEIGHT,Ct as BlogArt,Wi as BlogArtDefs,vs as BlogListing,Co as BlogMetadataType,qs as BlogPost,ge as COORDINATE_MAX,so as COORDINATE_MIN,B as FullBleedContainer,Zt as FullBleedScrollableOverflow,to as FullBleedSymbolBlock,So as Head,Ie as InvalidHashError,pt as MIN_SMOOTHING,To as Main,fe as PageMetadataType,Qa as Resume,jo as ResumeArt,ut as SMOOTHING_RATIO,ue as StylesProvider,M as Topic,bo as TopicTag,tt as __SNOWPACK_ENV__,Tt as blogArtDefaultParameters,ae as clamp,St as cubicBezierPoints,Js as getBlogPostStaticProps,bt as getNaiveSegments,yt as getNonPhallicSegments,uo as getPageMetadata,Ci as hexChars,_e as identifier,ke as mdx,le as renderer,vn as resetAbbrContext,ar as resume,ft as scalePoint,ct as sortBy,l as styled,s as theme,ne as toFixed,gt as toHexPointSequence,ht as toPointSequence,co as yBounds};
