(function(global, y9){
  // JavaScript Syntax Mode: Strict (ES5: 2009)
  'use strict';

  // 비공개(Private)
  // 생성자 함수(Class)
  function Dom(el, settings) {
    this.el = el;
    this.config = settings;
    // return this;
  }

  // 프로토타입 객체(Instance Sharing Methods, Properties)
  Dom.prototype = {
    constructor: Dom,
    init: function(){console.log('initialization');},
    bind: function(){console.log('bind Events');},
    update: function(){console.log('Update Contents');}
  };

  // 외부에 공개할 것만 선별적으로 공개(Public) 가능
  y9.Dom = Dom;

})(window, window.y9 = window.y9 || {});