import { eslintConfig } from '../config-factories.ts';

export const eslintConfig_importsBase = eslintConfig({
	rules: {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ignorePackages: false,
				pathGroupOverrides: [
					{
						pattern: '~/**',
						action: 'enforce',
					},
				],
			},
		],

		/**
		 * Unclear _why_, but something about the combination of:
		 *
		 * - `import/recommended`
		 * - `import/typescript`
		 *
		 * ... leads to a bunch of false positives. It's (mostly) safe to rely
		 * on TypeScript to determine if an import actually resolves.
		 */
		'import/no-unresolved': 'off',
	},
});
