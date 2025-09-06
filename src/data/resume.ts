import { identity } from '../lib/helpers/index.js';
import type { FRESHResume, FRESHResumeEmploymentHistoryItem } from '../schemas/FRESH.js';
import { FRESH_SCHEMA_FORMAT } from '../schemas/FRESH.js';
import type {
	ProjectTimestamp,
	ProjectTimestamp as ResumeTimestamp,
} from './projects.js';
import { projects } from './projects.js';

type ValidResume<T extends Immutable<FRESHResume>> = Merge<T>;

const validateResume = <T extends Immutable<FRESHResume>>(value: ValidResume<T>): T =>
	value;

export type FlatEmploymentHistoryItemHighlights = readonly [string, ...string[]];

export type NestedEmploymentHistoryItemHighlight = readonly [
	subEmployer: string,
	subRange: string,
	...actualHighlights: [string, ...string[]],
];

export type NestedEmploymentHistoryItemHighlights = readonly [
	NestedEmploymentHistoryItemHighlight,
	...NestedEmploymentHistoryItemHighlight[],
];

export type EmploymentHistoryItemHighlights =
	| FlatEmploymentHistoryItemHighlights
	| NestedEmploymentHistoryItemHighlights;

export const isFlatEmploymentHistoryHighlights = (
	highlights: EmploymentHistoryItemHighlights
): highlights is FlatEmploymentHistoryItemHighlights => {
	return typeof highlights[0] === 'string';
};

export interface EmploymentHistoryItem extends FRESHResumeEmploymentHistoryItem {
	readonly employer: string;
	readonly end: ProjectTimestamp;
	readonly highlights: EmploymentHistoryItemHighlights;
	readonly position: string;
	readonly start: ProjectTimestamp;
	readonly summary?: string;
	readonly marginalia?: string;
}

export type EmploymentHistory = readonly EmploymentHistoryItem[];

type ValidEmploymentHistory<T extends Immutable<EmploymentHistory>> = Merge<T>;

const validateEmploymentHistory = <T extends Immutable<EmploymentHistory>>(
	value: ValidEmploymentHistory<T>
): T => value;

