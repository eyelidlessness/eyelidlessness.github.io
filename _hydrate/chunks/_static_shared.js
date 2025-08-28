import Ke from"unist-util-visit";import{h as t,Fragment as N,toChildArray as Pt}from"https://cdn.skypack.dev/preact@10.5.10";import Fo from"@mdx-js/mdx";import{mdx as Le,MDXProvider as Uo}from"@mdx-js/preact";import{isobject as Yo,createComponent as zo,RendererProvider as Go,Readonly as Wo,Object$1 as Xo,Optional as g,Unknown as Vo,Literal as Ko,String as m,Partial as oe,Union as qe,Boolean as Ot,Array$1 as I,Integer as qo,Number$1 as Jo,emojiRegex as Qo,h as It,rehypeAccessibleEmojis as Zo,remarkSlug as en,remarkSmartypants_1 as tn}from"./_vendor/index.js";import{transform as on}from"buble-jsx-only";import nn from"dedent";import Mt from"module";import rn from"remark-mdx";import sn from"remark-mdx-to-plain-text";import le from"path";import{loadTheme as Lt,getHighlighter as jt}from"shiki";import{BUNDLED_LANGUAGES as an}from"shiki-languages";import{renderers as ln}from"shiki-twoslash";import Je from"fs";import cn from"node-object-hash";import"fela-tools";import"sharp";import dn from"child_process";import mn from"crypto";import{Head as Bt,seo as je}from"microsite/head";import{createRenderer as pn}from"fela";import{processStyleWithPlugins as un,KEYFRAME_TYPE as Dt,isNestedSelector as gn,normalizeNestedProperty as hn,isMediaQuery as fn,generateCombinedMediaQuery as $t,isSupport as bn,generateDeclarationReference as yn,isUndefinedValue as Sn,generateCSSSelector as vn,RULE_TYPE as En}from"fela-utils";import{cssifyDeclaration as kn,cssifyObject as wn}from"css-in-js-utils";import Ht from"md5";let Qe=new Set;const Cn=()=>{Qe=new Set},Tn=()=>e=>{Ke(e,"abbr",o=>{const{abbr:n}=o;Qe.has(n)&&(delete o.abbr,delete o.children,delete o.data,delete o.reference,Object.assign(o,{type:"text",value:n})),Qe.add(n)}),Ke(e,"text",o=>{o.value.includes("\u200B")&&Object.assign(o,{value:o.value.replace(/\u200b/gu,"")})})},Nt="production",Rn="production",xn=!0;var Ze=Object.freeze({__proto__:null,MODE:Nt,NODE_ENV:Rn,SSR:xn});const An=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),C=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((n,[i,r])=>typeof r=="object"&&(i==="nested"||i.includes("&"))?n:`${n}${An(i)}:${r};`,""),"}",Object.entries(o).map(([n,i])=>{if(typeof i=="object"){if(n==="nested")return Object.entries(i).map(([r,a])=>{const c=e.map(d=>r.replace(/&/g,d));return C(c,a)}).join("");if(n.includes("&")){const r=e.map(a=>n.replace(/&/g,a));return C(r,i)}}return""},[]).join("")].join(""),ne=(...e)=>`clamp(${e.join(",")})`,he=e=>e.replace(/\s+/g," ").trim(),Be=e=>e;function Re(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function Pn(e,o,n,i,r,a){const c=[];return r&&c.push(Re(r).slice(0,16)),i&&c.push(Re(i).slice(0,16)),n&&c.push(Re(n).slice(0,16)),c.push(Re(e).slice(0,16)),c.push(Re(o).slice(0,16)),c.push(a.slice(0,8)),c.join("_")}function On(e,o,n=[""]){let i="";for(const a in e){const c=e[a];i=`${i}${a}{${wn(c)}}`}let r="";for(let a=0;a<n.length;a++){const c=n[a];r=`${r}@${c}keyframes ${o}{${i}}`}return r}function In(){return e=>(e.renderKeyframe=(o,n)=>{const i=o(n,e),r=un(e,i,Dt,n),a=JSON.stringify(r);if(!e.cache.hasOwnProperty(a)){const c=Ht(a),d=(e.selectorPrefix||"_")+c.slice(0,8),p=On(r,d,e.keyframePrefixes),u={type:Dt,keyframe:p,name:d};e.cache[a]=u,e._emitChange(u)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...n},i="",r="",a="")=>{let c=o?` ${o}`:"";for(const d in n){const p=n[d];if(Yo(p))if(gn(d))c+=e._renderStyleToClassNames(p,i+hn(d),r,a);else if(fn(d)){const u=$t(r,d.slice(6).trim());c+=e._renderStyleToClassNames(p,i,u,a)}else if(bn(d)){const u=$t(a,d.slice(9).trim());c+=e._renderStyleToClassNames(p,i,r,u)}else console.warn(`The object key "${d}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const u=yn(d,p,i,r,a);if(!e.cache.hasOwnProperty(u)){if(Sn(p)){e.cache[u]={className:""};continue}const f=kn(d,p),E=Ht(u),S=e.devMode?Pn(d,p,i,r,a,E):(e.selectorPrefix||"_")+E.slice(0,8),h=vn(S,i),x={type:En,className:S,selector:h,declaration:f,pseudo:i,media:r,support:a};e.cache[u]=x,e._emitChange(x)}const b=e.cache[u].className;b&&(c+=` ${b}`)}}return c},e)}import.meta.env=Ze;const De=Mt.createRequire(import.meta.url),{default:Mn}=De("fela-identifier"),{default:Ln}=De("fela-plugin-embedded"),{default:jn}=De("fela-plugin-multiple-selectors"),{default:Bn}=De("fela-plugin-typescript"),Dn=Nt==="development",$n=()=>{const e=Mn(),o=pn({devMode:Dn,enhancers:[In(),e],plugins:[Ln(),jn(),Bn()]});return{identifier:e,renderer:o}},{identifier:et,renderer:ie}=$n(),Hn=e=>Array.isArray(e)?e:[e],Nn=e=>({children:o})=>t(Go,{renderer:e},...Hn(o)),ce=Nn(ie),_n=e=>ie.renderRule(Be,e),$e=Object.assign(_n,{global:ie.renderStatic.bind(ie)}),l=(e,o)=>{const n=typeof o=="function"?o:()=>o;return zo(n,e,Object.keys)},L=(e,o)=>Wo(Xo(e,o)),z=()=>g(Vo()),_t="FRESH@0.1.0",Fn=L({format:Ko(_t,{description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:g(m({description:"The semantic version number for this resume."}))},{description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools."}),Un=oe(L({label:m({description:"A label for this resume, such as 'Full-Stack Developer'."}),class:m({description:"Profession type or 'character class'."}),image:m({description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:m({description:"A short description or summary of yourself as a candidate."}),quote:m({description:"Candidate quote or byline."})},{description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote."})),Yn=oe(L({willing:qe([Ot(),m()],{description:"Willingness to relocate."}),destinations:I(m({description:"City or area of relocation."}),{description:"Preferred destinations for relocation"})})),zn=oe(L({travel:qo({description:"Percentage of time willing to travel (0 to 100)."}),authorization:m({description:"Work authorization: citizen, work visa, etc."}),commitment:I(m({description:"One of: contract, permanent, part-time, seasonal, full-time."}),{description:"Types of work commitment desired: contract, perm, seasonal, etc."}),remote:Ot({description:"Open to remote employment opportunities."}),relocation:Yn},{description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like."})),Gn=I(oe(L({label:m({description:"A label for this contact information."}),category:m({description:"Type of contact information: email, phone, url, postal, or IM."}),value:m({description:"Phone number, email address, website, etc."})}))),Wn=oe(L({email:m({description:"Primary contact email.",format:"email"}),phone:m({description:"Primary phone number."}),website:m({description:"Website, blog, or home page.",format:"uri"}),other:Gn},{description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types."})),Xn=oe(L({address:m({description:"Your full postal address."}),code:m({description:"Postal or other official routing code."}),city:m({description:"Your home city."}),country:m({description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:m({description:"Your state, region, or province."})},{description:"The 'location' section, when present, contains the candidate's location and address info."})),Vn=I(L({employer:m({description:"Employer name."}),position:g(m({description:"Your position or formal job title."})),url:g(m({description:"Employer website.",format:"uri"})),start:g(m({description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),summary:g(m({description:"A summary of your achievements and responsibilities under this employer."})),marginalia:g(m()),highlights:g(I(qe([m(),I(m())]))),location:g(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(I(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this position."}))})),Kn=oe(L({summary:m({description:"Summary of overall employment."}),history:Vn},{description:"The 'employment' section describes the candidate's formal employment history."})),qn=I(L({category:m({description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:g(m({type:"string",description:"Friendly media name."})),url:g(m({type:"string",description:"Media link, path, or location."}))}),{description:"Media associated with this project."}),Jn=I(L({title:m({description:"Project name or code-name."}),category:g(m({description:"Project type: open-source, private, side project, etc."})),description:g(m({description:"Project description or summary."})),summary:g(m({description:"A summary of your achievements and responsibilities on the project."})),role:g(m({description:"Your role on the project: Contributor, Creator, etc."})),url:g(m({description:"Project URL.",format:"uri"})),media:g(qn),repo:g(m({description:"Repo URL.",format:"uri"})),start:g(m({description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),highlights:g(I(m({description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."}),{description:"Noteworthy project-related achievements and/or highlights."})),location:g(m({description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."})),keywords:g(I(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this project."}))}),{description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid."}),Qn=oe(L({sets:I(L({name:m({description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:g(m({description:"Level of mastery of the skill."})),skills:I(m({description:"Title or ID of a skill from the skills list."}))})),list:I(L({name:m({description:"The name or title of the skill."}),level:g(m({description:"A freeform description of your level of mastery with the skill."})),summary:g(m({description:"A short summary of your experience with this skill."})),years:g(qe([m(),Jo()],{description:"Number of years you've used the skill."}))}))},{description:"A description of the candidate's formal skills and capabilities."})),Zn=I(L({title:g(m({description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."})),institution:m({description:"College or school name."}),area:g(m({description:"e.g. Arts"})),studyType:g(m({description:"e.g. Bachelor"})),start:g(m({description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),end:g(m({description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"})),grade:g(m({description:"Grade or GPA."})),curriculum:g(I(m({description:"The course name and number or other identifying info."}),{description:"Notable courses, subjects, and educational experiences."})),url:g(m({description:"Website or URL of the institution or school.",format:"uri"})),summary:g(m({description:"A short summary of this education experience."})),keywords:g(I(m({description:"For example, C++, HTML, HIPAA, etc."}),{description:"Keywords associated with this education stint."})),highlights:g(I(m({description:"For ex, 'Graduated *summa cum laude*'."}),{description:"Noteworthy achievements and/or highlights."})),location:g(m({description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."}))})),ei=L({summary:g(m({description:"Summary of overall education."})),level:m({description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:g(m({description:"Your degree, if any (BSCS, BA, etc.)."})),history:g(Zn)},{description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses."}),ti=I(L({network:m({description:"The name of the social network, such as Facebook or GitHub."}),user:m({description:"Your username or handle on the social network."}),url:m({description:"URL of your profile page on this network.",format:"uri"}),label:g(m({description:"A friendly label."}))}),{description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like."}),Nl=L({name:m({description:"The candidate's name as it should appear on the resume."}),meta:Fn,info:g(Un),disposition:g(zn),contact:g(Wn),location:g(Xn),employment:g(Kn),projects:g(Jn),skills:g(Qn),education:g(ei),social:g(ti),services:z(),recognition:z(),writing:z(),reading:z(),speaking:z(),governance:z(),languages:z(),samples:z(),references:z(),testimonials:z(),interests:z(),extracurricular:z(),affiliation:z()},{title:"FRESH Resume Schema"});var k;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(k||(k={}));var v;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator",e.DEVELOPER="Developer"})(v||(v={}));const oi=Date.now(),He=e=>e==null?oi:new Date(e).getTime(),ni=e=>e.slice().sort((o,n)=>{const i=He(o.end),r=He(n.end);if(i>r)return-1;if(r>i)return 1;const a=He(o.start),c=He(n.start);return a>c?-1:c>a?1:0}),ii=e=>ni(e),ri=ii([{title:"@getodk/xforms-engine",category:k.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/benwbooth/quick-clojure",role:v.CONTRIBUTOR,start:"2015-01",end:"2015-01"}]),si=e=>e,ai=e=>typeof e[0]=="string",li=e=>e,ci=li([{employer:"ODK",position:"Senior Software Engineer",start:"2021-03",end:"2025-04",summary:`
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
      `]}]),di=ci;var y;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(y||(y={}));var fe;(function(e){e.EXPERTISE="Expertise",e.LANGUAGES_PLATFORMS="Languages",e.SERVICES_DISTRIBUTED_SYSTEMS="Services",e.WEB_UI_UX="Web UI & UX",e.DOMAIN_SPECIFIC_LANGUAGES="DSL\u200Bs",e.NICHE_ESOTERIC="Niche/Esoteric"})(fe||(fe={}));const tt={[fe.EXPERTISE]:[{name:"Domain-driven design & architecture",level:y.EXPERT},{name:"Technical vision, direction & execution",level:y.EXPERT},{name:"Web apps & services",level:y.ADVANCED},{name:"Performance",level:y.ADVANCED}],[fe.WEB_UI_UX]:[{name:"React (+ Preact & similar)",level:y.EXPERT},{name:"Reactivity (framework-agnostic)",level:y.EXPERT},{name:"\u201CVanilla\u201D JS",level:y.EXPERT},{name:"Vue",level:y.INTERMEDIATE}],[fe.LANGUAGES_PLATFORMS]:[{name:"TypeScript/JavaScript",level:y.EXPERT},{name:"CSS",level:y.EXPERT},{name:"HTML",level:y.EXPERT},{name:"SQL",level:y.ADVANCED},{name:"Python",level:y.INTERMEDIATE},{name:"Swift",level:y.BASIC},{name:"Java",level:y.BASIC}],[fe.NICHE_ESOTERIC]:[{name:"ODK XForms & XPath",level:y.EXPERT},{name:"Clojure",level:y.ADVANCED},{name:"SolidJS",level:y.ADVANCED},{name:"DSL\u200Bs (parsers, semantics & runtime)",level:y.ADVANCED}]},mi={list:Object.values(tt).flatMap(Be),merged:tt,sets:Object.entries(tt).map(([e,o])=>({name:e,skills:o.map(({name:n})=>n)}))},pi=si({name:"Trevor Schmidt",meta:{format:_t,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:void 0},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:di},info:{class:"Software Engineer",brief:`
Senior software engineer with a proven record of technical leadership and achievement, across a wide range of problems and disciplines:

- driving projects from conception to successful adoption and sustainable growth
- acquiring and applying deep domain/subject matter expertise
- fostering an engineering culture of velocity, quality, and continuous improvement of both
- reducing and overcoming risk, to grow and deliver on new project/business opportunities
    `.trim(),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:ri,skills:mi,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),Ne=Symbol("DEFAULT_TOPIC"),M={[Ne]:Ne,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},ui=e=>typeof e=="string"||typeof e=="symbol",Ft=e=>ui(e)&&e in M,ot=e=>Ft(e)?M[e]:e,Ut=Object.entries(M).reduce((e,o)=>{const[n,i]=o;return typeof n=="string"?{...e,[i]:n}:e},{}),gi=e=>Ft(e)?e:Ut[e],hi=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),fi=Object.fromEntries(Object.entries(Ut).map(([e,o])=>typeof o=="string"?[e,hi(o)]:null).filter(e=>e!=null)),bi=e=>{const o=ot(e);if(typeof o=="string")return fi[o]},_e=2,nt={minEm:1.0625,fluidVw:1.0625*_e,maxEm:1.25},w="@media (prefers-color-scheme: dark)",Fe="@media print",yi=["h1","h2","h3","h4","h5","h6"],Si=["dd","dl","dt","li","ol","ul"],vi=[...yi,...Si,"p"],be=nt.minEm/nt.maxEm,Q={h1:1.953,h2:1.563,h3:1.25},Ei={h1:{minEm:Q.h1*be,fluidVw:Q.h1*be*_e,maxEm:Q.h1},h2:{minEm:Q.h2*be,fluidVw:Q.h2*be*_e,maxEm:Q.h2},h3:{minEm:Q.h3*be,fluidVw:Q.h3*be*_e,maxEm:Q.h3}},Yt=75,Ue=1.25,ki=["0.7fr",`${Ue}rem`,[`${Yt}ch`,`calc(100% - ${Ue*2}rem)`],`${Ue}rem`,"1.2fr"],it=1,wi=["0.7fr",`${it}rem`,[`${Yt*1.1875}ch`,`calc(100% - ${it*2}rem)`],`${it}rem`,"1.2fr"],Ci=["ui-monospace","Menlo","Monaco","Cascadia Mono","Segoe UI Mono","Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Fira Mono","Droid Sans Mono","Courier New","monospace"],rt=Ci.join(", "),Ti=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Ri=Ti.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),F={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},xi="hover-inherit-topic-color",Ai={[M[Ne]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.DEFAULT_TOPIC.light},[w]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.DEFAULT_TOPIC.dark}}}}},[M.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.ABLEISM}}},[M.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.ARTS_CRAFTS}}},[M.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.LEMON}}},[M.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.MENTAL_ILLNESS}}},[M.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.NEURODIVERGENCE}}},[M.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.PHILOSOPHY}}},[M.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.POLITICS}}},[M.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.RACISM}}},[M.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.SEXISM}}},[M.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.SUBSTANCE_ABUSE}}},[M.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.TECHNOLOGY}}},[M.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:F.TRANSPHOBIA}}}},zt=et(),s={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:xi,baseFontSizeRange:nt,darkMode:w,print:Fe,abbreviation:{"--abbreviation-highlight":"hsl(64deg 100% 50% / 0.25)",backgroundImage:`linear-gradient(${["to top","var(--abbreviation-highlight)","var(--abbreviation-highlight) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[w]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[w]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:zt,description:{color:"hsl(212deg, 10%, 15%)",fontSize:"0.9375em",nested:{[w]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${zt}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[w]:{color:"hsl(212deg, 10%, 90%)"}}},[w]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[w]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[w]:{backgroundColor:"hsl(130deg,21%,14%)",color:"#f1f3f2",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:rt},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:rt,nested:{[w]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 50%, 25%)",fontSize:"0.9375em",fontWeight:300},emphasize:{color:"#000"},firstLastMarginZeroElements:vi,gitHubLogo:{fill:"#171515",nested:{[w]:{fill:"#fff"}}},headingLineHeight:.9375,headingRanges:Ei,[w]:{abbreviation:{"--abbreviation-highlight":"hsl(336deg 85% 25%)"},aside:{backgroundColor:"hsl(192deg, 55%, 11%)",nested:{"& a":{color:"hsla(205deg, 100%, 90%, 90%)",textDecorationColor:"hsla(205deg, 100%, 78%, 120%)"}}},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg 60% 4%)"},deemphasize:{color:"hsl(202deg, 20%, 95%)",fontWeight:200},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(195deg, 90%, 68%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 100%, 78%)",textDecorationColor:"hsla(205deg, 100%, 78%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{"--color-prose":"hsl(190deg 20% 97%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"oklch(0.71 0.16 355.75)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:ki,mainGridSidePaddingRem:Ue,monospaceFont:rt,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[w]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{"--color-prose":"hsl(210deg 12% 5% / 95%)",color:"var(--color-prose)",fontFamily:Ri},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[w]:{backgroundColor:"hsl(336deg, 100%, 7%)"},[Fe]:{backgroundColor:"transparent"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[w]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"#fffff1",nested:{[w]:{backgroundColor:"hsl(41deg, 100%, 8%)"},[Fe]:{backgroundColor:"transparent",padding:0}}},itemOdd:{backgroundColor:"transparent"},itemEven:{backgroundColor:"oklch(0.99 0.03 100.56)",nested:{[w]:{backgroundColor:"oklch(0.26 0.06 71.28)"},[Fe]:{backgroundColor:"transparent"}}}},skillLevel:{[y.BASIC]:{color:"hsl(207deg, 25%, 83%)",nested:{[w]:{color:"hsl(207deg, 15%, 43%)"}}},[y.INTERMEDIATE]:{color:"hsl(188deg, 53%, 74%)",nested:{[w]:{color:"hsl(188deg, 53%, 34%)"}}},[y.ADVANCED]:{color:"hsl(188deg, 70%, 59%)",nested:{[w]:{color:"hsl(188deg, 80%, 39%)"}}},[y.EXPERT]:{color:"hsl(152deg, 100%, 39%)",nested:{[w]:{color:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:wi,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[w]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[w]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:Ai,topicTagIdentifier:et(),topicTagInner:{backgroundImage:he(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[w]:{backgroundImage:he(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:he(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[w]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:he(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visiblyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[w]:{color:"hsl(194deg, 8%, 50%)"}}}}}},st=["b","em","h1","h2","h3","i","strong"],Ye=["h1","h2","h3","h4","h5","h6"],Pi=[...Ye,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Oi=Array.from(new Set([...Ye,...Pi,"div","fieldset","form","hgroup","hr","pre"])),Ii=he(`
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
    font-size:        ${ne(`${s.baseFontSizeRange.minEm}em`,`${s.baseFontSizeRange.fluidVw}vw`,`${s.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${C(["html","body"],{...s.document})}

  ${C(["body"],{...s.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${Ye.join(",")} {
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
`),Mi=()=>{$e.global(he(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${Oi.join(",")} {
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

      ${C(st,s.emphasize)}

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

      ${s.darkMode} {
        ${C(["html","body"],{...s[s.darkMode].document})}

        ${C(["body"],{...s[s.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${C(st,s[s.darkMode].emphasize)}
        ${C(["abbr"],s[s.darkMode].abbreviation)}
        ${C(["pre"],s[s.darkMode].pre)}
        ${C(["code"],s[s.darkMode].code)}
        ${C(["a"],s[s.darkMode].links)}
        ${C(["aside","small"],s[s.darkMode].deemphasize)}
        ${C(["aside"],s[s.darkMode].aside)}
        ${C(["hr:after"],s[s.darkMode].separator)}
      }

      ${s.print} {
        @page {
          margin: 0.325in;
        }

        ${C(["a","a:hover","code"],{color:"inherit",fontWeight:"inherit",textDecorationColor:"currentcolor"})}

        ${C(["abbr"],{backgroundImage:"none"})}

        ${C(["code"],{backgroundColor:"transparent",borderRadius:0,display:"inline-flex",lineHeight:"inherit",padding:0})}
      }
    `))},Li=`
  ${s.mainGridColumns[0]}
  ${s.mainGridColumns[1]}
  min(
    ${s.mainGridColumns[2][0]},
    ${s.mainGridColumns[2][1]}
  )
  ${s.mainGridColumns[3]}
  ${s.mainGridColumns[4]}
`.replace(/\s+/g," "),Gt={gridColumn:"1 / -1"},Wt=$e(Gt),j=l("div",{nested:{[`& > .${Wt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0},[s.print]:{gridTemplateColumns:"0 0 auto 0 0"}},display:"grid",gridTemplateColumns:Li,...Gt}),ji=({children:e,shadow:o,...n})=>t(j,{...n},e),Xt=([e,o,n])=>`rgba(${[e,o,n,0].join(",")})`,Vt=["12rem 100%","auto"],Kt=Vt.join(", "),Bi=Vt.map(e=>e.replace("100%","100.1%")).join(", "),Di=ie.renderKeyframe(()=>({"0%":{backgroundSize:Kt},"100%":{backgroundSize:Bi}}),{}),qt="5px",Jt=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`rgba(${o.join(",")}) calc(11rem + ${qt})`,`${Xt(o)} 12rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${Xt(e)} ${qt}`].join(", ")})`].join(", ")}:null,$i=e=>{if(e!=null){const{darkMask:o,darkScroll:n,lightMask:i,lightScroll:r}=e;return{dark:Jt(n,o),light:Jt(r,i)}}return{dark:null,light:null}},Qt=l(ji,({shadow:e})=>{const{dark:o,light:n}=$i(e),i=o==null?null:{[s.darkMode]:o};return{...n,backgroundAttachment:"local, scroll",backgroundPosition:"calc(100% + 11rem) 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:Kt,paddingRight:s.mainGridSidePaddingRem,overflowX:"auto",nested:{...i,"& > *":{gridColumn:"3 / -1"},"@media not all and (min-resolution: .001dpcm)":{nested:{"@supports (-webkit-appearance: none)":{animationName:Di,animationDuration:"1000s",animationIterationCount:"infinite"}}},"@media (hover: hover)":{animationPlayState:"paused",nested:{"&:active, &:focus, &:hover":{animationPlayState:"running"}}}}}}),Hi=l(j,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Zt=l("div",{paddingLeft:"1rem"}),Ni=l("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),_i=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),at="div",Fi={ContentContainer:at,InnerContainer:Zt,OuterContainer:at,SymbolContainer:at},eo=e=>{const{children:o,ContentContainer:n,InnerContainer:i,OuterContainer:r,outerContainerProps:a,symbol:c,SymbolContainer:d}={...Fi,...e};return t(Hi,{as:r,...a},t(Ni,{as:d,role:"presentation"},c),t(Zt,{as:i},t(_i,{as:n},o)))},Ui=l("pre",{fontSize:"1rem"}),Yi=l(Qt,{maxHeight:"min(42.25rem, 80vh)",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[s.darkMode]:{}}}),zi=e=>t(Yi,{shadow:{darkMask:[0,0,0,1],darkScroll:[0,164,255,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]},...e}),Gi=l(j,{...s.pre,nested:{[s.darkMode]:{...s[s.darkMode].pre},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),Wi=l("div",{...s.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Xi=({children:e})=>t(eo,{ContentContainer:Ui,InnerContainer:zi,OuterContainer:Gi,symbol:"{",SymbolContainer:Wi},e),Vi=e=>e.map((o,n)=>n),lt=(e,o)=>Vi(e).sort((n,i)=>{const r=o(e[n],e[i]);return r===0?n===i?0:n>i?1:-1:r}).map(n=>e[n]),Ki=e=>typeof e=="object"&&e!=null,qi=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),Ji=(e,o)=>Ki(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&Qo().test(o),Qi=({["aria-label"]:e,children:o,role:n})=>t(qi,{"aria-label":e,role:n},o),Zi={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},er={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",ODK:"Open Data Kit (https://getodk.org/)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},tr={...Zi,...er},to=le.resolve(process.cwd(),"./syntax-themes"),[or,nr]=await Promise.all([Lt(le.resolve(to,"./yi-dark.json")),Lt(le.resolve(to,"./yi-light.json"))]),ir={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},rr={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},sr=e=>e.trim().split(/\b\W*\b/).reduce((o,n)=>({...o,...rr[n]}),{}),ar=e=>Object.entries(e).reduce((o,[n,i])=>{const r=ir[n];if(i==null||typeof r!="string")return o;const a=r==="fontStyle"?sr(i):{[r]:i};return{...o,...a}},{}),[lr,cr]=await Promise.all([jt({theme:or}),jt({theme:nr})]),dr=new Set(an.map(e=>e.id)),mr=new Set(["ts","tsx","typescript"]),oo=e=>e.explanation?.reduce((o,n)=>({...o,...n.scopes.reduce((i,{themeMatches:r})=>({...i,...r.reduce((a,{settings:c})=>({...a,...ar(c)}),i)}),o)}),{color:e.color}),pr=(e,o,n={})=>{const i=oo(e),r=oo(o),a=r==null?null:{nested:{[s.darkMode]:r}},{content:c}=e;if(i==null&&a==null)return t("span",n,c);const d={...i,...a},p=l("span",d);return t(p,n,c)},ur=$e({paddingRight:"1rem"}),gr={className:ur},hr=(e,o)=>It(t(ce,{},t("pre",{},t("code",{},...e.reduce((n,i,r)=>{const a=i.map((d,p)=>{const u=o[r][p],b=p===i.length-1?gr:{};return pr(d,u,b)}),c=r===0?"":`
`;return[...n,c,...a]},[]))))),fr=e=>{const{lang:o,value:n,meta:i}=e,r=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,a=String(o)==="json5"?"json":o;let c;const d=n.replace(/^\n+|\n+$/g,"");if(!dr.has(a))c=ln.plainTextRenderer(d,{});else{const p=cr.codeToThemedTokens(d,a),u=lr.codeToThemedTokens(d,a);c=hr(p,u)}mr.has(a)&&!i?.includes("ignore"),e.children=[],e.type="html",e.value=c},br=()=>o=>{Ke(o,"code",fr)};import.meta.env=Ze;const xe=Mt.createRequire(import.meta.url),yr=xe("rehype-parse"),Sr=xe("rehype-remark"),vr=xe("remark"),Er=xe("remark-abbr"),kr=xe("remark-stringify"),wr=({className:e,children:o,...n})=>e==="language-id"?null:e==="code-container"?Le(N,n,...Pt(o)):t("div",{className:e,...n},...Pt(o)),Cr=({children:e,...o})=>Ji(o,e)?t(Qi,o,e):t("span",o,e),ct={components:{div:wr,pre:Xi,span:Cr},rehypePlugins:[Zo],remarkPlugins:[br,Er,Tn,en,tn]},no=e=>{const{children:o=Le(()=>null,{}),components:n={},rehypePlugins:i=[],remarkPlugins:r=[]}=e,a={...ct.components,...n},c={mdx:Le,MDXProvider:Uo,components:a,props:{}},d=typeof o=="string"?nn(o).trim():o,p=[...ct.rehypePlugins,...i],u=[...ct.remarkPlugins,...r],b=Fo.sync(d,{rehypePlugins:p,remarkPlugins:u,skipExport:!0}).trim(),{code:f}=on(b,{objectAssign:"Object.assign"}),E=Object.keys(c),S=Object.values(c),h=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...E,`${f}

${h}`)(Le,...S)},Tr=Object.entries(tr).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),Rr=e=>[e,Tr].join(`

`),dt=([e,...o],{includeAbbreviations:n=!0})=>{const i=typeof e=="string"?[e,...o].join(""):String.raw(e,...o);return n?Rr(i):i},ye=(...e)=>{const o=dt(e,{includeAbbreviations:!0});return t(ce,{},t(no,{},o))},io=(...e)=>{const o=dt(e,{includeAbbreviations:!0});return t(ce,{},t(no,{components:{p:N}},o))},xr=(...e)=>{const o=dt(e,{includeAbbreviations:!1});return vr().use(yr).use(Sr).use(kr).use(rn).use(sn).processSync(o).contents.toString().trim()},Ae=(e,o)=>Number(e.toFixed(o)),de=parseInt("ff",16),ro=parseInt("00",16),so=.05,mt=.15,pt=.05;class Pe extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const Ar=/^[0-9a-f]{40}$/i,Pr=e=>Ar.test(e),Or=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),Ir=e=>e.length===10,Mr=/([0-9a-f]{2})([0-9a-f]{2})/ig,ut=e=>{if(!Pr(e))throw new Pe(e);const n=Array.from(e.matchAll(Mr)??[]).map(([i,r,a])=>({x:r,y:a}));if(!Ir(n))throw new Pe(e);return n},Lr=Symbol("IS_POINT"),jr=e=>Object.assign(e,{[Lr]:!0}),ao=e=>{const o=parseInt(e,16);if(o>de||o<ro)throw new Error(`Not a valid coordinate: ${e}`);return jr(o)},Br=({x:e,y:o})=>({x:ao(e),y:ao(o)}),Dr=e=>e.length===10,gt=(e,o)=>{try{const n=o.map(Br);if(!Dr(n))throw new Pe(e);return n}catch{throw new Pe(e)}},$r=Symbol("SCALED_COORDINATE"),lo=e=>e.reduce(({max:o,min:n},{y:i})=>({max:Math.max(Number(o),Number(i)),min:Math.min(Number(n),Number(i))}),{max:-Infinity,min:Infinity}),W=(e,o)=>Object.assign(Ae(e,2),{[$r]:o}),Se=({x:e,xScale:o,y:n,yScale:i})=>({x:W(e,o),y:W(n,i)}),ht=({x:e,y:o},{xScale:n,xShift:i,yScale:r,yShift:a})=>Se({x:(e+i)*n,xScale:n,y:(o+a)*r,yScale:r}),ft=({points:e,xMax:o,xScale:n,yScale:i})=>[Se({x:0,xScale:n,y:0,yScale:i}),...e,Se({x:o,xScale:n,y:0,yScale:i})].reduce((r,a,c,d)=>{if(c===0||c===d.length-1)return r;const p=W(0,i),u=[{x:d[c-1].x,y:p},a,{x:d[c+1].x,y:p}];return[...r,u]},[]),bt=({segments:e,xMax:o,xScale:n,yScale:i})=>e.map(r=>{const[{x:a,y:c},{x:d,y:p},{x:u,y:b}]=r,f=u-a,E=p/f,h=6/E;if(h<1){const A=h*.2*a,T=a-A,_=u+A,B=T<0?Math.abs(T):_>o?o-_:0,R=T+B,P=_+B,D=h*.3,H=d+B,U=D*p,V=p-U;return[Se({x:R,xScale:n,y:c,yScale:i}),Se({x:H,xScale:n,y:V,yScale:i}),Se({x:P,xScale:n,y:b,yScale:i})]}return r}),Hr=({x:e,y:o},{x:n,y:i})=>{const r=n-e,a=i-o;return{angle:Math.atan2(a,r),length:Math.sqrt(r**2+a**2)}},co=({current:e,previous:o,next:n,reverse:i,smoothing:r,xScale:a,yScale:c})=>{const d=i?Math.PI:0,p=Hr(o,n),u=p.angle+d,b=p.length*r,{x:f,y:E}=e,S=f+Math.cos(u)*b,h=E+Math.sin(u)*b;return{x:W(S,a),y:W(h,c)}},yt=({index:e,point:o,points:n,smoothing:i,xScale:r,yScale:a})=>{const c=n[e-1];if(c==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const d=n[e-2]??c,p=co({current:c,previous:d,next:o,reverse:!1,smoothing:i,xScale:r,yScale:a}),u=c,b=n[e+1]??o,f=co({current:o,previous:u,next:b,reverse:!0,smoothing:i,xScale:r,yScale:a});return[p,f,o]},mo=({segment:e,smoothing:o,xScale:n,yScale:i})=>e.reduce((r,a,c)=>{if(c===0)return r;const p=yt({index:c,point:a,points:e,smoothing:o,xScale:n,yScale:i}).map(u=>`${u.x},${u.y}`).join(" ");return[...r,`C ${p}`]},[]),Nr=({baseYCoordinate:e,isBaselineBelowMidpoint:o,segments:n,xScale:i,yMax:r,yScale:a,yTilt:c=!1})=>n.reduce((d,p,u,b)=>{const{length:f}=b,[E,S,h]=p,{x,y:A}=E,{x:T,y:_}=S,{x:B,y:R}=h,P=B-x,D=P===0?0:Math.max(_/P*pt,mt),H=c?.1:0,U=1-H,V=1+H,ee=u%2==0?U:V,re=o?A+e:r-A+e,J={x,y:W(re*ee,a)},K=u%2==0?U:V,Y=o?R+e:r-R+e,$={x:W(B,i),y:W(Y*K,a)},G=T-x,X=B-T,se=X>G?0:0-(T-x)*so,q=(f-u)*(a/100*r),ae={x:W(T+se,i),y:W(_-q,a)},O=mo({segment:[J,ae,$],smoothing:D,xScale:i,yScale:a}),te=X>G?(B-T)*so:0,At={x:W(T+te,i),y:W(r-q,a)},_o=mo({segment:[$,At,J],smoothing:D,xScale:i,yScale:a});return[...d,[`M ${J.x},${J.y}`,...O,..._o,"Z"].join(" ")]},[]),_r=({hash:e,xPadding:o=0,xScale:n=1,yOffset:i=.5,yPadding:r=0,yScale:a=1})=>{const c=ut(e),d=gt(e,c),p=lt(d,({x:R},{x:P})=>Number(R)===Number(P)?0:Number(R)>Number(P)?1:-1),u=o/2,b=r/2,f=p.map(R=>ht(R,{xScale:n,xShift:u,yScale:a,yShift:b})),E=(de+o)*n,{max:S}=lo(f),h=(S+r)*a,x=ft({points:f,xMax:E,xScale:n,yScale:a}),A=bt({segments:x,xMax:E,xScale:n,yScale:a}),T=i>.5,_=T?h*i:-1*h*i;return{segmentPaths:Nr({baseYCoordinate:_,segments:A,xScale:n,yMax:h,isBaselineBelowMidpoint:T,yScale:a}),xMax:E,yMax:h}};var St;(function(e){e.PNG="png"})(St||(St={}));const vt=process.cwd(),Oe=e=>e.startsWith("/")?le.resolve(vt,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):le.extname(e)==""?le.resolve(vt,"./src/pages/",`${e}.tsx`):e;var ve;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(ve||(ve={}));var me;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(me||(me={}));const Fr="origin",Ur="main",Ie=e=>{const{branch:o=Ur,decode:n,filter:i=ve.FIRST,format:r,path:a=vt,remote:c=Fr}=e,{error:d,stdout:p}=dn.spawnSync("git",["log",...i.split(" "),`--branches=${o}`,`--format=${r}`,`--remotes=${c}`,"--",a]);if(d)throw d;const u=p.toString().trim();return(u===""?[]:u.split(`
`)).map(n)},Et=e=>{const o=new Date(e);if(!isNaN(o.getTime()))return o},Yr=e=>{const o=Oe(e),[n=null]=Ie({decode:Et,filter:ve.CURRENT,format:me.ISO_DATE,path:o});return n},zr=e=>{const o=Oe(e),[n=null]=Ie({decode:Et,format:me.ISO_DATE,path:o});return n},Gr=e=>{const o=Oe(e),[n=null]=Ie({decode:Et,filter:ve.FIRST_MERGE,format:me.ISO_DATE,path:o});return n},kt=e=>{const o=Je.readFileSync(e).toString();let n=mn.createHash("sha1");return n.update(o),n.digest("hex")},Wr=e=>{const o=Oe(e),[n]=Ie({decode:Be,format:me.HASH,path:o});return n??kt(o)},Xr=e=>{const o=Oe(e),[n]=Ie({decode:Be,filter:ve.FIRST_MERGE,format:me.HASH,path:o});return n??kt(o)},Vr={height:630,width:1200},Kr=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",qr=cn({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Jr=(e,o,n=St.PNG,i=Vr)=>{const r=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=qr.hash(o),c=le.resolve(r,`${a}.${n}`),d=c.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:c,imageType:n,publicPath:d,...i}}};var pe;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(pe||(pe={}));const po=(e,o,n,i,r=[M.TECHNOLOGY])=>{const a=i===pe.MUTABLE,c=i===pe.IMMUTABLE_MERGE,d=o.replace(/^file:(\/\/)?/,""),p=a?kt(d):c?Xr(e):Wr(e),u={created:(c?Gr(e):zr(e))??Je.statSync(d).ctime,updated:Yr(e)??Je.statSync(d).mtime},f=Jr(o,a?{importURL:o,stat:u,topics:r}:{hash:p,importURL:o});return{hash:p,host:Kr,path:e,social:f,stat:u,title:n,topics:r}},Qr=()=>t(N,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}));Mi();const uo=({children:e,meta:{description:o,host:n,redirect:i,social:{image:r},title:a},...c})=>i?t(Bt,{...c},t(je.title,null,"Redirecting to ",i),t("meta",{"http-equiv":"refresh",content:`0; URL=${i}`}),t("link",{rel:"canonical",href:i})):t(Bt,{...c},t(je.title,null,a," | Eyelidlessness"),o!=null?t(je.description,null,o):t(N,null),t("meta",{name:"theme-color",content:s.siteLogo.color}),t("style",{dangerouslySetInnerHTML:{__html:Ii}}),t("meta",{name:"twitter:card",content:"summary_large_image"}),t("meta",{name:"twitter:site",content:"@eyelidlessenss"}),t(je.image,{alt:a,height:r.height,src:`${n}${r.publicPath}`,width:r.width}),t(N,null,e),t(Qr,null)),go=()=>t(N,null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Zr=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t(go,null))),es=1.6180334,ts=4,ho=Ae(es*5,6),fo=.75,Ee=.15,os=1.5,ke=ne("6rem",`${100/ho}vw`,"10rem"),ns=l(j,{height:ke,position:"relative",width:"100%"}),is=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),rs=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var Me;(function(e){e.INLINE="inline",e.NONE="none"})(Me||(Me={}));const wt={xPadding:ts,xScale:ho,yOffset:fo,yPadding:Ee,yScale:os},Ct=e=>{const{className:o,defsUsage:n=Me.INLINE,hash:i,height:r,rawSVG:a=!1,styleRenderer:c=ie,title:d,topics:p=[],width:u}=e,b=p.length<2?[...p,M[Ne]]:p,f=R=>`${R}-${i}`,{segmentPaths:E,xMax:S,yMax:h}=_r({...wt,hash:i}),x=h*fo,A=h*Ee/10.24,T=A*.75,B=t(is,{className:Wt,height:r,preserveAspectRatio:"none",viewBox:[0,0,S,h].join(" "),width:u},t("title",null,"Generated art for the page or post titled"," ",t("i",null,d),", with the content or commit hash ",i," ",b.length>0?[", and the topics: ",b.map(String).join(", ")]:null),t("defs",null,n===Me.INLINE?t(go,null):null,t("filter",{id:f("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:T,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:A,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:f("blurOverlayClip")},t("rect",{x:"0",width:S,y:x,height:h})),t("filter",{id:f("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:T}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:A})),t("filter",{id:f("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:T}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:A}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:A})),t("g",{id:f("blobs")},E.map((R,P)=>{const D=P%b.length,H=b[D],U=c.renderRule(()=>({...s.topicColors[H]}),Object.keys);return t(rs,{key:R,className:U,d:R,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${h*Ee})`,`scale(1, ${1-Ee*2})`].join(" "),filter:`url(#${f("blur")})`},t("use",{href:`#${f("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${f("blurOverlayClip")})`,filter:`url(#${f("blurOverlay")})`,transform:[`translate(0, ${h*Ee})`,`scale(1, ${1-Ee*2})`].join(" ")},t("use",{href:`#${f("blobs")}`,mask:"url(#softVerticalFade)"})));return a?B:t(ns,{className:o},B)},ss=[,"January","February","March","April","May","June","July","August","September","October","November","December"],as=l("time",{nested:{[s.darkMode]:{...s[s.darkMode].deemphasize}},...s.deemphasize});var Z;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(Z||(Z={}));const we=({date:e,mode:o=Z.DEFAULT,...n})=>{const i=e.getMonth()+1,r=e.getFullYear(),a=o===Z.SHORT?`${i}/${r}`:o===Z.META?"":[e.getDate(),ss[i],r].join(" ");return t(as,{...n,datetime:e.toISOString()},a)},ls=l("a",{...s.topicTagLink(s.topicTagIdentifier.className)}),cs=l("span",s.topicTagIdentifier()),ds=l(cs,{...s.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),ms=({className:e,link:o=!0,topic:n})=>{const i=bi(n),r=ot(n);if(i==null||typeof r!="string")throw new Error(`Unexpected topic: ${String(r)}`);const a=o?ls:"span",c=o?{href:`/blog/topics/${i}/`}:{};return t(a,{className:[e,s.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...c},t(ds,null,r))},bo=l(ms,e=>({...s.topicTagOuter,...s.topicColors[ot(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),ps=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),us=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),yo=({className:e,link:o=!0,topics:n})=>t(ps,{className:e},n.map(i=>typeof i=="string"?t(us,{key:gi(i)},t(bo,{link:o,topic:i})):null)),gs=e=>e.reduce((o,n)=>{const i=n.stat.created.getFullYear(),r=o[i]??[];return{...o,[i]:[...r,n]}},{}),hs=l(j,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),fs=l(j,{...s.blog.listing.item,minHeight:ke,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),bs=l(j,{paddingTop:`calc(${ke} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),ys=l(j,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),Ss=l("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),vs=$e({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),Es=l("h2",{...s.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),ks=l(we,{padding:"0 0.5rem 0.125rem 0"}),ws=l(yo,{gridColumn:"3 / 3"}),Cs=l("div",{...s.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),Ts=l("a",{fontSize:"0.875em"});var ze;(function(e){e.DATE="date"})(ze||(ze={}));var Ge;(function(e){e.ASC="asc",e.DESC="desc"})(Ge||(Ge={}));const Rs=({order:e=Ge.DESC,posts:o,sort:n=ze.DATE})=>{const i=o.slice().sort((a,c)=>e===Ge.DESC&&n===ze.DATE?a.stat.created>c.stat.created?-1:1:0),r=gs(i);return t(N,null,Object.entries(r).map(([a,c])=>t(N,{key:a},t(hs,null,c.map(d=>{const{CustomArt:p=Ct,description:u,hash:b,path:f,stat:{created:E},title:S,topics:h}=d;return t(fs,{key:f},t(bs,{as:"a",href:f},t(Ss,null,t(p,{defsUsage:Me.NONE,hash:b,padded:!0,renderType:"listing",title:S,topics:h})),t(ys,null,t(Es,{className:vs},S),t(ks,{date:E}))),t(ws,{link:!1,topics:h}),t(Cs,{className:s.blog.listing.descriptionIdentifier},u),t("p",null,t(Ts,{href:f},"Read more\u2026")))})))))},xs=({as:e="div",devilsBreakpoint:o,gap:n,...i})=>{const r=l(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[n?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:n?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return t(r,{...i})},As=l("svg",{...s.visiblyHidden,position:"absolute"}),ue=512,So=[0,0,ue,ue].join(" "),Ps=ue/2,Os=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),Is=()=>t(As,{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:So,width:"0"},t("defs",null,t("mask",{id:"octocat-knockout"},t("rect",{fill:"#fff",height:ue,mask:"url(#octocat)",rx:Ps,width:ue}),t("path",{d:Os,fill:"#000"})))),Ms=l("rect",{...s.gitHubLogo}),Tt=({className:e})=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:So},t("title",null,"GitHub"),t(Ms,{height:ue,mask:"url(#octocat-knockout)",width:ue})),We={height:60,width:338},Ls=l("svg",{display:"inline-block",maxWidth:"100%",width:`${We.width}px`}),js=l("use",{nested:{[s.darkMode]:{...s[s.darkMode].siteLogo}},...s.siteLogo,fill:"currentcolor"}),Bs=`0 0 ${We.width} ${We.height}`,Ds=()=>t(Ls,{viewBox:Bs},t(js,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),t("title",null,"Eyelidlessness")),{columns:Ce}=s.siteHeader,$s=`
  ${Ce[0]}
  ${Ce[1]}
  min(
    ${Ce[2][0]},
    ${Ce[2][1]}
  )
  ${Ce[3]}
  ${Ce[4]}
`.replace(/\s+/g," "),Hs=l("header",{display:"grid",gridColumn:"1 / -1",gridTemplateColumns:$s,padding:"clamp(0.5rem, 4vmin, 2rem) 0",position:"relative",zIndex:1,nested:{[s.print]:{nested:{'&[data-page-id="resume"]':{display:"none"}}}}}),Ns=l("div",{gridColumn:3}),_s=l("div",{margin:"0 auto"}),Fs=l("a",{textDecoration:"none"}),Us=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0,nested:{'&[data-page-id="resume"]':{display:"none"}}}),vo=1,Ys=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${vo/2}rem`,padding:0}),zs=l("a",{...s.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[s.darkMode]:{...s[s.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),Eo="1.5em",_l=l(Tt,{display:"block",width:`clamp(1.125em, 4vw, ${Eo})`}),ko="/blog/",wo="/resume/#resume",Gs=e=>{const o=e.meta.pageId==null?{}:{"data-page-id":e.meta.pageId},i=e.meta.pageId==="resume"?wo:ko,r=[{label:"Blog",location:ko},{label:"Hire me",location:wo},{label:"GitHub",location:"https://github.com/eyelidlessness"}],a=r.reduce((p,u)=>typeof u.label=="string"?p+u.label.length:p,0),c={horizontal:"2rem"},d=`${[`${We.width}px`,c.horizontal,`${a+2}ch`,Eo,`${r.length*vo}rem`].join(" + ")}`;return t(Hs,{...o},t(Ns,null,t(xs,{as:"nav",devilsBreakpoint:d,gap:c},t(_s,null,t(Fs,{href:i},t(Ds,null))),t(Us,{...o},r.map(({location:p,label:u})=>t(Ys,null,t(zs,{href:p},u)))))))},Ws=l(j,{paddingTop:0,paddingBottom:"4em",nested:{[s.print]:{nested:{'&[data-page-id="resume"]':{paddingTop:0,paddingBottom:0}}}}}),Xs=e=>{if(e.pageId!=null)return{"data-page-id":e.pageId}},Co=({meta:e,...o})=>e.redirect?t(N,null):t(ce,null,t(Is,null),t(Gs,{meta:e}),t(Ws,{as:"main",...Xs(e),...o})),Vs=l(j,{...s.description,nested:{...s.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Ks=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),qs=l("div",{fontSize:"0.889em"}),Js=({as:e="section",title:o,...n})=>t(Vs,{as:e,itemprop:"description"},o?t(Ks,null,o):null,t(qs,{...n})),Qs=l(j,{paddingTop:"1rem"}),Zs=l("h1",{marginBottom:"0.25rem"}),ea=l(j,{paddingBlock:"1rem"}),ta=e=>{const{children:o,CustomArt:n,description:i,descriptionRaw:r,hash:a,stat:{created:c},title:d,topics:p}=e;return t(N,null,t(uo,{meta:{...e,description:r}}),t(Co,{as:"article",meta:e},t(ea,null,n==null?t(Ct,{hash:a,title:d,topics:p}):t(n,{hash:a,renderType:"post",StylesProvider:ce,title:d,topics:p}),t(Qs,null,t(Zs,null,d),t(we,{date:c,itemprop:"datePublished"}),t(yo,{link:!1,topics:p}))),t(Js,null,i),o))},To={IMMUTABLE:pe.IMMUTABLE,IMMUTABLE_MERGE:pe.IMMUTABLE_MERGE},oa=async e=>{const{description:o,importURL:n,path:i,redirect:r,title:a,topics:c,type:d=To.IMMUTABLE_MERGE}=e,{CustomArt:p,hash:u,host:b,social:f,stat:E}=po(i,n,a,d,c),S=xr`${It(t(N,null,o))}`;return{CustomArt:p,description:o,descriptionRaw:S,hash:u,host:b,path:i,redirect:r,social:f,stat:E,title:a,topics:c}},Ro="@media screen and (min-width: 41.666rem)",na=l("div",{display:"block",margin:0,padding:0,nested:{"& > *":{containerType:"inline-size",paddingTop:"1rem"},[Ro]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}},[s.print]:{display:"none"}}}),ia=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),ra=e=>{const o=Array();return e.role===v.CREATOR&&o.push(e.description),e.summary!=null&&o.push(e.summary),o.length===0&&o.push(e.description),t(ia,null,o.map(n=>ye(n)))},sa=({date:e,...o})=>e==null?null:t(we,{...o,date:e}),aa=l("span",{nested:{[s.darkMode]:{...s[s.darkMode].deemphasize}},...s.deemphasize}),la=/^(\d{4})-(\d{2})$/,xo=e=>{if(e==null)return null;const o=la.exec(e);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,n,i]=o;return new Date(`${n}-${i}-01T00:00:00`)},Ao=l("div",{fontSize:"0.88889em",whiteSpace:"nowrap",nested:{"& time":{fontSize:"inherit"}}}),Po=({className:e="",range:[o,n]})=>{const i=xo(o),r=xo(n);return o==n?t(Ao,{className:e},t(we,{date:i,itemprop:"endDate",mode:Z.SHORT})):t(Ao,{className:e},t(we,{date:i,itemprop:"startDate",mode:Z.SHORT}),t(aa,null,"-"),t(sa,{date:r,itemprop:"endDate",mode:Z.SHORT}))},ca=l("div",{display:"grid",rowGap:"0.325rem",nested:{"& > *":{margin:0}}}),Rt="1.0625rem",da=l("h3",{fontFamily:s.prose.fontFamily,fontWeight:500,fontSize:Rt,paddingLeft:0,textIndent:0,nested:{[s.print]:{fontSize:"1rem"}}}),ma=l("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),pa=l("a",{alignSelf:"baseline",display:"block",flexShrink:0,height:`calc(${Rt} * ${s.headingLineHeight})`,lineHeight:`calc(${Rt} * ${s.headingLineHeight*1.5})`,padding:"0 0.5rem",zIndex:1,nested:{"& svg":{width:"1em"},[Ro]:{paddingLeft:0},[s.print]:{display:"none"}}}),ua=l("div",{flexGrow:1,paddingTop:"0.05556rem"}),ga=l("div",{alignItems:"start",display:"flex",padding:"1rem 0 0"}),Oo=({project:{description:e,end:o,repo:n,role:i,title:r,start:a,summary:c}})=>t(ga,null,t(pa,{href:n},t(Tt,null)),t(ua,null,t(ca,null,t(da,null,t(ma,{href:n},r)),t(Po,{range:[a,o]})),t(ra,{role:i,description:e,summary:c??null}))),Io=l("h2",{fontSize:ne(`${s.headingRanges.h3.minEm}em`,`${s.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Mo=l("div",{marginTop:"0.5rem"}),ha=l("div",{display:"none",nested:{[s.print]:{display:"block"}}}),fa=e=>{const{creator:o,contributor:n}=e.projects.reduce((r,a)=>{const c=a.role===v.CREATOR?"creator":"contributor";return{...r,[c]:[...r[c],a]}},{creator:[],contributor:[]}),i=o.length+n.length;return t(N,null,t(na,null,t("div",null,t(Io,null,"Projects I Created"),t(Mo,null,o.map(r=>t(Oo,{project:r})))),t("div",null,t(Io,null,"Open Source Contributions"),t(Mo,null,n.map(r=>t(Oo,{project:r}))))),t(ha,null,t("h2",null,"Projects"),i," projects listed at "," ",t("a",{href:"https://eyelidlessness.github.io/projects"},"eyelidlessness.github.io/projects")))},ba=l(j,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),Te=e=>t(ba,{as:"section",...e}),ya="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",Sa=({fill:e,topic:o})=>{const n=s.topicColors[o];return{...n,...e?{fill:"currentcolor",fillOpacity:.05,mask:"url(#curvesVerticalFade)",strokeWidth:0,nested:{...n.nested,[s.darkMode]:{fillOpacity:.15}}}:{fill:"none",strokeWidth:1,stroke:"currentcolor"},transition:ya,vectorEffect:"non-scaling-stroke"}},va=({fill:e,index:o,topic:n,...i})=>t("path",{...i}),Lo=l(va,Sa),Ea=l("svg",{overflow:"visible",padding:"1rem"}),ka=20,wa={xMax:de,xScale:1,xShift:0,yMax:de,yScale:1,yShift:0},Ca=({className:e,hexPoints:o,points:n,pointSize:i=6,scaleOptions:r,segments:a,topics:c,...d})=>{const{xScale:p,xShift:u,xRange:b=p*(de+u*2),yMax:f,yShift:E,yScale:S,yRange:h=S*(f+E*2)}={...wa,...r},x=ka*2,A=d.height??h+x,T=d.width??b+x,_=({x:R,y:P})=>{const D=Ae((R+u)/b*100,4),H=100-Ae((P-E)/h*100,4);return{cx:D,cy:H}},B=a.map(R=>{const[P,D,H]=R,{x:U}=P,{y:V}=D,{x:ee}=H,re=ee-U,J=re===0?0:Math.max(V/re*pt,mt);return{cubicPoints:R?.reduce((Y,$,G)=>{if(G===0)return Y;const X=yt({index:G,point:$,points:R,smoothing:J,xScale:p,yScale:S});return[...Y,X]},[]),segment:R}});return t(Ea,{className:e,height:A,width:T,preserveAspectRatio:"none",viewBox:`0 0 ${T} ${A}`},t("defs",null,t("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.15","stop-color":"white","stop-opacity":".95"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),t("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),B.map(({cubicPoints:R,segment:P},D)=>{const[H,U,V]=P,ee=R.map(([K,Y],$)=>[$===0?H:U,K,Y,$===0?U:V]);return t(N,null,t(()=>t(N,null,ee.map(K=>{const Y=K.map((G,X)=>{const{cx:se,cy:q}=_(G),ae=se/100*T,ge=q/100*A;return`${X===0?"M ":X===1?"C ":""} ${ae},${ge}`}).join(" "),$=c[D%c.length];return t(Lo,{d:Y,index:D,topic:$})})),null),t(()=>{const K=ee.map(($,G)=>$.map((se,q)=>{if(G>0&&q===0)return"";const{cx:ae,cy:ge}=_(se),O=ae/100*T,te=ge/100*A;return`${q===0?"M ":q===1?"C ":""} ${O},${te}`}).join(" ")).join(" "),Y=c?.[D%c.length];return t(Lo,{d:K,fill:!0,index:D,topic:Y})},null))}))},jo=({className:e="",hash:o,height:n,renderType:i,StylesProvider:r=ce,styleRenderer:a=ie,topics:c=[],width:d})=>{const p=ut(o),u=gt(o,p),{xPadding:b,xScale:f,yPadding:E,yScale:S}=wt,h=i==="meta",x=h?0:b,A=h?0:E,T=x/2,_=A/2,B={xScale:f,xShift:T,yScale:S,yShift:_},P=lt(u,({x:O},{x:te})=>O===te?0:O>te?1:-1).map(O=>ht(O,B)),D=P.map(O=>p[P.indexOf(O)]),H=(de+x)*f,U=ft({points:P,xMax:H,xScale:f,yScale:S}),V=bt({segments:U,xMax:H,xScale:f,yScale:S}),ee=h?{"& path":{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,re=h?"0 !important":"0 0 1rem !important",J=ke,K="100%",Y=O=>typeof O=="number"?`${O}px`:O,$=(O,te)=>typeof O=="number"?O*te:O,G=h?$(n??J,.95):ke,X=h?$(d??K,.95):"100%",se=h&&n!=null?$(n,.95):n,q=h&&d!=null?$(d,.95):d,ae=a.renderRule(()=>({gridColumn:"1 / -1",height:Y(G),padding:re,width:Y(X),nested:{...ee}}),Object.keys),ge=h?e:`${e} ${ae}`;return t(r,null,t(Ca,{className:ge,height:se,hexPoints:D,points:P,scaleOptions:B,segments:V,topics:c,width:q}))},Ta=l(j,{nested:{[s.print]:{display:"none",paddingInline:"0.125rem"}}}),Bo=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),Ra=l(Bo,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),xa=l(Ra,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",paddingTop:ne("0.5rem","3vw","2rem"),nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"},[s.print]:{paddingTop:0}}}),Aa=l(Te,{padding:0}),Pa=l(Bo,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),Oa=l("a",{...s.resume.contactList.link,display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"0.5ch",fontSize:"0.88889em",fontWeight:400,minWidth:"auto",color:"var(--color-prose)",textDecoration:"none",nested:{"&, &:hover":{fontWeight:500}}}),Ia=l("span",{nested:{[s.print]:{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),xt=({children:e,screenLabel:o,printLabel:n,Icon:i,...r})=>t(Oa,{...r},i&&t(i,null),t(Ia,{"data-print-label":n},t("span",null,o??e))),Do=l("svg",{width:"1rem",height:"1rem",color:"var(--color-prose)"}),Ma=l("path",{color:"currentColor"}),La=()=>t(Do,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},t(Ma,{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"})),ja=()=>t(Do,{as:Tt}),Ba={GitHub:ja},$o={display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}},Da=l(j,{...s.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...s.resume.brief.nested,"& p":{margin:"0.5em 0"},"& ul, & ul li":{margin:0,padding:0},"& li":$o,"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"},[s.print]:{...s.resume.brief.nested[s.print],padding:0}}}),Xe={screen:"@media screen and (min-width: 40rem)",print:"@media print"},$a=l("h2",{fontSize:"1em",marginBottom:0,paddingLeft:0,textIndent:0,nested:{[Xe.screen]:{justifySelf:"end"},[Xe.print]:{justifySelf:"end"}}}),Ha=l("div",{alignItems:"baseline",display:"grid",gap:"0.5rem 0",gridTemplateColumns:"auto",gridTemplateRows:"auto",fontSize:"0.88889em",nested:{[Xe.screen]:{gridTemplateColumns:"auto 1fr"},[Xe.print]:{gridTemplateColumns:"auto 1fr"}}}),Na=l("ul",{display:"block",margin:0,padding:"0 0 0 1rem"}),_a=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Fa=l("svg",{display:"inline-block",margin:"0 0.325rem 0 0",verticalAlign:"middle",nested:{[s.print]:{height:"0.325rem",width:"0.325rem"}}}),Ua=l("circle",{fill:"currentcolor"}),Ve=e=>t(Fa,{xmlns:"http://www.w3.org/2000/svg",className:e.className,width:"8",height:"8",viewBox:"0 0 8 8"},t(Ua,{cx:"4",cy:"4",r:"4"}),t("title",null,"Skill level: ",e.level)),Ya={[y.BASIC]:l(Ve,{...s.resume.skillLevel[y.BASIC]}),[y.INTERMEDIATE]:l(Ve,{...s.resume.skillLevel[y.INTERMEDIATE]}),[y.ADVANCED]:l(Ve,{...s.resume.skillLevel[y.ADVANCED]}),[y.EXPERT]:l(Ve,{...s.resume.skillLevel[y.EXPERT]})},za=l("div",{display:"contents"}),Ga=({name:e,skills:o})=>t(za,{itemscope:!0,itemtype:"http://schema.org/ItemList"},t($a,{itemprop:"name"},io(e)),t(Na,null,o.map(({level:n,name:i})=>{const r=Ya[n];return t(_a,{key:i,itemprop:"itemListElement"},t(r,{level:n}),io`${i}`)}))),Wa=l(j,{padding:"1rem 0"}),Xa=l("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),Va=l("p",{fontSize:"0.88889rem",opacity:.8}),Ka=l("h2",{marginBottom:0}),qa=l("ul",{fontSize:"0.88889em",paddingInlineStart:0}),Ja=l("li",$o),Qa=l(Wa,{padding:"1.5rem 0",position:"relative",nested:{"&:last-child:after":{display:"none"},"&:nth-of-type(odd)":{...s.resume.employment.itemOdd},"&:nth-of-type(even)":{...s.resume.employment.itemEven},"& strong":{fontWeight:500,nested:{[s.darkMode]:{fontWeight:400}}},[s.print]:{paddingBottom:0}}}),Za=l("div",{alignItems:"baseline",display:"grid",columnGap:"0.5rem",gridTemplate:`
    "employer time-range"
    "position position"
  `,justifyContent:"space-between",nested:{[s.print]:{gridTemplate:`
        "employer position time-range"
      `,gridAutoColumns:"1fr auto auto"}}}),el=l("h3",{gridArea:"employer",marginBottom:0,whiteSpace:"nowrap"}),tl=l(Po,{gridArea:"time-range",nested:{"&.has-marginalia::after":{content:'"*"'}}}),ol=l("div",{fontSize:"0.88889rem",fontWeight:s.deemphasize.fontWeight,gridArea:"position",nested:{[s.print]:{nested:{"&:after":{content:'","'}}}}}),nl=l("p",{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"baseline",gap:"1ch"}),il=l("span",{fontWeight:500}),rl=l("span",{fontSize:"0.88889rem",opacity:.8}),Ho=e=>{const{subEmployer:o,subRange:n,highlights:i}=e;return t(N,null,(o||n)&&t(nl,null,o&&t(il,null,o),n&&t(rl,null,n)),t(qa,{itemtype:"http://schema.org/ItemList"},i.map(r=>t(Ja,{key:r,itemprop:"itemListElement"},ye(r)))))},sl=({employer:e,end:o,highlights:n,position:i,start:r,summary:a,marginalia:c,...d})=>t(Qa,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...d},t(Za,null,t(el,{itemprop:"name"},e),t(ol,{itemprop:"roleName"},i),t(tl,{className:c?"has-marginalia":"",range:[r,o]})),a==null?null:t(Xa,{itemprop:"description"},ye(a)),c&&t(Va,null,"* ",c),ai(n)?t(Ho,{highlights:n}):n.map(p=>{const[u,b,...f]=p;return t(Ho,{subEmployer:u,subRange:b,highlights:f})})),al=l(Te,{...s.resume.employment.container,marginTop:"1rem"}),ll=({employment:e})=>t(al,null,t(Ka,null,"Recent Experience"),e.history.map(o=>t(sl,{...o}))),cl=l(Te,{textAlign:"right",nested:{[s.print]:{display:"none"}}}),dl=l(j,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),ml=l(we,{...s.visiblyHidden}),No=e=>e.replace(/^https?:\/\/|\/$/g,""),pl=({className:e,id:o,meta:n,resume:i,updated:r})=>{const{contact:{email:a,website:c},employment:d,info:p,name:u,projects:b,skills:f,social:E}=i;return t(dl,{className:e,id:o,itemscope:!0,itemtype:"http://schema.org/Person"},t(Ta,null,t(jo,{...n,renderType:"post"})),t(Aa,null,t(xa,null,t("h1",{itemprop:"name"},u),t(ml,{date:r,itemprop:"datePublished",mode:Z.META}),t(Pa,null,t(xt,{href:`mailto:${a}`,itemprop:"email",screenLabel:a,printLabel:a,Icon:La},"Email"),c!=null&&t(xt,{href:c,itemprop:"url",printLabel:No(c),rel:"me"},"Website"),E.map(({user:S,network:h,url:x})=>t(xt,{href:x,itemprop:"url",screenLabel:S??h,printLabel:S??No(x),Icon:Ba[h],rel:"me"},h)))),t(Da,{itemprop:"description"},ye(p.brief))),t(Te,{"aria-label":"Skillsets"},t(Ha,null,Object.entries(f.merged).map(([S,h])=>t(Ga,{key:S,name:S,skills:h})))),t(ll,{employment:d}),t(Te,{id:"projects"},t(fa,{projects:b})),t(Te,null,t("h2",null,"References"),ye("Available upon request, email <gnosis@gmail.com>")),t(cl,null,t("a",{href:"/Trevor_Schmidt_resume.pdf"},"View as PDF")))},Fl=l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),Ul=l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Yl=l("a",{...s.resume.contactList.link,textDecoration:"none"});export{ke as BLOG_ART_HEIGHT,Ct as BlogArt,Zr as BlogArtDefs,Rs as BlogListing,To as BlogMetadataType,ta as BlogPost,de as COORDINATE_MAX,ro as COORDINATE_MIN,j as FullBleedContainer,Qt as FullBleedScrollableOverflow,eo as FullBleedSymbolBlock,uo as Head,Pe as InvalidHashError,mt as MIN_SMOOTHING,Co as Main,pe as PageMetadataType,pl as Resume,jo as ResumeArt,pt as SMOOTHING_RATIO,ce as StylesProvider,M as Topic,bo as TopicTag,Ze as __SNOWPACK_ENV__,wt as blogArtDefaultParameters,ne as clamp,yt as cubicBezierPoints,oa as getBlogPostStaticProps,ft as getNaiveSegments,bt as getNonPhallicSegments,po as getPageMetadata,Or as hexChars,et as identifier,ye as mdx,ie as renderer,Cn as resetAbbrContext,pi as resume,ht as scalePoint,lt as sortBy,l as styled,s as theme,Ae as toFixed,ut as toHexPointSequence,gt as toPointSequence,lo as yBounds};
