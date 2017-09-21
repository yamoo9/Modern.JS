'use strict';

/*! ECMAScript2015(ES6).js © yamoo9.net, 2017 */

// ES6(7,8) > ES5 컴파일러: [Babel](http://babeljs.io/)
// [ES6 호환성 테이블](http://kangax.github.io/compat-table/es6/)
// [ECMAScript 2015 (ES6)](https://github.com/yamoo9/FDS/blob/3rd_FDS/REFERENCES/ECMAScript2015.md)
// [Airbnb JavaScript 스타일 가이드](https://github.com/tipjs/javascript-style-guide)
// [ESDoc: 문서화 도구](https://esdoc.org/)


////////////////
// let, const //
////////////////

// ES6 신규 프로젝트를 수행한다면 var 대신 let, const 사용하라
// ES5를 쓰면 당연히 var를 사용. 단, 구형 프로젝트에서는 혼용 사용

// block scope를 지원하기 시작
var remote_control = '전역 리모콘';

console.log('remote_control:', remote_control);
if (true) {
  var _remote_control = '지역 리모콘';
  console.log('remote_control:', _remote_control);
  {
    var _remote_control2 = '지역 리모콘';
    console.log('remote_control:', _remote_control2);
  }
}

// let을 사용할 경우, 동일한 이름의 변수는 사용할 수 없다. (오류 발생)
// let remote_control = '전역 리모트 컨트롤';
console.log('remote_control:', remote_control);

// 호이스트 현상의 처리 결과가 다르다.
// var VS let

function varFn() {
  // if ( typeof temp !== 'undefined' ) {
  if (temp) {
    var temp = '임시 지역변수';
  }
  console.log('temp:', temp); // ????
}

var temp = '임시 전역 변수';

varFn();

function letFn() {
  // if ( typeof temp !== 'undefined' ) {
  if (temp) {
    var _temp = '임시 지역변수';
  }
  console.log('temp:', temp); // ????
}

letFn();

// constant === 상수(변하지 않는 수)
// y = x * x + 4
// const DOG_TO_HUMAN = 7;

// let 키워드는 원시 데이터 유형을 참조할 때 사용하라
var memory = void 0;

memory = '로스트 메모리즈';

// 상수, 참조형 데이터를 변수에 할당할 때는 const를 써라
// 배열, 객체 같은 자료를 관리하는 데이터 유형의 경우
// const를 사용하는 것이 권장된다.


////////////////////////
// String Additions   //
////////////////////////

/// ES5 ///

var table_class = 'my-table-2';

var table = '<table class="' + table_class + '"><caption>Table Title</caption><thead><tr><th scope="col">header 1</th></tr><tr><th scope="col">header 2</th></tr><tr><th scope="col">header 3</th></tr></thead><tbody><tr><td>content 1</td></tr><tr><td>content 2</td></tr><tr><td>content 3</td></tr></tbody></table>';

var table2 = ['<table class="' + table_class + '">', '<caption>Table Title</caption>', '<thead>', '<tr>', '<th scope="col">header 1</th>', '</tr>', '<tr>', '<th scope="col">header 2</th>', '</tr>', '<tr>', '<th scope="col">header 3</th>', '</tr>', '</thead>', '<tbody>', '<tr>', '<td>content 1</td>', '</tr>', '<tr>', '<td>content 2</td>', '</tr>', '<tr>', '<td>content 3</td>', '</tr>', '</tbody>', '</table>'].join('');

var table3 = '\
<table class="my-table">\
  <caption>Table Title</caption>\
  <thead>\
    <tr>\
      <th scope="col">header 1</th>\
    </tr>\
    <tr>\
      <th scope="col">header 2</th>\
    </tr>\
    <tr>\
      <th scope="col">header 3</th>\
    </tr>\
  </thead>\
</table>\
';

// ES6
// Template
// backtick `

var es6_table = '\n  <table class="' + table_class + '">\n    <caption>Table Title</caption>\n    <thead>\n      <tr>\n        <th scope="col">header 1</th>\n      </tr>\n      <tr>\n        <th scope="col">header 2</th>\n      </tr>\n      <tr>\n        <th scope="col">header 3</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>content 1</td>\n      </tr>\n      <tr>\n        <td>content 2</td>\n      </tr>\n      <tr>\n        <td>content 3</td>\n      </tr>\n    </tbody>\n  </table>\n';

var job = 'instructor';

var string_message = 'i\'m a ' + job + '.';

// string.includes()   //
// string.startsWith() //
// string.endsWith()   //
// string.repeat()     //
////////////////////////

function detectDevice(device) {
  return window.navigator.userAgent.toLowerCase().includes(device);
}

//////////////////////
// Array Additions  //
//////////////////////
// array.find()     //
// array.includes() //
// array.fill()     //
// array.keys()     //
// array.values()   //
// array.entries()  //
//////////////////////


//////////////////////
// Template Strings //
//////////////////////


////////////////////
// Arrow Function //
////////////////////

// CoffeeScript ->
// ES6          =>

function fn() {}

var fns = function fns() {};
var fns = function fns() {};

var double = function double(x) {
  return x * x;
};

var doubleX = function doubleX(x) {
  return x * x;
};
// const doubleX = x => x * x;

var monster = function monster() {
  var name = void 0,
      age = void 0,
      father = void 0;
  name = '';
  age = 10;
  father = Father;
  return {
    name: name, age: age, father: father
  };
};

var mster = function mster() {
  return { name: name, age: age, father: father };
};

// 객체 정의 메서드를 화살표 함수를 사용하지 말라
var vue = {
  find: function find() {},
  init: function init() {},

  methods: function methods() {
    console.log(undefined); // this !== vue
  }

  ////////////////////////
  // Default Parameters //
  ////////////////////////


  ///////////////////////////////
  // Rest or Spread Parameters //
  ///////////////////////////////


  /////////////////////////
  // Object Enhancements //
  /////////////////////////


  ///////////////////////////
  // Class & Inheritance //
  ///////////////////////////


  ////////////////////////////
  // ECMAScript2015 Modules //
  ////////////////////////////


  ///////////////////
  // Destructuring //
  ///////////////////


  //////////////////////////////////
  // Module Bundling with Webpack //
  //////////////////////////////////


  /////////////
  // Promise //
  /////////////


  //////////
  // Sets //
  //////////


  ////////////////
  // Generators //
  ////////////////

};