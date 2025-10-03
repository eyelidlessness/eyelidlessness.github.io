import type {
	ComponentChildren,
	ComponentProps,
	ElementType,
	FunctionComponent,
} from 'preact';
import type { ProjectTimestamp } from '../../data/projects.js';
import type {
	EmploymentHistoryItemHighlights,
	ResumeData,
} from '../../data/resume.js';
import {
	isFlatEmploymentHistoryHighlights,
	ResumeSkillLevel,
} from '../../data/resume.js';
import { mdx, mdxInline } from '../../lib/content/index.js';
import { clamp, styled, theme } from '../../lib/styles/index.js';
import type { BlogArtProps } from '../Blog/BlogArt.js';
import { FullBleedContainer } from '../FullBleed/FullBleedContainer.js';
import { GitHubLogo } from '../GitHubLogo.js';
import { TimeRange } from '../TimeRange.js';
import { Timestamp, TimestampMode } from '../Timestamp.js';
import { ResumeProjects } from './ResumeProjects.js';
import { ResumeSection } from './ResumeSection.js';

const Flex = styled('div', {
	alignItems: 'start',
	display: 'flex',
	margin: '-0.5rem',

	nested: {
		'& > *': {
			margin: '0.5rem',
		},
	},
});

const BaseFlex = styled(Flex, {
	flexWrap: 'wrap',

	nested: {
		'& > *': {
			minWidth: 'max(calc(50% - 2rem), 30ch)',
		},
	},
});

const ResumeHeader = styled(BaseFlex, {
	alignItems: 'baseline',
	justifyContent: 'space-between',
	paddingTop: clamp('0.5em', '3vw', '2em'),
	paddingBottom: clamp('0.5em', '2vw', '1em'),

	nested: {
		'&, & > *': {
			margin: 0,
		},

		'& > *': {
			minWidth: 'auto',
		},

		[theme.print]: {
			paddingTop: 0,
		},
	},
});

const ResumeHeaderSection = styled(ResumeSection, {
	padding: 0,
});

const ResumeHeaderLinksContainer = styled(Flex, {
	flexWrap: 'wrap',
	margin: '0.1111rem 0 0',
});

const BaseResumeHeaderLink = styled('a', {
	...theme.resume.contactList.link,

	display: 'inline-flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: '0.5ch',
	fontSize: '0.88889em',
	fontWeight: 400,
	minWidth: 'auto',
	color: 'var(--color-prose)',
	textDecoration: 'none',

	nested: {
		'&:hover, &:focus': {
			color: 'var(--color-prose)',
			fontWeight: 400,
			textDecoration: 'underline',
			textDecorationColor: 'var(--color-prose-decoration, currentColor)',
		},
	},
});

const ResumeHeaderLinkInner = styled('span', {
	nested: {
		[theme.print]: {
			nested: {
				'& > *': {
					display: 'none',
				},

				'&:after': {
					content: 'attr(data-print-label)',
				},
			},
		},
	},
});

type ResumeHeaderLinkProps = ComponentProps<typeof BaseResumeHeaderLink> & {
	readonly printLabel: string;
	readonly screenLabel?: string;
	readonly Icon?: FunctionComponent;
};

const ResumeHeaderLinkScreenLabel = styled('span', {
	nested: {
		'@media screen and (min-width: 0)': {
			display: 'none',
		},
	},
});

const ResumeHeaderLink = ({
	children,
	screenLabel,
	printLabel,
	Icon,
	...props
}: ResumeHeaderLinkProps) => (
	<BaseResumeHeaderLink {...props}>
		{Icon && <Icon />}
		<ResumeHeaderLinkInner data-print-label={printLabel}>
			<ResumeHeaderLinkScreenLabel>
				{screenLabel ?? children}
			</ResumeHeaderLinkScreenLabel>
		</ResumeHeaderLinkInner>
	</BaseResumeHeaderLink>
);

const ResumeHeaderLinkIcon = styled('svg', {
	'--line-height': '1.05lh',

	width: 'var(--line-height)',
	height: 'var(--line-height)',
	lineHeight: 'var(--line-height)',
	color: 'var(--color-prose)',

	nested: {
		[theme.print]: {
			display: 'none',
		},
	},
});

const ResumeHeaderLinkPath = styled('path', {
	fill: 'var(--color-prose)',
});

const ResumeEmailIcon = () => {
	return (
		<ResumeHeaderLinkIcon
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<ResumeHeaderLinkPath d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z" />
		</ResumeHeaderLinkIcon>
	);
};

