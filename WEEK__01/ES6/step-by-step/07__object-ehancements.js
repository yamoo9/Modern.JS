/*! ES6__07__object-ehancement.js @ 2017, yamoo9@naver.com */


////////////////////////
// Object Ehancements //
////////////////////////

// ES5 //
(function(){
  'use strict';

  // 유틸리티 //
  function mixin() {
    var objs = Array.prototype.slice.call(arguments);
    var mixin_o = {};
    objs.forEach(function(o){
      for ( var p in o ) {
        var v = o[p];
        if ( o.hasOwnProperty(p) ) {
          mixin_o[p] = v;
        }
      }
    });
    return mixin_o;
  }

  var name  = 'SM7';
  var maker = 'Samsung';
  var boost = function() {};

  var car = {
    go: function() {},
    stop: function() {},
    boost: boost
  };

  // car 객체의 능력을 복사한 후,
  // 자산의 능력을 가진 객체 정의
  var newbee = mixin(car, {
    name: name,
    maker: maker
  });

  console.log(newbee);

})();



// ES6 //








/// Conclusion ////////////////////////////////////////////////////////////////

/**
 * ES6를 사용하여 프로젝트를 진행한다면?
 * Object Ehancements
 * getter https://goo.gl/t3hvjJ
 * setter https://goo.gl/PirNNt
 * Symbol https://goo.gl/PNBLeH
 * ———————————————————————————————————————————————————————————
 *
 * 객체 속성 및 메서드 표기법이 향상
 * 계산된 (동적) 속성 표기법 활용 가능
 * 객체 상속 및 활용 방법 향상
 *
 * getter, setter를 사용하여 계산된 속성 할당
 * Symbol을 사용하여 접근 불가능한 식별자 활용
 *
 */