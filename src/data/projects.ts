import { FRESHResumeProject } from '@/schemas/FRESH.js';

export enum ProjectCategory {
  OPEN_SOURCE   = 'Open source',
  PUBLIC_ACCESS = 'Public access',
}

export enum ProjectRole {
  CONTRIBUTOR = 'Contributor',
  CREATOR     = 'Creator',
  DEVELOPER   = 'Developer',
}

export type ProjectTimestamp = `${number}${number}${number}${number}-${number}${number}`;

interface TimestampedProject {
  readonly start: ProjectTimestamp;
  readonly end?: ProjectTimestamp;
}

const NOW_MILLIS = Date.now();

const projectTimestampMillis = (timestamp?: ProjectTimestamp): number => {
  if (timestamp == null) {
    return NOW_MILLIS;
  }

  return new Date(timestamp).getTime();
}

interface ValidProject extends FRESHResumeProject, TimestampedProject {
  readonly start: ProjectTimestamp;
  readonly end?: ProjectTimestamp;
}

const sortProjects = <T extends TimestampedProject>(projects: readonly T[]): readonly T[] => {
  return projects.slice().sort((a, b) => {
    const endA = projectTimestampMillis(a.end);
    const endB = projectTimestampMillis(b.end);

    if (endA > endB) {
      return -1;
    }

    if (endB > endA) {
      return 1;
    }

    const startA = projectTimestampMillis(a.start);
    const startB = projectTimestampMillis(b.start);

    if (startA > startB) {
      return -1;
    }

    if (startB > startA) {
      return 1;
    }

    return 0;
  })
}

const validateProjects = <T extends ValidProject>(
  value: readonly T[]
): readonly T[] => sortProjects(value);