interface BaseResumeGitHubLogoProps {
	readonly className?: string;
}

const BaseResumeGitHubLogo = (props: BaseResumeGitHubLogoProps) => {
	return <GitHubLogo {...props} omitTitle={true} />;
};

const ResumeGitHubLogo = () => {
	return <ResumeHeaderLinkIcon as={BaseResumeGitHubLogo} />;
};

const socialLogos: Readonly<Record<string, FunctionComponent>> = {
	GitHub: ResumeGitHubLogo,
};

const arrowListStyles = {
	display: 'grid',
	fontSize: '0.88889em',
	margin: 0,
	paddingInlineStart: 0,
};

const arrowListItemStyles = {
	display: 'grid',
	gridTemplateColumns: '1.25rem 1fr',
	alignItems: 'baseline',
	lineHeight: 1.325,
	listStyle: 'none',
	margin: 0,
	padding: 0,

	nested: {
		'&:before': {
			content: '"›"',
			fontWeight: 'bolder',
			lineHeight: 'inherit',
			textAlign: 'center',
		},
	},
} as const;

const ResumeBrief = styled(FullBleedContainer, {
	...theme.resume.brief,

	rowGap: '0.25em',
	margin: 0,
	padding: '0.5em 0',

	nested: {
		...theme.resume.brief.nested,

		'& p, & ul, & li': {
			margin: 0,
		},

		'& p, & li': {
			padding: 0,
		},

		'& ul': {
			...arrowListStyles,
			gap: '0.125em 0',
			padding: '0.25em 0',
		},

		'& li': arrowListItemStyles,

		'& :first-child': {
			marginTop: 0,
		},

		'& :last-child': {
			marginBottom: 0,
		},

		'& > *': {
			fontSize: '0.88889em',
			minWidth: 'auto',
		},

		[theme.print]: {
			...theme.resume.brief.nested[theme.print],
			padding: 0,
		},
	},
});

const ResumeSkillsetHeading = styled('h2', {
	fontFamily: 'inherit',
	fontSize: '1em',
	fontWeight: 600,
	marginBottom: 0,
	paddingLeft: 0,
	textIndent: 0,

	// nested: {
	// 	'@media screen and (min-width: 45rem), print and (min-width: 0)': { justifySelf: 'end' },
	// },
});

const ResumeSkillsetsContainer = styled('div', {
	alignItems: 'baseline',
	display: 'grid',
	gap: '0.5em 0',
	gridTemplateColumns: 'auto',
	gridTemplateRows: 'auto',
	fontSize: '0.88889em',
	padding: '0.25em 0',

	nested: {
		'@media screen and (min-width: 48rem), print and (min-width: 0)': {
			gridTemplateColumns: 'minmax(5rem, max-content) 1fr',
			paddingInline: '1.2rem',
		},

		'& ul, & li': {
			lineHeight: 1.5,
		},
	},
});

const ResumeSkillsList = styled('ul', {
	display: 'block',
	margin: 0,
	padding: '0 0 0 1rem',
});

const ResumeSkillsListItem = styled('li', {
	display: 'inline-block',
	listStyle: 'none',
	margin: '0 1.5rem 0 0',
	padding: 0,

	nested: {
		'&:last-child': {
			marginRight: 0,
		},
	},
});

const BaseResumeSkillLevelMarker = styled('svg', {
	display: 'inline-block',
	margin: '0 0.325rem 0 0',
	verticalAlign: 'middle',

	nested: {
		[theme.print]: {
			height: '0.325rem',
			width: '0.325rem',
		},
	},
});

const ResumeSkillLevelMarkerCircle = styled('circle', {
	fill: 'currentcolor',
});

interface ResumeSkillLevelMarkerProps {
	readonly className?: string;
	readonly level: ResumeSkillLevel;
}

const ResumeSkillLevelMarker = (props: ResumeSkillLevelMarkerProps) => {
	return (
		<BaseResumeSkillLevelMarker
			xmlns="http://www.w3.org/2000/svg"
			className={props.className}
			width="8"
			height="8"
			viewBox="0 0 8 8"
		>
			<ResumeSkillLevelMarkerCircle cx="4" cy="4" r="4" />
			<title>Skill level: {props.level}</title>
		</BaseResumeSkillLevelMarker>
	);
};

type ResumeSkillLevelMarker = ElementType<JSX.IntrinsicElements['span']>;

