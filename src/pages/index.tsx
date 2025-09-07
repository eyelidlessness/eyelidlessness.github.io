import { definePage } from 'microsite/page';
import { Head } from '../components/Head.js';
import type { PageMetadata } from '../lib/content/meta.js';
import { getPageMetadata, PageMetadataType } from '../lib/content/meta.js';

interface IndexPageProps extends PageMetadata {
	readonly description: string;
}

const IndexPage = (props: IndexPageProps) => (
	<>
		<Head meta={props} />
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

				description,
				redirect: '/resume/#resume',
			},
		});
	},
});