const employmentHistory = validateEmploymentHistory([
	{
		employer: 'ODK',
		// TODO: this **WAS** the title I applied for right? I know they only
		// specified "software engineer" in later listings.
		position: 'Senior Software Engineer',
		start: '2021-03',
		end: '2025-04',

		summary: `
      Created & led development of ODK Web Forms, a web-based complement to their flagship Android app.
    `,
		marginalia: "2021-2023: Maintainer of ODK Web Forms' legacy predecessor, Enketo.",

		highlights: [
			`
        Conceived and prototyped foundations for ODK Web Forms—first as a skunkworks project on personal time, ultimately forming the basis for formally evaluating the project's viability.
      `,
			`
        Led design & architecture to ensure core product/business goals: initial alignment with the flagship Collect app for Andriod; sustainable productivity and maintainability for user-facing functionality core to the business; anticipation of long-term unification on a single tool/platform.
      `,
			`
        Primary development of ODK XForms and XPath engines. Responsible for design & implementation of parsing, data model, runtime computational architecture, and client-agnostic rendering APIs.
      `,
			`
        Prototyped initial UI/UX; collaborated with dedicated UI developers as team grew; coordinated downstream integration with team developing ODK Central software for form and submission management.
      `,
		],
	},
	{
		employer: 'Reup → Mister Kraken → Treez',
		position: 'Senior Software Engineer',
		start: '2015-11',
		end: '2020-09',

		summary: `
      Full-stack web service & application development serving a diverse range of
      responsibilities related to the legal cannabis industry.
    `,
		marginalia:
			'Reup partnered with Mister Kraken in 2017; both companies were acquired by Treez in 2018.',

		highlights: [
			[
				'Treez',
				'2018-2020',
				"Led integration between Treez B2B inventory management services, and Mister Kraken's extant integrations with state-mandated traceability services; expanded on prior success maturing said integration to all major regulatory & vendor environments.",
				'Built robust & general web service tooling as basis for Treez/Mister Kraken integration. By time of my departure, this tooling had become a foundation for all new and anticipated service development.',
				'Intervened on personal initiative in the wake of widespread vendor outages and data corruption, instituting reliable, auditable, and reproducible processes to recover/reconcile customer regulatory reporting and inventory data.',
			],
			[
				'Mister Kraken',
				'2017-2018',
				"Led efforts to mature and adapt early-stage integrations with WA state-mandated traceability services, ensuring stable continuation of service for customers through abrupt/rapid changes to the state's regulatory environment and service vendor.",
				'Promoted a team culture shift to embrace automation & other safeguard processes, significantly improving velocity and product quality alike.',
				"Integrated Reup's B2B marketplace software, filling the remaining gaps in Mister Kraken's end-to-end inventory management offering.",
			],
			[
				'Reup',
				'2015-2018',
				"Led technical design & development of Reup's core web application, a B2B cannabis supply chain marketplace.",
				'Shared leadership & development of associated web services.',
				'Joined founders & design team in user research to ensure direct engineering involvement in product-market fit.',
			],
		],
	},
	// {
	//   employer: 'Treez',
	//   position: 'Senior Software Engineer',
	//   start:    '2018-12',
	//   end:      '2020-09',

	//   summary: `
	//     Treez provides a full seed-to-sale catalogue of tools for
	//     inventory & process management, regulatory reporting, B2B
	//     sales, and point of sale for the legal cannabis market.
	//   `,

	//   highlights: [
	//     `
	//       Created and maintained a set of libraries designed for rapid
	//       development of REST API services, providing simple,
	//       declarative API boundaries with runtime & static type safety,
	//       automatically generated documentation, and a clear separation
	//       of concerns between those boundaries and a service's business
	//       logic. These libraries had been used in production for one
	//       successful service, adopted by another team for a greenfield
	//       service, and ports of all other Treez API services planned,
	//       with no significant maintenance requests.
	//     `,

	//     `
	//       Expanded the API translation layer built at Mister Kraken to
	//       support the regulatory reporting APIs used in markets served by
	//       Treez in CA, MI, and beyond. This also allowed the original
	//       Mister Kraken product to expand integration into those markets,
	//       and Treez to expand its operations from point of sale to a full
	//       seed-to-sale suite.
	//     `,

	//     `
	//       Led and maintained a robust fault tolerance service layer
	//       between Treez end-user products and regulator reporting services.
	//       This ensured that frequent and widespread errors in the
	//       regulatory agencies' APIs did not result in a loss of compliance
	//       for Treez customers.
	//     `,

	//     `
	//       Promoted a team culture shift to embrace automated data
	//       correction with a historical record, and built a standard set
	//       of tools for data correction operations. These tools were used
	//       successfully for two major incidents, ensuring compliance was
	//       maintained with an auditable proof of operations log.
	//     `,
	//   ],
	// },

	// {
	//   employer: 'Mister Kraken',
	//   position: 'Senior Software Engineer',
	//   start:    '2017-04',
	//   end:      '2018-12',

	//   summary: `
	//     Mister Kraken provided a rich suite of inventory and process
	//     management tools for the legal cannabis market. The Reup and
	//     Mister Kraken teams joined forces and products in 2017.

	//     **Mister Kraken was acquired by Treez in late 2018.**
	//   `,

	//   highlights: [
	//     `
	//       Led design and development of an API translation layer which
	//       ensured a zero downtime transition for regulatory compliance
	//       when the WSLCB abruptly selected a new vendor's
	//       incompatible reporting APIs. This ensured minimal changes in
	//       the original Mister Kraken codebase while also preparing the
	//       product for expansion into other markets where other vendor
	//       APIs were common.
	//     `,

	//     `
	//       Promoted a team culture shift in development and collaboration
	//       to embrace automated testing, type safety, tool-based quality
	//       assurance, CI & automated review tools, thorough manual review
	//       by team members, and collaborative design & planning processes.
	//       This significantly improved the team's ability to deliver and
	//       maintain quality and value at a faster pace.
	//     `,

	//     `
	//       Adapted Reup's frontend web app to integrate with Mister
	//       Kraken's existing B2B sales platform. From time of release,
	//       through the Treez acquisition, to my departure, the app
	//       remained in active use with no significant change requests.
	//     `,
	//   ],
	// },

	// {
	//   employer: 'Reup',
	//   position: 'Senior Software Engineer',
	//   start:    '2015-11',
	//   end:      '2018-12',

	//   summary: `
	//     Reup was a startup in the legal recreational cannabis market,
	//     providing a B2B marketplace for retailers and manufacturers
	//     to discover and order cannabis products and supplies.

	//     **Reup was acquired by Treez in late 2018.**
	//   `,

	//   highlights: [
	//     `
	//       Shaped and refined product direction as the second engineer
	//       and fourth employee, sharing leadership on market & user
	//       research to inform core user stories and product decisions.
	//     `,

	//     `
	//       Led frontend architecture and spearheaded development of
	//       Reup's web app.
	//     `,

	//     `
	//       Shared leadership in defining core abstractions in the
	//       product's backend API layer to improve development safety
	//       and velocity.
	//     `,

	//     `
	//       Took ownership of refining and adapting UI & UX design as
	//       product requirements changed and use case complexities grew.
	//     `,
	//   ],
	// },

	{
		employer: 'ClipCard',
		position: 'Senior Software Engineer',
		start: '2013-04',
		end: '2015-08',

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

type ResumeHistory = typeof employmentHistory &
	ReadonlyArray<{
		readonly end: ResumeTimestamp;
		readonly start: ResumeTimestamp;
	}>;

const history = employmentHistory as ResumeHistory;

export const ResumeSkillLevel = {
	BASIC: 'Basic',
	INTERMEDIATE: 'Intermediate',
	ADVANCED: 'Advanced',
	EXPERT: 'Expert',
} as const;

type ResumeSkillLevels = typeof ResumeSkillLevel;

export type ResumeSkillLevel = ResumeSkillLevels[keyof ResumeSkillLevels];

export const ResumeSkillset = {
	EXPERTISE: 'Expertise',
	LANGUAGES_PLATFORMS: 'Languages',
	SERVICES_DISTRIBUTED_SYSTEMS: 'Services',
	WEB_UI_UX: 'Web UI & UX',
	DOMAIN_SPECIFIC_LANGUAGES: 'DSL\u200bs',
	NICHE_ESOTERIC: 'Niche/Esoteric',
} as const;

type ResumeSkillsets = typeof ResumeSkillset;

export type ResumeSkillset = ResumeSkillsets[keyof ResumeSkillsets];

const resumeSkills = {
	[ResumeSkillset.EXPERTISE]: [
		{
			name: 'Domain-driven design & architecture',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'Technical vision, direction & execution',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'Web apps & services',
			level: ResumeSkillLevel.ADVANCED,
		},
		{
			name: 'Performance',
			level: ResumeSkillLevel.ADVANCED,
		},
	],

	[ResumeSkillset.WEB_UI_UX]: [
		{
			name: 'React (+ Preact & similar)',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'Reactivity (framework-agnostic)',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: '“Vanilla” JS',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'Vue',
			level: ResumeSkillLevel.INTERMEDIATE,
		},
	],

	[ResumeSkillset.LANGUAGES_PLATFORMS]: [
		{
			name: 'TypeScript/JavaScript',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'CSS',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'HTML',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'SQL',
			level: ResumeSkillLevel.ADVANCED,
		},
		{
			name: 'Python',
			level: ResumeSkillLevel.INTERMEDIATE,
		},
		{
			name: 'Swift',
			level: ResumeSkillLevel.BASIC,
		},
		{
			name: 'Java',
			level: ResumeSkillLevel.BASIC,
		},
	],

	[ResumeSkillset.NICHE_ESOTERIC]: [
		{
			name: 'ODK XForms & XPath',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'Clojure',
			level: ResumeSkillLevel.ADVANCED,
		},
		{
			name: 'SolidJS',
			level: ResumeSkillLevel.ADVANCED,
		},
		{
			name: 'DSL\u200bs (parsers, semantics & runtime)',
			level: ResumeSkillLevel.ADVANCED,
		},
		// {
		//   name: 'XSLT',
		//   level: ResumeSkillLevel.INTERMEDIATE,
		// },
		// {
		//   name: 'JSX (custom)',
		//   level: ResumeSkillLevel.INTERMEDIATE,
		// },
	],
};

const skills = {
	list: Object.values(resumeSkills).flatMap(identity),
	merged: resumeSkills,
	sets: Object.entries(resumeSkills).map(([name, list]) => ({
		name,

		skills: list.map((skill) => skill.name),
	})),
};

export const resume = validateResume({
	name: 'Trevor Schmidt',

	meta: {
		format: FRESH_SCHEMA_FORMAT,
		version: '0.0.1',
	},

	contact: {
		email: 'gnosis@gmail.com',
		website: undefined as string | undefined,
		// website: 'https://eyelidlessness.github.io/',
	},

	disposition: {
		authorization: 'citizen',
		commitment: ['full-time', 'permanent'],
		remote: true,
		relocation: {
			willing: 'Unlikely',
		},
		travel: 5,
	},

	education: {
		history: [
			{
				end: '2000',
				institution: 'Potomac Falls High School',
				location: 'Sterling, VA',
				start: '1996',
				studyType: 'High school',
			},
		],

		level: 'High School',
	},

	employment: {
		history,
	},

	info: {
		class: 'Software Engineer',
		brief: `
Senior software engineer with a proven record of technical leadership and achievement, across a wide range of problems and disciplines:

- driving projects from conception to successful adoption and sustainable growth
- acquiring and applying deep domain/subject matter expertise
- fostering an engineering culture of velocity, quality, and continuous improvement of both
- reducing and overcoming risk, to grow and deliver on new project/business opportunities
    `.trim(),
		label: 'Senior Full-Stack Software Engineer',
	},

	location: {
		city: 'Seattle',
		region: 'WA',
		country: 'US',
	},

	projects,
	skills,

	social: [
		{
			network: 'GitHub',
			url: 'https://github.com/eyelidlessness',
			user: 'eyelidlessness',
		},
	],
});

export type ResumeData = typeof resume;

export {
	ProjectCategory as ResumeProjectCategory,
	ProjectRole as ResumeProjectRole,
} from './projects.js';
