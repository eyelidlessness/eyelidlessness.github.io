import { definePage } from 'microsite/page';
import { BlogArt, BlogArtDefs } from '../../components/Blog/index.js';
import { Head } from '../../components/Head.js';
import { Main } from '../../components/Main.js';
import type { PageMetadata } from '../../lib/content/index.js';
import { getPageMetadata, PageMetadataType } from '../../lib/content/index.js';

interface IndexPageProps extends PageMetadata {
	readonly description: string;
}

const IndexPage = (props: IndexPageProps) => {
	const { hash, title, topics } = props;

	return (
		<>
			<Head meta={props} />

			<Main meta={props}>
				<BlogArtDefs />
				<BlogArt hash={hash} title={title} topics={topics} />

				<p>
					<a href="/for-daph/huh/" rel="preload">
						Huh
					</a>
				</p>
			</Main>
		</>
	);
};

export default definePage(IndexPage, {
	getStaticProps({ path }) {
		const title = 'Hello world';
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-template-expression
		const description = `Just a little sneak peak of my personal site and${' '} statically generated art project.`;

		const meta = getPageMetadata(path, import.meta.url, title, PageMetadataType.MUTABLE);

		return Promise.resolve({
			props: {
				...meta,

				description,
			},
		});
	},
});
