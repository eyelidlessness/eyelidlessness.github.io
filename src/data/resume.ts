import dedent       from 'dedent';
import {
  ProjectTimestamp,
  ProjectTimestamp as ResumeTimestamp,
} from '@/data/projects';
import { identity } from '@/lib/helpers';
import {
  FRESH_SCHEMA_FORMAT,
  FRESHResume,
  FRESHResumeEmploymentHistoryItem,
} from '@/schemas/FRESH';
import { projects } from './projects';

type ValidResume<T extends Immutable<FRESHResume>> = Merge<T>;

const validateResume = <T extends Immutable<FRESHResume>>(
  value: ValidResume<T>
): T => value;

export interface EmploymentHistoryItem extends FRESHResumeEmploymentHistoryItem {
  readonly employer:    string;
  readonly end:         ProjectTimestamp;
  readonly highlights?: readonly string[];
  readonly position:    string;
  readonly start:       ProjectTimestamp;
  readonly summary?:    string;
}

export type EmploymentHistory = readonly EmploymentHistoryItem[];

type ValidEmploymentHistory<
  T extends Immutable<EmploymentHistory>
> = Merge<T>;

const validateEmploymentHistory = <
  T extends Immutable<EmploymentHistory>
>(
  value: ValidEmploymentHistory<T>
): T => value;

