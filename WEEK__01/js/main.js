var content = "Modern ES6";


var template = [
  '<div class="container" lang="en">',
    '<header>',
      '<h1 class="brand">' + content + '</h1>',
    '</header>',
  '</div>'
].join('');

// document.querySelector('.wrapper').innerHTML = template;

var es6_template = `
<div class="wrapper">
  <div class="container" lang="en">
    <header>
      <h1 class="brand">${content}</h1>
    </header>
    <nav>
      <ul>
        <li><a href="${one}" rel="external"></a></li>
        <li><a href="${two}" rel="external"></a></li>
        <li><a href="${three}" rel="external"></a></li>
        <li><a href="${four}" rel="external"></a></li>
      </ul>
    </nav>
  </div>
</div>
`;

document.querySelector('.wrapper').innerHTML = es6_template;



/**
 * main.js
 * 1주차 학습 내용을 공부하며 정리합니다.
 */

//////////////////////////////
// 1. JavaScript 데이터 유형
// 참고: https://goo.gl/UqYzzm
//////////////////////////////

// 아래 유형의 경우는 객체를 생성하는 과정 없이
// 바로 값(리터럴)을 사용한다.
// Number Object -> Number Literal
// String Object
// Boolean Object

// 1-1) 원시(Primitive) 데이터 유형
undefined
null
// Number Literal
var num = 9; // 숫자 9는 값(리터럴)
// String Literal
var str = 'this is string literal';
// Boolean Literal
var boo = true;


// 1-2) 참조(Reference)형 데이터 유형
// Function Object
//
var fnc = function (who) {
  return who + ' called';
};
// Array Object
// var arr = new Array();
var arr = [];
// Object
// var obj = new Object();
var obj = {};


// 1-3) 원시 데이터 타입, 참조형 데이터 타입 구분

console.groupCollapsed('값 복사/참조');

// 1-3-1) 값 복사(pass by value)
// 동일해 보이는 값이나, 복사된 다른 값(데이터)
// null, undefined, 9, 'hi', false

var n = num;
++n; // n + 1 = 10
console.log('num:', num); // 9
console.log('n:', n);     // 10
console.log('n === num:', n === num); // false (동일한 값을 참조하지 않음, 복사되었기에)


// 1-3-2) 값 참조(pass by reference)
// 동일한 값(데이터)을 참조
// function AFn(){}, [], {}
var list = arr;
list.push('뭉크', '에곤 쉴레', '클림트');
console.log('arr:', arr);
console.log('list:', list);
console.log('list === arr:', list === arr); // true (동일한 값을 참조)

console.groupEnd('값 복사/참조');



// 1-4) 자바스크립트 메모리 관리는 어떻게 하는가?
// 참고: https://goo.gl/EWWHnZ

// 가비지 컬렉터가 스스로 관리(알고리즘 사용)
// 사용자는 관여하지 않는다.
// 다시 말해 사용자의 코딩 습관이 메모리 관리와 관련이 있다.

// for ( var i=0, l=list.length; i<l; i++ ) {
//   console.log(i);
// }




////////////////////////////////////
// 2. JavaScript 데이터 유형 올바른 감지
////////////////////////////////////

// 정적형 지정 언어: JAVA
// var memory:[] = new Array();
// memory = {}; // ERROR
// 동적형 지정 언어: Ruby, JavaScript
// var memory = new Array();
// memory = {}; // ERROR 아님

// 왜? 데이터 타입 검증이 중요한가?
// 제작자가 의도한 바와 달리 값을 대입하거나, 변경하여
// 프로그램을 망가트릴 가능성이 있다.

// 2-1) 데이터 타입 검증 방법 typeof
// 참고: https://goo.gl/6rpQQi

console.groupCollapsed('typeof 과연 쓸모 있나? (설계 오류 검증)');

