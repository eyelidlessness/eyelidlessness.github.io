import { definePage } from 'microsite/page';
import type NodePath from 'node:path';
import type { BlogPostProps } from '../../components/Blog/BlogPost.js';
import { BlogArtDefs, BlogListing } from '../../components/Blog/index.js';
import { Head } from '../../components/Head.js';
import { Main } from '../../components/Main.js';
import type { PageMetadata } from '../../lib/content/meta.js';
import { getPageMetadata, PageMetadataType } from '../../lib/content/meta.js';

interface BlogIndexPageProps extends PageMetadata {
	readonly description: string;
	readonly posts: readonly BlogPostProps[];
}

const BlogIndexPage = (props: BlogIndexPageProps) => (
	<>
		<Head meta={props} />

		<Main meta={props}>
			<BlogArtDefs />

			<BlogListing posts={props.posts} />
		</Main>
	</>
);

type Awaitable<T> = T | PromiseLike<T>;

interface PostModule {
	default?: {
		getStaticProps?: (context: { path: string }) => Awaitable<{
			props: Promise<BlogPostProps>;
		}>;
	};
}

export default definePage(BlogIndexPage, {
	async getStaticProps({ path }) {
		const selfPath = import.meta.url.replace(/^file:(\/\/)?/, '');

		const { default: glob } = await import('globby');
		const nodePath = (await import('node:path')) as typeof NodePath;

		const basePath = nodePath.dirname(selfPath);
		const pagesPath = basePath.replace(/(^.*?\/pages)\/.*$/, '$1');
		const blogGlob = nodePath.resolve(basePath, './**/*.js');
		const blogFiles = await glob(blogGlob);
		const postFiles = blogFiles.filter((filePath) => {
			return filePath !== selfPath;
		});

		const postResults = await Promise.all(
			postFiles.map(async (identifier) => {
				const { default: postPage } = (await import(identifier)) as PostModule;
				const postStaticProps = await postPage?.getStaticProps?.({
					path: identifier,
				});
				const postProps = await postStaticProps?.props;

				if (postProps == null) {
					throw new Error(`Couldn't get post props for post at path: ${identifier}`);
				}

				const relativePath = identifier
					.replace(pagesPath, '')
					.replace(/(\/index)?\.js$/, '/');

				return {
					...postProps,
					path: relativePath,
				};
			})
		);
		const posts = postResults.filter((post) => post.redirect == null);

		const title = 'Blog';
		const description = `Trevor Schmidt's tech blog`;
		const meta = getPageMetadata(path, import.meta.url, title, PageMetadataType.MUTABLE);

		return {
			props: {
				...meta,

				description,
				posts,
			},
		};
	},
});
