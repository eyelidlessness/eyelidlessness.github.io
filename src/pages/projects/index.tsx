import { definePage } from 'microsite/page';
import { Head } from '../../components/Head.js';
import type { PageMetadata } from '../../lib/content/index.js';
import { getPageMetadata, PageMetadataType } from '../../lib/content/index.js';

interface ProjectPageProps extends PageMetadata {}

const ProjectPage = (props: ProjectPageProps) => <Head meta={props} />;

export default definePage(ProjectPage, {
	getStaticProps({ path }) {
		const description = 'My projects';
		const title = 'Projects';
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

				description,
				redirect: '/resume/#projects',
				title,
			},
		});
	},
});
