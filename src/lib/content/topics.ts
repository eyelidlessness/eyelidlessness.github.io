export const DEFAULT_TOPIC = Symbol('DEFAULT_TOPIC');

type DefaultTopic = typeof DEFAULT_TOPIC;

export const Topic = {
	[DEFAULT_TOPIC]: DEFAULT_TOPIC,

	ABLEISM: 'Ableism',
	ART: 'Art',
	LEMON: 'My puppy',
	MENTAL_ILLNESS: 'Mental illness',
	NEURODIVERGENCE: 'Neurodivergence',
	PHILOSOPHY: 'Philosophy',
	POLITICS: 'Politics',
	RACISM: 'Racism',
	SEXISM: 'Sexism',
	SUBSTANCE_ABUSE: 'Substance use & abuse',
	TECHNOLOGY: 'Technology',
	TRANSPHOBIA: 'Transphobia',
} as const;

export type Topic = (typeof Topic)[keyof typeof Topic];
export type TopicKey = keyof typeof Topic;

const isStringOrSymbol = (value: unknown): value is string | symbol =>
	typeof value === 'string' || typeof value === 'symbol';

const isTopicKey = <T extends TopicLike>(
	value: T
): value is Extract<T, TopicKey> => isStringOrSymbol(value) && value in Topic;

export type TopicLike = Topic | TopicKey;

export const getTopic = (value: TopicLike): Topic =>
	isTopicKey(value) ? Topic[value] : value;

const topicKeys = Object.entries(Topic).reduce<Record<Topic, TopicKey>>(
	(acc, entry) => {
		const [key, topic] = entry;

		if (typeof key === 'string') {
			return {
				...acc,
				[topic]: key,
			};
		}

		return acc;
	},
	{} as Record<Topic, TopicKey>
);

type TopicKeyType<T extends TopicLike> = T extends symbol
	? DefaultTopic
	: Exclude<TopicKey, DefaultTopic>;

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export const getTopicKey = <T extends TopicLike>(
	value: T & TopicLike
): TopicKey =>
	isTopicKey(value) ? value : (topicKeys[value as Topic] as TopicKeyType<T>);

const hyphenate = (topicKey: string & TopicKey) =>
	topicKey.toLowerCase().replace(/\W+|_+/g, '-');

const hyphenatedTopicKeys = Object.fromEntries(
	Object.entries(topicKeys)
		.map(([topic, key]) =>
			typeof key === 'string' ? [topic, hyphenate(key)] : null
		)
		.filter((value): value is [Topic, string] => value != null)
);

export const getHyphenatedTopicKey = (value: TopicLike): string | null => {
	const topic = getTopic(value);

	if (typeof topic === 'string') {
		return hyphenatedTopicKeys[topic];
	}

	return null;
};
