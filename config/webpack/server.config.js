'use strict';

/**
 * SHIP.Webpack.Server
 * @param  {object} config
 * @return {object}
 */
module.exports = config => {
  // exportable modules
  let nodeModules = {};
  // get variables from config
  const { dir, cwd, env } = config;

  // get webpack from ship
  const webpack = require(`${cwd}/node_modules/webpack`);

  // get dependencies
  const { dependencies } = require(`${dir}/package.json`);

  // webpack resolvers
  const resolve = {
    extensions: ['', '.js', '.jsx', '.styl', '.json'],
    modulesDirectories: [
      'node_modules/'
    ],
    alias: config.aliases
  };

  // webpack loaders
  const loaders = [

    {
      test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg|css)$/i,
      loader: 'ignore-loader'
    },

    {
      test: /.styl$/,
      loaders: [
        'isomorphic-style-loader',
        'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]--[hash:base64:5]',
        'postcss-loader',
        'stylus-loader'
      ]
    },

    {
      test: /.json$/, loader: 'json'
    },

    {
      test: /\.(js|jsx)$/i,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: [
          'babel-preset-react',
          'babel-preset-es2015',
          'babel-preset-stage-0'
        ],
        plugins: [
          'babel-plugin-transform-runtime'
        ],
        ignore: ['node_modules', 'bower_components']
      }
    }
  ];

  // prepare dependencies modules
  Object
    .keys(dependencies)
    .forEach(mod => {
      nodeModules[mod] = `commonjs ${mod}`;
    });

  return {
    name: 'ship-server',
    entry: config.development.server.file,
    target: 'node',
    output: {
      path: config.build.server.path,
      filename: config.build.server.file,
      libraryTarget: 'commonjs2'
    },
    resolve: resolve,
    devtool: env === 'production' ? 'source-map' : 'eval',
    externals: nodeModules,
    module: {
      loaders: loaders
    },
    plugins: [
      new webpack.ProvidePlugin({
        fetch: 'isomorphic-fetch'
      })
    ]
  };
};
