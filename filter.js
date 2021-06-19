'use strict';

const { _forEach } = require('./forEach');

module.exports._filter = function _filter(array, callback) {
  const result = [];

  _forEach(array, (element, index) => {
    if (callback(element, index, array)) {
      result.push(element);
    }
  });

  return result;
}
