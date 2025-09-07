import type NodeFS from 'node:fs';
import type NodePath from 'node:path';
import type {
	AnyPage,
	ElementType,
	PluginFactory,
	StylesLib,
} from './types.js';

const fs = require('node:fs') as typeof NodeFS;
const path = require('node:path') as typeof NodePath;

const getPageComponent = (page?: AnyPage | null): ElementType => {
	if (typeof page === 'object' && page?.Component != null) {
		return page.Component;
	}

	if (typeof page === 'function') {
		return page;
	}

	return () => null;
};

const pluginFela: PluginFactory = () => ({
	name: 'plugin-fela',

	async optimize({ buildDirectory }) {
		// eslint-disable-next-line no-console
		console.time('fela');

		const { h, Fragment } = await import('preact');
		const { default: render } = await import('preact-render-to-string');
		const documentPath = path.resolve(buildDirectory, 'src/pages/_document.js');

		const pagePaths = fs
			.globSync(path.resolve(buildDirectory, 'src/pages/**/*.js'))
			.filter((pagePath) => pagePath !== documentPath);

		const pages = await Promise.all(
			pagePaths.map(async (pagePath) => {
				const { default: page } = (await import(pagePath)) as {
					default: AnyPage;
				};

				const Page = getPageComponent(page);

				const staticProps =
					typeof page === 'object' && typeof page.getStaticProps === 'function'
						? await page.getStaticProps({
								params: {},
								path: pagePath,
							})
						: { props: {} };

				const props = (
					typeof staticProps === 'object' && staticProps != null
						? staticProps.props
						: {}
				) as object;

				return h(Page, props);
			})
		);

		try {
			await Promise.resolve().then(() => render(h(Fragment, {}, ...pages)));
		} catch (error) {
			// eslint-disable-next-line no-console
			console.trace(error);

			throw error;
		}

		const stylesPath = path.resolve(buildDirectory, 'src/lib/styles/styles.js');
		const { writeCurrentStyles } = (await import(stylesPath)) as StylesLib;

		await writeCurrentStyles();

		// eslint-disable-next-line no-console
		console.timeEnd('fela');
	},
});

module.exports = pluginFela;
