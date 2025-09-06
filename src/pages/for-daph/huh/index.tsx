import { definePage } from 'microsite/page';
import { BlogArt, BlogArtDefs } from '../../../components/Blog/index.js';
import { Head } from '../../../components/Head.js';
import { Main } from '../../../components/Main.js';
import type { PageMetadata } from '../../../lib/content/index.js';
import {
	getPageMetadata,
	PageMetadataType,
	Topic,
} from '../../../lib/content/index.js';

const HuhPage = (props: PageMetadata) => {
	const { hash, topics } = props;
	return (
		<>
			<Head meta={props} />

			<Main meta={props}>
				<BlogArtDefs />
				<BlogArt hash={hash} title={'Huh'} topics={topics} />
				<p>
					<a href="/blog/2021/02/what-the-art-p1-why/">What</a>
				</p>
			</Main>
		</>
	);
};

export default definePage(HuhPage, {
	getStaticProps({ path }) {
		const title = 'Huh';
		const topics = [
			Topic.NEURODIVERGENCE,
			Topic.MENTAL_ILLNESS,
			Topic.SUBSTANCE_ABUSE,
		] as const;
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

				topics,
			},
		});
	},
});
