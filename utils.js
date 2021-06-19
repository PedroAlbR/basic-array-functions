'use strict';

module.exports._for = function _for(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(index);
  }
}
