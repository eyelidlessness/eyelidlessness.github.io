import {
  array,
  boolean,
  integer,
  literal,
  number,
  object,
  optional,
  partial,
  string,
  todo,
  union,
} from '@/lib/schemas';
import type { Static, TSchema } from '@sinclair/typebox';

type Infer<Schema extends TSchema> = Immutable<Static<Schema>>;

export const FRESH_SCHEMA_FORMAT = 'FRESH@0.1.0';

const meta = object({
  format: literal(FRESH_SCHEMA_FORMAT, {
    description: `The canonical resume format and version. Should be 'FRESH@0.1.0'.`,
  }),
  version: optional(string({
    description: 'The semantic version number for this resume.',
  })),
}, {
  description: `The 'meta' section contains metadata information for the resume, including the resume version, schema, and any other fields required by tools.`,
});

export type FRESHResumeMeta = Infer<typeof meta>;

const info = partial(object({
  label: string({
    description: `A label for this resume, such as 'Full-Stack Developer'.`,
  }),
  class: string({
    description: `Profession type or 'character class'.`,
  }),
  image: string({
    description: 'URL or path to your picture in JPEG, PNG, GIF, or BMP format.',
  }),
  brief: string({
    description: 'A short description or summary of yourself as a candidate.',
  }),
  quote: string({
    description: 'Candidate quote or byline.',
  }),
}, {
  description: `The 'info' section contains basic summary information for the candidate, including an optional label or job title, candidate photo, summary, and quote.`,
}));

export type FRESHResumeInfo = Infer<typeof info>;

const relocation = partial(object({
  willing: union([boolean(), string()], {
    description: 'Willingness to relocate.',
  }),
  destinations: array(string({
    description: 'City or area of relocation.',
  }), {
    description: 'Preferred destinations for relocation',
  }),
}));

export type FRESHResumeDispositionRelocation = Infer<typeof relocation>;

const disposition = partial(object({
  travel: integer({
    description: 'Percentage of time willing to travel (0 to 100).',
    // minimum: 0,
    // maximum: 100,
  }),
  authorization: string({
    description: 'Work authorization: citizen, work visa, etc.',
  }),
  commitment: array(string({
    description: 'One of: contract, permanent, part-time, seasonal, full-time.',
  }), {
    description: 'Types of work commitment desired: contract, perm, seasonal, etc.',
  }),
  remote: boolean({
    description: 'Open to remote employment opportunities.',
  }),

  relocation,
}, {
  description: `The disposition section describes the candidate's overall attitude towards new employment opportunities including: travel, relocation, schedule, desired type of work, and the like.`,
}));

export type FRESHResumeDisposition = Infer<typeof disposition>;

const contactOther = array(partial(object({
  label: string({
    description: 'A label for this contact information.',
  }),
  category: string({
    description: 'Type of contact information: email, phone, url, postal, or IM.',
  }),
  value: string({
    description: 'Phone number, email address, website, etc.',
  }),
})));

export type FRESHResumeContactOther = Infer<typeof contactOther>;

const contact = partial(object({
  email: string({
    description: 'Primary contact email.',
    format: 'email',
  }),
  phone: string({
    description: 'Primary phone number.',
  }),

  website: string({
    description: 'Website, blog, or home page.',
    format: 'uri',
  }),

  other: contactOther,
}, {
  description: `The 'contact' section contains the candidate's contact information, including phone numbers, emails, websites, IMs, and custom contact types.`,
}));

export type FRESHResumeContact = Infer<typeof contact>;

const location = partial(object({
  address: string({
    description: 'Your full postal address.',
  }),
  code: string({
    description: 'Postal or other official routing code.',
  }),
  city: string({
    description: 'Your home city.',
  }),
  country: string({
    description: 'Two-digit country code (US, AU, UK, IN, etc.).',
  }),
  region: string({
    description: 'Your state, region, or province.',
  })
}, {
  description: `The 'location' section, when present, contains the candidate's location and address info.`,
}));

