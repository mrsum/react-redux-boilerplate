// ------------------------------
// Depends
// ------------------------------
import config from '_config';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
  };

  render() {
    const {component, store} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';

    const jsUrl = process.env.NODE_ENV === 'development'
      ? `http://${config.development.client.host}:${config.development.client.port}/${config.build.client.file}`
      : `/static/${config.build.client.file}`;

    const cssUrl = process.env.NODE_ENV === 'development'
      ? `http://${config.development.client.host}:${config.development.client.port}/assets/css/style.css`
      : '/static/assets/css/style.css';

    return (
      <html lang='en-us'>
        <head>
          <meta charSet='utf-8'/>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1'/>
          <meta name='referrer' content='unsafe-url'/>
          <meta
            name='viewport'
            content='initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            />
          <link rel='stylesheet' href={cssUrl} />
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: content}}/>
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${serialize(store.getState())}`}}/>
          <script
            src={jsUrl}
            charSet='UTF-8'
            async='async'
          />

          <script dangerouslySetInnerHTML={{__html: `window.__ENV__ = '${process.env.NODE_ENV || 'dev'}'`}}/>
        </body>
      </html>
    );
  }
}

export default Html;
