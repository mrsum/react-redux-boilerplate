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
    extensions: ['.js', '.jsx', '.json'],
    modules: [
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
      test: /.json$/, loader: 'json-loader'
    },

    {
      test: /\.(js|jsx)$/i,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/
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
      rules: loaders
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            require('autoprefixer')
          ]
        }
      }),
    ]
  };
};