export type FRESHResumeLocation = Infer<typeof location>;

const employmentHistory = array(object({
  employer: string({
    description: 'Employer name.',
  }),

  position: optional(string({
    description: 'Your position or formal job title.',
  })),
  url: optional(string({
    description: 'Employer website.',
    format: 'uri',
  })),
  start: optional(string({
    description: 'Date you began work, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
    format: 'date',
  })),
  end: optional(string({
    description: 'Date you finished work, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
    format: 'date',
  })),
  summary: optional(string({
    description: 'A summary of your achievements and responsibilities under this employer.',
  })),
  marginalia: optional(string()),
  highlights: optional(
    array(
      union([
        string(),
        array(string())
      ])
    )
  ),
  location: optional(string({
    description: `Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'.`,
  })),
  keywords: optional(array(string({
    description: 'For example, C++, HTML, HIPAA, etc.',
  }), {
    description: 'Keywords associated with this position.',
  })),
}));

export type FRESHResumeEmploymentHistory = Infer<typeof employmentHistory>;

export type FRESHResumeEmploymentHistoryItem = FRESHResumeEmploymentHistory[number];

const employment = partial(object({
  summary: string({
    description: 'Summary of overall employment.',
  }),

  history: employmentHistory,
}, {
  description: `The 'employment' section describes the candidate's formal employment history.`,
}));

export type FRESHResumeEmployment = Infer<typeof employment>;

const projectMedia = array(object({
  category: string({
    description: 'Media category: image, thumbnail, screenshot, MP3, download, etc.',
  }),
  name: optional(string({
    type: 'string',
    description: 'Friendly media name.',
  })),
  url: optional(string({
    type: 'string',
    description: 'Media link, path, or location.',
  }))
}), {
  description: 'Media associated with this project.',
});

export type FRESHResumeProjectMedia = Infer<typeof projectMedia>;

const projects = array(object({
  title: string({
    description: 'Project name or code-name.',
  }),

  category: optional(string({
    description: 'Project type: open-source, private, side project, etc.',
  })),
  description: optional(string({
    description: 'Project description or summary.',
  })),
  summary: optional(string({
    description: 'A summary of your achievements and responsibilities on the project.',
  })),
  role: optional(string({
    description: 'Your role on the project: Contributor, Creator, etc.',
  })),
  url: optional(string({
    description: 'Project URL.',
    format: 'uri'
  })),
  media: optional(projectMedia),
  repo: optional(string({
    description: 'Repo URL.',
    format: 'uri',
  })),
  start: optional(string({
    description: 'Date your involvement with project began, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
    format: 'date',
  })),
  end: optional(string({
    description: 'Date your involvement with project ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
    format: 'date',
  })),
  highlights: optional(array(string({
    description: `For ex, 'Led 5-person development team, increasing profits by 50% year-over-year'.`,
  }), {
    description: 'Noteworthy project-related achievements and/or highlights.',
  })),
  location: optional(string({
    description: `Freeform location of the job or position, e.g., 'San Francisco, CA' or 'Tokyo'.`,
  })),
  keywords: optional(array(string({
    description: 'For example, C++, HTML, HIPAA, etc.',
  }), {
    description: 'Keywords associated with this project.',
  })),
}), {
  description: `The 'projects' section describes the candidate's project history -- not the jobs the candidate has worked but the specific projects and enterprises the candidate has created or been involved in, whether paid or unpaid.`,
});

export type FRESHResumeProjects = Infer<typeof projects>;

export type FRESHResumeProject = FRESHResumeProjects[number];

