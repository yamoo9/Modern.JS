/*! es5.core.pattern.js © yamoo9.net, 2017 */

// 1. JavaScript 데이터 유형
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

// 2. JavaScript 데이터 유형 올바른 감지

// 3. JavaScript 구문과 표현식

// 4. JavaScript 함수에 관한 이야기

// 5. JavaScript 배열에 관한 이야기

// 6. JavaScript 객체에 관한 이야기

// 7. DOM API에 관한 이야기

// 8. ECMAScript 2015

// 9. AJAX & REST API
