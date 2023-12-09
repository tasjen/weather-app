/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  /* uncomment "devServer" field if you're using webpack dev server */
  devServer: {
    static: './src', // set to './dist' if you don't use html webpack plugin
  },
});
