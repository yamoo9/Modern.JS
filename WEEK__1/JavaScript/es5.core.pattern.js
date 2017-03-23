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

console.log('count:', count);
console.log('num:', num);

// 값 참조(pass by reference)

var list = arr; // 참조 (복사가 아닌 참조)

// 동일한 객체를 참조하는 변수 중 하나에 변화를 가하게 되면
// 그 객체를 참조한 다른 변수 또한 변화된 객체를 읽게 된다.

list.push(3);
list.push(8);
list.push(10);
list.push(203);

console.log('list:', list);
console.log('arr:', arr);

// 자바스크립트 메모리 관리는 어떻게 하는가?
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management

// 데이터의 필요 유무를 감지하는 자체 알고리즘에 의해 가비지 콜렉터가 이를 처리한다.
// 다만, IE 하위 버전의 경우는 알고리즘이 뛰어나지 못해 개발자의 나쁜 코드 습관에 따라
// 메모리 누수가 발생, 애플리케이션에 문제를 발생시키기도 한다.

// ---

console.log('%c------------------------------', 'color: #3d9a21');


////////////////////////////////////
// 2. JavaScript 데이터 유형 올바른 감지
////////////////////////////////////

// 데이터 타입 검증 방법 1. typeof
// http://bonsaiden.github.io/JavaScript-Garden/ko/#types.typeof
// 왜? typeof 는 만든 이들도 잘못되었다고 인정하나?
console.log('typeof num:', typeof num);
console.log('typeof str:', typeof str);
console.log('typeof boo:', typeof boo);
console.log('typeof fnc:', typeof fnc);
console.log('typeof obj:', typeof obj);
console.log('typeof arr:', typeof arr);   // [X]
console.log('typeof null:', typeof null); // [X]
console.log('typeof undefined:', typeof undefined);


// 데이터 타입 검증 방법 2. instanceof
// http://bonsaiden.github.io/JavaScript-Garden/ko/#types.instanceof
// instance instanceof Class
// Class: 객체를 생성하는 추상적 개념 e.g) 사람
// instance: 실제 존재하는 객체 e.g) 지훈

console.log('num instanceof Number:', num instanceof Number);
console.log('new Number(num) instanceof Number:', new Number(num) instanceof Number);
console.log('str instanceof String:', str instanceof String);
console.log('new String(str) instanceof String:', new String(str) instanceof String);
console.log('boo instanceof Boolean:', boo instanceof Boolean);
console.log('new Boolean(boo) instanceof Boolean:', new Boolean(boo) instanceof Boolean);
console.log('fnc instanceof Function:', fnc instanceof Function);
console.log('obj instanceof Object:', obj instanceof Object);
console.log('arr instanceof Array:', arr instanceof Array);


// 데이터 타입 검증 방법 3. .consturctor 속성

// 속성을 가진 것은 모두 객체이다.
// [의문?] 숫자 값, 문자 값, 논리 값은 객체가 아닌데 그럼 속성을 안 가지나?
// [답변] 아니오. 가집니다. (?????) <- 자바스크립트 엔진이 우회(proxy)하여 객체인 것처럼 처리
// JavaScript 환경의 모든 객체는 .constructor 속성을 반드시 가진다.

// 단! 아래 방법은 객체만 감별할 수 있는 방법으로 객체가 아닌
// undefined, null은 감지할 수없을 뿐더러 감지 시, 오류를 발생시킨다.

console.log('num.constructor === Number:', num.constructor   === Number);
console.log('str.constructor === String:', str.constructor   === String);
console.log('boo.constructor === Boolean:', boo.constructor  === Boolean);
console.log('fnc.constructor === Function:', fnc.constructor === Function);
console.log('arr.constructor === Array:', arr.constructor    === Array);
console.log('obj.constructor === Object:', obj.constructor   === Object);


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

console.log('detectType(num):', detectType(num));                      // 'number'
console.log('detectType(arr):', detectType(arr));                      // 'array'
console.log('detectType(null):', detectType(null));                    // 'null'
console.log('detectType(undefined):', detectType(undefined));          // 'undefined'
console.log('detectType(/(^https?:\/\/|\/$)/g):', detectType(/(\/)/)); // 'regexp'





console.log('%c------------------------------', 'color: #3d9a21');

///////////////////////////
// 3. JavaScript 구문과 표현식
///////////////////////////


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


console.log('%c------------------------------', 'color: #3d9a21');

////////////////////////
// 9. AJAX & REST API
////////////////////////
