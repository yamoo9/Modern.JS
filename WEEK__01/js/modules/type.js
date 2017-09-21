// 모던 자바스크립트 모듈 패턴
(function(global, _){
  'use strict';

  function type(data) {
    return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
  }

  function isType(data, data_type) {
    return type(data) === data_type;
  }

  _.type = type;
  _.isType = isType;

})(window, window.y9 = window.y9 || {});