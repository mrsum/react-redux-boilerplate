'use strict';

// ................................
// ..####...##..##..######..#####..
// .##......##..##....##....##..##.
// ..####...######....##....#####..
// .....##..##..##....##....##.....
// ..####...##..##..######..##.....
// ................................

// current process path
const __root = process.cwd();

// ------------------------------
// Application config
// ------------------------------
module.exports = {
  name: 'rship-sample',
  version: '0.0.1',
  description: '',
  // webpack configs
  webpack: {
    client: __root + '/config/webpack/client.config.js',
    server: __root + '/config/webpack/server.config.js'
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
    },
    websocket: {
      host: 'localhost',
      port: '3002'
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
