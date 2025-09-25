import { identity } from '../lib/helpers/index.js';
import type {
	FRESHResume,
	FRESHResumeEmploymentHistoryItem,
} from '../schemas/FRESH.js';
import { FRESH_SCHEMA_FORMAT } from '../schemas/FRESH.js';
import type {
	ProjectTimestamp,
	ProjectTimestamp as ResumeTimestamp,
} from './projects.js';
import { projects } from './projects.js';

type ValidResume<T extends Immutable<FRESHResume>> = Merge<T>;

const validateResume = <T extends Immutable<FRESHResume>>(
	value: ValidResume<T>
): T => value;

export type FlatEmploymentHistoryItemHighlights = readonly [
	string,
	...string[],
];

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

export interface EmploymentHistoryItem
	extends FRESHResumeEmploymentHistoryItem {
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
			Created and led ODK Web Forms, a runtime for user-defined
			data collection tools & form-based applications.
		`,
		marginalia:
			"2021-2023: Maintainer of ODK Web Forms' legacy predecessor, Enketo.",

		highlights: [
			`
				Led ODK Web Forms development, from conception to user adoption in production.
			`,
			`
				Led design and architecture to ensure key business and product goals: alignment with the flagship Collect app for Andriod; sustainable productivity and maintainability for user-facing functionality core to the business; long-term anticipation of unification on Web Forms for that core functionality.
			`,
			`
				Primary development of ODK XForms and XPath engines. Responsible for design and implementation of parsing, data model, runtime computational architecture, and client-/framework-agnostic rendering APIs.
			`,
			`
				Prototyped initial UI/UX; collaborated with dedicated UI developers as team grew; coordinated downstream integration with team developing ODK Central software for managing form applications and data access.
			`,
		],
	},
	{
		employer: 'Reup → Mister Kraken → Treez',
		position: 'Senior Software Engineer',
		start: '2015-11',
		end: '2020-09',

		summary: `
			Full-stack web service and application development serving a diverse range of
			responsibilities related to the legal cannabis industry.
		`,
		marginalia:
			'Reup partnered with Mister Kraken in 2017; both companies were acquired by Treez in 2018.',

		highlights: [
			[
				'Treez',
				'2018-2020',
				"Led integration between Treez B2B inventory management services, and Mister Kraken's extant integrations with state-mandated traceability services; expanded on prior success maturing said integration to all major regulatory and vendor environments.",
				'Built robust, general web service tooling as basis for Treez/Mister Kraken integration, which became a foundation for all new and anticipated service development.',
				'Intervened on personal initiative in the wake of widespread vendor outages and data corruption, to institute reliable, auditable, and reproducible processes to recover and reconcile customer regulatory reporting and inventory history.',
			],
			[
				'Mister Kraken',
				'2017-2018',
				"Led efforts to mature and adapt early-stage integrations with WA state-mandated traceability services, ensuring stable continuation of service for customers through abrupt/rapid changes to the state's regulatory environment and service vendor.",
				'Promoted a team culture shift to embrace automation and other safeguard processes, significantly improving both team velocity and product quality.',
				"Integrated Reup's B2B marketplace software, filling the remaining gaps in Mister Kraken's end-to-end inventory management offering.",
			],
			[
				'Reup',
				'2015-2018',
				"Led technical design and development of Reup's core web application, a B2B cannabis supply chain marketplace.",
				'Shared leadership and development of associated web services.',
				'Joined founders and design team in user research, to ensure direct engineering involvement in product-market fit.',
			],
		],
	},
	{
		employer: 'ClipCard',
		position: 'Senior Software Engineer',
		start: '2013-04',
		end: '2015-08',

		summary: `
			Full stack engineer, leading frontend team and then service integrations.
		`,

		highlights: [
			`
				Led design and development of data processing tools used by all of
				ClipCard's cloud API integrations; providing common interfaces to
				standardize and accelerate development of service API authorization,
				backpressure, fault tolerance, and common data extraction patterns.
			`,

			`
				Led integrations with Dropbox, Evernote, GitHub and Trello; contributed
				to integrations with 8 additional cloud services.
			`,

			`
				Led frontend architecture and development of ClipCard's
				web app, and provided mentorship for my successor in that role.
			`,

			`
				Organized a hackathon which produced 8 API integration
				prototypes, ultimately leading to company wide alignment
				on product direction as a search engine for private cloud data.
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

	[ResumeSkillset.SERVICES_DISTRIBUTED_SYSTEMS]: [
		{
			name: 'HTTP (REST, RPC, Distributed systems)',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'Node.js (+ similar)',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'Django (+ REST Framework)',
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
			name: 'ODK XForms',
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
		{
			name: 'Effect',
			level: ResumeSkillLevel.INTERMEDIATE,
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
- fostering an engineering culture of velocity, quality, and continuous improvement
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
