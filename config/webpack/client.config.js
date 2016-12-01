'use strict';

// ======================
// Depends
// ======================
const autoprefixer      = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * SHIP.webpack.client
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
module.exports = config => {
  // get variables from config
  const { dir, cwd, env } = config;

  // get webpack from ship
  const webpack = require(`${cwd}/node_modules/webpack`);

  // webpack resolvers
  const resolve = {
    extensions: ['', '.js', '.jsx', 'json'],
    modulesDirectories: [
      `${dir}/node_modules/`
    ],
    alias: config.aliases
  };

  // webpack loaders
  const loaders = [

    {
      test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)$/i,
      loaders: [`file?context=${dir}/app&name=assets/static/[ext]/[name].[hash].[ext]`]
    },

    {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract(
        'isomorphic-style-loader',
        'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]--[hash:base64:5]!postcss-loader!stylus-loader'
      )
    },

    {
      test: /.json$/, loader: 'json'
    },

    {
      test: /\.(js|jsx)$/i,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/
    }
  ];

  return {
    name: 'ship-client',
    entry: {
      app: [
        config.development.client.file
      ]
    },
    target: 'web',
    output: {
      path: config.build.client.path,
      filename: config.build.client.file,
      chunkFilename: 'assets/js/[name].bundle.[chunkhash].js',
      publicPath: '/assets/'
    },
    resolve: resolve,
    devtool: env === 'production' ? 'source-map' : 'source-map',
    module: {
      loaders: loaders
    },

    postcss: function() {
      return [autoprefixer];
    },

    plugins: [
      new ExtractTextPlugin('assets/css/style.css', { allChunks: true }),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true,
      })
    ]
  };
};
