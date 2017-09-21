/*! es5.core.pattern.js © yamoo9.net, 2017 */

//////////////////////////
// 1. JavaScript 데이터 유형
//////////////////////////

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures

// JavaScript 데이터 유형(Data Types)

// 1-1. 원시(Primitive) 데이터 유형
// null
// undefined
// number
// string
// boolean

// 1-2. 참조(Reference)형 데이터 유형
// Function
// Array
// Object

// JavaScript의 내장 객체(Native Objects)의 경우 리터럴을 사용하라
// single `var` pattern
var num = 9,
    str = "nine",
    boo = false,
    fnc = function(){},
    arr = [],
    obj = {};

// 사용자 정의 생성자(class)의 인스턴스 생성 구문은 리터럴 식이 없다.
function Button(){}
var my_btn = new Button(); // Button {}


// 1-3. 값 복사와 참조

// 값 복사가 이루어지는 JavaScript 데이터 유형은?
// null
// undefined
// number
// string
// boolean

var numx = num; // = 할당 연산자

console.log('num:', num);
console.log('numx:', numx);

// 변형을 가하면?
num += 1; // 10

console.log('[fix] num:', num);   // 10
console.log('[fix] numx:', numx); // 9

// 값 참조가 이루어지는 JavaScript 데이터 유형은?
// Function
// Array
// Object

var book_list = arr;                  // []
console.log('book_list:', book_list); // []
console.log('arr:', arr);             // []

// 변형을 가하면?
book_list.push('다시 만난 세계'); // ['다시 만난 세계']

console.log('[fix] book_list:', book_list); // ['다시 만난 세계']
console.log('[fix] arr:', arr);             // ['다시 만난 세계']

////////////////////////////////////
// 2. JavaScript 데이터 유형 올바른 감지
////////////////////////////////////

// 데이터 타입 검증 방법 1. typeof
// http://bonsaiden.github.io/JavaScript-Garden/ko/#types.typeof


// 데이터 타입 검증 방법 2. instanceof
// http://bonsaiden.github.io/JavaScript-Garden/ko/#types.instanceof


// 데이터 타입 검증 방법 3. .consturctor 속성


// 데이터 타입 검증 방법 4. 직접 만든 유틸리티 함수 detectType


///////////////////////////
// 3. JavaScript 구문과 표현식
///////////////////////////



//////////////////////////////
// 4. JavaScript 함수에 관한 이야기
//////////////////////////////



//////////////////////////////
// 5. JavaScript 배열에 관한 이야기
//////////////////////////////



//////////////////////////////
// 6. JavaScript 객체에 관한 이야기
//////////////////////////////



////////////////////////
// 7. DOM API에 관한 이야기
////////////////////////


