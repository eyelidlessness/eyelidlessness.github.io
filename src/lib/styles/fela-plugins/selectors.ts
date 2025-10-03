import type { CSSObject, TPlugin } from 'fela';
import type { IStyle } from '../styles.js';

// prettier-ignore
type PlainObject =
	& Partial<Readonly<Record<PropertyKey, unknown>>>
	& object;

const isPlainObject = (value: unknown): value is PlainObject => {
	return value != null && typeof value === 'object' && !Array.isArray(value);
};

// prettier-ignore
type IterableStyleObjectValue =
	| CSSObject
	| IStyle
	| IterableStyleObject
	| number
	| (string & {});

/**
 * Relaxed variant of the general concepts in {@link IStyle}, suitable for
 * iterating over its key-value entries (i.e. via {@link Object.entries}).
 */
interface IterableStyleObject {
	[key: string]: IterableStyleObjectValue;
}

/**
 * Based on
 * {@link https://github.com/robinweser/fela/tree/6883525fa44c2c47d0d93768eb26f072fee3c439/packages/fela-plugin-multiple-selectors},
 * primarily modified to avoid splitting `@media` queries. Other modifications:
 *
 * - Eliminate superfluous dependencies
 * - Types (some of which are still pretty loosey-goosey!)
 * - Guard against attempt to merge style object with string when style input
 *   has an existing value for a sub-selector
 */
function multipleSelectorsPlugin(style: IStyle): IStyle {
	const input = style as IterableStyleObject;
	const result = style as IterableStyleObject;

	for (const [property, value] of Object.entries(input)) {
		if (isPlainObject(value)) {
			// [Modification:]
			//
			// Do not attempt to split `@media` keys. It may well be a
			// reasonable behavior (it certainly falls within Fela's "atomic"
			// philosophy), but it doesn't work (`@media foo, bar` splits as if `bar`
			// is a selector rather than another media query).
			if (property.startsWith('@media')) {
				result[property] = multipleSelectorsPlugin(value);

				continue;
			}

			const resolvedValue = multipleSelectorsPlugin(value);

			// [Original comment, reformatted:]
			//
			// split on commas, but not within a relative selector list e.g. ":hover,
			//   :focus", but not ":where(:hover, :focus)"
			const selectors = property.split(/(?<!\([^)]*),(?![^(]*\))/);

			if (selectors.length > 1) {
				for (const selector of selectors) {
					const key = selector.trim();

					// merge styles with base styles
					const baseStyle = result[key] ?? {};

					// [Modification:]
					//
					// Fail when base key is not also assigned an object. This is unlikely
					// in real usage, but satisfies the underlying types.
					if (!isPlainObject(baseStyle)) {
						throw new Error(`Failed to merge styles for selector: ${key}`);
					}

					result[key] = {
						...baseStyle,
						...resolvedValue,
					};
				}

				// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
				delete result[property];
			}
		} else {
			result[property] = value;
		}
	}

	return result;
}

export function pluginSelectors(): TPlugin {
	return multipleSelectorsPlugin;
}
