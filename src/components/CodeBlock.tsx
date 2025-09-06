import type { ComponentChildren, ComponentProps } from 'preact';
import { styled, theme } from '../lib/styles/index.js';
import {
	FullBleedContainer,
	FullBleedScrollableOverflow,
	FullBleedSymbolBlock,
} from './FullBleed/index.js';

const ContentContainer = styled('pre', {
	fontSize: '1rem',
	tabSize: 2,
});

const BaseInnerContainer = styled(FullBleedScrollableOverflow, {
	maxHeight: 'min(42.25rem, 80vh)',
	paddingLeft: 'clamp(1.25em, 3.5vw, 3em)',
});

type InnerContainer = typeof BaseInnerContainer;

const InnerContainer: InnerContainer = (
	props: ComponentProps<typeof BaseInnerContainer>
) => (
	<BaseInnerContainer
		shadow={{
			darkMask: [0, 0, 0, 1],
			darkScroll: [0, 164, 255, 0.75],
			lightMask: [255, 255, 255, 1],
			lightScroll: [124, 128, 131, 0.75],
		}}
		{...props}
	/>
);

const OuterContainer = styled(FullBleedContainer, {
	...theme.pre,

	nested: {
		[theme.darkMode]: {
			...theme[theme.darkMode].pre,
		},

		'& code': {
			backgroundColor: 'transparent',
			hyphens: 'none',
			overflowWrap: 'normal',
			whiteSpace: 'pre',
			wordWrap: 'normal',
		},

		'& pre': {
			backgroundColor: 'transparent',
			border: 0,
			maxWidth: '100%',
			margin: 0,
			padding: '1rem 0',
			whiteSpace: 'pre',
		},
	},
});

const SymbolContainer = styled('div', {
	...theme.codeBlock.symbol,

	fontSize: 'clamp(3em, 7vw, 4em)',
	marginLeft: '-0.3em',
	marginTop: '-0.325em',
});

export const CodeBlock = ({
	children,
}: JSX.IntrinsicElements['pre']): ComponentChildren => {
	return (
		<FullBleedSymbolBlock
			ContentContainer={ContentContainer}
			InnerContainer={InnerContainer}
			OuterContainer={OuterContainer}
			symbol="{"
			SymbolContainer={SymbolContainer}
		>
			{children}
		</FullBleedSymbolBlock>
	);
};
