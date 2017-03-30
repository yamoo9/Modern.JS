'use strict';

// JavaScript Module Pattern (IIFE)
;(function (global, Model) {
  'use strict';

  // create Model {} Instance(Object) from Model Class(Constructor)

  global.lectureList = new Model([]);
  global.readingBookList = new Model([]);
})(window, window._Model);