
// JavaScript Module Pattern (IIFE)
;(function(global, $){
  'use strict';

  var count = 101920;

  // jQuery 확장 여부 확인
  console.log(
    'jQuery Version is',
    $.version
  );
  console.log(
    'jQuery.isNumber(count)',
    $.isNumber(count)
  );
  console.log(
    'jQuery.isStandardMode:',
    $.isStandardMode
  );
  console.log(
    'jQuery.getPixelDensity():',
    $.getPixelDensity()
  );
  console.log(
    'jQuery.isHiDPI():',
    $.isHiDPI()
  );

  console.log(
    '$.isBoolean(count):',
    $.isBoolean(count)
  );

  var $wrapper_paras = $('.container').find('p');

  $.each($wrapper_paras, function(index) {
    var $p = $wrapper_paras.eq(index);

    // $p.on('click', function() {
    //   $(this).radioClass('is-active');
    // });

    // jQuery
    $p.on( 'click', $.proxy($.fn.radioClass, $p, 'is-on') );
    // ES 5
    // $p.on( 'click', $.fn.radioClass.bind($p) );
  });

})(window, window.jQuery);
