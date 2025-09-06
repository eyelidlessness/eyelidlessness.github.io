import type { ConfigWithExtends } from 'typescript-eslint';

export type ESLintConfig = Readonly<ConfigWithExtends>;

type ESLintConfigs = ESLintConfig | readonly ESLintConfig[];

type ExtractConfig<Config> = Extract<Config, ESLintConfigs>;

export const eslintConfig = <const Config>(
	config: ExtractConfig<Config>
): ExtractConfig<Config> => config;

type ESLintRules = NonNullable<ESLintConfig['rules']>;

type ExtractRules<Rules> = Extract<Rules, ESLintRules>;

export interface ESLintRulesConfig<Rules> {
	readonly rules: ExtractRules<Rules>;
}

export const rulesConfig = <const Rules>(
	rules: ExtractRules<Rules>
): ESLintRulesConfig<Rules> => {
	return { rules };
};

// prettier-ignore
type PrefixedKey<Prefix extends string | null, K extends PropertyKey> =
	Prefix extends null
		? K extends `${string}/${string}`
			? never
			: K
		: K extends `${Prefix}/${string}`
			? K
			: never;

// prettier-ignore
type EnforcePrefix<Prefix extends string | null, Rules> = {
	readonly [K in keyof Rules]:
		K extends PrefixedKey<Prefix, K>
			? Rules[K]
			: `Expected rule for plugin: ${Prefix}`;
}

export const pluginRulesConfig = <
	const Prefix extends string | null,
	const Rules extends Readonly<Record<PrefixedKey<Prefix, string>, unknown>>,
>(
	// @ts-expect-error - signature-only
	pluginPrefix: Prefix,
	rules: ExtractRules<EnforcePrefix<Prefix, Rules>>
): ESLintRulesConfig<ExtractRules<EnforcePrefix<Prefix, Rules>>> => {
	return rulesConfig<ExtractRules<EnforcePrefix<Prefix, Rules>>>(rules);
};
