import et from"unist-util-visit";import{h as r,Fragment as L,toChildArray as tt}from"https://cdn.skypack.dev/preact@10.5.10";import"fela-tools";import{isobject as wo,createComponent as ko,RendererProvider as To,createSchema as t,emojiRegex as Co,h as ot,rehypeAccessibleEmojis as Eo,remarkSlug as Ao,remarkSmartypants_1 as Ro}from"./_vendor/index.js";import"sharp";import Po from"@mdx-js/mdx";import{mdx as le,MDXProvider as xo}from"@mdx-js/preact";import{transform as Mo}from"buble-jsx-only";import rt from"dedent";import it from"module";import Oo from"remark-mdx";import jo from"remark-mdx-to-plain-text";import $ from"path";import{loadTheme as nt,getHighlighter as st}from"shiki";import{BUNDLED_LANGUAGES as Io}from"shiki-languages";import{renderers as Lo}from"shiki-twoslash";import Ce from"fs";import Yo from"node-object-hash";import Do from"child_process";import Bo from"crypto";import{Head as No,seo as Ee}from"microsite/head";import{createRenderer as $o}from"fela";import{processStyleWithPlugins as Ho,KEYFRAME_TYPE as at,isNestedSelector as zo,normalizeNestedProperty as _o,isMediaQuery as Fo,generateCombinedMediaQuery as ct,isSupport as Uo,generateDeclarationReference as Go,isUndefinedValue as qo,generateCSSSelector as Wo,RULE_TYPE as Xo}from"fela-utils";import{cssifyDeclaration as Vo,cssifyObject as Ko}from"css-in-js-utils";import lt from"md5";let Ae=new Set;const Jo=()=>{Ae=new Set},Qo=()=>e=>{et(e,"abbr",o=>{const{abbr:i}=o;Ae.has(i)&&(delete o.abbr,delete o.children,delete o.data,delete o.reference,Object.assign(o,{type:"text",value:i})),Ae.add(i)})},dt="production",Zo="production",er=!0;var Re=Object.freeze({__proto__:null,MODE:dt,NODE_ENV:Zo,SSR:er});const tr=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),C=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((i,[n,s])=>typeof s=="object"&&(n==="nested"||n.includes("&"))?i:`${i}${tr(n)}:${s};`,""),"}",Object.entries(o).map(([i,n])=>{if(typeof n=="object"){if(i==="nested")return Object.entries(n).map(([s,a])=>{const d=e.map(p=>s.replace(/&/g,p));return C(d,a)}).join("");if(i.includes("&")){const s=e.map(a=>i.replace(/&/g,a));return C(s,n)}}return""},[]).join("")].join(""),H=(...e)=>`clamp(${e.join(",")})`,q=e=>e.replace(/\s+/g," ").trim(),Pe=e=>e;function Z(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function or(e,o,i,n,s,a){const d=[];return s&&d.push(Z(s).slice(0,16)),n&&d.push(Z(n).slice(0,16)),i&&d.push(Z(i).slice(0,16)),d.push(Z(e).slice(0,16)),d.push(Z(o).slice(0,16)),d.push(a.slice(0,8)),d.join("_")}function rr(e,o,i=[""]){let n="";for(const a in e){const d=e[a];n=`${n}${a}{${Ko(d)}}`}let s="";for(let a=0;a<i.length;a++){const d=i[a];s=`${s}@${d}keyframes ${o}{${n}}`}return s}function ir(){return e=>(e.renderKeyframe=(o,i)=>{const n=o(i,e),s=Ho(e,n,at,i),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const d=lt(a),p=(e.selectorPrefix||"_")+d.slice(0,8),m=rr(s,p,e.keyframePrefixes),g={type:at,keyframe:m,name:p};e.cache[a]=g,e._emitChange(g)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...i},n="",s="",a="")=>{let d=o?` ${o}`:"";for(const p in i){const m=i[p];if(wo(m))if(zo(p))d+=e._renderStyleToClassNames(m,n+_o(p),s,a);else if(Fo(p)){const g=ct(s,p.slice(6).trim());d+=e._renderStyleToClassNames(m,n,g,a)}else if(Uo(p)){const g=ct(a,p.slice(9).trim());d+=e._renderStyleToClassNames(m,n,s,g)}else console.warn(`The object key "${p}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const g=Go(p,m,n,s,a);if(!e.cache.hasOwnProperty(g)){if(qo(m)){e.cache[g]={className:""};continue}const h=Vo(p,m),T=lt(g),w=e.devMode?or(p,m,n,s,a,T):(e.selectorPrefix||"_")+T.slice(0,8),y=Wo(w,n),M={type:Xo,className:w,selector:y,declaration:h,pseudo:n,media:s,support:a};e.cache[g]=M,e._emitChange(M)}const f=e.cache[g].className;f&&(d+=` ${f}`)}}return d},e)}import.meta.env=Re;const de=it.createRequire(import.meta.url),{default:nr}=de("fela-identifier"),{default:sr}=de("fela-plugin-embedded"),{default:ar}=de("fela-plugin-multiple-selectors"),{default:cr}=de("fela-plugin-typescript"),lr=dt==="development",dr=()=>{const e=nr(),o=$o({devMode:lr,enhancers:[ir(),e],plugins:[sr(),ar(),cr()]});return{identifier:e,renderer:o}},{identifier:xe,renderer:W}=dr(),pr=e=>Array.isArray(e)?e:[e],mr=e=>({children:o})=>r(To,{renderer:e},...pr(o)),X=mr(W),gr=e=>W.renderRule(Pe,e),pe=Object.assign(gr,{global:W.renderStatic.bind(W)}),l=(e,o)=>{const i=typeof o=="function"?o:()=>o;return ko(i,e,Object.keys)},u=t({}),pt="FRESH@0.1.0",pa=t({$schema:"http://json-schema.org/draft-07/schema#",title:"FRESH Resume Schema",type:"object",additionalProperties:u,required:["name","meta"],properties:{name:t({type:"string",description:"The candidate's name as it should appear on the resume."}),meta:t({type:"object",additionalProperties:u,description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools.",required:["format"],properties:{format:t({const:pt,description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:t({type:"string",description:"The semantic version number for this resume."})}}),info:t({type:"object",additionalProperties:u,description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote.",properties:{label:t({type:"string",description:"A label for this resume, such as 'Full-Stack Developer'."}),class:t({type:"string",description:"Profession type or 'character class'."}),image:t({type:"string",description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:t({type:"string",description:"A short description or summary of yourself as a candidate."}),quote:t({type:"string",description:"Candidate quote or byline."})}}),disposition:t({type:"object",additionalProperties:u,description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like.",properties:{travel:t({type:"integer",description:"Percentage of time willing to travel (0 to 100)."}),authorization:t({type:"string",description:"Work authorization: citizen, work visa, etc."}),commitment:t({type:"array",description:"Types of work commitment desired: contract, perm, seasonal, etc.",items:t({type:"string",description:"One of: contract, permanent, part-time, seasonal, full-time."})}),remote:t({type:"boolean",description:"Open to remote employment opportunities."}),relocation:t({type:"object",additionalProperties:u,properties:{willing:t({oneOf:[t({type:"string"}),t({type:"boolean"})],description:"Willingness to relocate."}),destinations:t({type:"array",description:"Preferred destinations for relocation",items:t({type:"string",description:"City or area of relocation."})})}})}}),contact:t({type:"object",additionalProperties:u,description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types.",properties:{email:t({type:"string",description:"Primary contact email.",format:"email"}),phone:t({type:"string",description:"Primary phone number."}),website:t({type:"string",description:"Website, blog, or home page.",format:"uri"}),other:t({type:"array",items:t({type:"object",additionalProperties:u,properties:{label:t({type:"string",description:"A label for this contact information."}),category:t({type:"string",description:"Type of contact information: email, phone, url, postal, or IM."}),value:t({type:"string",description:"Phone number, email address, website, etc."})}})})}}),location:t({type:"object",description:"The 'location' section, when present, contains the candidate's location and address info.",additionalProperties:u,properties:{address:t({type:"string",description:"Your full postal address."}),code:t({type:"string",description:"Postal or other official routing code."}),city:t({type:"string",description:"Your home city."}),country:t({type:"string",description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:t({type:"string",description:"Your state, region, or province."})}}),employment:t({type:"object",description:"The 'employment' section describes the candidate's formal employment history.",additionalProperties:u,properties:{summary:t({type:"string",description:"Summary of overall employment."}),history:t({type:"array",items:t({type:"object",additionalProperties:u,required:["employer"],properties:{employer:t({type:"string",description:"Employer name."}),position:t({type:"string",description:"Your position or formal job title."}),url:t({type:"string",description:"Employer website.",format:"uri"}),start:t({type:"string",description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities under this employer."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this position.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})})}}),projects:t({type:"array",description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid.",items:t({type:"object",additionalProperties:u,required:["title"],properties:{title:t({type:"string",description:"Project name or code-name."}),category:t({type:"string",description:"Project type: open-source, private, side project, etc."}),description:t({type:"string",description:"Project description or summary."}),summary:t({type:"string",description:"A summary of your achievements and responsibilities on the project."}),role:t({type:"string",description:"Your role on the project: Contributor, Creator, etc."}),url:t({type:"string",description:"Project URL.",format:"uri"}),media:t({type:"array",description:"Media associated with this project.",items:t({type:"object",additionalProperties:u,required:["category"],properties:{category:t({type:"string",description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:t({type:"string",description:"Friendly media name."}),url:t({type:"string",description:"Media link, path, or location."})}})}),repo:t({type:"string",description:"Repo URL.",format:"uri"}),start:t({type:"string",description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy project-related achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this project.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})}),skills:t({type:"object",description:"A description of the candidate's formal skills and capabilities.",additionalProperties:u,properties:{sets:t({type:"array",items:t({type:"object",additionalProperties:u,required:["name","skills"],properties:{name:t({type:"string",description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:t({type:"string",description:"Level of mastery of the skill."}),skills:t({type:"array",items:t({type:"string",description:"Title or ID of a skill from the skills list."})})}})}),list:t({type:"array",items:t({type:"object",additionalProperties:u,required:["name"],properties:{name:t({type:"string",description:"The name or title of the skill."}),level:t({type:"string",description:"A freeform description of your level of mastery with the skill."}),summary:t({type:"string",description:"A short summary of your experience with this skill."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Number of years you've used the skill."})}})})}}),service:t({type:"object",description:"The 'service' section describes the candidate's overall service history in the true sense of the word 'service': volunteer work, military participation, civilian core, rescue and emergency services, and the like.",additionalProperties:u,properties:{summary:t({type:"string",description:"Summary of overall service/volunteer experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:u,required:["organization"],properties:{category:t({type:"string",description:"The type of service work, such as volunteer or military."}),organization:t({type:"string",description:"The service organization, such as Red Cross or National Guard."}),position:t({type:"string",description:"Your position or formal service role."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date you joined the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you left the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities at this organization."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this service.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),education:t({type:"object",additionalProperties:u,description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses.",required:["level"],properties:{summary:t({type:"string",description:"Summary of overall education."}),level:t({type:"string",description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:t({type:"string",description:"Your degree, if any (BSCS, BA, etc.)."}),history:t({type:"array",items:t({type:"object",additionalProperties:u,required:["institution"],properties:{title:t({type:"string",description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."}),institution:t({type:"string",description:"College or school name."}),area:t({type:"string",description:"e.g. Arts"}),studyType:t({type:"string",description:"e.g. Bachelor"}),start:t({type:"string",description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),grade:t({type:"string",description:"Grade or GPA."}),curriculum:t({type:"array",description:"Notable courses, subjects, and educational experiences.",items:t({type:"string",description:"The course name and number or other identifying info."})}),url:t({type:"string",description:"Website or URL of the institution or school.",format:"uri"}),summary:t({type:"string",description:"A short summary of this education experience."}),keywords:t({type:"array",description:"Keywords associated with this education stint.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Graduated *summa cum laude*'."})}),location:t({type:"string",description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),social:t({type:"array",description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like.",items:t({type:"object",additionalProperties:u,required:["network","user","url"],properties:{network:t({type:"string",description:"The name of the social network, such as Facebook or GitHub."}),user:t({type:"string",description:"Your username or handle on the social network."}),url:t({type:"string",description:"URL of your profile page on this network.",format:"uri"}),label:t({type:"string",description:"A friendly label."})}})}),recognition:t({type:"array",description:"The 'recognition' section describes the candidate's public or professional plaudits, kudos, awards, and other forms of positive external reinforcement.",items:t({type:"object",additionalProperties:u,required:["title"],properties:{category:t({type:"string",description:"Type of recognition: award, honor, prize, etc."}),title:t({type:"string",description:"Title of the award or recognition."}),date:t({type:"string",description:"Date awarded, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),from:t({type:"string",description:"Name of the awarding company, institution, or individual."}),summary:t({type:"string",description:"A brief description of the award and why you received it."}),url:t({type:"string",description:"A webpage or other associated URL.",format:"uri"})}})}),writing:t({type:"array",description:"The 'writing' section describes the candidate's writing and publication history, from blogs and essays to novels and dissertations.",items:t({type:"object",additionalProperties:u,required:["title"],properties:{title:t({type:"string",description:"Title of the article, essay, or book."}),category:t({type:"string",description:"One of 'book', 'article', 'essay', 'blog post', or 'series'."}),publisher:t({oneOf:[t({additionalProperties:u,type:"object",properties:{name:t({type:"string",description:"Publisher of the article, essay, or book."}),url:t({type:"string",description:"Publisher website or URL."})}}),t({type:"string"})],description:"Publisher of the article, essay, or book."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),url:t({type:"string",description:"Website or URL of this writing or publication."}),summary:t({type:"string",description:"A brief summary of the publication."})}})}),reading:t({type:"array",description:"The 'reading' section describes the candidate's reading habits and is intended to demonstrate familiarity with industry-relevant publications, blogs, books, or other media that a competent industry candidate should be expected to know.",items:t({type:"object",additionalProperties:u,required:["title"],properties:{title:t({type:"string",description:"Title of the book, blog, or article."}),category:t({type:"string",description:"The type of reading: book, article, blog, magazine, series, etc."}),url:t({type:"string",description:"URL of the book, blog, or article.",format:"uri"}),author:t({oneOf:[t({type:"string"}),t({type:"array",items:t({type:"string",description:"Author name."})})],description:"Author of the book, blog, or article."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),summary:t({type:"string",description:"A brief description of the book, magazine, etc."})}})}),speaking:t({type:"array",description:"The 'speaking' section describes the candidate's speaking engagements and presentations.",items:t({type:"object",additionalProperties:u,required:["event"],properties:{title:t({type:"string",description:"Speaking engagement title."}),event:t({type:"string",description:"Event at which you presented."}),location:t({type:"string",description:"Freeform location of the event, e.g., 'San Francisco, CA' or 'Tokyo'."}),date:t({type:"string",description:"Presentation date.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"An array of specific highlights such as 'Won 'Best Speaker' award at 2012 E3 expo'."})}),keywords:t({type:"array",description:"Keywords associated with this speaking engagement.",items:t({type:"string",description:"A list of keywords such as 'TED', 'E3', 'mathematics', 'Big Data', etc."})}),summary:t({type:"string",description:"A description of this speaking engagement."})}})}),governance:t({type:"array",description:"The 'governance' section describes the candidate's leadership, standards, board, and committee roles.",items:t({type:"object",additionalProperties:u,required:["organization"],properties:{summary:t({type:"string",description:"Summary of your governance at this organization."}),category:t({type:"string",description:"Type of governance: committee, board, standards group, etc."}),role:t({type:"string",description:"Governance role: board member, contributor, director, etc."}),organization:t({type:"string",description:"The organization."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"}),keywords:t({type:"array",description:"Keywords associated with this governance stint.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Increased company profits by 35% year over year'."})})}})}),languages:t({type:"array",description:"The 'languages' section describes the candidate's knowledge of world languages such as English, Spanish, or Chinese.",items:t({type:"object",additionalProperties:u,required:["language"],properties:{language:t({type:"string",description:"The name of the language: English, Spanish, etc."}),level:t({type:"string",description:"Level of fluency with the language, from 1 to 10."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Amount of time language spoken?"})}})}),samples:t({type:"array",description:"The 'samples' section provides an accessible demonstration of the candidate's portfolio or work product to potential employers and co-workers.",items:t({type:"object",additionalProperties:u,required:["title"],properties:{title:t({type:"string",description:"Title or descriptive name."}),summary:t({type:"string",description:"A brief description of the sample."}),url:t({type:"string",description:"URL of the sample (if any).",format:"uri"}),date:t({type:"string",description:"Date the sample was released in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights for this sample.",items:t({type:"string",description:"For ex, 'Implemented optimized search algorithm derived from Slices of Pi'."})}),keywords:t({type:"array",description:"Keywords associated with this work sample.",items:t({type:"string",description:"For example, C++, HTML, game."})})}})}),references:t({type:"array",description:"The 'references' section describes the candidate's personal, professional, and/or technical references.",items:t({type:"object",additionalProperties:u,required:["name"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),role:t({type:"string",description:"The occupation of this reference, or his or her relationship to the candidate."}),category:t({type:"string",description:"The type of reference, eg, professional, technical, or personal."}),private:t({type:"boolean",description:"Is this a private reference?"}),summary:t({type:"string",description:"Optional summary information for this reference."}),contact:t({type:"array",items:t({type:"object",additionalProperties:u,properties:{label:t({type:"string",description:"Friendly label for this piece of contact info."}),category:t({type:"string",description:"Type of contact information (phone, email, web, etc.)."}),value:t({type:"string",description:"The email address, phone number, etc."})}})})}})}),testimonials:t({type:"array",description:"The 'testimonials' section contains public testimonials of the candidate's professionalism and character.",items:t({type:"object",additionalProperties:u,required:["name","quote"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),quote:t({type:"string",description:"A quoted reference, eg, 'Susan was an excellent team leader, manager, and operations specialist with a great eye for detail. I'd gladly hire her again if I could!'"}),category:t({type:"string",description:"Type of reference: personal, professional, or technical."}),private:t({type:"boolean",description:"Public reference (testimonial) or via private contact?"})}})}),interests:t({type:"array",description:"The 'interests' section provides a sampling of the candidate's interests and enthusiasms outside of work.",items:t({type:"object",additionalProperties:u,required:["name"],properties:{name:t({type:"string",description:"The name or title of the interest or hobby."}),summary:t({type:"string"}),keywords:t({type:"array",description:"Keywords associated with this interest.",items:t({type:"string",description:"A keyword relating to this interest."})})}})}),extracurricular:t({type:"array",description:"The 'extracurricular' section describes the candidate's involvement with industry-related events and enterprises outside of work. For example: attending conferences, workshops, or meetups.",items:t({type:"object",additionalProperties:u,required:["title","activity"],properties:{title:t({type:"string",description:"Title of the extracurricular activity."}),activity:t({type:"string",description:"The extracurricular activity."}),location:t({type:"string",description:"City, state, or other freeform location."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"})}})}),affiliation:t({type:"object",additionalProperties:u,description:"The 'affiliation' section describes the candidate's membership in groups, clubs, organizations, and professional associations whether at the collegiate, corporate, or personal level.",properties:{summary:t({type:"string",description:"Optional summary of overall affiliation and membership experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:u,required:["organization"],properties:{category:t({type:"string",description:"The type of affiliation: club, union, meetup, etc."}),organization:t({type:"string",description:"The name of the organization or group."}),role:t({type:"string",description:"Your role in the organization or group."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date your affiliation with the organization began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your affiliation with the organization ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities during this affiliation."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this affiliation.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}})}});var k;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(k||(k={}));var v;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator"})(v||(v={}));const ur=[{title:"Eyelidlessness",category:k.PUBLIC_ACCESS,description:`
      My personal website and tech blog.
    `,summary:`
      Built with [Preact][1], [Microsite][2] and [Fela][3].

      [1]: https://preactjs.com/
      [2]: https://github.com/natemoo-re/microsite
      [3]: https://fela.js.org/
    `,repo:"https://github.com/eyelidlessness/eyelidlessness.github.io",role:v.CREATOR,start:"2020-10",end:"2021-02"},{title:"Microsite",category:k.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:v.CONTRIBUTOR,start:"2021-01",end:"2021-02"},{title:"HNDarkMode",category:k.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/benwbooth/quick-clojure",role:v.CONTRIBUTOR,start:"2015-01",end:"2015-01"}],hr=e=>e;var b;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(b||(b={}));var ee;(function(e){e.LANGUAGES_PLATFORMS="Languages & Platforms",e.SERVICES_DISTRIBUTED_SYSTEMS="Services & Distributed Systems",e.USER_INTERFACE_EXPERIENCE="User Interface & Experience"})(ee||(ee={}));const Me={[ee.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:b.EXPERT},{name:"OpenAPI & JSON Schema",level:b.EXPERT},{name:"Django REST framework",level:b.ADVANCED},{name:"Fault tolerance",level:b.ADVANCED},{name:"Microservice architecture",level:b.ADVANCED},{name:"Apache Storm",level:b.INTERMEDIATE},{name:"Redis",level:b.BASIC}],[ee.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:b.EXPERT},{name:"DOM & Web APIs",level:b.EXPERT},{name:"Web performance",level:b.ADVANCED},{name:"SVG",level:b.ADVANCED},{name:"UI & UX design",level:b.ADVANCED},{name:"A11y",level:b.INTERMEDIATE}],[ee.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:b.EXPERT},{name:"Clojure & ClojureScript",level:b.EXPERT},{name:"HTML & CSS",level:b.EXPERT},{name:"SQL (PostgreSQL)",level:b.ADVANCED},{name:"Python",level:b.INTERMEDIATE},{name:"Swift",level:b.BASIC},{name:"Java",level:b.BASIC}]},fr={list:Object.values(Me).flatMap(Pe),merged:Me,sets:Object.entries(Me).map(([e,o])=>({name:e,skills:o.map(({name:i})=>i)}))},yr=hr({name:"Trevor Schmidt",meta:{format:pt,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:[{employer:"Treez",position:"Senior Software Engineer",start:"2018-12",end:"2020-09",summary:`
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
          `]}]},info:{class:"Software Engineer",brief:rt(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:ur,skills:fr,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),me=Symbol("DEFAULT_TOPIC"),E={[me]:me,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},br=e=>typeof e=="string"||typeof e=="symbol",mt=e=>br(e)&&e in E,Oe=e=>mt(e)?E[e]:e,gt=Object.entries(E).reduce((e,o)=>{const[i,n]=o;return typeof i=="string"?{...e,[n]:i}:e},{}),Sr=e=>mt(e)?e:gt[e],vr=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),wr=Object.fromEntries(Object.entries(gt).map(([e,o])=>typeof o=="string"?[e,vr(o)]:null).filter(e=>e!=null)),kr=e=>{const o=Oe(e);if(typeof o=="string")return wr[o]},ge=2,je={minEm:1.0625,fluidVw:1.0625*ge,maxEm:1.25},S="@media (prefers-color-scheme: dark)",Tr=["h1","h2","h3","h4","h5","h6"],Cr=["dd","dl","dt","li","ol","ul"],Er=[...Tr,...Cr,"p"],V=je.minEm/je.maxEm,B={h1:1.953,h2:1.563,h3:1.25},Ar={h1:{minEm:B.h1*V,fluidVw:B.h1*V*ge,maxEm:B.h1},h2:{minEm:B.h2*V,fluidVw:B.h2*V*ge,maxEm:B.h2},h3:{minEm:B.h3*V,fluidVw:B.h3*V*ge,maxEm:B.h3}},ut=75,ue=1.25,Rr=["0.7fr",`${ue}rem`,[`${ut}ch`,`calc(100% - ${ue*2}rem)`],`${ue}rem`,"1.2fr"],Ie=1,Pr=["0.7fr",`${Ie}rem`,[`${ut*1.1875}ch`,`calc(100% - ${Ie*2}rem)`],`${Ie}rem`,"1.2fr"],xr=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],Le=xr.join(", "),Mr=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Or=Mr.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),x={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},jr="hover-inherit-topic-color",Ir={[E[me]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.DEFAULT_TOPIC.light},[S]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.DEFAULT_TOPIC.dark}}}}},[E.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.ABLEISM}}},[E.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.ARTS_CRAFTS}}},[E.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.LEMON}}},[E.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.MENTAL_ILLNESS}}},[E.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.NEURODIVERGENCE}}},[E.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.PHILOSOPHY}}},[E.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.POLITICS}}},[E.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.RACISM}}},[E.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.SEXISM}}},[E.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.SUBSTANCE_ABUSE}}},[E.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.TECHNOLOGY}}},[E.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.TRANSPHOBIA}}}},ht=xe(),c={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:jr,baseFontSizeRange:je,darkMode:S,abbreviation:{backgroundImage:`linear-gradient(${["to top","hsl(64deg, 100%, 50%, 0.25)","hsl(64deg, 100%, 50%, 0.25) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[S]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[S]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:ht,description:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em",nested:{[S]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${ht}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[S]:{color:"hsl(212deg, 10%, 90%)"}}},[S]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[S]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[S]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:Le},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:Le,nested:{[S]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:Er,gitHubLogo:{fill:"#171515",nested:{[S]:{fill:"#fff"}}},headingRanges:Ar,[S]:{aside:{backgroundColor:"hsl(192deg, 15%, 13%)"},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(210deg, 10%, 90%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 85%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:Rr,mainGridSidePaddingRem:ue,monospaceFont:Le,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:Or},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[S]:{backgroundColor:"hsl(336deg, 100%, 7%)"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[S]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"hsl(47deg, 58%, 98%)",nested:{[S]:{backgroundColor:"hsl(41deg, 100%, 8%)"}}},separator:{borderBottom:"1px solid hsl(17deg, 78%, 90%)",nested:{[S]:{borderColor:"hsl(17deg, 70%, 17%)"}}}},skillLevel:{[b.BASIC]:{backgroundColor:"hsl(207deg, 25%, 83%)",nested:{[S]:{backgroundColor:"hsl(207deg, 15%, 43%)"}}},[b.INTERMEDIATE]:{backgroundColor:"hsl(188deg, 53%, 74%)",nested:{[S]:{backgroundColor:"hsl(188deg, 53%, 34%)"}}},[b.ADVANCED]:{backgroundColor:"hsl(188deg, 70%, 59%)",nested:{[S]:{backgroundColor:"hsl(188deg, 80%, 39%)"}}},[b.EXPERT]:{backgroundColor:"hsl(152deg, 100%, 39%)",nested:{[S]:{backgroundColor:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:Pr,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[S]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[S]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:Ir,topicTagIdentifier:xe(),topicTagInner:{backgroundImage:q(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[S]:{backgroundImage:q(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:q(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[S]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:q(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[S]:{color:"hsl(194deg, 8%, 50%)"}}}}}},Ye=["b","em","h1","h2","h3","i","strong"],he=["h1","h2","h3","h4","h5","h6"],Lr=[...he,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Yr=Array.from(new Set([...he,...Lr,"div","fieldset","form","hgroup","hr","pre"])),Dr=q(`
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
    font-size:        ${H(`${c.baseFontSizeRange.minEm}em`,`${c.baseFontSizeRange.fluidVw}vw`,`${c.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${C(["body"],{...c.document,...c.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${he.join(",")} {
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
`),Br=()=>{pe.global(q(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${Yr.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${he.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${C(Ye,c.emphasize)}

      h1 {
        font-size: ${H(`${c.headingRanges.h1.minEm}em`,`${c.headingRanges.h1.fluidVw}vw`,`${c.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${H(`${c.headingRanges.h2.minEm}em`,`${c.headingRanges.h2.fluidVw}vw`,`${c.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${H(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,`${c.headingRanges.h3.maxEm}em`)};
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

      ${C(["hr:after"],{...c.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${C(["pre"],c.pre)}

      ${C(["code"],{...c.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

      pre code {
        background-color: transparent;
        display:          block;
        line-height:      1.325em;
        margin:           0;
        padding:          0;
      }

      ${c.firstLastMarginZeroElements.map(e=>`${e}:first-child`).join(", ")} {
        margin-top: 0;
      }

      ${c.firstLastMarginZeroElements.map(e=>`${e}:last-child`).join(", ")} {
        margin-bottom: 0;
      }

      ${C(["a"],{...c.links,fontWeight:"bolder"})}

      ${C(["abbr"],{...c.abbreviation,textDecoration:"none"})}

      ${C(["aside","small"],c.deemphasize)}

      ${C(["aside"],{...c.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem","& p":{lineHeight:1.3333}})}

      ${Ye.map(e=>`aside ${e}`).join(", ")} {
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

      ${c.darkMode} {
        ${C(["body"],{...c[c.darkMode].document,...c[c.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${C(Ye,c[c.darkMode].emphasize)}
        ${C(["pre"],c[c.darkMode].pre)}
        ${C(["code"],c[c.darkMode].code)}
        ${C(["a"],c[c.darkMode].links)}
        ${C(["aside","small"],c[c.darkMode].deemphasize)}
        ${C(["aside"],c[c.darkMode].aside)}
        ${C(["hr:after"],c[c.darkMode].separator)}
      }
    `))},Nr=`
  ${c.mainGridColumns[0]}
  ${c.mainGridColumns[1]}
  min(
    ${c.mainGridColumns[2][0]},
    ${c.mainGridColumns[2][1]}
  )
  ${c.mainGridColumns[3]}
  ${c.mainGridColumns[4]}
`.replace(/\s+/g," "),ft={gridColumn:"1 / -1"},yt=pe(ft),R=l("div",{nested:{[`& > .${yt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:Nr,...ft}),$r=({children:e,shadow:o,...i})=>r(R,{...i},e),bt=([e,o,i])=>`rgba(${[e,o,i,0].join(",")})`,St=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`${bt(o)} 2rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${bt(e)} 5px`].join(", ")})`].join(", ")}:null,Hr=e=>{if(e!=null){const{darkMask:o,darkScroll:i,lightMask:n,lightScroll:s}=e;return{dark:St(i,o),light:St(s,n)}}return{dark:null,light:null}},vt=l($r,({shadow:e})=>{const{dark:o,light:i}=Hr(e),n=o==null?null:{[c.darkMode]:o};return{...i,backgroundAttachment:"local, scroll",backgroundPosition:"100% 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:"1rem, auto",paddingRight:c.mainGridSidePaddingRem,overflowX:"auto",nested:{...n,"& > *":{gridColumn:"3 / -1"}}}}),zr=l(R,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),wt=l("div",{paddingLeft:"1rem"}),_r=l("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),Fr=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),De="div",Ur={ContentContainer:De,InnerContainer:wt,OuterContainer:De,SymbolContainer:De},kt=e=>{const{children:o,ContentContainer:i,InnerContainer:n,OuterContainer:s,outerContainerProps:a,symbol:d,SymbolContainer:p}={...Ur,...e};return r(zr,{as:s,...a},r(_r,{as:p,role:"presentation"},d),r(wt,{as:n},r(Fr,{as:i},o)))},Gr=l("pre",{fontSize:"1rem"}),qr=l(vt,{backgroundAttachment:"local",backgroundImage:`linear-gradient(${["to left","rgba(255,255,255,1)","rgba(255,255,255,1) 5rem","rgba(255,255,255,0) 6rem"].join(",")})`,backgroundPosition:"calc(100% + 4rem) 0",backgroundRepeat:"no-repeat",backgroundSize:"6rem",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[c.darkMode]:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,1)","rgba(0,0,0,1) 5rem","rgba(0,0,0,0) 6rem"].join(",")})`}}}),Wr=e=>r(qr,{...e}),Xr=l(R,{...c.pre,backgroundImage:`linear-gradient(${["to left","rgba(124, 128, 131, 0.75)","rgba(124, 128, 131, 0.75) 0.5px","rgba(124, 128, 131, 0)    5px"].join(",")})`,nested:{[c.darkMode]:{...c[c.darkMode].pre,backgroundImage:`linear-gradient(${["to left","rgba(0, 164, 255, 0.75)","rgba(0, 164, 255, 0.75) 0.5px","rgba(0, 164, 255, 0)    5px"].join(",")})`},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),Vr=l("div",{...c.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Kr=({children:e})=>r(kt,{ContentContainer:Gr,InnerContainer:Wr,OuterContainer:Xr,symbol:"{",SymbolContainer:Vr},e),Jr=e=>e.map((o,i)=>i),Tt=(e,o)=>Jr(e).sort((i,n)=>{const s=o(e[i],e[n]);return s===0?i===n?0:i>n?1:-1:s}).map(i=>e[i]),Qr=e=>typeof e=="object"&&e!=null,Zr=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),ei=(e,o)=>Qr(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&Co().test(o),ti=({["aria-label"]:e,children:o,role:i})=>r(Zr,{"aria-label":e,role:i},o),oi={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},ri={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},ii={...oi,...ri},Ct=$.resolve(process.cwd(),"./syntax-themes"),[ni,si]=await Promise.all([nt($.resolve(Ct,"./yi-dark.json")),nt($.resolve(Ct,"./yi-light.json"))]),ai={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},ci={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},li=e=>e.trim().split(/\b\W*\b/).reduce((o,i)=>({...o,...ci[i]}),{}),di=e=>Object.entries(e).reduce((o,[i,n])=>{const s=ai[i];if(n==null||typeof s!="string")return o;const a=s==="fontStyle"?li(n):{[s]:n};return{...o,...a}},{}),[pi,mi]=await Promise.all([st({theme:ni}),st({theme:si})]),gi=new Set(Io.map(e=>e.id)),ui=new Set(["ts","tsx","typescript"]),Et=e=>e.explanation?.reduce((o,i)=>({...o,...i.scopes.reduce((n,{themeMatches:s})=>({...n,...s.reduce((a,{settings:d})=>({...a,...di(d)}),n)}),o)}),{color:e.color}),hi=(e,o,i={})=>{const n=Et(e),s=Et(o),a=s==null?null:{nested:{[c.darkMode]:s}},{content:d}=e;if(n==null&&a==null)return r("span",i,d);const p={...n,...a},m=l("span",p);return r(m,i,d)},fi=pe({paddingRight:"1rem"}),yi={className:fi},bi=(e,o)=>ot(r(X,{},r("pre",{},r("code",{},...e.reduce((i,n,s)=>{const a=n.map((p,m)=>{const g=o[s][m],f=m===n.length-1?yi:{};return hi(p,g,f)}),d=s===0?"":`
`;return[...i,d,...a]},[]))))),Si=e=>{const{lang:o,value:i,meta:n}=e,s=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,a=String(o)==="json5"?"json":o;let d;const p=i.replace(/^\n+|\n+$/g,"");if(!gi.has(a))d=Lo.plainTextRenderer(p,{});else{const m=mi.codeToThemedTokens(p,a),g=pi.codeToThemedTokens(p,a);d=bi(m,g)}ui.has(a)&&!n?.includes("ignore"),e.children=[],e.type="html",e.value=d},vi=()=>o=>{et(o,"code",Si)};import.meta.env=Re;const te=it.createRequire(import.meta.url),wi=te("rehype-parse"),ki=te("rehype-remark"),Ti=te("remark"),Ci=te("remark-abbr"),Ei=te("remark-stringify"),Ai=({className:e,children:o,...i})=>e==="language-id"?null:e==="code-container"?le(L,i,...tt(o)):r("div",{className:e,...i},...tt(o)),Ri=({children:e,...o})=>ei(o,e)?r(ti,o,e):r("span",o,e),Be={components:{div:Ai,pre:Kr,span:Ri},rehypePlugins:[Eo],remarkPlugins:[vi,Ci,Qo,Ao,Ro]},At=e=>{const{children:o=le(()=>null,{}),components:i={},rehypePlugins:n=[],remarkPlugins:s=[]}=e,a={...Be.components,...i},d={mdx:le,MDXProvider:xo,components:a,props:{}},p=typeof o=="string"?rt(o).trim():o,m=[...Be.rehypePlugins,...n],g=[...Be.remarkPlugins,...s],f=Po.sync(p,{rehypePlugins:m,remarkPlugins:g,skipExport:!0}).trim(),{code:h}=Mo(f,{objectAssign:"Object.assign"}),T=Object.keys(d),w=Object.values(d),y=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...T,`${h}

${y}`)(le,...w)},Pi=Object.entries(ii).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),xi=e=>[e,Pi].join(`

`),Ne=([e,...o],{includeAbbreviations:i=!0})=>{const n=typeof e=="string"?[e,...o].join(""):String.raw(e,...o);return i?xi(n):n},z=(...e)=>{const o=Ne(e,{includeAbbreviations:!0});return r(X,{},r(At,{},o))},Mi=(...e)=>{const o=Ne(e,{includeAbbreviations:!0});return r(X,{},r(At,{components:{p:L}},o))},Oi=(...e)=>{const o=Ne(e,{includeAbbreviations:!1});return Ti().use(wi).use(ki).use(Ei).use(Oo).use(jo).processSync(o).contents.toString().trim()},$e=(e,o)=>Number(e.toFixed(o)),He=parseInt("ff",16),Rt=parseInt("00",16),Pt=.05,xt=.15,Mt=.05;class oe extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const ji=/^[0-9a-f]{40}$/i,Ii=e=>ji.test(e),Li=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),Yi=e=>e.length===10,Di=/([0-9a-f]{2})([0-9a-f]{2})/ig,Ot=e=>{if(!Ii(e))throw new oe(e);const i=Array.from(e.matchAll(Di)??[]).map(([n,s,a])=>({x:s,y:a}));if(!Yi(i))throw new oe(e);return i},Bi=Symbol("IS_POINT"),Ni=e=>Object.assign(e,{[Bi]:!0}),jt=e=>{const o=parseInt(e,16);if(o>He||o<Rt)throw new Error(`Not a valid coordinate: ${e}`);return Ni(o)},$i=({x:e,y:o})=>({x:jt(e),y:jt(o)}),Hi=e=>e.length===10,It=(e,o)=>{try{const i=o.map($i);if(!Hi(i))throw new oe(e);return i}catch{throw new oe(e)}},zi=Symbol("SCALED_COORDINATE"),Lt=e=>e.reduce(({max:o,min:i},{y:n})=>({max:Math.max(Number(o),Number(n)),min:Math.min(Number(i),Number(n))}),{max:-Infinity,min:Infinity}),I=(e,o)=>Object.assign($e(e,2),{[zi]:o}),K=({x:e,xScale:o,y:i,yScale:n})=>({x:I(e,o),y:I(i,n)}),Yt=({x:e,y:o},{xScale:i,xShift:n,yScale:s,yShift:a})=>K({x:(e+n)*i,xScale:i,y:(o+a)*s,yScale:s}),Dt=({points:e,xMax:o,xScale:i,yScale:n})=>[K({x:0,xScale:i,y:0,yScale:n}),...e,K({x:o,xScale:i,y:0,yScale:n})].reduce((s,a,d,p)=>{if(d===0||d===p.length-1)return s;const m=I(0,n),g=[{x:p[d-1].x,y:m},a,{x:p[d+1].x,y:m}];return[...s,g]},[]),Bt=({segments:e,xMax:o,xScale:i,yScale:n})=>e.map(s=>{const[{x:a,y:d},{x:p,y:m},{x:g,y:f}]=s,h=g-a,T=m/h,y=6/T;if(y<1){const O=y*.2*a,A=a-O,Y=g+O,j=A<0?Math.abs(A):Y>o?o-Y:0,P=A+j,D=Y+j,F=y*.3,U=p+j,G=F*m,ae=m-G;return[K({x:P,xScale:i,y:d,yScale:n}),K({x:U,xScale:i,y:ae,yScale:n}),K({x:D,xScale:i,y:f,yScale:n})]}return s}),_i=({x:e,y:o},{x:i,y:n})=>{const s=i-e,a=n-o;return{angle:Math.atan2(a,s),length:Math.sqrt(s**2+a**2)}},Nt=({current:e,previous:o,next:i,reverse:n,smoothing:s,xScale:a,yScale:d})=>{const p=n?Math.PI:0,m=_i(o,i),g=m.angle+p,f=m.length*s,{x:h,y:T}=e,w=h+Math.cos(g)*f,y=T+Math.sin(g)*f;return{x:I(w,a),y:I(y,d)}},$t=({index:e,point:o,points:i,smoothing:n,xScale:s,yScale:a})=>{const d=i[e-1];if(d==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const p=i[e-2]??d,m=Nt({current:d,previous:p,next:o,reverse:!1,smoothing:n,xScale:s,yScale:a}),g=d,f=i[e+1]??o,h=Nt({current:o,previous:g,next:f,reverse:!0,smoothing:n,xScale:s,yScale:a});return[m,h,o]},Ht=({segment:e,smoothing:o,xScale:i,yScale:n})=>e.reduce((s,a,d)=>{if(d===0)return s;const m=$t({index:d,point:a,points:e,smoothing:o,xScale:i,yScale:n}).map(g=>`${g.x},${g.y}`).join(" ");return[...s,`C ${m}`]},[]),Fi=({baseYCoordinate:e,isBaselineBelowMidpoint:o,segments:i,xScale:n,yMax:s,yScale:a,yTilt:d=!1})=>i.reduce((p,m,g,f)=>{const{length:h}=f,[T,w,y]=m,{x:M,y:O}=T,{x:A,y:Y}=w,{x:j,y:P}=y,D=j-M,F=D===0?0:Math.max(Y/D*Mt,xt),U=d?.1:0,G=1-U,ae=1+U,po=g%2==0?G:ae,mo=o?O+e:s-O+e,ce={x:M,y:I(mo*po,a)},go=g%2==0?G:ae,uo=o?P+e:s-P+e,Ke={x:I(j,n),y:I(uo*go,a)},Je=A-M,Qe=j-A,ho=Qe>Je?0:0-(A-M)*Pt,Ze=(h-g)*(a/100*s),fo={x:I(A+ho,n),y:I(Y-Ze,a)},yo=Ht({segment:[ce,fo,Ke],smoothing:F,xScale:n,yScale:a}),bo=Qe>Je?(j-A)*Pt:0,So={x:I(A+bo,n),y:I(s-Ze,a)},vo=Ht({segment:[Ke,So,ce],smoothing:F,xScale:n,yScale:a});return[...p,[`M ${ce.x},${ce.y}`,...yo,...vo,"Z"].join(" ")]},[]),Ui=({hash:e,xPadding:o=0,xScale:i=1,yOffset:n=.5,yPadding:s=0,yScale:a=1})=>{const d=Ot(e),p=It(e,d),m=Tt(p,({x:P},{x:D})=>Number(P)===Number(D)?0:Number(P)>Number(D)?1:-1),g=o/2,f=s/2,h=m.map(P=>Yt(P,{xScale:i,xShift:g,yScale:a,yShift:f})),T=(He+o)*i,{max:w}=Lt(h),y=(w+s)*a,M=Dt({points:h,xMax:T,xScale:i,yScale:a}),O=Bt({segments:M,xMax:T,xScale:i,yScale:a}),A=n>.5,Y=A?y*n:-1*y*n;return{segmentPaths:Fi({baseYCoordinate:Y,segments:O,xScale:i,yMax:y,isBaselineBelowMidpoint:A,yScale:a}),xMax:T,yMax:y}};var ze;(function(e){e.PNG="png"})(ze||(ze={}));const _e=process.cwd(),Fe=e=>e.startsWith("/")?$.resolve(_e,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):$.extname(e)==""?$.resolve(_e,"./src/pages/",`${e}.tsx`):e;var fe;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A"})(fe||(fe={}));var re;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(re||(re={}));const Gi="origin",qi="main",Ue=e=>{const{branch:o=qi,decode:i,filter:n=fe.FIRST,format:s,path:a=_e,remote:d=Gi}=e,{error:p,stdout:m}=Do.spawnSync("git",["log",n,`--branches=${o}`,`--format=${s}`,`--remotes=${d}`,"--",a]);if(p)throw p;const g=m.toString().trim();return(g===""?[]:g.split(`
`)).map(i)},zt=e=>{const o=new Date(e);if(!isNaN(o.getTime()))return o},Wi=e=>{const o=Fe(e),[i=null]=Ue({decode:zt,filter:fe.CURRENT,format:re.ISO_DATE,path:o});return i},Xi=e=>{const o=Fe(e),[i=null]=Ue({decode:zt,format:re.ISO_DATE,path:o});return i},_t=e=>{const o=Ce.readFileSync(e).toString();let i=Bo.createHash("sha1");return i.update(o),i.digest("hex")},Vi=e=>{const o=Fe(e),[i]=Ue({decode:Pe,format:re.HASH,path:o});return i??_t(o)},Ft={height:630,width:1200},Ki=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",Ji=Yo({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Qi=(e,o,i=ze.PNG)=>{const n=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),s=Ji.hash(o),a=$.resolve(n,`${s}.${i}`),d=a.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:a,imageType:i,publicPath:d,...Ft}}};var ie;(function(e){e.IMMUTABLE="immutable",e.MUTABLE="mutable"})(ie||(ie={}));const Ut=(e,o,i,n,s=[E.TECHNOLOGY])=>{const a=n===ie.MUTABLE,d=o.replace(/^file:(\/\/)?/,""),p=a?_t(d):Vi(e),m={created:Xi(e)??Ce.statSync(d).ctime,updated:Wi(e)??Ce.statSync(d).mtime},f=Qi(o,a?{importURL:o,stat:m,topics:s}:{hash:p,importURL:o});return{hash:p,host:Ki,path:e,social:f,stat:m,title:i,topics:s}},Gt=()=>r(L,null,r("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},r("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),r("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),r("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),r("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),r("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),r("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),r("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),r("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},r("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),r("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},r("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),r("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),r("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),r("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},r("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Zi=()=>r("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},r("defs",null,r(Gt,null))),en=1.6180334,tn=4,qt=$e(en*5,6),Wt=.75,J=.15,on=1.5,ye=H("6rem",`${100/qt}vw`,"10rem"),rn=l(R,{height:ye,position:"relative",width:"100%"}),nn=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),sn=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var ne;(function(e){e.INLINE="inline",e.NONE="none"})(ne||(ne={}));const Xt={xPadding:tn,xScale:qt,yOffset:Wt,yPadding:J,yScale:on},be=e=>{const{className:o,defsUsage:i=ne.INLINE,hash:n,height:s,rawSVG:a=!1,styleRenderer:d=W,title:p,topics:m=[],width:g}=e,f=m.length<2?[...m,E[me]]:m,h=P=>`${P}-${n}`,{segmentPaths:T,xMax:w,yMax:y}=Ui({...Xt,hash:n}),M=y*Wt,O=y*J/10.24,A=O*.75,j=r(nn,{className:yt,height:s,preserveAspectRatio:"none",viewBox:[0,0,w,y].join(" "),width:g},r("title",null,"Generated art for the page or post titled",r("i",null,p),", with the content or commit hash ",n," ",f.length>0?[", and the topics: ",f.map(String).join(", ")]:null),r("defs",null,i===ne.INLINE?r(Gt,null):null,r("filter",{id:h("blur")},r("feOffset",{in:"SourceGraphic",dx:"0",dy:A,result:"glowOffsetOut"}),r("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:O,result:"glowBlurOut"}),r("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),r("clipPath",{id:h("blurOverlayClip")},r("rect",{x:"0",width:w,y:M,height:y})),r("filter",{id:h("blurOverlay")},r("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:A}),r("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:O})),r("filter",{id:h("blurUnderlay")},r("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:A}),r("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:O}),r("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),r("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),r("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),r("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:O})),r("g",{id:h("blobs")},T.map((P,D)=>{const F=D%f.length,U=f[F],G=d.renderRule(()=>({...c.topicColors[U]}),Object.keys);return r(sn,{key:P,className:G,d:P,mask:"url(#softVerticalFade)"})}))),r("g",{transform:[`translate(0, ${y*J})`,`scale(1, ${1-J*2})`].join(" "),filter:`url(#${h("blur")})`},r("use",{href:`#${h("blobs")}`,mask:"url(#horizontalMidFade)"})),r("g",{"clip-path":`url(#${h("blurOverlayClip")})`,filter:`url(#${h("blurOverlay")})`,transform:[`translate(0, ${y*J})`,`scale(1, ${1-J*2})`].join(" ")},r("use",{href:`#${h("blobs")}`,mask:"url(#softVerticalFade)"})));return a?j:r(rn,{className:o},j)},an=[,"January","February","March","April","May","June","July","August","September","October","November","December"],cn=l("time",{nested:{[c.darkMode]:{...c[c.darkMode].deemphasize}},...c.deemphasize});var N;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(N||(N={}));const Se=({date:e,mode:o=N.DEFAULT,...i})=>{const n=e.getMonth()+1,s=e.getFullYear(),a=o===N.SHORT?`${n}/${s}`:o===N.META?"":[e.getDate(),an[n],s].join(" ");return r(cn,{...i,datetime:e.toISOString()},a)},ln=l("a",{...c.topicTagLink(c.topicTagIdentifier.className)}),dn=l("span",c.topicTagIdentifier()),pn=l(dn,{...c.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),mn=({className:e,link:o=!0,topic:i})=>{const n=kr(i),s=Oe(i);if(n==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=o?ln:"span",d=o?{href:`/blog/topics/${n}/`}:{};return r(a,{className:[e,c.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...d},r(pn,null,s))},Vt=l(mn,e=>({...c.topicTagOuter,...c.topicColors[Oe(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),gn=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),un=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),Kt=({className:e,link:o=!0,topics:i})=>r(gn,{className:e},i.map(n=>typeof n=="string"?r(un,{key:Sr(n)},r(Vt,{link:o,topic:n})):null)),hn=e=>e.reduce((o,i)=>{const n=i.stat.created.getFullYear(),s=o[n]??[];return{...o,[n]:[...s,i]}},{}),fn=l(R,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),yn=l(R,{...c.blog.listing.item,minHeight:ye,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),bn=l(R,{paddingTop:`calc(${ye} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),Sn=l(R,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),vn=l("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),wn=pe({backdropFilter:"blur(0.25rem)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem)"}),kn=l("h2",{...c.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),Tn=l(Se,{padding:"0 0.5rem 0.125rem 0"}),Cn=l(Kt,{gridColumn:"3 / 3"}),En=l("div",{...c.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),An=l("a",{fontSize:"0.875em"});var ve;(function(e){e.DATE="date"})(ve||(ve={}));var we;(function(e){e.ASC="asc",e.DESC="desc"})(we||(we={}));const Rn=({order:e=we.DESC,posts:o,sort:i=ve.DATE})=>{const n=o.slice().sort((a,d)=>e===we.DESC&&i===ve.DATE?a.stat.created>d.stat.created?-1:1:0),s=hn(n);return r(L,null,Object.entries(s).map(([a,d])=>r(L,{key:a},r(fn,null,d.map(p=>{const{CustomArt:m=be,description:g,hash:f,path:h,stat:{created:T},title:w,topics:y}=p;return r(yn,{key:h},r(bn,{as:"a",href:h},r(vn,null,r(m,{defsUsage:ne.NONE,hash:f,padded:!0,renderType:"listing",title:w,topics:y})),r(Sn,null,r(kn,{className:wn},w),r(Tn,{date:T}))),r(Cn,{link:!1,topics:y}),r(En,{className:c.blog.listing.descriptionIdentifier},g),r("p",null,r(An,{href:h},"Read more\u2026")))})))))},Pn=()=>r(L,null,r("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),r("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),r("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),r("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),r("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),r("meta",{name:"application-name",content:"Eyelidlessness"}),r("meta",{name:"msapplication-TileColor",content:"#555555"}),r("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),r("meta",{name:"theme-color",content:"#ffffff"}));Br();const Jt=({children:e,meta:{description:o,host:i,social:{image:n},title:s},...a})=>r(No,{...a},r(Ee.title,null,s," | Eyelidlessness"),o!=null?r(Ee.description,null,o):r(L,null),r("style",{dangerouslySetInnerHTML:{__html:Dr}}),r("meta",{name:"twitter:card",content:"summary_large_image"}),r("meta",{name:"twitter:site",content:"@eyelidlessenss"}),r(Ee.image,{alt:s,height:n.height,src:`${i}${n.publicPath}`,width:n.width}),r(L,null,e),r(Pn,null)),xn=({as:e="div",devilsBreakpoint:o,gap:i,...n})=>{const s=l(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[i?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:i?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return r(s,{...n})},_=512,Qt=[0,0,_,_].join(" "),Mn=_/2,On=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),jn=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:Qt,width:"0"},r("defs",null,r("mask",{id:"octocat-knockout"},r("rect",{fill:"#fff",height:_,mask:"url(#octocat)",rx:Mn,width:_}),r("path",{d:On,fill:"#000"})))),In=l("rect",{...c.gitHubLogo}),Zt=({className:e})=>r("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:Qt},r("title",null,"GitHub"),r(In,{height:_,mask:"url(#octocat-knockout)",width:_})),ke={height:60,width:338},Ln=l("svg",{display:"inline-block",maxWidth:"100%",width:`${ke.width}px`}),Yn=l("use",{nested:{[c.darkMode]:{...c[c.darkMode].siteLogo}},...c.siteLogo,fill:"currentcolor"}),Dn=`0 0 ${ke.width} ${ke.height}`,Bn=()=>r(Ln,{viewBox:Dn},r(Yn,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),r("title",null,"Eyelidlessness")),{columns:Q}=c.siteHeader,Nn=`
  ${Q[0]}
  ${Q[1]}
  min(
    ${Q[2][0]},
    ${Q[2][1]}
  )
  ${Q[3]}
  ${Q[4]}
`.replace(/\s+/g," "),$n=l("header",{...c.artOverlay,display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Nn,padding:"1rem 0",position:"relative",zIndex:1}),Hn=l("div",{gridColumn:3}),zn=l("div",{margin:"0 auto"}),_n=l("a",{textDecoration:"none"}),Fn=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),eo=1,Un=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${eo/2}rem`,padding:0}),Gn=l("a",{...c.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[c.darkMode]:{...c[c.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),to="1.5em",ma=l(Zt,{display:"block",width:`clamp(1.125em, 4vw, ${to})`}),qn=()=>{const e=[{label:"Blog",location:"/"},{label:"Hire Me",location:"/resume/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],o=e.reduce((s,a)=>typeof a.label=="string"?s+a.label.length:s,0),i={horizontal:"2rem"},n=`${[`${ke.width}px`,i.horizontal,`${o+1}ch`,to,`${e.length*eo}rem`].join(" + ")}`;return r($n,null,r(Hn,null,r(xn,{as:"nav",devilsBreakpoint:n,gap:i},r(zn,null,r(_n,{href:"/"},r(Bn,null))),r(Fn,null,e.map(({location:s,label:a})=>r(Un,null,r(Gn,{href:s},a)))))))},Wn=l(R,{paddingTop:0,paddingBottom:"4em"}),oo=e=>r(X,null,r(qn,null),r(Wn,{as:"main",...e})),Xn=l(R,{...c.description,nested:{...c.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Vn=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Kn=l("div",{fontSize:"0.889em"}),Jn=({as:e="section",title:o,...i})=>r(Xn,{as:e,itemprop:"description"},o?r(Vn,null,o):null,r(Kn,{...i})),Qn=l(R,{...c.artOverlay}),Zn=l("h1",{marginBottom:"0.25rem"}),es=l(R,{marginBottom:"1rem"}),ts=e=>{const{children:o,CustomArt:i,description:n,descriptionRaw:s,hash:a,stat:{created:d},title:p,topics:m}=e;return r(L,null,r(Jt,{meta:{...e,description:s}}),r(oo,{as:"article"},r(es,null,i==null?r(be,{hash:a,title:p,topics:m}):r(i,{hash:a,renderType:"post",StylesProvider:X,title:p,topics:m}),r(Qn,null,r(Zn,null,p),r(Se,{date:d,itemprop:"datePublished"}),r(Kt,{link:!1,topics:m}))),r(Jn,null,n),o))},os=async e=>{const{description:o,importURL:i,path:n,title:s,topics:a}=e,{CustomArt:d,hash:p,host:m,social:g,stat:f}=Ut(n,i,s,ie.IMMUTABLE,a),h=Oi`${ot(r(L,null,o))}`;return{CustomArt:d,description:o,descriptionRaw:h,hash:p,host:m,path:n,social:g,stat:f,title:s,topics:a}},rs=l(R,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),se=e=>r(rs,{as:"section",...e}),Te=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),is=l(Te,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),Ge=l(is,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),ns=l(se,{padding:0}),ss=l(Te,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),as=l("a",{...c.resume.contactList.link,fontSize:"0.88889em",fontWeight:500,minWidth:"auto",textDecoration:"none"}),cs=l("span",{nested:{"@media print":{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),qe=({children:e,printLabel:o,...i})=>r(as,{...i},r(cs,{"data-print-label":o},r("span",null,e))),ls=l(R,{...c.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...c.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"}}}),We="@media (min-width: 44.625rem)",ds=l(Te,{display:"block",margin:0,nested:{"& > *":{margin:"0 0 1rem"},[We]:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",margin:"0 -0.5rem -0.5rem",nested:{"& > *":{margin:"0 0.5rem 0.5rem"}}}}}),Xe=l("h2",{fontSize:H(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),ps=l(ds,{fontSize:"0.88889em"}),ms=l("ul",{display:"block",padding:0}),gs=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0.125rem 0",padding:0,nested:{"&:last-child":{marginRight:0},[We]:{display:"block",nested:{"&:last-child":{marginBottom:0}}}}}),us=Object.values(b).reduce((e,o)=>({...e,[o]:l("span",{...c.resume.skillLevel[o],borderRadius:"4px",display:"inline-block",height:"8px",margin:"0 0.325rem 0 0",width:"8px",verticalAlign:"middle",nested:{...c.resume.skillLevel[o].nested,[We]:{margin:"0 0.325rem"}}})}),{}),hs=({name:e,skills:o})=>r("div",{itemscope:!0,itemtype:"http://schema.org/ItemList"},r(Xe,{itemprop:"name"},e),r(ms,null,o.map(({level:i,name:n})=>{const s=us[i];return r(gs,{key:n,itemprop:"itemListElement"},r(s,{role:"img",title:`Skill level: ${i}`}),Mi`${n}`)}))),fs=l(R,{padding:"1rem 0"}),ys=l("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),bs=/^(\d{4})-(\d{2})$/,ro=e=>{const o=e.match(bs);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,i,n]=o;return new Date(`${i}-${n}-01T00:00:00`)},io=l("div",{fontSize:"0.88889em"}),Ve=l(Se,{fontSize:"inherit"}),Ss=l("h2",{marginBottom:"0.5rem"}),no=({range:[e,o]})=>{const i=ro(e),n=ro(o);return e==o?r(io,null,r(Ve,{date:n,itemprop:"endDate",mode:N.SHORT})):r(io,null,r(Ve,{date:i,itemprop:"startDate",mode:N.SHORT})," \u2013 ",r(Ve,{date:n,itemprop:"endDate",mode:N.SHORT}))},vs=l("div",{fontSize:"0.88889rem"}),ws=l("ul",{fontSize:"0.88889em",paddingInlineStart:0}),ks=l("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),Ts=l(fs,{marginBottom:"0.5rem",paddingBottom:"1.5rem",position:"relative",nested:{"&:after":{...c.resume.employment.separator,bottom:0,content:'""',display:"block",gridColumn:"3 / 3",left:0,position:"absolute",width:"100%"},"&:last-child":{marginBottom:0},"&:last-child:after":{display:"none"}}}),Cs=({employer:e,end:o,highlights:i,position:n,start:s,summary:a,...d})=>r(Ts,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...d},r(Ge,null,r("h3",{itemprop:"name"},e),r(no,{range:[s,o]})),r(vs,{itemprop:"roleName"},n),a==null?null:r(ys,{itemprop:"description"},z(a)),i==null?null:r(ws,{itemtype:"http://schema.org/ItemList"},i.map(p=>r(ks,{key:p,itemprop:"itemListElement"},z(p))))),Es=l(se,{...c.resume.employment.container,marginTop:"1rem"}),As=({employment:e})=>r(Es,null,r(Ss,null,"Recent Experience"),e.history.map(o=>r(Cs,{...o}))),Rs=l("h3",{paddingLeft:0,textIndent:0}),Ps=l("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),so="@media (min-width: 41.666rem)",xs=l("a",{display:"block",padding:"0 0.5rem 0.5rem 0.5rem",zIndex:1,nested:{"& svg":{width:"1.25em"},[so]:{paddingLeft:0}}}),Ms=l("div",{paddingTop:"0.05556rem"}),Os=l("div",{alignItems:"start",display:"grid",gridTemplateColumns:"auto 1fr",padding:"1rem 0"}),js=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),ao=({project:{description:e,end:o,repo:i,role:n,title:s,start:a,summary:d}})=>r(Os,null,r(xs,{href:i},r(Zt,null)),r(Ms,null,r(Ge,null,r(Rs,null,r(Ps,{href:i},s)),r(no,{range:[a,o]})),r(js,null,n===v.CREATOR?z(e):null,z(d)))),Is=l(Te,{display:"block",margin:0,nested:{[so]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}}}}),co=l("div",{marginTop:"0.5rem"}),Ls=({projects:e})=>{const{creator:o,contributor:i}=e.reduce((n,s)=>{const a=s.role===v.CREATOR?"creator":"contributor";return{...n,[a]:[...n[a],s]}},{creator:[],contributor:[]});return r(se,null,r(Is,null,r("div",null,r(Xe,null,"Projects I Created"),r(co,null,o.map(n=>r(ao,{project:n})))),r("div",null,r(Xe,null,"Open Source Contributions"),r(co,null,i.map(n=>r(ao,{project:n}))))))},Ys=l(R,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),Ds=l(Se,{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"}),lo=e=>e.replace(/^https?:\/\/|\/$/g,""),Bs=({className:e,id:o,meta:i,resume:n,updated:s})=>{const{contact:{email:a,website:d},employment:p,info:m,name:g,projects:f,skills:h,social:T}=n;return r(Ys,{className:e,id:o,itemscope:!0,itemtype:"http://schema.org/Person"},r(jn,null),r(be,{...i}),r(ns,null,r(Ge,null,r("h1",{itemprop:"name"},g),r(Ds,{date:s,itemprop:"datePublished",mode:N.META}),r(ss,null,r(qe,{href:`mailto:${a}`,itemprop:"email",printLabel:a},"Email"),r(qe,{href:d,itemprop:"url",printLabel:lo(d),rel:"me"},"Website"),T.map(({network:w,url:y})=>r(qe,{href:y,itemprop:"url",printLabel:lo(y),rel:"me"},w)))),r(ls,{itemprop:"description"},z(m.brief))),r(se,{"aria-label":"Skillsets"},r(ps,null,Object.entries(h.merged).map(([w,y])=>r(hs,{key:w,name:w,skills:y})))),r(As,{employment:p}),r(Ls,{projects:f}),r(se,null,r("h2",null,"References"),z("Available upon request.")))},ga=l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),ua=l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),ha=l("a",{...c.resume.contactList.link,textDecoration:"none"});export{ye as BLOG_ART_HEIGHT,be as BlogArt,Zi as BlogArtDefs,Rn as BlogListing,ts as BlogPost,He as COORDINATE_MAX,Rt as COORDINATE_MIN,R as FullBleedContainer,vt as FullBleedScrollableOverflow,kt as FullBleedSymbolBlock,Jt as Head,oe as InvalidHashError,xt as MIN_SMOOTHING,oo as Main,ie as PageMetadataType,Bs as Resume,Mt as SMOOTHING_RATIO,Ft as SOCIAL_IMAGE_DIMENSIONS,X as StylesProvider,E as Topic,Vt as TopicTag,Re as __SNOWPACK_ENV__,Xt as blogArtDefaultParameters,H as clamp,$t as cubicBezierPoints,os as getBlogPostStaticProps,Dt as getNaiveSegments,Bt as getNonPhallicSegments,Ut as getPageMetadata,Li as hexChars,xe as identifier,z as mdx,W as renderer,Jo as resetAbbrContext,yr as resume,Yt as scalePoint,Tt as sortBy,l as styled,c as theme,$e as toFixed,Ot as toHexPointSequence,It as toPointSequence,Lt as yBounds};
