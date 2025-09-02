#!/usr/bin/env node

// @ts-check

import path                       from 'node:path';
import chalk                      from 'chalk';
import { set as setChalkContext } from 'ava/lib/chalk.js';
import { controlFlow }            from 'ava/lib/ipc-flow-control.js';
import del                        from 'del';
import estrella                   from 'estrella';
import globby                     from 'globby';

/**
 * @typedef {(expression: unknown, message?: string) => asserts expression} Assert
 */

/** @type {Assert} */
const assert = (expression, message) => {
  if (!expression) {
    throw new Error(message ?? `Assertion failed. Expected ${expression} not to be falsy`);
  }
};

/**
 * @template T
 * @param {T} value
 * @returns {NonNullable<T>}
 */
const asserted = (value) => {
  assert(value);

  return value;
};

const cwd         = process.cwd();
const entriesGlob = '{src,test}/**/*.{cjs,js,jsx,mjs,ts,tsx}';
const outDir      = path.resolve(cwd, './.test');

/** @type {estrella.BuildProcess} */
let testProcess;

// We cannot use the built-in `watch` flag, because the built-in
// watch mode doesn't handle file-system updates, and the `build`
// method overrides configuration with CLI flags. So we accept
// a `once` flag for single runs instead.
const [ args ] = estrella.cliopts.parse([
  'once',
]);

const isWatch = !args.once;
const avaCacheDir = path.join(cwd, 'node_modules', '.cache', 'ava');

/** @type {import('ava/lib/api') | null} */
let ava = null;

/** @type {import('ava/lib/reporters/default')} */
let reporter;

const chalkOptions = {
  level: chalk.level || 3,
};

setChalkContext(chalkOptions);

class TestFailure extends Error {
  constructor() {
    super('Test failure');
  }
}

const runTests = () => {
  return estrella.build({
    cwd,
    entry:     globby.sync(entriesGlob),
    minify:    false,
    outdir:    outDir,
    sourcemap: 'inline',
    tslint:    isWatch,
    watch:     false,

    async onEnd() {
      if (ava == null) {
        const { default: Ava }      = await import('ava/lib/api.js');
        const { default: Reporter } = await import('ava/lib/reporters/default.js');

        ava = new Ava({
          cacheEnabled: true,
          chalkOptions,
          concurrency: 0,
          debug: null,
          environmentVariables: {},
          experiments: {},
          extensions: [ 'cjs', 'mjs', 'js' ],
          failFast: undefined,
          failWithoutAssertions: true,
          globs: {
            extensions: [ 'cjs', 'mjs', 'js' ],
            filePatterns: [ '.test/**/*.test.js' ],
            ignoredByWatcherPatterns: [ '**/*.snap.md', 'ava.config.js', 'ava.config.cjs' ]
          },
          match: [],
          moduleTypes: { cjs: 'commonjs', mjs: 'module', js: 'module' },
          nodeArguments: [
            '--no-warnings',
          ],
          parallelRuns: null,
          projectDir: cwd,
          providers: [],
          ranFromCli: true,
          require: [],
          serial: undefined,
          snapshotDir: path.resolve(cwd, './snapshots'),
          timeout: '10s',
          updateSnapshots: undefined,
          workerArgv: undefined
        });

        reporter = new Reporter({
          durationThreshold: undefined,
          projectDir: cwd,
          reportStream: process.stdout,
          spinner: undefined,
          stdStream: process.stderr,
          watching: undefined,
          verbose: true,
        });

        ava.on('run', (plan) => {
          reporter.startRun(plan);

          if (process.env.AVA_EMIT_RUN_STATUS_OVER_IPC === 'I\'ll find a payphone baby / Take some time to talk to you' || true) {
            const bufferedSend = controlFlow(process);

            plan.status.on('stateChange', (event) => {
              bufferedSend(event);
            });
          }

          plan.status.on('stateChange', (event) => {
            if (event.type === 'interrupt') {
              reporter.endRun();
              process.exit(1);
            }
          });
        });
      }

      const runStatus = await ava.run();
      const exitCode = runStatus?.suggestExitCode({ matching: false });

      reporter.endRun();

      if (exitCode !== 0) {
        throw new TestFailure();
      }
    },
  });
};

/** @type {estrella.CancellablePromise<void>} */
let watchProcess;

const main = async () => {
  if (testProcess != null) {
    testProcess.cancel();
  }

  await Promise.all([
    del('*', {
      cwd: avaCacheDir,
    }),
    del('*', {
      cwd: outDir,
    }),
  ]);

  try {
    testProcess = runTests();

    await testProcess;
  }
  catch (error) {
    if (!(error instanceof TestFailure)) {
      console.error('Unexpected error:', error);
    }

    if (!isWatch) {
      process.exit(1);
    }
  }
  finally {
    if (isWatch) {
      testProcess.cancel();

      if (watchProcess == null) {
        watchProcess = estrella.watch([ 'src' ], {
          // Imperceptibly slower (to me), but seems to prevent double runs
          // on filesystem changes.
          latency: 150,
        }, main);
      }
    }
  }
};

main();
