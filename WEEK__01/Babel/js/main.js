'use strict';

// ES6 -> Babel -> ES5

// let, const
var o = ['object', 'class', 'template string'];
// 비구조화 destructuring
var obj = o[0],
    cls = o[1],
    tst = o[2];

var markup = '\n    <div>\n      <ul>\n';
for (var i = 0, l = 10; i < l; ++i) {
  console.log('i:', i);
  data.push(1, 3, 5, 7);
  console.log('data:', data);
  // templat + data binding
  markup += '\n        <li>' + i + '</li>\n  ';
}

markup += '\n  </ul>\n</div>\n';

console.log(markup);

// console.log('i:', i);
// console.log('data:', data);
