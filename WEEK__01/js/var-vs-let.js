'use strict';

// var VS let, const

// 변수 정의
// ES5
// Block Scope를 사용하지 못한다.
// AirBnB에서는 var를 사용하지 말 것. (권고)

// var 사례
var bag = '샤넬';
{
  var bag = '루이비통';
  console.log(bag); // '루이비통'
}
console.log(bag); // '루이비통'

// let 사례
var let_bag = '샤넬';
{
  // {} 블록 내부에 let을 사용하면 지역이 형성된다.
  var _let_bag = '루이비통';
  console.log(_let_bag); // '루이비통'
}
console.log(let_bag); // ???


console.log(hey_say);

var hey_say = '헤이세이';

// ES6를 사용하는 환경에서 작업한다면
// 가급적 var보다는 let, const를 사용하라.

// 단, 기존의 코드를 가져와 사용할 계획이라면
// var를 let으로 바꾸지 말 것!

// var와 달리 let은 다음과 같은 특징을 가진다.
// 1. block scope를 가진다.
// 2. 호이스트 현상이 발생하지 않는다.
// 3. 이미 선언된 변수 이름과 동일한 이름으로 다시 선언할 수 없다.

// const는 어떤 경우에 사용할까?
// 1. 말 그대로 상수(모두 대문자)를 사용하고자 할 때
// 2. 다른 데이터 유형으로 변경되는 것을 방지할 목적으로 객체(소문자도 가능)를 할당하는 변수를 선언할 때