import ot from"unist-util-visit";import{h as r,Fragment as j,toChildArray as rt}from"https://cdn.skypack.dev/preact@10.5.10";import"fela-tools";import{isobject as To,createComponent as ko,RendererProvider as Eo,createSchema as t,emojiRegex as Co,h as it,rehypeAccessibleEmojis as Ro,remarkSlug as Ao,remarkSmartypants_1 as Po}from"./_vendor/index.js";import"sharp";import xo from"@mdx-js/mdx";import{mdx as me,MDXProvider as Mo}from"@mdx-js/preact";import{transform as Io}from"buble-jsx-only";import nt from"dedent";import st from"module";import Oo from"remark-mdx";import jo from"remark-mdx-to-plain-text";import N from"path";import{loadTheme as at,getHighlighter as ct}from"shiki";import{BUNDLED_LANGUAGES as Lo}from"shiki-languages";import{renderers as Yo}from"shiki-twoslash";import Pe from"fs";import Do from"node-object-hash";import Bo from"child_process";import $o from"crypto";import{Head as lt,seo as ge}from"microsite/head";import{createRenderer as No}from"fela";import{processStyleWithPlugins as Ho,KEYFRAME_TYPE as dt,isNestedSelector as _o,normalizeNestedProperty as zo,isMediaQuery as Fo,generateCombinedMediaQuery as pt,isSupport as Uo,generateDeclarationReference as Go,isUndefinedValue as qo,generateCSSSelector as Wo,RULE_TYPE as Xo}from"fela-utils";import{cssifyDeclaration as Vo,cssifyObject as Ko}from"css-in-js-utils";import mt from"md5";let xe=new Set;const Jo=()=>{xe=new Set},Qo=()=>e=>{ot(e,"abbr",o=>{const{abbr:i}=o;xe.has(i)&&(delete o.abbr,delete o.children,delete o.data,delete o.reference,Object.assign(o,{type:"text",value:i})),xe.add(i)})},gt="production",Zo="production",er=!0;var Me=Object.freeze({__proto__:null,MODE:gt,NODE_ENV:Zo,SSR:er});const tr=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),E=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((i,[n,s])=>typeof s=="object"&&(n==="nested"||n.includes("&"))?i:`${i}${tr(n)}:${s};`,""),"}",Object.entries(o).map(([i,n])=>{if(typeof n=="object"){if(i==="nested")return Object.entries(n).map(([s,a])=>{const d=e.map(p=>s.replace(/&/g,p));return E(d,a)}).join("");if(i.includes("&")){const s=e.map(a=>i.replace(/&/g,a));return E(s,n)}}return""},[]).join("")].join(""),H=(...e)=>`clamp(${e.join(",")})`,X=e=>e.replace(/\s+/g," ").trim(),ue=e=>e;function oe(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function or(e,o,i,n,s,a){const d=[];return s&&d.push(oe(s).slice(0,16)),n&&d.push(oe(n).slice(0,16)),i&&d.push(oe(i).slice(0,16)),d.push(oe(e).slice(0,16)),d.push(oe(o).slice(0,16)),d.push(a.slice(0,8)),d.join("_")}function rr(e,o,i=[""]){let n="";for(const a in e){const d=e[a];n=`${n}${a}{${Ko(d)}}`}let s="";for(let a=0;a<i.length;a++){const d=i[a];s=`${s}@${d}keyframes ${o}{${n}}`}return s}function ir(){return e=>(e.renderKeyframe=(o,i)=>{const n=o(i,e),s=Ho(e,n,dt,i),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const d=mt(a),p=(e.selectorPrefix||"_")+d.slice(0,8),m=rr(s,p,e.keyframePrefixes),g={type:dt,keyframe:m,name:p};e.cache[a]=g,e._emitChange(g)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...i},n="",s="",a="")=>{let d=o?` ${o}`:"";for(const p in i){const m=i[p];if(To(m))if(_o(p))d+=e._renderStyleToClassNames(m,n+zo(p),s,a);else if(Fo(p)){const g=pt(s,p.slice(6).trim());d+=e._renderStyleToClassNames(m,n,g,a)}else if(Uo(p)){const g=pt(a,p.slice(9).trim());d+=e._renderStyleToClassNames(m,n,s,g)}else console.warn(`The object key "${p}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const g=Go(p,m,n,s,a);if(!e.cache.hasOwnProperty(g)){if(qo(m)){e.cache[g]={className:""};continue}const u=Vo(p,m),T=mt(g),v=e.devMode?or(p,m,n,s,a,T):(e.selectorPrefix||"_")+T.slice(0,8),f=Wo(v,n),M={type:Xo,className:v,selector:f,declaration:u,pseudo:n,media:s,support:a};e.cache[g]=M,e._emitChange(M)}const y=e.cache[g].className;y&&(d+=` ${y}`)}}return d},e)}import.meta.env=Me;const he=st.createRequire(import.meta.url),{default:nr}=he("fela-identifier"),{default:sr}=he("fela-plugin-embedded"),{default:ar}=he("fela-plugin-multiple-selectors"),{default:cr}=he("fela-plugin-typescript"),lr=gt==="development",dr=()=>{const e=nr(),o=No({devMode:lr,enhancers:[ir(),e],plugins:[sr(),ar(),cr()]});return{identifier:e,renderer:o}},{identifier:Ie,renderer:V}=dr(),pr=e=>Array.isArray(e)?e:[e],mr=e=>({children:o})=>r(Eo,{renderer:e},...pr(o)),K=mr(V),gr=e=>V.renderRule(ue,e),fe=Object.assign(gr,{global:V.renderStatic.bind(V)}),l=(e,o)=>{const i=typeof o=="function"?o:()=>o;return ko(i,e,Object.keys)},h=t({}),ut="FRESH@0.1.0",ua=t({$schema:"http://json-schema.org/draft-07/schema#",title:"FRESH Resume Schema",type:"object",additionalProperties:h,required:["name","meta"],properties:{name:t({type:"string",description:"The candidate's name as it should appear on the resume."}),meta:t({type:"object",additionalProperties:h,description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools.",required:["format"],properties:{format:t({const:ut,description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:t({type:"string",description:"The semantic version number for this resume."})}}),info:t({type:"object",additionalProperties:h,description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote.",properties:{label:t({type:"string",description:"A label for this resume, such as 'Full-Stack Developer'."}),class:t({type:"string",description:"Profession type or 'character class'."}),image:t({type:"string",description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:t({type:"string",description:"A short description or summary of yourself as a candidate."}),quote:t({type:"string",description:"Candidate quote or byline."})}}),disposition:t({type:"object",additionalProperties:h,description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like.",properties:{travel:t({type:"integer",description:"Percentage of time willing to travel (0 to 100)."}),authorization:t({type:"string",description:"Work authorization: citizen, work visa, etc."}),commitment:t({type:"array",description:"Types of work commitment desired: contract, perm, seasonal, etc.",items:t({type:"string",description:"One of: contract, permanent, part-time, seasonal, full-time."})}),remote:t({type:"boolean",description:"Open to remote employment opportunities."}),relocation:t({type:"object",additionalProperties:h,properties:{willing:t({oneOf:[t({type:"string"}),t({type:"boolean"})],description:"Willingness to relocate."}),destinations:t({type:"array",description:"Preferred destinations for relocation",items:t({type:"string",description:"City or area of relocation."})})}})}}),contact:t({type:"object",additionalProperties:h,description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types.",properties:{email:t({type:"string",description:"Primary contact email.",format:"email"}),phone:t({type:"string",description:"Primary phone number."}),website:t({type:"string",description:"Website, blog, or home page.",format:"uri"}),other:t({type:"array",items:t({type:"object",additionalProperties:h,properties:{label:t({type:"string",description:"A label for this contact information."}),category:t({type:"string",description:"Type of contact information: email, phone, url, postal, or IM."}),value:t({type:"string",description:"Phone number, email address, website, etc."})}})})}}),location:t({type:"object",description:"The 'location' section, when present, contains the candidate's location and address info.",additionalProperties:h,properties:{address:t({type:"string",description:"Your full postal address."}),code:t({type:"string",description:"Postal or other official routing code."}),city:t({type:"string",description:"Your home city."}),country:t({type:"string",description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:t({type:"string",description:"Your state, region, or province."})}}),employment:t({type:"object",description:"The 'employment' section describes the candidate's formal employment history.",additionalProperties:h,properties:{summary:t({type:"string",description:"Summary of overall employment."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["employer"],properties:{employer:t({type:"string",description:"Employer name."}),position:t({type:"string",description:"Your position or formal job title."}),url:t({type:"string",description:"Employer website.",format:"uri"}),start:t({type:"string",description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities under this employer."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this position.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})})}}),projects:t({type:"array",description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Project name or code-name."}),category:t({type:"string",description:"Project type: open-source, private, side project, etc."}),description:t({type:"string",description:"Project description or summary."}),summary:t({type:"string",description:"A summary of your achievements and responsibilities on the project."}),role:t({type:"string",description:"Your role on the project: Contributor, Creator, etc."}),url:t({type:"string",description:"Project URL.",format:"uri"}),media:t({type:"array",description:"Media associated with this project.",items:t({type:"object",additionalProperties:h,required:["category"],properties:{category:t({type:"string",description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:t({type:"string",description:"Friendly media name."}),url:t({type:"string",description:"Media link, path, or location."})}})}),repo:t({type:"string",description:"Repo URL.",format:"uri"}),start:t({type:"string",description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy project-related achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this project.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})}),skills:t({type:"object",description:"A description of the candidate's formal skills and capabilities.",additionalProperties:h,properties:{sets:t({type:"array",items:t({type:"object",additionalProperties:h,required:["name","skills"],properties:{name:t({type:"string",description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:t({type:"string",description:"Level of mastery of the skill."}),skills:t({type:"array",items:t({type:"string",description:"Title or ID of a skill from the skills list."})})}})}),list:t({type:"array",items:t({type:"object",additionalProperties:h,required:["name"],properties:{name:t({type:"string",description:"The name or title of the skill."}),level:t({type:"string",description:"A freeform description of your level of mastery with the skill."}),summary:t({type:"string",description:"A short summary of your experience with this skill."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Number of years you've used the skill."})}})})}}),service:t({type:"object",description:"The 'service' section describes the candidate's overall service history in the true sense of the word 'service': volunteer work, military participation, civilian core, rescue and emergency services, and the like.",additionalProperties:h,properties:{summary:t({type:"string",description:"Summary of overall service/volunteer experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["organization"],properties:{category:t({type:"string",description:"The type of service work, such as volunteer or military."}),organization:t({type:"string",description:"The service organization, such as Red Cross or National Guard."}),position:t({type:"string",description:"Your position or formal service role."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date you joined the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you left the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities at this organization."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this service.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),education:t({type:"object",additionalProperties:h,description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses.",required:["level"],properties:{summary:t({type:"string",description:"Summary of overall education."}),level:t({type:"string",description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:t({type:"string",description:"Your degree, if any (BSCS, BA, etc.)."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["institution"],properties:{title:t({type:"string",description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."}),institution:t({type:"string",description:"College or school name."}),area:t({type:"string",description:"e.g. Arts"}),studyType:t({type:"string",description:"e.g. Bachelor"}),start:t({type:"string",description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),grade:t({type:"string",description:"Grade or GPA."}),curriculum:t({type:"array",description:"Notable courses, subjects, and educational experiences.",items:t({type:"string",description:"The course name and number or other identifying info."})}),url:t({type:"string",description:"Website or URL of the institution or school.",format:"uri"}),summary:t({type:"string",description:"A short summary of this education experience."}),keywords:t({type:"array",description:"Keywords associated with this education stint.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Graduated *summa cum laude*'."})}),location:t({type:"string",description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),social:t({type:"array",description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like.",items:t({type:"object",additionalProperties:h,required:["network","user","url"],properties:{network:t({type:"string",description:"The name of the social network, such as Facebook or GitHub."}),user:t({type:"string",description:"Your username or handle on the social network."}),url:t({type:"string",description:"URL of your profile page on this network.",format:"uri"}),label:t({type:"string",description:"A friendly label."})}})}),recognition:t({type:"array",description:"The 'recognition' section describes the candidate's public or professional plaudits, kudos, awards, and other forms of positive external reinforcement.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{category:t({type:"string",description:"Type of recognition: award, honor, prize, etc."}),title:t({type:"string",description:"Title of the award or recognition."}),date:t({type:"string",description:"Date awarded, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),from:t({type:"string",description:"Name of the awarding company, institution, or individual."}),summary:t({type:"string",description:"A brief description of the award and why you received it."}),url:t({type:"string",description:"A webpage or other associated URL.",format:"uri"})}})}),writing:t({type:"array",description:"The 'writing' section describes the candidate's writing and publication history, from blogs and essays to novels and dissertations.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Title of the article, essay, or book."}),category:t({type:"string",description:"One of 'book', 'article', 'essay', 'blog post', or 'series'."}),publisher:t({oneOf:[t({additionalProperties:h,type:"object",properties:{name:t({type:"string",description:"Publisher of the article, essay, or book."}),url:t({type:"string",description:"Publisher website or URL."})}}),t({type:"string"})],description:"Publisher of the article, essay, or book."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),url:t({type:"string",description:"Website or URL of this writing or publication."}),summary:t({type:"string",description:"A brief summary of the publication."})}})}),reading:t({type:"array",description:"The 'reading' section describes the candidate's reading habits and is intended to demonstrate familiarity with industry-relevant publications, blogs, books, or other media that a competent industry candidate should be expected to know.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Title of the book, blog, or article."}),category:t({type:"string",description:"The type of reading: book, article, blog, magazine, series, etc."}),url:t({type:"string",description:"URL of the book, blog, or article.",format:"uri"}),author:t({oneOf:[t({type:"string"}),t({type:"array",items:t({type:"string",description:"Author name."})})],description:"Author of the book, blog, or article."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),summary:t({type:"string",description:"A brief description of the book, magazine, etc."})}})}),speaking:t({type:"array",description:"The 'speaking' section describes the candidate's speaking engagements and presentations.",items:t({type:"object",additionalProperties:h,required:["event"],properties:{title:t({type:"string",description:"Speaking engagement title."}),event:t({type:"string",description:"Event at which you presented."}),location:t({type:"string",description:"Freeform location of the event, e.g., 'San Francisco, CA' or 'Tokyo'."}),date:t({type:"string",description:"Presentation date.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"An array of specific highlights such as 'Won 'Best Speaker' award at 2012 E3 expo'."})}),keywords:t({type:"array",description:"Keywords associated with this speaking engagement.",items:t({type:"string",description:"A list of keywords such as 'TED', 'E3', 'mathematics', 'Big Data', etc."})}),summary:t({type:"string",description:"A description of this speaking engagement."})}})}),governance:t({type:"array",description:"The 'governance' section describes the candidate's leadership, standards, board, and committee roles.",items:t({type:"object",additionalProperties:h,required:["organization"],properties:{summary:t({type:"string",description:"Summary of your governance at this organization."}),category:t({type:"string",description:"Type of governance: committee, board, standards group, etc."}),role:t({type:"string",description:"Governance role: board member, contributor, director, etc."}),organization:t({type:"string",description:"The organization."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"}),keywords:t({type:"array",description:"Keywords associated with this governance stint.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Increased company profits by 35% year over year'."})})}})}),languages:t({type:"array",description:"The 'languages' section describes the candidate's knowledge of world languages such as English, Spanish, or Chinese.",items:t({type:"object",additionalProperties:h,required:["language"],properties:{language:t({type:"string",description:"The name of the language: English, Spanish, etc."}),level:t({type:"string",description:"Level of fluency with the language, from 1 to 10."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Amount of time language spoken?"})}})}),samples:t({type:"array",description:"The 'samples' section provides an accessible demonstration of the candidate's portfolio or work product to potential employers and co-workers.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Title or descriptive name."}),summary:t({type:"string",description:"A brief description of the sample."}),url:t({type:"string",description:"URL of the sample (if any).",format:"uri"}),date:t({type:"string",description:"Date the sample was released in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights for this sample.",items:t({type:"string",description:"For ex, 'Implemented optimized search algorithm derived from Slices of Pi'."})}),keywords:t({type:"array",description:"Keywords associated with this work sample.",items:t({type:"string",description:"For example, C++, HTML, game."})})}})}),references:t({type:"array",description:"The 'references' section describes the candidate's personal, professional, and/or technical references.",items:t({type:"object",additionalProperties:h,required:["name"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),role:t({type:"string",description:"The occupation of this reference, or his or her relationship to the candidate."}),category:t({type:"string",description:"The type of reference, eg, professional, technical, or personal."}),private:t({type:"boolean",description:"Is this a private reference?"}),summary:t({type:"string",description:"Optional summary information for this reference."}),contact:t({type:"array",items:t({type:"object",additionalProperties:h,properties:{label:t({type:"string",description:"Friendly label for this piece of contact info."}),category:t({type:"string",description:"Type of contact information (phone, email, web, etc.)."}),value:t({type:"string",description:"The email address, phone number, etc."})}})})}})}),testimonials:t({type:"array",description:"The 'testimonials' section contains public testimonials of the candidate's professionalism and character.",items:t({type:"object",additionalProperties:h,required:["name","quote"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),quote:t({type:"string",description:"A quoted reference, eg, 'Susan was an excellent team leader, manager, and operations specialist with a great eye for detail. I'd gladly hire her again if I could!'"}),category:t({type:"string",description:"Type of reference: personal, professional, or technical."}),private:t({type:"boolean",description:"Public reference (testimonial) or via private contact?"})}})}),interests:t({type:"array",description:"The 'interests' section provides a sampling of the candidate's interests and enthusiasms outside of work.",items:t({type:"object",additionalProperties:h,required:["name"],properties:{name:t({type:"string",description:"The name or title of the interest or hobby."}),summary:t({type:"string"}),keywords:t({type:"array",description:"Keywords associated with this interest.",items:t({type:"string",description:"A keyword relating to this interest."})})}})}),extracurricular:t({type:"array",description:"The 'extracurricular' section describes the candidate's involvement with industry-related events and enterprises outside of work. For example: attending conferences, workshops, or meetups.",items:t({type:"object",additionalProperties:h,required:["title","activity"],properties:{title:t({type:"string",description:"Title of the extracurricular activity."}),activity:t({type:"string",description:"The extracurricular activity."}),location:t({type:"string",description:"City, state, or other freeform location."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"})}})}),affiliation:t({type:"object",additionalProperties:h,description:"The 'affiliation' section describes the candidate's membership in groups, clubs, organizations, and professional associations whether at the collegiate, corporate, or personal level.",properties:{summary:t({type:"string",description:"Optional summary of overall affiliation and membership experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["organization"],properties:{category:t({type:"string",description:"The type of affiliation: club, union, meetup, etc."}),organization:t({type:"string",description:"The name of the organization or group."}),role:t({type:"string",description:"Your role in the organization or group."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date your affiliation with the organization began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your affiliation with the organization ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities during this affiliation."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this affiliation.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}})}});var k;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(k||(k={}));var w;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator"})(w||(w={}));const ur=[{title:"Eyelidlessness",category:k.PUBLIC_ACCESS,description:`
      My personal website and tech blog.
    `,summary:`
      Built with [Preact][1], [Microsite][2] and [Fela][3].

      [1]: https://preactjs.com/
      [2]: https://github.com/natemoo-re/microsite
      [3]: https://fela.js.org/
    `,repo:"https://github.com/eyelidlessness/eyelidlessness.github.io",role:w.CREATOR,start:"2020-10",end:"2021-02"},{title:"Microsite",category:k.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:w.CONTRIBUTOR,start:"2021-01",end:"2021-02"},{title:"HNDarkMode",category:k.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:w.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:k.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:w.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:k.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:w.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:k.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:w.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:k.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:w.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:k.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:w.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:k.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:w.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:k.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:w.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:k.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:w.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:k.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:w.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:k.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:w.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:k.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:w.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:k.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:w.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:k.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:w.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:k.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:w.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:k.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:w.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:k.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:w.CONTRIBUTOR,start:"2015-01",end:"2015-01"}],hr=e=>e;var b;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(b||(b={}));var re;(function(e){e.LANGUAGES_PLATFORMS="Languages & Platforms",e.SERVICES_DISTRIBUTED_SYSTEMS="Services & Distributed Systems",e.USER_INTERFACE_EXPERIENCE="User Interface & Experience"})(re||(re={}));const Oe={[re.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:b.EXPERT},{name:"OpenAPI & JSON Schema",level:b.EXPERT},{name:"Django REST framework",level:b.ADVANCED},{name:"Fault tolerance",level:b.ADVANCED},{name:"Microservice architecture",level:b.ADVANCED},{name:"Apache Storm",level:b.INTERMEDIATE},{name:"Redis",level:b.BASIC}],[re.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:b.EXPERT},{name:"DOM & Web APIs",level:b.EXPERT},{name:"Web performance",level:b.ADVANCED},{name:"SVG",level:b.ADVANCED},{name:"UI & UX design",level:b.ADVANCED},{name:"A11y",level:b.INTERMEDIATE}],[re.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:b.EXPERT},{name:"Clojure & ClojureScript",level:b.EXPERT},{name:"HTML & CSS",level:b.EXPERT},{name:"SQL (PostgreSQL)",level:b.ADVANCED},{name:"Python",level:b.INTERMEDIATE},{name:"Swift",level:b.BASIC},{name:"Java",level:b.BASIC}]},fr={list:Object.values(Oe).flatMap(ue),merged:Oe,sets:Object.entries(Oe).map(([e,o])=>({name:e,skills:o.map(({name:i})=>i)}))},yr=hr({name:"Trevor Schmidt",meta:{format:ut,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:[{employer:"Treez",position:"Senior Software Engineer",start:"2018-12",end:"2020-09",summary:`
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
          `]}]},info:{class:"Software Engineer",brief:nt(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:ur,skills:fr,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),ye=Symbol("DEFAULT_TOPIC"),C={[ye]:ye,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},br=e=>typeof e=="string"||typeof e=="symbol",ht=e=>br(e)&&e in C,je=e=>ht(e)?C[e]:e,ft=Object.entries(C).reduce((e,o)=>{const[i,n]=o;return typeof i=="string"?{...e,[n]:i}:e},{}),Sr=e=>ht(e)?e:ft[e],vr=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),wr=Object.fromEntries(Object.entries(ft).map(([e,o])=>typeof o=="string"?[e,vr(o)]:null).filter(e=>e!=null)),Tr=e=>{const o=je(e);if(typeof o=="string")return wr[o]},be=2,Le={minEm:1.0625,fluidVw:1.0625*be,maxEm:1.25},S="@media (prefers-color-scheme: dark)",kr=["h1","h2","h3","h4","h5","h6"],Er=["dd","dl","dt","li","ol","ul"],Cr=[...kr,...Er,"p"],J=Le.minEm/Le.maxEm,B={h1:1.953,h2:1.563,h3:1.25},Rr={h1:{minEm:B.h1*J,fluidVw:B.h1*J*be,maxEm:B.h1},h2:{minEm:B.h2*J,fluidVw:B.h2*J*be,maxEm:B.h2},h3:{minEm:B.h3*J,fluidVw:B.h3*J*be,maxEm:B.h3}},yt=75,Se=1.25,Ar=["0.7fr",`${Se}rem`,[`${yt}ch`,`calc(100% - ${Se*2}rem)`],`${Se}rem`,"1.2fr"],Ye=1,Pr=["0.7fr",`${Ye}rem`,[`${yt*1.1875}ch`,`calc(100% - ${Ye*2}rem)`],`${Ye}rem`,"1.2fr"],xr=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],De=xr.join(", "),Mr=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Ir=Mr.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),x={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Or="hover-inherit-topic-color",jr={[C[ye]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.DEFAULT_TOPIC.light},[S]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.DEFAULT_TOPIC.dark}}}}},[C.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.ABLEISM}}},[C.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.ARTS_CRAFTS}}},[C.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.LEMON}}},[C.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.MENTAL_ILLNESS}}},[C.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.NEURODIVERGENCE}}},[C.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.PHILOSOPHY}}},[C.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.POLITICS}}},[C.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.RACISM}}},[C.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.SEXISM}}},[C.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.SUBSTANCE_ABUSE}}},[C.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.TECHNOLOGY}}},[C.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:x.TRANSPHOBIA}}}},bt=Ie(),c={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Or,baseFontSizeRange:Le,darkMode:S,abbreviation:{backgroundImage:`linear-gradient(${["to top","hsl(64deg, 100%, 50%, 0.25)","hsl(64deg, 100%, 50%, 0.25) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[S]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[S]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:bt,description:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em",nested:{[S]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${bt}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[S]:{color:"hsl(212deg, 10%, 90%)"}}},[S]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[S]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[S]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:De},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:De,nested:{[S]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:Cr,gitHubLogo:{fill:"#171515",nested:{[S]:{fill:"#fff"}}},headingRanges:Rr,[S]:{aside:{backgroundColor:"hsl(192deg, 15%, 13%)"},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(210deg, 10%, 90%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 85%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:Ar,mainGridSidePaddingRem:Se,monospaceFont:De,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:Ir},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[S]:{backgroundColor:"hsl(336deg, 100%, 7%)"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[S]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"hsl(47deg, 58%, 98%)",nested:{[S]:{backgroundColor:"hsl(41deg, 100%, 8%)"}}},separator:{borderBottom:"1px solid hsl(17deg, 78%, 90%)",nested:{[S]:{borderColor:"hsl(17deg, 70%, 17%)"}}}},skillLevel:{[b.BASIC]:{backgroundColor:"hsl(207deg, 25%, 83%)",nested:{[S]:{backgroundColor:"hsl(207deg, 15%, 43%)"}}},[b.INTERMEDIATE]:{backgroundColor:"hsl(188deg, 53%, 74%)",nested:{[S]:{backgroundColor:"hsl(188deg, 53%, 34%)"}}},[b.ADVANCED]:{backgroundColor:"hsl(188deg, 70%, 59%)",nested:{[S]:{backgroundColor:"hsl(188deg, 80%, 39%)"}}},[b.EXPERT]:{backgroundColor:"hsl(152deg, 100%, 39%)",nested:{[S]:{backgroundColor:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:Pr,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[S]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[S]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:jr,topicTagIdentifier:Ie(),topicTagInner:{backgroundImage:X(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[S]:{backgroundImage:X(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:X(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[S]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:X(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[S]:{color:"hsl(194deg, 8%, 50%)"}}}}}},Be=["b","em","h1","h2","h3","i","strong"],ve=["h1","h2","h3","h4","h5","h6"],Lr=[...ve,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Yr=Array.from(new Set([...ve,...Lr,"div","fieldset","form","hgroup","hr","pre"])),Dr=X(`
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

  ${E(["body"],{...c.document,...c.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${ve.join(",")} {
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
`),Br=()=>{fe.global(X(`
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

      ${ve.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${E(Be,c.emphasize)}

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

      ${E(["hr:after"],{...c.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${E(["pre"],c.pre)}

      ${E(["code"],{...c.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

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

      ${E(["a"],{...c.links,fontWeight:"bolder"})}

      ${E(["abbr"],{...c.abbreviation,textDecoration:"none"})}

      ${E(["aside","small"],c.deemphasize)}

      ${E(["aside"],{...c.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem","& p":{lineHeight:1.3333}})}

      ${Be.map(e=>`aside ${e}`).join(", ")} {
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
        ${E(["body"],{...c[c.darkMode].document,...c[c.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${E(Be,c[c.darkMode].emphasize)}
        ${E(["pre"],c[c.darkMode].pre)}
        ${E(["code"],c[c.darkMode].code)}
        ${E(["a"],c[c.darkMode].links)}
        ${E(["aside","small"],c[c.darkMode].deemphasize)}
        ${E(["aside"],c[c.darkMode].aside)}
        ${E(["hr:after"],c[c.darkMode].separator)}
      }
    `))},$r=`
  ${c.mainGridColumns[0]}
  ${c.mainGridColumns[1]}
  min(
    ${c.mainGridColumns[2][0]},
    ${c.mainGridColumns[2][1]}
  )
  ${c.mainGridColumns[3]}
  ${c.mainGridColumns[4]}
`.replace(/\s+/g," "),St={gridColumn:"1 / -1"},vt=fe(St),A=l("div",{nested:{[`& > .${vt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:$r,...St}),Nr=({children:e,shadow:o,...i})=>r(A,{...i},e),wt=([e,o,i])=>`rgba(${[e,o,i,0].join(",")})`,Tt=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`${wt(o)} 2rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${wt(e)} 5px`].join(", ")})`].join(", ")}:null,Hr=e=>{if(e!=null){const{darkMask:o,darkScroll:i,lightMask:n,lightScroll:s}=e;return{dark:Tt(i,o),light:Tt(s,n)}}return{dark:null,light:null}},kt=l(Nr,({shadow:e})=>{const{dark:o,light:i}=Hr(e),n=o==null?null:{[c.darkMode]:o};return{...i,backgroundAttachment:"local, scroll",backgroundPosition:"100% 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:"1rem, auto",paddingRight:c.mainGridSidePaddingRem,overflowX:"auto",nested:{...n,"& > *":{gridColumn:"3 / -1"}}}}),_r=l(A,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Et=l("div",{paddingLeft:"1rem"}),zr=l("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),Fr=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),$e="div",Ur={ContentContainer:$e,InnerContainer:Et,OuterContainer:$e,SymbolContainer:$e},Ct=e=>{const{children:o,ContentContainer:i,InnerContainer:n,OuterContainer:s,outerContainerProps:a,symbol:d,SymbolContainer:p}={...Ur,...e};return r(_r,{as:s,...a},r(zr,{as:p,role:"presentation"},d),r(Et,{as:n},r(Fr,{as:i},o)))},Gr=l("pre",{fontSize:"1rem"}),qr=l(kt,{backgroundAttachment:"local",backgroundImage:`linear-gradient(${["to left","rgba(255,255,255,1)","rgba(255,255,255,1) 5rem","rgba(255,255,255,0) 6rem"].join(",")})`,backgroundPosition:"calc(100% + 4rem) 0",backgroundRepeat:"no-repeat",backgroundSize:"6rem",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[c.darkMode]:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,1)","rgba(0,0,0,1) 5rem","rgba(0,0,0,0) 6rem"].join(",")})`}}}),Wr=e=>r(qr,{...e}),Xr=l(A,{...c.pre,backgroundImage:`linear-gradient(${["to left","rgba(124, 128, 131, 0.75)","rgba(124, 128, 131, 0.75) 0.5px","rgba(124, 128, 131, 0)    5px"].join(",")})`,nested:{[c.darkMode]:{...c[c.darkMode].pre,backgroundImage:`linear-gradient(${["to left","rgba(230, 179, 213, 0.75)","rgba(230, 179, 213, 0.75) 0.5px","rgba(230, 179, 213, 0)    5px"].join(",")})`},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),Vr=l("div",{...c.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),Kr=({children:e})=>r(Ct,{ContentContainer:Gr,InnerContainer:Wr,OuterContainer:Xr,symbol:"{",SymbolContainer:Vr},e),Jr=e=>e.map((o,i)=>i),Rt=(e,o)=>Jr(e).sort((i,n)=>{const s=o(e[i],e[n]);return s===0?i===n?0:i>n?1:-1:s}).map(i=>e[i]),Qr=e=>typeof e=="object"&&e!=null,Zr=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),ei=(e,o)=>Qr(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&Co().test(o),ti=({["aria-label"]:e,children:o,role:i})=>r(Zr,{"aria-label":e,role:i},o),oi={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},ri={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},ii={...oi,...ri},At=N.resolve(process.cwd(),"./syntax-themes"),[ni,si]=await Promise.all([at(N.resolve(At,"./yi-dark.json")),at(N.resolve(At,"./yi-light.json"))]),ai={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},ci={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},li=e=>e.trim().split(/\b\W*\b/).reduce((o,i)=>({...o,...ci[i]}),{}),di=e=>Object.entries(e).reduce((o,[i,n])=>{const s=ai[i];if(n==null||typeof s!="string")return o;const a=s==="fontStyle"?li(n):{[s]:n};return{...o,...a}},{}),[pi,mi]=await Promise.all([ct({theme:ni}),ct({theme:si})]),gi=new Set(Lo.map(e=>e.id)),ui=new Set(["ts","tsx","typescript"]),Pt=e=>e.explanation?.reduce((o,i)=>({...o,...i.scopes.reduce((n,{themeMatches:s})=>({...n,...s.reduce((a,{settings:d})=>({...a,...di(d)}),n)}),o)}),{color:e.color}),hi=(e,o,i={})=>{const n=Pt(e),s=Pt(o),a=s==null?null:{nested:{[c.darkMode]:s}},{content:d}=e;if(n==null&&a==null)return r("span",i,d);const p={...n,...a},m=l("span",p);return r(m,i,d)},fi=fe({paddingRight:"1rem"}),yi={className:fi},bi=(e,o)=>it(r(K,{},r("pre",{},r("code",{},...e.reduce((i,n,s)=>{const a=n.map((p,m)=>{const g=o[s][m],y=m===n.length-1?yi:{};return hi(p,g,y)}),d=s===0?"":`
`;return[...i,d,...a]},[]))))),Si=e=>{const{lang:o,value:i,meta:n}=e,s=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,a=String(o)==="json5"?"json":o;let d;const p=i.replace(/^\n+|\n+$/g,"");if(!gi.has(a))d=Yo.plainTextRenderer(p,{});else{const m=mi.codeToThemedTokens(p,a),g=pi.codeToThemedTokens(p,a);d=bi(m,g)}ui.has(a)&&!n?.includes("ignore"),e.children=[],e.type="html",e.value=d},vi=()=>o=>{ot(o,"code",Si)};import.meta.env=Me;const ie=st.createRequire(import.meta.url),wi=ie("rehype-parse"),Ti=ie("rehype-remark"),ki=ie("remark"),Ei=ie("remark-abbr"),Ci=ie("remark-stringify"),Ri=({className:e,children:o,...i})=>e==="language-id"?null:e==="code-container"?me(j,i,...rt(o)):r("div",{className:e,...i},...rt(o)),Ai=({children:e,...o})=>ei(o,e)?r(ti,o,e):r("span",o,e),Ne={components:{div:Ri,pre:Kr,span:Ai},rehypePlugins:[Ro],remarkPlugins:[vi,Ei,Qo,Ao,Po]},xt=e=>{const{children:o=me(()=>null,{}),components:i={},rehypePlugins:n=[],remarkPlugins:s=[]}=e,a={...Ne.components,...i},d={mdx:me,MDXProvider:Mo,components:a,props:{}},p=typeof o=="string"?nt(o).trim():o,m=[...Ne.rehypePlugins,...n],g=[...Ne.remarkPlugins,...s],y=xo.sync(p,{rehypePlugins:m,remarkPlugins:g,skipExport:!0}).trim(),{code:u}=Io(y,{objectAssign:"Object.assign"}),T=Object.keys(d),v=Object.values(d),f=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...T,`${u}

${f}`)(me,...v)},Pi=Object.entries(ii).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),xi=e=>[e,Pi].join(`

`),He=([e,...o],{includeAbbreviations:i=!0})=>{const n=typeof e=="string"?[e,...o].join(""):String.raw(e,...o);return i?xi(n):n},_=(...e)=>{const o=He(e,{includeAbbreviations:!0});return r(K,{},r(xt,{},o))},Mi=(...e)=>{const o=He(e,{includeAbbreviations:!0});return r(K,{},r(xt,{components:{p:j}},o))},Ii=(...e)=>{const o=He(e,{includeAbbreviations:!1});return ki().use(wi).use(Ti).use(Ci).use(Oo).use(jo).processSync(o).contents.toString().trim()},_e=(e,o)=>Number(e.toFixed(o)),ze=parseInt("ff",16),Mt=parseInt("00",16),It=.05,Ot=.15,jt=.05;class ne extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const Oi=/^[0-9a-f]{40}$/i,ji=e=>Oi.test(e),Li=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),Yi=e=>e.length===10,Di=/([0-9a-f]{2})([0-9a-f]{2})/ig,Lt=e=>{if(!ji(e))throw new ne(e);const i=Array.from(e.matchAll(Di)??[]).map(([n,s,a])=>({x:s,y:a}));if(!Yi(i))throw new ne(e);return i},Bi=Symbol("IS_POINT"),$i=e=>Object.assign(e,{[Bi]:!0}),Yt=e=>{const o=parseInt(e,16);if(o>ze||o<Mt)throw new Error(`Not a valid coordinate: ${e}`);return $i(o)},Ni=({x:e,y:o})=>({x:Yt(e),y:Yt(o)}),Hi=e=>e.length===10,Dt=(e,o)=>{try{const i=o.map(Ni);if(!Hi(i))throw new ne(e);return i}catch{throw new ne(e)}},_i=Symbol("SCALED_COORDINATE"),Bt=e=>e.reduce(({max:o,min:i},{y:n})=>({max:Math.max(Number(o),Number(n)),min:Math.min(Number(i),Number(n))}),{max:-Infinity,min:Infinity}),L=(e,o)=>Object.assign(_e(e,2),{[_i]:o}),Q=({x:e,xScale:o,y:i,yScale:n})=>({x:L(e,o),y:L(i,n)}),$t=({x:e,y:o},{xScale:i,xShift:n,yScale:s,yShift:a})=>Q({x:(e+n)*i,xScale:i,y:(o+a)*s,yScale:s}),Nt=({points:e,xMax:o,xScale:i,yScale:n})=>[Q({x:0,xScale:i,y:0,yScale:n}),...e,Q({x:o,xScale:i,y:0,yScale:n})].reduce((s,a,d,p)=>{if(d===0||d===p.length-1)return s;const m=L(0,n),g=[{x:p[d-1].x,y:m},a,{x:p[d+1].x,y:m}];return[...s,g]},[]),Ht=({segments:e,xMax:o,xScale:i,yScale:n})=>e.map(s=>{const[{x:a,y:d},{x:p,y:m},{x:g,y}]=s,u=g-a,T=m/u,f=6/T;if(f<1){const I=f*.2*a,R=a-I,Y=g+I,O=R<0?Math.abs(R):Y>o?o-Y:0,P=R+O,D=Y+O,G=f*.3,q=p+O,W=G*m,de=m-W;return[Q({x:P,xScale:i,y:d,yScale:n}),Q({x:q,xScale:i,y:de,yScale:n}),Q({x:D,xScale:i,y,yScale:n})]}return s}),zi=({x:e,y:o},{x:i,y:n})=>{const s=i-e,a=n-o;return{angle:Math.atan2(a,s),length:Math.sqrt(s**2+a**2)}},_t=({current:e,previous:o,next:i,reverse:n,smoothing:s,xScale:a,yScale:d})=>{const p=n?Math.PI:0,m=zi(o,i),g=m.angle+p,y=m.length*s,{x:u,y:T}=e,v=u+Math.cos(g)*y,f=T+Math.sin(g)*y;return{x:L(v,a),y:L(f,d)}},zt=({index:e,point:o,points:i,smoothing:n,xScale:s,yScale:a})=>{const d=i[e-1];if(d==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const p=i[e-2]??d,m=_t({current:d,previous:p,next:o,reverse:!1,smoothing:n,xScale:s,yScale:a}),g=d,y=i[e+1]??o,u=_t({current:o,previous:g,next:y,reverse:!0,smoothing:n,xScale:s,yScale:a});return[m,u,o]},Ft=({segment:e,smoothing:o,xScale:i,yScale:n})=>e.reduce((s,a,d)=>{if(d===0)return s;const m=zt({index:d,point:a,points:e,smoothing:o,xScale:i,yScale:n}).map(g=>`${g.x},${g.y}`).join(" ");return[...s,`C ${m}`]},[]),Fi=({baseYCoordinate:e,isBaselineBelowMidpoint:o,segments:i,xScale:n,yMax:s,yScale:a,yTilt:d=!1})=>i.reduce((p,m,g,y)=>{const{length:u}=y,[T,v,f]=m,{x:M,y:I}=T,{x:R,y:Y}=v,{x:O,y:P}=f,D=O-M,G=D===0?0:Math.max(Y/D*jt,Ot),q=d?.1:0,W=1-q,de=1+q,mo=g%2==0?W:de,go=o?I+e:s-I+e,pe={x:M,y:L(go*mo,a)},uo=g%2==0?W:de,ho=o?P+e:s-P+e,Qe={x:L(O,n),y:L(ho*uo,a)},Ze=R-M,et=O-R,fo=et>Ze?0:0-(R-M)*It,tt=(u-g)*(a/100*s),yo={x:L(R+fo,n),y:L(Y-tt,a)},bo=Ft({segment:[pe,yo,Qe],smoothing:G,xScale:n,yScale:a}),So=et>Ze?(O-R)*It:0,vo={x:L(R+So,n),y:L(s-tt,a)},wo=Ft({segment:[Qe,vo,pe],smoothing:G,xScale:n,yScale:a});return[...p,[`M ${pe.x},${pe.y}`,...bo,...wo,"Z"].join(" ")]},[]),Ui=({hash:e,xPadding:o=0,xScale:i=1,yOffset:n=.5,yPadding:s=0,yScale:a=1})=>{const d=Lt(e),p=Dt(e,d),m=Rt(p,({x:P},{x:D})=>Number(P)===Number(D)?0:Number(P)>Number(D)?1:-1),g=o/2,y=s/2,u=m.map(P=>$t(P,{xScale:i,xShift:g,yScale:a,yShift:y})),T=(ze+o)*i,{max:v}=Bt(u),f=(v+s)*a,M=Nt({points:u,xMax:T,xScale:i,yScale:a}),I=Ht({segments:M,xMax:T,xScale:i,yScale:a}),R=n>.5,Y=R?f*n:-1*f*n;return{segmentPaths:Fi({baseYCoordinate:Y,segments:I,xScale:i,yMax:f,isBaselineBelowMidpoint:R,yScale:a}),xMax:T,yMax:f}};var Fe;(function(e){e.PNG="png"})(Fe||(Fe={}));const Ue=process.cwd(),se=e=>e.startsWith("/")?N.resolve(Ue,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):N.extname(e)==""?N.resolve(Ue,"./src/pages/",`${e}.tsx`):e;var Z;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(Z||(Z={}));var z;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(z||(z={}));const Gi="origin",qi="main",ae=e=>{const{branch:o=qi,decode:i,filter:n=Z.FIRST,format:s,path:a=Ue,remote:d=Gi}=e,{error:p,stdout:m}=Bo.spawnSync("git",["log",...n.split(" "),`--branches=${o}`,`--format=${s}`,`--remotes=${d}`,"--",a]);if(p)throw p;const g=m.toString().trim();return(g===""?[]:g.split(`
`)).map(i)},Ge=e=>{const o=new Date(e);if(!isNaN(o.getTime()))return o},Wi=e=>{const o=se(e),[i=null]=ae({decode:Ge,filter:Z.CURRENT,format:z.ISO_DATE,path:o});return i},Xi=e=>{const o=se(e),[i=null]=ae({decode:Ge,format:z.ISO_DATE,path:o});return i},Vi=e=>{const o=se(e),[i=null]=ae({decode:Ge,filter:Z.FIRST_MERGE,format:z.ISO_DATE,path:o});return i},qe=e=>{const o=Pe.readFileSync(e).toString();let i=$o.createHash("sha1");return i.update(o),i.digest("hex")},Ki=e=>{const o=se(e),[i]=ae({decode:ue,format:z.HASH,path:o});return i??qe(o)},Ji=e=>{const o=se(e),[i]=ae({decode:ue,filter:Z.FIRST_MERGE,format:z.HASH,path:o});return i??qe(o)},Qi={height:630,width:1200},Zi=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",en=Do({alg:"sha1",coerce:!0,sort:!0,trim:!0}),tn=(e,o,i=Fe.PNG,n=Qi)=>{const s=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=en.hash(o),d=N.resolve(s,`${a}.${i}`),p=d.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:d,imageType:i,publicPath:p,...n}}};var F;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(F||(F={}));const Ut=(e,o,i,n,s=[C.TECHNOLOGY])=>{const a=n===F.MUTABLE,d=n===F.IMMUTABLE_MERGE,p=o.replace(/^file:(\/\/)?/,""),m=a?qe(p):d?Ji(e):Ki(e),g={created:(d?Vi(e):Xi(e))??Pe.statSync(p).ctime,updated:Wi(e)??Pe.statSync(p).mtime},u=tn(o,a?{importURL:o,stat:g,topics:s}:{hash:m,importURL:o});return{hash:m,host:Zi,path:e,social:u,stat:g,title:i,topics:s}},Gt=()=>r(j,null,r("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},r("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),r("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),r("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),r("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),r("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),r("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),r("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),r("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},r("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),r("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},r("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),r("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),r("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),r("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},r("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),on=()=>r("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},r("defs",null,r(Gt,null))),rn=1.6180334,nn=4,qt=_e(rn*5,6),Wt=.75,ee=.15,sn=1.5,we=H("6rem",`${100/qt}vw`,"10rem"),an=l(A,{height:we,position:"relative",width:"100%"}),cn=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),ln=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var ce;(function(e){e.INLINE="inline",e.NONE="none"})(ce||(ce={}));const Xt={xPadding:nn,xScale:qt,yOffset:Wt,yPadding:ee,yScale:sn},Te=e=>{const{className:o,defsUsage:i=ce.INLINE,hash:n,height:s,rawSVG:a=!1,styleRenderer:d=V,title:p,topics:m=[],width:g}=e,y=m.length<2?[...m,C[ye]]:m,u=P=>`${P}-${n}`,{segmentPaths:T,xMax:v,yMax:f}=Ui({...Xt,hash:n}),M=f*Wt,I=f*ee/10.24,R=I*.75,O=r(cn,{className:vt,height:s,preserveAspectRatio:"none",viewBox:[0,0,v,f].join(" "),width:g},r("title",null,"Generated art for the page or post titled",r("i",null,p),", with the content or commit hash ",n," ",y.length>0?[", and the topics: ",y.map(String).join(", ")]:null),r("defs",null,i===ce.INLINE?r(Gt,null):null,r("filter",{id:u("blur")},r("feOffset",{in:"SourceGraphic",dx:"0",dy:R,result:"glowOffsetOut"}),r("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:I,result:"glowBlurOut"}),r("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),r("clipPath",{id:u("blurOverlayClip")},r("rect",{x:"0",width:v,y:M,height:f})),r("filter",{id:u("blurOverlay")},r("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:R}),r("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:I})),r("filter",{id:u("blurUnderlay")},r("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:R}),r("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:I}),r("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),r("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),r("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),r("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:I})),r("g",{id:u("blobs")},T.map((P,D)=>{const G=D%y.length,q=y[G],W=d.renderRule(()=>({...c.topicColors[q]}),Object.keys);return r(ln,{key:P,className:W,d:P,mask:"url(#softVerticalFade)"})}))),r("g",{transform:[`translate(0, ${f*ee})`,`scale(1, ${1-ee*2})`].join(" "),filter:`url(#${u("blur")})`},r("use",{href:`#${u("blobs")}`,mask:"url(#horizontalMidFade)"})),r("g",{"clip-path":`url(#${u("blurOverlayClip")})`,filter:`url(#${u("blurOverlay")})`,transform:[`translate(0, ${f*ee})`,`scale(1, ${1-ee*2})`].join(" ")},r("use",{href:`#${u("blobs")}`,mask:"url(#softVerticalFade)"})));return a?O:r(an,{className:o},O)},dn=[,"January","February","March","April","May","June","July","August","September","October","November","December"],pn=l("time",{nested:{[c.darkMode]:{...c[c.darkMode].deemphasize}},...c.deemphasize});var $;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})($||($={}));const ke=({date:e,mode:o=$.DEFAULT,...i})=>{const n=e.getMonth()+1,s=e.getFullYear(),a=o===$.SHORT?`${n}/${s}`:o===$.META?"":[e.getDate(),dn[n],s].join(" ");return r(pn,{...i,datetime:e.toISOString()},a)},mn=l("a",{...c.topicTagLink(c.topicTagIdentifier.className)}),gn=l("span",c.topicTagIdentifier()),un=l(gn,{...c.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),hn=({className:e,link:o=!0,topic:i})=>{const n=Tr(i),s=je(i);if(n==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=o?mn:"span",d=o?{href:`/blog/topics/${n}/`}:{};return r(a,{className:[e,c.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...d},r(un,null,s))},Vt=l(hn,e=>({...c.topicTagOuter,...c.topicColors[je(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),fn=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),yn=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),Kt=({className:e,link:o=!0,topics:i})=>r(fn,{className:e},i.map(n=>typeof n=="string"?r(yn,{key:Sr(n)},r(Vt,{link:o,topic:n})):null)),bn=e=>e.reduce((o,i)=>{const n=i.stat.created.getFullYear(),s=o[n]??[];return{...o,[n]:[...s,i]}},{}),Sn=l(A,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),vn=l(A,{...c.blog.listing.item,minHeight:we,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),wn=l(A,{paddingTop:`calc(${we} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),Tn=l(A,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),kn=l("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),En=fe({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),Cn=l("h2",{...c.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),Rn=l(ke,{padding:"0 0.5rem 0.125rem 0"}),An=l(Kt,{gridColumn:"3 / 3"}),Pn=l("div",{...c.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),xn=l("a",{fontSize:"0.875em"});var Ee;(function(e){e.DATE="date"})(Ee||(Ee={}));var Ce;(function(e){e.ASC="asc",e.DESC="desc"})(Ce||(Ce={}));const Mn=({order:e=Ce.DESC,posts:o,sort:i=Ee.DATE})=>{const n=o.slice().sort((a,d)=>e===Ce.DESC&&i===Ee.DATE?a.stat.created>d.stat.created?-1:1:0),s=bn(n);return r(j,null,Object.entries(s).map(([a,d])=>r(j,{key:a},r(Sn,null,d.map(p=>{const{CustomArt:m=Te,description:g,hash:y,path:u,stat:{created:T},title:v,topics:f}=p;return r(vn,{key:u},r(wn,{as:"a",href:u},r(kn,null,r(m,{defsUsage:ce.NONE,hash:y,padded:!0,renderType:"listing",title:v,topics:f})),r(Tn,null,r(Cn,{className:En},v),r(Rn,{date:T}))),r(An,{link:!1,topics:f}),r(Pn,{className:c.blog.listing.descriptionIdentifier},g),r("p",null,r(xn,{href:u},"Read more\u2026")))})))))},In=()=>r(j,null,r("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),r("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),r("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),r("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),r("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),r("meta",{name:"application-name",content:"Eyelidlessness"}),r("meta",{name:"msapplication-TileColor",content:"#555555"}),r("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),r("meta",{name:"theme-color",content:"#ffffff"}));Br();const Jt=({children:e,meta:{description:o,host:i,redirect:n,social:{image:s},title:a},...d})=>n?r(lt,{...d},r(ge.title,null,"Redirecting to ",n),r("meta",{"http-equiv":"refresh",content:`0; URL=${n}`}),r("link",{rel:"canonical",href:n})):r(lt,{...d},r(ge.title,null,a," | Eyelidlessness"),o!=null?r(ge.description,null,o):r(j,null),r("style",{dangerouslySetInnerHTML:{__html:Dr}}),r("meta",{name:"twitter:card",content:"summary_large_image"}),r("meta",{name:"twitter:site",content:"@eyelidlessenss"}),r(ge.image,{alt:a,height:s.height,src:`${i}${s.publicPath}`,width:s.width}),r(j,null,e),r(In,null)),On=({as:e="div",devilsBreakpoint:o,gap:i,...n})=>{const s=l(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[i?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:i?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return r(s,{...n})},U=512,Qt=[0,0,U,U].join(" "),jn=U/2,Ln=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),Yn=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:Qt,width:"0"},r("defs",null,r("mask",{id:"octocat-knockout"},r("rect",{fill:"#fff",height:U,mask:"url(#octocat)",rx:jn,width:U}),r("path",{d:Ln,fill:"#000"})))),Dn=l("rect",{...c.gitHubLogo}),Zt=({className:e})=>r("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:Qt},r("title",null,"GitHub"),r(Dn,{height:U,mask:"url(#octocat-knockout)",width:U})),Re={height:60,width:338},Bn=l("svg",{display:"inline-block",maxWidth:"100%",width:`${Re.width}px`}),$n=l("use",{nested:{[c.darkMode]:{...c[c.darkMode].siteLogo}},...c.siteLogo,fill:"currentcolor"}),Nn=`0 0 ${Re.width} ${Re.height}`,Hn=()=>r(Bn,{viewBox:Nn},r($n,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),r("title",null,"Eyelidlessness")),{columns:te}=c.siteHeader,_n=`
  ${te[0]}
  ${te[1]}
  min(
    ${te[2][0]},
    ${te[2][1]}
  )
  ${te[3]}
  ${te[4]}
`.replace(/\s+/g," "),zn=l("header",{...c.artOverlay,display:"grid",gridColumn:"1 / -1",gridTemplateColumns:_n,padding:"1rem 0",position:"relative",zIndex:1}),Fn=l("div",{gridColumn:3}),Un=l("div",{margin:"0 auto"}),Gn=l("a",{textDecoration:"none"}),qn=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),eo=1,Wn=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${eo/2}rem`,padding:0}),Xn=l("a",{...c.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[c.darkMode]:{...c[c.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),to="1.5em",ha=l(Zt,{display:"block",width:`clamp(1.125em, 4vw, ${to})`}),Vn=()=>{const e=[{label:"Blog",location:"/"},{label:"Hire Me",location:"/resume/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],o=e.reduce((s,a)=>typeof a.label=="string"?s+a.label.length:s,0),i={horizontal:"2rem"},n=`${[`${Re.width}px`,i.horizontal,`${o+1}ch`,to,`${e.length*eo}rem`].join(" + ")}`;return r(zn,null,r(Fn,null,r(On,{as:"nav",devilsBreakpoint:n,gap:i},r(Un,null,r(Gn,{href:"/"},r(Hn,null))),r(qn,null,e.map(({location:s,label:a})=>r(Wn,null,r(Xn,{href:s},a)))))))},Kn=l(A,{paddingTop:0,paddingBottom:"4em"}),oo=({redirect:e,...o})=>r(K,null,e==null?r(j,null,r(Vn,null),r(Kn,{as:"main",...o})):r(j,null)),Jn=l(A,{...c.description,nested:{...c.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Qn=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Zn=l("div",{fontSize:"0.889em"}),es=({as:e="section",title:o,...i})=>r(Jn,{as:e,itemprop:"description"},o?r(Qn,null,o):null,r(Zn,{...i})),ts=l(A,{...c.artOverlay}),os=l("h1",{marginBottom:"0.25rem"}),rs=l(A,{marginBottom:"1rem"}),is=e=>{const{children:o,CustomArt:i,description:n,descriptionRaw:s,hash:a,redirect:d,stat:{created:p},title:m,topics:g}=e;return r(j,null,r(Jt,{meta:{...e,description:s}}),r(oo,{as:"article",redirect:d},r(rs,null,i==null?r(Te,{hash:a,title:m,topics:g}):r(i,{hash:a,renderType:"post",StylesProvider:K,title:m,topics:g}),r(ts,null,r(os,null,m),r(ke,{date:p,itemprop:"datePublished"}),r(Kt,{link:!1,topics:g}))),r(es,null,n),o))},ro={IMMUTABLE:F.IMMUTABLE,IMMUTABLE_MERGE:F.IMMUTABLE_MERGE},ns=async e=>{const{description:o,importURL:i,path:n,redirect:s,title:a,topics:d,type:p=ro.IMMUTABLE_MERGE}=e,{CustomArt:m,hash:g,host:y,social:u,stat:T}=Ut(n,i,a,p,d),v=Ii`${it(r(j,null,o))}`;return{CustomArt:m,description:o,descriptionRaw:v,hash:g,host:y,path:n,redirect:s,social:u,stat:T,title:a,topics:d}},ss=l(A,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),le=e=>r(ss,{as:"section",...e}),Ae=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),as=l(Ae,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),We=l(as,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),cs=l(le,{padding:0}),ls=l(Ae,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),ds=l("a",{...c.resume.contactList.link,fontSize:"0.88889em",fontWeight:500,minWidth:"auto",textDecoration:"none"}),ps=l("span",{nested:{"@media print":{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),Xe=({children:e,printLabel:o,...i})=>r(ds,{...i},r(ps,{"data-print-label":o},r("span",null,e))),ms=l(A,{...c.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...c.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"}}}),Ve="@media (min-width: 44.625rem)",gs=l(Ae,{display:"block",margin:0,nested:{"& > *":{margin:"0 0 1rem"},[Ve]:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",margin:"0 -0.5rem -0.5rem",nested:{"& > *":{margin:"0 0.5rem 0.5rem"}}}}}),Ke=l("h2",{fontSize:H(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),us=l(gs,{fontSize:"0.88889em"}),hs=l("ul",{display:"block",padding:0}),fs=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0.125rem 0",padding:0,nested:{"&:last-child":{marginRight:0},[Ve]:{display:"block",nested:{"&:last-child":{marginBottom:0}}}}}),ys=Object.values(b).reduce((e,o)=>({...e,[o]:l("span",{...c.resume.skillLevel[o],borderRadius:"4px",display:"inline-block",height:"8px",margin:"0 0.325rem 0 0",width:"8px",verticalAlign:"middle",nested:{...c.resume.skillLevel[o].nested,[Ve]:{margin:"0 0.325rem"}}})}),{}),bs=({name:e,skills:o})=>r("div",{itemscope:!0,itemtype:"http://schema.org/ItemList"},r(Ke,{itemprop:"name"},e),r(hs,null,o.map(({level:i,name:n})=>{const s=ys[i];return r(fs,{key:n,itemprop:"itemListElement"},r(s,{role:"img",title:`Skill level: ${i}`}),Mi`${n}`)}))),Ss=l(A,{padding:"1rem 0"}),vs=l("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),ws=/^(\d{4})-(\d{2})$/,io=e=>{const o=e.match(ws);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,i,n]=o;return new Date(`${i}-${n}-01T00:00:00`)},no=l("div",{fontSize:"0.88889em"}),Je=l(ke,{fontSize:"inherit"}),Ts=l("h2",{marginBottom:"0.5rem"}),so=({range:[e,o]})=>{const i=io(e),n=io(o);return e==o?r(no,null,r(Je,{date:n,itemprop:"endDate",mode:$.SHORT})):r(no,null,r(Je,{date:i,itemprop:"startDate",mode:$.SHORT})," \u2013 ",r(Je,{date:n,itemprop:"endDate",mode:$.SHORT}))},ks=l("div",{fontSize:"0.88889rem"}),Es=l("ul",{fontSize:"0.88889em",paddingInlineStart:0}),Cs=l("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),Rs=l(Ss,{marginBottom:"0.5rem",paddingBottom:"1.5rem",position:"relative",nested:{"&:after":{...c.resume.employment.separator,bottom:0,content:'""',display:"block",gridColumn:"3 / 3",left:0,position:"absolute",width:"100%"},"&:last-child":{marginBottom:0},"&:last-child:after":{display:"none"}}}),As=({employer:e,end:o,highlights:i,position:n,start:s,summary:a,...d})=>r(Rs,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...d},r(We,null,r("h3",{itemprop:"name"},e),r(so,{range:[s,o]})),r(ks,{itemprop:"roleName"},n),a==null?null:r(vs,{itemprop:"description"},_(a)),i==null?null:r(Es,{itemtype:"http://schema.org/ItemList"},i.map(p=>r(Cs,{key:p,itemprop:"itemListElement"},_(p))))),Ps=l(le,{...c.resume.employment.container,marginTop:"1rem"}),xs=({employment:e})=>r(Ps,null,r(Ts,null,"Recent Experience"),e.history.map(o=>r(As,{...o}))),Ms=l("h3",{paddingLeft:0,textIndent:0}),Is=l("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),ao="@media (min-width: 41.666rem)",Os=l("a",{display:"block",padding:"0 0.5rem 0.5rem 0.5rem",zIndex:1,nested:{"& svg":{width:"1.25em"},[ao]:{paddingLeft:0}}}),js=l("div",{paddingTop:"0.05556rem"}),Ls=l("div",{alignItems:"start",display:"grid",gridTemplateColumns:"auto 1fr",padding:"1rem 0"}),Ys=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),co=({project:{description:e,end:o,repo:i,role:n,title:s,start:a,summary:d}})=>r(Ls,null,r(Os,{href:i},r(Zt,null)),r(js,null,r(We,null,r(Ms,null,r(Is,{href:i},s)),r(so,{range:[a,o]})),r(Ys,null,n===w.CREATOR?_(e):null,_(d)))),Ds=l(Ae,{display:"block",margin:0,nested:{[ao]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}}}}),lo=l("div",{marginTop:"0.5rem"}),Bs=({projects:e})=>{const{creator:o,contributor:i}=e.reduce((n,s)=>{const a=s.role===w.CREATOR?"creator":"contributor";return{...n,[a]:[...n[a],s]}},{creator:[],contributor:[]});return r(le,null,r(Ds,null,r("div",null,r(Ke,null,"Projects I Created"),r(lo,null,o.map(n=>r(co,{project:n})))),r("div",null,r(Ke,null,"Open Source Contributions"),r(lo,null,i.map(n=>r(co,{project:n}))))))},$s=l(A,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),Ns=l(ke,{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"}),po=e=>e.replace(/^https?:\/\/|\/$/g,""),Hs=({className:e,id:o,meta:i,resume:n,updated:s})=>{const{contact:{email:a,website:d},employment:p,info:m,name:g,projects:y,skills:u,social:T}=n;return r($s,{className:e,id:o,itemscope:!0,itemtype:"http://schema.org/Person"},r(Yn,null),r(Te,{...i}),r(cs,null,r(We,null,r("h1",{itemprop:"name"},g),r(Ns,{date:s,itemprop:"datePublished",mode:$.META}),r(ls,null,r(Xe,{href:`mailto:${a}`,itemprop:"email",printLabel:a},"Email"),r(Xe,{href:d,itemprop:"url",printLabel:po(d),rel:"me"},"Website"),T.map(({network:v,url:f})=>r(Xe,{href:f,itemprop:"url",printLabel:po(f),rel:"me"},v)))),r(ms,{itemprop:"description"},_(m.brief))),r(le,{"aria-label":"Skillsets"},r(us,null,Object.entries(u.merged).map(([v,f])=>r(bs,{key:v,name:v,skills:f})))),r(xs,{employment:p}),r(Bs,{projects:y}),r(le,null,r("h2",null,"References"),_("Available upon request.")))},fa=l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),ya=l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),ba=l("a",{...c.resume.contactList.link,textDecoration:"none"});export{we as BLOG_ART_HEIGHT,Te as BlogArt,on as BlogArtDefs,Mn as BlogListing,ro as BlogMetadataType,is as BlogPost,ze as COORDINATE_MAX,Mt as COORDINATE_MIN,A as FullBleedContainer,kt as FullBleedScrollableOverflow,Ct as FullBleedSymbolBlock,Jt as Head,ne as InvalidHashError,Ot as MIN_SMOOTHING,oo as Main,F as PageMetadataType,Hs as Resume,jt as SMOOTHING_RATIO,K as StylesProvider,C as Topic,Vt as TopicTag,Me as __SNOWPACK_ENV__,Xt as blogArtDefaultParameters,H as clamp,zt as cubicBezierPoints,ns as getBlogPostStaticProps,Nt as getNaiveSegments,Ht as getNonPhallicSegments,Ut as getPageMetadata,Li as hexChars,Ie as identifier,_ as mdx,V as renderer,Jo as resetAbbrContext,yr as resume,$t as scalePoint,Rt as sortBy,l as styled,c as theme,_e as toFixed,Lt as toHexPointSequence,Dt as toPointSequence,Bt as yBounds};
