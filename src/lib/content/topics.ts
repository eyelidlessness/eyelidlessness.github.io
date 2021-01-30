// import type ChildProcess from 'child_process';
// import type Crypto       from 'crypto';
// import type FS           from 'fs'
// import type Glob         from 'glob';
// import type Path         from 'path';
// import type Util         from 'util';
// import { sort }          from '@/lib/collections';
// import {
//   ExtractedMDXData,
//   extractMDXData,
// } from './mdx';

// const cwd = process.cwd();

export const DEFAULT_TOPIC = Symbol('DEFAULT_TOPIC');

// type DefaultTopic = typeof DEFAULT_TOPIC;

export const Topic = {
  [DEFAULT_TOPIC]: DEFAULT_TOPIC,

  ABLEISM:         'Ableism',
  ARTS_CRAFTS:     'Art, music & craft',
  LEMON:           'My puppy!',
  MENTAL_ILLNESS:  'Mental illness',
  NEURODIVERGENCE: 'Neurodivergence',
  PHILOSOPHY:      'Philosophy',
  POLITICS:        'Politics',
  RACISM:          'Racism',
  SEXISM:          'Sexism',
  SUBSTANCE_ABUSE: 'Substance use & abuse',
  TECHNOLOGY:      'Technology',
  TRANSPHOBIA:     'Transphobia',
} as const;

export type Topic = typeof Topic[keyof typeof Topic];

export type TopicKey = keyof typeof Topic;

// const isStringOrSymbol = (value: unknown): value is string | symbol => (
//   typeof value === 'string' ||
//   typeof value === 'symbol'
// );

// const isTopicKey = <T extends TopicLike>(value: T): value is Extract<T, TopicKey> => (
//   isStringOrSymbol(value) &&
//   value in Topic
// );

// const topicValues = new Set(Object.values(Topic));

// const isTopicValue = (value: unknown): value is Topic => (
//   isStringOrSymbol(value) &&
//   topicValues.has(value)
// );

// export type TopicLike =
//   | Topic
//   | TopicKey;

// const isTopicLike = (value: any): value is TopicLike => (
//   isTopicKey(value) ||
//   isTopicValue(value)
// );

// export const getTopic = (value: TopicLike) => (
//   isTopicKey(value)
//     ? Topic[value]
//   : value
// );

// const getTopics = ({ data }: ExtractedMDXData) => {
//   const metadataTopics = data.topics;

//   if (Array.isArray(metadataTopics)) {
//     return metadataTopics.filter(isTopicLike).map(getTopic);
//   }

//   return [];
// };

// const topicKeys = Object
//   .entries(Topic)
//   .reduce<Record<Topic, TopicKey>>((acc, entry) => {
//     const [ key, topic ] = entry;

//     if (typeof key === 'string') {
//       return {
//         ...acc,
//         [topic]: key,
//       };
//     }

//     return acc;
//   }, {} as Record<Topic, TopicKey>);

// type TopicKeyType<T extends TopicLike> =
//   T extends symbol
//     ? DefaultTopic
//   : Exclude<TopicKey, DefaultTopic>;

// export const getTopicKey = <T extends TopicLike>(
//   value: T & TopicLike
// ) => (
//   isTopicKey(value)
//     ? value
//   : topicKeys[value] as TopicKeyType<T>
// );

// const hyphenate = (topicKey: string & TopicKey) => (
//   topicKey.toLowerCase().replace(/\W+|_+/g, '-')
// );

// const hyphenatedTopicKeys = Object.fromEntries(
//   Object.entries(topicKeys)
//     .map(([ topic, key ]) => (
//       typeof key === 'string'
//         ? [ topic, hyphenate(key) ]
//       : null
//     ))
//     .filter((value): value is [ Topic, string ] => value != null)
// );

// export const getHyphenatedTopicKey = (value: TopicLike) => {
//   const topic = getTopic(value);

//   if (typeof topic === 'string') {
//     return hyphenatedTopicKeys[topic];
//   }
// };

// enum GitFilter {
//   ALL   = '',
//   FIRST = '--diff-filter=A',
// }

// enum GitFormat {
//   HASH     = '%H',
//   ISO_DATE = '%aI',
// }

// type FormattedGitLogData<T extends GitFilter> =
//   T extends GitFilter.FIRST
//     ? string
//   : string[];