export const projects = validateProjects([
  {
    title: '@getodk/xforms-engine',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      Client-agnostic, reactive runtime for
      [ODK XForms](https://getodk.github.io/xforms-spec/)
    `,

    repo: 'https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xforms-engine',
    role: ProjectRole.CREATOR,

    start: '2023-10',
    end: '2025-04',
  },

  {
    title: '@getodk/xpath',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      Extensible XPath 1.0 interpreter, supporting
      [ODK XForms](https://getodk.github.io/xforms-spec/#xpath-functions)
      extensions, arbitrary DOM implementations
    `,

    repo: 'https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/xpath',
    role: ProjectRole.CREATOR,

    start: '2023-10',
    end: '2025-04',
  },

  {
    title: '@getodk/tree-sitter-xpath',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      [tree-sitter](https://tree-sitter.github.io/tree-sitter/) parser for
      XPath 1.0 syntax
    `,

    repo: 'https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/tree-sitter-xpath',
    role: ProjectRole.CREATOR,

    start: '2023-10',
    end: '2025-04',
  },

  {
    title: '@getodk/web-forms',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      [ODK Web Forms](https://github.com/getodk/web-forms) UI client
    `,

    repo: 'https://github.com/getodk/web-forms/tree/ab3be86e457250f4bbb58ff9857695a9f9d1c789/packages/web-forms',
    role: ProjectRole.CONTRIBUTOR,

    start: '2024-03',
    end: '2025-04',
  },

  {
    title:    'Astro',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "Build faster websites with less client-side Javascript"
    `,

    summary: `
      Collaborate with core contributors to add support for rendering
      [SolidJS](https://www.solidjs.com/) components.
    `,

    repo: 'https://github.com/snowpackjs/astro',
    role: ProjectRole.CONTRIBUTOR,

    start: '2021-07',
    end: '2021-07',
  },

  {
    title:    'Enketo',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "Web forms evolved. Deploy and conduct surveys that work without a
      connection, on any device."
    `,

    summary: `
      Long-term maintenance.
    `,

    repo: 'https://github.com/enketo',
    role: ProjectRole.DEVELOPER,

    start: '2021-04',
    end: '2023-10',
  },

  // {
  //   title:    'eyelidlessness.github.io',
  //   category: ProjectCategory.PUBLIC_ACCESS,

  //   description: `
  //     My personal website, résumé and tech blog.
  //   `,

  //   // summary: `
  //   //   Built with [Preact][1], [Microsite][2] and [Fela][3].

  //   //   [1]: https://preactjs.com/
  //   //   [2]: https://github.com/natemoo-re/microsite
  //   //   [3]: https://fela.js.org/
  //   // `,

  //   repo: 'https://github.com/eyelidlessness/eyelidlessness.github.io',
  //   role: ProjectRole.CREATOR,

  //   start: '2020-10',
  // },

  {
    title:    'Microsite',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "A fast, opinionated static site generator powered by Snowpack.
      Build simple static sites with fool-proof performance by leveraging
      automatic partial hydration."
    `,

    summary: `
      Several bug fixes and feature enhancements. Microsite powers my site, thanks [@natemoo-re][1]!

      [1]: https://github.com/natemoo-re
    `,

    repo: 'https://github.com/natemoo-re/microsite',
    role: ProjectRole.CONTRIBUTOR,

    start: '2021-01',
    end: '2021-05',
  },

  {
    title:    'HNDarkMode',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      Dark mode web extension for Hacker News.
    `,

    summary: `
      Quick weekend project, made by request when I saw that it had been
      left up to the Hacker News community.
    `,

    repo: 'https://github.com/eyelidlessness/HNDarkMode',
    role: ProjectRole.CREATOR,

    start: '2021-01',
    end:   '2021-01',
  },

  {
    title:    'typescript-eslint',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "An ESLint plugin which provides lint rules for TypeScript codebases."
    `,

    summary: `
      Introduced the \`ignoreInferredTypes\` option for the
      \`prefer-readonly-parameter-types\` rule to improve DX when the rule
      is used with third-party libraries.
    `,

    repo: 'https://github.com/typescript-eslint/typescript-eslint',
    role: ProjectRole.CONTRIBUTOR,

    start: '2020-10',
    end:   '2020-10',
  },

  {
    title:    'mdx',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "Markdown for the component era"
    `,

    summary: `
      Improved TypeScript support.
    `,

    repo: 'https://github.com/mdx-js/mdx',
    role: ProjectRole.CONTRIBUTOR,

    start: '2020-02',
    end:   '2020-02',
  },

  {
    title:    'FAST',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "FAST is a collection of technologies built on Web Components and
      modern Web Standards, designed to help you efficiently tackle some
      of the most common challenges in website and application design
      and development."
    `,

    summary: `
      Improved documentation.
    `,

    repo: 'https://github.com/microsoft/fast',
    role: ProjectRole.CONTRIBUTOR,

    start: '2018-08',
    end:   '2018-08',
  },

  {
    title:    'Razzle',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "Build modern React applications. From zero to production."
    `,

    summary: `
      Corrected documentation in TypeScript example.
    `,

    repo: 'https://github.com/jaredpalmer/razzle',
    role: ProjectRole.CONTRIBUTOR,

    start: '2017-08',
    end:   '2017-08',
  },

  {
    title:    'CLJSJS',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "CLJSJS is an effort to package Javascript libraries to be able to
      use them from within ClojureScript."
    `,

    summary: `
      Introduced support for [big.js][1] in ClojureScript, and updated
      support for [rrule.js][2].

      [1]: https://github.com/MikeMcl/big.js/
      [2]: https://github.com/jkbrzt/rrule
    `,

    repo: 'https://github.com/cljsjs/packages',
    role: ProjectRole.CONTRIBUTOR,

    start: '2016-06',
    end:   '2017-05',
  },

  {
    title:    'Espalier',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      Placeholder style rules for [Garden][1].

      [1]: https://github.com/noprompt/garden
    `,

    summary: `
      Created and open sourced at Reup to optimize redundant CSS rules
      as a simple DSL with a great DX.
    `,

    repo: 'https://github.com/reup-distribution/espalier',
    role: ProjectRole.CREATOR,

    start: '2015-12',
    end:   '2017-02',
  },

  {
    title:    'pre-commit-mypy',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "Mirror of mypy package for pre-commit"
    `,

    summary: `
      Expanded version support.
    `,

    repo: 'https://github.com/d1ff/pre-commit-mypy',
    role: ProjectRole.CONTRIBUTOR,

    start: '2016-10',
    end:   '2016-10',
  },

  {
    title:    'cljs-rest',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      A ClojureScript REST client, suitable for AJAX interaction with
      RESTful APIs.
    `,

    summary: `
      Created and open sourced at Reup to simplify integration between
      ClojureScript websites & web apps and backend REST APIs.
    `,

    repo: 'https://github.com/reup-distribution/cljs-rest',
    role: ProjectRole.CREATOR,

    start: '2016-03',
    end:   '2016-07',
  },

  {
    title:    'cljs-rrule',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      A ClojureScript wrapper for [rrule.js][1], with common Clojure
      semantics for \`RRule\` and \`RRuleSet\`, conforming to [RFC 2445][2]
      ([with some specific exceptions][3]).

      [1]: https://github.com/jkbrzt/rrule
      [2]: https://tools.ietf.org/html/rfc2445
      [3]: https://github.com/jkbrzt/rrule#differences-from-icalendar-rfc
    `,

    summary: `
      Created and open sourced at Reup for generating standardized rules
      for recurring dates & times.
    `,

    repo: 'https://github.com/reup-distribution/cljs-rrule',
    role: ProjectRole.CREATOR,

    start: '2016-06',
    end:   '2016-07',
  },

  {
    title:    'speclj',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "It's a TDD/BDD framework for [Clojure][1] and [Clojurescript][2],
      based on [RSpec][3]."

      [1]: https://clojure.org/
      [2]: https://clojurescript.org/
      [3]: https://rspec.info/
    `,

    summary: `
      Introduced support for [\`.cljc\`][1] modules. Improved reliability
      of determining whether \`.cljc\` tests are being run in Clojure or
      ClojureScript. Fixed a bug when testing whether a value is a given
      throwable type.

      [1]: https://github.com/clojure/clojurescript/wiki/Using-cljc
    `,

    repo: 'https://github.com/slagyr/speclj',
    role: ProjectRole.CONTRIBUTOR,

    start: '2016-04',
    end:   '2016-04',
  },

  {
    title:    'alter-cljs',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      A ClojureScript implementation of \`alter-var-root\`.
    `,

    summary: `
      Created to provide the same behavior as [Clojure][1] on the JVM.

      [1]: https://clojuredocs.org/clojure.core/alter-var-root
    `,

    repo: 'https://github.com/eyelidlessness/alter-cljs',
    role: ProjectRole.CREATOR,

    start: '2016-01',
    end:   '2016-01',
  },

  {
    title:    'Figwheel',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "Figwheel builds your ClojureScript code and hot loads it into the
      browser as you are coding!"
    `,

    summary: `
      Added support for the \`:notify-command\` configuration allowing
      projects to run arbitrary commands once a rebuild is complete.
    `,

    repo: 'https://github.com/bhauman/lein-figwheel',
    role: ProjectRole.CONTRIBUTOR,

    start: '2015-12',
    end:   '2015-12',
  },

  {
    title:    'Accountant',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "Accountant is a ClojureScript library to make navigation in
      single-page applications simple."
    `,

    summary: `
      Fixed a pair of bugs where query parameters on a link were not
      set when the link was clicked, and where a previous location
      state's query parameters were not removed when navigating to
      another link without those query parameters.
    `,

    repo: 'https://github.com/venantius/accountant',
    role: ProjectRole.CONTRIBUTOR,

    start: '2015-12',
    end:   '2016-12',
  },

  {
    title:    'GitHub Issues Dump',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      Utility for exporting all of an organization's GitHub issues and
      comments.
    `,

    summary: `
      Created and open sourced at ClipCard to easily produce a full
      archive of an organization's GitHub issues activity.
    `,

    repo: 'https://github.com/ClipCard/github_issues_dump',
    role: ProjectRole.CREATOR,

    start: '2015-08',
    end:   '2015-08',
  },

  {
    title:    'Bundle Tracker',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      Utility for cataloging and identifying macOS "bundle" directory
      types which are commonly treated as files.
    `,

    summary: `
      Created and open sourced at ClipCard for use in several API
      integrations where macOS bundle directories were expected to be
      represented as files.
    `,

    repo: 'https://github.com/ClipCard/bundle_tracker',
    role: ProjectRole.CREATOR,

    start: '2015-01',
    end:   '2015-05',
  },

  {
    title:    'quick-clojure',
    category: ProjectCategory.OPEN_SOURCE,

    description: `
      "Run clojure scripts and lein commands quickly using a persistent
      nREPL session."
    `,

    summary: `
      Fixed a bug where the REPL's port was reported incorrectly.
    `,

    repo: 'https://github.com/benwbooth/quick-clojure',
    role: ProjectRole.CONTRIBUTOR,

    start: '2015-01',
    end:   '2015-01',
  },
]);

export type Projects = typeof projects;

export type ProjectData = Extract<Projects[number], FRESHResumeProject>;
