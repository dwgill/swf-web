const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'axios',
  'bulma',
  'lodash',
  'normalize.css',
  'package.json',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-dom',
  'redux',
  'redux-form',
  'redux-thunk',
];

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src/index.js'),
    // vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      { // babel
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      { // CSS
        test: /\.css$/,
        use: [
          { // style-loader
            loader: 'style-loader'
          },
          { // css-loader
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              importLoaders: 1,
            }
          },
          { // postcss
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')(),
                require('postcss-icss-values')(),
              ]
            }
          }
        ],
      },
      { // images
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
      // names: ['vendor', 'manifest'],
    // }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 3000,
  }
};
