const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'axios',
  'bulma/css/bulma.css',
  'classnames',
  'lodash',
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
    vendor: VENDOR_LIBS,
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
              camelCase: true,
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

  resolve: {
    alias: {
      ['bulma.css$']: 'bulma/css/bulma.css',
    }
  },

  plugins: [
    // Vendor Libs Caching
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity,
    }),
    // Webpack Runtime Caching
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest'],
    }),
    // Output index.html w/ refs to built chunks
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
