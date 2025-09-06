import { existsSync } from 'node:fs';
import { builtinModules } from 'node:module';
import { resolve as resolvePath } from 'node:path';
import { fileURLToPath } from 'node:url';
import pkgJSON from '../../package.json' with { type: 'json' };

// #region Re-exports

export const BUILTIN_MODULES = builtinModules;
export const UNPREFIXED_NODE_BUILTIN_MODULES = BUILTIN_MODULES.filter((moduleName) => {
	return !moduleName.startsWith('node:');
});

export const PREFIXED_NODE_BUILTIN_MODULES = UNPREFIXED_NODE_BUILTIN_MODULES.map(
	(moduleName) => {
		return `node:${moduleName}`;
	}
);

export const PKG_JSON = pkgJSON;

// #endregion Re-exports

export const PKG_JSON_PATH = fileURLToPath(import.meta.resolve('../../package.json'));

// #region PROJECT_PATH

export const PROJECT_PATH = resolvePath(PKG_JSON_PATH, '..');

const packagePath = resolvePath(PROJECT_PATH, './package.json');

if (packagePath !== PKG_JSON_PATH || !existsSync(packagePath)) {
	throw new Error(
		`INVALID PROJECT_PATH (${PROJECT_PATH}), failed to locate package.json at ${packagePath}`
	);
}

// #endregion PROJECT_PATH

// #region Other paths

export const PRETTIER_IGNORE_PATH = resolvePath(PROJECT_PATH, './.prettierignore');

export const VITEST_PATTERN = /(^@?vitest(\/|$)|\/vitest$)/;

// #endregion

// #region Restricted global references

export const RESTRICTED_DOM_GLOBALS = [
	// Common footguns, I'll probably add more as they occur to me
	'event',
	'length',
	'name',
] as const;

export const RESTRICTED_NODE_COMMONJS_GLOBALS = [
	'__dirname',
	'__filename',
	'exports',
	'gc',
	'global',
] as const;

export const RESTRICTED_COMMONJS_GLOBALS = [
	...RESTRICTED_DOM_GLOBALS,
	...RESTRICTED_NODE_COMMONJS_GLOBALS,
] as const;

export const RESTRICTED_NODE_GLOBALS = [
	...RESTRICTED_NODE_COMMONJS_GLOBALS,
	'module',
	'process',
	'require',
] as const;

export const RESTRICTED_GLOBALS = [
	...RESTRICTED_DOM_GLOBALS,
	...RESTRICTED_NODE_GLOBALS,
] as const;

// #endregion Restricted global references
