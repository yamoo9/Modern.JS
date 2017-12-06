/*! ES6__09__classes.js @ 2017, yamoo9@naver.com */


/////////////
// Classes //
/////////////

// ES5 //
(function(global){
  'use strict';

  // 비공개(Private) 멤버
  // 커피 원산지(https://goo.gl/pJ8Tsi)
  var _origin = '에티오피아';

  // 생성자(Constructor) 함수
  function Coffee(bean) {
    // 공개(Public) 멤버
    this.bean = bean;
  }

  // 스태틱(Static) 메서드
  Coffee.origin = function() { return _origin; };

  // 프로토타입(Prototype) 객체
  // 인스턴스(Instance) 메서드
  Coffee.prototype.parch = function(time) {};

})(window);



// ES6 //

// 클래스(Classes)
// - 호이스트 되지 않음
// - 리터럴 표기법 사용 가능

// 비공개 데이터(Private Data) 관리
// - 관례적 이름 규칙 사용
// - Object.assign() 사용
// - Symbol() 사용
// - WeakMap() 사용

// 클래스 상속(Sub Classing)
// - extends
// - super

// 객체 상속(Inheritance Object)
// Object.setPrototypeOf(o.prototype, O)








/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * Classes
 * 참고: https://goo.gl/gw9hr1
 * ———————————————————————————————————————————————————————————
 *
 * 객체 지향 프로그래밍이 요구되는 경우, 클래스 문법 활용
 * 비공개 데이터 관리 패턴을 숙지한 후, 적합한 방식 활용
 * 클래스 상속 및 객체 상속 활용
 *
 */