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
      typeof v === 'object' && k.includes('&')
        ? acc
        : `${acc}${hyphenate(k)}:${v};`
    ), ''),
  '}',
  Object.entries(js)
    .reduce((acc, [ k, v ]) => (
      typeof v === 'object' && k.includes('&')
        ? `${acc}${jsToCSS(
          selectors.map((selector) => k.replace(/&/g, selector)),
          v
        )}`
        : acc
    ), ''),
].join(''));

export const clamp = (...args: readonly string[]) => (
  `clamp(${args.join(',')})`
);

export * from 'polished';
