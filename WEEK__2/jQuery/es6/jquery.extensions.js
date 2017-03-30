/*! jQuery.extentions.js © yamoo9.net, 2017 */
(function(global, $){
  'use strict';

  var document = global.document;

  /////////////
  // 유틸리티 확장
  /////////////

  if ( !$.version ) {
    $.version = $.fn.jquery;
  }

  if ( !$.isNumber ) {
    $.isNumber = $.isNumeric;
  }

  // 표준 모드인지 감지하는 $.isStandardMode
  if ( !$.isStandardMode ) {
    $.isStandardMode = document.compatMode === 'CSS1Compat';
  }

  // 고해상도 디스플레이 유무 감지
  // (비)공개 함수와 공개 스태틱 메서드
  if ( !$.getPixelDensity ) {

    // ES6 Arrow Function
    // $.getPixelDensity = ()=> {
    //   return global.devicePixelRatio || 1;
    // };

    // ES6 Arrow Function 변경 버전 (return / {},  생략)
    $.getPixelDensity = ()=> global.devicePixelRatio || 1;

    // is, has 접두사 이름의 함수는 boolean 값을 반환
    $.isHiDPI = ()=> $.getPixelDensity() > 1;
  }

  // 논리합(OR) 연산자 사용 (if 사용 안함)
  $.isBoolean = $.isBoolean || (d => $.type(d) === 'boolean');

  $.changeArray = (data) => {
    // Array Class's Static Methods
    // Array.isArray
    // Array.from
    if ( Array.from ) {
      return Array.from(data);
    } else {
      return $.makeArray(data);
    }
  };


  /////////////
  // 인스턴스 확장
  /////////////

  // CSS Attribute Control
  // .addClass    -----> .classList.add
  // .removeClass -----> .classList.remove
  // .hasClass    -----> .classList.contains
  // .toggleClass -----> .classList.toggle
  // .radioClass  -----> ???

  if ( !$.fn.radioClass ) {
    $.fn.radioClass = function(activeClass) {
      // this === jQuery {}
      // console.log(this.text());

      // this는 사용자가 클릭한 <p> 요소
      // 같은 부모를 둔 형제 요소 중,
      // 활성화(is-active) 클래스를 가진
      // 요소가 있다면? 제거 후에
      // this 자신에게 활성화 클래스를 부여

      this
        .siblings('.' + activeClass)
        .removeClass(activeClass);

      this.addClass(activeClass);

      // jQuery 메서드 체이닝 목적으로
      // this 반환
      return this;
    };
  }


})(window, window.jQuery);
