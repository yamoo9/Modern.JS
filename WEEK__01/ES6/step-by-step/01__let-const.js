/*! ES6__01_let-const.js @ 2017, yamoo9@naver.com */


////////////////
// let, const //
////////////////


// 1. var 키워드 사용에서 주의할 점 [ES5]
// https://goo.gl/UE9hYh

// 1-1. 함수 스코프 (Function-level Scope)
// 1-2. 호이스팅 (Hoisting) 현상
// 1-3. 클로저 (Closure)
// 1-3. IIFE (Immediately Invoked Function Expressions: “Iffy”라고 발음) 패턴



// 2. let 키워드 도입 [ES6]
// https://goo.gl/kBquFB

// 2-1. 블록 스코프 (Block-level Scope)
// 2-2. let 호이스팅 현상 (var와 비교)
// 2-3. 클로저 VS 블록 스코프
// 2-4. 전역 객체의 속성 (var, let 전역 변수의 특징)



// 3. const 상수 [ES6]
// https://goo.gl/TiqJRP

// 3-1. 선언과 동시에 초기화, 할당이 요구됨.
// 3-2. 초기화 이후 재할당 금지.
// 3-3. const 객체 (const 객체의 속성은 재할당이 가능)









/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * var vs let vs const
 * let    https://goo.gl/kBquFB
 * const  https://goo.gl/TiqJRP
 * ———————————————————————————————————————————————————————————
 *
 * var
 *  - 함수영역(function scope)
 *  - 초기 값 할당이 없으면: undefined
 *  - 가급적 사용하지 않는 것이 좋지만, 사용해야 한다면 Top Level에서만 사용.
 *  - 전역에서 선언 시, window 객체의 속성으로 접근 가능.
 *
 * let, const
 *  - 블록영역(block scope)
 *  - 초기 값 할당이 없으면: ReferenceError
 *  - 데이터 값 변경이 필요한 경우라면 let 사용 권장.
 *  - 전역에서 선언 해도, window 객체의 속성으로 접근 가능하지 않음.
 *
 * const
 *  - 초기 값 할당이 필수!
 *  - 값 유형 변경은 허용하지 않지만,
 *    배열/객체 유형의 경우 새로운 아이템 추가,변경 가능.
 *  - 데이터 값 유형이 배열/객체일 경우 사용 권장.
 *
 */