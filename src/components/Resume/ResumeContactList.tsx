import type { ComponentChildren } from 'preact';
import { styled, theme } from '../../lib/styles/index.js';

const BaseResumeContactList = styled('ul', {
	display: 'flex',
	fontSize: '0.88889em',
	listStyle: 'none',
	margin: 0,
	padding: 0,
});

const ResumeContactListItem = styled('li', {
	margin: '0 0.5rem 0 0',
	padding: 0,

	nested: {
		'&:last-child': {
			marginRight: 0,
		},
	},
});

const ResumeContactListLink = styled('a', {
	...theme.resume.contactList.link,

	textDecoration: 'none',
});

interface ResumeContactListProps {
	readonly email: string;
	readonly website?: string;
}

export const ResumeContactList = ({
	email,
	website,
}: ResumeContactListProps): ComponentChildren => (
	<BaseResumeContactList>
		<ResumeContactListItem>
			<ResumeContactListLink href={`mailto:${email}`}>
				{email}
			</ResumeContactListLink>
		</ResumeContactListItem>

		{website == null ? null : (
			<ResumeContactListItem>
				<ResumeContactListLink href={website}>
					{website.replace(/^https:\/\/|\//g, '')}
				</ResumeContactListLink>
			</ResumeContactListItem>
		)}
	</BaseResumeContactList>
);
