import { definePage } from 'microsite/page';
import { FullBleedContainer } from '../components/FullBleed/FullBleedContainer.js';
import { Head } from '../components/Head.js';
import { Main } from '../components/Main.js';
import { ResumeArt } from '../components/Resume/ResumeArt.js';
import type { PageMetadata } from '../lib/content/meta.js';
import { getPageMetadata, PageMetadataType } from '../lib/content/meta.js';
import { Topic } from '../lib/content/topics.js';
import { styled } from '../lib/styles/styles.js';

const ArtContainer = styled(FullBleedContainer, {
	paddingBlockEnd: '2em',
});

interface IndexPageProps extends PageMetadata {
	readonly description: string;
}

const IndexPage = (props: IndexPageProps) => (
	<>
		<Head meta={props} />
		<Main meta={props} hideMenu={true}>
			<ArtContainer id="resume-art-container">
				<ResumeArt {...props} renderType="post" />
			</ArtContainer>

			<p>Nothing here at the moment. Come back later… maybe!</p>
		</Main>
	</>
);

export default definePage(IndexPage, {
	getStaticProps({ path }) {
		const title = 'Eyelidlessness';
		const description = `Trevor Schmidt's personal website`;
		const meta = getPageMetadata(
			path,
			import.meta.url,
			title,
			PageMetadataType.MUTABLE
		);

		return Promise.resolve({
			props: {
				...meta,
				topics: [Topic.ART, Topic.TECHNOLOGY, Topic.LEMON],

				description,
			},
		});
	},
});
