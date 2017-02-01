
/**
 * Create websocket connection for livereload
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
const createConnection = config => {
  // set up webspcket connection
  const connection = new WebSocket(
    `ws://${config.host}:${config.port}/rship`
  );

  /**
   * Open connection to WS server
   * @return {[type]} [description]
   */
  connection.onopen = function() {
    console.log('🚀 RSHIP: connected');
  };

  /**
   * Error handling
   * @param  {[type]} error [description]
   * @return {[type]}       [description]
   */
  connection.onerror = function() {
    console.info('🚀 RSHIP: connection established, try to reconnect each 1 sec');
  };


  /**
   * Connection on close
   * @return {[type]} [description]
   */
  connection.onclose = function() {
    setTimeout(() => createConnection(config), 1000);
  };

  /**
   * Get message
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  connection.onmessage = function(event) {
    // error log
    var logErrror = function(err) {
      console.error(err);
    };

    var data = JSON.parse(event.data);
    switch (data.recompile) {
      case false:
        data.errors.length > 0
          ? data.errors.forEach(err => logErrror(err))
          : null;
        data.warnings.length > 0
          ? data.warnings.forEach(warn => logErrror(warn))
          : null;
        break;

      default:
        data.side === 'client'
          ? document.location.reload()
          : console.log('🚀 RSHIP: server-side code has been updated');
    }
  };
};

export default createConnection;
