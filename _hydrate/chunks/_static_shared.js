import Qe from"unist-util-visit";import{h as o,Fragment as z,toChildArray as xt}from"https://cdn.skypack.dev/preact@10.5.10";import Ho from"@mdx-js/mdx";import{mdx as $e,MDXProvider as _o}from"@mdx-js/preact";import{isobject as Fo,createComponent as Uo,RendererProvider as Yo,Readonly as zo,Object$1 as Go,Optional as g,Unknown as Xo,Literal as Wo,String as m,Partial as ae,Union as Pt,Boolean as Ot,Array$1 as j,Integer as Vo,Number$1 as Ko,emojiRegex as qo,h as It,rehypeAccessibleEmojis as Jo,remarkSlug as Qo,remarkSmartypants_1 as Zo}from"./_vendor/index.js";import{transform as en}from"buble-jsx-only";import Mt from"dedent";import Lt from"module";import tn from"remark-mdx";import on from"remark-mdx-to-plain-text";import pe from"path";import{loadTheme as jt,getHighlighter as Dt}from"shiki";import{BUNDLED_LANGUAGES as nn}from"shiki-languages";import{renderers as rn}from"shiki-twoslash";import Ze from"fs";import sn from"node-object-hash";import"fela-tools";import"sharp";import an from"child_process";import ln from"crypto";import{Head as $t,seo as Be}from"microsite/head";import{createRenderer as cn}from"fela";import{processStyleWithPlugins as dn,KEYFRAME_TYPE as Bt,isNestedSelector as mn,normalizeNestedProperty as pn,isMediaQuery as un,generateCombinedMediaQuery as Nt,isSupport as gn,generateDeclarationReference as hn,isUndefinedValue as fn,generateCSSSelector as bn,RULE_TYPE as yn}from"fela-utils";import{cssifyDeclaration as Sn,cssifyObject as vn}from"css-in-js-utils";import Ht from"md5";let et=new Set;const En=()=>{et=new Set},kn=()=>e=>{Qe(e,"abbr",t=>{const{abbr:n}=t;et.has(n)&&(delete t.abbr,delete t.children,delete t.data,delete t.reference,Object.assign(t,{type:"text",value:n})),et.add(n)}),Qe(e,"text",t=>{t.value.includes("\u200B")&&Object.assign(t,{value:t.value.replace(/\u200b/gu,"")})})},_t="production",wn="production",Cn=!0;var tt=Object.freeze({__proto__:null,MODE:_t,NODE_ENV:wn,SSR:Cn});const Tn=e=>e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),T=(e,t)=>[e.join(","),"{",Object.entries(t).reduce((n,[r,s])=>typeof s=="object"&&(r==="nested"||r.includes("&"))?n:`${n}${Tn(r)}:${s};`,""),"}",Object.entries(t).map(([n,r])=>{if(typeof r=="object"){if(n==="nested")return Object.entries(r).map(([s,a])=>{const c=e.map(d=>s.replace(/&/g,d));return T(c,a)}).join("");if(n.includes("&")){const s=e.map(a=>n.replace(/&/g,a));return T(s,r)}}return""},[]).join("")].join(""),oe=(...e)=>`clamp(${e.join(",")})`,Se=e=>e.replace(/\s+/g," ").trim(),Ne=e=>e;function Pe(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function Rn(e,t,n,r,s,a){const c=[];return s&&c.push(Pe(s).slice(0,16)),r&&c.push(Pe(r).slice(0,16)),n&&c.push(Pe(n).slice(0,16)),c.push(Pe(e).slice(0,16)),c.push(Pe(t).slice(0,16)),c.push(a.slice(0,8)),c.join("_")}function An(e,t,n=[""]){let r="";for(const a in e){const c=e[a];r=`${r}${a}{${vn(c)}}`}let s="";for(let a=0;a<n.length;a++){const c=n[a];s=`${s}@${c}keyframes ${t}{${r}}`}return s}function xn(){return e=>(e.renderKeyframe=(t,n)=>{const r=t(n,e),s=dn(e,r,Bt,n),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const c=Ht(a),d=(e.selectorPrefix||"_")+c.slice(0,8),p=An(s,d,e.keyframePrefixes),u={type:Bt,keyframe:p,name:d};e.cache[a]=u,e._emitChange(u)}return e.cache[a].name},e._renderStyleToClassNames=({_className:t,...n},r="",s="",a="")=>{let c=t?` ${t}`:"";for(const d in n){const p=n[d];if(Fo(p))if(mn(d))c+=e._renderStyleToClassNames(p,r+pn(d),s,a);else if(un(d)){const u=Nt(s,d.slice(6).trim());c+=e._renderStyleToClassNames(p,r,u,a)}else if(gn(d)){const u=Nt(a,d.slice(9).trim());c+=e._renderStyleToClassNames(p,r,s,u)}else console.warn(`The object key "${d}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const u=hn(d,p,r,s,a);if(!e.cache.hasOwnProperty(u)){if(fn(p)){e.cache[u]={className:""};continue}const h=Sn(d,p),S=Ht(u),v=e.devMode?Rn(d,p,r,s,a,S):(e.selectorPrefix||"_")+S.slice(0,8),f=bn(v,r),k={type:yn,className:v,selector:f,declaration:h,pseudo:r,media:s,support:a};e.cache[u]=k,e._emitChange(k)}const y=e.cache[u].className;y&&(c+=` ${y}`)}}return c},e)}import.meta.env=tt;const He=Lt.createRequire(import.meta.url),{default:Pn}=He("fela-identifier"),{default:On}=He("fela-plugin-embedded"),{default:In}=He("fela-plugin-multiple-selectors"),{default:Mn}=He("fela-plugin-typescript"),Ln=_t==="development",jn=()=>{const e=Pn(),t=cn({devMode:Ln,enhancers:[xn(),e],plugins:[On(),In(),Mn()]});return{identifier:e,renderer:t}},{identifier:_e,renderer:le}=jn(),Dn=e=>Array.isArray(e)?e:[e],$n=e=>({children:t})=>o(Yo,{renderer:e},...Dn(t)),ue=$n(le),Bn=e=>le.renderRule(Ne,e),Fe=Object.assign(Bn,{global:le.renderStatic.bind(le)}),l=(e,t)=>{const n=typeof t=="function"?t:()=>t;return Uo(n,e,Object.keys)},D=(e,t)=>zo(Go(e,t)),W=()=>g(Xo()),Ft="FRESH@0.1.0",Nn=D({format:Wo(Ft,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:g(m({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),Hn=ae(D({label:m({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:m({description:"Profession type or 'character class'."}),image:m({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:m({description:"A short description or summary of yourself as a candidate."}),quote:m({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),_n=ae(D({willing:Pt([Ot(),m()],{description:"Willingness to relocate."}),destinations:j(m({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),Fn=ae(D({travel:Vo({description:"Percentage of time willing to travel (0 to 100)."}),authorization:m({description:"Work authorization: citizen, work visa, etc."}),commitment:j(m({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:Ot({description:"Open to remote employment opportunities."}),relocation:_n},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),Un=j(ae(D({label:m({description:"A label for this contact information."}),category:m({description:"Type of contact information: email, phone, url, postal, or IM."}),value:m({description:"Phone number, email address, website, etc."})}))),Yn=ae(D({email:m({description:"Primary contact email.",format:"email"}),phone:m({description:"Primary phone number."}),website:m({description:"Website, blog, or home page.",format:"uri"}),other:Un},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),zn=ae(D({address:m({description:"Your full postal address."}),code:m({description:"Postal or other official routing code."}),city:m({description:"Your home city."}),country:m({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:m({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),Gn=j(D({employer:m({description:"Employer name."}),position:g(m({description:"Your position or formal job title."})),url:g(m({description:"Employer website.",format:"uri"})),start:g(m({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:g(m({description:"A summary of your achievements and responsibilities under this employer."})),highlights:g(j(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(j(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),Xn=ae(D({summary:m({description:"Summary of overall employment."}),history:Gn},{description:"The 'employment' section describes the candidate's formal employment history."})),Wn=j(D({category:m({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:g(m({type:"string",description:"Friendly media name."})),url:g(m({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),Vn=j(D({title:m({description:"Project name or code-name."}),category:g(m({description:"Project type: open-source, private, side project, etc."})),description:g(m({description:"Project description or summary."})),summary:g(m({description:"A summary of your achievements and responsibilities on the project."})),role:g(m({description:"Your role on the project: Contributor, Creator, etc."})),url:g(m({description:"Project URL.",format:"uri"})),media:g(Wn),repo:g(m({description:"Repo URL.",format:"uri"})),start:g(m({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:g(j(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:g(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(j(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),Kn=ae(D({sets:j(D({name:m({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:g(m({description:"Level of mastery of the skill."})),skills:j(m({description:"Title or ID of a skill from the skills list."}))})),list:j(D({name:m({description:"The name or title of the skill."}),level:g(m({description:"A freeform description of your level of mastery with the skill."})),summary:g(m({description:"A short summary of your experience with this skill."})),years:g(Pt([m(),Ko()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),qn=j(D({title:g(m({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:m({description:"College or school name."}),area:g(m({description:"e.g. Arts"})),studyType:g(m({description:"e.g. Bachelor"})),start:g(m({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:g(m({description:"Grade or GPA."})),curriculum:g(j(m({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:g(m({description:"Website or URL of the institution or school.",format:"uri"})),summary:g(m({description:"A short summary of this education experience."})),keywords:g(j(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:g(j(m({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(m({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),Jn=D({summary:g(m({description:"Summary of overall education."})),level:m({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:g(m({description:"Your degree, if any (BSCS, BA, etc.)."})),history:g(qn)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),Qn=j(D({network:m({description:"The name of the social network, such as Facebook or GitHub."}),user:m({description:"Your username or handle on the social network."}),url:m({description:"URL of your profile page on this network.",format:"uri"}),label:g(m({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."}),El=D({name:m({description:"The candidate's name as it should appear on the resume."}),meta:Nn,info:g(Hn),disposition:g(Fn),contact:g(Yn),location:g(zn),employment:g(Xn),projects:g(Vn),skills:g(Kn),education:g(Jn),social:g(Qn),services:W(),recognition:W(),writing:W(),reading:W(),speaking:W(),governance:W(),languages:W(),samples:W(),references:W(),testimonials:W(),interests:W(),extracurricular:W(),affiliation:W()},{title:"FRESH Resume Schema"});var w;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(w||(w={}));var E;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator",e.DEVELOPER="Developer"})(E||(E={}));const Zn=Date.now(),Ue=e=>e==null?Zn:new Date(e).getTime(),er=e=>e.slice().sort((t,n)=>{const r=Ue(t.end),s=Ue(n.end);if(r>s)return-1;if(s>r)return 1;const a=Ue(t.start),c=Ue(n.start);return a>c?-1:c>a?1:0}),tr=e=>er(e),or=tr([{title:"@getodk/xforms-engine",category:w.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/benwbooth/quick-clojure",role:E.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),nr=e=>e,rr=e=>e,ir=rr([{employer:"ODK",position:"Senior Software Engineer",start:"2021-03",end:"2025-04",summary:`
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
      `]}]),sr=ir;var b;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(b||(b={}));var ve;(function(e){e.LANGUAGES_PLATFORMS="Languages",e.SERVICES_DISTRIBUTED_SYSTEMS="Services",e.USER_INTERFACE_EXPERIENCE="UI/UX",e.DOMAIN_SPECIFIC_LANGUAGES="DSL\u200Bs"})(ve||(ve={}));const ot={[ve.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:b.EXPERT},{name:"OpenAPI & JSON Schema",level:b.EXPERT},{name:"Django REST framework",level:b.ADVANCED},{name:"Fault tolerance",level:b.ADVANCED},{name:"Microservice architecture",level:b.ADVANCED},{name:"Apache Storm",level:b.INTERMEDIATE},{name:"Redis",level:b.BASIC}],[ve.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:b.EXPERT},{name:"DOM & Web APIs",level:b.EXPERT},{name:"Web performance",level:b.ADVANCED},{name:"UI & UX design",level:b.ADVANCED},{name:"A11y",level:b.INTERMEDIATE}],[ve.DOMAIN_SPECIFIC_LANGUAGES]:[{name:"Interpreter runtime",level:b.ADVANCED},{name:"Interpreter optimization",level:b.INTERMEDIATE},{name:"Domain-specific tooling",level:b.INTERMEDIATE}],[ve.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:b.EXPERT},{name:"Clojure & ClojureScript",level:b.EXPERT},{name:"XPath",level:b.EXPERT},{name:"ODK XForms",level:b.EXPERT},{name:"HTML & CSS",level:b.EXPERT},{name:"SQL (PostgreSQL)",level:b.ADVANCED},{name:"Python",level:b.INTERMEDIATE},{name:"Swift",level:b.BASIC},{name:"Java",level:b.BASIC}]},ar={list:Object.values(ot).flatMap(Ne),merged:ot,sets:Object.entries(ot).map(([e,t])=>({name:e,skills:t.map(({name:n})=>n)}))},lr=nr({name:"Trevor Schmidt",meta:{format:Ft,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:sr},info:{class:"Software Engineer",brief:Mt(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:or,skills:ar,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),Ye=Symbol("DEFAULT_TOPIC"),M={[Ye]:Ye,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},cr=e=>typeof e=="string"||typeof e=="symbol",Ut=e=>cr(e)&&e in M,nt=e=>Ut(e)?M[e]:e,Yt=Object.entries(M).reduce((e,t)=>{const[n,r]=t;return typeof n=="string"?{...e,[r]:n}:e},{}),dr=e=>Ut(e)?e:Yt[e],mr=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),pr=Object.fromEntries(Object.entries(Yt).map(([e,t])=>typeof t=="string"?[e,mr(t)]:null).filter(e=>e!=null)),ur=e=>{const t=nt(e);if(typeof t=="string")return pr[t]},ze=2,rt={minEm:1.0625,fluidVw:1.0625*ze,maxEm:1.25},C="@media (prefers-color-scheme: dark)",Ge="@media print",gr=["h1","h2","h3","h4","h5","h6"],hr=["dd","dl","dt","li","ol","ul"],fr=[...gr,...hr,"p"],Ee=rt.minEm/rt.maxEm,ne={h1:1.953,h2:1.563,h3:1.25},br={h1:{minEm:ne.h1*Ee,fluidVw:ne.h1*Ee*ze,maxEm:ne.h1},h2:{minEm:ne.h2*Ee,fluidVw:ne.h2*Ee*ze,maxEm:ne.h2},h3:{minEm:ne.h3*Ee,fluidVw:ne.h3*Ee*ze,maxEm:ne.h3}},zt=75,Xe=1.25,yr=["0.7fr",`${Xe}rem`,[`${zt}ch`,`calc(100% - ${Xe*2}rem)`],`${Xe}rem`,"1.2fr"],it=1,Sr=["0.7fr",`${it}rem`,[`${zt*1.1875}ch`,`calc(100% - ${it*2}rem)`],`${it}rem`,"1.2fr"],vr=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],st=vr.join(", "),Er=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],kr=Er.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),G={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},wr="hover-inherit-topic-color",Cr={[M[Ye]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.DEFAULT_TOPIC.light},[C]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.DEFAULT_TOPIC.dark}}}}},[M.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.ABLEISM}}},[M.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.ARTS_CRAFTS}}},[M.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.LEMON}}},[M.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.MENTAL_ILLNESS}}},[M.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.NEURODIVERGENCE}}},[M.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.PHILOSOPHY}}},[M.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.POLITICS}}},[M.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.RACISM}}},[M.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.SEXISM}}},[M.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.SUBSTANCE_ABUSE}}},[M.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.TECHNOLOGY}}},[M.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.TRANSPHOBIA}}}},Gt=_e(),i={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:wr,baseFontSizeRange:rt,darkMode:C,print:Ge,abbreviation:{"--abbreviation-highlight":"hsl(64deg 100% 50% / 0.25)",backgroundImage:`linear-gradient(${["to top","var(--abbreviation-highlight)","var(--abbreviation-highlight) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[C]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[C]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:Gt,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[C]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${Gt}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[C]:{color:"hsl(212deg, 10%, 90%)"}}},[C]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[C]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[C]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:st},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:st,nested:{[C]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em",fontWeight:300},emphasize:{color:"#000"},firstLastMarginZeroElements:fr,gitHubLogo:{fill:"#171515",nested:{[C]:{fill:"#fff"}}},headingLineHeight:.9375,headingRanges:br,[C]:{abbreviation:{"--abbreviation-highlight":"hsl(336deg 85% 25%)"},aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg 60% 4%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)",fontWeight:200},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(190deg 20% 97%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"oklch(0.71 0.16 355.75)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:yr,mainGridSidePaddingRem:Xe,monospaceFont:st,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[C]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{color:"hsl(210deg 12% 5% / 95%)",fontFamily:kr},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[C]:{backgroundColor:"hsl(336deg, 100%, 7%)"},[Ge]:{backgroundColor:"#fafafa"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[C]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"#fffff1",nested:{[C]:{backgroundColor:"hsl(41deg, 100%, 8%)"},[Ge]:{backgroundColor:"oklch(0.98 0 0)"}}},itemOdd:{backgroundColor:"inherit"},itemEven:{backgroundColor:"oklch(0.99 0.03 100.56)",nested:{[C]:{backgroundColor:"oklch(0.26 0.06 71.28)"},[Ge]:{backgroundColor:"oklch(0.99 0 0)"}}}},skillLevel:{[b.BASIC]:{color:"hsl(207deg, 25%, 83%)",nested:{[C]:{color:"hsl(207deg, 15%, 43%)"}}},[b.INTERMEDIATE]:{color:"hsl(188deg, 53%, 74%)",nested:{[C]:{color:"hsl(188deg, 53%, 34%)"}}},[b.ADVANCED]:{color:"hsl(188deg, 70%, 59%)",nested:{[C]:{color:"hsl(188deg, 80%, 39%)"}}},[b.EXPERT]:{color:"hsl(152deg, 100%, 39%)",nested:{[C]:{color:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:Sr,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[C]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[C]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:Cr,topicTagIdentifier:_e(),topicTagInner:{backgroundImage:Se(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[C]:{backgroundImage:Se(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:Se(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[C]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:Se(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visiblyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[C]:{color:"hsl(194deg, 8%, 50%)"}}}}}},at=["b","em","h1","h2","h3","i","strong"],We=["h1","h2","h3","h4","h5","h6"],Tr=[...We,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Rr=Array.from(new Set([...We,...Tr,"div","fieldset","form","hgroup","hr","pre"])),Ar=Se(`
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
    font-size:        ${oe(`${i.baseFontSizeRange.minEm}em`,`${i.baseFontSizeRange.fluidVw}vw`,`${i.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${T(["html","body"],{...i.document})}

  ${T(["body"],{...i.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${We.join(",")} {
    font-family:             Minipax, Georgia, serif;
    font-smooth:             always;
    font-weight:             normal;
    line-height:             ${i.headingLineHeight};
    margin-bottom:           1rem;
    margin-top:              1rem;
    padding-left:            1rem;
    text-indent:             -1rem;
    -webkit-font-smoothing:  antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`),xr=()=>{Fe.global(Se(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${Rr.join(",")} {
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

      ${T(at,i.emphasize)}

      h1 {
        font-size: ${oe(`${i.headingRanges.h1.minEm}em`,`${i.headingRanges.h1.fluidVw}vw`,`${i.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${oe(`${i.headingRanges.h2.minEm}em`,`${i.headingRanges.h2.fluidVw}vw`,`${i.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${oe(`${i.headingRanges.h3.minEm}em`,`${i.headingRanges.h3.fluidVw}vw`,`${i.headingRanges.h3.maxEm}em`)};
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

      ${T(["hr:after"],{...i.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${T(["pre"],i.pre)}

      ${T(["code"],{...i.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

      pre code {
        background-color: transparent;
        display:          block;
        line-height:      1.325em;
        margin:           0;
        padding:          0;
      }

      ${i.firstLastMarginZeroElements.map(e=>`${e}:first-child`).join(", ")} {
        margin-top: 0;
      }

      ${i.firstLastMarginZeroElements.map(e=>`${e}:last-child`).join(", ")} {
        margin-bottom: 0;
      }

      ${T(["a"],{...i.links,fontWeight:"bolder"})}

      ${T(["abbr"],{...i.abbreviation,textDecoration:"none"})}

      ${T(["aside","small"],i.deemphasize)}

      ${T(["aside"],{...i.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem",nested:{"& a":{fontWeight:600}}})}

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

      ${i.darkMode} {
        ${T(["html","body"],{...i[i.darkMode].document})}

        ${T(["body"],{...i[i.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${T(at,i[i.darkMode].emphasize)}
        ${T(["abbr"],i[i.darkMode].abbreviation)}
        ${T(["pre"],i[i.darkMode].pre)}
        ${T(["code"],i[i.darkMode].code)}
        ${T(["a"],i[i.darkMode].links)}
        ${T(["aside","small"],i[i.darkMode].deemphasize)}
        ${T(["aside"],i[i.darkMode].aside)}
        ${T(["hr:after"],i[i.darkMode].separator)}
      }

      ${i.print} {
        ${T(["a","a:hover","code"],{color:"inherit",cursor:"text",fontWeight:"inherit",textDecoration:"none"})}

        ${T(["abbr"],{backgroundImage:"none"})}

        ${T(["code"],{backgroundColor:"transparent",borderRadius:0,display:"inline-flex",lineHeight:"inherit",padding:0})}
      }
    `))},Pr=`
  ${i.mainGridColumns[0]}
  ${i.mainGridColumns[1]}
  min(
    ${i.mainGridColumns[2][0]},
    ${i.mainGridColumns[2][1]}
  )
  ${i.mainGridColumns[3]}
  ${i.mainGridColumns[4]}
`.replace(/\s+/g," "),Xt={gridColumn:"1 / -1"},Wt=Fe(Xt),$=l("div",{nested:{[`& > .${Wt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:Pr,...Xt}),Or=({children:e,shadow:t,...n})=>o($,{...n},e),Vt=([e,t,n])=>`rgba(${[e,t,n,0].join(",")})`,Kt=["12rem 100%","auto"],qt=Kt.join(", "),Ir=Kt.map(e=>e.replace("100%","100.1%")).join(", "),Mr=le.renderKeyframe(()=>({"0%":{backgroundSize:qt},"100%":{backgroundSize:Ir}}),{}),Jt="5px",Qt=(e,t)=>e!=null&&t!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${t.join(",")})`,`rgba(${t.join(",")}) calc(11rem + ${Jt})`,`${Vt(t)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${Vt(e)} ${Jt}`].join(", ")})`].join(", ")}:null,Lr=e=>{if(e!=null){const{darkMask:t,darkScroll:n,lightMask:r,lightScroll:s}=e;return{dark:Qt(n,t),light:Qt(s,r)}}return{dark:null,light:null}},Zt=l(Or,({shadow:e})=>{const{dark:t,light:n}=Lr(e),r=t==null?null:{[i.darkMode]:t};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:qt,paddingRight:i.mainGridSidePaddingRem,overflowX:"auto",nested:{...r,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:Mr,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),jr=l($,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),eo=l("div",{paddingLeft:"1rem"}),Dr=l("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),$r=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),lt="div",Br={ContentContainer:lt,InnerContainer:eo,OuterContainer:lt,SymbolContainer:lt},to=e=>{const{children:t,ContentContainer:n,InnerContainer:r,OuterContainer:s,outerContainerProps:a,symbol:c,SymbolContainer:d}={...Br,...e};return o(jr,{as:s,...a},o(Dr,{as:d,role:"presentation"},c),o(eo,{as:r},o($r,{as:n},t)))},Nr=l("pre",{fontSize:"1rem"}),Hr=l(Zt,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[i.darkMode]:{}}}),_r=e=>o(Hr,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),Fr=l($,{...i.pre,nested:{[i.darkMode]:{...i[i.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),Ur=l("div",{...i.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Yr=({children:e})=>o(to,{ContentContainer:Nr,InnerContainer:_r,OuterContainer:Fr,symbol:"{",SymbolContainer:Ur},e),zr=e=>e.map((t,n)=>n),ct=(e,t)=>zr(e).sort((n,r)=>{const s=t(e[n],e[r]);return s===0?n===r?0:n>r?1:-1:s}).map(n=>e[n]),Gr=e=>typeof e=="object"&&e!=null,Xr=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),Wr=(e,t)=>Gr(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof t=="string"&&qo().test(t),Vr=({["aria-label"]:e,children:t,role:n})=>o(Xr,{"aria-label":e,role:n},t),Kr={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},qr={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",ODK:"Open Data Kit (https://getodk.org/)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},Jr={...Kr,...qr},oo=pe.resolve(process.cwd(),"./syntax-themes"),[Qr,Zr]=await Promise.all([jt(pe.resolve(oo,"./yi-dark.json")),jt(pe.resolve(oo,"./yi-light.json"))]),ei={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},ti={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},oi=e=>e.trim().split(/\b\W*\b/).reduce((t,n)=>({...t,...ti[n]}),{}),ni=e=>Object.entries(e).reduce((t,[n,r])=>{const s=ei[n];if(r==null||typeof s!="string")return t;const a=s==="fontStyle"?oi(r):{[s]:r};return{...t,...a}},{}),[ri,ii]=await Promise.all([Dt({theme:Qr}),Dt({theme:Zr})]),si=new Set(nn.map(e=>e.id)),ai=new Set(["ts","tsx","typescript"]),no=e=>e.explanation?.reduce((t,n)=>({...t,...n.scopes.reduce((r,{themeMatches:s})=>({...r,...s.reduce((a,{settings:c})=>({...a,...ni(c)}),r)}),t)}),{color:e.color}),li=(e,t,n={})=>{const r=no(e),s=no(t),a=s==null?null:{nested:{[i.darkMode]:s}},{content:c}=e;if(r==null&&a==null)return o("span",n,c);const d={...r,...a},p=l("span",d);return o(p,n,c)},ci=Fe({paddingRight:"1rem"}),di={className:ci},mi=(e,t)=>It(o(ue,{},o("pre",{},o("code",{},...e.reduce((n,r,s)=>{const a=r.map((d,p)=>{const u=t[s][p],y=p===r.length-1?di:{};return li(d,u,y)}),c=s===0?"":`
`;return[...n,c,...a]},[]))))),pi=e=>{const{lang:t,value:n,meta:r}=e,s=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,a=String(t)==="json5"?"json":t;let c;const d=n.replace(/^\n+|\n+$/g,"");if(!si.has(a))c=rn.plainTextRenderer(d,{});else{const p=ii.codeToThemedTokens(d,a),u=ri.codeToThemedTokens(d,a);c=mi(p,u)}ai.has(a)&&!r?.includes("ignore"),e.children=[],e.type="html",e.value=c},ui=()=>t=>{Qe(t,"code",pi)};import.meta.env=tt;const Oe=Lt.createRequire(import.meta.url),gi=Oe("rehype-parse"),hi=Oe("rehype-remark"),fi=Oe("remark"),bi=Oe("remark-abbr"),yi=Oe("remark-stringify"),Si=({className:e,children:t,...n})=>e==="language-id"?null:e==="code-container"?$e(z,n,...xt(t)):o("div",{className:e,...n},...xt(t)),vi=({children:e,...t})=>Wr(t,e)?o(Vr,t,e):o("span",t,e),dt={components:{div:Si,pre:Yr,span:vi},rehypePlugins:[Jo],remarkPlugins:[ui,bi,kn,Qo,Zo]},ro=e=>{const{children:t=$e(()=>null,{}),components:n={},rehypePlugins:r=[],remarkPlugins:s=[]}=e,a={...dt.components,...n},c={mdx:$e,MDXProvider:_o,components:a,props:{}},d=typeof t=="string"?Mt(t).trim():t,p=[...dt.rehypePlugins,...r],u=[...dt.remarkPlugins,...s],y=Ho.sync(d,{rehypePlugins:p,remarkPlugins:u,skipExport:!0}).trim(),{code:h}=en(y,{objectAssign:"Object.assign"}),S=Object.keys(c),v=Object.values(c),f=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...S,`${h}

${f}`)($e,...v)},Ei=Object.entries(Jr).map(([e,t])=>`*[${e}]: ${t}`).join(`
`),ki=e=>[e,Ei].join(`

`),mt=([e,...t],{includeAbbreviations:n=!0})=>{const r=typeof e=="string"?[e,...t].join(""):String.raw(e,...t);return n?ki(r):r},ke=(...e)=>{const t=mt(e,{includeAbbreviations:!0});return o(ue,{},o(ro,{},t))},io=(...e)=>{const t=mt(e,{includeAbbreviations:!0});return o(ue,{},o(ro,{components:{p:z}},t))},wi=(...e)=>{const t=mt(e,{includeAbbreviations:!1});return fi().use(gi).use(hi).use(yi).use(tn).use(on).processSync(t).contents.toString().trim()},re=(e,t)=>Number(e.toFixed(t)),ge=parseInt("ff",16),so=parseInt("00",16),ao=.05,pt=.15,ut=.05;class Ie extends Error{constructor(t){super(`Invalid hash: ${t}`)}}const Ci=/^[0-9a-f]{40}$/i,Ti=e=>Ci.test(e),Ri=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),Ai=e=>e.length===10,xi=/([0-9a-f]{2})([0-9a-f]{2})/ig,gt=e=>{if(!Ti(e))throw new Ie(e);const n=Array.from(e.matchAll(xi)??[]).map(([r,s,a])=>({x:s,y:a}));if(!Ai(n))throw new Ie(e);return n},Pi=Symbol("IS_POINT"),Oi=e=>Object.assign(e,{[Pi]:!0}),lo=e=>{const t=parseInt(e,16);if(t>ge||t<so)throw new Error(`Not a valid coordinate: ${e}`);return Oi(t)},Ii=({x:e,y:t})=>({x:lo(e),y:lo(t)}),Mi=e=>e.length===10,ht=(e,t)=>{try{const n=t.map(Ii);if(!Mi(n))throw new Ie(e);return n}catch{throw new Ie(e)}},Li=Symbol("SCALED_COORDINATE"),co=e=>e.reduce(({max:t,min:n},{y:r})=>({max:Math.max(Number(t),Number(r)),min:Math.min(Number(n),Number(r))}),{max:-Infinity,min:Infinity}),K=(e,t)=>Object.assign(re(e,2),{[Li]:t}),we=({x:e,xScale:t,y:n,yScale:r})=>({x:K(e,t),y:K(n,r)}),ft=({x:e,y:t},{xScale:n,xShift:r,yScale:s,yShift:a})=>we({x:(e+r)*n,xScale:n,y:(t+a)*s,yScale:s}),bt=({points:e,xMax:t,xScale:n,yScale:r})=>[we({x:0,xScale:n,y:0,yScale:r}),...e,we({x:t,xScale:n,y:0,yScale:r})].reduce((s,a,c,d)=>{if(c===0||c===d.length-1)return s;const p=K(0,r),u=[{x:d[c-1].x,y:p},a,{x:d[c+1].x,y:p}];return[...s,u]},[]),yt=({segments:e,xMax:t,xScale:n,yScale:r})=>e.map(s=>{const[{x:a,y:c},{x:d,y:p},{x:u,y}]=s,h=u-a,S=p/h,f=6/S;if(f<1){const x=f*.2*a,R=a-x,B=u+x,O=R<0?Math.abs(R):B>t?t-B:0,P=R+O,V=B+O,A=f*.3,_=d+O,I=A*p,X=p-I;return[we({x:P,xScale:n,y:c,yScale:r}),we({x:_,xScale:n,y:X,yScale:r}),we({x:V,xScale:n,y,yScale:r})]}return s}),ji=({x:e,y:t},{x:n,y:r})=>{const s=n-e,a=r-t;return{angle:Math.atan2(a,s),length:Math.sqrt(s**2+a**2)}},mo=({current:e,previous:t,next:n,reverse:r,smoothing:s,xScale:a,yScale:c})=>{const d=r?Math.PI:0,p=ji(t,n),u=p.angle+d,y=p.length*s,{x:h,y:S}=e,v=h+Math.cos(u)*y,f=S+Math.sin(u)*y;return{x:K(v,a),y:K(f,c)}},St=({index:e,point:t,points:n,smoothing:r,xScale:s,yScale:a})=>{const c=n[e-1];if(c==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const d=n[e-2]??c,p=mo({current:c,previous:d,next:t,reverse:!1,smoothing:r,xScale:s,yScale:a}),u=c,y=n[e+1]??t,h=mo({current:t,previous:u,next:y,reverse:!0,smoothing:r,xScale:s,yScale:a});return[p,h,t]},po=({segment:e,smoothing:t,xScale:n,yScale:r})=>e.reduce((s,a,c)=>{if(c===0)return s;const p=St({index:c,point:a,points:e,smoothing:t,xScale:n,yScale:r}).map(u=>`${u.x},${u.y}`).join(" ");return[...s,`C ${p}`]},[]),Di=({baseYCoordinate:e,isBaselineBelowMidpoint:t,segments:n,xScale:r,yMax:s,yScale:a,yTilt:c=!1})=>n.reduce((d,p,u,y)=>{const{length:h}=y,[S,v,f]=p,{x:k,y:x}=S,{x:R,y:B}=v,{x:O,y:P}=f,V=O-k,A=V===0?0:Math.max(B/V*ut,pt),_=c?.1:0,I=1-_,X=1+_,J=u%2==0?I:X,Z=t?x+e:s-x+e,F={x:k,y:K(Z*J,a)},Q=u%2==0?I:X,ee=t?P+e:s-P+e,U={x:K(O,r),y:K(ee*Q,a)},H=R-k,N=O-R,Y=N>H?0:0-(R-k)*ao,q=(h-u)*(a/100*s),ce={x:K(R+Y,r),y:K(B-q,a)},de=po({segment:[F,ce,U],smoothing:A,xScale:r,yScale:a}),me=N>H?(O-R)*ao:0,ye={x:K(R+me,r),y:K(s-q,a)},te=po({segment:[U,ye,F],smoothing:A,xScale:r,yScale:a});return[...d,[`M ${F.x},${F.y}`,...de,...te,"Z"].join(" ")]},[]),$i=({hash:e,xPadding:t=0,xScale:n=1,yOffset:r=.5,yPadding:s=0,yScale:a=1})=>{const c=gt(e),d=ht(e,c),p=ct(d,({x:P},{x:V})=>Number(P)===Number(V)?0:Number(P)>Number(V)?1:-1),u=t/2,y=s/2,h=p.map(P=>ft(P,{xScale:n,xShift:u,yScale:a,yShift:y})),S=(ge+t)*n,{max:v}=co(h),f=(v+s)*a,k=bt({points:h,xMax:S,xScale:n,yScale:a}),x=yt({segments:k,xMax:S,xScale:n,yScale:a}),R=r>.5,B=R?f*r:-1*f*r;return{segmentPaths:Di({baseYCoordinate:B,segments:x,xScale:n,yMax:f,isBaselineBelowMidpoint:R,yScale:a}),xMax:S,yMax:f}};var vt;(function(e){e.PNG="png"})(vt||(vt={}));const Et=process.cwd(),Me=e=>e.startsWith("/")?pe.resolve(Et,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):pe.extname(e)==""?pe.resolve(Et,"./src/pages/",`${e}.tsx`):e;var Ce;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(Ce||(Ce={}));var he;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(he||(he={}));const Bi="origin",Ni="main",Le=e=>{const{branch:t=Ni,decode:n,filter:r=Ce.FIRST,format:s,path:a=Et,remote:c=Bi}=e,{error:d,stdout:p}=an.spawnSync("git",["log",...r.split(" "),`--branches=${t}`,`--format=${s}`,`--remotes=${c}`,"--",a]);if(d)throw d;const u=p.toString().trim();return(u===""?[]:u.split(`
`)).map(n)},kt=e=>{const t=new Date(e);if(!isNaN(t.getTime()))return t},Hi=e=>{const t=Me(e),[n=null]=Le({decode:kt,filter:Ce.CURRENT,format:he.ISO_DATE,path:t});return n},_i=e=>{const t=Me(e),[n=null]=Le({decode:kt,format:he.ISO_DATE,path:t});return n},Fi=e=>{const t=Me(e),[n=null]=Le({decode:kt,filter:Ce.FIRST_MERGE,format:he.ISO_DATE,path:t});return n},wt=e=>{const t=Ze.readFileSync(e).toString();let n=ln.createHash("sha1");return n.update(t),n.digest("hex")},Ui=e=>{const t=Me(e),[n]=Le({decode:Ne,format:he.HASH,path:t});return n??wt(t)},Yi=e=>{const t=Me(e),[n]=Le({decode:Ne,filter:Ce.FIRST_MERGE,format:he.HASH,path:t});return n??wt(t)},zi={height:630,width:1200},Gi=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",Xi=sn({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Wi=(e,t,n=vt.PNG,r=zi)=>{const s=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=Xi.hash(t),c=pe.resolve(s,`${a}.${n}`),d=c.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:c,imageType:n,publicPath:d,...r}}};var fe;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(fe||(fe={}));const uo=(e,t,n,r,s=[M.TECHNOLOGY])=>{const a=r===fe.MUTABLE,c=r===fe.IMMUTABLE_MERGE,d=t.replace(/^file:(\/\/)?/,""),p=a?wt(d):c?Yi(e):Ui(e),u={created:(c?Fi(e):_i(e))??Ze.statSync(d).ctime,updated:Hi(e)??Ze.statSync(d).mtime},h=Wi(t,a?{importURL:t,stat:u,topics:s}:{hash:p,importURL:t});return{hash:p,host:Gi,path:e,social:h,stat:u,title:n,topics:s}},go=()=>o(z,null,o("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),o("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),o("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),o("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Vi=()=>o("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},o("defs",null,o(go,null))),Ki=1.6180334,qi=4,ho=re(Ki*5,6),fo=.75,Te=.15,Ji=1.5,Re=oe("6rem",`${100/ho}vw`,"10rem"),Qi=l($,{height:Re,position:"relative",width:"100%"}),Zi=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),es=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var je;(function(e){e.INLINE="inline",e.NONE="none"})(je||(je={}));const Ct={xPadding:qi,xScale:ho,yOffset:fo,yPadding:Te,yScale:Ji},Tt=e=>{const{className:t,defsUsage:n=je.INLINE,hash:r,height:s,rawSVG:a=!1,styleRenderer:c=le,title:d,topics:p=[],width:u}=e,y=p.length<2?[...p,M[Ye]]:p,h=P=>`${P}-${r}`,{segmentPaths:S,xMax:v,yMax:f}=$i({...Ct,hash:r}),k=f*fo,x=f*Te/10.24,R=x*.75,O=o(Zi,{className:Wt,height:s,preserveAspectRatio:"none",viewBox:[0,0,v,f].join(" "),width:u},o("title",null,"Generated art for the page or post titled"," ",o("i",null,d),", with the content or commit hash ",r," ",y.length>0?[", and the topics: ",y.map(String).join(", ")]:null),o("defs",null,n===je.INLINE?o(go,null):null,o("filter",{id:h("blur")},o("feOffset",{in:"SourceGraphic",dx:"0",dy:R,result:"glowOffsetOut"}),o("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:x,result:"glowBlurOut"}),o("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),o("clipPath",{id:h("blurOverlayClip")},o("rect",{x:"0",width:v,y:k,height:f})),o("filter",{id:h("blurOverlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:R}),o("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:x})),o("filter",{id:h("blurUnderlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:R}),o("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:x}),o("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),o("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),o("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),o("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:x})),o("g",{id:h("blobs")},S.map((P,V)=>{const A=V%y.length,_=y[A],I=c.renderRule(()=>({...i.topicColors[_]}),Object.keys);return o(es,{key:P,className:I,d:P,mask:"url(#softVerticalFade)"})}))),o("g",{transform:[`translate(0, ${f*Te})`,`scale(1, ${1-Te*2})`].join(" "),filter:`url(#${h("blur")})`},o("use",{href:`#${h("blobs")}`,mask:"url(#horizontalMidFade)"})),o("g",{"clip-path":`url(#${h("blurOverlayClip")})`,filter:`url(#${h("blurOverlay")})`,transform:[`translate(0, ${f*Te})`,`scale(1, ${1-Te*2})`].join(" ")},o("use",{href:`#${h("blobs")}`,mask:"url(#softVerticalFade)"})));return a?O:o(Qi,{className:t},O)},ts=[,"January","February","March","April","May","June","July","August","September","October","November","December"],os=l("time",{nested:{[i.darkMode]:{...i[i.darkMode].deemphasize}},...i.deemphasize});var ie;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(ie||(ie={}));const Ae=({date:e,mode:t=ie.DEFAULT,...n})=>{const r=e.getMonth()+1,s=e.getFullYear(),a=t===ie.SHORT?`${r}/${s}`:t===ie.META?"":[e.getDate(),ts[r],s].join(" ");return o(os,{...n,datetime:e.toISOString()},a)},ns=l("a",{...i.topicTagLink(i.topicTagIdentifier.className)}),rs=l("span",i.topicTagIdentifier()),is=l(rs,{...i.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),ss=({className:e,link:t=!0,topic:n})=>{const r=ur(n),s=nt(n);if(r==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=t?ns:"span",c=t?{href:`/blog/topics/${r}/`}:{};return o(a,{className:[e,i.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...c},o(is,null,s))},bo=l(ss,e=>({...i.topicTagOuter,...i.topicColors[nt(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),as=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),ls=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),yo=({className:e,link:t=!0,topics:n})=>o(as,{className:e},n.map(r=>typeof r=="string"?o(ls,{key:dr(r)},o(bo,{link:t,topic:r})):null)),cs=e=>e.reduce((t,n)=>{const r=n.stat.created.getFullYear(),s=t[r]??[];return{...t,[r]:[...s,n]}},{}),ds=l($,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),ms=l($,{...i.blog.listing.item,minHeight:Re,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),ps=l($,{paddingTop:`calc(${Re} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),us=l($,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),gs=l("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),hs=Fe({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),fs=l("h2",{...i.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),bs=l(Ae,{padding:"0 0.5rem 0.125rem 0"}),ys=l(yo,{gridColumn:"3 / 3"}),Ss=l("div",{...i.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),vs=l("a",{fontSize:"0.875em"});var Ve;(function(e){e.DATE="date"})(Ve||(Ve={}));var Ke;(function(e){e.ASC="asc",e.DESC="desc"})(Ke||(Ke={}));const Es=({order:e=Ke.DESC,posts:t,sort:n=Ve.DATE})=>{const r=t.slice().sort((a,c)=>e===Ke.DESC&&n===Ve.DATE?a.stat.created>c.stat.created?-1:1:0),s=cs(r);return o(z,null,Object.entries(s).map(([a,c])=>o(z,{key:a},o(ds,null,c.map(d=>{const{CustomArt:p=Tt,description:u,hash:y,path:h,stat:{created:S},title:v,topics:f}=d;return o(ms,{key:h},o(ps,{as:"a",href:h},o(gs,null,o(p,{defsUsage:je.NONE,hash:y,padded:!0,renderType:"listing",title:v,topics:f})),o(us,null,o(fs,{className:hs},v),o(bs,{date:S}))),o(ys,{link:!1,topics:f}),o(Ss,{className:i.blog.listing.descriptionIdentifier},u),o("p",null,o(vs,{href:h},"Read more\u2026")))})))))},ks=()=>o(z,null,o("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),o("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),o("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),o("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),o("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),o("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),o("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),o("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),o("meta",{name:"application-name",content:"Eyelidlessness"}),o("meta",{name:"msapplication-TileColor",content:"#555555"}),o("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));xr();const So=({children:e,meta:{description:t,host:n,redirect:r,social:{image:s},title:a},...c})=>r?o($t,{...c},o(Be.title,null,"Redirecting to ",r),o("meta",{"http-equiv":"refresh",content:`0; URL=${r}`}),o("link",{rel:"canonical",href:r})):o($t,{...c},o(Be.title,null,a," | Eyelidlessness"),t!=null?o(Be.description,null,t):o(z,null),o("meta",{name:"theme-color",content:i.siteLogo.color}),o("style",{dangerouslySetInnerHTML:{__html:Ar}}),o("meta",{name:"twitter:card",content:"summary_large_image"}),o("meta",{name:"twitter:site",content:"@eyelidlessenss"}),o(Be.image,{alt:a,height:s.height,src:`${n}${s.publicPath}`,width:s.width}),o(z,null,e),o(ks,null)),ws=({as:e="div",devilsBreakpoint:t,gap:n,...r})=>{const s=l(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${t} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return o(s,{...r})},Cs=l("svg",{...i.visiblyHidden,position:"absolute"}),be=512,vo=[0,0,be,be].join(" "),Ts=be/2,Rs=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),As=()=>o(Cs,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:vo,width:"0"},o("defs",null,o("mask",{id:"octocat-knockout"},o("rect",{fill:"#fff",height:be,mask:"url(#octocat)",rx:Ts,width:be}),o("path",{d:Rs,fill:"#000"})))),xs=l("rect",{...i.gitHubLogo}),Eo=({className:e})=>o("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:vo},o("title",null,"GitHub"),o(xs,{height:be,mask:"url(#octocat-knockout)",width:be})),qe={height:60,width:338},Ps=l("svg",{display:"inline-block",maxWidth:"100%",width:`${qe.width}px`}),Os=l("use",{nested:{[i.darkMode]:{...i[i.darkMode].siteLogo}},...i.siteLogo,fill:"currentcolor"}),Is=`0 0 ${qe.width} ${qe.height}`,Ms=()=>o(Ps,{viewBox:Is},o(Os,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),o("title",null,"Eyelidlessness")),{columns:xe}=i.siteHeader,Ls=`
  ${xe[0]}
  ${xe[1]}
  min(
    ${xe[2][0]},
    ${xe[2][1]}
  )
  ${xe[3]}
  ${xe[4]}
`.replace(/\s+/g," "),js=l("header",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Ls,padding:"clamp(0.5rem, 4vmin, 2rem) 0",position:"relative",zIndex:1,nested:{[i.print]:{nested:{'&[data-page-id="resume"]':{display:"none"}}}}}),Ds=l("div",{gridColumn:3}),$s=l("div",{margin:"0 auto"}),Bs=l("a",{textDecoration:"none"}),Ns=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),ko=1,Hs=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${ko/2}rem`,padding:0}),_s=l("a",{...i.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[i.darkMode]:{...i[i.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),wo="1.5em",kl=l(Eo,{display:"block",width:`clamp(1.125em, 4vw, ${wo})`}),Fs=e=>{const t=e.meta.pageId==null?{}:{"data-page-id":e.meta.pageId},n=[{label:"Blog",location:"/"},{label:"Hire me",location:"/resume/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],r=n.reduce((c,d)=>typeof d.label=="string"?c+d.label.length:c,0),s={horizontal:"2rem"},a=`${[`${qe.width}px`,s.horizontal,`${r+2}ch`,wo,`${n.length*ko}rem`].join(" + ")}`;return o(js,{...t},o(Ds,null,o(ws,{as:"nav",devilsBreakpoint:a,gap:s},o($s,null,o(Bs,{href:"/"},o(Ms,null))),o(Ns,null,n.map(({location:c,label:d})=>o(Hs,null,o(_s,{href:c},d)))))))},Us=l($,{paddingTop:0,paddingBottom:"4em",nested:{[i.print]:{nested:{'&[data-page-id="resume"]':{paddingTop:"1rem"}}}}}),Ys=e=>{if(e.pageId!=null)return{"data-page-id":e.pageId}},Co=({meta:e,...t})=>o(ue,null,e.redirect==null?o(z,null,o(As,null),o(Fs,{meta:e}),o(Us,{as:"main",...Ys(e),...t})):o(z,null)),zs=l($,{...i.description,nested:{...i.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Gs=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Xs=l("div",{fontSize:"0.889em"}),Ws=({as:e="section",title:t,...n})=>o(zs,{as:e,itemprop:"description"},t?o(Gs,null,t):null,o(Xs,{...n})),Vs=l($,{paddingTop:"1rem"}),Ks=l("h1",{marginBottom:"0.25rem"}),qs=l($,{paddingBlock:"1rem"}),Js=e=>{const{children:t,CustomArt:n,description:r,descriptionRaw:s,hash:a,stat:{created:c},title:d,topics:p}=e;return o(z,null,o(So,{meta:{...e,description:s}}),o(Co,{as:"article",meta:e},o(qs,null,n==null?o(Tt,{hash:a,title:d,topics:p}):o(n,{hash:a,renderType:"post",StylesProvider:ue,title:d,topics:p}),o(Vs,null,o(Ks,null,d),o(Ae,{date:c,itemprop:"datePublished"}),o(yo,{link:!1,topics:p}))),o(Ws,null,r),t))},To={IMMUTABLE:fe.IMMUTABLE,IMMUTABLE_MERGE:fe.IMMUTABLE_MERGE},Qs=async e=>{const{description:t,importURL:n,path:r,redirect:s,title:a,topics:c,type:d=To.IMMUTABLE_MERGE}=e,{CustomArt:p,hash:u,host:y,social:h,stat:S}=uo(r,n,a,d,c),v=wi`${It(o(z,null,t))}`;return{CustomArt:p,description:t,descriptionRaw:v,hash:u,host:y,path:r,redirect:s,social:h,stat:S,title:a,topics:c}},Ro="@media screen and (min-width: 41.666rem)",Zs=l("div",{display:"block",margin:0,nested:{"& > *":{containerType:"inline-size"},[Ro]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}},[i.print]:{display:"none"}}}),ea=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),ta=e=>{const t=Array();return e.role===E.CREATOR&&t.push(e.description),e.summary!=null&&t.push(e.summary),t.length===0&&t.push(e.description),o(ea,null,t.map(n=>ke(n)))},oa=({date:e,...t})=>e==null?null:o(Ae,{...t,date:e}),na=l("span",{nested:{[i.darkMode]:{...i[i.darkMode].deemphasize}},...i.deemphasize}),ra=/^(\d{4})-(\d{2})$/,Ao=e=>{if(e==null)return null;const t=ra.exec(e);if(t==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,r]=t;return new Date(`${n}-${r}-01T00:00:00`)},xo=l("div",{fontSize:"0.88889em",whiteSpace:"nowrap",nested:{"& time":{fontSize:"inherit"}}}),Po=({range:[e,t]})=>{const n=Ao(e),r=Ao(t);return e==t?o(xo,null,o(Ae,{date:n,itemprop:"endDate",mode:ie.SHORT})):o(xo,null,o(Ae,{date:n,itemprop:"startDate",mode:ie.SHORT}),o(na,null,"-"),o(oa,{date:r,itemprop:"endDate",mode:ie.SHORT}))},ia=l("div",{display:"grid",rowGap:"0.325rem",nested:{"& > *":{margin:0}}}),Rt=oe("1rem","3.5cqi","1.25rem"),sa=l("h3",{fontFamily:i.prose.fontFamily,fontWeight:500,fontSize:Rt,paddingLeft:0,textIndent:0,nested:{[i.print]:{fontSize:"1rem"}}}),aa=l("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),la=l("a",{alignSelf:"baseline",display:"block",flexShrink:0,height:`calc(${Rt} * ${i.headingLineHeight})`,lineHeight:`calc(${Rt} * ${i.headingLineHeight*1.5})`,padding:"0 0.5rem",zIndex:1,nested:{"& svg":{width:"1em"},[Ro]:{paddingLeft:0},[i.print]:{display:"none"}}}),ca=l("div",{flexGrow:1,paddingTop:"0.05556rem"}),da=l("div",{alignItems:"start",display:"flex",padding:"1rem 0",nested:{[i.print]:{padding:"1rem 0 0"}}}),Oo=({project:{description:e,end:t,repo:n,role:r,title:s,start:a,summary:c}})=>o(da,null,o(la,{href:n},o(Eo,null)),o(ca,null,o(ia,null,o(sa,null,o(aa,{href:n},s)),o(Po,{range:[a,t]})),o(ta,{role:r,description:e,summary:c??null}))),Io=l("h2",{fontSize:oe(`${i.headingRanges.h3.minEm}em`,`${i.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Mo=l("div",{marginTop:"0.5rem"}),ma=e=>{const{creator:t,contributor:n}=e.projects.reduce((r,s)=>{const a=s.role===E.CREATOR?"creator":"contributor";return{...r,[a]:[...r[a],s]}},{creator:[],contributor:[]});return o(Zs,null,o("div",null,o(Io,null,"Projects I Created"),o(Mo,null,t.map(r=>o(Oo,{project:r})))),o("div",null,o(Io,null,"Open Source Contributions"),o(Mo,null,n.map(r=>o(Oo,{project:r})))))},pa=l($,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),De=e=>o(pa,{as:"section",...e}),ua="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",ga=({fill:e,topic:t})=>{const n=i.topicColors[t];return{...n,...e?{fill:"currentcolor",fillOpacity:.05,mask:"url(#curvesVerticalFade)",strokeWidth:0,nested:{...n.nested,[i.darkMode]:{fillOpacity:.15}}}:{fill:"none",strokeWidth:1,stroke:"currentcolor"},transition:ua,vectorEffect:"non-scaling-stroke"}},ha=({fill:e,index:t,topic:n,...r})=>o("path",{...r}),Lo=l(ha,ga),fa=l("svg",{overflow:"visible",padding:"1rem"}),ba=20,ya={xMax:ge,xScale:1,xShift:0,yMax:ge,yScale:1,yShift:0},Sa=({className:e,hexPoints:t,points:n,pointSize:r=6,scaleOptions:s,segments:a,sortIndexes:c,sortToggleClass:d,topics:p,...u})=>{const{xScale:y,xShift:h,xRange:S=y*(ge+h*2),yMax:v,yShift:f,yScale:k,yRange:x=k*(v+f*2)}={...ya,...s},R=ba*2,B=u.height??x+R,O=u.width??S+R,P=({x:A,y:_},I)=>{const X=c[I],{x:J,y:Z}=n[X],F=re((A+h)/S*100,4),Q=100-re((_-f)/x*100,4),ee=re((J+h)/S*100,4),U=100-re((Z-f)/x*100,4),H=0-re(F-ee,4),N=0-re(Q-U,4);return{cx:F,cy:Q,sortedCx:ee,sortedCy:U,sortedTranslateXPercent:H,sortedTranslateyPercent:N}},V=a.map(A=>{const[_,I,X]=A,{x:J}=_,{y:Z}=I,{x:F}=X,Q=F-J,ee=Q===0?0:Math.max(Z/Q*ut,pt);return{cubicPoints:A?.reduce((H,N,Y)=>{if(Y===0)return H;const q=St({index:Y,point:N,points:A,smoothing:ee,xScale:y,yScale:k});return[...H,q]},[]),segment:A}});return o(fa,{className:e,height:B,width:O,preserveAspectRatio:"none",viewBox:`0 0 ${O} ${B}`},o("defs",null,o("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.15","stop-color":"white","stop-opacity":".95"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),o("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),V.map(({cubicPoints:A,segment:_},I)=>{const[X,J,Z]=_,F=A.map(([U,H],N)=>[N===0?X:J,U,H,N===0?J:Z]);return o(z,null,o(()=>o(z,null,F.map(U=>{const H=U.map((Y,q)=>{const{cx:ce,cy:se}=P(Y,I),de=ce/100*O,me=se/100*B;return`${q===0?"M ":q===1?"C ":""} ${de},${me}`}).join(" "),N=p[I%p.length];return o(Lo,{d:H,index:I,topic:N})})),null),o(()=>{const U=F.map((N,Y)=>N.map((ce,se)=>{if(Y>0&&se===0)return"";const{cx:de,cy:me}=P(ce,I),ye=de/100*O,L=me/100*B;return`${se===0?"M ":se===1?"C ":""} ${ye},${L}`}).join(" ")).join(" "),H=p?.[I%p.length];return o(Lo,{d:U,fill:!0,index:I,topic:H})},null))}))},jo=({className:e="",hash:t,height:n,identifier:r=_e,renderType:s,StylesProvider:a=ue,styleRenderer:c=le,topics:d=[],width:p})=>{const u=gt(t),y=ht(t,u),{xPadding:h,xScale:S,yPadding:v,yScale:f}=Ct,k=s==="meta",x=k?0:h,R=k?0:v,B=x/2,O=R/2,P={xScale:S,xShift:B,yScale:f,yShift:O},A=ct(y,({x:L},{x:te})=>L===te?0:L>te?1:-1).map(L=>ft(L,P)),_=A.map((L,te)=>te),I=A.map(L=>u[A.indexOf(L)]),X=(ge+x)*S,J=r(),Z=bt({points:A,xMax:X,xScale:S,yScale:f}),F=yt({segments:Z,xMax:X,xScale:S,yScale:f}),Q=k?{"& path":{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,ee=k?"0 !important":"0 0 1rem !important",U=Re,H="100%",N=L=>typeof L=="number"?`${L}px`:L,Y=(L,te)=>typeof L=="number"?L*te:L,q=k?Y(n??U,.95):Re,ce=k?Y(p??H,.95):"100%",se=k&&n!=null?Y(n,.95):n,de=k&&p!=null?Y(p,.95):p,me=c.renderRule(()=>({gridColumn:"1 / -1",height:N(q),padding:ee,width:N(ce),nested:{...Q}}),Object.keys),ye=k?e:`${e} ${me}`;return o(a,null,o(Sa,{className:ye,height:se,hexPoints:I,points:A,scaleOptions:P,segments:F,sortIndexes:_,sortToggleClass:J,topics:d,width:de}))},va=l($,{nested:{[i.print]:{paddingInline:"0.125rem"}}}),Do=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),$o=l(Do,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),Ea=l($o,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",paddingTop:oe("0.5rem","3vw","2rem"),nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),ka=l(De,{padding:0}),wa=l(Do,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),Ca=l("a",{...i.resume.contactList.link,fontSize:"0.88889em",minWidth:"auto",textDecoration:"none",nested:{"&, &:hover":{fontWeight:500}}}),Ta=l("span",{nested:{[i.print]:{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),At=({children:e,printLabel:t,...n})=>o(Ca,{...n},o(Ta,{"data-print-label":t},o("span",null,e))),Ra=l($,{...i.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...i.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"}}}),Bo="@media (min-width: 44.625rem)",Aa=l("h2",{fontSize:"1em",marginBottom:0,paddingLeft:0,textIndent:0,nested:{[Bo]:{justifySelf:"end"}}}),xa=l("div",{alignItems:"baseline",display:"grid",gap:"1rem 0",gridTemplateColumns:"auto",gridTemplateRows:"auto",fontSize:"0.88889em",nested:{[Bo]:{gridTemplateColumns:"auto 1fr"}}}),Pa=l("ul",{display:"block",margin:0,padding:"0 0 0 1rem"}),Oa=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0.125rem 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Ia=l("svg",{display:"inline-block",margin:"0 0.325rem 0 0",verticalAlign:"middle",nested:{[i.print]:{height:"0.325rem",width:"0.325rem"}}}),Ma=l("circle",{fill:"currentcolor"}),Je=e=>o(Ia,{xmlns:"http://www.w3.org/2000/svg",className:e.className,width:"8",height:"8",viewBox:"0 0 8 8"},o(Ma,{cx:"4",cy:"4",r:"4"}),o("title",null,"Skill level: ",e.level)),La={[b.BASIC]:l(Je,{...i.resume.skillLevel[b.BASIC]}),[b.INTERMEDIATE]:l(Je,{...i.resume.skillLevel[b.INTERMEDIATE]}),[b.ADVANCED]:l(Je,{...i.resume.skillLevel[b.ADVANCED]}),[b.EXPERT]:l(Je,{...i.resume.skillLevel[b.EXPERT]})},ja=l("div",{display:"contents"}),Da=({name:e,skills:t})=>o(ja,{itemscope:!0,itemtype:"http://schema.org/ItemList"},o(Aa,{itemprop:"name"},io(e)),o(Pa,null,t.map(({level:n,name:r})=>{const s=La[n];return o(Oa,{key:r,itemprop:"itemListElement"},o(s,{level:n}),io`${r}`)}))),$a=l($,{padding:"1rem 0"}),Ba=l("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),Na=l("h2",{marginBottom:"0.5rem"}),Ha=l("div",{fontSize:"0.88889rem",fontWeight:i.deemphasize.fontWeight}),_a=l("ul",{fontSize:"0.88889em",paddingInlineStart:0}),Fa=l("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),Ua=l($a,{padding:"1.5rem 0",position:"relative",nested:{"&:last-child:after":{display:"none"},"&:nth-of-type(odd)":{...i.resume.employment.itemOdd},"&:nth-of-type(even)":{...i.resume.employment.itemEven},"& strong":{fontWeight:500,nested:{[i.darkMode]:{fontWeight:400}}}}}),Ya=l($o,{alignItems:"baseline",justifyContent:"space-between",gap:"0.5rem",nested:{"& > *":{minWidth:"auto"}}}),za=({employer:e,end:t,highlights:n,position:r,start:s,summary:a,...c})=>o(Ua,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...c},o(Ya,null,o("h3",{itemprop:"name"},e),o(Po,{range:[s,t]})),o(Ha,{itemprop:"roleName"},r),a==null?null:o(Ba,{itemprop:"description"},ke(a)),n==null?null:o(_a,{itemtype:"http://schema.org/ItemList"},n.map(d=>o(Fa,{key:d,itemprop:"itemListElement"},ke(d))))),Ga=l(De,{...i.resume.employment.container,marginTop:"1rem"}),Xa=({employment:e})=>o(Ga,null,o(Na,null,"Recent Experience"),e.history.map(t=>o(za,{...t}))),Wa=l($,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),Va=l(Ae,{...i.visiblyHidden}),No=e=>e.replace(/^https?:\/\/|\/$/g,""),Ka=({className:e,id:t,meta:n,resume:r,updated:s})=>{const{contact:{email:a,website:c},employment:d,info:p,name:u,projects:y,skills:h,social:S}=r;return o(Wa,{className:e,id:t,itemscope:!0,itemtype:"http://schema.org/Person"},o(va,null,o(jo,{...n,renderType:"post"})),o(ka,null,o(Ea,null,o("h1",{itemprop:"name"},u),o(Va,{date:s,itemprop:"datePublished",mode:ie.META}),o(wa,null,o(At,{href:`mailto:${a}`,itemprop:"email",printLabel:a},"Email"),o(At,{href:c,itemprop:"url",printLabel:No(c),rel:"me"},"Website"),S.map(({network:v,url:f})=>o(At,{href:f,itemprop:"url",printLabel:No(f),rel:"me"},v)))),o(Ra,{itemprop:"description"},ke(p.brief))),o(De,{"aria-label":"Skillsets"},o(xa,null,Object.entries(h.merged).map(([v,f])=>o(Da,{key:v,name:v,skills:f})))),o(Xa,{employment:d}),o(De,null,o(ma,{projects:y})),o(De,null,o("h2",null,"References"),ke("Available upon request.")))},wl=l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),Cl=l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Tl=l("a",{...i.resume.contactList.link,textDecoration:"none"});export{Re as BLOG_ART_HEIGHT,Tt as BlogArt,Vi as BlogArtDefs,Es as BlogListing,To as BlogMetadataType,Js as BlogPost,ge as COORDINATE_MAX,so as COORDINATE_MIN,$ as FullBleedContainer,Zt as FullBleedScrollableOverflow,to as FullBleedSymbolBlock,So as Head,Ie as InvalidHashError,pt as MIN_SMOOTHING,Co as Main,fe as PageMetadataType,Ka as Resume,jo as ResumeArt,ut as SMOOTHING_RATIO,ue as StylesProvider,M as Topic,bo as TopicTag,tt as __SNOWPACK_ENV__,Ct as blogArtDefaultParameters,oe as clamp,St as cubicBezierPoints,Qs as getBlogPostStaticProps,bt as getNaiveSegments,yt as getNonPhallicSegments,uo as getPageMetadata,Ri as hexChars,_e as identifier,ke as mdx,le as renderer,En as resetAbbrContext,lr as resume,ft as scalePoint,ct as sortBy,l as styled,i as theme,re as toFixed,gt as toHexPointSequence,ht as toPointSequence,co as yBounds};
