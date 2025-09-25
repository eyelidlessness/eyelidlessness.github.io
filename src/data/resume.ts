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

export interface EmploymentHistoryItemAffiliation {
	readonly id: string;
	readonly description: string | null;
}

export interface EmploymentHistoryItem
	extends FRESHResumeEmploymentHistoryItem {
	readonly employer: string;
	readonly end: ProjectTimestamp;
	readonly highlights: EmploymentHistoryItemHighlights;
	readonly position: string;
	readonly start: ProjectTimestamp;
	readonly summary?: string;
	readonly affiliation?: EmploymentHistoryItemAffiliation;
}

export type EmploymentHistory = readonly EmploymentHistoryItem[];

type ValidEmploymentHistory<T extends Immutable<EmploymentHistory>> = Merge<T>;

const validateEmploymentHistory = <T extends Immutable<EmploymentHistory>>(
	value: ValidEmploymentHistory<T>
): T => value;

const TREEZ_MK_REUP_AFFILIATION_ID = 'treez.mk.reup';

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
			'(2021-2023) Maintainer of Enketo, legacy predecessor to ODK Web Forms.',
		],
	},
	{
		employer: 'Treez',
		position: 'Senior Software Engineer',
		start: '2018-12',
		end: '2020-09',
		affiliation: {
			id: TREEZ_MK_REUP_AFFILIATION_ID,
			description: null,
		},
		summary:
			'Led integration of core inventory management services across a full spectrum of regulatory reporting services.',

		highlights: [
			"Led integration between Treez B2B inventory management services, and Mister Kraken's extant integrations with state-mandated traceability services; expanded on prior success maturing said integration to all major regulatory and vendor environments.",
			'Built robust, general web service tooling as basis for Treez/Mister Kraken integration, which became a foundation for all new and anticipated service development.',
			'Intervened on personal initiative in the wake of widespread vendor outages and data corruption, to institute reliable, auditable, and reproducible processes to recover and reconcile customer regulatory reporting and inventory history.',
		],
	},
	{
		employer: 'Mister Kraken',
		position: 'Senior Software Engineer',
		start: '2017-04',
		end: '2018-12',
		affiliation: {
			id: TREEZ_MK_REUP_AFFILIATION_ID,
			description: 'Mister Kraken and Reup were acquired by Treez in 2018',
		},
		summary:
			'Led regulatory reporting integration amidst rapid growth and evolution of early legal cannabis markets.',
		highlights: [
			"Led efforts to mature and adapt early-stage integrations with Washington State-mandated traceability services, ensuring stable continuation of service for customers through abrupt/rapid changes to the state's regulatory environment and service vendor.",
			'Promoted a team culture shift to embrace automation and other safeguard processes, significantly improving both team velocity and product quality.',
			"Integrated Reup's B2B marketplace software, filling the remaining gaps in Mister Kraken's end-to-end inventory management offering.",
		],
	},

	{
		employer: 'Reup',
		position: 'Senior Software Engineer',
		start: '2015-11',
		end: '2017-04',
		affiliation: {
			id: TREEZ_MK_REUP_AFFILIATION_ID,
			description: 'Reup informally merged with Mister Kraken in 2017',
		},
		summary: "Led UI/UX and co-led backend API of Reup's B2B marketplace.",
		highlights: [
			"Led technical design and development of Reup's core web application, a B2B cannabis supply chain marketplace.",
			'Shared leadership and development of supporting web services.',
			'Joined founders and design team in user research, to ensure direct engineering involvement in product-market fit.',
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
				Organized a hackathon which produced 8 API integration
				prototypes, ultimately leading to company wide alignment
				on product direction as a search engine for private cloud data.
			`,

			`
				Led frontend architecture and development of ClipCard's
				web app, and provided mentorship for my successor in that role.
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
	WEB_UI_UX: 'UI & UX',
	DOMAIN_SPECIFIC_LANGUAGES: 'DSL\u200bs',
	NICHE_ESOTERIC: 'Niche/Esoteric',
} as const;

type ResumeSkillsets = typeof ResumeSkillset;

export type ResumeSkillset = ResumeSkillsets[keyof ResumeSkillsets];

const resumeSkills = {
	[ResumeSkillset.LANGUAGES_PLATFORMS]: [
		{
			name: 'TypeScript',
			level: ResumeSkillLevel.EXPERT,
		},
		{
			name: 'Python',
			level: ResumeSkillLevel.ADVANCED as ResumeSkillLevel,
		},
		{
			name: 'SQL',
			level: ResumeSkillLevel.ADVANCED,
		},
		{
			name: 'CSS',
			level: ResumeSkillLevel.ADVANCED,
		},
		{
			name: 'HTML',
			level: ResumeSkillLevel.ADVANCED,
		},
		{
			name: 'Java',
			level: ResumeSkillLevel.BASIC,
		},
		{
			name: 'Swift',
			level: ResumeSkillLevel.BASIC,
		},
	],

	[ResumeSkillset.SERVICES_DISTRIBUTED_SYSTEMS]: [
		{
			name: 'HTTP (REST, RPC, Distributed Systems)',
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
		class: 'Senior Software Engineer',
		brief: `
<span class="inline-role">Full Stack Senior Software Engineer</span> with a proven record of achievement and leadership, across a broad range of disciplines, roles, and technologies:

- driving projects from conception to successful adoption and sustainable growth
- acquiring and applying deep domain & subject matter expertise
- fostering an engineering culture of velocity & quality, and continuous improvement of both
- reducing and overcoming risk, to grow and deliver on new project & business opportunities
		`.trim(),
		label: 'Full Stack Senior Software Engineer',
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
