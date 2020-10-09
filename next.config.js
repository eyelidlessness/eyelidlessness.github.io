const withMDX = require('@next/mdx')({
  extension: /\.md$/,
});
const withPrefresh = require('@prefresh/next');

module.exports = withMDX(
  withPrefresh({
    poweredByHeader: false,
    target: 'serverless',
    trailingSlash: true,

    webpack(config, {
      dev,
      isServer,
    }) {
      const { entry: baseEntry } = config;
      const entry = dev && !isServer ?
        async () => {
          const entries = await baseEntry();
          const mainEntry = entries['main.js'];

          return {
            ...entries,
            'main.js': [
              'preact/debug',
              ...mainEntry,
            ],
          };
        } :
        baseEntry;

      const externals = isServer ?
        [
          ...config.externals,
          /^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/
        ] :
        config.externals;

      let optimization = config.optimization;

      if (
        config.optimization != null &&
        config.optimization.splitChunks != null &&
        config.optimization.splitChunks.cacheGroups != null &&
        config.optimization.splitChunks.cacheGroups.framework != null
      ) {
        const pattern = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;

        optimization = {
          ...config.optimization,
          splitChunks: {
            ...config.optimization.splitChunks,
            cacheGroups: {
              ...config.optimization.splitChunks.cacheGroups,
              commons: {
                ...config.optimization.splitChunks.cacheGroups.commons,
                name: 'framework',
              },
              preact: {
                ...config.optimization.splitChunks.cacheGroups.framework,
                test: pattern,
              },
            },
          },
        };
      }

      const resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          react:       'preact/compat',
          'react-dom': 'preact/compat',
        },
      };

      return {
        ...config,
        entry,
        externals,
        optimization,
        resolve,
      };
    }
  })
);
