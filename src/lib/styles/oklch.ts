interface RangeInvariantAssertionOptions {
	readonly min: number;
	readonly max: number;

	/**
	 * @default 'value'
	 */
	readonly semantics?: string;
}

type AssertRangeInvariant = (value: number) => void;

const rangeInvariantAssertion = (
	options: RangeInvariantAssertionOptions
): AssertRangeInvariant => {
	const { min, max, semantics = 'value' } = options;

	return (value) => {
		if (value < min || value > max) {
			throw new Error(
				`Expected ${semantics} to be in range ${min}–${max}. Got: ${value}`
			);
		}
	};
};

const assertAlphaRange = rangeInvariantAssertion({
	min: 0,
	max: 1,
	semantics: 'alpha',
});

const percentageInvariantAssertion = (semantics: string) => {
	return rangeInvariantAssertion({
		min: 0,
		max: 100,
		semantics,
	});
};

const assertPercentageRange = percentageInvariantAssertion('percentage');
const assertLightnessRange = percentageInvariantAssertion('lightness');
const assertChromaRange = percentageInvariantAssertion('chroma');
const assertHueRange = rangeInvariantAssertion({
	min: 0,
	max: 360,
	semantics: 'hue (degrees)',
});

export interface OKLCHOptions {
	readonly lightness: number;
	readonly chroma: number;
	readonly hue: number;
	readonly alpha?: number;
}

type OKLCHPercentage = `${number}%`;

const oklchPercentage = (
	value: number,
	assert: AssertRangeInvariant = assertPercentageRange
): OKLCHPercentage => {
	assert(value);

	return `${value}%`;
};

type OKLCHAngle = `${number}deg`;

const oklchHue = (hue: number): OKLCHAngle => {
	assertHueRange(hue);

	return `${hue}deg`;
};

export type OKLCHAlpha = ` / ${OKLCHPercentage}` | '';

const oklchAlpha = (alpha: number): OKLCHAlpha => {
	assertAlphaRange(alpha);

	return ` / ${oklchPercentage(alpha * 100)}`;
};

export type OKLCHStyle =
	`oklch(${OKLCHPercentage} ${OKLCHPercentage} ${OKLCHAngle}${OKLCHAlpha})`;

export const oklch = (options: OKLCHOptions): OKLCHStyle => {
	const { lightness, chroma, hue, alpha = 1 } = options;

	const l = oklchPercentage(lightness, assertLightnessRange);
	const c = oklchPercentage(chroma, assertChromaRange);
	const h = oklchHue(hue);
	const a = oklchAlpha(alpha);

	return `oklch(${l} ${c} ${h}${a})`;
};

export interface OKLCHLightDarkOptions extends OKLCHOptions {
	readonly darkLightness: number;
}

export type OKLCHLightDarkStyle = `light-dark(${OKLCHStyle}, ${OKLCHStyle})`;

export const oklchLightDark = (
	options: OKLCHLightDarkOptions
): OKLCHLightDarkStyle => {
	const { darkLightness, ...lightOptions } = options;
	const darkOptions: OKLCHOptions = {
		...lightOptions,
		lightness: darkLightness,
	};
	const light = oklch(lightOptions);
	const dark = oklch(darkOptions);

	return `light-dark(${light}, ${dark})`;
};
