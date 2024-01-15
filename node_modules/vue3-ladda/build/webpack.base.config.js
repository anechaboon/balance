const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development';

const extractOrInjectStyles = env !== 'production'
    ? 'vue-style-loader'
    : MiniCssExtractPlugin.loader;

module.exports = {
  mode: env,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: [
          extractOrInjectStyles,
          'css-loader',
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'vue-ladda.css',
      }),
  ],
};
