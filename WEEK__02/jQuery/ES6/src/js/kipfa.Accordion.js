'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! kipfa.Accordion.js */
;(function (global, $, kipfa) {
  // 엄격 모드 발동
  'use strict';

  // Namespace {}
  // kipfa

  // - Accordion f
  // [ES5], OOJS
  // constructor function

  function Accordion(element, options) {
    this.$el = $(element);
    this.options = $.extend(true, {}, defaults, options);
    this._init();
  }

  // Accordion 함수 객체의 속성
  // static(class) method | utility method
  // [ES6], Arrow Function 사용
  Accordion.type = function (d) {
    return Object.prototype.toString.call(d).toLowerCase().slice(8, -1);
  };
  Accordion.query = function (s) {
    return document.querySelector(s);
  };
  Accordion.queryAll = function (s) {
    return document.querySelectorAll(s);
  };

  // prototype object
  Accordion.prototype = {
    constructor: Accordion,
    _init: function _init() {}
  };
  Accordion.prototype._setup = function () {
    console.log(this); // Accoridon {}
  };
  Accordion.prototype._setup = function () {
    // console.log(this); // 상위 컨텍스트 객체를 참조
  };

  // Private
  var defaults = {
    // 활성화 클래스 속성
    active_class: 'is-active',
    // 활성화 인덱스
    active_index: null,
    // 모든 패널 접음
    close_all: true,
    // 라디오 기능 활성화
    radio: false,
    // 애니메이션 활성화
    animate: false,
    // 애니메이션 지속시간
    duration: 300,
    // 애니메이션 이징
    // jquery.easing 사용 가능
    // 참고: http://easings.net/ko
    easing: 'swing'

    // [ES6], OOJS
    // JAVA, C# 객체지향언어의 class, sugar syntax 제공
  };
  var AccordionClass = function () {
    function AccordionClass(element, options) {
      _classCallCheck(this, AccordionClass);

      this.$el = $(element);
      // JavaScript 믹스인(Mixin) Pattern
      this.options = $.extend(true, {}, defaults, options);
      // Accordion 컴포넌트 초기화
      this._init();
    }
    // static(class) method | utility method
    // 객체 생성 없이 사용 가능한 메서드


    _createClass(AccordionClass, [{
      key: '_init',

      // prototype: instance methods
      // 생성된 객체만 사용 가능한 공통 메서드
      value: function _init() {
        this._setup();
      }
    }, {
      key: '_setup',
      value: function _setup() {
        console.log(this);
      }
    }], [{
      key: 'type',
      value: function type() {
        return Object.prototype.toString.call(d).toLowerCase().slice(8, -1);
      }
    }, {
      key: 'queryAll',
      value: function queryAll(s) {
        return document.querySelectorAll(s);
      }
    }, {
      key: 'query',
      value: function query(s) {
        return document.querySelector(s);
      }
    }]);

    return AccordionClass;
  }();

  // - AccordionItem f

  // 모듈 내, 오픈할 API 공개


  kipfa.Accordion = Accordion;
  kipfa.AccordionClass = AccordionClass;
})(window, window.jQuery, window.kipfa = window.kipfa || {});