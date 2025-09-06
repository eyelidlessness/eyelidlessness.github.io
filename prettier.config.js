// @ts-check

/** @type {import("prettier").Config} */
export default {
	printWidth: 80,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
	overrides: [
		{
			files: ['.*', '*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
		{
			files: ['.vscode/**/*.json'],
			options: {
				parser: 'jsonc',
			},
		},
	],
};
