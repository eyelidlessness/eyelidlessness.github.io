import Qe from"unist-util-visit";import{h as t,Fragment as _,toChildArray as xt}from"https://cdn.skypack.dev/preact@10.5.10";import $o from"@mdx-js/mdx";import{mdx as Be,MDXProvider as No}from"@mdx-js/preact";import{isobject as Ho,createComponent as _o,RendererProvider as Fo,Readonly as Uo,Object$1 as Yo,Optional as g,Unknown as zo,Literal as Go,String as m,Partial as se,Union as Pt,Boolean as Ot,Array$1 as j,Integer as Xo,Number$1 as Wo,emojiRegex as Vo,h as It,rehypeAccessibleEmojis as Ko,remarkSlug as qo,remarkSmartypants_1 as Jo}from"./_vendor/index.js";import{transform as Qo}from"buble-jsx-only";import Zo from"dedent";import Mt from"module";import en from"remark-mdx";import tn from"remark-mdx-to-plain-text";import pe from"path";import{loadTheme as Lt,getHighlighter as jt}from"shiki";import{BUNDLED_LANGUAGES as on}from"shiki-languages";import{renderers as nn}from"shiki-twoslash";import Ze from"fs";import rn from"node-object-hash";import"fela-tools";import"sharp";import sn from"child_process";import an from"crypto";import{Head as Dt,seo as $e}from"microsite/head";import{createRenderer as ln}from"fela";import{processStyleWithPlugins as cn,KEYFRAME_TYPE as Bt,isNestedSelector as dn,normalizeNestedProperty as mn,isMediaQuery as pn,generateCombinedMediaQuery as $t,isSupport as un,generateDeclarationReference as gn,isUndefinedValue as hn,generateCSSSelector as fn,RULE_TYPE as bn}from"fela-utils";import{cssifyDeclaration as yn,cssifyObject as Sn}from"css-in-js-utils";import Nt from"md5";let et=new Set;const vn=()=>{et=new Set},En=()=>e=>{Qe(e,"abbr",o=>{const{abbr:n}=o;et.has(n)&&(delete o.abbr,delete o.children,delete o.data,delete o.reference,Object.assign(o,{type:"text",value:n})),et.add(n)}),Qe(e,"text",o=>{o.value.includes("\u200B")&&Object.assign(o,{value:o.value.replace(/\u200b/gu,"")})})},Ht="production",kn="production",Tn=!0;var tt=Object.freeze({__proto__:null,MODE:Ht,NODE_ENV:kn,SSR:Tn});const Cn=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),w=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((n,[i,s])=>typeof s=="object"&&(i==="nested"||i.includes("&"))?n:`${n}${Cn(i)}:${s};`,""),"}",Object.entries(o).map(([n,i])=>{if(typeof i=="object"){if(n==="nested")return Object.entries(i).map(([s,a])=>{const c=e.map(d=>s.replace(/&/g,d));return w(c,a)}).join("");if(n.includes("&")){const s=e.map(a=>n.replace(/&/g,a));return w(s,i)}}return""},[]).join("")].join(""),ae=(...e)=>`clamp(${e.join(",")})`,Se=e=>e.replace(/\s+/g," ").trim(),Ne=e=>e;function Pe(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function wn(e,o,n,i,s,a){const c=[];return s&&c.push(Pe(s).slice(0,16)),i&&c.push(Pe(i).slice(0,16)),n&&c.push(Pe(n).slice(0,16)),c.push(Pe(e).slice(0,16)),c.push(Pe(o).slice(0,16)),c.push(a.slice(0,8)),c.join("_")}function Rn(e,o,n=[""]){let i="";for(const a in e){const c=e[a];i=`${i}${a}{${Sn(c)}}`}let s="";for(let a=0;a<n.length;a++){const c=n[a];s=`${s}@${c}keyframes ${o}{${i}}`}return s}function An(){return e=>(e.renderKeyframe=(o,n)=>{const i=o(n,e),s=cn(e,i,Bt,n),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const c=Nt(a),d=(e.selectorPrefix||"_")+c.slice(0,8),p=Rn(s,d,e.keyframePrefixes),u={type:Bt,keyframe:p,name:d};e.cache[a]=u,e._emitChange(u)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...n},i="",s="",a="")=>{let c=o?` ${o}`:"";for(const d in n){const p=n[d];if(Ho(p))if(dn(d))c+=e._renderStyleToClassNames(p,i+mn(d),s,a);else if(pn(d)){const u=$t(s,d.slice(6).trim());c+=e._renderStyleToClassNames(p,i,u,a)}else if(un(d)){const u=$t(a,d.slice(9).trim());c+=e._renderStyleToClassNames(p,i,s,u)}else console.warn(`The object key "${d}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const u=gn(d,p,i,s,a);if(!e.cache.hasOwnProperty(u)){if(hn(p)){e.cache[u]={className:""};continue}const h=yn(d,p),S=Nt(u),v=e.devMode?wn(d,p,i,s,a,S):(e.selectorPrefix||"_")+S.slice(0,8),b=fn(v,i),k={type:bn,className:v,selector:b,declaration:h,pseudo:i,media:s,support:a};e.cache[u]=k,e._emitChange(k)}const y=e.cache[u].className;y&&(c+=` ${y}`)}}return c},e)}import.meta.env=tt;const He=Mt.createRequire(import.meta.url),{default:xn}=He("fela-identifier"),{default:Pn}=He("fela-plugin-embedded"),{default:On}=He("fela-plugin-multiple-selectors"),{default:In}=He("fela-plugin-typescript"),Mn=Ht==="development",Ln=()=>{const e=xn(),o=ln({devMode:Mn,enhancers:[An(),e],plugins:[Pn(),On(),In()]});return{identifier:e,renderer:o}},{identifier:_e,renderer:le}=Ln(),jn=e=>Array.isArray(e)?e:[e],Dn=e=>({children:o})=>t(Fo,{renderer:e},...jn(o)),ue=Dn(le),Bn=e=>le.renderRule(Ne,e),Fe=Object.assign(Bn,{global:le.renderStatic.bind(le)}),l=(e,o)=>{const n=typeof o=="function"?o:()=>o;return _o(n,e,Object.keys)},D=(e,o)=>Uo(Yo(e,o)),W=()=>g(zo()),_t="FRESH@0.1.0",$n=D({format:Go(_t,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:g(m({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),Nn=se(D({label:m({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:m({description:"Profession type or 'character class'."}),image:m({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:m({description:"A short description or summary of yourself as a candidate."}),quote:m({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),Hn=se(D({willing:Pt([Ot(),m()],{description:"Willingness to relocate."}),destinations:j(m({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),_n=se(D({travel:Xo({description:"Percentage of time willing to travel (0 to 100)."}),authorization:m({description:"Work authorization: citizen, work visa, etc."}),commitment:j(m({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:Ot({description:"Open to remote employment opportunities."}),relocation:Hn},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),Fn=j(se(D({label:m({description:"A label for this contact information."}),category:m({description:"Type of contact information: email, phone, url, postal, or IM."}),value:m({description:"Phone number, email address, website, etc."})}))),Un=se(D({email:m({description:"Primary contact email.",format:"email"}),phone:m({description:"Primary phone number."}),website:m({description:"Website, blog, or home page.",format:"uri"}),other:Fn},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),Yn=se(D({address:m({description:"Your full postal address."}),code:m({description:"Postal or other official routing code."}),city:m({description:"Your home city."}),country:m({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:m({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),zn=j(D({employer:m({description:"Employer name."}),position:g(m({description:"Your position or formal job title."})),url:g(m({description:"Employer website.",format:"uri"})),start:g(m({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:g(m({description:"A summary of your achievements and responsibilities under this employer."})),highlights:g(j(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(j(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),Gn=se(D({summary:m({description:"Summary of overall employment."}),history:zn},{description:"The 'employment' section describes the candidate's formal employment history."})),Xn=j(D({category:m({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:g(m({type:"string",description:"Friendly media name."})),url:g(m({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),Wn=j(D({title:m({description:"Project name or code-name."}),category:g(m({description:"Project type: open-source, private, side project, etc."})),description:g(m({description:"Project description or summary."})),summary:g(m({description:"A summary of your achievements and responsibilities on the project."})),role:g(m({description:"Your role on the project: Contributor, Creator, etc."})),url:g(m({description:"Project URL.",format:"uri"})),media:g(Xn),repo:g(m({description:"Repo URL.",format:"uri"})),start:g(m({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:g(j(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:g(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(j(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),Vn=se(D({sets:j(D({name:m({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:g(m({description:"Level of mastery of the skill."})),skills:j(m({description:"Title or ID of a skill from the skills list."}))})),list:j(D({name:m({description:"The name or title of the skill."}),level:g(m({description:"A freeform description of your level of mastery with the skill."})),summary:g(m({description:"A short summary of your experience with this skill."})),years:g(Pt([m(),Wo()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),Kn=j(D({title:g(m({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:m({description:"College or school name."}),area:g(m({description:"e.g. Arts"})),studyType:g(m({description:"e.g. Bachelor"})),start:g(m({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:g(m({description:"Grade or GPA."})),curriculum:g(j(m({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:g(m({description:"Website or URL of the institution or school.",format:"uri"})),summary:g(m({description:"A short summary of this education experience."})),keywords:g(j(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:g(j(m({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(m({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),qn=D({summary:g(m({description:"Summary of overall education."})),level:m({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:g(m({description:"Your degree, if any (BSCS, BA, etc.)."})),history:g(Kn)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),Jn=j(D({network:m({description:"The name of the social network, such as Facebook or GitHub."}),user:m({description:"Your username or handle on the social network."}),url:m({description:"URL of your profile page on this network.",format:"uri"}),label:g(m({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."}),Cl=D({name:m({description:"The candidate's name as it should appear on the resume."}),meta:$n,info:g(Nn),disposition:g(_n),contact:g(Un),location:g(Yn),employment:g(Gn),projects:g(Wn),skills:g(Vn),education:g(qn),social:g(Jn),services:W(),recognition:W(),writing:W(),reading:W(),speaking:W(),governance:W(),languages:W(),samples:W(),references:W(),testimonials:W(),interests:W(),extracurricular:W(),affiliation:W()},{title:"FRESH Resume Schema"});var T;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(T||(T={}));var E;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator",e.DEVELOPER="Developer"})(E||(E={}));const Qn=Date.now(),Ue=e=>e==null?Qn:new Date(e).getTime(),Zn=e=>e.slice().sort((o,n)=>{const i=Ue(o.end),s=Ue(n.end);if(i>s)return-1;if(s>i)return 1;const a=Ue(o.start),c=Ue(n.start);return a>c?-1:c>a?1:0}),ei=e=>Zn(e),ti=ei([{title:"@getodk/xforms-engine",category:T.OPEN_SOURCE,description:`
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
      Long-term maintenance.
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
    `,repo:"https://github.com/benwbooth/quick-clojure",role:E.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),oi=e=>e,ni=e=>e,ii=ni([{employer:"ODK",position:"Senior Software Engineer",start:"2021-03",end:"2025-04",summary:`
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
      `]}]),ri=ii;var f;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(f||(f={}));var ve;(function(e){e.LANGUAGES_PLATFORMS="Languages",e.SERVICES_DISTRIBUTED_SYSTEMS="Services",e.USER_INTERFACE_EXPERIENCE="UI/UX",e.DOMAIN_SPECIFIC_LANGUAGES="DSL\u200Bs"})(ve||(ve={}));const ot={[ve.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:f.EXPERT},{name:"OpenAPI & documentation-driven APIs",level:f.EXPERT},{name:"Microservice architecture",level:f.ADVANCED},{name:"Fault tolerance",level:f.ADVANCED},{name:"Composable systems",level:f.ADVANCED}],[ve.USER_INTERFACE_EXPERIENCE]:[{name:"Component-based UI & JSX",level:f.EXPERT},{name:"DOM & Web APIs",level:f.EXPERT},{name:"Web performance",level:f.ADVANCED},{name:"Reactivity",level:f.ADVANCED},{name:"UI & UX design",level:f.ADVANCED},{name:"A11y",level:f.INTERMEDIATE}],[ve.DOMAIN_SPECIFIC_LANGUAGES]:[{name:"Domain modeling & extensibility",level:f.EXPERT},{name:"Interpreters & runtime",level:f.ADVANCED},{name:"Grammar-defined parsers",level:f.INTERMEDIATE},{name:"Domain-specialized tools",level:f.INTERMEDIATE},{name:"Runtime optimization",level:f.INTERMEDIATE}],[ve.LANGUAGES_PLATFORMS]:[{name:"TypeScript",level:f.EXPERT},{name:"Clojure",level:f.EXPERT},{name:"XPath",level:f.EXPERT},{name:"ODK XForms",level:f.EXPERT},{name:"CSS",level:f.EXPERT},{name:"HTML",level:f.EXPERT},{name:"SQL",level:f.ADVANCED},{name:"XSLT",level:f.ADVANCED},{name:"Python",level:f.INTERMEDIATE},{name:"Swift",level:f.BASIC},{name:"Java",level:f.BASIC}]},si={list:Object.values(ot).flatMap(Ne),merged:ot,sets:Object.entries(ot).map(([e,o])=>({name:e,skills:o.map(({name:n})=>n)}))},ai=oi({name:"Trevor Schmidt",meta:{format:_t,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:ri},info:{class:"Software Engineer",brief:`
Senior full-stack software engineer with 15+ years experience building & maintaining quality services, systems and solutions; tools and libraries to accelerate development; usable, performant and attractive applications.
    `.trim(),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:ti,skills:si,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),Ye=Symbol("DEFAULT_TOPIC"),M={[Ye]:Ye,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},li=e=>typeof e=="string"||typeof e=="symbol",Ft=e=>li(e)&&e in M,nt=e=>Ft(e)?M[e]:e,Ut=Object.entries(M).reduce((e,o)=>{const[n,i]=o;return typeof n=="string"?{...e,[i]:n}:e},{}),ci=e=>Ft(e)?e:Ut[e],di=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),mi=Object.fromEntries(Object.entries(Ut).map(([e,o])=>typeof o=="string"?[e,di(o)]:null).filter(e=>e!=null)),pi=e=>{const o=nt(e);if(typeof o=="string")return mi[o]},ze=2,it={minEm:1.0625,fluidVw:1.0625*ze,maxEm:1.25},C="@media (prefers-color-scheme: dark)",Ge="@media print",ui=["h1","h2","h3","h4","h5","h6"],gi=["dd","dl","dt","li","ol","ul"],hi=[...ui,...gi,"p"],Ee=it.minEm/it.maxEm,oe={h1:1.953,h2:1.563,h3:1.25},fi={h1:{minEm:oe.h1*Ee,fluidVw:oe.h1*Ee*ze,maxEm:oe.h1},h2:{minEm:oe.h2*Ee,fluidVw:oe.h2*Ee*ze,maxEm:oe.h2},h3:{minEm:oe.h3*Ee,fluidVw:oe.h3*Ee*ze,maxEm:oe.h3}},Yt=75,Xe=1.25,bi=["0.7fr",`${Xe}rem`,[`${Yt}ch`,`calc(100% - ${Xe*2}rem)`],`${Xe}rem`,"1.2fr"],rt=1,yi=["0.7fr",`${rt}rem`,[`${Yt*1.1875}ch`,`calc(100% - ${rt*2}rem)`],`${rt}rem`,"1.2fr"],Si=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],st=Si.join(", "),vi=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Ei=vi.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),G={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},ki="hover-inherit-topic-color",Ti={[M[Ye]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.DEFAULT_TOPIC.light},[C]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.DEFAULT_TOPIC.dark}}}}},[M.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.ABLEISM}}},[M.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.ARTS_CRAFTS}}},[M.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.LEMON}}},[M.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.MENTAL_ILLNESS}}},[M.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.NEURODIVERGENCE}}},[M.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.PHILOSOPHY}}},[M.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.POLITICS}}},[M.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.RACISM}}},[M.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.SEXISM}}},[M.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.SUBSTANCE_ABUSE}}},[M.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.TECHNOLOGY}}},[M.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:G.TRANSPHOBIA}}}},zt=_e(),r={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:ki,baseFontSizeRange:it,darkMode:C,print:Ge,abbreviation:{"--abbreviation-highlight":"hsl(64deg 100% 50% / 0.25)",backgroundImage:`linear-gradient(${["to top","var(--abbreviation-highlight)","var(--abbreviation-highlight) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[C]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[C]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:zt,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[C]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${zt}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[C]:{color:"hsl(212deg, 10%, 90%)"}}},[C]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[C]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[C]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:st},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:st,nested:{[C]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em",fontWeight:300},emphasize:{color:"#000"},firstLastMarginZeroElements:hi,gitHubLogo:{fill:"#171515",nested:{[C]:{fill:"#fff"}}},headingLineHeight:.9375,headingRanges:fi,[C]:{abbreviation:{"--abbreviation-highlight":"hsl(336deg 85% 25%)"},aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg 60% 4%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)",fontWeight:200},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(190deg 20% 97%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"oklch(0.71 0.16 355.75)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:bi,mainGridSidePaddingRem:Xe,monospaceFont:st,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[C]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{color:"hsl(210deg 12% 5% / 95%)",fontFamily:Ei},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[C]:{backgroundColor:"hsl(336deg, 100%, 7%)"},[Ge]:{backgroundColor:"transparent"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[C]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"#fffff1",nested:{[C]:{backgroundColor:"hsl(41deg, 100%, 8%)"},[Ge]:{backgroundColor:"transparent",padding:0}}},itemOdd:{backgroundColor:"transparent"},itemEven:{backgroundColor:"oklch(0.99 0.03 100.56)",nested:{[C]:{backgroundColor:"oklch(0.26 0.06 71.28)"},[Ge]:{backgroundColor:"transparent"}}}},skillLevel:{[f.BASIC]:{color:"hsl(207deg, 25%, 83%)",nested:{[C]:{color:"hsl(207deg, 15%, 43%)"}}},[f.INTERMEDIATE]:{color:"hsl(188deg, 53%, 74%)",nested:{[C]:{color:"hsl(188deg, 53%, 34%)"}}},[f.ADVANCED]:{color:"hsl(188deg, 70%, 59%)",nested:{[C]:{color:"hsl(188deg, 80%, 39%)"}}},[f.EXPERT]:{color:"hsl(152deg, 100%, 39%)",nested:{[C]:{color:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:yi,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[C]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[C]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:Ti,topicTagIdentifier:_e(),topicTagInner:{backgroundImage:Se(`linear-gradient(
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
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visiblyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[C]:{color:"hsl(194deg, 8%, 50%)"}}}}}},at=["b","em","h1","h2","h3","i","strong"],We=["h1","h2","h3","h4","h5","h6"],Ci=[...We,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],wi=Array.from(new Set([...We,...Ci,"div","fieldset","form","hgroup","hr","pre"])),Ri=Se(`
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
    font-size:        ${ae(`${r.baseFontSizeRange.minEm}em`,`${r.baseFontSizeRange.fluidVw}vw`,`${r.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${w(["html","body"],{...r.document})}

  ${w(["body"],{...r.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${We.join(",")} {
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
`),Ai=()=>{Fe.global(Se(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${wi.join(",")} {
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

      ${w(at,r.emphasize)}

      h1 {
        font-size: ${ae(`${r.headingRanges.h1.minEm}em`,`${r.headingRanges.h1.fluidVw}vw`,`${r.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${ae(`${r.headingRanges.h2.minEm}em`,`${r.headingRanges.h2.fluidVw}vw`,`${r.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${ae(`${r.headingRanges.h3.minEm}em`,`${r.headingRanges.h3.fluidVw}vw`,`${r.headingRanges.h3.maxEm}em`)};
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

      ${w(["hr:after"],{...r.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${w(["pre"],r.pre)}

      ${w(["code"],{...r.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

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

      ${w(["a"],{...r.links,fontWeight:"bolder"})}

      ${w(["abbr"],{...r.abbreviation,textDecoration:"none"})}

      ${w(["aside","small"],r.deemphasize)}

      ${w(["aside"],{...r.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem",nested:{"& a":{fontWeight:600}}})}

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

      ${r.darkMode} {
        ${w(["html","body"],{...r[r.darkMode].document})}

        ${w(["body"],{...r[r.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${w(at,r[r.darkMode].emphasize)}
        ${w(["abbr"],r[r.darkMode].abbreviation)}
        ${w(["pre"],r[r.darkMode].pre)}
        ${w(["code"],r[r.darkMode].code)}
        ${w(["a"],r[r.darkMode].links)}
        ${w(["aside","small"],r[r.darkMode].deemphasize)}
        ${w(["aside"],r[r.darkMode].aside)}
        ${w(["hr:after"],r[r.darkMode].separator)}
      }

      ${r.print} {
        @page {
          margin: 0.325in;
        }

        ${w(["a","a:hover","code"],{color:"inherit",fontWeight:"inherit",textDecorationColor:"currentcolor"})}

        ${w(["abbr"],{backgroundImage:"none"})}

        ${w(["code"],{backgroundColor:"transparent",borderRadius:0,display:"inline-flex",lineHeight:"inherit",padding:0})}
      }
    `))},xi=`
  ${r.mainGridColumns[0]}
  ${r.mainGridColumns[1]}
  min(
    ${r.mainGridColumns[2][0]},
    ${r.mainGridColumns[2][1]}
  )
  ${r.mainGridColumns[3]}
  ${r.mainGridColumns[4]}
`.replace(/\s+/g," "),Gt={gridColumn:"1 / -1"},Xt=Fe(Gt),B=l("div",{nested:{[`& > .${Xt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0},[r.print]:{gridTemplateColumns:"0 0 auto 0 0"}},display:"grid",gridTemplateColumns:xi,...Gt}),Pi=({children:e,shadow:o,...n})=>t(B,{...n},e),Wt=([e,o,n])=>`rgba(${[e,o,n,0].join(",")})`,Vt=["12rem 100%","auto"],Kt=Vt.join(", "),Oi=Vt.map(e=>e.replace("100%","100.1%")).join(", "),Ii=le.renderKeyframe(()=>({"0%":{backgroundSize:Kt},"100%":{backgroundSize:Oi}}),{}),qt="5px",Jt=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`rgba(${o.join(",")}) calc(11rem + ${qt})`,`${Wt(o)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${Wt(e)} ${qt}`].join(", ")})`].join(", ")}:null,Mi=e=>{if(e!=null){const{darkMask:o,darkScroll:n,lightMask:i,lightScroll:s}=e;return{dark:Jt(n,o),light:Jt(s,i)}}return{dark:null,light:null}},Qt=l(Pi,({shadow:e})=>{const{dark:o,light:n}=Mi(e),i=o==null?null:{[r.darkMode]:o};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:Kt,paddingRight:r.mainGridSidePaddingRem,overflowX:"auto",nested:{...i,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:Ii,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),Li=l(B,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Zt=l("div",{paddingLeft:"1rem"}),ji=l("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),Di=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),lt="div",Bi={ContentContainer:lt,InnerContainer:Zt,OuterContainer:lt,SymbolContainer:lt},eo=e=>{const{children:o,ContentContainer:n,InnerContainer:i,OuterContainer:s,outerContainerProps:a,symbol:c,SymbolContainer:d}={...Bi,...e};return t(Li,{as:s,...a},t(ji,{as:d,role:"presentation"},c),t(Zt,{as:i},t(Di,{as:n},o)))},$i=l("pre",{fontSize:"1rem"}),Ni=l(Qt,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[r.darkMode]:{}}}),Hi=e=>t(Ni,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),_i=l(B,{...r.pre,nested:{[r.darkMode]:{...r[r.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),Fi=l("div",{...r.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Ui=({children:e})=>t(eo,{ContentContainer:$i,InnerContainer:Hi,OuterContainer:_i,symbol:"{",SymbolContainer:Fi},e),Yi=e=>e.map((o,n)=>n),ct=(e,o)=>Yi(e).sort((n,i)=>{const s=o(e[n],e[i]);return s===0?n===i?0:n>i?1:-1:s}).map(n=>e[n]),zi=e=>typeof e=="object"&&e!=null,Gi=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),Xi=(e,o)=>zi(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&Vo().test(o),Wi=({["aria-label"]:e,children:o,role:n})=>t(Gi,{"aria-label":e,role:n},o),Vi={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},Ki={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",ODK:"Open Data Kit (https://getodk.org/)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},qi={...Vi,...Ki},to=pe.resolve(process.cwd(),"./syntax-themes"),[Ji,Qi]=await Promise.all([Lt(pe.resolve(to,"./yi-dark.json")),Lt(pe.resolve(to,"./yi-light.json"))]),Zi={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},er={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},tr=e=>e.trim().split(/\b\W*\b/).reduce((o,n)=>({...o,...er[n]}),{}),or=e=>Object.entries(e).reduce((o,[n,i])=>{const s=Zi[n];if(i==null||typeof s!="string")return o;const a=s==="fontStyle"?tr(i):{[s]:i};return{...o,...a}},{}),[nr,ir]=await Promise.all([jt({theme:Ji}),jt({theme:Qi})]),rr=new Set(on.map(e=>e.id)),sr=new Set(["ts","tsx","typescript"]),oo=e=>e.explanation?.reduce((o,n)=>({...o,...n.scopes.reduce((i,{themeMatches:s})=>({...i,...s.reduce((a,{settings:c})=>({...a,...or(c)}),i)}),o)}),{color:e.color}),ar=(e,o,n={})=>{const i=oo(e),s=oo(o),a=s==null?null:{nested:{[r.darkMode]:s}},{content:c}=e;if(i==null&&a==null)return t("span",n,c);const d={...i,...a},p=l("span",d);return t(p,n,c)},lr=Fe({paddingRight:"1rem"}),cr={className:lr},dr=(e,o)=>It(t(ue,{},t("pre",{},t("code",{},...e.reduce((n,i,s)=>{const a=i.map((d,p)=>{const u=o[s][p],y=p===i.length-1?cr:{};return ar(d,u,y)}),c=s===0?"":`
`;return[...n,c,...a]},[]))))),mr=e=>{const{lang:o,value:n,meta:i}=e,s=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,a=String(o)==="json5"?"json":o;let c;const d=n.replace(/^\n+|\n+$/g,"");if(!rr.has(a))c=nn.plainTextRenderer(d,{});else{const p=ir.codeToThemedTokens(d,a),u=nr.codeToThemedTokens(d,a);c=dr(p,u)}sr.has(a)&&!i?.includes("ignore"),e.children=[],e.type="html",e.value=c},pr=()=>o=>{Qe(o,"code",mr)};import.meta.env=tt;const Oe=Mt.createRequire(import.meta.url),ur=Oe("rehype-parse"),gr=Oe("rehype-remark"),hr=Oe("remark"),fr=Oe("remark-abbr"),br=Oe("remark-stringify"),yr=({className:e,children:o,...n})=>e==="language-id"?null:e==="code-container"?Be(_,n,...xt(o)):t("div",{className:e,...n},...xt(o)),Sr=({children:e,...o})=>Xi(o,e)?t(Wi,o,e):t("span",o,e),dt={components:{div:yr,pre:Ui,span:Sr},rehypePlugins:[Ko],remarkPlugins:[pr,fr,En,qo,Jo]},no=e=>{const{children:o=Be(()=>null,{}),components:n={},rehypePlugins:i=[],remarkPlugins:s=[]}=e,a={...dt.components,...n},c={mdx:Be,MDXProvider:No,components:a,props:{}},d=typeof o=="string"?Zo(o).trim():o,p=[...dt.rehypePlugins,...i],u=[...dt.remarkPlugins,...s],y=$o.sync(d,{rehypePlugins:p,remarkPlugins:u,skipExport:!0}).trim(),{code:h}=Qo(y,{objectAssign:"Object.assign"}),S=Object.keys(c),v=Object.values(c),b=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...S,`${h}

${b}`)(Be,...v)},vr=Object.entries(qi).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),Er=e=>[e,vr].join(`

`),mt=([e,...o],{includeAbbreviations:n=!0})=>{const i=typeof e=="string"?[e,...o].join(""):String.raw(e,...o);return n?Er(i):i},ke=(...e)=>{const o=mt(e,{includeAbbreviations:!0});return t(ue,{},t(no,{},o))},io=(...e)=>{const o=mt(e,{includeAbbreviations:!0});return t(ue,{},t(no,{components:{p:_}},o))},kr=(...e)=>{const o=mt(e,{includeAbbreviations:!1});return hr().use(ur).use(gr).use(br).use(en).use(tn).processSync(o).contents.toString().trim()},ne=(e,o)=>Number(e.toFixed(o)),ge=parseInt("ff",16),ro=parseInt("00",16),so=.05,pt=.15,ut=.05;class Ie extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const Tr=/^[0-9a-f]{40}$/i,Cr=e=>Tr.test(e),wr=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),Rr=e=>e.length===10,Ar=/([0-9a-f]{2})([0-9a-f]{2})/ig,gt=e=>{if(!Cr(e))throw new Ie(e);const n=Array.from(e.matchAll(Ar)??[]).map(([i,s,a])=>({x:s,y:a}));if(!Rr(n))throw new Ie(e);return n},xr=Symbol("IS_POINT"),Pr=e=>Object.assign(e,{[xr]:!0}),ao=e=>{const o=parseInt(e,16);if(o>ge||o<ro)throw new Error(`Not a valid coordinate: ${e}`);return Pr(o)},Or=({x:e,y:o})=>({x:ao(e),y:ao(o)}),Ir=e=>e.length===10,ht=(e,o)=>{try{const n=o.map(Or);if(!Ir(n))throw new Ie(e);return n}catch{throw new Ie(e)}},Mr=Symbol("SCALED_COORDINATE"),lo=e=>e.reduce(({max:o,min:n},{y:i})=>({max:Math.max(Number(o),Number(i)),min:Math.min(Number(n),Number(i))}),{max:-Infinity,min:Infinity}),K=(e,o)=>Object.assign(ne(e,2),{[Mr]:o}),Te=({x:e,xScale:o,y:n,yScale:i})=>({x:K(e,o),y:K(n,i)}),ft=({x:e,y:o},{xScale:n,xShift:i,yScale:s,yShift:a})=>Te({x:(e+i)*n,xScale:n,y:(o+a)*s,yScale:s}),bt=({points:e,xMax:o,xScale:n,yScale:i})=>[Te({x:0,xScale:n,y:0,yScale:i}),...e,Te({x:o,xScale:n,y:0,yScale:i})].reduce((s,a,c,d)=>{if(c===0||c===d.length-1)return s;const p=K(0,i),u=[{x:d[c-1].x,y:p},a,{x:d[c+1].x,y:p}];return[...s,u]},[]),yt=({segments:e,xMax:o,xScale:n,yScale:i})=>e.map(s=>{const[{x:a,y:c},{x:d,y:p},{x:u,y}]=s,h=u-a,S=p/h,b=6/S;if(b<1){const x=b*.2*a,R=a-x,$=u+x,O=R<0?Math.abs(R):$>o?o-$:0,P=R+O,V=$+O,A=b*.3,F=d+O,I=A*p,X=p-I;return[Te({x:P,xScale:n,y:c,yScale:i}),Te({x:F,xScale:n,y:X,yScale:i}),Te({x:V,xScale:n,y,yScale:i})]}return s}),Lr=({x:e,y:o},{x:n,y:i})=>{const s=n-e,a=i-o;return{angle:Math.atan2(a,s),length:Math.sqrt(s**2+a**2)}},co=({current:e,previous:o,next:n,reverse:i,smoothing:s,xScale:a,yScale:c})=>{const d=i?Math.PI:0,p=Lr(o,n),u=p.angle+d,y=p.length*s,{x:h,y:S}=e,v=h+Math.cos(u)*y,b=S+Math.sin(u)*y;return{x:K(v,a),y:K(b,c)}},St=({index:e,point:o,points:n,smoothing:i,xScale:s,yScale:a})=>{const c=n[e-1];if(c==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const d=n[e-2]??c,p=co({current:c,previous:d,next:o,reverse:!1,smoothing:i,xScale:s,yScale:a}),u=c,y=n[e+1]??o,h=co({current:o,previous:u,next:y,reverse:!0,smoothing:i,xScale:s,yScale:a});return[p,h,o]},mo=({segment:e,smoothing:o,xScale:n,yScale:i})=>e.reduce((s,a,c)=>{if(c===0)return s;const p=St({index:c,point:a,points:e,smoothing:o,xScale:n,yScale:i}).map(u=>`${u.x},${u.y}`).join(" ");return[...s,`C ${p}`]},[]),jr=({baseYCoordinate:e,isBaselineBelowMidpoint:o,segments:n,xScale:i,yMax:s,yScale:a,yTilt:c=!1})=>n.reduce((d,p,u,y)=>{const{length:h}=y,[S,v,b]=p,{x:k,y:x}=S,{x:R,y:$}=v,{x:O,y:P}=b,V=O-k,A=V===0?0:Math.max($/V*ut,pt),F=c?.1:0,I=1-F,X=1+F,J=u%2==0?I:X,Z=o?x+e:s-x+e,U={x:k,y:K(Z*J,a)},Q=u%2==0?I:X,ee=o?P+e:s-P+e,Y={x:K(O,i),y:K(ee*Q,a)},H=R-k,N=O-R,z=N>H?0:0-(R-k)*so,q=(h-u)*(a/100*s),ce={x:K(R+z,i),y:K($-q,a)},de=mo({segment:[U,ce,Y],smoothing:A,xScale:i,yScale:a}),me=N>H?(O-R)*so:0,ye={x:K(R+me,i),y:K(s-q,a)},te=mo({segment:[Y,ye,U],smoothing:A,xScale:i,yScale:a});return[...d,[`M ${U.x},${U.y}`,...de,...te,"Z"].join(" ")]},[]),Dr=({hash:e,xPadding:o=0,xScale:n=1,yOffset:i=.5,yPadding:s=0,yScale:a=1})=>{const c=gt(e),d=ht(e,c),p=ct(d,({x:P},{x:V})=>Number(P)===Number(V)?0:Number(P)>Number(V)?1:-1),u=o/2,y=s/2,h=p.map(P=>ft(P,{xScale:n,xShift:u,yScale:a,yShift:y})),S=(ge+o)*n,{max:v}=lo(h),b=(v+s)*a,k=bt({points:h,xMax:S,xScale:n,yScale:a}),x=yt({segments:k,xMax:S,xScale:n,yScale:a}),R=i>.5,$=R?b*i:-1*b*i;return{segmentPaths:jr({baseYCoordinate:$,segments:x,xScale:n,yMax:b,isBaselineBelowMidpoint:R,yScale:a}),xMax:S,yMax:b}};var vt;(function(e){e.PNG="png"})(vt||(vt={}));const Et=process.cwd(),Me=e=>e.startsWith("/")?pe.resolve(Et,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):pe.extname(e)==""?pe.resolve(Et,"./src/pages/",`${e}.tsx`):e;var Ce;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(Ce||(Ce={}));var he;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(he||(he={}));const Br="origin",$r="main",Le=e=>{const{branch:o=$r,decode:n,filter:i=Ce.FIRST,format:s,path:a=Et,remote:c=Br}=e,{error:d,stdout:p}=sn.spawnSync("git",["log",...i.split(" "),`--branches=${o}`,`--format=${s}`,`--remotes=${c}`,"--",a]);if(d)throw d;const u=p.toString().trim();return(u===""?[]:u.split(`
`)).map(n)},kt=e=>{const o=new Date(e);if(!isNaN(o.getTime()))return o},Nr=e=>{const o=Me(e),[n=null]=Le({decode:kt,filter:Ce.CURRENT,format:he.ISO_DATE,path:o});return n},Hr=e=>{const o=Me(e),[n=null]=Le({decode:kt,format:he.ISO_DATE,path:o});return n},_r=e=>{const o=Me(e),[n=null]=Le({decode:kt,filter:Ce.FIRST_MERGE,format:he.ISO_DATE,path:o});return n},Tt=e=>{const o=Ze.readFileSync(e).toString();let n=an.createHash("sha1");return n.update(o),n.digest("hex")},Fr=e=>{const o=Me(e),[n]=Le({decode:Ne,format:he.HASH,path:o});return n??Tt(o)},Ur=e=>{const o=Me(e),[n]=Le({decode:Ne,filter:Ce.FIRST_MERGE,format:he.HASH,path:o});return n??Tt(o)},Yr={height:630,width:1200},zr=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",Gr=rn({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Xr=(e,o,n=vt.PNG,i=Yr)=>{const s=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=Gr.hash(o),c=pe.resolve(s,`${a}.${n}`),d=c.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:c,imageType:n,publicPath:d,...i}}};var fe;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(fe||(fe={}));const po=(e,o,n,i,s=[M.TECHNOLOGY])=>{const a=i===fe.MUTABLE,c=i===fe.IMMUTABLE_MERGE,d=o.replace(/^file:(\/\/)?/,""),p=a?Tt(d):c?Ur(e):Fr(e),u={created:(c?_r(e):Hr(e))??Ze.statSync(d).ctime,updated:Nr(e)??Ze.statSync(d).mtime},h=Xr(o,a?{importURL:o,stat:u,topics:s}:{hash:p,importURL:o});return{hash:p,host:zr,path:e,social:h,stat:u,title:n,topics:s}},uo=()=>t(_,null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Wr=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t(uo,null))),Vr=1.6180334,Kr=4,go=ne(Vr*5,6),ho=.75,we=.15,qr=1.5,Re=ae("6rem",`${100/go}vw`,"10rem"),Jr=l(B,{height:Re,position:"relative",width:"100%"}),Qr=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Zr=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var je;(function(e){e.INLINE="inline",e.NONE="none"})(je||(je={}));const Ct={xPadding:Kr,xScale:go,yOffset:ho,yPadding:we,yScale:qr},wt=e=>{const{className:o,defsUsage:n=je.INLINE,hash:i,height:s,rawSVG:a=!1,styleRenderer:c=le,title:d,topics:p=[],width:u}=e,y=p.length<2?[...p,M[Ye]]:p,h=P=>`${P}-${i}`,{segmentPaths:S,xMax:v,yMax:b}=Dr({...Ct,hash:i}),k=b*ho,x=b*we/10.24,R=x*.75,O=t(Qr,{className:Xt,height:s,preserveAspectRatio:"none",viewBox:[0,0,v,b].join(" "),width:u},t("title",null,"Generated art for the page or post titled"," ",t("i",null,d),", with the content or commit hash ",i," ",y.length>0?[", and the topics: ",y.map(String).join(", ")]:null),t("defs",null,n===je.INLINE?t(uo,null):null,t("filter",{id:h("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:R,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:x,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:h("blurOverlayClip")},t("rect",{x:"0",width:v,y:k,height:b})),t("filter",{id:h("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:R}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:x})),t("filter",{id:h("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:R}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:x}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:x})),t("g",{id:h("blobs")},S.map((P,V)=>{const A=V%y.length,F=y[A],I=c.renderRule(()=>({...r.topicColors[F]}),Object.keys);return t(Zr,{key:P,className:I,d:P,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${b*we})`,`scale(1, ${1-we*2})`].join(" "),filter:`url(#${h("blur")})`},t("use",{href:`#${h("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${h("blurOverlayClip")})`,filter:`url(#${h("blurOverlay")})`,transform:[`translate(0, ${b*we})`,`scale(1, ${1-we*2})`].join(" ")},t("use",{href:`#${h("blobs")}`,mask:"url(#softVerticalFade)"})));return a?O:t(Jr,{className:o},O)},es=[,"January","February","March","April","May","June","July","August","September","October","November","December"],ts=l("time",{nested:{[r.darkMode]:{...r[r.darkMode].deemphasize}},...r.deemphasize});var ie;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(ie||(ie={}));const Ae=({date:e,mode:o=ie.DEFAULT,...n})=>{const i=e.getMonth()+1,s=e.getFullYear(),a=o===ie.SHORT?`${i}/${s}`:o===ie.META?"":[e.getDate(),es[i],s].join(" ");return t(ts,{...n,datetime:e.toISOString()},a)},os=l("a",{...r.topicTagLink(r.topicTagIdentifier.className)}),ns=l("span",r.topicTagIdentifier()),is=l(ns,{...r.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),rs=({className:e,link:o=!0,topic:n})=>{const i=pi(n),s=nt(n);if(i==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=o?os:"span",c=o?{href:`/blog/topics/${i}/`}:{};return t(a,{className:[e,r.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...c},t(is,null,s))},fo=l(rs,e=>({...r.topicTagOuter,...r.topicColors[nt(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),ss=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),as=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),bo=({className:e,link:o=!0,topics:n})=>t(ss,{className:e},n.map(i=>typeof i=="string"?t(as,{key:ci(i)},t(fo,{link:o,topic:i})):null)),ls=e=>e.reduce((o,n)=>{const i=n.stat.created.getFullYear(),s=o[i]??[];return{...o,[i]:[...s,n]}},{}),cs=l(B,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),ds=l(B,{...r.blog.listing.item,minHeight:Re,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),ms=l(B,{paddingTop:`calc(${Re} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),ps=l(B,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),us=l("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),gs=Fe({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),hs=l("h2",{...r.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),fs=l(Ae,{padding:"0 0.5rem 0.125rem 0"}),bs=l(bo,{gridColumn:"3 / 3"}),ys=l("div",{...r.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),Ss=l("a",{fontSize:"0.875em"});var Ve;(function(e){e.DATE="date"})(Ve||(Ve={}));var Ke;(function(e){e.ASC="asc",e.DESC="desc"})(Ke||(Ke={}));const vs=({order:e=Ke.DESC,posts:o,sort:n=Ve.DATE})=>{const i=o.slice().sort((a,c)=>e===Ke.DESC&&n===Ve.DATE?a.stat.created>c.stat.created?-1:1:0),s=ls(i);return t(_,null,Object.entries(s).map(([a,c])=>t(_,{key:a},t(cs,null,c.map(d=>{const{CustomArt:p=wt,description:u,hash:y,path:h,stat:{created:S},title:v,topics:b}=d;return t(ds,{key:h},t(ms,{as:"a",href:h},t(us,null,t(p,{defsUsage:je.NONE,hash:y,padded:!0,renderType:"listing",title:v,topics:b})),t(ps,null,t(hs,{className:gs},v),t(fs,{date:S}))),t(bs,{link:!1,topics:b}),t(ys,{className:r.blog.listing.descriptionIdentifier},u),t("p",null,t(Ss,{href:h},"Read more\u2026")))})))))},Es=()=>t(_,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));Ai();const yo=({children:e,meta:{description:o,host:n,redirect:i,social:{image:s},title:a},...c})=>i?t(Dt,{...c},t($e.title,null,"Redirecting to ",i),t("meta",{"http-equiv":"refresh",content:`0; URL=${i}`}),t("link",{rel:"canonical",href:i})):t(Dt,{...c},t($e.title,null,a," | Eyelidlessness"),o!=null?t($e.description,null,o):t(_,null),t("meta",{name:"theme-color",content:r.siteLogo.color}),t("style",{dangerouslySetInnerHTML:{__html:Ri}}),t("meta",{name:"twitter:card",content:"summary_large_image"}),t("meta",{name:"twitter:site",content:"@eyelidlessenss"}),t($e.image,{alt:a,height:s.height,src:`${n}${s.publicPath}`,width:s.width}),t(_,null,e),t(Es,null)),ks=({as:e="div",devilsBreakpoint:o,gap:n,...i})=>{const s=l(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return t(s,{...i})},Ts=l("svg",{...r.visiblyHidden,position:"absolute"}),be=512,So=[0,0,be,be].join(" "),Cs=be/2,ws=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),Rs=()=>t(Ts,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:So,width:"0"},t("defs",null,t("mask",{id:"octocat-knockout"},t("rect",{fill:"#fff",height:be,mask:"url(#octocat)",rx:Cs,width:be}),t("path",{d:ws,fill:"#000"})))),As=l("rect",{...r.gitHubLogo}),vo=({className:e})=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:So},t("title",null,"GitHub"),t(As,{height:be,mask:"url(#octocat-knockout)",width:be})),qe={height:60,width:338},xs=l("svg",{display:"inline-block",maxWidth:"100%",width:`${qe.width}px`}),Ps=l("use",{nested:{[r.darkMode]:{...r[r.darkMode].siteLogo}},...r.siteLogo,fill:"currentcolor"}),Os=`0 0 ${qe.width} ${qe.height}`,Is=()=>t(xs,{viewBox:Os},t(Ps,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),t("title",null,"Eyelidlessness")),{columns:xe}=r.siteHeader,Ms=`
  ${xe[0]}
  ${xe[1]}
  min(
    ${xe[2][0]},
    ${xe[2][1]}
  )
  ${xe[3]}
  ${xe[4]}
`.replace(/\s+/g," "),Ls=l("header",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Ms,padding:"clamp(0.5rem, 4vmin, 2rem) 0",position:"relative",zIndex:1,nested:{[r.print]:{nested:{'&[data-page-id="resume"]':{display:"none"}}}}}),js=l("div",{gridColumn:3}),Ds=l("div",{margin:"0 auto"}),Bs=l("a",{textDecoration:"none"}),$s=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),Eo=1,Ns=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${Eo/2}rem`,padding:0}),Hs=l("a",{...r.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[r.darkMode]:{...r[r.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),ko="1.5em",wl=l(vo,{display:"block",width:`clamp(1.125em, 4vw, ${ko})`}),_s=e=>{const o=e.meta.pageId==null?{}:{"data-page-id":e.meta.pageId},n=[{label:"Blog",location:"/"},{label:"Hire me",location:"/resume/#resume"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],i=n.reduce((c,d)=>typeof d.label=="string"?c+d.label.length:c,0),s={horizontal:"2rem"},a=`${[`${qe.width}px`,s.horizontal,`${i+2}ch`,ko,`${n.length*Eo}rem`].join(" + ")}`;return t(Ls,{...o},t(js,null,t(ks,{as:"nav",devilsBreakpoint:a,gap:s},t(Ds,null,t(Bs,{href:"/"},t(Is,null))),t($s,null,n.map(({location:c,label:d})=>t(Ns,null,t(Hs,{href:c},d)))))))},Fs=l(B,{paddingTop:0,paddingBottom:"4em",nested:{[r.print]:{nested:{'&[data-page-id="resume"]':{paddingTop:0,paddingBottom:0}}}}}),Us=e=>{if(e.pageId!=null)return{"data-page-id":e.pageId}},To=({meta:e,...o})=>t(ue,null,e.redirect==null?t(_,null,t(Rs,null),t(_s,{meta:e}),t(Fs,{as:"main",...Us(e),...o})):t(_,null)),Ys=l(B,{...r.description,nested:{...r.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),zs=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Gs=l("div",{fontSize:"0.889em"}),Xs=({as:e="section",title:o,...n})=>t(Ys,{as:e,itemprop:"description"},o?t(zs,null,o):null,t(Gs,{...n})),Ws=l(B,{paddingTop:"1rem"}),Vs=l("h1",{marginBottom:"0.25rem"}),Ks=l(B,{paddingBlock:"1rem"}),qs=e=>{const{children:o,CustomArt:n,description:i,descriptionRaw:s,hash:a,stat:{created:c},title:d,topics:p}=e;return t(_,null,t(yo,{meta:{...e,description:s}}),t(To,{as:"article",meta:e},t(Ks,null,n==null?t(wt,{hash:a,title:d,topics:p}):t(n,{hash:a,renderType:"post",StylesProvider:ue,title:d,topics:p}),t(Ws,null,t(Vs,null,d),t(Ae,{date:c,itemprop:"datePublished"}),t(bo,{link:!1,topics:p}))),t(Xs,null,i),o))},Co={IMMUTABLE:fe.IMMUTABLE,IMMUTABLE_MERGE:fe.IMMUTABLE_MERGE},Js=async e=>{const{description:o,importURL:n,path:i,redirect:s,title:a,topics:c,type:d=Co.IMMUTABLE_MERGE}=e,{CustomArt:p,hash:u,host:y,social:h,stat:S}=po(i,n,a,d,c),v=kr`${It(t(_,null,o))}`;return{CustomArt:p,description:o,descriptionRaw:v,hash:u,host:y,path:i,redirect:s,social:h,stat:S,title:a,topics:c}},wo="@media screen and (min-width: 41.666rem)",Qs=l("div",{display:"block",margin:0,padding:0,nested:{"& > *":{containerType:"inline-size",paddingTop:"1rem"},[wo]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}},[r.print]:{display:"none"}}}),Zs=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),ea=e=>{const o=Array();return e.role===E.CREATOR&&o.push(e.description),e.summary!=null&&o.push(e.summary),o.length===0&&o.push(e.description),t(Zs,null,o.map(n=>ke(n)))},ta=({date:e,...o})=>e==null?null:t(Ae,{...o,date:e}),oa=l("span",{nested:{[r.darkMode]:{...r[r.darkMode].deemphasize}},...r.deemphasize}),na=/^(\d{4})-(\d{2})$/,Ro=e=>{if(e==null)return null;const o=na.exec(e);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,i]=o;return new Date(`${n}-${i}-01T00:00:00`)},Ao=l("div",{fontSize:"0.88889em",whiteSpace:"nowrap",nested:{"& time":{fontSize:"inherit"}}}),xo=({className:e="",range:[o,n]})=>{const i=Ro(o),s=Ro(n);return o==n?t(Ao,{className:e},t(Ae,{date:i,itemprop:"endDate",mode:ie.SHORT})):t(Ao,null,t(Ae,{date:i,itemprop:"startDate",mode:ie.SHORT}),t(oa,null,"-"),t(ta,{date:s,itemprop:"endDate",mode:ie.SHORT}))},ia=l("div",{display:"grid",rowGap:"0.325rem",nested:{"& > *":{margin:0}}}),Rt="1.0625rem",ra=l("h3",{fontFamily:r.prose.fontFamily,fontWeight:500,fontSize:Rt,paddingLeft:0,textIndent:0,nested:{[r.print]:{fontSize:"1rem"}}}),sa=l("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),aa=l("a",{alignSelf:"baseline",display:"block",flexShrink:0,height:`calc(${Rt} * ${r.headingLineHeight})`,lineHeight:`calc(${Rt} * ${r.headingLineHeight*1.5})`,padding:"0 0.5rem",zIndex:1,nested:{"& svg":{width:"1em"},[wo]:{paddingLeft:0},[r.print]:{display:"none"}}}),la=l("div",{flexGrow:1,paddingTop:"0.05556rem"}),ca=l("div",{alignItems:"start",display:"flex",padding:"1rem 0 0"}),Po=({project:{description:e,end:o,repo:n,role:i,title:s,start:a,summary:c}})=>t(ca,null,t(aa,{href:n},t(vo,null)),t(la,null,t(ia,null,t(ra,null,t(sa,{href:n},s)),t(xo,{range:[a,o]})),t(ea,{role:i,description:e,summary:c??null}))),Oo=l("h2",{fontSize:ae(`${r.headingRanges.h3.minEm}em`,`${r.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Io=l("div",{marginTop:"0.5rem"}),da=l("div",{display:"none",nested:{[r.print]:{display:"block"}}}),ma=e=>{const{creator:o,contributor:n}=e.projects.reduce((s,a)=>{const c=a.role===E.CREATOR?"creator":"contributor";return{...s,[c]:[...s[c],a]}},{creator:[],contributor:[]}),i=o.length+n.length;return t(_,null,t(Qs,null,t("div",null,t(Oo,null,"Projects I Created"),t(Io,null,o.map(s=>t(Po,{project:s})))),t("div",null,t(Oo,null,"Open Source Contributions"),t(Io,null,n.map(s=>t(Po,{project:s}))))),t(da,null,t("h2",null,"Projects"),i," projects listed at "," ",t("a",{href:"https://eyelidlessness.github.io/resume/#projects"},"eyelidlessness.github.io/projects")))},pa=l(B,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),De=e=>t(pa,{as:"section",...e}),ua="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",ga=({fill:e,topic:o})=>{const n=r.topicColors[o];return{...n,...e?{fill:"currentcolor",fillOpacity:.05,mask:"url(#curvesVerticalFade)",strokeWidth:0,nested:{...n.nested,[r.darkMode]:{fillOpacity:.15}}}:{fill:"none",strokeWidth:1,stroke:"currentcolor"},transition:ua,vectorEffect:"non-scaling-stroke"}},ha=({fill:e,index:o,topic:n,...i})=>t("path",{...i}),Mo=l(ha,ga),fa=l("svg",{overflow:"visible",padding:"1rem"}),ba=20,ya={xMax:ge,xScale:1,xShift:0,yMax:ge,yScale:1,yShift:0},Sa=({className:e,hexPoints:o,points:n,pointSize:i=6,scaleOptions:s,segments:a,sortIndexes:c,sortToggleClass:d,topics:p,...u})=>{const{xScale:y,xShift:h,xRange:S=y*(ge+h*2),yMax:v,yShift:b,yScale:k,yRange:x=k*(v+b*2)}={...ya,...s},R=ba*2,$=u.height??x+R,O=u.width??S+R,P=({x:A,y:F},I)=>{const X=c[I],{x:J,y:Z}=n[X],U=ne((A+h)/S*100,4),Q=100-ne((F-b)/x*100,4),ee=ne((J+h)/S*100,4),Y=100-ne((Z-b)/x*100,4),H=0-ne(U-ee,4),N=0-ne(Q-Y,4);return{cx:U,cy:Q,sortedCx:ee,sortedCy:Y,sortedTranslateXPercent:H,sortedTranslateyPercent:N}},V=a.map(A=>{const[F,I,X]=A,{x:J}=F,{y:Z}=I,{x:U}=X,Q=U-J,ee=Q===0?0:Math.max(Z/Q*ut,pt);return{cubicPoints:A?.reduce((H,N,z)=>{if(z===0)return H;const q=St({index:z,point:N,points:A,smoothing:ee,xScale:y,yScale:k});return[...H,q]},[]),segment:A}});return t(fa,{className:e,height:$,width:O,preserveAspectRatio:"none",viewBox:`0 0 ${O} ${$}`},t("defs",null,t("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.15","stop-color":"white","stop-opacity":".95"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),t("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),V.map(({cubicPoints:A,segment:F},I)=>{const[X,J,Z]=F,U=A.map(([Y,H],N)=>[N===0?X:J,Y,H,N===0?J:Z]);return t(_,null,t(()=>t(_,null,U.map(Y=>{const H=Y.map((z,q)=>{const{cx:ce,cy:re}=P(z,I),de=ce/100*O,me=re/100*$;return`${q===0?"M ":q===1?"C ":""} ${de},${me}`}).join(" "),N=p[I%p.length];return t(Mo,{d:H,index:I,topic:N})})),null),t(()=>{const Y=U.map((N,z)=>N.map((ce,re)=>{if(z>0&&re===0)return"";const{cx:de,cy:me}=P(ce,I),ye=de/100*O,L=me/100*$;return`${re===0?"M ":re===1?"C ":""} ${ye},${L}`}).join(" ")).join(" "),H=p?.[I%p.length];return t(Mo,{d:Y,fill:!0,index:I,topic:H})},null))}))},Lo=({className:e="",hash:o,height:n,identifier:i=_e,renderType:s,StylesProvider:a=ue,styleRenderer:c=le,topics:d=[],width:p})=>{const u=gt(o),y=ht(o,u),{xPadding:h,xScale:S,yPadding:v,yScale:b}=Ct,k=s==="meta",x=k?0:h,R=k?0:v,$=x/2,O=R/2,P={xScale:S,xShift:$,yScale:b,yShift:O},A=ct(y,({x:L},{x:te})=>L===te?0:L>te?1:-1).map(L=>ft(L,P)),F=A.map((L,te)=>te),I=A.map(L=>u[A.indexOf(L)]),X=(ge+x)*S,J=i(),Z=bt({points:A,xMax:X,xScale:S,yScale:b}),U=yt({segments:Z,xMax:X,xScale:S,yScale:b}),Q=k?{"& path":{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,ee=k?"0 !important":"0 0 1rem !important",Y=Re,H="100%",N=L=>typeof L=="number"?`${L}px`:L,z=(L,te)=>typeof L=="number"?L*te:L,q=k?z(n??Y,.95):Re,ce=k?z(p??H,.95):"100%",re=k&&n!=null?z(n,.95):n,de=k&&p!=null?z(p,.95):p,me=c.renderRule(()=>({gridColumn:"1 / -1",height:N(q),padding:ee,width:N(ce),nested:{...Q}}),Object.keys),ye=k?e:`${e} ${me}`;return t(a,null,t(Sa,{className:ye,height:re,hexPoints:I,points:A,scaleOptions:P,segments:U,sortIndexes:F,sortToggleClass:J,topics:d,width:de}))},va=l(B,{nested:{[r.print]:{display:"none",paddingInline:"0.125rem"}}}),jo=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),Ea=l(jo,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),ka=l(Ea,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",paddingTop:ae("0.5rem","3vw","2rem"),nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"},[r.print]:{paddingTop:0}}}),Ta=l(De,{padding:0}),Ca=l(jo,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),wa=l("a",{...r.resume.contactList.link,fontSize:"0.88889em",minWidth:"auto",textDecoration:"none",nested:{"&, &:hover":{fontWeight:500}}}),Ra=l("span",{nested:{[r.print]:{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),At=({children:e,printLabel:o,...n})=>t(wa,{...n},t(Ra,{"data-print-label":o},t("span",null,e))),Aa=l(B,{...r.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...r.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"},[r.print]:{...r.resume.brief.nested[r.print],padding:0}}}),Do="@media (min-width: 44.625rem)",xa=l("h2",{fontSize:"1em",marginBottom:0,paddingLeft:0,textIndent:0,nested:{[Do]:{justifySelf:"end"}}}),Pa=l("div",{alignItems:"baseline",display:"grid",gap:"0.5rem 0",gridTemplateColumns:"auto",gridTemplateRows:"auto",fontSize:"0.88889em",nested:{[Do]:{gridTemplateColumns:"auto 1fr"}}}),Oa=l("ul",{display:"block",margin:0,padding:"0 0 0 1rem"}),Ia=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Ma=l("svg",{display:"inline-block",margin:"0 0.325rem 0 0",verticalAlign:"middle",nested:{[r.print]:{height:"0.325rem",width:"0.325rem"}}}),La=l("circle",{fill:"currentcolor"}),Je=e=>t(Ma,{xmlns:"http://www.w3.org/2000/svg",className:e.className,width:"8",height:"8",viewBox:"0 0 8 8"},t(La,{cx:"4",cy:"4",r:"4"}),t("title",null,"Skill level: ",e.level)),ja={[f.BASIC]:l(Je,{...r.resume.skillLevel[f.BASIC]}),[f.INTERMEDIATE]:l(Je,{...r.resume.skillLevel[f.INTERMEDIATE]}),[f.ADVANCED]:l(Je,{...r.resume.skillLevel[f.ADVANCED]}),[f.EXPERT]:l(Je,{...r.resume.skillLevel[f.EXPERT]})},Da=l("div",{display:"contents"}),Ba=({name:e,skills:o})=>t(Da,{itemscope:!0,itemtype:"http://schema.org/ItemList"},t(xa,{itemprop:"name"},io(e)),t(Oa,null,o.map(({level:n,name:i})=>{const s=ja[n];return t(Ia,{key:i,itemprop:"itemListElement"},t(s,{level:n}),io`${i}`)}))),$a=l(B,{padding:"1rem 0"}),Na=l("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),Ha=l("h2",{marginBottom:0}),_a=l("ul",{fontSize:"0.88889em",paddingInlineStart:0}),Fa=l("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),Ua=l($a,{padding:"1.5rem 0",position:"relative",nested:{"&:last-child:after":{display:"none"},"&:nth-of-type(odd)":{...r.resume.employment.itemOdd},"&:nth-of-type(even)":{...r.resume.employment.itemEven},"& strong":{fontWeight:500,nested:{[r.darkMode]:{fontWeight:400}}},[r.print]:{breakInside:"avoid",paddingBottom:0}}}),Ya=l("div",{alignItems:"baseline",display:"grid",columnGap:"0.5rem",gridTemplate:`
    "employer time-range"
    "position position"
  `,justifyContent:"space-between",nested:{[r.print]:{gridTemplate:`
        "employer position time-range"
      `,gridAutoColumns:"1fr auto auto"}}}),za=l("h3",{gridArea:"employer",marginBottom:0,whiteSpace:"nowrap"}),Ga=l(xo,{gridArea:"time-range"}),Xa=l("div",{fontSize:"0.88889rem",fontWeight:r.deemphasize.fontWeight,gridArea:"position",nested:{[r.print]:{nested:{"&:after":{content:'","'}}}}}),Wa=({employer:e,end:o,highlights:n,position:i,start:s,summary:a,...c})=>t(Ua,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...c},t(Ya,null,t(za,{itemprop:"name"},e),t(Xa,{itemprop:"roleName"},i),t(Ga,{range:[s,o]})),a==null?null:t(Na,{itemprop:"description"},ke(a)),n==null?null:t(_a,{itemtype:"http://schema.org/ItemList"},n.map(d=>t(Fa,{key:d,itemprop:"itemListElement"},ke(d))))),Va=l(De,{...r.resume.employment.container,marginTop:"1rem"}),Ka=({employment:e})=>t(Va,null,t(Ha,null,"Recent Experience"),e.history.map(o=>t(Wa,{...o}))),qa=l(B,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),Ja=l(Ae,{...r.visiblyHidden}),Bo=e=>e.replace(/^https?:\/\/|\/$/g,""),Qa=({className:e,id:o,meta:n,resume:i,updated:s})=>{const{contact:{email:a,website:c},employment:d,info:p,name:u,projects:y,skills:h,social:S}=i;return t(qa,{className:e,id:o,itemscope:!0,itemtype:"http://schema.org/Person"},t(va,null,t(Lo,{...n,renderType:"post"})),t(Ta,null,t(ka,null,t("h1",{itemprop:"name"},u),t(Ja,{date:s,itemprop:"datePublished",mode:ie.META}),t(Ca,null,t(At,{href:`mailto:${a}`,itemprop:"email",printLabel:a},"Email"),t(At,{href:c,itemprop:"url",printLabel:Bo(c),rel:"me"},"Website"),S.map(({network:v,url:b})=>t(At,{href:b,itemprop:"url",printLabel:Bo(b),rel:"me"},v)))),t(Aa,{itemprop:"description"},ke(p.brief))),t(De,{"aria-label":"Skillsets"},t(Pa,null,Object.entries(h.merged).map(([v,b])=>t(Ba,{key:v,name:v,skills:b})))),t(Ka,{employment:d}),t(De,{id:"projects"},t(ma,{projects:y})),t(De,null,t("h2",null,"References"),ke("Available upon request, email <gnosis@gmail.com>")))},Rl=l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),Al=l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),xl=l("a",{...r.resume.contactList.link,textDecoration:"none"});export{Re as BLOG_ART_HEIGHT,wt as BlogArt,Wr as BlogArtDefs,vs as BlogListing,Co as BlogMetadataType,qs as BlogPost,ge as COORDINATE_MAX,ro as COORDINATE_MIN,B as FullBleedContainer,Qt as FullBleedScrollableOverflow,eo as FullBleedSymbolBlock,yo as Head,Ie as InvalidHashError,pt as MIN_SMOOTHING,To as Main,fe as PageMetadataType,Qa as Resume,Lo as ResumeArt,ut as SMOOTHING_RATIO,ue as StylesProvider,M as Topic,fo as TopicTag,tt as __SNOWPACK_ENV__,Ct as blogArtDefaultParameters,ae as clamp,St as cubicBezierPoints,Js as getBlogPostStaticProps,bt as getNaiveSegments,yt as getNonPhallicSegments,po as getPageMetadata,wr as hexChars,_e as identifier,ke as mdx,le as renderer,vn as resetAbbrContext,ai as resume,ft as scalePoint,ct as sortBy,l as styled,r as theme,ne as toFixed,gt as toHexPointSequence,ht as toPointSequence,lo as yBounds};