const employmentHistory = validateEmploymentHistory([
  {
    employer: 'ODK',
    // TODO: this **WAS** the title I applied for right? I know they only
    // specified "software engineer" in later listings.
    position: 'Senior Software Engineer',
    start:    '2021-03',
    end:      '2025-04',

    summary: `
      ODK builds a comprehensive suite of open source data collection tools, used
      globally across a wide variety of campaigns with high social impact in
      public health & beyond.
    `,

    highlights: [
      `
        Initially hired to maintain Enketo—ODK's inherited/legacy web-based data
        collection tool.
      `,

      `
        Conceived, created & led development of ODK Web Forms—ODK's
        greenfield replacement for Enketo & complement to their flagship Collect
        product for Andriod devices—successfully shipping to real users as of
        early 2025.
      `,

      `
        Prototyped initial design, architecture & implementation of Web Forms,
        supporting evaluation of long-term viability for the project by ODK
        leadership.
      `,

      `
        Primarily responsible for design & implementation of Web Forms XPath
        functionality. Achieved full W3C XPath 1.0 standards compliance;
        extension of XPath language semantics to support additional data types;
        development of a broad library of custom functions supporting the
        underlying ODK XForms specification; adapted interpreter to provide XPath
        evaluation semantics in arbitrary runtime contexts, with a small &
        flexible adapter API.
      `,

      `
        Primarily responsible for design & implementation of the Web Forms XForms
        Engine. Implemented the engine's core data model and computational
        graph, according to ODK XForms spec; developed the engine's fundamental
        abstractions for computation as an internal reactive graph; conceived and
        matured the engine's external interfaces, providing simple, cohesive & client-agnostic access to the engine's underlying ODK XForms semantics.`,

      `
        Directed design & architecture of Web forms to support long-term vision
        for the project—anticipating unification of ODK's data collection
        software across all supported platforms, and expanding functionality well
        beyond the project's current, core data capture feature set.
      `,
    ],
  },
  {
    employer: 'Treez',
    position: 'Senior Software Engineer',
    start:    '2018-12',
    end:      '2020-09',

    summary: `
      Treez provides a full seed-to-sale catalogue of tools for
      inventory & process management, regulatory reporting, B2B
      sales, and point of sale for the legal cannabis market.
    `,

    highlights: [
      `
        Created and maintained a set of libraries designed for rapid
        development of REST API services, providing simple,
        declarative API boundaries with runtime & static type safety,
        automatically generated documentation, and a clear separation
        of concerns between those boundaries and a service's business
        logic. These libraries had been used in production for one
        successful service, adopted by another team for a greenfield
        service, and ports of all other Treez API services planned,
        with no significant maintenance requests.
      `,

      `
        Expanded the API translation layer built at Mister Kraken to
        support the regulatory reporting APIs used in markets served by
        Treez in CA, MI, and beyond. This also allowed the original
        Mister Kraken product to expand integration into those markets,
        and Treez to expand its operations from point of sale to a full
        seed-to-sale suite.
      `,

      `
        Led and maintained a robust fault tolerance service layer
        between Treez end-user products and regulator reporting services.
        This ensured that frequent and widespread errors in the
        regulatory agencies' APIs did not result in a loss of compliance
        for Treez customers.
      `,

      `
        Promoted a team culture shift to embrace automated data
        correction with a historical record, and built a standard set
        of tools for data correction operations. These tools were used
        successfully for two major incidents, ensuring compliance was
        maintained with an auditable proof of operations log.
      `,
    ],
  },

  {
    employer: 'Mister Kraken',
    position: 'Senior Software Engineer',
    start:    '2017-04',
    end:      '2018-12',

    summary: `
      Mister Kraken provided a rich suite of inventory and process
      management tools for the legal cannabis market. The Reup and
      Mister Kraken teams joined forces and products in 2017.

      **Mister Kraken was acquired by Treez in late 2018.**
    `,

    highlights: [
      `
        Led design and development of an API translation layer which
        ensured a zero downtime transition for regulatory compliance
        when the WSLCB abruptly selected a new vendor's
        incompatible reporting APIs. This ensured minimal changes in
        the original Mister Kraken codebase while also preparing the
        product for expansion into other markets where other vendor
        APIs were common.
      `,

      `
        Promoted a team culture shift in development and collaboration
        to embrace automated testing, type safety, tool-based quality
        assurance, CI & automated review tools, thorough manual review
        by team members, and collaborative design & planning processes.
        This significantly improved the team's ability to deliver and
        maintain quality and value at a faster pace.
      `,

      `
        Adapted Reup's frontend web app to integrate with Mister
        Kraken's existing B2B sales platform. From time of release,
        through the Treez acquisition, to my departure, the app
        remained in active use with no significant change requests.
      `,
    ],
  },

  {
    employer: 'Reup',
    position: 'Senior Software Engineer',
    start:    '2015-11',
    end:      '2018-12',

    summary: `
      Reup was a startup in the legal recreational cannabis market,
      providing a B2B marketplace for retailers and manufacturers
      to discover and order cannabis products and supplies.

      **Reup was acquired by Treez in late 2018.**
    `,

    highlights: [
      `
        Shaped and refined product direction as the second engineer
        and fourth employee, sharing leadership on market & user
        research to inform core user stories and product decisions.
      `,

      `
        Led frontend architecture and spearheaded development of
        Reup's web app.
      `,

      `
        Shared leadership in defining core abstractions in the
        product's backend API layer to improve development safety
        and velocity.
      `,

      `
        Took ownership of refining and adapting UI & UX design as
        product requirements changed and use case complexities grew.
      `,
    ],
  },

  {
    employer: 'ClipCard',
    position: 'Senior Software Engineer',
    start:    '2013-04',
    end:      '2015-08',

    summary: `
      ClipCard was a set of apps and services which let users find
      files, notes and more across a wide variety of consumer and
      business cloud services by indexing those resources in a
      common format.
    `,

    highlights: [
      `
        Led design and development an ETL framework used by all of
        ClipCard's API integrations, providing simple, generalized
        interfaces to accelerate development of service API
        authorization, backpressure, fault tolerance and
        extract/integration patterns.
      `,

      `
        Contributed to 12 of ClipCard's API integrations, leading
        development on integrations with Dropbox, Evernote, GitHub
        and Trello.
      `,

      `
        Led frontend architecture and development of ClipCard's
        web app, and provided mentorship for the team member who
        eventually replaced me in that role as I transitioned to
        to lead API integration efforts.
      `,

      `
        Organized a hackathon which produced 8 API integration
        prototypes, ultimately leading to the company's pivot
        from enterprise services to focus on cloud services and
        consumer adoption.
      `,

      `
        Designed and developed ClipCard for Mac.
      `,
    ],
  },
] as const);

type ResumeHistory =
  & typeof employmentHistory
  & ReadonlyArray<{
      readonly end:   ResumeTimestamp;
      readonly start: ResumeTimestamp;
    }>;

const history = employmentHistory as ResumeHistory;

export enum ResumeSkillLevel {
  BASIC        = 'Basic',
  INTERMEDIATE = 'Intermediate',
  ADVANCED     = 'Advanced',
  EXPERT       = 'Expert',
}

export enum ResumeSkillset {
  LANGUAGES_PLATFORMS          = 'Languages',
  SERVICES_DISTRIBUTED_SYSTEMS = 'Services',
  USER_INTERFACE_EXPERIENCE    = 'UI/UX',
  DOMAIN_SPECIFIC_LANGUAGES    = 'DSL\u200bs',
}