// const getFormattedGitLogData = <T extends GitFilter = GitFilter.FIRST>(
//   childProcess: typeof ChildProcess,
//   path:         string,
//   format:       GitFormat,
//   filter:       T = GitFilter.FIRST as T
// ): FormattedGitLogData<T> | null => {
//   const {
//     error,
//     stdout,
//   } = childProcess.spawnSync('git', [
//     'log',
//     filter,
//     `--format="${format}"`,
//     '--',
//     path
//   ]);

//   if (error) {
//     throw error;
//   }

//   const output = stdout.toString().trim();

//   if (output === '') {
//     return null;
//   }

//   if (filter === GitFilter.FIRST) {
//     return output as FormattedGitLogData<T>;
//   }

//   return output.split('\n') as FormattedGitLogData<T>;
// };

// const getInitialCommitDate = (
//   childProcess: typeof ChildProcess,
//   path:         string
// ): Date | null => {
//   const logData = getFormattedGitLogData(childProcess, path, GitFormat.ISO_DATE);
//   const date    = new Date(logData ?? '');

//   if (isNaN(date.getTime())) {
//     return null;
//   }

//   return date;
// };

// interface GitWithFallbackDependencies {
//   readonly childProcess: typeof ChildProcess;
//   readonly crypto:       typeof Crypto;
//   readonly fs:           typeof FS;
// }

// interface GitWithFallbackOptions {
//   readonly dependencies: GitWithFallbackDependencies;
//   readonly path:         string;
// }

// interface BlogPostDate {
//   readonly iso:   string;
//   readonly month: number;
//   readonly year:  number;
// }

// const getBlogPostDate = (options: GitWithFallbackOptions): BlogPostDate => {
//   const {
//     dependencies,
//     path,
//   } = options;
//   const {
//     childProcess,
//     fs,
//   } = dependencies;

//   const pathStat = fs.statSync(path, {
//     bigint:         false,
//     throwIfNoEntry: true,
//   });

//   if (!pathStat.isFile()) {
//     throw new Error(`File doesn't exist: ${path}`);
//   }

//   const date = (
//     getInitialCommitDate(childProcess, path) ??
//     pathStat.ctime
//   );

//   return {
//     iso:   date.toJSON(),
//     month: date.getMonth() + 1,
//     year:  date.getFullYear(),
//   };
// };

// const getSHA1Hash = (options: GitWithFallbackOptions) => {
//   const {
//     dependencies,
//     path,
//   } = options;

//   const fileContents = dependencies.fs.readFileSync(path).toString();

//   let sha1Hash = dependencies.crypto.createHash('sha1');

//   sha1Hash.update(fileContents);

//   return sha1Hash.digest('hex');
// };

// const getBlogPostHash = (options: GitWithFallbackOptions) => {
//   const {
//     dependencies,
//     path,
//   } = options;
//   const { childProcess } = dependencies;

//   return (
//     getFormattedGitLogData(childProcess, path, GitFormat.HASH) ??
//     getSHA1Hash(options)
//   );
// };

// const getBlogPostTitle = (mdxData: ExtractedMDXData, modulePath: string) => {
//   const {
//     content,
//     data: metadata,
//   } = mdxData;
//   const {
//     title: metadataTitle,
//   } = metadata;

//   if (typeof metadataTitle === 'string') {
//     return metadataTitle;
//   }

//   const matches = content.match(/<h1.*?>((.|\n)*?)<\/h1>/);

//   if (matches == null || matches[1] == null) {
//     throw new Error(`Can't find title for post: ${modulePath}`);
//   }

//   return matches[1];
// };

// interface GetBlogPostListDataDependencies extends GitWithFallbackDependencies {
//   readonly fs:   typeof FS;
//   readonly glob: typeof Glob;
//   readonly path: typeof Path;
//   readonly util: typeof Util;
// }

// const blogPostPathDataPattern = (
//   /\/(\d{4})\/([1-9]|1[0-2])\/(.*?)\.(jsx|mdx|tsx)$/
// );

// interface GetBlogPostListDataOptions {
//   readonly dependencies: GetBlogPostListDataDependencies;
// }

// export interface BlogPostMetadata {
//   readonly date:    BlogPostDate;
//   readonly ext:     string;
//   readonly hash:    string;
//   readonly mdxData: ExtractedMDXData;

//   readonly path: {
//     readonly absolute: string;
//     readonly href:     string;
//     readonly module:   string;
//   };

//   readonly slug:   string;
//   readonly title:  string;
//   readonly topics: readonly Topic[];
// }

// interface GetBlogPostMetadataOptions extends GetBlogPostListDataOptions {
//   readonly path: string;
// }

