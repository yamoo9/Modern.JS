'use strict';

// JavaScript Module Pattern (IIFE)
;(function (global, $) {
  'use strict';

  var count = 101920;

  // jQuery 확장 여부 확인
  console.log('jQuery Version is', $.version);
  console.log('jQuery.isNumber(count)', $.isNumber(count));
  console.log('jQuery.isStandardMode:', $.isStandardMode);
  console.log('jQuery.getPixelDensity():', $.getPixelDensity());
  console.log('jQuery.isHiDPI():', $.isHiDPI());

  console.log('$.isBoolean(count):', $.isBoolean(count));

  var $wrapper_paras = $('.container').find('p');

  $.each($wrapper_paras, function (index) {
    var $p = $wrapper_paras.eq(index);

    // $p.on('click', function() {
    //   $(this).radioClass('is-active');
    // });

    // jQuery
    $p.on('click', $.proxy($.fn.radioClass, $p, 'is-on'));
    // ES 5
    // $p.on( 'click', $.fn.radioClass.bind($p) );
  });
})(window, window.jQuery);

(function (global, $) {
  'use strict';

  // Card Component 제어

  var $card = $('.card');

  // 이벤트 위임
  $card.on('click', 'a', function (e) {
    // 기본 동작 차단
    e.preventDefault();
    var $this = $(this);
    if ($this.hasClass('is-toggle')) {
      toggleCardContentView($this);
    }
    if ($this.hasClass('is-save')) {
      saveCardContent();
    }
    if ($this.hasClass('is-edit')) {
      editCardContent();
    }
    if ($this.hasClass('is-delete')) {
      removeCard($this);
    }
    // .card-button.is-toggle
  });

  // $card 관련된 메서드
  function toggleCardContentView($el) {
    var $icon = $el.find('.fa');
    var $content = $el.parents('.card').find('.card-content');
    if ($content.hasClass('is-hidden')) {
      // 버튼 뷰 변경
      $el.attr('aria-label', 'card collapse');
      // 버튼 아이콘 뷰 변경
      $icon.removeClass('fa-angle-up').addClass('fa-angle-down');
    } else {
      $el.attr('aria-label', 'card expand');
      $icon.removeClass('fa-angle-down').addClass('fa-angle-up');
    }
    // 카드 콘텐츠 뷰 변경
    $content.toggleClass('is-hidden');
  }
  function removeCard($el) {
    $el.parents('.card').remove();
  }
  function saveCardContent($el) {}
  function editCardContent($el) {}
})(window, window.jQuery);