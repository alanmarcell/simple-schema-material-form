const path = require('path');

module.exports = {
  styleguideDir: './docs',
  styleguideComponents: {
    // Wrapper: path.join(__dirname, 'styleguide/Wrapper'),
    // ExamplesRenderer: path.join(__dirname, 'styleguide/ExamplesRenderer'),
    // Preview: path.join(__dirname, 'styleguide/Preview'),

  },
  skipComponentsWithoutExample: true,
  webpackConfig: Object.assign({}, require('./config/webpack.config.dev'), {
    /* Custom config options */
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
        },
        {
          test: /\.svg$/,
          loader: 'url-loader',
        },
      ],
    },
  }),
};
