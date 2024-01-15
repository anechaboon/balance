const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');

module.exports = merge(baseConfig, {
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      },
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ]
});
