import co from"unist-util-visit";import{h as t,Fragment as R,toChildArray as lo}from"https://cdn.skypack.dev/preact@10.5.10";import{createRenderer as $n}from"fela";import"fela-tools";import po from"module";import{isobject as Hn,createComponent as Bn,RendererProvider as Nn,createSchema as n,emojiRegex as Dn,h as mo,rehypeAccessibleEmojis as _n,remarkSlug as zn,remarkSmartypants_1 as Xn,hsluv_1 as ne,rgba as Fn}from"./_vendor/index.js";import{processStyleWithPlugins as Gn,KEYFRAME_TYPE as ho,isNestedSelector as Un,normalizeNestedProperty as Wn,isMediaQuery as qn,generateCombinedMediaQuery as go,isSupport as Vn,generateDeclarationReference as Kn,isUndefinedValue as Jn,generateCSSSelector as Zn,RULE_TYPE as Qn}from"fela-utils";import{cssifyDeclaration as er,cssifyObject as tr}from"css-in-js-utils";import uo from"md5";import fo from"dedent";import or from"@mdx-js/mdx";import{mdx as rt,MDXProvider as nr}from"@mdx-js/preact";import{transform as rr}from"buble-jsx-only";import ir from"remark-mdx";import sr from"remark-mdx-to-plain-text";import Oe from"path";import{loadTheme as yo,getHighlighter as bo}from"shiki";import{BUNDLED_LANGUAGES as ar}from"shiki-languages";import{renderers as cr}from"shiki-twoslash";import Mt from"fs";import So from"node-object-hash";import"sharp";import lr from"child_process";import dr from"crypto";import{definePage as pr}from"microsite/page";import{Head as vo,seo as it}from"microsite/head";let It=new Set;const mr=()=>{It=new Set},hr=()=>e=>{co(e,"abbr",o=>{const{abbr:r}=o;It.has(r)&&(delete o.abbr,delete o.children,delete o.data,delete o.reference,Object.assign(o,{type:"text",value:r})),It.add(r)})},xo="production",gr="production",ur=!0;var st=Object.freeze({__proto__:null,MODE:xo,NODE_ENV:gr,SSR:ur});const fr=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),_=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((r,[i,s])=>typeof s=="object"&&(i==="nested"||i.includes("&"))?r:`${r}${fr(i)}:${s};`,""),"}",Object.entries(o).map(([r,i])=>{if(typeof i=="object"){if(r==="nested")return Object.entries(i).map(([s,a])=>{const l=e.map(p=>s.replace(/&/g,p));return _(l,a)}).join("");if(r.includes("&")){const s=e.map(a=>r.replace(/&/g,a));return _(s,i)}}return""},[]).join("")].join(""),je=(...e)=>`clamp(${e.join(",")})`,Be=e=>e.replace(/\s+/g," ").trim(),at=e=>e;function Ve(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function yr(e,o,r,i,s,a){const l=[];return s&&l.push(Ve(s).slice(0,16)),i&&l.push(Ve(i).slice(0,16)),r&&l.push(Ve(r).slice(0,16)),l.push(Ve(e).slice(0,16)),l.push(Ve(o).slice(0,16)),l.push(a.slice(0,8)),l.join("_")}function br(e,o,r=[""]){let i="";for(const a in e){const l=e[a];i=`${i}${a}{${tr(l)}}`}let s="";for(let a=0;a<r.length;a++){const l=r[a];s=`${s}@${l}keyframes ${o}{${i}}`}return s}function Sr(){return e=>(e.renderKeyframe=(o,r)=>{const i=o(r,e),s=Gn(e,i,ho,r),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const l=uo(a),p=(e.selectorPrefix||"_")+l.slice(0,8),m=br(s,p,e.keyframePrefixes),h={type:ho,keyframe:m,name:p};e.cache[a]=h,e._emitChange(h)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...r},i="",s="",a="")=>{let l=o?` ${o}`:"";for(const p in r){const m=r[p];if(Hn(m))if(Un(p))l+=e._renderStyleToClassNames(m,i+Wn(p),s,a);else if(qn(p)){const h=go(s,p.slice(6).trim());l+=e._renderStyleToClassNames(m,i,h,a)}else if(Vn(p)){const h=go(a,p.slice(9).trim());l+=e._renderStyleToClassNames(m,i,s,h)}else console.warn(`The object key "${p}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const h=Kn(p,m,i,s,a);if(!e.cache.hasOwnProperty(h)){if(Jn(m)){e.cache[h]={className:""};continue}const g=er(p,m),u=uo(h),P=e.devMode?yr(p,m,i,s,a,u):(e.selectorPrefix||"_")+u.slice(0,8),b=Zn(P,i),f={type:Qn,className:P,selector:b,declaration:g,pseudo:i,media:s,support:a};e.cache[h]=f,e._emitChange(f)}const y=e.cache[h].className;y&&(l+=` ${y}`)}}return l},e)}import.meta.env=st;const ct=po.createRequire(import.meta.url),{default:vr}=ct("fela-identifier"),{default:xr}=ct("fela-plugin-embedded"),{default:wr}=ct("fela-plugin-multiple-selectors"),{default:Pr}=ct("fela-plugin-typescript"),Cr=xo==="development",kr=()=>{const e=vr(),o=$n({devMode:Cr,enhancers:[Sr(),e],plugins:[xr(),wr(),Pr()]});return{identifier:e,renderer:o}},{identifier:ce,renderer:Ne}=kr(),Tr=e=>Array.isArray(e)?e:[e],Er=e=>({children:o})=>t(Nn,{renderer:e},...Tr(o)),De=Er(Ne),Ar=e=>Ne.renderRule(at,e),lt=Object.assign(Ar,{global:Ne.renderStatic.bind(Ne)}),d=(e,o)=>{const r=typeof o=="function"?o:()=>o;return Bn(r,e,Object.keys)},v=n({}),wo="FRESH@0.1.0",ol=n({$schema:"http://json-schema.org/draft-07/schema#",title:"FRESH Resume Schema",type:"object",additionalProperties:v,required:["name","meta"],properties:{name:n({type:"string",description:"The candidate's name as it should appear on the resume."}),meta:n({type:"object",additionalProperties:v,description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools.",required:["format"],properties:{format:n({const:wo,description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:n({type:"string",description:"The semantic version number for this resume."})}}),info:n({type:"object",additionalProperties:v,description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote.",properties:{label:n({type:"string",description:"A label for this resume, such as 'Full-Stack Developer'."}),class:n({type:"string",description:"Profession type or 'character class'."}),image:n({type:"string",description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:n({type:"string",description:"A short description or summary of yourself as a candidate."}),quote:n({type:"string",description:"Candidate quote or byline."})}}),disposition:n({type:"object",additionalProperties:v,description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like.",properties:{travel:n({type:"integer",description:"Percentage of time willing to travel (0 to 100)."}),authorization:n({type:"string",description:"Work authorization: citizen, work visa, etc."}),commitment:n({type:"array",description:"Types of work commitment desired: contract, perm, seasonal, etc.",items:n({type:"string",description:"One of: contract, permanent, part-time, seasonal, full-time."})}),remote:n({type:"boolean",description:"Open to remote employment opportunities."}),relocation:n({type:"object",additionalProperties:v,properties:{willing:n({oneOf:[n({type:"string"}),n({type:"boolean"})],description:"Willingness to relocate."}),destinations:n({type:"array",description:"Preferred destinations for relocation",items:n({type:"string",description:"City or area of relocation."})})}})}}),contact:n({type:"object",additionalProperties:v,description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types.",properties:{email:n({type:"string",description:"Primary contact email.",format:"email"}),phone:n({type:"string",description:"Primary phone number."}),website:n({type:"string",description:"Website, blog, or home page.",format:"uri"}),other:n({type:"array",items:n({type:"object",additionalProperties:v,properties:{label:n({type:"string",description:"A label for this contact information."}),category:n({type:"string",description:"Type of contact information: email, phone, url, postal, or IM."}),value:n({type:"string",description:"Phone number, email address, website, etc."})}})})}}),location:n({type:"object",description:"The 'location' section, when present, contains the candidate's location and address info.",additionalProperties:v,properties:{address:n({type:"string",description:"Your full postal address."}),code:n({type:"string",description:"Postal or other official routing code."}),city:n({type:"string",description:"Your home city."}),country:n({type:"string",description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:n({type:"string",description:"Your state, region, or province."})}}),employment:n({type:"object",description:"The 'employment' section describes the candidate's formal employment history.",additionalProperties:v,properties:{summary:n({type:"string",description:"Summary of overall employment."}),history:n({type:"array",items:n({type:"object",additionalProperties:v,required:["employer"],properties:{employer:n({type:"string",description:"Employer name."}),position:n({type:"string",description:"Your position or formal job title."}),url:n({type:"string",description:"Employer website.",format:"uri"}),start:n({type:"string",description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:n({type:"string",description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:n({type:"string",description:"A summary of your achievements and responsibilities under this employer."}),highlights:n({type:"array",description:"Noteworthy achievements and/or highlights.",items:n({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:n({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:n({type:"array",description:"Keywords associated with this position.",items:n({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})})}}),projects:n({type:"array",description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid.",items:n({type:"object",additionalProperties:v,required:["title"],properties:{title:n({type:"string",description:"Project name or code-name."}),category:n({type:"string",description:"Project type: open-source, private, side project, etc."}),description:n({type:"string",description:"Project description or summary."}),summary:n({type:"string",description:"A summary of your achievements and responsibilities on the project."}),role:n({type:"string",description:"Your role on the project: Contributor, Creator, etc."}),url:n({type:"string",description:"Project URL.",format:"uri"}),media:n({type:"array",description:"Media associated with this project.",items:n({type:"object",additionalProperties:v,required:["category"],properties:{category:n({type:"string",description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:n({type:"string",description:"Friendly media name."}),url:n({type:"string",description:"Media link, path, or location."})}})}),repo:n({type:"string",description:"Repo URL.",format:"uri"}),start:n({type:"string",description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:n({type:"string",description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:n({type:"array",description:"Noteworthy project-related achievements and/or highlights.",items:n({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:n({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:n({type:"array",description:"Keywords associated with this project.",items:n({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})}),skills:n({type:"object",description:"A description of the candidate's formal skills and capabilities.",additionalProperties:v,properties:{sets:n({type:"array",items:n({type:"object",additionalProperties:v,required:["name","skills"],properties:{name:n({type:"string",description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:n({type:"string",description:"Level of mastery of the skill."}),skills:n({type:"array",items:n({type:"string",description:"Title or ID of a skill from the skills list."})})}})}),list:n({type:"array",items:n({type:"object",additionalProperties:v,required:["name"],properties:{name:n({type:"string",description:"The name or title of the skill."}),level:n({type:"string",description:"A freeform description of your level of mastery with the skill."}),summary:n({type:"string",description:"A short summary of your experience with this skill."}),years:n({oneOf:[n({type:"string"}),n({type:"number"})],description:"Number of years you've used the skill."})}})})}}),service:n({type:"object",description:"The 'service' section describes the candidate's overall service history in the true sense of the word 'service': volunteer work, military participation, civilian core, rescue and emergency services, and the like.",additionalProperties:v,properties:{summary:n({type:"string",description:"Summary of overall service/volunteer experience."}),history:n({type:"array",items:n({type:"object",additionalProperties:v,required:["organization"],properties:{category:n({type:"string",description:"The type of service work, such as volunteer or military."}),organization:n({type:"string",description:"The service organization, such as Red Cross or National Guard."}),position:n({type:"string",description:"Your position or formal service role."}),url:n({type:"string",description:"Organization website.",format:"uri"}),start:n({type:"string",description:"Date you joined the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:n({type:"string",description:"Date you left the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:n({type:"string",description:"A summary of your achievements and responsibilities at this organization."}),highlights:n({type:"array",description:"Noteworthy achievements and/or highlights.",items:n({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:n({type:"array",description:"Keywords associated with this service.",items:n({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),location:n({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),education:n({type:"object",additionalProperties:v,description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses.",required:["level"],properties:{summary:n({type:"string",description:"Summary of overall education."}),level:n({type:"string",description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:n({type:"string",description:"Your degree, if any (BSCS, BA, etc.)."}),history:n({type:"array",items:n({type:"object",additionalProperties:v,required:["institution"],properties:{title:n({type:"string",description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."}),institution:n({type:"string",description:"College or school name."}),area:n({type:"string",description:"e.g. Arts"}),studyType:n({type:"string",description:"e.g. Bachelor"}),start:n({type:"string",description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:n({type:"string",description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),grade:n({type:"string",description:"Grade or GPA."}),curriculum:n({type:"array",description:"Notable courses, subjects, and educational experiences.",items:n({type:"string",description:"The course name and number or other identifying info."})}),url:n({type:"string",description:"Website or URL of the institution or school.",format:"uri"}),summary:n({type:"string",description:"A short summary of this education experience."}),keywords:n({type:"array",description:"Keywords associated with this education stint.",items:n({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),highlights:n({type:"array",description:"Noteworthy achievements and/or highlights.",items:n({type:"string",description:"For ex, 'Graduated *summa cum laude*'."})}),location:n({type:"string",description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),social:n({type:"array",description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like.",items:n({type:"object",additionalProperties:v,required:["network","user","url"],properties:{network:n({type:"string",description:"The name of the social network, such as Facebook or GitHub."}),user:n({type:"string",description:"Your username or handle on the social network."}),url:n({type:"string",description:"URL of your profile page on this network.",format:"uri"}),label:n({type:"string",description:"A friendly label."})}})}),recognition:n({type:"array",description:"The 'recognition' section describes the candidate's public or professional plaudits, kudos, awards, and other forms of positive external reinforcement.",items:n({type:"object",additionalProperties:v,required:["title"],properties:{category:n({type:"string",description:"Type of recognition: award, honor, prize, etc."}),title:n({type:"string",description:"Title of the award or recognition."}),date:n({type:"string",description:"Date awarded, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),from:n({type:"string",description:"Name of the awarding company, institution, or individual."}),summary:n({type:"string",description:"A brief description of the award and why you received it."}),url:n({type:"string",description:"A webpage or other associated URL.",format:"uri"})}})}),writing:n({type:"array",description:"The 'writing' section describes the candidate's writing and publication history, from blogs and essays to novels and dissertations.",items:n({type:"object",additionalProperties:v,required:["title"],properties:{title:n({type:"string",description:"Title of the article, essay, or book."}),category:n({type:"string",description:"One of 'book', 'article', 'essay', 'blog post', or 'series'."}),publisher:n({oneOf:[n({additionalProperties:v,type:"object",properties:{name:n({type:"string",description:"Publisher of the article, essay, or book."}),url:n({type:"string",description:"Publisher website or URL."})}}),n({type:"string"})],description:"Publisher of the article, essay, or book."}),date:n({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),url:n({type:"string",description:"Website or URL of this writing or publication."}),summary:n({type:"string",description:"A brief summary of the publication."})}})}),reading:n({type:"array",description:"The 'reading' section describes the candidate's reading habits and is intended to demonstrate familiarity with industry-relevant publications, blogs, books, or other media that a competent industry candidate should be expected to know.",items:n({type:"object",additionalProperties:v,required:["title"],properties:{title:n({type:"string",description:"Title of the book, blog, or article."}),category:n({type:"string",description:"The type of reading: book, article, blog, magazine, series, etc."}),url:n({type:"string",description:"URL of the book, blog, or article.",format:"uri"}),author:n({oneOf:[n({type:"string"}),n({type:"array",items:n({type:"string",description:"Author name."})})],description:"Author of the book, blog, or article."}),date:n({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),summary:n({type:"string",description:"A brief description of the book, magazine, etc."})}})}),speaking:n({type:"array",description:"The 'speaking' section describes the candidate's speaking engagements and presentations.",items:n({type:"object",additionalProperties:v,required:["event"],properties:{title:n({type:"string",description:"Speaking engagement title."}),event:n({type:"string",description:"Event at which you presented."}),location:n({type:"string",description:"Freeform location of the event, e.g., 'San Francisco, CA' or 'Tokyo'."}),date:n({type:"string",description:"Presentation date.",format:"date"}),highlights:n({type:"array",description:"Noteworthy achievements and/or highlights.",items:n({type:"string",description:"An array of specific highlights such as 'Won 'Best Speaker' award at 2012 E3 expo'."})}),keywords:n({type:"array",description:"Keywords associated with this speaking engagement.",items:n({type:"string",description:"A list of keywords such as 'TED', 'E3', 'mathematics', 'Big Data', etc."})}),summary:n({type:"string",description:"A description of this speaking engagement."})}})}),governance:n({type:"array",description:"The 'governance' section describes the candidate's leadership, standards, board, and committee roles.",items:n({type:"object",additionalProperties:v,required:["organization"],properties:{summary:n({type:"string",description:"Summary of your governance at this organization."}),category:n({type:"string",description:"Type of governance: committee, board, standards group, etc."}),role:n({type:"string",description:"Governance role: board member, contributor, director, etc."}),organization:n({type:"string",description:"The organization."}),start:n({type:"string",description:"Start date.",format:"date"}),end:n({type:"string",description:"End date.",format:"date"}),keywords:n({type:"array",description:"Keywords associated with this governance stint.",items:n({type:"string",description:"For example, C++, CRM, HIPAA."})}),highlights:n({type:"array",description:"Noteworthy achievements and/or highlights.",items:n({type:"string",description:"For ex, 'Increased company profits by 35% year over year'."})})}})}),languages:n({type:"array",description:"The 'languages' section describes the candidate's knowledge of world languages such as English, Spanish, or Chinese.",items:n({type:"object",additionalProperties:v,required:["language"],properties:{language:n({type:"string",description:"The name of the language: English, Spanish, etc."}),level:n({type:"string",description:"Level of fluency with the language, from 1 to 10."}),years:n({oneOf:[n({type:"string"}),n({type:"number"})],description:"Amount of time language spoken?"})}})}),samples:n({type:"array",description:"The 'samples' section provides an accessible demonstration of the candidate's portfolio or work product to potential employers and co-workers.",items:n({type:"object",additionalProperties:v,required:["title"],properties:{title:n({type:"string",description:"Title or descriptive name."}),summary:n({type:"string",description:"A brief description of the sample."}),url:n({type:"string",description:"URL of the sample (if any).",format:"uri"}),date:n({type:"string",description:"Date the sample was released in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:n({type:"array",description:"Noteworthy achievements and/or highlights for this sample.",items:n({type:"string",description:"For ex, 'Implemented optimized search algorithm derived from Slices of Pi'."})}),keywords:n({type:"array",description:"Keywords associated with this work sample.",items:n({type:"string",description:"For example, C++, HTML, game."})})}})}),references:n({type:"array",description:"The 'references' section describes the candidate's personal, professional, and/or technical references.",items:n({type:"object",additionalProperties:v,required:["name"],properties:{name:n({type:"string",description:"The full name of the person giving the reference."}),role:n({type:"string",description:"The occupation of this reference, or his or her relationship to the candidate."}),category:n({type:"string",description:"The type of reference, eg, professional, technical, or personal."}),private:n({type:"boolean",description:"Is this a private reference?"}),summary:n({type:"string",description:"Optional summary information for this reference."}),contact:n({type:"array",items:n({type:"object",additionalProperties:v,properties:{label:n({type:"string",description:"Friendly label for this piece of contact info."}),category:n({type:"string",description:"Type of contact information (phone, email, web, etc.)."}),value:n({type:"string",description:"The email address, phone number, etc."})}})})}})}),testimonials:n({type:"array",description:"The 'testimonials' section contains public testimonials of the candidate's professionalism and character.",items:n({type:"object",additionalProperties:v,required:["name","quote"],properties:{name:n({type:"string",description:"The full name of the person giving the reference."}),quote:n({type:"string",description:"A quoted reference, eg, 'Susan was an excellent team leader, manager, and operations specialist with a great eye for detail. I'd gladly hire her again if I could!'"}),category:n({type:"string",description:"Type of reference: personal, professional, or technical."}),private:n({type:"boolean",description:"Public reference (testimonial) or via private contact?"})}})}),interests:n({type:"array",description:"The 'interests' section provides a sampling of the candidate's interests and enthusiasms outside of work.",items:n({type:"object",additionalProperties:v,required:["name"],properties:{name:n({type:"string",description:"The name or title of the interest or hobby."}),summary:n({type:"string"}),keywords:n({type:"array",description:"Keywords associated with this interest.",items:n({type:"string",description:"A keyword relating to this interest."})})}})}),extracurricular:n({type:"array",description:"The 'extracurricular' section describes the candidate's involvement with industry-related events and enterprises outside of work. For example: attending conferences, workshops, or meetups.",items:n({type:"object",additionalProperties:v,required:["title","activity"],properties:{title:n({type:"string",description:"Title of the extracurricular activity."}),activity:n({type:"string",description:"The extracurricular activity."}),location:n({type:"string",description:"City, state, or other freeform location."}),start:n({type:"string",description:"Start date.",format:"date"}),end:n({type:"string",description:"End date.",format:"date"})}})}),affiliation:n({type:"object",additionalProperties:v,description:"The 'affiliation' section describes the candidate's membership in groups, clubs, organizations, and professional associations whether at the collegiate, corporate, or personal level.",properties:{summary:n({type:"string",description:"Optional summary of overall affiliation and membership experience."}),history:n({type:"array",items:n({type:"object",additionalProperties:v,required:["organization"],properties:{category:n({type:"string",description:"The type of affiliation: club, union, meetup, etc."}),organization:n({type:"string",description:"The name of the organization or group."}),role:n({type:"string",description:"Your role in the organization or group."}),url:n({type:"string",description:"Organization website.",format:"uri"}),start:n({type:"string",description:"Date your affiliation with the organization began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:n({type:"string",description:"Date your affiliation with the organization ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:n({type:"string",description:"A summary of your achievements and responsibilities during this affiliation."}),highlights:n({type:"array",description:"Noteworthy achievements and/or highlights.",items:n({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:n({type:"array",description:"Keywords associated with this affiliation.",items:n({type:"string",description:"For example, C++, CRM, HIPAA."})}),location:n({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}})}});var Y;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(Y||(Y={}));var O;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator",e.DEVELOPER="Developer"})(O||(O={}));const Po=[{title:"Astro",category:Y.OPEN_SOURCE,description:`
      "Build faster websites with less client-side Javascript"
    `,summary:`
      Collaborate with core contributors to add support for rendering
      [SolidJS](https://www.solidjs.com/) components.
    `,repo:"https://github.com/snowpackjs/astro",role:O.CONTRIBUTOR,start:"2021-07"},{title:"Enketo",category:Y.OPEN_SOURCE,description:`
      "Web forms evolved. Deploy and conduct surveys that work without a
      connection, on any device."
    `,summary:`
      Ongoing maintenance, developer experience improvements & helping
      determine the future direction of Enketo projects.
    `,repo:"https://github.com/enketo",role:O.DEVELOPER,start:"2021-04"},{title:"Eyelidlessness",category:Y.PUBLIC_ACCESS,description:`
      My personal website and tech blog.
    `,summary:`
      Built with [Preact][1], [Microsite][2] and [Fela][3].

      [1]: https://preactjs.com/
      [2]: https://github.com/natemoo-re/microsite
      [3]: https://fela.js.org/
    `,repo:"https://github.com/eyelidlessness/eyelidlessness.github.io",role:O.CREATOR,start:"2020-10"},{title:"Microsite",category:Y.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:O.CONTRIBUTOR,start:"2021-01"},{title:"HNDarkMode",category:Y.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:O.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:Y.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:O.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:Y.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:O.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:Y.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:O.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:Y.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:O.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:Y.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:O.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:Y.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:O.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:Y.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:O.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:Y.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:O.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:Y.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:O.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:Y.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:O.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:Y.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:O.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:Y.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:O.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:Y.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:O.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:Y.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:O.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:Y.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:O.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:Y.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:O.CONTRIBUTOR,start:"2015-01",end:"2015-01"}],Mr=e=>e,Ir=[{employer:"Treez",position:"Senior Software Engineer",start:"2018-12",end:"2020-09",summary:`
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
      `]}],Or=Ir;var A;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(A||(A={}));var Ke;(function(e){e.LANGUAGES_PLATFORMS="Languages & Platforms",e.SERVICES_DISTRIBUTED_SYSTEMS="Services & Distributed Systems",e.USER_INTERFACE_EXPERIENCE="User Interface & Experience"})(Ke||(Ke={}));const Ot={[Ke.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:A.EXPERT},{name:"OpenAPI & JSON Schema",level:A.EXPERT},{name:"Django REST framework",level:A.ADVANCED},{name:"Fault tolerance",level:A.ADVANCED},{name:"Microservice architecture",level:A.ADVANCED},{name:"Apache Storm",level:A.INTERMEDIATE},{name:"Redis",level:A.BASIC}],[Ke.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:A.EXPERT},{name:"DOM & Web APIs",level:A.EXPERT},{name:"Web performance",level:A.ADVANCED},{name:"SVG",level:A.ADVANCED},{name:"UI & UX design",level:A.ADVANCED},{name:"A11y",level:A.INTERMEDIATE}],[Ke.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:A.EXPERT},{name:"Clojure & ClojureScript",level:A.EXPERT},{name:"HTML & CSS",level:A.EXPERT},{name:"SQL (PostgreSQL)",level:A.ADVANCED},{name:"Python",level:A.INTERMEDIATE},{name:"Swift",level:A.BASIC},{name:"Java",level:A.BASIC}]},jr={list:Object.values(Ot).flatMap(at),merged:Ot,sets:Object.entries(Ot).map(([e,o])=>({name:e,skills:o.map(({name:r})=>r)}))},nl=Mr({name:"Trevor Schmidt",meta:{format:wo,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:Or},info:{class:"Software Engineer",brief:fo(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:Po,skills:jr,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),dt=Symbol("DEFAULT_TOPIC"),H={[dt]:dt,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},Rr=e=>typeof e=="string"||typeof e=="symbol",Co=e=>Rr(e)&&e in H,jt=e=>Co(e)?H[e]:e,ko=Object.entries(H).reduce((e,o)=>{const[r,i]=o;return typeof r=="string"?{...e,[i]:r}:e},{}),Yr=e=>Co(e)?e:ko[e],Lr=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),$r=Object.fromEntries(Object.entries(ko).map(([e,o])=>typeof o=="string"?[e,Lr(o)]:null).filter(e=>e!=null)),Hr=e=>{const o=jt(e);if(typeof o=="string")return $r[o]},pt=2,Rt={minEm:1.0625,fluidVw:1.0625*pt,maxEm:1.25},M="@media (prefers-color-scheme: dark)",Br=["h1","h2","h3","h4","h5","h6"],Nr=["dd","dl","dt","li","ol","ul"],Dr=[...Br,...Nr,"p"],_e=Rt.minEm/Rt.maxEm,Se={h1:1.953,h2:1.563,h3:1.25},_r={h1:{minEm:Se.h1*_e,fluidVw:Se.h1*_e*pt,maxEm:Se.h1},h2:{minEm:Se.h2*_e,fluidVw:Se.h2*_e*pt,maxEm:Se.h2},h3:{minEm:Se.h3*_e,fluidVw:Se.h3*_e*pt,maxEm:Se.h3}},To=75,mt=1.25,zr=["0.7fr",`${mt}rem`,[`${To}ch`,`calc(100% - ${mt*2}rem)`],`${mt}rem`,"1.2fr"],Yt=1,Xr=["0.7fr",`${Yt}rem`,[`${To*1.1875}ch`,`calc(100% - ${Yt*2}rem)`],`${Yt}rem`,"1.2fr"],Fr=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],Lt=Fr.join(", "),Gr=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Ur=Gr.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),Q={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},Wr="hover-inherit-topic-color",qr={[H[dt]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.DEFAULT_TOPIC.light},[M]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.DEFAULT_TOPIC.dark}}}}},[H.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.ABLEISM}}},[H.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.ARTS_CRAFTS}}},[H.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.LEMON}}},[H.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.MENTAL_ILLNESS}}},[H.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.NEURODIVERGENCE}}},[H.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.PHILOSOPHY}}},[H.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.POLITICS}}},[H.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.RACISM}}},[H.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.SEXISM}}},[H.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.SUBSTANCE_ABUSE}}},[H.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.TECHNOLOGY}}},[H.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:Q.TRANSPHOBIA}}}},Eo=ce(),c={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:Wr,baseFontSizeRange:Rt,darkMode:M,abbreviation:{backgroundImage:`linear-gradient(${["to top","hsl(64deg, 100%, 50%, 0.25)","hsl(64deg, 100%, 50%, 0.25) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[M]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[M]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:Eo,description:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em",nested:{[M]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${Eo}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[M]:{color:"hsl(212deg, 10%, 90%)"}}},[M]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[M]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[M]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:Lt},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:Lt,nested:{[M]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:Dr,gitHubLogo:{fill:"#171515",nested:{[M]:{fill:"#fff"}}},headingRanges:_r,[M]:{aside:{backgroundColor:"hsl(192deg, 15%, 13%)"},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(210deg, 10%, 90%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 85%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:zr,mainGridSidePaddingRem:mt,monospaceFont:Lt,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[M]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:Ur},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[M]:{backgroundColor:"hsl(336deg, 100%, 7%)"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[M]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"hsl(47deg, 58%, 98%)",nested:{[M]:{backgroundColor:"hsl(41deg, 100%, 8%)"}}},separator:{borderBottom:"1px solid hsl(17deg, 78%, 90%)",nested:{[M]:{borderColor:"hsl(17deg, 70%, 17%)"}}}},skillLevel:{[A.BASIC]:{backgroundColor:"hsl(207deg, 25%, 83%)",nested:{[M]:{backgroundColor:"hsl(207deg, 15%, 43%)"}}},[A.INTERMEDIATE]:{backgroundColor:"hsl(188deg, 53%, 74%)",nested:{[M]:{backgroundColor:"hsl(188deg, 53%, 34%)"}}},[A.ADVANCED]:{backgroundColor:"hsl(188deg, 70%, 59%)",nested:{[M]:{backgroundColor:"hsl(188deg, 80%, 39%)"}}},[A.EXPERT]:{backgroundColor:"hsl(152deg, 100%, 39%)",nested:{[M]:{backgroundColor:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:Xr,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[M]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[M]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:qr,topicTagIdentifier:ce(),topicTagInner:{backgroundImage:Be(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[M]:{backgroundImage:Be(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:Be(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[M]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:Be(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[M]:{color:"hsl(194deg, 8%, 50%)"}}}}}},$t=["b","em","h1","h2","h3","i","strong"],ht=["h1","h2","h3","h4","h5","h6"],Vr=[...ht,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Kr=Array.from(new Set([...ht,...Vr,"div","fieldset","form","hgroup","hr","pre"])),Jr=Be(`
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
    font-size:        ${je(`${c.baseFontSizeRange.minEm}em`,`${c.baseFontSizeRange.fluidVw}vw`,`${c.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${_(["html","body"],{...c.document})}

  ${_(["body"],{...c.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${ht.join(",")} {
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
`),Zr=()=>{lt.global(Be(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${Kr.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${ht.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${_($t,c.emphasize)}

      h1 {
        font-size: ${je(`${c.headingRanges.h1.minEm}em`,`${c.headingRanges.h1.fluidVw}vw`,`${c.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${je(`${c.headingRanges.h2.minEm}em`,`${c.headingRanges.h2.fluidVw}vw`,`${c.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${je(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,`${c.headingRanges.h3.maxEm}em`)};
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

      ${_(["hr:after"],{...c.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${_(["pre"],c.pre)}

      ${_(["code"],{...c.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

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

      ${_(["a"],{...c.links,fontWeight:"bolder"})}

      ${_(["abbr"],{...c.abbreviation,textDecoration:"none"})}

      ${_(["aside","small"],c.deemphasize)}

      ${_(["aside"],{...c.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem","& p":{lineHeight:1.3333}})}

      ${$t.map(e=>`aside ${e}`).join(", ")} {
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
        ${_(["html","body"],{...c[c.darkMode].document})}

        ${_(["body"],{...c[c.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${_($t,c[c.darkMode].emphasize)}
        ${_(["pre"],c[c.darkMode].pre)}
        ${_(["code"],c[c.darkMode].code)}
        ${_(["a"],c[c.darkMode].links)}
        ${_(["aside","small"],c[c.darkMode].deemphasize)}
        ${_(["aside"],c[c.darkMode].aside)}
        ${_(["hr:after"],c[c.darkMode].separator)}
      }
    `))},Qr=`
  ${c.mainGridColumns[0]}
  ${c.mainGridColumns[1]}
  min(
    ${c.mainGridColumns[2][0]},
    ${c.mainGridColumns[2][1]}
  )
  ${c.mainGridColumns[3]}
  ${c.mainGridColumns[4]}
`.replace(/\s+/g," "),Ao={gridColumn:"1 / -1"},Mo=lt(Ao),U=d("div",{nested:{[`& > .${Mo}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:Qr,...Ao}),ei=({children:e,shadow:o,...r})=>t(U,{...r},e),Io=([e,o,r])=>`rgba(${[e,o,r,0].join(",")})`,Oo=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`${Io(o)} 2rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${Io(e)} 5px`].join(", ")})`].join(", ")}:null,ti=e=>{if(e!=null){const{darkMask:o,darkScroll:r,lightMask:i,lightScroll:s}=e;return{dark:Oo(r,o),light:Oo(s,i)}}return{dark:null,light:null}},jo=d(ei,({shadow:e})=>{const{dark:o,light:r}=ti(e),i=o==null?null:{[c.darkMode]:o};return{...r,backgroundAttachment:"local, scroll",backgroundPosition:"100% 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:"1rem, auto",paddingRight:c.mainGridSidePaddingRem,overflowX:"auto",nested:{...i,"& > *":{gridColumn:"3 / -1"}}}}),oi=d(U,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Ro=d("div",{paddingLeft:"1rem"}),ni=d("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),ri=d("div",{flexGrow:1,padding:"1rem 0.75rem"}),Ht="div",ii={ContentContainer:Ht,InnerContainer:Ro,OuterContainer:Ht,SymbolContainer:Ht},Yo=e=>{const{children:o,ContentContainer:r,InnerContainer:i,OuterContainer:s,outerContainerProps:a,symbol:l,SymbolContainer:p}={...ii,...e};return t(oi,{as:s,...a},t(ni,{as:p,role:"presentation"},l),t(Ro,{as:i},t(ri,{as:r},o)))},si=d("pre",{fontSize:"1rem"}),ai=d(jo,{backgroundAttachment:"local",backgroundImage:`linear-gradient(${["to left","rgba(255,255,255,1)","rgba(255,255,255,1) 5rem","rgba(255,255,255,0) 6rem"].join(",")})`,backgroundPosition:"calc(100% + 4rem) 0",backgroundRepeat:"no-repeat",backgroundSize:"6rem",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[c.darkMode]:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,1)","rgba(0,0,0,1) 5rem","rgba(0,0,0,0) 6rem"].join(",")})`}}}),ci=e=>t(ai,{...e}),li=d(U,{...c.pre,backgroundImage:`linear-gradient(${["to left","rgba(124, 128, 131, 0.75)","rgba(124, 128, 131, 0.75) 0.5px","rgba(124, 128, 131, 0)    5px"].join(",")})`,nested:{[c.darkMode]:{...c[c.darkMode].pre,backgroundImage:`linear-gradient(${["to left","rgba(230, 179, 213, 0.75)","rgba(230, 179, 213, 0.75) 0.5px","rgba(230, 179, 213, 0)    5px"].join(",")})`},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),di=d("div",{...c.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),pi=({children:e})=>t(Yo,{ContentContainer:si,InnerContainer:ci,OuterContainer:li,symbol:"{",SymbolContainer:di},e),mi=e=>e.map((o,r)=>r),gt=(e,o)=>mi(e).sort((r,i)=>{const s=o(e[r],e[i]);return s===0?r===i?0:r>i?1:-1:s}).map(r=>e[r]),hi=e=>typeof e=="object"&&e!=null,gi=d("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),ui=(e,o)=>hi(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&Dn().test(o),fi=({["aria-label"]:e,children:o,role:r})=>t(gi,{"aria-label":e,role:r},o),yi={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},bi={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},Si={...yi,...bi},Lo=Oe.resolve(process.cwd(),"./syntax-themes"),[vi,xi]=await Promise.all([yo(Oe.resolve(Lo,"./yi-dark.json")),yo(Oe.resolve(Lo,"./yi-light.json"))]),wi={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},Pi={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},Ci=e=>e.trim().split(/\b\W*\b/).reduce((o,r)=>({...o,...Pi[r]}),{}),ki=e=>Object.entries(e).reduce((o,[r,i])=>{const s=wi[r];if(i==null||typeof s!="string")return o;const a=s==="fontStyle"?Ci(i):{[s]:i};return{...o,...a}},{}),[Ti,Ei]=await Promise.all([bo({theme:vi}),bo({theme:xi})]),Ai=new Set(ar.map(e=>e.id)),Mi=new Set(["ts","tsx","typescript"]),$o=e=>e.explanation?.reduce((o,r)=>({...o,...r.scopes.reduce((i,{themeMatches:s})=>({...i,...s.reduce((a,{settings:l})=>({...a,...ki(l)}),i)}),o)}),{color:e.color}),Ii=(e,o,r={})=>{const i=$o(e),s=$o(o),a=s==null?null:{nested:{[c.darkMode]:s}},{content:l}=e;if(i==null&&a==null)return t("span",r,l);const p={...i,...a},m=d("span",p);return t(m,r,l)},Oi=lt({paddingRight:"1rem"}),ji={className:Oi},Ri=(e,o)=>mo(t(De,{},t("pre",{},t("code",{},...e.reduce((r,i,s)=>{const a=i.map((p,m)=>{const h=o[s][m],y=m===i.length-1?ji:{};return Ii(p,h,y)}),l=s===0?"":`
`;return[...r,l,...a]},[]))))),Yi=e=>{const{lang:o,value:r,meta:i}=e,s=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,a=String(o)==="json5"?"json":o;let l;const p=r.replace(/^\n+|\n+$/g,"");if(!Ai.has(a))l=cr.plainTextRenderer(p,{});else{const m=Ei.codeToThemedTokens(p,a),h=Ti.codeToThemedTokens(p,a);l=Ri(m,h)}Mi.has(a)&&!i?.includes("ignore"),e.children=[],e.type="html",e.value=l},Li=()=>o=>{co(o,"code",Yi)};import.meta.env=st;const Je=po.createRequire(import.meta.url),$i=Je("rehype-parse"),Hi=Je("rehype-remark"),Bi=Je("remark"),Ni=Je("remark-abbr"),Di=Je("remark-stringify"),_i=({className:e,children:o,...r})=>e==="language-id"?null:e==="code-container"?rt(R,r,...lo(o)):t("div",{className:e,...r},...lo(o)),zi=({children:e,...o})=>ui(o,e)?t(fi,o,e):t("span",o,e),Bt={components:{div:_i,pre:pi,span:zi},rehypePlugins:[_n],remarkPlugins:[Li,Ni,hr,zn,Xn]},Xi=e=>{const{children:o=rt(()=>null,{}),components:r={},rehypePlugins:i=[],remarkPlugins:s=[]}=e,a={...Bt.components,...r},l={mdx:rt,MDXProvider:nr,components:a,props:{}},p=typeof o=="string"?fo(o).trim():o,m=[...Bt.rehypePlugins,...i],h=[...Bt.remarkPlugins,...s],y=or.sync(p,{rehypePlugins:m,remarkPlugins:h,skipExport:!0}).trim(),{code:g}=rr(y,{objectAssign:"Object.assign"}),u=Object.keys(l),P=Object.values(l),b=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...u,`${g}

${b}`)(rt,...P)},Fi=Object.entries(Si).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),Gi=e=>[e,Fi].join(`

`),Ho=([e,...o],{includeAbbreviations:r=!0})=>{const i=typeof e=="string"?[e,...o].join(""):String.raw(e,...o);return r?Gi(i):i},Ze=(...e)=>{const o=Ho(e,{includeAbbreviations:!0});return t(De,{},t(Xi,{},o))},Ui=(...e)=>{const o=Ho(e,{includeAbbreviations:!1});return Bi().use($i).use(Hi).use(Di).use(ir).use(sr).processSync(o).contents.toString().trim()},ve=(e,o)=>Number(e.toFixed(o)),xe=parseInt("ff",16),Bo=parseInt("00",16),No=.05,Do=.15,_o=.05;class Qe extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const Wi=/^[0-9a-f]{40}$/i,qi=e=>Wi.test(e),Vi=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),Ki=e=>e.length===10,Ji=/([0-9a-f]{2})([0-9a-f]{2})/ig,Nt=e=>{if(!qi(e))throw new Qe(e);const r=Array.from(e.matchAll(Ji)??[]).map(([i,s,a])=>({x:s,y:a}));if(!Ki(r))throw new Qe(e);return r},Zi=Symbol("IS_POINT"),Qi=e=>Object.assign(e,{[Zi]:!0}),zo=e=>{const o=parseInt(e,16);if(o>xe||o<Bo)throw new Error(`Not a valid coordinate: ${e}`);return Qi(o)},es=({x:e,y:o})=>({x:zo(e),y:zo(o)}),ts=e=>e.length===10,Dt=(e,o)=>{try{const r=o.map(es);if(!ts(r))throw new Qe(e);return r}catch{throw new Qe(e)}},os=Symbol("SCALED_COORDINATE"),Xo=e=>e.reduce(({max:o,min:r},{y:i})=>({max:Math.max(Number(o),Number(i)),min:Math.min(Number(r),Number(i))}),{max:-Infinity,min:Infinity}),re=(e,o)=>Object.assign(ve(e,2),{[os]:o}),ze=({x:e,xScale:o,y:r,yScale:i})=>({x:re(e,o),y:re(r,i)}),ut=({x:e,y:o},{xScale:r,xShift:i,yScale:s,yShift:a})=>ze({x:(e+i)*r,xScale:r,y:(o+a)*s,yScale:s}),_t=({points:e,xMax:o,xScale:r,yScale:i})=>[ze({x:0,xScale:r,y:0,yScale:i}),...e,ze({x:o,xScale:r,y:0,yScale:i})].reduce((s,a,l,p)=>{if(l===0||l===p.length-1)return s;const m=re(0,i),h=[{x:p[l-1].x,y:m},a,{x:p[l+1].x,y:m}];return[...s,h]},[]),zt=({segments:e,xMax:o,xScale:r,yScale:i})=>e.map(s=>{const[{x:a,y:l},{x:p,y:m},{x:h,y}]=s,g=h-a,u=m/g,b=6/u;if(b<1){const C=b*.2*a,k=a-C,X=h+C,B=k<0?Math.abs(k):X>o?o-X:0,E=k+B,F=X+B,x=b*.3,W=p+B,K=x*m,ee=m-K;return[ze({x:E,xScale:r,y:l,yScale:i}),ze({x:W,xScale:r,y:ee,yScale:i}),ze({x:F,xScale:r,y,yScale:i})]}return s}),ns=({x:e,y:o},{x:r,y:i})=>{const s=r-e,a=i-o;return{angle:Math.atan2(a,s),length:Math.sqrt(s**2+a**2)}},Fo=({current:e,previous:o,next:r,reverse:i,smoothing:s,xScale:a,yScale:l})=>{const p=i?Math.PI:0,m=ns(o,r),h=m.angle+p,y=m.length*s,{x:g,y:u}=e,P=g+Math.cos(h)*y,b=u+Math.sin(h)*y;return{x:re(P,a),y:re(b,l)}},Go=({index:e,point:o,points:r,smoothing:i,xScale:s,yScale:a})=>{const l=r[e-1];if(l==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const p=r[e-2]??l,m=Fo({current:l,previous:p,next:o,reverse:!1,smoothing:i,xScale:s,yScale:a}),h=l,y=r[e+1]??o,g=Fo({current:o,previous:h,next:y,reverse:!0,smoothing:i,xScale:s,yScale:a});return[m,g,o]},Uo=({segment:e,smoothing:o,xScale:r,yScale:i})=>e.reduce((s,a,l)=>{if(l===0)return s;const m=Go({index:l,point:a,points:e,smoothing:o,xScale:r,yScale:i}).map(h=>`${h.x},${h.y}`).join(" ");return[...s,`C ${m}`]},[]),rs=({baseYCoordinate:e,isBaselineBelowMidpoint:o,segments:r,xScale:i,yMax:s,yScale:a,yTilt:l=!1})=>r.reduce((p,m,h,y)=>{const{length:g}=y,[u,P,b]=m,{x:f,y:C}=u,{x:k,y:X}=P,{x:B,y:E}=b,F=B-f,x=F===0?0:Math.max(X/F*_o,Do),W=l?.1:0,K=1-W,ee=1+W,G=h%2==0?K:ee,fe=o?C+e:s-C+e,se={x:f,y:re(fe*G,a)},ye=h%2==0?K:ee,Ee=o?E+e:s-E+e,le={x:re(B,i),y:re(Ee*ye,a)},de=k-f,pe=B-k,me=pe>de?0:0-(k-f)*No,z=(g-h)*(a/100*s),L={x:re(k+me,i),y:re(X-z,a)},Ae=Uo({segment:[se,L,le],smoothing:x,xScale:i,yScale:a}),Me=pe>de?(B-k)*No:0,Pe={x:re(k+Me,i),y:re(s-z,a)},te=Uo({segment:[le,Pe,se],smoothing:x,xScale:i,yScale:a});return[...p,[`M ${se.x},${se.y}`,...Ae,...te,"Z"].join(" ")]},[]),is=({hash:e,xPadding:o=0,xScale:r=1,yOffset:i=.5,yPadding:s=0,yScale:a=1})=>{const l=Nt(e),p=Dt(e,l),m=gt(p,({x:E},{x:F})=>Number(E)===Number(F)?0:Number(E)>Number(F)?1:-1),h=o/2,y=s/2,g=m.map(E=>ut(E,{xScale:r,xShift:h,yScale:a,yShift:y})),u=(xe+o)*r,{max:P}=Xo(g),b=(P+s)*a,f=_t({points:g,xMax:u,xScale:r,yScale:a}),C=zt({segments:f,xMax:u,xScale:r,yScale:a}),k=i>.5,X=k?b*i:-1*b*i;return{segmentPaths:rs({baseYCoordinate:X,segments:C,xScale:r,yMax:b,isBaselineBelowMidpoint:k,yScale:a}),xMax:u,yMax:b}};var Xt;(function(e){e.PNG="png"})(Xt||(Xt={}));const Ft=process.cwd(),et=e=>e.startsWith("/")?Oe.resolve(Ft,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):Oe.extname(e)==""?Oe.resolve(Ft,"./src/pages/",`${e}.tsx`):e;var Xe;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(Xe||(Xe={}));var Re;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(Re||(Re={}));const ss="origin",as="main",tt=e=>{const{branch:o=as,decode:r,filter:i=Xe.FIRST,format:s,path:a=Ft,remote:l=ss}=e,{error:p,stdout:m}=lr.spawnSync("git",["log",...i.split(" "),`--branches=${o}`,`--format=${s}`,`--remotes=${l}`,"--",a]);if(p)throw p;const h=m.toString().trim();return(h===""?[]:h.split(`
`)).map(r)},Gt=e=>{const o=new Date(e);if(!isNaN(o.getTime()))return o},cs=e=>{const o=et(e),[r=null]=tt({decode:Gt,filter:Xe.CURRENT,format:Re.ISO_DATE,path:o});return r},ls=e=>{const o=et(e),[r=null]=tt({decode:Gt,format:Re.ISO_DATE,path:o});return r},ds=e=>{const o=et(e),[r=null]=tt({decode:Gt,filter:Xe.FIRST_MERGE,format:Re.ISO_DATE,path:o});return r},Ut=e=>{const o=Mt.readFileSync(e).toString();let r=dr.createHash("sha1");return r.update(o),r.digest("hex")},ps=e=>{const o=et(e),[r]=tt({decode:at,format:Re.HASH,path:o});return r??Ut(o)},ms=e=>{const o=et(e),[r]=tt({decode:at,filter:Xe.FIRST_MERGE,format:Re.HASH,path:o});return r??Ut(o)},hs={height:630,width:1200},gs=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",us=So({alg:"sha1",coerce:!0,sort:!0,trim:!0}),fs=(e,o,r=Xt.PNG,i=hs)=>{const s=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=us.hash(o),l=Oe.resolve(s,`${a}.${r}`),p=l.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:l,imageType:r,publicPath:p,...i}}};var Ye;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(Ye||(Ye={}));const Wo=(e,o,r,i,s=[H.TECHNOLOGY])=>{const a=i===Ye.MUTABLE,l=i===Ye.IMMUTABLE_MERGE,p=o.replace(/^file:(\/\/)?/,""),m=a?Ut(p):l?ms(e):ps(e),h={created:(l?ds(e):ls(e))??Mt.statSync(p).ctime,updated:cs(e)??Mt.statSync(p).mtime},g=fs(o,a?{importURL:o,stat:h,topics:s}:{hash:m,importURL:o});return{hash:m,host:gs,path:e,social:g,stat:h,title:r,topics:s}},qo=()=>t(R,null,t("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),t("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),t("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),t("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),t("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),ys=()=>t("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},t("defs",null,t(qo,null))),bs=1.6180334,Ss=4,Vo=ve(bs*5,6),Ko=.75,Fe=.15,vs=1.5,ot=je("6rem",`${100/Vo}vw`,"10rem"),xs=d(U,{height:ot,position:"relative",width:"100%"}),ws=d("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Ps=d("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var nt;(function(e){e.INLINE="inline",e.NONE="none"})(nt||(nt={}));const Wt={xPadding:Ss,xScale:Vo,yOffset:Ko,yPadding:Fe,yScale:vs},ft=e=>{const{className:o,defsUsage:r=nt.INLINE,hash:i,height:s,rawSVG:a=!1,styleRenderer:l=Ne,title:p,topics:m=[],width:h}=e,y=m.length<2?[...m,H[dt]]:m,g=E=>`${E}-${i}`,{segmentPaths:u,xMax:P,yMax:b}=is({...Wt,hash:i}),f=b*Ko,C=b*Fe/10.24,k=C*.75,B=t(ws,{className:Mo,height:s,preserveAspectRatio:"none",viewBox:[0,0,P,b].join(" "),width:h},t("title",null,"Generated art for the page or post titled",t("i",null,p),", with the content or commit hash ",i," ",y.length>0?[", and the topics: ",y.map(String).join(", ")]:null),t("defs",null,r===nt.INLINE?t(qo,null):null,t("filter",{id:g("blur")},t("feOffset",{in:"SourceGraphic",dx:"0",dy:k,result:"glowOffsetOut"}),t("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:C,result:"glowBlurOut"}),t("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),t("clipPath",{id:g("blurOverlayClip")},t("rect",{x:"0",width:P,y:f,height:b})),t("filter",{id:g("blurOverlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:k}),t("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:C})),t("filter",{id:g("blurUnderlay")},t("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:k}),t("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:C}),t("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),t("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),t("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),t("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:C})),t("g",{id:g("blobs")},u.map((E,F)=>{const x=F%y.length,W=y[x],K=l.renderRule(()=>({...c.topicColors[W]}),Object.keys);return t(Ps,{key:E,className:K,d:E,mask:"url(#softVerticalFade)"})}))),t("g",{transform:[`translate(0, ${b*Fe})`,`scale(1, ${1-Fe*2})`].join(" "),filter:`url(#${g("blur")})`},t("use",{href:`#${g("blobs")}`,mask:"url(#horizontalMidFade)"})),t("g",{"clip-path":`url(#${g("blurOverlayClip")})`,filter:`url(#${g("blurOverlay")})`,transform:[`translate(0, ${b*Fe})`,`scale(1, ${1-Fe*2})`].join(" ")},t("use",{href:`#${g("blobs")}`,mask:"url(#softVerticalFade)"})));return a?B:t(xs,{className:o},B)},Cs=[,"January","February","March","April","May","June","July","August","September","October","November","December"],ks=d("time",{nested:{[c.darkMode]:{...c[c.darkMode].deemphasize}},...c.deemphasize});var we;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(we||(we={}));const qt=({date:e,mode:o=we.DEFAULT,...r})=>{const i=e.getMonth()+1,s=e.getFullYear(),a=o===we.SHORT?`${i}/${s}`:o===we.META?"":[e.getDate(),Cs[i],s].join(" ");return t(ks,{...r,datetime:e.toISOString()},a)},Ts=d("a",{...c.topicTagLink(c.topicTagIdentifier.className)}),Es=d("span",c.topicTagIdentifier()),As=d(Es,{...c.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),Ms=({className:e,link:o=!0,topic:r})=>{const i=Hr(r),s=jt(r);if(i==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=o?Ts:"span",l=o?{href:`/blog/topics/${i}/`}:{};return t(a,{className:[e,c.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...l},t(As,null,s))},Jo=d(Ms,e=>({...c.topicTagOuter,...c.topicColors[jt(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),Is=d("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),Os=d("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),Zo=({className:e,link:o=!0,topics:r})=>t(Is,{className:e},r.map(i=>typeof i=="string"?t(Os,{key:Yr(i)},t(Jo,{link:o,topic:i})):null)),js=e=>e.reduce((o,r)=>{const i=r.stat.created.getFullYear(),s=o[i]??[];return{...o,[i]:[...s,r]}},{}),Rs=d(U,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),Ys=d(U,{...c.blog.listing.item,minHeight:ot,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),Ls=d(U,{paddingTop:`calc(${ot} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),$s=d(U,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),Hs=d("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),Bs=lt({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),Ns=d("h2",{...c.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),Ds=d(qt,{padding:"0 0.5rem 0.125rem 0"}),_s=d(Zo,{gridColumn:"3 / 3"}),zs=d("div",{...c.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),Xs=d("a",{fontSize:"0.875em"});var yt;(function(e){e.DATE="date"})(yt||(yt={}));var bt;(function(e){e.ASC="asc",e.DESC="desc"})(bt||(bt={}));const Fs=({order:e=bt.DESC,posts:o,sort:r=yt.DATE})=>{const i=o.slice().sort((a,l)=>e===bt.DESC&&r===yt.DATE?a.stat.created>l.stat.created?-1:1:0),s=js(i);return t(R,null,Object.entries(s).map(([a,l])=>t(R,{key:a},t(Rs,null,l.map(p=>{const{CustomArt:m=ft,description:h,hash:y,path:g,stat:{created:u},title:P,topics:b}=p;return t(Ys,{key:g},t(Ls,{as:"a",href:g},t(Hs,null,t(m,{defsUsage:nt.NONE,hash:y,padded:!0,renderType:"listing",title:P,topics:b})),t($s,null,t(Ns,{className:Bs},P),t(Ds,{date:u}))),t(_s,{link:!1,topics:b}),t(zs,{className:c.blog.listing.descriptionIdentifier},h),t("p",null,t(Xs,{href:g},"Read more\u2026")))})))))},Gs=()=>t(R,null,t("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),t("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),t("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),t("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),t("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),t("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),t("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),t("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),t("meta",{name:"application-name",content:"Eyelidlessness"}),t("meta",{name:"msapplication-TileColor",content:"#555555"}),t("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),t("meta",{name:"theme-color",content:"#ffffff"}));Zr();const Qo=({children:e,meta:{description:o,host:r,redirect:i,social:{image:s},title:a},...l})=>i?t(vo,{...l},t(it.title,null,"Redirecting to ",i),t("meta",{"http-equiv":"refresh",content:`0; URL=${i}`}),t("link",{rel:"canonical",href:i})):t(vo,{...l},t(it.title,null,a," | Eyelidlessness"),o!=null?t(it.description,null,o):t(R,null),t("meta",{name:"theme-color",content:c.siteLogo.color}),t("style",{dangerouslySetInnerHTML:{__html:Jr}}),t("meta",{name:"twitter:card",content:"summary_large_image"}),t("meta",{name:"twitter:site",content:"@eyelidlessenss"}),t(it.image,{alt:a,height:s.height,src:`${r}${s.publicPath}`,width:s.width}),t(R,null,e),t(Gs,null)),Us=({as:e="div",devilsBreakpoint:o,gap:r,...i})=>{const s=d(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[r?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:r?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return t(s,{...i})},Le=512,en=[0,0,Le,Le].join(" "),Ws=Le/2,qs=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),Vs=()=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:en,width:"0"},t("defs",null,t("mask",{id:"octocat-knockout"},t("rect",{fill:"#fff",height:Le,mask:"url(#octocat)",rx:Ws,width:Le}),t("path",{d:qs,fill:"#000"})))),Ks=d("rect",{...c.gitHubLogo}),tn=({className:e})=>t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:en},t("title",null,"GitHub"),t(Ks,{height:Le,mask:"url(#octocat-knockout)",width:Le})),St={height:60,width:338},Js=d("svg",{display:"inline-block",maxWidth:"100%",width:`${St.width}px`}),Zs=d("use",{nested:{[c.darkMode]:{...c[c.darkMode].siteLogo}},...c.siteLogo,fill:"currentcolor"}),Qs=`0 0 ${St.width} ${St.height}`,ea=()=>t(Js,{viewBox:Qs},t(Zs,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),t("title",null,"Eyelidlessness")),{columns:Ge}=c.siteHeader,ta=`
  ${Ge[0]}
  ${Ge[1]}
  min(
    ${Ge[2][0]},
    ${Ge[2][1]}
  )
  ${Ge[3]}
  ${Ge[4]}
`.replace(/\s+/g," "),oa=d("header",{...c.artOverlay,display:"grid",gridColumn:"1 / -1",gridTemplateColumns:ta,padding:"1rem 0",position:"relative",zIndex:1}),na=d("div",{gridColumn:3}),ra=d("div",{margin:"0 auto"}),ia=d("a",{textDecoration:"none"}),sa=d("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),on=1,aa=d("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${on/2}rem`,padding:0}),ca=d("a",{...c.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[c.darkMode]:{...c[c.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),nn="1.5em",rl=d(tn,{display:"block",width:`clamp(1.125em, 4vw, ${nn})`}),la=()=>{const e=[{label:"Blog",location:"/"},{label:"Projects",location:"/projects/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],o=e.reduce((s,a)=>typeof a.label=="string"?s+a.label.length:s,0),r={horizontal:"2rem"},i=`${[`${St.width}px`,r.horizontal,`${o+1}ch`,nn,`${e.length*on}rem`].join(" + ")}`;return t(oa,null,t(na,null,t(Us,{as:"nav",devilsBreakpoint:i,gap:r},t(ra,null,t(ia,{href:"/"},t(ea,null))),t(sa,null,e.map(({location:s,label:a})=>t(aa,null,t(ca,{href:s},a)))))))},da=d(U,{paddingTop:0,paddingBottom:"4em"}),rn=({redirect:e,...o})=>t(De,null,e==null?t(R,null,t(la,null),t(da,{as:"main",...o})):t(R,null)),pa=d(U,{...c.description,nested:{...c.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),ma=d("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),ha=d("div",{fontSize:"0.889em"}),ga=({as:e="section",title:o,...r})=>t(pa,{as:e,itemprop:"description"},o?t(ma,null,o):null,t(ha,{...r})),ua=d(U,{...c.artOverlay}),fa=d("h1",{marginBottom:"0.25rem"}),ya=d(U,{marginBottom:"1rem"}),sn=e=>{const{children:o,CustomArt:r,description:i,descriptionRaw:s,hash:a,redirect:l,stat:{created:p},title:m,topics:h}=e;return t(R,null,t(Qo,{meta:{...e,description:s}}),t(rn,{as:"article",redirect:l},t(ya,null,r==null?t(ft,{hash:a,title:m,topics:h}):t(r,{hash:a,renderType:"post",StylesProvider:De,title:m,topics:h}),t(ua,null,t(fa,null,m),t(qt,{date:p,itemprop:"datePublished"}),t(Zo,{link:!1,topics:h}))),t(ga,null,i),o))},an={IMMUTABLE:Ye.IMMUTABLE,IMMUTABLE_MERGE:Ye.IMMUTABLE_MERGE},cn=async e=>{const{description:o,importURL:r,path:i,redirect:s,title:a,topics:l,type:p=an.IMMUTABLE_MERGE}=e,{CustomArt:m,hash:h,host:y,social:g,stat:u}=Wo(i,r,a,p,l),P=Ui`${mo(t(R,null,o))}`;return{CustomArt:m,description:o,descriptionRaw:P,hash:h,host:y,path:i,redirect:s,social:g,stat:u,title:a,topics:l}},ln=d("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),dn="@media (min-width: 41.666rem)",ba=d(ln,{display:"block",margin:0,nested:{[dn]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}}}}),Sa=d(ln,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),va=d(Sa,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),xa=d("h3",{paddingLeft:0,textIndent:0}),wa=d("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),Pa=/^(\d{4})-(\d{2})$/,pn=e=>{const o=e.match(Pa);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,r,i]=o;return new Date(`${r}-${i}-01T00:00:00`)},Vt=d("div",{fontSize:"0.88889em"}),vt=d(qt,{fontSize:"inherit"}),Ca=({range:[e,o]})=>{const r=pn(e);if(o==null)return t(Vt,null,"Since ",t(vt,{date:r,itemprop:"startDate",mode:we.SHORT}));const i=pn(o);return e==o?t(Vt,null,t(vt,{date:r,itemprop:"endDate",mode:we.SHORT})):t(Vt,null,t(vt,{date:r,itemprop:"startDate",mode:we.SHORT})," \u2013 ",t(vt,{date:i,itemprop:"endDate",mode:we.SHORT}))},ka=d("a",{display:"block",padding:"0 0.5rem 0.5rem 0.5rem",zIndex:1,nested:{"& svg":{width:"1.25em"},[dn]:{paddingLeft:0}}}),Ta=d("div",{paddingTop:"0.05556rem"}),Ea=d("div",{alignItems:"start",display:"grid",gridTemplateColumns:"auto 1fr",padding:"1rem 0"}),Aa=d("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),Kt=({project:{description:e,end:o,repo:r,role:i,title:s,start:a,summary:l}})=>t(Ea,null,t(ka,{href:r},t(Vs,null),t(tn,null)),t(Ta,null,t(va,null,t(xa,null,t(wa,{href:r},s)),t(Ca,{range:[a,o]})),t(Aa,null,i===O.CREATOR?Ze(e):null,Ze(l)))),Ma=d("div",{fontSize:"0.8889em",paddingLeft:"0.25rem"}),Ia=d("aside",{...c.aside,fontSize:"1rem",nested:{[c.darkMode]:{...c[c.darkMode].aside}}}),Oa=d("div",{...c.asideBlock.symbol,fontSize:je("2.2em","7vw","3em"),marginLeft:"-1.25rem",marginTop:"-1.25rem",transform:"rotate(-20deg)",nested:{...c.asideBlock.symbol.nested,[c.darkMode]:{...c.asideBlock.symbol.nested[c.darkMode],fontWeight:"bolder"}}}),mn=({children:e})=>t(Yo,{ContentContainer:Ma,OuterContainer:Ia,symbol:"#",SymbolContainer:Oa},e),ja=d("span",{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"});import.meta.env=st;const xt=(...e)=>["https://github.com/eyelidlessness/eyelidlessness.github.io",...e].join("/"),hn={blame:xt("blame/9216eb05cd375fccc7e9b06a98bb9c1b110a97d0/src/pages/blog/2021/02","what-the-art-p2-constraints/index.tsx#L111-L112"),artBoilerplate:xt("blob/main/src/lib/art/math.ts"),bezierCurves:"https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B%C3%A9zier_curves",gitBoilerplate:xt("blob/main/src/lib/git/log.ts"),goldenRatio:"https://en.wikipedia.org/wiki/Golden_ratio",microsite:"https://github.com/natemoo-re/microsite",originMain:xt("tree/main"),p1:"/blog/2021/02/what-the-art-p1-why/",p2:"/blog/2021/02/what-the-art-p2-constraints/",resume:"/resume/",sha1:"https://en.wikipedia.org/wiki/SHA-1"},Ra=Object.entries(hn).map(([e,o])=>`[${e}]: ${o}`).join(`
`),ie=(...e)=>Ze(String.raw(...e),`

`,Ra),gn=d("h3",{fontFamily:"inherit",fontSize:"0.889em",fontWeight:700,margin:0}),un=16,Ya=40,fn=c.baseFontSizeRange.minEm,La=c.baseFontSizeRange.maxEm,Ue=un*La,yn=Ue/fn,bn=e=>e*Ue/2,Sn=bn(Ya),$a=d(U,{margin:"0.5rem 0 2rem"}),Ha=d("svg",{display:"block",fontSize:`${un*fn}px`,maxWidth:"28rem",width:"100%"}),vn=({className:e,children:o,height:r,width:i})=>t(Ha,{className:e,viewBox:`0 0 ${i} ${r}`},o),Ba=({children:e,className:o,height:r=Ue,width:i=Sn})=>t($a,{className:o},t(vn,{height:r,width:i},e)),w="0123456789".split("").map(e=>{const r=Number(e)*36;return{dark:{emphasize:ne.hsluvToHex([r,100,35]),hover:ne.hsluvToHex([r,100,3]),plot:ne.hsluvToHex([r,100,74]),selected:ne.hsluvToHex([r,100,64]),x:ne.hsluvToHex([r,100,84]),y:ne.hsluvToHex([r,100,74])},light:{emphasize:ne.hsluvToHex([r,100,80]),hover:ne.hsluvToHex([r,100,97]),plot:ne.hsluvToHex([r,100,64]),selected:ne.hsluvToHex([r,100,64]),x:ne.hsluvToHex([r,100,54]),y:ne.hsluvToHex([r,100,44])}}}),xn=d("text",{fill:"currentcolor",fontFamily:c.monospaceFont}),Na=({className:e,hash:o})=>t(R,null,t(gn,null,"Result:"),t(Ba,{className:e},t(xn,{textLength:Sn,x:"0",y:yn},o))),Da=d(Na,{color:w[0].light.y,marginTop:"0.5rem",nested:{[c.darkMode]:{color:w[0].dark.x}}}),_a=ce(),We=({className:e="",...o},...r)=>({...o,className:[e,_a,...r].join(" ")}),wn=ce(),za=({children:e,className:o="",coordinate:r,index:i,padLength:s,sortedIndex:a,toggleClass:l,...p})=>t(xn,{...We(p,o,wn)},typeof e=="string"?e.padStart(s," "):e),Te=d(za,({coordinate:e,index:o,sortedIndex:r})=>({"--sorted-color":w[r].light[e],color:w[o].light[e],whiteSpace:"pre",nested:{[c.darkMode]:{"--sorted-color":w[r].dark[e],color:w[o].dark[e]}}})),Jt=ce(),Xa=({children:e,index:o,sortedIndex:r,toggleClass:i,...s})=>t("rect",{...We(s,Jt)},e),Fa=d(Xa,({index:e,sortedIndex:o})=>({"--selected-color":w[e].light.selected,"--selected-sorted-color":w[o].light.selected,"--sorted-color":w[o].light.hover,color:w[e].light.hover,fill:"currentcolor",opacity:0,transition:"opacity 0.1s ease-in-out",zIndex:-1,nested:{[c.darkMode]:{"--selected-color":w[e].dark.selected,"--selected-sorted-color":w[o].dark.selected,"--sorted-color":w[o].dark.hover,color:w[e].dark.hover}}})),Zt=ce(),Ga=({children:e,index:o,isControlPoint:r,isSegment:i,pointSize:s,sortedIndex:a,sortedX:l,sortedY:p,sortedTranslateXPercent:m,sortedTranslateyPercent:h,xShift:y,yShift:g,...u})=>t("circle",{...We(u,Zt)},e),Pn="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",Ua=d(Ga,({index:e,isControlPoint:o,isSegment:r,sortedIndex:i,sortedTranslateXPercent:s,sortedTranslateyPercent:a})=>o?{"--emphasized-color":"#666","--emphasized-stroke-width":0,color:"transparent",fill:"currentcolor",stroke:"currentcolor",strokeWidth:0,nested:{[c.darkMode]:{"--emphasized-color":"#ccc",color:"transparent"}}}:r?{"--emphasized-color":w[e].light.plot,color:"#dadada",fill:"currentcolor",stroke:w[e].light.plot,strokeWidth:0,transition:Pn,nested:{[c.darkMode]:{"--emphasized-color":w[e].dark.plot,color:"#666"}}}:{"--emphasized-color":w[e].light.plot,"--emphasized-sorted-color":w[i].light.plot,"--unsorted-transform":`translate(${[`${s}%`,`${a}%`].join(",")})`,"--sorted-color":w[i].light.plot,"--sorted-stroke":w[i].light.emphasize,color:w[e].light.plot,fill:"currentcolor",paintOrder:"stroke fill",stroke:w[e].light.emphasize,strokeWidth:0,transition:Object.entries({fill:"0.1s",stroke:"0.1s","stroke-width":"0.1s",transform:"0.2s"}).map(([l,p])=>`${l} ${p} ease-in-out`).join(", "),nested:{[c.darkMode]:{"--emphasized-color":w[e].dark.plot,"--emphasized-sorted-color":w[i].dark.plot,"--sorted-color":w[i].dark.plot,"--sorted-stroke":w[i].dark.emphasize,color:w[e].dark.plot,stroke:w[e].dark.emphasize}}}),Wa=(e,o)=>o==null?{color:w[e].light.plot,nested:{[c.darkMode]:{color:w[e].dark.plot}}}:c.topicColors[o],Cn=({fill:e,index:o,topic:r})=>({...Wa(o,r),...e?{fill:"currentcolor",fillOpacity:.15,mask:"url(#curvesVerticalFade)",strokeWidth:0}:{fill:"none",strokeWidth:2,stroke:"currentcolor"},transition:Pn,vectorEffect:"non-scaling-stroke"}),qa=({fill:e,index:o,topic:r,...i})=>t("line",{...i}),kn=d(qa,Cn),Va=({fill:e,index:o,topic:r,...i})=>t("path",{...i}),Tn=d(Va,Cn),En=({exampleId:e,index:o,suffix:r,type:i})=>i==="radio"?`example-${e}-${o}-${r}-choice`:`example-${e}-${r}-choice`,An=e=>{const{checked:o,className:r,exampleId:i,suffix:s,type:a,value:l}=e,p=Boolean(o)?{checked:o}:{},m=En(e);return t(ja,{...p,as:"input",className:r,id:m,name:`example-${i}-${s}`,type:a,value:l})},Ka=({pointSize:e,...o})=>t(An,{...o}),Ja=d(Ka,({exampleId:e,index:o,pointSize:r,suffix:i})=>({nested:{[`&:checked ~ * #example-${e}-${o}-${i}`]:{strokeWidth:r*2.5},[`&:checked ~ * .example-${e}-${o}-${i}`]:{color:"var(--emphasized-color)",strokeWidth:"var(--emphasized-stroke-width, 3)"},[`&:checked ~ * .example-${e}-${o}-line`]:{},[`&:checked ~ * [for="example-${e}-${o}-${i}-choice"] .${Jt}`]:{opacity:1,color:"var(--selected-color)"},[`&:checked ~ * [for="example-${e}-${o}-${i}-choice"] text`]:{color:"#fff",nested:{[c.darkMode]:{color:Fn(255,255,255,.9)}}}}})),Za=d("g",{nested:{"&:hover rect":{opacity:.5}}}),Qa=({hash:e})=>{const o=Number.parseInt(e,16);if(isNaN(o))throw new Qe(e);const r=o.toExponential(2),[i,s]=r.split(/e[-+]/);return t(R,null,i,s==null?null:t("sup",null,s))},ec=d(U,{...c.pre,marginBottom:"1.5rem",nested:{[c.darkMode]:{...c[c.darkMode].pre}}}),tc=({children:e,...o})=>t(jo,{...o,shadow:{darkMask:[0,0,0,1],darkScroll:[230,179,213,.75],lightMask:[255,255,255,1],lightScroll:[124,128,131,.75]}},e),oc=d("div",{alignItems:"stretch",display:"flex",nested:{"&:after":{content:'""',backgroundImage:`linear-gradient(${["to left","rgba(255,255,255,1)","rgba(255,255,255,1) 3rem","rgba(255,255,255,0) 4rem"].join(", ")})`,backgroundSize:"4rem 100%",boxShadow:"2rem 0 0 #fff",display:"block",flexShrink:0,marginLeft:"auto",order:10,width:"2rem"},[c.darkMode]:{nested:{"&:after":{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,1)","rgba(0,0,0,1) 3rem","rgba(0,0,0,0) 4rem"].join(", ")})`,boxShadow:"2rem 0 0 #000"}}}}}),Mn=ce(),nc=({children:e,sortedIndex:o,...r})=>t("label",{...We(r,Mn)},e),rc=d(nc,({sortedIndex:e})=>({"--sorted-index":e,display:"inline-block",flexShrink:0,paddingBottom:"0.5rem",paddingRight:"1rem",paddingTop:"0.5rem",transition:"order 0.05s ease-in-out"})),ic=d("span",{...c.toggleSwitch.container.off,alignItems:"center",backgroundColor:"currentcolor",border:"4px solid currentcolor",borderRadius:"16px",boxSizing:"content-box",display:"inline-flex",height:"24px",padding:0,width:"48px",verticalAlign:"middle"}),In=ce(),sc=({children:e,...o})=>t(ic,{...o,className:In},e),ac=d("span",{...c.toggleSwitch.button,borderRadius:"12px",display:"inline-block",height:"24px",width:"24px",verticalAlign:"middle"}),cc=d("label",{alignItems:"center",display:"inline-flex",justifySelf:"start"}),lc=d("span",{fontSize:"0.8889rem",marginRight:"0.5rem"}),dc=ce(),pc=({children:e,exampleId:o,...r})=>{const s=En({exampleId:o,suffix:"sort",type:"checkbox"}),a=We({...r,for:s},dc);return t(cc,{...a},t(lc,null,"Enable sorting"),t(sc,null,t(ac,null)))},mc=({sortIndexes:e,toggleClass:o,...r})=>t(An,{...We(r,o),type:"checkbox"}),hc=d(mc,{nested:{[`&:checked ~ * .${wn}`]:{color:"var(--sorted-color)",stroke:"var(--sorted-stroke)"},[`&:checked ~ * .${Jt}`]:{"--selected-color":"var(--selected-sorted-color)",color:"var(--sorted-color)"},[`&:checked ~ * .${Mn}`]:{order:"var(--sorted-index)"},[`& ~ * .${Zt}`]:{transform:"var(--unsorted-transform)"},[`&:checked ~ * .${Zt}`]:{"--emphasized-color":"var(--emphasized-sorted-color)",color:"var(--sorted-color)",stroke:"var(--sorted-stroke)",transform:"translate(0, 0)"},[`&:checked ~ * .${In}`]:{...c.toggleSwitch.container.on,justifyContent:"flex-end"}}}),gc=d("div",{alignItems:"center",display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}),On=e=>typeof e=="number"?`${e}px`:e,uc=d(vn,({height:e,width:o})=>({height:On(e),overflow:"visible",width:On(o)})),fc=d(U,{position:"relative"}),jn=d("svg",{overflow:"visible",padding:"1rem"}),wt=13,Qt=d("text",{...c.visualization.plot.axis,fontFamily:c.monospaceFont,fontSize:`${wt}px`,fill:"currentcolor"}),eo=20,to={xMax:xe,xScale:1,xShift:0,yMax:xe,yScale:1,yShift:0},yc=So({alg:"sha1",coerce:!0,sort:!0,trim:!0}),bc=16,Sc=128,Rn=Array.from(Vi),oo=Rn.map(e=>parseInt(e??yc.hash(e),16)),no=Math.min(...oo),vc=Math.max(...oo)-no,xc=Rn.reduce((e,o,r)=>{const i=oo[r],s=ve((i-no)/vc*(Sc-bc)+no,2);return{...e,[o]:s}},{}),ro=({className:e,exampleId:o,hexPoints:r,points:i,pointSize:s=6,renderAxis:a=!0,renderCurves:l,renderSegments:p=!1,scaleOptions:m,segments:h,sortIndexes:y,sortToggleClass:g,topics:u,...P})=>{const{xScale:b,xShift:f,xRange:C=b*(xe+f*2),yMax:k,yShift:X,yScale:B,yRange:E=B*(k+X*2)}={...to,...m},F=eo*2,x=P.height??E+F,W=P.width??C+F,K=0,ee="100%",G=0-wt,fe="100%",se=xe.toString(16),ye=Bo.toString(16),Ee=ye.padStart(2,ye),le=r.map(({x:j,y:T},q)=>{if(typeof s=="number")return s;const J=(q%2==0?j:T)[0];return typeof s=="number"?s:xc[J]}),de=typeof s=="number"?null:le.map(j=>j*.666+4),pe=de?.map((j,T)=>`hash-plot-blur-${o}-${T}`),me=de==null?null:t("defs",null,de.map((j,T)=>t("filter",{id:pe?.[T]},t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:j})))),z=a?t(R,null,t(Qt,{x:G,y:ee,transform:`translate(0, ${wt})`},Ee),t(Qt,{x:G,y:K},se),t(Qt,{x:fe,y:ee,transform:`translate(0, ${wt})`},se)):null,L=({x:j,y:T},q)=>{const D=y[q],{x:J,y:he}=i[D],ae=ve((j+f)/C*100,4),$=100-ve((T-X)/E*100,4),V=ve((J+f)/C*100,4),I=100-ve((he-X)/E*100,4),Z=0-ve(ae-V,4),ge=0-ve($-I,4),ue=le[q],oe=pe?.[q],be=oe==null?{}:{filter:`url(#${oe})`};return{cx:ae,cy:$,filterId:oe,filterProps:be,pointSize:ue,sortedCx:V,sortedCy:I,sortedTranslateXPercent:Z,sortedTranslateyPercent:ge}},S=({index:j,isControlPoint:T=!1,point:q,pointSize:D})=>{const{cx:J,cy:he,filterProps:ae,pointSize:$,sortedCx:V,sortedCy:I,sortedTranslateXPercent:Z,sortedTranslateyPercent:ge}=L(q,j),ue=Boolean(p||l),oe=y[j],be=ue?{className:`example-${o}-${j}-point`}:{className:[`example-${o}-${j}-point`,`example-${o}-${oe}-sorted-point`].join(" "),id:`example-${o}-${j}-point`};return t(Ua,{...ae,...be,cx:`${J}%`,cy:`${he}%`,index:j,isControlPoint:T,isSegment:ue,pointSize:D??$,r:D??$,sortedIndex:oe,sortedX:V-q.x,sortedY:I-I,sortedTranslateXPercent:Z,sortedTranslateyPercent:ge,toggleClass:g,xShift:eo,yShift:eo})},Ae=p?null:i.map((j,T)=>t(S,{index:T,point:j})),Me=p?h?.map(([j,T,q],D)=>{const{cx:J,cy:he}=L(j,D),{cx:ae,cy:$}=L(T,D),{cx:V,cy:I}=L(q,D),Z=u?.[D%u?.length??0];return t("g",null,t(S,{index:D,point:j}),t(S,{index:D,point:T}),t(S,{index:D,point:q}),t(kn,{className:`example-${o}-${D}-line`,index:D,topic:Z,x1:`${J}%`,x2:`${ae}%`,y1:`${he}%`,y2:`${$}%`}),t(kn,{className:`example-${o}-${D}-line`,index:D,topic:Z,x1:`${ae}%`,x2:`${V}%`,y1:`${$}%`,y2:`${I}%`}))}):null,Pe=()=>{if(h==null||l==null)return{curvePoints:null,renderedCurves:null};const T=(l==="all"||l==="only"?h:[h[0]]).map($=>{const[V,I,Z]=$,{x:ge}=V,{y:ue}=I,{x:oe}=Z,be=oe-ge,so=be===0?0:Math.max(ue/be*_o,Do);return{cubicPoints:$?.reduce((Ce,ke,Ie)=>{if(Ie===0)return Ce;const He=Go({index:Ie,point:ke,points:$,smoothing:so,xScale:b,yScale:B});return[...Ce,He]},[]),segment:$}}),q={overflow:"visible"},D=d(l==="only"?jn:"svg",q),J=l==="only"?{className:e}:void 0,he=l==="only"?x:"100%",ae=l==="only"?W:"100%";return{curvePoints:t(R,null,T.map(({cubicPoints:$,segment:V},I)=>{const[Z,ge,ue]=V;return t("g",null,t(S,{index:I,point:Z,pointSize:4}),t(S,{index:I,point:ge,pointSize:4}),t(S,{index:I,point:ue,pointSize:4}),$.map(([oe,be])=>t(R,null,t(S,{index:I,isControlPoint:!0,point:oe,pointSize:3}),t(S,{index:I,isControlPoint:!0,point:be,pointSize:3}))))})),renderedCurves:t(D,{...J,height:he,width:ae,preserveAspectRatio:"none",viewBox:`0 0 ${W} ${x}`},t("defs",null,t("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},t("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),t("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),t("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),t("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},t("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),T.map(({cubicPoints:$,segment:V},I)=>{const[Z,ge,ue]=V,oe=$.map(([$e,Ce],ke)=>[ke===0?Z:ge,$e,Ce,ke===0?ge:ue]);return t(R,null,t(()=>t(R,null,oe.map($e=>{const Ce=$e.map((Ie,He)=>{const{cx:Tt,cy:qe}=L(Ie,I),Et=Tt/100*W,At=qe/100*x;return`${He===0?"M ":He===1?"C ":""} ${Et},${At}`}).join(" "),ke=u?.[I%u?.length??0];return t(Tn,{d:Ce,index:I,topic:ke})})),null),t(()=>{const $e=oe.map((ke,Ie)=>ke.map((Tt,qe)=>{if(Ie>0&&qe===0)return"";const{cx:Et,cy:At}=L(Tt,I),ao=Et/100*W,Ln=At/100*x;return`${qe===0?"M ":qe===1?"C ":""} ${ao},${Ln}`}).join(" ")).join(" "),Ce=u?.[I%u?.length??0];return t(Tn,{d:$e,fill:!0,index:I,topic:Ce})},null))}))}},{curvePoints:N,renderedCurves:te}=Pe();return l==="only"?te:t(jn,{className:e,height:x,width:W},me,z,Ae,Me,N,te)},wc=d(U,{marginBottom:"1rem"}),Pc=d(ro,{gridColumn:"1 / -1"}),Cc=d(ro,{width:"32rem"}),Pt=({exampleId:e,hexPoints:o,plotPointSize:r=6,points:i,renderAxis:s,renderCurves:a,renderScaled:l=!0,renderSegments:p,scaleOptions:m=to,toggleSorting:h})=>{const y=l?U:R,g=l?Pc:Cc,u=Boolean(a||p),b=u?Ue*3:!u&&l?Ue*5:Ue*4,f=yn,C=f*2.5,k=f*3.5,X=f*4.5,B={...to,...m},E=i.map(z=>ut(z,B)),F=gt(E,(z,L)=>Number(z.x)===Number(L.x)?0:Number(z.x)>Number(L.x)?1:-1),x=E.map((z,L)=>h?F.indexOf(z)??-1:L),W=h?o:F.map(z=>o[E.indexOf(z)]),K=h?i:F,ee=h?E:F,G=ce(),{xScale:fe,xShift:se,yScale:ye}=B,Ee=se*2,le=(xe+Ee)*fe,de=_t({points:ee,xMax:le,xScale:fe,yScale:ye}),pe=zt({segments:de,xMax:le,xScale:fe,yScale:ye}),me={...B};return t(y,null,t(fc,null,K.map((z,L)=>t(Ja,{checked:L===0,exampleId:e,pointSize:r,index:L,suffix:"point",type:"radio"})),h?t(hc,{exampleId:e,sortIndexes:x,suffix:"sort",toggleClass:G}):null,t(gc,null,t(gn,null,"Result:"),h?t(pc,{exampleId:e}):null),t(wc,null,t(g,{exampleId:e,hexPoints:W,points:K,pointSize:r,renderAxis:s,renderCurves:a,renderSegments:p,scaleOptions:me,segments:pe,sortIndexes:x,sortToggleClass:G})),t(ec,null,t(tc,null,t(oc,null,W.map(({x:z,y:L},S)=>{const{x:Ae,y:Me}=K[S],{x:Pe,y:N}=ee[S],te=[z,L,Ae,Me,...l?[Pe,N]:[]],j=String(xe).length,T=u?j:Math.max(j,...te.map(Z=>String(Z).length)),q=o.length,D=bn(q),J=1/q*D,he=T*J,ae=he*2+J,$=he+J,V=J/2,I=ae+V*2;return t(rc,{className:`point-${S}`,for:`example-${e}-${S}-point-choice`,sortedIndex:x[S]},t(uc,{height:b,width:I},t(Za,null,t(Fa,{index:S,height:b,rx:3,ry:3,width:I,x:0-V,y:0,sortedIndex:x[S],toggleClass:G}),t(Te,{coordinate:"x",index:S,y:f,padLength:T,sortedIndex:x[S],toggleClass:G},"x"),t(Te,{coordinate:"y",index:S,x:$,y:f,padLength:T,sortedIndex:x[S],toggleClass:G},"y"),t(Te,{coordinate:"x",index:S,y:C,padLength:T,sortedIndex:x[S],toggleClass:G},z),t(Te,{coordinate:"y",index:S,x:$,y:C,padLength:T,sortedIndex:x[S],toggleClass:G},L),u?null:t(R,null,t(Te,{coordinate:"x",index:S,y:k,padLength:T,sortedIndex:x[S],toggleClass:G},String(parseInt(z,16))),t(Te,{coordinate:"y",index:S,x:$,y:k,padLength:T,sortedIndex:x[S],toggleClass:G},String(parseInt(L,16)))),l&&!u?t(R,null,t(Te,{coordinate:"x",index:S,y:X,padLength:T,sortedIndex:x[S],toggleClass:G},String(Pe)),t(Te,{coordinate:"y",index:S,padLength:T,x:$,y:X,sortedIndex:x[S],toggleClass:G},String(N))):null)))}))))))},Ct=({index:e})=>t(R,null,t("code",null,"P",t("sub",null,e)),":\xA0",t("code",null,"{","\xA0x",t("sub",null,e),",\xA0y",t("sub",null,e),"\xA0","}")),kt=({className:e,hash:o,height:r,identifier:i=ce,renderType:s,StylesProvider:a=De,styleRenderer:l=Ne,topics:p,width:m})=>{const h=Nt(o),y=Dt(o,h),{xPadding:g,xScale:u,yPadding:P,yScale:b}=Wt,f=s==="meta",C=f?0:g,k=f?0:P,X=C/2,B=k/2,E={xScale:u,xShift:X,yScale:b,yShift:B},x=gt(y,(N,te)=>N.x===te.x?0:N.x>te.x?1:-1).map(N=>ut(N,E)),W=x.map((N,te)=>te),K=x.map(N=>h[x.indexOf(N)]),ee=(xe+C)*u,G=i(),fe=_t({points:x,xMax:ee,xScale:u,yScale:b}),se=zt({segments:fe,xMax:ee,xScale:u,yScale:b}),ye=f?{path:{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,Ee=f?"0 !important":"0 0 1rem !important",le=ot,de="100%",pe=N=>typeof N=="number"?`${N}px`:N,me=(N,te)=>typeof N=="number"?N*te:N,z=f?me(r??le,.95):ot,L=f?me(m??de,.95):"100%",S=f&&r!=null?me(r,.95):r,Ae=f&&m!=null?me(m,.95):m,Me=l.renderRule(()=>({gridColumn:"1 / -1",height:pe(z),padding:Ee,width:pe(L),nested:{...ye}}),Object.keys),Pe=f?e:`${e} ${Me}`;return t(a,null,t(ro,{className:Pe,exampleId:-1,height:S,hexPoints:K,points:x,renderAxis:!1,renderCurves:"only",scaleOptions:E,segments:se,sortIndexes:W,sortToggleClass:G,topics:p,width:Ae}))},kc=e=>{const{hash:o,title:r,topics:i}=e,s=Nt(o),a=Dt(o,s),l=gt(a,({x:C},{x:k})=>Number(C)===Number(k)?0:Number(C)>Number(k)?1:-1),{xPadding:p,xScale:m,yPadding:h,yScale:y}=Wt,g=p/2,u=h/2,P={xShift:g,xScale:m,yShift:u,yScale:y},b=l.map(C=>ut(C,P)),{}=Xo(b),f=C=>"${"+C+"}";return t(sn,{...e,CustomArt:kt},ie`
        Previous:

        - [What the art, part 1: Why?][p1]
        - [What the art, part 2: Constraints][p2]

        Well, I certainly was [overly optimistic][blame] about how quickly I'd
        be able to finish this post! I took a little detour to build out
        [my résumé][resume] because I'm currently on the job hunt (want to hire
        me?). I wanted to finish this series, but knowing the site was live and
        ready to serve up my résumé proved to be a big enough ADHD mental block
        that I couldn't focus on the blog until it was done.

        But we're back to fill in some of the juicy implementation details! In
        the previous posts, I discussed the motivation behind the art, and the
        constraints that informed the artistic direction. This is how it was
        built.
      `,t(mn,null,ie`
          There's a fair bit of boilerplate & plumbing that the art
          functionality depends on. To keep the post focused I'll leave out
          some of the boring stuff. But if you want to see the nitty gritty,
          you can check out the full source for Git usage in
          [\`lib/git/log.ts\`][gitBoilerplate], and for art generation in
          [\`lib/art/math.ts\`][artBoilerplate].
        `),t("h2",null,"Getting the Git"),ie`
        As I mentioned in Constraints, one of the goals was immutability:
        art that would render the same even if a given post is edited. This
        is achieved by retrieving a Git hash of the initial commit of the post.
        To allow incremental commits (save early, save often!), I restrict
        this hash lookup to the [\`origin/main\`][originMain] branch.

        For every post, I look up the initial commit hash of the post's entry
        module, falling back to a format-compatible SHA-1 hash of the current
        content of the file on disk in cases where the post isn't yet
        committed:

        ~~~typescript
        export const getInitialFileHash = (basePath: string) => {
          const path = resolveModulePath(basePath);
          const [ hash ] = getFormattedGitLogData({
            decode: identity,
            format: GitFormat.HASH,
            path,
          });

          return hash ?? getSHA1Hash(path);
        };

        const hash = getInitialFileHash(path);
        ~~~
      `,t(Da,{hash:o}),t("h2",null,"Using (abusing) the hash data"),t("p",null,"The hash ",t("a",{href:hn.sha1},"represents a 160-bit number"),", this post's hash being approximately ",t(Qa,{hash:o}),". My idea was to treat it as the basis for a data structure: a set of ten numeric pairs, two hex characters per number, 8 bits each, which are then converted to ",t("code",null,"{ x, y }")," coordinates."),ie`
        ~~~typescript
        export const COORDINATE_MAX  = parseInt('ff', 16);
        export const COORDINATE_MIN  = parseInt('00', 16);

        // ...

        const hexPointPattern = /([0-9a-f]{2})([0-9a-f]{2})/ig;

        export const toHexPointSequence = (hash: string): HexPointSequence => {
          if (!isValidHash(hash)) {
            throw new InvalidHashError(hash);
          }

          const matches = Array.from(hash.matchAll(hexPointPattern) ?? []);
          const points  = matches.map(([ _, x, y ]) => ({
            x,
            y,
          } as HexPoint));

          if (!isHexPointSequence(points)) {
            throw new InvalidHashError(hash);
          }

          return points;
        };

        // ...

        const toCoordinate = (value: HexCoordinate): Coordinate => {
          const result = parseInt(value, 16);

          if (result > COORDINATE_MAX || result < COORDINATE_MIN) {
            throw new Error(\`Not a valid coordinate: ${f("value")}\`);
          }

          return coordinate(result);
        };

        export const toPointSequence = (
          hash:      string,
          hexPoints: HexPointSequence
        ): PointSequence => {
          try {
            const result = hexPoints.map(toPoint);

            if (!isPointSequence(result)) {
              throw new InvalidHashError(hash);
            }

            return result;
          }
          catch {
            throw new InvalidHashError(hash);
          }
        };

        const hexPoints  = toHexPointSequence(hash);
        const basePoints = toPointSequence(hash, hexPoints);
        ~~~

        While I can't predict the initial commit hash on \`main/origin\`
        for this post, it's improbable (but possible!) that the plot points in
        the example result below follow the same horizontal order as their
        labels—that would require a hash where every other 8-bit
        substring assigned to an \`x\` coordinate has a greater value than the
        previous \`x\`. But the final art style is a series of horizontal curves
        along a baseline, so the next thing I do is sort the point sequence
        along the \`x\` axis.

        ~~~typescript
        const sortedPoints = sortBy(basePoints, ({ x: a }, { x: b }) => (
          Number(a) === Number(b)
            ? 0
          : Number(a) > Number(b)
            ? 1
            : -1
        ));
        ~~~

        Sorting is off by default in the example, to allow readers to toggle
        the before/after state.
      `,t(Pt,{exampleId:1,hexPoints:s,points:a,renderScaled:!1,toggleSorting:!0}),t("h2",null,"Aspect ratio & padding adjustments"),ie`
        Of course, the final art rendering isn't square, it's much wider than
        it is tall. With some adjustments for very small & very large
        viewports, its aspect ratio is roughly five times the
        [golden ratio][goldenRatio] (there's no significance to this other than
        that it was the first ratio I tried), plus a small amount of padding—on
        the \`x\` axis to begin and end the blobs on the art's baseline, and on
        the \`y\` axis to leave some room for overshoot once the curves are
        computed.

        ~~~typescript
        export const scalePoint = <
          X extends number,
          Y extends number
        >({ x, y }: Point, {
          xScale,
          xShift,
          yScale,
          yShift,
        }: ScalePointOptions<X, Y>): ScaledPoint<X, Y> => (
          scaledPoint({
            x: (x + xShift) * xScale,
            xScale,
            y: (y + yShift) * yScale,
            yScale,
          })
        );

        const scaledPoints = sortedPoints.map((point) => (
          scalePoint(point, scaleOptions)
        ));
        ~~~
      `,t(Pt,{exampleId:2,hexPoints:s,points:a,renderAxis:!1,scaleOptions:P}),t("h2",null,"Connecting the dots"),ie`
        In the final art rendering, each point is joined into overlapping
        curves, each segment curving from approximately the previous point's
        \`x\` (or \`0\`) at the \`y\` the baseline to the following point's
        \`x\` (or \`xMax\`), also at the baseline.

        ~~~typescript
        export const getNaiveSegments = <
          X extends number,
          Y extends number
        >({
          points,
          xMax,
          xScale,
          yScale,
        }: GetSegmentsOptions<X, Y>): SegmentList<X, Y> => (
          [
            scaledPoint({
              x: 0,
              xScale,
              y: 0,
              yScale,
            }),
            ...points,
            scaledPoint({
              x: xMax,
              xScale,
              y: 0,
                yScale,
            }),
          ].reduce<SegmentList<X, Y>>((
            acc,
            mid,
            index,
            points
          ) => {
            if (index === 0 || index === points.length - 1) {
              return acc;
            }

            const baseline = scaledCoordinate(0, yScale);

            const segment = [
              {
                x: points[index - 1].x,
                y: baseline,
              },
              mid,
              {
                x: points[index + 1].x,
                y: baseline,
              },
            ] as const;

            return [
              ...acc,
              segment,
            ];
          }, [])
        );

        const naiveSegments = getNaiveSegments({
          points: scaledPoints,
          xMax,
        });
        ~~~

        Why are they _naïve_ segments? As I mentioned in Constraints, I
        discovered during development that sometimes certain hashes would
        create shapes which were inappropriate for the kind of content I wanted
        on my site. So after constructing these naïve segments, I walk through
        them again in hopes of detecting that scenario.

        I should add a caveat: this was entirely a process trial and error, and
        produced some moderately ugly "magic" code. I try not to write code like
        this, but if you're making art sometimes you've gotta break a few eggs!

        ~~~typescript
        /**
         * Generating art will be risk-free fun, I thought...
         */
        export const getNonPhallicSegments = <X extends number, Y extends number>({
          segments,
          xMax,
          xScale,
          yScale,
        }: GetNonPhallicSegmentsOptions<X, Y>): SegmentList<X, Y> => (
          segments.map<Segment<X, Y>>((segment) => {
            const [
              { x: startX, y: startY },
              { x: midX,   y: midY },
              { x: endX,   y: endY },
            ] = segment;

            const width           = endX - startX;
            const ratio           = midY / width;
            const maxRatio        = 6;
            const ratioAdjustment = maxRatio / ratio;

            if (ratioAdjustment < 1) {
              const ratioAdjustmentX    = ratioAdjustment * 0.2;
              const adjustmentX         = ratioAdjustmentX * startX;
              const ratioAdjustedStartX = startX - adjustmentX;
              const ratioAdjustedEndX   = endX   + adjustmentX;

              const overshootX = (
                ratioAdjustedStartX < 0
                  ? Math.abs(ratioAdjustedStartX)
                : ratioAdjustedEndX > xMax
                  ? xMax - ratioAdjustedEndX
                  : 0
              );

              const adjustedStartX = ratioAdjustedStartX + overshootX;
              const adjustedEndX   = ratioAdjustedEndX   + overshootX;

              const ratioAdjustmentY = ratioAdjustment * 0.3;

              const adjustedMidX = midX + overshootX;
              const adjustmentY  = ratioAdjustmentY * midY;
              const adjustedMidY = midY - adjustmentY;

              return [
                scaledPoint({
                  x: adjustedStartX,
                  xScale,
                  y: startY,
                  yScale,
                }),
                scaledPoint({
                  x: adjustedMidX,
                  xScale,
                  y: adjustedMidY,
                  yScale,
                }),
                scaledPoint({
                  x: adjustedEndX,
                  xScale,
                  y: endY,
                  yScale,
                }),
              ];
            }

            return segment;
          })
        );

        const segments = getNonPhallicSegments({
          segments: naiveSegments,
          xMax,
          xScale,
          yScale,
        });
        ~~~
      `,t(Pt,{exampleId:3,hexPoints:s,points:a,renderAxis:!1,renderSegments:!0,scaleOptions:P}),t("h2",null,"My trig crash course"),ie`
        We're coming near the end! But before I get to the final step, I needed
        to be able to generate [cubic Bézier curves][bezierCurves] for each
        segment.
      `,t(mn,null,ie`
          I had to ~~learn~~ copy & paste some math to generate the curves. I
          did take the time to learn what the math is actually doing while
          writing this post, but I've never taken a trigonometry course, so I'm
          probably not the best person to explain it in great detail, but I'll
          give it a shot.
        `),ie`
        A single cubic Bézier curve is defined by:
      `,t("ul",null,t("li",null,"A starting point ",t(Ct,{index:0})),t("li",null,"A starting control point ",t(Ct,{index:1})),t("li",null,"An ending control point ",t(Ct,{index:2})),t("li",null,"An ending point ",t(Ct,{index:3}))),ie`
        The control points determine how far the curve extends, and how fast
        it arrives at the ending point. Here's how I calculate those curves.
        This is a fair bit of code, but the important bits are the
        \`curveLine\` function—which calculates an angled line to the control
        point, and the \`curveControlPoint\` function which calculates the
        control point's position from that line.

        ~~~typescript
        const curveLine = <X extends number, Y extends number>(
          { x: x0, y: y0 }: ScaledPoint<X, Y>,
          { x: x1, y: y1 }: ScaledPoint<X, Y>
        ) => {
          const xLength = x1 - x0;
          const yLength = y1 - y0;

          return {
            angle:  Math.atan2(yLength, xLength),
            length: Math.sqrt((xLength ** 2) + (yLength ** 2)),
          };
        };

        const curveControlPoint = <X extends number, Y extends number>({
          current,
          previous,
          next,
          reverse,
          smoothing,
          xScale,
          yScale,
        }: CurveControlPointOptions<X, Y>): ScaledPoint<X, Y> => {
          const reverseCompensation = reverse
            ? Math.PI
            : 0;
          const opposedLine = curveLine(previous, next);

          const angle  = opposedLine.angle  + reverseCompensation;
          const length = opposedLine.length * smoothing;

          const { x: xCurrent, y: yCurrent } = current;

          const x = xCurrent + (Math.cos(angle) * length);
          const y = yCurrent + (Math.sin(angle) * length);

          return {
            x: scaledCoordinate(x, xScale),
            y: scaledCoordinate(y, yScale),
          };
        };

        export const cubicBezierPoints = <X extends number, Y extends number>({
          index,
          point,
          points,
          smoothing,
          xScale,
          yScale,
        }: CubicBezierPointsOptions<X, Y>): CubicBezierPoints<X, Y> => {
          const startCurrent = points[index - 1];

          if (startCurrent == null) {
            throw new Error(
              'Cannot build cubic bezier points, no point before the provided index.'
            );
          }

          const startPrevious = points[index - 2] ?? startCurrent;
          const startControl = curveControlPoint({
            current:  startCurrent,
            previous: startPrevious,
            next:     point,
            reverse:  false,
            smoothing,
            xScale,
            yScale,
          });

          const previous = startCurrent;
          const next = points[index + 1] ?? point;
          const endControl = curveControlPoint({
            current:  point,
            previous: previous,
            next,
            reverse:  true,
            smoothing,
            xScale,
            yScale,
          });

          return [ startControl, endControl, point ];
        };

        const cubicPoints = segments.map((segment) => (
          segment.reduce((acc, point, index) => {
            if (index === 0) {
              return acc;
            }

            const segmentPoints = cubicBezierPoints({
              index,
              point,
              points: segment,
              smoothing,
              xScale,
              yScale,
            });

            return [
              ...acc,
              segmentPoints,
            ]
          }, []);
        ));
        ~~~
      `,t(Pt,{exampleId:4,hexPoints:s,points:a,renderAxis:!1,renderCurves:"all",scaleOptions:P}),t("h2",null,"Now, the magic happens"),ie`
        Now that I can get those smooth curves, I put on the final touches.
        Again, this is a fair bit of code, but essentially what's happening
        is that for each segment, I calculate a _slightly adjusted_ curve
        above the \`y\` axis baseline, then a _slightly differently adjusted_
        curve approximately mirroring it below the same baseline.

        These adjustments were chosen to fit a general theme in the site
        design, where most everything is laid out slightly to the left
        (assuming you're on a screen large enough for that to kick in), and
        to add just a little more visual variety than the curves alone.

        ~~~typescript
        const getCubicPoints = <X extends number, Y extends number>({
          segment,
          smoothing,
          xScale,
          yScale,
        }: GetCubicPointsOptions<X, Y>) => (
          segment.reduce<readonly string[]>((
            acc:    readonly string[],
            point:  ScaledPoint<X, Y>,
            index:  number
          ) => {
            if (index === 0) {
              return acc;
            }

            const segmentPoints = cubicBezierPoints({
              index,
              point,
              points: segment,
              smoothing,
              xScale,
              yScale,
            });

            const result = segmentPoints.map((point) => (
              \`${f("point.x")},${f("point.y")}\`
            )).join(' ');

            return [
              ...acc,
              \`C ${f("result")}\`,
            ];
          }, [])
        );

        export const getSegmentPaths = <X extends number, Y extends number>({
          baseYCoordinate,
          isBaselineBelowMidpoint,
          segments,
          xScale,
          yMax,
          yScale,
          yTilt = false,
        }: GetSegmentPathsOptions<X, Y>) => (
          segments.reduce((
            acc,
            segment,
            index,
            segments
          ) => {
            const { length } = segments;
            const [
              baseStartPoint,
              baseMidPoint,
              baseEndPoint,
            ] = segment;

            const { x: startX, y: baseStartY } = baseStartPoint;
            const { x: midX,   y: midY }       = baseMidPoint;
            const { x: endX,   y: baseEndY }   = baseEndPoint;

            const width = endX - startX;

            const smoothing = width === 0
              ? 0
              : Math.max(midY / width * SMOOTHING_RATIO, MIN_SMOOTHING);

            const Y_TILT = yTilt
              ? 0.1
              : 0;

            const Y_TILT_NEG = 1 - Y_TILT;
            const Y_TILT_POS = 1 + Y_TILT;

            const startYTilt = index % 2 === 0
              ? Y_TILT_NEG
              : Y_TILT_POS;

            const startY = isBaselineBelowMidpoint
              ? baseStartY + baseYCoordinate
              : yMax - baseStartY + baseYCoordinate;

            const startPoint: ScaledPoint<X, Y> = {
              x: startX,
              y: scaledCoordinate(startY * startYTilt, yScale),
            };

            const endYTilt = index % 2 === 0
              ? Y_TILT_NEG
              : Y_TILT_POS;

            const endY = isBaselineBelowMidpoint
              ? baseEndY + baseYCoordinate
              : yMax - baseEndY + baseYCoordinate;

            const endPoint: ScaledPoint<X, Y> = {
              x: scaledCoordinate(endX, xScale),
              y: scaledCoordinate(endY * endYTilt, yScale),
            };

            const startMidXDistance = midX - startX;
            const midEndXDistance = endX - midX;

            const forwardMidPointXAdjustment = midEndXDistance > startMidXDistance
              ? 0
              : 0 - ((midX - startX) * MID_POINT_TILT);

            const midPointYAdjustment = (length - index) * (yScale / 100 * yMax);

            const forwardMidPoint: ScaledPoint<X, Y> = {
              x: scaledCoordinate(midX + forwardMidPointXAdjustment, xScale),
              y: scaledCoordinate(midY - midPointYAdjustment, yScale),
            };

            const forwardSegment: Segment<X, Y> = [
              startPoint,
              forwardMidPoint,
              endPoint,
            ];

            const forwardPoints = getCubicPoints({
              segment: forwardSegment,
              smoothing,
              xScale,
              yScale,
            });

            const reverseMidPointXAdjustment = midEndXDistance > startMidXDistance
              ? (endX - midX) * MID_POINT_TILT
              : 0;

            const reverseMidPoint: ScaledPoint<X, Y> = {
              x: scaledCoordinate(midX + reverseMidPointXAdjustment, xScale),
              y: scaledCoordinate(yMax - midPointYAdjustment, yScale),
            };

            const reverseSegment: Segment<X, Y> = [
              endPoint,
              reverseMidPoint,
              startPoint,
            ];

            const reversePoints = getCubicPoints({
              segment: reverseSegment,
              smoothing,
              xScale,
              yScale,
            });

            return [
              ...acc,
              [
                \`M ${f("startPoint.x")},${f("startPoint.y")}\`,
                ...forwardPoints,
                ...reversePoints,
                'Z',
              ].join(' '),
            ];
          }, [] as readonly string[])
        );

        const segmentPaths = getSegmentPaths({
          baseYCoordinate,
          segments,
          xScale,
          yMax,
          isBaselineBelowMidpoint,
          yScale,
        });
        ~~~
      `,t(ft,{hash:o,title:r,topics:i}),t("h2",null,"My mistakes"),ie`
        One thing that was challenging building both the original art
        project, as well as the examples for this post, is that I'm working
        with numerical data, which I expect to go _up_ as it increases, but
        SVG renders higher numbers on the \`y\` axis _down_. I've gotten
        so frequently so turned around by this that, well, the final art
        rendering shows I never quite got it right! But I like how it looks,
        and I don't want to mess with that for now.

        Sometimes technically incorrect is the best kind of correct!

        * * *

        ### And another thing...

        I discovered two more mistakes after the post went live! First, I
        noticed the post's timestamp was incorrect. Since the timestamp is
        also defined by the time of the first commit to \`origin/main\`,
        this means that the command I'd used to retrieve the initial hash
        was also wrong.

        Then I realized the URL is wrong, because I began writing the post
        in February. Both have been corrected.
      `)};var Tc=pr(kc,{async getStaticProps(e){return{props:{...await cn({...e,description:Ze`
        The final part in a series introducing my new site's art project.
        I walk through some of the more interesting parts of how the art
        is generated.
      `,importURL:import.meta.url,title:"What the art, part 3: Implementation",topics:[H.ART,H.TECHNOLOGY,H.NEURODIVERGENCE]}),CustomArt:kt}}}});const Ec=d(U,{...c.projects.current,margin:"0.5rem 0 3rem",padding:"1rem 0"}),Yn=d("h2",{fontSize:je(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),io=d("div",{marginTop:"0.5rem"}),Ac=({projects:e,meta:o,...r})=>{const{contributor:i,creator:s,current:a}=e.reduce((l,p)=>{const m=p.end==null?"current":p.role===O.CREATOR?"creator":"contributor";return{...l,[m]:[...l[m],p]}},{contributor:[],creator:[],current:[]});return t(R,null,t(kt,{...o,renderType:"post"}),t("h1",null,"Projects"),t(Ec,null,t("h2",null,"Current"),t(io,null,a.map(l=>t(Kt,{project:l})))),t(ba,{...r},t("div",null,t(Yn,null,"Projects I Created"),t(io,null,s.map(l=>t(Kt,{project:l})))),t("div",null,t(Yn,null,"Open Source Contributions"),t(io,null,i.map(l=>t(Kt,{project:l}))))))};export{ft as BlogArt,ys as BlogArtDefs,Fs as BlogListing,an as BlogMetadataType,sn as BlogPost,kt as CustomArt,Qo as Head,rn as Main,Ye as PageMetadataType,Ac as Projects,De as StylesProvider,H as Topic,Jo as TopicTag,st as __SNOWPACK_ENV__,cn as getBlogPostStaticProps,Wo as getPageMetadata,Tc as index,Ze as mdx,Po as projects,mr as resetAbbrContext,d as styled};
