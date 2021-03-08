import path from 'path';
import ts   from 'typescript';

const relativePrefix = /^[./]/;

const tsconfigDefault = process.env.NODE_ENV === 'test'
  ? 'tsconfig.test.json'
  : 'tsconfig.json';

const getTsconfigPath = (rootDir: string) => (
  ts.findConfigFile(
    rootDir,
    ts.sys.fileExists,
    tsconfigDefault
  ) ??
  path.resolve(rootDir, tsconfigDefault)
);

const cwd = process.cwd();
const tsconfigPath = getTsconfigPath(cwd);

const {
  config: tsconfig = {},
} = ts.readConfigFile(tsconfigPath, ts.sys.readFile);

const {
  baseUrl = '.',
  paths   = {},
} = tsconfig.compilerOptions ?? {};

const escapePattern = (str: string) => (
  str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
);

const pathPattern = (str: string) => (
  new RegExp([
    '^',
    escapePattern(
      str.replace(/^(.*)\*.*/, '$1')
    ),
    str.replace(/.*\*.*/, '(.*)'),
    escapePattern(
      str.replace(/.*\*(.*)$/, '$1')
    ),
    '$',
  ].join(''))
);

const resolutionSpec = (resolution: string) => (
  resolution.split('*')
);

const resolutionsArray = (resolutions: unknown) => (
  Array.isArray(resolutions)
    ? resolutions
    : []
);

const pathsMap = new Map(Object.entries(paths).map(([ pattern, resolutions ]) => ([
  pathPattern(pattern),
  resolutionsArray(resolutions).map(resolutionSpec),
])));

const noSuffix = /\/[^.]*$/;

interface ResolveContext {
  conditions: string[];
  parentURL?: string;
}

type ResolveFunction = (
  specifier:      string,
  context:        ResolveContext,
  defaultResolve: ResolveFunction
) => Promise<{ url: string }>;

export const resolve: ResolveFunction = async (
  specifier,
  context,
  defaultResolve
) => {
  for (const [ pattern, resolutions ] of pathsMap.entries()) {
    if (pattern.test(specifier)) {

      const mapped = specifier.replace(pattern, '$1');
      for (const [ prefix, suffix ] of resolutions) {
        const modulePath = path.resolve(cwd, baseUrl, prefix, `${mapped}${suffix}`);

        try {
          const resolved = defaultResolve(modulePath, context, defaultResolve);

          return resolved;
        }
        catch {}
      }
    }
  }

  if (noSuffix.test(specifier) && relativePrefix.test(specifier)) {
    return defaultResolve(`${specifier}.js`, context, defaultResolve);
  }

  return defaultResolve(specifier, context, defaultResolve);
};