console.log('typeof num:', typeof num);             // 'number'
console.log('typeof str:', typeof str);             // 'string'
console.log('typeof boo:', typeof boo);             // 'boolean'
console.log('typeof fnc:', typeof fnc);             // 'function'
console.log('typeof arr:', typeof arr);             // 'object' [?]
console.log('typeof obj:', typeof obj);             // 'object'
console.log('typeof null:', typeof null);           // 'object' [?]
console.log('typeof undefined:', typeof undefined); // 'undefined'

console.groupEnd('typeof 쓸모 있을까?');

// 2-2) 데이터 타입 검증 방법 instanceof
// 참고: https://goo.gl/3w3EEw

console.groupCollapsed('instanceof 언제 쓸까?');

// instanceof 언제 쓰나?
// OOJS 객체지향자바스크립트 프로그래밍에서 사용

// [[Class]]
// Constructor Function [[]]
function Pagenation(el){

  // new를 사용했는지 여부를 검사하여 잘못됨을
  // 사용자에게 경고하는 오류를 제공하여 디버깅을 용이하게 한다.

  // new 사용을 강제화하는 패턴
  if ( !(this instanceof Pagenation) ) {
    throw 'new Pagenation() 으로 실행 구문을 써주세요';
  }

  // new 사용을 암묵(시)적으로 처리하는 패턴
  // if ( !(this instanceof Pagenation) ) {
  //   return new Pagenation(el);
  // }

  this.el = el;
}

// {Instance}
// Object {}
var body_pagenation = new Pagenation( document.body );


// 데이터 유형 검증
// instanceof

// Array 데이터 유형 검증에 있어
// typeof는 문제를 야기 시킨다.

console.log( 'arr instanceof Array:', arr instanceof Array );


console.groupEnd('instanceof 언제 쓸까?');


// 2-3) 데이터 타입 검증 방법 .consturctor 속성
// 참고: https://goo.gl/RqAF6f

console.groupCollapsed('.constructor는 언제쓸까?');

// 객체 유형 검증은 완벽(Perfect!!)
console.log('num.constructor === Number:', num.constructor === Number); // Number
console.log('str.constructor === String:', str.constructor === String); // String
console.log('boo.constructor === Boolean:', boo.constructor === Boolean); // Boolean
console.log('fnc.constructor === Function:', fnc.constructor === Function); // Function
console.log('arr.constructor === Array:', arr.constructor === Array); // Array
console.log('obj.constructor === Object:', obj.constructor === Object); // Object

// 단! 객체 유형 검증에서만 완벽하고, null/undefined 유형 체크 시에는 오류 발생
// 오류 메시지: Uncaught TypeError: Cannot read property 'constructor' of null
// console.log('null.constructor:', null.constructor);

console.groupEnd('.constructor는 언제쓸까?');

// 2-4) 데이터 타입 검증 방법 직접 만든 유틸리티 함수

console.groupCollapsed('데이터 타입의 올바른 검증을 위한 해결책은?');

// 원리(현상)
// 재사용 가능하도록 함수로 정의

// JavaScript Objects
// BOM: Host(Browser) Objects
// Window
//    Document
//    Screen
//    Navigator
//    Location
//    History
// DOM: Document Object Model
// Document
//   Root Element (documentEleemnt {})
//   firstChild Element (document.head)
//   lastChild Element (document.body)


// 메서드 빌려쓰기 패턴
// 다른 객체의 능력을 빌려 쓰다.
// 사람.걷다()
// 사람.날다()
// 새.날다() X
// 새.날다.call(사람) === 사람.날다() O
// Object.prototype.toString.call(arr)

// 함수 로직(Logic)
// Object.prototype.toString.call(data).slice(8,-1).toLowerCase();

// 함수 type() 정의
// 어떤 데이터 유형이든 상관없이 모두 올바른 값을 문자열(소문자)로 반환한다.
// 전역 함수
// 가급적 전역을 오염시키지 말아야 한다. (타인의 코드와 충돌 우려)
// 전역을 오염시키는 행위는 안티 패턴
// function type(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
// }

