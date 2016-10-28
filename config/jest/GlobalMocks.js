// ------------------------------
// Depends
// ------------------------------
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';


// ------------------------------
// Global Mock Variables
// ------------------------------
global.mockAxios = new AxiosMockAdapter(axios);
global.mockStore = configureMockStore([
  promiseMiddleware()
]);