const ResumeSkillLevelMarkers = {
	[ResumeSkillLevel.BASIC]: styled(ResumeSkillLevelMarker, {
		...theme.resume.skillLevel[ResumeSkillLevel.BASIC],
	}),
	[ResumeSkillLevel.INTERMEDIATE]: styled(ResumeSkillLevelMarker, {
		...theme.resume.skillLevel[ResumeSkillLevel.INTERMEDIATE],
	}),
	[ResumeSkillLevel.ADVANCED]: styled(ResumeSkillLevelMarker, {
		...theme.resume.skillLevel[ResumeSkillLevel.ADVANCED],
	}),
	[ResumeSkillLevel.EXPERT]: styled(ResumeSkillLevelMarker, {
		...theme.resume.skillLevel[ResumeSkillLevel.EXPERT],
	}),
} as const;

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
ResumeSkillLevelMarkers;

const BaseResumeSkillsetListing = styled('div', {
	display: 'contents',
});

interface ResumeSkillsListProps {
	readonly name: string;
	readonly skills: ResumeData['skills']['list'];
}

const ResumeSkillsetListing = ({
	name: skillsetName,
	skills,
}: ResumeSkillsListProps) => (
	<BaseResumeSkillsetListing itemscope itemtype="http://schema.org/ItemList">
		<ResumeSkillsetHeading itemprop="name">
			{mdxInline(skillsetName)}
		</ResumeSkillsetHeading>

		<ResumeSkillsList>
			{skills.map(({ /* level, */ name: skillName }) => {
				return (
					<ResumeSkillsListItem key={skillName} itemprop="itemListElement">
						{mdxInline`${skillName}`}
					</ResumeSkillsListItem>
				);
			})}
		</ResumeSkillsList>
	</BaseResumeSkillsetListing>
);

const ResumeTopLevelListingItem = styled(FullBleedContainer, {
	gap: '0.5em 0',
});

// TODO: the FRESH spec says this should be a summary of my achievements,
// but so far I've summarized the business.
const ResumeEmployerSummary = styled('div', {
	fontSize: '0.94444em',
});

const ResumeEmployerMarginalia = styled('p', {
	alignItems: 'baseline',
	display: 'grid',
	gridTemplateColumns: '1.2ch 1fr',
	fontSize: '0.88889rem',
	opacity: 0.8,

	nested: {
		'&::before': {
			content: '"*"',
			display: 'block',
			width: '2ch',
		},
	},
});

const ResumeEmploymentHeading = styled('h2', {
	marginBottom: 0,

	nested: {
		[theme.print]: {
			textAlign: 'center',
		},
	},
});

const ResumeEmploymentSubPeriod = styled(FullBleedContainer, {
	gap: '0.5em 0',
	nested: {
		[theme.print]: {
			breakInside: 'avoid',
		},
	},
});

const ResumeEmploymentHighlightsList = styled('ul', {
	...arrowListStyles,
	gap: '0.5em 0',
});

const ResumeEmploymentHighlightsListItem = styled('li', arrowListItemStyles);

const BaseResumeTopLevelListingItem = styled(ResumeTopLevelListingItem, {
	position: 'relative',
	padding: '1em 0',

	nested: {
		'&:last-child:after': {
			display: 'none',
		},

		'&:nth-of-type(odd)': {
			...theme.resume.employment.itemOdd,
		},

		'&:nth-of-type(even)': {
			...theme.resume.employment.itemEven,
		},

		'& strong': {
			fontWeight: 500,

			nested: {
				[theme.darkMode]: {
					fontWeight: 400,
				},
			},
		},

		[theme.print]: {
			// breakInside: 'avoid',
			padding: '0.25em 0',
		},
	},
});

const ResumeEmploymentListItemHeader = styled('div', {
	alignItems: 'baseline',
	display: 'grid',
	columnGap: '0.5rem',
	rowGap: '0.25rem',
	// gridTemplate: `
	// 	"employer employer employer"
	// 	"position time-range time-range"
	// `,
	// gridAutoColumns: 'auto auto 1fr',
	// justifyContent: 'start',

	// nested: {
	// 	[theme.print]: {
	gridTemplate: `
				"employer"
				"position"
				"time-range"
			`,
	gridAutoColumns: 'auto',
	// 	},
	// },
	// gridTemplate: `
	//   "employer time-range"
	//   "position position"
	// `,
	// justifyContent: 'space-between',

	// nested: {
	// 	[theme.print]: {
	// 		// gridTemplate: `
	// 		//   "employer position time-range"
	// 		// `,
	// 		gridTemplate: `
	// 			"employer employer"
	// 			"position time-range"
	// 		`,
	// 		gridAutoColumns: '1fr auto auto',
	// 		justifyContent: 'start',
	// 	},
	// },
});