// 네임스페이스 패턴 (네임스페이스 객체 종속)
// e.g) YUI.Events.addEvent
// var y9 = {};

// y9.type = type;

// console.log('y9.type(num):', y9.type(num));
// console.log('y9.type(str):', y9.type(str));
// console.log('y9.type(boo):', y9.type(boo));
// console.log('y9.type(fnc):', y9.type(fnc));
// console.log('y9.type(arr):', y9.type(arr));
// console.log('y9.type(obj):', y9.type(obj));
// console.log('y9.type(null):',y9.type(null));
// console.log('y9.type(undefined):', y9.type(undefined));

console.groupEnd('데이터 타입의 올바른 검증을 위한 해결책은?');





////////////////////////////
// 3. JavaScript 구문, 표현식
////////////////////////////


// 3-1) 구문(Statement)
// statement는 "구문" 이라고 할 수 있습니다.
// 의미 상으로 보면 자바스크립트 인터프리터(번역기)에게 내리는 지시문(Directive)이라 할 수 입니다.
// 인터프리터가 이것을 보고 어떤 동작을 해야하는지 알게됩니다.
// 구문은 어떻게 동작해야 하는지 동작만 알려주고 사라집니다.
// 즉, 구문의 결과로는 아무것도 남지 않습니다.


// 3-2) 표현식(Expression)
// 식은 expression 이라 하는데, 간단히 말해 하나의 값이 되는 것입니다.
// 결론적으로 다른 모든 식은 하나의 값이 수렴하여 값 식이 되는 것이므로 "식 == 값"으로 이해해도 무방합니다.







////////////////////
// 4. JavaScript 함수
////////////////////

// 함수호출 : 함수를 호출한 결과는 값이 됩니다.
// 자바는 void를 반환하면 값이 될 수 없습니다만,
// 자바스크립트는 명시적으로 반환하지 않아도 undefined 가 반환되어
// 언제나 값으로 수렴됩니다.

// 전역/지역 구분 중요!!!
// 전역을 오염시켜서는 안되기 때문
// 모듈 개념(독립된 영역)이 JavaScript에 존재하지 않음
// 그래서 함수로 흉내를 냅니다.

var y9 = function (){

  function type(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
  }

  // 네임스페이스 패턴 (네임스페이스 객체 종속)
  // e.g) YUI.Events.addEvent
  var y9 = {};

  y9.type = type;

  // console.log(y9.type([]));

  return y9;
}();

// IIFE
// 의존 모듈 주입(DI: Dependency Injection)
// 모듈 패턴
(function($){

  // 함수 내부 로직
  // 객체, 변수 정의, 함수 [지역]

  function type(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
  }

  function isNumber(data) {
    return type(data) === 'number';
  }

  // 노출(공개) 패턴
  $.type = type;

})(window.y9 = window.y9 || {});

// 4-1) 영역(Scope)

// 4-1-1) 라이프 사이클(Life Cycle) => 메모리 누수 => 클로저

// 4-1-2) 호이스팅(Hoist: 끌어올리다)
// var 키워드로 선언된 구문에서 할당(=) 부분을 제외한
// 선언부만 영역의 상단으로 끌어올려지는 현상
// function 키워드로 선언된 함수 구문을 몸체 통째로
// 영역의 최상단으로 끌어올리는 현상

// 배경: 비전문가가 쓸 수 있도록 구성한데서 시작

// function showMeTheMoney(){}
// var a; // undefined
// var fn; // undefined

// showMeTheMoney();

// a = 10;
// fn = function(){};

// console.log(a); // undefined
// fn(); // X undefined()




// 4-1-3) this 컨텍스트 참조

// 4-1-4) .call(), .apply(), .bind()







////////////////////
// 5. JavaScript 배열
////////////////////


// 5-1) 데이터 관리

// 5-1-1) 데이터 아이템 생성(Create)

// 5-1-2) 데이터 아이템 읽기(Read)

// 5-1-3) 데이터 아이템 변경(Update)

