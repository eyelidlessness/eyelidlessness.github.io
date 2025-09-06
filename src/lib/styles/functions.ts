import type { UnknownObject } from '../helpers/values.js';
import { isUnknownObject } from '../helpers/values.js';

const hyphenate = (string: string) =>
	string.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

export const jsToCSS = (selectors: readonly string[], js: UnknownObject): string =>
	[
		selectors.join(','),
		'{',
		Object.entries(js).reduce(
			(acc, [k, v]) =>
				typeof v === 'object' && (k === 'nested' || k.includes('&'))
					? acc
					: `${acc}${hyphenate(k)}:${String(v)};`,
			''
		),
		'}',
		Object.entries(js)
			.map(([key, value]) => {
				if (isUnknownObject(value)) {
					if (key === 'nested') {
						return Object.entries(value)
							.map(([k, v]) => {
								const nestedSelectors = selectors.map((selector) =>
									k.replace(/&/g, selector)
								);

								return jsToCSS(nestedSelectors, v as UnknownObject);
							})
							.join('');
					} else if (key.includes('&')) {
						const nestedSelectors = selectors.map((selector) =>
							key.replace(/&/g, selector)
						);

						return jsToCSS(nestedSelectors, value);
					}
				}

				return '';
			}, [])
			.join(''),
	].join('');

export const clamp = (...args: readonly string[]): `clamp(${string})` =>
	`clamp(${args.join(',')})`;

export const cleanWhitespace = (str: string): string => str.replace(/\s+/g, ' ').trim();
