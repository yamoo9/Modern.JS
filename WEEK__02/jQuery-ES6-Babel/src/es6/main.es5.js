// Print jQuery Version
// Factory 함수
// 캡슐화 (함수 스코프)
// 모듈 패턴 (IIFE)
(function ($) {

  // constructor vs prototype
  // jQuery.prototype
  // $.prototype
  // $.fn
  console.log($.fn.jquery);

  // $.fn VS $()
  // $.fn === jQuery 프로토타입 객체
  // $()  === jQuery {}
  console.log($().jquery);

}) //(window.jQuery);

// jQuery 프로그래밍
jQuery(document).ready(function ($) {
  // 캡슐화 $ === jQuery
  // .toggle-radio-container 내부의 button을 클릭하면
  // 클릭된 버튼은 활성화(시각적 표시), 다른 버튼은 비활성화

  // 1. 문서 객체 수집한 후, jQuery 객체화
  var buttons = $('button', '.toggle-radio-container');
  var active_class = 'is-loading';
  // 2. 이벤트 핸들러 정의
  var toggleRadioButton = function (e) {
    // 변수 참조
    var $this = $(this);
    // 클릭한 버튼의 형제들 중에 활성화된 것이 있다면
    // 비활성화를 한다.
    $this.siblings('.' + active_class).removeClass(active_class)
    // 메서드 체이닝(권장 X)
    // $(this)
    //   .siblings('.' + active_class)
    //   .removeClass(active_class)
    //   .end()
    //   .addClass(active_class);

    // 클릭한 버튼 활성화
    $this.addClass(active_class);
  };

  // 3. 수집된 jQuery객체에 이벤트 바인딩
  buttons.each(function (index, button) {
    $(button).on('click', toggleRadioButton);
  });

});