// export const getBlogPostMetadata = async (
//   options: GetBlogPostMetadataOptions
// ) => {
//   const {
//     dependencies,
//     path: blogPostPath,
//   } = options;
//   const pathDataMatches = blogPostPath.match(blogPostPathDataPattern) ?? [];

//   const [
//     ,
//     pathYear  = '',
//     pathMonth = '',
//     slug      = '',
//     ext       = '',
//   ] = pathDataMatches;
//   const gitWithFSFallbackOptions = {
//     dependencies: options.dependencies,
//     path:         blogPostPath,
//   };

//   const date = getBlogPostDate(gitWithFSFallbackOptions);

//   if (pathMonth === '' || pathYear === '' || slug === '') {
//     throw new Error(`Unexpected blog post path: ${blogPostPath}`);
//   }

//   const hash = getBlogPostHash(gitWithFSFallbackOptions);
//   const mdxData = extractMDXData({
//     dependencies,
//     path: blogPostPath,
//   });

//   const hrefPath   = `/blog/${pathYear}/${pathMonth}/${slug}/`;
//   const modulePath = `~content/blog/${pathYear}/${pathMonth}/${slug}.${ext}`;
//   const topics     = getTopics(mdxData);

//   return {
//     date,
//     ext,
//     // exports: blogPostExports,
//     hash,
//     mdxData,

//     path: {
//       absolute: blogPostPath,
//       href:     hrefPath,
//       module:   modulePath,
//     },

//     slug,
//     title: getBlogPostTitle(mdxData, modulePath),
//     topics,
//   };
// };

// export const getBlogPostListData = async (
//   options: GetBlogPostListDataOptions
// ) => {
//   const { dependencies } = options;
//   const {
//     glob,
//     path,
//     util,
//   } = dependencies;

//   const contentDir          = path.join(cwd, './src/content');
//   const blogEntriesBasePath = path.join(contentDir, './blog');
//   const blogEntriesGlob     = `${blogEntriesBasePath}/*/*/*.{jsx,mdx,tsx}`;

//   const listEntries         = util.promisify(glob);
//   const blogPostPaths       = await listEntries(blogEntriesGlob);

//   const dataPromises = blogPostPaths.map((path) => (
//     getBlogPostMetadata({
//       ...options,
//       path,
//     })
//   ));

//   const results = await Promise.all(dataPromises);

//   return sort(results, (a, b) => (
//     a.date > b.date
//       ? -1
//     : 1
//   ));
// };

// // export const getBlogPostListData = async () => {
// //   if (process.browser) {
// //     return [];
// //   }

// //   const {
// //     default: glob,
// //   } = await import('glob');
// //   const path = await import('path');
// //   const util = await import('util');

// //   const listEntries = util.promisify(glob);
// //   const pagesDir = path.join(process.cwd(), './src/pages');
// //   const blogEntriesBasePath = path.join(pagesDir, './blog');
// //   const blogEntriesGlob = `${blogEntriesBasePath}/**/*.(jsx|mdx|tsx)`;
// //   const blogPostPathDataPattern = (
// //     /(?<=\/)(?<year>\d{4})\/(?<month>[1-9]|1[0-2])\/(?<slug>.*?)\.(jsx|mdx|tsx)$/
// //   );

// //   const blogPostPaths = await listEntries(blogEntriesGlob);

// //   return blogPostPaths.map((blogPostPath) => {
// //     const pathDataMatches = blogPostPath.match(blogPostPathDataPattern) ?? {
// //       groups: {},
// //     };

// //     const {
// //       month = '',
// //       slug  = '',
// //       year  = '',
// //     } = pathDataMatches.groups ?? {};

// //     if (month === '' || slug === '' || year === '') {
// //       throw new Error(`Unexpected blog post path: ${blogPostPath}`);
// //     }

// //     return {
// //       month: Number(month),
// //       slug,
// //       year:  Number(year),
// //     };
// //   });
// // };

// // export type BlogPostListData = PromiseType<
// //   ReturnType<typeof getBlogPostListData>
// // >;

// // interface BlogPostDates {
// //   [key: number]: Set<number>;
// // }

// // export const getBlogPostDates = async () => {
// //   const blogPostListData = await getBlogPostListData();

// //   return blogPostListData.reduce<BlogPostDates>((acc, data) => {
// //     const {
// //       month,
// //       year,
// //     } = data;

// //     let accYear = acc[year] ?? new Set<number>();

// //     accYear.add(month);

// //     return {
// //       ...acc,
// //       [year]: accYear,
// //     };
// //   }, {});
// // };
