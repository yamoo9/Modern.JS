/*! ES6__05__parameters_spread.js @ 2017, yamoo9@naver.com */


///////////////////////
// Default Parameter //
///////////////////////

// ES5 //
(function(){
  'use strict';

  function isRequired(name) {
    throw new Error(`${name} 매개변수는 전달인자 값을 필수로 요구합니다.`);
  }

  function defaultParam(param, defaults) {
    return typeof param !== 'undefined' ? param : defaults;
  }

  function calcuratePayment(price, tax, discount) {
    if ( !price ) { isRequired('price'); }
    tax = defaultParam(tax, 0.1);
    discount = defaultParam(discount, 0);
    return Math.floor( price * (1 + tax) * (1 - discount) );
  }

})();



// ES6 //
// 기본 매개변수 설정
// 기본 매개변수를 사용하면 값이 없거나 undefined가 전달될 경우,
// 매개변수를 기본 값으로 초기화 할 수 있다.
// https://goo.gl/34EAkm



////////////////////
// Rest Parameter //
////////////////////

// ES5 //
(function(){
  'use strict';

  function sum() {
    for (var l=arguments.length, r=0, n; (n=arguments[--l]); ) {
      r += n;
    }
    return r;
  }

  sum(1, 3, 10); // 13
  sum(29, 102, 7, 203, 10); // 351


  function makeArray(o) {
    return Array.prototype.slice.call(o);
  }

  function plusNums() {
    var t = 0;
    makeArray(arguments).forEach(function(i){ t += i; });
    return t;
  }

  plusNums(81, 33, 92, 4); // 210
  plusNums(28, 35, 1, 7, 2013, 32); // 2116

})();



// ES6 //
// rest 매개변수
// 나머지 매개변수(rest parameter) 구문은
// 전달인자를 배열로 참조합니다.
// https://goo.gl/MTHqGA

// 배열 객체
// 가장 마지막에 위치



/////////////////////
// Spread Operator //
/////////////////////


// ES5 //
(function(){
  'use strict';

  // 배열 결합

  // 정수 배열
  var integer = [0, -10, 10];
  // 소수 배열
  var decimal = [0.8, 0.43, 0.7823];

  // 순차 결합
  var numbers = integer.slice().concat(decimal); // [0, -10, 10, 0.8, 0.43, 0.7823]
  // 또는
  var numbers = function(){
    var c = integer.slice();
    c.push.apply(c, decimal);
    return c;
  }();


  // 유틸리티 함수
  function combineArray() {
    for ( var r=[], i=0, a; (a=arguments[i++]); ) {
      r = r.concat(a);
    }
    return r;
  }

  function reverseCombineArray() {
    return combineArray.apply(undefined, arguments).reverse();
  }

  var numbers = combineArray(integer, decimal);



  // 중간 삽입 결합
  // [0, -10, 0.8, 0.43, 0.7823, 10]
  function insertCombineArray(o1, n, o2) {
    var c = o1.slice();
    o2.forEach(function (i) {
      c.splice(n++, 0, i);
    });
    return c;
  }

  // 배열 인덱스 2 위치에 배열 삽입
  var numbers = insertCombineArray(integer, 2, decimal);
})();




// ES6 //
// 전개 연산자
// 전개 연산자(spread operator) 표현식(expression)은 2개 이상의 인수arguments(함수 호출 용)나
// 2개 이상의 요소elements(배열 리터럴 용) 또는 2개 이상의 변수(비구조화 할당 용)가 예상되는 곳에 확장될 수 있도록 합니다.
// https://goo.gl/KUNsTt

// 배열 복제

// 순차 결합

// 중간 삽입 결합


// -----------------------------------------------------------------------------

// cUrl Command
// $ curl https://randomuser.me/api/\?inc\=gender,name,email,picture\&results\=6\&noinfo > users.json

// 멤버 데이터
var members = [
  {
    "gender": "male",
    "name": "hudson lewis",
    "email": "hudson.lewis@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
  },
  {
    "gender": "female",
    "name": "alice french",
    "email": "alice.french@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/women/37.jpg"
  }
];

// 새롭게 추가될 멤버 데이터
var new_members = [
  {
    "gender": "female",
    "name": "gina reynolds",
    "email": "gina.reynolds@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/women/35.jpg"
  }, {
    "gender": "male",
    "name": "leslie fisher",
    "email": "leslie.fisher@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
  }
];

new_members = new_members.concat([
  {
    "gender": "female",
    "name": "brooke fuller",
    "email": "brooke.fuller@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
  },
  {
    "gender": "male",
    "name": "کوروش کامروا",
    "email": "کوروش.کامروا@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/men/77.jpg"
  },
  {
    "gender": "female",
    "name": "judith gerlach",
    "email": "judith.gerlach@example.com",
    "picture": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
  }
]);


// 커뮤니티 매니저 객체
// ES5 //
(function(){
  'use strict';

  var communityManager = {
    _members: members,
    addMembers: function() {
      var new_members = [].slice.call(arguments);
      new_members.forEach(function(member) {
        this._members.push(member);
      }, this);
    }
  };

  communityManager.addMembers.apply(communityManager, new_members);

})();


// ES6 //










/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * default, rest parameters / spread operator
 * default https://goo.gl/34EAkm
 * rest    https://goo.gl/MTHqGA
 * spread  https://goo.gl/KUNsTt
 * ———————————————————————————————————————————————————————————
 *
 * 함수의 매개변수 기본 값 설정은 기존의 번거로움을 대폭 줄여준다.
 * 전개 연산자(...)를 배열 또는 함수와 함께 사용하면 매우 유용하다.
 * - 배열에 사용할 경우, 배열을 전개한다.
 * - 함수의 매개변수에 전개 연산자를 사용할 경우, 나머지 매개변수는 배열으로 사용할 수 있다.
 *
 */