import type { IRenderer, IStyle, TRule } from 'fela';
import { createRenderer as baseCreateRenderer } from 'fela';
import createIdentifier from 'fela-identifier';
import pluginEmbedded from 'fela-plugin-embedded';
import pluginSelectors from 'fela-plugin-multiple-selectors';
import pluginTypescript from 'fela-plugin-typescript';
import { renderToString } from 'fela-tools';
import type NodeFS from 'node:fs';
import type NodePath from 'node:path';
import type { ComponentChildren, ComponentType, ElementType } from 'preact';
import { h, toChildArray } from 'preact';
import type { Style } from 'preact-fela';
import { createComponent, RendererProvider } from 'preact-fela';
import { identity } from '../helpers/values.js';
import hashed from './hashed.js';

export type StyleableIntrinsicElements = JSX.IntrinsicElements;
export type StyleableIntrinsicElement = keyof JSX.IntrinsicElements;
export type AnyStyleableIntrinsicElement =
	StyleableIntrinsicElements[StyleableIntrinsicElement];

export type StyleableClassName = AnyStyleableIntrinsicElement['className'];

const devMode = import.meta.env?.MODE === 'development';

type CreateIdentifierResult = ReturnType<typeof createIdentifier>;

export interface SerializableUniqueIdentifier {
	readonly className: string;
	toString(): string;
}

// prettier-ignore
export type UniqueIdentifierFactory = (name?: string) => (
	& TRule
	& SerializableUniqueIdentifier
);

interface StyleRenderer {
	readonly identifier: UniqueIdentifierFactory;
	readonly renderer: IRenderer;
}

export const createRenderer = (): StyleRenderer => {
	const identifier: CreateIdentifierResult = createIdentifier();

	const renderer = baseCreateRenderer({
		devMode,
		enhancers: [hashed(), identifier],
		plugins: [pluginEmbedded(), pluginSelectors(), pluginTypescript()],
	});

	return {
		identifier,
		renderer,
	};
};

export const { identifier, renderer } = createRenderer();

export const writeCurrentStyles = async (): Promise<void> => {
	if (
		!devMode &&
		import.meta.url.endsWith('/.microsite/staging/src/lib/styles/styles.js')
	) {
		const currentStyles = renderToString(renderer);
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-template-expression
		const fs = (await import(`${'node:fs'}`)) as typeof NodeFS;
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-template-expression
		const path = (await import(`${'node:path'}`)) as typeof NodePath;

		const cssPath = path.resolve(
			path.dirname(import.meta.url.replace(/^file:/, '')),
			'../../global/index.css'
		);

		fs.writeFileSync(cssPath, currentStyles, {
			flag: 'w',
		});
	}
};

interface StylesProviderProps {
	readonly children?: ComponentChildren;
}

type StylesProvider = ComponentType<StylesProviderProps>;

export const createStylesProvider = (providerRenderer: IRenderer): StylesProvider => {
	return ({ children }: StylesProviderProps) => {
		return h(RendererProvider, { renderer: providerRenderer }, ...toChildArray(children));
	};
};

export const StylesProvider = createStylesProvider(renderer);

const baseCSS = (value: IStyle) => renderer.renderRule(identity, value);

export const css = Object.assign(baseCSS, {
	global: renderer.renderStatic.bind(renderer),
});

export interface StyleableProps {
	readonly className?: StyleableClassName;
}

interface BaseStyledProps extends StyleableProps {
	as?: ElementType<StyleableProps>;
}

type IntrinsicElementCastProps<As extends keyof JSX.IntrinsicElements> = {
	readonly as: As;
} & BaseStyledProps &
	JSX.IntrinsicElements[As];

// prettier-ignore
type StyledComponentProps<P> =
	& BaseStyledProps
	& Omit<P, 'as'>;

interface StyledComponent<P> {
	<As extends keyof JSX.IntrinsicElements>(
		props: IntrinsicElementCastProps<As>
	): JSX.Element;
	<T extends StyleableProps>(
		props: { readonly as: ComponentType<T> } & Omit<T, 'as'>
	): JSX.Element;
	(props: StyledComponentProps<P>): JSX.Element;
}

interface Styled {
	<T extends keyof JSX.IntrinsicElements>(
		Component: T,
		style: Style<JSX.IntrinsicElements[T]>
	): StyledComponent<JSX.IntrinsicElements[T]>;

	<P extends StyleableProps>(
		Component: ComponentType<P>,
		style: Style<P>
	): StyledComponent<P>;
}

export const styled: Styled = <P extends StyleableProps>(
	Component: ElementType<P>,
	style: Style<P>
) => {
	const rule = typeof style === 'function' ? style : () => style;

	return createComponent(rule, Component as ComponentType<P>, Object.keys) as never;
};

export type { IRenderer, IStyle };
