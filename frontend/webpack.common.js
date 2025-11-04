// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
// const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    // vendor: './src/js/vendor.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.geojson$/,
        type: 'json',
      },
      // {
      //   test: /\.svg$/i,
      //   issuer: /\.[jt]sx?$/,
      //   use: ['@svgr/webpack'],
      // },
    ],
  },
  plugins: []
}
