/*! es5.core.pattern.js © yamoo9.net, 2017 */

//////////////////////////
// 1. JavaScript 데이터 유형
//////////////////////////

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures

// 1-1. 원시(Primitive) 데이터 유형
// 객체가 아닌 것(속성을 포함하지 않는다): undefined
// 객체가 아닌 것(속성을 포함하지 않는다): null
// 숫자 값(number literal)
// 문자 값(string literal)
// 논리 값(boolean literal)

var num = 2017;
var str = 'JavaScript';
var boo = !0;

// 1-2. 참조(Reference)형 데이터 유형
// 객체 {}
// 배열 객체 []
// 함수 객체 function(){}
var obj = {};
var arr = [];
var fnc = function() {};

// 원시 데이터 타입, 참조형 데이터 타입을 구분하는 중요한 포인트!
// 값 복사(pass by value)
// 원시 데이터 유형은 변수에 값이 복사된다.
var count = num; // 값 복사
// count 와 num 은 동일한 값을 가진 것처럼 보이나,
// 실제 둘은 다른 값을 가진 것이다. (복사가 되었기에)

// count 변수 값에 변화를 주어도
// num 값은 변화가 일어나지 않는다.
count = count % 2;
console.group('JavaScript 값 복사');
console.log('count:', count);
console.log('num:', num);
console.groupEnd('JavaScript 값 복사');

// 값 참조(pass by reference)

var list = arr; // 참조 (복사가 아닌 참조)

// 동일한 객체를 참조하는 변수 중 하나에 변화를 가하게 되면
// 그 객체를 참조한 다른 변수 또한 변화된 객체를 읽게 된다.

list.push(3);
list.push(8);
list.push(10);
list.push(203);
console.group('JavaScript 값 참조');
console.log('list:', list);
console.log('arr:', arr);
console.groupEnd('JavaScript 값 참조');

// 자바스크립트 메모리 관리는 어떻게 하는가?
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management

// 데이터의 필요 유무를 감지하는 자체 알고리즘에 의해 가비지 콜렉터가 이를 처리한다.
// 다만, IE 하위 버전의 경우는 알고리즘이 뛰어나지 못해 개발자의 나쁜 코드 습관에 따라
// 메모리 누수가 발생, 애플리케이션에 문제를 발생시키기도 한다.


console.log('%c------------------------------', 'color: #3d9a21');


////////////////////////////////////
// 2. JavaScript 데이터 유형 올바른 감지
////////////////////////////////////

// 데이터 타입 검증 방법 1. typeof
// http://bonsaiden.github.io/JavaScript-Garden/ko/#types.typeof
// 왜? typeof 는 만든 이들도 잘못되었다고 인정하나?
console.group('JavaScript: typeof 문제점');
console.log('typeof num:', typeof num);
console.log('typeof str:', typeof str);
console.log('typeof boo:', typeof boo);
console.log('typeof fnc:', typeof fnc);
console.log('typeof obj:', typeof obj);
console.log('typeof arr:', typeof arr);   // [X]
console.log('typeof null:', typeof null); // [X]
console.log('typeof undefined:', typeof undefined);
console.groupEnd('JavaScript: typeof 문제점');

// 데이터 타입 검증 방법 2. instanceof
// http://bonsaiden.github.io/JavaScript-Garden/ko/#types.instanceof
// instance instanceof Class
// Class: 객체를 생성하는 추상적 개념 e.g) 사람
// instance: 실제 존재하는 객체 e.g) 지훈

console.group('JavaScript: instanceof 문제점');
console.log('num instanceof Number:', num instanceof Number);
console.log('new Number(num) instanceof Number:', new Number(num) instanceof Number);
console.log('str instanceof String:', str instanceof String);
console.log('new String(str) instanceof String:', new String(str) instanceof String);
console.log('boo instanceof Boolean:', boo instanceof Boolean);
console.log('new Boolean(boo) instanceof Boolean:', new Boolean(boo) instanceof Boolean);
console.log('fnc instanceof Function:', fnc instanceof Function);
console.log('obj instanceof Object:', obj instanceof Object);
console.log('arr instanceof Array:', arr instanceof Array);
console.groupEnd('JavaScript: instanceof 문제점');

// 데이터 타입 검증 방법 3. .consturctor 속성

// 속성을 가진 것은 모두 객체이다.
// [의문?] 숫자 값, 문자 값, 논리 값은 객체가 아닌데 그럼 속성을 안 가지나?
// [답변] 아니오. 가집니다. (?????) <- 자바스크립트 엔진이 우회(proxy)하여 객체인 것처럼 처리
// JavaScript 환경의 모든 객체는 .constructor 속성을 반드시 가진다.

