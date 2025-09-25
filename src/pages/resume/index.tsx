import { definePage } from 'microsite/page';
import { FullBleedContainer } from '../../components/FullBleed/FullBleedContainer.js';
import { Head } from '../../components/Head.js';
import { Main } from '../../components/Main.js';
import {
	Resume,
	ResumeArt,
	ResumeSection,
} from '../../components/Resume/index.js';
import { resume } from '../../data/resume.js';
import type { PageMetadata } from '../../lib/content/index.js';
import {
	getPageMetadata,
	PageMetadataType,
	Topic,
} from '../../lib/content/index.js';
import { styled } from '../../lib/styles/styles.js';
import { theme } from '../../lib/styles/theme.js';

const ResumePageBody = styled(FullBleedContainer, {
	rowGap: '1em',
});

const ResumePageResume = styled(Resume, {
	marginTop: 0,
	paddingTop: 0,
});

const ResumeArtContainer = styled(FullBleedContainer, {
	nested: {
		[theme.print]: {
			display: 'none',
			paddingInline: '0.125rem',
		},
	},
});

const ResumePDFSection = styled(ResumeSection, {
	textAlign: 'right',

	nested: {
		[theme.print]: {
			display: 'none',
		},
	},
});

interface ResumePageProps extends PageMetadata {
	readonly description: string;
}

const ResumePage = (props: ResumePageProps) => (
	<>
		<Head meta={props}>
			<link
				rel="preload"
				href="/fonts/pdf-print.woff"
				as="font"
				type="font/woff"
				media="print"
			/>
		</Head>

		<Main meta={props}>
			<ResumePageBody>
				<ResumePageResume
					id="resume"
					meta={props}
					resume={resume}
					updated={props.stat.updated}
				/>

				<ResumeArtContainer id="resume-art-container">
					<ResumeArt {...props} renderType="post" />
				</ResumeArtContainer>

				<ResumePDFSection id="resume-pdf">
					<a href="/Trevor_Schmidt_resume.pdf">View as PDF</a>
				</ResumePDFSection>
			</ResumePageBody>
		</Main>
	</>
);

export default definePage(ResumePage, {
	getStaticProps({ path }) {
		const description = `Trevor Schmidt's résumé`;
		const title = 'Trevor Schmidt: Full Stack Senior Software Engineer';
		const topics = [Topic.TECHNOLOGY, Topic.ART];
		const meta = getPageMetadata(
			path,
			import.meta.url,
			title,
			PageMetadataType.MUTABLE,
			topics
		);

		return Promise.resolve({
			props: {
				...meta,

				CustomArt: ResumeArt,
				description,
				pageId: 'resume',
				title,
				topics,
			},
		});
	},
});
