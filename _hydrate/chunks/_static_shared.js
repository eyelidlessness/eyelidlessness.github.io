import xt from"unist-util-visit";import{h as r,Fragment as N,toChildArray as At}from"https://cdn.skypack.dev/preact@10.5.10";import{createRenderer as jo}from"fela";import"fela-tools";import Mt from"module";import{isobject as Io,createComponent as Yo,RendererProvider as Do,createSchema as t,emojiRegex as Lo,h as Rt,rehypeAccessibleEmojis as $o,remarkSlug as Bo,remarkSmartypants_1 as No,hsluv_1 as V}from"./_vendor/index.js";import{processStyleWithPlugins as Ho,KEYFRAME_TYPE as Ot,isNestedSelector as _o,normalizeNestedProperty as Fo,isMediaQuery as zo,generateCombinedMediaQuery as jt,isSupport as Uo,generateDeclarationReference as Go,isUndefinedValue as qo,generateCSSSelector as Xo,RULE_TYPE as Vo}from"fela-utils";import{cssifyDeclaration as Wo,cssifyObject as Ko}from"css-in-js-utils";import It from"md5";import Yt from"dedent";import Jo from"@mdx-js/mdx";import{mdx as Oe,MDXProvider as Qo}from"@mdx-js/preact";import{transform as Zo}from"buble-jsx-only";import er from"remark-mdx";import tr from"remark-mdx-to-plain-text";import se from"path";import{loadTheme as Dt,getHighlighter as Lt}from"shiki";import{BUNDLED_LANGUAGES as or}from"shiki-languages";import{renderers as rr}from"shiki-twoslash";import Xe from"fs";import $t from"node-object-hash";import"sharp";import ir from"child_process";import nr from"crypto";import{Head as Bt,seo as je}from"microsite/head";let Ve=new Set;const sr=()=>{Ve=new Set},ar=()=>e=>{xt(e,"abbr",o=>{const{abbr:i}=o;Ve.has(i)&&(delete o.abbr,delete o.children,delete o.data,delete o.reference,Object.assign(o,{type:"text",value:i})),Ve.add(i)})},Nt="production",cr="production",lr=!0;var We=Object.freeze({__proto__:null,MODE:Nt,NODE_ENV:cr,SSR:lr});const dr=e=>e.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`),O=(e,o)=>[e.join(","),"{",Object.entries(o).reduce((i,[n,s])=>typeof s=="object"&&(n==="nested"||n.includes("&"))?i:`${i}${dr(n)}:${s};`,""),"}",Object.entries(o).map(([i,n])=>{if(typeof n=="object"){if(i==="nested")return Object.entries(n).map(([s,a])=>{const c=e.map(p=>s.replace(/&/g,p));return O(c,a)}).join("");if(i.includes("&")){const s=e.map(a=>i.replace(/&/g,a));return O(s,n)}}return""},[]).join("")].join(""),ae=(...e)=>`clamp(${e.join(",")})`,ge=e=>e.replace(/\s+/g," ").trim(),Ie=e=>e;function ke(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function pr(e,o,i,n,s,a){const c=[];return s&&c.push(ke(s).slice(0,16)),n&&c.push(ke(n).slice(0,16)),i&&c.push(ke(i).slice(0,16)),c.push(ke(e).slice(0,16)),c.push(ke(o).slice(0,16)),c.push(a.slice(0,8)),c.join("_")}function mr(e,o,i=[""]){let n="";for(const a in e){const c=e[a];n=`${n}${a}{${Ko(c)}}`}let s="";for(let a=0;a<i.length;a++){const c=i[a];s=`${s}@${c}keyframes ${o}{${n}}`}return s}function gr(){return e=>(e.renderKeyframe=(o,i)=>{const n=o(i,e),s=Ho(e,n,Ot,i),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const c=It(a),p=(e.selectorPrefix||"_")+c.slice(0,8),m=mr(s,p,e.keyframePrefixes),g={type:Ot,keyframe:m,name:p};e.cache[a]=g,e._emitChange(g)}return e.cache[a].name},e._renderStyleToClassNames=({_className:o,...i},n="",s="",a="")=>{let c=o?` ${o}`:"";for(const p in i){const m=i[p];if(Io(m))if(_o(p))c+=e._renderStyleToClassNames(m,n+Fo(p),s,a);else if(zo(p)){const g=jt(s,p.slice(6).trim());c+=e._renderStyleToClassNames(m,n,g,a)}else if(Uo(p)){const g=jt(a,p.slice(9).trim());c+=e._renderStyleToClassNames(m,n,s,g)}else console.warn(`The object key "${p}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const g=Go(p,m,n,s,a);if(!e.cache.hasOwnProperty(g)){if(qo(m)){e.cache[g]={className:""};continue}const u=Wo(p,m),b=It(g),k=e.devMode?pr(p,m,n,s,a,b):(e.selectorPrefix||"_")+b.slice(0,8),y=Xo(k,n),v={type:Vo,className:k,selector:y,declaration:u,pseudo:n,media:s,support:a};e.cache[g]=v,e._emitChange(v)}const f=e.cache[g].className;f&&(c+=` ${f}`)}}return c},e)}import.meta.env=We;const Ye=Mt.createRequire(import.meta.url),{default:ur}=Ye("fela-identifier"),{default:hr}=Ye("fela-plugin-embedded"),{default:fr}=Ye("fela-plugin-multiple-selectors"),{default:yr}=Ye("fela-plugin-typescript"),br=Nt==="development",vr=()=>{const e=ur(),o=jo({devMode:br,enhancers:[gr(),e],plugins:[hr(),fr(),yr()]});return{identifier:e,renderer:o}},{identifier:De,renderer:ce}=vr(),Sr=e=>Array.isArray(e)?e:[e],wr=e=>({children:o})=>r(Do,{renderer:e},...Sr(o)),ue=wr(ce),Tr=e=>ce.renderRule(Ie,e),Le=Object.assign(Tr,{global:ce.renderStatic.bind(ce)}),d=(e,o)=>{const i=typeof o=="function"?o:()=>o;return Yo(i,e,Object.keys)},h=t({}),Ht="FRESH@0.1.0",ma=t({$schema:"http://json-schema.org/draft-07/schema#",title:"FRESH Resume Schema",type:"object",additionalProperties:h,required:["name","meta"],properties:{name:t({type:"string",description:"The candidate's name as it should appear on the resume."}),meta:t({type:"object",additionalProperties:h,description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools.",required:["format"],properties:{format:t({const:Ht,description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:t({type:"string",description:"The semantic version number for this resume."})}}),info:t({type:"object",additionalProperties:h,description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote.",properties:{label:t({type:"string",description:"A label for this resume, such as 'Full-Stack Developer'."}),class:t({type:"string",description:"Profession type or 'character class'."}),image:t({type:"string",description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:t({type:"string",description:"A short description or summary of yourself as a candidate."}),quote:t({type:"string",description:"Candidate quote or byline."})}}),disposition:t({type:"object",additionalProperties:h,description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like.",properties:{travel:t({type:"integer",description:"Percentage of time willing to travel (0 to 100)."}),authorization:t({type:"string",description:"Work authorization: citizen, work visa, etc."}),commitment:t({type:"array",description:"Types of work commitment desired: contract, perm, seasonal, etc.",items:t({type:"string",description:"One of: contract, permanent, part-time, seasonal, full-time."})}),remote:t({type:"boolean",description:"Open to remote employment opportunities."}),relocation:t({type:"object",additionalProperties:h,properties:{willing:t({oneOf:[t({type:"string"}),t({type:"boolean"})],description:"Willingness to relocate."}),destinations:t({type:"array",description:"Preferred destinations for relocation",items:t({type:"string",description:"City or area of relocation."})})}})}}),contact:t({type:"object",additionalProperties:h,description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types.",properties:{email:t({type:"string",description:"Primary contact email.",format:"email"}),phone:t({type:"string",description:"Primary phone number."}),website:t({type:"string",description:"Website, blog, or home page.",format:"uri"}),other:t({type:"array",items:t({type:"object",additionalProperties:h,properties:{label:t({type:"string",description:"A label for this contact information."}),category:t({type:"string",description:"Type of contact information: email, phone, url, postal, or IM."}),value:t({type:"string",description:"Phone number, email address, website, etc."})}})})}}),location:t({type:"object",description:"The 'location' section, when present, contains the candidate's location and address info.",additionalProperties:h,properties:{address:t({type:"string",description:"Your full postal address."}),code:t({type:"string",description:"Postal or other official routing code."}),city:t({type:"string",description:"Your home city."}),country:t({type:"string",description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:t({type:"string",description:"Your state, region, or province."})}}),employment:t({type:"object",description:"The 'employment' section describes the candidate's formal employment history.",additionalProperties:h,properties:{summary:t({type:"string",description:"Summary of overall employment."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["employer"],properties:{employer:t({type:"string",description:"Employer name."}),position:t({type:"string",description:"Your position or formal job title."}),url:t({type:"string",description:"Employer website.",format:"uri"}),start:t({type:"string",description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities under this employer."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this position.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})})}}),projects:t({type:"array",description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Project name or code-name."}),category:t({type:"string",description:"Project type: open-source, private, side project, etc."}),description:t({type:"string",description:"Project description or summary."}),summary:t({type:"string",description:"A summary of your achievements and responsibilities on the project."}),role:t({type:"string",description:"Your role on the project: Contributor, Creator, etc."}),url:t({type:"string",description:"Project URL.",format:"uri"}),media:t({type:"array",description:"Media associated with this project.",items:t({type:"object",additionalProperties:h,required:["category"],properties:{category:t({type:"string",description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:t({type:"string",description:"Friendly media name."}),url:t({type:"string",description:"Media link, path, or location."})}})}),repo:t({type:"string",description:"Repo URL.",format:"uri"}),start:t({type:"string",description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy project-related achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this project.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})}),skills:t({type:"object",description:"A description of the candidate's formal skills and capabilities.",additionalProperties:h,properties:{sets:t({type:"array",items:t({type:"object",additionalProperties:h,required:["name","skills"],properties:{name:t({type:"string",description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:t({type:"string",description:"Level of mastery of the skill."}),skills:t({type:"array",items:t({type:"string",description:"Title or ID of a skill from the skills list."})})}})}),list:t({type:"array",items:t({type:"object",additionalProperties:h,required:["name"],properties:{name:t({type:"string",description:"The name or title of the skill."}),level:t({type:"string",description:"A freeform description of your level of mastery with the skill."}),summary:t({type:"string",description:"A short summary of your experience with this skill."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Number of years you've used the skill."})}})})}}),service:t({type:"object",description:"The 'service' section describes the candidate's overall service history in the true sense of the word 'service': volunteer work, military participation, civilian core, rescue and emergency services, and the like.",additionalProperties:h,properties:{summary:t({type:"string",description:"Summary of overall service/volunteer experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["organization"],properties:{category:t({type:"string",description:"The type of service work, such as volunteer or military."}),organization:t({type:"string",description:"The service organization, such as Red Cross or National Guard."}),position:t({type:"string",description:"Your position or formal service role."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date you joined the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you left the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities at this organization."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this service.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),education:t({type:"object",additionalProperties:h,description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses.",required:["level"],properties:{summary:t({type:"string",description:"Summary of overall education."}),level:t({type:"string",description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:t({type:"string",description:"Your degree, if any (BSCS, BA, etc.)."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["institution"],properties:{title:t({type:"string",description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."}),institution:t({type:"string",description:"College or school name."}),area:t({type:"string",description:"e.g. Arts"}),studyType:t({type:"string",description:"e.g. Bachelor"}),start:t({type:"string",description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),grade:t({type:"string",description:"Grade or GPA."}),curriculum:t({type:"array",description:"Notable courses, subjects, and educational experiences.",items:t({type:"string",description:"The course name and number or other identifying info."})}),url:t({type:"string",description:"Website or URL of the institution or school.",format:"uri"}),summary:t({type:"string",description:"A short summary of this education experience."}),keywords:t({type:"array",description:"Keywords associated with this education stint.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Graduated *summa cum laude*'."})}),location:t({type:"string",description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),social:t({type:"array",description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like.",items:t({type:"object",additionalProperties:h,required:["network","user","url"],properties:{network:t({type:"string",description:"The name of the social network, such as Facebook or GitHub."}),user:t({type:"string",description:"Your username or handle on the social network."}),url:t({type:"string",description:"URL of your profile page on this network.",format:"uri"}),label:t({type:"string",description:"A friendly label."})}})}),recognition:t({type:"array",description:"The 'recognition' section describes the candidate's public or professional plaudits, kudos, awards, and other forms of positive external reinforcement.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{category:t({type:"string",description:"Type of recognition: award, honor, prize, etc."}),title:t({type:"string",description:"Title of the award or recognition."}),date:t({type:"string",description:"Date awarded, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),from:t({type:"string",description:"Name of the awarding company, institution, or individual."}),summary:t({type:"string",description:"A brief description of the award and why you received it."}),url:t({type:"string",description:"A webpage or other associated URL.",format:"uri"})}})}),writing:t({type:"array",description:"The 'writing' section describes the candidate's writing and publication history, from blogs and essays to novels and dissertations.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Title of the article, essay, or book."}),category:t({type:"string",description:"One of 'book', 'article', 'essay', 'blog post', or 'series'."}),publisher:t({oneOf:[t({additionalProperties:h,type:"object",properties:{name:t({type:"string",description:"Publisher of the article, essay, or book."}),url:t({type:"string",description:"Publisher website or URL."})}}),t({type:"string"})],description:"Publisher of the article, essay, or book."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),url:t({type:"string",description:"Website or URL of this writing or publication."}),summary:t({type:"string",description:"A brief summary of the publication."})}})}),reading:t({type:"array",description:"The 'reading' section describes the candidate's reading habits and is intended to demonstrate familiarity with industry-relevant publications, blogs, books, or other media that a competent industry candidate should be expected to know.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Title of the book, blog, or article."}),category:t({type:"string",description:"The type of reading: book, article, blog, magazine, series, etc."}),url:t({type:"string",description:"URL of the book, blog, or article.",format:"uri"}),author:t({oneOf:[t({type:"string"}),t({type:"array",items:t({type:"string",description:"Author name."})})],description:"Author of the book, blog, or article."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),summary:t({type:"string",description:"A brief description of the book, magazine, etc."})}})}),speaking:t({type:"array",description:"The 'speaking' section describes the candidate's speaking engagements and presentations.",items:t({type:"object",additionalProperties:h,required:["event"],properties:{title:t({type:"string",description:"Speaking engagement title."}),event:t({type:"string",description:"Event at which you presented."}),location:t({type:"string",description:"Freeform location of the event, e.g., 'San Francisco, CA' or 'Tokyo'."}),date:t({type:"string",description:"Presentation date.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"An array of specific highlights such as 'Won 'Best Speaker' award at 2012 E3 expo'."})}),keywords:t({type:"array",description:"Keywords associated with this speaking engagement.",items:t({type:"string",description:"A list of keywords such as 'TED', 'E3', 'mathematics', 'Big Data', etc."})}),summary:t({type:"string",description:"A description of this speaking engagement."})}})}),governance:t({type:"array",description:"The 'governance' section describes the candidate's leadership, standards, board, and committee roles.",items:t({type:"object",additionalProperties:h,required:["organization"],properties:{summary:t({type:"string",description:"Summary of your governance at this organization."}),category:t({type:"string",description:"Type of governance: committee, board, standards group, etc."}),role:t({type:"string",description:"Governance role: board member, contributor, director, etc."}),organization:t({type:"string",description:"The organization."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"}),keywords:t({type:"array",description:"Keywords associated with this governance stint.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Increased company profits by 35% year over year'."})})}})}),languages:t({type:"array",description:"The 'languages' section describes the candidate's knowledge of world languages such as English, Spanish, or Chinese.",items:t({type:"object",additionalProperties:h,required:["language"],properties:{language:t({type:"string",description:"The name of the language: English, Spanish, etc."}),level:t({type:"string",description:"Level of fluency with the language, from 1 to 10."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Amount of time language spoken?"})}})}),samples:t({type:"array",description:"The 'samples' section provides an accessible demonstration of the candidate's portfolio or work product to potential employers and co-workers.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Title or descriptive name."}),summary:t({type:"string",description:"A brief description of the sample."}),url:t({type:"string",description:"URL of the sample (if any).",format:"uri"}),date:t({type:"string",description:"Date the sample was released in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights for this sample.",items:t({type:"string",description:"For ex, 'Implemented optimized search algorithm derived from Slices of Pi'."})}),keywords:t({type:"array",description:"Keywords associated with this work sample.",items:t({type:"string",description:"For example, C++, HTML, game."})})}})}),references:t({type:"array",description:"The 'references' section describes the candidate's personal, professional, and/or technical references.",items:t({type:"object",additionalProperties:h,required:["name"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),role:t({type:"string",description:"The occupation of this reference, or his or her relationship to the candidate."}),category:t({type:"string",description:"The type of reference, eg, professional, technical, or personal."}),private:t({type:"boolean",description:"Is this a private reference?"}),summary:t({type:"string",description:"Optional summary information for this reference."}),contact:t({type:"array",items:t({type:"object",additionalProperties:h,properties:{label:t({type:"string",description:"Friendly label for this piece of contact info."}),category:t({type:"string",description:"Type of contact information (phone, email, web, etc.)."}),value:t({type:"string",description:"The email address, phone number, etc."})}})})}})}),testimonials:t({type:"array",description:"The 'testimonials' section contains public testimonials of the candidate's professionalism and character.",items:t({type:"object",additionalProperties:h,required:["name","quote"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),quote:t({type:"string",description:"A quoted reference, eg, 'Susan was an excellent team leader, manager, and operations specialist with a great eye for detail. I'd gladly hire her again if I could!'"}),category:t({type:"string",description:"Type of reference: personal, professional, or technical."}),private:t({type:"boolean",description:"Public reference (testimonial) or via private contact?"})}})}),interests:t({type:"array",description:"The 'interests' section provides a sampling of the candidate's interests and enthusiasms outside of work.",items:t({type:"object",additionalProperties:h,required:["name"],properties:{name:t({type:"string",description:"The name or title of the interest or hobby."}),summary:t({type:"string"}),keywords:t({type:"array",description:"Keywords associated with this interest.",items:t({type:"string",description:"A keyword relating to this interest."})})}})}),extracurricular:t({type:"array",description:"The 'extracurricular' section describes the candidate's involvement with industry-related events and enterprises outside of work. For example: attending conferences, workshops, or meetups.",items:t({type:"object",additionalProperties:h,required:["title","activity"],properties:{title:t({type:"string",description:"Title of the extracurricular activity."}),activity:t({type:"string",description:"The extracurricular activity."}),location:t({type:"string",description:"City, state, or other freeform location."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"})}})}),affiliation:t({type:"object",additionalProperties:h,description:"The 'affiliation' section describes the candidate's membership in groups, clubs, organizations, and professional associations whether at the collegiate, corporate, or personal level.",properties:{summary:t({type:"string",description:"Optional summary of overall affiliation and membership experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["organization"],properties:{category:t({type:"string",description:"The type of affiliation: club, union, meetup, etc."}),organization:t({type:"string",description:"The name of the organization or group."}),role:t({type:"string",description:"Your role in the organization or group."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date your affiliation with the organization began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your affiliation with the organization ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities during this affiliation."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this affiliation.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}})}});var x;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(x||(x={}));var C;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator",e.DEVELOPER="Developer"})(C||(C={}));const _t=[{title:"Enketo",category:x.OPEN_SOURCE,description:`
      "Web forms evolved. Deploy and conduct surveys that work without a
      connection, on any device."
    `,summary:`
      Ongoing maintenance, developer experience improvements & helping
      determine the future direction of Enketo projects.
    `,repo:"https://github.com/enketo",role:C.DEVELOPER,start:"2021-04"},{title:"Eyelidlessness",category:x.PUBLIC_ACCESS,description:`
      My personal website and tech blog.
    `,summary:`
      Built with [Preact][1], [Microsite][2] and [Fela][3].

      [1]: https://preactjs.com/
      [2]: https://github.com/natemoo-re/microsite
      [3]: https://fela.js.org/
    `,repo:"https://github.com/eyelidlessness/eyelidlessness.github.io",role:C.CREATOR,start:"2020-10"},{title:"Microsite",category:x.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:C.CONTRIBUTOR,start:"2021-01"},{title:"HNDarkMode",category:x.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:C.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:x.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:C.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:x.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:C.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:x.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:C.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:x.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:C.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:x.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:C.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:x.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:C.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:x.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:C.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:x.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:C.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:x.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:C.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:x.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:C.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:x.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:C.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:x.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:C.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:x.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:C.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:x.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:C.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:x.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:C.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:x.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:C.CONTRIBUTOR,start:"2015-01",end:"2015-01"}],kr=e=>e,Cr=[{employer:"Treez",position:"Senior Software Engineer",start:"2018-12",end:"2020-09",summary:`
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
      `]}],Er=Cr;var w;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(w||(w={}));var Ce;(function(e){e.LANGUAGES_PLATFORMS="Languages & Platforms",e.SERVICES_DISTRIBUTED_SYSTEMS="Services & Distributed Systems",e.USER_INTERFACE_EXPERIENCE="User Interface & Experience"})(Ce||(Ce={}));const Ke={[Ce.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:w.EXPERT},{name:"OpenAPI & JSON Schema",level:w.EXPERT},{name:"Django REST framework",level:w.ADVANCED},{name:"Fault tolerance",level:w.ADVANCED},{name:"Microservice architecture",level:w.ADVANCED},{name:"Apache Storm",level:w.INTERMEDIATE},{name:"Redis",level:w.BASIC}],[Ce.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:w.EXPERT},{name:"DOM & Web APIs",level:w.EXPERT},{name:"Web performance",level:w.ADVANCED},{name:"SVG",level:w.ADVANCED},{name:"UI & UX design",level:w.ADVANCED},{name:"A11y",level:w.INTERMEDIATE}],[Ce.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:w.EXPERT},{name:"Clojure & ClojureScript",level:w.EXPERT},{name:"HTML & CSS",level:w.EXPERT},{name:"SQL (PostgreSQL)",level:w.ADVANCED},{name:"Python",level:w.INTERMEDIATE},{name:"Swift",level:w.BASIC},{name:"Java",level:w.BASIC}]},Pr={list:Object.values(Ke).flatMap(Ie),merged:Ke,sets:Object.entries(Ke).map(([e,o])=>({name:e,skills:o.map(({name:i})=>i)}))},ga=kr({name:"Trevor Schmidt",meta:{format:Ht,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:Er},info:{class:"Software Engineer",brief:Yt(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:_t,skills:Pr,social:[{network:"GitHub",url:"https://github.com/eyelidlessness",user:"eyelidlessness"}]}),$e=Symbol("DEFAULT_TOPIC"),j={[$e]:$e,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},xr=e=>typeof e=="string"||typeof e=="symbol",Ft=e=>xr(e)&&e in j,Je=e=>Ft(e)?j[e]:e,zt=Object.entries(j).reduce((e,o)=>{const[i,n]=o;return typeof i=="string"?{...e,[n]:i}:e},{}),Ar=e=>Ft(e)?e:zt[e],Mr=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),Rr=Object.fromEntries(Object.entries(zt).map(([e,o])=>typeof o=="string"?[e,Mr(o)]:null).filter(e=>e!=null)),Or=e=>{const o=Je(e);if(typeof o=="string")return Rr[o]},Be=2,Qe={minEm:1.0625,fluidVw:1.0625*Be,maxEm:1.25},T="@media (prefers-color-scheme: dark)",jr=["h1","h2","h3","h4","h5","h6"],Ir=["dd","dl","dt","li","ol","ul"],Yr=[...jr,...Ir,"p"],he=Qe.minEm/Qe.maxEm,ie={h1:1.953,h2:1.563,h3:1.25},Dr={h1:{minEm:ie.h1*he,fluidVw:ie.h1*he*Be,maxEm:ie.h1},h2:{minEm:ie.h2*he,fluidVw:ie.h2*he*Be,maxEm:ie.h2},h3:{minEm:ie.h3*he,fluidVw:ie.h3*he*Be,maxEm:ie.h3}},Ut=75,Ne=1.25,Lr=["0.7fr",`${Ne}rem`,[`${Ut}ch`,`calc(100% - ${Ne*2}rem)`],`${Ne}rem`,"1.2fr"],Ze=1,$r=["0.7fr",`${Ze}rem`,[`${Ut*1.1875}ch`,`calc(100% - ${Ze*2}rem)`],`${Ze}rem`,"1.2fr"],Br=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],et=Br.join(", "),Nr=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],Hr=Nr.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),H={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},_r="hover-inherit-topic-color",Fr={[j[$e]]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.DEFAULT_TOPIC.light},[T]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.DEFAULT_TOPIC.dark}}}}},[j.ABLEISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.ABLEISM}}},[j.ART]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.ARTS_CRAFTS}}},[j.LEMON]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.LEMON}}},[j.MENTAL_ILLNESS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.MENTAL_ILLNESS}}},[j.NEURODIVERGENCE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.NEURODIVERGENCE}}},[j.PHILOSOPHY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.PHILOSOPHY}}},[j.POLITICS]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.POLITICS}}},[j.RACISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.RACISM}}},[j.SEXISM]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.SEXISM}}},[j.SUBSTANCE_ABUSE]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.SUBSTANCE_ABUSE}}},[j.TECHNOLOGY]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.TECHNOLOGY}}},[j.TRANSPHOBIA]:{nested:{"&, &.hover-inherit-topic-color:hover":{color:H.TRANSPHOBIA}}}},Gt=De(),l={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:_r,baseFontSizeRange:Qe,darkMode:T,abbreviation:{backgroundImage:`linear-gradient(${["to top","hsl(64deg, 100%, 50%, 0.25)","hsl(64deg, 100%, 50%, 0.25) 0.5em","transparent 0.5em"].join(", ")})`},artOverlay:{backgroundColor:"hsla(192deg, 85%, 99%, 0.7)",nested:{"@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 85%, 99%, 0.5)",backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)"},[T]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.7)","@supports (backdrop-filter: blur(40px))":{backgroundColor:"hsla(192deg, 10%, 10%, 0.5)"}}}},aside:{backgroundColor:"hsl(192deg, 35%, 96.5%)"},asideBlock:{symbol:{color:"hsl(208deg, 35%, 81%)",nested:{[T]:{color:"hsl(208deg, 35%, 35%)"}}}},blog:{listing:{descriptionIdentifier:Gt,description:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em",nested:{[T]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${Gt}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[T]:{color:"hsl(212deg, 10%, 90%)"}}},[T]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[T]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},description:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},"& p":{lineHeight:1.3333},[T]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:et},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:et,nested:{[T]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:Yr,gitHubLogo:{fill:"#171515",nested:{[T]:{fill:"#fff"}}},headingRanges:Dr,[T]:{aside:{backgroundColor:"hsl(192deg, 15%, 13%)"},code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",borderColor:"#000"},prose:{color:"hsl(210deg, 10%, 90%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 85%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:Lr,mainGridSidePaddingRem:Ne,monospaceFont:et,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",borderColor:"#dbdbdb",borderStyle:"solid",borderWidth:"0.5px 0"},projects:{current:{backgroundColor:"hsl(244deg 100% 98%)",nested:{[T]:{backgroundColor:"hsl(244deg 30% 13%)"}}}},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:Hr},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[T]:{backgroundColor:"hsl(336deg, 100%, 7%)"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[T]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"hsl(47deg, 58%, 98%)",nested:{[T]:{backgroundColor:"hsl(41deg, 100%, 8%)"}}},separator:{borderBottom:"1px solid hsl(17deg, 78%, 90%)",nested:{[T]:{borderColor:"hsl(17deg, 70%, 17%)"}}}},skillLevel:{[w.BASIC]:{backgroundColor:"hsl(207deg, 25%, 83%)",nested:{[T]:{backgroundColor:"hsl(207deg, 15%, 43%)"}}},[w.INTERMEDIATE]:{backgroundColor:"hsl(188deg, 53%, 74%)",nested:{[T]:{backgroundColor:"hsl(188deg, 53%, 34%)"}}},[w.ADVANCED]:{backgroundColor:"hsl(188deg, 70%, 59%)",nested:{[T]:{backgroundColor:"hsl(188deg, 80%, 39%)"}}},[w.EXPERT]:{backgroundColor:"hsl(152deg, 100%, 39%)",nested:{[T]:{backgroundColor:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},scrollable:{cover:e=>({backgroundImage:`linear-gradient(to right, ${["transparent",`${e} 1rem`,e].join(", ")})`}),shadow:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,0.3)","rgba(0,0,0,0.125) 1px","transparent 5px"].join(", ")})`}},siteHeader:{columns:$r,pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},toggleSwitch:{button:{backgroundColor:"#fff",nested:{[T]:{backgroundColor:"#f9f9f9"}}},container:{off:{color:"#ddd",nested:{[T]:{color:"#666"}}},on:{color:"hsl(152deg, 100%, 39%)"}}},topicColors:Fr,topicTagIdentifier:De(),topicTagInner:{backgroundImage:ge(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[T]:{backgroundImage:ge(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:ge(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[T]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:ge(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")},visualization:{plot:{axis:{color:"hsl(194deg, 8%, 67%)",nested:{[T]:{color:"hsl(194deg, 8%, 50%)"}}}}}},tt=["b","em","h1","h2","h3","i","strong"],He=["h1","h2","h3","h4","h5","h6"],zr=[...He,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Ur=Array.from(new Set([...He,...zr,"div","fieldset","form","hgroup","hr","pre"])),Gr=ge(`
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
    font-size:        ${ae(`${l.baseFontSizeRange.minEm}em`,`${l.baseFontSizeRange.fluidVw}vw`,`${l.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${O(["body"],{...l.document,...l.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${He.join(",")} {
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
`),qr=()=>{Le.global(ge(`
      @media (prefers-reduced-motion) {
        * {
          transition: none !important;
        }
      }

      ${Ur.join(",")} {
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

      ${O(tt,l.emphasize)}

      h1 {
        font-size: ${ae(`${l.headingRanges.h1.minEm}em`,`${l.headingRanges.h1.fluidVw}vw`,`${l.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${ae(`${l.headingRanges.h2.minEm}em`,`${l.headingRanges.h2.fluidVw}vw`,`${l.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${ae(`${l.headingRanges.h3.minEm}em`,`${l.headingRanges.h3.fluidVw}vw`,`${l.headingRanges.h3.maxEm}em`)};
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

      ${O(["hr:after"],{...l.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${O(["pre"],l.pre)}

      ${O(["code"],{...l.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

      pre code {
        background-color: transparent;
        display:          block;
        line-height:      1.325em;
        margin:           0;
        padding:          0;
      }

      ${l.firstLastMarginZeroElements.map(e=>`${e}:first-child`).join(", ")} {
        margin-top: 0;
      }

      ${l.firstLastMarginZeroElements.map(e=>`${e}:last-child`).join(", ")} {
        margin-bottom: 0;
      }

      ${O(["a"],{...l.links,fontWeight:"bolder"})}

      ${O(["abbr"],{...l.abbreviation,textDecoration:"none"})}

      ${O(["aside","small"],l.deemphasize)}

      ${O(["aside"],{...l.aside,fontSize:"0.8889em",margin:"1rem 0",padding:"0.8889rem","& p":{lineHeight:1.3333}})}

      ${tt.map(e=>`aside ${e}`).join(", ")} {
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

      ${l.darkMode} {
        ${O(["body"],{...l[l.darkMode].document,...l[l.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${O(tt,l[l.darkMode].emphasize)}
        ${O(["pre"],l[l.darkMode].pre)}
        ${O(["code"],l[l.darkMode].code)}
        ${O(["a"],l[l.darkMode].links)}
        ${O(["aside","small"],l[l.darkMode].deemphasize)}
        ${O(["aside"],l[l.darkMode].aside)}
        ${O(["hr:after"],l[l.darkMode].separator)}
      }
    `))},Xr=`
  ${l.mainGridColumns[0]}
  ${l.mainGridColumns[1]}
  min(
    ${l.mainGridColumns[2][0]},
    ${l.mainGridColumns[2][1]}
  )
  ${l.mainGridColumns[3]}
  ${l.mainGridColumns[4]}
`.replace(/\s+/g," "),qt={gridColumn:"1 / -1"},Xt=Le(qt),_=d("div",{nested:{[`& > .${Xt}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > aside":{marginTop:0},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:Xr,...qt}),Vr=({children:e,shadow:o,...i})=>r(_,{...i},e),Vt=([e,o,i])=>`rgba(${[e,o,i,0].join(",")})`,Wt=(e,o)=>e!=null&&o!=null?{backgroundImage:[`linear-gradient(${["to left",`rgba(${o.join(",")})`,`${Vt(o)} 2rem`].join(", ")})`,`linear-gradient(${["to left",`rgba(${e.join(",")})`,`rgba(${e.join(",")}) 0.5px`,`${Vt(e)} 5px`].join(", ")})`].join(", ")}:null,Wr=e=>{if(e!=null){const{darkMask:o,darkScroll:i,lightMask:n,lightScroll:s}=e;return{dark:Wt(i,o),light:Wt(s,n)}}return{dark:null,light:null}},Kt=d(Vr,({shadow:e})=>{const{dark:o,light:i}=Wr(e),n=o==null?null:{[l.darkMode]:o};return{...i,backgroundAttachment:"local, scroll",backgroundPosition:"100% 0, 0 0",backgroundRepeat:"no-repeat",backgroundSize:"1rem, auto",paddingRight:l.mainGridSidePaddingRem,overflowX:"auto",nested:{...n,"& > *":{gridColumn:"3 / -1"}}}}),Kr=d(_,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),Jt=d("div",{paddingLeft:"1rem"}),Jr=d("div",{flexGrow:0,fontSize:"9em",gridColumn:"2",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),Qr=d("div",{flexGrow:1,padding:"1rem 0.75rem"}),ot="div",Zr={ContentContainer:ot,InnerContainer:Jt,OuterContainer:ot,SymbolContainer:ot},Qt=e=>{const{children:o,ContentContainer:i,InnerContainer:n,OuterContainer:s,outerContainerProps:a,symbol:c,SymbolContainer:p}={...Zr,...e};return r(Kr,{as:s,...a},r(Jr,{as:p,role:"presentation"},c),r(Jt,{as:n},r(Qr,{as:i},o)))},ei=d("pre",{fontSize:"1rem"}),ti=d(Kt,{backgroundAttachment:"local",backgroundImage:`linear-gradient(${["to left","rgba(255,255,255,1)","rgba(255,255,255,1) 5rem","rgba(255,255,255,0) 6rem"].join(",")})`,backgroundPosition:"calc(100% + 4rem) 0",backgroundRepeat:"no-repeat",backgroundSize:"6rem",paddingLeft:"clamp(1.25em, 3.5vw, 3em)",nested:{[l.darkMode]:{backgroundImage:`linear-gradient(${["to left","rgba(0,0,0,1)","rgba(0,0,0,1) 5rem","rgba(0,0,0,0) 6rem"].join(",")})`}}}),oi=e=>r(ti,{...e}),ri=d(_,{...l.pre,backgroundImage:`linear-gradient(${["to left","rgba(124, 128, 131, 0.75)","rgba(124, 128, 131, 0.75) 0.5px","rgba(124, 128, 131, 0)    5px"].join(",")})`,nested:{[l.darkMode]:{...l[l.darkMode].pre,backgroundImage:`linear-gradient(${["to left","rgba(230, 179, 213, 0.75)","rgba(230, 179, 213, 0.75) 0.5px","rgba(230, 179, 213, 0)    5px"].join(",")})`},"& code":{backgroundColor:"transparent",hyphens:"none",overflowWrap:"normal",whiteSpace:"pre",wordWrap:"normal"},"& pre":{backgroundColor:"transparent",border:0,maxWidth:"100%",margin:0,padding:"1rem 0",whiteSpace:"pre"}}}),ii=d("div",{...l.codeBlock.symbol,fontSize:"clamp(3em, 7vw, 4em)",marginLeft:"-0.3em",marginTop:"-0.325em"}),ni=({children:e})=>r(Qt,{ContentContainer:ei,InnerContainer:oi,OuterContainer:ri,symbol:"{",SymbolContainer:ii},e),si=e=>e.map((o,i)=>i),rt=(e,o)=>si(e).sort((i,n)=>{const s=o(e[i],e[n]);return s===0?i===n?0:i>n?1:-1:s}).map(i=>e[i]),ai=e=>typeof e=="object"&&e!=null,ci=d("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),li=(e,o)=>ai(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof o=="string"&&Lo().test(o),di=({["aria-label"]:e,children:o,role:i})=>r(ci,{"aria-label":e,role:i},o),pi={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},mi={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",copypasta:"copy and paste",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer","SHA-1":"Secure Hash Algorithm 1",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",trig:"trigonometry",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},gi={...pi,...mi},Zt=se.resolve(process.cwd(),"./syntax-themes"),[ui,hi]=await Promise.all([Dt(se.resolve(Zt,"./yi-dark.json")),Dt(se.resolve(Zt,"./yi-light.json"))]),fi={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},yi={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},bi=e=>e.trim().split(/\b\W*\b/).reduce((o,i)=>({...o,...yi[i]}),{}),vi=e=>Object.entries(e).reduce((o,[i,n])=>{const s=fi[i];if(n==null||typeof s!="string")return o;const a=s==="fontStyle"?bi(n):{[s]:n};return{...o,...a}},{}),[Si,wi]=await Promise.all([Lt({theme:ui}),Lt({theme:hi})]),Ti=new Set(or.map(e=>e.id)),ki=new Set(["ts","tsx","typescript"]),eo=e=>e.explanation?.reduce((o,i)=>({...o,...i.scopes.reduce((n,{themeMatches:s})=>({...n,...s.reduce((a,{settings:c})=>({...a,...vi(c)}),n)}),o)}),{color:e.color}),Ci=(e,o,i={})=>{const n=eo(e),s=eo(o),a=s==null?null:{nested:{[l.darkMode]:s}},{content:c}=e;if(n==null&&a==null)return r("span",i,c);const p={...n,...a},m=d("span",p);return r(m,i,c)},Ei=Le({paddingRight:"1rem"}),Pi={className:Ei},xi=(e,o)=>Rt(r(ue,{},r("pre",{},r("code",{},...e.reduce((i,n,s)=>{const a=n.map((p,m)=>{const g=o[s][m],f=m===n.length-1?Pi:{};return Ci(p,g,f)}),c=s===0?"":`
`;return[...i,c,...a]},[]))))),Ai=e=>{const{lang:o,value:i,meta:n}=e,s=Boolean(process?.env?.TWOSLASH_DISABLE)||!0,a=String(o)==="json5"?"json":o;let c;const p=i.replace(/^\n+|\n+$/g,"");if(!Ti.has(a))c=rr.plainTextRenderer(p,{});else{const m=wi.codeToThemedTokens(p,a),g=Si.codeToThemedTokens(p,a);c=xi(m,g)}ki.has(a)&&!n?.includes("ignore"),e.children=[],e.type="html",e.value=c},Mi=()=>o=>{xt(o,"code",Ai)};import.meta.env=We;const Ee=Mt.createRequire(import.meta.url),Ri=Ee("rehype-parse"),Oi=Ee("rehype-remark"),ji=Ee("remark"),Ii=Ee("remark-abbr"),Yi=Ee("remark-stringify"),Di=({className:e,children:o,...i})=>e==="language-id"?null:e==="code-container"?Oe(N,i,...At(o)):r("div",{className:e,...i},...At(o)),Li=({children:e,...o})=>li(o,e)?r(di,o,e):r("span",o,e),it={components:{div:Di,pre:ni,span:Li},rehypePlugins:[$o],remarkPlugins:[Mi,Ii,ar,Bo,No]},$i=e=>{const{children:o=Oe(()=>null,{}),components:i={},rehypePlugins:n=[],remarkPlugins:s=[]}=e,a={...it.components,...i},c={mdx:Oe,MDXProvider:Qo,components:a,props:{}},p=typeof o=="string"?Yt(o).trim():o,m=[...it.rehypePlugins,...n],g=[...it.remarkPlugins,...s],f=Jo.sync(p,{rehypePlugins:m,remarkPlugins:g,skipExport:!0}).trim(),{code:u}=Zo(f,{objectAssign:"Object.assign"}),b=Object.keys(c),k=Object.values(c),y=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...b,`${u}

${y}`)(Oe,...k)},Bi=Object.entries(gi).map(([e,o])=>`*[${e}]: ${o}`).join(`
`),Ni=e=>[e,Bi].join(`

`),to=([e,...o],{includeAbbreviations:i=!0})=>{const n=typeof e=="string"?[e,...o].join(""):String.raw(e,...o);return i?Ni(n):n},nt=(...e)=>{const o=to(e,{includeAbbreviations:!0});return r(ue,{},r($i,{},o))},Hi=(...e)=>{const o=to(e,{includeAbbreviations:!1});return ji().use(Ri).use(Oi).use(Yi).use(er).use(tr).processSync(o).contents.toString().trim()},te=(e,o)=>Number(e.toFixed(o)),le=parseInt("ff",16),oo=parseInt("00",16),ro=.05,st=.15,at=.05;class Pe extends Error{constructor(o){super(`Invalid hash: ${o}`)}}const _i=/^[0-9a-f]{40}$/i,Fi=e=>_i.test(e),io=new Set(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),zi=e=>e.length===10,Ui=/([0-9a-f]{2})([0-9a-f]{2})/ig,ct=e=>{if(!Fi(e))throw new Pe(e);const i=Array.from(e.matchAll(Ui)??[]).map(([n,s,a])=>({x:s,y:a}));if(!zi(i))throw new Pe(e);return i},Gi=Symbol("IS_POINT"),qi=e=>Object.assign(e,{[Gi]:!0}),no=e=>{const o=parseInt(e,16);if(o>le||o<oo)throw new Error(`Not a valid coordinate: ${e}`);return qi(o)},Xi=({x:e,y:o})=>({x:no(e),y:no(o)}),Vi=e=>e.length===10,lt=(e,o)=>{try{const i=o.map(Xi);if(!Vi(i))throw new Pe(e);return i}catch{throw new Pe(e)}},Wi=Symbol("SCALED_COORDINATE"),so=e=>e.reduce(({max:o,min:i},{y:n})=>({max:Math.max(Number(o),Number(n)),min:Math.min(Number(i),Number(n))}),{max:-Infinity,min:Infinity}),W=(e,o)=>Object.assign(te(e,2),{[Wi]:o}),fe=({x:e,xScale:o,y:i,yScale:n})=>({x:W(e,o),y:W(i,n)}),dt=({x:e,y:o},{xScale:i,xShift:n,yScale:s,yShift:a})=>fe({x:(e+n)*i,xScale:i,y:(o+a)*s,yScale:s}),pt=({points:e,xMax:o,xScale:i,yScale:n})=>[fe({x:0,xScale:i,y:0,yScale:n}),...e,fe({x:o,xScale:i,y:0,yScale:n})].reduce((s,a,c,p)=>{if(c===0||c===p.length-1)return s;const m=W(0,n),g=[{x:p[c-1].x,y:m},a,{x:p[c+1].x,y:m}];return[...s,g]},[]),mt=({segments:e,xMax:o,xScale:i,yScale:n})=>e.map(s=>{const[{x:a,y:c},{x:p,y:m},{x:g,y:f}]=s,u=g-a,b=m/u,y=6/b;if(y<1){const M=y*.2*a,E=a-M,Y=g+M,R=E<0?Math.abs(E):Y>o?o-Y:0,P=E+R,F=Y+R,z=y*.3,ee=p+R,K=z*m,oe=m-K;return[fe({x:P,xScale:i,y:c,yScale:n}),fe({x:ee,xScale:i,y:oe,yScale:n}),fe({x:F,xScale:i,y:f,yScale:n})]}return s}),Ki=({x:e,y:o},{x:i,y:n})=>{const s=i-e,a=n-o;return{angle:Math.atan2(a,s),length:Math.sqrt(s**2+a**2)}},ao=({current:e,previous:o,next:i,reverse:n,smoothing:s,xScale:a,yScale:c})=>{const p=n?Math.PI:0,m=Ki(o,i),g=m.angle+p,f=m.length*s,{x:u,y:b}=e,k=u+Math.cos(g)*f,y=b+Math.sin(g)*f;return{x:W(k,a),y:W(y,c)}},gt=({index:e,point:o,points:i,smoothing:n,xScale:s,yScale:a})=>{const c=i[e-1];if(c==null)throw new Error("Cannot build cubic bezier points, no point before the provided index.");const p=i[e-2]??c,m=ao({current:c,previous:p,next:o,reverse:!1,smoothing:n,xScale:s,yScale:a}),g=c,f=i[e+1]??o,u=ao({current:o,previous:g,next:f,reverse:!0,smoothing:n,xScale:s,yScale:a});return[m,u,o]},co=({segment:e,smoothing:o,xScale:i,yScale:n})=>e.reduce((s,a,c)=>{if(c===0)return s;const m=gt({index:c,point:a,points:e,smoothing:o,xScale:i,yScale:n}).map(g=>`${g.x},${g.y}`).join(" ");return[...s,`C ${m}`]},[]),Ji=({baseYCoordinate:e,isBaselineBelowMidpoint:o,segments:i,xScale:n,yMax:s,yScale:a,yTilt:c=!1})=>i.reduce((p,m,g,f)=>{const{length:u}=f,[b,k,y]=m,{x:v,y:M}=b,{x:E,y:Y}=k,{x:R,y:P}=y,F=R-v,z=F===0?0:Math.max(Y/F*at,st),ee=c?.1:0,K=1-ee,oe=1+ee,Re=g%2==0?K:oe,we=o?M+e:s-M+e,A={x:v,y:W(we*Re,a)},U=g%2==0?K:oe,I=o?P+e:s-P+e,J={x:W(R,n),y:W(I*U,a)},G=E-v,Q=R-E,D=Q>G?0:0-(E-v)*ro,Z=(u-g)*(a/100*s),re={x:W(E+D,n),y:W(Y-Z,a)},L=co({segment:[A,re,J],smoothing:z,xScale:n,yScale:a}),$=Q>G?(R-E)*ro:0,q={x:W(E+$,n),y:W(s-Z,a)},B=co({segment:[J,q,A],smoothing:z,xScale:n,yScale:a});return[...p,[`M ${A.x},${A.y}`,...L,...B,"Z"].join(" ")]},[]),Qi=({hash:e,xPadding:o=0,xScale:i=1,yOffset:n=.5,yPadding:s=0,yScale:a=1})=>{const c=ct(e),p=lt(e,c),m=rt(p,({x:P},{x:F})=>Number(P)===Number(F)?0:Number(P)>Number(F)?1:-1),g=o/2,f=s/2,u=m.map(P=>dt(P,{xScale:i,xShift:g,yScale:a,yShift:f})),b=(le+o)*i,{max:k}=so(u),y=(k+s)*a,v=pt({points:u,xMax:b,xScale:i,yScale:a}),M=mt({segments:v,xMax:b,xScale:i,yScale:a}),E=n>.5,Y=E?y*n:-1*y*n;return{segmentPaths:Ji({baseYCoordinate:Y,segments:M,xScale:i,yMax:y,isBaselineBelowMidpoint:E,yScale:a}),xMax:b,yMax:y}};var ut;(function(e){e.PNG="png"})(ut||(ut={}));const ht=process.cwd(),xe=e=>e.startsWith("/")?se.resolve(ht,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):se.extname(e)==""?se.resolve(ht,"./src/pages/",`${e}.tsx`):e;var ye;(function(e){e.ALL="",e.CURRENT="--diff-filter=M",e.FIRST="--diff-filter=A",e.FIRST_MERGE="--full-history --reverse --merges"})(ye||(ye={}));var de;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(de||(de={}));const Zi="origin",en="main",Ae=e=>{const{branch:o=en,decode:i,filter:n=ye.FIRST,format:s,path:a=ht,remote:c=Zi}=e,{error:p,stdout:m}=ir.spawnSync("git",["log",...n.split(" "),`--branches=${o}`,`--format=${s}`,`--remotes=${c}`,"--",a]);if(p)throw p;const g=m.toString().trim();return(g===""?[]:g.split(`
`)).map(i)},ft=e=>{const o=new Date(e);if(!isNaN(o.getTime()))return o},tn=e=>{const o=xe(e),[i=null]=Ae({decode:ft,filter:ye.CURRENT,format:de.ISO_DATE,path:o});return i},on=e=>{const o=xe(e),[i=null]=Ae({decode:ft,format:de.ISO_DATE,path:o});return i},rn=e=>{const o=xe(e),[i=null]=Ae({decode:ft,filter:ye.FIRST_MERGE,format:de.ISO_DATE,path:o});return i},yt=e=>{const o=Xe.readFileSync(e).toString();let i=nr.createHash("sha1");return i.update(o),i.digest("hex")},nn=e=>{const o=xe(e),[i]=Ae({decode:Ie,format:de.HASH,path:o});return i??yt(o)},sn=e=>{const o=xe(e),[i]=Ae({decode:Ie,filter:ye.FIRST_MERGE,format:de.HASH,path:o});return i??yt(o)},an={height:630,width:1200},cn=process.env.EYELIDLESSNESS_HOST??"https://eyelidlessness.github.io",ln=$t({alg:"sha1",coerce:!0,sort:!0,trim:!0}),dn=(e,o,i=ut.PNG,n=an)=>{const s=e.replace(/^file:(\/\/)?(\/.*?)\/src\/.*$/,"$2/images"),a=ln.hash(o),c=se.resolve(s,`${a}.${i}`),p=c.replace(/^.*?\/images\//,"/images/");return{image:{absolutePath:c,imageType:i,publicPath:p,...n}}};var pe;(function(e){e.IMMUTABLE="immutable",e.IMMUTABLE_MERGE="immutable-merge",e.MUTABLE="mutable"})(pe||(pe={}));const lo=(e,o,i,n,s=[j.TECHNOLOGY])=>{const a=n===pe.MUTABLE,c=n===pe.IMMUTABLE_MERGE,p=o.replace(/^file:(\/\/)?/,""),m=a?yt(p):c?sn(e):nn(e),g={created:(c?rn(e):on(e))??Xe.statSync(p).ctime,updated:tn(e)??Xe.statSync(p).mtime},u=dn(o,a?{importURL:o,stat:g,topics:s}:{hash:m,importURL:o});return{hash:m,host:cn,path:e,social:u,stat:g,title:i,topics:s}},po=()=>r(N,null,r("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},r("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),r("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),r("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),r("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),r("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),r("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),r("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),r("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},r("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),r("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},r("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),r("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),r("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),r("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},r("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),pn=()=>r("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},r("defs",null,r(po,null))),mn=1.6180334,gn=4,mo=te(mn*5,6),go=.75,be=.15,un=1.5,ve=ae("6rem",`${100/mo}vw`,"10rem"),hn=d(_,{height:ve,position:"relative",width:"100%"}),fn=d("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),yn=d("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var Me;(function(e){e.INLINE="inline",e.NONE="none"})(Me||(Me={}));const bt={xPadding:gn,xScale:mo,yOffset:go,yPadding:be,yScale:un},vt=e=>{const{className:o,defsUsage:i=Me.INLINE,hash:n,height:s,rawSVG:a=!1,styleRenderer:c=ce,title:p,topics:m=[],width:g}=e,f=m.length<2?[...m,j[$e]]:m,u=P=>`${P}-${n}`,{segmentPaths:b,xMax:k,yMax:y}=Qi({...bt,hash:n}),v=y*go,M=y*be/10.24,E=M*.75,R=r(fn,{className:Xt,height:s,preserveAspectRatio:"none",viewBox:[0,0,k,y].join(" "),width:g},r("title",null,"Generated art for the page or post titled",r("i",null,p),", with the content or commit hash ",n," ",f.length>0?[", and the topics: ",f.map(String).join(", ")]:null),r("defs",null,i===Me.INLINE?r(po,null):null,r("filter",{id:u("blur")},r("feOffset",{in:"SourceGraphic",dx:"0",dy:E,result:"glowOffsetOut"}),r("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:M,result:"glowBlurOut"}),r("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),r("clipPath",{id:u("blurOverlayClip")},r("rect",{x:"0",width:k,y:v,height:y})),r("filter",{id:u("blurOverlay")},r("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:E}),r("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:M})),r("filter",{id:u("blurUnderlay")},r("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:E}),r("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:M}),r("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),r("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),r("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),r("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:M})),r("g",{id:u("blobs")},b.map((P,F)=>{const z=F%f.length,ee=f[z],K=c.renderRule(()=>({...l.topicColors[ee]}),Object.keys);return r(yn,{key:P,className:K,d:P,mask:"url(#softVerticalFade)"})}))),r("g",{transform:[`translate(0, ${y*be})`,`scale(1, ${1-be*2})`].join(" "),filter:`url(#${u("blur")})`},r("use",{href:`#${u("blobs")}`,mask:"url(#horizontalMidFade)"})),r("g",{"clip-path":`url(#${u("blurOverlayClip")})`,filter:`url(#${u("blurOverlay")})`,transform:[`translate(0, ${y*be})`,`scale(1, ${1-be*2})`].join(" ")},r("use",{href:`#${u("blobs")}`,mask:"url(#softVerticalFade)"})));return a?R:r(hn,{className:o},R)},bn=[,"January","February","March","April","May","June","July","August","September","October","November","December"],vn=d("time",{nested:{[l.darkMode]:{...l[l.darkMode].deemphasize}},...l.deemphasize});var ne;(function(e){e.DEFAULT="DEFAULT",e.META="META",e.SHORT="SHORT"})(ne||(ne={}));const St=({date:e,mode:o=ne.DEFAULT,...i})=>{const n=e.getMonth()+1,s=e.getFullYear(),a=o===ne.SHORT?`${n}/${s}`:o===ne.META?"":[e.getDate(),bn[n],s].join(" ");return r(vn,{...i,datetime:e.toISOString()},a)},Sn=d("a",{...l.topicTagLink(l.topicTagIdentifier.className)}),wn=d("span",l.topicTagIdentifier()),Tn=d(wn,{...l.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),kn=({className:e,link:o=!0,topic:i})=>{const n=Or(i),s=Je(i);if(n==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=o?Sn:"span",c=o?{href:`/blog/topics/${n}/`}:{};return r(a,{className:[e,l.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...c},r(Tn,null,s))},uo=d(kn,e=>({...l.topicTagOuter,...l.topicColors[Je(e.topic)],backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"})),Cn=d("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),En=d("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),ho=({className:e,link:o=!0,topics:i})=>r(Cn,{className:e},i.map(n=>typeof n=="string"?r(En,{key:Ar(n)},r(uo,{link:o,topic:n})):null)),Pn=e=>e.reduce((o,i)=>{const n=i.stat.created.getFullYear(),s=o[n]??[];return{...o,[n]:[...s,i]}},{}),xn=d(_,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),An=d(_,{...l.blog.listing.item,minHeight:ve,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),Mn=d(_,{paddingTop:`calc(${ve} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),Rn=d(_,{fontWeight:"normal",gridColumn:"2 / -2",position:"relative"}),On=d("div",{gridColumn:"1 / -1",left:0,position:"absolute",top:"1rem",width:"100%"}),jn=Le({backdropFilter:"blur(0.25rem) saturate(5)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(0.25rem) saturate(5)"}),In=d("h2",{...l.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),Yn=d(St,{padding:"0 0.5rem 0.125rem 0"}),Dn=d(ho,{gridColumn:"3 / 3"}),Ln=d("div",{...l.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),$n=d("a",{fontSize:"0.875em"});var _e;(function(e){e.DATE="date"})(_e||(_e={}));var Fe;(function(e){e.ASC="asc",e.DESC="desc"})(Fe||(Fe={}));const Bn=({order:e=Fe.DESC,posts:o,sort:i=_e.DATE})=>{const n=o.slice().sort((a,c)=>e===Fe.DESC&&i===_e.DATE?a.stat.created>c.stat.created?-1:1:0),s=Pn(n);return r(N,null,Object.entries(s).map(([a,c])=>r(N,{key:a},r(xn,null,c.map(p=>{const{CustomArt:m=vt,description:g,hash:f,path:u,stat:{created:b},title:k,topics:y}=p;return r(An,{key:u},r(Mn,{as:"a",href:u},r(On,null,r(m,{defsUsage:Me.NONE,hash:f,padded:!0,renderType:"listing",title:k,topics:y})),r(Rn,null,r(In,{className:jn},k),r(Yn,{date:b}))),r(Dn,{link:!1,topics:y}),r(Ln,{className:l.blog.listing.descriptionIdentifier},g),r("p",null,r($n,{href:u},"Read more\u2026")))})))))},Nn=()=>r(N,null,r("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),r("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),r("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),r("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),r("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),r("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),r("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),r("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),r("meta",{name:"application-name",content:"Eyelidlessness"}),r("meta",{name:"msapplication-TileColor",content:"#555555"}),r("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),r("meta",{name:"theme-color",content:"#ffffff"}));qr();const fo=({children:e,meta:{description:o,host:i,redirect:n,social:{image:s},title:a},...c})=>n?r(Bt,{...c},r(je.title,null,"Redirecting to ",n),r("meta",{"http-equiv":"refresh",content:`0; URL=${n}`}),r("link",{rel:"canonical",href:n})):r(Bt,{...c},r(je.title,null,a," | Eyelidlessness"),o!=null?r(je.description,null,o):r(N,null),r("style",{dangerouslySetInnerHTML:{__html:Gr}}),r("meta",{name:"twitter:card",content:"summary_large_image"}),r("meta",{name:"twitter:site",content:"@eyelidlessenss"}),r(je.image,{alt:a,height:s.height,src:`${i}${s.publicPath}`,width:s.width}),r(N,null,e),r(Nn,null)),Hn=({as:e="div",devilsBreakpoint:o,gap:i,...n})=>{const s=d(e,{alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[i?.horizontal??"0px",`calc((${o} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:i?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}});return r(s,{...n})},me=512,yo=[0,0,me,me].join(" "),_n=me/2,Fn=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),zn=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:yo,width:"0"},r("defs",null,r("mask",{id:"octocat-knockout"},r("rect",{fill:"#fff",height:me,mask:"url(#octocat)",rx:_n,width:me}),r("path",{d:Fn,fill:"#000"})))),Un=d("rect",{...l.gitHubLogo}),bo=({className:e})=>r("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:yo},r("title",null,"GitHub"),r(Un,{height:me,mask:"url(#octocat-knockout)",width:me})),ze={height:60,width:338},Gn=d("svg",{display:"inline-block",maxWidth:"100%",width:`${ze.width}px`}),qn=d("use",{nested:{[l.darkMode]:{...l[l.darkMode].siteLogo}},...l.siteLogo,fill:"currentcolor"}),Xn=`0 0 ${ze.width} ${ze.height}`,Vn=()=>r(Gn,{viewBox:Xn},r(qn,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),r("title",null,"Eyelidlessness")),{columns:Se}=l.siteHeader,Wn=`
  ${Se[0]}
  ${Se[1]}
  min(
    ${Se[2][0]},
    ${Se[2][1]}
  )
  ${Se[3]}
  ${Se[4]}
`.replace(/\s+/g," "),Kn=d("header",{...l.artOverlay,display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Wn,padding:"1rem 0",position:"relative",zIndex:1}),Jn=d("div",{gridColumn:3}),Qn=d("div",{margin:"0 auto"}),Zn=d("a",{textDecoration:"none"}),es=d("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),vo=1,ts=d("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${vo/2}rem`,padding:0}),os=d("a",{...l.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[l.darkMode]:{...l[l.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),So="1.5em",ua=d(bo,{display:"block",width:`clamp(1.125em, 4vw, ${So})`}),rs=()=>{const e=[{label:"Blog",location:"/"},{label:"Projects",location:"/projects/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],o=e.reduce((s,a)=>typeof a.label=="string"?s+a.label.length:s,0),i={horizontal:"2rem"},n=`${[`${ze.width}px`,i.horizontal,`${o+1}ch`,So,`${e.length*vo}rem`].join(" + ")}`;return r(Kn,null,r(Jn,null,r(Hn,{as:"nav",devilsBreakpoint:n,gap:i},r(Qn,null,r(Zn,{href:"/"},r(Vn,null))),r(es,null,e.map(({location:s,label:a})=>r(ts,null,r(os,{href:s},a)))))))},is=d(_,{paddingTop:0,paddingBottom:"4em"}),wo=({redirect:e,...o})=>r(ue,null,e==null?r(N,null,r(rs,null),r(is,{as:"main",...o})):r(N,null)),ns=d(_,{...l.description,nested:{...l.description.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),ss=d("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),as=d("div",{fontSize:"0.889em"}),cs=({as:e="section",title:o,...i})=>r(ns,{as:e,itemprop:"description"},o?r(ss,null,o):null,r(as,{...i})),ls=d(_,{...l.artOverlay}),ds=d("h1",{marginBottom:"0.25rem"}),ps=d(_,{marginBottom:"1rem"}),ms=e=>{const{children:o,CustomArt:i,description:n,descriptionRaw:s,hash:a,redirect:c,stat:{created:p},title:m,topics:g}=e;return r(N,null,r(fo,{meta:{...e,description:s}}),r(wo,{as:"article",redirect:c},r(ps,null,i==null?r(vt,{hash:a,title:m,topics:g}):r(i,{hash:a,renderType:"post",StylesProvider:ue,title:m,topics:g}),r(ls,null,r(ds,null,m),r(St,{date:p,itemprop:"datePublished"}),r(ho,{link:!1,topics:g}))),r(cs,null,n),o))},To={IMMUTABLE:pe.IMMUTABLE,IMMUTABLE_MERGE:pe.IMMUTABLE_MERGE},gs=async e=>{const{description:o,importURL:i,path:n,redirect:s,title:a,topics:c,type:p=To.IMMUTABLE_MERGE}=e,{CustomArt:m,hash:g,host:f,social:u,stat:b}=lo(n,i,a,p,c),k=Hi`${Rt(r(N,null,o))}`;return{CustomArt:m,description:o,descriptionRaw:k,hash:g,host:f,path:n,redirect:s,social:u,stat:b,title:a,topics:c}},ko=d("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),Co="@media (min-width: 41.666rem)",us=d(ko,{display:"block",margin:0,nested:{[Co]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}}}}),hs=d(ko,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),fs=d(hs,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),ys=d("h3",{paddingLeft:0,textIndent:0}),bs=d("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),vs=/^(\d{4})-(\d{2})$/,Eo=e=>{const o=e.match(vs);if(o==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,i,n]=o;return new Date(`${i}-${n}-01T00:00:00`)},wt=d("div",{fontSize:"0.88889em"}),Ue=d(St,{fontSize:"inherit"}),Ss=({range:[e,o]})=>{const i=Eo(e);if(o==null)return r(wt,null,"Since ",r(Ue,{date:i,itemprop:"startDate",mode:ne.SHORT}));const n=Eo(o);return e==o?r(wt,null,r(Ue,{date:i,itemprop:"endDate",mode:ne.SHORT})):r(wt,null,r(Ue,{date:i,itemprop:"startDate",mode:ne.SHORT})," \u2013 ",r(Ue,{date:n,itemprop:"endDate",mode:ne.SHORT}))},ws=d("a",{display:"block",padding:"0 0.5rem 0.5rem 0.5rem",zIndex:1,nested:{"& svg":{width:"1.25em"},[Co]:{paddingLeft:0}}}),Ts=d("div",{paddingTop:"0.05556rem"}),ks=d("div",{alignItems:"start",display:"grid",gridTemplateColumns:"auto 1fr",padding:"1rem 0"}),Cs=d("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),Tt=({project:{description:e,end:o,repo:i,role:n,title:s,start:a,summary:c}})=>r(ks,null,r(ws,{href:i},r(zn,null),r(bo,null)),r(Ts,null,r(fs,null,r(ys,null,r(bs,{href:i},s)),r(Ss,{range:[a,o]})),r(Cs,null,n===C.CREATOR?nt(e):null,nt(c)))),Po="0123456789".split("").map(e=>{const i=Number(e)*36;return{dark:{emphasize:V.hsluvToHex([i,100,35]),hover:V.hsluvToHex([i,100,3]),plot:V.hsluvToHex([i,100,74]),selected:V.hsluvToHex([i,100,64]),x:V.hsluvToHex([i,100,84]),y:V.hsluvToHex([i,100,74])},light:{emphasize:V.hsluvToHex([i,100,80]),hover:V.hsluvToHex([i,100,97]),plot:V.hsluvToHex([i,100,64]),selected:V.hsluvToHex([i,100,64]),x:V.hsluvToHex([i,100,54]),y:V.hsluvToHex([i,100,44])}}}),Es="stroke-width 0.1s ease-in-out, color 0.1s ease-in-out",Ps=(e,o)=>o==null?{color:Po[e].light.plot,nested:{[l.darkMode]:{color:Po[e].dark.plot}}}:l.topicColors[o],xs=({fill:e,index:o,topic:i})=>({...Ps(o,i),...e?{fill:"currentcolor",fillOpacity:.15,mask:"url(#curvesVerticalFade)",strokeWidth:0}:{fill:"none",strokeWidth:2,stroke:"currentcolor"},transition:Es,vectorEffect:"non-scaling-stroke"}),As=({fill:e,index:o,topic:i,...n})=>r("path",{...n}),xo=d(As,xs),Ms=d("svg",{overflow:"visible",padding:"1rem"}),Rs=20,Os={xMax:le,xScale:1,xShift:0,yMax:le,yScale:1,yShift:0},js=$t({alg:"sha1",coerce:!0,sort:!0,trim:!0}),Is=16,Ys=128,Ao=Array.from(io),kt=Ao.map(e=>parseInt(e??js.hash(e),16)),Ct=Math.min(...kt),Ds=Math.max(...kt)-Ct,Ls=Ao.reduce((e,o,i)=>{const n=kt[i],s=te((n-Ct)/Ds*(Ys-Is)+Ct,2);return{...e,[o]:s}},{}),$s=({className:e,exampleId:o,hexPoints:i,points:n,pointSize:s=6,scaleOptions:a,segments:c,sortIndexes:p,sortToggleClass:m,topics:g,...f})=>{const{xScale:u,xShift:b,xRange:k=u*(le+b*2),yMax:y,yShift:v,yScale:M,yRange:E=M*(y+v*2)}={...Os,...a},Y=Rs*2,R=f.height??E+Y,P=f.width??k+Y,F=i.map(({x:A,y:U},I)=>{if(typeof s=="number")return s;const G=(I%2==0?A:U)[0];return typeof s=="number"?s:Ls[G]}),ee=(typeof s=="number"?null:F.map(A=>A*.666+4))?.map((A,U)=>`hash-plot-blur-${o}-${U}`),K=({x:A,y:U},I)=>{const J=p[I],{x:G,y:Q}=n[J],D=te((A+b)/k*100,4),Z=100-te((U-v)/E*100,4),re=te((G+b)/k*100,4),X=100-te((Q-v)/E*100,4),L=0-te(D-re,4),$=0-te(Z-X,4),q=F[I],S=ee?.[I],B=S==null?{}:{filter:`url(#${S})`};return{cx:D,cy:Z,filterId:S,filterProps:B,pointSize:q,sortedCx:re,sortedCy:X,sortedTranslateXPercent:L,sortedTranslateyPercent:$}};if(c==null)return null;const oe=c.map(A=>{const[U,I,J]=A,{x:G}=U,{y:Q}=I,{x:D}=J,Z=D-G,re=Z===0?0:Math.max(Q/Z*at,st);return{cubicPoints:A?.reduce((L,$,q)=>{if(q===0)return L;const S=gt({index:q,point:$,points:A,smoothing:re,xScale:u,yScale:M});return[...L,S]},[]),segment:A}}),we=d(Ms,{overflow:"visible"});return r(we,{className:e,height:R,width:P,preserveAspectRatio:"none",viewBox:`0 0 ${P} ${R}`},r("defs",null,r("linearGradient",{id:"curvesVerticalFadeGradient",y2:"1",x2:"0"},r("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),r("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),r("stop",{offset:"1","stop-color":"white","stop-opacity":"0"})),r("mask",{id:"curvesVerticalFade",maskContentUnits:"objectBoundingBox"},r("rect",{fill:"url(#curvesVerticalFadeGradient)",height:"1",width:"1"}))),oe.map(({cubicPoints:A,segment:U},I)=>{const[J,G,Q]=U,D=A.map(([X,L],$)=>[$===0?J:G,X,L,$===0?G:Q]);return r(N,null,r(()=>r(N,null,D.map(X=>{const L=X.map((q,S)=>{const{cx:B,cy:Te}=K(q,I),Ge=B/100*P,qe=Te/100*R;return`${S===0?"M ":S===1?"C ":""} ${Ge},${qe}`}).join(" "),$=g?.[I%g?.length??0];return r(xo,{d:L,index:I,topic:$})})),null),r(()=>{const X=D.map(($,q)=>$.map((B,Te)=>{if(q>0&&Te===0)return"";const{cx:Ge,cy:qe}=K(B,I),Pt=Ge/100*P,Oo=qe/100*R;return`${Te===0?"M ":Te===1?"C ":""} ${Pt},${Oo}`}).join(" ")).join(" "),L=g?.[I%g?.length??0];return r(xo,{d:X,fill:!0,index:I,topic:L})},null))}))},Mo=({className:e,hash:o,height:i,identifier:n=De,renderType:s,StylesProvider:a=ue,styleRenderer:c=ce,topics:p,width:m})=>{const g=ct(o),f=lt(o,g),{xPadding:u,xScale:b,yPadding:k,yScale:y}=bt,v=s==="meta",M=v?0:u,E=v?0:k,Y=M/2,R=E/2,P={xScale:b,xShift:Y,yScale:y,yShift:R},z=rt(f,(S,B)=>S.x===B.x?0:S.x>B.x?1:-1).map(S=>dt(S,P)),ee=z.map((S,B)=>B),K=z.map(S=>g[z.indexOf(S)]),oe=(le+M)*b,Re=n(),we=pt({points:z,xMax:oe,xScale:b,yScale:y}),A=mt({segments:we,xMax:oe,xScale:b,yScale:y}),U=v?{path:{strokeWidth:"4px !important",transform:"scale(.95)",transformOrigin:"50% 50%"}}:null,I=v?"0 !important":"0 0 1rem !important",J=ve,G="100%",Q=S=>typeof S=="number"?`${S}px`:S,D=(S,B)=>typeof S=="number"?S*B:S,Z=v?D(i??J,.95):ve,re=v?D(m??G,.95):"100%",X=v&&i!=null?D(i,.95):i,L=v&&m!=null?D(m,.95):m,$=c.renderRule(()=>({gridColumn:"1 / -1",height:Q(Z),padding:I,width:Q(re),nested:{...U}}),Object.keys),q=v?e:`${e} ${$}`;return r(a,null,r($s,{className:q,exampleId:-1,height:X,hexPoints:K,points:z,scaleOptions:P,segments:A,sortIndexes:ee,sortToggleClass:Re,topics:p,width:L}))},Bs=d(_,{...l.projects.current,margin:"0.5rem 0 3rem",padding:"1rem 0"}),Ro=d("h2",{fontSize:ae(`${l.headingRanges.h3.minEm}em`,`${l.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Et=d("div",{marginTop:"0.5rem"}),Ns=({projects:e,meta:o,...i})=>{const{contributor:n,creator:s,current:a}=e.reduce((c,p)=>{const m=p.end==null?"current":p.role===C.CREATOR?"creator":"contributor";return{...c,[m]:[...c[m],p]}},{contributor:[],creator:[],current:[]});return r(N,null,r(Mo,{...o,renderType:"post"}),r("h1",null,"Projects"),r(Bs,null,r("h2",null,"Current"),r(Et,null,a.map(c=>r(Tt,{project:c})))),r(us,{...i},r("div",null,r(Ro,null,"Projects I Created"),r(Et,null,s.map(c=>r(Tt,{project:c})))),r("div",null,r(Ro,null,"Open Source Contributions"),r(Et,null,n.map(c=>r(Tt,{project:c}))))))};export{ve as BLOG_ART_HEIGHT,vt as BlogArt,pn as BlogArtDefs,Bn as BlogListing,To as BlogMetadataType,ms as BlogPost,le as COORDINATE_MAX,oo as COORDINATE_MIN,_ as FullBleedContainer,Kt as FullBleedScrollableOverflow,Qt as FullBleedSymbolBlock,fo as Head,Pe as InvalidHashError,st as MIN_SMOOTHING,wo as Main,pe as PageMetadataType,Ns as Projects,Mo as ProjectsArt,at as SMOOTHING_RATIO,ue as StylesProvider,j as Topic,uo as TopicTag,We as __SNOWPACK_ENV__,bt as blogArtDefaultParameters,ae as clamp,gt as cubicBezierPoints,gs as getBlogPostStaticProps,pt as getNaiveSegments,mt as getNonPhallicSegments,lo as getPageMetadata,io as hexChars,De as identifier,nt as mdx,_t as projects,ce as renderer,sr as resetAbbrContext,dt as scalePoint,rt as sortBy,d as styled,l as theme,te as toFixed,ct as toHexPointSequence,lt as toPointSequence,so as yBounds};
