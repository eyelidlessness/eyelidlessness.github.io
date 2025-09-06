import { definePage } from 'microsite/page';
import { Head } from '../../components/Head.js';
import { Main } from '../../components/Main.js';
import { Resume, ResumeArt } from '../../components/Resume/index.js';
import { resume } from '../../data/resume.js';
import type { PageMetadata } from '../../lib/content/index.js';
import { getPageMetadata, PageMetadataType, Topic } from '../../lib/content/index.js';
import { styled } from '../../lib/styles/styles.js';

const ResumePageResume = styled(Resume, {
	marginTop: 0,
	paddingTop: 0,
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
			<ResumePageResume
				id="resume"
				meta={props}
				resume={resume}
				updated={props.stat.updated}
			/>
		</Main>
	</>
);

export default definePage(ResumePage, {
	getStaticProps({ path }) {
		const description = `Trevor Schmidt's résumé`;
		const title = 'Hire Me';
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
