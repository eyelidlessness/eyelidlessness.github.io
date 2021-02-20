import Je from"unist-util-visit";import{h as i,Fragment as N,toChildArray as Qe}from"https://cdn.skypack.dev/preact@10.5.10";import{renderToString as ro}from"fela-tools";import{isobject as no,createComponent as so,RendererProvider as ao,createSchema as t,emojiRegex as co,h as Ze,rehypeAccessibleEmojis as lo,remarkSlug as po,remarkSmartypants_1 as mo}from"./_vendor/index.js";import"sharp";import go from"@mdx-js/mdx";import{mdx as L,MDXProvider as uo}from"@mdx-js/preact";import{transform as ho}from"buble-jsx-only";import Ee from"dedent";import et from"module";import yo from"remark-mdx";import fo from"remark-mdx-to-plain-text";import _ from"path";import{loadTheme as tt,getHighlighter as ot}from"shiki";import{commonLangAliases as bo,commonLangIds as So,otherLangIds as vo}from"shiki-languages";import{renderers as wo,runTwoSlash as To}from"shiki-twoslash";import Re from"fs";import ko from"node-object-hash";import Co from"child_process";import Eo from"crypto";import{Head as Ro,seo as Ae}from"microsite/head";import{createRenderer as Ao}from"fela";import{processStyleWithPlugins as xo,KEYFRAME_TYPE as it,isNestedSelector as Po,normalizeNestedProperty as Oo,isMediaQuery as Mo,generateCombinedMediaQuery as rt,isSupport as jo,generateDeclarationReference as Io,isUndefinedValue as Yo,generateCSSSelector as Lo,RULE_TYPE as Do}from"fela-utils";import{cssifyDeclaration as No,cssifyObject as Bo}from"css-in-js-utils";import nt from"md5";let xe=new Set;const $o=()=>{xe=new Set},Ho=()=>e=>{Je(e,"abbr",o=>{const{abbr:r}=o;xe.has(r)&&(delete o.abbr,delete o.children,delete o.data,delete o.reference,Object.assign(o,{type:"text",value:r})),xe.add(r)})},st="production",zo="production",_o=!0;var Pe=Object.freeze({__proto__:null,MODE:st,NODE_ENV:zo,SSR:_o});const Fo=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),M=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((r,[n,s])=>typeof s=="object"&&(n==="nested"||n.includes("&"))?r:`${r}${Fo(n)}:${s};`,""),"}",Object.entries(o).map(([r,n])=>{if(typeof n=="object"){if(r==="nested")return Object.entries(n).map(([s,a])=>{const d=e.map(p=>s.replace(/&/g,p));return M(d,a)}).join("");if(r.includes("&")){const s=e.map(a=>r.replace(/&/g,a));return M(s,n)}}return""},[]).join("")].join(""),F=(...e)=>`clamp(${e.join(",")})`,K=e=>e.replace(/\s+/g," ").trim(),at=e=>e;function te(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function Uo(e,o,r,n,s,a){const d=[];return s&&d.push(te(s).slice(0,16)),n&&d.push(te(n).slice(0,16)),r&&d.push(te(r).slice(0,16)),d.push(te(e).slice(0,16)),d.push(te(o).slice(0,16)),d.push(a.slice(0,8)),d.join("_")}function Go(e,o,r=[""]){let n="";for(const a in e){const d=e[a];n=`${n}${a}{${Bo(d)}}`}let s="";for(let a=0;a<r.length;a++){const d=r[a];s=`${s}@${d}keyframes ${o}{${n}}`}return s}function qo(){return e=>(e.renderKeyframe=(o,r)=>{const n=o(r,e),s=xo(e,n,it,r),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const d=nt(a),p=(e.selectorPrefix||"_")+d.slice(0,8),g=Go(s,p,e.keyframePrefixes),m={type:it,keyframe:g,name:p};e.cache[a]=m,e._emitChange(m)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...r},n="",s="",a="")=>{let d=o?` ${o}`:"";for(const p in r){const g=r[p];if(no(g))if(Po(p))d+=e._renderStyleToClassNames(g,n+Oo(p),s,a);else if(Mo(p)){const m=rt(s,p.slice(6).trim());d+=e._renderStyleToClassNames(g,n,m,a)}else if(jo(p)){const m=rt(a,p.slice(9).trim());d+=e._renderStyleToClassNames(g,n,s,m)}else console.warn(`The object key "${p}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const m=Io(p,g,n,s,a);if(!e.cache.hasOwnProperty(m)){if(Yo(g)){e.cache[m]={className:""};continue}const y=No(p,g),S=nt(m),b=e.devMode?Uo(p,g,n,s,a,S):(e.selectorPrefix||"_")+S.slice(0,8),h=Lo(b,n),k={type:Do,className:b,selector:h,declaration:y,pseudo:n,media:s,support:a};e.cache[m]=k,e._emitChange(k)}const u=e.cache[m].className;u&&(d+=` ${u}`)}}return d},e)}import.meta.env=Pe;const ce=et.createRequire(import.meta.url),{default:Xo}=ce("fela-identifier"),{default:Wo}=ce("fela-plugin-embedded"),{default:Vo}=ce("fela-plugin-multiple-selectors"),{default:Ko}=ce("fela-plugin-typescript"),ct=st==="development",Jo=()=>{const e=Xo(),o=Ao({devMode:ct,enhancers:[qo(),e],plugins:[Wo(),Vo(),Ko()]});return{identifier:e,renderer:o}},{identifier:lt,renderer:U}=Jo();!ct&&import.meta.url.endsWith("/.microsite/staging/src/lib/styles/styles.js")&&U.subscribe(async()=>{ro(U)});const Qo=e=>Array.isArray(e)?e:[e],Zo=e=>({children:o})=>i(ao,{renderer:e},...Qo(o)),oe=Zo(U),ei=e=>U.renderRule(at,e),Oe=Object.assign(ei,{global:U.renderStatic.bind(U)}),l=(e,o)=>{const r=typeof o=="function"?o:()=>o;return so(r,e,Object.keys)},f=t({}),dt="FRESH@0.1.0",ia=t({$schema:"http://json-schema.org/draft-07/schema#",title:"FRESH Resume Schema",type:"object",additionalProperties:f,required:["name","meta"],properties:{name:t({type:"string",description:"The candidate's name as it should appear on the resume."}),meta:t({type:"object",additionalProperties:f,description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools.",required:["format"],properties:{format:t({const:dt,description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:t({type:"string",description:"The semantic version number for this resume."})}}),info:t({type:"object",additionalProperties:f,description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote.",properties:{label:t({type:"string",description:"A label for this resume, such as 'Full-Stack Developer'."}),class:t({type:"string",description:"Profession type or 'character class'."}),image:t({type:"string",description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:t({type:"string",description:"A short description or summary of yourself as a candidate."}),quote:t({type:"string",description:"Candidate quote or byline."})}}),disposition:t({type:"object",additionalProperties:f,description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like.",properties:{travel:t({type:"integer",description:"Percentage of time willing to travel (0 to 100)."}),authorization:t({type:"string",description:"Work authorization: citizen, work visa, etc."}),commitment:t({type:"array",description:"Types of work commitment desired: contract, perm, seasonal, etc.",items:t({type:"string",description:"One of: contract, permanent, part-time, seasonal, full-time."})}),remote:t({type:"boolean",description:"Open to remote employment opportunities."}),relocation:t({type:"object",additionalProperties:f,properties:{willing:t({oneOf:[t({type:"string"}),t({type:"boolean"})],description:"Willingness to relocate."}),destinations:t({type:"array",description:"Preferred destinations for relocation",items:t({type:"string",description:"City or area of relocation."})})}})}}),contact:t({type:"object",additionalProperties:f,description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types.",properties:{email:t({type:"string",description:"Primary contact email.",format:"email"}),phone:t({type:"string",description:"Primary phone number."}),website:t({type:"string",description:"Website, blog, or home page.",format:"uri"}),other:t({type:"array",items:t({type:"object",additionalProperties:f,properties:{label:t({type:"string",description:"A label for this contact information."}),category:t({type:"string",description:"Type of contact information: email, phone, url, postal, or IM."}),value:t({type:"string",description:"Phone number, email address, website, etc."})}})})}}),location:t({type:"object",description:"The 'location' section, when present, contains the candidate's location and address info.",additionalProperties:f,properties:{address:t({type:"string",description:"Your full postal address."}),code:t({type:"string",description:"Postal or other official routing code."}),city:t({type:"string",description:"Your home city."}),country:t({type:"string",description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:t({type:"string",description:"Your state, region, or province."})}}),employment:t({type:"object",description:"The 'employment' section describes the candidate's formal employment history.",additionalProperties:f,properties:{summary:t({type:"string",description:"Summary of overall employment."}),history:t({type:"array",items:t({type:"object",additionalProperties:f,required:["employer"],properties:{employer:t({type:"string",description:"Employer name."}),position:t({type:"string",description:"Your position or formal job title."}),url:t({type:"string",description:"Employer website.",format:"uri"}),start:t({type:"string",description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities under this employer."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this position.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})})}}),projects:t({type:"array",description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid.",items:t({type:"object",additionalProperties:f,required:["title"],properties:{title:t({type:"string",description:"Project name or code-name."}),category:t({type:"string",description:"Project type: open-source, private, side project, etc."}),description:t({type:"string",description:"Project description or summary."}),summary:t({type:"string",description:"A summary of your achievements and responsibilities on the project."}),role:t({type:"string",description:"Your role on the project: Contributor, Creator, etc."}),url:t({type:"string",description:"Project URL.",format:"uri"}),media:t({type:"array",description:"Media associated with this project.",items:t({type:"object",additionalProperties:f,required:["category"],properties:{category:t({type:"string",description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:t({type:"string",description:"Friendly media name."}),url:t({type:"string",description:"Media link, path, or location."})}})}),repo:t({type:"string",description:"Repo URL.",format:"uri"}),start:t({type:"string",description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy project-related achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this project.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})}),skills:t({type:"object",description:"A description of the candidate's formal skills and capabilities.",additionalProperties:f,properties:{sets:t({type:"array",items:t({type:"object",additionalProperties:f,required:["name","skills"],properties:{name:t({type:"string",description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:t({type:"string",description:"Level of mastery of the skill."}),skills:t({type:"array",items:t({type:"string",description:"Title or ID of a skill from the skills list."})})}})}),list:t({type:"array",items:t({type:"object",additionalProperties:f,required:["name"],properties:{name:t({type:"string",description:"The name or title of the skill."}),level:t({type:"string",description:"A freeform description of your level of mastery with the skill."}),summary:t({type:"string",description:"A short summary of your experience with this skill."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Number of years you've used the skill."})}})})}}),service:t({type:"object",description:"The 'service' section describes the candidate's overall service history in the true sense of the word 'service': volunteer work, military participation, civilian core, rescue and emergency services, and the like.",additionalProperties:f,properties:{summary:t({type:"string",description:"Summary of overall service/volunteer experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:f,required:["organization"],properties:{category:t({type:"string",description:"The type of service work, such as volunteer or military."}),organization:t({type:"string",description:"The service organization, such as Red Cross or National Guard."}),position:t({type:"string",description:"Your position or formal service role."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date you joined the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you left the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities at this organization."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this service.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),education:t({type:"object",additionalProperties:f,description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses.",required:["level"],properties:{summary:t({type:"string",description:"Summary of overall education."}),level:t({type:"string",description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:t({type:"string",description:"Your degree, if any (BSCS, BA, etc.)."}),history:t({type:"array",items:t({type:"object",additionalProperties:f,required:["institution"],properties:{title:t({type:"string",description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."}),institution:t({type:"string",description:"College or school name."}),area:t({type:"string",description:"e.g. Arts"}),studyType:t({type:"string",description:"e.g. Bachelor"}),start:t({type:"string",description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),grade:t({type:"string",description:"Grade or GPA."}),curriculum:t({type:"array",description:"Notable courses, subjects, and educational experiences.",items:t({type:"string",description:"The course name and number or other identifying info."})}),url:t({type:"string",description:"Website or URL of the institution or school.",format:"uri"}),summary:t({type:"string",description:"A short summary of this education experience."}),keywords:t({type:"array",description:"Keywords associated with this education stint.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Graduated *summa cum laude*'."})}),location:t({type:"string",description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),social:t({type:"array",description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like.",items:t({type:"object",additionalProperties:f,required:["network","user","url"],properties:{network:t({type:"string",description:"The name of the social network, such as Facebook or GitHub."}),user:t({type:"string",description:"Your username or handle on the social network."}),url:t({type:"string",description:"URL of your profile page on this network.",format:"uri"}),label:t({type:"string",description:"A friendly label."})}})}),recognition:t({type:"array",description:"The 'recognition' section describes the candidate's public or professional plaudits, kudos, awards, and other forms of positive external reinforcement.",items:t({type:"object",additionalProperties:f,required:["title"],properties:{category:t({type:"string",description:"Type of recognition: award, honor, prize, etc."}),title:t({type:"string",description:"Title of the award or recognition."}),date:t({type:"string",description:"Date awarded, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),from:t({type:"string",description:"Name of the awarding company, institution, or individual."}),summary:t({type:"string",description:"A brief description of the award and why you received it."}),url:t({type:"string",description:"A webpage or other associated URL.",format:"uri"})}})}),writing:t({type:"array",description:"The 'writing' section describes the candidate's writing and publication history, from blogs and essays to novels and dissertations.",items:t({type:"object",additionalProperties:f,required:["title"],properties:{title:t({type:"string",description:"Title of the article, essay, or book."}),category:t({type:"string",description:"One of 'book', 'article', 'essay', 'blog post', or 'series'."}),publisher:t({oneOf:[t({additionalProperties:f,type:"object",properties:{name:t({type:"string",description:"Publisher of the article, essay, or book."}),url:t({type:"string",description:"Publisher website or URL."})}}),t({type:"string"})],description:"Publisher of the article, essay, or book."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),url:t({type:"string",description:"Website or URL of this writing or publication."}),summary:t({type:"string",description:"A brief summary of the publication."})}})}),reading:t({type:"array",description:"The 'reading' section describes the candidate's reading habits and is intended to demonstrate familiarity with industry-relevant publications, blogs, books, or other media that a competent industry candidate should be expected to know.",items:t({type:"object",additionalProperties:f,required:["title"],properties:{title:t({type:"string",description:"Title of the book, blog, or article."}),category:t({type:"string",description:"The type of reading: book, article, blog, magazine, series, etc."}),url:t({type:"string",description:"URL of the book, blog, or article.",format:"uri"}),author:t({oneOf:[t({type:"string"}),t({type:"array",items:t({type:"string",description:"Author name."})})],description:"Author of the book, blog, or article."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),summary:t({type:"string",description:"A brief description of the book, magazine, etc."})}})}),speaking:t({type:"array",description:"The 'speaking' section describes the candidate's speaking engagements and presentations.",items:t({type:"object",additionalProperties:f,required:["event"],properties:{title:t({type:"string",description:"Speaking engagement title."}),event:t({type:"string",description:"Event at which you presented."}),location:t({type:"string",description:"Freeform location of the event, e.g., 'San Francisco, CA' or 'Tokyo'."}),date:t({type:"string",description:"Presentation date.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"An array of specific highlights such as 'Won 'Best Speaker' award at 2012 E3 expo'."})}),keywords:t({type:"array",description:"Keywords associated with this speaking engagement.",items:t({type:"string",description:"A list of keywords such as 'TED', 'E3', 'mathematics', 'Big Data', etc."})}),summary:t({type:"string",description:"A description of this speaking engagement."})}})}),governance:t({type:"array",description:"The 'governance' section describes the candidate's leadership, standards, board, and committee roles.",items:t({type:"object",additionalProperties:f,required:["organization"],properties:{summary:t({type:"string",description:"Summary of your governance at this organization."}),category:t({type:"string",description:"Type of governance: committee, board, standards group, etc."}),role:t({type:"string",description:"Governance role: board member, contributor, director, etc."}),organization:t({type:"string",description:"The organization."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"}),keywords:t({type:"array",description:"Keywords associated with this governance stint.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Increased company profits by 35% year over year'."})})}})}),languages:t({type:"array",description:"The 'languages' section describes the candidate's knowledge of world languages such as English, Spanish, or Chinese.",items:t({type:"object",additionalProperties:f,required:["language"],properties:{language:t({type:"string",description:"The name of the language: English, Spanish, etc."}),level:t({type:"string",description:"Level of fluency with the language, from 1 to 10."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Amount of time language spoken?"})}})}),samples:t({type:"array",description:"The 'samples' section provides an accessible demonstration of the candidate's portfolio or work product to potential employers and co-workers.",items:t({type:"object",additionalProperties:f,required:["title"],properties:{title:t({type:"string",description:"Title or descriptive name."}),summary:t({type:"string",description:"A brief description of the sample."}),url:t({type:"string",description:"URL of the sample (if any).",format:"uri"}),date:t({type:"string",description:"Date the sample was released in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights for this sample.",items:t({type:"string",description:"For ex, 'Implemented optimized search algorithm derived from Slices of Pi'."})}),keywords:t({type:"array",description:"Keywords associated with this work sample.",items:t({type:"string",description:"For example, C++, HTML, game."})})}})}),references:t({type:"array",description:"The 'references' section describes the candidate's personal, professional, and/or technical references.",items:t({type:"object",additionalProperties:f,required:["name"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),role:t({type:"string",description:"The occupation of this reference, or his or her relationship to the candidate."}),category:t({type:"string",description:"The type of reference, eg, professional, technical, or personal."}),private:t({type:"boolean",description:"Is this a private reference?"}),summary:t({type:"string",description:"Optional summary information for this reference."}),contact:t({type:"array",items:t({type:"object",additionalProperties:f,properties:{label:t({type:"string",description:"Friendly label for this piece of contact info."}),category:t({type:"string",description:"Type of contact information (phone, email, web, etc.)."}),value:t({type:"string",description:"The email address, phone number, etc."})}})})}})}),testimonials:t({type:"array",description:"The 'testimonials' section contains public testimonials of the candidate's professionalism and character.",items:t({type:"object",additionalProperties:f,required:["name","quote"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),quote:t({type:"string",description:"A quoted reference, eg, 'Susan was an excellent team leader, manager, and operations specialist with a great eye for detail. I'd gladly hire her again if I could!'"}),category:t({type:"string",description:"Type of reference: personal, professional, or technical."}),private:t({type:"boolean",description:"Public reference (testimonial) or via private contact?"})}})}),interests:t({type:"array",description:"The 'interests' section provides a sampling of the candidate's interests and enthusiasms outside of work.",items:t({type:"object",additionalProperties:f,required:["name"],properties:{name:t({type:"string",description:"The name or title of the interest or hobby."}),summary:t({type:"string"}),keywords:t({type:"array",description:"Keywords associated with this interest.",items:t({type:"string",description:"A keyword relating to this interest."})})}})}),extracurricular:t({type:"array",description:"The 'extracurricular' section describes the candidate's involvement with industry-related events and enterprises outside of work. For example: attending conferences, workshops, or meetups.",items:t({type:"object",additionalProperties:f,required:["title","activity"],properties:{title:t({type:"string",description:"Title of the extracurricular activity."}),activity:t({type:"string",description:"The extracurricular activity."}),location:t({type:"string",description:"City, state, or other freeform location."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"})}})}),affiliation:t({type:"object",additionalProperties:f,description:"The 'affiliation' section describes the candidate's membership in groups, clubs, organizations, and professional associations whether at the collegiate, corporate, or personal level.",properties:{summary:t({type:"string",description:"Optional summary of overall affiliation and membership experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:f,required:["organization"],properties:{category:t({type:"string",description:"The type of affiliation: club, union, meetup, etc."}),organization:t({type:"string",description:"The name of the organization or group."}),role:t({type:"string",description:"Your role in the organization or group."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date your affiliation with the organization began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your affiliation with the organization ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities during this affiliation."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this affiliation.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}})}});var E;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(E||(E={}));var w;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator"})(w||(w={}));const ti=[{title:"Eyelidlessness",category:E.PUBLIC_ACCESS,description:`
      My personal website and tech blog.
    `,summary:`
      Built with [Preact][1], [Microsite][2] and [Fela][3].

      [1]: https://preactjs.com/
      [2]: https://github.com/natemoo-re/microsite
      [3]: https://fela.js.org/
    `,repo:"https://github.com/eyelidlessness/eyelidlessness.github.io",role:w.CREATOR,start:"2020-10",end:"2021-02"},{title:"Microsite",category:E.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:w.CONTRIBUTOR,start:"2021-01",end:"2021-02"},{title:"HNDarkMode",category:E.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:w.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:E.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:w.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:E.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:w.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:E.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:w.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:E.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:w.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:E.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:w.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:E.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:w.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:E.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:w.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:E.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:w.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:E.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:w.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:E.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:w.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:E.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:w.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:E.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:w.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:E.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:w.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:E.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:w.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:E.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:w.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:E.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:w.CONTRIBUTOR,start:"2015-01",end:"2015-01"}],oi=e=>e;var v;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(v||(v={}));var ie;(function(e){e.LANGUAGES_PLATFORMS="Languages & Platforms",e.SERVICES_DISTRIBUTED_SYSTEMS="Services & Distributed Systems",e.USER_INTERFACE_EXPERIENCE="User Interface & Experience"})(ie||(ie={}));const Me={[ie.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:v.EXPERT},{name:"OpenAPI & JSON Schema",level:v.EXPERT},{name:"Django REST framework",level:v.ADVANCED},{name:"Fault tolerance",level:v.ADVANCED},{name:"Microservice architecture",level:v.ADVANCED},{name:"Apache Storm",level:v.INTERMEDIATE},{name:"Redis",level:v.BASIC}],[ie.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:v.EXPERT},{name:"DOM & Web APIs",level:v.EXPERT},{name:"Web performance",level:v.ADVANCED},{name:"SVG",level:v.ADVANCED},{name:"UI & UX design",level:v.ADVANCED},{name:"A11y",level:v.INTERMEDIATE}],[ie.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:v.EXPERT},{name:"Clojure & ClojureScript",level:v.EXPERT},{name:"HTML & CSS",level:v.EXPERT},{name:"SQL (PostgreSQL)",level:v.ADVANCED},{name:"Python",level:v.INTERMEDIATE},{name:"Swift",level:v.BASIC},{name:"Java",level:v.BASIC}]},ii={list:Object.values(Me).flatMap(at),merged:Me,sets:Object.entries(Me).map(([e,o])=>({name:e,skills:o.map(({name:r})=>r)}))},ri=oi({name:"Trevor Schmidt",meta:{format:dt,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:[{employer:"Treez",position:"Senior Software Engineer",start:"2018-12",end:"2020-09",summary:`
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
          `]}]},info:{class:"Software Engineer",brief:Ee(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:ti,skills:ii,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),le=Symbol("DEFAULT_TOPIC"),P={[le]:le,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},ni=e=>typeof e=="string"||typeof e=="symbol",pt=e=>ni(e)&&e in P,je=e=>pt(e)?P[e]:e,mt=Object.entries(P).reduce((e,o)=>{const[r,n]=o;return typeof r=="string"?{...e,[n]:r}:e},{}),si=e=>pt(e)?e:mt[e],ai=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),ci=Object.fromEntries(Object.entries(mt).map(([e,o])=>typeof o=="string"?[e,ai(o)]:null).filter(e=>e!=null)),li=e=>{const o=je(e);if(typeof o=="string")return ci[o]},de=2,Ie={minEm:1.0625,fluidVw:1.0625*de,maxEm:1.325},A="@media (prefers-color-scheme: dark)",di=["h1","h2","h3","h4","h5","h6"],pi=["dd","dl","dt","li","ol","ul"],mi=[...di,...pi,"p"],J=Ie.minEm/Ie.maxEm,B={h1:1.953,h2:1.563,h3:1.25},gi={h1:{minEm:B.h1*J,fluidVw:B.h1*J*de,maxEm:B.h1},h2:{minEm:B.h2*J,fluidVw:B.h2*J*de,maxEm:B.h2},h3:{minEm:B.h3*J,fluidVw:B.h3*J*de,maxEm:B.h3}},gt=75,pe=1.25,ui=["0.7fr",`${pe}rem`,[`${gt}ch`,`calc(100% - ${pe*2}rem)`],`${pe}rem`,"1.2fr"],Ye=1,hi=["0.7fr",`${Ye}rem`,[`${gt*1.1875}ch`,`calc(100% - ${Ye*2}rem)`],`${Ye}rem`,"1.2fr"],yi=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],ut=yi.join(", "),fi=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],bi=fi.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),j={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Si="hover-inherit-topic-color",vi={[P[le]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.DEFAULT_TOPIC.light},[A]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.DEFAULT_TOPIC.dark}}}}},[P.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.ABLEISM}}},[P.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.ARTS_CRAFTS}}},[P.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.LEMON}}},[P.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.MENTAL_ILLNESS}}},[P.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.NEURODIVERGENCE}}},[P.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.PHILOSOPHY}}},[P.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.POLITICS}}},[P.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.RACISM}}},[P.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.SEXISM}}},[P.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.SUBSTANCE_ABUSE}}},[P.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.TECHNOLOGY}}},[P.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:j.TRANSPHOBIA}}}},ht=lt(),c={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Si,baseFontSizeRange:Ie,darkMode:A,abbreviation:{backgroundImage:`linear-gradient(${["to top","hsl(64deg, 100%, 50%, 0.25)","hsl(64deg, 100%, 50%, 0.25) 0.5em","transparent 0.5em"].join(", ")})`},aside:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},[A]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},blog:{listing:{descriptionIdentifier:ht,description:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em",nested:{[A]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${ht}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[A]:{color:"hsl(212deg, 10%, 90%)"}}},[A]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[A]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:ut},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:ut,nested:{[A]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:mi,gitHubLogo:{fill:"#171515",nested:{[A]:{fill:"#fff"}}},headingRanges:gi,[A]:{code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",outline:"none"},prose:{color:"hsl(210deg, 10%, 90%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 85%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:ui,mainGridSidePaddingRem:pe,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",outline:"1px solid #eee"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:bi},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[A]:{backgroundColor:"hsl(336deg, 100%, 7%)"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[A]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"hsl(47deg, 58%, 98%)",nested:{[A]:{backgroundColor:"hsl(41deg, 100%, 8%)"}}},separator:{borderBottom:"1px solid hsl(17deg, 78%, 90%)",nested:{[A]:{borderColor:"hsl(17deg, 70%, 17%)"}}}},skillLevel:{[v.BASIC]:{backgroundColor:"hsl(207deg, 25%, 83%)",nested:{[A]:{backgroundColor:"hsl(207deg, 15%, 43%)"}}},[v.INTERMEDIATE]:{backgroundColor:"hsl(188deg, 53%, 74%)",nested:{[A]:{backgroundColor:"hsl(188deg, 53%, 34%)"}}},[v.ADVANCED]:{backgroundColor:"hsl(188deg, 70%, 59%)",nested:{[A]:{backgroundColor:"hsl(188deg, 80%, 39%)"}}},[v.EXPERT]:{backgroundColor:"hsl(152deg, 100%, 39%)",nested:{[A]:{backgroundColor:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},siteHeader:{columns:hi,container:{},pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},topicColors:vi,topicTagIdentifier:lt(),topicTagInner:{backgroundImage:K(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[A]:{backgroundImage:K(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:K(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[A]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:K(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")}},yt=["b","em","h1","h2","h3","i","strong"],me=["h1","h2","h3","h4","h5","h6"],wi=[...me,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Ti=Array.from(new Set([...me,...wi,"div","fieldset","form","hgroup","hr","pre"])),ki=K(`
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
    font-size:        ${F(`${c.baseFontSizeRange.minEm}em`,`${c.baseFontSizeRange.fluidVw}vw`,`${c.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${M(["body"],{...c.document,...c.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${me.join(",")} {
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
`),Ci=()=>{Oe.global(K(`
      ${Ti.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${me.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${M(yt,c.emphasize)}

      h1 {
        font-size: ${F(`${c.headingRanges.h1.minEm}em`,`${c.headingRanges.h1.fluidVw}vw`,`${c.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${F(`${c.headingRanges.h2.minEm}em`,`${c.headingRanges.h2.fluidVw}vw`,`${c.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${F(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,`${c.headingRanges.h3.maxEm}em`)};
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

      ${M(["hr:after"],{...c.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${M(["pre"],c.pre)}

      ${M(["code"],{...c.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

      pre code {
        background-color: transparent;
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

      ${M(["a"],{...c.links,fontWeight:"bolder"})}

      ${M(["abbr"],{...c.abbreviation,textDecoration:"none"})}

      ${M(["aside","small"],c.deemphasize)}

      img {
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
        ${M(["body"],{...c[c.darkMode].document,...c[c.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${M(yt,c[c.darkMode].emphasize)}
        ${M(["pre"],c[c.darkMode].pre)}
        ${M(["code"],c[c.darkMode].code)}
        ${M(["a"],c[c.darkMode].links)}
        ${M(["aside","small"],c[c.darkMode].deemphasize)}
        ${M(["hr:after"],c[c.darkMode].separator)}
      }
    `))},Ei=`
  ${c.mainGridColumns[0]}
  ${c.mainGridColumns[1]}
  min(
    ${c.mainGridColumns[2][0]},
    ${c.mainGridColumns[2][1]}
  )
  ${c.mainGridColumns[3]}
  ${c.mainGridColumns[4]}
`.replace(/\s+/g," "),ft={gridColumn:"1 / -1"},bt=Oe(ft),Y=l("div",{nested:{[`& > .${bt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:Ei,...ft}),Ri=l(Y,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),St=l("div",{alignContent:"flex-start",alignItems:"flex-start",display:"flex",gridColumn:"2 / 5"}),Ai=l("div",{flexGrow:0,fontSize:"9em",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),xi=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),Le="div",Pi={ContentContainer:Le,InnerContainer:St,OuterContainer:Le,SymbolContainer:Le},Oi=e=>{const{children:o,ContentContainer:r,InnerContainer:n,OuterContainer:s,outerContainerProps:a,symbol:d,SymbolContainer:p}={...Pi,...e};return i(Ri,{as:s,...a},i(St,{as:n},i(Ai,{as:p,role:"presentation"},d),i(xi,{as:r},o)))},Mi=l("pre",{fontSize:"1rem"}),ji=l("div",{gridColumn:"2 / 6"}),Ii=l(Y,{...c.pre,nested:{[c.darkMode]:{...c[c.darkMode].pre},"& code":{backgroundColor:"transparent"},"& pre":{backgroundColor:"transparent",maxWidth:"100%",margin:0,overflow:"auto",outline:"none",padding:["1rem","0"].join(" ")}}}),Yi=l("div",{...c.codeBlock.symbol,fontSize:F("3.2em","10vw","4.5em"),marginTop:"-0.325em",textIndent:"-0.25em"}),Li=({children:e})=>i(Oi,{ContentContainer:Mi,InnerContainer:ji,OuterContainer:Ii,symbol:"{",SymbolContainer:Yi},e),Di=(e,o)=>e.slice().sort(o),Ni=e=>typeof e=="object"&&e!=null,Bi=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),$i=(e,o)=>Ni(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&co().test(o),Hi=({["aria-label"]:e,children:o,role:r})=>i(Bi,{"aria-label":e,role:r},o),zi={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},_i={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},Fi={...zi,..._i},vt=_.resolve(process.cwd(),"./syntax-themes"),[Ui,Gi]=await Promise.all([tt(_.resolve(vt,"./yi-dark.json")),tt(_.resolve(vt,"./yi-light.json"))]),qi={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},Xi={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},Wi=e=>e.trim().split(/\b\W*\b/).reduce((o,r)=>({...o,...Xi[r]}),{}),wt=e=>Object.entries(e).reduce((o,[r,n])=>{const s=qi[r];if(n==null||typeof s!="string")return o;const a=s==="fontStyle"?Wi(n):{[s]:n};return{...o,...a}},{}),[Vi,Tt]=await Promise.all([ot({theme:Ui}),ot({theme:Gi})]),Ki=new Set([...bo,...So,...vo]),Ji=new Set(["ts","tsx","typescript"]),Qi=(e,o)=>{const[r,n]=[Tt,Vi].map(s=>s.codeToThemedTokens(e,o).reduce((d,p)=>p.reduce((g,m)=>({...g,...m.explanation?.reduce((u,y)=>({...u,...y.scopes.reduce((S,{themeMatches:b})=>({...S,...b.reduce((h,{name:k,scope:T,settings:C})=>({...h,byName:k==null?h.byName:{...h.byName,[k]:C},byScope:Array.isArray(T)?{...h.byScope,...T.reduce((I,R)=>({...I,[R]:C}),h.byScope)}:typeof T=="string"?{...h.byScope,[T]:C}:h.byScope}),{...S,byName:{...S.byName},byScope:{...S.byScope}})}),u)}),g)}),d),{byName:{},byScope:{}}));return{dark:n,light:r}},Zi=(e,o)=>{const{content:r,explanation:n}=e,{dark:s,light:a}=o,d=n?.reduce((g,m)=>({...g,...m.scopes.reduce((u,{themeMatches:y})=>({...u,...y.reduce((S,{name:b,scope:h})=>{const k=wt({...b==null?{}:a.byName[b],...Array.isArray(h)?h.reduce((R,O)=>({...R,...a.byScope[O]}),{}):typeof h=="string"?a.byScope[h]:{}}),T=wt({...b==null?{}:s.byName[b],...Array.isArray(h)?h.reduce((R,O)=>({...R,...s.byScope[O]}),{}):typeof h=="string"?s.byScope[h]:{}}),C={...S,...k},I=Object.keys(T).length>0?{nested:{[c.darkMode]:T}}:{};return{...C,...I}},{})}),{})}),{})??{},p=Object.keys(d).length>0?l("span",d):"span";return r.replace(/\s+/,"")===""||p==null?i("span",{},r):i(p,{},r)},er=(e,o)=>Ze(i(oe,{},i("pre",{},i("code",{},...e.reduce((r,n,s)=>{const a=n.map(p=>Zi(p,o)),d=s===0?"":`
`;return[...r,d,...a]},[]))))),tr=(e,o={})=>r=>{const{lang:n,value:s,meta:a}=r;!!process?.env?.TWOSLASH_DISABLE||or(o,r);const p=String(n)==="json5"?"json":n;let g;const m=s.replace(/^\n+|\n+$/g,"");if(!Ki.has(p))g=wo.plainTextRenderer(m,{});else{const u=e.codeToThemedTokens(m,p),y=Qi(m,p);g=er(u,y)}Ji.has(p)&&!a?.includes("ignore"),r.children=[],r.type="html",r.value=g},or=(e,o)=>{if(o.meta?.includes("twoslash")){const r=To(o.value,o.lang,e);o.value=r.code,o.lang=r.extension,o.twoslash=r}},ir=()=>o=>{Je(o,"code",tr(Tt))};import.meta.env=Pe;const re=et.createRequire(import.meta.url),rr=re("rehype-parse"),nr=re("rehype-remark"),sr=re("remark"),ar=re("remark-abbr"),cr=re("remark-stringify"),lr=({className:e,children:o,...r})=>e==="language-id"?null:e==="code-container"?L(N,r,...Qe(o)):L("div",{className:e,...r},...Qe(o)),dr=({children:e,...o})=>$i(o,e)?L(Hi,o,e):L("span",o,e),De={components:{div:lr,pre:Li,span:dr},rehypePlugins:[lo],remarkPlugins:[ir,ar,Ho,po,mo]},kt=e=>{const{children:o=L(()=>null,{}),components:r={},rehypePlugins:n=[],remarkPlugins:s=[]}=e,a={...De.components,...r},d={mdx:L,MDXProvider:uo,components:a,props:{}},p=typeof o=="string"?Ee(o).trim():o,g=[...De.rehypePlugins,...n],m=[...De.remarkPlugins,...s],u=go.sync(p,{rehypePlugins:g,remarkPlugins:m,skipExport:!0}).trim(),{code:y}=ho(u,{objectAssign:"Object.assign"}),S=Object.keys(d),b=Object.values(d),h=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...S,`${y}

${h}`)(L,...b)},Ct=(e,o)=>{const[r,...n]=e;return o.reduce((s,a,d)=>[...s,a,n[d]],[r]).join("")},pr=Object.entries(Fi).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),Et=e=>{const[o,...r]=e;return[typeof o=="string"?o:Ct(o,r),pr].join(`

`)},G=(...e)=>{const o=Et(e);return L(oe,{},L(kt,{},o))},mr=(...e)=>{const o=Et(e);return L(oe,{},L(kt,{components:{p:N}},o))},gr=(e,...o)=>{const r=Ee(Ct(e,o)).trim();return sr().use(rr).use(nr).use(cr).use(yo).use(fo).processSync(r).contents.toString().trim()},Ne=e=>parseInt(e,16),ge=Ne("ff"),ur=Ne("00"),Rt=.05,hr=.15,yr=.05;class Be extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const fr=/([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/g,br=e=>e.length===10,Sr=e=>{const r=Array.from(e.matchAll(fr)??[]).map(([,n,s])=>({x:n,y:s}));if(!br(r))throw new Be(e);return r},vr=Symbol("IS_POINT"),wr=e=>Object.assign(e,{[vr]:!0}),At=e=>{const o=Ne(e);if(o>ge||o<ur)throw new Error(`Not a valid coordinate: ${e}`);return wr(o)},Tr=({x:e,y:o})=>({x:At(e),y:At(o)}),kr=e=>e.length===10,Cr=e=>{const o=Sr(e);try{const r=o.map(Tr);if(!kr(r))throw new Be(e);return r}catch{throw new Be(e)}},Er=Symbol("SCALED_COORDINATE"),xt=e=>e.reduce(({max:o,min:r},{y:n})=>({max:Math.max(o,n),min:Math.min(r,n)}),{max:-Infinity,min:Infinity}),x=(e,o)=>Object.assign(e,{[Er]:o}),Rr=({point:{x:e,y:o},xScale:r,xShift:n,yRange:s,yScale:a,yShift:d})=>({x:x(ge*((e+n)/ge)*r,r),y:x((o+d)/s*100,a)}),Ar=({points:e,xMax:o,xScale:r,yScale:n})=>e.reduce((s,a,d,p)=>{const{x:g}=p[d-1]??{x:x(0,r)},{x:m}=p[d+1]??{x:x(o,r)},u=x(0,n),b=[{x:g,y:u},a,{x:m,y:u}];return[...s,b]},[]),xr=({segments:e,xMax:o,xScale:r,yScale:n})=>e.map(s=>{const[a,{x:d,y:p},{x:g,y:m}]=s,{x:u,y}=a,S=g-u,b=p/S,k=6/b;if(k<1){const C=k*.2*u,I=u-C,R=g+C,O=I<0?Math.abs(I):R>o?o-R:0,z=I+O,D=R+O,H=k*.3,W=d+O,ae=H*p,Te=p-ae,ke={x:x(z,r),y:x(y,n)},V={x:x(W,r),y:x(Te,n)},Ce={x:x(D,r),y:x(m,n)};return[ke,V,Ce]}return s}),Pr=({x:e,y:o},{x:r,y:n})=>{const s=r-e,a=n-o;return{angle:Math.atan2(a,s),length:Math.sqrt(s**2+a**2)}},Pt=({current:e,previous:o,next:r,reverse:n,smoothing:s,xScale:a,yScale:d})=>{const p=n?Math.PI:0,g=Pr(o,r),m=g.angle+p,u=g.length*s,{x:y,y:S}=e,b=y+Math.cos(m)*u,h=S+Math.sin(m)*u;return{x:x(b,a),y:x(h,d)}},Or=({index:e,point:o,points:r,smoothing:n,xScale:s,yScale:a})=>{const d=r[e-1];if(d==null)throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());const p=r[e-2]??d,g=Pt({current:d,previous:p,next:o,reverse:!1,smoothing:n,xScale:s,yScale:a}),m=d,u=r[e+1]??o,y=Pt({current:o,previous:m,next:u,reverse:!0,smoothing:n,xScale:s,yScale:a});return[g,y,o]},Ot=({segment:e,smoothing:o,xScale:r,yScale:n})=>e.reduce((s,a,d)=>{if(d===0)return s;const g=Or({index:d,point:a,points:e,smoothing:o,xScale:r,yScale:n}).map(m=>`${m.x},${m.y}`).join(" ");return[...s,`C ${g}`]},[]),Mr=({baseYCoordinate:e,segments:o,xScale:r,yMax:n,yOffsetBelowMidpoint:s,yScale:a,yTilt:d=!1})=>o.reduce((p,g,m,u)=>{const{length:y}=u,[S,b,h]=g,{x:k,y:T}=S,{x:C,y:I}=b,{x:R,y:O}=h,z=R-k,D=z===0?0:Math.max(I/z*yr,hr),H=d?.1:0,W=1-H,ae=1+H,Te=m%2==0?W:ae,ke=s?T+e:n-T+e,V={x:k,y:x(ke*Te,a)},Ce=m%2==0?W:ae,Jt=s?O+e:n-O+e,Xe={x:x(R,r),y:x(Jt*Ce,a)},We=C-k,Ve=R-C,Qt=Ve>We?0:0-(C-k)*Rt,Ke=(y-m)*(a/100*n),Zt={x:x(C+Qt,r),y:x(I-Ke,a)},eo=Ot({segment:[V,Zt,Xe],smoothing:D,xScale:r,yScale:a}),to=Ve>We?(R-C)*Rt:0,oo={x:x(C+to,r),y:x(n-Ke,a)},io=Ot({segment:[Xe,oo,V],smoothing:D,xScale:r,yScale:a});return[...p,[`M ${V.x},${V.y}`,...eo,...io,"Z"].join(" ")]},[]),jr=({hash:e,xPadding:o=0,xScale:r=1,yOffset:n=.5,yPadding:s=0,yScale:a=1})=>{const d=Cr(e),p=Di(d,(D,H)=>D.x>H.x?1:-1),{max:g,min:m}=xt(p),u=o/2,y=g-m,S=0-m+s/2,b=p.map(D=>Rr({xScale:r,xShift:u,yRange:y,yScale:a,yShift:S,point:D})),h=(ge+o)*r,{max:k}=xt(b),T=(k+s)*a,C=Ar({points:b,xMax:h,xScale:r,yScale:a}),I=xr({segments:C,xMax:h,xScale:r,yScale:a}),R=n>.5,O=R?T*n:-1*T*n;return{segmentPaths:Mr({baseYCoordinate:O,segments:I,xScale:r,yMax:T,yOffsetBelowMidpoint:R,yScale:a}),xMax:h,yMax:T}};var $e;(function(e){e.PNG="png"})($e||($e={}));const He=process.cwd(),ue=e=>e.startsWith("/")?_.resolve(He,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):_.extname(e)==""?_.resolve(He,"./src/pages/",`${e}.tsx`):e;var q;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A"})(q||(q={}));const Ir=new Set([q.CURRENT,q.FIRST]);var Q;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(Q||(Q={}));const Yr="origin",Lr="main",he=e=>{const{branch:o=Lr,filter:r=q.FIRST,format:n,path:s=He,remote:a=Yr}=e,d=Ir.has(r),p=d?["--max-count=1"]:[],{error:g,stdout:m}=Co.spawnSync("git",["log",r,...p,`--branches=${o}`,`--format=${n}`,`--remotes=${a}`,"--",s]);if(g)throw g;const u=m.toString().trim();return u===""?null:d?u:u.split(`
`)},Dr=e=>{const o=ue(e),r=he({filter:q.CURRENT,format:Q.ISO_DATE,path:o}),n=new Date(r??"");return isNaN(n.getTime())?null:n},Nr=e=>{const o=ue(e),r=he({format:Q.ISO_DATE,path:o}),n=new Date(r??"");return isNaN(n.getTime())?null:n},Mt=e=>{const o=Re.readFileSync(e).toString();let r=Eo.createHash("sha1");return r.update(o),r.digest("hex")},Br=e=>{const o=ue(e);return he({filter:q.CURRENT,format:Q.HASH,path:o})??Mt(o)},$r=e=>{const o=ue(e);return he({format:Q.HASH,path:o})??Mt(o)},Hr={height:630,width:1200},zr=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",_r=ko({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Fr=(e,o,r=$e.PNG)=>{const n=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),s=_r.hash(o),a=_.resolve(n,`${s}.${r}`),d=a.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:a,imageType:r,publicPath:d,...Hr}}},jt=(e,o,r,n=[P.TECHNOLOGY],s="updated")=>{const a=s==="created",d=a?$r(e):Br(e),p={created:Nr(e)??Re.statSync(o.replace(/^file:(\/\/)?/,"")).ctime,updated:Dr(e)??Re.statSync(o.replace(/^file:(\/\/)?/,"")).mtime},m=Fr(o,a?{hash:d,importURL:o}:{importURL:o,stat:p,topics:n});return{hash:d,host:zr,path:e,social:m,stat:p,title:r,topics:n}},It=()=>i(N,null,i("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},i("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),i("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),i("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),i("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),i("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),i("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),i("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),i("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},i("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),i("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},i("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),i("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),i("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),i("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},i("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Ur=()=>i("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},i("defs",null,i(It,null))),Gr=1.6180334,qr=4,Yt=Gr*5,Lt=.75,Z=.15,Xr=1.5,ze=F("6rem",`${100/Yt}vw`,"10rem"),Wr=l(Y,{height:ze,position:"relative",width:"100%"}),Vr=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Kr=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var ne;(function(e){e.INLINE="inline",e.NONE="none"})(ne||(ne={}));const ye=e=>{const{className:o,defsUsage:r=ne.INLINE,hash:n,height:s,rawSVG:a=!1,styleRenderer:d=U,title:p,topics:g=[],width:m}=e,u=g.length<2?[...g,P[le]]:g,y=O=>`${O}-${n}`,{segmentPaths:S,xMax:b,yMax:h}=jr({hash:n,xPadding:qr,xScale:Yt,yOffset:Lt,yPadding:Z,yScale:Xr}),k=h*Lt,T=h*Z/4,C=T*.75,R=i(Vr,{className:bt,height:s,preserveAspectRatio:"none",viewBox:[0,0,b,h].join(" "),width:m},i("title",null,"Generated art for the page or post titled",i("i",null,p),", with the content or commit hash ",n," ",u.length>0?[", and the topics: ",u.map(String).join(", ")]:null),i("defs",null,r===ne.INLINE?i(It,null):null,i("filter",{id:y("blur")},i("feOffset",{in:"SourceGraphic",dx:"0",dy:C,result:"glowOffsetOut"}),i("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:T,result:"glowBlurOut"}),i("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),i("clipPath",{id:y("blurOverlayClip")},i("rect",{x:"0",width:b,y:k,height:h})),i("filter",{id:y("blurOverlay")},i("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:C}),i("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:T})),i("filter",{id:y("blurUnderlay")},i("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:C}),i("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:T}),i("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),i("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),i("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),i("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:T})),i("g",{id:y("blobs")},S.map((O,z)=>{const D=z%u.length,H=u[D],W=d.renderRule(()=>({...c.topicColors[H]}),Object.keys);return i(Kr,{key:O,className:W,d:O,mask:"url(#softVerticalFade)"})}))),i("g",{transform:[`translate(0, ${h*Z})`,`scale(1, ${1-Z*2})`].join(" "),filter:`url(#${y("blur")})`},i("use",{href:`#${y("blobs")}`,mask:"url(#horizontalMidFade)"})),i("g",{"clip-path":`url(#${y("blurOverlayClip")})`,filter:`url(#${y("blurOverlay")})`,transform:[`translate(0, ${h*Z})`,`scale(1, ${1-Z*2})`].join(" ")},i("use",{href:`#${y("blobs")}`,mask:"url(#softVerticalFade)"})));return a?R:i(Wr,{className:o},R)},Jr=[,"January","February","March","April","May","June","July","August","September","October","November","December"],Qr=l("time",{nested:{[c.darkMode]:{...c[c.darkMode].deemphasize}},...c.deemphasize});var $;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})($||($={}));const fe=({date:e,mode:o=$.DEFAULT,...r})=>{const n=e.getMonth()+1,s=e.getFullYear(),a=o===$.SHORT?`${n}/${s}`:o===$.META?"":[e.getDate(),Jr[n],s].join(" ");return i(Qr,{...r,datetime:e.toISOString()},a)},Zr=l("a",{...c.topicTagLink(c.topicTagIdentifier.className)}),en=l("span",c.topicTagIdentifier()),tn=l(en,{...c.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),on=({className:e,link:o=!0,topic:r})=>{const n=li(r),s=je(r);if(n==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=o?Zr:"span",d=o?{href:`/blog/topics/${n}/`}:{};return i(a,{className:[e,c.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...d},i(tn,null,s))},Dt=l(on,e=>({...c.topicTagOuter,...c.topicColors[je(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),rn=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),nn=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),Nt=({className:e,link:o=!0,topics:r})=>i(rn,{className:e},r.map(n=>typeof n=="string"?i(nn,{key:si(n)},i(Dt,{link:o,topic:n})):null)),sn=e=>e.reduce((o,r)=>{const n=r.stat.created.getFullYear(),s=o[n]??[];return{...o,[n]:[...s,r]}},{}),an=l(Y,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),cn=l(Y,{...c.blog.listing.item,minHeight:ze,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),ln=l(ye,{left:0,position:"absolute",top:"1rem"}),dn=l(Y,{fontWeight:"normal",gridColumn:"2 / -2",paddingTop:`calc(${ze} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),pn=Oe({backdropFilter:"blur(1rem)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(1rem)"}),mn=l("h2",{...c.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),gn=l(fe,{padding:"0 0.5rem 0.125rem 0"}),un=l(Nt,{gridColumn:"3 / 3"}),hn=l("div",{...c.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),yn=l("a",{fontSize:"0.875em"});var be;(function(e){e.DATE="date"})(be||(be={}));var Se;(function(e){e.ASC="asc",e.DESC="desc"})(Se||(Se={}));const fn=({order:e=Se.DESC,posts:o,sort:r=be.DATE})=>{const n=o.slice().sort((a,d)=>e===Se.DESC&&r===be.DATE?a.stat.created>d.stat.created?-1:1:0),s=sn(n);return i(N,null,Object.entries(s).map(([a,d])=>i(N,{key:a},i(an,null,d.map(p=>{const{description:g,hash:m,path:u,stat:{created:y},title:S,topics:b}=p;return i(cn,{key:u},i(dn,{as:"a",href:u},i(ln,{defsUsage:ne.NONE,hash:m,padded:!0,title:S,topics:b}),i(mn,{className:pn},S),i(gn,{date:y})),i(un,{link:!1,topics:b}),i(hn,{className:c.blog.listing.descriptionIdentifier},g),i("p",null,i(yn,{href:u},"Read more\u2026")))})))))},bn=()=>i(N,null,i("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),i("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),i("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),i("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),i("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),i("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),i("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),i("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),i("meta",{name:"application-name",content:"Eyelidlessness"}),i("meta",{name:"msapplication-TileColor",content:"#555555"}),i("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),i("meta",{name:"theme-color",content:"#ffffff"}));Ci();const Bt=({children:e,meta:{description:o,host:r,social:{image:n},title:s},...a})=>i(Ro,{...a},i(Ae.title,null,s," | Eyelidlessness"),o!=null?i(Ae.description,null,o):i(N,null),i("style",{dangerouslySetInnerHTML:{__html:ki}}),i(Ae.image,{alt:s,height:n.height,src:`${r}${n.publicPath}`,width:n.width}),i(N,null,e),i(bn,null)),Sn=l("div",{}),vn=({devilsBreakpoint:e,gap:o,...r})=>i(Sn,{...r}),wn=l(vn,({devilsBreakpoint:e,gap:o})=>({alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[o?.horizontal??"0px",`calc((${e} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:o?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}})),X=512,$t=[0,0,X,X].join(" "),Tn=X/2,kn=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),Cn=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:$t,width:"0"},i("defs",null,i("mask",{id:"octocat-knockout"},i("rect",{fill:"#fff",height:X,mask:"url(#octocat)",rx:Tn,width:X}),i("path",{d:kn,fill:"#000"})))),En=l("rect",{...c.gitHubLogo}),Ht=({className:e})=>i("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:$t},i("title",null,"GitHub"),i(En,{height:X,mask:"url(#octocat-knockout)",width:X})),ve={height:60,width:338},Rn=l("svg",{display:"inline-block",maxWidth:"100%",width:`${ve.width}px`}),An=l("use",{nested:{[c.darkMode]:{...c[c.darkMode].siteLogo}},...c.siteLogo,fill:"currentcolor"}),xn=`0 0 ${ve.width} ${ve.height}`,Pn=()=>i(Rn,{viewBox:xn},i(An,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),i("title",null,"Eyelidlessness")),{columns:ee,container:On}=c.siteHeader,Mn=`
  ${ee[0]}
  ${ee[1]}
  min(
    ${ee[2][0]},
    ${ee[2][1]}
  )
  ${ee[3]}
  ${ee[4]}
`.replace(/\s+/g," "),jn=l("div",{...On,display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Mn,padding:"1rem 0"}),In=l("div",{gridColumn:3}),Yn=l("div",{margin:"0 auto"}),Ln=l("a",{textDecoration:"none"}),Dn=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),zt=1,Nn=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${zt/2}rem`,padding:0}),Bn=l("a",{...c.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[c.darkMode]:{...c[c.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),_t="1.5em",ra=l(Ht,{display:"block",width:`clamp(1.125em, 4vw, ${_t})`}),$n=()=>{const e=[{label:"Blog",location:"/"},{label:"Hire Me",location:"/resume/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],o=e.reduce((s,a)=>typeof a.label=="string"?s+a.label.length:s,0),r={horizontal:"2rem"},n=`${[`${ve.width}px`,r.horizontal,`${o+1}ch`,_t,`${e.length*zt}rem`].join(" + ")}`;return i(jn,{as:"header"},i(In,null,i(wn,{as:"nav",devilsBreakpoint:n,gap:r},i(Yn,null,i(Ln,{href:"/"},i(Pn,null))),i(Dn,null,e.map(({location:s,label:a})=>i(Nn,null,i(Bn,{href:s},a)))))))},Hn=l(Y,({isListing:e})=>({marginTop:e?0:"1rem",paddingBottom:"4em"})),Ft=e=>i(oe,null,i($n,null),i(Hn,{as:"main",...e})),zn=l(Y,{...c.aside,nested:{...c.aside.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),_n=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Fn=l("div",{fontSize:"0.889em"}),Un=({as:e="section",title:o,...r})=>i(zn,{as:e,itemprop:"description"},o?i(_n,null,o):null,i(Fn,{...r})),Gn=l("h1",{marginBottom:"0.25rem"}),qn=l(Y,{marginBottom:"1rem"}),Xn=e=>{const{children:o,description:r,descriptionRaw:n,hash:s,stat:{created:a},title:d,topics:p}=e;return i(N,null,i(Bt,{meta:{...e,description:n}}),i(Ft,{as:"article"},i(qn,null,i(ye,{hash:s,title:d,topics:p}),i(Gn,null,d),i(fe,{date:a,itemprop:"datePublished"}),i(Nt,{link:!1,topics:p})),i(Un,null,r),o))},Wn=async e=>{const{description:o,importURL:r,path:n,title:s,topics:a}=e,{hash:d,host:p,social:g,stat:m}=jt(n,r,s,a,"created"),u=gr`${Ze(i(N,null,o))}`;return{description:o,descriptionRaw:u,hash:d,host:p,path:n,social:g,stat:m,title:s,topics:a}},Vn=l(Y,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),se=e=>i(Vn,{as:"section",...e}),we=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),Kn=l(we,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),_e=l(Kn,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),Jn=l(se,{padding:0}),Qn=l(we,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),Zn=l("a",{...c.resume.contactList.link,fontSize:"0.88889em",fontWeight:500,minWidth:"auto",textDecoration:"none"}),es=l("span",{nested:{"@media print":{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),Fe=({children:e,printLabel:o,...r})=>i(Zn,{...r},i(es,{"data-print-label":o},i("span",null,e))),ts=l(Y,{...c.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...c.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"}}}),Ue="@media (min-width: 44.625rem)",os=l(we,{display:"block",margin:0,nested:{"& > *":{margin:"0 0 1rem"},[Ue]:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",margin:"0 -0.5rem -0.5rem",nested:{"& > *":{margin:"0 0.5rem 0.5rem"}}}}}),Ge=l("h2",{fontSize:F(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),is=l(os,{fontSize:"0.88889em"}),rs=l("ul",{display:"block",padding:0}),ns=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0.125rem 0",padding:0,nested:{"&:last-child":{marginRight:0},[Ue]:{display:"block",nested:{"&:last-child":{marginBottom:0}}}}}),ss=Object.values(v).reduce((e,o)=>({...e,[o]:l("span",{...c.resume.skillLevel[o],borderRadius:"4px",display:"inline-block",height:"8px",margin:"0 0.325rem 0 0",width:"8px",verticalAlign:"middle",nested:{...c.resume.skillLevel[o].nested,[Ue]:{margin:"0 0.325rem"}}})}),{}),as=({name:e,skills:o})=>i("div",{itemscope:!0,itemtype:"http://schema.org/ItemList"},i(Ge,{itemprop:"name"},e),i(rs,null,o.map(({level:r,name:n})=>{const s=ss[r];return i(ns,{key:n,itemprop:"itemListElement"},i(s,{role:"img",title:`Skill level: ${r}`}),mr`${n}`)}))),cs=l(Y,{padding:"1rem 0"}),ls=l("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),ds=/^(\d{4})-(\d{2})$/,Ut=e=>{const o=e.match(ds);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,r,n]=o;return new Date(`${r}-${n}-01T00:00:00`)},Gt=l("div",{fontSize:"0.88889em"}),qe=l(fe,{fontSize:"inherit"}),ps=l("h2",{marginBottom:"0.5rem"}),qt=({range:[e,o]})=>{const r=Ut(e),n=Ut(o);return e==o?i(Gt,null,i(qe,{date:n,itemprop:"endDate",mode:$.SHORT})):i(Gt,null,i(qe,{date:r,itemprop:"startDate",mode:$.SHORT})," \u2013 ",i(qe,{date:n,itemprop:"endDate",mode:$.SHORT}))},ms=l("div",{fontSize:"0.88889rem"}),gs=l("ul",{fontSize:"0.88889em",paddingInlineStart:0}),us=l("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),hs=l(cs,{marginBottom:"0.5rem",paddingBottom:"1.5rem",position:"relative",nested:{"&:after":{...c.resume.employment.separator,bottom:0,content:'""',display:"block",gridColumn:"3 / 3",left:0,position:"absolute",width:"100%"},"&:last-child":{marginBottom:0},"&:last-child:after":{display:"none"}}}),ys=({employer:e,end:o,highlights:r,position:n,start:s,summary:a,...d})=>i(hs,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...d},i(_e,null,i("h3",{itemprop:"name"},e),i(qt,{range:[s,o]})),i(ms,{itemprop:"roleName"},n),a==null?null:i(ls,{itemprop:"description"},G(a)),r==null?null:i(gs,{itemtype:"http://schema.org/ItemList"},r.map(p=>i(us,{key:p,itemprop:"itemListElement"},G(p))))),fs=l(se,{...c.resume.employment.container,marginTop:"1rem"}),bs=({employment:e})=>i(fs,null,i(ps,null,"Recent Experience"),e.history.map(o=>i(ys,{...o}))),Ss=l("h3",{paddingLeft:0,textIndent:0}),vs=l("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),Xt="@media (min-width: 41.666rem)",ws=l("a",{display:"block",padding:"0 0.5rem 0.5rem 0.5rem",zIndex:1,nested:{"& svg":{width:"1.25em"},[Xt]:{paddingLeft:0}}}),Ts=l("div",{paddingTop:"0.05556rem"}),ks=l("div",{alignItems:"start",display:"grid",gridTemplateColumns:"auto 1fr",padding:"1rem 0"}),Cs=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),Wt=({project:{description:e,end:o,repo:r,role:n,title:s,start:a,summary:d}})=>i(ks,null,i(ws,{href:r},i(Ht,null)),i(Ts,null,i(_e,null,i(Ss,null,i(vs,{href:r},s)),i(qt,{range:[a,o]})),i(Cs,null,n===w.CREATOR?G(e):null,G(d)))),Es=l(we,{display:"block",margin:0,nested:{[Xt]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}}}}),Vt=l("div",{marginTop:"0.5rem"}),Rs=({projects:e})=>{const{creator:o,contributor:r}=e.reduce((n,s)=>{const a=s.role===w.CREATOR?"creator":"contributor";return{...n,[a]:[...n[a],s]}},{creator:[],contributor:[]});return i(se,null,i(Es,null,i("div",null,i(Ge,null,"Projects I Created"),i(Vt,null,o.map(n=>i(Wt,{project:n})))),i("div",null,i(Ge,null,"Open Source Contributions"),i(Vt,null,r.map(n=>i(Wt,{project:n}))))))},As=l(Y,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),xs=l(fe,{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"}),Kt=e=>e.replace(/^https?:\/\/|\/$/g,""),Ps=({className:e,id:o,meta:r,resume:n,updated:s})=>{const{contact:{email:a,website:d},employment:p,info:g,name:m,projects:u,skills:y,social:S}=n;return i(As,{className:e,id:o,itemscope:!0,itemtype:"http://schema.org/Person"},i(Cn,null),i(ye,{...r}),i(Jn,null,i(_e,null,i("h1",{itemprop:"name"},m),i(xs,{date:s,itemprop:"datePublished",mode:$.META}),i(Qn,null,i(Fe,{href:`mailto:${a}`,itemprop:"email",printLabel:a},"Email"),i(Fe,{href:d,itemprop:"url",printLabel:Kt(d),rel:"me"},"Website"),S.map(({network:b,url:h})=>i(Fe,{href:h,itemprop:"url",printLabel:Kt(h),rel:"me"},b)))),i(ts,{itemprop:"description"},G(g.brief))),i(se,{"aria-label":"Skillsets"},i(is,null,Object.entries(y.merged).map(([b,h])=>i(as,{key:b,name:b,skills:h})))),i(bs,{employment:p}),i(Rs,{projects:u}),i(se,null,i("h2",null,"References"),G("Available upon request.")))},na=l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),sa=l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),aa=l("a",{...c.resume.contactList.link,textDecoration:"none"});export{ye as BlogArt,Ur as BlogArtDefs,fn as BlogListing,Xn as BlogPost,Bt as Head,Ft as Main,Ps as Resume,oe as StylesProvider,P as Topic,Dt as TopicTag,Pe as __SNOWPACK_ENV__,Wn as getBlogPostStaticProps,jt as getPageMetadata,G as mdx,$o as resetAbbrContext,ri as resume,l as styled};
