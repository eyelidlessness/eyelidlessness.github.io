import { definePage } from 'microsite/page';
import { Head } from '../../components/Head.js';
import { Main } from '../../components/Main.js';
import { Projects } from '../../components/Projects/Projects.js';
import { projects } from '../../data/projects.js';
import type { PageMetadata } from '../../lib/content/index.js';
import {
	getPageMetadata,
	PageMetadataType,
	Topic,
} from '../../lib/content/index.js';

interface OpenSourcePageProps extends PageMetadata {}

const OpenSourcePage = (props: OpenSourcePageProps) => (
	<>
		<Head meta={props} />
		<Main meta={props}>
			<Projects meta={props} projects={projects} />
		</Main>
	</>
);

export default definePage(OpenSourcePage, {
	getStaticProps({ path }) {
		const description =
			"Open source projects I created, and contributions I've made to others.";
		const title = 'Open Source Projects & Contributions';
		const meta = getPageMetadata(
			path,
			import.meta.url,
			title,
			PageMetadataType.IMMUTABLE,
			[]
		);

		return Promise.resolve({
			props: {
				...meta,

				topics: [Topic.ART, Topic.TECHNOLOGY, Topic.LEMON],
				description,
				title,
			},
		});
	},
});