// 단! 아래 방법은 객체만 감별할 수 있는 방법으로 객체가 아닌
// undefined, null은 감지할 수없을 뿐더러 감지 시, 오류를 발생시킨다.

console.group('JavaScript: constructor');
console.log('num.constructor === Number:', num.constructor   === Number);
console.log('str.constructor === String:', str.constructor   === String);
console.log('boo.constructor === Boolean:', boo.constructor  === Boolean);
console.log('fnc.constructor === Function:', fnc.constructor === Function);
console.log('arr.constructor === Array:', arr.constructor    === Array);
console.log('obj.constructor === Object:', obj.constructor   === Object);
console.groupEnd('JavaScript: constructor');

// 데이터 타입 검증 방법 4. 직접 만든 유틸리티 함수 detectType
// 결론! 자바스크립트에서 제공해주는 typeof, instanceof, .constructor 모두
// 완벽하지는 않다. ㅠㅡㅠ 그럼 완벽한 검증은 어떻게?
// 직접 만들자!

// JSDoc, ESDoc
/**
 *  JavaScript의 모든 데이터 유형을 올바르게 감지하는 유틸리티 함수
 *  @param  {any}     data  모든 데이터 유형
 *  @return {string}        감지된 데이터 유형을 문자열(소문자)로 반환
 */
