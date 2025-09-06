import pluginJSDoc from 'eslint-plugin-jsdoc';
import { eslintConfig } from '../config-factories.ts';

export const eslintConfig_jsdocBase = eslintConfig({
	plugins: { jsdoc: pluginJSDoc },
	rules: {
		'jsdoc/no-undefined-types': [
			'error',
			{
				markVariablesAsUsed: true,
				disableReporting: true,
			},
		],
	},
});
