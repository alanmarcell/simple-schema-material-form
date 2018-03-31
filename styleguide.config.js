module.exports = {
  styleguideDir: './docs',
  webpackConfig: Object.assign({}, require('./config/webpack.config.dev'), {
    /* Custom config options */
  }),
};
