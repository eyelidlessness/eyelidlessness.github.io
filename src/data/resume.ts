import dedent       from 'dedent';
import {
  FRESH_SCHEMA_FORMAT,
  FRESHResume,
} from '@/schemas/FRESH';
import { identity } from '@/lib/helpers';
import { projects } from './projects';

type ValidResume<T extends Immutable<FRESHResume>> = Merge<T>;

const validateResume = <T extends Immutable<FRESHResume>>(
  value: ValidResume<T>
): T => value;

export enum ResumeSkillLevel {
  BASIC        = 'Basic',
  INTERMEDIATE = 'Intermediate',
  ADVANCED     = 'Advanced',
  EXPERT       = 'Expert',
}

export enum ResumeSkillset {
  LANGUAGES_PLATFORMS          = 'Languages & Platforms',
  SERVICES_DISTRIBUTED_SYSTEMS = 'Services & Distributed Systems',
  USER_INTERFACE_EXPERIENCE    = 'User Interface & Experience',
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
      name:  'SVG',
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
    history: [
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
    ],
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
});

export {
  ProjectCategory as ResumeProjectCategory,
  ProjectRole     as ResumeProjectRole,
} from './projects';