const ResumeEmploymentListItemEmployerHeading = styled('h3', {
	gridArea: 'employer',
	marginBottom: 0,
	whiteSpace: 'nowrap',
});

const ResumeEmploymentListItemTimeRange = styled(TimeRange, {
	fontSize: '0.88889rem',
	fontWeight: theme.deemphasize.fontWeight,
	gridArea: 'time-range',
	lineHeight: 1,

	nested: {
		'&.has-marginalia::after': {
			content: '"*"',
		},
	},
});

const ResumeEmploymentPosition = styled('div', {
	fontSize: '0.88889rem',
	fontWeight: theme.deemphasize.fontWeight,
	gridArea: 'position',
});

interface ResumeEmploymentHighlightsProps {
	readonly subEmployer?: string;
	readonly subRange?: string;
	readonly highlights: readonly [string, ...string[]];
}

const SubEmployerHeading = styled('p', {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'baseline',
	gap: '1ch',
});

const SubEmployer = styled('span', {
	fontWeight: 500,
});

const SubRange = styled('span', {
	fontSize: '0.88889rem',
	opacity: 0.8,
});

const ResumeEmploymentHighlights = (props: ResumeEmploymentHighlightsProps) => {
	const { subEmployer, subRange, highlights } = props;

	return (
		<>
			{(subEmployer ?? subRange) && (
				<SubEmployerHeading>
					{subEmployer && <SubEmployer>{subEmployer}</SubEmployer>}
					{subRange && <SubRange>{subRange}</SubRange>}
				</SubEmployerHeading>
			)}

			<ResumeEmploymentHighlightsList itemtype="http://schema.org/ItemList">
				{highlights.map((highlight) => (
					<ResumeEmploymentHighlightsListItem
						key={highlight}
						itemprop="itemListElement"
					>
						{mdx(highlight)}
					</ResumeEmploymentHighlightsListItem>
				))}
			</ResumeEmploymentHighlightsList>
		</>
	);
};

interface ResumeEmploymentListItemProps {
	readonly employer: string;
	readonly position: string;
	readonly start: ProjectTimestamp;
	readonly end: ProjectTimestamp;
	readonly summary?: string;
	readonly marginalia?: string;
	readonly highlights: EmploymentHistoryItemHighlights;
}

const ResumeEmploymentListItem = ({
	employer,
	end,
	highlights,
	position,
	start,
	summary,
	marginalia,
	...props
}: ResumeEmploymentListItemProps) => (
	<BaseResumeTopLevelListingItem
		as="section"
		itemscope
		itemtype="https://schema.org/EmployeeRole"
		{...props}
	>
		<ResumeEmploymentListItemHeader>
			<ResumeEmploymentListItemEmployerHeading itemprop="name">
				{employer}
			</ResumeEmploymentListItemEmployerHeading>
			<ResumeEmploymentPosition itemprop="roleName">
				{position}
			</ResumeEmploymentPosition>
			<ResumeEmploymentListItemTimeRange
				className={marginalia ? 'has-marginalia' : ''}
				range={[start, end]}
			/>
		</ResumeEmploymentListItemHeader>

		{summary == null ? null : (
			<ResumeEmployerSummary itemprop="description">
				{mdx(summary)}
			</ResumeEmployerSummary>
		)}

		{isFlatEmploymentHistoryHighlights(highlights) ? (
			<ResumeEmploymentHighlights highlights={highlights} />
		) : (
			highlights.map((subHighlights) => {
				const [subEmployer, subRange, ...actualHighlights] = subHighlights;

				return (
					<ResumeEmploymentSubPeriod>
						<ResumeEmploymentHighlights
							subEmployer={subEmployer}
							subRange={subRange}
							highlights={actualHighlights}
						/>
					</ResumeEmploymentSubPeriod>
				);
			})
		)}

		{marginalia && (
			<ResumeEmployerMarginalia>{marginalia}</ResumeEmployerMarginalia>
		)}
	</BaseResumeTopLevelListingItem>
);

