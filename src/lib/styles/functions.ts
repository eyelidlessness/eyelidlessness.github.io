const hyphenate = (string: string) => (
  string.replace(/[A-Z]/g, (match) => (
    `-${match.toLowerCase()}`
  ))
);

export const jsToCSS = (
  selectors: readonly string[],
  js:        Readonly<Record<string, any>>
): string => ([
  selectors.join(','),
  '{',
  Object.entries(js)
    .reduce((acc, [ k, v ]) => (
      typeof v === 'object' && (k === 'nested' || k.includes('&'))
        ? acc
        : `${acc}${hyphenate(k)}:${v};`
    ), ''),
  '}',
  Object.entries(js)
    .map(([ k, v ]) => {
      if (typeof v === 'object') {
        if (k === 'nested') {
          return Object.entries(v).map(([ k, v ]) => {
            const nestedSelectors = selectors.map((selector) => (
              k.replace(/&/g, selector)
            ));

            return jsToCSS(nestedSelectors, v as any);
          }).join('');
        }
        else if (k.includes('&')) {
          const nestedSelectors = selectors.map((selector) => (
            k.replace(/&/g, selector)
          ));

          return jsToCSS(nestedSelectors, v);
        }
      }

      return '';
    }, []).join(''),
].join(''));

export const clamp = (...args: readonly string[]) => (
  `clamp(${args.join(',')})`
);

export const cleanWhitespace = (str: string) => (
  str.replace(/\s+/g, ' ').trim()
);
