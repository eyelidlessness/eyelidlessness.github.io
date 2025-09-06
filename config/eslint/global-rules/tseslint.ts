import type { ESLintConfig } from '../config-factories.ts';
import { pluginRulesConfig } from '../config-factories.ts';

export const tseslintConfig_rulesBase = pluginRulesConfig('@typescript-eslint', {
	'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
	'@typescript-eslint/await-thenable': 'error',
	'@typescript-eslint/ban-ts-comment': [
		'warn',
		{
			minimumDescriptionLength: 3,
		},
	],
	'@typescript-eslint/class-literal-property-style': 'error',
	'@typescript-eslint/consistent-indexed-object-style': 'error',
	'@typescript-eslint/consistent-type-definitions': 'error',
	'@typescript-eslint/consistent-type-imports': [
		'error',
		{
			prefer: 'type-imports',
			fixStyle: 'separate-type-imports',
			disallowTypeAnnotations: true,
		},
	],
	'@typescript-eslint/explicit-module-boundary-types': 'error',
	'@typescript-eslint/no-base-to-string': 'error',
	'@typescript-eslint/no-empty-function': 'error',
	'@typescript-eslint/no-empty-interface': [
		'error',
		{
			allowSingleExtends: true,
		},
	],
	'@typescript-eslint/no-empty-object-type': [
		'error',
		{
			allowInterfaces: 'with-single-extends',
		},
	],
	'@typescript-eslint/no-explicit-any': 'error',
	'@typescript-eslint/no-floating-promises': 'error',
	'@typescript-eslint/no-inferrable-types': 'warn',
	'@typescript-eslint/no-misused-promises': 'error',
	'@typescript-eslint/no-namespace': 'error',
	'@typescript-eslint/no-redundant-type-constituents': 'error',
	'@typescript-eslint/no-shadow': 'error',
	'@typescript-eslint/no-this-alias': 'warn',
	'@typescript-eslint/no-unsafe-argument': 'error',
	'@typescript-eslint/no-unsafe-assignment': 'error',
	'@typescript-eslint/no-unsafe-call': 'error',
	'@typescript-eslint/no-unsafe-member-access': 'error',
	'@typescript-eslint/no-unsafe-return': 'error',
	'@typescript-eslint/no-unused-vars': [
		'error',
		{ argsIgnorePattern: '^_', ignoreRestSiblings: true },
	],
	'@typescript-eslint/only-throw-error': 'warn',
	'@typescript-eslint/prefer-nullish-coalescing': 'error',
	'@typescript-eslint/prefer-optional-chain': 'error',
	'@typescript-eslint/prefer-string-starts-ends-with': 'error',
	'@typescript-eslint/require-await': 'error',
	'@typescript-eslint/restrict-plus-operands': 'error',
	'@typescript-eslint/restrict-template-expressions': [
		'error',
		{
			allowBoolean: true,
			allowNullish: true,
			allowNumber: true,
		},
	],
	'@typescript-eslint/switch-exhaustiveness-check': [
		'error',
		{
			considerDefaultExhaustiveForUnions: true,
			requireDefaultForNonUnion: true,
		},
	],
	'@typescript-eslint/unbound-method': 'error',
});

export const tseslintConfig_rules_globalTypes = {
	files: ['typings/global.d.ts'],
	...pluginRulesConfig('@typescript-eslint', {
		'@typescript-eslint/consistent-type-imports': 'off',
	}),
} as const satisfies ESLintConfig;
