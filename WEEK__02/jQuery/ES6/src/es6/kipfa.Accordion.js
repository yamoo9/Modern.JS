/*! kipfa.Accordion.js */
;((global, $, kipfa) => {
  // 엄격 모드 발동
  'use strict';

  // Namespace {}
  // kipfa

  // - Accordion f
  // [ES5], OOJS
  // constructor function
  function Accordion(element, options){
    this.$el = $(element);
    this.options = $.extend(true, {}, defaults, options);
    this._init();
  }

  // Accordion 함수 객체의 속성
  // static(class) method | utility method
  // [ES6], Arrow Function 사용
  Accordion.type = d => Object.prototype.toString.call(d).toLowerCase().slice(8,-1);
  Accordion.query = s => document.querySelector(s);
  Accordion.queryAll = s => document.querySelectorAll(s);

  // prototype object
  Accordion.prototype = {
    constructor: Accordion,
    _init: function(){}
  };
  Accordion.prototype._setup = function () {
    console.log(this); // Accoridon {}
  };
  Accordion.prototype._setup = () => {
    // console.log(this); // 상위 컨텍스트 객체를 참조
  };

  // Private
  const defaults = {
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
  }

  // [ES6], OOJS
  // JAVA, C# 객체지향언어의 class, sugar syntax 제공
  class AccordionClass {
    constructor(element, options){
      this.$el = $(element);
      // JavaScript 믹스인(Mixin) Pattern
      this.options = $.extend(true, {}, defaults, options);
      // Accordion 컴포넌트 초기화
      this._init();
    }
    // static(class) method | utility method
    // 객체 생성 없이 사용 가능한 메서드
    static type(){
      return Object.prototype.toString.call(d).toLowerCase().slice(8, -1);
    }
    static queryAll(s){ return document.querySelectorAll(s); }
    static query(s){ return document.querySelector(s); }
    // prototype: instance methods
    // 생성된 객체만 사용 가능한 공통 메서드
    _init(){
      this._setup();
    }
    _setup(){
      console.log(this);
    }
  }

  // - AccordionItem f

  // 모듈 내, 오픈할 API 공개
  kipfa.Accordion = Accordion;
  kipfa.AccordionClass = AccordionClass;

})( window, window.jQuery, (window.kipfa = window.kipfa || {}) );