function detectType(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

console.group('JavaScript: detectType 함수 사용 예');
console.log('detectType(num):', detectType(num));                      // 'number'
console.log('detectType(arr):', detectType(arr));                      // 'array'
console.log('detectType(null):', detectType(null));                    // 'null'
console.log('detectType(undefined):', detectType(undefined));          // 'undefined'
console.log('detectType(/(^https?:\/\/|\/$)/g):', detectType(/(\/)/)); // 'regexp'
console.groupEnd('JavaScript: detectType 함수 사용 예');

// detectType 함수를 래핑(wrapping)하는 유틸리티 함수
function isNumber(data){
  return detectType(data) === 'number';
}
function isString(data){
  return detectType(data) === 'string';
}
function isBoolean(data){
  return detectType(data) === 'boolean';
}
function isFunction(data){
  return detectType(data) === 'function';
}
function isArray(data){
  return detectType(data) === 'array';
}
function isObject(data){
  return detectType(data) === 'object';
}

console.log('%c------------------------------', 'color: #3d9a21');


///////////////////////////
// 3. JavaScript 구문과 표현식
///////////////////////////

// if ~ else  |  &&, ||
// if (detectType(num) === 'number'){

var data = 'This is JavaScript Expression.';

// if (isNumber(data))
//   console.log('data is Number Type');
// else
//   console.log('data is not Number Type');

// if ( isNumber(data) ) {
//   console.log('data is Number Type');
// } else {
//   console.log('data is not Number Type');
// }
// if (detectType(null) === 'null'){
//   console.log('null is null Type');
// }

// 구문
if (isString(data)) {
  var reverse_data = data.split('').reverse().join('');
}

console.group('JavaScript 구문');
console.log('data:', data);
console.log('reverse_data:', reverse_data);
console.groupEnd('JavaScript 구문');

// 표현식
var reverse_data_ex = isString(data) && data.split('').reverse().join('');

console.group('JavaScript 표현식');
console.log('data:', data);
console.log('reverse_data_ex:', reverse_data_ex);
console.groupEnd('JavaScript 표현식');

// 자바스크립트 if문을 많이 사용하지만, 조건이 많아지면
// switch ~ case 문을 사용하는 것이 권장된다.


// for, for ~ in
// 집합 데이터에 순환 처리
// 배열 = '값의 집합'
// 객체 = '속성:값이 쌍이 되는 덩어리 나열 집합'

// Model: 데이터
// 배열, 객체 사용해서 모델을 생성
// 외부의 별도 music_list.js 파일에서 로드
// 모듈 시스템 사용 시 현재 js에서 읽어오겠지만,
// 현재 프론트엔드 환경에서는 그렇게 못한다.
// 전역에 공개된 형태로 데이터를 로드 (script 요소 사용)
// API: https://api.myjson.com/bins/iybg7

// for 구문 + DOM API를 사용하여
// 동적으로 콘텐츠를 구성하여 문서 객체의 하위 객체로 추가

// Step01 문서 객체에 접근이 가능한가?
// querySelector API => IE 8+ (단, CSS2 선택자만 가능)
// console.log('document.querySelector("body"):', document.querySelector("body"));

// defer, async 속성 사용 방법, 차이점 설명
// http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

// defer 속성은 HTML 해석이 끝난 후 차례대로 실행된다.
// 하지만 모든 브라우저에서 지원하지는 않는다. (IE 10+)

// async 속성은 비동기적으로 실행되기에 실행 순서가 보장되지 않는다.
// 그러므로 의존 모듈이 있을 경우 사용에 주의가 요구된다.

// Step02. 준비된 데이터를 순환하여 HTML String 데이터를 만들 템플릿을 추가

// 변수는 함수 블록 내부에서만 영역으로 인정되어 지역변수화 되기 때문에
// if, while, for 구문 내부에서는 밖으로 뛰쳐 나온다. 이를 호이스팅(Hoisting)이라고 부른다.
// http://bonsaiden.github.io/JavaScript-Garden/ko/#function.general
var cover_list_html = [];

console.group('for 구문: music_list 순환 처리');
var i=0, l=music_list.length, item;

// for ( ; i<l; ) {
while ( i < l ) {
  item = music_list[i++];
  cover_list_html.push('\
    <li class="music-list__item">\
      <a href role="button" data-source="../'+ item.source +'">\
        <img\
          class="music-list__cover"\
          src="../'+ item.cover +'"\
          alt="../'+ item.alt +'">\
      </a>\
    </li>\
  ');
}
// console.log( cover_list_html.join('') );
console.groupEnd('for 구문: music_list 순환 처리');

// Step03. .music-list__container 요소를 찾아라.
// var music_listContainer = document.querySelector('.music-list__container');
// console.log('music_listContainer:', music_listContainer);

// Step04. music_listContainer 요소에 cover_list_html 배열을 문자로 변환하여 붙임.
// music_listContainer.innerHTML = cover_list_html.join('');


// for문은 어떤 경우에 사용하나?
// .length 속성을 가진 데이터를 순환할 때

// for ~ in
// .length 속성이 없는 데이터를 순환할 때
// Object {} 를 순환할 때

// JavaScript Object <-- 객체 지향 프로그래밍(Object Oriented Programming)
// Class 프로그래밍 대신에 Prototype 프로그래밍 방식 사용
// 객체를 생성하는 생성자(클래스)는 상위 생성자(클래스)를 가진다.
// 상위 생성자의 능력을 자식 생성자는 물려 받는다. (상속)

// 결론은 for~in 구문을 사용할 때 객체를 순환한다면
// 반드시 .hasOwnProperty() 를 사용할 것!

for ( var i=music_list.length, music_item; --i > -1; ) {
  music_item = music_list[i];
  for ( var key in music_item ) {
    if ( music_item.hasOwnProperty(key) ) {
      console.log('속성:', key);
    }
  }
}

// 상속 받은 능력은 순환처리하면 성능에 악영향을 미치기 때문에
// for ~ in 구문을 사용할 때는 항상 .hasOwnProperty()를
// 사용하는 것이 권장된다.

////////////
// ES5 상속
////////////

var human = {
  sleeping: function() {},
  running: function() {},
  eating: function() {},
  going: function() {},
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

console.log('%c------------------------------', 'color: #3d9a21');

////////////////////////
// 9. AJAX & REST API
////////////////////////

// Data API: GET, POST, PUT, DELETE
// https://myjson.com
// https://api.myjson.com/bins/iybg7

// IE 6-, ActiveXObject() 사용....
// IE 7+, XMLHttpRequest() 사용 가능

// 비동기 통신을 위한 객체 생성 (생성자 함수로부터)
var xhr = new XMLHttpRequest();

console.group('Ajax 통신을 위한 객체 생성');
console.log(xhr);


// 비동기 통신을 설정
xhr.open('GET', 'https://api.myjson.com/bins/iybg7', false); // 동기 통신 요청
// 서버에 요청
xhr.send(null);

if (xhr.status === 200) {
  // console.log( isString(xhr.responseText) );
  music_list = window.JSON.parse(xhr.responseText);
  console.log(music_list);
}


// .call-music-list 버튼을 클릭하면
// var call_musicList_btn = document.querySelector('.call-music-list');
// call_musicList_btn.addEventListener('click', function() {
//   // 서버에 요청
//   xhr.send(null);
// });


console.groupEnd('Ajax 통신을 위한 객체 생성');








console.log('%c------------------------------', 'color: #3d9a21');

//////////////////////////////
// 4. JavaScript 함수에 관한 이야기
//////////////////////////////


console.log('%c------------------------------', 'color: #3d9a21');

//////////////////////////////
// 5. JavaScript 배열에 관한 이야기
//////////////////////////////


console.log('%c------------------------------', 'color: #3d9a21');

//////////////////////////////
// 6. JavaScript 객체에 관한 이야기
//////////////////////////////


console.log('%c------------------------------', 'color: #3d9a21');

////////////////////////
// 7. DOM API에 관한 이야기
////////////////////////


console.log('%c------------------------------', 'color: #3d9a21');

////////////////////////
// 8. ECMAScript 2015
////////////////////////