// 5-1-4) 데이터 아이템 제거(Delete)


// 5-2) Array.isArray()


// 5-3) .forEach()  VS  .map()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// 5-4) .slice()  VS  .filter()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// 5-5) .indexOf()  VS  .lastIndexOf()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf


// 5-6) .every()  VS  .some()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some


// 5-7) .reduce()  VS  .reduceRight()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight







////////////////////
// 6. JavaScript 객체
////////////////////


// 6-1) Object.create()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create


// 6-2) Object.defineProperty(), Object.defineProperties()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties


// 6-3) Object.getPrototypeOf()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf


// 6-4) Object.keys()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys


// 6-5) Object.seal()  VS Object.freeze()  VS  Object.preventExtensions()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions


// 6-6) Object.isSealed()  VS  Object.isFreeze()  VS  Object.isExtensible()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible







/////////////
// 7. ES5 상속
/////////////

var human = {
  sleeping : function() {},
  running  : function() {},
  eating   : function() {},
  going    : function() {},
};

var artist = Object.create(human, {
  thinking: {
    value: function(){},
    writable: true,
    enumerable: true,
    configurable: true
  },
  drawing: {
    value: function(){},
    writable: true,
    enumerable: true,
    configurable: true
  },
});






////////////////////////
// 8. DOM API
////////////////////////


// 8-1) DOM 선택 API 메서드
// getElementById()
// getElementsByTagName()
// getElementsByClassName() (IE 9+)
// querySelector() (IE 8+ CSS2 선택자로 제한, IE 9+)
// querySelectorAll()
// matches() (IE 9+ `ms` 프리픽스 필요)
// - msMatcheSelector()
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches


// 8-2) Node 속성
// childNodes
// firstChild
// lastChild
// nextSibling
// previousSibling
// parentNode
// nodeType
// nodeName
// nodeValue


// 8-3) Node 메서드
// hasChildNodes()
// appendChild()
// insertBefore()
// removeChild()
// replaceChild()
// cloneNode()
// contains()
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
// isEqualNode() (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode
// compareDocumentPosition() (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition


// 8-4) Document 메서드
// createElement()
// createTextNode()


// 8-5) HTML*Element 속성
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// attributes (이 속성을 통해 반환되는 유사 배열 집합은 라이브 상태, 즉 실시간으로 변경된다)
// innerHTML
// outerHTML
// innerText
// textContent (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
// childElementCount (IE 9+)
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/childElementCount
// classList (IE 10+)
// - add()
// - remove()
// - contains()
// - toggle()
// dataset (JavaScript 객체로 `data-*` 속성에 사용된 `-`은 모두 camelCase로 처리하여 사용)


// 8-6) HTML*Element 메서드
// getAttribute()
// setAttribute()
// removeAttribute()
// hasAttribute() (요소노드에 속성이 있으면 값이 없어도 `true`를 반환, `Boolean` 속성 반환 값일 경우 상태 확인 가능)
// insertAdjacentHTML()
// https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
// insertAdjacentElement() (IE 8+)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
// insertAdjacentText() (IE ?)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText







////////////////////////
// 9. AJAX & REST API
////////////////////////

// 비동기 통신을 위한 객체 생성 (생성자 함수로부터)
// IE 6-, ActiveXObject() 사용....
// IE 7+, XMLHttpRequest() 사용 가능

// 비동기 통신을 설정
// 서버에 요청


// REST API
// HTTP 메서드: GET, POST, PUT, DELETE
// https://myjson.com


// defer, async 속성 사용 방법, 차이점 설명
// http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

// defer 속성은 HTML 해석이 끝난 후 차례대로 실행된다.
// 하지만 모든 브라우저에서 지원하지는 않는다. (IE 10+)

// async 속성은 비동기적으로 실행되기에 실행 순서가 보장되지 않는다.
// 그러므로 의존 모듈이 있을 경우 사용에 주의가 요구된다.