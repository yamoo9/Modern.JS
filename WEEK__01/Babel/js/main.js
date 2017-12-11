'use strict';

// import { type } from './utils';

// const utils = require('./utils');

// console.log(type({}));

// ES6 -> Babel -> ES5

// let, const
var o = ['object', 'class', 'template string', 'arrow function'];

// for
// for ~ in
// forEach(cb)

// for ~ of
// 순환 처리 Iterator 객체(String, Array, Array-Like, Map, Set, WeakMap, WeakSet), Generator
var result = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = o[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    // 필터링
    value.includes('fun') && result.push(value);
  }

  // 비구조화 destructuring
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

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


// ES5
// function showRolles() {}
var square = function square(x) {
  return x * x;
};

// window.onload = showRolles;
// [1, 3, 5].forEach(showRolles);

// ES6
// Fat(=) Arrow Function
// 문 statement
var squareState = function squareState(x) {
  return x * x;
};

// 식 expression
// 매개변수의 개수
// 0, 2개 이상 (a,b) => 생략 못함
// 1개 a => 생략 가능
var squareExp = function squareExp(x) {
  return x * x;
};

// ES6
// Iterator 객체 순환
// const map = new Map();
