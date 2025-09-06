import 'preact';

declare module 'preact' {
	// prettier-ignore
	type CompatibleIntrinsicElement<P> = {
		[K in keyof JSX.IntrinsicElements]:
			P extends JSX.IntrinsicElements[K]
				? K
			: never
	}[keyof JSX.IntrinsicElements];

	// prettier-ignore
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	export type ElementType<P = {}> =
		| CompatibleIntrinsicElement<P>
		| ComponentType<P>;

	namespace JSX {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		interface HTMLAttributes<RefType extends EventTarget = EventTarget> {
			datetime?: string;
			itemprop?: string;
			itemscope?: boolean;
			itemtype?: string;
			tabindex?: number;
		}

		interface LinkHTMLAttributes<T extends EventTarget = HTMLLinkElement>
			extends HTMLAttributes<T> {
			color?: Signalish<string | undefined>;
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		export interface SignalLike<T> {
			toString(): string;
		}
	}
}
