import Ke from"unist-util-visit";import Ce from"fs";import{h as o,Fragment as H,toChildArray as Je}from"https://cdn.skypack.dev/preact@10.5.10";import lo from"@mdx-js/mdx";import{mdx as D,MDXProvider as po}from"@mdx-js/preact";import{isobject as mo,createComponent as go,RendererProvider as uo,createSchema as t,emojiRegex as ho,h as Qe,rehypeAccessibleEmojis as yo,remarkSlug as fo,remarkSmartypants_1 as bo}from"./_vendor/index.js";import{transform as So}from"buble-jsx-only";import Ee from"dedent";import Ze from"module";import vo from"remark-mdx";import wo from"remark-mdx-to-plain-text";import X from"path";import{loadTheme as et,getHighlighter as tt}from"shiki";import{commonLangAliases as To,commonLangIds as ko,otherLangIds as Co}from"shiki-languages";import{renderers as Eo,runTwoSlash as Ro}from"shiki-twoslash";import Ao from"child_process";import xo from"crypto";import{Head as Po,seo as ot}from"microsite/head";import{createRenderer as Oo}from"fela";import{renderToString as jo}from"fela-tools";import{processStyleWithPlugins as Mo,KEYFRAME_TYPE as it,isNestedSelector as Io,normalizeNestedProperty as Lo,isMediaQuery as Yo,generateCombinedMediaQuery as rt,isSupport as Do,generateDeclarationReference as No,isUndefinedValue as Bo,generateCSSSelector as $o,RULE_TYPE as Ho}from"fela-utils";import{cssifyDeclaration as zo,cssifyObject as _o}from"css-in-js-utils";import nt from"md5";let Re=new Set;const Fo=()=>{Re=new Set},Uo=()=>e=>{Ke(e,"abbr",i=>{const{abbr:r}=i;Re.has(r)&&(delete i.abbr,delete i.children,delete i.data,delete i.reference,Object.assign(i,{type:"text",value:r})),Re.add(r)})},st="production",Go="production",qo=!0;var Ae=Object.freeze({__proto__:null,MODE:st,NODE_ENV:Go,SSR:qo});const Xo=e=>e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`),O=(e,i)=>[e.join(","),"{",Object.entries(i).reduce((r,[n,a])=>typeof a=="object"&&(n==="nested"||n.includes("&"))?r:`${r}${Xo(n)}:${a};`,""),"}",Object.entries(i).map(([r,n])=>{if(typeof n=="object"){if(r==="nested")return Object.entries(n).map(([a,s])=>{const d=e.map(p=>a.replace(/&/g,p));return O(d,s)}).join("");if(r.includes("&")){const a=e.map(s=>r.replace(/&/g,s));return O(a,n)}}return""},[]).join("")].join(""),_=(...e)=>`clamp(${e.join(",")})`,W=e=>e.replace(/\s+/g," ").trim(),at=e=>e;function Z(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function Wo(e,i,r,n,a,s){const d=[];return a&&d.push(Z(a).slice(0,16)),n&&d.push(Z(n).slice(0,16)),r&&d.push(Z(r).slice(0,16)),d.push(Z(e).slice(0,16)),d.push(Z(i).slice(0,16)),d.push(s.slice(0,8)),d.join("_")}function Vo(e,i,r=[""]){let n="";for(const s in e){const d=e[s];n=`${n}${s}{${_o(d)}}`}let a="";for(let s=0;s<r.length;s++){const d=r[s];a=`${a}@${d}keyframes ${i}{${n}}`}return a}function Ko(){return e=>(e.renderKeyframe=(i,r)=>{const n=i(r,e),a=Mo(e,n,it,r),s=JSON.stringify(a);if(!e.cache.hasOwnProperty(s)){const d=nt(s),p=(e.selectorPrefix||"_")+d.slice(0,8),m=Vo(a,p,e.keyframePrefixes),g={type:it,keyframe:m,name:p};e.cache[s]=g,e._emitChange(g)}return e.cache[s].name},e._renderStyleToClassNames=({_className:i,...r},n="",a="",s="")=>{let d=i?` ${i}`:"";for(const p in r){const m=r[p];if(mo(m))if(Io(p))d+=e._renderStyleToClassNames(m,n+Lo(p),a,s);else if(Yo(p)){const g=rt(a,p.slice(6).trim());d+=e._renderStyleToClassNames(m,n,g,s)}else if(Do(p)){const g=rt(s,p.slice(9).trim());d+=e._renderStyleToClassNames(m,n,a,g)}else console.warn(`The object key "${p}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const g=No(p,m,n,a,s);if(!e.cache.hasOwnProperty(g)){if(Bo(m)){e.cache[g]={className:""};continue}const b=zo(p,m),S=nt(g),y=e.devMode?Wo(p,m,n,a,s,S):(e.selectorPrefix||"_")+S.slice(0,8),u=$o(y,n),k={type:Ho,className:y,selector:u,declaration:b,pseudo:n,media:a,support:s};e.cache[g]=k,e._emitChange(k)}const h=e.cache[g].className;h&&(d+=` ${h}`)}}return d},e)}import.meta.env=Ae;const de=Ze.createRequire(import.meta.url),{default:Jo}=de("fela-identifier"),{default:Qo}=de("fela-plugin-embedded"),{default:Zo}=de("fela-plugin-multiple-selectors"),{default:ei}=de("fela-plugin-typescript"),ct=st==="development",xe=Jo(),V=Oo({devMode:ct,enhancers:[Ko(),xe],plugins:[Qo(),Zo(),ei()]});!ct&&import.meta.url.endsWith("/.microsite/staging/src/lib/styles/styles.js")&&V.subscribe(async()=>{jo(V)});const ti=e=>Array.isArray(e)?e:[e],ee=({children:e})=>o(uo,{renderer:V},...ti(e)),oi=e=>V.renderRule(at,e),I=Object.assign(oi,{global:V.renderStatic.bind(V)}),l=(e,i)=>{const r=typeof i=="function"?i:()=>i;return go(r,e,Object.keys)},f=t({}),lt="FRESH@0.1.0",Xs=t({$schema:"http://json-schema.org/draft-07/schema#",title:"FRESH Resume Schema",type:"object",additionalProperties:f,required:["name","meta"],properties:{name:t({type:"string",description:"The candidate's name as it should appear on the resume."}),meta:t({type:"object",additionalProperties:f,description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools.",required:["format"],properties:{format:t({const:lt,description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:t({type:"string",description:"The semantic version number for this resume."})}}),info:t({type:"object",additionalProperties:f,description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote.",properties:{label:t({type:"string",description:"A label for this resume, such as 'Full-Stack Developer'."}),class:t({type:"string",description:"Profession type or 'character class'."}),image:t({type:"string",description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:t({type:"string",description:"A short description or summary of yourself as a candidate."}),quote:t({type:"string",description:"Candidate quote or byline."})}}),disposition:t({type:"object",additionalProperties:f,description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like.",properties:{travel:t({type:"integer",description:"Percentage of time willing to travel (0 to 100)."}),authorization:t({type:"string",description:"Work authorization: citizen, work visa, etc."}),commitment:t({type:"array",description:"Types of work commitment desired: contract, perm, seasonal, etc.",items:t({type:"string",description:"One of: contract, permanent, part-time, seasonal, full-time."})}),remote:t({type:"boolean",description:"Open to remote employment opportunities."}),relocation:t({type:"object",additionalProperties:f,properties:{willing:t({oneOf:[t({type:"string"}),t({type:"boolean"})],description:"Willingness to relocate."}),destinations:t({type:"array",description:"Preferred destinations for relocation",items:t({type:"string",description:"City or area of relocation."})})}})}}),contact:t({type:"object",additionalProperties:f,description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types.",properties:{email:t({type:"string",description:"Primary contact email.",format:"email"}),phone:t({type:"string",description:"Primary phone number."}),website:t({type:"string",description:"Website, blog, or home page.",format:"uri"}),other:t({type:"array",items:t({type:"object",additionalProperties:f,properties:{label:t({type:"string",description:"A label for this contact information."}),category:t({type:"string",description:"Type of contact information: email, phone, url, postal, or IM."}),value:t({type:"string",description:"Phone number, email address, website, etc."})}})})}}),location:t({type:"object",description:"The 'location' section, when present, contains the candidate's location and address info.",additionalProperties:f,properties:{address:t({type:"string",description:"Your full postal address."}),code:t({type:"string",description:"Postal or other official routing code."}),city:t({type:"string",description:"Your home city."}),country:t({type:"string",description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:t({type:"string",description:"Your state, region, or province."})}}),employment:t({type:"object",description:"The 'employment' section describes the candidate's formal employment history.",additionalProperties:f,properties:{summary:t({type:"string",description:"Summary of overall employment."}),history:t({type:"array",items:t({type:"object",additionalProperties:f,required:["employer"],properties:{employer:t({type:"string",description:"Employer name."}),position:t({type:"string",description:"Your position or formal job title."}),url:t({type:"string",description:"Employer website.",format:"uri"}),start:t({type:"string",description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities under this employer."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this position.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})})}}),projects:t({type:"array",description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid.",items:t({type:"object",additionalProperties:f,required:["title"],properties:{title:t({type:"string",description:"Project name or code-name."}),category:t({type:"string",description:"Project type: open-source, private, side project, etc."}),description:t({type:"string",description:"Project description or summary."}),summary:t({type:"string",description:"A summary of your achievements and responsibilities on the project."}),role:t({type:"string",description:"Your role on the project: Contributor, Creator, etc."}),url:t({type:"string",description:"Project URL.",format:"uri"}),media:t({type:"array",description:"Media associated with this project.",items:t({type:"object",additionalProperties:f,required:["category"],properties:{category:t({type:"string",description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:t({type:"string",description:"Friendly media name."}),url:t({type:"string",description:"Media link, path, or location."})}})}),repo:t({type:"string",description:"Repo URL.",format:"uri"}),start:t({type:"string",description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy project-related achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this project.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})}),skills:t({type:"object",description:"A description of the candidate's formal skills and capabilities.",additionalProperties:f,properties:{sets:t({type:"array",items:t({type:"object",additionalProperties:f,required:["name","skills"],properties:{name:t({type:"string",description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:t({type:"string",description:"Level of mastery of the skill."}),skills:t({type:"array",items:t({type:"string",description:"Title or ID of a skill from the skills list."})})}})}),list:t({type:"array",items:t({type:"object",additionalProperties:f,required:["name"],properties:{name:t({type:"string",description:"The name or title of the skill."}),level:t({type:"string",description:"A freeform description of your level of mastery with the skill."}),summary:t({type:"string",description:"A short summary of your experience with this skill."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Number of years you've used the skill."})}})})}}),service:t({type:"object",description:"The 'service' section describes the candidate's overall service history in the true sense of the word 'service': volunteer work, military participation, civilian core, rescue and emergency services, and the like.",additionalProperties:f,properties:{summary:t({type:"string",description:"Summary of overall service/volunteer experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:f,required:["organization"],properties:{category:t({type:"string",description:"The type of service work, such as volunteer or military."}),organization:t({type:"string",description:"The service organization, such as Red Cross or National Guard."}),position:t({type:"string",description:"Your position or formal service role."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date you joined the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you left the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities at this organization."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this service.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),education:t({type:"object",additionalProperties:f,description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses.",required:["level"],properties:{summary:t({type:"string",description:"Summary of overall education."}),level:t({type:"string",description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:t({type:"string",description:"Your degree, if any (BSCS, BA, etc.)."}),history:t({type:"array",items:t({type:"object",additionalProperties:f,required:["institution"],properties:{title:t({type:"string",description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."}),institution:t({type:"string",description:"College or school name."}),area:t({type:"string",description:"e.g. Arts"}),studyType:t({type:"string",description:"e.g. Bachelor"}),start:t({type:"string",description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),grade:t({type:"string",description:"Grade or GPA."}),curriculum:t({type:"array",description:"Notable courses, subjects, and educational experiences.",items:t({type:"string",description:"The course name and number or other identifying info."})}),url:t({type:"string",description:"Website or URL of the institution or school.",format:"uri"}),summary:t({type:"string",description:"A short summary of this education experience."}),keywords:t({type:"array",description:"Keywords associated with this education stint.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Graduated *summa cum laude*'."})}),location:t({type:"string",description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),social:t({type:"array",description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like.",items:t({type:"object",additionalProperties:f,required:["network","user","url"],properties:{network:t({type:"string",description:"The name of the social network, such as Facebook or GitHub."}),user:t({type:"string",description:"Your username or handle on the social network."}),url:t({type:"string",description:"URL of your profile page on this network.",format:"uri"}),label:t({type:"string",description:"A friendly label."})}})}),recognition:t({type:"array",description:"The 'recognition' section describes the candidate's public or professional plaudits, kudos, awards, and other forms of positive external reinforcement.",items:t({type:"object",additionalProperties:f,required:["title"],properties:{category:t({type:"string",description:"Type of recognition: award, honor, prize, etc."}),title:t({type:"string",description:"Title of the award or recognition."}),date:t({type:"string",description:"Date awarded, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),from:t({type:"string",description:"Name of the awarding company, institution, or individual."}),summary:t({type:"string",description:"A brief description of the award and why you received it."}),url:t({type:"string",description:"A webpage or other associated URL.",format:"uri"})}})}),writing:t({type:"array",description:"The 'writing' section describes the candidate's writing and publication history, from blogs and essays to novels and dissertations.",items:t({type:"object",additionalProperties:f,required:["title"],properties:{title:t({type:"string",description:"Title of the article, essay, or book."}),category:t({type:"string",description:"One of 'book', 'article', 'essay', 'blog post', or 'series'."}),publisher:t({oneOf:[t({additionalProperties:f,type:"object",properties:{name:t({type:"string",description:"Publisher of the article, essay, or book."}),url:t({type:"string",description:"Publisher website or URL."})}}),t({type:"string"})],description:"Publisher of the article, essay, or book."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),url:t({type:"string",description:"Website or URL of this writing or publication."}),summary:t({type:"string",description:"A brief summary of the publication."})}})}),reading:t({type:"array",description:"The 'reading' section describes the candidate's reading habits and is intended to demonstrate familiarity with industry-relevant publications, blogs, books, or other media that a competent industry candidate should be expected to know.",items:t({type:"object",additionalProperties:f,required:["title"],properties:{title:t({type:"string",description:"Title of the book, blog, or article."}),category:t({type:"string",description:"The type of reading: book, article, blog, magazine, series, etc."}),url:t({type:"string",description:"URL of the book, blog, or article.",format:"uri"}),author:t({oneOf:[t({type:"string"}),t({type:"array",items:t({type:"string",description:"Author name."})})],description:"Author of the book, blog, or article."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),summary:t({type:"string",description:"A brief description of the book, magazine, etc."})}})}),speaking:t({type:"array",description:"The 'speaking' section describes the candidate's speaking engagements and presentations.",items:t({type:"object",additionalProperties:f,required:["event"],properties:{title:t({type:"string",description:"Speaking engagement title."}),event:t({type:"string",description:"Event at which you presented."}),location:t({type:"string",description:"Freeform location of the event, e.g., 'San Francisco, CA' or 'Tokyo'."}),date:t({type:"string",description:"Presentation date.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"An array of specific highlights such as 'Won 'Best Speaker' award at 2012 E3 expo'."})}),keywords:t({type:"array",description:"Keywords associated with this speaking engagement.",items:t({type:"string",description:"A list of keywords such as 'TED', 'E3', 'mathematics', 'Big Data', etc."})}),summary:t({type:"string",description:"A description of this speaking engagement."})}})}),governance:t({type:"array",description:"The 'governance' section describes the candidate's leadership, standards, board, and committee roles.",items:t({type:"object",additionalProperties:f,required:["organization"],properties:{summary:t({type:"string",description:"Summary of your governance at this organization."}),category:t({type:"string",description:"Type of governance: committee, board, standards group, etc."}),role:t({type:"string",description:"Governance role: board member, contributor, director, etc."}),organization:t({type:"string",description:"The organization."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"}),keywords:t({type:"array",description:"Keywords associated with this governance stint.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Increased company profits by 35% year over year'."})})}})}),languages:t({type:"array",description:"The 'languages' section describes the candidate's knowledge of world languages such as English, Spanish, or Chinese.",items:t({type:"object",additionalProperties:f,required:["language"],properties:{language:t({type:"string",description:"The name of the language: English, Spanish, etc."}),level:t({type:"string",description:"Level of fluency with the language, from 1 to 10."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Amount of time language spoken?"})}})}),samples:t({type:"array",description:"The 'samples' section provides an accessible demonstration of the candidate's portfolio or work product to potential employers and co-workers.",items:t({type:"object",additionalProperties:f,required:["title"],properties:{title:t({type:"string",description:"Title or descriptive name."}),summary:t({type:"string",description:"A brief description of the sample."}),url:t({type:"string",description:"URL of the sample (if any).",format:"uri"}),date:t({type:"string",description:"Date the sample was released in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights for this sample.",items:t({type:"string",description:"For ex, 'Implemented optimized search algorithm derived from Slices of Pi'."})}),keywords:t({type:"array",description:"Keywords associated with this work sample.",items:t({type:"string",description:"For example, C++, HTML, game."})})}})}),references:t({type:"array",description:"The 'references' section describes the candidate's personal, professional, and/or technical references.",items:t({type:"object",additionalProperties:f,required:["name"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),role:t({type:"string",description:"The occupation of this reference, or his or her relationship to the candidate."}),category:t({type:"string",description:"The type of reference, eg, professional, technical, or personal."}),private:t({type:"boolean",description:"Is this a private reference?"}),summary:t({type:"string",description:"Optional summary information for this reference."}),contact:t({type:"array",items:t({type:"object",additionalProperties:f,properties:{label:t({type:"string",description:"Friendly label for this piece of contact info."}),category:t({type:"string",description:"Type of contact information (phone, email, web, etc.)."}),value:t({type:"string",description:"The email address, phone number, etc."})}})})}})}),testimonials:t({type:"array",description:"The 'testimonials' section contains public testimonials of the candidate's professionalism and character.",items:t({type:"object",additionalProperties:f,required:["name","quote"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),quote:t({type:"string",description:"A quoted reference, eg, 'Susan was an excellent team leader, manager, and operations specialist with a great eye for detail. I'd gladly hire her again if I could!'"}),category:t({type:"string",description:"Type of reference: personal, professional, or technical."}),private:t({type:"boolean",description:"Public reference (testimonial) or via private contact?"})}})}),interests:t({type:"array",description:"The 'interests' section provides a sampling of the candidate's interests and enthusiasms outside of work.",items:t({type:"object",additionalProperties:f,required:["name"],properties:{name:t({type:"string",description:"The name or title of the interest or hobby."}),summary:t({type:"string"}),keywords:t({type:"array",description:"Keywords associated with this interest.",items:t({type:"string",description:"A keyword relating to this interest."})})}})}),extracurricular:t({type:"array",description:"The 'extracurricular' section describes the candidate's involvement with industry-related events and enterprises outside of work. For example: attending conferences, workshops, or meetups.",items:t({type:"object",additionalProperties:f,required:["title","activity"],properties:{title:t({type:"string",description:"Title of the extracurricular activity."}),activity:t({type:"string",description:"The extracurricular activity."}),location:t({type:"string",description:"City, state, or other freeform location."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"})}})}),affiliation:t({type:"object",additionalProperties:f,description:"The 'affiliation' section describes the candidate's membership in groups, clubs, organizations, and professional associations whether at the collegiate, corporate, or personal level.",properties:{summary:t({type:"string",description:"Optional summary of overall affiliation and membership experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:f,required:["organization"],properties:{category:t({type:"string",description:"The type of affiliation: club, union, meetup, etc."}),organization:t({type:"string",description:"The name of the organization or group."}),role:t({type:"string",description:"Your role in the organization or group."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date your affiliation with the organization began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your affiliation with the organization ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities during this affiliation."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this affiliation.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}})}});var R;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(R||(R={}));var T;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator"})(T||(T={}));const ii=[{title:"Eyelidlessness",category:R.PUBLIC_ACCESS,description:`
      My personal website and tech blog.
    `,summary:`
      Built with [Preact][1], [Microsite][2] and [Fela][3].

      [1]: https://preactjs.com/
      [2]: https://github.com/natemoo-re/microsite
      [3]: https://fela.js.org/
    `,repo:"https://github.com/eyelidlessness/eyelidlessness.github.io",role:T.CREATOR,start:"2020-10",end:"2021-02"},{title:"Microsite",category:R.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:T.CONTRIBUTOR,start:"2021-01",end:"2021-02"},{title:"HNDarkMode",category:R.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:T.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:R.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:T.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:R.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:T.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:R.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:T.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:R.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:T.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:R.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:T.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:R.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:T.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:R.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:T.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:R.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:T.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:R.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:T.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:R.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:T.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:R.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:T.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:R.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:T.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:R.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:T.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:R.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:T.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:R.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:T.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:R.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:T.CONTRIBUTOR,start:"2015-01",end:"2015-01"}],ri=e=>e;var v;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(v||(v={}));var te;(function(e){e.LANGUAGES_PLATFORMS="Languages & Platforms",e.SERVICES_DISTRIBUTED_SYSTEMS="Services & Distributed Systems",e.USER_INTERFACE_EXPERIENCE="User Interface & Experience"})(te||(te={}));const Pe={[te.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:v.EXPERT},{name:"OpenAPI & JSON Schema",level:v.EXPERT},{name:"Django REST framework",level:v.ADVANCED},{name:"Fault tolerance",level:v.ADVANCED},{name:"Microservice architecture",level:v.ADVANCED},{name:"Apache Storm",level:v.INTERMEDIATE},{name:"Redis",level:v.BASIC}],[te.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:v.EXPERT},{name:"DOM & Web APIs",level:v.EXPERT},{name:"Web performance",level:v.ADVANCED},{name:"SVG",level:v.ADVANCED},{name:"UI & UX design",level:v.ADVANCED},{name:"A11y",level:v.INTERMEDIATE}],[te.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:v.EXPERT},{name:"Clojure & ClojureScript",level:v.EXPERT},{name:"HTML & CSS",level:v.EXPERT},{name:"SQL (PostgreSQL)",level:v.ADVANCED},{name:"Python",level:v.INTERMEDIATE},{name:"Swift",level:v.BASIC},{name:"Java",level:v.BASIC}]},ni={list:Object.values(Pe).flatMap(at),merged:Pe,sets:Object.entries(Pe).map(([e,i])=>({name:e,skills:i.map(({name:r})=>r)}))},si=ri({name:"Trevor Schmidt",meta:{format:lt,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:[{employer:"Treez",position:"Senior Software Engineer",start:"2018-12",end:"2020-09",summary:`
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
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:ii,skills:ni,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),oe=Symbol("DEFAULT_TOPIC"),P={[oe]:oe,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},ai=e=>typeof e=="string"||typeof e=="symbol",dt=e=>ai(e)&&e in P,pt=e=>dt(e)?P[e]:e,mt=Object.entries(P).reduce((e,i)=>{const[r,n]=i;return typeof r=="string"?{...e,[n]:r}:e},{}),ci=e=>dt(e)?e:mt[e],li=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),di=Object.fromEntries(Object.entries(mt).map(([e,i])=>typeof i=="string"?[e,li(i)]:null).filter(e=>e!=null)),pi=e=>{const i=pt(e);if(typeof i=="string")return di[i]},pe=2,Oe={minEm:1.0625,fluidVw:1.0625*pe,maxEm:1.325},A="@media (prefers-color-scheme: dark)",mi=["h1","h2","h3","h4","h5","h6"],gi=["dd","dl","dt","li","ol","ul"],ui=[...mi,...gi,"p"],K=Oe.minEm/Oe.maxEm,N={h1:1.953,h2:1.563,h3:1.25},hi={h1:{minEm:N.h1*K,fluidVw:N.h1*K*pe,maxEm:N.h1},h2:{minEm:N.h2*K,fluidVw:N.h2*K*pe,maxEm:N.h2},h3:{minEm:N.h3*K,fluidVw:N.h3*K*pe,maxEm:N.h3}},gt=75,me=1.25,yi=["0.7fr",`${me}rem`,[`${gt}ch`,`calc(100% - ${me*2}rem)`],`${me}rem`,"1.2fr"],je=1,fi=["0.7fr",`${je}rem`,[`${gt*1.1875}ch`,`calc(100% - ${je*2}rem)`],`${je}rem`,"1.2fr"],bi=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],ut=bi.join(", "),Si=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],vi=Si.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),L={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},wi="hover-inherit-topic-color",Ti=[[P[oe],I({"&, &.hover-inherit-topic-color:hover":{color:L.DEFAULT_TOPIC.light},[A]:{"&, &.hover-inherit-topic-color:hover":{color:L.DEFAULT_TOPIC.dark}}})],[P.ABLEISM,I({"&, &.hover-inherit-topic-color:hover":{color:L.ABLEISM}})],[P.ART,I({"&, &.hover-inherit-topic-color:hover":{color:L.ARTS_CRAFTS}})],[P.LEMON,I({"&, &.hover-inherit-topic-color:hover":{color:L.LEMON}})],[P.MENTAL_ILLNESS,I({"&, &.hover-inherit-topic-color:hover":{color:L.MENTAL_ILLNESS}})],[P.NEURODIVERGENCE,I({"&, &.hover-inherit-topic-color:hover":{color:L.NEURODIVERGENCE}})],[P.PHILOSOPHY,I({"&, &.hover-inherit-topic-color:hover":{color:L.PHILOSOPHY}})],[P.POLITICS,I({"&, &.hover-inherit-topic-color:hover":{color:L.POLITICS}})],[P.RACISM,I({"&, &.hover-inherit-topic-color:hover":{color:L.RACISM}})],[P.SEXISM,I({"&, &.hover-inherit-topic-color:hover":{color:L.SEXISM}})],[P.SUBSTANCE_ABUSE,I({"&, &.hover-inherit-topic-color:hover":{color:L.SUBSTANCE_ABUSE}})],[P.TECHNOLOGY,I({"&, &.hover-inherit-topic-color:hover":{color:L.TECHNOLOGY}})],[P.TRANSPHOBIA,I({"&, &.hover-inherit-topic-color:hover":{color:L.TRANSPHOBIA}})]],ki=Object.fromEntries(Ti),ht=xe(),c={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:wi,baseFontSizeRange:Oe,darkMode:A,abbreviation:{backgroundImage:`linear-gradient(${["to top","hsl(64deg, 100%, 50%, 0.25)","hsl(64deg, 100%, 50%, 0.25) 0.5em","transparent 0.5em"].join(", ")})`},aside:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},[A]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},blog:{listing:{descriptionIdentifier:ht,description:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em",nested:{[A]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${ht}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[A]:{color:"hsl(212deg, 10%, 90%)"}}},[A]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[A]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:ut},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:ut,nested:{[A]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:ui,gitHubLogo:{fill:"#171515",nested:{[A]:{fill:"#fff"}}},headingRanges:hi,[A]:{code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",outline:"none"},prose:{color:"hsl(210deg, 10%, 90%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 85%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:yi,mainGridSidePaddingRem:me,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",outline:"1px solid #eee"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:vi},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[A]:{backgroundColor:"hsl(336deg, 100%, 7%)"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[A]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"hsl(47deg, 58%, 98%)",nested:{[A]:{backgroundColor:"hsl(41deg, 100%, 8%)"}}},separator:{borderBottom:"1px solid hsl(17deg, 78%, 90%)",nested:{[A]:{borderColor:"hsl(17deg, 70%, 17%)"}}}},skillLevel:{[v.BASIC]:{backgroundColor:"hsl(207deg, 25%, 83%)",nested:{[A]:{backgroundColor:"hsl(207deg, 15%, 43%)"}}},[v.INTERMEDIATE]:{backgroundColor:"hsl(188deg, 53%, 74%)",nested:{[A]:{backgroundColor:"hsl(188deg, 53%, 34%)"}}},[v.ADVANCED]:{backgroundColor:"hsl(188deg, 70%, 59%)",nested:{[A]:{backgroundColor:"hsl(188deg, 80%, 39%)"}}},[v.EXPERT]:{backgroundColor:"hsl(152deg, 100%, 39%)",nested:{[A]:{backgroundColor:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},siteHeader:{columns:fi,container:{},pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},topicColorClassNames:ki,topicTagIdentifier:xe(),topicTagInner:{backgroundImage:W(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[A]:{backgroundImage:W(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:W(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[A]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:W(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")}},yt=["b","em","h1","h2","h3","i","strong"],ge=["h1","h2","h3","h4","h5","h6"],Ci=[...ge,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Ei=Array.from(new Set([...ge,...Ci,"div","fieldset","form","hgroup","hr","pre"])),Ri=W(`
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
    font-size:        ${_(`${c.baseFontSizeRange.minEm}em`,`${c.baseFontSizeRange.fluidVw}vw`,`${c.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${O(["body"],{...c.document,...c.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${ge.join(",")} {
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
`),Ai=()=>{I.global(W(`
      ${Ei.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${ge.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${O(yt,c.emphasize)}

      h1 {
        font-size: ${_(`${c.headingRanges.h1.minEm}em`,`${c.headingRanges.h1.fluidVw}vw`,`${c.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${_(`${c.headingRanges.h2.minEm}em`,`${c.headingRanges.h2.fluidVw}vw`,`${c.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${_(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,`${c.headingRanges.h3.maxEm}em`)};
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

      ${O(["hr:after"],{...c.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${O(["pre"],c.pre)}

      ${O(["code"],{...c.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

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

      ${O(["a"],{...c.links,fontWeight:"bolder"})}

      ${O(["abbr"],{...c.abbreviation,textDecoration:"none"})}

      ${O(["aside","small"],c.deemphasize)}

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
        ${O(["body"],{...c[c.darkMode].document,...c[c.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${O(yt,c[c.darkMode].emphasize)}
        ${O(["pre"],c[c.darkMode].pre)}
        ${O(["code"],c[c.darkMode].code)}
        ${O(["a"],c[c.darkMode].links)}
        ${O(["aside","small"],c[c.darkMode].deemphasize)}
        ${O(["hr:after"],c[c.darkMode].separator)}
      }
    `))},xi=`
  ${c.mainGridColumns[0]}
  ${c.mainGridColumns[1]}
  min(
    ${c.mainGridColumns[2][0]},
    ${c.mainGridColumns[2][1]}
  )
  ${c.mainGridColumns[3]}
  ${c.mainGridColumns[4]}
`.replace(/\s+/g," "),ft={gridColumn:"1 / -1"},Me=I(ft),Y=l("div",{nested:{[`& > .${Me}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:xi,...ft}),Pi=l(Y,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),bt=l("div",{alignContent:"flex-start",alignItems:"flex-start",display:"flex",gridColumn:"2 / 5"}),Oi=l("div",{flexGrow:0,fontSize:"9em",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),ji=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),Ie="div",Mi={ContentContainer:Ie,InnerContainer:bt,OuterContainer:Ie,SymbolContainer:Ie},Ii=e=>{const{children:i,ContentContainer:r,InnerContainer:n,OuterContainer:a,outerContainerProps:s,symbol:d,SymbolContainer:p}={...Mi,...e};return o(Pi,{as:a,...s},o(bt,{as:n},o(Oi,{as:p,role:"presentation"},d),o(ji,{as:r},i)))},Li=l("pre",{fontSize:"1rem"}),Yi=l("div",{gridColumn:"2 / 6"}),Di=l(Y,{...c.pre,nested:{[c.darkMode]:{...c[c.darkMode].pre},"& code":{backgroundColor:"transparent"},"& pre":{backgroundColor:"transparent",maxWidth:"100%",margin:0,overflow:"auto",outline:"none",padding:["1rem","0"].join(" ")}}}),Ni=l("div",{...c.codeBlock.symbol,fontSize:_("3.2em","10vw","4.5em"),marginTop:"-0.325em",textIndent:"-0.25em"}),Bi=({children:e})=>o(Ii,{ContentContainer:Li,InnerContainer:Yi,OuterContainer:Di,symbol:"{",SymbolContainer:Ni},e),$i=(e,i)=>e.slice().sort(i),Hi=e=>typeof e=="object"&&e!=null,zi=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),_i=(e,i)=>Hi(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof i=="string"&&ho().test(i),Fi=({["aria-label"]:e,children:i,role:r})=>o(zi,{"aria-label":e,role:r},i),Ui={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},Gi={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},qi={...Ui,...Gi},St=X.resolve(process.cwd(),"./syntax-themes"),[Xi,Wi]=await Promise.all([et(X.resolve(St,"./yi-dark.json")),et(X.resolve(St,"./yi-light.json"))]),Vi={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},Ki={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},Ji=e=>e.trim().split(/\b\W*\b/).reduce((i,r)=>({...i,...Ki[r]}),{}),vt=e=>Object.entries(e).reduce((i,[r,n])=>{const a=Vi[r];if(n==null||typeof a!="string")return i;const s=a==="fontStyle"?Ji(n):{[a]:n};return{...i,...s}},{}),[Qi,wt]=await Promise.all([tt({theme:Xi}),tt({theme:Wi})]),Zi=new Set([...To,...ko,...Co]),er=new Set(["ts","tsx","typescript"]),tr=(e,i)=>{const[r,n]=[wt,Qi].map(a=>a.codeToThemedTokens(e,i).reduce((d,p)=>p.reduce((m,g)=>({...m,...g.explanation?.reduce((h,b)=>({...h,...b.scopes.reduce((S,{themeMatches:y})=>({...S,...y.reduce((u,{name:k,scope:w,settings:C})=>({...u,byName:k==null?u.byName:{...u.byName,[k]:C},byScope:Array.isArray(w)?{...u.byScope,...w.reduce((j,E)=>({...j,[E]:C}),u.byScope)}:typeof w=="string"?{...u.byScope,[w]:C}:u.byScope}),{...S,byName:{...S.byName},byScope:{...S.byScope}})}),h)}),m)}),d),{byName:{},byScope:{}}));return{dark:n,light:r}},or=(e,i)=>{const{content:r,explanation:n}=e,{dark:a,light:s}=i,d=n?.reduce((m,g)=>({...m,...g.scopes.reduce((h,{themeMatches:b})=>({...h,...b.reduce((S,{name:y,scope:u})=>{const k=vt({...y==null?{}:s.byName[y],...Array.isArray(u)?u.reduce((E,M)=>({...E,...s.byScope[M]}),{}):typeof u=="string"?s.byScope[u]:{}}),w=vt({...y==null?{}:a.byName[y],...Array.isArray(u)?u.reduce((E,M)=>({...E,...a.byScope[M]}),{}):typeof u=="string"?a.byScope[u]:{}}),C={...S,...k},j=Object.keys(w).length>0?{nested:{[c.darkMode]:w}}:{};return{...C,...j}},{})}),{})}),{})??{},p=Object.keys(d).length>0?l("span",d):"span";return r.replace(/\s+/,"")===""||p==null?o("span",{},r):o(p,{},r)},ir=(e,i)=>Qe(o(ee,{},o("pre",{},o("code",{},...e.reduce((r,n,a)=>{const s=n.map(p=>or(p,i)),d=a===0?"":`
`;return[...r,d,...s]},[]))))),rr=(e,i={})=>r=>{const{lang:n,value:a,meta:s}=r;!!process?.env?.TWOSLASH_DISABLE||nr(i,r);const p=String(n)==="json5"?"json":n;let m;const g=a.replace(/^\n+|\n+$/g,"");if(!Zi.has(p))m=Eo.plainTextRenderer(g,{});else{const h=e.codeToThemedTokens(g,p),b=tr(g,p);m=ir(h,b)}er.has(p)&&!s?.includes("ignore"),r.children=[],r.type="html",r.value=m},nr=(e,i)=>{if(i.meta?.includes("twoslash")){const r=Ro(i.value,i.lang,e);i.value=r.code,i.lang=r.extension,i.twoslash=r}},sr=()=>i=>{Ke(i,"code",rr(wt))};import.meta.env=Ae;const ie=Ze.createRequire(import.meta.url),ar=ie("rehype-parse"),cr=ie("rehype-remark"),lr=ie("remark"),dr=ie("remark-abbr"),pr=ie("remark-stringify"),mr=({className:e,children:i,...r})=>e==="language-id"?null:e==="code-container"?D(H,r,...Je(i)):D("div",{className:e,...r},...Je(i)),gr=({children:e,...i})=>_i(i,e)?D(Fi,i,e):D("span",i,e),Le={components:{div:mr,pre:Bi,span:gr},rehypePlugins:[yo],remarkPlugins:[sr,dr,Uo,fo,bo]},Tt=e=>{const{children:i=D(()=>null,{}),components:r={},rehypePlugins:n=[],remarkPlugins:a=[]}=e,s={...Le.components,...r},d={mdx:D,MDXProvider:po,components:s,props:{}},p=typeof i=="string"?Ee(i).trim():i,m=[...Le.rehypePlugins,...n],g=[...Le.remarkPlugins,...a],h=lo.sync(p,{rehypePlugins:m,remarkPlugins:g,skipExport:!0}).trim(),{code:b}=So(h,{objectAssign:"Object.assign"}),S=Object.keys(d),y=Object.values(d),u=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...S,`${b}

${u}`)(D,...y)},kt=(e,i)=>{const[r,...n]=e;return i.reduce((a,s,d)=>[...a,s,n[d]],[r]).join("")},ur=Object.entries(qi).map(([e,i])=>`*[${e}]: ${i}`).join(`
`),Ct=e=>{const[i,...r]=e;return[typeof i=="string"?i:kt(i,r),ur].join(`

`)},F=(...e)=>{const i=Ct(e);return D(ee,{},D(Tt,{},i))},hr=(...e)=>{const i=Ct(e);return D(ee,{},D(Tt,{components:{p:H}},i))},yr=(e,...i)=>{const r=Ee(kt(e,i)).trim();return lr().use(ar).use(cr).use(pr).use(vo).use(wo).processSync(r).contents.toString().trim()},Ye=process.cwd(),De=e=>e.startsWith("/")?X.resolve(Ye,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):X.extname(e)==""?X.resolve(Ye,"./src/pages/",`${e}.tsx`):e;var re;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A"})(re||(re={}));var ne;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(ne||(ne={}));const fr="origin",br="main",Ne=e=>{const{branch:i=br,filter:r=re.FIRST,format:n,path:a=Ye,remote:s=fr}=e,{error:d,stdout:p}=Ao.spawnSync("git",["log",r,`--branches=${i}`,`--format=${n}`,`--remotes=${s}`,"--",a]);if(d)throw d;const m=p.toString().trim();return m===""?null:r===re.FIRST?m:m.split(`
`)},Et=e=>{const i=De(e),r=Ne({format:ne.ISO_DATE,path:i}),n=new Date(r??"");return isNaN(n.getTime())?null:n},Sr=e=>{const i=De(e),r=Ne({filter:re.CURRENT,format:ne.ISO_DATE,path:i}),n=new Date(r??"");return isNaN(n.getTime())?null:n},vr=e=>{const i=Ce.readFileSync(e).toString();let r=xo.createHash("sha1");return r.update(i),r.digest("hex")},Rt=e=>{const i=De(e);return Ne({format:ne.HASH,path:i})??vr(i)},At=(e,i)=>{const r=Rt(e),n={created:Et(e)??Ce.statSync(i.replace(/^file:(\/\/)?/,"")).ctime,updated:Sr(e)??Ce.statSync(i.replace(/^file:(\/\/)?/,"")).mtime};return{hash:r,stat:n}},Be=e=>parseInt(e,16),ue=Be("ff"),wr=Be("00"),xt=.05,Tr=.15,kr=.05;class $e extends Error{constructor(i){super(`Invalid hash: ${i}`)}}const Cr=/([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/g,Er=e=>e.length===10,Rr=e=>{const r=Array.from(e.matchAll(Cr)??[]).map(([,n,a])=>({x:n,y:a}));if(!Er(r))throw new $e(e);return r},Ar=Symbol("IS_POINT"),xr=e=>Object.assign(e,{[Ar]:!0}),Pt=e=>{const i=Be(e);if(i>ue||i<wr)throw new Error(`Not a valid coordinate: ${e}`);return xr(i)},Pr=({x:e,y:i})=>({x:Pt(e),y:Pt(i)}),Or=e=>e.length===10,jr=e=>{const i=Rr(e);try{const r=i.map(Pr);if(!Or(r))throw new $e(e);return r}catch{throw new $e(e)}},Mr=Symbol("SCALED_COORDINATE"),Ot=e=>e.reduce(({max:i,min:r},{y:n})=>({max:Math.max(i,n),min:Math.min(r,n)}),{max:-Infinity,min:Infinity}),x=(e,i)=>Object.assign(e,{[Mr]:i}),Ir=({point:{x:e,y:i},xScale:r,xShift:n,yRange:a,yScale:s,yShift:d})=>({x:x(ue*((e+n)/ue)*r,r),y:x((i+d)/a*100,s)}),Lr=({points:e,xMax:i,xScale:r,yScale:n})=>e.reduce((a,s,d,p)=>{const{x:m}=p[d-1]??{x:x(0,r)},{x:g}=p[d+1]??{x:x(i,r)},h=x(0,n),y=[{x:m,y:h},s,{x:g,y:h}];return[...a,y]},[]),Yr=({segments:e,xMax:i,xScale:r,yScale:n})=>e.map(a=>{const[s,{x:d,y:p},{x:m,y:g}]=a,{x:h,y:b}=s,S=m-h,y=p/S,k=6/y;if(k<1){const C=k*.2*h,j=h-C,E=m+C,M=j<0?Math.abs(j):E>i?i-E:0,Q=j+M,$=E+M,G=k*.3,ce=d+M,le=G*p,we=p-le,Te={x:x(Q,r),y:x(b,n)},q={x:x(ce,r),y:x(we,n)},ke={x:x($,r),y:x(g,n)};return[Te,q,ke]}return a}),Dr=({x:e,y:i},{x:r,y:n})=>{const a=r-e,s=n-i;return{angle:Math.atan2(s,a),length:Math.sqrt(a**2+s**2)}},jt=({current:e,previous:i,next:r,reverse:n,smoothing:a,xScale:s,yScale:d})=>{const p=n?Math.PI:0,m=Dr(i,r),g=m.angle+p,h=m.length*a,{x:b,y:S}=e,y=b+Math.cos(g)*h,u=S+Math.sin(g)*h;return{x:x(y,s),y:x(u,d)}},Nr=({index:e,point:i,points:r,smoothing:n,xScale:a,yScale:s})=>{const d=r[e-1];if(d==null)throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());const p=r[e-2]??d,m=jt({current:d,previous:p,next:i,reverse:!1,smoothing:n,xScale:a,yScale:s}),g=d,h=r[e+1]??i,b=jt({current:i,previous:g,next:h,reverse:!0,smoothing:n,xScale:a,yScale:s});return[m,b,i]},Mt=({segment:e,smoothing:i,xScale:r,yScale:n})=>e.reduce((a,s,d)=>{if(d===0)return a;const m=Nr({index:d,point:s,points:e,smoothing:i,xScale:r,yScale:n}).map(g=>`${g.x},${g.y}`).join(" ");return[...a,`C ${m}`]},[]),Br=({baseYCoordinate:e,segments:i,xScale:r,yMax:n,yOffsetBelowMidpoint:a,yScale:s,yTilt:d=!1})=>i.reduce((p,m,g,h)=>{const{length:b}=h,[S,y,u]=m,{x:k,y:w}=S,{x:C,y:j}=y,{x:E,y:M}=u,Q=E-k,$=Q===0?0:Math.max(j/Q*kr,Tr),G=d?.1:0,ce=1-G,le=1+G,we=g%2==0?ce:le,Te=a?w+e:n-w+e,q={x:k,y:x(Te*we,s)},ke=g%2==0?ce:le,oo=a?M+e:n-M+e,qe={x:x(E,r),y:x(oo*ke,s)},Xe=C-k,We=E-C,io=We>Xe?0:0-(C-k)*xt,Ve=(b-g)*(s/100*n),ro={x:x(C+io,r),y:x(j-Ve,s)},no=Mt({segment:[q,ro,qe],smoothing:$,xScale:r,yScale:s}),so=We>Xe?(E-C)*xt:0,ao={x:x(C+so,r),y:x(n-Ve,s)},co=Mt({segment:[qe,ao,q],smoothing:$,xScale:r,yScale:s});return[...p,[`M ${q.x},${q.y}`,...no,...co,"Z"].join(" ")]},[]),$r=({hash:e,xPadding:i=0,xScale:r=1,yOffset:n=.5,yPadding:a=0,yScale:s=1})=>{const d=jr(e),p=$i(d,($,G)=>$.x>G.x?1:-1),{max:m,min:g}=Ot(p),h=i/2,b=m-g,S=0-g+a/2,y=p.map($=>Ir({xScale:r,xShift:h,yRange:b,yScale:s,yShift:S,point:$})),u=(ue+i)*r,{max:k}=Ot(y),w=(k+a)*s,C=Lr({points:y,xMax:u,xScale:r,yScale:s}),j=Yr({segments:C,xMax:u,xScale:r,yScale:s}),E=n>.5,M=E?w*n:-1*w*n;return{segmentPaths:Br({baseYCoordinate:M,segments:j,xScale:r,yMax:w,yOffsetBelowMidpoint:E,yScale:s}),xMax:u,yMax:w}},It=()=>o(H,null,o("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),o("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),o("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),o("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Hr=()=>o("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},o("defs",null,o(It,null))),zr=1.6180334,_r=4,Lt=zr*5,Yt=.75,z=.15,Fr=1.5,He=_("6rem",`${100/Lt}vw`,"10rem"),Dt=l(Y,{height:He,position:"relative",width:"100%"}),Nt=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Bt=(e=oe)=>c.topicColorClassNames[e],$t=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var se;(function(e){e.INLINE="inline",e.NONE="none"})(se||(se={}));const he=e=>{const{className:i,defsUsage:r=se.INLINE,hash:n,simple:a=!1,title:s,topics:d=[]}=e,p=d.length<2?[...d,P[oe]]:d,m=w=>`${w}-${n}`,{segmentPaths:g,xMax:h,yMax:b}=$r({hash:n,xPadding:_r,xScale:Lt,yOffset:Yt,yPadding:z,yScale:Fr}),S=b*Yt,y=b*z/4,u=y*.75,k=[0,0,h,b];return a?o(Dt,{className:i},o(Nt,{className:Me,preserveAspectRatio:"none",viewBox:k.join(" ")},o("title",null,"Generated art for the page or post titled",o("i",null,s),", with the content or commit hash ",n," ",p.length>0?[", and the topics: ",p.map(String).join(", ")]:null),o("g",{transform:[`translate(0, ${b*z})`,`scale(1, ${1-z*2})`].join(" ")},g.map((w,C)=>{const j=C%p.length,E=p[j],M=Bt(E);return o($t,{key:w,className:M,d:w})})))):o(Dt,{className:i},o(Nt,{className:Me,preserveAspectRatio:"none",viewBox:k.join(" ")},o("title",null,"Generated art for the page or post titled",o("i",null,s),", with the content or commit hash ",n," ",p.length>0?[", and the topics: ",p.map(String).join(", ")]:null),o("defs",null,r===se.INLINE?o(It,null):null,o("filter",{id:m("blur")},o("feOffset",{in:"SourceGraphic",dx:"0",dy:u,result:"glowOffsetOut"}),o("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:y,result:"glowBlurOut"}),o("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),o("clipPath",{id:m("blurOverlayClip")},o("rect",{x:"0",width:h,y:S,height:b})),o("filter",{id:m("blurOverlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:u}),o("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:y})),o("filter",{id:m("blurUnderlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:u}),o("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:y}),o("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),o("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),o("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),o("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:y})),o("g",{id:m("blobs")},g.map((w,C)=>{const j=C%p.length,E=p[j],M=Bt(E);return o($t,{key:w,className:M,d:w,mask:"url(#softVerticalFade)"})}))),o("g",{transform:[`translate(0, ${b*z})`,`scale(1, ${1-z*2})`].join(" "),filter:`url(#${m("blur")})`},o("use",{href:`#${m("blobs")}`,mask:"url(#horizontalMidFade)"})),o("g",{"clip-path":`url(#${m("blurOverlayClip")})`,filter:`url(#${m("blurOverlay")})`,transform:[`translate(0, ${b*z})`,`scale(1, ${1-z*2})`].join(" ")},o("use",{href:`#${m("blobs")}`,mask:"url(#softVerticalFade)"}))))},Ur=[,"January","February","March","April","May","June","July","August","September","October","November","December"],Gr=l("time",{nested:{[c.darkMode]:{...c[c.darkMode].deemphasize}},...c.deemphasize});var B;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(B||(B={}));const ye=({date:e,mode:i=B.DEFAULT,...r})=>{const n=e.getMonth()+1,a=e.getFullYear(),s=i===B.SHORT?`${n}/${a}`:i===B.META?"":[e.getDate(),Ur[n],a].join(" ");return o(Gr,{...r,datetime:e.toISOString()},s)},Ht=l("span",{...c.topicTagOuter,backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"}),qr=l(Ht,{...c.topicTagLink(c.topicTagIdentifier.className)}),Xr=l("span",c.topicTagIdentifier()),Wr=l(Xr,{...c.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),zt=({className:e,link:i=!0,topic:r})=>{const n=pi(r),a=pt(r);if(n==null||typeof a!="string")throw new Error(`Unexpected topic: ${String(a)}`);const s=i?qr:Ht,d=i?{as:"a",href:`/blog/topics/${n}/`}:{as:"span"};return o(s,{className:[e,c.topicColorClassNames[a]??"",c.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...d},o(Wr,null,a))},Vr=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),Kr=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),_t=({className:e,link:i=!0,topics:r})=>o(Vr,{className:e},r.map(n=>typeof n=="string"?o(Kr,{key:ci(n)},o(zt,{link:i,topic:n})):null)),Jr=e=>e.reduce((i,r)=>{const n=r.stat.created.getFullYear(),a=i[n]??[];return{...i,[n]:[...a,r]}},{}),Qr=l(Y,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),Zr=l(Y,{...c.blog.listing.item,minHeight:He,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),en=l(he,{left:0,position:"absolute",top:"1rem"}),tn=l(Y,{fontWeight:"normal",gridColumn:"2 / -2",paddingTop:`calc(${He} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),on=I({backdropFilter:"blur(1rem)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(1rem)"}),rn=l("h2",{...c.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),nn=l(ye,{padding:"0 0.5rem 0.125rem 0"}),sn=l(_t,{gridColumn:"3 / 3"}),an=l("div",{...c.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),cn=l("a",{fontSize:"0.875em"});var fe;(function(e){e.DATE="date"})(fe||(fe={}));var be;(function(e){e.ASC="asc",e.DESC="desc"})(be||(be={}));const ln=({order:e=be.DESC,posts:i,sort:r=fe.DATE})=>{const n=i.slice().sort((s,d)=>e===be.DESC&&r===fe.DATE?s.stat.created>d.stat.created?-1:1:0),a=Jr(n);return o(H,null,Object.entries(a).map(([s,d])=>o(H,{key:s},o(Qr,null,d.map(p=>{const{description:m,hash:g,path:h,stat:{created:b},title:S,topics:y}=p;return o(Zr,{key:h},o(tn,{as:"a",href:h},o(en,{defsUsage:se.NONE,hash:g,padded:!0,title:S,topics:y}),o(rn,{className:on},S),o(nn,{date:b})),o(sn,{link:!1,topics:y}),o(an,{className:c.blog.listing.descriptionIdentifier},m),o("p",null,o(cn,{href:h},"Read more\u2026")))})))))},dn=()=>o(H,null,o("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),o("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),o("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),o("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),o("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),o("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),o("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),o("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),o("meta",{name:"application-name",content:"Eyelidlessness"}),o("meta",{name:"msapplication-TileColor",content:"#555555"}),o("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),o("meta",{name:"theme-color",content:"#ffffff"}));Ai();const Ft=({children:e,...i})=>o(Po,{...i},o("style",{dangerouslySetInnerHTML:{__html:Ri}}),e,o(dn,null)),pn=l("div",{}),mn=({devilsBreakpoint:e,gap:i,...r})=>o(pn,{...r}),gn=l(mn,({devilsBreakpoint:e,gap:i})=>({alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[i?.horizontal??"0px",`calc((${e} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:i?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}})),U=512,Ut=[0,0,U,U].join(" "),un=U/2,hn=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),yn=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:Ut,width:"0"},o("defs",null,o("mask",{id:"octocat-knockout"},o("rect",{fill:"#fff",height:U,mask:"url(#octocat)",rx:un,width:U}),o("path",{d:hn,fill:"#000"})))),fn=l("rect",{...c.gitHubLogo}),Gt=({className:e})=>o("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:Ut},o("title",null,"GitHub"),o(fn,{height:U,mask:"url(#octocat-knockout)",width:U})),Se={height:60,width:338},bn=l("svg",{display:"inline-block",maxWidth:"100%",width:`${Se.width}px`}),Sn=l("use",{nested:{[c.darkMode]:{...c[c.darkMode].siteLogo}},...c.siteLogo,fill:"currentcolor"}),vn=`0 0 ${Se.width} ${Se.height}`,wn=()=>o(bn,{viewBox:vn},o(Sn,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),o("title",null,"Eyelidlessness")),{columns:J,container:Tn}=c.siteHeader,kn=`
  ${J[0]}
  ${J[1]}
  min(
    ${J[2][0]},
    ${J[2][1]}
  )
  ${J[3]}
  ${J[4]}
`.replace(/\s+/g," "),Cn=l("div",{...Tn,display:"grid",gridColumn:"1 / -1",gridTemplateColumns:kn,padding:"1rem 0"}),En=l("div",{gridColumn:3}),Rn=l("div",{margin:"0 auto"}),An=l("a",{textDecoration:"none"}),xn=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),qt=1,Pn=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${qt/2}rem`,padding:0}),On=l("a",{...c.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[c.darkMode]:{...c[c.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),Xt="1.5em",Ws=l(Gt,{display:"block",width:`clamp(1.125em, 4vw, ${Xt})`}),jn=()=>{const e=[{label:"Blog",location:"/"},{label:"Hire Me",location:"/resume/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],i=e.reduce((a,s)=>typeof s.label=="string"?a+s.label.length:a,0),r={horizontal:"2rem"},n=`${[`${Se.width}px`,r.horizontal,`${i+1}ch`,Xt,`${e.length*qt}rem`].join(" + ")}`;return o(Cn,{as:"header"},o(En,null,o(gn,{as:"nav",devilsBreakpoint:n,gap:r},o(Rn,null,o(An,{href:"/"},o(wn,null))),o(xn,null,e.map(({location:a,label:s})=>o(Pn,null,o(On,{href:a},s)))))))},Mn=l(Y,({isListing:e})=>({marginTop:e?0:"1rem",paddingBottom:"4em"})),Wt=e=>o(ee,null,o(jn,null),o(Mn,{as:"main",...e})),In=l(Y,{...c.aside,nested:{...c.aside.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),Ln=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Yn=l("div",{fontSize:"0.889em"}),Dn=({as:e="section",title:i,...r})=>o(In,{as:e,itemprop:"description"},i?o(Ln,null,i):null,o(Yn,{...r})),Nn=l("h1",{marginBottom:"0.25rem"}),Bn=l(Y,{marginBottom:"1rem"}),$n=({children:e,description:i,descriptionRaw:r,hash:n,stat:{created:a},title:s,topics:d})=>o(H,null,o(Ft,null,o(ot.title,null,s," | Eyelidlessness"),o(ot.description,null,r)),o(Wt,{as:"article"},o(Bn,null,o(he,{hash:n,title:s,topics:d}),o(Nn,null,s),o(ye,{date:a,itemprop:"datePublished"}),o(_t,{link:!1,topics:d})),o(Dn,null,i),e)),Hn=e=>{const{description:i,importURL:r,path:n,title:a,topics:s}=e,{hash:d,stat:p}=At(n,r),m=yr`${Qe(o(H,null,i))}`;return{description:i,descriptionRaw:m,hash:d,path:n,stat:p,title:a,topics:s}},zn=l(Y,{padding:"1rem 0 0",nested:{"&:first-child, &:nth-of-type(1)":{paddingTop:0}}}),ae=e=>o(zn,{as:"section",...e}),ve=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),_n=l(ve,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),ze=l(_n,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),Fn=l(ae,{padding:0}),Un=l(ve,{flexWrap:"wrap",margin:"0.1111rem 0 0"}),Gn=l("a",{...c.resume.contactList.link,fontSize:"0.88889em",fontWeight:500,minWidth:"auto",textDecoration:"none"}),qn=l("span",{nested:{"@media print":{nested:{"& > *":{display:"none"},"&:after":{content:"attr(data-print-label)"}}}}}),_e=({children:e,printLabel:i,...r})=>o(Gn,{...r},o(qn,{"data-print-label":i},o("span",null,e))),Xn=l(Y,{...c.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...c.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"}}}),Fe="@media (min-width: 44.625rem)",Wn=l(ve,{display:"block",margin:0,nested:{"& > *":{margin:"0 0 1rem"},[Fe]:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",margin:"0 -0.5rem -0.5rem",nested:{"& > *":{margin:"0 0.5rem 0.5rem"}}}}}),Ue=l("h2",{fontSize:_(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Vn=l(Wn,{fontSize:"0.88889em"}),Kn=l("ul",{display:"block",padding:0}),Jn=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0.125rem 0",padding:0,nested:{"&:last-child":{marginRight:0},[Fe]:{display:"block",nested:{"&:last-child":{marginBottom:0}}}}}),Qn=Object.values(v).reduce((e,i)=>({...e,[i]:l("span",{...c.resume.skillLevel[i],borderRadius:"4px",display:"inline-block",height:"8px",margin:"0 0.325rem 0 0",width:"8px",verticalAlign:"middle",nested:{...c.resume.skillLevel[i].nested,[Fe]:{margin:"0 0.325rem"}}})}),{}),Zn=({name:e,skills:i})=>o("div",{itemscope:!0,itemtype:"http://schema.org/ItemList"},o(Ue,{itemprop:"name"},e),o(Kn,null,i.map(({level:r,name:n})=>{const a=Qn[r];return o(Jn,{key:n,itemprop:"itemListElement"},o(a,{role:"img",title:`Skill level: ${r}`}),hr`${n}`)}))),es=l(Y,{padding:"1rem 0"}),ts=l("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),os=/^(\d{4})-(\d{2})$/,Vt=e=>{const i=e.match(os);if(i==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,r,n]=i;return new Date(`${r}-${n}-01T00:00:00`)},Kt=l("div",{fontSize:"0.88889em"}),Ge=l(ye,{fontSize:"inherit"}),is=l("h2",{marginBottom:"0.5rem"}),Jt=({range:[e,i]})=>{const r=Vt(e),n=Vt(i);return e==i?o(Kt,null,o(Ge,{date:n,itemprop:"endDate",mode:B.SHORT})):o(Kt,null,o(Ge,{date:r,itemprop:"startDate",mode:B.SHORT})," \u2013 ",o(Ge,{date:n,itemprop:"endDate",mode:B.SHORT}))},rs=l("div",{fontSize:"0.88889rem"}),ns=l("ul",{fontSize:"0.88889em",paddingInlineStart:0}),ss=l("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),as=l(es,{marginBottom:"0.5rem",paddingBottom:"1.5rem",position:"relative",nested:{"&:after":{...c.resume.employment.separator,bottom:0,content:'""',display:"block",gridColumn:"3 / 3",left:0,position:"absolute",width:"100%"},"&:last-child":{marginBottom:0},"&:last-child:after":{display:"none"}}}),cs=({employer:e,end:i,highlights:r,position:n,start:a,summary:s,...d})=>o(as,{as:"section",itemscope:!0,itemtype:"https://schema.org/EmployeeRole",...d},o(ze,null,o("h3",{itemprop:"name"},e),o(Jt,{range:[a,i]})),o(rs,{itemprop:"roleName"},n),s==null?null:o(ts,{itemprop:"description"},F(s)),r==null?null:o(ns,{itemtype:"http://schema.org/ItemList"},r.map(p=>o(ss,{key:p,itemprop:"itemListElement"},F(p))))),ls=l(ae,{...c.resume.employment.container,marginTop:"1rem"}),ds=({employment:e})=>o(ls,null,o(is,null,"Recent Experience"),e.history.map(i=>o(cs,{...i}))),ps=l("h3",{paddingLeft:0,textIndent:0}),ms=l("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),Qt="@media (min-width: 41.666rem)",gs=l("a",{display:"block",padding:"0 0.5rem 0.5rem 0.5rem",zIndex:1,nested:{"& svg":{width:"1.25em"},[Qt]:{paddingLeft:0}}}),us=l("div",{paddingTop:"0.05556rem"}),hs=l("div",{alignItems:"start",display:"grid",gridTemplateColumns:"auto 1fr",padding:"1rem 0"}),ys=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),Zt=({project:{description:e,end:i,repo:r,role:n,title:a,start:s,summary:d}})=>o(hs,null,o(gs,{href:r},o(Gt,null)),o(us,null,o(ze,null,o(ps,null,o(ms,{href:r},a)),o(Jt,{range:[s,i]})),o(ys,null,n===T.CREATOR?F(e):null,F(d)))),fs=l(ve,{display:"block",margin:0,nested:{[Qt]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}}}}),eo=l("div",{marginTop:"0.5rem"}),bs=({projects:e})=>{const{creator:i,contributor:r}=e.reduce((n,a)=>{const s=a.role===T.CREATOR?"creator":"contributor";return{...n,[s]:[...n[s],a]}},{creator:[],contributor:[]});return o(ae,null,o(fs,null,o("div",null,o(Ue,null,"Projects I Created"),o(eo,null,i.map(n=>o(Zt,{project:n})))),o("div",null,o(Ue,null,"Open Source Contributions"),o(eo,null,r.map(n=>o(Zt,{project:n}))))))},Ss=l(Y,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),vs=l(ye,{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"}),to=e=>e.replace(/^https?:\/\/|\/$/g,""),ws=({className:e,id:i,meta:r,resume:n,updated:a})=>{const{contact:{email:s,website:d},employment:p,info:m,name:g,projects:h,skills:b,social:S}=n;return o(Ss,{className:e,id:i,itemscope:!0,itemtype:"http://schema.org/Person"},o(yn,null),o(he,{...r}),o(Fn,null,o(ze,null,o("h1",{itemprop:"name"},g),o(vs,{date:a,itemprop:"datePublished",mode:B.META}),o(Un,null,o(_e,{href:`mailto:${s}`,itemprop:"email",printLabel:s},"Email"),o(_e,{href:d,itemprop:"url",printLabel:to(d),rel:"me"},"Website"),S.map(({network:y,url:u})=>o(_e,{href:u,itemprop:"url",printLabel:to(u),rel:"me"},y)))),o(Xn,{itemprop:"description"},F(m.brief))),o(ae,{"aria-label":"Skillsets"},o(Vn,null,Object.entries(b.merged).map(([y,u])=>o(Zn,{key:y,name:y,skills:u})))),o(ds,{employment:p}),o(bs,{projects:h}),o(ae,null,o("h2",null,"References"),F("Available upon request.")))},Vs=l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),Ks=l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Js=l("a",{...c.resume.contactList.link,textDecoration:"none"});export{he as BlogArt,Hr as BlogArtDefs,ln as BlogListing,$n as BlogPost,Ft as Head,Wt as Main,ws as Resume,ee as StylesProvider,P as Topic,zt as TopicTag,Ae as __SNOWPACK_ENV__,Hn as getBlogPostStaticProps,Et as getInitialCommitDate,Rt as getInitialFileHash,At as getPageMetadata,F as mdx,Fo as resetAbbrContext,si as resume,l as styled};
