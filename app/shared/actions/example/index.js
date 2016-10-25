'use strict';

// actions types
import { REQUEST_TOPIC, REQUEST_TOPICS } from '_shared/actions/_types';


/**
 * Get all topics
 * @param  {Object} params [description]
 * @return {[type]}        [description]
 */
const getExampleList = (params = {}) => ({
  type: REQUEST_TOPICS,
  payload: fetch('http://lenta-api-proxy.rnd.rambler.ru/lists/latest', params)
    .then(res => res.json())
});

/**
 * Get topic by id
 * @param  {[type]} id     [description]
 * @param  {Object} params [description]
 * @return {[type]}        [description]
 */
const getExampleItemById = (id, params = {}) => ({
  type: REQUEST_TOPIC,
  payload: fetch('http://lenta-api-proxy.rnd.rambler.ru/' + id, {})
    .then(res => res.json())
});

export {
  getExampleList,
  getExampleItemById
};
