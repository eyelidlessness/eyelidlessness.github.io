import type { ComponentProps } from 'preact';
import type { PageMetadata } from '../lib/content/meta.js';
import { styled, StylesProvider, theme } from '../lib/styles/index.js';
import { FullBleedContainer } from './FullBleed/FullBleedContainer.js';
import { GitHubLogoDefs } from './GitHubLogo.js';
import { SiteHeader } from './Site/SiteHeader.js';

const BaseMain = styled(FullBleedContainer, {
	paddingTop: 0,
	paddingBottom: '4em',

	nested: {
		[theme.print]: {
			nested: {
				'&[data-page-id="resume"]': {
					paddingTop: 0,
					paddingBottom: 0,
				},
			},
		},
	},
});

type MainProps = ComponentProps<typeof FullBleedContainer> & {
	readonly meta: PageMetadata;

	/** @default false */
	readonly hideMenu?: boolean;
};

const mainMetaProps = (meta: PageMetadata) => {
	if (meta.pageId == null) {
		return;
	}

	return {
		'data-page-id': meta.pageId,
	};
};

export const Main = ({ meta, hideMenu, ...props }: MainProps): JSX.Element => {
	if (meta.redirect) {
		return <></>;
	}

	return (
		<StylesProvider>
			<GitHubLogoDefs />
			<SiteHeader meta={meta} hideMenu={hideMenu} />
			<BaseMain as="main" {...mainMetaProps(meta)} {...props} />
		</StylesProvider>
	);
};
