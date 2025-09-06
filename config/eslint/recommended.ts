import eslint from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import { eslintConfig } from './config-factories.ts';

export const eslintConfig_recommendedBase = eslintConfig({
	extends: [
		eslint.configs.recommended,

		tseslint.configs.strictTypeChecked,
		tseslint.configs.stylisticTypeChecked,

		pluginImport.flatConfigs.recommended,
		pluginImport.flatConfigs.typescript,
	],
});
