'use strict';

export default function(dispatch, components, params) {
  return Promise.all(
    components
      // get components with fetchData fucntion only
      .filter(component => component && typeof component.fetchData === 'function')
      // call fetchData method
      .map(component => component.fetchData(dispatch, params))
  );
}
