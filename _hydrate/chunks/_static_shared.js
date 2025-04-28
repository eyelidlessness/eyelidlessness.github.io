import qe from"unist-util-visit";import{h as o,Fragment as z,toChildArray as Rt}from"https://cdn.skypack.dev/preact@10.5.10";import Bo from"@mdx-js/mdx";import{mdx as $e,MDXProvider as No}from"@mdx-js/preact";import{isobject as Ho,createComponent as _o,RendererProvider as Fo,Readonly as Uo,Object$1 as Yo,Optional as g,Unknown as zo,Literal as Go,String as d,Partial as ae,Union as xt,Boolean as At,Array$1 as j,Integer as Xo,Number$1 as Wo,emojiRegex as Vo,h as Pt,rehypeAccessibleEmojis as Ko,remarkSlug as qo,remarkSmartypants_1 as Jo}from"./_vendor/index.js";import{transform as Qo}from"buble-jsx-only";import Ot from"dedent";import It from"module";import Zo from"remark-mdx";import en from"remark-mdx-to-plain-text";import pe from"path";import{loadTheme as Mt,getHighlighter as Lt}from"shiki";import{BUNDLED_LANGUAGES as tn}from"shiki-languages";import{renderers as on}from"shiki-twoslash";import Je from"fs";import nn from"node-object-hash";import"fela-tools";import"sharp";import rn from"child_process";import sn from"crypto";import{Head as jt,seo as Be}from"microsite/head";import{createRenderer as an}from"fela";import{processStyleWithPlugins as cn,KEYFRAME_TYPE as Dt,isNestedSelector as ln,normalizeNestedProperty as dn,isMediaQuery as mn,generateCombinedMediaQuery as $t,isSupport as pn,generateDeclarationReference as un,isUndefinedValue as gn,generateCSSSelector as hn,RULE_TYPE as fn}from"fela-utils";import{cssifyDeclaration as bn,cssifyObject as yn}from"css-in-js-utils";import Bt from"md5";let Qe=new Set;const Sn=()=>{Qe=new Set},vn=()=>e=>{qe(e,"abbr",t=>{const{abbr:n}=t;Qe.has(n)&&(delete t.abbr,delete t.children,delete t.data,delete t.reference,Object.assign(t,{type:"text",value:n})),Qe.add(n)}),qe(e,"text",t=>{t.value.includes("\u200B")&&Object.assign(t,{value:t.value.replace(/\u200b/gu,"")})})},Nt="production",En="production",kn=!0;var Ze=Object.freeze({__proto__:null,MODE:Nt,NODE_ENV:En,SSR:kn});const Cn=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),R=(e,t)=>[e.join(","),"{",Object.entries(t).reduce((n,[r,i])=>typeof i=="object"&&(r==="nested"||r.includes("&"))?n:`${n}${Cn(r)}:${i};`,""),"}",Object.entries(t).map(([n,r])=>{if(typeof r=="object"){if(n==="nested")return Object.entries(r).map(([i,s])=>{const l=e.map(m=>i.replace(/&/g,m));return R(l,s)}).join("");if(n.includes("&")){const i=e.map(s=>n.replace(/&/g,s));return R(i,r)}}return""},[]).join("")].join(""),oe=(...e)=>`clamp(${e.join(",")})`,Se=e=>e.replace(/\s+/g," ").trim(),Ne=e=>e;function Pe(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function wn(e,t,n,r,i,s){const l=[];return i&&l.push(Pe(i).slice(0,16)),r&&l.push(Pe(r).slice(0,16)),n&&l.push(Pe(n).slice(0,16)),l.push(Pe(e).slice(0,16)),l.push(Pe(t).slice(0,16)),l.push(s.slice(0,8)),l.join("_")}function Tn(e,t,n=[""]){let r="";for(const s in e){const l=e[s];r=`${r}${s}{${yn(l)}}`}let i="";for(let s=0;s<n.length;s++){const l=n[s];i=`${i}@${l}keyframes ${t}{${r}}`}return i}function Rn(){return e=>(e.renderKeyframe=(t,n)=>{const r=t(n,e),i=cn(e,r,Dt,n),s=JSON.stringify(i);if(!e.cache.hasOwnProperty(s)){const l=Bt(s),m=(e.selectorPrefix||"_")+l.slice(0,8),p=Tn(i,m,e.keyframePrefixes),u={type:Dt,keyframe:p,name:m};e.cache[s]=u,e._emitChange(u)}return e.cache[s].name},e._renderStyleToClassNames=({_className:t,...n},r="",i="",s="")=>{let l=t?` ${t}`:"";for(const m in n){const p=n[m];if(Ho(p))if(ln(m))l+=e._renderStyleToClassNames(p,r+dn(m),i,s);else if(mn(m)){const u=$t(i,m.slice(6).trim());l+=e._renderStyleToClassNames(p,r,u,s)}else if(pn(m)){const u=$t(s,m.slice(9).trim());l+=e._renderStyleToClassNames(p,r,i,u)}else console.warn(`The object key "${m}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const u=un(m,p,r,i,s);if(!e.cache.hasOwnProperty(u)){if(gn(p)){e.cache[u]={className:""};continue}const h=bn(m,p),y=Bt(u),v=e.devMode?wn(m,p,r,i,s,y):(e.selectorPrefix||"_")+y.slice(0,8),f=hn(v,r),k={type:fn,className:v,selector:f,declaration:h,pseudo:r,media:i,support:s};e.cache[u]=k,e._emitChange(k)}const b=e.cache[u].className;b&&(l+=` ${b}`)}}return l},e)}import.meta.env=Ze;const He=It.createRequire(import.meta.url),{default:xn}=He("fela-identifier"),{default:An}=He("fela-plugin-embedded"),{default:Pn}=He("fela-plugin-multiple-selectors"),{default:On}=He("fela-plugin-typescript"),In=Nt==="development",Mn=()=>{const e=xn(),t=an({devMode:In,enhancers:[Rn(),e],plugins:[An(),Pn(),On()]});return{identifier:e,renderer:t}},{identifier:_e,renderer:ce}=Mn(),Ln=e=>Array.isArray(e)?e:[e],jn=e=>({children:t})=>o(Fo,{renderer:e},...Ln(t)),ue=jn(ce),Dn=e=>ce.renderRule(Ne,e),Fe=Object.assign(Dn,{global:ce.renderStatic.bind(ce)}),c=(e,t)=>{const n=typeof t=="function"?t:()=>t;return _o(n,e,Object.keys)},D=(e,t)=>Uo(Yo(e,t)),W=()=>g(zo()),Ht="FRESH@0.1.0",$n=D({format:Go(Ht,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:g(d({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),Bn=ae(D({label:d({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:d({description:"Profession type or 'character class'."}),image:d({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:d({description:"A short description or summary of yourself as a candidate."}),quote:d({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),Nn=ae(D({willing:xt([At(),d()],{description:"Willingness to relocate."}),destinations:j(d({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),Hn=ae(D({travel:Xo({description:"Percentage of time willing to travel (0 to 100)."}),authorization:d({description:"Work authorization: citizen, work visa, etc."}),commitment:j(d({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:At({description:"Open to remote employment opportunities."}),relocation:Nn},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),_n=j(ae(D({label:d({description:"A label for this contact information."}),category:d({description:"Type of contact information: email, phone, url, postal, or IM."}),value:d({description:"Phone number, email address, website, etc."})}))),Fn=ae(D({email:d({description:"Primary contact email.",format:"email"}),phone:d({description:"Primary phone number."}),website:d({description:"Website, blog, or home page.",format:"uri"}),other:_n},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),Un=ae(D({address:d({description:"Your full postal address."}),code:d({description:"Postal or other official routing code."}),city:d({description:"Your home city."}),country:d({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:d({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),Yn=j(D({employer:d({description:"Employer name."}),position:g(d({description:"Your position or formal job title."})),url:g(d({description:"Employer website.",format:"uri"})),start:g(d({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:g(d({description:"A summary of your achievements and responsibilities under this employer."})),highlights:g(j(d({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(d({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(j(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),zn=ae(D({summary:d({description:"Summary of overall employment."}),history:Yn},{description:"The 'employment' section describes the candidate's formal employment history."})),Gn=j(D({category:d({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:g(d({type:"string",description:"Friendly media name."})),url:g(d({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),Xn=j(D({title:d({description:"Project name or code-name."}),category:g(d({description:"Project type: open-source, private, side project, etc."})),description:g(d({description:"Project description or summary."})),summary:g(d({description:"A summary of your achievements and responsibilities on the project."})),role:g(d({description:"Your role on the project: Contributor, Creator, etc."})),url:g(d({description:"Project URL.",format:"uri"})),media:g(Gn),repo:g(d({description:"Repo URL.",format:"uri"})),start:g(d({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:g(j(d({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:g(d({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(j(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),Wn=ae(D({sets:j(D({name:d({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:g(d({description:"Level of mastery of the skill."})),skills:j(d({description:"Title or ID of a skill from the skills list."}))})),list:j(D({name:d({description:"The name or title of the skill."}),level:g(d({description:"A freeform description of your level of mastery with the skill."})),summary:g(d({description:"A short summary of your experience with this skill."})),years:g(xt([d(),Wo()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),Vn=j(D({title:g(d({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:d({description:"College or school name."}),area:g(d({description:"e.g. Arts"})),studyType:g(d({description:"e.g. Bachelor"})),start:g(d({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:g(d({description:"Grade or GPA."})),curriculum:g(j(d({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:g(d({description:"Website or URL of the institution or school.",format:"uri"})),summary:g(d({description:"A short summary of this education experience."})),keywords:g(j(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:g(j(d({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(d({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),Kn=D({summary:g(d({description:"Summary of overall education."})),level:d({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:g(d({description:"Your degree, if any (BSCS, BA, etc.)."})),history:g(Vn)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),qn=j(D({network:d({description:"The name of the social network, such as Facebook or GitHub."}),user:d({description:"Your username or handle on the social network."}),url:d({description:"URL of your profile page on this network.",format:"uri"}),label:g(d({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."}),fc=D({name:d({description:"The candidate's name as it should appear on the resume."}),meta:$n,info:g(Bn),disposition:g(Hn),contact:g(Fn),location:g(Un),employment:g(zn),projects:g(Xn),skills:g(Wn),education:g(Kn),social:g(qn),services:W(),recognition:W(),writing:W(),reading:W(),speaking:W(),governance:W(),languages:W(),samples:W(),references:W(),testimonials:W(),interests:W(),extracurricular:W(),affiliation:W()},{title:"FRESH Resume Schema"});var C;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(C||(C={}));var E;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator",e.DEVELOPER="Developer"})(E||(E={}));const Jn=Date.now(),Ue=e=>e==null?Jn:new Date(e).getTime(),Qn=e=>e.slice().sort((t,n)=>{const r=Ue(t.end),i=Ue(n.end);if(r>i)return-1;if(i>r)return 1;const s=Ue(t.start),l=Ue(n.start);return s>l?-1:l>s?1:0}),Zn=e=>Qn(e),er=Zn([{title:"@getodk/xforms-engine",category:C.OPEN_SOURCE,description:`
      Client-agnostic, reactive runtime for
      [ODK XForms](https://getodk.github.io/xforms-spec/)
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xforms-engine",role:E.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/xpath",category:C.OPEN_SOURCE,description:`
      Extensible XPath 1.0 interpreter, supporting
      [ODK XForms](https://getodk.github.io/xforms-spec/#xpath-functions)
      extensions, arbitrary DOM implementations
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xpath",role:E.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/tree-sitter-xpath",category:C.OPEN_SOURCE,description:`
      [tree-sitter](https://tree-sitter.github.io/tree-sitter/) parser for
      XPath 1.0 syntax
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/tree-sitter-xpath",role:E.CREATOR,start:"2023-10",end:"2025-04"},{title:"@getodk/web-forms",category:C.OPEN_SOURCE,description:`
      [ODK Web Forms](https://github.com/getodk/web-forms) UI client
    `,repo:"https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/web-forms",role:E.CONTRIBUTOR,start:"2024-03",end:"2025-04"},{title:"Astro",category:C.OPEN_SOURCE,description:`
      "Build faster websites with less client-side Javascript"
    `,summary:`
      Collaborate with core contributors to add support for rendering
      [SolidJS](https://www.solidjs.com/) components.
    `,repo:"https://github.com/snowpackjs/astro",role:E.CONTRIBUTOR,start:"2021-07",end:"2021-07"},{title:"Enketo",category:C.OPEN_SOURCE,description:`
      "Web forms evolved. Deploy and conduct surveys that work without a
      connection, on any device."
    `,summary:`
      Long-term maintenance.
    `,repo:"https://github.com/enketo",role:E.DEVELOPER,start:"2021-04",end:"2023-10"},{title:"Microsite",category:C.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:E.CONTRIBUTOR,start:"2021-01",end:"2021-05"},{title:"HNDarkMode",category:C.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:E.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:C.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:E.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:C.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:E.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:C.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:E.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:C.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:E.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:C.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:E.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:C.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:E.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:C.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:E.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:C.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:E.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:C.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:E.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:C.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:E.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:C.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:E.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:C.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:E.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:C.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:E.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:C.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:E.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:C.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:E.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:C.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:E.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),tr=e=>e,or=e=>e,nr=or([{employer:"ODK",position:"Senior Software Engineer",start:"2021-03",end:"2025-04",summary:`
      ODK builds a comprehensive suite of open source data collection tools, used
      globally across a wide variety of campaigns with high social impact in
      public health & beyond.
    `,highlights:[`
        Initially hired to maintain Enketo\u2014ODK's inherited/legacy web-based data
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
      `]}]),rr=nr;var S;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(S||(S={}));var ve;(function(e){e.LANGUAGES_PLATFORMS="Languages",e.SERVICES_DISTRIBUTED_SYSTEMS="Services",e.USER_INTERFACE_EXPERIENCE="UI/UX",e.DOMAIN_SPECIFIC_LANGUAGES="DSL\u200Bs"})(ve||(ve={}));const et={[ve.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:S.EXPERT},{name:"OpenAPI & JSON Schema",level:S.EXPERT},{name:"Django REST framework",level:S.ADVANCED},{name:"Fault tolerance",level:S.ADVANCED},{name:"Microservice architecture",level:S.ADVANCED},{name:"Apache Storm",level:S.INTERMEDIATE},{name:"Redis",level:S.BASIC}],[ve.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:S.EXPERT},{name:"DOM & Web APIs",level:S.EXPERT},{name:"Web performance",level:S.ADVANCED},{name:"UI & UX design",level:S.ADVANCED},{name:"A11y",level:S.INTERMEDIATE}],[ve.DOMAIN_SPECIFIC_LANGUAGES]:[{name:"Interpreter runtime",level:S.ADVANCED},{name:"Interpreter optimization",level:S.INTERMEDIATE},{name:"Domain-specific tooling",level:S.INTERMEDIATE}],[ve.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:S.EXPERT},{name:"Clojure & ClojureScript",level:S.EXPERT},{name:"XPath",level:S.EXPERT},{name:"ODK XForms",level:S.EXPERT},{name:"HTML & CSS",level:S.EXPERT},{name:"SQL (PostgreSQL)",level:S.ADVANCED},{name:"Python",level:S.INTERMEDIATE},{name:"Swift",level:S.BASIC},{name:"Java",level:S.BASIC}]},ir={list:Object.values(et).flatMap(Ne),merged:et,sets:Object.entries(et).map(([e,t])=>({name:e,skills:t.map(({name:n})=>n)}))},sr=tr({name:"Trevor Schmidt",meta:{format:Ht,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:rr},info:{class:"Software Engineer",brief:Ot(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:er,skills:ir,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),Ye=Symbol("DEFAULT_TOPIC"),M={[Ye]:Ye,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},ar=e=>typeof e=="string"||typeof e=="symbol",_t=e=>ar(e)&&e in M,tt=e=>_t(e)?M[e]:e,Ft=Object.entries(M).reduce((e,t)=>{const[n,r]=t;return typeof n=="string"?{...e,[r]:n}:e},{}),cr=e=>_t(e)?e:Ft[e],lr=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),dr=Object.fromEntries(Object.entries(Ft).map(([e,t])=>typeof t=="string"?[e,lr(t)]:null).filter(e=>e!=null)),mr=e=>{const t=tt(e);if(typeof t=="string")return dr[t]},ze=2,ot={minEm:1.0625,fluidVw:1.0625*ze,maxEm:1.25},w="@media (prefers-color-scheme: dark)",pr=["h1","h2","h3","h4","h5","h6"],ur=["dd","dl","dt","li","ol","ul"],gr=[...pr,...ur,"p"],Ee=ot.minEm/ot.maxEm,ne={h1:1.953,h2:1.563,h3:1.25},hr={h1:{minEm:ne.h1*Ee,fluidVw:ne.h1*Ee*ze,maxEm:ne.h1},h2:{minEm:ne.h2*Ee,fluidVw:ne.h2*Ee*ze,maxEm:ne.h2},h3:{minEm:ne.h3*Ee,fluidVw:ne.h3*Ee*ze,maxEm:ne.h3}},Ut=75,Ge=1.25,fr=["0.7fr",`${Ge}rem`,[`${Ut}ch`,`calc(100% - ${Ge*2}rem)`],`${Ge}rem`,"1.2fr"],nt=1,br=["0.7fr",`${nt}rem`,[`${Ut*1.1875}ch`,`calc(100% - ${nt*2}rem)`],`${nt}rem`,"1.2fr"],yr=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],rt=yr.join(", "),Sr=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],vr=Sr.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),G={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Er="hover-inherit-topic-color",kr={[M[Ye]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.DEFAULT_TOPIC.light},[w]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.DEFAULT_TOPIC.dark}}}}},[M.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.ABLEISM}}},[M.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.ARTS_CRAFTS}}},[M.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.LEMON}}},[M.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.MENTAL_ILLNESS}}},[M.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.NEURODIVERGENCE}}},[M.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.PHILOSOPHY}}},[M.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.POLITICS}}},[M.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.RACISM}}},[M.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.SEXISM}}},[M.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.SUBSTANCE_ABUSE}}},[M.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.TECHNOLOGY}}},[M.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.TRANSPHOBIA}}}},Yt=_e(),a={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Er,baseFontSizeRange:ot,darkMode:w,abbreviation:{"--abbreviation-highlight":"hsl(64deg 100% 50% / 0.25)",backgroundImage:`linear-gradient(${["to top","var(--abbreviation-highlight)","var(--abbreviation-highlight) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[w]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[w]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:Yt,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[w]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${Yt}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[w]:{color:"hsl(212deg, 10%, 90%)"}}},[w]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[w]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[w]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:rt},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:rt,nested:{[w]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em",fontWeight:300},emphasize:{color:"#000"},firstLastMarginZeroElements:gr,gitHubLogo:{fill:"#171515",nested:{[w]:{fill:"#fff"}}},headingLineHeight:.9375,headingRanges:hr,[w]:{abbreviation:{"--abbreviation-highlight":"hsl(336deg 85% 25%)"},aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg 60% 4%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)",fontWeight:200},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(190deg 20% 97%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"oklch(0.71 0.16 355.75)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:fr,mainGridSidePaddingRem:Ge,monospaceFont:rt,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[w]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{color:"hsl(210deg 12% 5% / 95%)",fontFamily:vr},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[w]:{backgroundColor:"hsl(336deg, 100%, 7%)"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[w]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"#fffff1",nested:{[w]:{backgroundColor:"hsl(41deg, 100%, 8%)"}}},itemOdd:{backgroundColor:"inherit"},itemEven:{backgroundColor:"oklch(0.99 0.03 100.56)",nested:{[w]:{backgroundColor:"oklch(0.26 0.06 71.28)"}}}},skillLevel:{[S.BASIC]:{backgroundColor:"hsl(207deg, 25%, 83%)",nested:{[w]:{backgroundColor:"hsl(207deg, 15%, 43%)"}}},[S.INTERMEDIATE]:{backgroundColor:"hsl(188deg, 53%, 74%)",nested:{[w]:{backgroundColor:"hsl(188deg, 53%, 34%)"}}},[S.ADVANCED]:{backgroundColor:"hsl(188deg, 70%, 59%)",nested:{[w]:{backgroundColor:"hsl(188deg, 80%, 39%)"}}},[S.EXPERT]:{backgroundColor:"hsl(152deg, 100%, 39%)",nested:{[w]:{backgroundColor:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:br,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[w]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[w]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:kr,topicTagIdentifier:_e(),topicTagInner:{backgroundImage:Se(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[w]:{backgroundImage:Se(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:Se(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[w]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:Se(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visiblyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[w]:{color:"hsl(194deg, 8%, 50%)"}}}}}},it=["b","em","h1","h2","h3","i","strong"],Xe=["h1","h2","h3","h4","h5","h6"],Cr=[...Xe,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],wr=Array.from(new Set([...Xe,...Cr,"div","fieldset","form","hgroup","hr","pre"])),Tr=Se(`
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
    font-size:        ${oe(`${a.baseFontSizeRange.minEm}em`,`${a.baseFontSizeRange.fluidVw}vw`,`${a.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${R(["html","body"],{...a.document})}

  ${R(["body"],{...a.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${Xe.join(",")} {
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
`),Rr=()=>{Fe.global(Se(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${wr.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${Xe.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${R(it,a.emphasize)}

      h1 {
        font-size: ${oe(`${a.headingRanges.h1.minEm}em`,`${a.headingRanges.h1.fluidVw}vw`,`${a.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${oe(`${a.headingRanges.h2.minEm}em`,`${a.headingRanges.h2.fluidVw}vw`,`${a.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${oe(`${a.headingRanges.h3.minEm}em`,`${a.headingRanges.h3.fluidVw}vw`,`${a.headingRanges.h3.maxEm}em`)};
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

      ${R(["hr:after"],{...a.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${R(["pre"],a.pre)}

      ${R(["code"],{...a.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

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

      ${R(["a"],{...a.links,fontWeight:"bolder"})}

      ${R(["abbr"],{...a.abbreviation,textDecoration:"none"})}

      ${R(["aside","small"],a.deemphasize)}

      ${R(["aside"],{...a.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem",nested:{"& a":{fontWeight:600}}})}

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

      ${a.darkMode} {
        ${R(["html","body"],{...a[a.darkMode].document})}

        ${R(["body"],{...a[a.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${R(it,a[a.darkMode].emphasize)}
        ${R(["abbr"],a[a.darkMode].abbreviation)}
        ${R(["pre"],a[a.darkMode].pre)}
        ${R(["code"],a[a.darkMode].code)}
        ${R(["a"],a[a.darkMode].links)}
        ${R(["aside","small"],a[a.darkMode].deemphasize)}
        ${R(["aside"],a[a.darkMode].aside)}
        ${R(["hr:after"],a[a.darkMode].separator)}
      }
    `))},xr=`
  ${a.mainGridColumns[0]}
  ${a.mainGridColumns[1]}
  min(
    ${a.mainGridColumns[2][0]},
    ${a.mainGridColumns[2][1]}
  )
  ${a.mainGridColumns[3]}
  ${a.mainGridColumns[4]}
`.replace(/\s+/g," "),zt={gridColumn:"1 / -1"},Gt=Fe(zt),$=c("div",{nested:{[`& > .${Gt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:xr,...zt}),Ar=({children:e,shadow:t,...n})=>o($,{...n},e),Xt=([e,t,n])=>`rgba(${[e,t,n,0].join(",")})`,Wt=["12rem 100%","auto"],Vt=Wt.join(", "),Pr=Wt.map(e=>e.replace("100%","100.1%")).join(", "),Or=ce.renderKeyframe(()=>({"0%":{backgroundSize:Vt},"100%":{backgroundSize:Pr}}),{}),Kt="5px",qt=(e,t)=>e!=null&&t!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${t.join(",")})`,`rgba(${t.join(",")}) calc(11rem + ${Kt})`,`${Xt(t)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${Xt(e)} ${Kt}`].join(", ")})`].join(", ")}:null,Ir=e=>{if(e!=null){const{darkMask:t,darkScroll:n,lightMask:r,lightScroll:i}=e;return{dark:qt(n,t),light:qt(i,r)}}return{dark:null,light:null}},Jt=c(Ar,({shadow:e})=>{const{dark:t,light:n}=Ir(e),r=t==null?null:{[a.darkMode]:t};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:Vt,paddingRight:a.mainGridSidePaddingRem,overflowX:"auto",nested:{...r,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:Or,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),Mr=c($,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Qt=c("div",{paddingLeft:"1rem"}),Lr=c("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),jr=c("div",{flexGrow:1,padding:"1rem 0.75rem"}),st="div",Dr={ContentContainer:st,InnerContainer:Qt,OuterContainer:st,SymbolContainer:st},Zt=e=>{const{children:t,ContentContainer:n,InnerContainer:r,OuterContainer:i,outerContainerProps:s,symbol:l,SymbolContainer:m}={...Dr,...e};return o(Mr,{as:i,...s},o(Lr,{as:m,role:"presentation"},l),o(Qt,{as:r},o(jr,{as:n},t)))},$r=c("pre",{fontSize:"1rem"}),Br=c(Jt,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[a.darkMode]:{}}}),Nr=e=>o(Br,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),Hr=c($,{...a.pre,nested:{[a.darkMode]:{...a[a.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),_r=c("div",{...a.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Fr=({children:e})=>o(Zt,{ContentContainer:$r,InnerContainer:Nr,OuterContainer:Hr,symbol:"{",SymbolContainer:_r},e),Ur=e=>e.map((t,n)=>n),at=(e,t)=>Ur(e).sort((n,r)=>{const i=t(e[n],e[r]);return i===0?n===r?0:n>r?1:-1:i}).map(n=>e[n]),Yr=e=>typeof e=="object"&&e!=null,zr=c("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),Gr=(e,t)=>Yr(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof t=="string"&&Vo().test(t),Xr=({["aria-label"]:e,children:t,role:n})=>o(zr,{"aria-label":e,role:n},t),Wr={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},Vr={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",ODK:"Open Data Kit (https://getodk.org/)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},Kr={...Wr,...Vr},eo=pe.resolve(process.cwd(),"./syntax-themes"),[qr,Jr]=await Promise.all([Mt(pe.resolve(eo,"./yi-dark.json")),Mt(pe.resolve(eo,"./yi-light.json"))]),Qr={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},Zr={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},ei=e=>e.trim().split(/\b\W*\b/).reduce((t,n)=>({...t,...Zr[n]}),{}),ti=e=>Object.entries(e).reduce((t,[n,r])=>{const i=Qr[n];if(r==null||typeof i!="string")return t;const s=i==="fontStyle"?ei(r):{[i]:r};return{...t,...s}},{}),[oi,ni]=await Promise.all([Lt({theme:qr}),Lt({theme:Jr})]),ri=new Set(tn.map(e=>e.id)),ii=new Set(["ts","tsx","typescript"]),to=e=>e.explanation?.reduce((t,n)=>({...t,...n.scopes.reduce((r,{themeMatches:i})=>({...r,...i.reduce((s,{settings:l})=>({...s,...ti(l)}),r)}),t)}),{color:e.color}),si=(e,t,n={})=>{const r=to(e),i=to(t),s=i==null?null:{nested:{[a.darkMode]:i}},{content:l}=e;if(r==null&&s==null)return o("span",n,l);const m={...r,...s},p=c("span",m);return o(p,n,l)},ai=Fe({paddingRight:"1rem"}),ci={className:ai},li=(e,t)=>Pt(o(ue,{},o("pre",{},o("code",{},...e.reduce((n,r,i)=>{const s=r.map((m,p)=>{const u=t[i][p],b=p===r.length-1?ci:{};return si(m,u,b)}),l=i===0?"":`
`;return[...n,l,...s]},[]))))),di=e=>{const{lang:t,value:n,meta:r}=e,i=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,s=String(t)==="json5"?"json":t;let l;const m=n.replace(/^\n+|\n+$/g,"");if(!ri.has(s))l=on.plainTextRenderer(m,{});else{const p=ni.codeToThemedTokens(m,s),u=oi.codeToThemedTokens(m,s);l=li(p,u)}ii.has(s)&&!r?.includes("ignore"),e.children=[],e.type="html",e.value=l},mi=()=>t=>{qe(t,"code",di)};import.meta.env=Ze;const Oe=It.createRequire(import.meta.url),pi=Oe("rehype-parse"),ui=Oe("rehype-remark"),gi=Oe("remark"),hi=Oe("remark-abbr"),fi=Oe("remark-stringify"),bi=({className:e,children:t,...n})=>e==="language-id"?null:e==="code-container"?$e(z,n,...Rt(t)):o("div",{className:e,...n},...Rt(t)),yi=({children:e,...t})=>Gr(t,e)?o(Xr,t,e):o("span",t,e),ct={components:{div:bi,pre:Fr,span:yi},rehypePlugins:[Ko],remarkPlugins:[mi,hi,vn,qo,Jo]},oo=e=>{const{children:t=$e(()=>null,{}),components:n={},rehypePlugins:r=[],remarkPlugins:i=[]}=e,s={...ct.components,...n},l={mdx:$e,MDXProvider:No,components:s,props:{}},m=typeof t=="string"?Ot(t).trim():t,p=[...ct.rehypePlugins,...r],u=[...ct.remarkPlugins,...i],b=Bo.sync(m,{rehypePlugins:p,remarkPlugins:u,skipExport:!0}).trim(),{code:h}=Qo(b,{objectAssign:"Object.assign"}),y=Object.keys(l),v=Object.values(l),f=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...y,`${h}

${f}`)($e,...v)},Si=Object.entries(Kr).map(([e,t])=>`*[${e}]: ${t}`).join(`
`),vi=e=>[e,Si].join(`

`),lt=([e,...t],{includeAbbreviations:n=!0})=>{const r=typeof e=="string"?[e,...t].join(""):String.raw(e,...t);return n?vi(r):r},ke=(...e)=>{const t=lt(e,{includeAbbreviations:!0});return o(ue,{},o(oo,{},t))},no=(...e)=>{const t=lt(e,{includeAbbreviations:!0});return o(ue,{},o(oo,{components:{p:z}},t))},Ei=(...e)=>{const t=lt(e,{includeAbbreviations:!1});return gi().use(pi).use(ui).use(fi).use(Zo).use(en).processSync(t).contents.toString().trim()},re=(e,t)=>Number(e.toFixed(t)),ge=parseInt("ff",16),ro=parseInt("00",16),io=.05,dt=.15,mt=.05;class Ie extends Error{constructor(t){super(`Invalid hash: ${t}`)}}const ki=/^[0-9a-f]{40}$/i,Ci=e=>ki.test(e),wi=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),Ti=e=>e.length===10,Ri=/([0-9a-f]{2})([0-9a-f]{2})/ig,pt=e=>{if(!Ci(e))throw new Ie(e);const n=Array.from(e.matchAll(Ri)??[]).map(([r,i,s])=>({x:i,y:s}));if(!Ti(n))throw new Ie(e);return n},xi=Symbol("IS_POINT"),Ai=e=>Object.assign(e,{[xi]:!0}),so=e=>{const t=parseInt(e,16);if(t>ge||t<ro)throw new Error(`Not a valid coordinate: ${e}`);return Ai(t)},Pi=({x:e,y:t})=>({x:so(e),y:so(t)}),Oi=e=>e.length===10,ut=(e,t)=>{try{const n=t.map(Pi);if(!Oi(n))throw new Ie(e);return n}catch{throw new Ie(e)}},Ii=Symbol("SCALED_COORDINATE"),ao=e=>e.reduce(({max:t,min:n},{y:r})=>({max:Math.max(Number(t),Number(r)),min:Math.min(Number(n),Number(r))}),{max:-Infinity,min:Infinity}),K=(e,t)=>Object.assign(re(e,2),{[Ii]:t}),Ce=({x:e,xScale:t,y:n,yScale:r})=>({x:K(e,t),y:K(n,r)}),gt=({x:e,y:t},{xScale:n,xShift:r,yScale:i,yShift:s})=>Ce({x:(e+r)*n,xScale:n,y:(t+s)*i,yScale:i}),ht=({points:e,xMax:t,xScale:n,yScale:r})=>[Ce({x:0,xScale:n,y:0,yScale:r}),...e,Ce({x:t,xScale:n,y:0,yScale:r})].reduce((i,s,l,m)=>{if(l===0||l===m.length-1)return i;const p=K(0,r),u=[{x:m[l-1].x,y:p},s,{x:m[l+1].x,y:p}];return[...i,u]},[]),ft=({segments:e,xMax:t,xScale:n,yScale:r})=>e.map(i=>{const[{x:s,y:l},{x:m,y:p},{x:u,y:b}]=i,h=u-s,y=p/h,f=6/y;if(f<1){const A=f*.2*s,T=s-A,B=u+A,O=T<0?Math.abs(T):B>t?t-B:0,P=T+O,V=B+O,x=f*.3,_=m+O,I=x*p,X=p-I;return[Ce({x:P,xScale:n,y:l,yScale:r}),Ce({x:_,xScale:n,y:X,yScale:r}),Ce({x:V,xScale:n,y:b,yScale:r})]}return i}),Mi=({x:e,y:t},{x:n,y:r})=>{const i=n-e,s=r-t;return{angle:Math.atan2(s,i),length:Math.sqrt(i**2+s**2)}},co=({current:e,previous:t,next:n,reverse:r,smoothing:i,xScale:s,yScale:l})=>{const m=r?Math.PI:0,p=Mi(t,n),u=p.angle+m,b=p.length*i,{x:h,y}=e,v=h+Math.cos(u)*b,f=y+Math.sin(u)*b;return{x:K(v,s),y:K(f,l)}},bt=({index:e,point:t,points:n,smoothing:r,xScale:i,yScale:s})=>{const l=n[e-1];if(l==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const m=n[e-2]??l,p=co({current:l,previous:m,next:t,reverse:!1,smoothing:r,xScale:i,yScale:s}),u=l,b=n[e+1]??t,h=co({current:t,previous:u,next:b,reverse:!0,smoothing:r,xScale:i,yScale:s});return[p,h,t]},lo=({segment:e,smoothing:t,xScale:n,yScale:r})=>e.reduce((i,s,l)=>{if(l===0)return i;const p=bt({index:l,point:s,points:e,smoothing:t,xScale:n,yScale:r}).map(u=>`${u.x},${u.y}`).join(" ");return[...i,`C ${p}`]},[]),Li=({baseYCoordinate:e,isBaselineBelowMidpoint:t,segments:n,xScale:r,yMax:i,yScale:s,yTilt:l=!1})=>n.reduce((m,p,u,b)=>{const{length:h}=b,[y,v,f]=p,{x:k,y:A}=y,{x:T,y:B}=v,{x:O,y:P}=f,V=O-k,x=V===0?0:Math.max(B/V*mt,dt),_=l?.1:0,I=1-_,X=1+_,J=u%2==0?I:X,Z=t?A+e:i-A+e,F={x:k,y:K(Z*J,s)},Q=u%2==0?I:X,ee=t?P+e:i-P+e,U={x:K(O,r),y:K(ee*Q,s)},H=T-k,N=O-T,Y=N>H?0:0-(T-k)*io,q=(h-u)*(s/100*i),le={x:K(T+Y,r),y:K(B-q,s)},de=lo({segment:[F,le,U],smoothing:x,xScale:r,yScale:s}),me=N>H?(O-T)*io:0,ye={x:K(T+me,r),y:K(i-q,s)},te=lo({segment:[U,ye,F],smoothing:x,xScale:r,yScale:s});return[...m,[`M ${F.x},${F.y}`,...de,...te,"Z"].join(" ")]},[]),ji=({hash:e,xPadding:t=0,xScale:n=1,yOffset:r=.5,yPadding:i=0,yScale:s=1})=>{const l=pt(e),m=ut(e,l),p=at(m,({x:P},{x:V})=>Number(P)===Number(V)?0:Number(P)>Number(V)?1:-1),u=t/2,b=i/2,h=p.map(P=>gt(P,{xScale:n,xShift:u,yScale:s,yShift:b})),y=(ge+t)*n,{max:v}=ao(h),f=(v+i)*s,k=ht({points:h,xMax:y,xScale:n,yScale:s}),A=ft({segments:k,xMax:y,xScale:n,yScale:s}),T=r>.5,B=T?f*r:-1*f*r;return{segmentPaths:Li({baseYCoordinate:B,segments:A,xScale:n,yMax:f,isBaselineBelowMidpoint:T,yScale:s}),xMax:y,yMax:f}};var yt;(function(e){e.PNG="png"})(yt||(yt={}));const St=process.cwd(),Me=e=>e.startsWith("/")?pe.resolve(St,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):pe.extname(e)==""?pe.resolve(St,"./src/pages/",`${e}.tsx`):e;var we;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(we||(we={}));var he;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(he||(he={}));const Di="origin",$i="main",Le=e=>{const{branch:t=$i,decode:n,filter:r=we.FIRST,format:i,path:s=St,remote:l=Di}=e,{error:m,stdout:p}=rn.spawnSync("git",["log",...r.split(" "),`--branches=${t}`,`--format=${i}`,`--remotes=${l}`,"--",s]);if(m)throw m;const u=p.toString().trim();return(u===""?[]:u.split(`
`)).map(n)},vt=e=>{const t=new Date(e);if(!isNaN(t.getTime()))return t},Bi=e=>{const t=Me(e),[n=null]=Le({decode:vt,filter:we.CURRENT,format:he.ISO_DATE,path:t});return n},Ni=e=>{const t=Me(e),[n=null]=Le({decode:vt,format:he.ISO_DATE,path:t});return n},Hi=e=>{const t=Me(e),[n=null]=Le({decode:vt,filter:we.FIRST_MERGE,format:he.ISO_DATE,path:t});return n},Et=e=>{const t=Je.readFileSync(e).toString();let n=sn.createHash("sha1");return n.update(t),n.digest("hex")},_i=e=>{const t=Me(e),[n]=Le({decode:Ne,format:he.HASH,path:t});return n??Et(t)},Fi=e=>{const t=Me(e),[n]=Le({decode:Ne,filter:we.FIRST_MERGE,format:he.HASH,path:t});return n??Et(t)},Ui={height:630,width:1200},Yi=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",zi=nn({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Gi=(e,t,n=yt.PNG,r=Ui)=>{const i=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),s=zi.hash(t),l=pe.resolve(i,`${s}.${n}`),m=l.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:l,imageType:n,publicPath:m,...r}}};var fe;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(fe||(fe={}));const mo=(e,t,n,r,i=[M.TECHNOLOGY])=>{const s=r===fe.MUTABLE,l=r===fe.IMMUTABLE_MERGE,m=t.replace(/^file:(\/\/)?/,""),p=s?Et(m):l?Fi(e):_i(e),u={created:(l?Hi(e):Ni(e))??Je.statSync(m).ctime,updated:Bi(e)??Je.statSync(m).mtime},h=Gi(t,s?{importURL:t,stat:u,topics:i}:{hash:p,importURL:t});return{hash:p,host:Yi,path:e,social:h,stat:u,title:n,topics:i}},po=()=>o(z,null,o("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),o("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),o("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),o("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Xi=()=>o("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},o("defs",null,o(po,null))),Wi=1.6180334,Vi=4,uo=re(Wi*5,6),go=.75,Te=.15,Ki=1.5,Re=oe("6rem",`${100/uo}vw`,"10rem"),qi=c($,{height:Re,position:"relative",width:"100%"}),Ji=c("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Qi=c("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var je;(function(e){e.INLINE="inline",e.NONE="none"})(je||(je={}));const kt={xPadding:Vi,xScale:uo,yOffset:go,yPadding:Te,yScale:Ki},Ct=e=>{const{className:t,defsUsage:n=je.INLINE,hash:r,height:i,rawSVG:s=!1,styleRenderer:l=ce,title:m,topics:p=[],width:u}=e,b=p.length<2?[...p,M[Ye]]:p,h=P=>`${P}-${r}`,{segmentPaths:y,xMax:v,yMax:f}=ji({...kt,hash:r}),k=f*go,A=f*Te/10.24,T=A*.75,O=o(Ji,{className:Gt,height:i,preserveAspectRatio:"none",viewBox:[0,0,v,f].join(" "),width:u},o("title",null,"Generated art for the page or post titled"," ",o("i",null,m),", with the content or commit hash ",r," ",b.length>0?[", and the topics: ",b.map(String).join(", ")]:null),o("defs",null,n===je.INLINE?o(po,null):null,o("filter",{id:h("blur")},o("feOffset",{in:"SourceGraphic",dx:"0",dy:T,result:"glowOffsetOut"}),o("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:A,result:"glowBlurOut"}),o("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),o("clipPath",{id:h("blurOverlayClip")},o("rect",{x:"0",width:v,y:k,height:f})),o("filter",{id:h("blurOverlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:T}),o("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:A})),o("filter",{id:h("blurUnderlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:T}),o("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:A}),o("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),o("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),o("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),o("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:A})),o("g",{id:h("blobs")},y.map((P,V)=>{const x=V%b.length,_=b[x],I=l.renderRule(()=>({...a.topicColors[_]}),Object.keys);return o(Qi,{key:P,className:I,d:P,mask:"url(#softVerticalFade)"})}))),o("g",{transform:[`translate(0, ${f*Te})`,`scale(1, ${1-Te*2})`].join(" "),filter:`url(#${h("blur")})`},o("use",{href:`#${h("blobs")}`,mask:"url(#horizontalMidFade)"})),o("g",{"clip-path":`url(#${h("blurOverlayClip")})`,filter:`url(#${h("blurOverlay")})`,transform:[`translate(0, ${f*Te})`,`scale(1, ${1-Te*2})`].join(" ")},o("use",{href:`#${h("blobs")}`,mask:"url(#softVerticalFade)"})));return s?O:o(qi,{className:t},O)},Zi=[,"January","February","March","April","May","June","July","August","September","October","November","December"],es=c("time",{nested:{[a.darkMode]:{...a[a.darkMode].deemphasize}},...a.deemphasize});var ie;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(ie||(ie={}));const xe=({date:e,mode:t=ie.DEFAULT,...n})=>{const r=e.getMonth()+1,i=e.getFullYear(),s=t===ie.SHORT?`${r}/${i}`:t===ie.META?"":[e.getDate(),Zi[r],i].join(" ");return o(es,{...n,datetime:e.toISOString()},s)},ts=c("a",{...a.topicTagLink(a.topicTagIdentifier.className)}),os=c("span",a.topicTagIdentifier()),ns=c(os,{...a.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),rs=({className:e,link:t=!0,topic:n})=>{const r=mr(n),i=tt(n);if(r==null||typeof i!="string")throw new Error(`Unexpected topic: ${String(i)}`);const s=t?ts:"span",l=t?{href:`/blog/topics/${r}/`}:{};return o(s,{className:[e,a.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...l},o(ns,null,i))},ho=c(rs,e=>({...a.topicTagOuter,...a.topicColors[tt(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),is=c("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),ss=c("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),fo=({className:e,link:t=!0,topics:n})=>o(is,{className:e},n.map(r=>typeof r=="string"?o(ss,{key:cr(r)},o(ho,{link:t,topic:r})):null)),as=e=>e.reduce((t,n)=>{const r=n.stat.created.getFullYear(),i=t[r]??[];return{...t,[r]:[...i,n]}},{}),cs=c($,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),ls=c($,{...a.blog.listing.item,minHeight:Re,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),ds=c($,{paddingTop:`calc(${Re} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),ms=c($,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),ps=c("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),us=Fe({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),gs=c("h2",{...a.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),hs=c(xe,{padding:"0 0.5rem 0.125rem 0"}),fs=c(fo,{gridColumn:"3 / 3"}),bs=c("div",{...a.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),ys=c("a",{fontSize:"0.875em"});var We;(function(e){e.DATE="date"})(We||(We={}));var Ve;(function(e){e.ASC="asc",e.DESC="desc"})(Ve||(Ve={}));const Ss=({order:e=Ve.DESC,posts:t,sort:n=We.DATE})=>{const r=t.slice().sort((s,l)=>e===Ve.DESC&&n===We.DATE?s.stat.created>l.stat.created?-1:1:0),i=as(r);return o(z,null,Object.entries(i).map(([s,l])=>o(z,{key:s},o(cs,null,l.map(m=>{const{CustomArt:p=Ct,description:u,hash:b,path:h,stat:{created:y},title:v,topics:f}=m;return o(ls,{key:h},o(ds,{as:"a",href:h},o(ps,null,o(p,{defsUsage:je.NONE,hash:b,padded:!0,renderType:"listing",title:v,topics:f})),o(ms,null,o(gs,{className:us},v),o(hs,{date:y}))),o(fs,{link:!1,topics:f}),o(bs,{className:a.blog.listing.descriptionIdentifier},u),o("p",null,o(ys,{href:h},"Read more\u2026")))})))))},vs=()=>o(z,null,o("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),o("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),o("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),o("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),o("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),o("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),o("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),o("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),o("meta",{name:"application-name",content:"Eyelidlessness"}),o("meta",{name:"msapplication-TileColor",content:"#555555"}),o("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));Rr();const bo=({children:e,meta:{description:t,host:n,redirect:r,social:{image:i},title:s},...l})=>r?o(jt,{...l},o(Be.title,null,"Redirecting to ",r),o("meta",{"http-equiv":"refresh",content:`0; URL=${r}`}),o("link",{rel:"canonical",href:r})):o(jt,{...l},o(Be.title,null,s," | Eyelidlessness"),t!=null?o(Be.description,null,t):o(z,null),o("meta",{name:"theme-color",content:a.siteLogo.color}),o("style",{dangerouslySetInnerHTML:{__html:Tr}}),o("meta",{name:"twitter:card",content:"summary_large_image"}),o("meta",{name:"twitter:site",content:"@eyelidlessenss"}),o(Be.image,{alt:s,height:i.height,src:`${n}${i.publicPath}`,width:i.width}),o(z,null,e),o(vs,null)),Es=({as:e="div",devilsBreakpoint:t,gap:n,...r})=>{const i=c(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${t} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return o(i,{...r})},ks=c("svg",{...a.visiblyHidden,position:"absolute"}),be=512,yo=[0,0,be,be].join(" "),Cs=be/2,ws=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),Ts=()=>o(ks,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:yo,width:"0"},o("defs",null,o("mask",{id:"octocat-knockout"},o("rect",{fill:"#fff",height:be,mask:"url(#octocat)",rx:Cs,width:be}),o("path",{d:ws,fill:"#000"})))),Rs=c("rect",{...a.gitHubLogo}),So=({className:e})=>o("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:yo},o("title",null,"GitHub"),o(Rs,{height:be,mask:"url(#octocat-knockout)",width:be})),Ke={height:60,width:338},xs=c("svg",{display:"inline-block",maxWidth:"100%",width:`${Ke.width}px`}),As=c("use",{nested:{[a.darkMode]:{...a[a.darkMode].siteLogo}},...a.siteLogo,fill:"currentcolor"}),Ps=`0 0 ${Ke.width} ${Ke.height}`,Os=()=>o(xs,{viewBox:Ps},o(As,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),o("title",null,"Eyelidlessness")),{columns:Ae}=a.siteHeader,Is=`
  ${Ae[0]}
  ${Ae[1]}
  min(
    ${Ae[2][0]},
    ${Ae[2][1]}
  )
  ${Ae[3]}
  ${Ae[4]}
`.replace(/\s+/g," "),Ms=c("header",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Is,padding:"clamp(0.5rem, 4vmin, 2rem) 0",position:"relative",zIndex:1}),Ls=c("div",{gridColumn:3}),js=c("div",{margin:"0 auto"}),Ds=c("a",{textDecoration:"none"}),$s=c("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),vo=1,Bs=c("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${vo/2}rem`,padding:0}),Ns=c("a",{...a.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[a.darkMode]:{...a[a.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),Eo="1.5em",bc=c(So,{display:"block",width:`clamp(1.125em, 4vw, ${Eo})`}),Hs=()=>{const e=[{label:"Blog",location:"/"},{label:"Hire me",location:"/resume/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],t=e.reduce((i,s)=>typeof s.label=="string"?i+s.label.length:i,0),n={horizontal:"2rem"},r=`${[`${Ke.width}px`,n.horizontal,`${t+2}ch`,Eo,`${e.length*vo}rem`].join(" + ")}`;return o(Ms,null,o(Ls,null,o(Es,{as:"nav",devilsBreakpoint:r,gap:n},o(js,null,o(Ds,{href:"/"},o(Os,null))),o($s,null,e.map(({location:i,label:s})=>o(Bs,null,o(Ns,{href:i},s)))))))},_s=c($,{paddingTop:0,paddingBottom:"4em"}),ko=({redirect:e,...t})=>o(ue,null,e==null?o(z,null,o(Ts,null),o(Hs,null),o(_s,{as:"main",...t})):o(z,null)),Fs=c($,{...a.description,nested:{...a.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Us=c("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Ys=c("div",{fontSize:"0.889em"}),zs=({as:e="section",title:t,...n})=>o(Fs,{as:e,itemprop:"description"},t?o(Us,null,t):null,o(Ys,{...n})),Gs=c($,{paddingTop:"1rem"}),Xs=c("h1",{marginBottom:"0.25rem"}),Ws=c($,{paddingBlock:"1rem"}),Vs=e=>{const{children:t,CustomArt:n,description:r,descriptionRaw:i,hash:s,redirect:l,stat:{created:m},title:p,topics:u}=e;return o(z,null,o(bo,{meta:{...e,description:i}}),o(ko,{as:"article",redirect:l},o(Ws,null,n==null?o(Ct,{hash:s,title:p,topics:u}):o(n,{hash:s,renderType:"post",StylesProvider:ue,title:p,topics:u}),o(Gs,null,o(Xs,null,p),o(xe,{date:m,itemprop:"datePublished"}),o(fo,{link:!1,topics:u}))),o(zs,null,r),t))},Co={IMMUTABLE:fe.IMMUTABLE,IMMUTABLE_MERGE:fe.IMMUTABLE_MERGE},Ks=async e=>{const{description:t,importURL:n,path:r,redirect:i,title:s,topics:l,type:m=Co.IMMUTABLE_MERGE}=e,{CustomArt:p,hash:u,host:b,social:h,stat:y}=mo(r,n,s,m,l),v=Ei`${Pt(o(z,null,t))}`;return{CustomArt:p,description:t,descriptionRaw:v,hash:u,host:b,path:r,redirect:i,social:h,stat:y,title:s,topics:l}},qs=c("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),wo="@media (min-width: 41.666rem)",Js=c(qs,{display:"block",margin:0,nested:{"& > *":{containerType:"inline-size"},[wo]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}}}}),Qs=c("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),Zs=e=>{const t=Array();return e.role===E.CREATOR&&t.push(e.description),e.summary!=null&&t.push(e.summary),t.length===0&&t.push(e.description),o(Qs,null,t.map(n=>ke(n)))},ea=({date:e,...t})=>e==null?null:o(xe,{...t,date:e}),ta=c("span",{nested:{[a.darkMode]:{...a[a.darkMode].deemphasize}},...a.deemphasize}),oa=/^(\d{4})-(\d{2})$/,To=e=>{if(e==null)return null;const t=oa.exec(e);if(t==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,r]=t;return new Date(`${n}-${r}-01T00:00:00`)},Ro=c("div",{fontSize:"0.88889em",whiteSpace:"nowrap",nested:{"& time":{fontSize:"inherit"}}}),xo=({range:[e,t]})=>{const n=To(e),r=To(t);return e==t?o(Ro,null,o(xe,{date:n,itemprop:"endDate",mode:ie.SHORT})):o(Ro,null,o(xe,{date:n,itemprop:"startDate",mode:ie.SHORT}),o(ta,null,"-"),o(ea,{date:r,itemprop:"endDate",mode:ie.SHORT}))},na=c("div",{display:"grid",rowGap:"0.325rem",nested:{"& > *":{margin:0}}}),wt=oe("1rem","3.5cqi","1.25rem"),ra=c("h3",{fontFamily:a.prose.fontFamily,fontWeight:500,fontSize:wt,paddingLeft:0,textIndent:0}),ia=c("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),sa=c("a",{alignSelf:"baseline",display:"block",flexShrink:0,height:`calc(${wt} * ${a.headingLineHeight})`,lineHeight:`calc(${wt} * ${a.headingLineHeight*1.5})`,padding:"0 0.5rem",zIndex:1,nested:{"& svg":{width:"1em"},[wo]:{paddingLeft:0}}}),aa=c("div",{flexGrow:1,paddingTop:"0.05556rem"}),ca=c("div",{alignItems:"start",display:"flex",padding:"1rem 0"}),Ao=({project:{description:e,end:t,repo:n,role:r,title:i,start:s,summary:l}})=>o(ca,null,o(sa,{href:n},o(So,null)),o(aa,null,o(na,null,o(ra,null,o(ia,{href:n},i)),o(xo,{range:[s,t]})),o(Zs,{role:r,description:e,summary:l??null}))),Po=c("h2",{fontSize:oe(`${a.headingRanges.h3.minEm}em`,`${a.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Oo=c("div",{marginTop:"0.5rem"}),la=e=>{const{creator:t,contributor:n}=e.projects.reduce((r,i)=>{const s=i.role===E.CREATOR?"creator":"contributor";return{...r,[s]:[...r[s],i]}},{creator:[],contributor:[]});return o(Js,null,o("div",null,o(Po,null,"Projects I Created"),o(Oo,null,t.map(r=>o(Ao,{project:r})))),o("div",null,o(Po,null,"Open Source Contributions"),o(Oo,null,n.map(r=>o(Ao,{project:r})))))},da=c($,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),De=e=>o(da,{as:"section",...e}),ma="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",pa=({fill:e,topic:t})=>{const n=a.topicColors[t];return{...n,...e?{fill:"currentcolor",fillOpacity:.05,mask:"url(#curvesVerticalFade)",strokeWidth:0,nested:{...n.nested,[a.darkMode]:{fillOpacity:.15}}}:{fill:"none",strokeWidth:1,stroke:"currentcolor"},transition:ma,vectorEffect:"non-scaling-stroke"}},ua=({fill:e,index:t,topic:n,...r})=>o("path",{...r}),Io=c(ua,pa),ga=c("svg",{overflow:"visible",padding:"1rem"}),ha=20,fa={xMax:ge,xScale:1,xShift:0,yMax:ge,yScale:1,yShift:0},ba=({className:e,hexPoints:t,points:n,pointSize:r=6,scaleOptions:i,segments:s,sortIndexes:l,sortToggleClass:m,topics:p,...u})=>{const{xScale:b,xShift:h,xRange:y=b*(ge+h*2),yMax:v,yShift:f,yScale:k,yRange:A=k*(v+f*2)}={...fa,...i},T=ha*2,B=u.height??A+T,O=u.width??y+T,P=({x,y:_},I)=>{const X=l[I],{x:J,y:Z}=n[X],F=re((x+h)/y*100,4),Q=100-re((_-f)/A*100,4),ee=re((J+h)/y*100,4),U=100-re((Z-f)/A*100,4),H=0-re(F-ee,4),N=0-re(Q-U,4);return{cx:F,cy:Q,sortedCx:ee,sortedCy:U,sortedTranslateXPercent:H,sortedTranslateyPercent:N}},V=s.map(x=>{const[_,I,X]=x,{x:J}=_,{y:Z}=I,{x:F}=X,Q=F-J,ee=Q===0?0:Math.max(Z/Q*mt,dt);return{cubicPoints:x?.reduce((H,N,Y)=>{if(Y===0)return H;const q=bt({index:Y,point:N,points:x,smoothing:ee,xScale:b,yScale:k});return[...H,q]},[]),segment:x}});return o(ga,{className:e,height:B,width:O,preserveAspectRatio:"none",viewBox:`0 0 ${O} ${B}`},o("defs",null,o("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.15","stop-color":"white","stop-opacity":".95"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),o("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),V.map(({cubicPoints:x,segment:_},I)=>{const[X,J,Z]=_,F=x.map(([U,H],N)=>[N===0?X:J,U,H,N===0?J:Z]);return o(z,null,o(()=>o(z,null,F.map(U=>{const H=U.map((Y,q)=>{const{cx:le,cy:se}=P(Y,I),de=le/100*O,me=se/100*B;return`${q===0?"M ":q===1?"C ":""} ${de},${me}`}).join(" "),N=p[I%p.length];return o(Io,{d:H,index:I,topic:N})})),null),o(()=>{const U=F.map((N,Y)=>N.map((le,se)=>{if(Y>0&&se===0)return"";const{cx:de,cy:me}=P(le,I),ye=de/100*O,L=me/100*B;return`${se===0?"M ":se===1?"C ":""} ${ye},${L}`}).join(" ")).join(" "),H=p?.[I%p.length];return o(Io,{d:U,fill:!0,index:I,topic:H})},null))}))},Mo=({className:e="",hash:t,height:n,identifier:r=_e,renderType:i,StylesProvider:s=ue,styleRenderer:l=ce,topics:m=[],width:p})=>{const u=pt(t),b=ut(t,u),{xPadding:h,xScale:y,yPadding:v,yScale:f}=kt,k=i==="meta",A=k?0:h,T=k?0:v,B=A/2,O=T/2,P={xScale:y,xShift:B,yScale:f,yShift:O},x=at(b,({x:L},{x:te})=>L===te?0:L>te?1:-1).map(L=>gt(L,P)),_=x.map((L,te)=>te),I=x.map(L=>u[x.indexOf(L)]),X=(ge+A)*y,J=r(),Z=ht({points:x,xMax:X,xScale:y,yScale:f}),F=ft({segments:Z,xMax:X,xScale:y,yScale:f}),Q=k?{"& path":{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,ee=k?"0 !important":"0 0 1rem !important",U=Re,H="100%",N=L=>typeof L=="number"?`${L}px`:L,Y=(L,te)=>typeof L=="number"?L*te:L,q=k?Y(n??U,.95):Re,le=k?Y(p??H,.95):"100%",se=k&&n!=null?Y(n,.95):n,de=k&&p!=null?Y(p,.95):p,me=l.renderRule(()=>({gridColumn:"1 / -1",height:N(q),padding:ee,width:N(le),nested:{...Q}}),Object.keys),ye=k?e:`${e} ${me}`;return o(s,null,o(ba,{className:ye,height:se,hexPoints:I,points:x,scaleOptions:P,segments:F,sortIndexes:_,sortToggleClass:J,topics:m,width:de}))},Lo=c("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),jo=c(Lo,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),ya=c(jo,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",paddingTop:oe("0.5rem","3vw","2rem"),nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),Sa=c(De,{padding:0}),va=c(Lo,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),Ea=c("a",{...a.resume.contactList.link,fontSize:"0.88889em",fontWeight:500,minWidth:"auto",textDecoration:"none"}),ka=c("span",{nested:{"@media print":{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),Tt=({children:e,printLabel:t,...n})=>o(Ea,{...n},o(ka,{"data-print-label":t},o("span",null,e))),Ca=c($,{...a.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...a.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"}}}),Do="@media (min-width: 44.625rem)",wa=c("h2",{fontSize:"1em",marginBottom:0,paddingLeft:0,textIndent:0,nested:{[Do]:{justifySelf:"end"}}}),Ta=c("div",{alignItems:"baseline",display:"grid",gap:"1rem 0",gridTemplateColumns:"auto",gridTemplateRows:"auto",fontSize:"0.88889em",nested:{[Do]:{gridTemplateColumns:"auto 1fr"}}}),Ra=c("ul",{display:"block",margin:0,padding:"0 0 0 1rem"}),xa=c("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0.125rem 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Aa=Object.values(S).reduce((e,t)=>({...e,[t]:c("span",{...a.resume.skillLevel[t],borderRadius:"4px",display:"inline-block",height:"8px",margin:"0 0.325rem 0 0",width:"8px",verticalAlign:"middle",nested:{...a.resume.skillLevel[t].nested}})}),{}),Pa=c("div",{display:"contents"}),Oa=({name:e,skills:t})=>o(Pa,{itemscope:!0,itemtype:"http://schema.org/ItemList"},o(wa,{itemprop:"name"},no(e)),o(Ra,null,t.map(({level:n,name:r})=>{const i=Aa[n];return o(xa,{key:r,itemprop:"itemListElement"},o(i,{role:"img",title:`Skill level: ${n}`}),no`${r}`)}))),Ia=c($,{padding:"1rem 0"}),Ma=c("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),La=c("h2",{marginBottom:"0.5rem"}),ja=c("div",{fontSize:"0.88889rem",fontWeight:a.deemphasize.fontWeight}),Da=c("ul",{fontSize:"0.88889em",paddingInlineStart:0}),$a=c("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),Ba=c(Ia,{padding:"1.5rem 0",position:"relative",nested:{"&:last-child:after":{display:"none"},"&:nth-of-type(odd)":{...a.resume.employment.itemOdd},"&:nth-of-type(even)":{...a.resume.employment.itemEven},"& strong":{fontWeight:500,nested:{[a.darkMode]:{fontWeight:400}}}}}),Na=c(jo,{alignItems:"baseline",justifyContent:"space-between",gap:"0.5rem",nested:{"& > *":{minWidth:"auto"}}}),Ha=({employer:e,end:t,highlights:n,position:r,start:i,summary:s,...l})=>o(Ba,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...l},o(Na,null,o("h3",{itemprop:"name"},e),o(xo,{range:[i,t]})),o(ja,{itemprop:"roleName"},r),s==null?null:o(Ma,{itemprop:"description"},ke(s)),n==null?null:o(Da,{itemtype:"http://schema.org/ItemList"},n.map(m=>o($a,{key:m,itemprop:"itemListElement"},ke(m))))),_a=c(De,{...a.resume.employment.container,marginTop:"1rem"}),Fa=({employment:e})=>o(_a,null,o(La,null,"Recent Experience"),e.history.map(t=>o(Ha,{...t}))),Ua=c($,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),Ya=c(xe,{...a.visiblyHidden}),$o=e=>e.replace(/^https?:\/\/|\/$/g,""),za=({className:e,id:t,meta:n,resume:r,updated:i})=>{const{contact:{email:s,website:l},employment:m,info:p,name:u,projects:b,skills:h,social:y}=r;return o(Ua,{className:e,id:t,itemscope:!0,itemtype:"http://schema.org/Person"},o(Mo,{...n,renderType:"post"}),o(Sa,null,o(ya,null,o("h1",{itemprop:"name"},u),o(Ya,{date:i,itemprop:"datePublished",mode:ie.META}),o(va,null,o(Tt,{href:`mailto:${s}`,itemprop:"email",printLabel:s},"Email"),o(Tt,{href:l,itemprop:"url",printLabel:$o(l),rel:"me"},"Website"),y.map(({network:v,url:f})=>o(Tt,{href:f,itemprop:"url",printLabel:$o(f),rel:"me"},v)))),o(Ca,{itemprop:"description"},ke(p.brief))),o(De,{"aria-label":"Skillsets"},o(Ta,null,Object.entries(h.merged).map(([v,f])=>o(Oa,{key:v,name:v,skills:f})))),o(Fa,{employment:m}),o(De,null,o(la,{projects:b})),o(De,null,o("h2",null,"References"),ke("Available upon request.")))},yc=c("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),Sc=c("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),vc=c("a",{...a.resume.contactList.link,textDecoration:"none"});export{Re as BLOG_ART_HEIGHT,Ct as BlogArt,Xi as BlogArtDefs,Ss as BlogListing,Co as BlogMetadataType,Vs as BlogPost,ge as COORDINATE_MAX,ro as COORDINATE_MIN,$ as FullBleedContainer,Jt as FullBleedScrollableOverflow,Zt as FullBleedSymbolBlock,bo as Head,Ie as InvalidHashError,dt as MIN_SMOOTHING,ko as Main,fe as PageMetadataType,za as Resume,Mo as ResumeArt,mt as SMOOTHING_RATIO,ue as StylesProvider,M as Topic,ho as TopicTag,Ze as __SNOWPACK_ENV__,kt as blogArtDefaultParameters,oe as clamp,bt as cubicBezierPoints,Ks as getBlogPostStaticProps,ht as getNaiveSegments,ft as getNonPhallicSegments,mo as getPageMetadata,wi as hexChars,_e as identifier,ke as mdx,ce as renderer,Sn as resetAbbrContext,sr as resume,gt as scalePoint,at as sortBy,c as styled,a as theme,re as toFixed,pt as toHexPointSequence,ut as toPointSequence,ao as yBounds};