const skills = partial(object({
  sets: array(object({
    name: string({
      description: `Name of the skillset: 'Programming' or 'Project Management' etc.`,
    }),
    level: optional(string({
      description: 'Level of mastery of the skill.',
    })),
    skills: array(string({
      description: 'Title or ID of a skill from the skills list.',
    })),
  })),

  list: array(object({
    name: string({
      description: 'The name or title of the skill.',
    }),
    level: optional(string({
      description: 'A freeform description of your level of mastery with the skill.',
    })),
    summary: optional(string({
      description: 'A short summary of your experience with this skill.',
    })),
    years: optional(union([
      string(),
      number(),
    ], {
      description: `Number of years you've used the skill.`,
    })),
  })),
}, {
  description: `A description of the candidate's formal skills and capabilities.`,
}));

export type FRESHResumeSkills = Infer<typeof skills>;

const educationHistory = array(object({
  title: optional(string({
    description: 'A freeform title for this education stint. Typically, this should be the short name of your degree, certification, or training.',
  })),

  institution: string({
    description: 'College or school name.',
  }),
  area: optional(string({
    description: 'e.g. Arts',
  })),
  studyType: optional(string({
    description: 'e.g. Bachelor',
  })),
  start: optional(string({
    description: 'Date this schooling began, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
    format: 'date',
  })),
  end: optional(string({
    description: 'Date this schooling ended, in YYYY, YYYY-MM, or YYYY-MM-DD format.',
    format: 'date',
  })),
  grade: optional(string({
    description: 'Grade or GPA.',
  })),
  curriculum: optional(array(string({
    description: 'The course name and number or other identifying info.',
  }), {
    description: 'Notable courses, subjects, and educational experiences.',
  })),
  url: optional(string({
    description: 'Website or URL of the institution or school.',
    format: 'uri',
  })),
  summary: optional(string({
    description: 'A short summary of this education experience.',
  })),
  keywords: optional(array(string({
    description: 'For example, C++, HTML, HIPAA, etc.',
  }), {
    description: 'Keywords associated with this education stint.',
  })),
  highlights: optional(array(string({
    description: `For ex, 'Graduated *summa cum laude*'.`,
  }), {
    description: 'Noteworthy achievements and/or highlights.',
  })),
  location: optional(string({
    description: `Freeform location of the education, e.g., 'San Francisco, CA' or 'Tokyo'.`,
  })),
}));

export type FRESHResumeEducationHistory = Infer<typeof educationHistory>;

const education = object({
  summary: optional(string({
    description: 'Summary of overall education.',
  })),
  level: string({
    description: 'Highest level of education obtained (none, diploma, some-college, degree).',
  }),
  degree: optional(string({
    description: 'Your degree, if any (BSCS, BA, etc.).',
  })),
  history: optional(educationHistory)
}, {
  description: `The 'employment' section describes the candidate's formal education, including college and university, continuing education, and standalone programs and courses.`,
});

export type FRESHResumeEducation = Infer<typeof education>;

const social = array(object({
  network: string({
    description: 'The name of the social network, such as Facebook or GitHub.',
  }),
  user: string({
    description: 'Your username or handle on the social network.',
  }),
  url: string({
    description: 'URL of your profile page on this network.',
    format: 'uri',
  }),
  label: optional(string({
    description: 'A friendly label.',
  })),
}), {
  description: `The 'social' section describes the candidate's participation in internet and social networking services and communities including GitHub, FaceBook, and the like.`,
});

export type FRESHResumeSocial = Infer<typeof social>;

const fresh = object({
  name: string({
    description: `The candidate's name as it should appear on the resume.`,
  }),
  meta,

  info: optional(info),
  disposition: optional(disposition),
  contact: optional(contact),
  location: optional(location),
  employment: optional(employment),
  projects: optional(projects),
  skills: optional(skills),
  education: optional(education),
  social: optional(social),

  services: todo(),
  recognition: todo(),
  writing: todo(),
  reading: todo(),
  speaking: todo(),
  governance: todo(),
  languages: todo(),
  samples: todo(),
  references: todo(),
  testimonials: todo(),
  interests: todo(),
  extracurricular: todo(),
  affiliation: todo(),
}, {
  title: 'FRESH Resume Schema',
});

export type FRESHResume = Infer<typeof fresh>;
