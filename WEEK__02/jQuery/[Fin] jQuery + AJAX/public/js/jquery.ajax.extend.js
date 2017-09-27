/*! jquery.ajax.extend.js @ 2017, yamoo9.net */
(function(global, $){
  'use strict';

  // 해당 확장이 이미 존재하는가?
  if ( !$ ) {throw 'jQuery를 먼저 호출해야 합니다.'}
  if ( !$.delete || !$.put ) {
    $.extend($, {
      put: function(url, success){
        $.ajax({
          url: url,
          method: 'PUT',
          dataType: 'json',
          success: success
        });
      },
      delete: function(url, success){
        $.ajax({
          url: url,
          method: 'DELETE',
          dataType: 'json',
          success: success
        });
      }
    });
  }

})(window, window.jQuery);