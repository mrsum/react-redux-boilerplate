## React Redux Boilerplate

Current Boierplate made for [rship](https://github.com/rambler-digital-solutions/rship)

# <a href='https://github.com/rambler-digital-solutions/rship'><img src='https://github.com/rambler-digital-solutions/rship/blob/master/docs/logo/logo.png?raw=true' width='319px'/></a>

**RSHIP** *(Rocket Ship)* – simple and effective tool for developing and building isimorphic web application.

Current appilcation is **CLI** (Command Line Interface) which avaliable by ```$ rship```

### Overview

In an isomorphic application, the first request made by the web browser is processed by the server while subsequent requests are processed by the client.

### Architecture an Isomorphic App
![Architecture](http://nerds.airbnb.com/wp-content/uploads/2013/11/isomorphic-client-server-mvc.png)
*by [Airbnb](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)*

### Features
- [React](https://facebook.github.io/react/) as view engine;
- [Redux](https://github.com/reactjs/redux) as state container;
- [Webpack](https://webpack.github.io/) as compiler of client and server codebase;
- [Stylus](http://stylus-lang.com/) as style pre-processor;
- [CSSModules](https://github.com/css-modules/css-modules);
- [axios](https://github.com/mzabriskie/axios) as HTTP client;
- [Koa 2.0](http://koajs.com/) as http web server;
- [Jest](https://facebook.github.io/jest/) as testing framework.

### Goals
- SEO compability;
- Similar codebase over all project;
- Performance;
- Maintainability;

More details at [airbnb](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) blog


#### Project structure
```bash
├── app
│   ├── client
│   │   └── assets                          # assets folder
│   │       └── stylesheets                 # global stylesheets
│   │           ├── app.styl
│   │           └── vendors                 # any vendors styles
│   │               └── reset.styl
│   ├── client.js
│   ├── server                              # server side entrypoint
│   │   ├── layouts                         # application layouts
│   │   │   └── Main.js
│   │   └── middlewares                     # server middlewares for any logic
│   │       ├── logger.js                   # logger middleware, enabled only for development NODE_ENV
│   │       └── router.js                   # server router handling
│   ├── server.js                           # client side entrypoint
│   └── shared                              # isomorphic code
│       ├── actions                         # data fetchers
│       │   └── tracks
│       │       ├── __tests__
│       │       │   └── actions.test.js
│       │       └── index.js
│       ├── components                      # "dumb" components folder
│       │   └── Logo
│       │       ├── __tests__
│       │       │   └── component.test.js
│       │       ├── _styles.styl
│       │       └── index.js
│       ├── constants
│       │   ├── global.js
│       │   └── tracks.js
│       ├── containers                      # smart components folder, as container
│       │   ├── Layouts
│       │   │   └── Main
│       │   │       ├── _styles.styl
│       │   │       └── index.js
│       │   └── Pages
│       │       ├── Index
│       │       │   ├── _styles.styl
│       │       │   └── index.js
│       │       └── Track
│       │           ├── _styles.styl
│       │           └── index.js
│       ├── helpers                        # some shared helpers
│       │   ├── fetchData.js
│       │   └── store.js
│       ├── reducers                       # reducers, @see redux
│       │   ├── index.js
│       │   └── tracks
│       │       ├── __tests__
│       │       │   └── reducer.test.js
│       │       └── index.js
│       └── routes.js
├── config
│   ├── jest
│   │   ├── CSSStub.js
│   │   ├── FileStub.js
│   │   └── GlobalMocks.js
│   └── webpack                           # webpack configs for rship
│       ├── client.config.js
│       └── server.config.js
├── package.json
├── ship.config.js
└── yarn.lock
```

### License
[MIT](./LICENSE.txt)
