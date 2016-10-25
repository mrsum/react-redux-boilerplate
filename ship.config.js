'use strict';

// current process path
const __root = process.cwd();
// get name and version
const { name, version } = require(__root + '/package.json');

// ------------------------------
// Application config
// ------------------------------
module.exports = {
  name: name,
  version: version,
  // webpack configs
  webpack: {
    client: __root + '/config/webpack/webpack.client.js',
    server: __root + '/config/webpack/webpack.server.js'
  },
  // avaliable aliases for ecosystem
  aliases: {
    _config: __root + '/ship.config.js',
    _server: __root + '/app/server',
    _client: __root + '/app/client',
    _shared: __root + '/app/shared'
  },
  // development section
  development: {
    server: {
      host: 'localhost',
      port: '3001',
      file: __root + '/app/server.js'
    },
    client: {
      host: 'localhost',
      port: '8090',
      file: __root + '/app/client.js'
    }
  },

  // production section
  production: {
    server: {
      host: 'localhost',
      port: '3000'
    }
  },

  // building section
  build: {
    path: __root + '/dist/',
    server: {
      file: 'server.js',
      path: __root + '/dist/server'
    },
    client: {
      file: 'application.js',
      path: __root + '/dist/client'
    }
  }
};