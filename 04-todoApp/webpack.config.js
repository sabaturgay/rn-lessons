var createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = async function(env, argv) {
  var config = await createExpoWebpackConfigAsync({
    ...env,
}, argv);
      if (env.mode === 'production') {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            path: 'web-report',
          })
        );
      }
    return config;
};
