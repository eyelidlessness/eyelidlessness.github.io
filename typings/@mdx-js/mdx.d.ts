declare module '@mdx-js/mdx' {
	import type { VNode } from 'preact';
	import type { Plugin } from 'unified';

	export type AnyPlugin<S extends unknown[] = [Settings?], P = Settings> =
		| Plugin<S, P>
		| [Plugin<S, P>, ...S];

	// prettier-ignore
	export type PluginsList<T extends readonly AnyPlugin[]> =
		& T
		& {
			[K in keyof T]:
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				T[K] extends AnyPlugin<any, any>
					? T[K]
				: T[K] extends [ AnyPlugin<infer S, infer P>, ...unknown[] ]
					? S extends unknown[]
						? T[K] extends [ AnyPlugin<S, P>, ...S ]
							? T[K]
						: never
					: never
				: never;
		};

	export interface MDXOptions {
		readonly rehypePlugins?: readonly AnyPlugin[];
		readonly remarkPlugins?: readonly AnyPlugin[];
		readonly skipExport?: boolean;
	}

	interface MDX {
		readonly sync: (children: string | VNode, options: MDXOptions) => string;
	}

	const mdx: MDX;

	export default mdx;
}
