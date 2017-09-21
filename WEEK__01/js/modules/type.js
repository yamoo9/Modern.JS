// 모던 자바스크립트 모듈 패턴(Module Pattern)
// 의존 모듈 주입(DI: Dependency Injection)
(function(global, _){
  'use strict';

  function type(data) {
    return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
  }

  function isType(data, data_type) {
    return type(data) === data_type;
  }

  // 노출 패턴(Reveal Pattern)
  _.type = type;
  _.isType = isType;

})(window, window.y9 = window.y9 || {});