const BaseResumeEmployment = styled(ResumeSection, {
	...theme.resume.employment.container,

	padding: '1em 0',

	nested: {
		[theme.darkMode]: {
			...theme.resume.employment.container.nested[theme.darkMode],
		},

		[theme.print]: {
			...theme.resume.employment.container.nested[theme.print],

			gap: '0.675em 0',
			padding: '0.5em 0',
		},
	},
});

interface ResumeEmploymentProps {
	readonly id?: string;
	readonly employment: ResumeData['employment'] extends infer T
		? T
		: ResumeData['employment'];
}

const ResumeEmployment = ({ id, employment }: ResumeEmploymentProps) => (
	<BaseResumeEmployment id={id}>
		<ResumeEmploymentHeading>Recent Experience</ResumeEmploymentHeading>

		{employment.history.map((item) => (
			<ResumeEmploymentListItem {...item} />
		))}
	</BaseResumeEmployment>
);

const ResumeProjectsSection = styled(ResumeSection, {
	nested: {
		[theme.print]: {
			order: 10,
		},
	},
});

const ResumeReferencesSection = styled(ResumeSection, {
	paddingTop: '1em',

	nested: {
		[theme.print]: {
			paddingTop: 0,
		},
	},
});

const BaseResume = styled(FullBleedContainer, {
	gap: '0.5em 0',

	nested: {
		'& p': {
			lineHeight: 1.325,
			margin: 0,
		},
	},
});

const ReaderModeTimestamp = styled(Timestamp, {
	...theme.visiblyHidden,
});

const shortURL = (url: string) => url.replace(/^https?:\/\/|\/$/g, '');

interface ResumeProps {
	readonly className?: string;
	readonly id?: string;
	readonly meta: BlogArtProps;
	readonly resume: ResumeData;
	readonly updated: Date;
}

export const Resume = ({
	className,
	id,
	resume,
	updated,
}: ResumeProps): ComponentChildren => {
	const {
		contact: { email, website },
		employment,
		info,
		name,
		projects,
		skills,
		social,
	} = resume;

	return (
		<BaseResume
			className={className}
			id={id}
			itemscope
			itemtype="http://schema.org/Person"
		>
			<ResumeHeaderSection id="resume-header">
				<ResumeHeader>
					<h1 itemprop="name">{name}</h1>
					<ReaderModeTimestamp
						date={updated}
						itemprop="datePublished"
						mode={TimestampMode.META}
					/>

					<ResumeHeaderLinksContainer>
						<ResumeHeaderLink
							href={`mailto:${email}`}
							itemprop="email"
							screenLabel={email}
							printLabel={email}
							title={`Email: ${email}`}
							Icon={ResumeEmailIcon}
						>
							Email
						</ResumeHeaderLink>

						{website != null && (
							<ResumeHeaderLink
								href={website}
								itemprop="url"
								printLabel={shortURL(website)}
								rel="me"
							>
								Website
							</ResumeHeaderLink>
						)}

						{social.map(({ user, network, url }) => {
							return (
								<ResumeHeaderLink
									href={url}
									itemprop="url"
									screenLabel={(user as string | null | undefined) ?? network}
									printLabel={shortURL(url)}
									title={`${network}: ${user}`}
									Icon={socialLogos[network]}
									rel="me"
								>
									{network}
								</ResumeHeaderLink>
							);
						})}
					</ResumeHeaderLinksContainer>
				</ResumeHeader>

				<ResumeBrief id="resume-brief" itemprop="description">
					{mdx(info.brief)}
				</ResumeBrief>
			</ResumeHeaderSection>

			<ResumeSection id="resume-skillsets" aria-label="Skillsets">
				<ResumeSkillsetsContainer>
					{Object.entries(skills.merged).map(
						([skillsetName, skillsetSkills]) => (
							<ResumeSkillsetListing
								key={skillsetName}
								name={skillsetName}
								skills={skillsetSkills}
							/>
						)
					)}
				</ResumeSkillsetsContainer>
			</ResumeSection>

			<ResumeEmployment id="resume-employment" employment={employment} />

			<ResumeProjectsSection id="projects">
				<ResumeProjects projects={projects} />
			</ResumeProjectsSection>

			<ResumeReferencesSection id="references">
				<p>
					<b>References:</b> available upon request to{' '}
					<a href="mailto:gnosis@gmail.com">gnosis@gmail.com</a>.
				</p>
			</ResumeReferencesSection>
		</BaseResume>
	);
};
