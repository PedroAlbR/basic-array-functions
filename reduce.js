'use strict';

const { _forEach } = require('./forEach');

module.exports._reduce = function _reduce(array, callback, initialValue) {
  let acum = initialValue;

  _forEach(array, (element, index) => {
    acum = callback(acum, element, index, array);
  });

  return acum;
}
