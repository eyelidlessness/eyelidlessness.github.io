import {
	RESTRICTED_GLOBALS,
	UNPREFIXED_NODE_BUILTIN_MODULES,
} from '../../common/constants.ts';
import { pluginRulesConfig } from '../config-factories.ts';

export const eslintjsConfig_rulesBase = pluginRulesConfig(null, {
	'no-case-declarations': 'error',
	'no-console': 'error',
	'no-restricted-globals': [
		'error',
		...RESTRICTED_GLOBALS.map((name) => {
			return { name };
		}),
	],
	'prefer-const': 'error',
	'prefer-spread': 'error',
	'no-restricted-imports': [
		'error',
		{
			paths: [...UNPREFIXED_NODE_BUILTIN_MODULES],
		},
	],
	'no-undef': 'off',
});
