import qe from"unist-util-visit";import Xe from"fs";import{h as o,Fragment as B,toChildArray as ae}from"https://cdn.skypack.dev/preact@10.5.10";import so from"@mdx-js/mdx";import{mdx as D,MDXProvider as ao}from"@mdx-js/preact";import{isobject as co,createComponent as lo,RendererProvider as po,createSchema as t,emojiRegex as mo,h as We,rehypeAccessibleEmojis as go,remarkSlug as uo,remarkSmartypants_1 as ho}from"./_vendor/index.js";import{transform as yo}from"buble-jsx-only";import Te from"dedent";import Ve from"module";import fo from"remark-mdx";import bo from"remark-mdx-to-plain-text";import q from"path";import{loadTheme as Ke,getHighlighter as Je}from"shiki";import{commonLangAliases as So,commonLangIds as vo,otherLangIds as wo}from"shiki-languages";import{renderers as To,runTwoSlash as ko}from"shiki-twoslash";import Co from"child_process";import Eo from"crypto";import{Head as Ao,seo as Qe}from"microsite/head";import{createRenderer as Ro}from"fela";import{renderToString as xo}from"fela-tools";import{processStyleWithPlugins as Po,KEYFRAME_TYPE as Ze,isNestedSelector as jo,normalizeNestedProperty as Mo,isMediaQuery as Oo,generateCombinedMediaQuery as et,isSupport as Io,generateDeclarationReference as Yo,isUndefinedValue as Lo,generateCSSSelector as Do,RULE_TYPE as Bo}from"fela-utils";import{cssifyDeclaration as No,cssifyObject as $o}from"css-in-js-utils";import tt from"md5";let ke=new Set;const Ho=()=>{ke=new Set},zo=()=>e=>{qe(e,"abbr",i=>{const{abbr:r}=i;ke.has(r)&&(delete i.abbr,delete i.children,delete i.data,delete i.reference,Object.assign(i,{type:"text",value:r})),ke.add(r)})},ot="production",Fo="production",_o=!0;var Ce=Object.freeze({__proto__:null,MODE:ot,NODE_ENV:Fo,SSR:_o});const Uo=e=>e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`),j=(e,i)=>[e.join(","),"{",Object.entries(i).reduce((r,[n,s])=>typeof s=="object"&&(n==="nested"||n.includes("&"))?r:`${r}${Uo(n)}:${s};`,""),"}",Object.entries(i).map(([r,n])=>{if(typeof n=="object"){if(r==="nested")return Object.entries(n).map(([s,a])=>{const d=e.map(p=>s.replace(/&/g,p));return j(d,a)}).join("");if(r.includes("&")){const s=e.map(a=>r.replace(/&/g,a));return j(s,n)}}return""},[]).join("")].join(""),z=(...e)=>`clamp(${e.join(",")})`,X=e=>e.replace(/\s+/g," ").trim(),it=e=>e;function Q(e){return e.replace(/[^_a-zA-Z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}function Go(e,i,r,n,s,a){const d=[];return s&&d.push(Q(s).slice(0,16)),n&&d.push(Q(n).slice(0,16)),r&&d.push(Q(r).slice(0,16)),d.push(Q(e).slice(0,16)),d.push(Q(i).slice(0,16)),d.push(a.slice(0,8)),d.join("_")}function qo(e,i,r=[""]){let n="";for(const a in e){const d=e[a];n=`${n}${a}{${$o(d)}}`}let s="";for(let a=0;a<r.length;a++){const d=r[a];s=`${s}@${d}keyframes ${i}{${n}}`}return s}function Xo(){return e=>(e.renderKeyframe=(i,r)=>{const n=i(r,e),s=Po(e,n,Ze,r),a=JSON.stringify(s);if(!e.cache.hasOwnProperty(a)){const d=tt(a),p=(e.selectorPrefix||"_")+d.slice(0,8),m=qo(s,p,e.keyframePrefixes),g={type:Ze,keyframe:m,name:p};e.cache[a]=g,e._emitChange(g)}return e.cache[a].name},e._renderStyleToClassNames=({_className:i,...r},n="",s="",a="")=>{let d=i?` ${i}`:"";for(const p in r){const m=r[p];if(co(m))if(jo(p))d+=e._renderStyleToClassNames(m,n+Mo(p),s,a);else if(Oo(p)){const g=et(s,p.slice(6).trim());d+=e._renderStyleToClassNames(m,n,g,a)}else if(Io(p)){const g=et(a,p.slice(9).trim());d+=e._renderStyleToClassNames(m,n,s,g)}else console.warn(`The object key "${p}" is not a valid nested key in Fela.
Maybe you forgot to add a plugin to resolve it?
Check http://fela.js.org/docs/basics/Rules.html#styleobject for more information.`);else{const g=Yo(p,m,n,s,a);if(!e.cache.hasOwnProperty(g)){if(Lo(m)){e.cache[g]={className:""};continue}const f=No(p,m),v=tt(g),b=e.devMode?Go(p,m,n,s,a,v):(e.selectorPrefix||"_")+v.slice(0,8),y=Do(b,n),k={type:Bo,className:b,selector:y,declaration:f,pseudo:n,media:s,support:a};e.cache[g]=k,e._emitChange(k)}const u=e.cache[g].className;u&&(d+=` ${u}`)}}return d},e)}import.meta.env=Ce;const ce=Ve.createRequire(import.meta.url),{default:Wo}=ce("fela-identifier"),{default:Vo}=ce("fela-plugin-embedded"),{default:Ko}=ce("fela-plugin-multiple-selectors"),{default:Jo}=ce("fela-plugin-typescript"),rt=ot==="development",Ee=Wo(),W=Ro({devMode:rt,enhancers:[Xo(),Ee],plugins:[Vo(),Ko(),Jo()]});!rt&&import.meta.url.endsWith("/.microsite/staging/src/lib/styles/styles.js")&&W.subscribe(async()=>{xo(W)});const Qo=e=>Array.isArray(e)?e:[e],Z=({children:e})=>o(po,{renderer:W},...Qo(e)),Zo=e=>W.renderRule(it,e),I=Object.assign(Zo,{global:W.renderStatic.bind(W)}),l=(e,i)=>{const r=typeof i=="function"?i:()=>i;return lo(r,e,Object.keys)},h=t({}),nt="FRESH@0.1.0",zs=t({$schema:"http://json-schema.org/draft-07/schema#",title:"FRESH Resume Schema",type:"object",additionalProperties:h,required:["name","meta"],properties:{name:t({type:"string",description:"The candidate's name as it should appear on the resume."}),meta:t({type:"object",additionalProperties:h,description:"The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools.",required:["format"],properties:{format:t({const:nt,description:"The canonical resume format and version. Should be 'FRESH@0.1.0'."}),version:t({type:"string",description:"The semantic version number for this resume."})}}),info:t({type:"object",additionalProperties:h,description:"The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote.",properties:{label:t({type:"string",description:"A label for this resume, such as 'Full-Stack Developer'."}),class:t({type:"string",description:"Profession type or 'character class'."}),image:t({type:"string",description:"URL or path to your picture in JPEG, PNG, GIF, or BMP format."}),brief:t({type:"string",description:"A short description or summary of yourself as a candidate."}),quote:t({type:"string",description:"Candidate quote or byline."})}}),disposition:t({type:"object",additionalProperties:h,description:"The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like.",properties:{travel:t({type:"integer",description:"Percentage of time willing to travel (0 to 100)."}),authorization:t({type:"string",description:"Work authorization: citizen, work visa, etc."}),commitment:t({type:"array",description:"Types of work commitment desired: contract, perm, seasonal, etc.",items:t({type:"string",description:"One of: contract, permanent, part-time, seasonal, full-time."})}),remote:t({type:"boolean",description:"Open to remote employment opportunities."}),relocation:t({type:"object",additionalProperties:h,properties:{willing:t({oneOf:[t({type:"string"}),t({type:"boolean"})],description:"Willingness to relocate."}),destinations:t({type:"array",description:"Preferred destinations for relocation",items:t({type:"string",description:"City or area of relocation."})})}})}}),contact:t({type:"object",additionalProperties:h,description:"The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types.",properties:{email:t({type:"string",description:"Primary contact email.",format:"email"}),phone:t({type:"string",description:"Primary phone number."}),website:t({type:"string",description:"Website, blog, or home page.",format:"uri"}),other:t({type:"array",items:t({type:"object",additionalProperties:h,properties:{label:t({type:"string",description:"A label for this contact information."}),category:t({type:"string",description:"Type of contact information: email, phone, url, postal, or IM."}),value:t({type:"string",description:"Phone number, email address, website, etc."})}})})}}),location:t({type:"object",description:"The 'location' section, when present, contains the candidate's location and address info.",additionalProperties:h,properties:{address:t({type:"string",description:"Your full postal address."}),code:t({type:"string",description:"Postal or other official routing code."}),city:t({type:"string",description:"Your home city."}),country:t({type:"string",description:"Two-digit country code (US, AU, UK, IN, etc.)."}),region:t({type:"string",description:"Your state, region, or province."})}}),employment:t({type:"object",description:"The 'employment' section describes the candidate's formal employment history.",additionalProperties:h,properties:{summary:t({type:"string",description:"Summary of overall employment."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["employer"],properties:{employer:t({type:"string",description:"Employer name."}),position:t({type:"string",description:"Your position or formal job title."}),url:t({type:"string",description:"Employer website.",format:"uri"}),start:t({type:"string",description:"Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities under this employer."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this position.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})})}}),projects:t({type:"array",description:"The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Project name or code-name."}),category:t({type:"string",description:"Project type: open-source, private, side project, etc."}),description:t({type:"string",description:"Project description or summary."}),summary:t({type:"string",description:"A summary of your achievements and responsibilities on the project."}),role:t({type:"string",description:"Your role on the project: Contributor, Creator, etc."}),url:t({type:"string",description:"Project URL.",format:"uri"}),media:t({type:"array",description:"Media associated with this project.",items:t({type:"object",additionalProperties:h,required:["category"],properties:{category:t({type:"string",description:"Media category: image, thumbnail, screenshot, MP3, download, etc."}),name:t({type:"string",description:"Friendly media name."}),url:t({type:"string",description:"Media link, path, or location."})}})}),repo:t({type:"string",description:"Repo URL.",format:"uri"}),start:t({type:"string",description:"Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy project-related achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'."})}),location:t({type:"string",description:"Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'."}),keywords:t({type:"array",description:"Keywords associated with this project.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})})}})}),skills:t({type:"object",description:"A description of the candidate's formal skills and capabilities.",additionalProperties:h,properties:{sets:t({type:"array",items:t({type:"object",additionalProperties:h,required:["name","skills"],properties:{name:t({type:"string",description:"Name of the skillset: 'Programming' or 'Project Management' etc."}),level:t({type:"string",description:"Level of mastery of the skill."}),skills:t({type:"array",items:t({type:"string",description:"Title or ID of a skill from the skills list."})})}})}),list:t({type:"array",items:t({type:"object",additionalProperties:h,required:["name"],properties:{name:t({type:"string",description:"The name or title of the skill."}),level:t({type:"string",description:"A freeform description of your level of mastery with the skill."}),summary:t({type:"string",description:"A short summary of your experience with this skill."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Number of years you've used the skill."})}})})}}),service:t({type:"object",description:"The 'service' section describes the candidate's overall service history in the true sense of the word 'service': volunteer work, military participation, civilian core, rescue and emergency services, and the like.",additionalProperties:h,properties:{summary:t({type:"string",description:"Summary of overall service/volunteer experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["organization"],properties:{category:t({type:"string",description:"The type of service work, such as volunteer or military."}),organization:t({type:"string",description:"The service organization, such as Red Cross or National Guard."}),position:t({type:"string",description:"Your position or formal service role."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date you joined the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date you left the organization, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities at this organization."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this service.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),education:t({type:"object",additionalProperties:h,description:"The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses.",required:["level"],properties:{summary:t({type:"string",description:"Summary of overall education."}),level:t({type:"string",description:"Highest level of education obtained (none, diploma, some-college, degree)."}),degree:t({type:"string",description:"Your degree, if any (BSCS, BA, etc.)."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["institution"],properties:{title:t({type:"string",description:"A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training."}),institution:t({type:"string",description:"College or school name."}),area:t({type:"string",description:"e.g. Arts"}),studyType:t({type:"string",description:"e.g. Bachelor"}),start:t({type:"string",description:"Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),grade:t({type:"string",description:"Grade or GPA."}),curriculum:t({type:"array",description:"Notable courses, subjects, and educational experiences.",items:t({type:"string",description:"The course name and number or other identifying info."})}),url:t({type:"string",description:"Website or URL of the institution or school.",format:"uri"}),summary:t({type:"string",description:"A short summary of this education experience."}),keywords:t({type:"array",description:"Keywords associated with this education stint.",items:t({type:"string",description:"For example, C++, HTML, HIPAA, etc."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Graduated *summa cum laude*'."})}),location:t({type:"string",description:"Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}}),social:t({type:"array",description:"The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like.",items:t({type:"object",additionalProperties:h,required:["network","user","url"],properties:{network:t({type:"string",description:"The name of the social network, such as Facebook or GitHub."}),user:t({type:"string",description:"Your username or handle on the social network."}),url:t({type:"string",description:"URL of your profile page on this network.",format:"uri"}),label:t({type:"string",description:"A friendly label."})}})}),recognition:t({type:"array",description:"The 'recognition' section describes the candidate's public or professional plaudits, kudos, awards, and other forms of positive external reinforcement.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{category:t({type:"string",description:"Type of recognition: award, honor, prize, etc."}),title:t({type:"string",description:"Title of the award or recognition."}),date:t({type:"string",description:"Date awarded, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),from:t({type:"string",description:"Name of the awarding company, institution, or individual."}),summary:t({type:"string",description:"A brief description of the award and why you received it."}),url:t({type:"string",description:"A webpage or other associated URL.",format:"uri"})}})}),writing:t({type:"array",description:"The 'writing' section describes the candidate's writing and publication history, from blogs and essays to novels and dissertations.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Title of the article, essay, or book."}),category:t({type:"string",description:"One of 'book', 'article', 'essay', 'blog post', or 'series'."}),publisher:t({oneOf:[t({additionalProperties:h,type:"object",properties:{name:t({type:"string",description:"Publisher of the article, essay, or book."}),url:t({type:"string",description:"Publisher website or URL."})}}),t({type:"string"})],description:"Publisher of the article, essay, or book."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),url:t({type:"string",description:"Website or URL of this writing or publication."}),summary:t({type:"string",description:"A brief summary of the publication."})}})}),reading:t({type:"array",description:"The 'reading' section describes the candidate's reading habits and is intended to demonstrate familiarity with industry-relevant publications, blogs, books, or other media that a competent industry candidate should be expected to know.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Title of the book, blog, or article."}),category:t({type:"string",description:"The type of reading: book, article, blog, magazine, series, etc."}),url:t({type:"string",description:"URL of the book, blog, or article.",format:"uri"}),author:t({oneOf:[t({type:"string"}),t({type:"array",items:t({type:"string",description:"Author name."})})],description:"Author of the book, blog, or article."}),date:t({type:"string",format:"date",description:"Publication date in YYYY, YYYY-MM, or YYYY-MM-DD format."}),summary:t({type:"string",description:"A brief description of the book, magazine, etc."})}})}),speaking:t({type:"array",description:"The 'speaking' section describes the candidate's speaking engagements and presentations.",items:t({type:"object",additionalProperties:h,required:["event"],properties:{title:t({type:"string",description:"Speaking engagement title."}),event:t({type:"string",description:"Event at which you presented."}),location:t({type:"string",description:"Freeform location of the event, e.g., 'San Francisco, CA' or 'Tokyo'."}),date:t({type:"string",description:"Presentation date.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"An array of specific highlights such as 'Won 'Best Speaker' award at 2012 E3 expo'."})}),keywords:t({type:"array",description:"Keywords associated with this speaking engagement.",items:t({type:"string",description:"A list of keywords such as 'TED', 'E3', 'mathematics', 'Big Data', etc."})}),summary:t({type:"string",description:"A description of this speaking engagement."})}})}),governance:t({type:"array",description:"The 'governance' section describes the candidate's leadership, standards, board, and committee roles.",items:t({type:"object",additionalProperties:h,required:["organization"],properties:{summary:t({type:"string",description:"Summary of your governance at this organization."}),category:t({type:"string",description:"Type of governance: committee, board, standards group, etc."}),role:t({type:"string",description:"Governance role: board member, contributor, director, etc."}),organization:t({type:"string",description:"The organization."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"}),keywords:t({type:"array",description:"Keywords associated with this governance stint.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Increased company profits by 35% year over year'."})})}})}),languages:t({type:"array",description:"The 'languages' section describes the candidate's knowledge of world languages such as English, Spanish, or Chinese.",items:t({type:"object",additionalProperties:h,required:["language"],properties:{language:t({type:"string",description:"The name of the language: English, Spanish, etc."}),level:t({type:"string",description:"Level of fluency with the language, from 1 to 10."}),years:t({oneOf:[t({type:"string"}),t({type:"number"})],description:"Amount of time language spoken?"})}})}),samples:t({type:"array",description:"The 'samples' section provides an accessible demonstration of the candidate's portfolio or work product to potential employers and co-workers.",items:t({type:"object",additionalProperties:h,required:["title"],properties:{title:t({type:"string",description:"Title or descriptive name."}),summary:t({type:"string",description:"A brief description of the sample."}),url:t({type:"string",description:"URL of the sample (if any).",format:"uri"}),date:t({type:"string",description:"Date the sample was released in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights for this sample.",items:t({type:"string",description:"For ex, 'Implemented optimized search algorithm derived from Slices of Pi'."})}),keywords:t({type:"array",description:"Keywords associated with this work sample.",items:t({type:"string",description:"For example, C++, HTML, game."})})}})}),references:t({type:"array",description:"The 'references' section describes the candidate's personal, professional, and/or technical references.",items:t({type:"object",additionalProperties:h,required:["name"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),role:t({type:"string",description:"The occupation of this reference, or his or her relationship to the candidate."}),category:t({type:"string",description:"The type of reference, eg, professional, technical, or personal."}),private:t({type:"boolean",description:"Is this a private reference?"}),summary:t({type:"string",description:"Optional summary information for this reference."}),contact:t({type:"array",items:t({type:"object",additionalProperties:h,properties:{label:t({type:"string",description:"Friendly label for this piece of contact info."}),category:t({type:"string",description:"Type of contact information (phone, email, web, etc.)."}),value:t({type:"string",description:"The email address, phone number, etc."})}})})}})}),testimonials:t({type:"array",description:"The 'testimonials' section contains public testimonials of the candidate's professionalism and character.",items:t({type:"object",additionalProperties:h,required:["name","quote"],properties:{name:t({type:"string",description:"The full name of the person giving the reference."}),quote:t({type:"string",description:"A quoted reference, eg, 'Susan was an excellent team leader, manager, and operations specialist with a great eye for detail. I'd gladly hire her again if I could!'"}),category:t({type:"string",description:"Type of reference: personal, professional, or technical."}),private:t({type:"boolean",description:"Public reference (testimonial) or via private contact?"})}})}),interests:t({type:"array",description:"The 'interests' section provides a sampling of the candidate's interests and enthusiasms outside of work.",items:t({type:"object",additionalProperties:h,required:["name"],properties:{name:t({type:"string",description:"The name or title of the interest or hobby."}),summary:t({type:"string"}),keywords:t({type:"array",description:"Keywords associated with this interest.",items:t({type:"string",description:"A keyword relating to this interest."})})}})}),extracurricular:t({type:"array",description:"The 'extracurricular' section describes the candidate's involvement with industry-related events and enterprises outside of work. For example: attending conferences, workshops, or meetups.",items:t({type:"object",additionalProperties:h,required:["title","activity"],properties:{title:t({type:"string",description:"Title of the extracurricular activity."}),activity:t({type:"string",description:"The extracurricular activity."}),location:t({type:"string",description:"City, state, or other freeform location."}),start:t({type:"string",description:"Start date.",format:"date"}),end:t({type:"string",description:"End date.",format:"date"})}})}),affiliation:t({type:"object",additionalProperties:h,description:"The 'affiliation' section describes the candidate's membership in groups, clubs, organizations, and professional associations whether at the collegiate, corporate, or personal level.",properties:{summary:t({type:"string",description:"Optional summary of overall affiliation and membership experience."}),history:t({type:"array",items:t({type:"object",additionalProperties:h,required:["organization"],properties:{category:t({type:"string",description:"The type of affiliation: club, union, meetup, etc."}),organization:t({type:"string",description:"The name of the organization or group."}),role:t({type:"string",description:"Your role in the organization or group."}),url:t({type:"string",description:"Organization website.",format:"uri"}),start:t({type:"string",description:"Date your affiliation with the organization began, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),end:t({type:"string",description:"Date your affiliation with the organization ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.",format:"date"}),summary:t({type:"string",description:"A summary of your achievements and responsibilities during this affiliation."}),highlights:t({type:"array",description:"Noteworthy achievements and/or highlights.",items:t({type:"string",description:"For ex, 'Served on board of directors of national non-profit organization with 20,000 members.'."})}),keywords:t({type:"array",description:"Keywords associated with this affiliation.",items:t({type:"string",description:"For example, C++, CRM, HIPAA."})}),location:t({type:"string",description:"Freeform location of the position, e.g., 'San Francisco, CA' or 'Tokyo'."})}})})}})}});var A;(function(e){e.OPEN_SOURCE="Open source",e.PUBLIC_ACCESS="Public access"})(A||(A={}));var T;(function(e){e.CONTRIBUTOR="Contributor",e.CREATOR="Creator"})(T||(T={}));const ei=[{title:"Eyelidlessness",category:A.PUBLIC_ACCESS,description:`
      My personal website and tech blog.
    `,summary:`
      Built with [Preact][1], [Microsite][2] and [Fela][3].

      [1]: https://preactjs.com/
      [2]: https://github.com/natemoo-re/microsite
      [3]: https://fela.js.org/
    `,repo:"https://github.com/eyelidlessness/eyelidlessness.github.io",role:T.CREATOR,start:"2020-10",end:"2021-02"},{title:"Microsite",category:A.OPEN_SOURCE,description:`
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,summary:`
      Several bug fixes and feature enhancements, with ongoing involvement
      on the project. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,repo:"https://github.com/natemoo-re/microsite",role:T.CONTRIBUTOR,start:"2021-01",end:"2021-02"},{title:"HNDarkMode",category:A.OPEN_SOURCE,description:`
      Dark mode web extension for Hacker News.
    `,summary:`
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,repo:"https://github.com/eyelidlessness/HNDarkMode",role:T.CREATOR,start:"2021-01",end:"2021-01"},{title:"typescript-eslint",category:A.OPEN_SOURCE,description:`
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,summary:"\n      Introduced the `ignoreInferredTypes` option for the\n      `prefer-readonly-parameter-types` rule to improve DX when the rule\n      is used with third-party libraries.\n    ",repo:"https://github.com/typescript-eslint/typescript-eslint",role:T.CONTRIBUTOR,start:"2020-10",end:"2020-10"},{title:"mdx",category:A.OPEN_SOURCE,description:`
      "Markdown for the component era"
    `,summary:`
      Improved TypeScript support.
    `,repo:"https://github.com/mdx-js/mdx",role:T.CONTRIBUTOR,start:"2020-02",end:"2020-02"},{title:"FAST",category:A.OPEN_SOURCE,description:`
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,summary:`
      Improved documentation.
    `,repo:"https://github.com/microsoft/fast",role:T.CONTRIBUTOR,start:"2018-08",end:"2018-08"},{title:"Razzle",category:A.OPEN_SOURCE,description:`
      "Build modern React applications. From zero to production."
    `,summary:`
      Corrected documentation in TypeScript example.
    `,repo:"https://github.com/jaredpalmer/razzle",role:T.CONTRIBUTOR,start:"2017-08",end:"2017-08"},{title:"CLJSJS",category:A.OPEN_SOURCE,description:`
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,summary:`
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,repo:"https://github.com/cljsjs/packages",role:T.CONTRIBUTOR,start:"2016-06",end:"2017-05"},{title:"Espalier",category:A.OPEN_SOURCE,description:`
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,summary:`
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,repo:"https://github.com/reup-distribution/espalier",role:T.CREATOR,start:"2015-12",end:"2017-02"},{title:"pre-commit-mypy",category:A.OPEN_SOURCE,description:`
      "Mirror of mypy package for pre-commit"
    `,summary:`
      Expanded version support.
    `,repo:"https://github.com/d1ff/pre-commit-mypy",role:T.CONTRIBUTOR,start:"2016-10",end:"2016-10"},{title:"cljs-rest",category:A.OPEN_SOURCE,description:`
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,summary:`
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,repo:"https://github.com/reup-distribution/cljs-rest",role:T.CREATOR,start:"2016-03",end:"2016-07"},{title:"cljs-rrule",category:A.OPEN_SOURCE,description:`
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,summary:`
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,repo:"https://github.com/reup-distribution/cljs-rrule",role:T.CREATOR,start:"2016-06",end:"2016-07"},{title:"speclj",category:A.OPEN_SOURCE,description:`
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
    `,repo:"https://github.com/slagyr/speclj",role:T.CONTRIBUTOR,start:"2016-04",end:"2016-04"},{title:"alter-cljs",category:A.OPEN_SOURCE,description:"\n      A ClojureScript implementation of `alter-var-root`.\n    ",summary:`
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,repo:"https://github.com/eyelidlessness/alter-cljs",role:T.CREATOR,start:"2016-01",end:"2016-01"},{title:"Figwheel",category:A.OPEN_SOURCE,description:`
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,summary:`
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,repo:"https://github.com/bhauman/lein-figwheel",role:T.CONTRIBUTOR,start:"2015-12",end:"2015-12"},{title:"Accountant",category:A.OPEN_SOURCE,description:`
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,summary:`
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,repo:"https://github.com/venantius/accountant",role:T.CONTRIBUTOR,start:"2015-12",end:"2016-12"},{title:"GitHub Issues Dump",category:A.OPEN_SOURCE,description:`
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,summary:`
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,repo:"https://github.com/ClipCard/github_issues_dump",role:T.CREATOR,start:"2015-08",end:"2015-08"},{title:"Bundle Tracker",category:A.OPEN_SOURCE,description:`
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,summary:`
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,repo:"https://github.com/ClipCard/bundle_tracker",role:T.CREATOR,start:"2015-01",end:"2015-05"},{title:"quick-clojure",category:A.OPEN_SOURCE,description:`
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,summary:`
      Fixed a bug where the REPL's port was reported incorrectly.
    `,repo:"https://github.com/benwbooth/quick-clojure",role:T.CONTRIBUTOR,start:"2015-01",end:"2015-01"}],ti=e=>e;var S;(function(e){e.BASIC="Basic",e.INTERMEDIATE="Intermediate",e.ADVANCED="Advanced",e.EXPERT="Expert"})(S||(S={}));var ee;(function(e){e.LANGUAGES_PLATFORMS="Languages & Platforms",e.SERVICES_DISTRIBUTED_SYSTEMS="Services & Distributed Systems",e.USER_INTERFACE_EXPERIENCE="User Interface & Experience"})(ee||(ee={}));const Ae={[ee.SERVICES_DISTRIBUTED_SYSTEMS]:[{name:"REST & HATEOAS",level:S.EXPERT},{name:"OpenAPI & JSON Schema",level:S.EXPERT},{name:"Django REST framework",level:S.ADVANCED},{name:"Fault tolerance",level:S.ADVANCED},{name:"Microservice architecture",level:S.ADVANCED},{name:"Apache Storm",level:S.INTERMEDIATE},{name:"Redis",level:S.BASIC}],[ee.USER_INTERFACE_EXPERIENCE]:[{name:"React & JSX",level:S.EXPERT},{name:"DOM & Web APIs",level:S.EXPERT},{name:"Web performance",level:S.ADVANCED},{name:"SVG",level:S.ADVANCED},{name:"UI & UX design",level:S.ADVANCED},{name:"A11y",level:S.INTERMEDIATE}],[ee.LANGUAGES_PLATFORMS]:[{name:"TypeScript (Node.js & web)",level:S.EXPERT},{name:"Clojure & ClojureScript",level:S.EXPERT},{name:"HTML & CSS",level:S.EXPERT},{name:"SQL (PostgreSQL)",level:S.ADVANCED},{name:"Python",level:S.INTERMEDIATE},{name:"Swift",level:S.BASIC},{name:"Java",level:S.BASIC}]},oi={list:Object.values(Ae).flatMap(it),merged:Ae,sets:Object.entries(Ae).map(([e,i])=>({name:e,skills:i.map(({name:r})=>r)}))},ii=ti({name:"Trevor Schmidt",meta:{format:nt,version:"0.0.1"},contact:{email:"gnosis@gmail.com",website:"https://eyelidlessness.github.io/"},disposition:{authorization:"citizen",commitment:["full-time","permanent"],remote:!0,relocation:{willing:"Unlikely"},travel:5},education:{history:[{end:"2000",institution:"Potomac Falls High School",location:"Sterling, VA",start:"1996",studyType:"High school"}],level:"High School"},employment:{history:[{employer:"Treez",position:"Senior Software Engineer",start:"2018-12",end:"2020-09",summary:`
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
          `]}]},info:{class:"Software Engineer",brief:Te(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g," "),label:"Senior Full-Stack Software Engineer"},location:{city:"Seattle",region:"WA",country:"US"},projects:ei,skills:oi}),te=Symbol("DEFAULT_TOPIC"),P={[te]:te,ABLEISM:"Ableism",ART:"Art",LEMON:"My puppy",MENTAL_ILLNESS:"Mental illness",NEURODIVERGENCE:"Neurodivergence",PHILOSOPHY:"Philosophy",POLITICS:"Politics",RACISM:"Racism",SEXISM:"Sexism",SUBSTANCE_ABUSE:"Substance use & abuse",TECHNOLOGY:"Technology",TRANSPHOBIA:"Transphobia"},ri=e=>typeof e=="string"||typeof e=="symbol",st=e=>ri(e)&&e in P,at=e=>st(e)?P[e]:e,ct=Object.entries(P).reduce((e,i)=>{const[r,n]=i;return typeof r=="string"?{...e,[n]:r}:e},{}),ni=e=>st(e)?e:ct[e],si=e=>e.toLowerCase().replace(/\W+|_+/g,"-"),ai=Object.fromEntries(Object.entries(ct).map(([e,i])=>typeof i=="string"?[e,si(i)]:null).filter(e=>e!=null)),ci=e=>{const i=at(e);if(typeof i=="string")return ai[i]},le=2,Re={minEm:1.0625,fluidVw:1.0625*le,maxEm:1.325},R="@media (prefers-color-scheme: dark)",li=["h1","h2","h3","h4","h5","h6"],di=["dd","dl","dt","li","ol","ul"],pi=[...li,...di,"p"],V=Re.minEm/Re.maxEm,N={h1:1.953,h2:1.563,h3:1.25},mi={h1:{minEm:N.h1*V,fluidVw:N.h1*V*le,maxEm:N.h1},h2:{minEm:N.h2*V,fluidVw:N.h2*V*le,maxEm:N.h2},h3:{minEm:N.h3*V,fluidVw:N.h3*V*le,maxEm:N.h3}},lt=75,de=1.25,gi=["0.7fr",`${de}rem`,[`${lt}ch`,`calc(100% - ${de*2}rem)`],`${de}rem`,"1.2fr"],xe=1,ui=["0.7fr",`${xe}rem`,[`${lt*1.1875}ch`,`calc(100% - ${xe*2}rem)`],`${xe}rem`,"1.2fr"],hi=['"Consolas"','"Bitstream Vera Sans Mono"','"Courier New"',"Courier","monospace"],dt=hi.join(", "),yi=["system-ui","-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"],fi=yi.map(e=>e.includes(" ")?`"${e}"`:e).join(", "),Y={DEFAULT_TOPIC:{dark:"#aaa",light:"#555"},ABLEISM:"#edc258",ARTS_CRAFTS:"#293fe4",LEMON:"#82c2e4",MENTAL_ILLNESS:"#d33d0a",NEURODIVERGENCE:"#f7834a",PHILOSOPHY:"#9a9aa6",POLITICS:"#ffe413",RACISM:"#7a5221",SEXISM:"#ec9ac0",SUBSTANCE_ABUSE:"#edbb0e",TECHNOLOGY:"hsla(336deg, 100%, 42%, 0.9)",TRANSPHOBIA:"#10be8a"},bi="hover-inherit-topic-color",Si=[[P[te],I({"&, &.hover-inherit-topic-color:hover":{color:Y.DEFAULT_TOPIC.light},[R]:{"&, &.hover-inherit-topic-color:hover":{color:Y.DEFAULT_TOPIC.dark}}})],[P.ABLEISM,I({"&, &.hover-inherit-topic-color:hover":{color:Y.ABLEISM}})],[P.ART,I({"&, &.hover-inherit-topic-color:hover":{color:Y.ARTS_CRAFTS}})],[P.LEMON,I({"&, &.hover-inherit-topic-color:hover":{color:Y.LEMON}})],[P.MENTAL_ILLNESS,I({"&, &.hover-inherit-topic-color:hover":{color:Y.MENTAL_ILLNESS}})],[P.NEURODIVERGENCE,I({"&, &.hover-inherit-topic-color:hover":{color:Y.NEURODIVERGENCE}})],[P.PHILOSOPHY,I({"&, &.hover-inherit-topic-color:hover":{color:Y.PHILOSOPHY}})],[P.POLITICS,I({"&, &.hover-inherit-topic-color:hover":{color:Y.POLITICS}})],[P.RACISM,I({"&, &.hover-inherit-topic-color:hover":{color:Y.RACISM}})],[P.SEXISM,I({"&, &.hover-inherit-topic-color:hover":{color:Y.SEXISM}})],[P.SUBSTANCE_ABUSE,I({"&, &.hover-inherit-topic-color:hover":{color:Y.SUBSTANCE_ABUSE}})],[P.TECHNOLOGY,I({"&, &.hover-inherit-topic-color:hover":{color:Y.TECHNOLOGY}})],[P.TRANSPHOBIA,I({"&, &.hover-inherit-topic-color:hover":{color:Y.TRANSPHOBIA}})]],vi=Object.fromEntries(Si),pt=Ee(),c={HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME:bi,baseFontSizeRange:Re,darkMode:R,abbreviation:{backgroundImage:`linear-gradient(${["to top","hsl(64deg, 100%, 50%, 0.25)","hsl(64deg, 100%, 50%, 0.25) 0.5em","transparent 0.5em"].join(", ")})`},aside:{backgroundColor:"hsl(53deg, 81%, 96%)",color:"hsl(212deg, 10%, 35%)",nested:{"& > h1":{color:"hsl(53deg, 13%, 26%)"},[R]:{backgroundColor:"hsl(130deg,21%,14%)",color:"hsl(212deg, 3%, 80%)",nested:{"& > h1":{color:"hsl(130deg, 6%, 90%)"}}}}},blog:{listing:{descriptionIdentifier:pt,description:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em",nested:{[R]:{color:"hsl(212deg, 10%, 75%)"}}},item:{"&:nth-child(odd)":{backgroundColor:"hsl(192deg, 15%, 97%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 15%, 97%, 0.75)"},[`& .${pt}`]:{color:"hsl(212deg, 10%, 20%)",nested:{[R]:{color:"hsl(212deg, 10%, 90%)"}}},[R]:{backgroundColor:"hsl(192deg, 45%, 3%)",nested:{"& h2":{backgroundColor:"hsla(192deg, 45%, 3%, 0.75)"}}}}}},linkTitle:{backgroundColor:"hsla(192deg, 85%, 99%, 0.75)",color:"#000",nested:{":hover":{color:"#000"},[R]:{backgroundColor:"hsla(192deg, 10%, 10%, 0.75)",color:"#fff",":hover":{color:"#fff"}}}}}},document:{backgroundColor:"hsl(192deg, 85%, 99%)"},code:{backgroundColor:"hsl(200deg, 80%, 95%)",color:"hsla(210deg, 12%, 0%, 95%)",fontFamily:dt},codeBlock:{symbol:{color:"hsl(228deg, 5%, 81%)",fontFamily:dt,nested:{[R]:{color:"hsl(228deg, 6%, 21%)"}}}},deemphasize:{color:"hsl(212deg, 10%, 35%)",fontSize:"0.9375em"},emphasize:{color:"#000"},firstLastMarginZeroElements:pi,gitHubLogo:{fill:"#171515",nested:{[R]:{fill:"#fff"}}},headingRanges:mi,[R]:{code:{backgroundColor:"hsl(200deg, 60%, 15%)",color:"hsla(210deg, 12%, 100%, 95%)"},document:{backgroundColor:"hsl(192deg, 10%, 10%)"},deemphasize:{color:"hsl(212deg, 10%, 75%)"},emphasize:{color:"#fff"},links:{"&:hover":{color:"hsl(205deg, 76%, 70%)"},"&, &:active, &:visited, & code":{color:"hsl(205deg, 56%, 70%)",textDecorationColor:"hsla(205deg, 56%, 70%, 50%)"}},pre:{color:"hsla(210deg, 12%, 100%, 90%)",backgroundColor:"#000",outline:"none"},prose:{color:"hsl(210deg, 10%, 90%)"},separator:{color:"hsla(0deg, 0%, 100%, 0.2)"},siteHeader:{pageLinks:{color:"#fff","&:active, &:focus, &:hover":{color:"#f9f9f9"},":visited":{color:"#fff"}}},siteLogo:{color:"hsl(336deg, 100%, 85%)"}},links:{"&:hover":{color:"hsl(205deg, 78%, 41%)",textDecorationColor:"initial"},"&, & code":{color:"hsl(205deg, 86%, 31%)",textDecorationColor:"hsla(205deg, 86%, 31%, 50%)"}},mainGridColumns:gi,mainGridSidePaddingRem:de,pre:{color:"hsl(210deg, 12%, 16%)",backgroundColor:"#fff",outline:"1px solid #eee"},prose:{color:"hsla(210deg, 12%, 5%, 95%)",fontFamily:fi},resume:{brief:{backgroundColor:"hsl(336deg, 100%, 97%)",nested:{[R]:{backgroundColor:"hsl(336deg, 100%, 7%)"}}},contactList:{link:{nested:{"&, &:active, &:hover, &:visited":{color:"hsla(210deg, 12%, 5%, 95%)"},[R]:{nested:{"&, &:active, &:hover, &:visited":{color:"hsl(210deg, 10%, 90%)"}}}}}},employment:{container:{backgroundColor:"hsl(47deg, 58%, 98%)",nested:{[R]:{backgroundColor:"hsl(41deg, 100%, 8%)"}}},separator:{borderBottom:"1px solid hsl(17deg, 78%, 90%)",nested:{[R]:{borderColor:"hsl(17deg, 70%, 17%)"}}}},skillLevel:{[S.BASIC]:{backgroundColor:"hsl(207deg, 25%, 83%)",nested:{[R]:{backgroundColor:"hsl(207deg, 15%, 43%)"}}},[S.INTERMEDIATE]:{backgroundColor:"hsl(188deg, 53%, 74%)",nested:{[R]:{backgroundColor:"hsl(188deg, 53%, 34%)"}}},[S.ADVANCED]:{backgroundColor:"hsl(188deg, 70%, 59%)",nested:{[R]:{backgroundColor:"hsl(188deg, 80%, 39%)"}}},[S.EXPERT]:{backgroundColor:"hsl(152deg, 100%, 39%)",nested:{[R]:{backgroundColor:"hsl(152deg, 100%, 29%)"}}}}},separator:{color:"hsla(0deg, 0%, 0%, 0.2)"},siteHeader:{columns:ui,container:{},pageLinks:{color:"#000","&:active, &:focus, &:hover":{color:"#0a0a0a"},":visited":{color:"#000"}}},siteLogo:{color:"hsl(336deg, 100%, 42%)"},topicColorClassNames:vi,topicTagIdentifier:Ee(),topicTagInner:{backgroundImage:X(`linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.95) 2px
    )`),color:"#000",nested:{[R]:{backgroundImage:X(`linear-gradient(
          to top,
          rgba(0, 0, 0, 0.65),
          rgba(0, 0, 0, 0.7) 2px
        )`),color:"#fff"}}},topicTagLink:e=>({nested:{"&:active, &:focus, &:hover":{boxShadow:["-1px   0 0.125em     currentcolor"," 0     0 0       2px currentcolor"].join(", "),outline:"none"},[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:X(`linear-gradient(
          to top,
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.925) 2px
        )`)},[`& .${e}, &:hover .${e}`]:{color:"#000"},[R]:{nested:{[[`&:active .${e}`,`&:focus .${e}`,`&:hover .${e}`].join(",")]:{backgroundImage:X(`linear-gradient(
              to top,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.75) 2px
            )`)},[`& .${e}, &:hover .${e}`]:{color:"#fff"}}}}}),topicTagOuter:{boxShadow:["-0.5px 0 0.25em        rgba(255, 255, 255, 0)","-1px   0 0.125em       currentcolor"," 0     0 0       0.5px rgba(255, 255, 255, 0)"," 0     0 0       0.5px currentcolor"].join(", ")}},mt=["b","em","h1","h2","h3","i","strong"],pe=["h1","h2","h3","h4","h5","h6"],wi=[...pe,"address","article","aside","blockquote","details","dialog","figcaption","figure","footer","header","hgroup","main","menu","nav","p","section"],Ti=Array.from(new Set([...pe,...wi,"div","fieldset","form","hgroup","hr","pre"])),ki=X(`
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
    font-size:        ${z(`${c.baseFontSizeRange.minEm}em`,`${c.baseFontSizeRange.fluidVw}vw`,`${c.baseFontSizeRange.maxEm}em`)};
    text-size-adjust:         100%;
    -webkit-text-size-adjust: 100%;
  }

  ${j(["body"],{...c.document,...c.prose})}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ${pe.join(",")} {
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
`),Ci=()=>{I.global(X(`
      ${Ti.join(",")} {
        display: block;
      }

      body, dl, p, ol, ul {
        font-weight: normal;
      }

      ${pe.map(e=>`${e} small`).join(",")} {
        color:          currentColor;
        font-size:      0.875em;
        vertical-align: 0.05em;
      }

      ${j(mt,c.emphasize)}

      h1 {
        font-size: ${z(`${c.headingRanges.h1.minEm}em`,`${c.headingRanges.h1.fluidVw}vw`,`${c.headingRanges.h1.maxEm}em`)};
      }

      h2 {
        font-size: ${z(`${c.headingRanges.h2.minEm}em`,`${c.headingRanges.h2.fluidVw}vw`,`${c.headingRanges.h2.maxEm}em`)};
      }

      h3 {
        font-size: ${z(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,`${c.headingRanges.h3.maxEm}em`)};
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

      ${j(["hr:after"],{...c.separator,content:'"\u273B \u273B \u273B"',display:"block",letterSpacing:"0.5em",textAlign:"center"})}

      li {
        margin: 0.5em 0;
      }

      ${j(["pre"],c.pre)}

      ${j(["code"],{...c.code,borderRadius:"0.1875rem",display:"inline-flex",fontSize:"0.875em",hyphens:"auto",lineHeight:"1.5em",overflowWrap:"break-word",padding:"0.1111rem 0.3333rem 0",wordWrap:"break-word"})}

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

      ${j(["a"],{...c.links,fontWeight:"bolder"})}

      ${j(["abbr"],{...c.abbreviation,textDecoration:"none"})}

      ${j(["aside","small"],c.deemphasize)}

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
        ${j(["body"],{...c[c.darkMode].document,...c[c.darkMode].prose})}

        body, dl, p, ol, ul {
          font-weight:    300;
          letter-spacing: 0.2px;
        }

        ${j(mt,c[c.darkMode].emphasize)}
        ${j(["pre"],c[c.darkMode].pre)}
        ${j(["code"],c[c.darkMode].code)}
        ${j(["a"],c[c.darkMode].links)}
        ${j(["aside","small"],c[c.darkMode].deemphasize)}
        ${j(["hr:after"],c[c.darkMode].separator)}
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
`.replace(/\s+/g," "),gt={gridColumn:"1 / -1"},Pe=I(gt),L=l("div",{nested:{[`& > .${Pe}`]:{gridColumn:"1 / -1"},"& > *":{gridColumn:"3 / 3"},"& > details":{marginTop:0},"& > h1":{marginTop:0},"& > h2":{marginTop:0},"& > h3":{marginTop:0},"& > hr":{marginTop:0},"& > ol":{marginTop:0},"& > p":{marginTop:0},"& > ul":{marginTop:0}},display:"grid",gridTemplateColumns:Ei,...gt}),Ai=l(L,{margin:"1rem 0 2rem",maxWidth:"100%",padding:0,width:"auto"}),ut=l("div",{alignContent:"flex-start",alignItems:"flex-start",display:"flex",gridColumn:"2 / 5"}),Ri=l("div",{flexGrow:0,fontSize:"9em",height:0,lineHeight:"3.5rem",overflow:"visible",textAlign:"center",transform:"rotate(-6.5deg)",userSelect:"none",width:"3.75rem"}),xi=l("div",{flexGrow:1,padding:"1rem 0.75rem"}),je="div",Pi={ContentContainer:je,InnerContainer:ut,OuterContainer:je,SymbolContainer:je},ji=e=>{const{children:i,ContentContainer:r,InnerContainer:n,OuterContainer:s,outerContainerProps:a,symbol:d,SymbolContainer:p}={...Pi,...e};return o(Ai,{as:s,...a},o(ut,{as:n},o(Ri,{as:p,role:"presentation"},d),o(xi,{as:r},i)))},Mi=l("pre",{fontSize:"1rem"}),Oi=l("div",{gridColumn:"2 / 6"}),Ii=l(L,{...c.pre,nested:{[c.darkMode]:{...c[c.darkMode].pre},"& code":{backgroundColor:"transparent"},"& pre":{backgroundColor:"transparent",maxWidth:"100%",margin:0,overflow:"auto",outline:"none",padding:["1rem","0"].join(" ")}}}),Yi=l("div",{...c.codeBlock.symbol,fontSize:z("3.2em","10vw","4.5em"),marginTop:"-0.325em",textIndent:"-0.25em"}),Li=({children:e})=>o(ji,{ContentContainer:Mi,InnerContainer:Oi,OuterContainer:Ii,symbol:"{",SymbolContainer:Yi},e),Di=(e,i)=>e.slice().sort(i),Bi=e=>typeof e=="object"&&e!=null,Ni=l("span",{display:"inline-block",fontSize:"1.5em",fontStyle:"normal",lineHeight:.5,padding:"0 0.125em",verticalAlign:"-0.125em"}),$i=(e,i)=>Bi(e)&&e.role==="img"&&typeof e["aria-label"]=="string"&&typeof i=="string"&&mo().test(i),Hi=({["aria-label"]:e,children:i,role:r})=>o(Ni,{"aria-label":e,role:r},i),zi={CA:"California",MI:"Michigan",US:"United States",VA:"Virginia",WA:"Washington"},Fi={".cljc":"Clojure & ClojureScript cross-platform modules",A11y:"Accessibility",ADHD:"Attention deficit hyperactivity disorder",AJAX:"Asynchronous JavaScript and XML",API:"Application Programming Interface",APIs:"Application Programming Interfaces",B2B:"Business to Business",CI:"Continuous Integration",CSS:"Cascading Style Sheets",DOM:"Document Object Model",DSL:"Domain Specific Language",DX:"Developer Experience",ETL:"Extract, Transform, Load",HATEOAS:"Hypertext As The Engine Of Application State",HTML:"Hypertext Markup Language",JSON:"JavaScript Object Notation",JVM:"Java Virtual Machine",nREPL:"Clojure network REPL (Read\u2013eval\u2013print loop)",REPL:"Read\u2013eval\u2013print loop",REST:"Representational State Transfer",SQL:"Structured Query Language",SVG:"Scalable Vector Graphics",UI:"User Interface",UX:"User Experience",WSLCB:"Washington State Liquor and Cannabis Board"},_i={...zi,...Fi},ht=q.resolve(process.cwd(),"./syntax-themes"),[Ui,Gi]=await Promise.all([Ke(q.resolve(ht,"./yi-dark.json")),Ke(q.resolve(ht,"./yi-light.json"))]),qi={background:"backgroundColor",fontStyle:"fontStyle",foreground:"color"},Xi={bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},strikethrough:{textDecoration:"strikethrough"},underline:{textDecoration:"underline"}},Wi=e=>e.trim().split(/\b\W*\b/).reduce((i,r)=>({...i,...Xi[r]}),{}),yt=e=>Object.entries(e).reduce((i,[r,n])=>{const s=qi[r];if(n==null||typeof s!="string")return i;const a=s==="fontStyle"?Wi(n):{[s]:n};return{...i,...a}},{}),[Vi,ft]=await Promise.all([Je({theme:Ui}),Je({theme:Gi})]),Ki=new Set([...So,...vo,...wo]),Ji=new Set(["ts","tsx","typescript"]),Qi=(e,i)=>{const[r,n]=[ft,Vi].map(s=>s.codeToThemedTokens(e,i).reduce((d,p)=>p.reduce((m,g)=>({...m,...g.explanation?.reduce((u,f)=>({...u,...f.scopes.reduce((v,{themeMatches:b})=>({...v,...b.reduce((y,{name:k,scope:w,settings:C})=>({...y,byName:k==null?y.byName:{...y.byName,[k]:C},byScope:Array.isArray(w)?{...y.byScope,...w.reduce((M,E)=>({...M,[E]:C}),y.byScope)}:typeof w=="string"?{...y.byScope,[w]:C}:y.byScope}),{...v,byName:{...v.byName},byScope:{...v.byScope}})}),u)}),m)}),d),{byName:{},byScope:{}}));return{dark:n,light:r}},Zi=(e,i)=>{const{content:r,explanation:n}=e,{dark:s,light:a}=i,d=n?.reduce((m,g)=>({...m,...g.scopes.reduce((u,{themeMatches:f})=>({...u,...f.reduce((v,{name:b,scope:y})=>{const k=yt({...b==null?{}:a.byName[b],...Array.isArray(y)?y.reduce((E,O)=>({...E,...a.byScope[O]}),{}):typeof y=="string"?a.byScope[y]:{}}),w=yt({...b==null?{}:s.byName[b],...Array.isArray(y)?y.reduce((E,O)=>({...E,...s.byScope[O]}),{}):typeof y=="string"?s.byScope[y]:{}}),C={...v,...k},M=Object.keys(w).length>0?{nested:{[c.darkMode]:w}}:{};return{...C,...M}},{})}),{})}),{})??{},p=Object.keys(d).length>0?l("span",d):"span";return r.replace(/\s+/,"")===""||p==null?o("span",{},r):o(p,{},r)},er=(e,i)=>We(o(Z,{},o("pre",{},o("code",{},...e.reduce((r,n,s)=>{const a=n.map(p=>Zi(p,i)),d=s===0?"":`
`;return[...r,d,...a]},[]))))),tr=(e,i={})=>r=>{const{lang:n,value:s,meta:a}=r;!!process?.env?.TWOSLASH_DISABLE||or(i,r);const p=String(n)==="json5"?"json":n;let m;const g=s.replace(/^\n+|\n+$/g,"");if(!Ki.has(p))m=To.plainTextRenderer(g,{});else{const u=e.codeToThemedTokens(g,p),f=Qi(g,p);m=er(u,f)}Ji.has(p)&&!a?.includes("ignore"),r.children=[],r.type="html",r.value=m},or=(e,i)=>{if(i.meta?.includes("twoslash")){const r=ko(i.value,i.lang,e);i.value=r.code,i.lang=r.extension,i.twoslash=r}},ir=()=>i=>{qe(i,"code",tr(ft))};import.meta.env=Ce;const oe=Ve.createRequire(import.meta.url),rr=oe("rehype-parse"),nr=oe("rehype-remark"),sr=oe("remark"),ar=oe("remark-abbr"),cr=oe("remark-stringify"),lr=({className:e,children:i,...r})=>e==="language-id"?null:e==="code-container"?D(B,r,...ae(i)):D("div",{className:e,...r},...ae(i)),dr=({children:e,...i})=>$i(i,e)?D(Hi,i,e):D("span",i,e),Me={components:{div:lr,pre:Li,span:dr},rehypePlugins:[go],remarkPlugins:[ir,ar,zo,uo,ho]},bt=e=>{const{children:i=D(()=>null,{}),components:r={},rehypePlugins:n=[],remarkPlugins:s=[]}=e,a={...Me.components,...r},d={mdx:D,MDXProvider:ao,components:a,props:{}},p=typeof i=="string"?Te(i).trim():i,m=[...Me.rehypePlugins,...n],g=[...Me.remarkPlugins,...s],u=so.sync(p,{rehypePlugins:m,remarkPlugins:g,skipExport:!0}).trim(),{code:f}=yo(u,{objectAssign:"Object.assign"}),v=Object.keys(d),b=Object.values(d),y=`return h(
    MDXProvider,
    {components},
    h(MDXContent, props)
  )`;return new Function("h",...v,`${f}

${y}`)(D,...b)},St=(e,i)=>{const[r,...n]=e;return i.reduce((s,a,d)=>[...s,a,n[d]],[r]).join("")},pr=Object.entries(_i).map(([e,i])=>`*[${e}]: ${i}`).join(`
`),vt=e=>{const[i,...r]=e;return[typeof i=="string"?i:St(i,r),pr].join(`

`)},F=(...e)=>{const i=vt(e);return D(Z,{},D(bt,{},i))},mr=(...e)=>{const i=vt(e);return D(Z,{},D(bt,{components:{p:B}},i))},gr=(e,...i)=>{const r=Te(St(e,i)).trim();return sr().use(rr).use(nr).use(cr).use(fo).use(bo).processSync(r).contents.toString().trim()},Oe=process.cwd(),wt=e=>e.startsWith("/")?q.resolve(Oe,e.replace(/^.*?\/src\//,"./src/").replace(/\.js$/,".tsx")):q.extname(e)==""?q.resolve(Oe,"./src/pages/",`${e}.tsx`):e;var me;(function(e){e.ALL="",e.FIRST="--diff-filter=A"})(me||(me={}));var ge;(function(e){e.HASH="%H",e.ISO_DATE="%aI"})(ge||(ge={}));const ur="origin",hr="main",Tt=e=>{const{branch:i=hr,filter:r=me.FIRST,format:n,path:s=Oe,remote:a=ur}=e,{error:d,stdout:p}=Co.spawnSync("git",["log",r,`--branches=${i}`,`--format=${n}`,`--remotes=${a}`,"--",s]);if(d)throw d;const m=p.toString().trim();return m===""?null:r===me.FIRST?m:m.split(`
`)},kt=e=>{const i=wt(e),r=Tt({format:ge.ISO_DATE,path:i}),n=new Date(r??"");return isNaN(n.getTime())?null:n},yr=e=>{const i=Xe.readFileSync(e).toString();let r=Eo.createHash("sha1");return r.update(i),r.digest("hex")},Ct=e=>{const i=wt(e);return Tt({format:ge.HASH,path:i})??yr(i)},Et=(e,i)=>{const r=Ct(e),n={created:kt(e)??Xe.statSync(i.replace(/^file:(\/\/)?/,"")).ctime};return{hash:r,stat:n}},Ie=e=>parseInt(e,16),ue=Ie("ff"),fr=Ie("00"),At=.05,br=.15,Sr=.05;class Ye extends Error{constructor(i){super(`Invalid hash: ${i}`)}}const vr=/([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/g,wr=e=>e.length===10,Tr=e=>{const r=Array.from(e.matchAll(vr)??[]).map(([,n,s])=>({x:n,y:s}));if(!wr(r))throw new Ye(e);return r},kr=Symbol("IS_POINT"),Cr=e=>Object.assign(e,{[kr]:!0}),Rt=e=>{const i=Ie(e);if(i>ue||i<fr)throw new Error(`Not a valid coordinate: ${e}`);return Cr(i)},Er=({x:e,y:i})=>({x:Rt(e),y:Rt(i)}),Ar=e=>e.length===10,Rr=e=>{const i=Tr(e);try{const r=i.map(Er);if(!Ar(r))throw new Ye(e);return r}catch{throw new Ye(e)}},xr=Symbol("SCALED_COORDINATE"),xt=e=>e.reduce(({max:i,min:r},{y:n})=>({max:Math.max(i,n),min:Math.min(r,n)}),{max:-Infinity,min:Infinity}),x=(e,i)=>Object.assign(e,{[xr]:i}),Pr=({point:{x:e,y:i},xScale:r,xShift:n,yRange:s,yScale:a,yShift:d})=>({x:x(ue*((e+n)/ue)*r,r),y:x((i+d)/s*100,a)}),jr=({points:e,xMax:i,xScale:r,yScale:n})=>e.reduce((s,a,d,p)=>{const{x:m}=p[d-1]??{x:x(0,r)},{x:g}=p[d+1]??{x:x(i,r)},u=x(0,n),b=[{x:m,y:u},a,{x:g,y:u}];return[...s,b]},[]),Mr=({segments:e,xMax:i,xScale:r,yScale:n})=>e.map(s=>{const[a,{x:d,y:p},{x:m,y:g}]=s,{x:u,y:f}=a,v=m-u,b=p/v,k=6/b;if(k<1){const C=k*.2*u,M=u-C,E=m+C,O=M<0?Math.abs(M):E>i?i-E:0,J=M+O,$=E+O,U=k*.3,ne=d+O,se=U*p,Se=p-se,ve={x:x(J,r),y:x(f,n)},G={x:x(ne,r),y:x(Se,n)},we={x:x($,r),y:x(g,n)};return[ve,G,we]}return s}),Or=({x:e,y:i},{x:r,y:n})=>{const s=r-e,a=n-i;return{angle:Math.atan2(a,s),length:Math.sqrt(s**2+a**2)}},Pt=({current:e,previous:i,next:r,reverse:n,smoothing:s,xScale:a,yScale:d})=>{const p=n?Math.PI:0,m=Or(i,r),g=m.angle+p,u=m.length*s,{x:f,y:v}=e,b=f+Math.cos(g)*u,y=v+Math.sin(g)*u;return{x:x(b,a),y:x(y,d)}},Ir=({index:e,point:i,points:r,smoothing:n,xScale:s,yScale:a})=>{const d=r[e-1];if(d==null)throw new Error(`
      Cannot build cubic bezier points, no point before the provided index.
    `.trim());const p=r[e-2]??d,m=Pt({current:d,previous:p,next:i,reverse:!1,smoothing:n,xScale:s,yScale:a}),g=d,u=r[e+1]??i,f=Pt({current:i,previous:g,next:u,reverse:!0,smoothing:n,xScale:s,yScale:a});return[m,f,i]},jt=({segment:e,smoothing:i,xScale:r,yScale:n})=>e.reduce((s,a,d)=>{if(d===0)return s;const m=Ir({index:d,point:a,points:e,smoothing:i,xScale:r,yScale:n}).map(g=>`${g.x},${g.y}`).join(" ");return[...s,`C ${m}`]},[]),Yr=({baseYCoordinate:e,segments:i,xScale:r,yMax:n,yOffsetBelowMidpoint:s,yScale:a,yTilt:d=!1})=>i.reduce((p,m,g,u)=>{const{length:f}=u,[v,b,y]=m,{x:k,y:w}=v,{x:C,y:M}=b,{x:E,y:O}=y,J=E-k,$=J===0?0:Math.max(M/J*Sr,br),U=d?.1:0,ne=1-U,se=1+U,Se=g%2==0?ne:se,ve=s?w+e:n-w+e,G={x:k,y:x(ve*Se,a)},we=g%2==0?ne:se,Zt=s?O+e:n-O+e,Fe={x:x(E,r),y:x(Zt*we,a)},_e=C-k,Ue=E-C,eo=Ue>_e?0:0-(C-k)*At,Ge=(f-g)*(a/100*n),to={x:x(C+eo,r),y:x(M-Ge,a)},oo=jt({segment:[G,to,Fe],smoothing:$,xScale:r,yScale:a}),io=Ue>_e?(E-C)*At:0,ro={x:x(C+io,r),y:x(n-Ge,a)},no=jt({segment:[Fe,ro,G],smoothing:$,xScale:r,yScale:a});return[...p,[`M ${G.x},${G.y}`,...oo,...no,"Z"].join(" ")]},[]),Lr=({hash:e,xPadding:i=0,xScale:r=1,yOffset:n=.5,yPadding:s=0,yScale:a=1})=>{const d=Rr(e),p=Di(d,($,U)=>$.x>U.x?1:-1),{max:m,min:g}=xt(p),u=i/2,f=m-g,v=0-g+s/2,b=p.map($=>Pr({xScale:r,xShift:u,yRange:f,yScale:a,yShift:v,point:$})),y=(ue+i)*r,{max:k}=xt(b),w=(k+s)*a,C=jr({points:b,xMax:y,xScale:r,yScale:a}),M=Mr({segments:C,xMax:y,xScale:r,yScale:a}),E=n>.5,O=E?w*n:-1*w*n;return{segmentPaths:Yr({baseYCoordinate:O,segments:M,xScale:r,yMax:w,yOffsetBelowMidpoint:E,yScale:a}),xMax:y,yMax:w}},Mt=()=>o(B,null,o("linearGradient",{id:"horizontalMidFadeGradient",y2:"0",x2:"1"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.0125","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"0.075","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.5","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.925","stop-color":"white","stop-opacity":".5"}),o("stop",{offset:"0.9875","stop-color":"white","stop-opacity":"0.25"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.25"})),o("mask",{id:"horizontalMidFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"})),o("linearGradient",{id:"softVerticalFadeGradient",y2:"1",x2:"0"},o("stop",{offset:"0","stop-color":"white","stop-opacity":"1"}),o("stop",{offset:"0.25","stop-color":"white","stop-opacity":".75"}),o("stop",{offset:"1","stop-color":"white","stop-opacity":"0.35"})),o("mask",{id:"softVerticalFade",maskContentUnits:"objectBoundingBox"},o("rect",{fill:"url(#softVerticalFadeGradient)",height:"1",width:"1"}))),Dr=()=>o("svg",{"aria-hidden":"true",height:"0",width:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1 1"},o("defs",null,o(Mt,null))),Br=1.6180334,Nr=4,Ot=Br*5,It=.75,H=.15,$r=1.5,Le=z("6rem",`${100/Ot}vw`,"10rem"),Yt=l(L,{height:Le,position:"relative",width:"100%"}),Lt=l("svg",{display:"block",height:"inherit",position:"absolute",width:"100%"}),Dt=(e=te)=>c.topicColorClassNames[e],Bt=l("path",{fill:"currentcolor",fillRule:"nonzero",opacity:.85});var ie;(function(e){e.INLINE="inline",e.NONE="none"})(ie||(ie={}));const he=e=>{const{className:i,defsUsage:r=ie.INLINE,hash:n,simple:s=!1,title:a,topics:d=[]}=e,p=d.length<2?[...d,P[te]]:d,m=w=>`${w}-${n}`,{segmentPaths:g,xMax:u,yMax:f}=Lr({hash:n,xPadding:Nr,xScale:Ot,yOffset:It,yPadding:H,yScale:$r}),v=f*It,b=f*H/4,y=b*.75,k=[0,0,u,f];return s?o(Yt,{className:i},o(Lt,{className:Pe,preserveAspectRatio:"none",viewBox:k.join(" ")},o("title",null,"Generated art for the page or post titled",o("i",null,a),", with the content or commit hash ",n," ",p.length>0?[", and the topics: ",p.map(String).join(", ")]:null),o("g",{transform:[`translate(0, ${f*H})`,`scale(1, ${1-H*2})`].join(" ")},g.map((w,C)=>{const M=C%p.length,E=p[M],O=Dt(E);return o(Bt,{key:w,className:O,d:w})})))):o(Yt,{className:i},o(Lt,{className:Pe,preserveAspectRatio:"none",viewBox:k.join(" ")},o("title",null,"Generated art for the page or post titled",o("i",null,a),", with the content or commit hash ",n," ",p.length>0?[", and the topics: ",p.map(String).join(", ")]:null),o("defs",null,r===ie.INLINE?o(Mt,null):null,o("filter",{id:m("blur")},o("feOffset",{in:"SourceGraphic",dx:"0",dy:y,result:"glowOffsetOut"}),o("feGaussianBlur",{in:"glowOffsetOut",stdDeviation:b,result:"glowBlurOut"}),o("feBlend",{in:"SourceGraphic",in2:"glowBlurOut",mode:"color-dodge"})),o("clipPath",{id:m("blurOverlayClip")},o("rect",{x:"0",width:u,y:v,height:f})),o("filter",{id:m("blurOverlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:y}),o("feGaussianBlur",{result:"glowBlurOut",in:"glowOffsetOut",stdDeviation:b})),o("filter",{id:m("blurUnderlay")},o("feOffset",{result:"glowOffsetOut",in:"SourceGraphic",dx:"0",dy:y}),o("feGaussianBlur",{in:"glowOffsetOut",result:"glowBlurOut",stdDeviation:b}),o("feTurbulence",{type:"turbulence",baseFrequency:"10",numOctaves:"2",result:"turbulence"}),o("feDisplacementMap",{in:"glowBlurOut",in2:"turbulence",result:"dither",scale:"25",xChannelSelector:"R",yChannelSelector:"G"}),o("feColorMatrix",{in:"dither",result:"saturated",type:"saturate",values:"5"}),o("feGaussianBlur",{in:"saturated",result:"saturatedBlurOut",stdDeviation:b})),o("g",{id:m("blobs")},g.map((w,C)=>{const M=C%p.length,E=p[M],O=Dt(E);return o(Bt,{key:w,className:O,d:w,mask:"url(#softVerticalFade)"})}))),o("g",{transform:[`translate(0, ${f*H})`,`scale(1, ${1-H*2})`].join(" "),filter:`url(#${m("blur")})`},o("use",{href:`#${m("blobs")}`,mask:"url(#horizontalMidFade)"})),o("g",{"clip-path":`url(#${m("blurOverlayClip")})`,filter:`url(#${m("blurOverlay")})`,transform:[`translate(0, ${f*H})`,`scale(1, ${1-H*2})`].join(" ")},o("use",{href:`#${m("blobs")}`,mask:"url(#softVerticalFade)"}))))},Hr=[,"January","February","March","April","May","June","July","August","September","October","November","December"],zr=l("time",{nested:{[c.darkMode]:{...c[c.darkMode].deemphasize}},...c.deemphasize}),De=({date:e,short:i=!1,...r})=>{const n=e.getMonth()+1,s=e.getFullYear(),a=i?`${n}/${s}`:[e.getDate(),Hr[n],s].join(" ");return o(zr,{...r,datetime:e.toISOString()},a)},Nt=l("span",{...c.topicTagOuter,backgroundColor:"currentcolor",borderRadius:"0.25rem",display:"inline-block",fontSize:"max(15px, 0.7778em)",fontWeight:500,lineHeight:1,overflow:"hidden",textDecoration:"none"}),Fr=l(Nt,{...c.topicTagLink(c.topicTagIdentifier.className)}),_r=l("span",c.topicTagIdentifier()),Ur=l(_r,{...c.topicTagInner,display:"inline-block",lineHeight:1,padding:"0.325rem 0.625rem 0.325rem 0.5rem"}),$t=({className:e,link:i=!0,topic:r})=>{const n=ci(r),s=at(r);if(n==null||typeof s!="string")throw new Error(`Unexpected topic: ${String(s)}`);const a=i?Fr:Nt,d=i?{as:"a",href:`/blog/topics/${n}/`}:{as:"span"};return o(a,{className:[e,c.topicColorClassNames[s]??"",c.HOVER_INHERIT_TOPIC_COLOR_CLASS_NAME].join(" "),...d},o(Ur,null,s))},Gr=l("ul",{nested:{"&, & > li":{listStyle:"none"}},display:"flex",flexWrap:"wrap",margin:0,padding:0}),qr=l("li",{nested:{"&, &:first-child":{margin:"0.5em 1em 0 0"},"&:last-child":{marginBottom:0,marginRight:0}},display:"inline-block",flexShrink:0}),Ht=({className:e,link:i=!0,topics:r})=>o(Gr,{className:e},r.map(n=>typeof n=="string"?o(qr,{key:ni(n)},o($t,{link:i,topic:n})):null)),Xr=e=>e.reduce((i,r)=>{const n=r.stat.created.getFullYear(),s=i[n]??[];return{...i,[n]:[...s,r]}},{}),Wr=l(L,{paddingLeft:0,nested:{"&, & > li":{listStyle:"none"}}}),Vr=l(L,{...c.blog.listing.item,minHeight:Le,padding:"1rem 0 1.5rem",position:"relative",nested:{"&:last-child":{marginBottom:0}}}),Kr=l(he,{left:0,position:"absolute",top:"1rem"}),Jr=l(L,{fontWeight:"normal",gridColumn:"2 / -2",paddingTop:`calc(${Le} - max(2.5rem, 4.16667vw))`,textDecoration:"none"}),Qr=I({backdropFilter:"blur(1rem)",justifySelf:"start",marginLeft:"-0.5rem",marginRight:"-0.5rem",WebkitBackdropFilter:"blur(1rem)"}),Zr=l("h2",{...c.blog.listing.linkTitle,marginBottom:0,marginTop:0,padding:"0.2778rem 0.5rem 0.5556rem 1.4444rem"}),en=l(De,{padding:"0 0.5rem 0.125rem 0"}),tn=l(Ht,{gridColumn:"3 / 3"}),on=l("div",{...c.blog.listing.description,marginTop:"0.5rem",marginBottom:"0.5rem"}),rn=l("a",{fontSize:"0.875em"});var ye;(function(e){e.DATE="date"})(ye||(ye={}));var fe;(function(e){e.ASC="asc",e.DESC="desc"})(fe||(fe={}));const nn=({order:e=fe.DESC,posts:i,sort:r=ye.DATE})=>{const n=i.slice().sort((a,d)=>e===fe.DESC&&r===ye.DATE?a.stat.created>d.stat.created?-1:1:0),s=Xr(n);return o(B,null,Object.entries(s).map(([a,d])=>o(B,{key:a},o(Wr,null,d.map(p=>{const{description:m,hash:g,path:u,stat:{created:f},title:v,topics:b}=p;return o(Vr,{key:u},o(Jr,{as:"a",href:u},o(Kr,{defsUsage:ie.NONE,hash:g,padded:!0,title:v,topics:b}),o(Zr,{className:Qr},v),o(en,{date:f})),o(tn,{link:!1,topics:b}),o(on,{className:c.blog.listing.descriptionIdentifier},m),o("p",null,o(rn,{href:u},"Read more\u2026")))})))))},sn=()=>o(B,null,o("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-touch-icon.png"}),o("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),o("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-chrome-192x192.png"}),o("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),o("link",{rel:"manifest",href:"/favicons/site.webmanifest"}),o("link",{rel:"mask-icon",href:"/favicons/safari-pinned-tab.svg",color:"#ff0000"}),o("link",{rel:"shortcut icon",href:"/favicons/favicon.ico"}),o("meta",{name:"apple-mobile-web-app-title",content:"Eyelidlessness"}),o("meta",{name:"application-name",content:"Eyelidlessness"}),o("meta",{name:"msapplication-TileColor",content:"#555555"}),o("meta",{name:"msapplication-config",content:"/favicons/browserconfig.xml"}),o("meta",{name:"theme-color",content:"#ffffff"}));Ci();const zt=({children:e,...i})=>o(Ao,{...i},o("style",{dangerouslySetInnerHTML:{__html:ki}}),e,o(sn,null)),an=l("div",{}),cn=({devilsBreakpoint:e,gap:i,...r})=>o(an,{...r}),ln=l(cn,({devilsBreakpoint:e,gap:i})=>({alignItems:"center",display:"flex",flexWrap:"wrap",nested:{"&:before":{content:'""',flexBasis:`max(${[i?.horizontal??"0px",`calc((${e} - 100%) * 666)`].join(", ")})`,flexGrow:666,marginTop:i?.vertical??"0px"},"& > *":{flexGrow:1,marginLeft:"auto",marginRight:"auto",textAlign:"center"},"& > *:first-child":{order:-1}}})),_=512,Ft=[0,0,_,_].join(" "),dn=_/2,pn=["M335","499c14","0","12","17","12","17H165s-2-17","12-17c13","0","16-6","16-12l-1-50c-71","16-86-28-86-28-12-30-28-37-28-37-24-16","1-16","1-16","26","2","40","26","40","26","22","39","59","28","74","22","2-17","9-28","16-35-57-6-116-28-116-126","0-28","10-51","26-69-3-6-11-32","3-67","0","0","21-7","70","26","42-12","86-12","128","0","49-33","70-26","70-26","14","35","6","61","3","67","16","18","26","41","26","69","0","98-60","120-117","126","10","8","18","24","18","48l-1","70c0","6","3","12","16","12z"].join(" "),mn=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","aria-label":"GitHub",height:"0",viewBox:Ft,width:"0"},o("defs",null,o("mask",{id:"octocat-knockout"},o("rect",{fill:"#fff",height:_,mask:"url(#octocat)",rx:dn,width:_}),o("path",{d:pn,fill:"#000"})))),gn=l("rect",{...c.gitHubLogo}),_t=({className:e})=>o("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",className:e,role:"img",viewBox:Ft},o("title",null,"GitHub"),o(gn,{height:_,mask:"url(#octocat-knockout)",width:_})),be={height:60,width:338},un=l("svg",{display:"inline-block",maxWidth:"100%",width:`${be.width}px`}),hn=l("use",{nested:{[c.darkMode]:{...c[c.darkMode].siteLogo}},...c.siteLogo,fill:"currentcolor"}),yn=`0 0 ${be.width} ${be.height}`,fn=()=>o(un,{viewBox:yn},o(hn,{xlinkHref:"/images/SiteLogo.svg#site-logo"}),o("title",null,"Eyelidlessness")),{columns:K,container:bn}=c.siteHeader,Sn=`
  ${K[0]}
  ${K[1]}
  min(
    ${K[2][0]},
    ${K[2][1]}
  )
  ${K[3]}
  ${K[4]}
`.replace(/\s+/g," "),vn=l("div",{...bn,display:"grid",gridColumn:"1 / -1",gridTemplateColumns:Sn,padding:"1rem 0"}),wn=l("div",{gridColumn:3}),Tn=l("div",{margin:"0 auto"}),kn=l("a",{textDecoration:"none"}),Cn=l("ul",{alignItems:"center",display:"flex",flexShrink:0,justifyContent:"center",listStyle:"none",marginBottom:0,marginTop:0,padding:0}),Ut=1,En=l("li",{nested:{"&:first-child":{marginLeft:0},"&:last-child":{marginRight:0}},display:"block",flexShrink:0,listStyle:"none",margin:`0 ${Ut/2}rem`,padding:0}),An=l("a",{...c.siteHeader.pageLinks,display:"block",fontSize:"clamp(1em, 3vw, 1.125em)",fontWeight:300,lineHeight:1,padding:"0.25rem",textDecoration:"none",whiteSpace:"nowrap",nested:{[c.darkMode]:{...c[c.darkMode].siteHeader.pageLinks},":active":{fontWeight:300},":local-link":{textDecoration:"underline"}}}),Gt="1.5em",Fs=l(_t,{display:"block",width:`clamp(1.125em, 4vw, ${Gt})`}),Rn=()=>{const e=[{label:"Blog",location:"/"},{label:"Hire Me",location:"/resume/"},{label:"GitHub",location:"https://github.com/eyelidlessness"}],i=e.reduce((s,a)=>typeof a.label=="string"?s+a.label.length:s,0),r={horizontal:"2rem"},n=`${[`${be.width}px`,r.horizontal,`${i+1}ch`,Gt,`${e.length*Ut}rem`].join(" + ")}`;return o(vn,{as:"header"},o(wn,null,o(ln,{as:"nav",devilsBreakpoint:n,gap:r},o(Tn,null,o(kn,{href:"/"},o(fn,null))),o(Cn,null,e.map(({location:s,label:a})=>o(En,null,o(An,{href:s},a)))))))},xn=l(L,({isListing:e})=>({marginTop:e?0:"1rem",paddingBottom:"4em"})),qt=e=>o(Z,null,o(Rn,null),o(xn,{as:"main",...e})),Pn=l(L,{...c.aside,nested:{...c.aside.nested,"&:last-child":{marginBottom:0},"& h1":{fontFamily:"unset",fontSize:"1.2em",lineHeight:1,marginBottom:"0.75rem",scrollMarginTop:"1rem"},"& p":{marginBottom:"0.625rem"},"& p:last-child":{marginBottom:0}},marginBottom:"2rem",paddingBottom:"1rem",paddingTop:"1rem"}),jn=l("h1",{fontSize:"1em",lineHeight:1,marginBottom:"0.75rem"}),Mn=l("div",{fontSize:"0.889em"}),On=({as:e="section",title:i,...r})=>o(Pn,{as:e,itemprop:"description"},i?o(jn,null,i):null,o(Mn,{...r})),In=l("h1",{marginBottom:"0.25rem"}),Yn=l(L,{marginBottom:"1rem"}),Ln=({children:e,description:i,descriptionRaw:r,hash:n,stat:{created:s},title:a,topics:d})=>o(B,null,o(zt,null,o(Qe.title,null,a," | Eyelidlessness"),o(Qe.description,null,r)),o(qt,{as:"article"},o(Yn,null,o(he,{hash:n,title:a,topics:d}),o(In,null,a),o(De,{date:s,itemprop:"datePublished"}),o(Ht,{link:!1,topics:d})),o(On,null,i),e)),Dn=e=>{const{description:i,importURL:r,path:n,title:s,topics:a}=e,{hash:d,stat:p}=Et(n,r),m=gr`${We(o(B,null,i))}`;return{description:i,descriptionRaw:m,hash:d,path:n,stat:p,title:s,topics:a}},Bn=l(L,{padding:"1rem 0 0",nested:{"&:first-child":{paddingTop:0}}}),re=e=>o(Bn,{as:"section",...e}),Be=l("div",{alignItems:"start",display:"flex",margin:"-0.5rem",nested:{"& > *":{margin:"0.5rem"}}}),Nn=l(Be,{flexWrap:"wrap",nested:{"& > *":{minWidth:"max(calc(50% - 2rem), 30ch)"}}}),Ne=l(Nn,{alignItems:"baseline",justifyContent:"space-between",margin:"0 -0.5rem",nested:{"& > *":{margin:"0 0.5rem",minWidth:"auto"}}}),$n=l("a",{...c.resume.contactList.link,fontSize:"0.88889em",minWidth:"auto",textDecoration:"none"}),Hn=l(L,{...c.resume.brief,margin:"1rem 0 0",padding:"1rem 0",nested:{...c.resume.brief.nested,"& p, & ul, & li":{margin:"0.5em 0"},"& :first-child":{marginTop:0},"& :last-child":{marginBottom:0},"& > *":{fontSize:"0.88889em",minWidth:"auto"}}}),$e="@media (min-width: 44.625rem)",zn=l(Be,{display:"block",margin:0,nested:{"& > *":{margin:"0 0 1rem"},[$e]:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",margin:"0 -0.5rem -0.5rem",nested:{"& > *":{margin:"0 0.5rem 0.5rem"}}}}}),He=l("h2",{fontSize:z(`${c.headingRanges.h3.minEm}em`,`${c.headingRanges.h3.fluidVw}vw`,"1.17778em"),marginBottom:0,paddingLeft:0,textIndent:0}),Fn=l(zn,{fontSize:"0.88889em"}),_n=l("ul",{display:"block",padding:0}),Un=l("li",{display:"inline-block",listStyle:"none",margin:"0 1.5rem 0.125rem 0",padding:0,nested:{"&:last-child":{marginRight:0},[$e]:{display:"block",nested:{"&:last-child":{marginBottom:0}}}}}),Gn=Object.values(S).reduce((e,i)=>({...e,[i]:l("span",{...c.resume.skillLevel[i],borderRadius:"4px",display:"inline-block",height:"8px",margin:"0 0.325rem 0 0",width:"8px",verticalAlign:"middle",nested:{...c.resume.skillLevel[i].nested,[$e]:{margin:"0 0.325rem"}}})}),{}),qn=({name:e,skills:i})=>o("div",null,o(He,null,e),o(_n,null,i.map(({level:r,name:n})=>{const s=Gn[r];return o(Un,{key:n},o(s,{role:"img",title:`Skill level: ${r}`}),mr`${n}`)}))),Xn=l(L,{padding:"1rem 0"}),Wn=l("span",{...c.deemphasize,fontStyle:"italic",nested:{[c.darkMode]:{...c[c.darkMode].deemphasize}}}),Vn=({children:e,...i})=>{const[r,...n]=ae(e);return o(Ne,{...i},o("h3",null,r),ae(n).map(s=>typeof s=="string"?o(Wn,null,s):s))},Kn=l("div",{fontSize:"0.94444em",margin:"0.5rem 0"}),Jn=/^(\d{4})-(\d{2})$/,Xt=e=>{const i=e.match(Jn);if(i==null)throw new Error(`Invalid format for date: ${e}, expected YYYY-MM`);const[,r,n]=i;return new Date(`${r}-${n}-01T00:00:00`)},Wt=l("div",{fontSize:"0.88889em"}),ze=l(De,{fontSize:"inherit"}),Qn=l("h2",{marginBottom:"0.5rem"}),Vt=({range:[e,i]})=>{const r=Xt(e),n=Xt(i);return e==i?o(Wt,null,o(ze,{date:r,short:!0})):o(Wt,null,o(ze,{date:r,short:!0})," \u2013 ",o(ze,{date:n,short:!0}))},Zn=l("div",{fontSize:"0.88889rem"}),es=l("ul",{fontSize:"0.88889em",paddingInlineStart:0}),ts=l("li",{display:"grid",gridTemplateColumns:"1.25rem 1fr",listStyle:"none",nested:{"&:before":{content:'"\u203A"',fontWeight:"bolder",lineHeight:1.2222,textAlign:"center"}}}),os=l(Xn,{marginBottom:"0.5rem",paddingBottom:"1.5rem",position:"relative",nested:{"&:after":{...c.resume.employment.separator,bottom:0,content:'""',display:"block",gridColumn:"3 / 3",left:0,position:"absolute",width:"100%"},"&:last-child":{marginBottom:0},"&:last-child:after":{display:"none"}}}),is=({employer:e,end:i,highlights:r,position:n,start:s,summary:a,...d})=>o(os,{...d},o(Vn,null,o(B,null,e),o(Vt,{range:[s,i]})),o(Zn,null,n),a==null?null:o(Kn,null,F(a)),r==null?null:o(es,null,r.map(p=>o(ts,{key:p},F(p))))),rs=l(re,{...c.resume.employment.container,marginTop:"1rem"}),ns=({employment:e})=>o(rs,null,o(Qn,null,"Recent Experience"),e.history.map(i=>o(is,{...i}))),ss=l("h3",{paddingLeft:0,textIndent:0}),as=l("a",{color:"inherit",fontWeight:"inherit",textDecoration:"none",nested:{"&:active, &:focus, &:hover, &:visited":{color:"inherit"}}}),Kt="@media (min-width: 41.666rem)",cs=l("a",{display:"block",padding:"0 0.5rem 0.5rem 0.5rem",zIndex:1,nested:{"& svg":{width:"1.25em"},[Kt]:{paddingLeft:0}}}),ls=l("div",{paddingTop:"0.05556rem"}),ds=l("div",{alignItems:"start",display:"grid",gridTemplateColumns:"auto 1fr",padding:"1rem 0"}),ps=l("div",{fontSize:"0.88889em",margin:"0.5rem 0"}),Jt=({project:{description:e,end:i,repo:r,role:n,title:s,start:a,summary:d}})=>o(ds,null,o(cs,{href:r},o(_t,null)),o(ls,null,o(Ne,null,o(ss,null,o(as,{href:r},s)),o(Vt,{range:[a,i]})),o(ps,null,n===T.CREATOR?F(e):null,F(d)))),ms=l(Be,{display:"block",margin:0,nested:{[Kt]:{display:"flex",flexWrap:"nowrap",margin:"-1rem",nested:{"& > *":{flexBasis:"calc(50% - 2rem)",margin:"1rem"}}}}}),Qt=l("div",{marginTop:"0.5rem"}),gs=({projects:e})=>{const{creator:i,contributor:r}=e.reduce((n,s)=>{const a=s.role===T.CREATOR?"creator":"contributor";return{...n,[a]:[...n[a],s]}},{creator:[],contributor:[]});return o(re,null,o(ms,null,o("div",null,o(He,null,"Projects I Created"),o(Qt,null,i.map(n=>o(Jt,{project:n})))),o("div",null,o(He,null,"Open Source Contributions"),o(Qt,null,r.map(n=>o(Jt,{project:n}))))))},us=l(L,{nested:{"& p":{lineHeight:1.325,margin:"0 0 0.75em"},"& p:last-child":{margin:0}}}),hs=({className:e,id:i,meta:r,resume:n})=>{const{contact:{email:s},employment:a,info:d,name:p,projects:m,skills:g}=n;return o(us,{className:e,id:i},o(mn,null),o(he,{...r}),o(re,null,o(Ne,null,o("h1",null,p),o($n,{href:`mailto:${s}`},s)),o(Hn,null,F(d.brief))),o(re,{"aria-label":"Skillsets"},o(Fn,null,Object.entries(g.merged).map(([u,f])=>o(qn,{key:u,name:u,skills:f})))),o(ns,{employment:a}),o(gs,{projects:m}),o(re,null,o("h2",null,"References"),F("Available upon request.")))},_s=l("ul",{display:"flex",fontSize:"0.88889em",listStyle:"none",margin:0,padding:0}),Us=l("li",{margin:"0 0.5rem 0 0",padding:0,nested:{"&:last-child":{marginRight:0}}}),Gs=l("a",{...c.resume.contactList.link,textDecoration:"none"});export{he as BlogArt,Dr as BlogArtDefs,nn as BlogListing,Ln as BlogPost,zt as Head,qt as Main,hs as Resume,Z as StylesProvider,P as Topic,$t as TopicTag,Ce as __SNOWPACK_ENV__,Dn as getBlogPostStaticProps,kt as getInitialCommitDate,Ct as getInitialFileHash,Et as getPageMetadata,F as mdx,Ho as resetAbbrContext,ii as resume,l as styled};
