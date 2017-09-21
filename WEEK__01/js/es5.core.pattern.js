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
console.groupCollapsed('값 복사와 참조');

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

console.groupEnd('값 복사와 참조');


////////////////////////////////////
// 2. JavaScript 데이터 유형 올바른 감지
////////////////////////////////////

// 동적 형 지정 언어 (JavaScript) VS 정적 형 지정 언어 (JAVA)
// 태생적 한계 (많은 문제를 수반)

// TS
// function someMoney(money:number){
// ...
// }

// JS
// function someMoney(money){
// 데이터 유효성 검증
//   if (typeof money !== 'number') {
//     throw new Error('매개변수 money는 숫자 유형만 받습니다.');
//   }
// }

// 데이터 타입 검증 방법 1. typeof
// http://bonsaiden.github.io/JavaScript-Garden/ko/#types.typeof

console.log('typeof num:', typeof num);             // 'number'
console.log('typeof str:', typeof str);             // 'string'
console.log('typeof boo:', typeof boo);             // 'boolean'
console.log('typeof fnc:', typeof fnc);             // 'function'
console.log('typeof undefined:', typeof undefined); // 'undefined'
console.log('typeof obj:', typeof obj);             // 'object'
console.log('typeof arr:', typeof arr);             // 'array' [X]  -> 'object'
console.log('typeof my_btn:', typeof my_btn);       // 'button' [X] -> 'object'
console.log('typeof null:', typeof null);           // 'null' [X]   -> 'object'

// TS
// var num:number = 9;
// var fnc:() = function(){};


// 데이터 타입 검증 방법 2. instanceof
// http://bonsaiden.github.io/JavaScript-Garden/ko/#types.instanceof

// Class <-> Instance
// 설계도면 <-> 생성된 객체
// 거북선도면 <-> 거북선

// new Class() => Instance

arr instanceof Array;  // true, new Array()
console.log('arr instanceof Array:', arr instanceof Array)
num instanceof Number; // true, new Number()
console.log('num instanceof Number:', num instanceof Number)



// 데이터 타입 검증 방법 3. .consturctor 속성

console.log('num.constructor:', num.constructor);
console.log('str.constructor:', str.constructor);
console.log('boo.constructor:', boo.constructor);
console.log('fnc.constructor:', fnc.constructor);
console.log('arr.constructor:', arr.constructor);
console.log('obj.constructor:', obj.constructor);
console.log('my_btn.constructor:', my_btn.constructor);


// JavaScript의 데이터 검증을 위한 3가지 방법
// typeof, instanceof, .constructor

// 데이터 타입 검증 방법 4. 직접 만든 유틸리티 함수 isType
// JavaScript 의 모든 데이터 유형을 올바르게 검증하려면?
function type(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
}
function isType(data, data_type){
  // Boolean 반환
  return type(data) === data_type;
}
// 문제가 되었던 Array, null, undefined 체크?
isType(arr, 'array');           // true
isType(null, 'null');           // true
isType(undefined, 'undefined'); // true


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


