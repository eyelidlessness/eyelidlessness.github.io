import { defineConfig } from 'eslint/config';
import { eslintConfig_importsBase } from './base-configs/imports.ts';
import { eslintConfig_jsdocBase } from './base-configs/jsdoc.ts';
import { eslintConfig_optionsBase } from './base-configs/languageOptions.ts';
import { eslintjsConfig_rulesBase } from './global-rules/eslintjs.ts';
import {
	tseslintConfig_rulesBase,
	tseslintConfig_rules_globalTypes,
} from './global-rules/tseslint.ts';
import { ignoresConfig } from './ignores.ts';
import { eslintConfig_commonjs } from './node-specific.ts';
import { eslintConfig_recommendedBase } from './recommended.ts';
import { eslintConfig_test } from './test-specific.ts';

export const eslintConfig = defineConfig(
	ignoresConfig,
	eslintConfig_recommendedBase,
	eslintConfig_importsBase,
	eslintConfig_jsdocBase,
	eslintConfig_optionsBase,
	tseslintConfig_rulesBase,
	tseslintConfig_rules_globalTypes,
	eslintjsConfig_rulesBase,
	eslintConfig_commonjs,
	eslintConfig_test
);
