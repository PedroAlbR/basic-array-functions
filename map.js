'use strict';

const { _forEach } = require('./forEach');

module.exports._map = function _map(array, callback) {
  const result = [];

  _forEach(array, (element, index) => {
    result.push(callback(element, index, array));
  });

  return result;
}
