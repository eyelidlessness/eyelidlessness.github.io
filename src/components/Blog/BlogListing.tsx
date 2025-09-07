import type { ComponentChildren } from 'preact';
import { Fragment } from 'preact';
import { FullBleedContainer } from '../../components/FullBleed/FullBleedContainer.js';
import { Timestamp } from '../../components/Timestamp.js';
import { TopicTagList } from '../../components/Topic/TopicTagList.js';
import { css, styled, theme } from '../../lib/styles/index.js';
import { BLOG_ART_HEIGHT, BlogArt, BlogArtDefsUsage } from './BlogArt.js';
import type { BlogPostProps } from './BlogPost.js';

type BlogPostsByYear = Readonly<Record<number, readonly BlogPostProps[]>>;

const groupByYear = (posts: readonly BlogPostProps[]) =>
	posts.reduce<BlogPostsByYear>((acc, post) => {
		const year = post.stat.created.getFullYear();
		const group = acc[year] ?? [];

		return {
			...acc,
			[year]: [...group, post],
		};
	}, {});

const BlogArticleList = styled(FullBleedContainer, {
	paddingLeft: 0,

	nested: {
		'&, & > li': {
			listStyle: 'none',
		},
	},
});

const BlogArticleListItem = styled(FullBleedContainer, {
	...theme.blog.listing.item,

	minHeight: BLOG_ART_HEIGHT,
	padding: '1rem 0 1.5rem',
	position: 'relative',

	nested: {
		'&:last-child': {
			marginBottom: 0,
		},
	},
});

const BlogPageArticleLink = styled(FullBleedContainer, {
	paddingTop: `calc(${BLOG_ART_HEIGHT} - max(2.5rem, 4.16667vw))`,
	textDecoration: 'none',
});

const BlogPageArticleContent = styled(FullBleedContainer, {
	fontWeight: 'normal',
	gridColumn: '2 / -2',
	position: 'relative',
});

const BlogArticleArtContainer = styled('div', {
	gridColumn: '1 / -1',
	left: 0,
	position: 'absolute',
	top: '1rem',
	width: '100%',
});

const linkTextContentClassName = css({
	// ...theme.blog.listing.linkTextContent,

	backdropFilter: 'blur(0.25rem) saturate(5)',
	justifySelf: 'start',
	marginLeft: '-0.5rem',
	marginRight: '-0.5rem',
	WebkitBackdropFilter: 'blur(0.25rem) saturate(5)',
});

const BlogPageArticleTitle = styled('h2', {
	...theme.blog.listing.linkTitle,

	marginBottom: 0,
	marginTop: 0,
	padding: '0.2778rem 0.5rem 0.5556rem 1.4444rem',
});

const BlogPageArticleTimestamp = styled(Timestamp, {
	padding: '0 0.5rem 0.125rem 0',
});

const BlogListingTopicTagList = styled(TopicTagList, {
	gridColumn: '3 / 3',
});

const BlogListingDescription = styled('div', {
	...theme.blog.listing.description,

	marginTop: '0.5rem',
	marginBottom: '0.5rem',
});

const ReadMoreLink = styled('a', {
	fontSize: '0.875em',
});

export const BlogListingSort = {
	DATE: 'date',
} as const;

type BlogListingSorts = typeof BlogListingSort;

export type BlogListingSort = BlogListingSorts[keyof BlogListingSorts];

export const BlogListingOrder = {
	ASC: 'asc',
	DESC: 'desc',
} as const;

type BlogListingOrders = typeof BlogListingOrder;

export type BlogListingOrder = BlogListingOrders[keyof BlogListingOrders];

export interface BlogListingProps {
	readonly order?: BlogListingOrder;
	readonly posts: readonly BlogPostProps[];
	readonly sort?: BlogListingSort;
}

export const BlogListing = ({
	order = BlogListingOrder.DESC,
	posts,
	sort = BlogListingSort.DATE,
}: BlogListingProps): ComponentChildren => {
	const sorted = posts.slice().sort((a, b) => {
		if (
			order === BlogListingOrder.DESC &&
			(sort as string) === BlogListingSort.DATE
		) {
			return a.stat.created > b.stat.created ? -1 : 1;
		}

		return 0;
	});
	const grouped = groupByYear(sorted);

	return (
		<>
			{Object.entries(grouped).map(([year, groupPosts]) => (
				<Fragment key={year}>
					<BlogArticleList>
						{groupPosts.map((post) => {
							const {
								CustomArt: BlogArticleListItemArt = BlogArt,
								description,
								hash,
								path,
								stat: { created },
								title,
								topics,
							} = post;

							return (
								<BlogArticleListItem key={path}>
									<BlogPageArticleLink as={'a'} href={path}>
										<BlogArticleArtContainer>
											<BlogArticleListItemArt
												defsUsage={BlogArtDefsUsage.NONE}
												hash={hash}
												padded={true}
												renderType="listing"
												title={title}
												topics={topics}
											/>
										</BlogArticleArtContainer>

										<BlogPageArticleContent>
											<BlogPageArticleTitle
												className={linkTextContentClassName}
											>
												{title}
											</BlogPageArticleTitle>

											<BlogPageArticleTimestamp date={created} />
										</BlogPageArticleContent>
									</BlogPageArticleLink>

									<BlogListingTopicTagList link={false} topics={topics} />

									<BlogListingDescription
										className={theme.blog.listing.descriptionIdentifier}
									>
										{description}
									</BlogListingDescription>

									<p>
										<ReadMoreLink href={path}>Read more…</ReadMoreLink>
									</p>
								</BlogArticleListItem>
							);
						})}
					</BlogArticleList>
				</Fragment>
			))}
		</>
	);
};
