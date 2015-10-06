'use strict';
var typogr = require('typogr');

module.exports.put = function (ref, data) {
  var text = data.text || '',
    smartText = typogr.typogrify(text);

  return Promise.resolve([{
    type: 'put',
    key: ref,
    value: JSON.stringify({ text: smartText })
  }]);
};