const resumeSkills = {
  [ResumeSkillset.SERVICES_DISTRIBUTED_SYSTEMS]: [
    {
      name:  'REST & HATEOAS',
      level: ResumeSkillLevel.EXPERT,
    },
    {
      name:  'OpenAPI & JSON Schema',
      level: ResumeSkillLevel.EXPERT,
    },
    {
      name:  'Django REST framework',
      level: ResumeSkillLevel.ADVANCED,
    },
    {
      name:  'Fault tolerance',
      level: ResumeSkillLevel.ADVANCED,
    },
    {
      name:  'Microservice architecture',
      level: ResumeSkillLevel.ADVANCED,
    },
    {
      name:  'Apache Storm',
      level: ResumeSkillLevel.INTERMEDIATE,
    },
    {
      name:  'Redis',
      level: ResumeSkillLevel.BASIC,
    },
  ],

  [ResumeSkillset.USER_INTERFACE_EXPERIENCE]: [
    {
      name:  'React & JSX',
      level: ResumeSkillLevel.EXPERT,
    },
    {
      name:  'DOM & Web APIs',
      level: ResumeSkillLevel.EXPERT,
    },
    {
      name:  'Web performance',
      level: ResumeSkillLevel.ADVANCED,
    },
    {
      name:  'UI & UX design',
      level: ResumeSkillLevel.ADVANCED,
    },
    {
      name:  'A11y',
      level: ResumeSkillLevel.INTERMEDIATE,
    },
  ],

  [ResumeSkillset.DOMAIN_SPECIFIC_LANGUAGES]: [
    {
      name:  'Interpreter runtime',
      level: ResumeSkillLevel.ADVANCED,
    },
    {
      name: 'Interpreter optimization',
      level: ResumeSkillLevel.INTERMEDIATE,
    },
    {
      name: 'Domain-specific tooling',
      level: ResumeSkillLevel.INTERMEDIATE,
    },
  ],

  [ResumeSkillset.LANGUAGES_PLATFORMS]: [
    {
      name:  'TypeScript (Node.js & web)',
      level: ResumeSkillLevel.EXPERT,
    },
    {
      name:  'Clojure & ClojureScript',
      level: ResumeSkillLevel.EXPERT,
    },
    {
      name: 'XPath',
      level: ResumeSkillLevel.EXPERT,
    },
    {
      name: 'ODK XForms',
      level: ResumeSkillLevel.EXPERT,
    },
    {
      name:  'HTML & CSS',
      level: ResumeSkillLevel.EXPERT,
    },
    {
      name:  'SQL (PostgreSQL)',
      level: ResumeSkillLevel.ADVANCED,
    },
    {
      name:  'Python',
      level: ResumeSkillLevel.INTERMEDIATE,
    },
    {
      name:  'Swift',
      level: ResumeSkillLevel.BASIC,
    },
    {
      name:  'Java',
      level: ResumeSkillLevel.BASIC,
    },
  ],
};

const skills = {
  list:   Object.values(resumeSkills).flatMap(identity),
  merged: resumeSkills,
  sets:   Object.entries(resumeSkills).map(([ name, list ]) => ({
    name,

    skills: list.map(({ name }) => name)
  })),
};

export const resume = validateResume({
  name: 'Trevor Schmidt',

  meta: {
    format:  FRESH_SCHEMA_FORMAT,
    version: '0.0.1',
  },

  contact: {
    email:   'gnosis@gmail.com',
    website: 'https://eyelidlessness.github.io/',
  },

  disposition: {
    authorization: 'citizen',
    commitment: [
      'full-time',
      'permanent',
    ],
    remote: true,
    relocation: {
      willing: 'Unlikely',
    },
    travel: 5,
  },

  education: {
    history: [
      {
        end:         '2000',
        institution: 'Potomac Falls High School',
        location:    'Sterling, VA',
        start:       '1996',
        studyType:   'High school',
      },
    ],

    level: 'High School',
  },

  employment: {
    history,
  },

  info: {
    class: 'Software Engineer',
    brief: dedent(`
      Senior full-stack software engineer with 15+ years experience
      building and maintaining high-quality services and distributed
      systems; powerful tooling and libraries that accelerate
      development; and high-performance, highly usable and attractive
      websites & web applications.
    `).trim().replace(/\n\s+/g, ' '),
    label: 'Senior Full-Stack Software Engineer',
  },

  location: {
    city:    'Seattle',
    region:  'WA',
    country: 'US',
  },

  projects,
  skills,

  social: [
    {
      network: 'GitHub',
      url:     'https://github.com/eyelidlessness',
      user:    'eyelidlessness',
    },
  ],
});

export type ResumeData = typeof resume;

export {
  ProjectCategory as ResumeProjectCategory,
  ProjectRole     as ResumeProjectRole,
} from './projects';
