'use strict'

const path = require('path')
const webpack = require('webpack')

const JS_PATH = './itcase_sphinx_theme/itcase/static/js/'

const NODE_ENV = process.env.NODE_ENV || 'development'
const staticURL = JS_PATH.substring(1) + '__build/'

const settings = {
  output: {
    publicPath: staticURL,
    path: path.join(__dirname, staticURL),
    filename: '__' + '[name].js'
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(JS_PATH + 'vendor/'),
      path.join(__dirname, 'node_modules')
    ]
  },

  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
    extensions: ['.js']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new webpack.ProvidePlugin({
      Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
      fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    })
  ],

  name: 'js',

  entry: {
    main: [
      JS_PATH + 'main.js'
    ]
  },

  externals: { jquery: '$' },

  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      include: [
        path.join(__dirname, JS_PATH.substring(2)),
        path.join(__dirname, './modules/'),
        path.join(__dirname, './static/')
      ],
      exclude: /\/(node_modules|bower_components)/
    }]
  }
}

module.exports = {
  MAIN: {
    settings: settings,
    directory: JS_PATH
  }
}
