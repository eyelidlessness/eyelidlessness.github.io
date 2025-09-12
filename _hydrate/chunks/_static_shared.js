import"fela-tools";import{h as t,toChildArray as ze,Fragment as D}from"https://cdn.skypack.dev/preact@10.27.1";import"sharp";import{visit as Ge}from"unist-util-visit";import{isobject as Uo,identifier as Yo,embedded as zo,multipleSelectors as Go,__pika_web_default_export_for_treeshaking__ as Wo,createComponent as Xo,RendererProvider as Vo,Readonly as Ko,Object$1 as qo,Optional as g,Unknown as Jo,Literal as Qo,String as d,Partial as oe,Union as We,Boolean as At,Array$1 as M,Integer as Zo,Number$1 as en,__pika_web_default_export_for_treeshaking__$1 as tn,B as Xe}from"./_vendor/index.js";import{Head as Pt,seo as Pe}from"microsite/head";import*as Ot from"@mdx-js/mdx";import on from"@richardtowers/remark-abbr";import nn from"dedent";import{rehypeAccessibleEmojis as rn}from"rehype-accessible-emojis";import sn from"rehype-parse";import an from"rehype-raw";import ln from"rehype-remark";import cn from"rehype-slug";import{remark as dn}from"remark";import mn from"remark-mdx";import pn from"remark-mdx-to-plain-text";import un from"remark-smartypants";import gn from"remark-stringify";import Oe,{resolve as Mt,extname as hn}from"node:path";import It,{cwd as fn}from"node:process";import{loadTheme as Lt,getHighlighter as jt}from"shiki";import{BUNDLED_LANGUAGES as yn}from"shiki-languages";import{renderers as bn}from"shiki-twoslash";import{hasher as Sn}from"node-object-hash";import Ve from"node:fs";import vn from"node:child_process";import En from"node:crypto";import{createRenderer as kn}from"fela";import{cssifyDeclaration as wn,cssifyObject as Tn}from"css-in-js-utils";import{processStyleWithPlugins as Cn,KEYFRAME_TYPE as Bt,isNestedSelector as Rn,normalizeNestedProperty as xn,isMediaQuery as An,generateCombinedMediaQuery as $t,isSupport as Pn,generateDeclarationReference as On,isUndefinedValue as Mn,generateCSSSelector as In,RULE_TYPE as Ln}from"fela-utils";import Dt from"md5";const jn=e=>e.type==="abbr",Bn=e=>e.type==="text";let Ke=new Set;const $n=()=>{Ke=new Set},Dn=()=>e=>{Ge(e,jn,o=>{const{identifier:n}=o;if(Ke.has(n)){for(const i in o)delete o[i];Object.assign(o,{type:"text",value:n})}Ke.add(n)}),Ge(e,Bn,o=>{o.value.includes("\u200B")&&Object.assign(o,{value:o.value.replace(/\u200b/gu,"")})})},Nt="production",Nn="production",Hn=!0;var Ht=Object.freeze({__proto__:null,MODE:Nt,NODE_ENV:Nn,SSR:Hn});const Me=e=>e,_n=e=>typeof e=="object"&&e!=null;function ke(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function Fn(e,o,n,i,s,a){const c=[];return s&&c.push(ke(s).slice(0,16)),i&&c.push(ke(i).slice(0,16)),n&&c.push(ke(n).slice(0,16)),c.push(ke(e).slice(0,16)),c.push(ke(o).slice(0,16)),c.push(a.slice(0,8)),c.join("_")}function Un(e,o,n=[""]){let i="";for(const a in e){const c=e[a];i=`${i}${a}{${Tn(c)}}`}let s="";for(let a=0;a<n.length;a++){const c=n[a];s=`${s}@${c}keyframes ${o}{${i}}`}return s}function Yn(){return e=>(e.renderKeyframe=(o,n)=>{const i=o(n,e),s=Cn(e,i,Bt,n),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const c=Dt(a),m=(e.selectorPrefix||"_")+c.slice(0,8),p=Un(s,m,e.keyframePrefixes),u={type:Bt,keyframe:p,name:m};e.cache[a]=u,e._emitChange(u)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...n},i="",s="",a="")=>{let c=o?` ${o}`:"";for(const m in n){const p=n[m];if(Uo(p))if(Rn(m))c+=e._renderStyleToClassNames(p,i+xn(m),s,a);else if(An(m)){const u=$t(s,m.slice(6).trim());c+=e._renderStyleToClassNames(p,i,u,a)}else if(Pn(m)){const u=$t(a,m.slice(9).trim());c+=e._renderStyleToClassNames(p,i,s,u)}else console.warn(`The object key "${m}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const u=On(m,p,i,s,a);if(!e.cache.hasOwnProperty(u)){if(Mn(p)){e.cache[u]={className:""};continue}const y=wn(m,p),k=Dt(u),S=e.devMode?Fn(m,p,i,s,a,k):(e.selectorPrefix||"_")+k.slice(0,8),f=In(S,i),x={type:Ln,className:S,selector:f,declaration:y,pseudo:i,media:s,support:a};e.cache[u]=x,e._emitChange(x)}const h=e.cache[u].className;h&&(c+=` ${h}`)}}return c},e)}import.meta.env=Ht;const zn=Nt==="development",Gn=()=>{const e=Yo(),o=kn({devMode:zn,enhancers:[Yn(),e],plugins:[zo(),Go(),Wo()]});return{identifier:e,renderer:o}},{identifier:qe,renderer:ne}=Gn(),Wn=e=>({children:o})=>t(Vo,{renderer:e},...ze(o)),le=Wn(ne),Xn=e=>ne.renderRule(Me,e),Ie=Object.assign(Xn,{global:ne.renderStatic.bind(ne)}),l=(e,o)=>{const n=typeof o=="function"?o:()=>o;return Xo(n,e,Object.keys)},Vn=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),w=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((n,[i,s])=>typeof s=="object"&&(i==="nested"||i.includes("&"))?n:`${n}${Vn(i)}:${String(s)};`,""),"}",Object.entries(o).map(([n,i])=>{if(_n(i)){if(n==="nested")return Object.entries(i).map(([s,a])=>{const c=e.map(m=>s.replace(/&/g,m));return w(c,a)}).join("");if(n.includes("&")){const s=e.map(a=>n.replace(/&/g,a));return w(s,i)}}return""},[]).join("")].join(""),Q=(...e)=>`clamp(${e.join(",")})`,ue=e=>e.replace(/\s+/g," ").trim(),j=(e,o)=>Ko(qo(e,o)),z=()=>g(Jo()),_t="FRESH@0.1.0",Kn=j({format:Qo(_t,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:g(d({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),qn=oe(j({label:d({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:d({description:"Profession type or 'character class'."}),image:d({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:d({description:"A short description or summary of yourself as a candidate."}),quote:d({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),Jn=oe(j({willing:We([At(),d()],{description:"Willingness to relocate."}),destinations:M(d({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),Qn=oe(j({travel:Zo({description:"Percentage of time willing to travel (0 to 100)."}),authorization:d({description:"Work authorization: citizen, work visa, etc."}),commitment:M(d({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:At({description:"Open to remote employment opportunities."}),relocation:Jn},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),Zn=M(oe(j({label:d({description:"A label for this contact information."}),category:d({description:"Type of contact information: email, phone, url, postal, or IM."}),value:d({description:"Phone number, email address, website, etc."})}))),ei=oe(j({email:d({description:"Primary contact email.",format:"email"}),phone:d({description:"Primary phone number."}),website:d({description:"Website, blog, or home page.",format:"uri"}),other:Zn},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),ti=oe(j({address:d({description:"Your full postal address."}),code:d({description:"Postal or other official routing code."}),city:d({description:"Your home city."}),country:d({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:d({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),oi=M(j({employer:d({description:"Employer name."}),position:g(d({description:"Your position or formal job title."})),url:g(d({description:"Employer website.",format:"uri"})),start:g(d({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:g(d({description:"A summary of your achievements and responsibilities under this employer."})),marginalia:g(d()),highlights:g(M(We([d(),M(d())]))),location:g(d({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(M(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),ni=oe(j({summary:d({description:"Summary of overall employment."}),history:oi},{description:"The 'employment' section describes the candidate's formal employment history."})),ii=M(j({category:d({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:g(d({type:"string",description:"Friendly media name."})),url:g(d({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),ri=M(j({title:d({description:"Project name or code-name."}),category:g(d({description:"Project type: open-source, private, side project, etc."})),description:g(d({description:"Project description or summary."})),summary:g(d({description:"A summary of your achievements and responsibilities on the project."})),role:g(d({description:"Your role on the project: Contributor, Creator, etc."})),url:g(d({description:"Project URL.",format:"uri"})),media:g(ii),repo:g(d({description:"Repo URL.",format:"uri"})),start:g(d({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:g(M(d({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:g(d({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(M(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),si=oe(j({sets:M(j({name:d({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:g(d({description:"Level of mastery of the skill."})),skills:M(d({description:"Title or ID of a skill from the skills list."}))})),list:M(j({name:d({description:"The name or title of the skill."}),level:g(d({description:"A freeform description of your level of mastery with the skill."})),summary:g(d({description:"A short summary of your experience with this skill."})),years:g(We([d(),en()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),ai=M(j({title:g(d({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:d({description:"College or school name."}),area:g(d({description:"e.g. Arts"})),studyType:g(d({description:"e.g. Bachelor"})),start:g(d({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(d({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:g(d({description:"Grade or GPA."})),curriculum:g(M(d({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:g(d({description:"Website or URL of the institution or school.",format:"uri"})),summary:g(d({description:"A short summary of this education experience."})),keywords:g(M(d({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:g(M(d({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(d({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),li=j({summary:g(d({description:"Summary of overall education."})),level:d({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:g(d({description:"Your degree, if any (BSCS, BA, etc.)."})),history:g(ai)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),ci=M(j({network:d({description:"The name of the social network, such as Facebook or GitHub."}),user:d({description:"Your username or handle on the social network."}),url:d({description:"URL of your profile page on this network.",format:"uri"}),label:g(d({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."});j({name:d({description:"The candidate's name as it should appear on the resume."}),meta:Kn,info:g(qn),disposition:g(Qn),contact:g(ei),location:g(ti),employment:g(ni),projects:g(ri),skills:g(si),education:g(li),social:g(ci),services:z(),recognition:z(),writing:z(),reading:z(),speaking:z(),governance:z(),languages:z(),samples:z(),references:z(),testimonials:z(),interests:z(),extracurricular:z(),affiliation:z()},{title:"FRESH Resume Schema"});const R={OPEN_SOURCE:"Open source",PUBLIC_ACCESS:"Public access"},v={CONTRIBUTOR:"Contributor",CREATOR:"Creator",DEVELOPER:"Developer"},di=Date.now(),Le=e=>e==null?di:new Date(e).getTime(),mi=e=>e.slice().sort((o,n)=>{const i=Le(o.end),s=Le(n.end);if(i>s)return-1;if(s>i)return 1;const a=Le(o.start),c=Le(n.start);return a>c?-1:c>a?1:0}),pi=e=>mi(e),ui=pi([{title:"@getodk/xforms-engine",category:R.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/benwbooth/quick-clojure",role:v.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),gi=e=>e,hi=e=>typeof e[0]=="string",fi=e=>e,yi=fi([{employer:"ODK",position:"Senior Software Engineer",start:"2021-03",end:"2025-04",summary:`
			Created and led ODK Web Forms, a runtime for user-defined
			data collection tools & form-based applications.
		`,marginalia:"2021-2023: Maintainer of ODK Web Forms' legacy predecessor, Enketo.",highlights:[`
				Led ODK Web Forms development, from conception to user adoption in production.
			`,`
				Led design and architecture to ensure key business and product goals: alignment with the flagship Collect app for Andriod; sustainable productivity and maintainability for user-facing functionality core to the business; long-term anticipation of unification on Web Forms for that core functionality.
			`,`
				Primary development of ODK XForms and XPath engines. Responsible for design and implementation of parsing, data model, runtime computational architecture, and client-/framework-agnostic rendering APIs.
			`,`
				Prototyped initial UI/UX; collaborated with dedicated UI developers as team grew; coordinated downstream integration with team developing ODK Central software for managing form applications and data access.
			`]},{employer:"Reup \u2192 Mister Kraken \u2192 Treez",position:"Senior Software Engineer",start:"2015-11",end:"2020-09",summary:`
			Full-stack web service and application development serving a diverse range of
			responsibilities related to the legal cannabis industry.
		`,marginalia:"Reup partnered with Mister Kraken in 2017; both companies were acquired by Treez in 2018.",highlights:[["Treez","2018-2020","Led integration between Treez B2B inventory management services, and Mister Kraken's extant integrations with state-mandated traceability services; expanded on prior success maturing said integration to all major regulatory and vendor environments.","Built robust, general web service tooling as basis for Treez/Mister Kraken integration, which became a foundation for all new and anticipated service development.","Intervened on personal initiative in the wake of widespread vendor outages and data corruption, to institute reliable, auditable, and reproducible processes to recover and reconcile customer regulatory reporting and inventory history."],["Mister Kraken","2017-2018","Led efforts to mature and adapt early-stage integrations with WA state-mandated traceability services, ensuring stable continuation of service for customers through abrupt/rapid changes to the state's regulatory environment and service vendor.","Promoted a team culture shift to embrace automation and other safeguard processes, significantly improving both team velocity and product quality.","Integrated Reup's B2B marketplace software, filling the remaining gaps in Mister Kraken's end-to-end inventory management offering."],["Reup","2015-2018","Led technical design and development of Reup's core web application, a B2B cannabis supply chain marketplace.","Shared leadership and development of associated web services.","Joined founders and design team in user research, to ensure direct engineering involvement in product-market fit."]]},{employer:"ClipCard",position:"Senior Software Engineer",start:"2013-04",end:"2015-08",summary:`
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
				Led frontend architecture and development of ClipCard's
				web app, and provided mentorship for my successor in that role.
			`,`
				Organized a hackathon which produced 8 API integration
				prototypes, ultimately leading to company wide alignment
				on product direction as a search engine for private cloud data.
			`]}]),bi=yi,b={BASIC:"Basic",INTERMEDIATE:"Intermediate",ADVANCED:"Advanced",EXPERT:"Expert"},je={EXPERTISE:"Expertise",LANGUAGES_PLATFORMS:"Languages",SERVICES_DISTRIBUTED_SYSTEMS:"Services",WEB_UI_UX:"Web UI & UX",DOMAIN_SPECIFIC_LANGUAGES:"DSL\u200Bs",NICHE_ESOTERIC:"Niche/Esoteric"},Je={[je.WEB_UI_UX]:[{name:"React (+ Preact & similar)",level:b.EXPERT},{name:"Reactivity (framework-agnostic)",level:b.EXPERT},{name:"\u201CVanilla\u201D JS",level:b.EXPERT},{name:"Vue",level:b.INTERMEDIATE}],[je.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"HTTP (REST, RPC, Distributed systems)",level:b.EXPERT},{name:"Node.js (+ similar)",level:b.EXPERT},{name:"Django (+ REST Framework)",level:b.INTERMEDIATE}],[je.LANGUAGES_PLATFORMS]:[{name:"TypeScript/JavaScript",level:b.EXPERT},{name:"CSS",level:b.EXPERT},{name:"HTML",level:b.EXPERT},{name:"SQL",level:b.ADVANCED},{name:"Python",level:b.INTERMEDIATE},{name:"Swift",level:b.BASIC},{name:"Java",level:b.BASIC}],[je.NICHE_ESOTERIC]:[{name:"ODK XForms",level:b.EXPERT},{name:"Clojure",level:b.ADVANCED},{name:"SolidJS",level:b.ADVANCED},{name:"DSL\u200Bs (parsers, semantics & runtime)",level:b.ADVANCED}]},Si={list:Object.values(Je).flatMap(Me),merged:Je,sets:Object.entries(Je).map(([e,o])=>({name:e,skills:o.map(n=>n.name)}))},vi=gi({name:"Trevor Schmidt",meta:{format:_t,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:void 0},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:bi},info:{class:"Software Engineer",brief:`
Senior software engineer with a proven record of technical leadership and achievement, across a wide range of problems and disciplines:

- driving projects from conception to successful adoption and sustainable growth
- acquiring and applying deep domain/subject matter expertise
- fostering an engineering culture of velocity, quality, and continuous improvement
- reducing and overcoming risk, to grow and deliver on new project/business opportunities
		`.trim(),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:ui,skills:Si,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),Be=Symbol("DEFAULT_TOPIC"),I={[Be]:Be,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},Ei=e=>typeof e=="string"||typeof e=="symbol",Ft=e=>Ei(e)&&e in I,Qe=e=>Ft(e)?I[e]:e,Ut=Object.entries(I).reduce((e,o)=>{const[n,i]=o;return typeof n=="string"?{...e,[i]:n}:e},{}),ki=e=>Ft(e)?e:Ut[e],wi=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),Ti=Object.fromEntries(Object.entries(Ut).map(([e,o])=>typeof o=="string"?[e,wi(o)]:null).filter(e=>e!=null)),Ci=e=>{const o=Qe(e);return typeof o=="string"?Ti[o]:null},$e=2,Ze={minEm:1.0625,fluidVw:1.0625*$e,maxEm:1.25},E="@media (prefers-color-scheme: dark)",De="@media print",Ri=["h1","h2","h3","h4","h5","h6"],xi=["dd","dl","dt","li","ol","ul"],Ai=[...Ri,...xi,"p"],ge=Ze.minEm/Ze.maxEm,Z={h1:1.953,h2:1.563,h3:1.25},Pi={h1:{minEm:Z.h1*ge,fluidVw:Z.h1*ge*$e,maxEm:Z.h1},h2:{minEm:Z.h2*ge,fluidVw:Z.h2*ge*$e,maxEm:Z.h2},h3:{minEm:Z.h3*ge,fluidVw:Z.h3*ge*$e,maxEm:Z.h3}},Yt=75,Ne=1.25,Oi=["0.7fr",`${Ne}rem`,[`${Yt}ch`,`calc(100% - ${Ne*2}rem)`],`${Ne}rem`,"1.2fr"],et=1,Mi=["0.7fr",`${et}rem`,[`${Yt*1.1875}ch`,`calc(100% - ${et*2}rem)`],`${et}rem`,"1.2fr"],Ii=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],tt=Ii.join(", "),Li=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],ji=Li.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),F={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Bi="hover-inherit-topic-color",$i={[I[Be]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.DEFAULT_TOPIC.light},[E]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.DEFAULT_TOPIC.dark}}}}},[I.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.ABLEISM}}},[I.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.ARTS_CRAFTS}}},[I.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.LEMON}}},[I.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.MENTAL_ILLNESS}}},[I.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.NEURODIVERGENCE}}},[I.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.PHILOSOPHY}}},[I.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.POLITICS}}},[I.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.RACISM}}},[I.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.SEXISM}}},[I.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.SUBSTANCE_ABUSE}}},[I.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.TECHNOLOGY}}},[I.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.TRANSPHOBIA}}}},zt=qe().className,r={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Bi,baseFontSizeRange:Ze,darkMode:E,print:De,abbreviation:{"--abbreviation-highlight":"hsl(64deg 100% 50% / 0.25)",backgroundImage:`linear-gradient(${["to top","var(--abbreviation-highlight)","var(--abbreviation-highlight) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[E]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[E]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:zt,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[E]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${zt}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[E]:{color:"hsl(212deg, 10%, 90%)"}}},[E]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[E]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[E]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:tt},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:tt,nested:{[E]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em",fontWeight:300},emphasize:{color:"#000"},firstLastMarginZeroElements:Ai,gitHubLogo:{fill:"#171515",nested:{[E]:{fill:"#fff"}}},headingLineHeight:.9375,headingRanges:Pi,[E]:{abbreviation:{"--abbreviation-highlight":"hsl(336deg 85% 25%)"},aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg 60% 4%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)",fontWeight:200},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{"--color-prose":"hsl(190deg 20% 97%)","--color-prose-decoration":"hsl(190deg 20% 97% / 55%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"oklch(0.71 0.16 355.75)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:Oi,mainGridSidePaddingRem:Ne,monospaceFont:tt,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[E]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{"--color-prose":"hsl(210deg 12% 5% / 95%)","--color-prose-decoration":"hsl(210deg 12% 5% / 55%)",color:"var(--color-prose)",fontFamily:`var(--prose-font-family, ${ji})`},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[E]:{backgroundColor:"hsl(336deg, 100%, 7%)"},[De]:{backgroundColor:"transparent"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[E]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"#fffff1",nested:{[E]:{backgroundColor:"hsl(41deg, 100%, 8%)"},[De]:{backgroundColor:"transparent"}}},itemOdd:{backgroundColor:"transparent"},itemEven:{backgroundColor:"oklch(0.99 0.03 100.56)",nested:{[E]:{backgroundColor:"oklch(0.26 0.06 71.28)"},[De]:{backgroundColor:"transparent"}}}},skillLevel:{[b.BASIC]:{color:"hsl(207deg, 25%, 83%)",nested:{[E]:{color:"hsl(207deg, 15%, 43%)"}}},[b.INTERMEDIATE]:{color:"hsl(188deg, 53%, 74%)",nested:{[E]:{color:"hsl(188deg, 53%, 34%)"}}},[b.ADVANCED]:{color:"hsl(188deg, 70%, 59%)",nested:{[E]:{color:"hsl(188deg, 80%, 39%)"}}},[b.EXPERT]:{color:"hsl(152deg, 100%, 39%)",nested:{[E]:{color:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:Mi,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[E]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[E]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:$i,topicTagIdentifier:qe(),topicTagInner:{backgroundImage:ue(`linear-gradient(
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
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visiblyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[E]:{color:"hsl(194deg, 8%, 50%)"}}}}}},ot=["b","em","h1","h2","h3","i","strong"],He=["h1","h2","h3","h4","h5","h6"],Di=[...He,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Ni=Array.from(new Set([...He,...Di,"div","fieldset","form","hgroup","hr","pre"])),nt="PDFPrint",Hi="/fonts/pdf-print.woff",_i=ue(`
  @font-face {
    font-family: "${nt}";
    font-weight: 400;
    src: url("${Hi}");
  }

  ${r.print} {
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
    font-size:        ${Q(`${r.baseFontSizeRange.minEm}em`,`${r.baseFontSizeRange.fluidVw}vw`,`${r.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${w(["html","body"],{...r.document})}

  ${w(["body"],{...r.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${He.join(",")} {
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
`),Fi=()=>{Ie.global(ue(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${Ni.join(",")} {
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

      ${w(ot,r.emphasize)}

      h1 {
        font-size: ${Q(`${r.headingRanges.h1.minEm}em`,`${r.headingRanges.h1.fluidVw}vw`,`${r.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${Q(`${r.headingRanges.h2.minEm}em`,`${r.headingRanges.h2.fluidVw}vw`,`${r.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${Q(`${r.headingRanges.h3.minEm}em`,`${r.headingRanges.h3.fluidVw}vw`,`${r.headingRanges.h3.maxEm}em`)};
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

      ${r.darkMode} {
        :root {
          color-scheme: dark light;
        }

        ${w(["html","body"],{...r[r.darkMode].document})}

        ${w(["body"],{...r[r.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${w(ot,r[r.darkMode].emphasize)}
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
    `))},Ui=()=>t(D,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));Fi();const Gt=({children:e,meta:{description:o,host:n,redirect:i,social:{image:s},title:a},...c})=>i?t(Pt,{...c},t(Pe.title,null,"Redirecting to ",i),t("meta",{"http-equiv":"refresh",content:`0; URL=${i}`}),t("link",{rel:"canonical",href:i})):t(Pt,{...c},t(Pe.title,null,a," | Eyelidlessness"),o!=null?t(Pe.description,null,o):t(D,null),t("meta",{name:"theme-color",content:r.siteLogo.color}),t("style",{dangerouslySetInnerHTML:{__html:_i}}),t("meta",{name:"twitter:card",content:"summary_large_image"}),t("meta",{name:"twitter:site",content:"@eyelidlessenss"}),t(Pe.image,{alt:a,height:s.height,src:`${n}${s.publicPath}`,width:s.width}),t(D,null,e),t(Ui,null)),it="/blog/",Wt=it,Yi=!0,Xt="/resume/",rt=(()=>Xt)(),zi={PNG:"png"},st=It.cwd(),we=e=>e.startsWith("/")?Mt(st,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):hn(e)==""?Mt(st,"./src/pages/",`${e}.tsx`):e,_e={ALL:"",CURRENT:"--diff-filter=M",FIRST:"--diff-filter=A",FIRST_MERGE:"--full-history --reverse --merges"},Te={HASH:"%H",ISO_DATE:"%aI"},Gi="origin",Wi="main",Ce=e=>{const{branch:o=Wi,decode:n,filter:i=_e.FIRST,format:s,path:a=st,remote:c=Gi}=e,{error:m,stdout:p}=vn.spawnSync("git",["log",...i.split(" "),`--branches=${o}`,`--format=${s}`,`--remotes=${c}`,"--",a]);if(m)throw m;const u=p.toString().trim();return(u===""?[]:u.split(`
`)).map(n)},at=e=>{const o=new Date(e);return isNaN(o.getTime())?null:o},Xi=e=>{const o=we(e),[n=null]=Ce({decode:at,filter:_e.CURRENT,format:Te.ISO_DATE,path:o});return n},Vi=e=>{const o=we(e),[n=null]=Ce({decode:at,format:Te.ISO_DATE,path:o});return n},Ki=e=>{const o=we(e),[n=null]=Ce({decode:at,filter:_e.FIRST_MERGE,format:Te.ISO_DATE,path:o});return n},lt=e=>{const o=Ve.readFileSync(e).toString(),n=En.createHash("sha1");return n.update(o),n.digest("hex")},qi=e=>{const o=we(e),[n]=Ce({decode:Me,format:Te.HASH,path:o});return n??lt(o)},Ji=e=>{const o=we(e),[n]=Ce({decode:Me,filter:_e.FIRST_MERGE,format:Te.HASH,path:o});return n??lt(o)},Qi={height:630,width:1200},Zi=It.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",er=Sn({alg:"sha1",coerce:!0,sort:!0,trim:!0}),tr=(e,o,n=zi.PNG,i=Qi)=>{const s=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=er.hash(o),c=Oe.resolve(s,`${a}.${n}`),m=c.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:c,imageType:n,publicPath:m,...i}}},Re={IMMUTABLE:"immutable",IMMUTABLE_MERGE:"immutable-merge",MUTABLE:"mutable"},Vt=(e,o,n,i,s=[I.TECHNOLOGY])=>{const a=i===Re.MUTABLE,c=i===Re.IMMUTABLE_MERGE,m=o.replace(/^file:(\/\/)?/,""),p=a?lt(m):c?Ji(e):qi(e),u={created:(c?Ki(e):Vi(e))??Ve.statSync(m).ctime,updated:Xi(e)??Ve.statSync(m).mtime},y=tr(o,a?{importURL:o,stat:u,topics:s}:{hash:p,importURL:o});return{hash:p,host:Zi,path:e,social:y,stat:u,title:n,topics:s}},or=(e,o="Assertion failed: expected non-nullish value")=>{if(e==null)throw new Error(o)},ie=(e,o)=>(or(e,o),e),nr=e=>e.map((o,n)=>n),ct=(e,o)=>nr(e).toSorted((n,i)=>{const s=o(e[n],e[i]);return s===0?n===i?0:n>i?1:-1:s}).map(n=>ie(e[n])),xe=(e,o)=>Number(e.toFixed(o)),ce=parseInt("ff",16),Kt=parseInt("00",16),qt=.05,dt=.15,mt=.05;class Ae extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const ir=/^[0-9a-f]{40}$/i,rr=e=>ir.test(e),sr=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),ar=e=>e.length===10,lr=/([0-9a-f]{2})([0-9a-f]{2})/gi,pt=e=>{if(!rr(e))throw new Ae(e);const n=Array.from(e.matchAll(lr)).map(([i,s,a])=>({x:s,y:a}));if(!ar(n))throw new Ae(e);return n},cr=Symbol("IS_POINT"),dr=e=>Object.assign(e,{[cr]:!0}),Jt=e=>{const o=parseInt(e,16);if(o>ce||o<Kt)throw new Error(`Not a valid coordinate: ${e}`);return dr(o)},mr=({x:e,y:o})=>({x:Jt(e),y:Jt(o)}),pr=e=>e.length===10,ut=(e,o)=>{try{const n=o.map(mr);if(!pr(n))throw new Ae(e);return n}catch{throw new Ae(e)}},ur=Symbol("SCALED_COORDINATE"),gr=e=>e.reduce(({max:o,min:n},{y:i})=>({max:Math.max(o,Number(i)),min:Math.min(n,Number(i))}),{max:-Infinity,min:Infinity}),W=(e,o)=>Object.assign(xe(e,2),{[ur]:o}),he=({x:e,xScale:o,y:n,yScale:i})=>({x:W(e,o),y:W(n,i)}),gt=({x:e,y:o},{xScale:n,xShift:i,yScale:s,yShift:a})=>he({x:(e+i)*n,xScale:n,y:(o+a)*s,yScale:s}),ht=e=>{const{xScale:o,yScale:n,xMax:i}=e;return[he({x:0,xScale:o,y:0,yScale:n}),...e.points,he({x:i,xScale:o,y:0,yScale:n})].reduce((s,a,c,m)=>{if(c===0||c===m.length-1)return s;const p=W(0,n),u=[{x:ie(m[c-1]).x,y:p},a,{x:ie(m[c+1]).x,y:p}];return[...s,u]},[])},ft=({segments:e,xMax:o,xScale:n,yScale:i})=>e.map(s=>{const[{x:a,y:c},{x:m,y:p},{x:u,y:h}]=s,y=u-a,k=p/y,f=6/k;if(f<1){const A=f*.2*a,T=a-A,_=u+A,B=T<0?Math.abs(T):_>o?o-_:0,C=T+B,P=_+B,$=f*.3,H=m+B,U=$*p,V=p-U;return[he({x:C,xScale:n,y:c,yScale:i}),he({x:H,xScale:n,y:V,yScale:i}),he({x:P,xScale:n,y:h,yScale:i})]}return s}),hr=({x:e,y:o},{x:n,y:i})=>{const s=n-e,a=i-o;return{angle:Math.atan2(a,s),length:Math.sqrt(s**2+a**2)}},Qt=({current:e,previous:o,next:n,reverse:i,smoothing:s,xScale:a,yScale:c})=>{const m=i?Math.PI:0,p=hr(o,n),u=p.angle+m,h=p.length*s,{x:y,y:k}=e,S=y+Math.cos(u)*h,f=k+Math.sin(u)*h;return{x:W(S,a),y:W(f,c)}},yt=({index:e,point:o,points:n,smoothing:i,xScale:s,yScale:a})=>{const c=n[e-1];if(c==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const m=n[e-2]??c,p=Qt({current:c,previous:m,next:o,reverse:!1,smoothing:i,xScale:s,yScale:a}),u=c,h=n[e+1]??o,y=Qt({current:o,previous:u,next:h,reverse:!0,smoothing:i,xScale:s,yScale:a});return[p,y,o]},Zt=({segment:e,smoothing:o,xScale:n,yScale:i})=>e.reduce((s,a,c)=>{if(c===0)return s;const p=yt({index:c,point:a,points:e,smoothing:o,xScale:n,yScale:i}).map(({x:u,y:h})=>`${u},${h}`).join(" ");return[...s,`C ${p}`]},[]),fr=e=>{const{baseYCoordinate:o,isBaselineBelowMidpoint:n,xScale:i,yMax:s,yScale:a,yTilt:c=!1}=e;return e.segments.reduce((m,p,u,h)=>{const{length:y}=h,[k,S,f]=p,{x,y:A}=k,{x:T,y:_}=S,{x:B,y:C}=f,P=B-x,$=P===0?0:Math.max(_/P*mt,dt),H=c?.1:0,U=1-H,V=1+H,ee=u%2==0?U:V,re=n?A+o:s-A+o,J={x,y:W(re*ee,a)},K=u%2==0?U:V,Y=n?C+o:s-C+o,N={x:W(B,i),y:W(Y*K,a)},G=T-x,X=B-T,se=X>G?0:0-(T-x)*qt,q=(y-u)*(a/100*s),ae={x:W(T+se,i),y:W(_-q,a)},O=Zt({segment:[J,ae,N],smoothing:$,xScale:i,yScale:a}),te=X>G?(B-T)*qt:0,xt={x:W(T+te,i),y:W(s-q,a)},Fo=Zt({segment:[N,xt,J],smoothing:$,xScale:i,yScale:a});return[...m,[`M ${J.x},${J.y}`,...O,...Fo,"Z"].join(" ")]},[])},yr=({hash:e,xPadding:o=0,xScale:n=1,yOffset:i=.5,yPadding:s=0,yScale:a=1})=>{const c=pt(e),m=ut(e,c),p=ct(m,({x:C},{x:P})=>Number(C)===Number(P)?0:Number(C)>Number(P)?1:-1),u=o/2,h=s/2,y=p.map(C=>gt(C,{xScale:n,xShift:u,yScale:a,yShift:h})),k=(ce+o)*n,{max:S}=gr(y),f=(S+s)*a,x=ht({points:y,xMax:k,xScale:n,yScale:a}),A=ft({segments:x,xMax:k,xScale:n,yScale:a}),T=i>.5,_=T?f*i:-1*f*i;return{segmentPaths:fr({baseYCoordinate:_,segments:A,xScale:n,yMax:f,isBaselineBelowMidpoint:T,yScale:a}),xMax:k,yMax:f}},br=`
  ${r.mainGridColumns[0]}
  ${r.mainGridColumns[1]}
  min(
    ${r.mainGridColumns[2][0]},
    ${r.mainGridColumns[2][1]}
  )
  ${r.mainGridColumns[3]}
  ${r.mainGridColumns[4]}
`.replace(/\s+/g," "),eo={gridColumn:"1 / -1"},to=Ie(eo),L=l("div",{nested:{[`& > .${to}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0},[r.print]:{display:"flex",flexDirection:"column"}},display:"grid",gridTemplateColumns:br,...eo}),Sr=({children:e,shadow:o,...n})=>t(L,{...n},e),oo=([e,o,n])=>`rgba(${[e,o,n,0].join(",")})`,no=["12rem 100%","auto"],io=no.join(", "),vr=no.map(e=>e.replace("100%","100.1%")).join(", "),Er=ne.renderKeyframe(()=>({"0%":{backgroundSize:io},"100%":{backgroundSize:vr}}),{}),ro="5px",so=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`rgba(${o.join(",")}) calc(11rem + ${ro})`,`${oo(o)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${oo(e)} ${ro}`].join(", ")})`].join(", ")}:null,kr=e=>{if(e!=null){const{darkMask:o,darkScroll:n,lightMask:i,lightScroll:s}=e;return{dark:so(n,o),light:so(s,i)}}return{dark:null,light:null}},ao=l(Sr,({shadow:e})=>{const{dark:o,light:n}=kr(e),i=o==null?null:{[r.darkMode]:o};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:io,paddingRight:r.mainGridSidePaddingRem,overflowX:"auto",nested:{...i,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:Er,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),wr=l(L,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),lo=l("div",{paddingLeft:"1rem"}),Tr=l("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),Cr=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),bt="div",Rr={ContentContainer:bt,InnerContainer:lo,OuterContainer:bt,SymbolContainer:bt},co=e=>{const{children:o,ContentContainer:n,InnerContainer:i,OuterContainer:s,outerContainerProps:a,symbol:c,SymbolContainer:m}={...Rr,...e};return t(wr,{as:s,...a},t(Tr,{as:m,role:"presentation"},c),t(lo,{as:i},t(Cr,{as:n},o)))},xr=l("pre",{fontSize:"1rem",tabSize:2}),Ar=l(ao,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)"}),Pr=e=>t(Ar,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),Or=l(L,{...r.pre,nested:{[r.darkMode]:{...r[r.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),Mr=l("div",{...r.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Ir=({children:e})=>t(co,{ContentContainer:xr,InnerContainer:Pr,OuterContainer:Or,symbol:"{",SymbolContainer:Mr},e),Lr=e=>typeof e=="object"&&e!=null,jr=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),Br=(e,o)=>Lr(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&tn().test(o),$r=({["aria-label"]:e,children:o,role:n})=>t(jr,{"aria-label":e,role:n},o),Dr={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},Nr={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",ODK:"Open Data Kit (https://getodk.org/)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},Hr={...Dr,...Nr},mo=Oe.resolve(fn(),"./syntax-themes"),[_r,Fr]=await Promise.all([Lt(Oe.resolve(mo,"./yi-dark.json")),Lt(Oe.resolve(mo,"./yi-light.json"))]),Ur={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},Yr={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},zr=e=>e.trim().split(/\b\W*\b/).reduce((o,n)=>({...o,...Yr[n]}),{}),Gr=e=>Object.entries(e).reduce((o,[n,i])=>{const s=Ur[n];if(i==null||typeof s!="string")return o;const a=s==="fontStyle"?zr(i):{[s]:i};return{...o,...a}},{}),[Wr,Xr]=await Promise.all([jt({theme:_r}),jt({theme:Fr})]),Vr=new Set(yn.map(e=>e.id)),Kr=new Set(["ts","tsx","typescript"]),po=e=>e.explanation==null?null:e.explanation.reduce((o,n)=>({...o,...n.scopes.reduce((i,{themeMatches:s})=>({...i,...s.reduce((a,{settings:c})=>({...a,...Gr(c)}),i)}),o)}),{color:e.color}),qr=(e,o,n={})=>{const i=po(e),s=po(o),a=s==null?null:{nested:{[r.darkMode]:s}},{content:c}=e;if(i==null&&a==null)return t("span",n,c);const m={...i,...a},p=l("span",m);return t(p,n,c)},Jr=Ie({paddingRight:"1rem"}),Qr={className:Jr},Zr=(e,o)=>Xe(t(le,{},t("pre",{},t("code",{},...e.reduce((n,i,s)=>{const a=i.map((m,p)=>{const u=ie(o[s]?.[p]),h=p===i.length-1?Qr:{};return qr(m,u,h)}),c=s===0?"":`
`;return[...n,c,...a]},[]))))),es=e=>{const{lang:o,value:n,meta:i}=e,s=o==="json5"?"json":o;let a;const c=n.replace(/^\n+|\n+$/g,"");if(!Vr.has(s))a=bn.plainTextRenderer(c,{},{});else{const m=Xr.codeToThemedTokens(c,s),p=Wr.codeToThemedTokens(c,s);a=Zr(m,p)}Kr.has(s)&&!i?.includes("ignore"),e.children=[],e.type="html",e.value=a},ts=()=>o=>{Ge(o,"code",es)},os=({className:e,children:o,...n})=>e==="language-id"?null:e==="code-container"?t(D,n,...ze(o)):t("div",{className:e,...n},...ze(o)),ns=({children:e,...o})=>Br(o,e)?t($r,o,e):t("span",o,e),St={components:{div:os,pre:Ir,span:ns},rehypePlugins:[rn,[an,{passThrough:Ot.nodeTypes}]],remarkPlugins:[ts,on,Dn,cn,un]},uo=e=>{const{children:o=t(()=>null,{}),components:n={},rehypePlugins:i=[],remarkPlugins:s=[]}=e,a={...St.components,...n},c=[...St.rehypePlugins,...i],m=[...St.remarkPlugins,...s],p=typeof o=="string"?nn(o).trim():Xe(o),u=Ot.compileSync(p,{rehypePlugins:c,remarkPlugins:m,outputFormat:"function-body",remarkRehypeOptions:{handlers:{abbrDefinition:()=>{}}}});return new Function("options",u.value.toString())({Fragment:D,jsx:t,jsxs:t}).default({components:a})},is=Object.entries(Hr).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),rs=e=>[e,is].join(`

`),vt=([e,...o],{includeAbbreviations:n})=>{const i=typeof e=="string"?[e,...o].join(""):String.raw({raw:e},...o);return n?rs(i):i},fe=(...e)=>{const o=vt(e,{includeAbbreviations:!0});return t(le,{},t(uo,{},o))},go=(...e)=>{const o=vt(e,{includeAbbreviations:!0});return t(le,{},t(uo,{components:{p:D}},o))},ss=(...e)=>{const o=vt(e,{includeAbbreviations:!1});return dn().use(sn).use(ln).use(gn).use(mn).use(pn).processSync(o).value.toString().trim()},ho=()=>t(D,null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),as=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t(ho,null))),ls=1.6180334,cs=4,fo=xe(ls*5,6),yo=.75,ye=.15,ds=1.5,be=Q("6rem",`${100/fo}vw`,"10rem"),ms=l(L,{height:be,position:"relative",width:"100%"}),ps=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),us=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85}),Et={INLINE:"inline",NONE:"none"},kt={xPadding:cs,xScale:fo,yOffset:yo,yPadding:ye,yScale:ds},wt=e=>{const{className:o,defsUsage:n=Et.INLINE,hash:i,height:s,rawSVG:a=!1,styleRenderer:c=ne,title:m,topics:p=[],width:u}=e,h=p.length<2?[...p,I[Be]]:p,y=C=>`${C}-${i}`,{segmentPaths:k,xMax:S,yMax:f}=yr({...kt,hash:i}),x=f*yo,A=f*ye/10.24,T=A*.75,B=t(ps,{className:to,height:s,preserveAspectRatio:"none",viewBox:[0,0,S,f].join(" "),width:u},t("title",null,"Generated art for the page or post titled ",t("i",null,m),", with the content or commit hash ",i," ",h.length>0?[", and the topics: ",h.map(String).join(", ")]:null),t("defs",null,n===Et.INLINE?t(ho,null):null,t("filter",{id:y("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:T,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:A,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:y("blurOverlayClip")},t("rect",{x:"0",width:S,y:x,height:f})),t("filter",{id:y("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:T}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:A})),t("filter",{id:y("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:T}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:A}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:A})),t("g",{id:y("blobs")},k.map((C,P)=>{const $=P%h.length,H=h[$],U=c.renderRule(()=>({...r.topicColors[H]}),Object.keys);return t(us,{key:C,className:U,d:C,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${f*ye})`,`scale(1, ${1-ye*2})`].join(" "),filter:`url(#${y("blur")})`},t("use",{href:`#${y("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${y("blurOverlayClip")})`,filter:`url(#${y("blurOverlay")})`,transform:[`translate(0, ${f*ye})`,`scale(1, ${1-ye*2})`].join(" ")},t("use",{href:`#${y("blobs")}`,mask:"url(#softVerticalFade)"})));return a?t("svg",{width:u,height:s,viewBox:`0 0 ${u} ${s}`},B):t(ms,{className:o},B)},gs=[null,"January","February","March","April","May","June","July","August","September","October","November","December"],hs=l("time",{nested:{[r.darkMode]:{...r[r.darkMode].deemphasize}},...r.deemphasize}),de={DEFAULT:"DEFAULT",META:"META",SHORT:"SHORT"},Se=({date:e,mode:o=de.DEFAULT,...n})=>{const i=e.getMonth()+1,s=e.getFullYear(),a=o===de.SHORT?`${i}/${s}`:o===de.META?"":[e.getDate(),gs[i],s].join(" ");return t(hs,{...n,datetime:e.toISOString()},a)},fs=l("a",{...r.topicTagLink(r.topicTagIdentifier.className)}),ys=l("span",{...r.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),bs=({className:e,link:o=!0,topic:n})=>{const i=Ci(n),s=Qe(n);if(i==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=o?fs:"span",c=o?{href:`${it}topics/${i}/`}:{};return t(a,{className:[e,r.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...c},t(ys,{className:r.topicTagIdentifier.className},s))},bo=l(bs,e=>({...r.topicTagOuter,...r.topicColors[Qe(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),Ss=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),vs=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),So=({className:e,link:o=!0,topics:n})=>t(Ss,{className:e},n.map(i=>typeof i=="string"?t(vs,{key:ki(i)},t(bo,{link:o,topic:i})):null)),Es=e=>e.reduce((o,n)=>{const i=n.stat.created.getFullYear(),s=o[i]??[];return{...o,[i]:[...s,n]}},{}),ks=l(L,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),ws=l(L,{...r.blog.listing.item,minHeight:be,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),Ts=l(L,{paddingTop:`calc(${be} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),Cs=l(L,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),Rs=l("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),xs=Ie({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),As=l("h2",{...r.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),Ps=l(Se,{padding:"0 0.5rem 0.125rem 0"}),Os=l(So,{gridColumn:"3 / 3"}),Ms=l("div",{...r.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),Is=l("a",{fontSize:"0.875em"}),vo={DATE:"date"},Eo={ASC:"asc",DESC:"desc"},Ls=({order:e=Eo.DESC,posts:o,sort:n=vo.DATE})=>{const i=o.slice().sort((a,c)=>e===Eo.DESC&&n===vo.DATE?a.stat.created>c.stat.created?-1:1:0),s=Es(i);return t(D,null,Object.entries(s).map(([a,c])=>t(D,{key:a},t(ks,null,c.map(m=>{const{CustomArt:p=wt,description:u,hash:h,path:y,stat:{created:k},title:S,topics:f}=m;return t(ws,{key:y},t(Ts,{as:"a",href:y},t(Rs,null,t(p,{defsUsage:Et.NONE,hash:h,padded:!0,renderType:"listing",title:S,topics:f})),t(Cs,null,t(As,{className:xs},S),t(Ps,{date:k}))),t(Os,{link:!1,topics:f}),t(Ms,{className:r.blog.listing.descriptionIdentifier},u),t("p",null,t(Is,{href:y},"Read more\u2026")))})))))},js=({as:e="div",devilsBreakpoint:o,gap:n,...i})=>{const s=l(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return t(s,{...i})},Bs=l("svg",{...r.visiblyHidden,position:"absolute"}),me=512,ko=[0,0,me,me].join(" "),$s=me/2,Ds="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z",Ns=()=>t(Bs,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:ko,width:"0"},t("defs",null,t("mask",{id:"octocat-knockout"},t("rect",{fill:"#fff",height:me,mask:"url(#octocat)",rx:$s,width:me}),t("path",{d:Ds,fill:"#000"})))),Hs=l("rect",{...r.gitHubLogo}),Tt=({className:e})=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:ko},t("title",null,"GitHub"),t(Hs,{height:me,mask:"url(#octocat-knockout)",width:me})),Fe={height:60,width:338},_s=l("svg",{display:"inline-block",maxWidth:"100%",width:`${Fe.width}px`}),Fs=l("use",{nested:{[r.darkMode]:{...r[r.darkMode].siteLogo}},...r.siteLogo,fill:"currentcolor"}),Us=`0 0 ${Fe.width} ${Fe.height}`,Ys=()=>t(_s,{viewBox:Us},t(Fs,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),t("title",null,"Eyelidlessness")),{columns:ve}=r.siteHeader,zs=`
  ${ve[0]}
  ${ve[1]}
  min(
    ${ve[2][0]},
    ${ve[2][1]}
  )
  ${ve[3]}
  ${ve[4]}
`.replace(/\s+/g," "),Gs=l("header",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:zs,padding:"clamp(0.5rem, 4vmin, 2rem) 0",position:"relative",zIndex:1,nested:{[r.print]:{nested:{'&[data-page-id="resume"]':{display:"none"}}}}}),Ws=l("div",{gridColumn:3}),Xs=l("div",{margin:"0 auto"}),Vs=l("a",{textDecoration:"none"}),Ks=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0,nested:{'&[data-page-id="resume"]':{display:"none"}}}),wo=1,qs=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${wo/2}rem`,padding:0}),Js=l("a",{...r.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[r.darkMode]:{...r[r.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),To="1.5em";l(Tt,{display:"block",width:`clamp(1.125em, 4vw, ${To})`});const Qs=e=>{const o=e.meta.pageId==null?{}:{"data-page-id":e.meta.pageId},i=e.meta.pageId==="resume"&&Yi,s=i?rt:Wt,a=[{label:"Blog",location:Wt},{label:"Hire me",location:rt},{label:"GitHub",location:"https://github.com/eyelidlessness"}],c=a.reduce((u,h)=>typeof h.label=="string"?u+h.label.length:u,0),m={horizontal:"2rem"},p=[`${Fe.width}px`,m.horizontal,`${c+2}ch`,To,`${a.length*wo}rem`].join(" + ");return i?t(D,null):t(Gs,{...o},t(Ws,null,t(js,{as:"nav",devilsBreakpoint:p,gap:m},t(Xs,null,t(Vs,{href:s},t(Ys,null))),t(Ks,{...o},a.map(({location:u,label:h})=>t(qs,null,t(Js,{href:u},h)))))))},Zs=l(L,{paddingTop:0,paddingBottom:"4em",nested:{[r.print]:{nested:{'&[data-page-id="resume"]':{paddingTop:0,paddingBottom:0}}}}}),ea=e=>{if(e.pageId!=null)return{"data-page-id":e.pageId}},Co=({meta:e,...o})=>e.redirect?t(D,null):t(le,null,t(Ns,null),t(Qs,{meta:e}),t(Zs,{as:"main",...ea(e),...o})),ta=l(L,{...r.description,nested:{...r.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),oa=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),na=l("div",{fontSize:"0.889em"}),ia=({as:e="section",title:o,...n})=>t(ta,{as:e,itemprop:"description"},o?t(oa,null,o):null,t(na,{...n})),ra=l(L,{paddingTop:"1rem"}),sa=l("h1",{marginBottom:"0.25rem"}),aa=l(L,{paddingBlock:"1rem"}),la=e=>{const{children:o,CustomArt:n,description:i,descriptionRaw:s,hash:a,stat:{created:c},title:m,topics:p}=e;return t(D,null,t(Gt,{meta:{...e,description:s}}),t(Co,{as:"article",meta:e},t(aa,null,n==null?t(wt,{hash:a,title:m,topics:p}):t(n,{hash:a,renderType:"post",StylesProvider:le,title:m,topics:p}),t(ra,null,t(sa,null,m),t(Se,{date:c,itemprop:"datePublished"}),t(So,{link:!1,topics:p}))),t(ia,null,i),o))},Ro={IMMUTABLE:Re.IMMUTABLE,IMMUTABLE_MERGE:Re.IMMUTABLE_MERGE},ca=e=>{const{description:o,importURL:n,path:i,redirect:s,title:a,topics:c,type:m=Ro.IMMUTABLE_MERGE}=e,{CustomArt:p,hash:u,host:h,social:y,stat:k}=Vt(i,n,a,m,c),S=ss`${Xe(t(D,null,o))}`;return Promise.resolve({CustomArt:p,description:o,descriptionRaw:S,hash:u,host:h,path:i,redirect:s,social:y,stat:k,title:a,topics:c})},da=({date:e,...o})=>e==null?null:t(Se,{...o,date:e}),ma=l("span",{nested:{[r.darkMode]:{...r[r.darkMode].deemphasize}},...r.deemphasize}),pa=/^(\d{4})-(\d{2})$/,xo=e=>{if(e==null)return null;const o=pa.exec(e);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,i]=o;return new Date(`${n}-${i}-01T00:00:00`)},Ao=l("div",{fontSize:"0.88889em",whiteSpace:"nowrap",nested:{"& time":{fontSize:"inherit"}}}),Po=({className:e="",range:[o,n]})=>{const i=xo(o),s=xo(n??null);return o==n?t(Ao,{className:e},t(Se,{date:i,itemprop:"endDate",mode:de.SHORT})):t(Ao,{className:e},t(Se,{date:i,itemprop:"startDate",mode:de.SHORT}),t(ma,null,"-"),t(da,{date:s,itemprop:"endDate",mode:de.SHORT}))},ua="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",ga=({fill:e,topic:o})=>{const n=r.topicColors[o];return{...n,...e?{fill:"currentcolor",fillOpacity:.05,mask:"url(#curvesVerticalFade)",strokeWidth:0,nested:{...n.nested,[r.darkMode]:{fillOpacity:.15}}}:{fill:"none",strokeWidth:1,stroke:"currentcolor"},transition:ua,vectorEffect:"non-scaling-stroke"}},ha=({fill:e,index:o,topic:n,...i})=>t("path",{...i}),Oo=l(ha,ga),fa=l("svg",{overflow:"visible",padding:"1rem"}),ya=20,ba={xMax:ce,xScale:1,xShift:0,yMax:ce,yScale:1,yShift:0},Sa=({className:e,hexPoints:o,points:n,pointSize:i,scaleOptions:s,segments:a,topics:c,...m})=>{const{xScale:p,xShift:u,xRange:h=p*(ce+u*2),yMax:y,yShift:k,yScale:S,yRange:f=S*(y+k*2)}={...ba,...s},x=ya*2,A=m.height??f+x,T=m.width??h+x,_=({x:C,y:P})=>{const $=xe((C+u)/h*100,4),H=100-xe((P-k)/f*100,4);return{cx:$,cy:H}},B=a.map(C=>{const[P,$,H]=C,{x:U}=P,{y:V}=$,{x:ee}=H,re=ee-U,J=re===0?0:Math.max(V/re*mt,dt);return{cubicPoints:C.reduce((Y,N,G)=>{if(G===0)return Y;const X=yt({index:G,point:N,points:C,smoothing:J,xScale:p,yScale:S});return[...Y,X]},[]),segment:C}});return t(fa,{className:e,height:A,width:T,preserveAspectRatio:"none",viewBox:`0 0 ${T} ${A}`},t("defs",null,t("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.15","stop-color":"white","stop-opacity":".95"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),t("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),B.map(({cubicPoints:C,segment:P},$)=>{const[H,U,V]=P,ee=C.map(([K,Y],N)=>[N===0?H:U,K,Y,N===0?U:V]);return t(D,null,t(()=>t(D,null,ee.map(K=>{const Y=K.map((G,X)=>{const{cx:se,cy:q}=_(G),ae=se/100*T,pe=q/100*A;return`${X===0?"M ":X===1?"C ":""} ${ae},${pe}`}).join(" "),N=ie(c[$%c.length]);return t(Oo,{d:Y,index:$,topic:N})})),null),t(()=>{const K=ee.map((N,G)=>N.map((se,q)=>{if(G>0&&q===0)return"";const{cx:ae,cy:pe}=_(se),O=ae/100*T,te=pe/100*A;return`${q===0?"M ":q===1?"C ":""} ${O},${te}`}).join(" ")).join(" "),Y=ie(c[$%c.length]);return t(Oo,{d:K,fill:!0,index:$,topic:Y})},null))}))},Mo=({className:e="",hash:o,height:n,renderType:i,StylesProvider:s=le,styleRenderer:a=ne,topics:c=[],width:m})=>{const p=pt(o),u=ut(o,p),{xPadding:h,xScale:y,yPadding:k,yScale:S}=kt,f=i==="meta",x=f?0:h,A=f?0:k,T=x/2,_=A/2,B={xScale:y,xShift:T,yScale:S,yShift:_},P=ct(u,({x:O},{x:te})=>O===te?0:O>te?1:-1).map(O=>gt(O,B)),$=P.map(O=>ie(p[P.indexOf(O)])),H=(ce+x)*y,U=ht({points:P,xMax:H,xScale:y,yScale:S}),V=ft({segments:U,xMax:H,xScale:y,yScale:S}),ee=f?{"& path":{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,re=f?"0 !important":"0 0 1rem !important",J=be,K="100%",Y=O=>typeof O=="number"?`${O}px`:O,N=(O,te)=>typeof O=="number"?O*te:O,G=f?N(n??J,.95):be,X=f?N(m??K,.95):"100%",se=f&&n!=null?N(n,.95):n,q=f&&m!=null?N(m,.95):m,ae=a.renderRule(()=>({gridColumn:"1 / -1",height:Y(G),padding:re,width:Y(X),nested:{...ee}}),Object.keys),pe=f?e:`${e} ${ae}`;return t(s,null,t(Sa,{className:pe,height:se,hexPoints:$,points:P,scaleOptions:B,segments:V,topics:c,width:q}))},va=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),Ea=e=>{const o=Array();return e.role===v.CREATOR&&o.push(e.description),e.summary!=null&&o.push(e.summary),o.length===0&&o.push(e.description),t(va,null,o.map(n=>fe(n)))},Io="@media screen and (min-width: 41.666rem)",ka=l("div",{display:"block",margin:0,padding:0,nested:{"& > *":{containerType:"inline-size",paddingTop:"1rem"},[Io]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}},[r.print]:{display:"none"}}}),wa=l("div",{display:"grid",rowGap:"0.325rem",nested:{"& > *":{margin:0}}}),Ct="1.0625rem",Ta=l("h3",{fontFamily:r.prose.fontFamily,fontWeight:500,fontSize:Ct,paddingLeft:0,textIndent:0,nested:{[r.print]:{fontSize:"1rem"}}}),Ca=l("a",{color:"var(--color-prose)",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"},"&:hover, &:focus":{color:"var(--color-prose)",textDecoration:"underline",textDecorationColor:"var(--color-prose-decoration, currentColor)"}}}),Ra=l("a",{alignSelf:"baseline",display:"block",flexShrink:0,height:`calc(${Ct} * ${r.headingLineHeight})`,lineHeight:`calc(${Ct} * ${r.headingLineHeight*1.5})`,padding:"0 0.5rem",zIndex:1,nested:{"& svg":{width:"1em"},[Io]:{paddingLeft:0},[r.print]:{display:"none"}}}),xa=l("div",{flexGrow:1,paddingTop:"0.05556rem",nested:{"& a":{fontWeight:"inherit"}}}),Aa=l("div",{alignItems:"start",display:"flex",padding:"1rem 0 0"}),Lo=({project:{description:e,end:o,repo:n,role:i,title:s,start:a,summary:c}})=>t(Aa,null,t(Ra,{href:n},t(Tt,null)),t(xa,null,t(wa,null,t(Ta,null,t(Ca,{href:n},s)),t(Po,{range:[a,o]})),t(Ea,{role:i,description:e,summary:c??null}))),jo=l("h2",{fontSize:Q(`${r.headingRanges.h3.minEm}em`,`${r.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Bo=l("div",{marginTop:"0.5rem"}),Pa=l("div",{display:"none",nested:{[r.print]:{display:"block",paddingBottom:"0.5em"}}}),Oa=e=>{const{creator:o,contributor:n}=e.projects.reduce((s,a)=>{const c=a.role===v.CREATOR?"creator":"contributor";return{...s,[c]:[...s[c],a]}},{creator:[],contributor:[]}),i=o.length+n.length;return t(D,null,t(ka,null,t("div",null,t(jo,null,"Projects I Created"),t(Bo,null,o.map(s=>t(Lo,{project:s})))),t("div",null,t(jo,null,"Open Source Contributions"),t(Bo,null,n.map(s=>t(Lo,{project:s}))))),t(Pa,null,t("h2",null,"Projects"),i," projects listed at"," ",t("a",{href:"https://eyelidlessness.github.io/projects"},"eyelidlessness.github.io/projects")))},Ma=l(L,{padding:0}),Ee=e=>t(Ma,{as:"section",...e}),Ia=l(L,{nested:{[r.print]:{display:"none",paddingInline:"0.125rem"}}}),$o=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),La=l($o,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),ja=l(La,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",paddingTop:Q("0.5em","3vw","2em"),paddingBottom:Q("0.5em","2vw","1em"),nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"},[r.print]:{paddingTop:0}}}),Ba=l(Ee,{padding:0}),$a=l($o,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),Da=l("a",{...r.resume.contactList.link,display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"0.5ch",fontSize:"0.88889em",fontWeight:400,minWidth:"auto",color:"var(--color-prose)",textDecoration:"none",nested:{"&:hover, &:focus":{color:"var(--color-prose)",fontWeight:400,textDecoration:"underline",textDecorationColor:"var(--color-prose-decoration, currentColor)"}}}),Na=l("span",{nested:{[r.print]:{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),Rt=({children:e,screenLabel:o,printLabel:n,Icon:i,...s})=>t(Da,{...s},i&&t(i,null),t(Na,{"data-print-label":n},t("span",null,o??e))),Do=l("svg",{width:"1rem",height:"1rem",color:"var(--color-prose)",nested:{[r.print]:{display:"none"}}}),Ha=l("path",{fill:"var(--color-prose)"}),_a=()=>t(Do,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},t(Ha,{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"})),Fa=()=>t(Do,{as:Tt}),Ua={GitHub:Fa},No={display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",margin:0,padding:0,nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}},Ya=l(L,{...r.resume.brief,margin:0,padding:"0.5em 0",nested:{...r.resume.brief.nested,"& p, & ul, & li":{margin:0},"& p, & li":{padding:0},"& ul":{padding:"0.25em 0"},"& li":No,"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"},[r.print]:{...r.resume.brief.nested[r.print],padding:0}}}),Ue={screen:"@media screen and (min-width: 40rem)",print:"@media print"},za=l("h2",{fontSize:"1em",marginBottom:0,paddingLeft:0,textIndent:0,nested:{[Ue.screen]:{justifySelf:"end"},[Ue.print]:{justifySelf:"end"}}}),Ga=l("div",{alignItems:"baseline",display:"grid",gap:"0.5em 0",gridTemplateColumns:"auto",gridTemplateRows:"auto",fontSize:"0.88889em",padding:"0.25em 0",nested:{[Ue.screen]:{gridTemplateColumns:"auto 1fr"},[Ue.print]:{gridTemplateColumns:"auto 1fr"},"& ul, & li":{lineHeight:1.5}}}),Wa=l("ul",{display:"block",margin:0,padding:"0 0 0 1rem"}),Xa=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Va=l("svg",{display:"inline-block",margin:"0 0.325rem 0 0",verticalAlign:"middle",nested:{[r.print]:{height:"0.325rem",width:"0.325rem"}}}),Ka=l("circle",{fill:"currentcolor"}),Ye=e=>t(Va,{xmlns:"http://www.w3.org/2000/svg",className:e.className,width:"8",height:"8",viewBox:"0 0 8 8"},t(Ka,{cx:"4",cy:"4",r:"4"}),t("title",null,"Skill level: ",e.level)),qa={[b.BASIC]:l(Ye,{...r.resume.skillLevel[b.BASIC]}),[b.INTERMEDIATE]:l(Ye,{...r.resume.skillLevel[b.INTERMEDIATE]}),[b.ADVANCED]:l(Ye,{...r.resume.skillLevel[b.ADVANCED]}),[b.EXPERT]:l(Ye,{...r.resume.skillLevel[b.EXPERT]})},Ja=l("div",{display:"contents"}),Qa=({name:e,skills:o})=>t(Ja,{itemscope:!0,itemtype:"http://schema.org/ItemList"},t(za,{itemprop:"name"},go(e)),t(Wa,null,o.map(({level:n,name:i})=>{const s=qa[n];return t(Xa,{key:i,itemprop:"itemListElement"},t(s,{level:n}),go`${i}`)}))),Za=l(L,{gap:"0.5em 0"}),el=l("div",{fontSize:"0.94444em"}),tl=l("p",{alignItems:"baseline",display:"grid",gridTemplateColumns:"1.2ch 1fr",fontSize:"0.88889rem",opacity:.8,nested:{"&::before":{content:'"*"',display:"block",width:"2ch"}}}),ol=l("h2",{marginBottom:0}),nl=l(L,{gap:"0.5em 0",nested:{[r.print]:{breakInside:"avoid"}}}),il=l("ul",{display:"grid",fontSize:"0.88889em",gap:"0.5em 0",margin:0,paddingInlineStart:0}),rl=l("li",No),sl=l(Za,{position:"relative",padding:"1em 0",nested:{"&:last-child:after":{display:"none"},"&:nth-of-type(odd)":{...r.resume.employment.itemOdd},"&:nth-of-type(even)":{...r.resume.employment.itemEven},"& strong":{fontWeight:500,nested:{[r.darkMode]:{fontWeight:400}}},[r.print]:{padding:"0.25em 0"}}}),al=l("div",{alignItems:"baseline",display:"grid",columnGap:"0.5rem",gridTemplate:`
    "employer time-range"
    "position position"
  `,justifyContent:"space-between",nested:{[r.print]:{gridTemplate:`
        "employer position time-range"
      `,gridAutoColumns:"1fr auto auto"}}}),ll=l("h3",{gridArea:"employer",marginBottom:0,whiteSpace:"nowrap"}),cl=l(Po,{gridArea:"time-range",nested:{"&.has-marginalia::after":{content:'"*"'}}}),dl=l("div",{fontSize:"0.88889rem",fontWeight:r.deemphasize.fontWeight,gridArea:"position",nested:{[r.print]:{nested:{"&:after":{content:'","'}}}}}),ml=l("p",{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"baseline",gap:"1ch"}),pl=l("span",{fontWeight:500}),ul=l("span",{fontSize:"0.88889rem",opacity:.8}),Ho=e=>{const{subEmployer:o,subRange:n,highlights:i}=e;return t(D,null,(o??n)&&t(ml,null,o&&t(pl,null,o),n&&t(ul,null,n)),t(il,{itemtype:"http://schema.org/ItemList"},i.map(s=>t(rl,{key:s,itemprop:"itemListElement"},fe(s)))))},gl=({employer:e,end:o,highlights:n,position:i,start:s,summary:a,marginalia:c,...m})=>t(sl,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...m},t(al,null,t(ll,{itemprop:"name"},e),t(dl,{itemprop:"roleName"},i),t(cl,{className:c?"has-marginalia":"",range:[s,o]})),a==null?null:t(el,{itemprop:"description"},fe(a)),hi(n)?t(Ho,{highlights:n}):n.map(p=>{const[u,h,...y]=p;return t(nl,null,t(Ho,{subEmployer:u,subRange:h,highlights:y}))}),c&&t(tl,null,c)),hl=l(Ee,{...r.resume.employment.container,padding:"1em 0",nested:{[r.darkMode]:{...r.resume.employment.container.nested[r.darkMode]},[r.print]:{...r.resume.employment.container.nested[r.print],gap:"0.5em 0",padding:"0.25em 0"}}}),fl=({id:e,employment:o})=>t(hl,{id:e},t(ol,null,"Recent Experience"),o.history.map(n=>t(gl,{...n}))),yl=l(Ee,{textAlign:"right",nested:{[r.print]:{display:"none"}}}),bl=l(L,{gap:"0.5em 0",nested:{"& p":{lineHeight:1.325,margin:0}}}),Sl=l(Se,{...r.visiblyHidden}),_o=e=>e.replace(/^https?:\/\/|\/$/g,""),vl=({className:e,id:o,meta:n,resume:i,updated:s})=>{const{contact:{email:a,website:c},employment:m,info:p,name:u,projects:h,skills:y,social:k}=i;return t(bl,{className:e,id:o,itemscope:!0,itemtype:"http://schema.org/Person"},t(Ia,{id:"resume-art-container"},t(Mo,{...n,renderType:"post"})),t(Ba,{id:"resume-header"},t(ja,null,t("h1",{itemprop:"name"},u),t(Sl,{date:s,itemprop:"datePublished",mode:de.META}),t($a,null,t(Rt,{href:`mailto:${a}`,itemprop:"email",screenLabel:a,printLabel:a,Icon:_a},"Email"),c!=null&&t(Rt,{href:c,itemprop:"url",printLabel:_o(c),rel:"me"},"Website"),k.map(({user:S,network:f,url:x})=>t(Rt,{href:x,itemprop:"url",screenLabel:S??f,printLabel:_o(x),Icon:Ua[f],rel:"me"},f)))),t(Ya,{id:"resume-brief",itemprop:"description"},fe(p.brief))),t(Ee,{id:"resume-skillsets","aria-label":"Skillsets"},t(Ga,null,Object.entries(y.merged).map(([S,f])=>t(Qa,{key:S,name:S,skills:f})))),t(fl,{id:"resume-employment",employment:m}),t(Ee,{id:"projects"},t(Oa,{projects:h})),t(Ee,{id:"references"},t("h2",null,"References"),fe("Available upon request, email [gnosis@gmail.com](mailto:gnosis@gmail.com)")),t(yl,{id:"resume-pdf"},t("a",{href:"/Trevor_Schmidt_resume.pdf"},"View as PDF")))};l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),l("a",{...r.resume.contactList.link,textDecoration:"none"});export{be as BLOG_ART_HEIGHT,it as BLOG_BASE_PATH,wt as BlogArt,as as BlogArtDefs,Ls as BlogListing,Ro as BlogMetadataType,la as BlogPost,ce as COORDINATE_MAX,Kt as COORDINATE_MIN,L as FullBleedContainer,ao as FullBleedScrollableOverflow,co as FullBleedSymbolBlock,Gt as Head,Ae as InvalidHashError,dt as MIN_SMOOTHING,Co as Main,Re as PageMetadataType,Xt as RESUME_BASE_PATH,rt as RESUME_PATH,vl as Resume,Mo as ResumeArt,mt as SMOOTHING_RATIO,le as StylesProvider,I as Topic,bo as TopicTag,Ht as __SNOWPACK_ENV__,ie as asserted,kt as blogArtDefaultParameters,Q as clamp,yt as cubicBezierPoints,ca as getBlogPostStaticProps,ht as getNaiveSegments,ft as getNonPhallicSegments,Vt as getPageMetadata,sr as hexChars,qe as identifier,fe as mdx,ne as renderer,$n as resetAbbrContext,vi as resume,gt as scalePoint,ct as sortBy,l as styled,r as theme,xe as toFixed,pt as toHexPointSequence,ut as toPointSequence};
