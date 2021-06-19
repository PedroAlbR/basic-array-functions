'use strict';

const { _for } = require('./utils');

module.exports._forEach = function _forEach(array, callback) {
  _for(array, (index) => {
    const element = array[index];
    callback(element, index, array);
  });
};
