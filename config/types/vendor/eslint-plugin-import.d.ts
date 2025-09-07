declare module 'eslint-plugin-import' {
	import type { ESLint, Linter, Rule } from 'eslint';

	declare const plugin: ESLint.Plugin & {
		readonly meta: {
			readonly name: string;
			readonly version: string;
		};
		readonly configs: {
			readonly 'react-native': Linter.LegacyConfig;
			readonly 'stage-0': Linter.LegacyConfig;
			readonly electron: Linter.LegacyConfig;
			readonly errors: Linter.LegacyConfig;
			readonly react: Linter.LegacyConfig;
			readonly recommended: Linter.LegacyConfig;
			readonly typescript: Linter.LegacyConfig;
			readonly warnings: Linter.LegacyConfig;
		};
		readonly flatConfigs: {
			readonly 'react-native': Linter.Config;
			readonly 'stage-0': Linter.Config;
			readonly electron: Linter.Config;
			readonly errors: Linter.Config;
			readonly react: Linter.Config;
			readonly recommended: Linter.Config;
			readonly typescript: Linter.Config;
			readonly warnings: Linter.Config;
		};
		readonly rules: Record<string, Rule.RuleModule>;
	};

	export = plugin;
}
